// Generated from ./graphql/GraphQL.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GraphQLListener from './GraphQLListener.js';
const serializedATN = [4,1,64,678,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
1,0,4,0,144,8,0,11,0,12,0,145,1,1,1,1,1,1,3,1,151,8,1,1,2,1,2,3,2,155,8,
2,1,3,1,3,3,3,159,8,3,1,3,3,3,162,8,3,1,3,3,3,165,8,3,1,3,1,3,1,3,3,3,170,
8,3,1,4,1,4,1,5,1,5,4,5,176,8,5,11,5,12,5,177,1,5,1,5,1,6,1,6,1,6,3,6,185,
8,6,1,7,3,7,188,8,7,1,7,1,7,3,7,192,8,7,1,7,3,7,195,8,7,1,7,3,7,198,8,7,
1,8,1,8,4,8,202,8,8,11,8,12,8,203,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,
1,11,1,11,1,11,3,11,218,8,11,1,12,1,12,1,12,1,12,3,12,224,8,12,1,12,1,12,
1,13,1,13,1,14,1,14,1,14,1,15,1,15,3,15,235,8,15,1,15,3,15,238,8,15,1,15,
1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,251,8,16,1,17,1,17,
1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,23,4,
23,269,8,23,11,23,12,23,270,1,23,1,23,3,23,275,8,23,1,24,1,24,5,24,279,8,
24,10,24,12,24,282,9,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,27,
1,27,4,27,295,8,27,11,27,12,27,296,1,27,1,27,1,28,1,28,1,28,1,28,3,28,305,
8,28,1,29,1,29,1,29,1,30,1,30,3,30,312,8,30,1,30,1,30,3,30,316,8,30,3,30,
318,8,30,1,31,1,31,1,32,1,32,1,32,1,32,1,33,4,33,327,8,33,11,33,12,33,328,
1,34,1,34,1,34,3,34,334,8,34,1,35,1,35,1,35,3,35,339,8,35,1,36,1,36,3,36,
343,8,36,1,37,1,37,3,37,347,8,37,1,37,1,37,4,37,351,8,37,11,37,12,37,352,
1,37,1,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,3,39,364,8,39,1,39,1,39,4,39,
368,8,39,11,39,12,39,369,1,39,1,39,1,39,1,39,1,39,3,39,377,8,39,1,40,1,40,
1,40,1,40,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,42,3,42,391,8,42,1,43,1,43,
1,43,1,43,1,43,1,43,3,43,399,8,43,1,44,3,44,402,8,44,1,44,1,44,1,44,3,44,
407,8,44,1,45,1,45,1,45,1,45,1,45,1,46,3,46,415,8,46,1,46,1,46,1,46,3,46,
420,8,46,1,46,3,46,423,8,46,1,46,3,46,426,8,46,1,47,1,47,1,47,3,47,431,8,
47,1,47,1,47,1,47,1,47,1,47,5,47,438,8,47,10,47,12,47,441,9,47,1,48,1,48,
4,48,445,8,48,11,48,12,48,446,1,48,1,48,1,49,3,49,452,8,49,1,49,1,49,3,49,
456,8,49,1,49,1,49,1,49,3,49,461,8,49,1,50,1,50,4,50,465,8,50,11,50,12,50,
466,1,50,1,50,1,51,3,51,472,8,51,1,51,1,51,1,51,1,51,3,51,478,8,51,1,51,
3,51,481,8,51,1,52,1,52,1,52,1,52,3,52,487,8,52,1,52,3,52,490,8,52,1,52,
1,52,1,52,1,52,1,52,1,52,3,52,498,8,52,1,52,1,52,1,52,1,52,1,52,1,52,1,52,
3,52,507,8,52,1,53,3,53,510,8,53,1,53,1,53,1,53,3,53,515,8,53,1,53,3,53,
518,8,53,1,54,1,54,1,54,1,54,3,54,524,8,54,1,54,1,54,1,54,1,54,1,54,1,54,
1,54,3,54,533,8,54,1,55,3,55,536,8,55,1,55,1,55,1,55,3,55,541,8,55,1,55,
3,55,544,8,55,1,56,1,56,3,56,548,8,56,1,56,1,56,1,56,5,56,553,8,56,10,56,
12,56,556,9,56,1,57,1,57,1,57,1,57,3,57,562,8,57,1,57,1,57,1,57,1,57,1,57,
1,57,1,57,3,57,571,8,57,1,58,3,58,574,8,58,1,58,1,58,1,58,3,58,579,8,58,
1,58,3,58,582,8,58,1,59,1,59,4,59,586,8,59,11,59,12,59,587,1,59,1,59,1,60,
3,60,593,8,60,1,60,1,60,3,60,597,8,60,1,61,1,61,1,61,1,61,3,61,603,8,61,
1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,612,8,61,1,62,3,62,615,8,62,1,62,
1,62,1,62,3,62,620,8,62,1,62,3,62,623,8,62,1,63,1,63,4,63,627,8,63,11,63,
12,63,628,1,63,1,63,1,64,1,64,1,64,1,64,3,64,637,8,64,1,64,1,64,1,64,1,64,
1,64,1,64,1,64,3,64,646,8,64,1,65,3,65,649,8,65,1,65,1,65,1,65,1,65,3,65,
655,8,65,1,65,1,65,1,65,1,66,1,66,1,66,5,66,663,8,66,10,66,12,66,666,9,66,
1,67,1,67,3,67,670,8,67,1,68,1,68,1,69,1,69,1,70,1,70,1,70,0,1,94,71,0,2,
4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,
54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,
102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,
138,140,0,5,1,0,1,3,1,0,12,13,1,0,52,53,1,0,33,39,1,0,40,50,713,0,143,1,
0,0,0,2,150,1,0,0,0,4,154,1,0,0,0,6,169,1,0,0,0,8,171,1,0,0,0,10,173,1,0,
0,0,12,184,1,0,0,0,14,187,1,0,0,0,16,199,1,0,0,0,18,207,1,0,0,0,20,211,1,
0,0,0,22,214,1,0,0,0,24,219,1,0,0,0,26,227,1,0,0,0,28,229,1,0,0,0,30,232,
1,0,0,0,32,250,1,0,0,0,34,252,1,0,0,0,36,254,1,0,0,0,38,256,1,0,0,0,40,258,
1,0,0,0,42,260,1,0,0,0,44,262,1,0,0,0,46,274,1,0,0,0,48,276,1,0,0,0,50,285,
1,0,0,0,52,289,1,0,0,0,54,292,1,0,0,0,56,300,1,0,0,0,58,306,1,0,0,0,60,317,
1,0,0,0,62,319,1,0,0,0,64,321,1,0,0,0,66,326,1,0,0,0,68,330,1,0,0,0,70,338,
1,0,0,0,72,342,1,0,0,0,74,344,1,0,0,0,76,356,1,0,0,0,78,376,1,0,0,0,80,378,
1,0,0,0,82,382,1,0,0,0,84,390,1,0,0,0,86,398,1,0,0,0,88,401,1,0,0,0,90,408,
1,0,0,0,92,414,1,0,0,0,94,427,1,0,0,0,96,442,1,0,0,0,98,451,1,0,0,0,100,
462,1,0,0,0,102,471,1,0,0,0,104,506,1,0,0,0,106,509,1,0,0,0,108,532,1,0,
0,0,110,535,1,0,0,0,112,545,1,0,0,0,114,570,1,0,0,0,116,573,1,0,0,0,118,
583,1,0,0,0,120,592,1,0,0,0,122,611,1,0,0,0,124,614,1,0,0,0,126,624,1,0,
0,0,128,645,1,0,0,0,130,648,1,0,0,0,132,659,1,0,0,0,134,669,1,0,0,0,136,
671,1,0,0,0,138,673,1,0,0,0,140,675,1,0,0,0,142,144,3,2,1,0,143,142,1,0,
0,0,144,145,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,1,1,0,0,0,147,151,
3,4,2,0,148,151,3,70,35,0,149,151,3,72,36,0,150,147,1,0,0,0,150,148,1,0,
0,0,150,149,1,0,0,0,151,3,1,0,0,0,152,155,3,6,3,0,153,155,3,24,12,0,154,
152,1,0,0,0,154,153,1,0,0,0,155,5,1,0,0,0,156,158,3,8,4,0,157,159,3,140,
70,0,158,157,1,0,0,0,158,159,1,0,0,0,159,161,1,0,0,0,160,162,3,54,27,0,161,
160,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,165,3,66,33,0,164,163,1,
0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,167,3,10,5,0,167,170,1,0,0,0,168,
170,3,10,5,0,169,156,1,0,0,0,169,168,1,0,0,0,170,7,1,0,0,0,171,172,7,0,0,
0,172,9,1,0,0,0,173,175,5,4,0,0,174,176,3,12,6,0,175,174,1,0,0,0,176,177,
1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,179,1,0,0,0,179,180,5,5,0,0,
180,11,1,0,0,0,181,185,3,14,7,0,182,185,3,22,11,0,183,185,3,30,15,0,184,
181,1,0,0,0,184,182,1,0,0,0,184,183,1,0,0,0,185,13,1,0,0,0,186,188,3,20,
10,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,191,3,140,70,0,
190,192,3,16,8,0,191,190,1,0,0,0,191,192,1,0,0,0,192,194,1,0,0,0,193,195,
3,66,33,0,194,193,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,198,3,10,5,
0,197,196,1,0,0,0,197,198,1,0,0,0,198,15,1,0,0,0,199,201,5,6,0,0,200,202,
3,18,9,0,201,200,1,0,0,0,202,203,1,0,0,0,203,201,1,0,0,0,203,204,1,0,0,0,
204,205,1,0,0,0,205,206,5,7,0,0,206,17,1,0,0,0,207,208,3,140,70,0,208,209,
5,8,0,0,209,210,3,32,16,0,210,19,1,0,0,0,211,212,3,140,70,0,212,213,5,8,
0,0,213,21,1,0,0,0,214,215,5,9,0,0,215,217,3,26,13,0,216,218,3,66,33,0,217,
216,1,0,0,0,217,218,1,0,0,0,218,23,1,0,0,0,219,220,5,10,0,0,220,221,3,26,
13,0,221,223,3,28,14,0,222,224,3,66,33,0,223,222,1,0,0,0,223,224,1,0,0,0,
224,225,1,0,0,0,225,226,3,10,5,0,226,25,1,0,0,0,227,228,3,140,70,0,228,27,
1,0,0,0,229,230,5,11,0,0,230,231,3,62,31,0,231,29,1,0,0,0,232,234,5,9,0,
0,233,235,3,28,14,0,234,233,1,0,0,0,234,235,1,0,0,0,235,237,1,0,0,0,236,
238,3,66,33,0,237,236,1,0,0,0,237,238,1,0,0,0,238,239,1,0,0,0,239,240,3,
10,5,0,240,31,1,0,0,0,241,251,3,52,26,0,242,251,3,34,17,0,243,251,3,36,18,
0,244,251,3,40,20,0,245,251,3,38,19,0,246,251,3,42,21,0,247,251,3,44,22,
0,248,251,3,46,23,0,249,251,3,48,24,0,250,241,1,0,0,0,250,242,1,0,0,0,250,
243,1,0,0,0,250,244,1,0,0,0,250,245,1,0,0,0,250,246,1,0,0,0,250,247,1,0,
0,0,250,248,1,0,0,0,250,249,1,0,0,0,251,33,1,0,0,0,252,253,5,56,0,0,253,
35,1,0,0,0,254,255,5,55,0,0,255,37,1,0,0,0,256,257,7,1,0,0,257,39,1,0,0,
0,258,259,7,2,0,0,259,41,1,0,0,0,260,261,5,14,0,0,261,43,1,0,0,0,262,263,
3,140,70,0,263,45,1,0,0,0,264,265,5,15,0,0,265,275,5,16,0,0,266,268,5,15,
0,0,267,269,3,32,16,0,268,267,1,0,0,0,269,270,1,0,0,0,270,268,1,0,0,0,270,
271,1,0,0,0,271,272,1,0,0,0,272,273,5,16,0,0,273,275,1,0,0,0,274,264,1,0,
0,0,274,266,1,0,0,0,275,47,1,0,0,0,276,280,5,4,0,0,277,279,3,50,25,0,278,
277,1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,280,281,1,0,0,0,281,283,1,0,
0,0,282,280,1,0,0,0,283,284,5,5,0,0,284,49,1,0,0,0,285,286,3,140,70,0,286,
287,5,8,0,0,287,288,3,32,16,0,288,51,1,0,0,0,289,290,5,17,0,0,290,291,3,
140,70,0,291,53,1,0,0,0,292,294,5,6,0,0,293,295,3,56,28,0,294,293,1,0,0,
0,295,296,1,0,0,0,296,294,1,0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,299,
5,7,0,0,299,55,1,0,0,0,300,301,3,52,26,0,301,302,5,8,0,0,302,304,3,60,30,
0,303,305,3,58,29,0,304,303,1,0,0,0,304,305,1,0,0,0,305,57,1,0,0,0,306,307,
5,18,0,0,307,308,3,32,16,0,308,59,1,0,0,0,309,311,3,62,31,0,310,312,5,19,
0,0,311,310,1,0,0,0,311,312,1,0,0,0,312,318,1,0,0,0,313,315,3,64,32,0,314,
316,5,19,0,0,315,314,1,0,0,0,315,316,1,0,0,0,316,318,1,0,0,0,317,309,1,0,
0,0,317,313,1,0,0,0,318,61,1,0,0,0,319,320,3,140,70,0,320,63,1,0,0,0,321,
322,5,15,0,0,322,323,3,60,30,0,323,324,5,16,0,0,324,65,1,0,0,0,325,327,3,
68,34,0,326,325,1,0,0,0,327,328,1,0,0,0,328,326,1,0,0,0,328,329,1,0,0,0,
329,67,1,0,0,0,330,331,5,20,0,0,331,333,3,140,70,0,332,334,3,16,8,0,333,
332,1,0,0,0,333,334,1,0,0,0,334,69,1,0,0,0,335,339,3,74,37,0,336,339,3,84,
42,0,337,339,3,130,65,0,338,335,1,0,0,0,338,336,1,0,0,0,338,337,1,0,0,0,
339,71,1,0,0,0,340,343,3,78,39,0,341,343,3,86,43,0,342,340,1,0,0,0,342,341,
1,0,0,0,343,73,1,0,0,0,344,346,5,21,0,0,345,347,3,66,33,0,346,345,1,0,0,
0,346,347,1,0,0,0,347,348,1,0,0,0,348,350,5,4,0,0,349,351,3,76,38,0,350,
349,1,0,0,0,351,352,1,0,0,0,352,350,1,0,0,0,352,353,1,0,0,0,353,354,1,0,
0,0,354,355,5,5,0,0,355,75,1,0,0,0,356,357,3,8,4,0,357,358,5,8,0,0,358,359,
3,62,31,0,359,77,1,0,0,0,360,361,5,22,0,0,361,363,5,21,0,0,362,364,3,66,
33,0,363,362,1,0,0,0,363,364,1,0,0,0,364,365,1,0,0,0,365,367,5,4,0,0,366,
368,3,80,40,0,367,366,1,0,0,0,368,369,1,0,0,0,369,367,1,0,0,0,369,370,1,
0,0,0,370,371,1,0,0,0,371,372,5,5,0,0,372,377,1,0,0,0,373,374,5,22,0,0,374,
375,5,21,0,0,375,377,3,66,33,0,376,360,1,0,0,0,376,373,1,0,0,0,377,79,1,
0,0,0,378,379,3,8,4,0,379,380,5,8,0,0,380,381,3,62,31,0,381,81,1,0,0,0,382,
383,3,40,20,0,383,83,1,0,0,0,384,391,3,88,44,0,385,391,3,92,46,0,386,391,
3,106,53,0,387,391,3,110,55,0,388,391,3,116,58,0,389,391,3,124,62,0,390,
384,1,0,0,0,390,385,1,0,0,0,390,386,1,0,0,0,390,387,1,0,0,0,390,388,1,0,
0,0,390,389,1,0,0,0,391,85,1,0,0,0,392,399,3,90,45,0,393,399,3,104,52,0,
394,399,3,108,54,0,395,399,3,114,57,0,396,399,3,122,61,0,397,399,3,128,64,
0,398,392,1,0,0,0,398,393,1,0,0,0,398,394,1,0,0,0,398,395,1,0,0,0,398,396,
1,0,0,0,398,397,1,0,0,0,399,87,1,0,0,0,400,402,3,82,41,0,401,400,1,0,0,0,
401,402,1,0,0,0,402,403,1,0,0,0,403,404,5,23,0,0,404,406,3,140,70,0,405,
407,3,66,33,0,406,405,1,0,0,0,406,407,1,0,0,0,407,89,1,0,0,0,408,409,5,22,
0,0,409,410,5,23,0,0,410,411,3,140,70,0,411,412,3,66,33,0,412,91,1,0,0,0,
413,415,3,82,41,0,414,413,1,0,0,0,414,415,1,0,0,0,415,416,1,0,0,0,416,417,
5,24,0,0,417,419,3,140,70,0,418,420,3,94,47,0,419,418,1,0,0,0,419,420,1,
0,0,0,420,422,1,0,0,0,421,423,3,66,33,0,422,421,1,0,0,0,422,423,1,0,0,0,
423,425,1,0,0,0,424,426,3,96,48,0,425,424,1,0,0,0,425,426,1,0,0,0,426,93,
1,0,0,0,427,428,6,47,-1,0,428,430,5,25,0,0,429,431,5,26,0,0,430,429,1,0,
0,0,430,431,1,0,0,0,431,432,1,0,0,0,432,433,3,62,31,0,433,439,1,0,0,0,434,
435,10,1,0,0,435,436,5,26,0,0,436,438,3,62,31,0,437,434,1,0,0,0,438,441,
1,0,0,0,439,437,1,0,0,0,439,440,1,0,0,0,440,95,1,0,0,0,441,439,1,0,0,0,442,
444,5,4,0,0,443,445,3,98,49,0,444,443,1,0,0,0,445,446,1,0,0,0,446,444,1,
0,0,0,446,447,1,0,0,0,447,448,1,0,0,0,448,449,5,5,0,0,449,97,1,0,0,0,450,
452,3,82,41,0,451,450,1,0,0,0,451,452,1,0,0,0,452,453,1,0,0,0,453,455,3,
140,70,0,454,456,3,100,50,0,455,454,1,0,0,0,455,456,1,0,0,0,456,457,1,0,
0,0,457,458,5,8,0,0,458,460,3,60,30,0,459,461,3,66,33,0,460,459,1,0,0,0,
460,461,1,0,0,0,461,99,1,0,0,0,462,464,5,6,0,0,463,465,3,102,51,0,464,463,
1,0,0,0,465,466,1,0,0,0,466,464,1,0,0,0,466,467,1,0,0,0,467,468,1,0,0,0,
468,469,5,7,0,0,469,101,1,0,0,0,470,472,3,82,41,0,471,470,1,0,0,0,471,472,
1,0,0,0,472,473,1,0,0,0,473,474,3,140,70,0,474,475,5,8,0,0,475,477,3,60,
30,0,476,478,3,58,29,0,477,476,1,0,0,0,477,478,1,0,0,0,478,480,1,0,0,0,479,
481,3,66,33,0,480,479,1,0,0,0,480,481,1,0,0,0,481,103,1,0,0,0,482,483,5,
22,0,0,483,484,5,24,0,0,484,486,3,140,70,0,485,487,3,94,47,0,486,485,1,0,
0,0,486,487,1,0,0,0,487,489,1,0,0,0,488,490,3,66,33,0,489,488,1,0,0,0,489,
490,1,0,0,0,490,491,1,0,0,0,491,492,3,96,48,0,492,507,1,0,0,0,493,494,5,
22,0,0,494,495,5,24,0,0,495,497,3,140,70,0,496,498,3,94,47,0,497,496,1,0,
0,0,497,498,1,0,0,0,498,499,1,0,0,0,499,500,3,66,33,0,500,507,1,0,0,0,501,
502,5,22,0,0,502,503,5,24,0,0,503,504,3,140,70,0,504,505,3,94,47,0,505,507,
1,0,0,0,506,482,1,0,0,0,506,493,1,0,0,0,506,501,1,0,0,0,507,105,1,0,0,0,
508,510,3,82,41,0,509,508,1,0,0,0,509,510,1,0,0,0,510,511,1,0,0,0,511,512,
5,27,0,0,512,514,3,140,70,0,513,515,3,66,33,0,514,513,1,0,0,0,514,515,1,
0,0,0,515,517,1,0,0,0,516,518,3,96,48,0,517,516,1,0,0,0,517,518,1,0,0,0,
518,107,1,0,0,0,519,520,5,22,0,0,520,521,5,27,0,0,521,523,3,140,70,0,522,
524,3,66,33,0,523,522,1,0,0,0,523,524,1,0,0,0,524,525,1,0,0,0,525,526,3,
96,48,0,526,533,1,0,0,0,527,528,5,22,0,0,528,529,5,27,0,0,529,530,3,140,
70,0,530,531,3,66,33,0,531,533,1,0,0,0,532,519,1,0,0,0,532,527,1,0,0,0,533,
109,1,0,0,0,534,536,3,82,41,0,535,534,1,0,0,0,535,536,1,0,0,0,536,537,1,
0,0,0,537,538,5,28,0,0,538,540,3,140,70,0,539,541,3,66,33,0,540,539,1,0,
0,0,540,541,1,0,0,0,541,543,1,0,0,0,542,544,3,112,56,0,543,542,1,0,0,0,543,
544,1,0,0,0,544,111,1,0,0,0,545,547,5,18,0,0,546,548,5,29,0,0,547,546,1,
0,0,0,547,548,1,0,0,0,548,549,1,0,0,0,549,554,3,62,31,0,550,551,5,29,0,0,
551,553,3,62,31,0,552,550,1,0,0,0,553,556,1,0,0,0,554,552,1,0,0,0,554,555,
1,0,0,0,555,113,1,0,0,0,556,554,1,0,0,0,557,558,5,22,0,0,558,559,5,28,0,
0,559,561,3,140,70,0,560,562,3,66,33,0,561,560,1,0,0,0,561,562,1,0,0,0,562,
563,1,0,0,0,563,564,3,112,56,0,564,571,1,0,0,0,565,566,5,22,0,0,566,567,
5,28,0,0,567,568,3,140,70,0,568,569,3,66,33,0,569,571,1,0,0,0,570,557,1,
0,0,0,570,565,1,0,0,0,571,115,1,0,0,0,572,574,3,82,41,0,573,572,1,0,0,0,
573,574,1,0,0,0,574,575,1,0,0,0,575,576,5,30,0,0,576,578,3,140,70,0,577,
579,3,66,33,0,578,577,1,0,0,0,578,579,1,0,0,0,579,581,1,0,0,0,580,582,3,
118,59,0,581,580,1,0,0,0,581,582,1,0,0,0,582,117,1,0,0,0,583,585,5,4,0,0,
584,586,3,120,60,0,585,584,1,0,0,0,586,587,1,0,0,0,587,585,1,0,0,0,587,588,
1,0,0,0,588,589,1,0,0,0,589,590,5,5,0,0,590,119,1,0,0,0,591,593,3,82,41,
0,592,591,1,0,0,0,592,593,1,0,0,0,593,594,1,0,0,0,594,596,3,44,22,0,595,
597,3,66,33,0,596,595,1,0,0,0,596,597,1,0,0,0,597,121,1,0,0,0,598,599,5,
22,0,0,599,600,5,30,0,0,600,602,3,140,70,0,601,603,3,66,33,0,602,601,1,0,
0,0,602,603,1,0,0,0,603,604,1,0,0,0,604,605,3,118,59,0,605,612,1,0,0,0,606,
607,5,22,0,0,607,608,5,30,0,0,608,609,3,140,70,0,609,610,3,66,33,0,610,612,
1,0,0,0,611,598,1,0,0,0,611,606,1,0,0,0,612,123,1,0,0,0,613,615,3,82,41,
0,614,613,1,0,0,0,614,615,1,0,0,0,615,616,1,0,0,0,616,617,5,31,0,0,617,619,
3,140,70,0,618,620,3,66,33,0,619,618,1,0,0,0,619,620,1,0,0,0,620,622,1,0,
0,0,621,623,3,126,63,0,622,621,1,0,0,0,622,623,1,0,0,0,623,125,1,0,0,0,624,
626,5,4,0,0,625,627,3,102,51,0,626,625,1,0,0,0,627,628,1,0,0,0,628,626,1,
0,0,0,628,629,1,0,0,0,629,630,1,0,0,0,630,631,5,5,0,0,631,127,1,0,0,0,632,
633,5,22,0,0,633,634,5,31,0,0,634,636,3,140,70,0,635,637,3,66,33,0,636,635,
1,0,0,0,636,637,1,0,0,0,637,638,1,0,0,0,638,639,3,126,63,0,639,646,1,0,0,
0,640,641,5,22,0,0,641,642,5,31,0,0,642,643,3,140,70,0,643,644,3,66,33,0,
644,646,1,0,0,0,645,632,1,0,0,0,645,640,1,0,0,0,646,129,1,0,0,0,647,649,
3,82,41,0,648,647,1,0,0,0,648,649,1,0,0,0,649,650,1,0,0,0,650,651,5,32,0,
0,651,652,5,20,0,0,652,654,3,140,70,0,653,655,3,100,50,0,654,653,1,0,0,0,
654,655,1,0,0,0,655,656,1,0,0,0,656,657,5,11,0,0,657,658,3,132,66,0,658,
131,1,0,0,0,659,664,3,134,67,0,660,661,5,29,0,0,661,663,3,134,67,0,662,660,
1,0,0,0,663,666,1,0,0,0,664,662,1,0,0,0,664,665,1,0,0,0,665,133,1,0,0,0,
666,664,1,0,0,0,667,670,3,136,68,0,668,670,3,138,69,0,669,667,1,0,0,0,669,
668,1,0,0,0,670,135,1,0,0,0,671,672,7,3,0,0,672,137,1,0,0,0,673,674,7,4,
0,0,674,139,1,0,0,0,675,676,5,51,0,0,676,141,1,0,0,0,88,145,150,154,158,
161,164,169,177,184,187,191,194,197,203,217,223,234,237,250,270,274,280,
296,304,311,315,317,328,333,338,342,346,352,363,369,376,390,398,401,406,
414,419,422,425,430,439,446,451,455,460,466,471,477,480,486,489,497,506,
509,514,517,523,532,535,540,543,547,554,561,570,573,578,581,587,592,596,
602,611,614,619,622,628,636,645,648,654,664,669];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GraphQLParser extends antlr4.Parser {

    static grammarFileName = "GraphQL.g4";
    static literalNames = [ null, "'query'", "'mutation'", "'subscription'", 
                            "'{'", "'}'", "'('", "')'", "':'", "'...'", 
                            "'fragment'", "'on'", "'true'", "'false'", "'null'", 
                            "'['", "']'", "'$'", "'='", "'!'", "'@'", "'schema'", 
                            "'extend'", "'scalar'", "'type'", "'implements'", 
                            "'&'", "'interface'", "'union'", "'|'", "'enum'", 
                            "'input'", "'directive'", "'QUERY'", "'MUTATION'", 
                            "'SUBSCRIPTION'", "'FIELD'", "'FRAGMENT_DEFINITION'", 
                            "'FRAGMENT_SPREAD'", "'INLINE_FRAGMENT'", "'SCHEMA'", 
                            "'SCALAR'", "'OBJECT'", "'FIELD_DEFINITION'", 
                            "'ARGUMENT_DEFINITION'", "'INTERFACE'", "'UNION'", 
                            "'ENUM'", "'ENUM_VALUE'", "'INPUT_OBJECT'", 
                            "'INPUT_FIELD_DEFINITION'", null, null, null, 
                            null, null, null, null, null, "','", null, null, 
                            "'\\uEFBBBF'", "'\\uFEFF'", "'\\u0000FEFF'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "NAME", "STRING", "BLOCK_STRING", 
                             "ID", "FLOAT", "INT", "PUNCTUATOR", "WS", "COMMA", 
                             "LineComment", "UNICODE_BOM", "UTF8_BOM", "UTF16_BOM", 
                             "UTF32_BOM" ];
    static ruleNames = [ "document", "definition", "executableDefinition", 
                         "operationDefinition", "operationType", "selectionSet", 
                         "selection", "field", "arguments", "argument", 
                         "alias", "fragmentSpread", "fragmentDefinition", 
                         "fragmentName", "typeCondition", "inlineFragment", 
                         "value", "intValue", "floatValue", "booleanValue", 
                         "stringValue", "nullValue", "enumValue", "listValue", 
                         "objectValue", "objectField", "variable", "variableDefinitions", 
                         "variableDefinition", "defaultValue", "type_", 
                         "namedType", "listType", "directives", "directive", 
                         "typeSystemDefinition", "typeSystemExtension", 
                         "schemaDefinition", "rootOperationTypeDefinition", 
                         "schemaExtension", "operationTypeDefinition", "description", 
                         "typeDefinition", "typeExtension", "scalarTypeDefinition", 
                         "scalarTypeExtension", "objectTypeDefinition", 
                         "implementsInterfaces", "fieldsDefinition", "fieldDefinition", 
                         "argumentsDefinition", "inputValueDefinition", 
                         "objectTypeExtension", "interfaceTypeDefinition", 
                         "interfaceTypeExtension", "unionTypeDefinition", 
                         "unionMemberTypes", "unionTypeExtension", "enumTypeDefinition", 
                         "enumValuesDefinition", "enumValueDefinition", 
                         "enumTypeExtension", "inputObjectTypeDefinition", 
                         "inputFieldsDefinition", "inputObjectTypeExtension", 
                         "directiveDefinition", "directiveLocations", "directiveLocation", 
                         "executableDirectiveLocation", "typeSystemDirectiveLocation", 
                         "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GraphQLParser.ruleNames;
        this.literalNames = GraphQLParser.literalNames;
        this.symbolicNames = GraphQLParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 47:
    	    		return this.implementsInterfaces_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    implementsInterfaces_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GraphQLParser.RULE_document);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 143; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 142;
	            this.definition();
	            this.state = 145; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GraphQLParser.T__0) | (1 << GraphQLParser.T__1) | (1 << GraphQLParser.T__2) | (1 << GraphQLParser.T__3) | (1 << GraphQLParser.T__9) | (1 << GraphQLParser.T__20) | (1 << GraphQLParser.T__21) | (1 << GraphQLParser.T__22) | (1 << GraphQLParser.T__23) | (1 << GraphQLParser.T__26) | (1 << GraphQLParser.T__27) | (1 << GraphQLParser.T__29) | (1 << GraphQLParser.T__30))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GraphQLParser.T__31 - 32)) | (1 << (GraphQLParser.STRING - 32)) | (1 << (GraphQLParser.BLOCK_STRING - 32)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GraphQLParser.RULE_definition);
	    try {
	        this.state = 150;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GraphQLParser.T__0:
	        case GraphQLParser.T__1:
	        case GraphQLParser.T__2:
	        case GraphQLParser.T__3:
	        case GraphQLParser.T__9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 147;
	            this.executableDefinition();
	            break;
	        case GraphQLParser.T__20:
	        case GraphQLParser.T__22:
	        case GraphQLParser.T__23:
	        case GraphQLParser.T__26:
	        case GraphQLParser.T__27:
	        case GraphQLParser.T__29:
	        case GraphQLParser.T__30:
	        case GraphQLParser.T__31:
	        case GraphQLParser.STRING:
	        case GraphQLParser.BLOCK_STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 148;
	            this.typeSystemDefinition();
	            break;
	        case GraphQLParser.T__21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 149;
	            this.typeSystemExtension();
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



	executableDefinition() {
	    let localctx = new ExecutableDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GraphQLParser.RULE_executableDefinition);
	    try {
	        this.state = 154;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GraphQLParser.T__0:
	        case GraphQLParser.T__1:
	        case GraphQLParser.T__2:
	        case GraphQLParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 152;
	            this.operationDefinition();
	            break;
	        case GraphQLParser.T__9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 153;
	            this.fragmentDefinition();
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



	operationDefinition() {
	    let localctx = new OperationDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GraphQLParser.RULE_operationDefinition);
	    var _la = 0; // Token type
	    try {
	        this.state = 169;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GraphQLParser.T__0:
	        case GraphQLParser.T__1:
	        case GraphQLParser.T__2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 156;
	            this.operationType();
	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.NAME) {
	                this.state = 157;
	                this.name();
	            }

	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__5) {
	                this.state = 160;
	                this.variableDefinitions();
	            }

	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__19) {
	                this.state = 163;
	                this.directives();
	            }

	            this.state = 166;
	            this.selectionSet();
	            break;
	        case GraphQLParser.T__3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
	            this.selectionSet();
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



	operationType() {
	    let localctx = new OperationTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GraphQLParser.RULE_operationType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GraphQLParser.T__0) | (1 << GraphQLParser.T__1) | (1 << GraphQLParser.T__2))) !== 0))) {
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



	selectionSet() {
	    let localctx = new SelectionSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GraphQLParser.RULE_selectionSet);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.match(GraphQLParser.T__3);
	        this.state = 175; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 174;
	            this.selection();
	            this.state = 177; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===GraphQLParser.T__8 || _la===GraphQLParser.NAME);
	        this.state = 179;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selection() {
	    let localctx = new SelectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GraphQLParser.RULE_selection);
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 181;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
	            this.fragmentSpread();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 183;
	            this.inlineFragment();
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
	    this.enterRule(localctx, 14, GraphQLParser.RULE_field);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 186;
	            this.alias();

	        }
	        this.state = 189;
	        this.name();
	        this.state = 191;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__5) {
	            this.state = 190;
	            this.arguments();
	        }

	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 193;
	            this.directives();
	        }

	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__3) {
	            this.state = 196;
	            this.selectionSet();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 16, GraphQLParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(GraphQLParser.T__5);
	        this.state = 201; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 200;
	            this.argument();
	            this.state = 203; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===GraphQLParser.NAME);
	        this.state = 205;
	        this.match(GraphQLParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GraphQLParser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.name();
	        this.state = 208;
	        this.match(GraphQLParser.T__7);
	        this.state = 209;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 20, GraphQLParser.RULE_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.name();
	        this.state = 212;
	        this.match(GraphQLParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fragmentSpread() {
	    let localctx = new FragmentSpreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GraphQLParser.RULE_fragmentSpread);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(GraphQLParser.T__8);
	        this.state = 215;
	        this.fragmentName();
	        this.state = 217;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 216;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fragmentDefinition() {
	    let localctx = new FragmentDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GraphQLParser.RULE_fragmentDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(GraphQLParser.T__9);
	        this.state = 220;
	        this.fragmentName();
	        this.state = 221;
	        this.typeCondition();
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 222;
	            this.directives();
	        }

	        this.state = 225;
	        this.selectionSet();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fragmentName() {
	    let localctx = new FragmentNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GraphQLParser.RULE_fragmentName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeCondition() {
	    let localctx = new TypeConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GraphQLParser.RULE_typeCondition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(GraphQLParser.T__10);
	        this.state = 230;
	        this.namedType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inlineFragment() {
	    let localctx = new InlineFragmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GraphQLParser.RULE_inlineFragment);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.match(GraphQLParser.T__8);
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__10) {
	            this.state = 233;
	            this.typeCondition();
	        }

	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 236;
	            this.directives();
	        }

	        this.state = 239;
	        this.selectionSet();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, GraphQLParser.RULE_value);
	    try {
	        this.state = 250;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GraphQLParser.T__16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 241;
	            this.variable();
	            break;
	        case GraphQLParser.INT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 242;
	            this.intValue();
	            break;
	        case GraphQLParser.FLOAT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 243;
	            this.floatValue();
	            break;
	        case GraphQLParser.STRING:
	        case GraphQLParser.BLOCK_STRING:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 244;
	            this.stringValue();
	            break;
	        case GraphQLParser.T__11:
	        case GraphQLParser.T__12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 245;
	            this.booleanValue();
	            break;
	        case GraphQLParser.T__13:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 246;
	            this.nullValue();
	            break;
	        case GraphQLParser.NAME:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 247;
	            this.enumValue();
	            break;
	        case GraphQLParser.T__14:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 248;
	            this.listValue();
	            break;
	        case GraphQLParser.T__3:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 249;
	            this.objectValue();
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



	intValue() {
	    let localctx = new IntValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, GraphQLParser.RULE_intValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(GraphQLParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floatValue() {
	    let localctx = new FloatValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GraphQLParser.RULE_floatValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.match(GraphQLParser.FLOAT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleanValue() {
	    let localctx = new BooleanValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GraphQLParser.RULE_booleanValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        _la = this._input.LA(1);
	        if(!(_la===GraphQLParser.T__11 || _la===GraphQLParser.T__12)) {
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



	stringValue() {
	    let localctx = new StringValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GraphQLParser.RULE_stringValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING)) {
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



	nullValue() {
	    let localctx = new NullValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, GraphQLParser.RULE_nullValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(GraphQLParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValue() {
	    let localctx = new EnumValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, GraphQLParser.RULE_enumValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listValue() {
	    let localctx = new ListValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, GraphQLParser.RULE_listValue);
	    var _la = 0; // Token type
	    try {
	        this.state = 274;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 264;
	            this.match(GraphQLParser.T__14);
	            this.state = 265;
	            this.match(GraphQLParser.T__15);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.match(GraphQLParser.T__14);
	            this.state = 268; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 267;
	                this.value();
	                this.state = 270; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GraphQLParser.T__3) | (1 << GraphQLParser.T__11) | (1 << GraphQLParser.T__12) | (1 << GraphQLParser.T__13) | (1 << GraphQLParser.T__14) | (1 << GraphQLParser.T__16))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (GraphQLParser.NAME - 51)) | (1 << (GraphQLParser.STRING - 51)) | (1 << (GraphQLParser.BLOCK_STRING - 51)) | (1 << (GraphQLParser.FLOAT - 51)) | (1 << (GraphQLParser.INT - 51)))) !== 0));
	            this.state = 272;
	            this.match(GraphQLParser.T__15);
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



	objectValue() {
	    let localctx = new ObjectValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GraphQLParser.RULE_objectValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(GraphQLParser.T__3);
	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GraphQLParser.NAME) {
	            this.state = 277;
	            this.objectField();
	            this.state = 282;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 283;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectField() {
	    let localctx = new ObjectFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, GraphQLParser.RULE_objectField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.name();
	        this.state = 286;
	        this.match(GraphQLParser.T__7);
	        this.state = 287;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 52, GraphQLParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this.match(GraphQLParser.T__16);
	        this.state = 290;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDefinitions() {
	    let localctx = new VariableDefinitionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, GraphQLParser.RULE_variableDefinitions);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(GraphQLParser.T__5);
	        this.state = 294; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 293;
	            this.variableDefinition();
	            this.state = 296; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===GraphQLParser.T__16);
	        this.state = 298;
	        this.match(GraphQLParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDefinition() {
	    let localctx = new VariableDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, GraphQLParser.RULE_variableDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.variable();
	        this.state = 301;
	        this.match(GraphQLParser.T__7);
	        this.state = 302;
	        this.type_();
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__17) {
	            this.state = 303;
	            this.defaultValue();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defaultValue() {
	    let localctx = new DefaultValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, GraphQLParser.RULE_defaultValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(GraphQLParser.T__17);
	        this.state = 307;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 60, GraphQLParser.RULE_type_);
	    var _la = 0; // Token type
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GraphQLParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 309;
	            this.namedType();
	            this.state = 311;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__18) {
	                this.state = 310;
	                this.match(GraphQLParser.T__18);
	            }

	            break;
	        case GraphQLParser.T__14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 313;
	            this.listType();
	            this.state = 315;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__18) {
	                this.state = 314;
	                this.match(GraphQLParser.T__18);
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



	namedType() {
	    let localctx = new NamedTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, GraphQLParser.RULE_namedType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listType() {
	    let localctx = new ListTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, GraphQLParser.RULE_listType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(GraphQLParser.T__14);
	        this.state = 322;
	        this.type_();
	        this.state = 323;
	        this.match(GraphQLParser.T__15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directives() {
	    let localctx = new DirectivesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, GraphQLParser.RULE_directives);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 325;
	            this.directive();
	            this.state = 328; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===GraphQLParser.T__19);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, GraphQLParser.RULE_directive);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.match(GraphQLParser.T__19);
	        this.state = 331;
	        this.name();
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__5) {
	            this.state = 332;
	            this.arguments();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeSystemDefinition() {
	    let localctx = new TypeSystemDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, GraphQLParser.RULE_typeSystemDefinition);
	    try {
	        this.state = 338;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 335;
	            this.schemaDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 336;
	            this.typeDefinition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 337;
	            this.directiveDefinition();
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



	typeSystemExtension() {
	    let localctx = new TypeSystemExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, GraphQLParser.RULE_typeSystemExtension);
	    try {
	        this.state = 342;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 340;
	            this.schemaExtension();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 341;
	            this.typeExtension();
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



	schemaDefinition() {
	    let localctx = new SchemaDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, GraphQLParser.RULE_schemaDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(GraphQLParser.T__20);
	        this.state = 346;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 345;
	            this.directives();
	        }

	        this.state = 348;
	        this.match(GraphQLParser.T__3);
	        this.state = 350; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 349;
	            this.rootOperationTypeDefinition();
	            this.state = 352; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GraphQLParser.T__0) | (1 << GraphQLParser.T__1) | (1 << GraphQLParser.T__2))) !== 0));
	        this.state = 354;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rootOperationTypeDefinition() {
	    let localctx = new RootOperationTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, GraphQLParser.RULE_rootOperationTypeDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.operationType();
	        this.state = 357;
	        this.match(GraphQLParser.T__7);
	        this.state = 358;
	        this.namedType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	schemaExtension() {
	    let localctx = new SchemaExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, GraphQLParser.RULE_schemaExtension);
	    var _la = 0; // Token type
	    try {
	        this.state = 376;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 360;
	            this.match(GraphQLParser.T__21);
	            this.state = 361;
	            this.match(GraphQLParser.T__20);
	            this.state = 363;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__19) {
	                this.state = 362;
	                this.directives();
	            }

	            this.state = 365;
	            this.match(GraphQLParser.T__3);
	            this.state = 367; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 366;
	                this.operationTypeDefinition();
	                this.state = 369; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GraphQLParser.T__0) | (1 << GraphQLParser.T__1) | (1 << GraphQLParser.T__2))) !== 0));
	            this.state = 371;
	            this.match(GraphQLParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 373;
	            this.match(GraphQLParser.T__21);
	            this.state = 374;
	            this.match(GraphQLParser.T__20);
	            this.state = 375;
	            this.directives();
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



	operationTypeDefinition() {
	    let localctx = new OperationTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, GraphQLParser.RULE_operationTypeDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 378;
	        this.operationType();
	        this.state = 379;
	        this.match(GraphQLParser.T__7);
	        this.state = 380;
	        this.namedType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 82, GraphQLParser.RULE_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.stringValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 84, GraphQLParser.RULE_typeDefinition);
	    try {
	        this.state = 390;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 384;
	            this.scalarTypeDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 385;
	            this.objectTypeDefinition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 386;
	            this.interfaceTypeDefinition();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 387;
	            this.unionTypeDefinition();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 388;
	            this.enumTypeDefinition();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 389;
	            this.inputObjectTypeDefinition();
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



	typeExtension() {
	    let localctx = new TypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, GraphQLParser.RULE_typeExtension);
	    try {
	        this.state = 398;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 392;
	            this.scalarTypeExtension();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 393;
	            this.objectTypeExtension();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 394;
	            this.interfaceTypeExtension();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 395;
	            this.unionTypeExtension();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 396;
	            this.enumTypeExtension();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 397;
	            this.inputObjectTypeExtension();
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



	scalarTypeDefinition() {
	    let localctx = new ScalarTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, GraphQLParser.RULE_scalarTypeDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 400;
	            this.description();
	        }

	        this.state = 403;
	        this.match(GraphQLParser.T__22);
	        this.state = 404;
	        this.name();
	        this.state = 406;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 405;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scalarTypeExtension() {
	    let localctx = new ScalarTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, GraphQLParser.RULE_scalarTypeExtension);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.match(GraphQLParser.T__21);
	        this.state = 409;
	        this.match(GraphQLParser.T__22);
	        this.state = 410;
	        this.name();
	        this.state = 411;
	        this.directives();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectTypeDefinition() {
	    let localctx = new ObjectTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, GraphQLParser.RULE_objectTypeDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 413;
	            this.description();
	        }

	        this.state = 416;
	        this.match(GraphQLParser.T__23);
	        this.state = 417;
	        this.name();
	        this.state = 419;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__24) {
	            this.state = 418;
	            this.implementsInterfaces(0);
	        }

	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 421;
	            this.directives();
	        }

	        this.state = 425;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        if(la_===1) {
	            this.state = 424;
	            this.fieldsDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	implementsInterfaces(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ImplementsInterfacesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 94;
	    this.enterRecursionRule(localctx, 94, GraphQLParser.RULE_implementsInterfaces, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(GraphQLParser.T__24);
	        this.state = 430;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__25) {
	            this.state = 429;
	            this.match(GraphQLParser.T__25);
	        }

	        this.state = 432;
	        this.namedType();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 439;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ImplementsInterfacesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, GraphQLParser.RULE_implementsInterfaces);
	                this.state = 434;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 435;
	                this.match(GraphQLParser.T__25);
	                this.state = 436;
	                this.namedType(); 
	            }
	            this.state = 441;
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



	fieldsDefinition() {
	    let localctx = new FieldsDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, GraphQLParser.RULE_fieldsDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.match(GraphQLParser.T__3);
	        this.state = 444; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 443;
	            this.fieldDefinition();
	            this.state = 446; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (GraphQLParser.NAME - 51)) | (1 << (GraphQLParser.STRING - 51)) | (1 << (GraphQLParser.BLOCK_STRING - 51)))) !== 0));
	        this.state = 448;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldDefinition() {
	    let localctx = new FieldDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, GraphQLParser.RULE_fieldDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 451;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 450;
	            this.description();
	        }

	        this.state = 453;
	        this.name();
	        this.state = 455;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__5) {
	            this.state = 454;
	            this.argumentsDefinition();
	        }

	        this.state = 457;
	        this.match(GraphQLParser.T__7);
	        this.state = 458;
	        this.type_();
	        this.state = 460;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 459;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentsDefinition() {
	    let localctx = new ArgumentsDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, GraphQLParser.RULE_argumentsDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 462;
	        this.match(GraphQLParser.T__5);
	        this.state = 464; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 463;
	            this.inputValueDefinition();
	            this.state = 466; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (GraphQLParser.NAME - 51)) | (1 << (GraphQLParser.STRING - 51)) | (1 << (GraphQLParser.BLOCK_STRING - 51)))) !== 0));
	        this.state = 468;
	        this.match(GraphQLParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inputValueDefinition() {
	    let localctx = new InputValueDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, GraphQLParser.RULE_inputValueDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 471;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 470;
	            this.description();
	        }

	        this.state = 473;
	        this.name();
	        this.state = 474;
	        this.match(GraphQLParser.T__7);
	        this.state = 475;
	        this.type_();
	        this.state = 477;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__17) {
	            this.state = 476;
	            this.defaultValue();
	        }

	        this.state = 480;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 479;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectTypeExtension() {
	    let localctx = new ObjectTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, GraphQLParser.RULE_objectTypeExtension);
	    var _la = 0; // Token type
	    try {
	        this.state = 506;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 482;
	            this.match(GraphQLParser.T__21);
	            this.state = 483;
	            this.match(GraphQLParser.T__23);
	            this.state = 484;
	            this.name();
	            this.state = 486;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__24) {
	                this.state = 485;
	                this.implementsInterfaces(0);
	            }

	            this.state = 489;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__19) {
	                this.state = 488;
	                this.directives();
	            }

	            this.state = 491;
	            this.fieldsDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 493;
	            this.match(GraphQLParser.T__21);
	            this.state = 494;
	            this.match(GraphQLParser.T__23);
	            this.state = 495;
	            this.name();
	            this.state = 497;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__24) {
	                this.state = 496;
	                this.implementsInterfaces(0);
	            }

	            this.state = 499;
	            this.directives();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 501;
	            this.match(GraphQLParser.T__21);
	            this.state = 502;
	            this.match(GraphQLParser.T__23);
	            this.state = 503;
	            this.name();
	            this.state = 504;
	            this.implementsInterfaces(0);
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



	interfaceTypeDefinition() {
	    let localctx = new InterfaceTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, GraphQLParser.RULE_interfaceTypeDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 509;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 508;
	            this.description();
	        }

	        this.state = 511;
	        this.match(GraphQLParser.T__26);
	        this.state = 512;
	        this.name();
	        this.state = 514;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 513;
	            this.directives();
	        }

	        this.state = 517;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        if(la_===1) {
	            this.state = 516;
	            this.fieldsDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceTypeExtension() {
	    let localctx = new InterfaceTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, GraphQLParser.RULE_interfaceTypeExtension);
	    var _la = 0; // Token type
	    try {
	        this.state = 532;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 519;
	            this.match(GraphQLParser.T__21);
	            this.state = 520;
	            this.match(GraphQLParser.T__26);
	            this.state = 521;
	            this.name();
	            this.state = 523;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__19) {
	                this.state = 522;
	                this.directives();
	            }

	            this.state = 525;
	            this.fieldsDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 527;
	            this.match(GraphQLParser.T__21);
	            this.state = 528;
	            this.match(GraphQLParser.T__26);
	            this.state = 529;
	            this.name();
	            this.state = 530;
	            this.directives();
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



	unionTypeDefinition() {
	    let localctx = new UnionTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, GraphQLParser.RULE_unionTypeDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 535;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 534;
	            this.description();
	        }

	        this.state = 537;
	        this.match(GraphQLParser.T__27);
	        this.state = 538;
	        this.name();
	        this.state = 540;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 539;
	            this.directives();
	        }

	        this.state = 543;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__17) {
	            this.state = 542;
	            this.unionMemberTypes();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unionMemberTypes() {
	    let localctx = new UnionMemberTypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, GraphQLParser.RULE_unionMemberTypes);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 545;
	        this.match(GraphQLParser.T__17);
	        this.state = 547;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__28) {
	            this.state = 546;
	            this.match(GraphQLParser.T__28);
	        }

	        this.state = 549;
	        this.namedType();
	        this.state = 554;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GraphQLParser.T__28) {
	            this.state = 550;
	            this.match(GraphQLParser.T__28);
	            this.state = 551;
	            this.namedType();
	            this.state = 556;
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



	unionTypeExtension() {
	    let localctx = new UnionTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, GraphQLParser.RULE_unionTypeExtension);
	    var _la = 0; // Token type
	    try {
	        this.state = 570;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 557;
	            this.match(GraphQLParser.T__21);
	            this.state = 558;
	            this.match(GraphQLParser.T__27);
	            this.state = 559;
	            this.name();
	            this.state = 561;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__19) {
	                this.state = 560;
	                this.directives();
	            }

	            this.state = 563;
	            this.unionMemberTypes();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 565;
	            this.match(GraphQLParser.T__21);
	            this.state = 566;
	            this.match(GraphQLParser.T__27);
	            this.state = 567;
	            this.name();
	            this.state = 568;
	            this.directives();
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



	enumTypeDefinition() {
	    let localctx = new EnumTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, GraphQLParser.RULE_enumTypeDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 573;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 572;
	            this.description();
	        }

	        this.state = 575;
	        this.match(GraphQLParser.T__29);
	        this.state = 576;
	        this.name();
	        this.state = 578;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 577;
	            this.directives();
	        }

	        this.state = 581;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	        if(la_===1) {
	            this.state = 580;
	            this.enumValuesDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValuesDefinition() {
	    let localctx = new EnumValuesDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, GraphQLParser.RULE_enumValuesDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.match(GraphQLParser.T__3);
	        this.state = 585; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 584;
	            this.enumValueDefinition();
	            this.state = 587; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (GraphQLParser.NAME - 51)) | (1 << (GraphQLParser.STRING - 51)) | (1 << (GraphQLParser.BLOCK_STRING - 51)))) !== 0));
	        this.state = 589;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValueDefinition() {
	    let localctx = new EnumValueDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, GraphQLParser.RULE_enumValueDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 592;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 591;
	            this.description();
	        }

	        this.state = 594;
	        this.enumValue();
	        this.state = 596;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 595;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumTypeExtension() {
	    let localctx = new EnumTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, GraphQLParser.RULE_enumTypeExtension);
	    var _la = 0; // Token type
	    try {
	        this.state = 611;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,77,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 598;
	            this.match(GraphQLParser.T__21);
	            this.state = 599;
	            this.match(GraphQLParser.T__29);
	            this.state = 600;
	            this.name();
	            this.state = 602;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__19) {
	                this.state = 601;
	                this.directives();
	            }

	            this.state = 604;
	            this.enumValuesDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 606;
	            this.match(GraphQLParser.T__21);
	            this.state = 607;
	            this.match(GraphQLParser.T__29);
	            this.state = 608;
	            this.name();
	            this.state = 609;
	            this.directives();
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



	inputObjectTypeDefinition() {
	    let localctx = new InputObjectTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, GraphQLParser.RULE_inputObjectTypeDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 614;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 613;
	            this.description();
	        }

	        this.state = 616;
	        this.match(GraphQLParser.T__30);
	        this.state = 617;
	        this.name();
	        this.state = 619;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__19) {
	            this.state = 618;
	            this.directives();
	        }

	        this.state = 622;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,80,this._ctx);
	        if(la_===1) {
	            this.state = 621;
	            this.inputFieldsDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inputFieldsDefinition() {
	    let localctx = new InputFieldsDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, GraphQLParser.RULE_inputFieldsDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 624;
	        this.match(GraphQLParser.T__3);
	        this.state = 626; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 625;
	            this.inputValueDefinition();
	            this.state = 628; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (GraphQLParser.NAME - 51)) | (1 << (GraphQLParser.STRING - 51)) | (1 << (GraphQLParser.BLOCK_STRING - 51)))) !== 0));
	        this.state = 630;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inputObjectTypeExtension() {
	    let localctx = new InputObjectTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, GraphQLParser.RULE_inputObjectTypeExtension);
	    var _la = 0; // Token type
	    try {
	        this.state = 645;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,83,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 632;
	            this.match(GraphQLParser.T__21);
	            this.state = 633;
	            this.match(GraphQLParser.T__30);
	            this.state = 634;
	            this.name();
	            this.state = 636;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GraphQLParser.T__19) {
	                this.state = 635;
	                this.directives();
	            }

	            this.state = 638;
	            this.inputFieldsDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 640;
	            this.match(GraphQLParser.T__21);
	            this.state = 641;
	            this.match(GraphQLParser.T__30);
	            this.state = 642;
	            this.name();
	            this.state = 643;
	            this.directives();
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



	directiveDefinition() {
	    let localctx = new DirectiveDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, GraphQLParser.RULE_directiveDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 648;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.STRING || _la===GraphQLParser.BLOCK_STRING) {
	            this.state = 647;
	            this.description();
	        }

	        this.state = 650;
	        this.match(GraphQLParser.T__31);
	        this.state = 651;
	        this.match(GraphQLParser.T__19);
	        this.state = 652;
	        this.name();
	        this.state = 654;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GraphQLParser.T__5) {
	            this.state = 653;
	            this.argumentsDefinition();
	        }

	        this.state = 656;
	        this.match(GraphQLParser.T__10);
	        this.state = 657;
	        this.directiveLocations();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directiveLocations() {
	    let localctx = new DirectiveLocationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, GraphQLParser.RULE_directiveLocations);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 659;
	        this.directiveLocation();
	        this.state = 664;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GraphQLParser.T__28) {
	            this.state = 660;
	            this.match(GraphQLParser.T__28);
	            this.state = 661;
	            this.directiveLocation();
	            this.state = 666;
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



	directiveLocation() {
	    let localctx = new DirectiveLocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, GraphQLParser.RULE_directiveLocation);
	    try {
	        this.state = 669;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GraphQLParser.T__32:
	        case GraphQLParser.T__33:
	        case GraphQLParser.T__34:
	        case GraphQLParser.T__35:
	        case GraphQLParser.T__36:
	        case GraphQLParser.T__37:
	        case GraphQLParser.T__38:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 667;
	            this.executableDirectiveLocation();
	            break;
	        case GraphQLParser.T__39:
	        case GraphQLParser.T__40:
	        case GraphQLParser.T__41:
	        case GraphQLParser.T__42:
	        case GraphQLParser.T__43:
	        case GraphQLParser.T__44:
	        case GraphQLParser.T__45:
	        case GraphQLParser.T__46:
	        case GraphQLParser.T__47:
	        case GraphQLParser.T__48:
	        case GraphQLParser.T__49:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 668;
	            this.typeSystemDirectiveLocation();
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



	executableDirectiveLocation() {
	    let localctx = new ExecutableDirectiveLocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, GraphQLParser.RULE_executableDirectiveLocation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 671;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (GraphQLParser.T__32 - 33)) | (1 << (GraphQLParser.T__33 - 33)) | (1 << (GraphQLParser.T__34 - 33)) | (1 << (GraphQLParser.T__35 - 33)) | (1 << (GraphQLParser.T__36 - 33)) | (1 << (GraphQLParser.T__37 - 33)) | (1 << (GraphQLParser.T__38 - 33)))) !== 0))) {
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



	typeSystemDirectiveLocation() {
	    let localctx = new TypeSystemDirectiveLocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, GraphQLParser.RULE_typeSystemDirectiveLocation);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 673;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (GraphQLParser.T__39 - 40)) | (1 << (GraphQLParser.T__40 - 40)) | (1 << (GraphQLParser.T__41 - 40)) | (1 << (GraphQLParser.T__42 - 40)) | (1 << (GraphQLParser.T__43 - 40)) | (1 << (GraphQLParser.T__44 - 40)) | (1 << (GraphQLParser.T__45 - 40)) | (1 << (GraphQLParser.T__46 - 40)) | (1 << (GraphQLParser.T__47 - 40)) | (1 << (GraphQLParser.T__48 - 40)) | (1 << (GraphQLParser.T__49 - 40)))) !== 0))) {
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, GraphQLParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 675;
	        this.match(GraphQLParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

GraphQLParser.EOF = antlr4.Token.EOF;
GraphQLParser.T__0 = 1;
GraphQLParser.T__1 = 2;
GraphQLParser.T__2 = 3;
GraphQLParser.T__3 = 4;
GraphQLParser.T__4 = 5;
GraphQLParser.T__5 = 6;
GraphQLParser.T__6 = 7;
GraphQLParser.T__7 = 8;
GraphQLParser.T__8 = 9;
GraphQLParser.T__9 = 10;
GraphQLParser.T__10 = 11;
GraphQLParser.T__11 = 12;
GraphQLParser.T__12 = 13;
GraphQLParser.T__13 = 14;
GraphQLParser.T__14 = 15;
GraphQLParser.T__15 = 16;
GraphQLParser.T__16 = 17;
GraphQLParser.T__17 = 18;
GraphQLParser.T__18 = 19;
GraphQLParser.T__19 = 20;
GraphQLParser.T__20 = 21;
GraphQLParser.T__21 = 22;
GraphQLParser.T__22 = 23;
GraphQLParser.T__23 = 24;
GraphQLParser.T__24 = 25;
GraphQLParser.T__25 = 26;
GraphQLParser.T__26 = 27;
GraphQLParser.T__27 = 28;
GraphQLParser.T__28 = 29;
GraphQLParser.T__29 = 30;
GraphQLParser.T__30 = 31;
GraphQLParser.T__31 = 32;
GraphQLParser.T__32 = 33;
GraphQLParser.T__33 = 34;
GraphQLParser.T__34 = 35;
GraphQLParser.T__35 = 36;
GraphQLParser.T__36 = 37;
GraphQLParser.T__37 = 38;
GraphQLParser.T__38 = 39;
GraphQLParser.T__39 = 40;
GraphQLParser.T__40 = 41;
GraphQLParser.T__41 = 42;
GraphQLParser.T__42 = 43;
GraphQLParser.T__43 = 44;
GraphQLParser.T__44 = 45;
GraphQLParser.T__45 = 46;
GraphQLParser.T__46 = 47;
GraphQLParser.T__47 = 48;
GraphQLParser.T__48 = 49;
GraphQLParser.T__49 = 50;
GraphQLParser.NAME = 51;
GraphQLParser.STRING = 52;
GraphQLParser.BLOCK_STRING = 53;
GraphQLParser.ID = 54;
GraphQLParser.FLOAT = 55;
GraphQLParser.INT = 56;
GraphQLParser.PUNCTUATOR = 57;
GraphQLParser.WS = 58;
GraphQLParser.COMMA = 59;
GraphQLParser.LineComment = 60;
GraphQLParser.UNICODE_BOM = 61;
GraphQLParser.UTF8_BOM = 62;
GraphQLParser.UTF16_BOM = 63;
GraphQLParser.UTF32_BOM = 64;

GraphQLParser.RULE_document = 0;
GraphQLParser.RULE_definition = 1;
GraphQLParser.RULE_executableDefinition = 2;
GraphQLParser.RULE_operationDefinition = 3;
GraphQLParser.RULE_operationType = 4;
GraphQLParser.RULE_selectionSet = 5;
GraphQLParser.RULE_selection = 6;
GraphQLParser.RULE_field = 7;
GraphQLParser.RULE_arguments = 8;
GraphQLParser.RULE_argument = 9;
GraphQLParser.RULE_alias = 10;
GraphQLParser.RULE_fragmentSpread = 11;
GraphQLParser.RULE_fragmentDefinition = 12;
GraphQLParser.RULE_fragmentName = 13;
GraphQLParser.RULE_typeCondition = 14;
GraphQLParser.RULE_inlineFragment = 15;
GraphQLParser.RULE_value = 16;
GraphQLParser.RULE_intValue = 17;
GraphQLParser.RULE_floatValue = 18;
GraphQLParser.RULE_booleanValue = 19;
GraphQLParser.RULE_stringValue = 20;
GraphQLParser.RULE_nullValue = 21;
GraphQLParser.RULE_enumValue = 22;
GraphQLParser.RULE_listValue = 23;
GraphQLParser.RULE_objectValue = 24;
GraphQLParser.RULE_objectField = 25;
GraphQLParser.RULE_variable = 26;
GraphQLParser.RULE_variableDefinitions = 27;
GraphQLParser.RULE_variableDefinition = 28;
GraphQLParser.RULE_defaultValue = 29;
GraphQLParser.RULE_type_ = 30;
GraphQLParser.RULE_namedType = 31;
GraphQLParser.RULE_listType = 32;
GraphQLParser.RULE_directives = 33;
GraphQLParser.RULE_directive = 34;
GraphQLParser.RULE_typeSystemDefinition = 35;
GraphQLParser.RULE_typeSystemExtension = 36;
GraphQLParser.RULE_schemaDefinition = 37;
GraphQLParser.RULE_rootOperationTypeDefinition = 38;
GraphQLParser.RULE_schemaExtension = 39;
GraphQLParser.RULE_operationTypeDefinition = 40;
GraphQLParser.RULE_description = 41;
GraphQLParser.RULE_typeDefinition = 42;
GraphQLParser.RULE_typeExtension = 43;
GraphQLParser.RULE_scalarTypeDefinition = 44;
GraphQLParser.RULE_scalarTypeExtension = 45;
GraphQLParser.RULE_objectTypeDefinition = 46;
GraphQLParser.RULE_implementsInterfaces = 47;
GraphQLParser.RULE_fieldsDefinition = 48;
GraphQLParser.RULE_fieldDefinition = 49;
GraphQLParser.RULE_argumentsDefinition = 50;
GraphQLParser.RULE_inputValueDefinition = 51;
GraphQLParser.RULE_objectTypeExtension = 52;
GraphQLParser.RULE_interfaceTypeDefinition = 53;
GraphQLParser.RULE_interfaceTypeExtension = 54;
GraphQLParser.RULE_unionTypeDefinition = 55;
GraphQLParser.RULE_unionMemberTypes = 56;
GraphQLParser.RULE_unionTypeExtension = 57;
GraphQLParser.RULE_enumTypeDefinition = 58;
GraphQLParser.RULE_enumValuesDefinition = 59;
GraphQLParser.RULE_enumValueDefinition = 60;
GraphQLParser.RULE_enumTypeExtension = 61;
GraphQLParser.RULE_inputObjectTypeDefinition = 62;
GraphQLParser.RULE_inputFieldsDefinition = 63;
GraphQLParser.RULE_inputObjectTypeExtension = 64;
GraphQLParser.RULE_directiveDefinition = 65;
GraphQLParser.RULE_directiveLocations = 66;
GraphQLParser.RULE_directiveLocation = 67;
GraphQLParser.RULE_executableDirectiveLocation = 68;
GraphQLParser.RULE_typeSystemDirectiveLocation = 69;
GraphQLParser.RULE_name = 70;

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
        this.ruleIndex = GraphQLParser.RULE_document;
    }

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDocument(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_definition;
    }

	executableDefinition() {
	    return this.getTypedRuleContext(ExecutableDefinitionContext,0);
	};

	typeSystemDefinition() {
	    return this.getTypedRuleContext(TypeSystemDefinitionContext,0);
	};

	typeSystemExtension() {
	    return this.getTypedRuleContext(TypeSystemExtensionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class ExecutableDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_executableDefinition;
    }

	operationDefinition() {
	    return this.getTypedRuleContext(OperationDefinitionContext,0);
	};

	fragmentDefinition() {
	    return this.getTypedRuleContext(FragmentDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterExecutableDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitExecutableDefinition(this);
		}
	}


}



class OperationDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_operationDefinition;
    }

	operationType() {
	    return this.getTypedRuleContext(OperationTypeContext,0);
	};

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	variableDefinitions() {
	    return this.getTypedRuleContext(VariableDefinitionsContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterOperationDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitOperationDefinition(this);
		}
	}


}



class OperationTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_operationType;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterOperationType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitOperationType(this);
		}
	}


}



class SelectionSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_selectionSet;
    }

	selection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectionContext);
	    } else {
	        return this.getTypedRuleContext(SelectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSelectionSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSelectionSet(this);
		}
	}


}



class SelectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_selection;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	fragmentSpread() {
	    return this.getTypedRuleContext(FragmentSpreadContext,0);
	};

	inlineFragment() {
	    return this.getTypedRuleContext(InlineFragmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSelection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSelection(this);
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
        this.ruleIndex = GraphQLParser.RULE_field;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitField(this);
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
        this.ruleIndex = GraphQLParser.RULE_arguments;
    }

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitArguments(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_argument;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitArgument(this);
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
        this.ruleIndex = GraphQLParser.RULE_alias;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterAlias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitAlias(this);
		}
	}


}



class FragmentSpreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fragmentSpread;
    }

	fragmentName() {
	    return this.getTypedRuleContext(FragmentNameContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFragmentSpread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFragmentSpread(this);
		}
	}


}



class FragmentDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fragmentDefinition;
    }

	fragmentName() {
	    return this.getTypedRuleContext(FragmentNameContext,0);
	};

	typeCondition() {
	    return this.getTypedRuleContext(TypeConditionContext,0);
	};

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFragmentDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFragmentDefinition(this);
		}
	}


}



class FragmentNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fragmentName;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFragmentName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFragmentName(this);
		}
	}


}



class TypeConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeCondition;
    }

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeCondition(this);
		}
	}


}



class InlineFragmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inlineFragment;
    }

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	typeCondition() {
	    return this.getTypedRuleContext(TypeConditionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInlineFragment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInlineFragment(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_value;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	intValue() {
	    return this.getTypedRuleContext(IntValueContext,0);
	};

	floatValue() {
	    return this.getTypedRuleContext(FloatValueContext,0);
	};

	stringValue() {
	    return this.getTypedRuleContext(StringValueContext,0);
	};

	booleanValue() {
	    return this.getTypedRuleContext(BooleanValueContext,0);
	};

	nullValue() {
	    return this.getTypedRuleContext(NullValueContext,0);
	};

	enumValue() {
	    return this.getTypedRuleContext(EnumValueContext,0);
	};

	listValue() {
	    return this.getTypedRuleContext(ListValueContext,0);
	};

	objectValue() {
	    return this.getTypedRuleContext(ObjectValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitValue(this);
		}
	}


}



class IntValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_intValue;
    }

	INT() {
	    return this.getToken(GraphQLParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterIntValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitIntValue(this);
		}
	}


}



class FloatValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_floatValue;
    }

	FLOAT() {
	    return this.getToken(GraphQLParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFloatValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFloatValue(this);
		}
	}


}



class BooleanValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_booleanValue;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterBooleanValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitBooleanValue(this);
		}
	}


}



class StringValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_stringValue;
    }

	STRING() {
	    return this.getToken(GraphQLParser.STRING, 0);
	};

	BLOCK_STRING() {
	    return this.getToken(GraphQLParser.BLOCK_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterStringValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitStringValue(this);
		}
	}


}



class NullValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_nullValue;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterNullValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitNullValue(this);
		}
	}


}



class EnumValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumValue;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumValue(this);
		}
	}


}



class ListValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_listValue;
    }

	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterListValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitListValue(this);
		}
	}


}



class ObjectValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectValue;
    }

	objectField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectFieldContext);
	    } else {
	        return this.getTypedRuleContext(ObjectFieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectValue(this);
		}
	}


}



class ObjectFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectField;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectField(this);
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
        this.ruleIndex = GraphQLParser.RULE_variable;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitVariable(this);
		}
	}


}



class VariableDefinitionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_variableDefinitions;
    }

	variableDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(VariableDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterVariableDefinitions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitVariableDefinitions(this);
		}
	}


}



class VariableDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_variableDefinition;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	defaultValue() {
	    return this.getTypedRuleContext(DefaultValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterVariableDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitVariableDefinition(this);
		}
	}


}



class DefaultValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_defaultValue;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDefaultValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDefaultValue(this);
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
        this.ruleIndex = GraphQLParser.RULE_type_;
    }

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	listType() {
	    return this.getTypedRuleContext(ListTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitType_(this);
		}
	}


}



class NamedTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_namedType;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterNamedType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitNamedType(this);
		}
	}


}



class ListTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_listType;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterListType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitListType(this);
		}
	}


}



class DirectivesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directives;
    }

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectives(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directive;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirective(this);
		}
	}


}



class TypeSystemDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemDefinition;
    }

	schemaDefinition() {
	    return this.getTypedRuleContext(SchemaDefinitionContext,0);
	};

	typeDefinition() {
	    return this.getTypedRuleContext(TypeDefinitionContext,0);
	};

	directiveDefinition() {
	    return this.getTypedRuleContext(DirectiveDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemDefinition(this);
		}
	}


}



class TypeSystemExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemExtension;
    }

	schemaExtension() {
	    return this.getTypedRuleContext(SchemaExtensionContext,0);
	};

	typeExtension() {
	    return this.getTypedRuleContext(TypeExtensionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemExtension(this);
		}
	}


}



class SchemaDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_schemaDefinition;
    }

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	rootOperationTypeDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RootOperationTypeDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(RootOperationTypeDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSchemaDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSchemaDefinition(this);
		}
	}


}



class RootOperationTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_rootOperationTypeDefinition;
    }

	operationType() {
	    return this.getTypedRuleContext(OperationTypeContext,0);
	};

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterRootOperationTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitRootOperationTypeDefinition(this);
		}
	}


}



class SchemaExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_schemaExtension;
    }

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	operationTypeDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperationTypeDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(OperationTypeDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSchemaExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSchemaExtension(this);
		}
	}


}



class OperationTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_operationTypeDefinition;
    }

	operationType() {
	    return this.getTypedRuleContext(OperationTypeContext,0);
	};

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterOperationTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitOperationTypeDefinition(this);
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
        this.ruleIndex = GraphQLParser.RULE_description;
    }

	stringValue() {
	    return this.getTypedRuleContext(StringValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDescription(this);
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
        this.ruleIndex = GraphQLParser.RULE_typeDefinition;
    }

	scalarTypeDefinition() {
	    return this.getTypedRuleContext(ScalarTypeDefinitionContext,0);
	};

	objectTypeDefinition() {
	    return this.getTypedRuleContext(ObjectTypeDefinitionContext,0);
	};

	interfaceTypeDefinition() {
	    return this.getTypedRuleContext(InterfaceTypeDefinitionContext,0);
	};

	unionTypeDefinition() {
	    return this.getTypedRuleContext(UnionTypeDefinitionContext,0);
	};

	enumTypeDefinition() {
	    return this.getTypedRuleContext(EnumTypeDefinitionContext,0);
	};

	inputObjectTypeDefinition() {
	    return this.getTypedRuleContext(InputObjectTypeDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeDefinition(this);
		}
	}


}



class TypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeExtension;
    }

	scalarTypeExtension() {
	    return this.getTypedRuleContext(ScalarTypeExtensionContext,0);
	};

	objectTypeExtension() {
	    return this.getTypedRuleContext(ObjectTypeExtensionContext,0);
	};

	interfaceTypeExtension() {
	    return this.getTypedRuleContext(InterfaceTypeExtensionContext,0);
	};

	unionTypeExtension() {
	    return this.getTypedRuleContext(UnionTypeExtensionContext,0);
	};

	enumTypeExtension() {
	    return this.getTypedRuleContext(EnumTypeExtensionContext,0);
	};

	inputObjectTypeExtension() {
	    return this.getTypedRuleContext(InputObjectTypeExtensionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeExtension(this);
		}
	}


}



class ScalarTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_scalarTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterScalarTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitScalarTypeDefinition(this);
		}
	}


}



class ScalarTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_scalarTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterScalarTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitScalarTypeExtension(this);
		}
	}


}



class ObjectTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectTypeDefinition(this);
		}
	}


}



class ImplementsInterfacesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_implementsInterfaces;
    }

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterImplementsInterfaces(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitImplementsInterfaces(this);
		}
	}


}



class FieldsDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fieldsDefinition;
    }

	fieldDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(FieldDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFieldsDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFieldsDefinition(this);
		}
	}


}



class FieldDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fieldDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	argumentsDefinition() {
	    return this.getTypedRuleContext(ArgumentsDefinitionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFieldDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFieldDefinition(this);
		}
	}


}



class ArgumentsDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_argumentsDefinition;
    }

	inputValueDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InputValueDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(InputValueDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterArgumentsDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitArgumentsDefinition(this);
		}
	}


}



class InputValueDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputValueDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	defaultValue() {
	    return this.getTypedRuleContext(DefaultValueContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputValueDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputValueDefinition(this);
		}
	}


}



class ObjectTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectTypeExtension(this);
		}
	}


}



class InterfaceTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_interfaceTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInterfaceTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInterfaceTypeDefinition(this);
		}
	}


}



class InterfaceTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_interfaceTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInterfaceTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInterfaceTypeExtension(this);
		}
	}


}



class UnionTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_unionTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	unionMemberTypes() {
	    return this.getTypedRuleContext(UnionMemberTypesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterUnionTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitUnionTypeDefinition(this);
		}
	}


}



class UnionMemberTypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_unionMemberTypes;
    }

	namedType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NamedTypeContext);
	    } else {
	        return this.getTypedRuleContext(NamedTypeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterUnionMemberTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitUnionMemberTypes(this);
		}
	}


}



class UnionTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_unionTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	unionMemberTypes() {
	    return this.getTypedRuleContext(UnionMemberTypesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterUnionTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitUnionTypeExtension(this);
		}
	}


}



class EnumTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enumValuesDefinition() {
	    return this.getTypedRuleContext(EnumValuesDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumTypeDefinition(this);
		}
	}


}



class EnumValuesDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumValuesDefinition;
    }

	enumValueDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumValueDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(EnumValueDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumValuesDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumValuesDefinition(this);
		}
	}


}



class EnumValueDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumValueDefinition;
    }

	enumValue() {
	    return this.getTypedRuleContext(EnumValueContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumValueDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumValueDefinition(this);
		}
	}


}



class EnumTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enumValuesDefinition() {
	    return this.getTypedRuleContext(EnumValuesDefinitionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumTypeExtension(this);
		}
	}


}



class InputObjectTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputObjectTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	inputFieldsDefinition() {
	    return this.getTypedRuleContext(InputFieldsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputObjectTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputObjectTypeDefinition(this);
		}
	}


}



class InputFieldsDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputFieldsDefinition;
    }

	inputValueDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InputValueDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(InputValueDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputFieldsDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputFieldsDefinition(this);
		}
	}


}



class InputObjectTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputObjectTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	inputFieldsDefinition() {
	    return this.getTypedRuleContext(InputFieldsDefinitionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputObjectTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputObjectTypeExtension(this);
		}
	}


}



class DirectiveDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directiveDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	directiveLocations() {
	    return this.getTypedRuleContext(DirectiveLocationsContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	argumentsDefinition() {
	    return this.getTypedRuleContext(ArgumentsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectiveDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectiveDefinition(this);
		}
	}


}



class DirectiveLocationsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directiveLocations;
    }

	directiveLocation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveLocationContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveLocationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectiveLocations(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectiveLocations(this);
		}
	}


}



class DirectiveLocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directiveLocation;
    }

	executableDirectiveLocation() {
	    return this.getTypedRuleContext(ExecutableDirectiveLocationContext,0);
	};

	typeSystemDirectiveLocation() {
	    return this.getTypedRuleContext(TypeSystemDirectiveLocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectiveLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectiveLocation(this);
		}
	}


}



class ExecutableDirectiveLocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_executableDirectiveLocation;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterExecutableDirectiveLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitExecutableDirectiveLocation(this);
		}
	}


}



class TypeSystemDirectiveLocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemDirectiveLocation;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemDirectiveLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemDirectiveLocation(this);
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
        this.ruleIndex = GraphQLParser.RULE_name;
    }

	NAME() {
	    return this.getToken(GraphQLParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitName(this);
		}
	}


}




GraphQLParser.DocumentContext = DocumentContext; 
GraphQLParser.DefinitionContext = DefinitionContext; 
GraphQLParser.ExecutableDefinitionContext = ExecutableDefinitionContext; 
GraphQLParser.OperationDefinitionContext = OperationDefinitionContext; 
GraphQLParser.OperationTypeContext = OperationTypeContext; 
GraphQLParser.SelectionSetContext = SelectionSetContext; 
GraphQLParser.SelectionContext = SelectionContext; 
GraphQLParser.FieldContext = FieldContext; 
GraphQLParser.ArgumentsContext = ArgumentsContext; 
GraphQLParser.ArgumentContext = ArgumentContext; 
GraphQLParser.AliasContext = AliasContext; 
GraphQLParser.FragmentSpreadContext = FragmentSpreadContext; 
GraphQLParser.FragmentDefinitionContext = FragmentDefinitionContext; 
GraphQLParser.FragmentNameContext = FragmentNameContext; 
GraphQLParser.TypeConditionContext = TypeConditionContext; 
GraphQLParser.InlineFragmentContext = InlineFragmentContext; 
GraphQLParser.ValueContext = ValueContext; 
GraphQLParser.IntValueContext = IntValueContext; 
GraphQLParser.FloatValueContext = FloatValueContext; 
GraphQLParser.BooleanValueContext = BooleanValueContext; 
GraphQLParser.StringValueContext = StringValueContext; 
GraphQLParser.NullValueContext = NullValueContext; 
GraphQLParser.EnumValueContext = EnumValueContext; 
GraphQLParser.ListValueContext = ListValueContext; 
GraphQLParser.ObjectValueContext = ObjectValueContext; 
GraphQLParser.ObjectFieldContext = ObjectFieldContext; 
GraphQLParser.VariableContext = VariableContext; 
GraphQLParser.VariableDefinitionsContext = VariableDefinitionsContext; 
GraphQLParser.VariableDefinitionContext = VariableDefinitionContext; 
GraphQLParser.DefaultValueContext = DefaultValueContext; 
GraphQLParser.Type_Context = Type_Context; 
GraphQLParser.NamedTypeContext = NamedTypeContext; 
GraphQLParser.ListTypeContext = ListTypeContext; 
GraphQLParser.DirectivesContext = DirectivesContext; 
GraphQLParser.DirectiveContext = DirectiveContext; 
GraphQLParser.TypeSystemDefinitionContext = TypeSystemDefinitionContext; 
GraphQLParser.TypeSystemExtensionContext = TypeSystemExtensionContext; 
GraphQLParser.SchemaDefinitionContext = SchemaDefinitionContext; 
GraphQLParser.RootOperationTypeDefinitionContext = RootOperationTypeDefinitionContext; 
GraphQLParser.SchemaExtensionContext = SchemaExtensionContext; 
GraphQLParser.OperationTypeDefinitionContext = OperationTypeDefinitionContext; 
GraphQLParser.DescriptionContext = DescriptionContext; 
GraphQLParser.TypeDefinitionContext = TypeDefinitionContext; 
GraphQLParser.TypeExtensionContext = TypeExtensionContext; 
GraphQLParser.ScalarTypeDefinitionContext = ScalarTypeDefinitionContext; 
GraphQLParser.ScalarTypeExtensionContext = ScalarTypeExtensionContext; 
GraphQLParser.ObjectTypeDefinitionContext = ObjectTypeDefinitionContext; 
GraphQLParser.ImplementsInterfacesContext = ImplementsInterfacesContext; 
GraphQLParser.FieldsDefinitionContext = FieldsDefinitionContext; 
GraphQLParser.FieldDefinitionContext = FieldDefinitionContext; 
GraphQLParser.ArgumentsDefinitionContext = ArgumentsDefinitionContext; 
GraphQLParser.InputValueDefinitionContext = InputValueDefinitionContext; 
GraphQLParser.ObjectTypeExtensionContext = ObjectTypeExtensionContext; 
GraphQLParser.InterfaceTypeDefinitionContext = InterfaceTypeDefinitionContext; 
GraphQLParser.InterfaceTypeExtensionContext = InterfaceTypeExtensionContext; 
GraphQLParser.UnionTypeDefinitionContext = UnionTypeDefinitionContext; 
GraphQLParser.UnionMemberTypesContext = UnionMemberTypesContext; 
GraphQLParser.UnionTypeExtensionContext = UnionTypeExtensionContext; 
GraphQLParser.EnumTypeDefinitionContext = EnumTypeDefinitionContext; 
GraphQLParser.EnumValuesDefinitionContext = EnumValuesDefinitionContext; 
GraphQLParser.EnumValueDefinitionContext = EnumValueDefinitionContext; 
GraphQLParser.EnumTypeExtensionContext = EnumTypeExtensionContext; 
GraphQLParser.InputObjectTypeDefinitionContext = InputObjectTypeDefinitionContext; 
GraphQLParser.InputFieldsDefinitionContext = InputFieldsDefinitionContext; 
GraphQLParser.InputObjectTypeExtensionContext = InputObjectTypeExtensionContext; 
GraphQLParser.DirectiveDefinitionContext = DirectiveDefinitionContext; 
GraphQLParser.DirectiveLocationsContext = DirectiveLocationsContext; 
GraphQLParser.DirectiveLocationContext = DirectiveLocationContext; 
GraphQLParser.ExecutableDirectiveLocationContext = ExecutableDirectiveLocationContext; 
GraphQLParser.TypeSystemDirectiveLocationContext = TypeSystemDirectiveLocationContext; 
GraphQLParser.NameContext = NameContext; 
