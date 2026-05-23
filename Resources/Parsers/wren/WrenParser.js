// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/wren/WrenParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import WrenParserListener from './WrenParserListener.js';
const serializedATN = [4,1,81,591,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,1,0,4,0,142,
8,0,11,0,12,0,143,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,153,8,1,1,2,3,2,156,8,
2,1,2,1,2,1,2,1,2,4,2,162,8,2,11,2,12,2,163,3,2,166,8,2,1,3,1,3,1,3,1,4,
1,4,1,5,1,5,1,5,5,5,176,8,5,10,5,12,5,179,9,5,1,5,3,5,182,8,5,1,6,1,6,1,
6,1,6,1,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,9,1,9,1,9,1,9,3,9,200,8,9,1,9,1,
9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,3,11,221,8,11,1,12,1,12,1,12,1,12,5,12,227,8,12,10,12,12,12,
230,9,12,1,12,1,12,1,13,1,13,3,13,236,8,13,1,13,5,13,239,8,13,10,13,12,13,
242,9,13,1,13,1,13,1,14,1,14,1,14,1,15,3,15,250,8,15,1,15,3,15,253,8,15,
1,15,1,15,1,15,3,15,258,8,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,17,1,17,
3,17,269,8,17,1,18,4,18,272,8,18,11,18,12,18,273,1,19,1,19,1,19,3,19,279,
8,19,1,20,1,20,3,20,283,8,20,1,20,1,20,1,21,1,21,3,21,289,8,21,1,21,1,21,
1,21,1,21,1,21,5,21,296,8,21,10,21,12,21,299,9,21,1,21,1,21,1,22,3,22,304,
8,22,1,22,3,22,307,8,22,1,22,5,22,310,8,22,10,22,12,22,313,9,22,1,23,1,23,
1,23,1,23,1,23,1,23,3,23,321,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,
330,8,24,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,3,26,341,8,26,1,27,
1,27,1,28,1,28,3,28,347,8,28,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,
1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,
34,1,35,1,35,1,35,1,36,1,36,1,36,1,36,5,36,380,8,36,10,36,12,36,383,9,36,
3,36,385,8,36,1,36,1,36,1,37,1,37,1,37,3,37,392,8,37,1,38,1,38,1,38,3,38,
397,8,38,1,39,1,39,1,39,3,39,402,8,39,1,40,1,40,1,40,1,40,1,40,1,41,1,41,
1,41,3,41,412,8,41,1,41,1,41,5,41,416,8,41,10,41,12,41,419,9,41,1,42,1,42,
3,42,423,8,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,435,
8,43,1,43,1,43,5,43,439,8,43,10,43,12,43,442,9,43,1,44,1,44,1,44,1,44,1,
44,1,44,1,44,1,44,1,44,1,44,1,44,3,44,455,8,44,1,45,1,45,1,45,1,45,1,45,
1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,472,8,45,1,46,1,46,
1,46,5,46,477,8,46,10,46,12,46,480,9,46,1,47,1,47,1,47,1,47,1,47,1,47,1,
47,1,47,5,47,490,8,47,10,47,12,47,493,9,47,1,48,1,48,1,48,1,48,1,49,1,49,
3,49,501,8,49,1,49,1,49,1,50,1,50,3,50,507,8,50,1,50,1,50,1,51,1,51,3,51,
513,8,51,1,52,1,52,1,52,1,53,1,53,3,53,520,8,53,1,54,1,54,1,54,1,55,1,55,
1,55,3,55,528,8,55,1,56,1,56,1,56,3,56,533,8,56,1,57,1,57,1,57,3,57,538,
8,57,1,58,1,58,1,58,3,58,543,8,58,1,59,1,59,1,60,1,60,1,60,1,60,1,60,3,60,
552,8,60,1,61,1,61,1,61,1,61,1,61,5,61,559,8,61,10,61,12,61,562,9,61,1,62,
1,62,1,62,1,62,1,62,5,62,569,8,62,10,62,12,62,572,9,62,1,63,1,63,1,63,1,
63,1,63,1,64,1,64,1,65,1,65,1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,69,
0,1,86,70,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,
46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,
94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,
132,134,136,138,0,12,2,0,52,61,64,65,6,0,13,13,30,31,36,39,44,51,62,63,66,
67,1,0,66,67,2,0,46,47,51,51,1,0,44,45,1,0,62,63,1,0,48,50,2,0,30,31,36,
39,1,0,40,41,2,0,7,7,17,17,1,0,76,77,2,0,69,70,73,74,612,0,141,1,0,0,0,2,
152,1,0,0,0,4,155,1,0,0,0,6,167,1,0,0,0,8,170,1,0,0,0,10,172,1,0,0,0,12,
183,1,0,0,0,14,188,1,0,0,0,16,192,1,0,0,0,18,195,1,0,0,0,20,204,1,0,0,0,
22,220,1,0,0,0,24,222,1,0,0,0,26,233,1,0,0,0,28,245,1,0,0,0,30,249,1,0,0,
0,32,263,1,0,0,0,34,268,1,0,0,0,36,271,1,0,0,0,38,275,1,0,0,0,40,280,1,0,
0,0,42,286,1,0,0,0,44,311,1,0,0,0,46,320,1,0,0,0,48,329,1,0,0,0,50,331,1,
0,0,0,52,340,1,0,0,0,54,342,1,0,0,0,56,344,1,0,0,0,58,348,1,0,0,0,60,352,
1,0,0,0,62,356,1,0,0,0,64,360,1,0,0,0,66,363,1,0,0,0,68,368,1,0,0,0,70,372,
1,0,0,0,72,375,1,0,0,0,74,388,1,0,0,0,76,393,1,0,0,0,78,398,1,0,0,0,80,403,
1,0,0,0,82,408,1,0,0,0,84,420,1,0,0,0,86,434,1,0,0,0,88,454,1,0,0,0,90,471,
1,0,0,0,92,473,1,0,0,0,94,481,1,0,0,0,96,494,1,0,0,0,98,498,1,0,0,0,100,
504,1,0,0,0,102,512,1,0,0,0,104,514,1,0,0,0,106,519,1,0,0,0,108,521,1,0,
0,0,110,524,1,0,0,0,112,529,1,0,0,0,114,534,1,0,0,0,116,539,1,0,0,0,118,
544,1,0,0,0,120,551,1,0,0,0,122,553,1,0,0,0,124,563,1,0,0,0,126,573,1,0,
0,0,128,578,1,0,0,0,130,580,1,0,0,0,132,582,1,0,0,0,134,584,1,0,0,0,136,
586,1,0,0,0,138,588,1,0,0,0,140,142,3,2,1,0,141,140,1,0,0,0,142,143,1,0,
0,0,143,141,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,146,5,0,0,1,146,
1,1,0,0,0,147,153,3,30,15,0,148,153,3,74,37,0,149,153,3,76,38,0,150,153,
3,22,11,0,151,153,3,26,13,0,152,147,1,0,0,0,152,148,1,0,0,0,152,149,1,0,
0,0,152,150,1,0,0,0,152,151,1,0,0,0,153,3,1,0,0,0,154,156,5,18,0,0,155,154,
1,0,0,0,155,156,1,0,0,0,156,157,1,0,0,0,157,158,3,86,43,0,158,165,3,8,4,
0,159,166,3,86,43,0,160,162,3,4,2,0,161,160,1,0,0,0,162,163,1,0,0,0,163,
161,1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,159,1,0,0,0,165,161,1,0,
0,0,166,5,1,0,0,0,167,168,5,18,0,0,168,169,3,128,64,0,169,7,1,0,0,0,170,
171,7,0,0,0,171,9,1,0,0,0,172,173,3,12,6,0,173,177,3,22,11,0,174,176,3,14,
7,0,175,174,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,
181,1,0,0,0,179,177,1,0,0,0,180,182,3,16,8,0,181,180,1,0,0,0,181,182,1,0,
0,0,182,11,1,0,0,0,183,184,5,10,0,0,184,185,5,20,0,0,185,186,3,86,43,0,186,
187,5,21,0,0,187,13,1,0,0,0,188,189,5,6,0,0,189,190,3,12,6,0,190,191,3,22,
11,0,191,15,1,0,0,0,192,193,5,6,0,0,193,194,3,22,11,0,194,17,1,0,0,0,195,
196,5,19,0,0,196,199,5,20,0,0,197,200,3,86,43,0,198,200,3,4,2,0,199,197,
1,0,0,0,199,198,1,0,0,0,200,201,1,0,0,0,201,202,5,21,0,0,202,203,3,22,11,
0,203,19,1,0,0,0,204,205,5,8,0,0,205,206,5,20,0,0,206,207,3,128,64,0,207,
208,5,12,0,0,208,209,3,86,43,0,209,210,5,21,0,0,210,211,3,22,11,0,211,21,
1,0,0,0,212,221,3,86,43,0,213,221,3,4,2,0,214,221,3,6,3,0,215,221,3,10,5,
0,216,221,3,18,9,0,217,221,3,20,10,0,218,221,3,26,13,0,219,221,3,28,14,0,
220,212,1,0,0,0,220,213,1,0,0,0,220,214,1,0,0,0,220,215,1,0,0,0,220,216,
1,0,0,0,220,217,1,0,0,0,220,218,1,0,0,0,220,219,1,0,0,0,221,23,1,0,0,0,222,
223,5,49,0,0,223,228,3,128,64,0,224,225,5,27,0,0,225,227,3,128,64,0,226,
224,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,0,0,0,229,231,1,0,
0,0,230,228,1,0,0,0,231,232,5,49,0,0,232,25,1,0,0,0,233,235,5,22,0,0,234,
236,3,24,12,0,235,234,1,0,0,0,235,236,1,0,0,0,236,240,1,0,0,0,237,239,3,
22,11,0,238,237,1,0,0,0,239,242,1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,
241,243,1,0,0,0,242,240,1,0,0,0,243,244,5,23,0,0,244,27,1,0,0,0,245,246,
5,15,0,0,246,247,3,86,43,0,247,29,1,0,0,0,248,250,3,36,18,0,249,248,1,0,
0,0,249,250,1,0,0,0,250,252,1,0,0,0,251,253,5,9,0,0,252,251,1,0,0,0,252,
253,1,0,0,0,253,254,1,0,0,0,254,255,5,3,0,0,255,257,3,128,64,0,256,258,3,
32,16,0,257,256,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,260,5,22,0,0,
260,261,3,44,22,0,261,262,5,23,0,0,262,31,1,0,0,0,263,264,5,13,0,0,264,265,
3,128,64,0,265,33,1,0,0,0,266,269,3,40,20,0,267,269,3,42,21,0,268,266,1,
0,0,0,268,267,1,0,0,0,269,35,1,0,0,0,270,272,3,34,17,0,271,270,1,0,0,0,272,
273,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,37,1,0,0,0,275,278,3,128,
64,0,276,277,5,52,0,0,277,279,3,90,45,0,278,276,1,0,0,0,278,279,1,0,0,0,
279,39,1,0,0,0,280,282,5,29,0,0,281,283,5,32,0,0,282,281,1,0,0,0,282,283,
1,0,0,0,283,284,1,0,0,0,284,285,3,38,19,0,285,41,1,0,0,0,286,288,5,29,0,
0,287,289,5,32,0,0,288,287,1,0,0,0,288,289,1,0,0,0,289,290,1,0,0,0,290,291,
3,128,64,0,291,292,5,20,0,0,292,297,3,38,19,0,293,294,5,27,0,0,294,296,3,
38,19,0,295,293,1,0,0,0,296,299,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,
298,300,1,0,0,0,299,297,1,0,0,0,300,301,5,21,0,0,301,43,1,0,0,0,302,304,
3,36,18,0,303,302,1,0,0,0,303,304,1,0,0,0,304,306,1,0,0,0,305,307,3,46,23,
0,306,305,1,0,0,0,306,307,1,0,0,0,307,308,1,0,0,0,308,310,3,48,24,0,309,
303,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,45,1,0,0,
0,313,311,1,0,0,0,314,321,5,9,0,0,315,321,5,16,0,0,316,317,5,16,0,0,317,
321,5,9,0,0,318,319,5,9,0,0,319,321,5,16,0,0,320,314,1,0,0,0,320,315,1,0,
0,0,320,316,1,0,0,0,320,318,1,0,0,0,321,47,1,0,0,0,322,330,3,74,37,0,323,
330,3,56,28,0,324,330,3,68,34,0,325,330,3,64,32,0,326,330,3,66,33,0,327,
330,3,58,29,0,328,330,3,50,25,0,329,322,1,0,0,0,329,323,1,0,0,0,329,324,
1,0,0,0,329,325,1,0,0,0,329,326,1,0,0,0,329,327,1,0,0,0,329,328,1,0,0,0,
330,49,1,0,0,0,331,332,5,4,0,0,332,333,3,128,64,0,333,334,3,72,36,0,334,
335,3,26,13,0,335,51,1,0,0,0,336,341,5,45,0,0,337,341,5,33,0,0,338,341,5,
32,0,0,339,341,3,128,64,0,340,336,1,0,0,0,340,337,1,0,0,0,340,338,1,0,0,
0,340,339,1,0,0,0,341,53,1,0,0,0,342,343,7,1,0,0,343,55,1,0,0,0,344,346,
3,52,26,0,345,347,3,26,13,0,346,345,1,0,0,0,346,347,1,0,0,0,347,57,1,0,0,
0,348,349,3,54,27,0,349,350,3,60,30,0,350,351,3,26,13,0,351,59,1,0,0,0,352,
353,5,20,0,0,353,354,3,128,64,0,354,355,5,21,0,0,355,61,1,0,0,0,356,357,
5,24,0,0,357,358,3,92,46,0,358,359,5,25,0,0,359,63,1,0,0,0,360,361,3,62,
31,0,361,362,3,26,13,0,362,65,1,0,0,0,363,364,3,62,31,0,364,365,5,52,0,0,
365,366,3,60,30,0,366,367,3,26,13,0,367,67,1,0,0,0,368,369,3,128,64,0,369,
370,3,70,35,0,370,371,3,26,13,0,371,69,1,0,0,0,372,373,5,52,0,0,373,374,
3,60,30,0,374,71,1,0,0,0,375,384,5,20,0,0,376,381,3,128,64,0,377,378,5,27,
0,0,378,380,3,128,64,0,379,377,1,0,0,0,380,383,1,0,0,0,381,379,1,0,0,0,381,
382,1,0,0,0,382,385,1,0,0,0,383,381,1,0,0,0,384,376,1,0,0,0,384,385,1,0,
0,0,385,386,1,0,0,0,386,387,5,21,0,0,387,73,1,0,0,0,388,389,3,128,64,0,389,
391,3,72,36,0,390,392,3,26,13,0,391,390,1,0,0,0,391,392,1,0,0,0,392,75,1,
0,0,0,393,394,5,11,0,0,394,396,5,76,0,0,395,397,3,80,40,0,396,395,1,0,0,
0,396,397,1,0,0,0,397,77,1,0,0,0,398,401,3,128,64,0,399,400,5,1,0,0,400,
402,3,128,64,0,401,399,1,0,0,0,401,402,1,0,0,0,402,79,1,0,0,0,403,404,5,
8,0,0,404,405,3,78,39,0,405,406,5,27,0,0,406,407,3,78,39,0,407,81,1,0,0,
0,408,411,3,128,64,0,409,412,3,84,42,0,410,412,3,26,13,0,411,409,1,0,0,0,
411,410,1,0,0,0,411,412,1,0,0,0,412,417,1,0,0,0,413,414,5,28,0,0,414,416,
3,82,41,0,415,413,1,0,0,0,416,419,1,0,0,0,417,415,1,0,0,0,417,418,1,0,0,
0,418,83,1,0,0,0,419,417,1,0,0,0,420,422,5,20,0,0,421,423,3,92,46,0,422,
421,1,0,0,0,422,423,1,0,0,0,423,424,1,0,0,0,424,425,5,21,0,0,425,85,1,0,
0,0,426,427,6,43,-1,0,427,428,5,32,0,0,428,435,3,86,43,3,429,430,5,20,0,
0,430,431,3,86,43,0,431,432,5,21,0,0,432,435,1,0,0,0,433,435,3,90,45,0,434,
426,1,0,0,0,434,429,1,0,0,0,434,433,1,0,0,0,435,440,1,0,0,0,436,437,10,4,
0,0,437,439,3,88,44,0,438,436,1,0,0,0,439,442,1,0,0,0,440,438,1,0,0,0,440,
441,1,0,0,0,441,87,1,0,0,0,442,440,1,0,0,0,443,455,3,124,62,0,444,455,3,
116,58,0,445,455,3,114,57,0,446,455,3,112,56,0,447,455,3,110,55,0,448,455,
3,108,54,0,449,450,5,28,0,0,450,455,3,82,41,0,451,452,5,13,0,0,452,455,3,
86,43,0,453,455,3,126,63,0,454,443,1,0,0,0,454,444,1,0,0,0,454,445,1,0,0,
0,454,446,1,0,0,0,454,447,1,0,0,0,454,448,1,0,0,0,454,449,1,0,0,0,454,451,
1,0,0,0,454,453,1,0,0,0,455,89,1,0,0,0,456,472,3,130,65,0,457,472,3,132,
66,0,458,472,3,134,67,0,459,472,3,136,68,0,460,472,3,138,69,0,461,472,3,
98,49,0,462,472,3,100,50,0,463,472,3,82,41,0,464,472,3,96,48,0,465,472,3,
104,52,0,466,472,5,2,0,0,467,472,5,5,0,0,468,472,3,76,38,0,469,470,5,45,
0,0,470,472,3,90,45,0,471,456,1,0,0,0,471,457,1,0,0,0,471,458,1,0,0,0,471,
459,1,0,0,0,471,460,1,0,0,0,471,461,1,0,0,0,471,462,1,0,0,0,471,463,1,0,
0,0,471,464,1,0,0,0,471,465,1,0,0,0,471,466,1,0,0,0,471,467,1,0,0,0,471,
468,1,0,0,0,471,469,1,0,0,0,472,91,1,0,0,0,473,478,3,86,43,0,474,475,5,27,
0,0,475,477,3,86,43,0,476,474,1,0,0,0,477,480,1,0,0,0,478,476,1,0,0,0,478,
479,1,0,0,0,479,93,1,0,0,0,480,478,1,0,0,0,481,482,3,86,43,0,482,483,5,35,
0,0,483,491,3,86,43,0,484,485,5,27,0,0,485,486,3,86,43,0,486,487,5,35,0,
0,487,488,3,86,43,0,488,490,1,0,0,0,489,484,1,0,0,0,490,493,1,0,0,0,491,
489,1,0,0,0,491,492,1,0,0,0,492,95,1,0,0,0,493,491,1,0,0,0,494,495,3,106,
53,0,495,496,7,2,0,0,496,497,3,106,53,0,497,97,1,0,0,0,498,500,5,24,0,0,
499,501,3,92,46,0,500,499,1,0,0,0,500,501,1,0,0,0,501,502,1,0,0,0,502,503,
5,25,0,0,503,99,1,0,0,0,504,506,5,22,0,0,505,507,3,94,47,0,506,505,1,0,0,
0,506,507,1,0,0,0,507,508,1,0,0,0,508,509,5,23,0,0,509,101,1,0,0,0,510,513,
3,82,41,0,511,513,3,134,67,0,512,510,1,0,0,0,512,511,1,0,0,0,513,103,1,0,
0,0,514,515,3,102,51,0,515,516,3,98,49,0,516,105,1,0,0,0,517,520,3,82,41,
0,518,520,3,136,68,0,519,517,1,0,0,0,519,518,1,0,0,0,520,107,1,0,0,0,521,
522,7,3,0,0,522,523,3,86,43,0,523,109,1,0,0,0,524,527,7,4,0,0,525,528,3,
108,54,0,526,528,3,86,43,0,527,525,1,0,0,0,527,526,1,0,0,0,528,111,1,0,0,
0,529,532,7,2,0,0,530,533,3,110,55,0,531,533,3,86,43,0,532,530,1,0,0,0,532,
531,1,0,0,0,533,113,1,0,0,0,534,537,7,5,0,0,535,538,3,112,56,0,536,538,3,
86,43,0,537,535,1,0,0,0,537,536,1,0,0,0,538,115,1,0,0,0,539,542,7,6,0,0,
540,543,3,114,57,0,541,543,3,86,43,0,542,540,1,0,0,0,542,541,1,0,0,0,543,
117,1,0,0,0,544,545,7,7,0,0,545,119,1,0,0,0,546,547,3,118,59,0,547,548,3,
86,43,0,548,552,1,0,0,0,549,550,7,8,0,0,550,552,3,86,43,0,551,546,1,0,0,
0,551,549,1,0,0,0,552,121,1,0,0,0,553,560,3,120,60,0,554,555,5,40,0,0,555,
556,3,86,43,0,556,557,3,120,60,0,557,559,1,0,0,0,558,554,1,0,0,0,559,562,
1,0,0,0,560,558,1,0,0,0,560,561,1,0,0,0,561,123,1,0,0,0,562,560,1,0,0,0,
563,570,3,122,61,0,564,565,5,41,0,0,565,566,3,86,43,0,566,567,3,122,61,0,
567,569,1,0,0,0,568,564,1,0,0,0,569,572,1,0,0,0,570,568,1,0,0,0,570,571,
1,0,0,0,571,125,1,0,0,0,572,570,1,0,0,0,573,574,5,34,0,0,574,575,3,86,43,
0,575,576,5,35,0,0,576,577,3,86,43,0,577,127,1,0,0,0,578,579,5,68,0,0,579,
129,1,0,0,0,580,581,7,9,0,0,581,131,1,0,0,0,582,583,5,75,0,0,583,133,1,0,
0,0,584,585,7,10,0,0,585,135,1,0,0,0,586,587,7,11,0,0,587,137,1,0,0,0,588,
589,5,14,0,0,589,139,1,0,0,0,53,143,152,155,163,165,177,181,199,220,228,
235,240,249,252,257,268,273,278,282,288,297,303,306,311,320,329,340,346,
381,384,391,396,401,411,417,422,434,440,454,471,478,491,500,506,512,519,
527,532,537,542,551,560,570];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class WrenParser extends antlr4.Parser {

    static grammarFileName = "WrenParser.g4";
    static literalNames = [ null, "'as'", "'break'", "'class'", "'construct'", 
                            "'continue'", "'else'", "'false'", "'for'", 
                            "'foreign'", "'if'", "'import'", "'in'", "'is'", 
                            "'null'", "'return'", "'static'", "'true'", 
                            "'var'", "'while'", "'('", "')'", "'{'", "'}'", 
                            "'['", "']'", "';'", "','", "'.'", "'#'", "'>'", 
                            "'<'", "'!'", "'~'", "'?'", "':'", "'=='", "'<='", 
                            "'>='", "'!='", "'&&'", "'||'", "'++'", "'--'", 
                            "'+'", "'-'", "'*'", "'/'", "'&'", "'|'", "'^'", 
                            "'%'", "'='", "'+='", "'-='", "'*='", "'/='", 
                            "'&='", "'|='", "'^='", "'%='", "'<<='", "'<<'", 
                            "'>>'", "'>>='", "'>>>='", "'...'", "'..'" ];
    static symbolicNames = [ null, "AS", "BREAK_T", "CLASS_T", "CONSTRUCT", 
                             "CONTINUE_T", "ELSE_T", "FALSE_T", "FOR_T", 
                             "FOREIGN_T", "IF_T", "IMPORT_T", "IN", "IS", 
                             "NULL_T", "RETURN_T", "STATIC_T", "TRUE_T", 
                             "VAR_T", "WHILE_T", "LPAREN", "RPAREN", "LBRACE", 
                             "RBRACE", "LBRACK", "RBRACK", "SEMI", "COMMA", 
                             "DOT", "HASH", "GT", "LT", "BANG", "TILDE", 
                             "QUESTION", "COLON", "EQUAL", "LE", "GE", "NOTEQUAL", 
                             "AND", "OR", "INC", "DEC", "ADD", "SUB", "MUL", 
                             "DIV", "BITAND", "BITOR", "CARET", "MOD", "ASSIGN", 
                             "ADD_ASSIGN", "SUB_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
                             "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", "MOD_ASSIGN", 
                             "LSHIFT_ASSIGN", "LSHIFT", "RSHIFT", "RSHIFT_ASSIGN", 
                             "URSHIFT_ASSIGN", "ELLIPSIS_OUT", "ELLIPSIS_IN", 
                             "IDENTIFIER", "DECIMAL_LITERAL", "HEX_LITERAL", 
                             "OCT_LITERAL", "BINARY_LITERAL", "FLOAT_LITERAL", 
                             "HEX_FLOAT_LITERAL", "CHAR_LITERAL", "STRING_LITERAL", 
                             "TEXT_BLOCK", "WS", "COMMENT", "LINE_COMMENT", 
                             "ERRCHAR" ];
    static ruleNames = [ "script", "fileAtom", "assignment", "assignmentNull", 
                         "assignOp", "ifSt", "ifCond", "elseIf", "elseSt", 
                         "whileSt", "forSt", "statement", "lambdaParameters", 
                         "block", "returnSt", "classDefinition", "inheritance", 
                         "attribute", "attributes", "attributeValue", "simpleAttribute", 
                         "groupAttribute", "classBody", "classBodyTpe", 
                         "classStatement", "classConstructor", "operatorGetter", 
                         "operatorSetter", "classOpGetter", "classOpSetter", 
                         "oneArgument", "subscript", "classSubscriptGet", 
                         "classSubscriptSet", "classSetter", "assignmentSetter", 
                         "arguments", "function", "importModule", "importVariable", 
                         "importVariables", "call", "callInvoke", "expression", 
                         "compoundExpression", "atomExpression", "enumeration", 
                         "pairEnumeration", "range", "listInit", "mapInit", 
                         "elem", "collectionElem", "rangeExpression", "arithMul", 
                         "arithAdd", "arithRange", "arithShift", "arithBit", 
                         "logicOp", "atomLogic", "andLogic", "logic", "elvis", 
                         "id", "boolE", "charE", "stringE", "numE", "nullE" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = WrenParser.ruleNames;
        this.literalNames = WrenParser.literalNames;
        this.symbolicNames = WrenParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 43:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, WrenParser.RULE_script);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 140;
	            this.fileAtom();
	            this.state = 143; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 559861676) !== 0) || _la===32 || _la===45 || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 999) !== 0));
	        this.state = 145;
	        this.match(WrenParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fileAtom() {
	    let localctx = new FileAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, WrenParser.RULE_fileAtom);
	    try {
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 147;
	            this.classDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.function_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 149;
	            this.importModule();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 150;
	            this.statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 151;
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, WrenParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 154;
	            this.match(WrenParser.VAR_T);
	        }

	        this.state = 157;
	        this.expression(0);
	        this.state = 158;
	        this.assignOp();
	        this.state = 165;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 159;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 161; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 160;
	            		this.assignment();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 163; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	assignmentNull() {
	    let localctx = new AssignmentNullContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, WrenParser.RULE_assignmentNull);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(WrenParser.VAR_T);
	        this.state = 168;
	        this.id();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignOp() {
	    let localctx = new AssignOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, WrenParser.RULE_assignOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        _la = this._input.LA(1);
	        if(!(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 13311) !== 0))) {
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



	ifSt() {
	    let localctx = new IfStContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, WrenParser.RULE_ifSt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.ifCond();
	        this.state = 173;
	        this.statement();
	        this.state = 177;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 174;
	                this.elseIf(); 
	            }
	            this.state = 179;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	        this.state = 181;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        if(la_===1) {
	            this.state = 180;
	            this.elseSt();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifCond() {
	    let localctx = new IfCondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, WrenParser.RULE_ifCond);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(WrenParser.IF_T);
	        this.state = 184;
	        this.match(WrenParser.LPAREN);
	        this.state = 185;
	        this.expression(0);
	        this.state = 186;
	        this.match(WrenParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIf() {
	    let localctx = new ElseIfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, WrenParser.RULE_elseIf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        this.match(WrenParser.ELSE_T);
	        this.state = 189;
	        this.ifCond();
	        this.state = 190;
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



	elseSt() {
	    let localctx = new ElseStContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, WrenParser.RULE_elseSt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(WrenParser.ELSE_T);
	        this.state = 193;
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



	whileSt() {
	    let localctx = new WhileStContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, WrenParser.RULE_whileSt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(WrenParser.WHILE_T);
	        this.state = 196;
	        this.match(WrenParser.LPAREN);
	        this.state = 199;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 197;
	            this.expression(0);
	            break;

	        case 2:
	            this.state = 198;
	            this.assignment();
	            break;

	        }
	        this.state = 201;
	        this.match(WrenParser.RPAREN);
	        this.state = 202;
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



	forSt() {
	    let localctx = new ForStContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, WrenParser.RULE_forSt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 204;
	        this.match(WrenParser.FOR_T);
	        this.state = 205;
	        this.match(WrenParser.LPAREN);
	        this.state = 206;
	        this.id();
	        this.state = 207;
	        this.match(WrenParser.IN);
	        this.state = 208;
	        this.expression(0);
	        this.state = 209;
	        this.match(WrenParser.RPAREN);
	        this.state = 210;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, WrenParser.RULE_statement);
	    try {
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 212;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 214;
	            this.assignmentNull();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 215;
	            this.ifSt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 216;
	            this.whileSt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 217;
	            this.forSt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 218;
	            this.block();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 219;
	            this.returnSt();
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



	lambdaParameters() {
	    let localctx = new LambdaParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, WrenParser.RULE_lambdaParameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(WrenParser.BITOR);

	        this.state = 223;
	        this.id();
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 224;
	            this.match(WrenParser.COMMA);
	            this.state = 225;
	            this.id();
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 231;
	        this.match(WrenParser.BITOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 26, WrenParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.match(WrenParser.LBRACE);
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49) {
	            this.state = 234;
	            this.lambdaParameters();
	        }

	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 22990244) !== 0) || _la===32 || _la===45 || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 999) !== 0)) {
	            this.state = 237;
	            this.statement();
	            this.state = 242;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 243;
	        this.match(WrenParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnSt() {
	    let localctx = new ReturnStContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, WrenParser.RULE_returnSt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(WrenParser.RETURN_T);
	        this.state = 246;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classDefinition() {
	    let localctx = new ClassDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, WrenParser.RULE_classDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 248;
	            this.attributes();
	        }

	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 251;
	            this.match(WrenParser.FOREIGN_T);
	        }

	        this.state = 254;
	        this.match(WrenParser.CLASS_T);
	        this.state = 255;
	        this.id();
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 256;
	            this.inheritance();
	        }

	        this.state = 259;
	        this.match(WrenParser.LBRACE);
	        this.state = 260;
	        this.classBody();
	        this.state = 261;
	        this.match(WrenParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inheritance() {
	    let localctx = new InheritanceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, WrenParser.RULE_inheritance);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(WrenParser.IS);
	        this.state = 264;
	        this.id();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribute() {
	    let localctx = new AttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, WrenParser.RULE_attribute);
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.simpleAttribute();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 267;
	            this.groupAttribute();
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



	attributes() {
	    let localctx = new AttributesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, WrenParser.RULE_attributes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 270;
	            this.attribute();
	            this.state = 273; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===29);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributeValue() {
	    let localctx = new AttributeValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, WrenParser.RULE_attributeValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        this.id();
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 276;
	            this.match(WrenParser.ASSIGN);
	            this.state = 277;
	            this.atomExpression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleAttribute() {
	    let localctx = new SimpleAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, WrenParser.RULE_simpleAttribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(WrenParser.HASH);
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 281;
	            this.match(WrenParser.BANG);
	        }

	        this.state = 284;
	        this.attributeValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupAttribute() {
	    let localctx = new GroupAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, WrenParser.RULE_groupAttribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.match(WrenParser.HASH);
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===32) {
	            this.state = 287;
	            this.match(WrenParser.BANG);
	        }

	        this.state = 290;
	        this.id();
	        this.state = 291;
	        this.match(WrenParser.LPAREN);
	        this.state = 292;
	        this.attributeValue();
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 293;
	            this.match(WrenParser.COMMA);
	            this.state = 294;
	            this.attributeValue();
	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 300;
	        this.match(WrenParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classBody() {
	    let localctx = new ClassBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, WrenParser.RULE_classBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3774947856) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 3222270195) !== 0) || ((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 7) !== 0)) {
	            this.state = 303;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===29) {
	                this.state = 302;
	                this.attributes();
	            }

	            this.state = 306;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===9 || _la===16) {
	                this.state = 305;
	                this.classBodyTpe();
	            }

	            this.state = 308;
	            this.classStatement();
	            this.state = 313;
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



	classBodyTpe() {
	    let localctx = new ClassBodyTpeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, WrenParser.RULE_classBodyTpe);
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 314;
	            this.match(WrenParser.FOREIGN_T);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 315;
	            this.match(WrenParser.STATIC_T);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 316;
	            this.match(WrenParser.STATIC_T);
	            this.state = 317;
	            this.match(WrenParser.FOREIGN_T);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 318;
	            this.match(WrenParser.FOREIGN_T);
	            this.state = 319;
	            this.match(WrenParser.STATIC_T);
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



	classStatement() {
	    let localctx = new ClassStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, WrenParser.RULE_classStatement);
	    try {
	        this.state = 329;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 322;
	            this.function_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 323;
	            this.classOpGetter();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 324;
	            this.classSetter();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 325;
	            this.classSubscriptGet();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 326;
	            this.classSubscriptSet();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 327;
	            this.classOpSetter();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 328;
	            this.classConstructor();
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



	classConstructor() {
	    let localctx = new ClassConstructorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, WrenParser.RULE_classConstructor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(WrenParser.CONSTRUCT);
	        this.state = 332;
	        this.id();
	        this.state = 333;
	        this.arguments();
	        this.state = 334;
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



	operatorGetter() {
	    let localctx = new OperatorGetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, WrenParser.RULE_operatorGetter);
	    try {
	        this.state = 340;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 45:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 336;
	            this.match(WrenParser.SUB);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 337;
	            this.match(WrenParser.TILDE);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 338;
	            this.match(WrenParser.BANG);
	            break;
	        case 68:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 339;
	            this.id();
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



	operatorSetter() {
	    let localctx = new OperatorSetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, WrenParser.RULE_operatorSetter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221233664) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 3422617359) !== 0))) {
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



	classOpGetter() {
	    let localctx = new ClassOpGetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, WrenParser.RULE_classOpGetter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.operatorGetter();
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 345;
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



	classOpSetter() {
	    let localctx = new ClassOpSetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, WrenParser.RULE_classOpSetter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.operatorSetter();
	        this.state = 349;
	        this.oneArgument();
	        this.state = 350;
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



	oneArgument() {
	    let localctx = new OneArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, WrenParser.RULE_oneArgument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(WrenParser.LPAREN);
	        this.state = 353;
	        this.id();
	        this.state = 354;
	        this.match(WrenParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subscript() {
	    let localctx = new SubscriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, WrenParser.RULE_subscript);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(WrenParser.LBRACK);
	        this.state = 357;
	        this.enumeration();
	        this.state = 358;
	        this.match(WrenParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classSubscriptGet() {
	    let localctx = new ClassSubscriptGetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, WrenParser.RULE_classSubscriptGet);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.subscript();
	        this.state = 361;
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



	classSubscriptSet() {
	    let localctx = new ClassSubscriptSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, WrenParser.RULE_classSubscriptSet);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.subscript();
	        this.state = 364;
	        this.match(WrenParser.ASSIGN);
	        this.state = 365;
	        this.oneArgument();
	        this.state = 366;
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



	classSetter() {
	    let localctx = new ClassSetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, WrenParser.RULE_classSetter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this.id();
	        this.state = 369;
	        this.assignmentSetter();
	        this.state = 370;
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



	assignmentSetter() {
	    let localctx = new AssignmentSetterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, WrenParser.RULE_assignmentSetter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 372;
	        this.match(WrenParser.ASSIGN);
	        this.state = 373;
	        this.oneArgument();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, WrenParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(WrenParser.LPAREN);
	        this.state = 384;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===68) {
	            this.state = 376;
	            this.id();
	            this.state = 381;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===27) {
	                this.state = 377;
	                this.match(WrenParser.COMMA);
	                this.state = 378;
	                this.id();
	                this.state = 383;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 386;
	        this.match(WrenParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, WrenParser.RULE_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        this.id();
	        this.state = 389;
	        this.arguments();
	        this.state = 391;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 390;
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



	importModule() {
	    let localctx = new ImportModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, WrenParser.RULE_importModule);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(WrenParser.IMPORT_T);
	        this.state = 394;
	        this.match(WrenParser.STRING_LITERAL);
	        this.state = 396;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 395;
	            this.importVariables();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importVariable() {
	    let localctx = new ImportVariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, WrenParser.RULE_importVariable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.id();
	        this.state = 401;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        if(la_===1) {
	            this.state = 399;
	            this.match(WrenParser.AS);
	            this.state = 400;
	            this.id();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importVariables() {
	    let localctx = new ImportVariablesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, WrenParser.RULE_importVariables);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(WrenParser.FOR_T);
	        this.state = 404;
	        this.importVariable();

	        this.state = 405;
	        this.match(WrenParser.COMMA);
	        this.state = 406;
	        this.importVariable();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	call() {
	    let localctx = new CallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, WrenParser.RULE_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.id();
	        this.state = 411;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        if(la_===1) {
	            this.state = 409;
	            this.callInvoke();

	        } else if(la_===2) {
	            this.state = 410;
	            this.block();

	        }
	        this.state = 417;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 413;
	                this.match(WrenParser.DOT);
	                this.state = 414;
	                this.call(); 
	            }
	            this.state = 419;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callInvoke() {
	    let localctx = new CallInvokeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, WrenParser.RULE_callInvoke);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 420;
	        this.match(WrenParser.LPAREN);
	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 22169764) !== 0) || _la===32 || _la===45 || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 999) !== 0)) {
	            this.state = 421;
	            this.enumeration();
	        }

	        this.state = 424;
	        this.match(WrenParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 86;
	    this.enterRecursionRule(localctx, 86, WrenParser.RULE_expression, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.state = 427;
	            this.match(WrenParser.BANG);
	            this.state = 428;
	            this.expression(3);
	            break;
	        case 20:
	            this.state = 429;
	            this.match(WrenParser.LPAREN);
	            this.state = 430;
	            this.expression(0);
	            this.state = 431;
	            this.match(WrenParser.RPAREN);
	            break;
	        case 2:
	        case 5:
	        case 7:
	        case 11:
	        case 14:
	        case 17:
	        case 22:
	        case 24:
	        case 45:
	        case 68:
	        case 69:
	        case 70:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	            this.state = 433;
	            this.atomExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 440;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpressionContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, WrenParser.RULE_expression);
	                this.state = 436;
	                if (!( this.precpred(this._ctx, 4))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                }
	                this.state = 437;
	                this.compoundExpression(); 
	            }
	            this.state = 442;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
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



	compoundExpression() {
	    let localctx = new CompoundExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, WrenParser.RULE_compoundExpression);
	    try {
	        this.state = 454;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	        case 31:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 443;
	            this.logic();
	            break;
	        case 48:
	        case 49:
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 444;
	            this.arithBit();
	            break;
	        case 62:
	        case 63:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 445;
	            this.arithShift();
	            break;
	        case 66:
	        case 67:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 446;
	            this.arithRange();
	            break;
	        case 44:
	        case 45:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 447;
	            this.arithAdd();
	            break;
	        case 46:
	        case 47:
	        case 51:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 448;
	            this.arithMul();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 449;
	            this.match(WrenParser.DOT);
	            this.state = 450;
	            this.call();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 451;
	            this.match(WrenParser.IS);
	            this.state = 452;
	            this.expression(0);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 453;
	            this.elvis();
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



	atomExpression() {
	    let localctx = new AtomExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, WrenParser.RULE_atomExpression);
	    try {
	        this.state = 471;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 456;
	            this.boolE();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 457;
	            this.charE();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 458;
	            this.stringE();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 459;
	            this.numE();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 460;
	            this.nullE();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 461;
	            this.listInit();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 462;
	            this.mapInit();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 463;
	            this.call();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 464;
	            this.range();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 465;
	            this.collectionElem();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 466;
	            this.match(WrenParser.BREAK_T);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 467;
	            this.match(WrenParser.CONTINUE_T);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 468;
	            this.importModule();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 469;
	            this.match(WrenParser.SUB);
	            this.state = 470;
	            this.atomExpression();
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



	enumeration() {
	    let localctx = new EnumerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, WrenParser.RULE_enumeration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 473;
	        this.expression(0);
	        this.state = 478;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 474;
	            this.match(WrenParser.COMMA);
	            this.state = 475;
	            this.expression(0);
	            this.state = 480;
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



	pairEnumeration() {
	    let localctx = new PairEnumerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, WrenParser.RULE_pairEnumeration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.expression(0);
	        this.state = 482;
	        this.match(WrenParser.COLON);
	        this.state = 483;
	        this.expression(0);
	        this.state = 491;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 484;
	            this.match(WrenParser.COMMA);
	            this.state = 485;
	            this.expression(0);
	            this.state = 486;
	            this.match(WrenParser.COLON);
	            this.state = 487;
	            this.expression(0);
	            this.state = 493;
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



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, WrenParser.RULE_range);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.rangeExpression();
	        this.state = 495;
	        _la = this._input.LA(1);
	        if(!(_la===66 || _la===67)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 496;
	        this.rangeExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listInit() {
	    let localctx = new ListInitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, WrenParser.RULE_listInit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 498;
	        this.match(WrenParser.LBRACK);
	        this.state = 500;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 22169764) !== 0) || _la===32 || _la===45 || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 999) !== 0)) {
	            this.state = 499;
	            this.enumeration();
	        }

	        this.state = 502;
	        this.match(WrenParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapInit() {
	    let localctx = new MapInitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, WrenParser.RULE_mapInit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504;
	        this.match(WrenParser.LBRACE);
	        this.state = 506;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 22169764) !== 0) || _la===32 || _la===45 || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 999) !== 0)) {
	            this.state = 505;
	            this.pairEnumeration();
	        }

	        this.state = 508;
	        this.match(WrenParser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elem() {
	    let localctx = new ElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, WrenParser.RULE_elem);
	    try {
	        this.state = 512;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 68:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 510;
	            this.call();
	            break;
	        case 76:
	        case 77:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 511;
	            this.stringE();
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



	collectionElem() {
	    let localctx = new CollectionElemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, WrenParser.RULE_collectionElem);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 514;
	        this.elem();
	        this.state = 515;
	        this.listInit();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rangeExpression() {
	    let localctx = new RangeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, WrenParser.RULE_rangeExpression);
	    try {
	        this.state = 519;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 68:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 517;
	            this.call();
	            break;
	        case 69:
	        case 70:
	        case 73:
	        case 74:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 518;
	            this.numE();
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



	arithMul() {
	    let localctx = new ArithMulContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, WrenParser.RULE_arithMul);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 521;
	        _la = this._input.LA(1);
	        if(!(((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 35) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 522;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arithAdd() {
	    let localctx = new ArithAddContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, WrenParser.RULE_arithAdd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 524;
	        _la = this._input.LA(1);
	        if(!(_la===44 || _la===45)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 527;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 46:
	        case 47:
	        case 51:
	            this.state = 525;
	            this.arithMul();
	            break;
	        case 2:
	        case 5:
	        case 7:
	        case 11:
	        case 14:
	        case 17:
	        case 20:
	        case 22:
	        case 24:
	        case 32:
	        case 45:
	        case 68:
	        case 69:
	        case 70:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	            this.state = 526;
	            this.expression(0);
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



	arithRange() {
	    let localctx = new ArithRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, WrenParser.RULE_arithRange);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 529;
	        _la = this._input.LA(1);
	        if(!(_la===66 || _la===67)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 532;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 530;
	            this.arithAdd();
	            break;

	        case 2:
	            this.state = 531;
	            this.expression(0);
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



	arithShift() {
	    let localctx = new ArithShiftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, WrenParser.RULE_arithShift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        _la = this._input.LA(1);
	        if(!(_la===62 || _la===63)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 537;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	        case 67:
	            this.state = 535;
	            this.arithRange();
	            break;
	        case 2:
	        case 5:
	        case 7:
	        case 11:
	        case 14:
	        case 17:
	        case 20:
	        case 22:
	        case 24:
	        case 32:
	        case 45:
	        case 68:
	        case 69:
	        case 70:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	            this.state = 536;
	            this.expression(0);
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



	arithBit() {
	    let localctx = new ArithBitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, WrenParser.RULE_arithBit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 539;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 542;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 62:
	        case 63:
	            this.state = 540;
	            this.arithShift();
	            break;
	        case 2:
	        case 5:
	        case 7:
	        case 11:
	        case 14:
	        case 17:
	        case 20:
	        case 22:
	        case 24:
	        case 32:
	        case 45:
	        case 68:
	        case 69:
	        case 70:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	            this.state = 541;
	            this.expression(0);
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



	logicOp() {
	    let localctx = new LogicOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, WrenParser.RULE_logicOp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 963) !== 0))) {
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



	atomLogic() {
	    let localctx = new AtomLogicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, WrenParser.RULE_atomLogic);
	    var _la = 0;
	    try {
	        this.state = 551;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	        case 31:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 546;
	            this.logicOp();
	            this.state = 547;
	            this.expression(0);
	            break;
	        case 40:
	        case 41:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 549;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 550;
	            this.expression(0);
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



	andLogic() {
	    let localctx = new AndLogicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, WrenParser.RULE_andLogic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        this.atomLogic();
	        this.state = 560;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,51,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 554;
	                this.match(WrenParser.AND);
	                this.state = 555;
	                this.expression(0);
	                this.state = 556;
	                this.atomLogic(); 
	            }
	            this.state = 562;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,51,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logic() {
	    let localctx = new LogicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, WrenParser.RULE_logic);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this.andLogic();
	        this.state = 570;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 564;
	                this.match(WrenParser.OR);
	                this.state = 565;
	                this.expression(0);
	                this.state = 566;
	                this.andLogic(); 
	            }
	            this.state = 572;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elvis() {
	    let localctx = new ElvisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, WrenParser.RULE_elvis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 573;
	        this.match(WrenParser.QUESTION);
	        this.state = 574;
	        this.expression(0);
	        this.state = 575;
	        this.match(WrenParser.COLON);
	        this.state = 576;
	        this.expression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, WrenParser.RULE_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 578;
	        this.match(WrenParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	boolE() {
	    let localctx = new BoolEContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, WrenParser.RULE_boolE);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 580;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===17)) {
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



	charE() {
	    let localctx = new CharEContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, WrenParser.RULE_charE);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 582;
	        this.match(WrenParser.CHAR_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringE() {
	    let localctx = new StringEContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, WrenParser.RULE_stringE);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        _la = this._input.LA(1);
	        if(!(_la===76 || _la===77)) {
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



	numE() {
	    let localctx = new NumEContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, WrenParser.RULE_numE);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 586;
	        _la = this._input.LA(1);
	        if(!(((((_la - 69)) & ~0x1f) === 0 && ((1 << (_la - 69)) & 51) !== 0))) {
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



	nullE() {
	    let localctx = new NullEContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, WrenParser.RULE_nullE);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 588;
	        this.match(WrenParser.NULL_T);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

WrenParser.EOF = antlr4.Token.EOF;
WrenParser.AS = 1;
WrenParser.BREAK_T = 2;
WrenParser.CLASS_T = 3;
WrenParser.CONSTRUCT = 4;
WrenParser.CONTINUE_T = 5;
WrenParser.ELSE_T = 6;
WrenParser.FALSE_T = 7;
WrenParser.FOR_T = 8;
WrenParser.FOREIGN_T = 9;
WrenParser.IF_T = 10;
WrenParser.IMPORT_T = 11;
WrenParser.IN = 12;
WrenParser.IS = 13;
WrenParser.NULL_T = 14;
WrenParser.RETURN_T = 15;
WrenParser.STATIC_T = 16;
WrenParser.TRUE_T = 17;
WrenParser.VAR_T = 18;
WrenParser.WHILE_T = 19;
WrenParser.LPAREN = 20;
WrenParser.RPAREN = 21;
WrenParser.LBRACE = 22;
WrenParser.RBRACE = 23;
WrenParser.LBRACK = 24;
WrenParser.RBRACK = 25;
WrenParser.SEMI = 26;
WrenParser.COMMA = 27;
WrenParser.DOT = 28;
WrenParser.HASH = 29;
WrenParser.GT = 30;
WrenParser.LT = 31;
WrenParser.BANG = 32;
WrenParser.TILDE = 33;
WrenParser.QUESTION = 34;
WrenParser.COLON = 35;
WrenParser.EQUAL = 36;
WrenParser.LE = 37;
WrenParser.GE = 38;
WrenParser.NOTEQUAL = 39;
WrenParser.AND = 40;
WrenParser.OR = 41;
WrenParser.INC = 42;
WrenParser.DEC = 43;
WrenParser.ADD = 44;
WrenParser.SUB = 45;
WrenParser.MUL = 46;
WrenParser.DIV = 47;
WrenParser.BITAND = 48;
WrenParser.BITOR = 49;
WrenParser.CARET = 50;
WrenParser.MOD = 51;
WrenParser.ASSIGN = 52;
WrenParser.ADD_ASSIGN = 53;
WrenParser.SUB_ASSIGN = 54;
WrenParser.MUL_ASSIGN = 55;
WrenParser.DIV_ASSIGN = 56;
WrenParser.AND_ASSIGN = 57;
WrenParser.OR_ASSIGN = 58;
WrenParser.XOR_ASSIGN = 59;
WrenParser.MOD_ASSIGN = 60;
WrenParser.LSHIFT_ASSIGN = 61;
WrenParser.LSHIFT = 62;
WrenParser.RSHIFT = 63;
WrenParser.RSHIFT_ASSIGN = 64;
WrenParser.URSHIFT_ASSIGN = 65;
WrenParser.ELLIPSIS_OUT = 66;
WrenParser.ELLIPSIS_IN = 67;
WrenParser.IDENTIFIER = 68;
WrenParser.DECIMAL_LITERAL = 69;
WrenParser.HEX_LITERAL = 70;
WrenParser.OCT_LITERAL = 71;
WrenParser.BINARY_LITERAL = 72;
WrenParser.FLOAT_LITERAL = 73;
WrenParser.HEX_FLOAT_LITERAL = 74;
WrenParser.CHAR_LITERAL = 75;
WrenParser.STRING_LITERAL = 76;
WrenParser.TEXT_BLOCK = 77;
WrenParser.WS = 78;
WrenParser.COMMENT = 79;
WrenParser.LINE_COMMENT = 80;
WrenParser.ERRCHAR = 81;

WrenParser.RULE_script = 0;
WrenParser.RULE_fileAtom = 1;
WrenParser.RULE_assignment = 2;
WrenParser.RULE_assignmentNull = 3;
WrenParser.RULE_assignOp = 4;
WrenParser.RULE_ifSt = 5;
WrenParser.RULE_ifCond = 6;
WrenParser.RULE_elseIf = 7;
WrenParser.RULE_elseSt = 8;
WrenParser.RULE_whileSt = 9;
WrenParser.RULE_forSt = 10;
WrenParser.RULE_statement = 11;
WrenParser.RULE_lambdaParameters = 12;
WrenParser.RULE_block = 13;
WrenParser.RULE_returnSt = 14;
WrenParser.RULE_classDefinition = 15;
WrenParser.RULE_inheritance = 16;
WrenParser.RULE_attribute = 17;
WrenParser.RULE_attributes = 18;
WrenParser.RULE_attributeValue = 19;
WrenParser.RULE_simpleAttribute = 20;
WrenParser.RULE_groupAttribute = 21;
WrenParser.RULE_classBody = 22;
WrenParser.RULE_classBodyTpe = 23;
WrenParser.RULE_classStatement = 24;
WrenParser.RULE_classConstructor = 25;
WrenParser.RULE_operatorGetter = 26;
WrenParser.RULE_operatorSetter = 27;
WrenParser.RULE_classOpGetter = 28;
WrenParser.RULE_classOpSetter = 29;
WrenParser.RULE_oneArgument = 30;
WrenParser.RULE_subscript = 31;
WrenParser.RULE_classSubscriptGet = 32;
WrenParser.RULE_classSubscriptSet = 33;
WrenParser.RULE_classSetter = 34;
WrenParser.RULE_assignmentSetter = 35;
WrenParser.RULE_arguments = 36;
WrenParser.RULE_function = 37;
WrenParser.RULE_importModule = 38;
WrenParser.RULE_importVariable = 39;
WrenParser.RULE_importVariables = 40;
WrenParser.RULE_call = 41;
WrenParser.RULE_callInvoke = 42;
WrenParser.RULE_expression = 43;
WrenParser.RULE_compoundExpression = 44;
WrenParser.RULE_atomExpression = 45;
WrenParser.RULE_enumeration = 46;
WrenParser.RULE_pairEnumeration = 47;
WrenParser.RULE_range = 48;
WrenParser.RULE_listInit = 49;
WrenParser.RULE_mapInit = 50;
WrenParser.RULE_elem = 51;
WrenParser.RULE_collectionElem = 52;
WrenParser.RULE_rangeExpression = 53;
WrenParser.RULE_arithMul = 54;
WrenParser.RULE_arithAdd = 55;
WrenParser.RULE_arithRange = 56;
WrenParser.RULE_arithShift = 57;
WrenParser.RULE_arithBit = 58;
WrenParser.RULE_logicOp = 59;
WrenParser.RULE_atomLogic = 60;
WrenParser.RULE_andLogic = 61;
WrenParser.RULE_logic = 62;
WrenParser.RULE_elvis = 63;
WrenParser.RULE_id = 64;
WrenParser.RULE_boolE = 65;
WrenParser.RULE_charE = 66;
WrenParser.RULE_stringE = 67;
WrenParser.RULE_numE = 68;
WrenParser.RULE_nullE = 69;

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
        this.ruleIndex = WrenParser.RULE_script;
    }

	EOF() {
	    return this.getToken(WrenParser.EOF, 0);
	};

	fileAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FileAtomContext);
	    } else {
	        return this.getTypedRuleContext(FileAtomContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitScript(this);
		}
	}


}



class FileAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_fileAtom;
    }

	classDefinition() {
	    return this.getTypedRuleContext(ClassDefinitionContext,0);
	};

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	importModule() {
	    return this.getTypedRuleContext(ImportModuleContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterFileAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitFileAtom(this);
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
        this.ruleIndex = WrenParser.RULE_assignment;
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

	assignOp() {
	    return this.getTypedRuleContext(AssignOpContext,0);
	};

	VAR_T() {
	    return this.getToken(WrenParser.VAR_T, 0);
	};

	assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignmentContext);
	    } else {
	        return this.getTypedRuleContext(AssignmentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class AssignmentNullContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_assignmentNull;
    }

	VAR_T() {
	    return this.getToken(WrenParser.VAR_T, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAssignmentNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAssignmentNull(this);
		}
	}


}



class AssignOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_assignOp;
    }

	ASSIGN() {
	    return this.getToken(WrenParser.ASSIGN, 0);
	};

	ADD_ASSIGN() {
	    return this.getToken(WrenParser.ADD_ASSIGN, 0);
	};

	SUB_ASSIGN() {
	    return this.getToken(WrenParser.SUB_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(WrenParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(WrenParser.DIV_ASSIGN, 0);
	};

	AND_ASSIGN() {
	    return this.getToken(WrenParser.AND_ASSIGN, 0);
	};

	OR_ASSIGN() {
	    return this.getToken(WrenParser.OR_ASSIGN, 0);
	};

	XOR_ASSIGN() {
	    return this.getToken(WrenParser.XOR_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(WrenParser.MOD_ASSIGN, 0);
	};

	LSHIFT_ASSIGN() {
	    return this.getToken(WrenParser.LSHIFT_ASSIGN, 0);
	};

	RSHIFT_ASSIGN() {
	    return this.getToken(WrenParser.RSHIFT_ASSIGN, 0);
	};

	URSHIFT_ASSIGN() {
	    return this.getToken(WrenParser.URSHIFT_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAssignOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAssignOp(this);
		}
	}


}



class IfStContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_ifSt;
    }

	ifCond() {
	    return this.getTypedRuleContext(IfCondContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	elseIf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfContext,i);
	    }
	};

	elseSt() {
	    return this.getTypedRuleContext(ElseStContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterIfSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitIfSt(this);
		}
	}


}



class IfCondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_ifCond;
    }

	IF_T() {
	    return this.getToken(WrenParser.IF_T, 0);
	};

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterIfCond(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitIfCond(this);
		}
	}


}



class ElseIfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_elseIf;
    }

	ELSE_T() {
	    return this.getToken(WrenParser.ELSE_T, 0);
	};

	ifCond() {
	    return this.getTypedRuleContext(IfCondContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterElseIf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitElseIf(this);
		}
	}


}



class ElseStContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_elseSt;
    }

	ELSE_T() {
	    return this.getToken(WrenParser.ELSE_T, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterElseSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitElseSt(this);
		}
	}


}



class WhileStContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_whileSt;
    }

	WHILE_T() {
	    return this.getToken(WrenParser.WHILE_T, 0);
	};

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterWhileSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitWhileSt(this);
		}
	}


}



class ForStContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_forSt;
    }

	FOR_T() {
	    return this.getToken(WrenParser.FOR_T, 0);
	};

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	IN() {
	    return this.getToken(WrenParser.IN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterForSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitForSt(this);
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
        this.ruleIndex = WrenParser.RULE_statement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	assignmentNull() {
	    return this.getTypedRuleContext(AssignmentNullContext,0);
	};

	ifSt() {
	    return this.getTypedRuleContext(IfStContext,0);
	};

	whileSt() {
	    return this.getTypedRuleContext(WhileStContext,0);
	};

	forSt() {
	    return this.getTypedRuleContext(ForStContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	returnSt() {
	    return this.getTypedRuleContext(ReturnStContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class LambdaParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_lambdaParameters;
    }

	BITOR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.BITOR);
	    } else {
	        return this.getToken(WrenParser.BITOR, i);
	    }
	};


	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.COMMA);
	    } else {
	        return this.getToken(WrenParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterLambdaParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitLambdaParameters(this);
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
        this.ruleIndex = WrenParser.RULE_block;
    }

	LBRACE() {
	    return this.getToken(WrenParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(WrenParser.RBRACE, 0);
	};

	lambdaParameters() {
	    return this.getTypedRuleContext(LambdaParametersContext,0);
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

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitBlock(this);
		}
	}


}



class ReturnStContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_returnSt;
    }

	RETURN_T() {
	    return this.getToken(WrenParser.RETURN_T, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterReturnSt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitReturnSt(this);
		}
	}


}



class ClassDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classDefinition;
    }

	CLASS_T() {
	    return this.getToken(WrenParser.CLASS_T, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	LBRACE() {
	    return this.getToken(WrenParser.LBRACE, 0);
	};

	classBody() {
	    return this.getTypedRuleContext(ClassBodyContext,0);
	};

	RBRACE() {
	    return this.getToken(WrenParser.RBRACE, 0);
	};

	attributes() {
	    return this.getTypedRuleContext(AttributesContext,0);
	};

	FOREIGN_T() {
	    return this.getToken(WrenParser.FOREIGN_T, 0);
	};

	inheritance() {
	    return this.getTypedRuleContext(InheritanceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassDefinition(this);
		}
	}


}



class InheritanceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_inheritance;
    }

	IS() {
	    return this.getToken(WrenParser.IS, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterInheritance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitInheritance(this);
		}
	}


}



class AttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_attribute;
    }

	simpleAttribute() {
	    return this.getTypedRuleContext(SimpleAttributeContext,0);
	};

	groupAttribute() {
	    return this.getTypedRuleContext(GroupAttributeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAttribute(this);
		}
	}


}



class AttributesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_attributes;
    }

	attribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeContext);
	    } else {
	        return this.getTypedRuleContext(AttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAttributes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAttributes(this);
		}
	}


}



class AttributeValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_attributeValue;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	ASSIGN() {
	    return this.getToken(WrenParser.ASSIGN, 0);
	};

	atomExpression() {
	    return this.getTypedRuleContext(AtomExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAttributeValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAttributeValue(this);
		}
	}


}



class SimpleAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_simpleAttribute;
    }

	HASH() {
	    return this.getToken(WrenParser.HASH, 0);
	};

	attributeValue() {
	    return this.getTypedRuleContext(AttributeValueContext,0);
	};

	BANG() {
	    return this.getToken(WrenParser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterSimpleAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitSimpleAttribute(this);
		}
	}


}



class GroupAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_groupAttribute;
    }

	HASH() {
	    return this.getToken(WrenParser.HASH, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	attributeValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributeValueContext);
	    } else {
	        return this.getTypedRuleContext(AttributeValueContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	BANG() {
	    return this.getToken(WrenParser.BANG, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.COMMA);
	    } else {
	        return this.getToken(WrenParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterGroupAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitGroupAttribute(this);
		}
	}


}



class ClassBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classBody;
    }

	classStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassStatementContext);
	    } else {
	        return this.getTypedRuleContext(ClassStatementContext,i);
	    }
	};

	attributes = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttributesContext);
	    } else {
	        return this.getTypedRuleContext(AttributesContext,i);
	    }
	};

	classBodyTpe = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassBodyTpeContext);
	    } else {
	        return this.getTypedRuleContext(ClassBodyTpeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassBody(this);
		}
	}


}



class ClassBodyTpeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classBodyTpe;
    }

	FOREIGN_T() {
	    return this.getToken(WrenParser.FOREIGN_T, 0);
	};

	STATIC_T() {
	    return this.getToken(WrenParser.STATIC_T, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassBodyTpe(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassBodyTpe(this);
		}
	}


}



class ClassStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classStatement;
    }

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	classOpGetter() {
	    return this.getTypedRuleContext(ClassOpGetterContext,0);
	};

	classSetter() {
	    return this.getTypedRuleContext(ClassSetterContext,0);
	};

	classSubscriptGet() {
	    return this.getTypedRuleContext(ClassSubscriptGetContext,0);
	};

	classSubscriptSet() {
	    return this.getTypedRuleContext(ClassSubscriptSetContext,0);
	};

	classOpSetter() {
	    return this.getTypedRuleContext(ClassOpSetterContext,0);
	};

	classConstructor() {
	    return this.getTypedRuleContext(ClassConstructorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassStatement(this);
		}
	}


}



class ClassConstructorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classConstructor;
    }

	CONSTRUCT() {
	    return this.getToken(WrenParser.CONSTRUCT, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassConstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassConstructor(this);
		}
	}


}



class OperatorGetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_operatorGetter;
    }

	SUB() {
	    return this.getToken(WrenParser.SUB, 0);
	};

	TILDE() {
	    return this.getToken(WrenParser.TILDE, 0);
	};

	BANG() {
	    return this.getToken(WrenParser.BANG, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterOperatorGetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitOperatorGetter(this);
		}
	}


}



class OperatorSetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_operatorSetter;
    }

	SUB() {
	    return this.getToken(WrenParser.SUB, 0);
	};

	MUL() {
	    return this.getToken(WrenParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(WrenParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(WrenParser.MOD, 0);
	};

	ADD() {
	    return this.getToken(WrenParser.ADD, 0);
	};

	ELLIPSIS_OUT() {
	    return this.getToken(WrenParser.ELLIPSIS_OUT, 0);
	};

	ELLIPSIS_IN() {
	    return this.getToken(WrenParser.ELLIPSIS_IN, 0);
	};

	LSHIFT() {
	    return this.getToken(WrenParser.LSHIFT, 0);
	};

	RSHIFT() {
	    return this.getToken(WrenParser.RSHIFT, 0);
	};

	BITAND() {
	    return this.getToken(WrenParser.BITAND, 0);
	};

	CARET() {
	    return this.getToken(WrenParser.CARET, 0);
	};

	BITOR() {
	    return this.getToken(WrenParser.BITOR, 0);
	};

	GT() {
	    return this.getToken(WrenParser.GT, 0);
	};

	LT() {
	    return this.getToken(WrenParser.LT, 0);
	};

	EQUAL() {
	    return this.getToken(WrenParser.EQUAL, 0);
	};

	LE() {
	    return this.getToken(WrenParser.LE, 0);
	};

	GE() {
	    return this.getToken(WrenParser.GE, 0);
	};

	NOTEQUAL() {
	    return this.getToken(WrenParser.NOTEQUAL, 0);
	};

	IS() {
	    return this.getToken(WrenParser.IS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterOperatorSetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitOperatorSetter(this);
		}
	}


}



class ClassOpGetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classOpGetter;
    }

	operatorGetter() {
	    return this.getTypedRuleContext(OperatorGetterContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassOpGetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassOpGetter(this);
		}
	}


}



class ClassOpSetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classOpSetter;
    }

	operatorSetter() {
	    return this.getTypedRuleContext(OperatorSetterContext,0);
	};

	oneArgument() {
	    return this.getTypedRuleContext(OneArgumentContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassOpSetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassOpSetter(this);
		}
	}


}



class OneArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_oneArgument;
    }

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterOneArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitOneArgument(this);
		}
	}


}



class SubscriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_subscript;
    }

	LBRACK() {
	    return this.getToken(WrenParser.LBRACK, 0);
	};

	enumeration() {
	    return this.getTypedRuleContext(EnumerationContext,0);
	};

	RBRACK() {
	    return this.getToken(WrenParser.RBRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterSubscript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitSubscript(this);
		}
	}


}



class ClassSubscriptGetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classSubscriptGet;
    }

	subscript() {
	    return this.getTypedRuleContext(SubscriptContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassSubscriptGet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassSubscriptGet(this);
		}
	}


}



class ClassSubscriptSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classSubscriptSet;
    }

	subscript() {
	    return this.getTypedRuleContext(SubscriptContext,0);
	};

	ASSIGN() {
	    return this.getToken(WrenParser.ASSIGN, 0);
	};

	oneArgument() {
	    return this.getTypedRuleContext(OneArgumentContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassSubscriptSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassSubscriptSet(this);
		}
	}


}



class ClassSetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_classSetter;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	assignmentSetter() {
	    return this.getTypedRuleContext(AssignmentSetterContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterClassSetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitClassSetter(this);
		}
	}


}



class AssignmentSetterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_assignmentSetter;
    }

	ASSIGN() {
	    return this.getToken(WrenParser.ASSIGN, 0);
	};

	oneArgument() {
	    return this.getTypedRuleContext(OneArgumentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAssignmentSetter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAssignmentSetter(this);
		}
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_arguments;
    }

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.COMMA);
	    } else {
	        return this.getToken(WrenParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitArguments(this);
		}
	}


}



class FunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_function;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitFunction(this);
		}
	}


}



class ImportModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_importModule;
    }

	IMPORT_T() {
	    return this.getToken(WrenParser.IMPORT_T, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(WrenParser.STRING_LITERAL, 0);
	};

	importVariables() {
	    return this.getTypedRuleContext(ImportVariablesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterImportModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitImportModule(this);
		}
	}


}



class ImportVariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_importVariable;
    }

	id = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdContext);
	    } else {
	        return this.getTypedRuleContext(IdContext,i);
	    }
	};

	AS() {
	    return this.getToken(WrenParser.AS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterImportVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitImportVariable(this);
		}
	}


}



class ImportVariablesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_importVariables;
    }

	FOR_T() {
	    return this.getToken(WrenParser.FOR_T, 0);
	};

	importVariable = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportVariableContext);
	    } else {
	        return this.getTypedRuleContext(ImportVariableContext,i);
	    }
	};

	COMMA() {
	    return this.getToken(WrenParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterImportVariables(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitImportVariables(this);
		}
	}


}



class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_call;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	callInvoke() {
	    return this.getTypedRuleContext(CallInvokeContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.DOT);
	    } else {
	        return this.getToken(WrenParser.DOT, i);
	    }
	};


	call = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallContext);
	    } else {
	        return this.getTypedRuleContext(CallContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitCall(this);
		}
	}


}



class CallInvokeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_callInvoke;
    }

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	enumeration() {
	    return this.getTypedRuleContext(EnumerationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterCallInvoke(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitCallInvoke(this);
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
        this.ruleIndex = WrenParser.RULE_expression;
    }

	BANG() {
	    return this.getToken(WrenParser.BANG, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	LPAREN() {
	    return this.getToken(WrenParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(WrenParser.RPAREN, 0);
	};

	atomExpression() {
	    return this.getTypedRuleContext(AtomExpressionContext,0);
	};

	compoundExpression() {
	    return this.getTypedRuleContext(CompoundExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class CompoundExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_compoundExpression;
    }

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	arithBit() {
	    return this.getTypedRuleContext(ArithBitContext,0);
	};

	arithShift() {
	    return this.getTypedRuleContext(ArithShiftContext,0);
	};

	arithRange() {
	    return this.getTypedRuleContext(ArithRangeContext,0);
	};

	arithAdd() {
	    return this.getTypedRuleContext(ArithAddContext,0);
	};

	arithMul() {
	    return this.getTypedRuleContext(ArithMulContext,0);
	};

	DOT() {
	    return this.getToken(WrenParser.DOT, 0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	IS() {
	    return this.getToken(WrenParser.IS, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	elvis() {
	    return this.getTypedRuleContext(ElvisContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterCompoundExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitCompoundExpression(this);
		}
	}


}



class AtomExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_atomExpression;
    }

	boolE() {
	    return this.getTypedRuleContext(BoolEContext,0);
	};

	charE() {
	    return this.getTypedRuleContext(CharEContext,0);
	};

	stringE() {
	    return this.getTypedRuleContext(StringEContext,0);
	};

	numE() {
	    return this.getTypedRuleContext(NumEContext,0);
	};

	nullE() {
	    return this.getTypedRuleContext(NullEContext,0);
	};

	listInit() {
	    return this.getTypedRuleContext(ListInitContext,0);
	};

	mapInit() {
	    return this.getTypedRuleContext(MapInitContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	collectionElem() {
	    return this.getTypedRuleContext(CollectionElemContext,0);
	};

	BREAK_T() {
	    return this.getToken(WrenParser.BREAK_T, 0);
	};

	CONTINUE_T() {
	    return this.getToken(WrenParser.CONTINUE_T, 0);
	};

	importModule() {
	    return this.getTypedRuleContext(ImportModuleContext,0);
	};

	SUB() {
	    return this.getToken(WrenParser.SUB, 0);
	};

	atomExpression() {
	    return this.getTypedRuleContext(AtomExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAtomExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAtomExpression(this);
		}
	}


}



class EnumerationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_enumeration;
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.COMMA);
	    } else {
	        return this.getToken(WrenParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterEnumeration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitEnumeration(this);
		}
	}


}



class PairEnumerationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_pairEnumeration;
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

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.COLON);
	    } else {
	        return this.getToken(WrenParser.COLON, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.COMMA);
	    } else {
	        return this.getToken(WrenParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterPairEnumeration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitPairEnumeration(this);
		}
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_range;
    }

	rangeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(RangeExpressionContext,i);
	    }
	};

	ELLIPSIS_IN() {
	    return this.getToken(WrenParser.ELLIPSIS_IN, 0);
	};

	ELLIPSIS_OUT() {
	    return this.getToken(WrenParser.ELLIPSIS_OUT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitRange(this);
		}
	}


}



class ListInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_listInit;
    }

	LBRACK() {
	    return this.getToken(WrenParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(WrenParser.RBRACK, 0);
	};

	enumeration() {
	    return this.getTypedRuleContext(EnumerationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterListInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitListInit(this);
		}
	}


}



class MapInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_mapInit;
    }

	LBRACE() {
	    return this.getToken(WrenParser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(WrenParser.RBRACE, 0);
	};

	pairEnumeration() {
	    return this.getTypedRuleContext(PairEnumerationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterMapInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitMapInit(this);
		}
	}


}



class ElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_elem;
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	stringE() {
	    return this.getTypedRuleContext(StringEContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitElem(this);
		}
	}


}



class CollectionElemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_collectionElem;
    }

	elem() {
	    return this.getTypedRuleContext(ElemContext,0);
	};

	listInit() {
	    return this.getTypedRuleContext(ListInitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterCollectionElem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitCollectionElem(this);
		}
	}


}



class RangeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_rangeExpression;
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	numE() {
	    return this.getTypedRuleContext(NumEContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterRangeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitRangeExpression(this);
		}
	}


}



class ArithMulContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_arithMul;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	MUL() {
	    return this.getToken(WrenParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(WrenParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(WrenParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterArithMul(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitArithMul(this);
		}
	}


}



class ArithAddContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_arithAdd;
    }

	SUB() {
	    return this.getToken(WrenParser.SUB, 0);
	};

	ADD() {
	    return this.getToken(WrenParser.ADD, 0);
	};

	arithMul() {
	    return this.getTypedRuleContext(ArithMulContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterArithAdd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitArithAdd(this);
		}
	}


}



class ArithRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_arithRange;
    }

	ELLIPSIS_IN() {
	    return this.getToken(WrenParser.ELLIPSIS_IN, 0);
	};

	ELLIPSIS_OUT() {
	    return this.getToken(WrenParser.ELLIPSIS_OUT, 0);
	};

	arithAdd() {
	    return this.getTypedRuleContext(ArithAddContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterArithRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitArithRange(this);
		}
	}


}



class ArithShiftContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_arithShift;
    }

	LSHIFT() {
	    return this.getToken(WrenParser.LSHIFT, 0);
	};

	RSHIFT() {
	    return this.getToken(WrenParser.RSHIFT, 0);
	};

	arithRange() {
	    return this.getTypedRuleContext(ArithRangeContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterArithShift(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitArithShift(this);
		}
	}


}



class ArithBitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_arithBit;
    }

	BITAND() {
	    return this.getToken(WrenParser.BITAND, 0);
	};

	BITOR() {
	    return this.getToken(WrenParser.BITOR, 0);
	};

	CARET() {
	    return this.getToken(WrenParser.CARET, 0);
	};

	arithShift() {
	    return this.getTypedRuleContext(ArithShiftContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterArithBit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitArithBit(this);
		}
	}


}



class LogicOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_logicOp;
    }

	GT() {
	    return this.getToken(WrenParser.GT, 0);
	};

	LT() {
	    return this.getToken(WrenParser.LT, 0);
	};

	EQUAL() {
	    return this.getToken(WrenParser.EQUAL, 0);
	};

	LE() {
	    return this.getToken(WrenParser.LE, 0);
	};

	GE() {
	    return this.getToken(WrenParser.GE, 0);
	};

	NOTEQUAL() {
	    return this.getToken(WrenParser.NOTEQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterLogicOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitLogicOp(this);
		}
	}


}



class AtomLogicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_atomLogic;
    }

	logicOp() {
	    return this.getTypedRuleContext(LogicOpContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	AND() {
	    return this.getToken(WrenParser.AND, 0);
	};

	OR() {
	    return this.getToken(WrenParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAtomLogic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAtomLogic(this);
		}
	}


}



class AndLogicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_andLogic;
    }

	atomLogic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AtomLogicContext);
	    } else {
	        return this.getTypedRuleContext(AtomLogicContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.AND);
	    } else {
	        return this.getToken(WrenParser.AND, i);
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

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterAndLogic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitAndLogic(this);
		}
	}


}



class LogicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_logic;
    }

	andLogic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndLogicContext);
	    } else {
	        return this.getTypedRuleContext(AndLogicContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(WrenParser.OR);
	    } else {
	        return this.getToken(WrenParser.OR, i);
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

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterLogic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitLogic(this);
		}
	}


}



class ElvisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_elvis;
    }

	QUESTION() {
	    return this.getToken(WrenParser.QUESTION, 0);
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

	COLON() {
	    return this.getToken(WrenParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterElvis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitElvis(this);
		}
	}


}



class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_id;
    }

	IDENTIFIER() {
	    return this.getToken(WrenParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitId(this);
		}
	}


}



class BoolEContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_boolE;
    }

	TRUE_T() {
	    return this.getToken(WrenParser.TRUE_T, 0);
	};

	FALSE_T() {
	    return this.getToken(WrenParser.FALSE_T, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterBoolE(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitBoolE(this);
		}
	}


}



class CharEContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_charE;
    }

	CHAR_LITERAL() {
	    return this.getToken(WrenParser.CHAR_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterCharE(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitCharE(this);
		}
	}


}



class StringEContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_stringE;
    }

	STRING_LITERAL() {
	    return this.getToken(WrenParser.STRING_LITERAL, 0);
	};

	TEXT_BLOCK() {
	    return this.getToken(WrenParser.TEXT_BLOCK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterStringE(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitStringE(this);
		}
	}


}



class NumEContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_numE;
    }

	DECIMAL_LITERAL() {
	    return this.getToken(WrenParser.DECIMAL_LITERAL, 0);
	};

	HEX_LITERAL() {
	    return this.getToken(WrenParser.HEX_LITERAL, 0);
	};

	FLOAT_LITERAL() {
	    return this.getToken(WrenParser.FLOAT_LITERAL, 0);
	};

	HEX_FLOAT_LITERAL() {
	    return this.getToken(WrenParser.HEX_FLOAT_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterNumE(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitNumE(this);
		}
	}


}



class NullEContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = WrenParser.RULE_nullE;
    }

	NULL_T() {
	    return this.getToken(WrenParser.NULL_T, 0);
	};

	enterRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.enterNullE(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof WrenParserListener ) {
	        listener.exitNullE(this);
		}
	}


}




WrenParser.ScriptContext = ScriptContext; 
WrenParser.FileAtomContext = FileAtomContext; 
WrenParser.AssignmentContext = AssignmentContext; 
WrenParser.AssignmentNullContext = AssignmentNullContext; 
WrenParser.AssignOpContext = AssignOpContext; 
WrenParser.IfStContext = IfStContext; 
WrenParser.IfCondContext = IfCondContext; 
WrenParser.ElseIfContext = ElseIfContext; 
WrenParser.ElseStContext = ElseStContext; 
WrenParser.WhileStContext = WhileStContext; 
WrenParser.ForStContext = ForStContext; 
WrenParser.StatementContext = StatementContext; 
WrenParser.LambdaParametersContext = LambdaParametersContext; 
WrenParser.BlockContext = BlockContext; 
WrenParser.ReturnStContext = ReturnStContext; 
WrenParser.ClassDefinitionContext = ClassDefinitionContext; 
WrenParser.InheritanceContext = InheritanceContext; 
WrenParser.AttributeContext = AttributeContext; 
WrenParser.AttributesContext = AttributesContext; 
WrenParser.AttributeValueContext = AttributeValueContext; 
WrenParser.SimpleAttributeContext = SimpleAttributeContext; 
WrenParser.GroupAttributeContext = GroupAttributeContext; 
WrenParser.ClassBodyContext = ClassBodyContext; 
WrenParser.ClassBodyTpeContext = ClassBodyTpeContext; 
WrenParser.ClassStatementContext = ClassStatementContext; 
WrenParser.ClassConstructorContext = ClassConstructorContext; 
WrenParser.OperatorGetterContext = OperatorGetterContext; 
WrenParser.OperatorSetterContext = OperatorSetterContext; 
WrenParser.ClassOpGetterContext = ClassOpGetterContext; 
WrenParser.ClassOpSetterContext = ClassOpSetterContext; 
WrenParser.OneArgumentContext = OneArgumentContext; 
WrenParser.SubscriptContext = SubscriptContext; 
WrenParser.ClassSubscriptGetContext = ClassSubscriptGetContext; 
WrenParser.ClassSubscriptSetContext = ClassSubscriptSetContext; 
WrenParser.ClassSetterContext = ClassSetterContext; 
WrenParser.AssignmentSetterContext = AssignmentSetterContext; 
WrenParser.ArgumentsContext = ArgumentsContext; 
WrenParser.FunctionContext = FunctionContext; 
WrenParser.ImportModuleContext = ImportModuleContext; 
WrenParser.ImportVariableContext = ImportVariableContext; 
WrenParser.ImportVariablesContext = ImportVariablesContext; 
WrenParser.CallContext = CallContext; 
WrenParser.CallInvokeContext = CallInvokeContext; 
WrenParser.ExpressionContext = ExpressionContext; 
WrenParser.CompoundExpressionContext = CompoundExpressionContext; 
WrenParser.AtomExpressionContext = AtomExpressionContext; 
WrenParser.EnumerationContext = EnumerationContext; 
WrenParser.PairEnumerationContext = PairEnumerationContext; 
WrenParser.RangeContext = RangeContext; 
WrenParser.ListInitContext = ListInitContext; 
WrenParser.MapInitContext = MapInitContext; 
WrenParser.ElemContext = ElemContext; 
WrenParser.CollectionElemContext = CollectionElemContext; 
WrenParser.RangeExpressionContext = RangeExpressionContext; 
WrenParser.ArithMulContext = ArithMulContext; 
WrenParser.ArithAddContext = ArithAddContext; 
WrenParser.ArithRangeContext = ArithRangeContext; 
WrenParser.ArithShiftContext = ArithShiftContext; 
WrenParser.ArithBitContext = ArithBitContext; 
WrenParser.LogicOpContext = LogicOpContext; 
WrenParser.AtomLogicContext = AtomLogicContext; 
WrenParser.AndLogicContext = AndLogicContext; 
WrenParser.LogicContext = LogicContext; 
WrenParser.ElvisContext = ElvisContext; 
WrenParser.IdContext = IdContext; 
WrenParser.BoolEContext = BoolEContext; 
WrenParser.CharEContext = CharEContext; 
WrenParser.StringEContext = StringEContext; 
WrenParser.NumEContext = NumEContext; 
WrenParser.NullEContext = NullEContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
