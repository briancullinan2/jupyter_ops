// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sparql/SparqlParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SparqlParserListener from './SparqlParserListener.js';
const serializedATN = [4,1,87,603,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,1,0,1,0,1,0,1,0,1,0,
3,0,144,8,0,1,0,1,0,1,1,3,1,149,8,1,1,1,5,1,152,8,1,10,1,12,1,155,9,1,1,
2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,3,4,166,8,4,1,4,4,4,169,8,4,11,4,12,4,
170,1,4,3,4,174,8,4,1,4,5,4,177,8,4,10,4,12,4,180,9,4,1,4,1,4,1,4,1,5,1,
5,1,5,5,5,188,8,5,10,5,12,5,191,9,5,1,5,1,5,1,5,1,6,1,6,4,6,198,8,6,11,6,
12,6,199,1,6,3,6,203,8,6,1,6,5,6,206,8,6,10,6,12,6,209,9,6,1,6,3,6,212,8,
6,1,6,1,6,1,7,1,7,5,7,218,8,7,10,7,12,7,221,9,7,1,7,1,7,1,8,1,8,1,8,3,8,
228,8,8,1,9,1,9,1,10,1,10,1,10,1,11,1,11,1,12,3,12,238,8,12,1,12,1,12,1,
13,3,13,243,8,13,1,13,3,13,246,8,13,1,14,1,14,3,14,250,8,14,1,14,1,14,3,
14,254,8,14,3,14,256,8,14,1,15,1,15,1,15,4,15,261,8,15,11,15,12,15,262,1,
16,1,16,1,16,1,16,3,16,269,8,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,
3,19,279,8,19,1,19,1,19,3,19,283,8,19,1,19,3,19,286,8,19,1,19,3,19,289,8,
19,5,19,291,8,19,10,19,12,19,294,9,19,1,19,1,19,1,20,1,20,1,20,3,20,301,
8,20,3,20,303,8,20,1,21,1,21,1,21,3,21,308,8,21,1,22,1,22,1,22,1,23,1,23,
1,23,1,23,1,24,1,24,1,24,5,24,320,8,24,10,24,12,24,323,9,24,1,25,1,25,1,
25,1,26,1,26,1,26,3,26,331,8,26,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,
5,28,341,8,28,10,28,12,28,344,9,28,1,28,1,28,3,28,348,8,28,1,29,1,29,3,29,
352,8,29,1,29,1,29,1,30,1,30,1,30,3,30,359,8,30,3,30,361,8,30,1,31,1,31,
1,31,1,31,1,31,1,31,3,31,369,8,31,1,32,1,32,1,32,1,32,1,32,1,32,3,32,377,
8,32,5,32,379,8,32,10,32,12,32,382,9,32,1,33,3,33,385,8,33,1,34,1,34,1,34,
5,34,390,8,34,10,34,12,34,393,9,34,1,35,1,35,1,36,1,36,3,36,399,8,36,1,37,
1,37,3,37,403,8,37,1,38,1,38,1,38,1,38,1,39,1,39,4,39,411,8,39,11,39,12,
39,412,1,39,1,39,1,40,1,40,3,40,419,8,40,1,41,1,41,3,41,423,8,41,1,42,1,
42,3,42,427,8,42,1,43,1,43,1,44,1,44,1,44,1,44,1,44,1,44,3,44,437,8,44,1,
45,1,45,1,46,1,46,1,46,5,46,444,8,46,10,46,12,46,447,9,46,1,47,1,47,1,47,
5,47,452,8,47,10,47,12,47,455,9,47,1,48,1,48,1,49,1,49,1,49,3,49,462,8,49,
1,50,1,50,1,51,1,51,1,51,1,51,1,51,5,51,471,8,51,10,51,12,51,474,9,51,1,
52,1,52,1,52,5,52,479,8,52,10,52,12,52,482,9,52,1,53,3,53,485,8,53,1,53,
1,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,3,54,496,8,54,1,55,1,55,1,55,1,55,
1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,
56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,
56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,3,56,557,8,56,
1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,57,566,8,57,1,57,1,57,1,58,1,58,3,58,
572,8,58,1,59,1,59,1,59,1,59,3,59,578,8,59,1,60,1,60,1,60,3,60,583,8,60,
1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,66,1,66,3,66,597,8,66,
1,67,1,67,1,68,1,68,1,68,0,0,69,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,
120,122,124,126,128,130,132,134,136,0,14,2,0,11,11,23,23,2,0,2,2,9,9,1,0,
63,64,3,0,41,41,43,46,51,51,2,0,50,50,52,52,1,0,57,58,3,0,42,42,50,50,52,
52,1,0,66,68,1,0,69,71,1,0,72,74,1,0,29,30,1,0,76,77,1,0,60,61,2,0,62,62,
82,82,622,0,138,1,0,0,0,2,148,1,0,0,0,4,156,1,0,0,0,6,159,1,0,0,0,8,163,
1,0,0,0,10,184,1,0,0,0,12,195,1,0,0,0,14,215,1,0,0,0,16,224,1,0,0,0,18,229,
1,0,0,0,20,231,1,0,0,0,22,234,1,0,0,0,24,237,1,0,0,0,26,242,1,0,0,0,28,255,
1,0,0,0,30,257,1,0,0,0,32,268,1,0,0,0,34,270,1,0,0,0,36,273,1,0,0,0,38,276,
1,0,0,0,40,297,1,0,0,0,42,307,1,0,0,0,44,309,1,0,0,0,46,312,1,0,0,0,48,316,
1,0,0,0,50,324,1,0,0,0,52,330,1,0,0,0,54,332,1,0,0,0,56,347,1,0,0,0,58,349,
1,0,0,0,60,355,1,0,0,0,62,368,1,0,0,0,64,370,1,0,0,0,66,384,1,0,0,0,68,386,
1,0,0,0,70,394,1,0,0,0,72,398,1,0,0,0,74,402,1,0,0,0,76,404,1,0,0,0,78,408,
1,0,0,0,80,418,1,0,0,0,82,422,1,0,0,0,84,426,1,0,0,0,86,428,1,0,0,0,88,436,
1,0,0,0,90,438,1,0,0,0,92,440,1,0,0,0,94,448,1,0,0,0,96,456,1,0,0,0,98,458,
1,0,0,0,100,463,1,0,0,0,102,465,1,0,0,0,104,475,1,0,0,0,106,484,1,0,0,0,
108,495,1,0,0,0,110,497,1,0,0,0,112,556,1,0,0,0,114,558,1,0,0,0,116,569,
1,0,0,0,118,573,1,0,0,0,120,582,1,0,0,0,122,584,1,0,0,0,124,586,1,0,0,0,
126,588,1,0,0,0,128,590,1,0,0,0,130,592,1,0,0,0,132,596,1,0,0,0,134,598,
1,0,0,0,136,600,1,0,0,0,138,143,3,2,1,0,139,144,3,8,4,0,140,144,3,10,5,0,
141,144,3,12,6,0,142,144,3,14,7,0,143,139,1,0,0,0,143,140,1,0,0,0,143,141,
1,0,0,0,143,142,1,0,0,0,144,145,1,0,0,0,145,146,5,0,0,1,146,1,1,0,0,0,147,
149,3,4,2,0,148,147,1,0,0,0,148,149,1,0,0,0,149,153,1,0,0,0,150,152,3,6,
3,0,151,150,1,0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,
3,1,0,0,0,155,153,1,0,0,0,156,157,5,4,0,0,157,158,5,59,0,0,158,5,1,0,0,0,
159,160,5,22,0,0,160,161,5,60,0,0,161,162,5,59,0,0,162,7,1,0,0,0,163,165,
5,25,0,0,164,166,7,0,0,0,165,164,1,0,0,0,165,166,1,0,0,0,166,173,1,0,0,0,
167,169,3,86,43,0,168,167,1,0,0,0,169,170,1,0,0,0,170,168,1,0,0,0,170,171,
1,0,0,0,171,174,1,0,0,0,172,174,5,58,0,0,173,168,1,0,0,0,173,172,1,0,0,0,
174,178,1,0,0,0,175,177,3,16,8,0,176,175,1,0,0,0,177,180,1,0,0,0,178,176,
1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,178,1,0,0,0,181,182,3,24,12,
0,182,183,3,26,13,0,183,9,1,0,0,0,184,185,5,7,0,0,185,189,3,58,29,0,186,
188,3,16,8,0,187,186,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,
0,0,190,192,1,0,0,0,191,189,1,0,0,0,192,193,3,24,12,0,193,194,3,26,13,0,
194,11,1,0,0,0,195,202,5,10,0,0,196,198,3,84,42,0,197,196,1,0,0,0,198,199,
1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,203,1,0,0,0,201,203,5,58,0,0,
202,197,1,0,0,0,202,201,1,0,0,0,203,207,1,0,0,0,204,206,3,16,8,0,205,204,
1,0,0,0,206,209,1,0,0,0,207,205,1,0,0,0,207,208,1,0,0,0,208,211,1,0,0,0,
209,207,1,0,0,0,210,212,3,24,12,0,211,210,1,0,0,0,211,212,1,0,0,0,212,213,
1,0,0,0,213,214,3,26,13,0,214,13,1,0,0,0,215,219,5,3,0,0,216,218,3,16,8,
0,217,216,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,
1,0,0,0,221,219,1,0,0,0,222,223,3,24,12,0,223,15,1,0,0,0,224,227,5,13,0,
0,225,228,3,18,9,0,226,228,3,20,10,0,227,225,1,0,0,0,227,226,1,0,0,0,228,
17,1,0,0,0,229,230,3,22,11,0,230,19,1,0,0,0,231,232,5,18,0,0,232,233,3,22,
11,0,233,21,1,0,0,0,234,235,3,132,66,0,235,23,1,0,0,0,236,238,5,28,0,0,237,
236,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,240,3,38,19,0,240,25,1,0,
0,0,241,243,3,30,15,0,242,241,1,0,0,0,242,243,1,0,0,0,243,245,1,0,0,0,244,
246,3,28,14,0,245,244,1,0,0,0,245,246,1,0,0,0,246,27,1,0,0,0,247,249,3,34,
17,0,248,250,3,36,18,0,249,248,1,0,0,0,249,250,1,0,0,0,250,256,1,0,0,0,251,
253,3,36,18,0,252,254,3,34,17,0,253,252,1,0,0,0,253,254,1,0,0,0,254,256,
1,0,0,0,255,247,1,0,0,0,255,251,1,0,0,0,256,29,1,0,0,0,257,258,5,21,0,0,
258,260,5,6,0,0,259,261,3,32,16,0,260,259,1,0,0,0,261,262,1,0,0,0,262,260,
1,0,0,0,262,263,1,0,0,0,263,31,1,0,0,0,264,265,7,1,0,0,265,269,3,110,55,
0,266,269,3,52,26,0,267,269,3,86,43,0,268,264,1,0,0,0,268,266,1,0,0,0,268,
267,1,0,0,0,269,33,1,0,0,0,270,271,5,17,0,0,271,272,5,66,0,0,272,35,1,0,
0,0,273,274,5,19,0,0,274,275,5,66,0,0,275,37,1,0,0,0,276,278,5,47,0,0,277,
279,3,40,20,0,278,277,1,0,0,0,278,279,1,0,0,0,279,292,1,0,0,0,280,283,3,
42,21,0,281,283,3,50,25,0,282,280,1,0,0,0,282,281,1,0,0,0,283,285,1,0,0,
0,284,286,5,37,0,0,285,284,1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,289,
3,40,20,0,288,287,1,0,0,0,288,289,1,0,0,0,289,291,1,0,0,0,290,282,1,0,0,
0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,0,0,0,293,295,1,0,0,0,294,292,
1,0,0,0,295,296,5,53,0,0,296,39,1,0,0,0,297,302,3,62,31,0,298,300,5,37,0,
0,299,301,3,40,20,0,300,299,1,0,0,0,300,301,1,0,0,0,301,303,1,0,0,0,302,
298,1,0,0,0,302,303,1,0,0,0,303,41,1,0,0,0,304,308,3,44,22,0,305,308,3,48,
24,0,306,308,3,46,23,0,307,304,1,0,0,0,307,305,1,0,0,0,307,306,1,0,0,0,308,
43,1,0,0,0,309,310,5,20,0,0,310,311,3,38,19,0,311,45,1,0,0,0,312,313,5,14,
0,0,313,314,3,84,42,0,314,315,3,38,19,0,315,47,1,0,0,0,316,321,3,38,19,0,
317,318,5,27,0,0,318,320,3,38,19,0,319,317,1,0,0,0,320,323,1,0,0,0,321,319,
1,0,0,0,321,322,1,0,0,0,322,49,1,0,0,0,323,321,1,0,0,0,324,325,5,12,0,0,
325,326,3,52,26,0,326,51,1,0,0,0,327,331,3,110,55,0,328,331,3,112,56,0,329,
331,3,54,27,0,330,327,1,0,0,0,330,328,1,0,0,0,330,329,1,0,0,0,331,53,1,0,
0,0,332,333,3,132,66,0,333,334,3,56,28,0,334,55,1,0,0,0,335,348,5,81,0,0,
336,337,5,48,0,0,337,342,3,90,45,0,338,339,5,36,0,0,339,341,3,90,45,0,340,
338,1,0,0,0,341,344,1,0,0,0,342,340,1,0,0,0,342,343,1,0,0,0,343,345,1,0,
0,0,344,342,1,0,0,0,345,346,5,54,0,0,346,348,1,0,0,0,347,335,1,0,0,0,347,
336,1,0,0,0,348,57,1,0,0,0,349,351,5,47,0,0,350,352,3,60,30,0,351,350,1,
0,0,0,351,352,1,0,0,0,352,353,1,0,0,0,353,354,5,53,0,0,354,59,1,0,0,0,355,
360,3,62,31,0,356,358,5,37,0,0,357,359,3,60,30,0,358,357,1,0,0,0,358,359,
1,0,0,0,359,361,1,0,0,0,360,356,1,0,0,0,360,361,1,0,0,0,361,61,1,0,0,0,362,
363,3,82,41,0,363,364,3,64,32,0,364,369,1,0,0,0,365,366,3,74,37,0,366,367,
3,66,33,0,367,369,1,0,0,0,368,362,1,0,0,0,368,365,1,0,0,0,369,63,1,0,0,0,
370,371,3,72,36,0,371,380,3,68,34,0,372,376,5,56,0,0,373,374,3,72,36,0,374,
375,3,68,34,0,375,377,1,0,0,0,376,373,1,0,0,0,376,377,1,0,0,0,377,379,1,
0,0,0,378,372,1,0,0,0,379,382,1,0,0,0,380,378,1,0,0,0,380,381,1,0,0,0,381,
65,1,0,0,0,382,380,1,0,0,0,383,385,3,64,32,0,384,383,1,0,0,0,384,385,1,0,
0,0,385,67,1,0,0,0,386,391,3,70,35,0,387,388,5,36,0,0,388,390,3,70,35,0,
389,387,1,0,0,0,390,393,1,0,0,0,391,389,1,0,0,0,391,392,1,0,0,0,392,69,1,
0,0,0,393,391,1,0,0,0,394,395,3,80,40,0,395,71,1,0,0,0,396,399,3,84,42,0,
397,399,5,1,0,0,398,396,1,0,0,0,398,397,1,0,0,0,399,73,1,0,0,0,400,403,3,
78,39,0,401,403,3,76,38,0,402,400,1,0,0,0,402,401,1,0,0,0,403,75,1,0,0,0,
404,405,5,49,0,0,405,406,3,64,32,0,406,407,5,55,0,0,407,77,1,0,0,0,408,410,
5,48,0,0,409,411,3,80,40,0,410,409,1,0,0,0,411,412,1,0,0,0,412,410,1,0,0,
0,412,413,1,0,0,0,413,414,1,0,0,0,414,415,5,54,0,0,415,79,1,0,0,0,416,419,
3,82,41,0,417,419,3,74,37,0,418,416,1,0,0,0,418,417,1,0,0,0,419,81,1,0,0,
0,420,423,3,86,43,0,421,423,3,88,44,0,422,420,1,0,0,0,422,421,1,0,0,0,423,
83,1,0,0,0,424,427,3,86,43,0,425,427,3,132,66,0,426,424,1,0,0,0,426,425,
1,0,0,0,427,85,1,0,0,0,428,429,7,2,0,0,429,87,1,0,0,0,430,437,3,132,66,0,
431,437,3,118,59,0,432,437,3,120,60,0,433,437,3,128,64,0,434,437,3,136,68,
0,435,437,5,81,0,0,436,430,1,0,0,0,436,431,1,0,0,0,436,432,1,0,0,0,436,433,
1,0,0,0,436,434,1,0,0,0,436,435,1,0,0,0,437,89,1,0,0,0,438,439,3,92,46,0,
439,91,1,0,0,0,440,445,3,94,47,0,441,442,5,39,0,0,442,444,3,94,47,0,443,
441,1,0,0,0,444,447,1,0,0,0,445,443,1,0,0,0,445,446,1,0,0,0,446,93,1,0,0,
0,447,445,1,0,0,0,448,453,3,96,48,0,449,450,5,38,0,0,450,452,3,96,48,0,451,
449,1,0,0,0,452,455,1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,0,454,95,1,0,0,
0,455,453,1,0,0,0,456,457,3,98,49,0,457,97,1,0,0,0,458,461,3,100,50,0,459,
460,7,3,0,0,460,462,3,100,50,0,461,459,1,0,0,0,461,462,1,0,0,0,462,99,1,
0,0,0,463,464,3,102,51,0,464,101,1,0,0,0,465,472,3,104,52,0,466,467,7,4,
0,0,467,471,3,104,52,0,468,471,3,124,62,0,469,471,3,126,63,0,470,466,1,0,
0,0,470,468,1,0,0,0,470,469,1,0,0,0,471,474,1,0,0,0,472,470,1,0,0,0,472,
473,1,0,0,0,473,103,1,0,0,0,474,472,1,0,0,0,475,480,3,106,53,0,476,477,7,
5,0,0,477,479,3,106,53,0,478,476,1,0,0,0,479,482,1,0,0,0,480,478,1,0,0,0,
480,481,1,0,0,0,481,105,1,0,0,0,482,480,1,0,0,0,483,485,7,6,0,0,484,483,
1,0,0,0,484,485,1,0,0,0,485,486,1,0,0,0,486,487,3,108,54,0,487,107,1,0,0,
0,488,496,3,110,55,0,489,496,3,112,56,0,490,496,3,116,58,0,491,496,3,118,
59,0,492,496,3,120,60,0,493,496,3,128,64,0,494,496,3,86,43,0,495,488,1,0,
0,0,495,489,1,0,0,0,495,490,1,0,0,0,495,491,1,0,0,0,495,492,1,0,0,0,495,
493,1,0,0,0,495,494,1,0,0,0,496,109,1,0,0,0,497,498,5,48,0,0,498,499,3,90,
45,0,499,500,5,54,0,0,500,111,1,0,0,0,501,502,5,26,0,0,502,503,5,48,0,0,
503,504,3,90,45,0,504,505,5,54,0,0,505,557,1,0,0,0,506,507,5,15,0,0,507,
508,5,48,0,0,508,509,3,90,45,0,509,510,5,54,0,0,510,557,1,0,0,0,511,512,
5,16,0,0,512,513,5,48,0,0,513,514,3,90,45,0,514,515,5,36,0,0,515,516,3,90,
45,0,516,517,5,54,0,0,517,557,1,0,0,0,518,519,5,8,0,0,519,520,5,48,0,0,520,
521,3,90,45,0,521,522,5,54,0,0,522,557,1,0,0,0,523,524,5,5,0,0,524,525,5,
48,0,0,525,526,3,86,43,0,526,527,5,54,0,0,527,557,1,0,0,0,528,529,5,35,0,
0,529,530,5,48,0,0,530,531,3,90,45,0,531,532,5,36,0,0,532,533,3,90,45,0,
533,534,5,54,0,0,534,557,1,0,0,0,535,536,5,34,0,0,536,537,5,48,0,0,537,538,
3,90,45,0,538,539,5,54,0,0,539,557,1,0,0,0,540,541,5,33,0,0,541,542,5,48,
0,0,542,543,3,90,45,0,543,544,5,54,0,0,544,557,1,0,0,0,545,546,5,32,0,0,
546,547,5,48,0,0,547,548,3,90,45,0,548,549,5,54,0,0,549,557,1,0,0,0,550,
551,5,31,0,0,551,552,5,48,0,0,552,553,3,90,45,0,553,554,5,54,0,0,554,557,
1,0,0,0,555,557,3,114,57,0,556,501,1,0,0,0,556,506,1,0,0,0,556,511,1,0,0,
0,556,518,1,0,0,0,556,523,1,0,0,0,556,528,1,0,0,0,556,535,1,0,0,0,556,540,
1,0,0,0,556,545,1,0,0,0,556,550,1,0,0,0,556,555,1,0,0,0,557,113,1,0,0,0,
558,559,5,24,0,0,559,560,5,48,0,0,560,561,3,90,45,0,561,562,5,36,0,0,562,
565,3,90,45,0,563,564,5,36,0,0,564,566,3,90,45,0,565,563,1,0,0,0,565,566,
1,0,0,0,566,567,1,0,0,0,567,568,5,54,0,0,568,115,1,0,0,0,569,571,3,132,66,
0,570,572,3,56,28,0,571,570,1,0,0,0,571,572,1,0,0,0,572,117,1,0,0,0,573,
577,3,130,65,0,574,578,5,65,0,0,575,576,5,40,0,0,576,578,3,132,66,0,577,
574,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,578,119,1,0,0,0,579,583,3,122,
61,0,580,583,3,124,62,0,581,583,3,126,63,0,582,579,1,0,0,0,582,580,1,0,0,
0,582,581,1,0,0,0,583,121,1,0,0,0,584,585,7,7,0,0,585,123,1,0,0,0,586,587,
7,8,0,0,587,125,1,0,0,0,588,589,7,9,0,0,589,127,1,0,0,0,590,591,7,10,0,0,
591,129,1,0,0,0,592,593,7,11,0,0,593,131,1,0,0,0,594,597,5,59,0,0,595,597,
3,134,67,0,596,594,1,0,0,0,596,595,1,0,0,0,597,133,1,0,0,0,598,599,7,12,
0,0,599,135,1,0,0,0,600,601,7,13,0,0,601,137,1,0,0,0,63,143,148,153,165,
170,173,178,189,199,202,207,211,219,227,237,242,245,249,253,255,262,268,
278,282,285,288,292,300,302,307,321,330,342,347,351,358,360,368,376,380,
384,391,398,402,412,418,422,426,436,445,453,461,470,472,480,484,495,556,
565,571,577,582,596];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SparqlParser extends antlr4.Parser {

    static grammarFileName = "SparqlParser.g4";
    static literalNames = [ null, null, "'ASC'", "'ASK'", "'BASE'", "'BOUND'", 
                            "'BY'", "'CONSTRUCT'", "'DATATYPE'", "'DESC'", 
                            "'DESCRIBE'", "'DISTINCT'", "'FILTER'", "'FROM'", 
                            "'GRAPH'", "'LANG'", "'LANGMATCHES'", "'LIMIT'", 
                            "'NAMED'", "'OFFSET'", "'OPTIONAL'", "'ORDER'", 
                            "'PREFIX'", "'REDUCED'", "'REGEX'", "'SELECT'", 
                            "'STR'", "'UNION'", "'WHERE'", "'true'", "'false'", 
                            "'isLITERAL'", "'isBLANK'", "'isURI'", "'isIRI'", 
                            "'sameTerm'", "','", "'.'", "'&&'", "'||'", 
                            "'^^'", "'='", "'!'", "'>'", "'>='", "'<'", 
                            "'<='", "'{'", "'('", "'['", "'-'", "'!='", 
                            "'+'", "'}'", "')'", "']'", "';'", "'/'", "'*'" ];
    static symbolicNames = [ null, "A", "ASC", "ASK", "BASE", "BOUND", "BY", 
                             "CONSTRUCT", "DATATYPE", "DESC", "DESCRIBE", 
                             "DISTINCT", "FILTER", "FROM", "GRAPH", "LANG", 
                             "LANGMATCHES", "LIMIT", "NAMED", "OFFSET", 
                             "OPTIONAL", "ORDER", "PREFIX", "REDUCED", "REGEX", 
                             "SELECT", "STR", "UNION", "WHERE", "TRUE", 
                             "FALSE", "IS_LITERAL", "IS_BLANK", "IS_URI", 
                             "IS_IRI", "SAME_TERM", "COMMA", "DOT", "DOUBLE_AMP", 
                             "DOUBLE_BAR", "DOUBLE_CARET", "EQUAL", "EXCLAMATION", 
                             "GREATER", "GREATER_OR_EQUAL", "LESS", "LESS_OR_EQUAL", 
                             "L_CURLY", "L_PAREN", "L_SQUARE", "MINUS", 
                             "NOT_EQUAL", "PLUS", "R_CURLY", "R_PAREN", 
                             "R_SQUARE", "SEMICOLON", "SLASH", "STAR", "IRI_REF", 
                             "PNAME_NS", "PNAME_LN", "BLANK_NODE_LABEL", 
                             "VAR1", "VAR2", "LANGTAG", "INTEGER", "DECIMAL", 
                             "DOUBLE", "INTEGER_POSITIVE", "DECIMAL_POSITIVE", 
                             "DOUBLE_POSITIVE", "INTEGER_NEGATIVE", "DECIMAL_NEGATIVE", 
                             "DOUBLE_NEGATIVE", "EXPONENT", "STRING_LITERAL1", 
                             "STRING_LITERAL2", "STRING_LITERAL_LONG1", 
                             "STRING_LITERAL_LONG2", "ECHAR", "NIL", "ANON", 
                             "PN_CHARS_U", "VARNAME", "PN_PREFIX", "PN_LOCAL", 
                             "WS" ];
    static ruleNames = [ "query", "prologue", "baseDecl", "prefixDecl", 
                         "selectQuery", "constructQuery", "describeQuery", 
                         "askQuery", "datasetClause", "defaultGraphClause", 
                         "namedGraphClause", "sourceSelector", "whereClause", 
                         "solutionModifier", "limitOffsetClauses", "orderClause", 
                         "orderCondition", "limitClause", "offsetClause", 
                         "groupGraphPattern", "triplesBlock", "graphPatternNotTriples", 
                         "optionalGraphPattern", "graphGraphPattern", "groupOrUnionGraphPattern", 
                         "filter_", "constraint", "functionCall", "argList", 
                         "constructTemplate", "constructTriples", "triplesSameSubject", 
                         "propertyListNotEmpty", "propertyList", "objectList", 
                         "object_", "verb", "triplesNode", "blankNodePropertyList", 
                         "collection", "graphNode", "varOrTerm", "varOrIRIref", 
                         "var_", "graphTerm", "expression", "conditionalOrExpression", 
                         "conditionalAndExpression", "valueLogical", "relationalExpression", 
                         "numericExpression", "additiveExpression", "multiplicativeExpression", 
                         "unaryExpression", "primaryExpression", "brackettedExpression", 
                         "builtInCall", "regexExpression", "iriRefOrFunction", 
                         "rdfLiteral", "numericLiteral", "numericLiteralUnsigned", 
                         "numericLiteralPositive", "numericLiteralNegative", 
                         "booleanLiteral", "string_", "iriRef", "prefixedName", 
                         "blankNode" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SparqlParser.ruleNames;
        this.literalNames = SparqlParser.literalNames;
        this.symbolicNames = SparqlParser.symbolicNames;
    }



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SparqlParser.RULE_query);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.prologue();
	        this.state = 143;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.state = 139;
	            this.selectQuery();
	            break;
	        case 7:
	            this.state = 140;
	            this.constructQuery();
	            break;
	        case 10:
	            this.state = 141;
	            this.describeQuery();
	            break;
	        case 3:
	            this.state = 142;
	            this.askQuery();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 145;
	        this.match(SparqlParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prologue() {
	    let localctx = new PrologueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SparqlParser.RULE_prologue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 147;
	            this.baseDecl();
	        }

	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22) {
	            this.state = 150;
	            this.prefixDecl();
	            this.state = 155;
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



	baseDecl() {
	    let localctx = new BaseDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SparqlParser.RULE_baseDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(SparqlParser.BASE);
	        this.state = 157;
	        this.match(SparqlParser.IRI_REF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefixDecl() {
	    let localctx = new PrefixDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SparqlParser.RULE_prefixDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(SparqlParser.PREFIX);
	        this.state = 160;
	        this.match(SparqlParser.PNAME_NS);
	        this.state = 161;
	        this.match(SparqlParser.IRI_REF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectQuery() {
	    let localctx = new SelectQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SparqlParser.RULE_selectQuery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this.match(SparqlParser.SELECT);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11 || _la===23) {
	            this.state = 164;
	            _la = this._input.LA(1);
	            if(!(_la===11 || _la===23)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 173;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	        case 64:
	            this.state = 168; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 167;
	                this.var_();
	                this.state = 170; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===63 || _la===64);
	            break;
	        case 58:
	            this.state = 172;
	            this.match(SparqlParser.STAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 175;
	            this.datasetClause();
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 181;
	        this.whereClause();
	        this.state = 182;
	        this.solutionModifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constructQuery() {
	    let localctx = new ConstructQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SparqlParser.RULE_constructQuery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(SparqlParser.CONSTRUCT);
	        this.state = 185;
	        this.constructTemplate();
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 186;
	            this.datasetClause();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 192;
	        this.whereClause();
	        this.state = 193;
	        this.solutionModifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	describeQuery() {
	    let localctx = new DescribeQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SparqlParser.RULE_describeQuery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(SparqlParser.DESCRIBE);
	        this.state = 202;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	        case 60:
	        case 61:
	        case 63:
	        case 64:
	            this.state = 197; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 196;
	                this.varOrIRIref();
	                this.state = 199; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 55) !== 0));
	            break;
	        case 58:
	            this.state = 201;
	            this.match(SparqlParser.STAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 204;
	            this.datasetClause();
	            this.state = 209;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28 || _la===47) {
	            this.state = 210;
	            this.whereClause();
	        }

	        this.state = 213;
	        this.solutionModifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	askQuery() {
	    let localctx = new AskQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SparqlParser.RULE_askQuery);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(SparqlParser.ASK);
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 216;
	            this.datasetClause();
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 222;
	        this.whereClause();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datasetClause() {
	    let localctx = new DatasetClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SparqlParser.RULE_datasetClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.match(SparqlParser.FROM);
	        this.state = 227;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	        case 60:
	        case 61:
	            this.state = 225;
	            this.defaultGraphClause();
	            break;
	        case 18:
	            this.state = 226;
	            this.namedGraphClause();
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



	defaultGraphClause() {
	    let localctx = new DefaultGraphClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SparqlParser.RULE_defaultGraphClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.sourceSelector();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namedGraphClause() {
	    let localctx = new NamedGraphClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SparqlParser.RULE_namedGraphClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(SparqlParser.NAMED);
	        this.state = 232;
	        this.sourceSelector();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sourceSelector() {
	    let localctx = new SourceSelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SparqlParser.RULE_sourceSelector);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.iriRef();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SparqlParser.RULE_whereClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 236;
	            this.match(SparqlParser.WHERE);
	        }

	        this.state = 239;
	        this.groupGraphPattern();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	solutionModifier() {
	    let localctx = new SolutionModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SparqlParser.RULE_solutionModifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 241;
	            this.orderClause();
	        }

	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17 || _la===19) {
	            this.state = 244;
	            this.limitOffsetClauses();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	limitOffsetClauses() {
	    let localctx = new LimitOffsetClausesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SparqlParser.RULE_limitOffsetClauses);
	    var _la = 0;
	    try {
	        this.state = 255;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 247;
	            this.limitClause();
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 248;
	                this.offsetClause();
	            }

	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.offsetClause();
	            this.state = 253;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===17) {
	                this.state = 252;
	                this.limitClause();
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



	orderClause() {
	    let localctx = new OrderClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SparqlParser.RULE_orderClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(SparqlParser.ORDER);
	        this.state = 258;
	        this.match(SparqlParser.BY);
	        this.state = 260; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 259;
	            this.orderCondition();
	            this.state = 262; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 2)) & ~0x1f) === 0 && ((1 << (_la - 2)) & 3779092681) !== 0) || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 1845510147) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orderCondition() {
	    let localctx = new OrderConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SparqlParser.RULE_orderCondition);
	    var _la = 0;
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 264;
	            _la = this._input.LA(1);
	            if(!(_la===2 || _la===9)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 265;
	            this.brackettedExpression();
	            break;
	        case 5:
	        case 8:
	        case 15:
	        case 16:
	        case 24:
	        case 26:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 48:
	        case 59:
	        case 60:
	        case 61:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.constraint();
	            break;
	        case 63:
	        case 64:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
	            this.var_();
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



	limitClause() {
	    let localctx = new LimitClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SparqlParser.RULE_limitClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(SparqlParser.LIMIT);
	        this.state = 271;
	        this.match(SparqlParser.INTEGER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	offsetClause() {
	    let localctx = new OffsetClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SparqlParser.RULE_offsetClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(SparqlParser.OFFSET);
	        this.state = 274;
	        this.match(SparqlParser.INTEGER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupGraphPattern() {
	    let localctx = new GroupGraphPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SparqlParser.RULE_groupGraphPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(SparqlParser.L_CURLY);
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 3222798339) !== 0) || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 3260399) !== 0)) {
	            this.state = 277;
	            this.triplesBlock();
	        }

	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1069056) !== 0) || _la===47) {
	            this.state = 282;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 14:
	            case 20:
	            case 47:
	                this.state = 280;
	                this.graphPatternNotTriples();
	                break;
	            case 12:
	                this.state = 281;
	                this.filter_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 284;
	                this.match(SparqlParser.DOT);
	            }

	            this.state = 288;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 3222798339) !== 0) || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 3260399) !== 0)) {
	                this.state = 287;
	                this.triplesBlock();
	            }

	            this.state = 294;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 295;
	        this.match(SparqlParser.R_CURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	triplesBlock() {
	    let localctx = new TriplesBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SparqlParser.RULE_triplesBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.triplesSameSubject();
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 298;
	            this.match(SparqlParser.DOT);
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 3222798339) !== 0) || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 3260399) !== 0)) {
	                this.state = 299;
	                this.triplesBlock();
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



	graphPatternNotTriples() {
	    let localctx = new GraphPatternNotTriplesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SparqlParser.RULE_graphPatternNotTriples);
	    try {
	        this.state = 307;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.optionalGraphPattern();
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.groupOrUnionGraphPattern();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 306;
	            this.graphGraphPattern();
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



	optionalGraphPattern() {
	    let localctx = new OptionalGraphPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SparqlParser.RULE_optionalGraphPattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(SparqlParser.OPTIONAL);
	        this.state = 310;
	        this.groupGraphPattern();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	graphGraphPattern() {
	    let localctx = new GraphGraphPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SparqlParser.RULE_graphGraphPattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(SparqlParser.GRAPH);
	        this.state = 313;
	        this.varOrIRIref();
	        this.state = 314;
	        this.groupGraphPattern();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	groupOrUnionGraphPattern() {
	    let localctx = new GroupOrUnionGraphPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, SparqlParser.RULE_groupOrUnionGraphPattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.groupGraphPattern();
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 317;
	            this.match(SparqlParser.UNION);
	            this.state = 318;
	            this.groupGraphPattern();
	            this.state = 323;
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



	filter_() {
	    let localctx = new Filter_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SparqlParser.RULE_filter_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(SparqlParser.FILTER);
	        this.state = 325;
	        this.constraint();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constraint() {
	    let localctx = new ConstraintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SparqlParser.RULE_constraint);
	    try {
	        this.state = 330;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.brackettedExpression();
	            break;
	        case 5:
	        case 8:
	        case 15:
	        case 16:
	        case 24:
	        case 26:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.builtInCall();
	            break;
	        case 59:
	        case 60:
	        case 61:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 329;
	            this.functionCall();
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SparqlParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.iriRef();
	        this.state = 333;
	        this.argList();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SparqlParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.state = 347;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 81:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 335;
	            this.match(SparqlParser.NIL);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 336;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 337;
	            this.expression();
	            this.state = 342;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===36) {
	                this.state = 338;
	                this.match(SparqlParser.COMMA);
	                this.state = 339;
	                this.expression();
	                this.state = 344;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 345;
	            this.match(SparqlParser.R_PAREN);
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



	constructTemplate() {
	    let localctx = new ConstructTemplateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, SparqlParser.RULE_constructTemplate);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(SparqlParser.L_CURLY);
	        this.state = 351;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 3222798339) !== 0) || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 3260399) !== 0)) {
	            this.state = 350;
	            this.constructTriples();
	        }

	        this.state = 353;
	        this.match(SparqlParser.R_CURLY);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constructTriples() {
	    let localctx = new ConstructTriplesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SparqlParser.RULE_constructTriples);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.triplesSameSubject();
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 356;
	            this.match(SparqlParser.DOT);
	            this.state = 358;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 3222798339) !== 0) || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 3260399) !== 0)) {
	                this.state = 357;
	                this.constructTriples();
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



	triplesSameSubject() {
	    let localctx = new TriplesSameSubjectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, SparqlParser.RULE_triplesSameSubject);
	    try {
	        this.state = 368;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 30:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 76:
	        case 77:
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 362;
	            this.varOrTerm();
	            this.state = 363;
	            this.propertyListNotEmpty();
	            break;
	        case 48:
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 365;
	            this.triplesNode();
	            this.state = 366;
	            this.propertyList();
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



	propertyListNotEmpty() {
	    let localctx = new PropertyListNotEmptyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, SparqlParser.RULE_propertyListNotEmpty);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.verb();
	        this.state = 371;
	        this.objectList();
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===56) {
	            this.state = 372;
	            this.match(SparqlParser.SEMICOLON);
	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===1 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 55) !== 0)) {
	                this.state = 373;
	                this.verb();
	                this.state = 374;
	                this.objectList();
	            }

	            this.state = 382;
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



	propertyList() {
	    let localctx = new PropertyListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, SparqlParser.RULE_propertyList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 55) !== 0)) {
	            this.state = 383;
	            this.propertyListNotEmpty();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectList() {
	    let localctx = new ObjectListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, SparqlParser.RULE_objectList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.object_();
	        this.state = 391;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===36) {
	            this.state = 387;
	            this.match(SparqlParser.COMMA);
	            this.state = 388;
	            this.object_();
	            this.state = 393;
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



	object_() {
	    let localctx = new Object_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, SparqlParser.RULE_object_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 394;
	        this.graphNode();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	verb() {
	    let localctx = new VerbContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, SparqlParser.RULE_verb);
	    try {
	        this.state = 398;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	        case 60:
	        case 61:
	        case 63:
	        case 64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 396;
	            this.varOrIRIref();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 397;
	            this.match(SparqlParser.A);
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



	triplesNode() {
	    let localctx = new TriplesNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, SparqlParser.RULE_triplesNode);
	    try {
	        this.state = 402;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 400;
	            this.collection();
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 401;
	            this.blankNodePropertyList();
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



	blankNodePropertyList() {
	    let localctx = new BlankNodePropertyListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, SparqlParser.RULE_blankNodePropertyList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(SparqlParser.L_SQUARE);
	        this.state = 405;
	        this.propertyListNotEmpty();
	        this.state = 406;
	        this.match(SparqlParser.R_SQUARE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, SparqlParser.RULE_collection);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.match(SparqlParser.L_PAREN);
	        this.state = 410; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 409;
	            this.graphNode();
	            this.state = 412; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 3222798339) !== 0) || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 3260399) !== 0));
	        this.state = 414;
	        this.match(SparqlParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	graphNode() {
	    let localctx = new GraphNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, SparqlParser.RULE_graphNode);
	    try {
	        this.state = 418;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 30:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 76:
	        case 77:
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 416;
	            this.varOrTerm();
	            break;
	        case 48:
	        case 49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 417;
	            this.triplesNode();
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



	varOrTerm() {
	    let localctx = new VarOrTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, SparqlParser.RULE_varOrTerm);
	    try {
	        this.state = 422;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	        case 64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 420;
	            this.var_();
	            break;
	        case 29:
	        case 30:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 76:
	        case 77:
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 421;
	            this.graphTerm();
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



	varOrIRIref() {
	    let localctx = new VarOrIRIrefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, SparqlParser.RULE_varOrIRIref);
	    try {
	        this.state = 426;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 63:
	        case 64:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 424;
	            this.var_();
	            break;
	        case 59:
	        case 60:
	        case 61:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 425;
	            this.iriRef();
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



	var_() {
	    let localctx = new Var_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, SparqlParser.RULE_var_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        _la = this._input.LA(1);
	        if(!(_la===63 || _la===64)) {
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



	graphTerm() {
	    let localctx = new GraphTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, SparqlParser.RULE_graphTerm);
	    try {
	        this.state = 436;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	        case 60:
	        case 61:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 430;
	            this.iriRef();
	            break;
	        case 76:
	        case 77:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 431;
	            this.rdfLiteral();
	            break;
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 432;
	            this.numericLiteral();
	            break;
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 433;
	            this.booleanLiteral();
	            break;
	        case 62:
	        case 82:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 434;
	            this.blankNode();
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 435;
	            this.match(SparqlParser.NIL);
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
	    this.enterRule(localctx, 90, SparqlParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        this.conditionalOrExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalOrExpression() {
	    let localctx = new ConditionalOrExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, SparqlParser.RULE_conditionalOrExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.conditionalAndExpression();
	        this.state = 445;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 441;
	            this.match(SparqlParser.DOUBLE_BAR);
	            this.state = 442;
	            this.conditionalAndExpression();
	            this.state = 447;
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



	conditionalAndExpression() {
	    let localctx = new ConditionalAndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, SparqlParser.RULE_conditionalAndExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.valueLogical();
	        this.state = 453;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 449;
	            this.match(SparqlParser.DOUBLE_AMP);
	            this.state = 450;
	            this.valueLogical();
	            this.state = 455;
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



	valueLogical() {
	    let localctx = new ValueLogicalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, SparqlParser.RULE_valueLogical);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this.relationalExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relationalExpression() {
	    let localctx = new RelationalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, SparqlParser.RULE_relationalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.numericExpression();
	        this.state = 461;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 1085) !== 0)) {
	            this.state = 459;
	            _la = this._input.LA(1);
	            if(!(((((_la - 41)) & ~0x1f) === 0 && ((1 << (_la - 41)) & 1085) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 460;
	            this.numericExpression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numericExpression() {
	    let localctx = new NumericExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, SparqlParser.RULE_numericExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        this.additiveExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, SparqlParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        this.multiplicativeExpression();
	        this.state = 472;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 50)) & ~0x1f) === 0 && ((1 << (_la - 50)) & 33030149) !== 0)) {
	            this.state = 470;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 50:
	            case 52:
	                this.state = 466;
	                _la = this._input.LA(1);
	                if(!(_la===50 || _la===52)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 467;
	                this.multiplicativeExpression();
	                break;
	            case 69:
	            case 70:
	            case 71:
	                this.state = 468;
	                this.numericLiteralPositive();
	                break;
	            case 72:
	            case 73:
	            case 74:
	                this.state = 469;
	                this.numericLiteralNegative();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 474;
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



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, SparqlParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 475;
	        this.unaryExpression();
	        this.state = 480;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57 || _la===58) {
	            this.state = 476;
	            _la = this._input.LA(1);
	            if(!(_la===57 || _la===58)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 477;
	            this.unaryExpression();
	            this.state = 482;
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



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, SparqlParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 1281) !== 0)) {
	            this.state = 483;
	            _la = this._input.LA(1);
	            if(!(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 1281) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 486;
	        this.primaryExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, SparqlParser.RULE_primaryExpression);
	    try {
	        this.state = 495;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 488;
	            this.brackettedExpression();
	            break;
	        case 5:
	        case 8:
	        case 15:
	        case 16:
	        case 24:
	        case 26:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 489;
	            this.builtInCall();
	            break;
	        case 59:
	        case 60:
	        case 61:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 490;
	            this.iriRefOrFunction();
	            break;
	        case 76:
	        case 77:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 491;
	            this.rdfLiteral();
	            break;
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 492;
	            this.numericLiteral();
	            break;
	        case 29:
	        case 30:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 493;
	            this.booleanLiteral();
	            break;
	        case 63:
	        case 64:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 494;
	            this.var_();
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



	brackettedExpression() {
	    let localctx = new BrackettedExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, SparqlParser.RULE_brackettedExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this.match(SparqlParser.L_PAREN);
	        this.state = 498;
	        this.expression();
	        this.state = 499;
	        this.match(SparqlParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	builtInCall() {
	    let localctx = new BuiltInCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, SparqlParser.RULE_builtInCall);
	    try {
	        this.state = 556;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 501;
	            this.match(SparqlParser.STR);
	            this.state = 502;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 503;
	            this.expression();
	            this.state = 504;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 506;
	            this.match(SparqlParser.LANG);
	            this.state = 507;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 508;
	            this.expression();
	            this.state = 509;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 511;
	            this.match(SparqlParser.LANGMATCHES);
	            this.state = 512;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 513;
	            this.expression();
	            this.state = 514;
	            this.match(SparqlParser.COMMA);
	            this.state = 515;
	            this.expression();
	            this.state = 516;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 518;
	            this.match(SparqlParser.DATATYPE);
	            this.state = 519;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 520;
	            this.expression();
	            this.state = 521;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 523;
	            this.match(SparqlParser.BOUND);
	            this.state = 524;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 525;
	            this.var_();
	            this.state = 526;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 528;
	            this.match(SparqlParser.SAME_TERM);
	            this.state = 529;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 530;
	            this.expression();
	            this.state = 531;
	            this.match(SparqlParser.COMMA);
	            this.state = 532;
	            this.expression();
	            this.state = 533;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 535;
	            this.match(SparqlParser.IS_IRI);
	            this.state = 536;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 537;
	            this.expression();
	            this.state = 538;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 540;
	            this.match(SparqlParser.IS_URI);
	            this.state = 541;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 542;
	            this.expression();
	            this.state = 543;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 545;
	            this.match(SparqlParser.IS_BLANK);
	            this.state = 546;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 547;
	            this.expression();
	            this.state = 548;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 550;
	            this.match(SparqlParser.IS_LITERAL);
	            this.state = 551;
	            this.match(SparqlParser.L_PAREN);
	            this.state = 552;
	            this.expression();
	            this.state = 553;
	            this.match(SparqlParser.R_PAREN);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 555;
	            this.regexExpression();
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



	regexExpression() {
	    let localctx = new RegexExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, SparqlParser.RULE_regexExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 558;
	        this.match(SparqlParser.REGEX);
	        this.state = 559;
	        this.match(SparqlParser.L_PAREN);
	        this.state = 560;
	        this.expression();
	        this.state = 561;
	        this.match(SparqlParser.COMMA);
	        this.state = 562;
	        this.expression();
	        this.state = 565;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 563;
	            this.match(SparqlParser.COMMA);
	            this.state = 564;
	            this.expression();
	        }

	        this.state = 567;
	        this.match(SparqlParser.R_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iriRefOrFunction() {
	    let localctx = new IriRefOrFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, SparqlParser.RULE_iriRefOrFunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 569;
	        this.iriRef();
	        this.state = 571;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48 || _la===81) {
	            this.state = 570;
	            this.argList();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rdfLiteral() {
	    let localctx = new RdfLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, SparqlParser.RULE_rdfLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 573;
	        this.string_();
	        this.state = 577;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 65:
	        	this.state = 574;
	        	this.match(SparqlParser.LANGTAG);
	        	break;
	        case 40:
	        	this.state = 575;
	        	this.match(SparqlParser.DOUBLE_CARET);
	        	this.state = 576;
	        	this.iriRef();
	        	break;
	        case 1:
	        case 12:
	        case 14:
	        case 20:
	        case 29:
	        case 30:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 41:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 76:
	        case 77:
	        case 81:
	        case 82:
	        	break;
	        default:
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



	numericLiteral() {
	    let localctx = new NumericLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, SparqlParser.RULE_numericLiteral);
	    try {
	        this.state = 582;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	        case 67:
	        case 68:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 579;
	            this.numericLiteralUnsigned();
	            break;
	        case 69:
	        case 70:
	        case 71:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 580;
	            this.numericLiteralPositive();
	            break;
	        case 72:
	        case 73:
	        case 74:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 581;
	            this.numericLiteralNegative();
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



	numericLiteralUnsigned() {
	    let localctx = new NumericLiteralUnsignedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, SparqlParser.RULE_numericLiteralUnsigned);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        _la = this._input.LA(1);
	        if(!(((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 7) !== 0))) {
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



	numericLiteralPositive() {
	    let localctx = new NumericLiteralPositiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, SparqlParser.RULE_numericLiteralPositive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 586;
	        _la = this._input.LA(1);
	        if(!(((((_la - 69)) & ~0x1f) === 0 && ((1 << (_la - 69)) & 7) !== 0))) {
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



	numericLiteralNegative() {
	    let localctx = new NumericLiteralNegativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, SparqlParser.RULE_numericLiteralNegative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 588;
	        _la = this._input.LA(1);
	        if(!(((((_la - 72)) & ~0x1f) === 0 && ((1 << (_la - 72)) & 7) !== 0))) {
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



	booleanLiteral() {
	    let localctx = new BooleanLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, SparqlParser.RULE_booleanLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 590;
	        _la = this._input.LA(1);
	        if(!(_la===29 || _la===30)) {
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



	string_() {
	    let localctx = new String_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, SparqlParser.RULE_string_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 592;
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



	iriRef() {
	    let localctx = new IriRefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, SparqlParser.RULE_iriRef);
	    try {
	        this.state = 596;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 59:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 594;
	            this.match(SparqlParser.IRI_REF);
	            break;
	        case 60:
	        case 61:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 595;
	            this.prefixedName();
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



	prefixedName() {
	    let localctx = new PrefixedNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, SparqlParser.RULE_prefixedName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 598;
	        _la = this._input.LA(1);
	        if(!(_la===60 || _la===61)) {
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



	blankNode() {
	    let localctx = new BlankNodeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, SparqlParser.RULE_blankNode);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 600;
	        _la = this._input.LA(1);
	        if(!(_la===62 || _la===82)) {
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

SparqlParser.EOF = antlr4.Token.EOF;
SparqlParser.A = 1;
SparqlParser.ASC = 2;
SparqlParser.ASK = 3;
SparqlParser.BASE = 4;
SparqlParser.BOUND = 5;
SparqlParser.BY = 6;
SparqlParser.CONSTRUCT = 7;
SparqlParser.DATATYPE = 8;
SparqlParser.DESC = 9;
SparqlParser.DESCRIBE = 10;
SparqlParser.DISTINCT = 11;
SparqlParser.FILTER = 12;
SparqlParser.FROM = 13;
SparqlParser.GRAPH = 14;
SparqlParser.LANG = 15;
SparqlParser.LANGMATCHES = 16;
SparqlParser.LIMIT = 17;
SparqlParser.NAMED = 18;
SparqlParser.OFFSET = 19;
SparqlParser.OPTIONAL = 20;
SparqlParser.ORDER = 21;
SparqlParser.PREFIX = 22;
SparqlParser.REDUCED = 23;
SparqlParser.REGEX = 24;
SparqlParser.SELECT = 25;
SparqlParser.STR = 26;
SparqlParser.UNION = 27;
SparqlParser.WHERE = 28;
SparqlParser.TRUE = 29;
SparqlParser.FALSE = 30;
SparqlParser.IS_LITERAL = 31;
SparqlParser.IS_BLANK = 32;
SparqlParser.IS_URI = 33;
SparqlParser.IS_IRI = 34;
SparqlParser.SAME_TERM = 35;
SparqlParser.COMMA = 36;
SparqlParser.DOT = 37;
SparqlParser.DOUBLE_AMP = 38;
SparqlParser.DOUBLE_BAR = 39;
SparqlParser.DOUBLE_CARET = 40;
SparqlParser.EQUAL = 41;
SparqlParser.EXCLAMATION = 42;
SparqlParser.GREATER = 43;
SparqlParser.GREATER_OR_EQUAL = 44;
SparqlParser.LESS = 45;
SparqlParser.LESS_OR_EQUAL = 46;
SparqlParser.L_CURLY = 47;
SparqlParser.L_PAREN = 48;
SparqlParser.L_SQUARE = 49;
SparqlParser.MINUS = 50;
SparqlParser.NOT_EQUAL = 51;
SparqlParser.PLUS = 52;
SparqlParser.R_CURLY = 53;
SparqlParser.R_PAREN = 54;
SparqlParser.R_SQUARE = 55;
SparqlParser.SEMICOLON = 56;
SparqlParser.SLASH = 57;
SparqlParser.STAR = 58;
SparqlParser.IRI_REF = 59;
SparqlParser.PNAME_NS = 60;
SparqlParser.PNAME_LN = 61;
SparqlParser.BLANK_NODE_LABEL = 62;
SparqlParser.VAR1 = 63;
SparqlParser.VAR2 = 64;
SparqlParser.LANGTAG = 65;
SparqlParser.INTEGER = 66;
SparqlParser.DECIMAL = 67;
SparqlParser.DOUBLE = 68;
SparqlParser.INTEGER_POSITIVE = 69;
SparqlParser.DECIMAL_POSITIVE = 70;
SparqlParser.DOUBLE_POSITIVE = 71;
SparqlParser.INTEGER_NEGATIVE = 72;
SparqlParser.DECIMAL_NEGATIVE = 73;
SparqlParser.DOUBLE_NEGATIVE = 74;
SparqlParser.EXPONENT = 75;
SparqlParser.STRING_LITERAL1 = 76;
SparqlParser.STRING_LITERAL2 = 77;
SparqlParser.STRING_LITERAL_LONG1 = 78;
SparqlParser.STRING_LITERAL_LONG2 = 79;
SparqlParser.ECHAR = 80;
SparqlParser.NIL = 81;
SparqlParser.ANON = 82;
SparqlParser.PN_CHARS_U = 83;
SparqlParser.VARNAME = 84;
SparqlParser.PN_PREFIX = 85;
SparqlParser.PN_LOCAL = 86;
SparqlParser.WS = 87;

SparqlParser.RULE_query = 0;
SparqlParser.RULE_prologue = 1;
SparqlParser.RULE_baseDecl = 2;
SparqlParser.RULE_prefixDecl = 3;
SparqlParser.RULE_selectQuery = 4;
SparqlParser.RULE_constructQuery = 5;
SparqlParser.RULE_describeQuery = 6;
SparqlParser.RULE_askQuery = 7;
SparqlParser.RULE_datasetClause = 8;
SparqlParser.RULE_defaultGraphClause = 9;
SparqlParser.RULE_namedGraphClause = 10;
SparqlParser.RULE_sourceSelector = 11;
SparqlParser.RULE_whereClause = 12;
SparqlParser.RULE_solutionModifier = 13;
SparqlParser.RULE_limitOffsetClauses = 14;
SparqlParser.RULE_orderClause = 15;
SparqlParser.RULE_orderCondition = 16;
SparqlParser.RULE_limitClause = 17;
SparqlParser.RULE_offsetClause = 18;
SparqlParser.RULE_groupGraphPattern = 19;
SparqlParser.RULE_triplesBlock = 20;
SparqlParser.RULE_graphPatternNotTriples = 21;
SparqlParser.RULE_optionalGraphPattern = 22;
SparqlParser.RULE_graphGraphPattern = 23;
SparqlParser.RULE_groupOrUnionGraphPattern = 24;
SparqlParser.RULE_filter_ = 25;
SparqlParser.RULE_constraint = 26;
SparqlParser.RULE_functionCall = 27;
SparqlParser.RULE_argList = 28;
SparqlParser.RULE_constructTemplate = 29;
SparqlParser.RULE_constructTriples = 30;
SparqlParser.RULE_triplesSameSubject = 31;
SparqlParser.RULE_propertyListNotEmpty = 32;
SparqlParser.RULE_propertyList = 33;
SparqlParser.RULE_objectList = 34;
SparqlParser.RULE_object_ = 35;
SparqlParser.RULE_verb = 36;
SparqlParser.RULE_triplesNode = 37;
SparqlParser.RULE_blankNodePropertyList = 38;
SparqlParser.RULE_collection = 39;
SparqlParser.RULE_graphNode = 40;
SparqlParser.RULE_varOrTerm = 41;
SparqlParser.RULE_varOrIRIref = 42;
SparqlParser.RULE_var_ = 43;
SparqlParser.RULE_graphTerm = 44;
SparqlParser.RULE_expression = 45;
SparqlParser.RULE_conditionalOrExpression = 46;
SparqlParser.RULE_conditionalAndExpression = 47;
SparqlParser.RULE_valueLogical = 48;
SparqlParser.RULE_relationalExpression = 49;
SparqlParser.RULE_numericExpression = 50;
SparqlParser.RULE_additiveExpression = 51;
SparqlParser.RULE_multiplicativeExpression = 52;
SparqlParser.RULE_unaryExpression = 53;
SparqlParser.RULE_primaryExpression = 54;
SparqlParser.RULE_brackettedExpression = 55;
SparqlParser.RULE_builtInCall = 56;
SparqlParser.RULE_regexExpression = 57;
SparqlParser.RULE_iriRefOrFunction = 58;
SparqlParser.RULE_rdfLiteral = 59;
SparqlParser.RULE_numericLiteral = 60;
SparqlParser.RULE_numericLiteralUnsigned = 61;
SparqlParser.RULE_numericLiteralPositive = 62;
SparqlParser.RULE_numericLiteralNegative = 63;
SparqlParser.RULE_booleanLiteral = 64;
SparqlParser.RULE_string_ = 65;
SparqlParser.RULE_iriRef = 66;
SparqlParser.RULE_prefixedName = 67;
SparqlParser.RULE_blankNode = 68;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_query;
    }

	prologue() {
	    return this.getTypedRuleContext(PrologueContext,0);
	};

	EOF() {
	    return this.getToken(SparqlParser.EOF, 0);
	};

	selectQuery() {
	    return this.getTypedRuleContext(SelectQueryContext,0);
	};

	constructQuery() {
	    return this.getTypedRuleContext(ConstructQueryContext,0);
	};

	describeQuery() {
	    return this.getTypedRuleContext(DescribeQueryContext,0);
	};

	askQuery() {
	    return this.getTypedRuleContext(AskQueryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitQuery(this);
		}
	}


}



class PrologueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_prologue;
    }

	baseDecl() {
	    return this.getTypedRuleContext(BaseDeclContext,0);
	};

	prefixDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrefixDeclContext);
	    } else {
	        return this.getTypedRuleContext(PrefixDeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterPrologue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitPrologue(this);
		}
	}


}



class BaseDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_baseDecl;
    }

	BASE() {
	    return this.getToken(SparqlParser.BASE, 0);
	};

	IRI_REF() {
	    return this.getToken(SparqlParser.IRI_REF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterBaseDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitBaseDecl(this);
		}
	}


}



class PrefixDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_prefixDecl;
    }

	PREFIX() {
	    return this.getToken(SparqlParser.PREFIX, 0);
	};

	PNAME_NS() {
	    return this.getToken(SparqlParser.PNAME_NS, 0);
	};

	IRI_REF() {
	    return this.getToken(SparqlParser.IRI_REF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterPrefixDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitPrefixDecl(this);
		}
	}


}



class SelectQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_selectQuery;
    }

	SELECT() {
	    return this.getToken(SparqlParser.SELECT, 0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	solutionModifier() {
	    return this.getTypedRuleContext(SolutionModifierContext,0);
	};

	STAR() {
	    return this.getToken(SparqlParser.STAR, 0);
	};

	datasetClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DatasetClauseContext);
	    } else {
	        return this.getTypedRuleContext(DatasetClauseContext,i);
	    }
	};

	DISTINCT() {
	    return this.getToken(SparqlParser.DISTINCT, 0);
	};

	REDUCED() {
	    return this.getToken(SparqlParser.REDUCED, 0);
	};

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

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterSelectQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitSelectQuery(this);
		}
	}


}



class ConstructQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_constructQuery;
    }

	CONSTRUCT() {
	    return this.getToken(SparqlParser.CONSTRUCT, 0);
	};

	constructTemplate() {
	    return this.getTypedRuleContext(ConstructTemplateContext,0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	solutionModifier() {
	    return this.getTypedRuleContext(SolutionModifierContext,0);
	};

	datasetClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DatasetClauseContext);
	    } else {
	        return this.getTypedRuleContext(DatasetClauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterConstructQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitConstructQuery(this);
		}
	}


}



class DescribeQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_describeQuery;
    }

	DESCRIBE() {
	    return this.getToken(SparqlParser.DESCRIBE, 0);
	};

	solutionModifier() {
	    return this.getTypedRuleContext(SolutionModifierContext,0);
	};

	STAR() {
	    return this.getToken(SparqlParser.STAR, 0);
	};

	datasetClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DatasetClauseContext);
	    } else {
	        return this.getTypedRuleContext(DatasetClauseContext,i);
	    }
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	varOrIRIref = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarOrIRIrefContext);
	    } else {
	        return this.getTypedRuleContext(VarOrIRIrefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterDescribeQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitDescribeQuery(this);
		}
	}


}



class AskQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_askQuery;
    }

	ASK() {
	    return this.getToken(SparqlParser.ASK, 0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	datasetClause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DatasetClauseContext);
	    } else {
	        return this.getTypedRuleContext(DatasetClauseContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterAskQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitAskQuery(this);
		}
	}


}



class DatasetClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_datasetClause;
    }

	FROM() {
	    return this.getToken(SparqlParser.FROM, 0);
	};

	defaultGraphClause() {
	    return this.getTypedRuleContext(DefaultGraphClauseContext,0);
	};

	namedGraphClause() {
	    return this.getTypedRuleContext(NamedGraphClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterDatasetClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitDatasetClause(this);
		}
	}


}



class DefaultGraphClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_defaultGraphClause;
    }

	sourceSelector() {
	    return this.getTypedRuleContext(SourceSelectorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterDefaultGraphClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitDefaultGraphClause(this);
		}
	}


}



class NamedGraphClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_namedGraphClause;
    }

	NAMED() {
	    return this.getToken(SparqlParser.NAMED, 0);
	};

	sourceSelector() {
	    return this.getTypedRuleContext(SourceSelectorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterNamedGraphClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitNamedGraphClause(this);
		}
	}


}



class SourceSelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_sourceSelector;
    }

	iriRef() {
	    return this.getTypedRuleContext(IriRefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterSourceSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitSourceSelector(this);
		}
	}


}



class WhereClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_whereClause;
    }

	groupGraphPattern() {
	    return this.getTypedRuleContext(GroupGraphPatternContext,0);
	};

	WHERE() {
	    return this.getToken(SparqlParser.WHERE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterWhereClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitWhereClause(this);
		}
	}


}



class SolutionModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_solutionModifier;
    }

	orderClause() {
	    return this.getTypedRuleContext(OrderClauseContext,0);
	};

	limitOffsetClauses() {
	    return this.getTypedRuleContext(LimitOffsetClausesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterSolutionModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitSolutionModifier(this);
		}
	}


}



class LimitOffsetClausesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_limitOffsetClauses;
    }

	limitClause() {
	    return this.getTypedRuleContext(LimitClauseContext,0);
	};

	offsetClause() {
	    return this.getTypedRuleContext(OffsetClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterLimitOffsetClauses(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitLimitOffsetClauses(this);
		}
	}


}



class OrderClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_orderClause;
    }

	ORDER() {
	    return this.getToken(SparqlParser.ORDER, 0);
	};

	BY() {
	    return this.getToken(SparqlParser.BY, 0);
	};

	orderCondition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OrderConditionContext);
	    } else {
	        return this.getTypedRuleContext(OrderConditionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterOrderClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitOrderClause(this);
		}
	}


}



class OrderConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_orderCondition;
    }

	brackettedExpression() {
	    return this.getTypedRuleContext(BrackettedExpressionContext,0);
	};

	ASC() {
	    return this.getToken(SparqlParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(SparqlParser.DESC, 0);
	};

	constraint() {
	    return this.getTypedRuleContext(ConstraintContext,0);
	};

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterOrderCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitOrderCondition(this);
		}
	}


}



class LimitClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_limitClause;
    }

	LIMIT() {
	    return this.getToken(SparqlParser.LIMIT, 0);
	};

	INTEGER() {
	    return this.getToken(SparqlParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterLimitClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitLimitClause(this);
		}
	}


}



class OffsetClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_offsetClause;
    }

	OFFSET() {
	    return this.getToken(SparqlParser.OFFSET, 0);
	};

	INTEGER() {
	    return this.getToken(SparqlParser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterOffsetClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitOffsetClause(this);
		}
	}


}



class GroupGraphPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_groupGraphPattern;
    }

	L_CURLY() {
	    return this.getToken(SparqlParser.L_CURLY, 0);
	};

	R_CURLY() {
	    return this.getToken(SparqlParser.R_CURLY, 0);
	};

	triplesBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TriplesBlockContext);
	    } else {
	        return this.getTypedRuleContext(TriplesBlockContext,i);
	    }
	};

	graphPatternNotTriples = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GraphPatternNotTriplesContext);
	    } else {
	        return this.getTypedRuleContext(GraphPatternNotTriplesContext,i);
	    }
	};

	filter_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Filter_Context);
	    } else {
	        return this.getTypedRuleContext(Filter_Context,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.DOT);
	    } else {
	        return this.getToken(SparqlParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterGroupGraphPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitGroupGraphPattern(this);
		}
	}


}



class TriplesBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_triplesBlock;
    }

	triplesSameSubject() {
	    return this.getTypedRuleContext(TriplesSameSubjectContext,0);
	};

	DOT() {
	    return this.getToken(SparqlParser.DOT, 0);
	};

	triplesBlock() {
	    return this.getTypedRuleContext(TriplesBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterTriplesBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitTriplesBlock(this);
		}
	}


}



class GraphPatternNotTriplesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_graphPatternNotTriples;
    }

	optionalGraphPattern() {
	    return this.getTypedRuleContext(OptionalGraphPatternContext,0);
	};

	groupOrUnionGraphPattern() {
	    return this.getTypedRuleContext(GroupOrUnionGraphPatternContext,0);
	};

	graphGraphPattern() {
	    return this.getTypedRuleContext(GraphGraphPatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterGraphPatternNotTriples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitGraphPatternNotTriples(this);
		}
	}


}



class OptionalGraphPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_optionalGraphPattern;
    }

	OPTIONAL() {
	    return this.getToken(SparqlParser.OPTIONAL, 0);
	};

	groupGraphPattern() {
	    return this.getTypedRuleContext(GroupGraphPatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterOptionalGraphPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitOptionalGraphPattern(this);
		}
	}


}



class GraphGraphPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_graphGraphPattern;
    }

	GRAPH() {
	    return this.getToken(SparqlParser.GRAPH, 0);
	};

	varOrIRIref() {
	    return this.getTypedRuleContext(VarOrIRIrefContext,0);
	};

	groupGraphPattern() {
	    return this.getTypedRuleContext(GroupGraphPatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterGraphGraphPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitGraphGraphPattern(this);
		}
	}


}



class GroupOrUnionGraphPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_groupOrUnionGraphPattern;
    }

	groupGraphPattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupGraphPatternContext);
	    } else {
	        return this.getTypedRuleContext(GroupGraphPatternContext,i);
	    }
	};

	UNION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.UNION);
	    } else {
	        return this.getToken(SparqlParser.UNION, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterGroupOrUnionGraphPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitGroupOrUnionGraphPattern(this);
		}
	}


}



class Filter_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_filter_;
    }

	FILTER() {
	    return this.getToken(SparqlParser.FILTER, 0);
	};

	constraint() {
	    return this.getTypedRuleContext(ConstraintContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterFilter_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitFilter_(this);
		}
	}


}



class ConstraintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_constraint;
    }

	brackettedExpression() {
	    return this.getTypedRuleContext(BrackettedExpressionContext,0);
	};

	builtInCall() {
	    return this.getTypedRuleContext(BuiltInCallContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterConstraint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitConstraint(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_functionCall;
    }

	iriRef() {
	    return this.getTypedRuleContext(IriRefContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class ArgListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_argList;
    }

	NIL() {
	    return this.getToken(SparqlParser.NIL, 0);
	};

	L_PAREN() {
	    return this.getToken(SparqlParser.L_PAREN, 0);
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

	R_PAREN() {
	    return this.getToken(SparqlParser.R_PAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.COMMA);
	    } else {
	        return this.getToken(SparqlParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterArgList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitArgList(this);
		}
	}


}



class ConstructTemplateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_constructTemplate;
    }

	L_CURLY() {
	    return this.getToken(SparqlParser.L_CURLY, 0);
	};

	R_CURLY() {
	    return this.getToken(SparqlParser.R_CURLY, 0);
	};

	constructTriples() {
	    return this.getTypedRuleContext(ConstructTriplesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterConstructTemplate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitConstructTemplate(this);
		}
	}


}



class ConstructTriplesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_constructTriples;
    }

	triplesSameSubject() {
	    return this.getTypedRuleContext(TriplesSameSubjectContext,0);
	};

	DOT() {
	    return this.getToken(SparqlParser.DOT, 0);
	};

	constructTriples() {
	    return this.getTypedRuleContext(ConstructTriplesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterConstructTriples(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitConstructTriples(this);
		}
	}


}



class TriplesSameSubjectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_triplesSameSubject;
    }

	varOrTerm() {
	    return this.getTypedRuleContext(VarOrTermContext,0);
	};

	propertyListNotEmpty() {
	    return this.getTypedRuleContext(PropertyListNotEmptyContext,0);
	};

	triplesNode() {
	    return this.getTypedRuleContext(TriplesNodeContext,0);
	};

	propertyList() {
	    return this.getTypedRuleContext(PropertyListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterTriplesSameSubject(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitTriplesSameSubject(this);
		}
	}


}



class PropertyListNotEmptyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_propertyListNotEmpty;
    }

	verb = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VerbContext);
	    } else {
	        return this.getTypedRuleContext(VerbContext,i);
	    }
	};

	objectList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectListContext);
	    } else {
	        return this.getTypedRuleContext(ObjectListContext,i);
	    }
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.SEMICOLON);
	    } else {
	        return this.getToken(SparqlParser.SEMICOLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterPropertyListNotEmpty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitPropertyListNotEmpty(this);
		}
	}


}



class PropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_propertyList;
    }

	propertyListNotEmpty() {
	    return this.getTypedRuleContext(PropertyListNotEmptyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterPropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitPropertyList(this);
		}
	}


}



class ObjectListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_objectList;
    }

	object_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Object_Context);
	    } else {
	        return this.getTypedRuleContext(Object_Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.COMMA);
	    } else {
	        return this.getToken(SparqlParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterObjectList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitObjectList(this);
		}
	}


}



class Object_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_object_;
    }

	graphNode() {
	    return this.getTypedRuleContext(GraphNodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterObject_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitObject_(this);
		}
	}


}



class VerbContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_verb;
    }

	varOrIRIref() {
	    return this.getTypedRuleContext(VarOrIRIrefContext,0);
	};

	A() {
	    return this.getToken(SparqlParser.A, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterVerb(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitVerb(this);
		}
	}


}



class TriplesNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_triplesNode;
    }

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	blankNodePropertyList() {
	    return this.getTypedRuleContext(BlankNodePropertyListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterTriplesNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitTriplesNode(this);
		}
	}


}



class BlankNodePropertyListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_blankNodePropertyList;
    }

	L_SQUARE() {
	    return this.getToken(SparqlParser.L_SQUARE, 0);
	};

	propertyListNotEmpty() {
	    return this.getTypedRuleContext(PropertyListNotEmptyContext,0);
	};

	R_SQUARE() {
	    return this.getToken(SparqlParser.R_SQUARE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterBlankNodePropertyList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitBlankNodePropertyList(this);
		}
	}


}



class CollectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_collection;
    }

	L_PAREN() {
	    return this.getToken(SparqlParser.L_PAREN, 0);
	};

	R_PAREN() {
	    return this.getToken(SparqlParser.R_PAREN, 0);
	};

	graphNode = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GraphNodeContext);
	    } else {
	        return this.getTypedRuleContext(GraphNodeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitCollection(this);
		}
	}


}



class GraphNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_graphNode;
    }

	varOrTerm() {
	    return this.getTypedRuleContext(VarOrTermContext,0);
	};

	triplesNode() {
	    return this.getTypedRuleContext(TriplesNodeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterGraphNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitGraphNode(this);
		}
	}


}



class VarOrTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_varOrTerm;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	graphTerm() {
	    return this.getTypedRuleContext(GraphTermContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterVarOrTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitVarOrTerm(this);
		}
	}


}



class VarOrIRIrefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_varOrIRIref;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	iriRef() {
	    return this.getTypedRuleContext(IriRefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterVarOrIRIref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitVarOrIRIref(this);
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
        this.ruleIndex = SparqlParser.RULE_var_;
    }

	VAR1() {
	    return this.getToken(SparqlParser.VAR1, 0);
	};

	VAR2() {
	    return this.getToken(SparqlParser.VAR2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterVar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitVar_(this);
		}
	}


}



class GraphTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_graphTerm;
    }

	iriRef() {
	    return this.getTypedRuleContext(IriRefContext,0);
	};

	rdfLiteral() {
	    return this.getTypedRuleContext(RdfLiteralContext,0);
	};

	numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
	};

	booleanLiteral() {
	    return this.getTypedRuleContext(BooleanLiteralContext,0);
	};

	blankNode() {
	    return this.getTypedRuleContext(BlankNodeContext,0);
	};

	NIL() {
	    return this.getToken(SparqlParser.NIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterGraphTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitGraphTerm(this);
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
        this.ruleIndex = SparqlParser.RULE_expression;
    }

	conditionalOrExpression() {
	    return this.getTypedRuleContext(ConditionalOrExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ConditionalOrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_conditionalOrExpression;
    }

	conditionalAndExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalAndExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalAndExpressionContext,i);
	    }
	};

	DOUBLE_BAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.DOUBLE_BAR);
	    } else {
	        return this.getToken(SparqlParser.DOUBLE_BAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterConditionalOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitConditionalOrExpression(this);
		}
	}


}



class ConditionalAndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_conditionalAndExpression;
    }

	valueLogical = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueLogicalContext);
	    } else {
	        return this.getTypedRuleContext(ValueLogicalContext,i);
	    }
	};

	DOUBLE_AMP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.DOUBLE_AMP);
	    } else {
	        return this.getToken(SparqlParser.DOUBLE_AMP, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterConditionalAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitConditionalAndExpression(this);
		}
	}


}



class ValueLogicalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_valueLogical;
    }

	relationalExpression() {
	    return this.getTypedRuleContext(RelationalExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterValueLogical(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitValueLogical(this);
		}
	}


}



class RelationalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_relationalExpression;
    }

	numericExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumericExpressionContext);
	    } else {
	        return this.getTypedRuleContext(NumericExpressionContext,i);
	    }
	};

	EQUAL() {
	    return this.getToken(SparqlParser.EQUAL, 0);
	};

	NOT_EQUAL() {
	    return this.getToken(SparqlParser.NOT_EQUAL, 0);
	};

	LESS() {
	    return this.getToken(SparqlParser.LESS, 0);
	};

	GREATER() {
	    return this.getToken(SparqlParser.GREATER, 0);
	};

	LESS_OR_EQUAL() {
	    return this.getToken(SparqlParser.LESS_OR_EQUAL, 0);
	};

	GREATER_OR_EQUAL() {
	    return this.getToken(SparqlParser.GREATER_OR_EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterRelationalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitRelationalExpression(this);
		}
	}


}



class NumericExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_numericExpression;
    }

	additiveExpression() {
	    return this.getTypedRuleContext(AdditiveExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterNumericExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitNumericExpression(this);
		}
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	numericLiteralPositive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumericLiteralPositiveContext);
	    } else {
	        return this.getTypedRuleContext(NumericLiteralPositiveContext,i);
	    }
	};

	numericLiteralNegative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumericLiteralNegativeContext);
	    } else {
	        return this.getTypedRuleContext(NumericLiteralNegativeContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.PLUS);
	    } else {
	        return this.getToken(SparqlParser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.MINUS);
	    } else {
	        return this.getToken(SparqlParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_multiplicativeExpression;
    }

	unaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(UnaryExpressionContext,i);
	    }
	};

	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.STAR);
	    } else {
	        return this.getToken(SparqlParser.STAR, i);
	    }
	};


	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.SLASH);
	    } else {
	        return this.getToken(SparqlParser.SLASH, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}


}



class UnaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_unaryExpression;
    }

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	EXCLAMATION() {
	    return this.getToken(SparqlParser.EXCLAMATION, 0);
	};

	PLUS() {
	    return this.getToken(SparqlParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(SparqlParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitUnaryExpression(this);
		}
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_primaryExpression;
    }

	brackettedExpression() {
	    return this.getTypedRuleContext(BrackettedExpressionContext,0);
	};

	builtInCall() {
	    return this.getTypedRuleContext(BuiltInCallContext,0);
	};

	iriRefOrFunction() {
	    return this.getTypedRuleContext(IriRefOrFunctionContext,0);
	};

	rdfLiteral() {
	    return this.getTypedRuleContext(RdfLiteralContext,0);
	};

	numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
	};

	booleanLiteral() {
	    return this.getTypedRuleContext(BooleanLiteralContext,0);
	};

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}


}



class BrackettedExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_brackettedExpression;
    }

	L_PAREN() {
	    return this.getToken(SparqlParser.L_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	R_PAREN() {
	    return this.getToken(SparqlParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterBrackettedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitBrackettedExpression(this);
		}
	}


}



class BuiltInCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_builtInCall;
    }

	STR() {
	    return this.getToken(SparqlParser.STR, 0);
	};

	L_PAREN() {
	    return this.getToken(SparqlParser.L_PAREN, 0);
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

	R_PAREN() {
	    return this.getToken(SparqlParser.R_PAREN, 0);
	};

	LANG() {
	    return this.getToken(SparqlParser.LANG, 0);
	};

	LANGMATCHES() {
	    return this.getToken(SparqlParser.LANGMATCHES, 0);
	};

	COMMA() {
	    return this.getToken(SparqlParser.COMMA, 0);
	};

	DATATYPE() {
	    return this.getToken(SparqlParser.DATATYPE, 0);
	};

	BOUND() {
	    return this.getToken(SparqlParser.BOUND, 0);
	};

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	SAME_TERM() {
	    return this.getToken(SparqlParser.SAME_TERM, 0);
	};

	IS_IRI() {
	    return this.getToken(SparqlParser.IS_IRI, 0);
	};

	IS_URI() {
	    return this.getToken(SparqlParser.IS_URI, 0);
	};

	IS_BLANK() {
	    return this.getToken(SparqlParser.IS_BLANK, 0);
	};

	IS_LITERAL() {
	    return this.getToken(SparqlParser.IS_LITERAL, 0);
	};

	regexExpression() {
	    return this.getTypedRuleContext(RegexExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterBuiltInCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitBuiltInCall(this);
		}
	}


}



class RegexExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_regexExpression;
    }

	REGEX() {
	    return this.getToken(SparqlParser.REGEX, 0);
	};

	L_PAREN() {
	    return this.getToken(SparqlParser.L_PAREN, 0);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SparqlParser.COMMA);
	    } else {
	        return this.getToken(SparqlParser.COMMA, i);
	    }
	};


	R_PAREN() {
	    return this.getToken(SparqlParser.R_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterRegexExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitRegexExpression(this);
		}
	}


}



class IriRefOrFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_iriRefOrFunction;
    }

	iriRef() {
	    return this.getTypedRuleContext(IriRefContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterIriRefOrFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitIriRefOrFunction(this);
		}
	}


}



class RdfLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_rdfLiteral;
    }

	string_() {
	    return this.getTypedRuleContext(String_Context,0);
	};

	LANGTAG() {
	    return this.getToken(SparqlParser.LANGTAG, 0);
	};

	DOUBLE_CARET() {
	    return this.getToken(SparqlParser.DOUBLE_CARET, 0);
	};

	iriRef() {
	    return this.getTypedRuleContext(IriRefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterRdfLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitRdfLiteral(this);
		}
	}


}



class NumericLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_numericLiteral;
    }

	numericLiteralUnsigned() {
	    return this.getTypedRuleContext(NumericLiteralUnsignedContext,0);
	};

	numericLiteralPositive() {
	    return this.getTypedRuleContext(NumericLiteralPositiveContext,0);
	};

	numericLiteralNegative() {
	    return this.getTypedRuleContext(NumericLiteralNegativeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterNumericLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitNumericLiteral(this);
		}
	}


}



class NumericLiteralUnsignedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_numericLiteralUnsigned;
    }

	INTEGER() {
	    return this.getToken(SparqlParser.INTEGER, 0);
	};

	DECIMAL() {
	    return this.getToken(SparqlParser.DECIMAL, 0);
	};

	DOUBLE() {
	    return this.getToken(SparqlParser.DOUBLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterNumericLiteralUnsigned(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitNumericLiteralUnsigned(this);
		}
	}


}



class NumericLiteralPositiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_numericLiteralPositive;
    }

	INTEGER_POSITIVE() {
	    return this.getToken(SparqlParser.INTEGER_POSITIVE, 0);
	};

	DECIMAL_POSITIVE() {
	    return this.getToken(SparqlParser.DECIMAL_POSITIVE, 0);
	};

	DOUBLE_POSITIVE() {
	    return this.getToken(SparqlParser.DOUBLE_POSITIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterNumericLiteralPositive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitNumericLiteralPositive(this);
		}
	}


}



class NumericLiteralNegativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_numericLiteralNegative;
    }

	INTEGER_NEGATIVE() {
	    return this.getToken(SparqlParser.INTEGER_NEGATIVE, 0);
	};

	DECIMAL_NEGATIVE() {
	    return this.getToken(SparqlParser.DECIMAL_NEGATIVE, 0);
	};

	DOUBLE_NEGATIVE() {
	    return this.getToken(SparqlParser.DOUBLE_NEGATIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterNumericLiteralNegative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitNumericLiteralNegative(this);
		}
	}


}



class BooleanLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_booleanLiteral;
    }

	TRUE() {
	    return this.getToken(SparqlParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(SparqlParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterBooleanLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitBooleanLiteral(this);
		}
	}


}



class String_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_string_;
    }

	STRING_LITERAL1() {
	    return this.getToken(SparqlParser.STRING_LITERAL1, 0);
	};

	STRING_LITERAL2() {
	    return this.getToken(SparqlParser.STRING_LITERAL2, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterString_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitString_(this);
		}
	}


}



class IriRefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_iriRef;
    }

	IRI_REF() {
	    return this.getToken(SparqlParser.IRI_REF, 0);
	};

	prefixedName() {
	    return this.getTypedRuleContext(PrefixedNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterIriRef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitIriRef(this);
		}
	}


}



class PrefixedNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_prefixedName;
    }

	PNAME_LN() {
	    return this.getToken(SparqlParser.PNAME_LN, 0);
	};

	PNAME_NS() {
	    return this.getToken(SparqlParser.PNAME_NS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterPrefixedName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitPrefixedName(this);
		}
	}


}



class BlankNodeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SparqlParser.RULE_blankNode;
    }

	BLANK_NODE_LABEL() {
	    return this.getToken(SparqlParser.BLANK_NODE_LABEL, 0);
	};

	ANON() {
	    return this.getToken(SparqlParser.ANON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.enterBlankNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SparqlParserListener ) {
	        listener.exitBlankNode(this);
		}
	}


}




SparqlParser.QueryContext = QueryContext; 
SparqlParser.PrologueContext = PrologueContext; 
SparqlParser.BaseDeclContext = BaseDeclContext; 
SparqlParser.PrefixDeclContext = PrefixDeclContext; 
SparqlParser.SelectQueryContext = SelectQueryContext; 
SparqlParser.ConstructQueryContext = ConstructQueryContext; 
SparqlParser.DescribeQueryContext = DescribeQueryContext; 
SparqlParser.AskQueryContext = AskQueryContext; 
SparqlParser.DatasetClauseContext = DatasetClauseContext; 
SparqlParser.DefaultGraphClauseContext = DefaultGraphClauseContext; 
SparqlParser.NamedGraphClauseContext = NamedGraphClauseContext; 
SparqlParser.SourceSelectorContext = SourceSelectorContext; 
SparqlParser.WhereClauseContext = WhereClauseContext; 
SparqlParser.SolutionModifierContext = SolutionModifierContext; 
SparqlParser.LimitOffsetClausesContext = LimitOffsetClausesContext; 
SparqlParser.OrderClauseContext = OrderClauseContext; 
SparqlParser.OrderConditionContext = OrderConditionContext; 
SparqlParser.LimitClauseContext = LimitClauseContext; 
SparqlParser.OffsetClauseContext = OffsetClauseContext; 
SparqlParser.GroupGraphPatternContext = GroupGraphPatternContext; 
SparqlParser.TriplesBlockContext = TriplesBlockContext; 
SparqlParser.GraphPatternNotTriplesContext = GraphPatternNotTriplesContext; 
SparqlParser.OptionalGraphPatternContext = OptionalGraphPatternContext; 
SparqlParser.GraphGraphPatternContext = GraphGraphPatternContext; 
SparqlParser.GroupOrUnionGraphPatternContext = GroupOrUnionGraphPatternContext; 
SparqlParser.Filter_Context = Filter_Context; 
SparqlParser.ConstraintContext = ConstraintContext; 
SparqlParser.FunctionCallContext = FunctionCallContext; 
SparqlParser.ArgListContext = ArgListContext; 
SparqlParser.ConstructTemplateContext = ConstructTemplateContext; 
SparqlParser.ConstructTriplesContext = ConstructTriplesContext; 
SparqlParser.TriplesSameSubjectContext = TriplesSameSubjectContext; 
SparqlParser.PropertyListNotEmptyContext = PropertyListNotEmptyContext; 
SparqlParser.PropertyListContext = PropertyListContext; 
SparqlParser.ObjectListContext = ObjectListContext; 
SparqlParser.Object_Context = Object_Context; 
SparqlParser.VerbContext = VerbContext; 
SparqlParser.TriplesNodeContext = TriplesNodeContext; 
SparqlParser.BlankNodePropertyListContext = BlankNodePropertyListContext; 
SparqlParser.CollectionContext = CollectionContext; 
SparqlParser.GraphNodeContext = GraphNodeContext; 
SparqlParser.VarOrTermContext = VarOrTermContext; 
SparqlParser.VarOrIRIrefContext = VarOrIRIrefContext; 
SparqlParser.Var_Context = Var_Context; 
SparqlParser.GraphTermContext = GraphTermContext; 
SparqlParser.ExpressionContext = ExpressionContext; 
SparqlParser.ConditionalOrExpressionContext = ConditionalOrExpressionContext; 
SparqlParser.ConditionalAndExpressionContext = ConditionalAndExpressionContext; 
SparqlParser.ValueLogicalContext = ValueLogicalContext; 
SparqlParser.RelationalExpressionContext = RelationalExpressionContext; 
SparqlParser.NumericExpressionContext = NumericExpressionContext; 
SparqlParser.AdditiveExpressionContext = AdditiveExpressionContext; 
SparqlParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
SparqlParser.UnaryExpressionContext = UnaryExpressionContext; 
SparqlParser.PrimaryExpressionContext = PrimaryExpressionContext; 
SparqlParser.BrackettedExpressionContext = BrackettedExpressionContext; 
SparqlParser.BuiltInCallContext = BuiltInCallContext; 
SparqlParser.RegexExpressionContext = RegexExpressionContext; 
SparqlParser.IriRefOrFunctionContext = IriRefOrFunctionContext; 
SparqlParser.RdfLiteralContext = RdfLiteralContext; 
SparqlParser.NumericLiteralContext = NumericLiteralContext; 
SparqlParser.NumericLiteralUnsignedContext = NumericLiteralUnsignedContext; 
SparqlParser.NumericLiteralPositiveContext = NumericLiteralPositiveContext; 
SparqlParser.NumericLiteralNegativeContext = NumericLiteralNegativeContext; 
SparqlParser.BooleanLiteralContext = BooleanLiteralContext; 
SparqlParser.String_Context = String_Context; 
SparqlParser.IriRefContext = IriRefContext; 
SparqlParser.PrefixedNameContext = PrefixedNameContext; 
SparqlParser.BlankNodeContext = BlankNodeContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
