// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/aql/ArangoDbParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ArangoDbParserListener from './ArangoDbParserListener.js';
const serializedATN = [4,1,88,508,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,1,0,1,0,1,0,1,1,1,1,3,1,68,8,1,1,2,3,
2,71,8,2,1,2,5,2,74,8,2,10,2,12,2,77,9,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,
86,8,2,3,2,88,8,2,1,2,1,2,1,2,1,2,3,2,94,8,2,3,2,96,8,2,1,2,1,2,1,2,1,2,
1,2,3,2,103,8,2,1,2,1,2,3,2,107,8,2,1,2,5,2,110,8,2,10,2,12,2,113,9,2,1,
2,3,2,116,8,2,1,2,3,2,119,8,2,3,2,121,8,2,1,3,1,3,5,3,125,8,3,10,3,12,3,
128,9,3,1,3,5,3,131,8,3,10,3,12,3,134,9,3,1,3,5,3,137,8,3,10,3,12,3,140,
9,3,1,3,5,3,143,8,3,10,3,12,3,146,9,3,1,3,5,3,149,8,3,10,3,12,3,152,9,3,
1,4,3,4,155,8,4,1,4,5,4,158,8,4,10,4,12,4,161,9,4,1,4,1,4,1,4,1,4,1,4,3,
4,168,8,4,1,4,1,4,1,4,1,4,3,4,174,8,4,1,4,1,4,1,4,1,4,3,4,180,8,4,1,4,1,
4,1,4,1,4,3,4,186,8,4,1,4,1,4,1,4,1,4,3,4,192,8,4,1,4,1,4,1,4,1,4,1,4,3,
4,199,8,4,4,4,201,8,4,11,4,12,4,202,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
3,4,214,8,4,3,4,216,8,4,1,4,3,4,219,8,4,1,5,1,5,1,5,1,6,3,6,225,8,6,1,6,
1,6,1,6,1,6,1,6,3,6,232,8,6,1,6,3,6,235,8,6,1,6,3,6,238,8,6,1,7,3,7,241,
8,7,1,7,1,7,1,7,3,7,246,8,7,1,8,3,8,249,8,8,1,8,1,8,1,8,3,8,254,8,8,1,8,
1,8,1,8,1,8,5,8,260,8,8,10,8,12,8,263,9,8,1,8,3,8,266,8,8,1,9,3,9,269,8,
9,1,9,1,9,1,9,1,9,3,9,275,8,9,1,9,3,9,278,8,9,1,10,1,10,1,10,3,10,283,8,
10,1,11,1,11,1,12,1,12,1,13,3,13,290,8,13,1,13,1,13,3,13,294,8,13,1,13,1,
13,1,14,1,14,1,14,1,15,1,15,1,15,5,15,304,8,15,10,15,12,15,307,9,15,1,16,
1,16,3,16,311,8,16,1,17,1,17,1,17,1,17,3,17,317,8,17,1,17,1,17,1,17,1,17,
1,17,1,17,3,17,325,8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,334,8,17,
1,17,1,17,1,17,3,17,339,8,17,1,17,1,17,1,17,1,17,3,17,345,8,17,1,17,3,17,
348,8,17,1,18,1,18,1,18,1,18,3,18,354,8,18,1,18,1,18,1,18,1,19,1,19,1,19,
1,19,1,19,1,20,1,20,4,20,366,8,20,11,20,12,20,367,1,21,1,21,1,22,1,22,1,
23,1,23,1,23,1,23,1,23,3,23,379,8,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
1,23,1,23,1,23,4,23,391,8,23,11,23,12,23,392,1,23,3,23,396,8,23,1,23,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,
23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,
428,8,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,
442,8,23,1,23,1,23,1,23,1,23,4,23,448,8,23,11,23,12,23,449,5,23,452,8,23,
10,23,12,23,455,9,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,
24,467,8,24,1,25,1,25,3,25,471,8,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,5,
26,480,8,26,10,26,12,26,483,9,26,3,26,485,8,26,1,26,1,26,1,27,1,27,1,27,
5,27,492,8,27,10,27,12,27,495,9,27,1,28,1,28,3,28,499,8,28,1,28,1,28,1,28,
1,29,1,29,1,30,1,30,1,30,0,1,46,31,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,0,16,3,0,19,19,26,26,
35,35,2,0,8,8,12,12,1,0,20,21,2,0,25,25,27,27,1,0,44,45,1,0,57,58,2,0,32,
32,50,50,1,0,59,61,2,0,51,56,69,70,3,0,17,17,19,19,31,31,2,0,25,25,51,56,
2,0,25,25,30,30,2,0,18,18,48,48,2,0,34,34,49,49,1,0,83,85,1,0,86,88,575,
0,62,1,0,0,0,2,67,1,0,0,0,4,70,1,0,0,0,6,122,1,0,0,0,8,154,1,0,0,0,10,220,
1,0,0,0,12,224,1,0,0,0,14,240,1,0,0,0,16,248,1,0,0,0,18,268,1,0,0,0,20,279,
1,0,0,0,22,284,1,0,0,0,24,286,1,0,0,0,26,289,1,0,0,0,28,297,1,0,0,0,30,300,
1,0,0,0,32,310,1,0,0,0,34,312,1,0,0,0,36,349,1,0,0,0,38,358,1,0,0,0,40,365,
1,0,0,0,42,369,1,0,0,0,44,371,1,0,0,0,46,395,1,0,0,0,48,466,1,0,0,0,50,468,
1,0,0,0,52,474,1,0,0,0,54,488,1,0,0,0,56,498,1,0,0,0,58,503,1,0,0,0,60,505,
1,0,0,0,62,63,3,2,1,0,63,64,5,0,0,1,64,1,1,0,0,0,65,68,3,4,2,0,66,68,3,8,
4,0,67,65,1,0,0,0,67,66,1,0,0,0,68,3,1,0,0,0,69,71,3,28,14,0,70,69,1,0,0,
0,70,71,1,0,0,0,71,120,1,0,0,0,72,74,3,6,3,0,73,72,1,0,0,0,74,77,1,0,0,0,
75,73,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,77,75,1,0,0,0,78,121,3,26,13,0,
79,80,5,3,0,0,80,87,3,42,21,0,81,82,5,66,0,0,82,85,3,42,21,0,83,84,5,66,
0,0,84,86,3,42,21,0,85,83,1,0,0,0,85,86,1,0,0,0,86,88,1,0,0,0,87,81,1,0,
0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,95,5,25,0,0,90,93,3,60,30,0,91,92,5,64,
0,0,92,94,3,60,30,0,93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,90,1,0,
0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,7,0,0,0,98,102,3,46,23,0,99,100,5,
24,0,0,100,103,3,46,23,0,101,103,3,30,15,0,102,99,1,0,0,0,102,101,1,0,0,
0,103,106,1,0,0,0,104,105,5,41,0,0,105,107,3,46,23,0,106,104,1,0,0,0,106,
107,1,0,0,0,107,111,1,0,0,0,108,110,3,14,7,0,109,108,1,0,0,0,110,113,1,0,
0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,114,
116,3,10,5,0,115,114,1,0,0,0,115,116,1,0,0,0,116,118,1,0,0,0,117,119,3,26,
13,0,118,117,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,75,1,0,0,0,120,
79,1,0,0,0,121,5,1,0,0,0,122,126,3,12,6,0,123,125,3,34,17,0,124,123,1,0,
0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,127,132,1,0,0,0,128,
126,1,0,0,0,129,131,3,14,7,0,130,129,1,0,0,0,131,134,1,0,0,0,132,130,1,0,
0,0,132,133,1,0,0,0,133,138,1,0,0,0,134,132,1,0,0,0,135,137,3,16,8,0,136,
135,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,1,0,0,0,139,144,1,0,
0,0,140,138,1,0,0,0,141,143,3,18,9,0,142,141,1,0,0,0,143,146,1,0,0,0,144,
142,1,0,0,0,144,145,1,0,0,0,145,150,1,0,0,0,146,144,1,0,0,0,147,149,3,36,
18,0,148,147,1,0,0,0,149,152,1,0,0,0,150,148,1,0,0,0,150,151,1,0,0,0,151,
7,1,0,0,0,152,150,1,0,0,0,153,155,3,28,14,0,154,153,1,0,0,0,154,155,1,0,
0,0,155,159,1,0,0,0,156,158,3,6,3,0,157,156,1,0,0,0,158,161,1,0,0,0,159,
157,1,0,0,0,159,160,1,0,0,0,160,215,1,0,0,0,161,159,1,0,0,0,162,163,5,4,
0,0,163,164,3,52,26,0,164,165,3,24,12,0,165,167,3,32,16,0,166,168,3,10,5,
0,167,166,1,0,0,0,167,168,1,0,0,0,168,216,1,0,0,0,169,173,5,12,0,0,170,171,
3,46,23,0,171,172,5,15,0,0,172,174,1,0,0,0,173,170,1,0,0,0,173,174,1,0,0,
0,174,175,1,0,0,0,175,176,3,52,26,0,176,177,5,25,0,0,177,179,3,32,16,0,178,
180,3,10,5,0,179,178,1,0,0,0,179,180,1,0,0,0,180,216,1,0,0,0,181,185,5,8,
0,0,182,183,3,46,23,0,183,184,5,15,0,0,184,186,1,0,0,0,185,182,1,0,0,0,185,
186,1,0,0,0,186,187,1,0,0,0,187,188,3,52,26,0,188,189,5,25,0,0,189,191,3,
32,16,0,190,192,3,10,5,0,191,190,1,0,0,0,191,192,1,0,0,0,192,216,1,0,0,0,
193,194,5,7,0,0,194,195,3,46,23,0,195,196,5,25,0,0,196,198,3,32,16,0,197,
199,3,10,5,0,198,197,1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,0,200,193,1,0,
0,0,201,202,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,216,1,0,0,0,204,
205,5,13,0,0,205,206,3,46,23,0,206,207,5,4,0,0,207,208,3,46,23,0,208,209,
7,1,0,0,209,210,3,46,23,0,210,211,5,25,0,0,211,213,3,32,16,0,212,214,3,10,
5,0,213,212,1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,162,1,0,0,0,215,
169,1,0,0,0,215,181,1,0,0,0,215,200,1,0,0,0,215,204,1,0,0,0,216,218,1,0,
0,0,217,219,3,26,13,0,218,217,1,0,0,0,218,219,1,0,0,0,219,9,1,0,0,0,220,
221,5,40,0,0,221,222,3,52,26,0,222,11,1,0,0,0,223,225,3,40,20,0,224,223,
1,0,0,0,224,225,1,0,0,0,225,226,1,0,0,0,226,227,5,3,0,0,227,228,3,42,21,
0,228,231,5,25,0,0,229,232,3,46,23,0,230,232,3,32,16,0,231,229,1,0,0,0,231,
230,1,0,0,0,232,234,1,0,0,0,233,235,3,20,10,0,234,233,1,0,0,0,234,235,1,
0,0,0,235,237,1,0,0,0,236,238,3,40,20,0,237,236,1,0,0,0,237,238,1,0,0,0,
238,13,1,0,0,0,239,241,3,40,20,0,240,239,1,0,0,0,240,241,1,0,0,0,241,242,
1,0,0,0,242,243,5,2,0,0,243,245,3,46,23,0,244,246,3,40,20,0,245,244,1,0,
0,0,245,246,1,0,0,0,246,15,1,0,0,0,247,249,3,40,20,0,248,247,1,0,0,0,248,
249,1,0,0,0,249,250,1,0,0,0,250,251,5,11,0,0,251,253,3,46,23,0,252,254,3,
22,11,0,253,252,1,0,0,0,253,254,1,0,0,0,254,261,1,0,0,0,255,256,5,66,0,0,
256,257,3,46,23,0,257,258,3,22,11,0,258,260,1,0,0,0,259,255,1,0,0,0,260,
263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,265,1,0,0,0,263,261,1,0,
0,0,264,266,3,40,20,0,265,264,1,0,0,0,265,266,1,0,0,0,266,17,1,0,0,0,267,
269,3,40,20,0,268,267,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,271,5,
6,0,0,271,274,3,60,30,0,272,273,5,66,0,0,273,275,3,60,30,0,274,272,1,0,0,
0,274,275,1,0,0,0,275,277,1,0,0,0,276,278,3,40,20,0,277,276,1,0,0,0,277,
278,1,0,0,0,278,19,1,0,0,0,279,280,5,10,0,0,280,282,3,46,23,0,281,283,3,
10,5,0,282,281,1,0,0,0,282,283,1,0,0,0,283,21,1,0,0,0,284,285,7,2,0,0,285,
23,1,0,0,0,286,287,7,3,0,0,287,25,1,0,0,0,288,290,3,40,20,0,289,288,1,0,
0,0,289,290,1,0,0,0,290,291,1,0,0,0,291,293,5,9,0,0,292,294,5,22,0,0,293,
292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,296,3,46,23,0,296,27,1,0,
0,0,297,298,5,15,0,0,298,299,3,30,15,0,299,29,1,0,0,0,300,305,3,32,16,0,
301,302,5,66,0,0,302,304,3,32,16,0,303,301,1,0,0,0,304,307,1,0,0,0,305,303,
1,0,0,0,305,306,1,0,0,0,306,31,1,0,0,0,307,305,1,0,0,0,308,311,3,42,21,0,
309,311,5,82,0,0,310,308,1,0,0,0,310,309,1,0,0,0,311,33,1,0,0,0,312,344,
5,1,0,0,313,316,3,46,23,0,314,315,5,27,0,0,315,317,3,46,23,0,316,314,1,0,
0,0,316,317,1,0,0,0,317,345,1,0,0,0,318,324,3,46,23,0,319,320,5,27,0,0,320,
321,3,42,21,0,321,322,5,38,0,0,322,323,3,42,21,0,323,325,1,0,0,0,324,319,
1,0,0,0,324,325,1,0,0,0,325,345,1,0,0,0,326,327,3,46,23,0,327,328,5,15,0,
0,328,329,5,39,0,0,329,330,5,27,0,0,330,331,3,42,21,0,331,345,1,0,0,0,332,
334,3,46,23,0,333,332,1,0,0,0,333,334,1,0,0,0,334,335,1,0,0,0,335,338,3,
38,19,0,336,337,5,27,0,0,337,339,3,42,21,0,338,336,1,0,0,0,338,339,1,0,0,
0,339,345,1,0,0,0,340,341,5,15,0,0,341,342,5,39,0,0,342,343,5,27,0,0,343,
345,3,42,21,0,344,313,1,0,0,0,344,318,1,0,0,0,344,326,1,0,0,0,344,333,1,
0,0,0,344,340,1,0,0,0,345,347,1,0,0,0,346,348,3,10,5,0,347,346,1,0,0,0,347,
348,1,0,0,0,348,35,1,0,0,0,349,353,5,14,0,0,350,351,3,46,23,0,351,352,5,
15,0,0,352,354,1,0,0,0,353,350,1,0,0,0,353,354,1,0,0,0,354,355,1,0,0,0,355,
356,3,52,26,0,356,357,3,38,19,0,357,37,1,0,0,0,358,359,5,16,0,0,359,360,
3,42,21,0,360,361,5,65,0,0,361,362,3,46,23,0,362,39,1,0,0,0,363,364,5,5,
0,0,364,366,3,46,23,0,365,363,1,0,0,0,366,367,1,0,0,0,367,365,1,0,0,0,367,
368,1,0,0,0,368,41,1,0,0,0,369,370,5,80,0,0,370,43,1,0,0,0,371,372,7,4,0,
0,372,45,1,0,0,0,373,374,6,23,-1,0,374,396,3,48,24,0,375,378,5,71,0,0,376,
379,3,46,23,0,377,379,3,4,2,0,378,376,1,0,0,0,378,377,1,0,0,0,379,380,1,
0,0,0,380,381,5,72,0,0,381,396,1,0,0,0,382,383,7,5,0,0,383,396,3,46,23,14,
384,385,3,42,21,0,385,386,5,71,0,0,386,387,3,46,23,0,387,388,5,72,0,0,388,
396,1,0,0,0,389,391,7,6,0,0,390,389,1,0,0,0,391,392,1,0,0,0,392,390,1,0,
0,0,392,393,1,0,0,0,393,394,1,0,0,0,394,396,3,46,23,3,395,373,1,0,0,0,395,
375,1,0,0,0,395,382,1,0,0,0,395,384,1,0,0,0,395,390,1,0,0,0,396,453,1,0,
0,0,397,398,10,15,0,0,398,399,5,68,0,0,399,452,3,46,23,16,400,401,10,12,
0,0,401,402,7,7,0,0,402,452,3,46,23,13,403,404,10,11,0,0,404,405,7,5,0,0,
405,452,3,46,23,12,406,407,10,10,0,0,407,408,7,8,0,0,408,452,3,46,23,11,
409,410,10,9,0,0,410,411,7,9,0,0,411,412,7,10,0,0,412,452,3,46,23,10,413,
414,10,8,0,0,414,415,5,62,0,0,415,416,3,46,23,0,416,417,5,63,0,0,417,418,
3,46,23,9,418,452,1,0,0,0,419,420,10,7,0,0,420,421,5,65,0,0,421,452,3,46,
23,8,422,423,10,5,0,0,423,424,5,64,0,0,424,452,3,46,23,6,425,427,10,4,0,
0,426,428,5,32,0,0,427,426,1,0,0,0,427,428,1,0,0,0,428,429,1,0,0,0,429,430,
7,11,0,0,430,452,3,46,23,5,431,432,10,2,0,0,432,433,7,12,0,0,433,452,3,46,
23,3,434,435,10,1,0,0,435,436,7,13,0,0,436,452,3,46,23,2,437,438,10,16,0,
0,438,441,5,73,0,0,439,442,3,46,23,0,440,442,5,59,0,0,441,439,1,0,0,0,441,
440,1,0,0,0,442,443,1,0,0,0,443,452,5,74,0,0,444,447,10,6,0,0,445,446,5,
66,0,0,446,448,3,46,23,0,447,445,1,0,0,0,448,449,1,0,0,0,449,447,1,0,0,0,
449,450,1,0,0,0,450,452,1,0,0,0,451,397,1,0,0,0,451,400,1,0,0,0,451,403,
1,0,0,0,451,406,1,0,0,0,451,409,1,0,0,0,451,413,1,0,0,0,451,419,1,0,0,0,
451,422,1,0,0,0,451,425,1,0,0,0,451,431,1,0,0,0,451,434,1,0,0,0,451,437,
1,0,0,0,451,444,1,0,0,0,452,455,1,0,0,0,453,451,1,0,0,0,453,454,1,0,0,0,
454,47,1,0,0,0,455,453,1,0,0,0,456,467,3,60,30,0,457,467,5,37,0,0,458,467,
5,23,0,0,459,467,3,58,29,0,460,467,3,50,25,0,461,467,3,52,26,0,462,467,5,
33,0,0,463,467,3,42,21,0,464,467,5,81,0,0,465,467,3,44,22,0,466,456,1,0,
0,0,466,457,1,0,0,0,466,458,1,0,0,0,466,459,1,0,0,0,466,460,1,0,0,0,466,
461,1,0,0,0,466,462,1,0,0,0,466,463,1,0,0,0,466,464,1,0,0,0,466,465,1,0,
0,0,467,49,1,0,0,0,468,470,5,73,0,0,469,471,3,46,23,0,470,469,1,0,0,0,470,
471,1,0,0,0,471,472,1,0,0,0,472,473,5,74,0,0,473,51,1,0,0,0,474,484,5,75,
0,0,475,485,3,54,27,0,476,481,3,42,21,0,477,478,5,66,0,0,478,480,3,42,21,
0,479,477,1,0,0,0,480,483,1,0,0,0,481,479,1,0,0,0,481,482,1,0,0,0,482,485,
1,0,0,0,483,481,1,0,0,0,484,475,1,0,0,0,484,476,1,0,0,0,484,485,1,0,0,0,
485,486,1,0,0,0,486,487,5,76,0,0,487,53,1,0,0,0,488,493,3,56,28,0,489,490,
5,66,0,0,490,492,3,56,28,0,491,489,1,0,0,0,492,495,1,0,0,0,493,491,1,0,0,
0,493,494,1,0,0,0,494,55,1,0,0,0,495,493,1,0,0,0,496,499,3,58,29,0,497,499,
3,42,21,0,498,496,1,0,0,0,498,497,1,0,0,0,499,500,1,0,0,0,500,501,5,63,0,
0,501,502,3,46,23,0,502,57,1,0,0,0,503,504,7,14,0,0,504,59,1,0,0,0,505,506,
7,15,0,0,506,61,1,0,0,0,70,67,70,75,85,87,93,95,102,106,111,115,118,120,
126,132,138,144,150,154,159,167,173,179,185,191,198,202,213,215,218,224,
231,234,237,240,245,248,253,261,265,268,274,277,282,289,293,305,310,316,
324,333,338,344,347,353,367,378,392,395,427,441,449,451,453,466,470,481,
484,493,498];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ArangoDbParser extends antlr4.Parser {

    static grammarFileName = "ArangoDbParser.g4";
    static literalNames = [ null, "'COLLECT'", "'FILTER'", "'FOR'", "'INSERT'", 
                            "'LET'", "'LIMIT'", "'REMOVE'", "'REPLACE'", 
                            "'RETURN'", "'SEARCH'", "'SORT'", "'UPDATE'", 
                            "'UPSERT'", "'WINDOW'", "'WITH'", "'AGGREGATE'", 
                            "'ALL'", "'AND'", "'ANY'", "'ASC'", "'DESC'", 
                            "'DISTINCT'", "'FALSE'", "'GRAPH'", "'IN'", 
                            "'INBOUND'", "'INTO'", "'K_PATHS'", "'K_SHORTEST_PATHS'", 
                            "'LIKE'", "'NONE'", "'NOT'", "'NULL'", "'OR'", 
                            "'OUTBOUND'", "'SHORTEST_PATH'", "'TRUE'", "'KEEP'", 
                            "'COUNT'", "'OPTIONS'", "'PRUNE'", "'TO'", null, 
                            null, null, "'DOCUMENT'", "';'", "'&&'", "'||'", 
                            "'!'", "'=='", "'!='", "'<'", "'<='", "'>'", 
                            "'>='", "'+'", "'-'", "'*'", "'/'", "'%'", "'?'", 
                            "':'", "'..'", "'='", "','", "'::'", "'.'", 
                            "'=~'", "'!~'", "'('", "')'", "'['", "']'", 
                            "'{'", "'}'" ];
    static symbolicNames = [ null, "COLLECT", "FILTER", "FOR", "INSERT", 
                             "LET", "LIMIT", "REMOVE", "REPLACE", "RETURN", 
                             "SEARCH", "SORT", "UPDATE", "UPSERT", "WINDOW", 
                             "WITH", "AGGREGATE", "ALL", "AND", "ANY", "ASC", 
                             "DESC", "DISTINCT", "FALSE", "GRAPH", "IN", 
                             "INBOUND", "INTO", "K_PATHS", "K_SHORTEST_PATHS", 
                             "LIKE", "NONE", "NOT", "NULL_", "OR", "OUTBOUND", 
                             "SHORTEST_PATH", "TRUE", "KEEP", "COUNT", "OPTIONS", 
                             "PRUNE", "TO", "CURRENT", "NEW", "OLD", "DOCUMENT", 
                             "SEMI", "L_AND", "L_OR", "L_NOT", "EQ", "NE", 
                             "LT", "LE", "GT", "GE", "PLUS", "MINUS", "STAR", 
                             "DIV", "MOD", "QM", "COLON", "RANGE", "ASSIGN", 
                             "COMMA", "SCOPE", "ACCESS", "REGEX_MATCH", 
                             "REGEX_NON_MATCH", "LRB", "RRB", "LSB", "RSB", 
                             "LCB", "RCB", "WHITE_SPACE", "SQL_COMMENT", 
                             "LINE_COMMENT", "ID", "BIND_PARAMETER", "BIND_PARAMETER_COLL", 
                             "STRING_LITERAL", "DOUBLE_QUOTED_STRING_LITERAL", 
                             "BACKSTICK_STRING_LITERAL", "DECIMAL_LITERAL", 
                             "FLOAT_LITERAL", "REAL_LITERAL" ];
    static ruleNames = [ "arangodb_query", "data_query", "data_access_query", 
                         "for_op", "data_modification_query", "options_", 
                         "for_in", "filter", "sort", "limit", "search", 
                         "asc_desc", "in_into", "return_expr", "with_collection_list", 
                         "collection_list", "collection", "collect", "window", 
                         "aggregate_assign", "let_list", "id_", "new_old", 
                         "expr", "literal", "array_literal", "object_literal", 
                         "pair_list", "pair", "string", "numeric_literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ArangoDbParser.ruleNames;
        this.literalNames = ArangoDbParser.literalNames;
        this.symbolicNames = ArangoDbParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 23:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 15);
    		case 1:
    			return this.precpred(this._ctx, 12);
    		case 2:
    			return this.precpred(this._ctx, 11);
    		case 3:
    			return this.precpred(this._ctx, 10);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		case 5:
    			return this.precpred(this._ctx, 8);
    		case 6:
    			return this.precpred(this._ctx, 7);
    		case 7:
    			return this.precpred(this._ctx, 5);
    		case 8:
    			return this.precpred(this._ctx, 4);
    		case 9:
    			return this.precpred(this._ctx, 2);
    		case 10:
    			return this.precpred(this._ctx, 1);
    		case 11:
    			return this.precpred(this._ctx, 16);
    		case 12:
    			return this.precpred(this._ctx, 6);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	arangodb_query() {
	    let localctx = new Arangodb_queryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ArangoDbParser.RULE_arangodb_query);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.data_query();
	        this.state = 63;
	        this.match(ArangoDbParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	data_query() {
	    let localctx = new Data_queryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ArangoDbParser.RULE_data_query);
	    try {
	        this.state = 67;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 65;
	            this.data_access_query();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 66;
	            this.data_modification_query();
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



	data_access_query() {
	    let localctx = new Data_access_queryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ArangoDbParser.RULE_data_access_query);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 69;
	            this.with_collection_list();
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 75;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 72;
	                    this.for_op(); 
	                }
	                this.state = 77;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
	            }

	            this.state = 78;
	            this.return_expr();
	            break;

	        case 2:
	            this.state = 79;
	            this.match(ArangoDbParser.FOR);
	            this.state = 80;
	            localctx.v = this.id_();
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===66) {
	                this.state = 81;
	                this.match(ArangoDbParser.COMMA);
	                this.state = 82;
	                localctx.e = this.id_();
	                this.state = 85;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===66) {
	                    this.state = 83;
	                    this.match(ArangoDbParser.COMMA);
	                    this.state = 84;
	                    localctx.p = this.id_();
	                }

	            }

	            this.state = 89;
	            this.match(ArangoDbParser.IN);
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 86)) & ~0x1f) === 0 && ((1 << (_la - 86)) & 7) !== 0)) {
	                this.state = 90;
	                this.numeric_literal();
	                this.state = 93;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===64) {
	                    this.state = 91;
	                    this.match(ArangoDbParser.RANGE);
	                    this.state = 92;
	                    this.numeric_literal();
	                }

	            }

	            this.state = 97;
	            _la = this._input.LA(1);
	            if(!(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 65665) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 98;
	            this.expr(0);
	            this.state = 102;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 24:
	                this.state = 99;
	                this.match(ArangoDbParser.GRAPH);
	                this.state = 100;
	                this.expr(0);
	                break;
	            case 80:
	            case 82:
	                this.state = 101;
	                this.collection_list();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===41) {
	                this.state = 104;
	                this.match(ArangoDbParser.PRUNE);
	                this.state = 105;
	                this.expr(0);
	            }

	            this.state = 111;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 108;
	                    this.filter(); 
	                }
	                this.state = 113;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 115;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 114;
	                this.options_();
	            }

	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || _la===9) {
	                this.state = 117;
	                this.return_expr();
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



	for_op() {
	    let localctx = new For_opContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ArangoDbParser.RULE_for_op);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.for_in();
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1) {
	            this.state = 123;
	            this.collect();
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 129;
	                this.filter(); 
	            }
	            this.state = 134;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	        this.state = 138;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 135;
	                this.sort(); 
	            }
	            this.state = 140;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 144;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 141;
	                this.limit(); 
	            }
	            this.state = 146;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 150;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 147;
	            this.window();
	            this.state = 152;
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



	data_modification_query() {
	    let localctx = new Data_modification_queryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ArangoDbParser.RULE_data_modification_query);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 153;
	            this.with_collection_list();
	        }

	        this.state = 159;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===5) {
	            this.state = 156;
	            this.for_op();
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.state = 162;
	            this.match(ArangoDbParser.INSERT);
	            this.state = 163;
	            this.object_literal();
	            this.state = 164;
	            this.in_into();
	            this.state = 165;
	            this.collection();
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 166;
	                this.options_();
	            }

	            break;
	        case 12:
	            this.state = 169;
	            this.match(ArangoDbParser.UPDATE);
	            this.state = 173;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            if(la_===1) {
	                this.state = 170;
	                this.expr(0);
	                this.state = 171;
	                this.match(ArangoDbParser.WITH);

	            }
	            this.state = 175;
	            this.object_literal();
	            this.state = 176;
	            this.match(ArangoDbParser.IN);
	            this.state = 177;
	            this.collection();
	            this.state = 179;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 178;
	                this.options_();
	            }

	            break;
	        case 8:
	            this.state = 181;
	            this.match(ArangoDbParser.REPLACE);
	            this.state = 185;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	            if(la_===1) {
	                this.state = 182;
	                this.expr(0);
	                this.state = 183;
	                this.match(ArangoDbParser.WITH);

	            }
	            this.state = 187;
	            this.object_literal();
	            this.state = 188;
	            this.match(ArangoDbParser.IN);
	            this.state = 189;
	            this.collection();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 190;
	                this.options_();
	            }

	            break;
	        case 7:
	            this.state = 200; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 193;
	                this.match(ArangoDbParser.REMOVE);
	                this.state = 194;
	                this.expr(0);
	                this.state = 195;
	                this.match(ArangoDbParser.IN);
	                this.state = 196;
	                this.collection();
	                this.state = 198;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===40) {
	                    this.state = 197;
	                    this.options_();
	                }

	                this.state = 202; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===7);
	            break;
	        case 13:
	            this.state = 204;
	            this.match(ArangoDbParser.UPSERT);
	            this.state = 205;
	            this.expr(0);
	            this.state = 206;
	            this.match(ArangoDbParser.INSERT);
	            this.state = 207;
	            this.expr(0);
	            this.state = 208;
	            _la = this._input.LA(1);
	            if(!(_la===8 || _la===12)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 209;
	            this.expr(0);
	            this.state = 210;
	            this.match(ArangoDbParser.IN);
	            this.state = 211;
	            this.collection();
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===40) {
	                this.state = 212;
	                this.options_();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===9) {
	            this.state = 217;
	            this.return_expr();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	options_() {
	    let localctx = new Options_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ArangoDbParser.RULE_options_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(ArangoDbParser.OPTIONS);
	        this.state = 221;
	        this.object_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_in() {
	    let localctx = new For_inContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ArangoDbParser.RULE_for_in);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 223;
	            this.let_list();
	        }

	        this.state = 226;
	        this.match(ArangoDbParser.FOR);
	        this.state = 227;
	        this.id_();
	        this.state = 228;
	        this.match(ArangoDbParser.IN);
	        this.state = 231;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 229;
	            this.expr(0);
	            break;

	        case 2:
	            this.state = 230;
	            this.collection();
	            break;

	        }
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 233;
	            this.search();
	        }

	        this.state = 237;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        if(la_===1) {
	            this.state = 236;
	            this.let_list();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	filter() {
	    let localctx = new FilterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ArangoDbParser.RULE_filter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 239;
	            this.let_list();
	        }

	        this.state = 242;
	        this.match(ArangoDbParser.FILTER);
	        this.state = 243;
	        this.expr(0);
	        this.state = 245;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        if(la_===1) {
	            this.state = 244;
	            this.let_list();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sort() {
	    let localctx = new SortContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ArangoDbParser.RULE_sort);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 247;
	            this.let_list();
	        }

	        this.state = 250;
	        this.match(ArangoDbParser.SORT);
	        this.state = 251;
	        this.expr(0);
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20 || _la===21) {
	            this.state = 252;
	            this.asc_desc();
	        }

	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 255;
	            this.match(ArangoDbParser.COMMA);
	            this.state = 256;
	            this.expr(0);
	            this.state = 257;
	            this.asc_desc();
	            this.state = 263;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 265;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        if(la_===1) {
	            this.state = 264;
	            this.let_list();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	limit() {
	    let localctx = new LimitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ArangoDbParser.RULE_limit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 267;
	            this.let_list();
	        }

	        this.state = 270;
	        this.match(ArangoDbParser.LIMIT);
	        this.state = 271;
	        this.numeric_literal();
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===66) {
	            this.state = 272;
	            this.match(ArangoDbParser.COMMA);
	            this.state = 273;
	            this.numeric_literal();
	        }

	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        if(la_===1) {
	            this.state = 276;
	            this.let_list();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	search() {
	    let localctx = new SearchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ArangoDbParser.RULE_search);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(ArangoDbParser.SEARCH);
	        this.state = 280;
	        this.expr(0);
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 281;
	            this.options_();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	asc_desc() {
	    let localctx = new Asc_descContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ArangoDbParser.RULE_asc_desc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        _la = this._input.LA(1);
	        if(!(_la===20 || _la===21)) {
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



	in_into() {
	    let localctx = new In_intoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ArangoDbParser.RULE_in_into);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        _la = this._input.LA(1);
	        if(!(_la===25 || _la===27)) {
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



	return_expr() {
	    let localctx = new Return_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ArangoDbParser.RULE_return_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5) {
	            this.state = 288;
	            this.let_list();
	        }

	        this.state = 291;
	        this.match(ArangoDbParser.RETURN);
	        this.state = 293;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===22) {
	            this.state = 292;
	            this.match(ArangoDbParser.DISTINCT);
	        }

	        this.state = 295;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	with_collection_list() {
	    let localctx = new With_collection_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ArangoDbParser.RULE_with_collection_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.match(ArangoDbParser.WITH);
	        this.state = 298;
	        this.collection_list();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	collection_list() {
	    let localctx = new Collection_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ArangoDbParser.RULE_collection_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.collection();
	        this.state = 305;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 301;
	            this.match(ArangoDbParser.COMMA);
	            this.state = 302;
	            this.collection();
	            this.state = 307;
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



	collection() {
	    let localctx = new CollectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ArangoDbParser.RULE_collection);
	    try {
	        this.state = 310;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 308;
	            this.id_();
	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 309;
	            this.match(ArangoDbParser.BIND_PARAMETER_COLL);
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



	collect() {
	    let localctx = new CollectContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ArangoDbParser.RULE_collect);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this.match(ArangoDbParser.COLLECT);
	        this.state = 344;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 313;
	            this.expr(0);
	            this.state = 316;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 314;
	                this.match(ArangoDbParser.INTO);
	                this.state = 315;
	                this.expr(0);
	            }

	            break;

	        case 2:
	            this.state = 318;
	            this.expr(0);
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 319;
	                this.match(ArangoDbParser.INTO);
	                this.state = 320;
	                this.id_();
	                this.state = 321;
	                this.match(ArangoDbParser.KEEP);
	                this.state = 322;
	                this.id_();
	            }

	            break;

	        case 3:
	            this.state = 326;
	            this.expr(0);
	            this.state = 327;
	            this.match(ArangoDbParser.WITH);
	            this.state = 328;
	            this.match(ArangoDbParser.COUNT);
	            this.state = 329;
	            this.match(ArangoDbParser.INTO);
	            this.state = 330;
	            this.id_();
	            break;

	        case 4:
	            this.state = 333;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 140527105) !== 0) || ((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 4253368323) !== 0)) {
	                this.state = 332;
	                this.expr(0);
	            }

	            this.state = 335;
	            this.aggregate_assign();
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===27) {
	                this.state = 336;
	                this.match(ArangoDbParser.INTO);
	                this.state = 337;
	                this.id_();
	            }

	            break;

	        case 5:
	            this.state = 340;
	            this.match(ArangoDbParser.WITH);
	            this.state = 341;
	            this.match(ArangoDbParser.COUNT);
	            this.state = 342;
	            this.match(ArangoDbParser.INTO);
	            this.state = 343;
	            this.id_();
	            break;

	        }
	        this.state = 347;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===40) {
	            this.state = 346;
	            this.options_();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	window() {
	    let localctx = new WindowContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ArangoDbParser.RULE_window);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(ArangoDbParser.WINDOW);
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        if(la_===1) {
	            this.state = 350;
	            this.expr(0);
	            this.state = 351;
	            this.match(ArangoDbParser.WITH);

	        }
	        this.state = 355;
	        this.object_literal();
	        this.state = 356;
	        this.aggregate_assign();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aggregate_assign() {
	    let localctx = new Aggregate_assignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ArangoDbParser.RULE_aggregate_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(ArangoDbParser.AGGREGATE);
	        this.state = 359;
	        this.id_();
	        this.state = 360;
	        this.match(ArangoDbParser.ASSIGN);
	        this.state = 361;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	let_list() {
	    let localctx = new Let_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ArangoDbParser.RULE_let_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 363;
	        		this.match(ArangoDbParser.LET);
	        		this.state = 364;
	        		this.expr(0);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 367; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,55, this._ctx);
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



	id_() {
	    let localctx = new Id_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ArangoDbParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(ArangoDbParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	new_old() {
	    let localctx = new New_oldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ArangoDbParser.RULE_new_old);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        _la = this._input.LA(1);
	        if(!(_la===44 || _la===45)) {
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 46;
	    this.enterRecursionRule(localctx, 46, ArangoDbParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 374;
	            this.literal();
	            break;

	        case 2:
	            this.state = 375;
	            this.match(ArangoDbParser.LRB);
	            this.state = 378;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 23:
	            case 32:
	            case 33:
	            case 37:
	            case 44:
	            case 45:
	            case 50:
	            case 57:
	            case 58:
	            case 71:
	            case 73:
	            case 75:
	            case 80:
	            case 81:
	            case 83:
	            case 84:
	            case 85:
	            case 86:
	            case 87:
	            case 88:
	                this.state = 376;
	                this.expr(0);
	                break;
	            case 3:
	            case 5:
	            case 9:
	            case 15:
	                this.state = 377;
	                this.data_access_query();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 380;
	            this.match(ArangoDbParser.RRB);
	            break;

	        case 3:
	            this.state = 382;
	            _la = this._input.LA(1);
	            if(!(_la===57 || _la===58)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 383;
	            this.expr(14);
	            break;

	        case 4:
	            this.state = 384;
	            this.id_();
	            this.state = 385;
	            this.match(ArangoDbParser.LRB);
	            this.state = 386;
	            this.expr(0);
	            this.state = 387;
	            this.match(ArangoDbParser.RRB);
	            break;

	        case 5:
	            this.state = 390; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 389;
	            		_la = this._input.LA(1);
	            		if(!(_la===32 || _la===50)) {
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
	            	this.state = 392; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,57, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 394;
	            this.expr(3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 453;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,63,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 451;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 397;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 398;
	                    this.match(ArangoDbParser.ACCESS);
	                    this.state = 399;
	                    this.expr(16);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 400;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 401;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 402;
	                    this.expr(13);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 403;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 404;
	                    _la = this._input.LA(1);
	                    if(!(_la===57 || _la===58)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 405;
	                    this.expr(12);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 406;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 407;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 786495) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 408;
	                    this.expr(11);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 409;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 410;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2148139008) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 411;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 25)) & ~0x1f) === 0 && ((1 << (_la - 25)) & 4227858433) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 412;
	                    this.expr(10);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 413;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 414;
	                    this.match(ArangoDbParser.QM);
	                    this.state = 415;
	                    this.expr(0);
	                    this.state = 416;
	                    this.match(ArangoDbParser.COLON);
	                    this.state = 417;
	                    this.expr(9);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 419;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 420;
	                    this.match(ArangoDbParser.ASSIGN);
	                    this.state = 421;
	                    this.expr(8);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 422;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 423;
	                    this.match(ArangoDbParser.RANGE);
	                    this.state = 424;
	                    this.expr(6);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 425;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 427;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===32) {
	                        this.state = 426;
	                        this.match(ArangoDbParser.NOT);
	                    }

	                    this.state = 429;
	                    _la = this._input.LA(1);
	                    if(!(_la===25 || _la===30)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 430;
	                    this.expr(5);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 431;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 432;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===48)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 433;
	                    this.expr(3);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 434;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 435;
	                    _la = this._input.LA(1);
	                    if(!(_la===34 || _la===49)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 436;
	                    this.expr(2);
	                    break;

	                case 12:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 437;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 438;
	                    this.match(ArangoDbParser.LSB);
	                    this.state = 441;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 23:
	                    case 32:
	                    case 33:
	                    case 37:
	                    case 44:
	                    case 45:
	                    case 50:
	                    case 57:
	                    case 58:
	                    case 71:
	                    case 73:
	                    case 75:
	                    case 80:
	                    case 81:
	                    case 83:
	                    case 84:
	                    case 85:
	                    case 86:
	                    case 87:
	                    case 88:
	                        this.state = 439;
	                        this.expr(0);
	                        break;
	                    case 59:
	                        this.state = 440;
	                        this.match(ArangoDbParser.STAR);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 443;
	                    this.match(ArangoDbParser.RSB);
	                    break;

	                case 13:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ArangoDbParser.RULE_expr);
	                    this.state = 444;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 447; 
	                    this._errHandler.sync(this);
	                    var _alt = 1;
	                    do {
	                    	switch (_alt) {
	                    	case 1:
	                    		this.state = 445;
	                    		this.match(ArangoDbParser.COMMA);
	                    		this.state = 446;
	                    		this.expr(0);
	                    		break;
	                    	default:
	                    		throw new antlr4.error.NoViableAltException(this);
	                    	}
	                    	this.state = 449; 
	                    	this._errHandler.sync(this);
	                    	_alt = this._interp.adaptivePredict(this._input,61, this._ctx);
	                    } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	                    break;

	                } 
	            }
	            this.state = 455;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,63,this._ctx);
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ArangoDbParser.RULE_literal);
	    try {
	        this.state = 466;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 86:
	        case 87:
	        case 88:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 456;
	            this.numeric_literal();
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 457;
	            this.match(ArangoDbParser.TRUE);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 458;
	            this.match(ArangoDbParser.FALSE);
	            break;
	        case 83:
	        case 84:
	        case 85:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 459;
	            this.string();
	            break;
	        case 73:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 460;
	            this.array_literal();
	            break;
	        case 75:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 461;
	            this.object_literal();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 462;
	            this.match(ArangoDbParser.NULL_);
	            break;
	        case 80:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 463;
	            this.id_();
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 464;
	            this.match(ArangoDbParser.BIND_PARAMETER);
	            break;
	        case 44:
	        case 45:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 465;
	            this.new_old();
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



	array_literal() {
	    let localctx = new Array_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ArangoDbParser.RULE_array_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this.match(ArangoDbParser.LSB);
	        this.state = 470;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 23)) & ~0x1f) === 0 && ((1 << (_la - 23)) & 140527105) !== 0) || ((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 4253368323) !== 0)) {
	            this.state = 469;
	            this.expr(0);
	        }

	        this.state = 472;
	        this.match(ArangoDbParser.RSB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	object_literal() {
	    let localctx = new Object_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ArangoDbParser.RULE_object_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
	        this.match(ArangoDbParser.LCB);
	        this.state = 484;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	        if(la_===1) {
	            this.state = 475;
	            this.pair_list();

	        } else if(la_===2) {
	            this.state = 476;
	            this.id_();
	            this.state = 481;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===66) {
	                this.state = 477;
	                this.match(ArangoDbParser.COMMA);
	                this.state = 478;
	                this.id_();
	                this.state = 483;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }
	        this.state = 486;
	        this.match(ArangoDbParser.RCB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pair_list() {
	    let localctx = new Pair_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ArangoDbParser.RULE_pair_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this.pair();
	        this.state = 493;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===66) {
	            this.state = 489;
	            this.match(ArangoDbParser.COMMA);
	            this.state = 490;
	            this.pair();
	            this.state = 495;
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



	pair() {
	    let localctx = new PairContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ArangoDbParser.RULE_pair);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 498;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 83:
	        case 84:
	        case 85:
	            this.state = 496;
	            this.string();
	            break;
	        case 80:
	            this.state = 497;
	            this.id_();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 500;
	        this.match(ArangoDbParser.COLON);
	        this.state = 501;
	        this.expr(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 58, ArangoDbParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        _la = this._input.LA(1);
	        if(!(((((_la - 83)) & ~0x1f) === 0 && ((1 << (_la - 83)) & 7) !== 0))) {
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



	numeric_literal() {
	    let localctx = new Numeric_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ArangoDbParser.RULE_numeric_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 505;
	        _la = this._input.LA(1);
	        if(!(((((_la - 86)) & ~0x1f) === 0 && ((1 << (_la - 86)) & 7) !== 0))) {
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

ArangoDbParser.EOF = antlr4.Token.EOF;
ArangoDbParser.COLLECT = 1;
ArangoDbParser.FILTER = 2;
ArangoDbParser.FOR = 3;
ArangoDbParser.INSERT = 4;
ArangoDbParser.LET = 5;
ArangoDbParser.LIMIT = 6;
ArangoDbParser.REMOVE = 7;
ArangoDbParser.REPLACE = 8;
ArangoDbParser.RETURN = 9;
ArangoDbParser.SEARCH = 10;
ArangoDbParser.SORT = 11;
ArangoDbParser.UPDATE = 12;
ArangoDbParser.UPSERT = 13;
ArangoDbParser.WINDOW = 14;
ArangoDbParser.WITH = 15;
ArangoDbParser.AGGREGATE = 16;
ArangoDbParser.ALL = 17;
ArangoDbParser.AND = 18;
ArangoDbParser.ANY = 19;
ArangoDbParser.ASC = 20;
ArangoDbParser.DESC = 21;
ArangoDbParser.DISTINCT = 22;
ArangoDbParser.FALSE = 23;
ArangoDbParser.GRAPH = 24;
ArangoDbParser.IN = 25;
ArangoDbParser.INBOUND = 26;
ArangoDbParser.INTO = 27;
ArangoDbParser.K_PATHS = 28;
ArangoDbParser.K_SHORTEST_PATHS = 29;
ArangoDbParser.LIKE = 30;
ArangoDbParser.NONE = 31;
ArangoDbParser.NOT = 32;
ArangoDbParser.NULL_ = 33;
ArangoDbParser.OR = 34;
ArangoDbParser.OUTBOUND = 35;
ArangoDbParser.SHORTEST_PATH = 36;
ArangoDbParser.TRUE = 37;
ArangoDbParser.KEEP = 38;
ArangoDbParser.COUNT = 39;
ArangoDbParser.OPTIONS = 40;
ArangoDbParser.PRUNE = 41;
ArangoDbParser.TO = 42;
ArangoDbParser.CURRENT = 43;
ArangoDbParser.NEW = 44;
ArangoDbParser.OLD = 45;
ArangoDbParser.DOCUMENT = 46;
ArangoDbParser.SEMI = 47;
ArangoDbParser.L_AND = 48;
ArangoDbParser.L_OR = 49;
ArangoDbParser.L_NOT = 50;
ArangoDbParser.EQ = 51;
ArangoDbParser.NE = 52;
ArangoDbParser.LT = 53;
ArangoDbParser.LE = 54;
ArangoDbParser.GT = 55;
ArangoDbParser.GE = 56;
ArangoDbParser.PLUS = 57;
ArangoDbParser.MINUS = 58;
ArangoDbParser.STAR = 59;
ArangoDbParser.DIV = 60;
ArangoDbParser.MOD = 61;
ArangoDbParser.QM = 62;
ArangoDbParser.COLON = 63;
ArangoDbParser.RANGE = 64;
ArangoDbParser.ASSIGN = 65;
ArangoDbParser.COMMA = 66;
ArangoDbParser.SCOPE = 67;
ArangoDbParser.ACCESS = 68;
ArangoDbParser.REGEX_MATCH = 69;
ArangoDbParser.REGEX_NON_MATCH = 70;
ArangoDbParser.LRB = 71;
ArangoDbParser.RRB = 72;
ArangoDbParser.LSB = 73;
ArangoDbParser.RSB = 74;
ArangoDbParser.LCB = 75;
ArangoDbParser.RCB = 76;
ArangoDbParser.WHITE_SPACE = 77;
ArangoDbParser.SQL_COMMENT = 78;
ArangoDbParser.LINE_COMMENT = 79;
ArangoDbParser.ID = 80;
ArangoDbParser.BIND_PARAMETER = 81;
ArangoDbParser.BIND_PARAMETER_COLL = 82;
ArangoDbParser.STRING_LITERAL = 83;
ArangoDbParser.DOUBLE_QUOTED_STRING_LITERAL = 84;
ArangoDbParser.BACKSTICK_STRING_LITERAL = 85;
ArangoDbParser.DECIMAL_LITERAL = 86;
ArangoDbParser.FLOAT_LITERAL = 87;
ArangoDbParser.REAL_LITERAL = 88;

ArangoDbParser.RULE_arangodb_query = 0;
ArangoDbParser.RULE_data_query = 1;
ArangoDbParser.RULE_data_access_query = 2;
ArangoDbParser.RULE_for_op = 3;
ArangoDbParser.RULE_data_modification_query = 4;
ArangoDbParser.RULE_options_ = 5;
ArangoDbParser.RULE_for_in = 6;
ArangoDbParser.RULE_filter = 7;
ArangoDbParser.RULE_sort = 8;
ArangoDbParser.RULE_limit = 9;
ArangoDbParser.RULE_search = 10;
ArangoDbParser.RULE_asc_desc = 11;
ArangoDbParser.RULE_in_into = 12;
ArangoDbParser.RULE_return_expr = 13;
ArangoDbParser.RULE_with_collection_list = 14;
ArangoDbParser.RULE_collection_list = 15;
ArangoDbParser.RULE_collection = 16;
ArangoDbParser.RULE_collect = 17;
ArangoDbParser.RULE_window = 18;
ArangoDbParser.RULE_aggregate_assign = 19;
ArangoDbParser.RULE_let_list = 20;
ArangoDbParser.RULE_id_ = 21;
ArangoDbParser.RULE_new_old = 22;
ArangoDbParser.RULE_expr = 23;
ArangoDbParser.RULE_literal = 24;
ArangoDbParser.RULE_array_literal = 25;
ArangoDbParser.RULE_object_literal = 26;
ArangoDbParser.RULE_pair_list = 27;
ArangoDbParser.RULE_pair = 28;
ArangoDbParser.RULE_string = 29;
ArangoDbParser.RULE_numeric_literal = 30;

class Arangodb_queryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_arangodb_query;
    }

	data_query() {
	    return this.getTypedRuleContext(Data_queryContext,0);
	};

	EOF() {
	    return this.getToken(ArangoDbParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterArangodb_query(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitArangodb_query(this);
		}
	}


}



class Data_queryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_data_query;
    }

	data_access_query() {
	    return this.getTypedRuleContext(Data_access_queryContext,0);
	};

	data_modification_query() {
	    return this.getTypedRuleContext(Data_modification_queryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterData_query(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitData_query(this);
		}
	}


}



class Data_access_queryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_data_access_query;
        this.v = null;
        this.e = null;
        this.p = null;
    }

	return_expr() {
	    return this.getTypedRuleContext(Return_exprContext,0);
	};

	FOR() {
	    return this.getToken(ArangoDbParser.FOR, 0);
	};

	IN() {
	    return this.getToken(ArangoDbParser.IN, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	with_collection_list() {
	    return this.getTypedRuleContext(With_collection_listContext,0);
	};

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	OUTBOUND() {
	    return this.getToken(ArangoDbParser.OUTBOUND, 0);
	};

	INBOUND() {
	    return this.getToken(ArangoDbParser.INBOUND, 0);
	};

	ANY() {
	    return this.getToken(ArangoDbParser.ANY, 0);
	};

	GRAPH() {
	    return this.getToken(ArangoDbParser.GRAPH, 0);
	};

	collection_list() {
	    return this.getTypedRuleContext(Collection_listContext,0);
	};

	for_op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(For_opContext);
	    } else {
	        return this.getTypedRuleContext(For_opContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.COMMA);
	    } else {
	        return this.getToken(ArangoDbParser.COMMA, i);
	    }
	};


	numeric_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Numeric_literalContext);
	    } else {
	        return this.getTypedRuleContext(Numeric_literalContext,i);
	    }
	};

	PRUNE() {
	    return this.getToken(ArangoDbParser.PRUNE, 0);
	};

	filter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilterContext);
	    } else {
	        return this.getTypedRuleContext(FilterContext,i);
	    }
	};

	options_() {
	    return this.getTypedRuleContext(Options_Context,0);
	};

	RANGE() {
	    return this.getToken(ArangoDbParser.RANGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterData_access_query(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitData_access_query(this);
		}
	}


}



class For_opContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_for_op;
    }

	for_in() {
	    return this.getTypedRuleContext(For_inContext,0);
	};

	collect = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CollectContext);
	    } else {
	        return this.getTypedRuleContext(CollectContext,i);
	    }
	};

	filter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FilterContext);
	    } else {
	        return this.getTypedRuleContext(FilterContext,i);
	    }
	};

	sort = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SortContext);
	    } else {
	        return this.getTypedRuleContext(SortContext,i);
	    }
	};

	limit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LimitContext);
	    } else {
	        return this.getTypedRuleContext(LimitContext,i);
	    }
	};

	window = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(WindowContext);
	    } else {
	        return this.getTypedRuleContext(WindowContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterFor_op(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitFor_op(this);
		}
	}


}



class Data_modification_queryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_data_modification_query;
    }

	INSERT() {
	    return this.getToken(ArangoDbParser.INSERT, 0);
	};

	object_literal() {
	    return this.getTypedRuleContext(Object_literalContext,0);
	};

	in_into() {
	    return this.getTypedRuleContext(In_intoContext,0);
	};

	collection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CollectionContext);
	    } else {
	        return this.getTypedRuleContext(CollectionContext,i);
	    }
	};

	UPDATE() {
	    return this.getToken(ArangoDbParser.UPDATE, 0);
	};

	IN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.IN);
	    } else {
	        return this.getToken(ArangoDbParser.IN, i);
	    }
	};


	REPLACE() {
	    return this.getToken(ArangoDbParser.REPLACE, 0);
	};

	UPSERT() {
	    return this.getToken(ArangoDbParser.UPSERT, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	with_collection_list() {
	    return this.getTypedRuleContext(With_collection_listContext,0);
	};

	for_op = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(For_opContext);
	    } else {
	        return this.getTypedRuleContext(For_opContext,i);
	    }
	};

	return_expr() {
	    return this.getTypedRuleContext(Return_exprContext,0);
	};

	options_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Options_Context);
	    } else {
	        return this.getTypedRuleContext(Options_Context,i);
	    }
	};

	WITH() {
	    return this.getToken(ArangoDbParser.WITH, 0);
	};

	REMOVE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.REMOVE);
	    } else {
	        return this.getToken(ArangoDbParser.REMOVE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterData_modification_query(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitData_modification_query(this);
		}
	}


}



class Options_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_options_;
    }

	OPTIONS() {
	    return this.getToken(ArangoDbParser.OPTIONS, 0);
	};

	object_literal() {
	    return this.getTypedRuleContext(Object_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterOptions_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitOptions_(this);
		}
	}


}



class For_inContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_for_in;
    }

	FOR() {
	    return this.getToken(ArangoDbParser.FOR, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	IN() {
	    return this.getToken(ArangoDbParser.IN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	collection() {
	    return this.getTypedRuleContext(CollectionContext,0);
	};

	let_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Let_listContext);
	    } else {
	        return this.getTypedRuleContext(Let_listContext,i);
	    }
	};

	search() {
	    return this.getTypedRuleContext(SearchContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterFor_in(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitFor_in(this);
		}
	}


}



class FilterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_filter;
    }

	FILTER() {
	    return this.getToken(ArangoDbParser.FILTER, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	let_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Let_listContext);
	    } else {
	        return this.getTypedRuleContext(Let_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterFilter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitFilter(this);
		}
	}


}



class SortContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_sort;
    }

	SORT() {
	    return this.getToken(ArangoDbParser.SORT, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	let_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Let_listContext);
	    } else {
	        return this.getTypedRuleContext(Let_listContext,i);
	    }
	};

	asc_desc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Asc_descContext);
	    } else {
	        return this.getTypedRuleContext(Asc_descContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.COMMA);
	    } else {
	        return this.getToken(ArangoDbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterSort(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitSort(this);
		}
	}


}



class LimitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_limit;
    }

	LIMIT() {
	    return this.getToken(ArangoDbParser.LIMIT, 0);
	};

	numeric_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Numeric_literalContext);
	    } else {
	        return this.getTypedRuleContext(Numeric_literalContext,i);
	    }
	};

	let_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Let_listContext);
	    } else {
	        return this.getTypedRuleContext(Let_listContext,i);
	    }
	};

	COMMA() {
	    return this.getToken(ArangoDbParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterLimit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitLimit(this);
		}
	}


}



class SearchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_search;
    }

	SEARCH() {
	    return this.getToken(ArangoDbParser.SEARCH, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	options_() {
	    return this.getTypedRuleContext(Options_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterSearch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitSearch(this);
		}
	}


}



class Asc_descContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_asc_desc;
    }

	ASC() {
	    return this.getToken(ArangoDbParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(ArangoDbParser.DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterAsc_desc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitAsc_desc(this);
		}
	}


}



class In_intoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_in_into;
    }

	IN() {
	    return this.getToken(ArangoDbParser.IN, 0);
	};

	INTO() {
	    return this.getToken(ArangoDbParser.INTO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterIn_into(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitIn_into(this);
		}
	}


}



class Return_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_return_expr;
    }

	RETURN() {
	    return this.getToken(ArangoDbParser.RETURN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	let_list() {
	    return this.getTypedRuleContext(Let_listContext,0);
	};

	DISTINCT() {
	    return this.getToken(ArangoDbParser.DISTINCT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterReturn_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitReturn_expr(this);
		}
	}


}



class With_collection_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_with_collection_list;
    }

	WITH() {
	    return this.getToken(ArangoDbParser.WITH, 0);
	};

	collection_list() {
	    return this.getTypedRuleContext(Collection_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterWith_collection_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitWith_collection_list(this);
		}
	}


}



class Collection_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_collection_list;
    }

	collection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CollectionContext);
	    } else {
	        return this.getTypedRuleContext(CollectionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.COMMA);
	    } else {
	        return this.getToken(ArangoDbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterCollection_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitCollection_list(this);
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
        this.ruleIndex = ArangoDbParser.RULE_collection;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	BIND_PARAMETER_COLL() {
	    return this.getToken(ArangoDbParser.BIND_PARAMETER_COLL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterCollection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitCollection(this);
		}
	}


}



class CollectContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_collect;
    }

	COLLECT() {
	    return this.getToken(ArangoDbParser.COLLECT, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	WITH() {
	    return this.getToken(ArangoDbParser.WITH, 0);
	};

	COUNT() {
	    return this.getToken(ArangoDbParser.COUNT, 0);
	};

	INTO() {
	    return this.getToken(ArangoDbParser.INTO, 0);
	};

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	aggregate_assign() {
	    return this.getTypedRuleContext(Aggregate_assignContext,0);
	};

	options_() {
	    return this.getTypedRuleContext(Options_Context,0);
	};

	KEEP() {
	    return this.getToken(ArangoDbParser.KEEP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterCollect(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitCollect(this);
		}
	}


}



class WindowContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_window;
    }

	WINDOW() {
	    return this.getToken(ArangoDbParser.WINDOW, 0);
	};

	object_literal() {
	    return this.getTypedRuleContext(Object_literalContext,0);
	};

	aggregate_assign() {
	    return this.getTypedRuleContext(Aggregate_assignContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	WITH() {
	    return this.getToken(ArangoDbParser.WITH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterWindow(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitWindow(this);
		}
	}


}



class Aggregate_assignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_aggregate_assign;
    }

	AGGREGATE() {
	    return this.getToken(ArangoDbParser.AGGREGATE, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	ASSIGN() {
	    return this.getToken(ArangoDbParser.ASSIGN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterAggregate_assign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitAggregate_assign(this);
		}
	}


}



class Let_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_let_list;
    }

	LET = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.LET);
	    } else {
	        return this.getToken(ArangoDbParser.LET, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterLet_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitLet_list(this);
		}
	}


}



class Id_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_id_;
    }

	ID() {
	    return this.getToken(ArangoDbParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitId_(this);
		}
	}


}



class New_oldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_new_old;
    }

	NEW() {
	    return this.getToken(ArangoDbParser.NEW, 0);
	};

	OLD() {
	    return this.getToken(ArangoDbParser.OLD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterNew_old(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitNew_old(this);
		}
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_expr;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	LRB() {
	    return this.getToken(ArangoDbParser.LRB, 0);
	};

	RRB() {
	    return this.getToken(ArangoDbParser.RRB, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	data_access_query() {
	    return this.getTypedRuleContext(Data_access_queryContext,0);
	};

	PLUS() {
	    return this.getToken(ArangoDbParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(ArangoDbParser.MINUS, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	L_NOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.L_NOT);
	    } else {
	        return this.getToken(ArangoDbParser.L_NOT, i);
	    }
	};


	NOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.NOT);
	    } else {
	        return this.getToken(ArangoDbParser.NOT, i);
	    }
	};


	ACCESS() {
	    return this.getToken(ArangoDbParser.ACCESS, 0);
	};

	STAR() {
	    return this.getToken(ArangoDbParser.STAR, 0);
	};

	DIV() {
	    return this.getToken(ArangoDbParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(ArangoDbParser.MOD, 0);
	};

	EQ() {
	    return this.getToken(ArangoDbParser.EQ, 0);
	};

	NE() {
	    return this.getToken(ArangoDbParser.NE, 0);
	};

	GT() {
	    return this.getToken(ArangoDbParser.GT, 0);
	};

	LT() {
	    return this.getToken(ArangoDbParser.LT, 0);
	};

	GE() {
	    return this.getToken(ArangoDbParser.GE, 0);
	};

	LE() {
	    return this.getToken(ArangoDbParser.LE, 0);
	};

	REGEX_MATCH() {
	    return this.getToken(ArangoDbParser.REGEX_MATCH, 0);
	};

	REGEX_NON_MATCH() {
	    return this.getToken(ArangoDbParser.REGEX_NON_MATCH, 0);
	};

	ALL() {
	    return this.getToken(ArangoDbParser.ALL, 0);
	};

	NONE() {
	    return this.getToken(ArangoDbParser.NONE, 0);
	};

	ANY() {
	    return this.getToken(ArangoDbParser.ANY, 0);
	};

	IN() {
	    return this.getToken(ArangoDbParser.IN, 0);
	};

	QM() {
	    return this.getToken(ArangoDbParser.QM, 0);
	};

	COLON() {
	    return this.getToken(ArangoDbParser.COLON, 0);
	};

	ASSIGN() {
	    return this.getToken(ArangoDbParser.ASSIGN, 0);
	};

	RANGE() {
	    return this.getToken(ArangoDbParser.RANGE, 0);
	};

	LIKE() {
	    return this.getToken(ArangoDbParser.LIKE, 0);
	};

	L_AND() {
	    return this.getToken(ArangoDbParser.L_AND, 0);
	};

	AND() {
	    return this.getToken(ArangoDbParser.AND, 0);
	};

	L_OR() {
	    return this.getToken(ArangoDbParser.L_OR, 0);
	};

	OR() {
	    return this.getToken(ArangoDbParser.OR, 0);
	};

	LSB() {
	    return this.getToken(ArangoDbParser.LSB, 0);
	};

	RSB() {
	    return this.getToken(ArangoDbParser.RSB, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.COMMA);
	    } else {
	        return this.getToken(ArangoDbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitExpr(this);
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
        this.ruleIndex = ArangoDbParser.RULE_literal;
    }

	numeric_literal() {
	    return this.getTypedRuleContext(Numeric_literalContext,0);
	};

	TRUE() {
	    return this.getToken(ArangoDbParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(ArangoDbParser.FALSE, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	array_literal() {
	    return this.getTypedRuleContext(Array_literalContext,0);
	};

	object_literal() {
	    return this.getTypedRuleContext(Object_literalContext,0);
	};

	NULL_() {
	    return this.getToken(ArangoDbParser.NULL_, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	BIND_PARAMETER() {
	    return this.getToken(ArangoDbParser.BIND_PARAMETER, 0);
	};

	new_old() {
	    return this.getTypedRuleContext(New_oldContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Array_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_array_literal;
    }

	LSB() {
	    return this.getToken(ArangoDbParser.LSB, 0);
	};

	RSB() {
	    return this.getToken(ArangoDbParser.RSB, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterArray_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitArray_literal(this);
		}
	}


}



class Object_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_object_literal;
    }

	LCB() {
	    return this.getToken(ArangoDbParser.LCB, 0);
	};

	RCB() {
	    return this.getToken(ArangoDbParser.RCB, 0);
	};

	pair_list() {
	    return this.getTypedRuleContext(Pair_listContext,0);
	};

	id_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Id_Context);
	    } else {
	        return this.getTypedRuleContext(Id_Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.COMMA);
	    } else {
	        return this.getToken(ArangoDbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterObject_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitObject_literal(this);
		}
	}


}



class Pair_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_pair_list;
    }

	pair = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PairContext);
	    } else {
	        return this.getTypedRuleContext(PairContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ArangoDbParser.COMMA);
	    } else {
	        return this.getToken(ArangoDbParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterPair_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitPair_list(this);
		}
	}


}



class PairContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_pair;
    }

	COLON() {
	    return this.getToken(ArangoDbParser.COLON, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterPair(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitPair(this);
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
        this.ruleIndex = ArangoDbParser.RULE_string;
    }

	STRING_LITERAL() {
	    return this.getToken(ArangoDbParser.STRING_LITERAL, 0);
	};

	DOUBLE_QUOTED_STRING_LITERAL() {
	    return this.getToken(ArangoDbParser.DOUBLE_QUOTED_STRING_LITERAL, 0);
	};

	BACKSTICK_STRING_LITERAL() {
	    return this.getToken(ArangoDbParser.BACKSTICK_STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitString(this);
		}
	}


}



class Numeric_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ArangoDbParser.RULE_numeric_literal;
    }

	DECIMAL_LITERAL() {
	    return this.getToken(ArangoDbParser.DECIMAL_LITERAL, 0);
	};

	FLOAT_LITERAL() {
	    return this.getToken(ArangoDbParser.FLOAT_LITERAL, 0);
	};

	REAL_LITERAL() {
	    return this.getToken(ArangoDbParser.REAL_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.enterNumeric_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ArangoDbParserListener ) {
	        listener.exitNumeric_literal(this);
		}
	}


}




ArangoDbParser.Arangodb_queryContext = Arangodb_queryContext; 
ArangoDbParser.Data_queryContext = Data_queryContext; 
ArangoDbParser.Data_access_queryContext = Data_access_queryContext; 
ArangoDbParser.For_opContext = For_opContext; 
ArangoDbParser.Data_modification_queryContext = Data_modification_queryContext; 
ArangoDbParser.Options_Context = Options_Context; 
ArangoDbParser.For_inContext = For_inContext; 
ArangoDbParser.FilterContext = FilterContext; 
ArangoDbParser.SortContext = SortContext; 
ArangoDbParser.LimitContext = LimitContext; 
ArangoDbParser.SearchContext = SearchContext; 
ArangoDbParser.Asc_descContext = Asc_descContext; 
ArangoDbParser.In_intoContext = In_intoContext; 
ArangoDbParser.Return_exprContext = Return_exprContext; 
ArangoDbParser.With_collection_listContext = With_collection_listContext; 
ArangoDbParser.Collection_listContext = Collection_listContext; 
ArangoDbParser.CollectionContext = CollectionContext; 
ArangoDbParser.CollectContext = CollectContext; 
ArangoDbParser.WindowContext = WindowContext; 
ArangoDbParser.Aggregate_assignContext = Aggregate_assignContext; 
ArangoDbParser.Let_listContext = Let_listContext; 
ArangoDbParser.Id_Context = Id_Context; 
ArangoDbParser.New_oldContext = New_oldContext; 
ArangoDbParser.ExprContext = ExprContext; 
ArangoDbParser.LiteralContext = LiteralContext; 
ArangoDbParser.Array_literalContext = Array_literalContext; 
ArangoDbParser.Object_literalContext = Object_literalContext; 
ArangoDbParser.Pair_listContext = Pair_listContext; 
ArangoDbParser.PairContext = PairContext; 
ArangoDbParser.StringContext = StringContext; 
ArangoDbParser.Numeric_literalContext = Numeric_literalContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
