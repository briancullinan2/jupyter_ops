// Generated from Resources/Parsers/tnsnames/tnsnamesParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import tnsnamesParserListener from './tnsnamesParserListener.js';
const serializedATN = [4,1,84,782,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
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
7,85,2,86,7,86,2,87,7,87,2,88,7,88,1,0,1,0,1,0,5,0,182,8,0,10,0,12,0,185,
9,0,1,1,1,1,1,1,1,1,3,1,191,8,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,4,3,
202,8,3,11,3,12,3,203,3,3,206,8,3,1,4,1,4,1,4,1,4,1,4,4,4,213,8,4,11,4,12,
4,214,3,4,217,8,4,1,4,1,4,1,5,1,5,1,5,5,5,224,8,5,10,5,12,5,227,9,5,1,6,
1,6,1,6,1,6,4,6,233,8,6,11,6,12,6,234,3,6,237,8,6,1,7,1,7,1,7,1,7,3,7,243,
8,7,1,7,4,7,246,8,7,11,7,12,7,247,1,7,3,7,251,8,7,1,7,1,7,1,8,4,8,256,8,
8,11,8,12,8,257,1,9,1,9,1,9,3,9,263,8,9,1,10,1,10,1,10,1,10,3,10,269,8,10,
1,10,1,10,4,10,273,8,10,11,10,12,10,274,3,10,277,8,10,1,10,3,10,280,8,10,
1,10,1,10,3,10,284,8,10,1,10,1,10,1,11,4,11,289,8,11,11,11,12,11,290,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,305,8,12,1,13,
1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,15,1,15,1,15,1,
15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,
1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,
20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,
1,22,1,23,1,23,1,23,1,23,3,23,371,8,23,1,23,4,23,374,8,23,11,23,12,23,375,
1,23,3,23,379,8,23,1,23,1,23,1,24,4,24,384,8,24,11,24,12,24,385,1,25,1,25,
1,25,3,25,391,8,25,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,
1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,3,29,416,8,29,
1,29,1,29,1,30,4,30,421,8,30,11,30,12,30,422,1,31,1,31,3,31,427,8,31,1,32,
1,32,1,32,1,32,1,32,3,32,434,8,32,1,33,1,33,1,34,4,34,439,8,34,11,34,12,
34,440,1,35,1,35,1,35,3,35,446,8,35,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,
37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,
4,39,470,8,39,11,39,12,39,471,1,39,3,39,475,8,39,1,40,1,40,1,41,1,41,1,42,
4,42,482,8,42,11,42,12,42,483,1,43,1,43,3,43,488,8,43,1,44,1,44,1,44,1,44,
1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,1,46,1,46,1,47,4,47,505,8,47,11,
47,12,47,506,1,48,1,48,3,48,511,8,48,1,49,1,49,1,49,1,49,1,49,1,49,1,50,
1,50,1,50,1,50,1,50,1,50,1,51,1,51,1,52,4,52,528,8,52,11,52,12,52,529,1,
53,1,53,1,53,3,53,535,8,53,1,54,1,54,1,54,1,54,1,54,1,54,1,55,1,55,1,55,
1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,57,1,57,1,58,4,58,558,8,58,
11,58,12,58,559,1,59,1,59,1,59,1,59,3,59,566,8,59,1,60,1,60,1,60,1,60,1,
60,1,60,1,61,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,62,1,62,1,62,1,62,1,63,
1,63,1,63,1,63,1,63,1,63,1,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,
65,1,66,4,66,603,8,66,11,66,12,66,604,1,67,1,67,3,67,609,8,67,1,68,1,68,
1,68,1,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,70,1,70,1,70,1,70,1,
70,1,70,1,71,4,71,630,8,71,11,71,12,71,631,1,72,1,72,1,72,1,72,1,72,1,72,
1,72,1,72,1,72,3,72,643,8,72,1,73,1,73,1,73,1,73,1,73,1,73,5,73,651,8,73,
10,73,12,73,654,9,73,1,73,1,73,1,74,1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,
75,1,75,1,75,1,75,5,75,670,8,75,10,75,12,75,673,9,75,1,75,1,75,1,76,1,76,
1,76,1,76,1,76,1,76,1,77,1,77,1,77,1,77,1,77,1,77,5,77,689,8,77,10,77,12,
77,692,9,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,
1,79,1,79,1,79,3,79,709,8,79,1,79,1,79,1,79,5,79,714,8,79,10,79,12,79,717,
9,79,1,79,1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,
81,1,82,4,82,734,8,82,11,82,12,82,735,1,83,1,83,1,83,1,83,1,83,3,83,743,
8,83,1,84,1,84,1,84,1,84,1,84,1,84,1,85,1,85,1,85,1,85,1,85,1,85,5,85,757,
8,85,10,85,12,85,760,9,85,1,85,1,85,1,86,1,86,1,86,1,86,1,86,1,86,1,87,1,
87,1,87,1,87,1,87,1,87,1,88,1,88,1,88,1,88,1,88,1,88,1,88,0,0,89,0,2,4,6,
8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
142,144,146,148,150,152,154,156,158,160,162,164,166,168,170,172,174,176,
0,5,1,0,21,23,1,0,21,22,1,0,27,29,1,0,68,70,1,0,72,73,779,0,183,1,0,0,0,
2,186,1,0,0,0,4,192,1,0,0,0,6,196,1,0,0,0,8,207,1,0,0,0,10,220,1,0,0,0,12,
236,1,0,0,0,14,238,1,0,0,0,16,255,1,0,0,0,18,262,1,0,0,0,20,264,1,0,0,0,
22,288,1,0,0,0,24,304,1,0,0,0,26,306,1,0,0,0,28,312,1,0,0,0,30,318,1,0,0,
0,32,324,1,0,0,0,34,330,1,0,0,0,36,336,1,0,0,0,38,342,1,0,0,0,40,348,1,0,
0,0,42,354,1,0,0,0,44,360,1,0,0,0,46,366,1,0,0,0,48,383,1,0,0,0,50,390,1,
0,0,0,52,392,1,0,0,0,54,398,1,0,0,0,56,404,1,0,0,0,58,410,1,0,0,0,60,420,
1,0,0,0,62,426,1,0,0,0,64,433,1,0,0,0,66,435,1,0,0,0,68,438,1,0,0,0,70,445,
1,0,0,0,72,447,1,0,0,0,74,453,1,0,0,0,76,459,1,0,0,0,78,474,1,0,0,0,80,476,
1,0,0,0,82,478,1,0,0,0,84,481,1,0,0,0,86,487,1,0,0,0,88,489,1,0,0,0,90,495,
1,0,0,0,92,501,1,0,0,0,94,504,1,0,0,0,96,510,1,0,0,0,98,512,1,0,0,0,100,
518,1,0,0,0,102,524,1,0,0,0,104,527,1,0,0,0,106,534,1,0,0,0,108,536,1,0,
0,0,110,542,1,0,0,0,112,548,1,0,0,0,114,554,1,0,0,0,116,557,1,0,0,0,118,
565,1,0,0,0,120,567,1,0,0,0,122,573,1,0,0,0,124,579,1,0,0,0,126,585,1,0,
0,0,128,591,1,0,0,0,130,595,1,0,0,0,132,602,1,0,0,0,134,608,1,0,0,0,136,
610,1,0,0,0,138,616,1,0,0,0,140,622,1,0,0,0,142,629,1,0,0,0,144,642,1,0,
0,0,146,644,1,0,0,0,148,657,1,0,0,0,150,663,1,0,0,0,152,676,1,0,0,0,154,
682,1,0,0,0,156,695,1,0,0,0,158,701,1,0,0,0,160,720,1,0,0,0,162,726,1,0,
0,0,164,733,1,0,0,0,166,742,1,0,0,0,168,744,1,0,0,0,170,750,1,0,0,0,172,
763,1,0,0,0,174,769,1,0,0,0,176,775,1,0,0,0,178,182,3,2,1,0,179,182,3,4,
2,0,180,182,3,6,3,0,181,178,1,0,0,0,181,179,1,0,0,0,181,180,1,0,0,0,182,
185,1,0,0,0,183,181,1,0,0,0,183,184,1,0,0,0,184,1,1,0,0,0,185,183,1,0,0,
0,186,187,3,10,5,0,187,190,5,5,0,0,188,191,3,14,7,0,189,191,3,20,10,0,190,
188,1,0,0,0,190,189,1,0,0,0,191,3,1,0,0,0,192,193,5,56,0,0,193,194,5,79,
0,0,194,195,5,80,0,0,195,5,1,0,0,0,196,197,3,12,6,0,197,205,5,5,0,0,198,
206,3,8,4,0,199,206,3,46,23,0,200,202,3,58,29,0,201,200,1,0,0,0,202,203,
1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,204,206,1,0,0,0,205,198,1,0,0,0,
205,199,1,0,0,0,205,201,1,0,0,0,206,7,1,0,0,0,207,208,5,1,0,0,208,209,5,
12,0,0,209,216,5,5,0,0,210,217,3,46,23,0,211,213,3,58,29,0,212,211,1,0,0,
0,213,214,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,217,1,0,0,0,216,210,
1,0,0,0,216,212,1,0,0,0,217,218,1,0,0,0,218,219,5,2,0,0,219,9,1,0,0,0,220,
225,3,12,6,0,221,222,5,7,0,0,222,224,3,12,6,0,223,221,1,0,0,0,224,227,1,
0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,11,1,0,0,0,227,225,1,0,0,0,228,
237,5,77,0,0,229,232,5,77,0,0,230,231,5,6,0,0,231,233,5,77,0,0,232,230,1,
0,0,0,233,234,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,237,1,0,0,0,236,
228,1,0,0,0,236,229,1,0,0,0,237,13,1,0,0,0,238,239,5,1,0,0,239,240,5,11,
0,0,240,242,5,5,0,0,241,243,3,16,8,0,242,241,1,0,0,0,242,243,1,0,0,0,243,
245,1,0,0,0,244,246,3,20,10,0,245,244,1,0,0,0,246,247,1,0,0,0,247,245,1,
0,0,0,247,248,1,0,0,0,248,250,1,0,0,0,249,251,3,16,8,0,250,249,1,0,0,0,250,
251,1,0,0,0,251,252,1,0,0,0,252,253,5,2,0,0,253,15,1,0,0,0,254,256,3,18,
9,0,255,254,1,0,0,0,256,257,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,
17,1,0,0,0,259,263,3,52,26,0,260,263,3,54,27,0,261,263,3,56,28,0,262,259,
1,0,0,0,262,260,1,0,0,0,262,261,1,0,0,0,263,19,1,0,0,0,264,265,5,1,0,0,265,
266,5,12,0,0,266,268,5,5,0,0,267,269,3,22,11,0,268,267,1,0,0,0,268,269,1,
0,0,0,269,276,1,0,0,0,270,277,3,46,23,0,271,273,3,58,29,0,272,271,1,0,0,
0,273,274,1,0,0,0,274,272,1,0,0,0,274,275,1,0,0,0,275,277,1,0,0,0,276,270,
1,0,0,0,276,272,1,0,0,0,277,279,1,0,0,0,278,280,3,22,11,0,279,278,1,0,0,
0,279,280,1,0,0,0,280,281,1,0,0,0,281,283,3,140,70,0,282,284,3,22,11,0,283,
282,1,0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,286,5,2,0,0,286,21,1,0,0,
0,287,289,3,24,12,0,288,287,1,0,0,0,289,290,1,0,0,0,290,288,1,0,0,0,290,
291,1,0,0,0,291,23,1,0,0,0,292,305,3,26,13,0,293,305,3,52,26,0,294,305,3,
54,27,0,295,305,3,28,14,0,296,305,3,30,15,0,297,305,3,32,16,0,298,305,3,
56,28,0,299,305,3,34,17,0,300,305,3,36,18,0,301,305,3,38,19,0,302,305,3,
40,20,0,303,305,3,42,21,0,304,292,1,0,0,0,304,293,1,0,0,0,304,294,1,0,0,
0,304,295,1,0,0,0,304,296,1,0,0,0,304,297,1,0,0,0,304,298,1,0,0,0,304,299,
1,0,0,0,304,300,1,0,0,0,304,301,1,0,0,0,304,302,1,0,0,0,304,303,1,0,0,0,
305,25,1,0,0,0,306,307,5,1,0,0,307,308,5,34,0,0,308,309,5,5,0,0,309,310,
5,35,0,0,310,311,5,2,0,0,311,27,1,0,0,0,312,313,5,1,0,0,313,314,5,36,0,0,
314,315,5,5,0,0,315,316,5,25,0,0,316,317,5,2,0,0,317,29,1,0,0,0,318,319,
5,1,0,0,319,320,5,37,0,0,320,321,5,5,0,0,321,322,5,25,0,0,322,323,5,2,0,
0,323,31,1,0,0,0,324,325,5,1,0,0,325,326,5,38,0,0,326,327,5,5,0,0,327,328,
5,25,0,0,328,329,5,2,0,0,329,33,1,0,0,0,330,331,5,1,0,0,331,332,5,41,0,0,
332,333,5,5,0,0,333,334,5,77,0,0,334,335,5,2,0,0,335,35,1,0,0,0,336,337,
5,1,0,0,337,338,5,51,0,0,338,339,5,5,0,0,339,340,3,44,22,0,340,341,5,2,0,
0,341,37,1,0,0,0,342,343,5,1,0,0,343,344,5,53,0,0,344,345,5,5,0,0,345,346,
5,25,0,0,346,347,5,2,0,0,347,39,1,0,0,0,348,349,5,1,0,0,349,350,5,54,0,0,
350,351,5,5,0,0,351,352,5,25,0,0,352,353,5,2,0,0,353,41,1,0,0,0,354,355,
5,1,0,0,355,356,5,55,0,0,356,357,5,5,0,0,357,358,5,25,0,0,358,359,5,2,0,
0,359,43,1,0,0,0,360,361,5,1,0,0,361,362,5,52,0,0,362,363,5,5,0,0,363,364,
5,57,0,0,364,365,5,2,0,0,365,45,1,0,0,0,366,367,5,1,0,0,367,368,5,13,0,0,
368,370,5,5,0,0,369,371,3,48,24,0,370,369,1,0,0,0,370,371,1,0,0,0,371,373,
1,0,0,0,372,374,3,58,29,0,373,372,1,0,0,0,374,375,1,0,0,0,375,373,1,0,0,
0,375,376,1,0,0,0,376,378,1,0,0,0,377,379,3,48,24,0,378,377,1,0,0,0,378,
379,1,0,0,0,379,380,1,0,0,0,380,381,5,2,0,0,381,47,1,0,0,0,382,384,3,50,
25,0,383,382,1,0,0,0,384,385,1,0,0,0,385,383,1,0,0,0,385,386,1,0,0,0,386,
49,1,0,0,0,387,391,3,52,26,0,388,391,3,54,27,0,389,391,3,56,28,0,390,387,
1,0,0,0,390,388,1,0,0,0,390,389,1,0,0,0,391,51,1,0,0,0,392,393,5,1,0,0,393,
394,5,31,0,0,394,395,5,5,0,0,395,396,7,0,0,0,396,397,5,2,0,0,397,53,1,0,
0,0,398,399,5,1,0,0,399,400,5,30,0,0,400,401,5,5,0,0,401,402,7,0,0,0,402,
403,5,2,0,0,403,55,1,0,0,0,404,405,5,1,0,0,405,406,5,39,0,0,406,407,5,5,
0,0,407,408,7,1,0,0,408,409,5,2,0,0,409,57,1,0,0,0,410,411,5,1,0,0,411,412,
5,14,0,0,412,413,5,5,0,0,413,415,3,64,32,0,414,416,3,60,30,0,415,414,1,0,
0,0,415,416,1,0,0,0,416,417,1,0,0,0,417,418,5,2,0,0,418,59,1,0,0,0,419,421,
3,62,31,0,420,419,1,0,0,0,421,422,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,
0,423,61,1,0,0,0,424,427,3,32,16,0,425,427,3,30,15,0,426,424,1,0,0,0,426,
425,1,0,0,0,427,63,1,0,0,0,428,434,3,66,33,0,429,434,3,82,41,0,430,434,3,
92,46,0,431,434,3,102,51,0,432,434,3,114,57,0,433,428,1,0,0,0,433,429,1,
0,0,0,433,430,1,0,0,0,433,431,1,0,0,0,433,432,1,0,0,0,434,65,1,0,0,0,435,
436,3,68,34,0,436,67,1,0,0,0,437,439,3,70,35,0,438,437,1,0,0,0,439,440,1,
0,0,0,440,438,1,0,0,0,440,441,1,0,0,0,441,69,1,0,0,0,442,446,3,72,36,0,443,
446,3,74,37,0,444,446,3,76,38,0,445,442,1,0,0,0,445,443,1,0,0,0,445,444,
1,0,0,0,446,71,1,0,0,0,447,448,5,1,0,0,448,449,5,17,0,0,449,450,5,5,0,0,
450,451,3,78,39,0,451,452,5,2,0,0,452,73,1,0,0,0,453,454,5,1,0,0,454,455,
5,18,0,0,455,456,5,5,0,0,456,457,3,80,40,0,457,458,5,2,0,0,458,75,1,0,0,
0,459,460,5,1,0,0,460,461,5,15,0,0,461,462,5,5,0,0,462,463,5,16,0,0,463,
464,5,2,0,0,464,77,1,0,0,0,465,475,5,77,0,0,466,469,5,77,0,0,467,468,5,6,
0,0,468,470,5,77,0,0,469,467,1,0,0,0,470,471,1,0,0,0,471,469,1,0,0,0,471,
472,1,0,0,0,472,475,1,0,0,0,473,475,5,20,0,0,474,465,1,0,0,0,474,466,1,0,
0,0,474,473,1,0,0,0,475,79,1,0,0,0,476,477,5,25,0,0,477,81,1,0,0,0,478,479,
3,84,42,0,479,83,1,0,0,0,480,482,3,86,43,0,481,480,1,0,0,0,482,483,1,0,0,
0,483,481,1,0,0,0,483,484,1,0,0,0,484,85,1,0,0,0,485,488,3,88,44,0,486,488,
3,90,45,0,487,485,1,0,0,0,487,486,1,0,0,0,488,87,1,0,0,0,489,490,5,1,0,0,
490,491,5,15,0,0,491,492,5,5,0,0,492,493,5,43,0,0,493,494,5,2,0,0,494,89,
1,0,0,0,495,496,5,1,0,0,496,497,5,42,0,0,497,498,5,5,0,0,498,499,5,77,0,
0,499,500,5,2,0,0,500,91,1,0,0,0,501,502,3,94,47,0,502,93,1,0,0,0,503,505,
3,96,48,0,504,503,1,0,0,0,505,506,1,0,0,0,506,504,1,0,0,0,506,507,1,0,0,
0,507,95,1,0,0,0,508,511,3,98,49,0,509,511,3,100,50,0,510,508,1,0,0,0,510,
509,1,0,0,0,511,97,1,0,0,0,512,513,5,1,0,0,513,514,5,15,0,0,514,515,5,5,
0,0,515,516,5,44,0,0,516,517,5,2,0,0,517,99,1,0,0,0,518,519,5,1,0,0,519,
520,5,40,0,0,520,521,5,5,0,0,521,522,5,77,0,0,522,523,5,2,0,0,523,101,1,
0,0,0,524,525,3,104,52,0,525,103,1,0,0,0,526,528,3,106,53,0,527,526,1,0,
0,0,528,529,1,0,0,0,529,527,1,0,0,0,529,530,1,0,0,0,530,105,1,0,0,0,531,
535,3,108,54,0,532,535,3,110,55,0,533,535,3,112,56,0,534,531,1,0,0,0,534,
532,1,0,0,0,534,533,1,0,0,0,535,107,1,0,0,0,536,537,5,1,0,0,537,538,5,15,
0,0,538,539,5,5,0,0,539,540,5,45,0,0,540,541,5,2,0,0,541,109,1,0,0,0,542,
543,5,1,0,0,543,544,5,65,0,0,544,545,5,5,0,0,545,546,5,77,0,0,546,547,5,
2,0,0,547,111,1,0,0,0,548,549,5,1,0,0,549,550,5,47,0,0,550,551,5,5,0,0,551,
552,5,77,0,0,552,553,5,2,0,0,553,113,1,0,0,0,554,555,3,116,58,0,555,115,
1,0,0,0,556,558,3,118,59,0,557,556,1,0,0,0,558,559,1,0,0,0,559,557,1,0,0,
0,559,560,1,0,0,0,560,117,1,0,0,0,561,566,3,120,60,0,562,566,3,122,61,0,
563,566,3,124,62,0,564,566,3,126,63,0,565,561,1,0,0,0,565,562,1,0,0,0,565,
563,1,0,0,0,565,564,1,0,0,0,566,119,1,0,0,0,567,568,5,1,0,0,568,569,5,15,
0,0,569,570,5,5,0,0,570,571,5,46,0,0,571,572,5,2,0,0,572,121,1,0,0,0,573,
574,5,1,0,0,574,575,5,48,0,0,575,576,5,5,0,0,576,577,5,77,0,0,577,578,5,
2,0,0,578,123,1,0,0,0,579,580,5,1,0,0,580,581,5,49,0,0,581,582,5,5,0,0,582,
583,5,77,0,0,583,584,5,2,0,0,584,125,1,0,0,0,585,586,5,1,0,0,586,587,5,50,
0,0,587,588,5,5,0,0,588,589,3,128,64,0,589,590,5,2,0,0,590,127,1,0,0,0,591,
592,5,9,0,0,592,593,3,130,65,0,593,594,5,9,0,0,594,129,1,0,0,0,595,596,5,
1,0,0,596,597,5,12,0,0,597,598,5,5,0,0,598,599,3,132,66,0,599,600,5,2,0,
0,600,131,1,0,0,0,601,603,3,134,67,0,602,601,1,0,0,0,603,604,1,0,0,0,604,
602,1,0,0,0,604,605,1,0,0,0,605,133,1,0,0,0,606,609,3,136,68,0,607,609,3,
138,69,0,608,606,1,0,0,0,608,607,1,0,0,0,609,135,1,0,0,0,610,611,5,1,0,0,
611,612,5,19,0,0,612,613,5,5,0,0,613,614,5,21,0,0,614,615,5,2,0,0,615,137,
1,0,0,0,616,617,5,1,0,0,617,618,5,14,0,0,618,619,5,5,0,0,619,620,3,120,60,
0,620,621,5,2,0,0,621,139,1,0,0,0,622,623,5,1,0,0,623,624,5,10,0,0,624,625,
5,5,0,0,625,626,3,142,71,0,626,627,5,2,0,0,627,141,1,0,0,0,628,630,3,144,
72,0,629,628,1,0,0,0,630,631,1,0,0,0,631,629,1,0,0,0,631,632,1,0,0,0,632,
143,1,0,0,0,633,643,3,146,73,0,634,643,3,148,74,0,635,643,3,150,75,0,636,
643,3,152,76,0,637,643,3,154,77,0,638,643,3,156,78,0,639,643,3,158,79,0,
640,643,3,160,80,0,641,643,3,162,81,0,642,633,1,0,0,0,642,634,1,0,0,0,642,
635,1,0,0,0,642,636,1,0,0,0,642,637,1,0,0,0,642,638,1,0,0,0,642,639,1,0,
0,0,642,640,1,0,0,0,642,641,1,0,0,0,643,145,1,0,0,0,644,645,5,1,0,0,645,
646,5,58,0,0,646,647,5,5,0,0,647,652,5,77,0,0,648,649,5,6,0,0,649,651,5,
77,0,0,650,648,1,0,0,0,651,654,1,0,0,0,652,650,1,0,0,0,652,653,1,0,0,0,653,
655,1,0,0,0,654,652,1,0,0,0,655,656,5,2,0,0,656,147,1,0,0,0,657,658,5,1,
0,0,658,659,5,59,0,0,659,660,5,5,0,0,660,661,5,77,0,0,661,662,5,2,0,0,662,
149,1,0,0,0,663,664,5,1,0,0,664,665,5,60,0,0,665,666,5,5,0,0,666,671,5,77,
0,0,667,668,5,6,0,0,668,670,5,77,0,0,669,667,1,0,0,0,670,673,1,0,0,0,671,
669,1,0,0,0,671,672,1,0,0,0,672,674,1,0,0,0,673,671,1,0,0,0,674,675,5,2,
0,0,675,151,1,0,0,0,676,677,5,1,0,0,677,678,5,61,0,0,678,679,5,5,0,0,679,
680,3,164,82,0,680,681,5,2,0,0,681,153,1,0,0,0,682,683,5,1,0,0,683,684,5,
62,0,0,684,685,5,5,0,0,685,690,5,77,0,0,686,687,5,6,0,0,687,689,5,77,0,0,
688,686,1,0,0,0,689,692,1,0,0,0,690,688,1,0,0,0,690,691,1,0,0,0,691,693,
1,0,0,0,692,690,1,0,0,0,693,694,5,2,0,0,694,155,1,0,0,0,695,696,5,1,0,0,
696,697,5,63,0,0,697,698,5,5,0,0,698,699,5,26,0,0,699,700,5,2,0,0,700,157,
1,0,0,0,701,702,5,1,0,0,702,703,5,64,0,0,703,708,5,5,0,0,704,705,5,3,0,0,
705,706,5,6,0,0,706,707,5,77,0,0,707,709,5,4,0,0,708,704,1,0,0,0,708,709,
1,0,0,0,709,710,1,0,0,0,710,715,5,77,0,0,711,712,5,6,0,0,712,714,5,77,0,
0,713,711,1,0,0,0,714,717,1,0,0,0,715,713,1,0,0,0,715,716,1,0,0,0,716,718,
1,0,0,0,717,715,1,0,0,0,718,719,5,2,0,0,719,159,1,0,0,0,720,721,5,1,0,0,
721,722,5,65,0,0,722,723,5,5,0,0,723,724,7,2,0,0,724,725,5,2,0,0,725,161,
1,0,0,0,726,727,5,1,0,0,727,728,5,32,0,0,728,729,5,5,0,0,729,730,5,33,0,
0,730,731,5,2,0,0,731,163,1,0,0,0,732,734,3,166,83,0,733,732,1,0,0,0,734,
735,1,0,0,0,735,733,1,0,0,0,735,736,1,0,0,0,736,165,1,0,0,0,737,743,3,168,
84,0,738,743,3,170,85,0,739,743,3,172,86,0,740,743,3,174,87,0,741,743,3,
176,88,0,742,737,1,0,0,0,742,738,1,0,0,0,742,739,1,0,0,0,742,740,1,0,0,0,
742,741,1,0,0,0,743,167,1,0,0,0,744,745,5,1,0,0,745,746,5,67,0,0,746,747,
5,5,0,0,747,748,7,3,0,0,748,749,5,2,0,0,749,169,1,0,0,0,750,751,5,1,0,0,
751,752,5,66,0,0,752,753,5,5,0,0,753,758,5,77,0,0,754,755,5,6,0,0,755,757,
5,77,0,0,756,754,1,0,0,0,757,760,1,0,0,0,758,756,1,0,0,0,758,759,1,0,0,0,
759,761,1,0,0,0,760,758,1,0,0,0,761,762,5,2,0,0,762,171,1,0,0,0,763,764,
5,1,0,0,764,765,5,71,0,0,765,766,5,5,0,0,766,767,7,4,0,0,767,768,5,2,0,0,
768,173,1,0,0,0,769,770,5,1,0,0,770,771,5,74,0,0,771,772,5,5,0,0,772,773,
5,25,0,0,773,774,5,2,0,0,774,175,1,0,0,0,775,776,5,1,0,0,776,777,5,75,0,
0,777,778,5,5,0,0,778,779,5,25,0,0,779,780,5,2,0,0,780,177,1,0,0,0,55,181,
183,190,203,205,214,216,225,234,236,242,247,250,257,262,268,274,276,279,
283,290,304,370,375,378,385,390,415,422,426,433,440,445,471,474,483,487,
506,510,529,534,559,565,604,608,631,642,652,671,690,708,715,735,742,758];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class tnsnamesParser extends antlr4.Parser {

    static grammarFileName = "tnsnamesParser.g4";
    static literalNames = [ null, "'('", "')'", "'['", "']'", null, "'.'", 
                            "','", "'\"'", "'''" ];
    static symbolicNames = [ null, "L_PAREN", "R_PAREN", "L_SQUARE", "R_SQUARE", 
                             "EQUAL", "DOT", "COMMA", "D_QUOTE", "S_QUOTE", 
                             "CONNECT_DATA", "DESCRIPTION_LIST", "DESCRIPTION", 
                             "ADDRESS_LIST", "ADDRESS", "PROTOCOL", "TCP", 
                             "HOST", "PORT", "LOCAL", "IP", "YES_NO", "ON_OFF", 
                             "TRUE_FALSE", "COMMENT", "INT", "OK", "DEDICATED", 
                             "SHARED", "POOLED", "LOAD_BALANCE", "FAILOVER", 
                             "UR", "UR_A", "ENABLE", "BROKEN", "SDU", "RECV_BUF", 
                             "SEND_BUF", "SOURCE_ROUTE", "SERVICE", "SERVICE_TYPE", 
                             "KEY", "IPC", "SPX", "NMP", "BEQ", "PIPE", 
                             "PROGRAM", "ARGV0", "ARGS", "SECURITY", "SSL_CERT", 
                             "CONN_TIMEOUT", "RETRY_COUNT", "TCT", "IFILE", 
                             "DQ_STRING", "SERVICE_NAME", "SID", "INSTANCE_NAME", 
                             "FAILOVER_MODE", "GLOBAL_NAME", "HS", "RDB_DATABASE", 
                             "SERVER", "BACKUP", "TYPE", "SESSION", "SELECT", 
                             "NONE", "METHOD", "BASIC", "PRECONNECT", "RETRIES", 
                             "DELAY", "QUAD", "ID", "WS", "I_EQUAL", "I_STRING", 
                             "ISQ_STRING", "IUQ_STRING", "I_WS", "I_COMMENT" ];
    static ruleNames = [ "tnsnames", "tns_entry", "ifile", "lsnr_entry", 
                         "lsnr_description", "alias_list", "alias", "description_list", 
                         "dl_params", "dl_parameter", "description", "d_params", 
                         "d_parameter", "d_enable", "d_sdu", "d_recv_buf", 
                         "d_send_buf", "d_service_type", "d_security", "d_conn_timeout", 
                         "d_retry_count", "d_tct", "ds_parameter", "address_list", 
                         "al_params", "al_parameter", "al_failover", "al_load_balance", 
                         "al_source_route", "address", "a_params", "a_parameter", 
                         "protocol_info", "tcp_protocol", "tcp_params", 
                         "tcp_parameter", "tcp_host", "tcp_port", "tcp_tcp", 
                         "host", "port", "ipc_protocol", "ipc_params", "ipc_parameter", 
                         "ipc_ipc", "ipc_key", "spx_protocol", "spx_params", 
                         "spx_parameter", "spx_spx", "spx_service", "nmp_protocol", 
                         "nmp_params", "nmp_parameter", "nmp_nmp", "nmp_server", 
                         "nmp_pipe", "beq_protocol", "beq_params", "beq_parameter", 
                         "beq_beq", "beq_program", "beq_argv0", "beq_args", 
                         "ba_parameter", "ba_description", "bad_params", 
                         "bad_parameter", "bad_local", "bad_address", "connect_data", 
                         "cd_params", "cd_parameter", "cd_service_name", 
                         "cd_sid", "cd_instance_name", "cd_failover_mode", 
                         "cd_global_name", "cd_hs", "cd_rdb_database", "cd_server", 
                         "cd_ur", "fo_params", "fo_parameter", "fo_type", 
                         "fo_backup", "fo_method", "fo_retries", "fo_delay" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tnsnamesParser.ruleNames;
        this.literalNames = tnsnamesParser.literalNames;
        this.symbolicNames = tnsnamesParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	tnsnames() {
	    let localctx = new TnsnamesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tnsnamesParser.RULE_tnsnames);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tnsnamesParser.IFILE || _la===tnsnamesParser.ID) {
	            this.state = 181;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 178;
	                this.tns_entry();
	                break;

	            case 2:
	                this.state = 179;
	                this.ifile();
	                break;

	            case 3:
	                this.state = 180;
	                this.lsnr_entry();
	                break;

	            }
	            this.state = 185;
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



	tns_entry() {
	    let localctx = new Tns_entryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tnsnamesParser.RULE_tns_entry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.alias_list();
	        this.state = 187;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 188;
	            this.description_list();
	            break;

	        case 2:
	            this.state = 189;
	            this.description();
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



	ifile() {
	    let localctx = new IfileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tnsnamesParser.RULE_ifile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(tnsnamesParser.IFILE);
	        this.state = 193;
	        this.match(tnsnamesParser.I_EQUAL);
	        this.state = 194;
	        this.match(tnsnamesParser.I_STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lsnr_entry() {
	    let localctx = new Lsnr_entryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tnsnamesParser.RULE_lsnr_entry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.alias();
	        this.state = 197;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 205;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 198;
	            this.lsnr_description();
	            break;

	        case 2:
	            this.state = 199;
	            this.address_list();
	            break;

	        case 3:
	            this.state = 201; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 200;
	                this.address();
	                this.state = 203; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===tnsnamesParser.L_PAREN);
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



	lsnr_description() {
	    let localctx = new Lsnr_descriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tnsnamesParser.RULE_lsnr_description);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 208;
	        this.match(tnsnamesParser.DESCRIPTION);
	        this.state = 209;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 210;
	            this.address_list();
	            break;

	        case 2:
	            this.state = 212; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 211;
	                this.address();
	                this.state = 214; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===tnsnamesParser.L_PAREN);
	            break;

	        }
	        this.state = 218;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alias_list() {
	    let localctx = new Alias_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tnsnamesParser.RULE_alias_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.alias();
	        this.state = 225;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tnsnamesParser.COMMA) {
	            this.state = 221;
	            this.match(tnsnamesParser.COMMA);
	            this.state = 222;
	            this.alias();
	            this.state = 227;
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



	alias() {
	    let localctx = new AliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tnsnamesParser.RULE_alias);
	    var _la = 0; // Token type
	    try {
	        this.state = 236;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 228;
	            this.match(tnsnamesParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 229;
	            this.match(tnsnamesParser.ID);
	            this.state = 232; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 230;
	                this.match(tnsnamesParser.DOT);
	                this.state = 231;
	                this.match(tnsnamesParser.ID);
	                this.state = 234; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===tnsnamesParser.DOT);
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



	description_list() {
	    let localctx = new Description_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tnsnamesParser.RULE_description_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 239;
	        this.match(tnsnamesParser.DESCRIPTION_LIST);
	        this.state = 240;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 242;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 241;
	            this.dl_params();

	        }
	        this.state = 245; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 244;
	        		this.description();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 247; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,11, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tnsnamesParser.L_PAREN) {
	            this.state = 249;
	            this.dl_params();
	        }

	        this.state = 252;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dl_params() {
	    let localctx = new Dl_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tnsnamesParser.RULE_dl_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 254;
	        		this.dl_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 257; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
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



	dl_parameter() {
	    let localctx = new Dl_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tnsnamesParser.RULE_dl_parameter);
	    try {
	        this.state = 262;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 259;
	            this.al_failover();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 260;
	            this.al_load_balance();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 261;
	            this.al_source_route();
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



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tnsnamesParser.RULE_description);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 265;
	        this.match(tnsnamesParser.DESCRIPTION);
	        this.state = 266;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 267;
	            this.d_params();

	        }
	        this.state = 276;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 270;
	            this.address_list();
	            break;

	        case 2:
	            this.state = 272; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 271;
	            		this.address();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 274; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,16, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;

	        }
	        this.state = 279;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        if(la_===1) {
	            this.state = 278;
	            this.d_params();

	        }
	        this.state = 281;
	        this.connect_data();
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tnsnamesParser.L_PAREN) {
	            this.state = 282;
	            this.d_params();
	        }

	        this.state = 285;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_params() {
	    let localctx = new D_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tnsnamesParser.RULE_d_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 287;
	        		this.d_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 290; 
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



	d_parameter() {
	    let localctx = new D_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, tnsnamesParser.RULE_d_parameter);
	    try {
	        this.state = 304;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.d_enable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.al_failover();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 294;
	            this.al_load_balance();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 295;
	            this.d_sdu();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 296;
	            this.d_recv_buf();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 297;
	            this.d_send_buf();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 298;
	            this.al_source_route();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 299;
	            this.d_service_type();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 300;
	            this.d_security();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 301;
	            this.d_conn_timeout();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 302;
	            this.d_retry_count();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 303;
	            this.d_tct();
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



	d_enable() {
	    let localctx = new D_enableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, tnsnamesParser.RULE_d_enable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 307;
	        this.match(tnsnamesParser.ENABLE);
	        this.state = 308;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 309;
	        this.match(tnsnamesParser.BROKEN);
	        this.state = 310;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_sdu() {
	    let localctx = new D_sduContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, tnsnamesParser.RULE_d_sdu);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 313;
	        this.match(tnsnamesParser.SDU);
	        this.state = 314;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 315;
	        this.match(tnsnamesParser.INT);
	        this.state = 316;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_recv_buf() {
	    let localctx = new D_recv_bufContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, tnsnamesParser.RULE_d_recv_buf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 319;
	        this.match(tnsnamesParser.RECV_BUF);
	        this.state = 320;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 321;
	        this.match(tnsnamesParser.INT);
	        this.state = 322;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_send_buf() {
	    let localctx = new D_send_bufContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, tnsnamesParser.RULE_d_send_buf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 325;
	        this.match(tnsnamesParser.SEND_BUF);
	        this.state = 326;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 327;
	        this.match(tnsnamesParser.INT);
	        this.state = 328;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_service_type() {
	    let localctx = new D_service_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, tnsnamesParser.RULE_d_service_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 331;
	        this.match(tnsnamesParser.SERVICE_TYPE);
	        this.state = 332;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 333;
	        this.match(tnsnamesParser.ID);
	        this.state = 334;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_security() {
	    let localctx = new D_securityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, tnsnamesParser.RULE_d_security);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 337;
	        this.match(tnsnamesParser.SECURITY);
	        this.state = 338;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 339;
	        this.ds_parameter();
	        this.state = 340;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_conn_timeout() {
	    let localctx = new D_conn_timeoutContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, tnsnamesParser.RULE_d_conn_timeout);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 343;
	        this.match(tnsnamesParser.CONN_TIMEOUT);
	        this.state = 344;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 345;
	        this.match(tnsnamesParser.INT);
	        this.state = 346;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_retry_count() {
	    let localctx = new D_retry_countContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, tnsnamesParser.RULE_d_retry_count);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 349;
	        this.match(tnsnamesParser.RETRY_COUNT);
	        this.state = 350;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 351;
	        this.match(tnsnamesParser.INT);
	        this.state = 352;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	d_tct() {
	    let localctx = new D_tctContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, tnsnamesParser.RULE_d_tct);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 355;
	        this.match(tnsnamesParser.TCT);
	        this.state = 356;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 357;
	        this.match(tnsnamesParser.INT);
	        this.state = 358;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ds_parameter() {
	    let localctx = new Ds_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, tnsnamesParser.RULE_ds_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 361;
	        this.match(tnsnamesParser.SSL_CERT);
	        this.state = 362;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 363;
	        this.match(tnsnamesParser.DQ_STRING);
	        this.state = 364;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	address_list() {
	    let localctx = new Address_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, tnsnamesParser.RULE_address_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 367;
	        this.match(tnsnamesParser.ADDRESS_LIST);
	        this.state = 368;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 370;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 369;
	            this.al_params();

	        }
	        this.state = 373; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 372;
	        		this.address();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 375; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 378;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tnsnamesParser.L_PAREN) {
	            this.state = 377;
	            this.al_params();
	        }

	        this.state = 380;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	al_params() {
	    let localctx = new Al_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, tnsnamesParser.RULE_al_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 382;
	        		this.al_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 385; 
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



	al_parameter() {
	    let localctx = new Al_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, tnsnamesParser.RULE_al_parameter);
	    try {
	        this.state = 390;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 387;
	            this.al_failover();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 388;
	            this.al_load_balance();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 389;
	            this.al_source_route();
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



	al_failover() {
	    let localctx = new Al_failoverContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, tnsnamesParser.RULE_al_failover);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 393;
	        this.match(tnsnamesParser.FAILOVER);
	        this.state = 394;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 395;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tnsnamesParser.YES_NO) | (1 << tnsnamesParser.ON_OFF) | (1 << tnsnamesParser.TRUE_FALSE))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 396;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	al_load_balance() {
	    let localctx = new Al_load_balanceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, tnsnamesParser.RULE_al_load_balance);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 399;
	        this.match(tnsnamesParser.LOAD_BALANCE);
	        this.state = 400;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 401;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tnsnamesParser.YES_NO) | (1 << tnsnamesParser.ON_OFF) | (1 << tnsnamesParser.TRUE_FALSE))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 402;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	al_source_route() {
	    let localctx = new Al_source_routeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, tnsnamesParser.RULE_al_source_route);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 405;
	        this.match(tnsnamesParser.SOURCE_ROUTE);
	        this.state = 406;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 407;
	        _la = this._input.LA(1);
	        if(!(_la===tnsnamesParser.YES_NO || _la===tnsnamesParser.ON_OFF)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 408;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	address() {
	    let localctx = new AddressContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, tnsnamesParser.RULE_address);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 411;
	        this.match(tnsnamesParser.ADDRESS);
	        this.state = 412;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 413;
	        this.protocol_info();
	        this.state = 415;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tnsnamesParser.L_PAREN) {
	            this.state = 414;
	            this.a_params();
	        }

	        this.state = 417;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	a_params() {
	    let localctx = new A_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, tnsnamesParser.RULE_a_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 420; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 419;
	            this.a_parameter();
	            this.state = 422; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===tnsnamesParser.L_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	a_parameter() {
	    let localctx = new A_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, tnsnamesParser.RULE_a_parameter);
	    try {
	        this.state = 426;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 424;
	            this.d_send_buf();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 425;
	            this.d_recv_buf();
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



	protocol_info() {
	    let localctx = new Protocol_infoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, tnsnamesParser.RULE_protocol_info);
	    try {
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 428;
	            this.tcp_protocol();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 429;
	            this.ipc_protocol();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 430;
	            this.spx_protocol();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 431;
	            this.nmp_protocol();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 432;
	            this.beq_protocol();
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



	tcp_protocol() {
	    let localctx = new Tcp_protocolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, tnsnamesParser.RULE_tcp_protocol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.tcp_params();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tcp_params() {
	    let localctx = new Tcp_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, tnsnamesParser.RULE_tcp_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 437;
	        		this.tcp_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 440; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,31, this._ctx);
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



	tcp_parameter() {
	    let localctx = new Tcp_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, tnsnamesParser.RULE_tcp_parameter);
	    try {
	        this.state = 445;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 442;
	            this.tcp_host();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 443;
	            this.tcp_port();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 444;
	            this.tcp_tcp();
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



	tcp_host() {
	    let localctx = new Tcp_hostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, tnsnamesParser.RULE_tcp_host);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 448;
	        this.match(tnsnamesParser.HOST);
	        this.state = 449;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 450;
	        this.host();
	        this.state = 451;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tcp_port() {
	    let localctx = new Tcp_portContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, tnsnamesParser.RULE_tcp_port);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 453;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 454;
	        this.match(tnsnamesParser.PORT);
	        this.state = 455;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 456;
	        this.port();
	        this.state = 457;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tcp_tcp() {
	    let localctx = new Tcp_tcpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, tnsnamesParser.RULE_tcp_tcp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 460;
	        this.match(tnsnamesParser.PROTOCOL);
	        this.state = 461;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 462;
	        this.match(tnsnamesParser.TCP);
	        this.state = 463;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	host() {
	    let localctx = new HostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, tnsnamesParser.RULE_host);
	    var _la = 0; // Token type
	    try {
	        this.state = 474;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 465;
	            this.match(tnsnamesParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 466;
	            this.match(tnsnamesParser.ID);
	            this.state = 469; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 467;
	                this.match(tnsnamesParser.DOT);
	                this.state = 468;
	                this.match(tnsnamesParser.ID);
	                this.state = 471; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===tnsnamesParser.DOT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 473;
	            this.match(tnsnamesParser.IP);
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



	port() {
	    let localctx = new PortContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, tnsnamesParser.RULE_port);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
	        this.match(tnsnamesParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipc_protocol() {
	    let localctx = new Ipc_protocolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, tnsnamesParser.RULE_ipc_protocol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
	        this.ipc_params();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipc_params() {
	    let localctx = new Ipc_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, tnsnamesParser.RULE_ipc_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 480;
	        		this.ipc_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 483; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,35, this._ctx);
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



	ipc_parameter() {
	    let localctx = new Ipc_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, tnsnamesParser.RULE_ipc_parameter);
	    try {
	        this.state = 487;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 485;
	            this.ipc_ipc();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 486;
	            this.ipc_key();
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



	ipc_ipc() {
	    let localctx = new Ipc_ipcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, tnsnamesParser.RULE_ipc_ipc);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 490;
	        this.match(tnsnamesParser.PROTOCOL);
	        this.state = 491;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 492;
	        this.match(tnsnamesParser.IPC);
	        this.state = 493;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ipc_key() {
	    let localctx = new Ipc_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, tnsnamesParser.RULE_ipc_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 496;
	        this.match(tnsnamesParser.KEY);
	        this.state = 497;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 498;
	        this.match(tnsnamesParser.ID);
	        this.state = 499;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spx_protocol() {
	    let localctx = new Spx_protocolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, tnsnamesParser.RULE_spx_protocol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 501;
	        this.spx_params();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spx_params() {
	    let localctx = new Spx_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, tnsnamesParser.RULE_spx_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 503;
	        		this.spx_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 506; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,37, this._ctx);
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



	spx_parameter() {
	    let localctx = new Spx_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, tnsnamesParser.RULE_spx_parameter);
	    try {
	        this.state = 510;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 508;
	            this.spx_spx();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 509;
	            this.spx_service();
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



	spx_spx() {
	    let localctx = new Spx_spxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, tnsnamesParser.RULE_spx_spx);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 512;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 513;
	        this.match(tnsnamesParser.PROTOCOL);
	        this.state = 514;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 515;
	        this.match(tnsnamesParser.SPX);
	        this.state = 516;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spx_service() {
	    let localctx = new Spx_serviceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, tnsnamesParser.RULE_spx_service);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 518;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 519;
	        this.match(tnsnamesParser.SERVICE);
	        this.state = 520;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 521;
	        this.match(tnsnamesParser.ID);
	        this.state = 522;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nmp_protocol() {
	    let localctx = new Nmp_protocolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, tnsnamesParser.RULE_nmp_protocol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 524;
	        this.nmp_params();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nmp_params() {
	    let localctx = new Nmp_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, tnsnamesParser.RULE_nmp_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 527; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 526;
	        		this.nmp_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 529; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,39, this._ctx);
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



	nmp_parameter() {
	    let localctx = new Nmp_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, tnsnamesParser.RULE_nmp_parameter);
	    try {
	        this.state = 534;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 531;
	            this.nmp_nmp();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 532;
	            this.nmp_server();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 533;
	            this.nmp_pipe();
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



	nmp_nmp() {
	    let localctx = new Nmp_nmpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, tnsnamesParser.RULE_nmp_nmp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 536;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 537;
	        this.match(tnsnamesParser.PROTOCOL);
	        this.state = 538;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 539;
	        this.match(tnsnamesParser.NMP);
	        this.state = 540;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nmp_server() {
	    let localctx = new Nmp_serverContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, tnsnamesParser.RULE_nmp_server);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 542;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 543;
	        this.match(tnsnamesParser.SERVER);
	        this.state = 544;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 545;
	        this.match(tnsnamesParser.ID);
	        this.state = 546;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nmp_pipe() {
	    let localctx = new Nmp_pipeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, tnsnamesParser.RULE_nmp_pipe);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 548;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 549;
	        this.match(tnsnamesParser.PIPE);
	        this.state = 550;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 551;
	        this.match(tnsnamesParser.ID);
	        this.state = 552;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beq_protocol() {
	    let localctx = new Beq_protocolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, tnsnamesParser.RULE_beq_protocol);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 554;
	        this.beq_params();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beq_params() {
	    let localctx = new Beq_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, tnsnamesParser.RULE_beq_params);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 557; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 556;
	        		this.beq_parameter();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 559; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,41, this._ctx);
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



	beq_parameter() {
	    let localctx = new Beq_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, tnsnamesParser.RULE_beq_parameter);
	    try {
	        this.state = 565;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 561;
	            this.beq_beq();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 562;
	            this.beq_program();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 563;
	            this.beq_argv0();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 564;
	            this.beq_args();
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



	beq_beq() {
	    let localctx = new Beq_beqContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, tnsnamesParser.RULE_beq_beq);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 567;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 568;
	        this.match(tnsnamesParser.PROTOCOL);
	        this.state = 569;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 570;
	        this.match(tnsnamesParser.BEQ);
	        this.state = 571;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beq_program() {
	    let localctx = new Beq_programContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, tnsnamesParser.RULE_beq_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 573;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 574;
	        this.match(tnsnamesParser.PROGRAM);
	        this.state = 575;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 576;
	        this.match(tnsnamesParser.ID);
	        this.state = 577;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beq_argv0() {
	    let localctx = new Beq_argv0Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, tnsnamesParser.RULE_beq_argv0);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 579;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 580;
	        this.match(tnsnamesParser.ARGV0);
	        this.state = 581;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 582;
	        this.match(tnsnamesParser.ID);
	        this.state = 583;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beq_args() {
	    let localctx = new Beq_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, tnsnamesParser.RULE_beq_args);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 585;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 586;
	        this.match(tnsnamesParser.ARGS);
	        this.state = 587;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 588;
	        this.ba_parameter();
	        this.state = 589;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ba_parameter() {
	    let localctx = new Ba_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, tnsnamesParser.RULE_ba_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        this.match(tnsnamesParser.S_QUOTE);
	        this.state = 592;
	        this.ba_description();
	        this.state = 593;
	        this.match(tnsnamesParser.S_QUOTE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ba_description() {
	    let localctx = new Ba_descriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, tnsnamesParser.RULE_ba_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 595;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 596;
	        this.match(tnsnamesParser.DESCRIPTION);
	        this.state = 597;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 598;
	        this.bad_params();
	        this.state = 599;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bad_params() {
	    let localctx = new Bad_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, tnsnamesParser.RULE_bad_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 602; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 601;
	            this.bad_parameter();
	            this.state = 604; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===tnsnamesParser.L_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bad_parameter() {
	    let localctx = new Bad_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, tnsnamesParser.RULE_bad_parameter);
	    try {
	        this.state = 608;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 606;
	            this.bad_local();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 607;
	            this.bad_address();
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



	bad_local() {
	    let localctx = new Bad_localContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, tnsnamesParser.RULE_bad_local);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 610;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 611;
	        this.match(tnsnamesParser.LOCAL);
	        this.state = 612;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 613;
	        this.match(tnsnamesParser.YES_NO);
	        this.state = 614;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bad_address() {
	    let localctx = new Bad_addressContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, tnsnamesParser.RULE_bad_address);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 616;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 617;
	        this.match(tnsnamesParser.ADDRESS);
	        this.state = 618;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 619;
	        this.beq_beq();
	        this.state = 620;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	connect_data() {
	    let localctx = new Connect_dataContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, tnsnamesParser.RULE_connect_data);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 622;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 623;
	        this.match(tnsnamesParser.CONNECT_DATA);
	        this.state = 624;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 625;
	        this.cd_params();
	        this.state = 626;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_params() {
	    let localctx = new Cd_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, tnsnamesParser.RULE_cd_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 629; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 628;
	            this.cd_parameter();
	            this.state = 631; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===tnsnamesParser.L_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_parameter() {
	    let localctx = new Cd_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, tnsnamesParser.RULE_cd_parameter);
	    try {
	        this.state = 642;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 633;
	            this.cd_service_name();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 634;
	            this.cd_sid();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 635;
	            this.cd_instance_name();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 636;
	            this.cd_failover_mode();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 637;
	            this.cd_global_name();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 638;
	            this.cd_hs();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 639;
	            this.cd_rdb_database();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 640;
	            this.cd_server();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 641;
	            this.cd_ur();
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



	cd_service_name() {
	    let localctx = new Cd_service_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 146, tnsnamesParser.RULE_cd_service_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 644;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 645;
	        this.match(tnsnamesParser.SERVICE_NAME);
	        this.state = 646;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 647;
	        this.match(tnsnamesParser.ID);
	        this.state = 652;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tnsnamesParser.DOT) {
	            this.state = 648;
	            this.match(tnsnamesParser.DOT);
	            this.state = 649;
	            this.match(tnsnamesParser.ID);
	            this.state = 654;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 655;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_sid() {
	    let localctx = new Cd_sidContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 148, tnsnamesParser.RULE_cd_sid);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 657;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 658;
	        this.match(tnsnamesParser.SID);
	        this.state = 659;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 660;
	        this.match(tnsnamesParser.ID);
	        this.state = 661;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_instance_name() {
	    let localctx = new Cd_instance_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 150, tnsnamesParser.RULE_cd_instance_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 663;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 664;
	        this.match(tnsnamesParser.INSTANCE_NAME);
	        this.state = 665;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 666;
	        this.match(tnsnamesParser.ID);
	        this.state = 671;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tnsnamesParser.DOT) {
	            this.state = 667;
	            this.match(tnsnamesParser.DOT);
	            this.state = 668;
	            this.match(tnsnamesParser.ID);
	            this.state = 673;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 674;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_failover_mode() {
	    let localctx = new Cd_failover_modeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 152, tnsnamesParser.RULE_cd_failover_mode);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 676;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 677;
	        this.match(tnsnamesParser.FAILOVER_MODE);
	        this.state = 678;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 679;
	        this.fo_params();
	        this.state = 680;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_global_name() {
	    let localctx = new Cd_global_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 154, tnsnamesParser.RULE_cd_global_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 682;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 683;
	        this.match(tnsnamesParser.GLOBAL_NAME);
	        this.state = 684;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 685;
	        this.match(tnsnamesParser.ID);
	        this.state = 690;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tnsnamesParser.DOT) {
	            this.state = 686;
	            this.match(tnsnamesParser.DOT);
	            this.state = 687;
	            this.match(tnsnamesParser.ID);
	            this.state = 692;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 693;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_hs() {
	    let localctx = new Cd_hsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 156, tnsnamesParser.RULE_cd_hs);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 695;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 696;
	        this.match(tnsnamesParser.HS);
	        this.state = 697;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 698;
	        this.match(tnsnamesParser.OK);
	        this.state = 699;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_rdb_database() {
	    let localctx = new Cd_rdb_databaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 158, tnsnamesParser.RULE_cd_rdb_database);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 701;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 702;
	        this.match(tnsnamesParser.RDB_DATABASE);
	        this.state = 703;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 708;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===tnsnamesParser.L_SQUARE) {
	            this.state = 704;
	            this.match(tnsnamesParser.L_SQUARE);
	            this.state = 705;
	            this.match(tnsnamesParser.DOT);
	            this.state = 706;
	            this.match(tnsnamesParser.ID);
	            this.state = 707;
	            this.match(tnsnamesParser.R_SQUARE);
	        }

	        this.state = 710;
	        this.match(tnsnamesParser.ID);
	        this.state = 715;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tnsnamesParser.DOT) {
	            this.state = 711;
	            this.match(tnsnamesParser.DOT);
	            this.state = 712;
	            this.match(tnsnamesParser.ID);
	            this.state = 717;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 718;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_server() {
	    let localctx = new Cd_serverContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 160, tnsnamesParser.RULE_cd_server);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 720;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 721;
	        this.match(tnsnamesParser.SERVER);
	        this.state = 722;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 723;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << tnsnamesParser.DEDICATED) | (1 << tnsnamesParser.SHARED) | (1 << tnsnamesParser.POOLED))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 724;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cd_ur() {
	    let localctx = new Cd_urContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 162, tnsnamesParser.RULE_cd_ur);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 726;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 727;
	        this.match(tnsnamesParser.UR);
	        this.state = 728;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 729;
	        this.match(tnsnamesParser.UR_A);
	        this.state = 730;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fo_params() {
	    let localctx = new Fo_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 164, tnsnamesParser.RULE_fo_params);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 733; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 732;
	            this.fo_parameter();
	            this.state = 735; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===tnsnamesParser.L_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fo_parameter() {
	    let localctx = new Fo_parameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 166, tnsnamesParser.RULE_fo_parameter);
	    try {
	        this.state = 742;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 737;
	            this.fo_type();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 738;
	            this.fo_backup();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 739;
	            this.fo_method();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 740;
	            this.fo_retries();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 741;
	            this.fo_delay();
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



	fo_type() {
	    let localctx = new Fo_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 168, tnsnamesParser.RULE_fo_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 744;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 745;
	        this.match(tnsnamesParser.TYPE);
	        this.state = 746;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 747;
	        _la = this._input.LA(1);
	        if(!(((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (tnsnamesParser.SESSION - 68)) | (1 << (tnsnamesParser.SELECT - 68)) | (1 << (tnsnamesParser.NONE - 68)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 748;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fo_backup() {
	    let localctx = new Fo_backupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 170, tnsnamesParser.RULE_fo_backup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 750;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 751;
	        this.match(tnsnamesParser.BACKUP);
	        this.state = 752;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 753;
	        this.match(tnsnamesParser.ID);
	        this.state = 758;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===tnsnamesParser.DOT) {
	            this.state = 754;
	            this.match(tnsnamesParser.DOT);
	            this.state = 755;
	            this.match(tnsnamesParser.ID);
	            this.state = 760;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 761;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fo_method() {
	    let localctx = new Fo_methodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 172, tnsnamesParser.RULE_fo_method);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 763;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 764;
	        this.match(tnsnamesParser.METHOD);
	        this.state = 765;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 766;
	        _la = this._input.LA(1);
	        if(!(_la===tnsnamesParser.BASIC || _la===tnsnamesParser.PRECONNECT)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 767;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fo_retries() {
	    let localctx = new Fo_retriesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 174, tnsnamesParser.RULE_fo_retries);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 769;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 770;
	        this.match(tnsnamesParser.RETRIES);
	        this.state = 771;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 772;
	        this.match(tnsnamesParser.INT);
	        this.state = 773;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fo_delay() {
	    let localctx = new Fo_delayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 176, tnsnamesParser.RULE_fo_delay);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 775;
	        this.match(tnsnamesParser.L_PAREN);
	        this.state = 776;
	        this.match(tnsnamesParser.DELAY);
	        this.state = 777;
	        this.match(tnsnamesParser.EQUAL);
	        this.state = 778;
	        this.match(tnsnamesParser.INT);
	        this.state = 779;
	        this.match(tnsnamesParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

tnsnamesParser.EOF = antlr4.Token.EOF;
tnsnamesParser.L_PAREN = 1;
tnsnamesParser.R_PAREN = 2;
tnsnamesParser.L_SQUARE = 3;
tnsnamesParser.R_SQUARE = 4;
tnsnamesParser.EQUAL = 5;
tnsnamesParser.DOT = 6;
tnsnamesParser.COMMA = 7;
tnsnamesParser.D_QUOTE = 8;
tnsnamesParser.S_QUOTE = 9;
tnsnamesParser.CONNECT_DATA = 10;
tnsnamesParser.DESCRIPTION_LIST = 11;
tnsnamesParser.DESCRIPTION = 12;
tnsnamesParser.ADDRESS_LIST = 13;
tnsnamesParser.ADDRESS = 14;
tnsnamesParser.PROTOCOL = 15;
tnsnamesParser.TCP = 16;
tnsnamesParser.HOST = 17;
tnsnamesParser.PORT = 18;
tnsnamesParser.LOCAL = 19;
tnsnamesParser.IP = 20;
tnsnamesParser.YES_NO = 21;
tnsnamesParser.ON_OFF = 22;
tnsnamesParser.TRUE_FALSE = 23;
tnsnamesParser.COMMENT = 24;
tnsnamesParser.INT = 25;
tnsnamesParser.OK = 26;
tnsnamesParser.DEDICATED = 27;
tnsnamesParser.SHARED = 28;
tnsnamesParser.POOLED = 29;
tnsnamesParser.LOAD_BALANCE = 30;
tnsnamesParser.FAILOVER = 31;
tnsnamesParser.UR = 32;
tnsnamesParser.UR_A = 33;
tnsnamesParser.ENABLE = 34;
tnsnamesParser.BROKEN = 35;
tnsnamesParser.SDU = 36;
tnsnamesParser.RECV_BUF = 37;
tnsnamesParser.SEND_BUF = 38;
tnsnamesParser.SOURCE_ROUTE = 39;
tnsnamesParser.SERVICE = 40;
tnsnamesParser.SERVICE_TYPE = 41;
tnsnamesParser.KEY = 42;
tnsnamesParser.IPC = 43;
tnsnamesParser.SPX = 44;
tnsnamesParser.NMP = 45;
tnsnamesParser.BEQ = 46;
tnsnamesParser.PIPE = 47;
tnsnamesParser.PROGRAM = 48;
tnsnamesParser.ARGV0 = 49;
tnsnamesParser.ARGS = 50;
tnsnamesParser.SECURITY = 51;
tnsnamesParser.SSL_CERT = 52;
tnsnamesParser.CONN_TIMEOUT = 53;
tnsnamesParser.RETRY_COUNT = 54;
tnsnamesParser.TCT = 55;
tnsnamesParser.IFILE = 56;
tnsnamesParser.DQ_STRING = 57;
tnsnamesParser.SERVICE_NAME = 58;
tnsnamesParser.SID = 59;
tnsnamesParser.INSTANCE_NAME = 60;
tnsnamesParser.FAILOVER_MODE = 61;
tnsnamesParser.GLOBAL_NAME = 62;
tnsnamesParser.HS = 63;
tnsnamesParser.RDB_DATABASE = 64;
tnsnamesParser.SERVER = 65;
tnsnamesParser.BACKUP = 66;
tnsnamesParser.TYPE = 67;
tnsnamesParser.SESSION = 68;
tnsnamesParser.SELECT = 69;
tnsnamesParser.NONE = 70;
tnsnamesParser.METHOD = 71;
tnsnamesParser.BASIC = 72;
tnsnamesParser.PRECONNECT = 73;
tnsnamesParser.RETRIES = 74;
tnsnamesParser.DELAY = 75;
tnsnamesParser.QUAD = 76;
tnsnamesParser.ID = 77;
tnsnamesParser.WS = 78;
tnsnamesParser.I_EQUAL = 79;
tnsnamesParser.I_STRING = 80;
tnsnamesParser.ISQ_STRING = 81;
tnsnamesParser.IUQ_STRING = 82;
tnsnamesParser.I_WS = 83;
tnsnamesParser.I_COMMENT = 84;

tnsnamesParser.RULE_tnsnames = 0;
tnsnamesParser.RULE_tns_entry = 1;
tnsnamesParser.RULE_ifile = 2;
tnsnamesParser.RULE_lsnr_entry = 3;
tnsnamesParser.RULE_lsnr_description = 4;
tnsnamesParser.RULE_alias_list = 5;
tnsnamesParser.RULE_alias = 6;
tnsnamesParser.RULE_description_list = 7;
tnsnamesParser.RULE_dl_params = 8;
tnsnamesParser.RULE_dl_parameter = 9;
tnsnamesParser.RULE_description = 10;
tnsnamesParser.RULE_d_params = 11;
tnsnamesParser.RULE_d_parameter = 12;
tnsnamesParser.RULE_d_enable = 13;
tnsnamesParser.RULE_d_sdu = 14;
tnsnamesParser.RULE_d_recv_buf = 15;
tnsnamesParser.RULE_d_send_buf = 16;
tnsnamesParser.RULE_d_service_type = 17;
tnsnamesParser.RULE_d_security = 18;
tnsnamesParser.RULE_d_conn_timeout = 19;
tnsnamesParser.RULE_d_retry_count = 20;
tnsnamesParser.RULE_d_tct = 21;
tnsnamesParser.RULE_ds_parameter = 22;
tnsnamesParser.RULE_address_list = 23;
tnsnamesParser.RULE_al_params = 24;
tnsnamesParser.RULE_al_parameter = 25;
tnsnamesParser.RULE_al_failover = 26;
tnsnamesParser.RULE_al_load_balance = 27;
tnsnamesParser.RULE_al_source_route = 28;
tnsnamesParser.RULE_address = 29;
tnsnamesParser.RULE_a_params = 30;
tnsnamesParser.RULE_a_parameter = 31;
tnsnamesParser.RULE_protocol_info = 32;
tnsnamesParser.RULE_tcp_protocol = 33;
tnsnamesParser.RULE_tcp_params = 34;
tnsnamesParser.RULE_tcp_parameter = 35;
tnsnamesParser.RULE_tcp_host = 36;
tnsnamesParser.RULE_tcp_port = 37;
tnsnamesParser.RULE_tcp_tcp = 38;
tnsnamesParser.RULE_host = 39;
tnsnamesParser.RULE_port = 40;
tnsnamesParser.RULE_ipc_protocol = 41;
tnsnamesParser.RULE_ipc_params = 42;
tnsnamesParser.RULE_ipc_parameter = 43;
tnsnamesParser.RULE_ipc_ipc = 44;
tnsnamesParser.RULE_ipc_key = 45;
tnsnamesParser.RULE_spx_protocol = 46;
tnsnamesParser.RULE_spx_params = 47;
tnsnamesParser.RULE_spx_parameter = 48;
tnsnamesParser.RULE_spx_spx = 49;
tnsnamesParser.RULE_spx_service = 50;
tnsnamesParser.RULE_nmp_protocol = 51;
tnsnamesParser.RULE_nmp_params = 52;
tnsnamesParser.RULE_nmp_parameter = 53;
tnsnamesParser.RULE_nmp_nmp = 54;
tnsnamesParser.RULE_nmp_server = 55;
tnsnamesParser.RULE_nmp_pipe = 56;
tnsnamesParser.RULE_beq_protocol = 57;
tnsnamesParser.RULE_beq_params = 58;
tnsnamesParser.RULE_beq_parameter = 59;
tnsnamesParser.RULE_beq_beq = 60;
tnsnamesParser.RULE_beq_program = 61;
tnsnamesParser.RULE_beq_argv0 = 62;
tnsnamesParser.RULE_beq_args = 63;
tnsnamesParser.RULE_ba_parameter = 64;
tnsnamesParser.RULE_ba_description = 65;
tnsnamesParser.RULE_bad_params = 66;
tnsnamesParser.RULE_bad_parameter = 67;
tnsnamesParser.RULE_bad_local = 68;
tnsnamesParser.RULE_bad_address = 69;
tnsnamesParser.RULE_connect_data = 70;
tnsnamesParser.RULE_cd_params = 71;
tnsnamesParser.RULE_cd_parameter = 72;
tnsnamesParser.RULE_cd_service_name = 73;
tnsnamesParser.RULE_cd_sid = 74;
tnsnamesParser.RULE_cd_instance_name = 75;
tnsnamesParser.RULE_cd_failover_mode = 76;
tnsnamesParser.RULE_cd_global_name = 77;
tnsnamesParser.RULE_cd_hs = 78;
tnsnamesParser.RULE_cd_rdb_database = 79;
tnsnamesParser.RULE_cd_server = 80;
tnsnamesParser.RULE_cd_ur = 81;
tnsnamesParser.RULE_fo_params = 82;
tnsnamesParser.RULE_fo_parameter = 83;
tnsnamesParser.RULE_fo_type = 84;
tnsnamesParser.RULE_fo_backup = 85;
tnsnamesParser.RULE_fo_method = 86;
tnsnamesParser.RULE_fo_retries = 87;
tnsnamesParser.RULE_fo_delay = 88;

class TnsnamesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tnsnames;
    }

	tns_entry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Tns_entryContext);
	    } else {
	        return this.getTypedRuleContext(Tns_entryContext,i);
	    }
	};

	ifile = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IfileContext);
	    } else {
	        return this.getTypedRuleContext(IfileContext,i);
	    }
	};

	lsnr_entry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Lsnr_entryContext);
	    } else {
	        return this.getTypedRuleContext(Lsnr_entryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTnsnames(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTnsnames(this);
		}
	}


}



class Tns_entryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tns_entry;
    }

	alias_list() {
	    return this.getTypedRuleContext(Alias_listContext,0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	description_list() {
	    return this.getTypedRuleContext(Description_listContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTns_entry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTns_entry(this);
		}
	}


}



class IfileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ifile;
    }

	IFILE() {
	    return this.getToken(tnsnamesParser.IFILE, 0);
	};

	I_EQUAL() {
	    return this.getToken(tnsnamesParser.I_EQUAL, 0);
	};

	I_STRING() {
	    return this.getToken(tnsnamesParser.I_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterIfile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitIfile(this);
		}
	}


}



class Lsnr_entryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_lsnr_entry;
    }

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	lsnr_description() {
	    return this.getTypedRuleContext(Lsnr_descriptionContext,0);
	};

	address_list() {
	    return this.getTypedRuleContext(Address_listContext,0);
	};

	address = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddressContext);
	    } else {
	        return this.getTypedRuleContext(AddressContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterLsnr_entry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitLsnr_entry(this);
		}
	}


}



class Lsnr_descriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_lsnr_description;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	DESCRIPTION() {
	    return this.getToken(tnsnamesParser.DESCRIPTION, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	address_list() {
	    return this.getTypedRuleContext(Address_listContext,0);
	};

	address = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddressContext);
	    } else {
	        return this.getTypedRuleContext(AddressContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterLsnr_description(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitLsnr_description(this);
		}
	}


}



class Alias_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_alias_list;
    }

	alias = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AliasContext);
	    } else {
	        return this.getTypedRuleContext(AliasContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.COMMA);
	    } else {
	        return this.getToken(tnsnamesParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAlias_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAlias_list(this);
		}
	}


}



class AliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_alias;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.ID);
	    } else {
	        return this.getToken(tnsnamesParser.ID, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.DOT);
	    } else {
	        return this.getToken(tnsnamesParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAlias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAlias(this);
		}
	}


}



class Description_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_description_list;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	DESCRIPTION_LIST() {
	    return this.getToken(tnsnamesParser.DESCRIPTION_LIST, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	dl_params = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dl_paramsContext);
	    } else {
	        return this.getTypedRuleContext(Dl_paramsContext,i);
	    }
	};

	description = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DescriptionContext);
	    } else {
	        return this.getTypedRuleContext(DescriptionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterDescription_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitDescription_list(this);
		}
	}


}



class Dl_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_dl_params;
    }

	dl_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dl_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Dl_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterDl_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitDl_params(this);
		}
	}


}



class Dl_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_dl_parameter;
    }

	al_failover() {
	    return this.getTypedRuleContext(Al_failoverContext,0);
	};

	al_load_balance() {
	    return this.getTypedRuleContext(Al_load_balanceContext,0);
	};

	al_source_route() {
	    return this.getTypedRuleContext(Al_source_routeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterDl_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitDl_parameter(this);
		}
	}


}



class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_description;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	DESCRIPTION() {
	    return this.getToken(tnsnamesParser.DESCRIPTION, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	connect_data() {
	    return this.getTypedRuleContext(Connect_dataContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	address_list() {
	    return this.getTypedRuleContext(Address_listContext,0);
	};

	d_params = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(D_paramsContext);
	    } else {
	        return this.getTypedRuleContext(D_paramsContext,i);
	    }
	};

	address = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddressContext);
	    } else {
	        return this.getTypedRuleContext(AddressContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitDescription(this);
		}
	}


}



class D_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_params;
    }

	d_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(D_parameterContext);
	    } else {
	        return this.getTypedRuleContext(D_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_params(this);
		}
	}


}



class D_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_parameter;
    }

	d_enable() {
	    return this.getTypedRuleContext(D_enableContext,0);
	};

	al_failover() {
	    return this.getTypedRuleContext(Al_failoverContext,0);
	};

	al_load_balance() {
	    return this.getTypedRuleContext(Al_load_balanceContext,0);
	};

	d_sdu() {
	    return this.getTypedRuleContext(D_sduContext,0);
	};

	d_recv_buf() {
	    return this.getTypedRuleContext(D_recv_bufContext,0);
	};

	d_send_buf() {
	    return this.getTypedRuleContext(D_send_bufContext,0);
	};

	al_source_route() {
	    return this.getTypedRuleContext(Al_source_routeContext,0);
	};

	d_service_type() {
	    return this.getTypedRuleContext(D_service_typeContext,0);
	};

	d_security() {
	    return this.getTypedRuleContext(D_securityContext,0);
	};

	d_conn_timeout() {
	    return this.getTypedRuleContext(D_conn_timeoutContext,0);
	};

	d_retry_count() {
	    return this.getTypedRuleContext(D_retry_countContext,0);
	};

	d_tct() {
	    return this.getTypedRuleContext(D_tctContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_parameter(this);
		}
	}


}



class D_enableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_enable;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	ENABLE() {
	    return this.getToken(tnsnamesParser.ENABLE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	BROKEN() {
	    return this.getToken(tnsnamesParser.BROKEN, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_enable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_enable(this);
		}
	}


}



class D_sduContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_sdu;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SDU() {
	    return this.getToken(tnsnamesParser.SDU, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_sdu(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_sdu(this);
		}
	}


}



class D_recv_bufContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_recv_buf;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	RECV_BUF() {
	    return this.getToken(tnsnamesParser.RECV_BUF, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_recv_buf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_recv_buf(this);
		}
	}


}



class D_send_bufContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_send_buf;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SEND_BUF() {
	    return this.getToken(tnsnamesParser.SEND_BUF, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_send_buf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_send_buf(this);
		}
	}


}



class D_service_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_service_type;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SERVICE_TYPE() {
	    return this.getToken(tnsnamesParser.SERVICE_TYPE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_service_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_service_type(this);
		}
	}


}



class D_securityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_security;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SECURITY() {
	    return this.getToken(tnsnamesParser.SECURITY, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ds_parameter() {
	    return this.getTypedRuleContext(Ds_parameterContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_security(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_security(this);
		}
	}


}



class D_conn_timeoutContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_conn_timeout;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	CONN_TIMEOUT() {
	    return this.getToken(tnsnamesParser.CONN_TIMEOUT, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_conn_timeout(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_conn_timeout(this);
		}
	}


}



class D_retry_countContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_retry_count;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	RETRY_COUNT() {
	    return this.getToken(tnsnamesParser.RETRY_COUNT, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_retry_count(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_retry_count(this);
		}
	}


}



class D_tctContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_d_tct;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	TCT() {
	    return this.getToken(tnsnamesParser.TCT, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterD_tct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitD_tct(this);
		}
	}


}



class Ds_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ds_parameter;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SSL_CERT() {
	    return this.getToken(tnsnamesParser.SSL_CERT, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	DQ_STRING() {
	    return this.getToken(tnsnamesParser.DQ_STRING, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterDs_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitDs_parameter(this);
		}
	}


}



class Address_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_address_list;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	ADDRESS_LIST() {
	    return this.getToken(tnsnamesParser.ADDRESS_LIST, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	al_params = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Al_paramsContext);
	    } else {
	        return this.getTypedRuleContext(Al_paramsContext,i);
	    }
	};

	address = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddressContext);
	    } else {
	        return this.getTypedRuleContext(AddressContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAddress_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAddress_list(this);
		}
	}


}



class Al_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_al_params;
    }

	al_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Al_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Al_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAl_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAl_params(this);
		}
	}


}



class Al_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_al_parameter;
    }

	al_failover() {
	    return this.getTypedRuleContext(Al_failoverContext,0);
	};

	al_load_balance() {
	    return this.getTypedRuleContext(Al_load_balanceContext,0);
	};

	al_source_route() {
	    return this.getTypedRuleContext(Al_source_routeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAl_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAl_parameter(this);
		}
	}


}



class Al_failoverContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_al_failover;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	FAILOVER() {
	    return this.getToken(tnsnamesParser.FAILOVER, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	YES_NO() {
	    return this.getToken(tnsnamesParser.YES_NO, 0);
	};

	ON_OFF() {
	    return this.getToken(tnsnamesParser.ON_OFF, 0);
	};

	TRUE_FALSE() {
	    return this.getToken(tnsnamesParser.TRUE_FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAl_failover(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAl_failover(this);
		}
	}


}



class Al_load_balanceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_al_load_balance;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	LOAD_BALANCE() {
	    return this.getToken(tnsnamesParser.LOAD_BALANCE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	YES_NO() {
	    return this.getToken(tnsnamesParser.YES_NO, 0);
	};

	ON_OFF() {
	    return this.getToken(tnsnamesParser.ON_OFF, 0);
	};

	TRUE_FALSE() {
	    return this.getToken(tnsnamesParser.TRUE_FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAl_load_balance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAl_load_balance(this);
		}
	}


}



class Al_source_routeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_al_source_route;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SOURCE_ROUTE() {
	    return this.getToken(tnsnamesParser.SOURCE_ROUTE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	YES_NO() {
	    return this.getToken(tnsnamesParser.YES_NO, 0);
	};

	ON_OFF() {
	    return this.getToken(tnsnamesParser.ON_OFF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAl_source_route(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAl_source_route(this);
		}
	}


}



class AddressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_address;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	ADDRESS() {
	    return this.getToken(tnsnamesParser.ADDRESS, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	protocol_info() {
	    return this.getTypedRuleContext(Protocol_infoContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	a_params() {
	    return this.getTypedRuleContext(A_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterAddress(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitAddress(this);
		}
	}


}



class A_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_a_params;
    }

	a_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(A_parameterContext);
	    } else {
	        return this.getTypedRuleContext(A_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterA_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitA_params(this);
		}
	}


}



class A_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_a_parameter;
    }

	d_send_buf() {
	    return this.getTypedRuleContext(D_send_bufContext,0);
	};

	d_recv_buf() {
	    return this.getTypedRuleContext(D_recv_bufContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterA_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitA_parameter(this);
		}
	}


}



class Protocol_infoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_protocol_info;
    }

	tcp_protocol() {
	    return this.getTypedRuleContext(Tcp_protocolContext,0);
	};

	ipc_protocol() {
	    return this.getTypedRuleContext(Ipc_protocolContext,0);
	};

	spx_protocol() {
	    return this.getTypedRuleContext(Spx_protocolContext,0);
	};

	nmp_protocol() {
	    return this.getTypedRuleContext(Nmp_protocolContext,0);
	};

	beq_protocol() {
	    return this.getTypedRuleContext(Beq_protocolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterProtocol_info(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitProtocol_info(this);
		}
	}


}



class Tcp_protocolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tcp_protocol;
    }

	tcp_params() {
	    return this.getTypedRuleContext(Tcp_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTcp_protocol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTcp_protocol(this);
		}
	}


}



class Tcp_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tcp_params;
    }

	tcp_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Tcp_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Tcp_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTcp_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTcp_params(this);
		}
	}


}



class Tcp_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tcp_parameter;
    }

	tcp_host() {
	    return this.getTypedRuleContext(Tcp_hostContext,0);
	};

	tcp_port() {
	    return this.getTypedRuleContext(Tcp_portContext,0);
	};

	tcp_tcp() {
	    return this.getTypedRuleContext(Tcp_tcpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTcp_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTcp_parameter(this);
		}
	}


}



class Tcp_hostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tcp_host;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	HOST() {
	    return this.getToken(tnsnamesParser.HOST, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	host() {
	    return this.getTypedRuleContext(HostContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTcp_host(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTcp_host(this);
		}
	}


}



class Tcp_portContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tcp_port;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PORT() {
	    return this.getToken(tnsnamesParser.PORT, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	port() {
	    return this.getTypedRuleContext(PortContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTcp_port(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTcp_port(this);
		}
	}


}



class Tcp_tcpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_tcp_tcp;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PROTOCOL() {
	    return this.getToken(tnsnamesParser.PROTOCOL, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	TCP() {
	    return this.getToken(tnsnamesParser.TCP, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterTcp_tcp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitTcp_tcp(this);
		}
	}


}



class HostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_host;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.ID);
	    } else {
	        return this.getToken(tnsnamesParser.ID, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.DOT);
	    } else {
	        return this.getToken(tnsnamesParser.DOT, i);
	    }
	};


	IP() {
	    return this.getToken(tnsnamesParser.IP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterHost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitHost(this);
		}
	}


}



class PortContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_port;
    }

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterPort(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitPort(this);
		}
	}


}



class Ipc_protocolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ipc_protocol;
    }

	ipc_params() {
	    return this.getTypedRuleContext(Ipc_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterIpc_protocol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitIpc_protocol(this);
		}
	}


}



class Ipc_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ipc_params;
    }

	ipc_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ipc_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Ipc_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterIpc_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitIpc_params(this);
		}
	}


}



class Ipc_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ipc_parameter;
    }

	ipc_ipc() {
	    return this.getTypedRuleContext(Ipc_ipcContext,0);
	};

	ipc_key() {
	    return this.getTypedRuleContext(Ipc_keyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterIpc_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitIpc_parameter(this);
		}
	}


}



class Ipc_ipcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ipc_ipc;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PROTOCOL() {
	    return this.getToken(tnsnamesParser.PROTOCOL, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	IPC() {
	    return this.getToken(tnsnamesParser.IPC, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterIpc_ipc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitIpc_ipc(this);
		}
	}


}



class Ipc_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ipc_key;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	KEY() {
	    return this.getToken(tnsnamesParser.KEY, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterIpc_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitIpc_key(this);
		}
	}


}



class Spx_protocolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_spx_protocol;
    }

	spx_params() {
	    return this.getTypedRuleContext(Spx_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterSpx_protocol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitSpx_protocol(this);
		}
	}


}



class Spx_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_spx_params;
    }

	spx_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Spx_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Spx_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterSpx_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitSpx_params(this);
		}
	}


}



class Spx_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_spx_parameter;
    }

	spx_spx() {
	    return this.getTypedRuleContext(Spx_spxContext,0);
	};

	spx_service() {
	    return this.getTypedRuleContext(Spx_serviceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterSpx_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitSpx_parameter(this);
		}
	}


}



class Spx_spxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_spx_spx;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PROTOCOL() {
	    return this.getToken(tnsnamesParser.PROTOCOL, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	SPX() {
	    return this.getToken(tnsnamesParser.SPX, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterSpx_spx(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitSpx_spx(this);
		}
	}


}



class Spx_serviceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_spx_service;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SERVICE() {
	    return this.getToken(tnsnamesParser.SERVICE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterSpx_service(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitSpx_service(this);
		}
	}


}



class Nmp_protocolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_nmp_protocol;
    }

	nmp_params() {
	    return this.getTypedRuleContext(Nmp_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterNmp_protocol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitNmp_protocol(this);
		}
	}


}



class Nmp_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_nmp_params;
    }

	nmp_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Nmp_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Nmp_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterNmp_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitNmp_params(this);
		}
	}


}



class Nmp_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_nmp_parameter;
    }

	nmp_nmp() {
	    return this.getTypedRuleContext(Nmp_nmpContext,0);
	};

	nmp_server() {
	    return this.getTypedRuleContext(Nmp_serverContext,0);
	};

	nmp_pipe() {
	    return this.getTypedRuleContext(Nmp_pipeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterNmp_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitNmp_parameter(this);
		}
	}


}



class Nmp_nmpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_nmp_nmp;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PROTOCOL() {
	    return this.getToken(tnsnamesParser.PROTOCOL, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	NMP() {
	    return this.getToken(tnsnamesParser.NMP, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterNmp_nmp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitNmp_nmp(this);
		}
	}


}



class Nmp_serverContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_nmp_server;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SERVER() {
	    return this.getToken(tnsnamesParser.SERVER, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterNmp_server(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitNmp_server(this);
		}
	}


}



class Nmp_pipeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_nmp_pipe;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PIPE() {
	    return this.getToken(tnsnamesParser.PIPE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterNmp_pipe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitNmp_pipe(this);
		}
	}


}



class Beq_protocolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_beq_protocol;
    }

	beq_params() {
	    return this.getTypedRuleContext(Beq_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBeq_protocol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBeq_protocol(this);
		}
	}


}



class Beq_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_beq_params;
    }

	beq_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Beq_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Beq_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBeq_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBeq_params(this);
		}
	}


}



class Beq_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_beq_parameter;
    }

	beq_beq() {
	    return this.getTypedRuleContext(Beq_beqContext,0);
	};

	beq_program() {
	    return this.getTypedRuleContext(Beq_programContext,0);
	};

	beq_argv0() {
	    return this.getTypedRuleContext(Beq_argv0Context,0);
	};

	beq_args() {
	    return this.getTypedRuleContext(Beq_argsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBeq_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBeq_parameter(this);
		}
	}


}



class Beq_beqContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_beq_beq;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PROTOCOL() {
	    return this.getToken(tnsnamesParser.PROTOCOL, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	BEQ() {
	    return this.getToken(tnsnamesParser.BEQ, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBeq_beq(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBeq_beq(this);
		}
	}


}



class Beq_programContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_beq_program;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	PROGRAM() {
	    return this.getToken(tnsnamesParser.PROGRAM, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBeq_program(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBeq_program(this);
		}
	}


}



class Beq_argv0Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_beq_argv0;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	ARGV0() {
	    return this.getToken(tnsnamesParser.ARGV0, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBeq_argv0(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBeq_argv0(this);
		}
	}


}



class Beq_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_beq_args;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	ARGS() {
	    return this.getToken(tnsnamesParser.ARGS, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ba_parameter() {
	    return this.getTypedRuleContext(Ba_parameterContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBeq_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBeq_args(this);
		}
	}


}



class Ba_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ba_parameter;
    }

	S_QUOTE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.S_QUOTE);
	    } else {
	        return this.getToken(tnsnamesParser.S_QUOTE, i);
	    }
	};


	ba_description() {
	    return this.getTypedRuleContext(Ba_descriptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBa_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBa_parameter(this);
		}
	}


}



class Ba_descriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_ba_description;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	DESCRIPTION() {
	    return this.getToken(tnsnamesParser.DESCRIPTION, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	bad_params() {
	    return this.getTypedRuleContext(Bad_paramsContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBa_description(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBa_description(this);
		}
	}


}



class Bad_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_bad_params;
    }

	bad_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Bad_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Bad_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBad_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBad_params(this);
		}
	}


}



class Bad_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_bad_parameter;
    }

	bad_local() {
	    return this.getTypedRuleContext(Bad_localContext,0);
	};

	bad_address() {
	    return this.getTypedRuleContext(Bad_addressContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBad_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBad_parameter(this);
		}
	}


}



class Bad_localContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_bad_local;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	LOCAL() {
	    return this.getToken(tnsnamesParser.LOCAL, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	YES_NO() {
	    return this.getToken(tnsnamesParser.YES_NO, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBad_local(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBad_local(this);
		}
	}


}



class Bad_addressContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_bad_address;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	ADDRESS() {
	    return this.getToken(tnsnamesParser.ADDRESS, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	beq_beq() {
	    return this.getTypedRuleContext(Beq_beqContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterBad_address(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitBad_address(this);
		}
	}


}



class Connect_dataContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_connect_data;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	CONNECT_DATA() {
	    return this.getToken(tnsnamesParser.CONNECT_DATA, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	cd_params() {
	    return this.getTypedRuleContext(Cd_paramsContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterConnect_data(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitConnect_data(this);
		}
	}


}



class Cd_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_params;
    }

	cd_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Cd_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Cd_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_params(this);
		}
	}


}



class Cd_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_parameter;
    }

	cd_service_name() {
	    return this.getTypedRuleContext(Cd_service_nameContext,0);
	};

	cd_sid() {
	    return this.getTypedRuleContext(Cd_sidContext,0);
	};

	cd_instance_name() {
	    return this.getTypedRuleContext(Cd_instance_nameContext,0);
	};

	cd_failover_mode() {
	    return this.getTypedRuleContext(Cd_failover_modeContext,0);
	};

	cd_global_name() {
	    return this.getTypedRuleContext(Cd_global_nameContext,0);
	};

	cd_hs() {
	    return this.getTypedRuleContext(Cd_hsContext,0);
	};

	cd_rdb_database() {
	    return this.getTypedRuleContext(Cd_rdb_databaseContext,0);
	};

	cd_server() {
	    return this.getTypedRuleContext(Cd_serverContext,0);
	};

	cd_ur() {
	    return this.getTypedRuleContext(Cd_urContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_parameter(this);
		}
	}


}



class Cd_service_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_service_name;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SERVICE_NAME() {
	    return this.getToken(tnsnamesParser.SERVICE_NAME, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.ID);
	    } else {
	        return this.getToken(tnsnamesParser.ID, i);
	    }
	};


	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.DOT);
	    } else {
	        return this.getToken(tnsnamesParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_service_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_service_name(this);
		}
	}


}



class Cd_sidContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_sid;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SID() {
	    return this.getToken(tnsnamesParser.SID, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID() {
	    return this.getToken(tnsnamesParser.ID, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_sid(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_sid(this);
		}
	}


}



class Cd_instance_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_instance_name;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	INSTANCE_NAME() {
	    return this.getToken(tnsnamesParser.INSTANCE_NAME, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.ID);
	    } else {
	        return this.getToken(tnsnamesParser.ID, i);
	    }
	};


	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.DOT);
	    } else {
	        return this.getToken(tnsnamesParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_instance_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_instance_name(this);
		}
	}


}



class Cd_failover_modeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_failover_mode;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	FAILOVER_MODE() {
	    return this.getToken(tnsnamesParser.FAILOVER_MODE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	fo_params() {
	    return this.getTypedRuleContext(Fo_paramsContext,0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_failover_mode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_failover_mode(this);
		}
	}


}



class Cd_global_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_global_name;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	GLOBAL_NAME() {
	    return this.getToken(tnsnamesParser.GLOBAL_NAME, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.ID);
	    } else {
	        return this.getToken(tnsnamesParser.ID, i);
	    }
	};


	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.DOT);
	    } else {
	        return this.getToken(tnsnamesParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_global_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_global_name(this);
		}
	}


}



class Cd_hsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_hs;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	HS() {
	    return this.getToken(tnsnamesParser.HS, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	OK() {
	    return this.getToken(tnsnamesParser.OK, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_hs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_hs(this);
		}
	}


}



class Cd_rdb_databaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_rdb_database;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	RDB_DATABASE() {
	    return this.getToken(tnsnamesParser.RDB_DATABASE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.ID);
	    } else {
	        return this.getToken(tnsnamesParser.ID, i);
	    }
	};


	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	L_SQUARE() {
	    return this.getToken(tnsnamesParser.L_SQUARE, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.DOT);
	    } else {
	        return this.getToken(tnsnamesParser.DOT, i);
	    }
	};


	R_SQUARE() {
	    return this.getToken(tnsnamesParser.R_SQUARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_rdb_database(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_rdb_database(this);
		}
	}


}



class Cd_serverContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_server;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	SERVER() {
	    return this.getToken(tnsnamesParser.SERVER, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	DEDICATED() {
	    return this.getToken(tnsnamesParser.DEDICATED, 0);
	};

	SHARED() {
	    return this.getToken(tnsnamesParser.SHARED, 0);
	};

	POOLED() {
	    return this.getToken(tnsnamesParser.POOLED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_server(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_server(this);
		}
	}


}



class Cd_urContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_cd_ur;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	UR() {
	    return this.getToken(tnsnamesParser.UR, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	UR_A() {
	    return this.getToken(tnsnamesParser.UR_A, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterCd_ur(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitCd_ur(this);
		}
	}


}



class Fo_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_fo_params;
    }

	fo_parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Fo_parameterContext);
	    } else {
	        return this.getTypedRuleContext(Fo_parameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterFo_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitFo_params(this);
		}
	}


}



class Fo_parameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_fo_parameter;
    }

	fo_type() {
	    return this.getTypedRuleContext(Fo_typeContext,0);
	};

	fo_backup() {
	    return this.getTypedRuleContext(Fo_backupContext,0);
	};

	fo_method() {
	    return this.getTypedRuleContext(Fo_methodContext,0);
	};

	fo_retries() {
	    return this.getTypedRuleContext(Fo_retriesContext,0);
	};

	fo_delay() {
	    return this.getTypedRuleContext(Fo_delayContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterFo_parameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitFo_parameter(this);
		}
	}


}



class Fo_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_fo_type;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	TYPE() {
	    return this.getToken(tnsnamesParser.TYPE, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	SESSION() {
	    return this.getToken(tnsnamesParser.SESSION, 0);
	};

	SELECT() {
	    return this.getToken(tnsnamesParser.SELECT, 0);
	};

	NONE() {
	    return this.getToken(tnsnamesParser.NONE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterFo_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitFo_type(this);
		}
	}


}



class Fo_backupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_fo_backup;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	BACKUP() {
	    return this.getToken(tnsnamesParser.BACKUP, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.ID);
	    } else {
	        return this.getToken(tnsnamesParser.ID, i);
	    }
	};


	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tnsnamesParser.DOT);
	    } else {
	        return this.getToken(tnsnamesParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterFo_backup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitFo_backup(this);
		}
	}


}



class Fo_methodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_fo_method;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	METHOD() {
	    return this.getToken(tnsnamesParser.METHOD, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	BASIC() {
	    return this.getToken(tnsnamesParser.BASIC, 0);
	};

	PRECONNECT() {
	    return this.getToken(tnsnamesParser.PRECONNECT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterFo_method(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitFo_method(this);
		}
	}


}



class Fo_retriesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_fo_retries;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	RETRIES() {
	    return this.getToken(tnsnamesParser.RETRIES, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterFo_retries(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitFo_retries(this);
		}
	}


}



class Fo_delayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tnsnamesParser.RULE_fo_delay;
    }

	L_PAREN() {
	    return this.getToken(tnsnamesParser.L_PAREN, 0);
	};

	DELAY() {
	    return this.getToken(tnsnamesParser.DELAY, 0);
	};

	EQUAL() {
	    return this.getToken(tnsnamesParser.EQUAL, 0);
	};

	INT() {
	    return this.getToken(tnsnamesParser.INT, 0);
	};

	R_PAREN() {
	    return this.getToken(tnsnamesParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.enterFo_delay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tnsnamesParserListener ) {
	        listener.exitFo_delay(this);
		}
	}


}




tnsnamesParser.TnsnamesContext = TnsnamesContext; 
tnsnamesParser.Tns_entryContext = Tns_entryContext; 
tnsnamesParser.IfileContext = IfileContext; 
tnsnamesParser.Lsnr_entryContext = Lsnr_entryContext; 
tnsnamesParser.Lsnr_descriptionContext = Lsnr_descriptionContext; 
tnsnamesParser.Alias_listContext = Alias_listContext; 
tnsnamesParser.AliasContext = AliasContext; 
tnsnamesParser.Description_listContext = Description_listContext; 
tnsnamesParser.Dl_paramsContext = Dl_paramsContext; 
tnsnamesParser.Dl_parameterContext = Dl_parameterContext; 
tnsnamesParser.DescriptionContext = DescriptionContext; 
tnsnamesParser.D_paramsContext = D_paramsContext; 
tnsnamesParser.D_parameterContext = D_parameterContext; 
tnsnamesParser.D_enableContext = D_enableContext; 
tnsnamesParser.D_sduContext = D_sduContext; 
tnsnamesParser.D_recv_bufContext = D_recv_bufContext; 
tnsnamesParser.D_send_bufContext = D_send_bufContext; 
tnsnamesParser.D_service_typeContext = D_service_typeContext; 
tnsnamesParser.D_securityContext = D_securityContext; 
tnsnamesParser.D_conn_timeoutContext = D_conn_timeoutContext; 
tnsnamesParser.D_retry_countContext = D_retry_countContext; 
tnsnamesParser.D_tctContext = D_tctContext; 
tnsnamesParser.Ds_parameterContext = Ds_parameterContext; 
tnsnamesParser.Address_listContext = Address_listContext; 
tnsnamesParser.Al_paramsContext = Al_paramsContext; 
tnsnamesParser.Al_parameterContext = Al_parameterContext; 
tnsnamesParser.Al_failoverContext = Al_failoverContext; 
tnsnamesParser.Al_load_balanceContext = Al_load_balanceContext; 
tnsnamesParser.Al_source_routeContext = Al_source_routeContext; 
tnsnamesParser.AddressContext = AddressContext; 
tnsnamesParser.A_paramsContext = A_paramsContext; 
tnsnamesParser.A_parameterContext = A_parameterContext; 
tnsnamesParser.Protocol_infoContext = Protocol_infoContext; 
tnsnamesParser.Tcp_protocolContext = Tcp_protocolContext; 
tnsnamesParser.Tcp_paramsContext = Tcp_paramsContext; 
tnsnamesParser.Tcp_parameterContext = Tcp_parameterContext; 
tnsnamesParser.Tcp_hostContext = Tcp_hostContext; 
tnsnamesParser.Tcp_portContext = Tcp_portContext; 
tnsnamesParser.Tcp_tcpContext = Tcp_tcpContext; 
tnsnamesParser.HostContext = HostContext; 
tnsnamesParser.PortContext = PortContext; 
tnsnamesParser.Ipc_protocolContext = Ipc_protocolContext; 
tnsnamesParser.Ipc_paramsContext = Ipc_paramsContext; 
tnsnamesParser.Ipc_parameterContext = Ipc_parameterContext; 
tnsnamesParser.Ipc_ipcContext = Ipc_ipcContext; 
tnsnamesParser.Ipc_keyContext = Ipc_keyContext; 
tnsnamesParser.Spx_protocolContext = Spx_protocolContext; 
tnsnamesParser.Spx_paramsContext = Spx_paramsContext; 
tnsnamesParser.Spx_parameterContext = Spx_parameterContext; 
tnsnamesParser.Spx_spxContext = Spx_spxContext; 
tnsnamesParser.Spx_serviceContext = Spx_serviceContext; 
tnsnamesParser.Nmp_protocolContext = Nmp_protocolContext; 
tnsnamesParser.Nmp_paramsContext = Nmp_paramsContext; 
tnsnamesParser.Nmp_parameterContext = Nmp_parameterContext; 
tnsnamesParser.Nmp_nmpContext = Nmp_nmpContext; 
tnsnamesParser.Nmp_serverContext = Nmp_serverContext; 
tnsnamesParser.Nmp_pipeContext = Nmp_pipeContext; 
tnsnamesParser.Beq_protocolContext = Beq_protocolContext; 
tnsnamesParser.Beq_paramsContext = Beq_paramsContext; 
tnsnamesParser.Beq_parameterContext = Beq_parameterContext; 
tnsnamesParser.Beq_beqContext = Beq_beqContext; 
tnsnamesParser.Beq_programContext = Beq_programContext; 
tnsnamesParser.Beq_argv0Context = Beq_argv0Context; 
tnsnamesParser.Beq_argsContext = Beq_argsContext; 
tnsnamesParser.Ba_parameterContext = Ba_parameterContext; 
tnsnamesParser.Ba_descriptionContext = Ba_descriptionContext; 
tnsnamesParser.Bad_paramsContext = Bad_paramsContext; 
tnsnamesParser.Bad_parameterContext = Bad_parameterContext; 
tnsnamesParser.Bad_localContext = Bad_localContext; 
tnsnamesParser.Bad_addressContext = Bad_addressContext; 
tnsnamesParser.Connect_dataContext = Connect_dataContext; 
tnsnamesParser.Cd_paramsContext = Cd_paramsContext; 
tnsnamesParser.Cd_parameterContext = Cd_parameterContext; 
tnsnamesParser.Cd_service_nameContext = Cd_service_nameContext; 
tnsnamesParser.Cd_sidContext = Cd_sidContext; 
tnsnamesParser.Cd_instance_nameContext = Cd_instance_nameContext; 
tnsnamesParser.Cd_failover_modeContext = Cd_failover_modeContext; 
tnsnamesParser.Cd_global_nameContext = Cd_global_nameContext; 
tnsnamesParser.Cd_hsContext = Cd_hsContext; 
tnsnamesParser.Cd_rdb_databaseContext = Cd_rdb_databaseContext; 
tnsnamesParser.Cd_serverContext = Cd_serverContext; 
tnsnamesParser.Cd_urContext = Cd_urContext; 
tnsnamesParser.Fo_paramsContext = Fo_paramsContext; 
tnsnamesParser.Fo_parameterContext = Fo_parameterContext; 
tnsnamesParser.Fo_typeContext = Fo_typeContext; 
tnsnamesParser.Fo_backupContext = Fo_backupContext; 
tnsnamesParser.Fo_methodContext = Fo_methodContext; 
tnsnamesParser.Fo_retriesContext = Fo_retriesContext; 
tnsnamesParser.Fo_delayContext = Fo_delayContext; 
