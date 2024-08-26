// Generated from ./Resources/Parsers/algol60/algol60.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import algol60Listener from './algol60Listener.js';
const serializedATN = [4,1,64,776,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
7,85,2,86,7,86,2,87,7,87,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,184,8,1,1,2,1,2,
1,2,1,2,1,2,3,2,191,8,2,1,3,1,3,1,3,3,3,196,8,3,1,4,1,4,1,5,1,5,1,6,1,6,
1,7,1,7,1,7,1,7,1,7,1,7,5,7,210,8,7,10,7,12,7,213,9,7,1,8,1,8,1,9,1,9,1,
9,1,9,1,9,1,10,1,10,3,10,224,8,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,3,12,
233,8,12,1,13,1,13,1,13,1,13,1,13,3,13,240,8,13,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,5,14,249,8,14,10,14,12,14,252,9,14,1,15,1,15,1,15,1,16,1,16,1,
17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,268,8,18,1,19,1,19,1,19,
1,19,1,19,1,19,5,19,276,8,19,10,19,12,19,279,9,19,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,5,20,288,8,20,10,20,12,20,291,9,20,1,21,1,21,1,21,1,21,1,21,
3,21,298,8,21,1,21,1,21,1,21,1,21,5,21,304,8,21,10,21,12,21,307,9,21,1,22,
1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,319,8,23,1,24,1,24,1,24,
1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,3,25,333,8,25,1,26,1,26,1,26,
3,26,338,8,26,1,27,1,27,1,27,1,27,1,27,1,27,5,27,346,8,27,10,27,12,27,349,
9,27,1,28,1,28,1,28,1,28,1,28,1,28,5,28,357,8,28,10,28,12,28,360,9,28,1,
29,1,29,1,29,1,29,1,29,1,29,5,29,368,8,29,10,29,12,29,371,9,29,1,30,1,30,
1,30,1,30,1,30,1,30,5,30,379,8,30,10,30,12,30,382,9,30,1,31,1,31,1,31,1,
31,1,31,1,31,3,31,390,8,31,1,32,1,32,1,33,1,33,1,34,1,34,1,34,1,34,1,34,
1,35,1,35,1,35,1,35,1,35,1,35,3,35,407,8,35,1,36,1,36,1,36,1,36,1,36,1,36,
3,36,415,8,36,1,37,1,37,1,37,1,37,3,37,421,8,37,1,38,1,38,1,38,1,38,1,38,
3,38,428,8,38,1,39,1,39,1,39,3,39,433,8,39,1,40,1,40,1,40,3,40,438,8,40,
1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,447,8,41,1,42,1,42,1,42,1,42,1,42,
1,42,1,42,5,42,456,8,42,10,42,12,42,459,9,42,1,43,1,43,1,43,1,44,1,44,1,
44,1,44,1,45,1,45,1,45,1,45,1,45,3,45,473,8,45,1,46,1,46,1,46,1,46,1,46,
3,46,480,8,46,1,47,1,47,3,47,484,8,47,1,47,1,47,1,48,1,48,3,48,490,8,48,
1,49,1,49,1,49,1,49,1,49,1,49,3,49,498,8,49,1,50,1,50,1,50,1,50,1,50,5,50,
505,8,50,10,50,12,50,508,9,50,1,51,1,51,1,51,1,51,1,51,1,51,3,51,516,8,51,
1,52,1,52,1,52,1,53,1,53,1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,55,1,
55,1,55,1,55,1,55,1,55,1,55,3,55,538,8,55,1,56,1,56,1,56,1,56,1,56,1,56,
1,56,1,56,1,56,1,56,1,56,3,56,551,8,56,1,57,1,57,1,57,1,57,1,57,1,57,5,57,
559,8,57,10,57,12,57,562,9,57,1,58,1,58,1,58,1,58,1,58,1,58,1,59,1,59,1,
59,1,59,1,59,1,59,1,59,3,59,577,8,59,1,60,1,60,1,60,1,60,1,60,3,60,584,8,
60,1,61,1,61,1,61,1,62,5,62,590,8,62,10,62,12,62,593,9,62,1,63,1,63,1,63,
1,63,3,63,599,8,63,1,64,1,64,1,64,1,64,1,64,3,64,606,8,64,1,65,1,65,1,66,
1,66,3,66,612,8,66,1,67,1,67,1,67,1,67,1,68,1,68,1,69,1,69,1,70,1,70,1,70,
1,70,1,71,1,71,1,71,1,71,1,71,1,71,5,71,632,8,71,10,71,12,71,635,9,71,1,
72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,1,72,3,72,646,8,72,1,73,1,73,1,73,
1,73,1,73,1,73,5,73,654,8,73,10,73,12,73,657,9,73,1,74,1,74,1,74,1,74,3,
74,663,8,74,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,1,76,5,76,675,8,
76,10,76,12,76,678,9,76,1,77,1,77,1,77,1,77,1,77,1,78,1,78,1,79,1,79,1,79,
1,79,1,79,1,79,1,79,5,79,694,8,79,10,79,12,79,697,9,79,1,80,1,80,1,80,1,
80,1,80,3,80,704,8,80,1,81,1,81,1,81,1,81,1,81,1,81,5,81,712,8,81,10,81,
12,81,715,9,81,1,82,1,82,1,82,1,82,1,82,3,82,722,8,82,1,83,1,83,1,83,1,83,
1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,83,3,83,736,8,83,1,84,1,84,1,84,1,84,
1,84,1,84,3,84,744,8,84,1,84,1,84,1,84,1,84,5,84,750,8,84,10,84,12,84,753,
9,84,1,85,1,85,1,85,1,85,1,85,1,85,1,86,1,86,3,86,763,8,86,1,87,1,87,1,87,
1,87,1,87,1,87,1,87,1,87,1,87,3,87,774,8,87,1,87,0,18,14,28,38,40,42,54,
56,58,60,84,100,114,142,146,152,158,162,168,88,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,
148,150,152,154,156,158,160,162,164,166,168,170,172,174,0,4,2,0,42,42,47,
47,2,0,30,30,43,43,1,0,57,58,3,0,3,3,12,12,16,16,773,0,176,1,0,0,0,2,183,
1,0,0,0,4,190,1,0,0,0,6,195,1,0,0,0,8,197,1,0,0,0,10,199,1,0,0,0,12,201,
1,0,0,0,14,203,1,0,0,0,16,214,1,0,0,0,18,216,1,0,0,0,20,223,1,0,0,0,22,225,
1,0,0,0,24,232,1,0,0,0,26,239,1,0,0,0,28,241,1,0,0,0,30,253,1,0,0,0,32,256,
1,0,0,0,34,258,1,0,0,0,36,267,1,0,0,0,38,269,1,0,0,0,40,280,1,0,0,0,42,297,
1,0,0,0,44,308,1,0,0,0,46,318,1,0,0,0,48,320,1,0,0,0,50,332,1,0,0,0,52,337,
1,0,0,0,54,339,1,0,0,0,56,350,1,0,0,0,58,361,1,0,0,0,60,372,1,0,0,0,62,389,
1,0,0,0,64,391,1,0,0,0,66,393,1,0,0,0,68,395,1,0,0,0,70,406,1,0,0,0,72,414,
1,0,0,0,74,420,1,0,0,0,76,427,1,0,0,0,78,432,1,0,0,0,80,437,1,0,0,0,82,446,
1,0,0,0,84,448,1,0,0,0,86,460,1,0,0,0,88,463,1,0,0,0,90,472,1,0,0,0,92,479,
1,0,0,0,94,483,1,0,0,0,96,489,1,0,0,0,98,497,1,0,0,0,100,499,1,0,0,0,102,
515,1,0,0,0,104,517,1,0,0,0,106,520,1,0,0,0,108,522,1,0,0,0,110,537,1,0,
0,0,112,550,1,0,0,0,114,552,1,0,0,0,116,563,1,0,0,0,118,576,1,0,0,0,120,
583,1,0,0,0,122,585,1,0,0,0,124,591,1,0,0,0,126,598,1,0,0,0,128,605,1,0,
0,0,130,607,1,0,0,0,132,611,1,0,0,0,134,613,1,0,0,0,136,617,1,0,0,0,138,
619,1,0,0,0,140,621,1,0,0,0,142,625,1,0,0,0,144,645,1,0,0,0,146,647,1,0,
0,0,148,662,1,0,0,0,150,664,1,0,0,0,152,668,1,0,0,0,154,679,1,0,0,0,156,
684,1,0,0,0,158,686,1,0,0,0,160,703,1,0,0,0,162,705,1,0,0,0,164,721,1,0,
0,0,166,735,1,0,0,0,168,743,1,0,0,0,170,754,1,0,0,0,172,762,1,0,0,0,174,
773,1,0,0,0,176,177,1,0,0,0,177,1,1,0,0,0,178,184,5,58,0,0,179,180,5,47,
0,0,180,184,5,58,0,0,181,182,5,42,0,0,182,184,5,58,0,0,183,178,1,0,0,0,183,
179,1,0,0,0,183,181,1,0,0,0,184,3,1,0,0,0,185,191,5,62,0,0,186,187,5,47,
0,0,187,191,5,62,0,0,188,189,5,42,0,0,189,191,5,62,0,0,190,185,1,0,0,0,190,
186,1,0,0,0,190,188,1,0,0,0,191,5,1,0,0,0,192,196,3,46,23,0,193,196,3,62,
31,0,194,196,3,72,36,0,195,192,1,0,0,0,195,193,1,0,0,0,195,194,1,0,0,0,196,
7,1,0,0,0,197,198,5,57,0,0,198,9,1,0,0,0,199,200,3,8,4,0,200,11,1,0,0,0,
201,202,3,46,23,0,202,13,1,0,0,0,203,204,6,7,-1,0,204,205,3,12,6,0,205,211,
1,0,0,0,206,207,10,1,0,0,207,208,5,28,0,0,208,210,3,12,6,0,209,206,1,0,0,
0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,1,0,0,0,212,15,1,0,0,0,213,211,
1,0,0,0,214,215,5,57,0,0,215,17,1,0,0,0,216,217,3,16,8,0,217,218,5,38,0,
0,218,219,3,14,7,0,219,220,5,48,0,0,220,19,1,0,0,0,221,224,3,10,5,0,222,
224,3,18,9,0,223,221,1,0,0,0,223,222,1,0,0,0,224,21,1,0,0,0,225,226,5,57,
0,0,226,23,1,0,0,0,227,233,5,28,0,0,228,229,5,49,0,0,229,230,5,57,0,0,230,
231,5,27,0,0,231,233,5,40,0,0,232,227,1,0,0,0,232,228,1,0,0,0,233,25,1,0,
0,0,234,240,5,63,0,0,235,240,3,6,3,0,236,240,3,16,8,0,237,240,3,66,33,0,
238,240,3,22,11,0,239,234,1,0,0,0,239,235,1,0,0,0,239,236,1,0,0,0,239,237,
1,0,0,0,239,238,1,0,0,0,240,27,1,0,0,0,241,242,6,14,-1,0,242,243,3,26,13,
0,243,250,1,0,0,0,244,245,10,1,0,0,245,246,3,24,12,0,246,247,3,26,13,0,247,
249,1,0,0,0,248,244,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,1,0,
0,0,251,29,1,0,0,0,252,250,1,0,0,0,253,254,3,22,11,0,254,255,3,120,60,0,
255,31,1,0,0,0,256,257,7,0,0,0,257,33,1,0,0,0,258,259,7,1,0,0,259,35,1,0,
0,0,260,268,5,62,0,0,261,268,3,20,10,0,262,268,3,30,15,0,263,264,5,40,0,
0,264,265,3,46,23,0,265,266,5,49,0,0,266,268,1,0,0,0,267,260,1,0,0,0,267,
261,1,0,0,0,267,262,1,0,0,0,267,263,1,0,0,0,268,37,1,0,0,0,269,270,6,19,
-1,0,270,271,3,36,18,0,271,277,1,0,0,0,272,273,10,1,0,0,273,274,5,34,0,0,
274,276,3,36,18,0,275,272,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,
1,0,0,0,278,39,1,0,0,0,279,277,1,0,0,0,280,281,6,20,-1,0,281,282,3,38,19,
0,282,289,1,0,0,0,283,284,10,1,0,0,284,285,3,34,17,0,285,286,3,38,19,0,286,
288,1,0,0,0,287,283,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,
0,0,290,41,1,0,0,0,291,289,1,0,0,0,292,293,6,21,-1,0,293,298,3,40,20,0,294,
295,3,32,16,0,295,296,3,40,20,0,296,298,1,0,0,0,297,292,1,0,0,0,297,294,
1,0,0,0,298,305,1,0,0,0,299,300,10,1,0,0,300,301,3,32,16,0,301,302,3,40,
20,0,302,304,1,0,0,0,303,299,1,0,0,0,304,307,1,0,0,0,305,303,1,0,0,0,305,
306,1,0,0,0,306,43,1,0,0,0,307,305,1,0,0,0,308,309,5,11,0,0,309,310,3,62,
31,0,310,311,5,20,0,0,311,45,1,0,0,0,312,319,3,42,21,0,313,314,3,44,22,0,
314,315,3,42,21,0,315,316,5,6,0,0,316,317,3,46,23,0,317,319,1,0,0,0,318,
312,1,0,0,0,318,313,1,0,0,0,319,47,1,0,0,0,320,321,3,42,21,0,321,322,5,55,
0,0,322,323,3,42,21,0,323,49,1,0,0,0,324,333,5,54,0,0,325,333,3,20,10,0,
326,333,3,30,15,0,327,333,3,48,24,0,328,329,5,40,0,0,329,330,3,62,31,0,330,
331,5,49,0,0,331,333,1,0,0,0,332,324,1,0,0,0,332,325,1,0,0,0,332,326,1,0,
0,0,332,327,1,0,0,0,332,328,1,0,0,0,333,51,1,0,0,0,334,338,3,50,25,0,335,
336,5,45,0,0,336,338,3,50,25,0,337,334,1,0,0,0,337,335,1,0,0,0,338,53,1,
0,0,0,339,340,6,27,-1,0,340,341,3,52,26,0,341,347,1,0,0,0,342,343,10,1,0,
0,343,344,5,25,0,0,344,346,3,52,26,0,345,342,1,0,0,0,346,349,1,0,0,0,347,
345,1,0,0,0,347,348,1,0,0,0,348,55,1,0,0,0,349,347,1,0,0,0,350,351,6,28,
-1,0,351,352,3,54,27,0,352,358,1,0,0,0,353,354,10,1,0,0,354,355,5,46,0,0,
355,357,3,54,27,0,356,353,1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,358,359,
1,0,0,0,359,57,1,0,0,0,360,358,1,0,0,0,361,362,6,29,-1,0,362,363,3,56,28,
0,363,369,1,0,0,0,364,365,10,1,0,0,365,366,5,37,0,0,366,368,3,56,28,0,367,
364,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,59,1,0,0,
0,371,369,1,0,0,0,372,373,6,30,-1,0,373,374,3,58,29,0,374,380,1,0,0,0,375,
376,10,1,0,0,376,377,5,33,0,0,377,379,3,58,29,0,378,375,1,0,0,0,379,382,
1,0,0,0,380,378,1,0,0,0,380,381,1,0,0,0,381,61,1,0,0,0,382,380,1,0,0,0,383,
390,3,60,30,0,384,385,3,44,22,0,385,386,3,60,30,0,386,387,5,6,0,0,387,388,
3,62,31,0,388,390,1,0,0,0,389,383,1,0,0,0,389,384,1,0,0,0,390,63,1,0,0,0,
391,392,7,2,0,0,392,65,1,0,0,0,393,394,5,57,0,0,394,67,1,0,0,0,395,396,3,
66,33,0,396,397,5,38,0,0,397,398,3,12,6,0,398,399,5,48,0,0,399,69,1,0,0,
0,400,407,3,64,32,0,401,407,3,68,34,0,402,403,5,40,0,0,403,404,3,72,36,0,
404,405,5,49,0,0,405,407,1,0,0,0,406,400,1,0,0,0,406,401,1,0,0,0,406,402,
1,0,0,0,407,71,1,0,0,0,408,415,3,70,35,0,409,410,3,44,22,0,410,411,3,70,
35,0,411,412,5,6,0,0,412,413,3,72,36,0,413,415,1,0,0,0,414,408,1,0,0,0,414,
409,1,0,0,0,415,73,1,0,0,0,416,421,3,102,51,0,417,421,3,104,52,0,418,421,
3,106,53,0,419,421,3,122,61,0,420,416,1,0,0,0,420,417,1,0,0,0,420,418,1,
0,0,0,420,419,1,0,0,0,421,75,1,0,0,0,422,428,3,74,37,0,423,424,3,64,32,0,
424,425,5,27,0,0,425,426,3,76,38,0,426,428,1,0,0,0,427,422,1,0,0,0,427,423,
1,0,0,0,428,77,1,0,0,0,429,433,3,76,38,0,430,433,3,90,45,0,431,433,3,92,
46,0,432,429,1,0,0,0,432,430,1,0,0,0,432,431,1,0,0,0,433,79,1,0,0,0,434,
438,3,78,39,0,435,438,3,110,55,0,436,438,3,118,59,0,437,434,1,0,0,0,437,
435,1,0,0,0,437,436,1,0,0,0,438,81,1,0,0,0,439,440,3,80,40,0,440,441,5,7,
0,0,441,447,1,0,0,0,442,443,3,80,40,0,443,444,5,50,0,0,444,445,3,82,41,0,
445,447,1,0,0,0,446,439,1,0,0,0,446,442,1,0,0,0,447,83,1,0,0,0,448,449,6,
42,-1,0,449,450,5,2,0,0,450,451,3,126,63,0,451,457,1,0,0,0,452,453,10,1,
0,0,453,454,5,50,0,0,454,456,3,126,63,0,455,452,1,0,0,0,456,459,1,0,0,0,
457,455,1,0,0,0,457,458,1,0,0,0,458,85,1,0,0,0,459,457,1,0,0,0,460,461,5,
2,0,0,461,462,3,82,41,0,462,87,1,0,0,0,463,464,3,84,42,0,464,465,5,50,0,
0,465,466,3,82,41,0,466,89,1,0,0,0,467,473,3,86,43,0,468,469,3,64,32,0,469,
470,5,27,0,0,470,471,3,90,45,0,471,473,1,0,0,0,472,467,1,0,0,0,472,468,1,
0,0,0,473,91,1,0,0,0,474,480,3,88,44,0,475,476,3,64,32,0,476,477,5,27,0,
0,477,478,3,92,46,0,478,480,1,0,0,0,479,474,1,0,0,0,479,475,1,0,0,0,480,
93,1,0,0,0,481,484,3,92,46,0,482,484,3,90,45,0,483,481,1,0,0,0,483,482,1,
0,0,0,484,485,1,0,0,0,485,486,5,0,0,1,486,95,1,0,0,0,487,490,3,20,10,0,488,
490,3,22,11,0,489,487,1,0,0,0,489,488,1,0,0,0,490,97,1,0,0,0,491,492,3,20,
10,0,492,493,5,26,0,0,493,498,1,0,0,0,494,495,3,22,11,0,495,496,5,26,0,0,
496,498,1,0,0,0,497,491,1,0,0,0,497,494,1,0,0,0,498,99,1,0,0,0,499,500,6,
50,-1,0,500,501,3,98,49,0,501,506,1,0,0,0,502,503,10,1,0,0,503,505,3,98,
49,0,504,502,1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,507,1,0,0,0,507,
101,1,0,0,0,508,506,1,0,0,0,509,510,3,100,50,0,510,511,3,46,23,0,511,516,
1,0,0,0,512,513,3,100,50,0,513,514,3,62,31,0,514,516,1,0,0,0,515,509,1,0,
0,0,515,512,1,0,0,0,516,103,1,0,0,0,517,518,5,10,0,0,518,519,3,72,36,0,519,
105,1,0,0,0,520,521,3,0,0,0,521,107,1,0,0,0,522,523,3,44,22,0,523,524,3,
78,39,0,524,109,1,0,0,0,525,538,3,108,54,0,526,527,3,108,54,0,527,528,5,
6,0,0,528,529,3,80,40,0,529,538,1,0,0,0,530,531,3,44,22,0,531,532,3,118,
59,0,532,538,1,0,0,0,533,534,3,64,32,0,534,535,5,27,0,0,535,536,3,110,55,
0,536,538,1,0,0,0,537,525,1,0,0,0,537,526,1,0,0,0,537,530,1,0,0,0,537,533,
1,0,0,0,538,111,1,0,0,0,539,551,3,46,23,0,540,541,3,46,23,0,541,542,5,17,
0,0,542,543,3,46,23,0,543,544,5,22,0,0,544,545,3,46,23,0,545,551,1,0,0,0,
546,547,3,46,23,0,547,548,5,24,0,0,548,549,3,62,31,0,549,551,1,0,0,0,550,
539,1,0,0,0,550,540,1,0,0,0,550,546,1,0,0,0,551,113,1,0,0,0,552,553,6,57,
-1,0,553,554,3,112,56,0,554,560,1,0,0,0,555,556,10,1,0,0,556,557,5,28,0,
0,557,559,3,112,56,0,558,555,1,0,0,0,559,562,1,0,0,0,560,558,1,0,0,0,560,
561,1,0,0,0,561,115,1,0,0,0,562,560,1,0,0,0,563,564,5,9,0,0,564,565,3,20,
10,0,565,566,5,26,0,0,566,567,3,114,57,0,567,568,5,5,0,0,568,117,1,0,0,0,
569,570,3,116,58,0,570,571,3,80,40,0,571,577,1,0,0,0,572,573,3,64,32,0,573,
574,5,27,0,0,574,575,3,118,59,0,575,577,1,0,0,0,576,569,1,0,0,0,576,572,
1,0,0,0,577,119,1,0,0,0,578,584,3,0,0,0,579,580,5,40,0,0,580,581,3,28,14,
0,581,582,5,49,0,0,582,584,1,0,0,0,583,578,1,0,0,0,583,579,1,0,0,0,584,121,
1,0,0,0,585,586,3,22,11,0,586,587,3,120,60,0,587,123,1,0,0,0,588,590,9,0,
0,0,589,588,1,0,0,0,590,593,1,0,0,0,591,589,1,0,0,0,591,592,1,0,0,0,592,
125,1,0,0,0,593,591,1,0,0,0,594,599,3,134,67,0,595,599,3,150,75,0,596,599,
3,154,77,0,597,599,3,174,87,0,598,594,1,0,0,0,598,595,1,0,0,0,598,596,1,
0,0,0,598,597,1,0,0,0,599,127,1,0,0,0,600,606,3,10,5,0,601,602,3,10,5,0,
602,603,5,28,0,0,603,604,3,128,64,0,604,606,1,0,0,0,605,600,1,0,0,0,605,
601,1,0,0,0,606,129,1,0,0,0,607,608,7,3,0,0,608,131,1,0,0,0,609,612,3,0,
0,0,610,612,5,14,0,0,611,609,1,0,0,0,611,610,1,0,0,0,612,133,1,0,0,0,613,
614,3,132,66,0,614,615,3,130,65,0,615,616,3,128,64,0,616,135,1,0,0,0,617,
618,3,46,23,0,618,137,1,0,0,0,619,620,3,46,23,0,620,139,1,0,0,0,621,622,
3,136,68,0,622,623,5,27,0,0,623,624,3,138,69,0,624,141,1,0,0,0,625,626,6,
71,-1,0,626,627,3,140,70,0,627,633,1,0,0,0,628,629,10,1,0,0,629,630,5,28,
0,0,630,632,3,140,70,0,631,628,1,0,0,0,632,635,1,0,0,0,633,631,1,0,0,0,633,
634,1,0,0,0,634,143,1,0,0,0,635,633,1,0,0,0,636,637,3,16,8,0,637,638,5,38,
0,0,638,639,3,142,71,0,639,640,5,48,0,0,640,646,1,0,0,0,641,642,3,16,8,0,
642,643,5,28,0,0,643,644,3,144,72,0,644,646,1,0,0,0,645,636,1,0,0,0,645,
641,1,0,0,0,646,145,1,0,0,0,647,648,6,73,-1,0,648,649,3,144,72,0,649,655,
1,0,0,0,650,651,10,1,0,0,651,652,5,28,0,0,652,654,3,144,72,0,653,650,1,0,
0,0,654,657,1,0,0,0,655,653,1,0,0,0,655,656,1,0,0,0,656,147,1,0,0,0,657,
655,1,0,0,0,658,659,3,130,65,0,659,660,5,1,0,0,660,663,1,0,0,0,661,663,5,
1,0,0,662,658,1,0,0,0,662,661,1,0,0,0,663,149,1,0,0,0,664,665,3,132,66,0,
665,666,3,148,74,0,666,667,3,146,73,0,667,151,1,0,0,0,668,669,6,76,-1,0,
669,670,3,72,36,0,670,676,1,0,0,0,671,672,10,1,0,0,672,673,5,28,0,0,673,
675,3,72,36,0,674,671,1,0,0,0,675,678,1,0,0,0,676,674,1,0,0,0,676,677,1,
0,0,0,677,153,1,0,0,0,678,676,1,0,0,0,679,680,5,19,0,0,680,681,3,66,33,0,
681,682,5,26,0,0,682,683,3,152,76,0,683,155,1,0,0,0,684,685,5,57,0,0,685,
157,1,0,0,0,686,687,6,79,-1,0,687,688,3,156,78,0,688,695,1,0,0,0,689,690,
10,1,0,0,690,691,3,24,12,0,691,692,3,156,78,0,692,694,1,0,0,0,693,689,1,
0,0,0,694,697,1,0,0,0,695,693,1,0,0,0,695,696,1,0,0,0,696,159,1,0,0,0,697,
695,1,0,0,0,698,704,3,0,0,0,699,700,5,40,0,0,700,701,3,158,79,0,701,702,
5,49,0,0,702,704,1,0,0,0,703,698,1,0,0,0,703,699,1,0,0,0,704,161,1,0,0,0,
705,706,6,81,-1,0,706,707,5,57,0,0,707,713,1,0,0,0,708,709,10,1,0,0,709,
710,5,28,0,0,710,712,5,57,0,0,711,708,1,0,0,0,712,715,1,0,0,0,713,711,1,
0,0,0,713,714,1,0,0,0,714,163,1,0,0,0,715,713,1,0,0,0,716,717,5,23,0,0,717,
718,3,162,81,0,718,719,5,50,0,0,719,722,1,0,0,0,720,722,3,0,0,0,721,716,
1,0,0,0,721,720,1,0,0,0,722,165,1,0,0,0,723,736,5,18,0,0,724,736,3,130,65,
0,725,736,5,1,0,0,726,727,3,130,65,0,727,728,5,1,0,0,728,736,1,0,0,0,729,
736,5,13,0,0,730,736,5,19,0,0,731,736,5,15,0,0,732,733,3,130,65,0,733,734,
5,15,0,0,734,736,1,0,0,0,735,723,1,0,0,0,735,724,1,0,0,0,735,725,1,0,0,0,
735,726,1,0,0,0,735,729,1,0,0,0,735,730,1,0,0,0,735,731,1,0,0,0,735,732,
1,0,0,0,736,167,1,0,0,0,737,738,6,84,-1,0,738,744,3,0,0,0,739,740,3,166,
83,0,740,741,3,162,81,0,741,742,5,50,0,0,742,744,1,0,0,0,743,737,1,0,0,0,
743,739,1,0,0,0,744,751,1,0,0,0,745,746,10,1,0,0,746,747,3,166,83,0,747,
748,3,162,81,0,748,750,1,0,0,0,749,745,1,0,0,0,750,753,1,0,0,0,751,749,1,
0,0,0,751,752,1,0,0,0,752,169,1,0,0,0,753,751,1,0,0,0,754,755,3,22,11,0,
755,756,3,160,80,0,756,757,5,50,0,0,757,758,3,164,82,0,758,759,3,168,84,
0,759,171,1,0,0,0,760,763,3,80,40,0,761,763,3,124,62,0,762,760,1,0,0,0,762,
761,1,0,0,0,763,173,1,0,0,0,764,765,5,15,0,0,765,766,3,170,85,0,766,767,
3,172,86,0,767,774,1,0,0,0,768,769,3,130,65,0,769,770,5,15,0,0,770,771,3,
170,85,0,771,772,3,172,86,0,772,774,1,0,0,0,773,764,1,0,0,0,773,768,1,0,
0,0,774,175,1,0,0,0,59,183,190,195,211,223,232,239,250,267,277,289,297,305,
318,332,337,347,358,369,380,389,406,414,420,427,432,437,446,457,472,479,
483,489,497,506,515,537,550,560,576,583,591,598,605,611,633,645,655,662,
676,695,703,713,721,735,743,751,762,773];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class algol60Parser extends antlr4.Parser {

    static grammarFileName = "algol60.g4";
    static literalNames = [ null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "':='", "':'", "','", "'.'", null, 
                            "'^='", "'='", "'\\u2261'", null, "'>'", null, 
                            "'\\u2283'", "'['", null, "'('", "'<'", null, 
                            null, null, null, null, "'+'", "']'", "')'", 
                            "';'", "'_'" ];
    static symbolicNames = [ null, "Array_", "Begin_", "Boolean_", "Comment_", 
                             "Do_", "Else_", "End_", "False_", "For_", "Goto_", 
                             "If_", "Integer_", "Label_", "Own_", "Procedure_", 
                             "Real_", "Step_", "String_", "Switch_", "Then_", 
                             "True_", "Until_", "Value_", "While_", "And_", 
                             "Assign_", "Colon_", "Comma_", "Dot_", "Divide_", 
                             "Eor_", "Eq_", "Equiv_", "Exp_", "Gt_", "Ge_", 
                             "Includes_", "Lb_", "Le_", "LP_", "Lt_", "Minus_", 
                             "Mult_", "Ne_", "Not_", "Or_", "Plus_", "Rb_", 
                             "Rp_", "Semi_", "Underscore_", "ULCorner", 
                             "URCorner", "Logical_value", "Relational_operator", 
                             "Comment", "Identifier", "Unsigned_integer", 
                             "Decimal_fraction", "Exponential_part", "Decimal_number", 
                             "Unsigned_number", "String", "WS" ];
    static ruleNames = [ "empty_", "integer", "number", "expression", "variable_identifier", 
                         "simple_variable", "subscript_expression", "subscript_list", 
                         "array_identifier", "subscripted_variable", "variable", 
                         "procedure_identifier", "parameter_delimiter", 
                         "actual_parameter", "actual_parameter_list", "function_designator", 
                         "adding_operator", "multiplying_operator", "primary", 
                         "factor", "term", "simple_arithmetic_expression", 
                         "if_clause", "arithmetic_expression", "relation", 
                         "boolean_primary", "boolean_secondary", "boolean_factor", 
                         "boolean_term", "implication", "simple_boolean", 
                         "boolean_expression", "label", "switch_identifier", 
                         "switch_designator", "simple_designational_expression", 
                         "designational_expression", "unlabelled_basic_statement", 
                         "basic_statement", "unconditional_statement", "statement", 
                         "compound_tail", "block_head", "unlabelled_compound", 
                         "unlabelled_block", "compound_statement", "block", 
                         "program", "destination", "left_part", "left_part_list", 
                         "assignment_statement", "go_to_statement", "dummy_statement", 
                         "if_statement", "conditional_statement", "for_list_element", 
                         "for_list", "for_clause", "for_statement", "actual_parameter_part", 
                         "procedure_statement", "code", "declaration", "type_list", 
                         "type_", "local_or_own", "type_declaration", "lower_bound", 
                         "upper_bound", "bound_pair", "bound_pair_list", 
                         "array_segment", "array_list", "array_declarer", 
                         "array_declaration", "switch_list", "switch_declaration", 
                         "formal_parameter", "formal_parameter_list", "formal_parameter_part", 
                         "identifier_list", "value_part", "specifier", "specification_part", 
                         "procedure_heading", "procedure_body", "procedure_declaration" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = algol60Parser.ruleNames;
        this.literalNames = algol60Parser.literalNames;
        this.symbolicNames = algol60Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.subscript_list_sempred(localctx, predIndex);
    	case 14:
    	    		return this.actual_parameter_list_sempred(localctx, predIndex);
    	case 19:
    	    		return this.factor_sempred(localctx, predIndex);
    	case 20:
    	    		return this.term_sempred(localctx, predIndex);
    	case 21:
    	    		return this.simple_arithmetic_expression_sempred(localctx, predIndex);
    	case 27:
    	    		return this.boolean_factor_sempred(localctx, predIndex);
    	case 28:
    	    		return this.boolean_term_sempred(localctx, predIndex);
    	case 29:
    	    		return this.implication_sempred(localctx, predIndex);
    	case 30:
    	    		return this.simple_boolean_sempred(localctx, predIndex);
    	case 42:
    	    		return this.block_head_sempred(localctx, predIndex);
    	case 50:
    	    		return this.left_part_list_sempred(localctx, predIndex);
    	case 57:
    	    		return this.for_list_sempred(localctx, predIndex);
    	case 71:
    	    		return this.bound_pair_list_sempred(localctx, predIndex);
    	case 73:
    	    		return this.array_list_sempred(localctx, predIndex);
    	case 76:
    	    		return this.switch_list_sempred(localctx, predIndex);
    	case 79:
    	    		return this.formal_parameter_list_sempred(localctx, predIndex);
    	case 81:
    	    		return this.identifier_list_sempred(localctx, predIndex);
    	case 84:
    	    		return this.specification_part_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    subscript_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    actual_parameter_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    factor_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    term_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    simple_arithmetic_expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    boolean_factor_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    boolean_term_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 6:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    implication_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 7:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    simple_boolean_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    block_head_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 9:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    left_part_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 10:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    for_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 11:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    bound_pair_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 12:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    array_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 13:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    switch_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 14:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    formal_parameter_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 15:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    identifier_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 16:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    specification_part_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 17:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	empty_() {
	    let localctx = new Empty_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, algol60Parser.RULE_empty_);
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, algol60Parser.RULE_integer);
	    try {
	        this.state = 183;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Unsigned_integer:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 178;
	            this.match(algol60Parser.Unsigned_integer);
	            break;
	        case algol60Parser.Plus_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            this.match(algol60Parser.Plus_);
	            this.state = 180;
	            this.match(algol60Parser.Unsigned_integer);
	            break;
	        case algol60Parser.Minus_:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 181;
	            this.match(algol60Parser.Minus_);
	            this.state = 182;
	            this.match(algol60Parser.Unsigned_integer);
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
	    this.enterRule(localctx, 4, algol60Parser.RULE_number);
	    try {
	        this.state = 190;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Unsigned_number:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 185;
	            this.match(algol60Parser.Unsigned_number);
	            break;
	        case algol60Parser.Plus_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 186;
	            this.match(algol60Parser.Plus_);
	            this.state = 187;
	            this.match(algol60Parser.Unsigned_number);
	            break;
	        case algol60Parser.Minus_:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 188;
	            this.match(algol60Parser.Minus_);
	            this.state = 189;
	            this.match(algol60Parser.Unsigned_number);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, algol60Parser.RULE_expression);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            this.arithmetic_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.boolean_expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 194;
	            this.designational_expression();
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



	variable_identifier() {
	    let localctx = new Variable_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, algol60Parser.RULE_variable_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(algol60Parser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simple_variable() {
	    let localctx = new Simple_variableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, algol60Parser.RULE_simple_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.variable_identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscript_expression() {
	    let localctx = new Subscript_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, algol60Parser.RULE_subscript_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.arithmetic_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	subscript_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Subscript_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, algol60Parser.RULE_subscript_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.subscript_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 211;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Subscript_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_subscript_list);
	                this.state = 206;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 207;
	                this.match(algol60Parser.Comma_);
	                this.state = 208;
	                this.subscript_expression(); 
	            }
	            this.state = 213;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
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



	array_identifier() {
	    let localctx = new Array_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, algol60Parser.RULE_array_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(algol60Parser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscripted_variable() {
	    let localctx = new Subscripted_variableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, algol60Parser.RULE_subscripted_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.array_identifier();
	        this.state = 217;
	        this.match(algol60Parser.Lb_);
	        this.state = 218;
	        this.subscript_list(0);
	        this.state = 219;
	        this.match(algol60Parser.Rb_);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 20, algol60Parser.RULE_variable);
	    try {
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 221;
	            this.simple_variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 222;
	            this.subscripted_variable();
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



	procedure_identifier() {
	    let localctx = new Procedure_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, algol60Parser.RULE_procedure_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(algol60Parser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter_delimiter() {
	    let localctx = new Parameter_delimiterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, algol60Parser.RULE_parameter_delimiter);
	    try {
	        this.state = 232;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Comma_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            this.match(algol60Parser.Comma_);
	            break;
	        case algol60Parser.Rp_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 228;
	            this.match(algol60Parser.Rp_);
	            this.state = 229;
	            this.match(algol60Parser.Identifier);
	            this.state = 230;
	            this.match(algol60Parser.Colon_);
	            this.state = 231;
	            this.match(algol60Parser.LP_);
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



	actual_parameter() {
	    let localctx = new Actual_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, algol60Parser.RULE_actual_parameter);
	    try {
	        this.state = 239;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 234;
	            this.match(algol60Parser.String);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 235;
	            this.expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 236;
	            this.array_identifier();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 237;
	            this.switch_identifier();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 238;
	            this.procedure_identifier();
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


	actual_parameter_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Actual_parameter_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 28;
	    this.enterRecursionRule(localctx, 28, algol60Parser.RULE_actual_parameter_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this.actual_parameter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 250;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Actual_parameter_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_actual_parameter_list);
	                this.state = 244;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 245;
	                this.parameter_delimiter();
	                this.state = 246;
	                this.actual_parameter(); 
	            }
	            this.state = 252;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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



	function_designator() {
	    let localctx = new Function_designatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, algol60Parser.RULE_function_designator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.procedure_identifier();
	        this.state = 254;
	        this.actual_parameter_part();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	adding_operator() {
	    let localctx = new Adding_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, algol60Parser.RULE_adding_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        _la = this._input.LA(1);
	        if(!(_la===algol60Parser.Minus_ || _la===algol60Parser.Plus_)) {
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



	multiplying_operator() {
	    let localctx = new Multiplying_operatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, algol60Parser.RULE_multiplying_operator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!(_la===algol60Parser.Divide_ || _la===algol60Parser.Mult_)) {
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



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, algol60Parser.RULE_primary);
	    try {
	        this.state = 267;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 260;
	            this.match(algol60Parser.Unsigned_number);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.variable();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 262;
	            this.function_designator();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 263;
	            this.match(algol60Parser.LP_);
	            this.state = 264;
	            this.arithmetic_expression();
	            this.state = 265;
	            this.match(algol60Parser.Rp_);
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


	factor(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FactorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 38;
	    this.enterRecursionRule(localctx, 38, algol60Parser.RULE_factor, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.primary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new FactorContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_factor);
	                this.state = 272;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 273;
	                this.match(algol60Parser.Exp_);
	                this.state = 274;
	                this.primary(); 
	            }
	            this.state = 279;
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


	term(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TermContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, algol60Parser.RULE_term, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.factor(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 289;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TermContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_term);
	                this.state = 283;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 284;
	                this.multiplying_operator();
	                this.state = 285;
	                this.factor(0); 
	            }
	            this.state = 291;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
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


	simple_arithmetic_expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Simple_arithmetic_expressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, algol60Parser.RULE_simple_arithmetic_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.LP_:
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_number:
	            this.state = 293;
	            this.term(0);
	            break;
	        case algol60Parser.Minus_:
	        case algol60Parser.Plus_:
	            this.state = 294;
	            this.adding_operator();
	            this.state = 295;
	            this.term(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 305;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Simple_arithmetic_expressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_simple_arithmetic_expression);
	                this.state = 299;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 300;
	                this.adding_operator();
	                this.state = 301;
	                this.term(0); 
	            }
	            this.state = 307;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
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



	if_clause() {
	    let localctx = new If_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, algol60Parser.RULE_if_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        this.match(algol60Parser.If_);
	        this.state = 309;
	        this.boolean_expression();
	        this.state = 310;
	        this.match(algol60Parser.Then_);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arithmetic_expression() {
	    let localctx = new Arithmetic_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, algol60Parser.RULE_arithmetic_expression);
	    try {
	        this.state = 318;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.LP_:
	        case algol60Parser.Minus_:
	        case algol60Parser.Plus_:
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_number:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            this.simple_arithmetic_expression(0);
	            break;
	        case algol60Parser.If_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 313;
	            this.if_clause();
	            this.state = 314;
	            this.simple_arithmetic_expression(0);
	            this.state = 315;
	            this.match(algol60Parser.Else_);
	            this.state = 316;
	            this.arithmetic_expression();
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



	relation() {
	    let localctx = new RelationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, algol60Parser.RULE_relation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.simple_arithmetic_expression(0);
	        this.state = 321;
	        this.match(algol60Parser.Relational_operator);
	        this.state = 322;
	        this.simple_arithmetic_expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolean_primary() {
	    let localctx = new Boolean_primaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, algol60Parser.RULE_boolean_primary);
	    try {
	        this.state = 332;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 324;
	            this.match(algol60Parser.Logical_value);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 325;
	            this.variable();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 326;
	            this.function_designator();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 327;
	            this.relation();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 328;
	            this.match(algol60Parser.LP_);
	            this.state = 329;
	            this.boolean_expression();
	            this.state = 330;
	            this.match(algol60Parser.Rp_);
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



	boolean_secondary() {
	    let localctx = new Boolean_secondaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, algol60Parser.RULE_boolean_secondary);
	    try {
	        this.state = 337;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.LP_:
	        case algol60Parser.Minus_:
	        case algol60Parser.Plus_:
	        case algol60Parser.Logical_value:
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_number:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 334;
	            this.boolean_primary();
	            break;
	        case algol60Parser.Not_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            this.match(algol60Parser.Not_);
	            this.state = 336;
	            this.boolean_primary();
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


	boolean_factor(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Boolean_factorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 54;
	    this.enterRecursionRule(localctx, 54, algol60Parser.RULE_boolean_factor, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this.boolean_secondary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 347;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Boolean_factorContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_boolean_factor);
	                this.state = 342;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 343;
	                this.match(algol60Parser.And_);
	                this.state = 344;
	                this.boolean_secondary(); 
	            }
	            this.state = 349;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
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


	boolean_term(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Boolean_termContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 56;
	    this.enterRecursionRule(localctx, 56, algol60Parser.RULE_boolean_term, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.boolean_factor(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 358;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Boolean_termContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_boolean_term);
	                this.state = 353;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 354;
	                this.match(algol60Parser.Or_);
	                this.state = 355;
	                this.boolean_factor(0); 
	            }
	            this.state = 360;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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


	implication(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ImplicationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 58;
	    this.enterRecursionRule(localctx, 58, algol60Parser.RULE_implication, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.boolean_term(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 369;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ImplicationContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_implication);
	                this.state = 364;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 365;
	                this.match(algol60Parser.Includes_);
	                this.state = 366;
	                this.boolean_term(0); 
	            }
	            this.state = 371;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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


	simple_boolean(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Simple_booleanContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, algol60Parser.RULE_simple_boolean, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.implication(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 380;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Simple_booleanContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_simple_boolean);
	                this.state = 375;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 376;
	                this.match(algol60Parser.Equiv_);
	                this.state = 377;
	                this.implication(0); 
	            }
	            this.state = 382;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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



	boolean_expression() {
	    let localctx = new Boolean_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, algol60Parser.RULE_boolean_expression);
	    try {
	        this.state = 389;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.LP_:
	        case algol60Parser.Minus_:
	        case algol60Parser.Not_:
	        case algol60Parser.Plus_:
	        case algol60Parser.Logical_value:
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_number:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 383;
	            this.simple_boolean(0);
	            break;
	        case algol60Parser.If_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 384;
	            this.if_clause();
	            this.state = 385;
	            this.simple_boolean(0);
	            this.state = 386;
	            this.match(algol60Parser.Else_);
	            this.state = 387;
	            this.boolean_expression();
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, algol60Parser.RULE_label);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 391;
	        _la = this._input.LA(1);
	        if(!(_la===algol60Parser.Identifier || _la===algol60Parser.Unsigned_integer)) {
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



	switch_identifier() {
	    let localctx = new Switch_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, algol60Parser.RULE_switch_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(algol60Parser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	switch_designator() {
	    let localctx = new Switch_designatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, algol60Parser.RULE_switch_designator);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this.switch_identifier();
	        this.state = 396;
	        this.match(algol60Parser.Lb_);
	        this.state = 397;
	        this.subscript_expression();
	        this.state = 398;
	        this.match(algol60Parser.Rb_);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simple_designational_expression() {
	    let localctx = new Simple_designational_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, algol60Parser.RULE_simple_designational_expression);
	    try {
	        this.state = 406;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 400;
	            this.label();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 401;
	            this.switch_designator();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 402;
	            this.match(algol60Parser.LP_);
	            this.state = 403;
	            this.designational_expression();
	            this.state = 404;
	            this.match(algol60Parser.Rp_);
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



	designational_expression() {
	    let localctx = new Designational_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, algol60Parser.RULE_designational_expression);
	    try {
	        this.state = 414;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.LP_:
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_integer:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 408;
	            this.simple_designational_expression();
	            break;
	        case algol60Parser.If_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 409;
	            this.if_clause();
	            this.state = 410;
	            this.simple_designational_expression();
	            this.state = 411;
	            this.match(algol60Parser.Else_);
	            this.state = 412;
	            this.designational_expression();
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



	unlabelled_basic_statement() {
	    let localctx = new Unlabelled_basic_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, algol60Parser.RULE_unlabelled_basic_statement);
	    try {
	        this.state = 420;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 416;
	            this.assignment_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 417;
	            this.go_to_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 418;
	            this.dummy_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 419;
	            this.procedure_statement();
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



	basic_statement() {
	    let localctx = new Basic_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, algol60Parser.RULE_basic_statement);
	    try {
	        this.state = 427;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 422;
	            this.unlabelled_basic_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 423;
	            this.label();
	            this.state = 424;
	            this.match(algol60Parser.Colon_);
	            this.state = 425;
	            this.basic_statement();
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



	unconditional_statement() {
	    let localctx = new Unconditional_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, algol60Parser.RULE_unconditional_statement);
	    try {
	        this.state = 432;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 429;
	            this.basic_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 430;
	            this.compound_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 431;
	            this.block();
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, algol60Parser.RULE_statement);
	    try {
	        this.state = 437;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 434;
	            this.unconditional_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 435;
	            this.conditional_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 436;
	            this.for_statement();
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



	compound_tail() {
	    let localctx = new Compound_tailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, algol60Parser.RULE_compound_tail);
	    try {
	        this.state = 446;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 439;
	            this.statement();
	            this.state = 440;
	            this.match(algol60Parser.End_);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 442;
	            this.statement();
	            this.state = 443;
	            this.match(algol60Parser.Semi_);
	            this.state = 444;
	            this.compound_tail();
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


	block_head(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Block_headContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 84;
	    this.enterRecursionRule(localctx, 84, algol60Parser.RULE_block_head, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 449;
	        this.match(algol60Parser.Begin_);
	        this.state = 450;
	        this.declaration();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 457;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Block_headContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_block_head);
	                this.state = 452;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 453;
	                this.match(algol60Parser.Semi_);
	                this.state = 454;
	                this.declaration(); 
	            }
	            this.state = 459;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
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



	unlabelled_compound() {
	    let localctx = new Unlabelled_compoundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, algol60Parser.RULE_unlabelled_compound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this.match(algol60Parser.Begin_);
	        this.state = 461;
	        this.compound_tail();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unlabelled_block() {
	    let localctx = new Unlabelled_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, algol60Parser.RULE_unlabelled_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.block_head(0);
	        this.state = 464;
	        this.match(algol60Parser.Semi_);
	        this.state = 465;
	        this.compound_tail();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compound_statement() {
	    let localctx = new Compound_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, algol60Parser.RULE_compound_statement);
	    try {
	        this.state = 472;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Begin_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 467;
	            this.unlabelled_compound();
	            break;
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_integer:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 468;
	            this.label();
	            this.state = 469;
	            this.match(algol60Parser.Colon_);
	            this.state = 470;
	            this.compound_statement();
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
	    this.enterRule(localctx, 92, algol60Parser.RULE_block);
	    try {
	        this.state = 479;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Begin_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 474;
	            this.unlabelled_block();
	            break;
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_integer:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 475;
	            this.label();
	            this.state = 476;
	            this.match(algol60Parser.Colon_);
	            this.state = 477;
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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, algol60Parser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 481;
	            this.block();
	            break;

	        case 2:
	            this.state = 482;
	            this.compound_statement();
	            break;

	        }
	        this.state = 485;
	        this.match(algol60Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	destination() {
	    let localctx = new DestinationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, algol60Parser.RULE_destination);
	    try {
	        this.state = 489;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 487;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 488;
	            this.procedure_identifier();
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



	left_part() {
	    let localctx = new Left_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, algol60Parser.RULE_left_part);
	    try {
	        this.state = 497;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 491;
	            this.variable();
	            this.state = 492;
	            this.match(algol60Parser.Assign_);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 494;
	            this.procedure_identifier();
	            this.state = 495;
	            this.match(algol60Parser.Assign_);
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


	left_part_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Left_part_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 100;
	    this.enterRecursionRule(localctx, 100, algol60Parser.RULE_left_part_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 500;
	        this.left_part();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 506;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Left_part_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_left_part_list);
	                this.state = 502;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 503;
	                this.left_part(); 
	            }
	            this.state = 508;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
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



	assignment_statement() {
	    let localctx = new Assignment_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, algol60Parser.RULE_assignment_statement);
	    try {
	        this.state = 515;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 509;
	            this.left_part_list(0);
	            this.state = 510;
	            this.arithmetic_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 512;
	            this.left_part_list(0);
	            this.state = 513;
	            this.boolean_expression();
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



	go_to_statement() {
	    let localctx = new Go_to_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, algol60Parser.RULE_go_to_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.match(algol60Parser.Goto_);
	        this.state = 518;
	        this.designational_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dummy_statement() {
	    let localctx = new Dummy_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, algol60Parser.RULE_dummy_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this.empty_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_statement() {
	    let localctx = new If_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, algol60Parser.RULE_if_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
	        this.if_clause();
	        this.state = 523;
	        this.unconditional_statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditional_statement() {
	    let localctx = new Conditional_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, algol60Parser.RULE_conditional_statement);
	    try {
	        this.state = 537;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 525;
	            this.if_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 526;
	            this.if_statement();
	            this.state = 527;
	            this.match(algol60Parser.Else_);
	            this.state = 528;
	            this.statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 530;
	            this.if_clause();
	            this.state = 531;
	            this.for_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 533;
	            this.label();
	            this.state = 534;
	            this.match(algol60Parser.Colon_);
	            this.state = 535;
	            this.conditional_statement();
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



	for_list_element() {
	    let localctx = new For_list_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, algol60Parser.RULE_for_list_element);
	    try {
	        this.state = 550;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 539;
	            this.arithmetic_expression();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 540;
	            this.arithmetic_expression();
	            this.state = 541;
	            this.match(algol60Parser.Step_);
	            this.state = 542;
	            this.arithmetic_expression();
	            this.state = 543;
	            this.match(algol60Parser.Until_);
	            this.state = 544;
	            this.arithmetic_expression();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 546;
	            this.arithmetic_expression();
	            this.state = 547;
	            this.match(algol60Parser.While_);
	            this.state = 548;
	            this.boolean_expression();
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


	for_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new For_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 114;
	    this.enterRecursionRule(localctx, 114, algol60Parser.RULE_for_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        this.for_list_element();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 560;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new For_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_for_list);
	                this.state = 555;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 556;
	                this.match(algol60Parser.Comma_);
	                this.state = 557;
	                this.for_list_element(); 
	            }
	            this.state = 562;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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



	for_clause() {
	    let localctx = new For_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, algol60Parser.RULE_for_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this.match(algol60Parser.For_);
	        this.state = 564;
	        this.variable();
	        this.state = 565;
	        this.match(algol60Parser.Assign_);
	        this.state = 566;
	        this.for_list(0);
	        this.state = 567;
	        this.match(algol60Parser.Do_);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_statement() {
	    let localctx = new For_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, algol60Parser.RULE_for_statement);
	    try {
	        this.state = 576;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.For_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 569;
	            this.for_clause();
	            this.state = 570;
	            this.statement();
	            break;
	        case algol60Parser.Identifier:
	        case algol60Parser.Unsigned_integer:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 572;
	            this.label();
	            this.state = 573;
	            this.match(algol60Parser.Colon_);
	            this.state = 574;
	            this.for_statement();
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



	actual_parameter_part() {
	    let localctx = new Actual_parameter_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, algol60Parser.RULE_actual_parameter_part);
	    try {
	        this.state = 583;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 578;
	            this.empty_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 579;
	            this.match(algol60Parser.LP_);
	            this.state = 580;
	            this.actual_parameter_list(0);
	            this.state = 581;
	            this.match(algol60Parser.Rp_);
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



	procedure_statement() {
	    let localctx = new Procedure_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, algol60Parser.RULE_procedure_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 585;
	        this.procedure_identifier();
	        this.state = 586;
	        this.actual_parameter_part();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	code() {
	    let localctx = new CodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, algol60Parser.RULE_code);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 588;
	                this.matchWildcard(); 
	            }
	            this.state = 593;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, algol60Parser.RULE_declaration);
	    try {
	        this.state = 598;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 594;
	            this.type_declaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 595;
	            this.array_declaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 596;
	            this.switch_declaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 597;
	            this.procedure_declaration();
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



	type_list() {
	    let localctx = new Type_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, algol60Parser.RULE_type_list);
	    try {
	        this.state = 605;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 600;
	            this.simple_variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 601;
	            this.simple_variable();
	            this.state = 602;
	            this.match(algol60Parser.Comma_);
	            this.state = 603;
	            this.type_list();
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
	    this.enterRule(localctx, 130, algol60Parser.RULE_type_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 607;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << algol60Parser.Boolean_) | (1 << algol60Parser.Integer_) | (1 << algol60Parser.Real_))) !== 0))) {
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



	local_or_own() {
	    let localctx = new Local_or_ownContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, algol60Parser.RULE_local_or_own);
	    try {
	        this.state = 611;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Array_:
	        case algol60Parser.Boolean_:
	        case algol60Parser.Integer_:
	        case algol60Parser.Real_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 609;
	            this.empty_();
	            break;
	        case algol60Parser.Own_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 610;
	            this.match(algol60Parser.Own_);
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



	type_declaration() {
	    let localctx = new Type_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, algol60Parser.RULE_type_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 613;
	        this.local_or_own();
	        this.state = 614;
	        this.type_();
	        this.state = 615;
	        this.type_list();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lower_bound() {
	    let localctx = new Lower_boundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, algol60Parser.RULE_lower_bound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 617;
	        this.arithmetic_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	upper_bound() {
	    let localctx = new Upper_boundContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, algol60Parser.RULE_upper_bound);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 619;
	        this.arithmetic_expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bound_pair() {
	    let localctx = new Bound_pairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, algol60Parser.RULE_bound_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 621;
	        this.lower_bound();
	        this.state = 622;
	        this.match(algol60Parser.Colon_);
	        this.state = 623;
	        this.upper_bound();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	bound_pair_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Bound_pair_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 142;
	    this.enterRecursionRule(localctx, 142, algol60Parser.RULE_bound_pair_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 626;
	        this.bound_pair();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 633;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Bound_pair_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_bound_pair_list);
	                this.state = 628;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 629;
	                this.match(algol60Parser.Comma_);
	                this.state = 630;
	                this.bound_pair(); 
	            }
	            this.state = 635;
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



	array_segment() {
	    let localctx = new Array_segmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, algol60Parser.RULE_array_segment);
	    try {
	        this.state = 645;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 636;
	            this.array_identifier();
	            this.state = 637;
	            this.match(algol60Parser.Lb_);
	            this.state = 638;
	            this.bound_pair_list(0);
	            this.state = 639;
	            this.match(algol60Parser.Rb_);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 641;
	            this.array_identifier();
	            this.state = 642;
	            this.match(algol60Parser.Comma_);
	            this.state = 643;
	            this.array_segment();
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


	array_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Array_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 146;
	    this.enterRecursionRule(localctx, 146, algol60Parser.RULE_array_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 648;
	        this.array_segment();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 655;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Array_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_array_list);
	                this.state = 650;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 651;
	                this.match(algol60Parser.Comma_);
	                this.state = 652;
	                this.array_segment(); 
	            }
	            this.state = 657;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
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



	array_declarer() {
	    let localctx = new Array_declarerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 148, algol60Parser.RULE_array_declarer);
	    try {
	        this.state = 662;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Boolean_:
	        case algol60Parser.Integer_:
	        case algol60Parser.Real_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 658;
	            this.type_();
	            this.state = 659;
	            this.match(algol60Parser.Array_);
	            break;
	        case algol60Parser.Array_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 661;
	            this.match(algol60Parser.Array_);
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



	array_declaration() {
	    let localctx = new Array_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 150, algol60Parser.RULE_array_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 664;
	        this.local_or_own();
	        this.state = 665;
	        this.array_declarer();
	        this.state = 666;
	        this.array_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	switch_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Switch_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 152;
	    this.enterRecursionRule(localctx, 152, algol60Parser.RULE_switch_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 669;
	        this.designational_expression();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 676;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Switch_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_switch_list);
	                this.state = 671;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 672;
	                this.match(algol60Parser.Comma_);
	                this.state = 673;
	                this.designational_expression(); 
	            }
	            this.state = 678;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
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



	switch_declaration() {
	    let localctx = new Switch_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 154, algol60Parser.RULE_switch_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 679;
	        this.match(algol60Parser.Switch_);
	        this.state = 680;
	        this.switch_identifier();
	        this.state = 681;
	        this.match(algol60Parser.Assign_);
	        this.state = 682;
	        this.switch_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formal_parameter() {
	    let localctx = new Formal_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 156, algol60Parser.RULE_formal_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 684;
	        this.match(algol60Parser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	formal_parameter_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Formal_parameter_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 158;
	    this.enterRecursionRule(localctx, 158, algol60Parser.RULE_formal_parameter_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 687;
	        this.formal_parameter();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 695;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Formal_parameter_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_formal_parameter_list);
	                this.state = 689;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 690;
	                this.parameter_delimiter();
	                this.state = 691;
	                this.formal_parameter(); 
	            }
	            this.state = 697;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
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



	formal_parameter_part() {
	    let localctx = new Formal_parameter_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 160, algol60Parser.RULE_formal_parameter_part);
	    try {
	        this.state = 703;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Semi_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 698;
	            this.empty_();
	            break;
	        case algol60Parser.LP_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 699;
	            this.match(algol60Parser.LP_);
	            this.state = 700;
	            this.formal_parameter_list(0);
	            this.state = 701;
	            this.match(algol60Parser.Rp_);
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


	identifier_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Identifier_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 162;
	    this.enterRecursionRule(localctx, 162, algol60Parser.RULE_identifier_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 706;
	        this.match(algol60Parser.Identifier);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 713;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Identifier_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_identifier_list);
	                this.state = 708;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 709;
	                this.match(algol60Parser.Comma_);
	                this.state = 710;
	                this.match(algol60Parser.Identifier); 
	            }
	            this.state = 715;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
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



	value_part() {
	    let localctx = new Value_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 164, algol60Parser.RULE_value_part);
	    try {
	        this.state = 721;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 716;
	            this.match(algol60Parser.Value_);
	            this.state = 717;
	            this.identifier_list(0);
	            this.state = 718;
	            this.match(algol60Parser.Semi_);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 720;
	            this.empty_();
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



	specifier() {
	    let localctx = new SpecifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 166, algol60Parser.RULE_specifier);
	    try {
	        this.state = 735;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 723;
	            this.match(algol60Parser.String_);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 724;
	            this.type_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 725;
	            this.match(algol60Parser.Array_);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 726;
	            this.type_();
	            this.state = 727;
	            this.match(algol60Parser.Array_);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 729;
	            this.match(algol60Parser.Label_);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 730;
	            this.match(algol60Parser.Switch_);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 731;
	            this.match(algol60Parser.Procedure_);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 732;
	            this.type_();
	            this.state = 733;
	            this.match(algol60Parser.Procedure_);
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


	specification_part(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Specification_partContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 168;
	    this.enterRecursionRule(localctx, 168, algol60Parser.RULE_specification_part, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 743;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 738;
	            this.empty_();
	            break;

	        case 2:
	            this.state = 739;
	            this.specifier();
	            this.state = 740;
	            this.identifier_list(0);
	            this.state = 741;
	            this.match(algol60Parser.Semi_);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 751;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,56,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Specification_partContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, algol60Parser.RULE_specification_part);
	                this.state = 745;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 746;
	                this.specifier();
	                this.state = 747;
	                this.identifier_list(0); 
	            }
	            this.state = 753;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,56,this._ctx);
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



	procedure_heading() {
	    let localctx = new Procedure_headingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 170, algol60Parser.RULE_procedure_heading);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 754;
	        this.procedure_identifier();
	        this.state = 755;
	        this.formal_parameter_part();
	        this.state = 756;
	        this.match(algol60Parser.Semi_);
	        this.state = 757;
	        this.value_part();
	        this.state = 758;
	        this.specification_part(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedure_body() {
	    let localctx = new Procedure_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 172, algol60Parser.RULE_procedure_body);
	    try {
	        this.state = 762;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 760;
	            this.statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 761;
	            this.code();
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



	procedure_declaration() {
	    let localctx = new Procedure_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 174, algol60Parser.RULE_procedure_declaration);
	    try {
	        this.state = 773;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case algol60Parser.Procedure_:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 764;
	            this.match(algol60Parser.Procedure_);
	            this.state = 765;
	            this.procedure_heading();
	            this.state = 766;
	            this.procedure_body();
	            break;
	        case algol60Parser.Boolean_:
	        case algol60Parser.Integer_:
	        case algol60Parser.Real_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 768;
	            this.type_();
	            this.state = 769;
	            this.match(algol60Parser.Procedure_);
	            this.state = 770;
	            this.procedure_heading();
	            this.state = 771;
	            this.procedure_body();
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

algol60Parser.EOF = antlr4.Token.EOF;
algol60Parser.Array_ = 1;
algol60Parser.Begin_ = 2;
algol60Parser.Boolean_ = 3;
algol60Parser.Comment_ = 4;
algol60Parser.Do_ = 5;
algol60Parser.Else_ = 6;
algol60Parser.End_ = 7;
algol60Parser.False_ = 8;
algol60Parser.For_ = 9;
algol60Parser.Goto_ = 10;
algol60Parser.If_ = 11;
algol60Parser.Integer_ = 12;
algol60Parser.Label_ = 13;
algol60Parser.Own_ = 14;
algol60Parser.Procedure_ = 15;
algol60Parser.Real_ = 16;
algol60Parser.Step_ = 17;
algol60Parser.String_ = 18;
algol60Parser.Switch_ = 19;
algol60Parser.Then_ = 20;
algol60Parser.True_ = 21;
algol60Parser.Until_ = 22;
algol60Parser.Value_ = 23;
algol60Parser.While_ = 24;
algol60Parser.And_ = 25;
algol60Parser.Assign_ = 26;
algol60Parser.Colon_ = 27;
algol60Parser.Comma_ = 28;
algol60Parser.Dot_ = 29;
algol60Parser.Divide_ = 30;
algol60Parser.Eor_ = 31;
algol60Parser.Eq_ = 32;
algol60Parser.Equiv_ = 33;
algol60Parser.Exp_ = 34;
algol60Parser.Gt_ = 35;
algol60Parser.Ge_ = 36;
algol60Parser.Includes_ = 37;
algol60Parser.Lb_ = 38;
algol60Parser.Le_ = 39;
algol60Parser.LP_ = 40;
algol60Parser.Lt_ = 41;
algol60Parser.Minus_ = 42;
algol60Parser.Mult_ = 43;
algol60Parser.Ne_ = 44;
algol60Parser.Not_ = 45;
algol60Parser.Or_ = 46;
algol60Parser.Plus_ = 47;
algol60Parser.Rb_ = 48;
algol60Parser.Rp_ = 49;
algol60Parser.Semi_ = 50;
algol60Parser.Underscore_ = 51;
algol60Parser.ULCorner = 52;
algol60Parser.URCorner = 53;
algol60Parser.Logical_value = 54;
algol60Parser.Relational_operator = 55;
algol60Parser.Comment = 56;
algol60Parser.Identifier = 57;
algol60Parser.Unsigned_integer = 58;
algol60Parser.Decimal_fraction = 59;
algol60Parser.Exponential_part = 60;
algol60Parser.Decimal_number = 61;
algol60Parser.Unsigned_number = 62;
algol60Parser.String = 63;
algol60Parser.WS = 64;

algol60Parser.RULE_empty_ = 0;
algol60Parser.RULE_integer = 1;
algol60Parser.RULE_number = 2;
algol60Parser.RULE_expression = 3;
algol60Parser.RULE_variable_identifier = 4;
algol60Parser.RULE_simple_variable = 5;
algol60Parser.RULE_subscript_expression = 6;
algol60Parser.RULE_subscript_list = 7;
algol60Parser.RULE_array_identifier = 8;
algol60Parser.RULE_subscripted_variable = 9;
algol60Parser.RULE_variable = 10;
algol60Parser.RULE_procedure_identifier = 11;
algol60Parser.RULE_parameter_delimiter = 12;
algol60Parser.RULE_actual_parameter = 13;
algol60Parser.RULE_actual_parameter_list = 14;
algol60Parser.RULE_function_designator = 15;
algol60Parser.RULE_adding_operator = 16;
algol60Parser.RULE_multiplying_operator = 17;
algol60Parser.RULE_primary = 18;
algol60Parser.RULE_factor = 19;
algol60Parser.RULE_term = 20;
algol60Parser.RULE_simple_arithmetic_expression = 21;
algol60Parser.RULE_if_clause = 22;
algol60Parser.RULE_arithmetic_expression = 23;
algol60Parser.RULE_relation = 24;
algol60Parser.RULE_boolean_primary = 25;
algol60Parser.RULE_boolean_secondary = 26;
algol60Parser.RULE_boolean_factor = 27;
algol60Parser.RULE_boolean_term = 28;
algol60Parser.RULE_implication = 29;
algol60Parser.RULE_simple_boolean = 30;
algol60Parser.RULE_boolean_expression = 31;
algol60Parser.RULE_label = 32;
algol60Parser.RULE_switch_identifier = 33;
algol60Parser.RULE_switch_designator = 34;
algol60Parser.RULE_simple_designational_expression = 35;
algol60Parser.RULE_designational_expression = 36;
algol60Parser.RULE_unlabelled_basic_statement = 37;
algol60Parser.RULE_basic_statement = 38;
algol60Parser.RULE_unconditional_statement = 39;
algol60Parser.RULE_statement = 40;
algol60Parser.RULE_compound_tail = 41;
algol60Parser.RULE_block_head = 42;
algol60Parser.RULE_unlabelled_compound = 43;
algol60Parser.RULE_unlabelled_block = 44;
algol60Parser.RULE_compound_statement = 45;
algol60Parser.RULE_block = 46;
algol60Parser.RULE_program = 47;
algol60Parser.RULE_destination = 48;
algol60Parser.RULE_left_part = 49;
algol60Parser.RULE_left_part_list = 50;
algol60Parser.RULE_assignment_statement = 51;
algol60Parser.RULE_go_to_statement = 52;
algol60Parser.RULE_dummy_statement = 53;
algol60Parser.RULE_if_statement = 54;
algol60Parser.RULE_conditional_statement = 55;
algol60Parser.RULE_for_list_element = 56;
algol60Parser.RULE_for_list = 57;
algol60Parser.RULE_for_clause = 58;
algol60Parser.RULE_for_statement = 59;
algol60Parser.RULE_actual_parameter_part = 60;
algol60Parser.RULE_procedure_statement = 61;
algol60Parser.RULE_code = 62;
algol60Parser.RULE_declaration = 63;
algol60Parser.RULE_type_list = 64;
algol60Parser.RULE_type_ = 65;
algol60Parser.RULE_local_or_own = 66;
algol60Parser.RULE_type_declaration = 67;
algol60Parser.RULE_lower_bound = 68;
algol60Parser.RULE_upper_bound = 69;
algol60Parser.RULE_bound_pair = 70;
algol60Parser.RULE_bound_pair_list = 71;
algol60Parser.RULE_array_segment = 72;
algol60Parser.RULE_array_list = 73;
algol60Parser.RULE_array_declarer = 74;
algol60Parser.RULE_array_declaration = 75;
algol60Parser.RULE_switch_list = 76;
algol60Parser.RULE_switch_declaration = 77;
algol60Parser.RULE_formal_parameter = 78;
algol60Parser.RULE_formal_parameter_list = 79;
algol60Parser.RULE_formal_parameter_part = 80;
algol60Parser.RULE_identifier_list = 81;
algol60Parser.RULE_value_part = 82;
algol60Parser.RULE_specifier = 83;
algol60Parser.RULE_specification_part = 84;
algol60Parser.RULE_procedure_heading = 85;
algol60Parser.RULE_procedure_body = 86;
algol60Parser.RULE_procedure_declaration = 87;

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
        this.ruleIndex = algol60Parser.RULE_empty_;
    }


	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterEmpty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitEmpty_(this);
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
        this.ruleIndex = algol60Parser.RULE_integer;
    }

	Unsigned_integer() {
	    return this.getToken(algol60Parser.Unsigned_integer, 0);
	};

	Plus_() {
	    return this.getToken(algol60Parser.Plus_, 0);
	};

	Minus_() {
	    return this.getToken(algol60Parser.Minus_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitInteger(this);
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
        this.ruleIndex = algol60Parser.RULE_number;
    }

	Unsigned_number() {
	    return this.getToken(algol60Parser.Unsigned_number, 0);
	};

	Plus_() {
	    return this.getToken(algol60Parser.Plus_, 0);
	};

	Minus_() {
	    return this.getToken(algol60Parser.Minus_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitNumber(this);
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
        this.ruleIndex = algol60Parser.RULE_expression;
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	designational_expression() {
	    return this.getTypedRuleContext(Designational_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitExpression(this);
		}
	}


}



class Variable_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_variable_identifier;
    }

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterVariable_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitVariable_identifier(this);
		}
	}


}



class Simple_variableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_simple_variable;
    }

	variable_identifier() {
	    return this.getTypedRuleContext(Variable_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSimple_variable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSimple_variable(this);
		}
	}


}



class Subscript_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_subscript_expression;
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSubscript_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSubscript_expression(this);
		}
	}


}



class Subscript_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_subscript_list;
    }

	subscript_expression() {
	    return this.getTypedRuleContext(Subscript_expressionContext,0);
	};

	subscript_list() {
	    return this.getTypedRuleContext(Subscript_listContext,0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSubscript_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSubscript_list(this);
		}
	}


}



class Array_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_array_identifier;
    }

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterArray_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitArray_identifier(this);
		}
	}


}



class Subscripted_variableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_subscripted_variable;
    }

	array_identifier() {
	    return this.getTypedRuleContext(Array_identifierContext,0);
	};

	Lb_() {
	    return this.getToken(algol60Parser.Lb_, 0);
	};

	subscript_list() {
	    return this.getTypedRuleContext(Subscript_listContext,0);
	};

	Rb_() {
	    return this.getToken(algol60Parser.Rb_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSubscripted_variable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSubscripted_variable(this);
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
        this.ruleIndex = algol60Parser.RULE_variable;
    }

	simple_variable() {
	    return this.getTypedRuleContext(Simple_variableContext,0);
	};

	subscripted_variable() {
	    return this.getTypedRuleContext(Subscripted_variableContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitVariable(this);
		}
	}


}



class Procedure_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_procedure_identifier;
    }

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterProcedure_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitProcedure_identifier(this);
		}
	}


}



class Parameter_delimiterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_parameter_delimiter;
    }

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	Rp_() {
	    return this.getToken(algol60Parser.Rp_, 0);
	};

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	Colon_() {
	    return this.getToken(algol60Parser.Colon_, 0);
	};

	LP_() {
	    return this.getToken(algol60Parser.LP_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterParameter_delimiter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitParameter_delimiter(this);
		}
	}


}



class Actual_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_actual_parameter;
    }

	String() {
	    return this.getToken(algol60Parser.String, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	array_identifier() {
	    return this.getTypedRuleContext(Array_identifierContext,0);
	};

	switch_identifier() {
	    return this.getTypedRuleContext(Switch_identifierContext,0);
	};

	procedure_identifier() {
	    return this.getTypedRuleContext(Procedure_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterActual_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitActual_parameter(this);
		}
	}


}



class Actual_parameter_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_actual_parameter_list;
    }

	actual_parameter() {
	    return this.getTypedRuleContext(Actual_parameterContext,0);
	};

	actual_parameter_list() {
	    return this.getTypedRuleContext(Actual_parameter_listContext,0);
	};

	parameter_delimiter() {
	    return this.getTypedRuleContext(Parameter_delimiterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterActual_parameter_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitActual_parameter_list(this);
		}
	}


}



class Function_designatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_function_designator;
    }

	procedure_identifier() {
	    return this.getTypedRuleContext(Procedure_identifierContext,0);
	};

	actual_parameter_part() {
	    return this.getTypedRuleContext(Actual_parameter_partContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFunction_designator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFunction_designator(this);
		}
	}


}



class Adding_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_adding_operator;
    }

	Plus_() {
	    return this.getToken(algol60Parser.Plus_, 0);
	};

	Minus_() {
	    return this.getToken(algol60Parser.Minus_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterAdding_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitAdding_operator(this);
		}
	}


}



class Multiplying_operatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_multiplying_operator;
    }

	Mult_() {
	    return this.getToken(algol60Parser.Mult_, 0);
	};

	Divide_() {
	    return this.getToken(algol60Parser.Divide_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterMultiplying_operator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitMultiplying_operator(this);
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
        this.ruleIndex = algol60Parser.RULE_primary;
    }

	Unsigned_number() {
	    return this.getToken(algol60Parser.Unsigned_number, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	function_designator() {
	    return this.getTypedRuleContext(Function_designatorContext,0);
	};

	LP_() {
	    return this.getToken(algol60Parser.LP_, 0);
	};

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	Rp_() {
	    return this.getToken(algol60Parser.Rp_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitPrimary(this);
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
        this.ruleIndex = algol60Parser.RULE_factor;
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	Exp_() {
	    return this.getToken(algol60Parser.Exp_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFactor(this);
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
        this.ruleIndex = algol60Parser.RULE_term;
    }

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	multiplying_operator() {
	    return this.getTypedRuleContext(Multiplying_operatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitTerm(this);
		}
	}


}



class Simple_arithmetic_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_simple_arithmetic_expression;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	adding_operator() {
	    return this.getTypedRuleContext(Adding_operatorContext,0);
	};

	simple_arithmetic_expression() {
	    return this.getTypedRuleContext(Simple_arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSimple_arithmetic_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSimple_arithmetic_expression(this);
		}
	}


}



class If_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_if_clause;
    }

	If_() {
	    return this.getToken(algol60Parser.If_, 0);
	};

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	Then_() {
	    return this.getToken(algol60Parser.Then_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterIf_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitIf_clause(this);
		}
	}


}



class Arithmetic_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_arithmetic_expression;
    }

	simple_arithmetic_expression() {
	    return this.getTypedRuleContext(Simple_arithmetic_expressionContext,0);
	};

	if_clause() {
	    return this.getTypedRuleContext(If_clauseContext,0);
	};

	Else_() {
	    return this.getToken(algol60Parser.Else_, 0);
	};

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterArithmetic_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitArithmetic_expression(this);
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
        this.ruleIndex = algol60Parser.RULE_relation;
    }

	simple_arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Simple_arithmetic_expressionContext,i);
	    }
	};

	Relational_operator() {
	    return this.getToken(algol60Parser.Relational_operator, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitRelation(this);
		}
	}


}



class Boolean_primaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_boolean_primary;
    }

	Logical_value() {
	    return this.getToken(algol60Parser.Logical_value, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	function_designator() {
	    return this.getTypedRuleContext(Function_designatorContext,0);
	};

	relation() {
	    return this.getTypedRuleContext(RelationContext,0);
	};

	LP_() {
	    return this.getToken(algol60Parser.LP_, 0);
	};

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	Rp_() {
	    return this.getToken(algol60Parser.Rp_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBoolean_primary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBoolean_primary(this);
		}
	}


}



class Boolean_secondaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_boolean_secondary;
    }

	boolean_primary() {
	    return this.getTypedRuleContext(Boolean_primaryContext,0);
	};

	Not_() {
	    return this.getToken(algol60Parser.Not_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBoolean_secondary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBoolean_secondary(this);
		}
	}


}



class Boolean_factorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_boolean_factor;
    }

	boolean_secondary() {
	    return this.getTypedRuleContext(Boolean_secondaryContext,0);
	};

	boolean_factor() {
	    return this.getTypedRuleContext(Boolean_factorContext,0);
	};

	And_() {
	    return this.getToken(algol60Parser.And_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBoolean_factor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBoolean_factor(this);
		}
	}


}



class Boolean_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_boolean_term;
    }

	boolean_factor() {
	    return this.getTypedRuleContext(Boolean_factorContext,0);
	};

	boolean_term() {
	    return this.getTypedRuleContext(Boolean_termContext,0);
	};

	Or_() {
	    return this.getToken(algol60Parser.Or_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBoolean_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBoolean_term(this);
		}
	}


}



class ImplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_implication;
    }

	boolean_term() {
	    return this.getTypedRuleContext(Boolean_termContext,0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	Includes_() {
	    return this.getToken(algol60Parser.Includes_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterImplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitImplication(this);
		}
	}


}



class Simple_booleanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_simple_boolean;
    }

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	simple_boolean() {
	    return this.getTypedRuleContext(Simple_booleanContext,0);
	};

	Equiv_() {
	    return this.getToken(algol60Parser.Equiv_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSimple_boolean(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSimple_boolean(this);
		}
	}


}



class Boolean_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_boolean_expression;
    }

	simple_boolean() {
	    return this.getTypedRuleContext(Simple_booleanContext,0);
	};

	if_clause() {
	    return this.getTypedRuleContext(If_clauseContext,0);
	};

	Else_() {
	    return this.getToken(algol60Parser.Else_, 0);
	};

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBoolean_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBoolean_expression(this);
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
        this.ruleIndex = algol60Parser.RULE_label;
    }

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	Unsigned_integer() {
	    return this.getToken(algol60Parser.Unsigned_integer, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitLabel(this);
		}
	}


}



class Switch_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_switch_identifier;
    }

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSwitch_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSwitch_identifier(this);
		}
	}


}



class Switch_designatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_switch_designator;
    }

	switch_identifier() {
	    return this.getTypedRuleContext(Switch_identifierContext,0);
	};

	Lb_() {
	    return this.getToken(algol60Parser.Lb_, 0);
	};

	subscript_expression() {
	    return this.getTypedRuleContext(Subscript_expressionContext,0);
	};

	Rb_() {
	    return this.getToken(algol60Parser.Rb_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSwitch_designator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSwitch_designator(this);
		}
	}


}



class Simple_designational_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_simple_designational_expression;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	switch_designator() {
	    return this.getTypedRuleContext(Switch_designatorContext,0);
	};

	LP_() {
	    return this.getToken(algol60Parser.LP_, 0);
	};

	designational_expression() {
	    return this.getTypedRuleContext(Designational_expressionContext,0);
	};

	Rp_() {
	    return this.getToken(algol60Parser.Rp_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSimple_designational_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSimple_designational_expression(this);
		}
	}


}



class Designational_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_designational_expression;
    }

	simple_designational_expression() {
	    return this.getTypedRuleContext(Simple_designational_expressionContext,0);
	};

	if_clause() {
	    return this.getTypedRuleContext(If_clauseContext,0);
	};

	Else_() {
	    return this.getToken(algol60Parser.Else_, 0);
	};

	designational_expression() {
	    return this.getTypedRuleContext(Designational_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterDesignational_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitDesignational_expression(this);
		}
	}


}



class Unlabelled_basic_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_unlabelled_basic_statement;
    }

	assignment_statement() {
	    return this.getTypedRuleContext(Assignment_statementContext,0);
	};

	go_to_statement() {
	    return this.getTypedRuleContext(Go_to_statementContext,0);
	};

	dummy_statement() {
	    return this.getTypedRuleContext(Dummy_statementContext,0);
	};

	procedure_statement() {
	    return this.getTypedRuleContext(Procedure_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterUnlabelled_basic_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitUnlabelled_basic_statement(this);
		}
	}


}



class Basic_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_basic_statement;
    }

	unlabelled_basic_statement() {
	    return this.getTypedRuleContext(Unlabelled_basic_statementContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	Colon_() {
	    return this.getToken(algol60Parser.Colon_, 0);
	};

	basic_statement() {
	    return this.getTypedRuleContext(Basic_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBasic_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBasic_statement(this);
		}
	}


}



class Unconditional_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_unconditional_statement;
    }

	basic_statement() {
	    return this.getTypedRuleContext(Basic_statementContext,0);
	};

	compound_statement() {
	    return this.getTypedRuleContext(Compound_statementContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterUnconditional_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitUnconditional_statement(this);
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
        this.ruleIndex = algol60Parser.RULE_statement;
    }

	unconditional_statement() {
	    return this.getTypedRuleContext(Unconditional_statementContext,0);
	};

	conditional_statement() {
	    return this.getTypedRuleContext(Conditional_statementContext,0);
	};

	for_statement() {
	    return this.getTypedRuleContext(For_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitStatement(this);
		}
	}


}



class Compound_tailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_compound_tail;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	End_() {
	    return this.getToken(algol60Parser.End_, 0);
	};

	Semi_() {
	    return this.getToken(algol60Parser.Semi_, 0);
	};

	compound_tail() {
	    return this.getTypedRuleContext(Compound_tailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterCompound_tail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitCompound_tail(this);
		}
	}


}



class Block_headContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_block_head;
    }

	Begin_() {
	    return this.getToken(algol60Parser.Begin_, 0);
	};

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	block_head() {
	    return this.getTypedRuleContext(Block_headContext,0);
	};

	Semi_() {
	    return this.getToken(algol60Parser.Semi_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBlock_head(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBlock_head(this);
		}
	}


}



class Unlabelled_compoundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_unlabelled_compound;
    }

	Begin_() {
	    return this.getToken(algol60Parser.Begin_, 0);
	};

	compound_tail() {
	    return this.getTypedRuleContext(Compound_tailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterUnlabelled_compound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitUnlabelled_compound(this);
		}
	}


}



class Unlabelled_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_unlabelled_block;
    }

	block_head() {
	    return this.getTypedRuleContext(Block_headContext,0);
	};

	Semi_() {
	    return this.getToken(algol60Parser.Semi_, 0);
	};

	compound_tail() {
	    return this.getTypedRuleContext(Compound_tailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterUnlabelled_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitUnlabelled_block(this);
		}
	}


}



class Compound_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_compound_statement;
    }

	unlabelled_compound() {
	    return this.getTypedRuleContext(Unlabelled_compoundContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	Colon_() {
	    return this.getToken(algol60Parser.Colon_, 0);
	};

	compound_statement() {
	    return this.getTypedRuleContext(Compound_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterCompound_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitCompound_statement(this);
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
        this.ruleIndex = algol60Parser.RULE_block;
    }

	unlabelled_block() {
	    return this.getTypedRuleContext(Unlabelled_blockContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	Colon_() {
	    return this.getToken(algol60Parser.Colon_, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBlock(this);
		}
	}


}



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
        this.ruleIndex = algol60Parser.RULE_program;
    }

	EOF() {
	    return this.getToken(algol60Parser.EOF, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	compound_statement() {
	    return this.getTypedRuleContext(Compound_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitProgram(this);
		}
	}


}



class DestinationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_destination;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	procedure_identifier() {
	    return this.getTypedRuleContext(Procedure_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterDestination(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitDestination(this);
		}
	}


}



class Left_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_left_part;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	Assign_() {
	    return this.getToken(algol60Parser.Assign_, 0);
	};

	procedure_identifier() {
	    return this.getTypedRuleContext(Procedure_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterLeft_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitLeft_part(this);
		}
	}


}



class Left_part_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_left_part_list;
    }

	left_part() {
	    return this.getTypedRuleContext(Left_partContext,0);
	};

	left_part_list() {
	    return this.getTypedRuleContext(Left_part_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterLeft_part_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitLeft_part_list(this);
		}
	}


}



class Assignment_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_assignment_statement;
    }

	left_part_list() {
	    return this.getTypedRuleContext(Left_part_listContext,0);
	};

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterAssignment_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitAssignment_statement(this);
		}
	}


}



class Go_to_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_go_to_statement;
    }

	Goto_() {
	    return this.getToken(algol60Parser.Goto_, 0);
	};

	designational_expression() {
	    return this.getTypedRuleContext(Designational_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterGo_to_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitGo_to_statement(this);
		}
	}


}



class Dummy_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_dummy_statement;
    }

	empty_() {
	    return this.getTypedRuleContext(Empty_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterDummy_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitDummy_statement(this);
		}
	}


}



class If_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_if_statement;
    }

	if_clause() {
	    return this.getTypedRuleContext(If_clauseContext,0);
	};

	unconditional_statement() {
	    return this.getTypedRuleContext(Unconditional_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterIf_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitIf_statement(this);
		}
	}


}



class Conditional_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_conditional_statement;
    }

	if_statement() {
	    return this.getTypedRuleContext(If_statementContext,0);
	};

	Else_() {
	    return this.getToken(algol60Parser.Else_, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	if_clause() {
	    return this.getTypedRuleContext(If_clauseContext,0);
	};

	for_statement() {
	    return this.getTypedRuleContext(For_statementContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	Colon_() {
	    return this.getToken(algol60Parser.Colon_, 0);
	};

	conditional_statement() {
	    return this.getTypedRuleContext(Conditional_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterConditional_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitConditional_statement(this);
		}
	}


}



class For_list_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_for_list_element;
    }

	arithmetic_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Arithmetic_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Arithmetic_expressionContext,i);
	    }
	};

	Step_() {
	    return this.getToken(algol60Parser.Step_, 0);
	};

	Until_() {
	    return this.getToken(algol60Parser.Until_, 0);
	};

	While_() {
	    return this.getToken(algol60Parser.While_, 0);
	};

	boolean_expression() {
	    return this.getTypedRuleContext(Boolean_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFor_list_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFor_list_element(this);
		}
	}


}



class For_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_for_list;
    }

	for_list_element() {
	    return this.getTypedRuleContext(For_list_elementContext,0);
	};

	for_list() {
	    return this.getTypedRuleContext(For_listContext,0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFor_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFor_list(this);
		}
	}


}



class For_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_for_clause;
    }

	For_() {
	    return this.getToken(algol60Parser.For_, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	Assign_() {
	    return this.getToken(algol60Parser.Assign_, 0);
	};

	for_list() {
	    return this.getTypedRuleContext(For_listContext,0);
	};

	Do_() {
	    return this.getToken(algol60Parser.Do_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFor_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFor_clause(this);
		}
	}


}



class For_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_for_statement;
    }

	for_clause() {
	    return this.getTypedRuleContext(For_clauseContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	Colon_() {
	    return this.getToken(algol60Parser.Colon_, 0);
	};

	for_statement() {
	    return this.getTypedRuleContext(For_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFor_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFor_statement(this);
		}
	}


}



class Actual_parameter_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_actual_parameter_part;
    }

	empty_() {
	    return this.getTypedRuleContext(Empty_Context,0);
	};

	LP_() {
	    return this.getToken(algol60Parser.LP_, 0);
	};

	actual_parameter_list() {
	    return this.getTypedRuleContext(Actual_parameter_listContext,0);
	};

	Rp_() {
	    return this.getToken(algol60Parser.Rp_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterActual_parameter_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitActual_parameter_part(this);
		}
	}


}



class Procedure_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_procedure_statement;
    }

	procedure_identifier() {
	    return this.getTypedRuleContext(Procedure_identifierContext,0);
	};

	actual_parameter_part() {
	    return this.getTypedRuleContext(Actual_parameter_partContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterProcedure_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitProcedure_statement(this);
		}
	}


}



class CodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_code;
    }


	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterCode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitCode(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_declaration;
    }

	type_declaration() {
	    return this.getTypedRuleContext(Type_declarationContext,0);
	};

	array_declaration() {
	    return this.getTypedRuleContext(Array_declarationContext,0);
	};

	switch_declaration() {
	    return this.getTypedRuleContext(Switch_declarationContext,0);
	};

	procedure_declaration() {
	    return this.getTypedRuleContext(Procedure_declarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class Type_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_type_list;
    }

	simple_variable() {
	    return this.getTypedRuleContext(Simple_variableContext,0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	type_list() {
	    return this.getTypedRuleContext(Type_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterType_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitType_list(this);
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
        this.ruleIndex = algol60Parser.RULE_type_;
    }

	Real_() {
	    return this.getToken(algol60Parser.Real_, 0);
	};

	Integer_() {
	    return this.getToken(algol60Parser.Integer_, 0);
	};

	Boolean_() {
	    return this.getToken(algol60Parser.Boolean_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitType_(this);
		}
	}


}



class Local_or_ownContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_local_or_own;
    }

	empty_() {
	    return this.getTypedRuleContext(Empty_Context,0);
	};

	Own_() {
	    return this.getToken(algol60Parser.Own_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterLocal_or_own(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitLocal_or_own(this);
		}
	}


}



class Type_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_type_declaration;
    }

	local_or_own() {
	    return this.getTypedRuleContext(Local_or_ownContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	type_list() {
	    return this.getTypedRuleContext(Type_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterType_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitType_declaration(this);
		}
	}


}



class Lower_boundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_lower_bound;
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterLower_bound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitLower_bound(this);
		}
	}


}



class Upper_boundContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_upper_bound;
    }

	arithmetic_expression() {
	    return this.getTypedRuleContext(Arithmetic_expressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterUpper_bound(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitUpper_bound(this);
		}
	}


}



class Bound_pairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_bound_pair;
    }

	lower_bound() {
	    return this.getTypedRuleContext(Lower_boundContext,0);
	};

	Colon_() {
	    return this.getToken(algol60Parser.Colon_, 0);
	};

	upper_bound() {
	    return this.getTypedRuleContext(Upper_boundContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBound_pair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBound_pair(this);
		}
	}


}



class Bound_pair_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_bound_pair_list;
    }

	bound_pair() {
	    return this.getTypedRuleContext(Bound_pairContext,0);
	};

	bound_pair_list() {
	    return this.getTypedRuleContext(Bound_pair_listContext,0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterBound_pair_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitBound_pair_list(this);
		}
	}


}



class Array_segmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_array_segment;
    }

	array_identifier() {
	    return this.getTypedRuleContext(Array_identifierContext,0);
	};

	Lb_() {
	    return this.getToken(algol60Parser.Lb_, 0);
	};

	bound_pair_list() {
	    return this.getTypedRuleContext(Bound_pair_listContext,0);
	};

	Rb_() {
	    return this.getToken(algol60Parser.Rb_, 0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	array_segment() {
	    return this.getTypedRuleContext(Array_segmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterArray_segment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitArray_segment(this);
		}
	}


}



class Array_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_array_list;
    }

	array_segment() {
	    return this.getTypedRuleContext(Array_segmentContext,0);
	};

	array_list() {
	    return this.getTypedRuleContext(Array_listContext,0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterArray_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitArray_list(this);
		}
	}


}



class Array_declarerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_array_declarer;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	Array_() {
	    return this.getToken(algol60Parser.Array_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterArray_declarer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitArray_declarer(this);
		}
	}


}



class Array_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_array_declaration;
    }

	local_or_own() {
	    return this.getTypedRuleContext(Local_or_ownContext,0);
	};

	array_declarer() {
	    return this.getTypedRuleContext(Array_declarerContext,0);
	};

	array_list() {
	    return this.getTypedRuleContext(Array_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterArray_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitArray_declaration(this);
		}
	}


}



class Switch_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_switch_list;
    }

	designational_expression() {
	    return this.getTypedRuleContext(Designational_expressionContext,0);
	};

	switch_list() {
	    return this.getTypedRuleContext(Switch_listContext,0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSwitch_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSwitch_list(this);
		}
	}


}



class Switch_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_switch_declaration;
    }

	Switch_() {
	    return this.getToken(algol60Parser.Switch_, 0);
	};

	switch_identifier() {
	    return this.getTypedRuleContext(Switch_identifierContext,0);
	};

	Assign_() {
	    return this.getToken(algol60Parser.Assign_, 0);
	};

	switch_list() {
	    return this.getTypedRuleContext(Switch_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSwitch_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSwitch_declaration(this);
		}
	}


}



class Formal_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_formal_parameter;
    }

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFormal_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFormal_parameter(this);
		}
	}


}



class Formal_parameter_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_formal_parameter_list;
    }

	formal_parameter() {
	    return this.getTypedRuleContext(Formal_parameterContext,0);
	};

	formal_parameter_list() {
	    return this.getTypedRuleContext(Formal_parameter_listContext,0);
	};

	parameter_delimiter() {
	    return this.getTypedRuleContext(Parameter_delimiterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFormal_parameter_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFormal_parameter_list(this);
		}
	}


}



class Formal_parameter_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_formal_parameter_part;
    }

	empty_() {
	    return this.getTypedRuleContext(Empty_Context,0);
	};

	LP_() {
	    return this.getToken(algol60Parser.LP_, 0);
	};

	formal_parameter_list() {
	    return this.getTypedRuleContext(Formal_parameter_listContext,0);
	};

	Rp_() {
	    return this.getToken(algol60Parser.Rp_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterFormal_parameter_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitFormal_parameter_part(this);
		}
	}


}



class Identifier_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_identifier_list;
    }

	Identifier() {
	    return this.getToken(algol60Parser.Identifier, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	Comma_() {
	    return this.getToken(algol60Parser.Comma_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterIdentifier_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitIdentifier_list(this);
		}
	}


}



class Value_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_value_part;
    }

	Value_() {
	    return this.getToken(algol60Parser.Value_, 0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	Semi_() {
	    return this.getToken(algol60Parser.Semi_, 0);
	};

	empty_() {
	    return this.getTypedRuleContext(Empty_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterValue_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitValue_part(this);
		}
	}


}



class SpecifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_specifier;
    }

	String_() {
	    return this.getToken(algol60Parser.String_, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	Array_() {
	    return this.getToken(algol60Parser.Array_, 0);
	};

	Label_() {
	    return this.getToken(algol60Parser.Label_, 0);
	};

	Switch_() {
	    return this.getToken(algol60Parser.Switch_, 0);
	};

	Procedure_() {
	    return this.getToken(algol60Parser.Procedure_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSpecifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSpecifier(this);
		}
	}


}



class Specification_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_specification_part;
    }

	empty_() {
	    return this.getTypedRuleContext(Empty_Context,0);
	};

	specifier() {
	    return this.getTypedRuleContext(SpecifierContext,0);
	};

	identifier_list() {
	    return this.getTypedRuleContext(Identifier_listContext,0);
	};

	Semi_() {
	    return this.getToken(algol60Parser.Semi_, 0);
	};

	specification_part() {
	    return this.getTypedRuleContext(Specification_partContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterSpecification_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitSpecification_part(this);
		}
	}


}



class Procedure_headingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_procedure_heading;
    }

	procedure_identifier() {
	    return this.getTypedRuleContext(Procedure_identifierContext,0);
	};

	formal_parameter_part() {
	    return this.getTypedRuleContext(Formal_parameter_partContext,0);
	};

	Semi_() {
	    return this.getToken(algol60Parser.Semi_, 0);
	};

	value_part() {
	    return this.getTypedRuleContext(Value_partContext,0);
	};

	specification_part() {
	    return this.getTypedRuleContext(Specification_partContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterProcedure_heading(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitProcedure_heading(this);
		}
	}


}



class Procedure_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_procedure_body;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	code() {
	    return this.getTypedRuleContext(CodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterProcedure_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitProcedure_body(this);
		}
	}


}



class Procedure_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = algol60Parser.RULE_procedure_declaration;
    }

	Procedure_() {
	    return this.getToken(algol60Parser.Procedure_, 0);
	};

	procedure_heading() {
	    return this.getTypedRuleContext(Procedure_headingContext,0);
	};

	procedure_body() {
	    return this.getTypedRuleContext(Procedure_bodyContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.enterProcedure_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof algol60Listener ) {
	        listener.exitProcedure_declaration(this);
		}
	}


}




algol60Parser.Empty_Context = Empty_Context; 
algol60Parser.IntegerContext = IntegerContext; 
algol60Parser.NumberContext = NumberContext; 
algol60Parser.ExpressionContext = ExpressionContext; 
algol60Parser.Variable_identifierContext = Variable_identifierContext; 
algol60Parser.Simple_variableContext = Simple_variableContext; 
algol60Parser.Subscript_expressionContext = Subscript_expressionContext; 
algol60Parser.Subscript_listContext = Subscript_listContext; 
algol60Parser.Array_identifierContext = Array_identifierContext; 
algol60Parser.Subscripted_variableContext = Subscripted_variableContext; 
algol60Parser.VariableContext = VariableContext; 
algol60Parser.Procedure_identifierContext = Procedure_identifierContext; 
algol60Parser.Parameter_delimiterContext = Parameter_delimiterContext; 
algol60Parser.Actual_parameterContext = Actual_parameterContext; 
algol60Parser.Actual_parameter_listContext = Actual_parameter_listContext; 
algol60Parser.Function_designatorContext = Function_designatorContext; 
algol60Parser.Adding_operatorContext = Adding_operatorContext; 
algol60Parser.Multiplying_operatorContext = Multiplying_operatorContext; 
algol60Parser.PrimaryContext = PrimaryContext; 
algol60Parser.FactorContext = FactorContext; 
algol60Parser.TermContext = TermContext; 
algol60Parser.Simple_arithmetic_expressionContext = Simple_arithmetic_expressionContext; 
algol60Parser.If_clauseContext = If_clauseContext; 
algol60Parser.Arithmetic_expressionContext = Arithmetic_expressionContext; 
algol60Parser.RelationContext = RelationContext; 
algol60Parser.Boolean_primaryContext = Boolean_primaryContext; 
algol60Parser.Boolean_secondaryContext = Boolean_secondaryContext; 
algol60Parser.Boolean_factorContext = Boolean_factorContext; 
algol60Parser.Boolean_termContext = Boolean_termContext; 
algol60Parser.ImplicationContext = ImplicationContext; 
algol60Parser.Simple_booleanContext = Simple_booleanContext; 
algol60Parser.Boolean_expressionContext = Boolean_expressionContext; 
algol60Parser.LabelContext = LabelContext; 
algol60Parser.Switch_identifierContext = Switch_identifierContext; 
algol60Parser.Switch_designatorContext = Switch_designatorContext; 
algol60Parser.Simple_designational_expressionContext = Simple_designational_expressionContext; 
algol60Parser.Designational_expressionContext = Designational_expressionContext; 
algol60Parser.Unlabelled_basic_statementContext = Unlabelled_basic_statementContext; 
algol60Parser.Basic_statementContext = Basic_statementContext; 
algol60Parser.Unconditional_statementContext = Unconditional_statementContext; 
algol60Parser.StatementContext = StatementContext; 
algol60Parser.Compound_tailContext = Compound_tailContext; 
algol60Parser.Block_headContext = Block_headContext; 
algol60Parser.Unlabelled_compoundContext = Unlabelled_compoundContext; 
algol60Parser.Unlabelled_blockContext = Unlabelled_blockContext; 
algol60Parser.Compound_statementContext = Compound_statementContext; 
algol60Parser.BlockContext = BlockContext; 
algol60Parser.ProgramContext = ProgramContext; 
algol60Parser.DestinationContext = DestinationContext; 
algol60Parser.Left_partContext = Left_partContext; 
algol60Parser.Left_part_listContext = Left_part_listContext; 
algol60Parser.Assignment_statementContext = Assignment_statementContext; 
algol60Parser.Go_to_statementContext = Go_to_statementContext; 
algol60Parser.Dummy_statementContext = Dummy_statementContext; 
algol60Parser.If_statementContext = If_statementContext; 
algol60Parser.Conditional_statementContext = Conditional_statementContext; 
algol60Parser.For_list_elementContext = For_list_elementContext; 
algol60Parser.For_listContext = For_listContext; 
algol60Parser.For_clauseContext = For_clauseContext; 
algol60Parser.For_statementContext = For_statementContext; 
algol60Parser.Actual_parameter_partContext = Actual_parameter_partContext; 
algol60Parser.Procedure_statementContext = Procedure_statementContext; 
algol60Parser.CodeContext = CodeContext; 
algol60Parser.DeclarationContext = DeclarationContext; 
algol60Parser.Type_listContext = Type_listContext; 
algol60Parser.Type_Context = Type_Context; 
algol60Parser.Local_or_ownContext = Local_or_ownContext; 
algol60Parser.Type_declarationContext = Type_declarationContext; 
algol60Parser.Lower_boundContext = Lower_boundContext; 
algol60Parser.Upper_boundContext = Upper_boundContext; 
algol60Parser.Bound_pairContext = Bound_pairContext; 
algol60Parser.Bound_pair_listContext = Bound_pair_listContext; 
algol60Parser.Array_segmentContext = Array_segmentContext; 
algol60Parser.Array_listContext = Array_listContext; 
algol60Parser.Array_declarerContext = Array_declarerContext; 
algol60Parser.Array_declarationContext = Array_declarationContext; 
algol60Parser.Switch_listContext = Switch_listContext; 
algol60Parser.Switch_declarationContext = Switch_declarationContext; 
algol60Parser.Formal_parameterContext = Formal_parameterContext; 
algol60Parser.Formal_parameter_listContext = Formal_parameter_listContext; 
algol60Parser.Formal_parameter_partContext = Formal_parameter_partContext; 
algol60Parser.Identifier_listContext = Identifier_listContext; 
algol60Parser.Value_partContext = Value_partContext; 
algol60Parser.SpecifierContext = SpecifierContext; 
algol60Parser.Specification_partContext = Specification_partContext; 
algol60Parser.Procedure_headingContext = Procedure_headingContext; 
algol60Parser.Procedure_bodyContext = Procedure_bodyContext; 
algol60Parser.Procedure_declarationContext = Procedure_declarationContext; 
