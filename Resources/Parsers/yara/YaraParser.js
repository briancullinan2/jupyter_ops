// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/yara/YaraParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import YaraParserListener from './YaraParserListener.js';
const serializedATN = [4,1,104,445,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,1,0,4,0,68,8,0,11,
0,12,0,69,1,0,1,0,1,1,4,1,75,8,1,11,1,12,1,76,1,1,4,1,80,8,1,11,1,12,1,81,
1,1,4,1,85,8,1,11,1,12,1,86,3,1,89,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,4,5,4,98,
8,4,10,4,12,4,101,9,4,1,4,1,4,1,4,3,4,106,8,4,1,4,1,4,3,4,110,8,4,1,4,3,
4,113,8,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,4,6,122,8,6,11,6,12,6,123,1,7,1,7,
1,8,1,8,1,8,1,8,3,8,132,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,5,9,146,8,9,10,9,12,9,149,9,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,158,8,
9,1,10,1,10,1,10,4,10,163,8,10,11,10,12,10,164,1,10,3,10,168,8,10,1,10,1,
10,1,10,1,10,1,10,1,10,5,10,176,8,10,10,10,12,10,179,9,10,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,11,193,8,11,1,11,1,11,1,11,
1,11,1,11,1,11,3,11,201,8,11,1,11,1,11,3,11,205,8,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,3,11,214,8,11,1,11,3,11,217,8,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,5,11,228,8,11,10,11,12,11,231,9,11,1,11,1,11,1,11,4,
11,236,8,11,11,11,12,11,237,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,3,11,251,8,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,286,8,11,10,11,12,11,289,
9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,301,8,12,1,13,
1,13,1,13,1,13,1,14,1,14,1,14,5,14,310,8,14,10,14,12,14,313,9,14,1,15,1,
15,1,16,1,16,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,20,1,20,
1,20,4,20,332,8,20,11,20,12,20,333,1,21,1,21,1,21,4,21,339,8,21,11,21,12,
21,340,1,22,1,22,1,22,1,22,5,22,347,8,22,10,22,12,22,350,9,22,1,23,1,23,
1,23,1,23,1,23,1,23,3,23,358,8,23,1,23,1,23,3,23,362,8,23,1,23,1,23,3,23,
366,8,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,26,1,26,1,26,4,26,379,
8,26,11,26,12,26,380,1,26,1,26,1,26,3,26,386,8,26,1,27,1,27,1,27,3,27,391,
8,27,1,27,4,27,394,8,27,11,27,12,27,395,1,27,1,27,3,27,400,8,27,1,27,3,27,
403,8,27,1,28,1,28,4,28,407,8,28,11,28,12,28,408,1,28,1,28,4,28,413,8,28,
11,28,12,28,414,4,28,417,8,28,11,28,12,28,418,1,28,1,28,1,29,1,29,3,29,425,
8,29,1,29,1,29,3,29,429,8,29,3,29,431,8,29,1,29,1,29,1,30,1,30,1,30,1,30,
3,30,439,8,30,1,31,1,31,1,32,1,32,1,32,0,2,20,22,33,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
0,14,2,0,12,12,32,32,2,0,58,58,65,65,2,0,85,85,89,89,2,0,77,77,85,85,1,0,
60,62,1,0,58,59,1,0,73,74,2,0,52,52,63,64,1,0,66,71,2,0,85,85,87,87,4,0,
6,7,14,16,25,26,34,34,2,0,8,8,10,10,2,0,19,24,38,43,2,0,9,9,37,37,504,0,
67,1,0,0,0,2,88,1,0,0,0,4,90,1,0,0,0,6,93,1,0,0,0,8,99,1,0,0,0,10,117,1,
0,0,0,12,119,1,0,0,0,14,125,1,0,0,0,16,127,1,0,0,0,18,157,1,0,0,0,20,167,
1,0,0,0,22,250,1,0,0,0,24,300,1,0,0,0,26,302,1,0,0,0,28,306,1,0,0,0,30,314,
1,0,0,0,32,316,1,0,0,0,34,318,1,0,0,0,36,320,1,0,0,0,38,326,1,0,0,0,40,328,
1,0,0,0,42,335,1,0,0,0,44,342,1,0,0,0,46,365,1,0,0,0,48,367,1,0,0,0,50,371,
1,0,0,0,52,385,1,0,0,0,54,402,1,0,0,0,56,404,1,0,0,0,58,422,1,0,0,0,60,438,
1,0,0,0,62,440,1,0,0,0,64,442,1,0,0,0,66,68,3,2,1,0,67,66,1,0,0,0,68,69,
1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,71,1,0,0,0,71,72,5,0,0,1,72,1,1,0,
0,0,73,75,3,4,2,0,74,73,1,0,0,0,75,76,1,0,0,0,76,74,1,0,0,0,76,77,1,0,0,
0,77,89,1,0,0,0,78,80,3,6,3,0,79,78,1,0,0,0,80,81,1,0,0,0,81,79,1,0,0,0,
81,82,1,0,0,0,82,89,1,0,0,0,83,85,3,8,4,0,84,83,1,0,0,0,85,86,1,0,0,0,86,
84,1,0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,74,1,0,0,0,88,79,1,0,0,0,88,84,
1,0,0,0,89,3,1,0,0,0,90,91,5,13,0,0,91,92,3,62,31,0,92,5,1,0,0,0,93,94,5,
18,0,0,94,95,3,62,31,0,95,7,1,0,0,0,96,98,3,10,5,0,97,96,1,0,0,0,98,101,
1,0,0,0,99,97,1,0,0,0,99,100,1,0,0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,
103,5,33,0,0,103,105,3,14,7,0,104,106,3,12,6,0,105,104,1,0,0,0,105,106,1,
0,0,0,106,107,1,0,0,0,107,109,5,47,0,0,108,110,3,42,21,0,109,108,1,0,0,0,
109,110,1,0,0,0,110,112,1,0,0,0,111,113,3,40,20,0,112,111,1,0,0,0,112,113,
1,0,0,0,113,114,1,0,0,0,114,115,3,16,8,0,115,116,5,48,0,0,116,9,1,0,0,0,
117,118,7,0,0,0,118,11,1,0,0,0,119,121,5,56,0,0,120,122,3,14,7,0,121,120,
1,0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,13,1,0,0,0,125,
126,5,86,0,0,126,15,1,0,0,0,127,128,5,5,0,0,128,131,5,56,0,0,129,132,3,22,
11,0,130,132,3,18,9,0,131,129,1,0,0,0,131,130,1,0,0,0,132,17,1,0,0,0,133,
134,5,11,0,0,134,135,3,22,11,0,135,136,5,56,0,0,136,137,5,45,0,0,137,138,
3,20,10,0,138,139,5,46,0,0,139,158,1,0,0,0,140,141,5,11,0,0,141,142,5,3,
0,0,142,147,3,14,7,0,143,144,5,76,0,0,144,146,3,14,7,0,145,143,1,0,0,0,146,
149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,1,0,
0,0,150,151,5,17,0,0,151,152,3,22,11,0,152,153,5,56,0,0,153,154,5,45,0,0,
154,155,3,20,10,0,155,156,5,46,0,0,156,158,1,0,0,0,157,133,1,0,0,0,157,140,
1,0,0,0,158,19,1,0,0,0,159,160,6,10,-1,0,160,168,3,22,11,0,161,163,5,29,
0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,
166,1,0,0,0,166,168,3,20,10,3,167,159,1,0,0,0,167,162,1,0,0,0,168,177,1,
0,0,0,169,170,10,2,0,0,170,171,5,2,0,0,171,176,3,20,10,3,172,173,10,1,0,
0,173,174,5,31,0,0,174,176,3,20,10,2,175,169,1,0,0,0,175,172,1,0,0,0,176,
179,1,0,0,0,177,175,1,0,0,0,177,178,1,0,0,0,178,21,1,0,0,0,179,177,1,0,0,
0,180,181,6,11,-1,0,181,182,7,1,0,0,182,251,3,22,11,23,183,184,3,34,17,0,
184,185,5,45,0,0,185,186,3,22,11,0,186,187,5,46,0,0,187,251,1,0,0,0,188,
193,3,64,32,0,189,193,5,1,0,0,190,193,5,3,0,0,191,193,5,28,0,0,192,188,1,
0,0,0,192,189,1,0,0,0,192,190,1,0,0,0,192,191,1,0,0,0,193,194,1,0,0,0,194,
200,5,30,0,0,195,201,3,26,13,0,196,197,5,45,0,0,197,198,5,86,0,0,198,201,
5,46,0,0,199,201,5,36,0,0,200,195,1,0,0,0,200,196,1,0,0,0,200,199,1,0,0,
0,201,204,1,0,0,0,202,203,5,17,0,0,203,205,3,36,18,0,204,202,1,0,0,0,204,
205,1,0,0,0,205,251,1,0,0,0,206,207,7,2,0,0,207,208,5,17,0,0,208,251,3,36,
18,0,209,214,3,64,32,0,210,214,5,1,0,0,211,214,5,3,0,0,212,214,5,28,0,0,
213,209,1,0,0,0,213,210,1,0,0,0,213,211,1,0,0,0,213,212,1,0,0,0,214,216,
1,0,0,0,215,217,3,14,7,0,216,215,1,0,0,0,216,217,1,0,0,0,217,218,1,0,0,0,
218,219,5,17,0,0,219,251,3,36,18,0,220,221,7,3,0,0,221,222,5,4,0,0,222,251,
3,22,11,13,223,224,5,45,0,0,224,229,3,64,32,0,225,226,5,76,0,0,226,228,3,
64,32,0,227,225,1,0,0,0,228,231,1,0,0,0,229,227,1,0,0,0,229,230,1,0,0,0,
230,232,1,0,0,0,231,229,1,0,0,0,232,233,5,46,0,0,233,251,1,0,0,0,234,236,
5,29,0,0,235,234,1,0,0,0,236,237,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,
238,239,1,0,0,0,239,251,3,22,11,10,240,241,5,45,0,0,241,242,3,22,11,0,242,
243,5,46,0,0,243,251,1,0,0,0,244,251,3,24,12,0,245,251,3,32,16,0,246,251,
5,77,0,0,247,251,5,78,0,0,248,251,5,55,0,0,249,251,5,54,0,0,250,180,1,0,
0,0,250,183,1,0,0,0,250,192,1,0,0,0,250,206,1,0,0,0,250,213,1,0,0,0,250,
220,1,0,0,0,250,223,1,0,0,0,250,235,1,0,0,0,250,240,1,0,0,0,250,244,1,0,
0,0,250,245,1,0,0,0,250,246,1,0,0,0,250,247,1,0,0,0,250,248,1,0,0,0,250,
249,1,0,0,0,251,287,1,0,0,0,252,253,10,24,0,0,253,254,5,72,0,0,254,286,3,
22,11,25,255,256,10,21,0,0,256,257,7,4,0,0,257,286,3,22,11,22,258,259,10,
20,0,0,259,260,7,5,0,0,260,286,3,22,11,21,261,262,10,19,0,0,262,263,7,6,
0,0,263,286,3,22,11,20,264,265,10,18,0,0,265,266,7,7,0,0,266,286,3,22,11,
19,267,268,10,17,0,0,268,269,7,8,0,0,269,286,3,22,11,18,270,271,10,11,0,
0,271,272,3,30,15,0,272,273,3,22,11,12,273,286,1,0,0,0,274,275,10,9,0,0,
275,276,5,2,0,0,276,286,3,22,11,10,277,278,10,8,0,0,278,279,5,31,0,0,279,
286,3,22,11,9,280,281,10,25,0,0,281,282,5,49,0,0,282,283,3,22,11,0,283,284,
5,50,0,0,284,286,1,0,0,0,285,252,1,0,0,0,285,255,1,0,0,0,285,258,1,0,0,0,
285,261,1,0,0,0,285,264,1,0,0,0,285,267,1,0,0,0,285,270,1,0,0,0,285,274,
1,0,0,0,285,277,1,0,0,0,285,280,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,
287,288,1,0,0,0,288,23,1,0,0,0,289,287,1,0,0,0,290,301,3,38,19,0,291,301,
3,64,32,0,292,301,5,85,0,0,293,301,5,84,0,0,294,301,5,89,0,0,295,301,5,90,
0,0,296,301,5,91,0,0,297,301,5,92,0,0,298,301,5,86,0,0,299,301,5,88,0,0,
300,290,1,0,0,0,300,291,1,0,0,0,300,292,1,0,0,0,300,293,1,0,0,0,300,294,
1,0,0,0,300,295,1,0,0,0,300,296,1,0,0,0,300,297,1,0,0,0,300,298,1,0,0,0,
300,299,1,0,0,0,301,25,1,0,0,0,302,303,5,45,0,0,303,304,3,28,14,0,304,305,
5,46,0,0,305,27,1,0,0,0,306,311,7,9,0,0,307,308,5,76,0,0,308,310,7,9,0,0,
309,307,1,0,0,0,310,313,1,0,0,0,311,309,1,0,0,0,311,312,1,0,0,0,312,29,1,
0,0,0,313,311,1,0,0,0,314,315,7,10,0,0,315,31,1,0,0,0,316,317,7,11,0,0,317,
33,1,0,0,0,318,319,7,12,0,0,319,35,1,0,0,0,320,321,5,45,0,0,321,322,3,22,
11,0,322,323,5,75,0,0,323,324,3,22,11,0,324,325,5,46,0,0,325,37,1,0,0,0,
326,327,7,13,0,0,327,39,1,0,0,0,328,329,5,35,0,0,329,331,5,56,0,0,330,332,
3,44,22,0,331,330,1,0,0,0,332,333,1,0,0,0,333,331,1,0,0,0,333,334,1,0,0,
0,334,41,1,0,0,0,335,336,5,27,0,0,336,338,5,56,0,0,337,339,3,50,25,0,338,
337,1,0,0,0,339,340,1,0,0,0,340,338,1,0,0,0,340,341,1,0,0,0,341,43,1,0,0,
0,342,343,5,85,0,0,343,344,5,101,0,0,344,348,3,52,26,0,345,347,3,46,23,0,
346,345,1,0,0,0,347,350,1,0,0,0,348,346,1,0,0,0,348,349,1,0,0,0,349,45,1,
0,0,0,350,348,1,0,0,0,351,366,5,98,0,0,352,366,5,99,0,0,353,366,5,94,0,0,
354,366,5,100,0,0,355,357,5,95,0,0,356,358,3,48,24,0,357,356,1,0,0,0,357,
358,1,0,0,0,358,366,1,0,0,0,359,361,5,96,0,0,360,362,3,48,24,0,361,360,1,
0,0,0,361,362,1,0,0,0,362,366,1,0,0,0,363,366,5,97,0,0,364,366,5,32,0,0,
365,351,1,0,0,0,365,352,1,0,0,0,365,353,1,0,0,0,365,354,1,0,0,0,365,355,
1,0,0,0,365,359,1,0,0,0,365,363,1,0,0,0,365,364,1,0,0,0,366,47,1,0,0,0,367,
368,5,45,0,0,368,369,3,62,31,0,369,370,5,46,0,0,370,49,1,0,0,0,371,372,3,
14,7,0,372,373,5,57,0,0,373,374,3,60,30,0,374,51,1,0,0,0,375,386,3,62,31,
0,376,378,5,102,0,0,377,379,3,54,27,0,378,377,1,0,0,0,379,380,1,0,0,0,380,
378,1,0,0,0,380,381,1,0,0,0,381,382,1,0,0,0,382,383,5,48,0,0,383,386,1,0,
0,0,384,386,5,103,0,0,385,375,1,0,0,0,385,376,1,0,0,0,385,384,1,0,0,0,386,
53,1,0,0,0,387,403,5,83,0,0,388,391,5,83,0,0,389,391,3,56,28,0,390,388,1,
0,0,0,390,389,1,0,0,0,391,393,1,0,0,0,392,394,3,58,29,0,393,392,1,0,0,0,
394,395,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,399,1,0,0,0,397,400,
5,83,0,0,398,400,3,56,28,0,399,397,1,0,0,0,399,398,1,0,0,0,400,403,1,0,0,
0,401,403,3,56,28,0,402,387,1,0,0,0,402,390,1,0,0,0,402,401,1,0,0,0,403,
55,1,0,0,0,404,406,5,45,0,0,405,407,5,83,0,0,406,405,1,0,0,0,407,408,1,0,
0,0,408,406,1,0,0,0,408,409,1,0,0,0,409,416,1,0,0,0,410,412,5,52,0,0,411,
413,5,83,0,0,412,411,1,0,0,0,413,414,1,0,0,0,414,412,1,0,0,0,414,415,1,0,
0,0,415,417,1,0,0,0,416,410,1,0,0,0,417,418,1,0,0,0,418,416,1,0,0,0,418,
419,1,0,0,0,419,420,1,0,0,0,420,421,5,46,0,0,421,57,1,0,0,0,422,424,5,49,
0,0,423,425,5,104,0,0,424,423,1,0,0,0,424,425,1,0,0,0,425,430,1,0,0,0,426,
428,5,58,0,0,427,429,5,104,0,0,428,427,1,0,0,0,428,429,1,0,0,0,429,431,1,
0,0,0,430,426,1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,0,432,433,5,50,0,0,433,
59,1,0,0,0,434,439,3,62,31,0,435,439,3,38,19,0,436,439,3,64,32,0,437,439,
5,84,0,0,438,434,1,0,0,0,438,435,1,0,0,0,438,436,1,0,0,0,438,437,1,0,0,0,
439,61,1,0,0,0,440,441,5,88,0,0,441,63,1,0,0,0,442,443,5,82,0,0,443,65,1,
0,0,0,48,69,76,81,86,88,99,105,109,112,123,131,147,157,164,167,175,177,192,
200,204,213,216,229,237,250,285,287,300,311,333,340,348,357,361,365,380,
385,390,395,399,402,408,414,418,424,428,430,438];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class YaraParser extends antlr4.Parser {

    static grammarFileName = "YaraParser.g4";
    static literalNames = [ null, "'all'", "'and'", "'any'", "'at'", "'condition'", 
                            "'contains'", "'endswith'", "'entrypoint'", 
                            "'false'", "'filesize'", "'for'", "'global'", 
                            "'import'", "'icontains'", "'iendswith'", "'iequals'", 
                            "'in'", "'include'", "'int16'", "'int16be'", 
                            "'int32'", "'int32be'", "'int8'", "'int8be'", 
                            "'istartswith'", "'matches'", "'meta'", "'none'", 
                            "'not'", "'of'", "'or'", "'private'", "'rule'", 
                            "'startswith'", "'strings'", "'them'", "'true'", 
                            "'uint16'", "'uint16be'", "'uint32'", "'uint32be'", 
                            "'uint8'", "'uint8be'", "'defined'", "'('", 
                            "')'", null, "'}'", "'['", "']'", "'/'", "'|'", 
                            "'?'", "'!'", "'@'", "':'", null, "'-'", "'+'", 
                            "'*'", "'\\'", "'%'", "'&'", "'^'", "'~'", "'<'", 
                            "'<='", "'>'", "'>='", "'=='", "'!='", "'.'", 
                            "'<<'", "'>>'", "'..'", "','", "'$'", "'#'", 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "'ascii'", 
                            "'base64'", "'base64wide'", "'fullword'", "'nocase'", 
                            "'wide'", "'xor'" ];
    static symbolicNames = [ null, "ALL", "AND", "ANY", "AT", "CONDITION", 
                             "CONTAINS", "ENDSWITH", "ENTRYPOINT", "FALSE", 
                             "FILESIZE", "FOR", "GLOBAL", "IMPORT", "ICONTAINS", 
                             "IENDSWITH", "IEQUALS", "IN", "INCLUDE", "INT16", 
                             "INT16BE", "INT32", "INT32BE", "INT8", "INT8BE", 
                             "ISTARTSWITH", "MATCHES", "META", "NONE", "NOT", 
                             "OF", "OR", "PRIVATE", "RULE", "STARTSWITH", 
                             "STRINGS", "THEM", "TRUE", "UINT16", "UINT16BE", 
                             "UINT32", "UINT32BE", "UINT8", "UINT8BE", "DEFINED", 
                             "LP", "RP", "LCB", "RCB", "LSB", "RSB", "SLASH", 
                             "PIPE", "QM", "EM", "AT_", "COLON", "ASSIGN", 
                             "MINUS", "PLUS", "STAR", "DIV", "MOD", "BITAND", 
                             "BITXOR", "BITNOT", "LT", "LE", "GT", "GE", 
                             "EQUAL", "NE", "DOT", "LSHIFT", "RSHIFT", "RANGE", 
                             "COMMA", "DOLLAR", "HASH", "WHITE_SPACE", "BLOCK_COMMENT", 
                             "LINE_COMMENT", "DECIMAL_LITERAL", "HEX_STR", 
                             "HEX_LITERAL", "STRING_ID", "ID", "STRING_WILD", 
                             "DOUBLE_QUOTE_STR", "COUNT_REF", "OFFSET_REF", 
                             "LENGTH_REF", "SIZE_LITERAL", "BYTE_MASKED", 
                             "ASCII", "BASE64", "BASE64WIDE", "FULLWORD", 
                             "NOCASE", "WIDE", "XOR", "ASSIGN_S", "LCB_S", 
                             "REGEX_STR", "DEC" ];
    static ruleNames = [ "startRule", "decl", "import_decl", "include_decl", 
                         "rule_decl", "rule_modifier", "tags", "id_", "condition_section", 
                         "for_expr", "bool_expr", "expr", "literal", "string_set", 
                         "string_id_list", "function", "pos_fn", "fn4", 
                         "range", "true_false", "strings_section", "meta_section", 
                         "string_def", "string_modifier", "args", "meta_def", 
                         "string_value", "string_construct", "alt", "jump", 
                         "meta_value", "string", "number" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = YaraParser.ruleNames;
        this.literalNames = YaraParser.literalNames;
        this.symbolicNames = YaraParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.bool_expr_sempred(localctx, predIndex);
    	case 11:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    bool_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 24);
    		case 3:
    			return this.precpred(this._ctx, 21);
    		case 4:
    			return this.precpred(this._ctx, 20);
    		case 5:
    			return this.precpred(this._ctx, 19);
    		case 6:
    			return this.precpred(this._ctx, 18);
    		case 7:
    			return this.precpred(this._ctx, 17);
    		case 8:
    			return this.precpred(this._ctx, 11);
    		case 9:
    			return this.precpred(this._ctx, 9);
    		case 10:
    			return this.precpred(this._ctx, 8);
    		case 11:
    			return this.precpred(this._ctx, 25);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	startRule() {
	    let localctx = new StartRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, YaraParser.RULE_startRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 67; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 66;
	            this.decl();
	            this.state = 69; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 12)) & ~0x1f) === 0 && ((1 << (_la - 12)) & 3145795) !== 0));
	        this.state = 71;
	        this.match(YaraParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, YaraParser.RULE_decl);
	    try {
	        this.state = 88;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 74; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 73;
	            		this.import_decl();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 76; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 79; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 78;
	            		this.include_decl();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 81; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 12:
	        case 32:
	        case 33:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 84; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 83;
	            		this.rule_decl();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 86; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
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



	import_decl() {
	    let localctx = new Import_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, YaraParser.RULE_import_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(YaraParser.IMPORT);
	        this.state = 91;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	include_decl() {
	    let localctx = new Include_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, YaraParser.RULE_include_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(YaraParser.INCLUDE);
	        this.state = 94;
	        this.string();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rule_decl() {
	    let localctx = new Rule_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, YaraParser.RULE_rule_decl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===12 || _la===32) {
	            this.state = 96;
	            this.rule_modifier();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
	        this.match(YaraParser.RULE);
	        this.state = 103;
	        this.id_();
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===56) {
	            this.state = 104;
	            this.tags();
	        }

	        this.state = 107;
	        this.match(YaraParser.LCB);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 108;
	            this.meta_section();
	        }

	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35) {
	            this.state = 111;
	            this.strings_section();
	        }

	        this.state = 114;
	        this.condition_section();
	        this.state = 115;
	        this.match(YaraParser.RCB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rule_modifier() {
	    let localctx = new Rule_modifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, YaraParser.RULE_rule_modifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===32)) {
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



	tags() {
	    let localctx = new TagsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, YaraParser.RULE_tags);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(YaraParser.COLON);
	        this.state = 121; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 120;
	            this.id_();
	            this.state = 123; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===86);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 14, YaraParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(YaraParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition_section() {
	    let localctx = new Condition_sectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, YaraParser.RULE_condition_section);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(YaraParser.CONDITION);
	        this.state = 128;
	        this.match(YaraParser.COLON);
	        this.state = 131;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 3:
	        case 8:
	        case 9:
	        case 10:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 28:
	        case 29:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 45:
	        case 54:
	        case 55:
	        case 58:
	        case 65:
	        case 77:
	        case 78:
	        case 82:
	        case 84:
	        case 85:
	        case 86:
	        case 88:
	        case 89:
	        case 90:
	        case 91:
	        case 92:
	            this.state = 129;
	            this.expr(0);
	            break;
	        case 11:
	            this.state = 130;
	            this.for_expr();
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



	for_expr() {
	    let localctx = new For_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, YaraParser.RULE_for_expr);
	    var _la = 0;
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 133;
	            this.match(YaraParser.FOR);
	            this.state = 134;
	            this.expr(0);
	            this.state = 135;
	            this.match(YaraParser.COLON);
	            this.state = 136;
	            this.match(YaraParser.LP);
	            this.state = 137;
	            this.bool_expr(0);
	            this.state = 138;
	            this.match(YaraParser.RP);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 140;
	            this.match(YaraParser.FOR);
	            this.state = 141;
	            this.match(YaraParser.ANY);
	            this.state = 142;
	            this.id_();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 143;
	                this.match(YaraParser.COMMA);
	                this.state = 144;
	                this.id_();
	                this.state = 149;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 150;
	            this.match(YaraParser.IN);
	            this.state = 151;
	            this.expr(0);
	            this.state = 152;
	            this.match(YaraParser.COLON);
	            this.state = 153;
	            this.match(YaraParser.LP);
	            this.state = 154;
	            this.bool_expr(0);
	            this.state = 155;
	            this.match(YaraParser.RP);
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


	bool_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Bool_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, YaraParser.RULE_bool_expr, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 160;
	            this.expr(0);
	            break;

	        case 2:
	            this.state = 162; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 161;
	            		this.match(YaraParser.NOT);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 164; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,13, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 166;
	            this.bool_expr(3);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 177;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 175;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Bool_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_bool_expr);
	                    this.state = 169;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 170;
	                    this.match(YaraParser.AND);
	                    this.state = 171;
	                    this.bool_expr(3);
	                    break;

	                case 2:
	                    localctx = new Bool_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_bool_expr);
	                    this.state = 172;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 173;
	                    this.match(YaraParser.OR);
	                    this.state = 174;
	                    this.bool_expr(2);
	                    break;

	                } 
	            }
	            this.state = 179;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, YaraParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 250;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 181;
	            _la = this._input.LA(1);
	            if(!(_la===58 || _la===65)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 182;
	            this.expr(23);
	            break;

	        case 2:
	            this.state = 183;
	            this.fn4();
	            this.state = 184;
	            this.match(YaraParser.LP);
	            this.state = 185;
	            this.expr(0);
	            this.state = 186;
	            this.match(YaraParser.RP);
	            break;

	        case 3:
	            this.state = 192;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 82:
	                this.state = 188;
	                this.number();
	                break;
	            case 1:
	                this.state = 189;
	                this.match(YaraParser.ALL);
	                break;
	            case 3:
	                this.state = 190;
	                this.match(YaraParser.ANY);
	                break;
	            case 28:
	                this.state = 191;
	                this.match(YaraParser.NONE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 194;
	            this.match(YaraParser.OF);
	            this.state = 200;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 195;
	                this.string_set();
	                break;

	            case 2:
	                this.state = 196;
	                this.match(YaraParser.LP);
	                this.state = 197;
	                this.match(YaraParser.ID);
	                this.state = 198;
	                this.match(YaraParser.RP);
	                break;

	            case 3:
	                this.state = 199;
	                this.match(YaraParser.THEM);
	                break;

	            }
	            this.state = 204;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	            if(la_===1) {
	                this.state = 202;
	                this.match(YaraParser.IN);
	                this.state = 203;
	                this.range();

	            }
	            break;

	        case 4:
	            this.state = 206;
	            _la = this._input.LA(1);
	            if(!(_la===85 || _la===89)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 207;
	            this.match(YaraParser.IN);
	            this.state = 208;
	            this.range();
	            break;

	        case 5:
	            this.state = 213;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 82:
	                this.state = 209;
	                this.number();
	                break;
	            case 1:
	                this.state = 210;
	                this.match(YaraParser.ALL);
	                break;
	            case 3:
	                this.state = 211;
	                this.match(YaraParser.ANY);
	                break;
	            case 28:
	                this.state = 212;
	                this.match(YaraParser.NONE);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===86) {
	                this.state = 215;
	                this.id_();
	            }

	            this.state = 218;
	            this.match(YaraParser.IN);
	            this.state = 219;
	            this.range();
	            break;

	        case 6:
	            this.state = 220;
	            _la = this._input.LA(1);
	            if(!(_la===77 || _la===85)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 221;
	            this.match(YaraParser.AT);
	            this.state = 222;
	            this.expr(13);
	            break;

	        case 7:
	            this.state = 223;
	            this.match(YaraParser.LP);
	            this.state = 224;
	            this.number();
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 225;
	                this.match(YaraParser.COMMA);
	                this.state = 226;
	                this.number();
	                this.state = 231;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 232;
	            this.match(YaraParser.RP);
	            break;

	        case 8:
	            this.state = 235; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 234;
	            		this.match(YaraParser.NOT);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 237; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,23, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 239;
	            this.expr(10);
	            break;

	        case 9:
	            this.state = 240;
	            this.match(YaraParser.LP);
	            this.state = 241;
	            this.expr(0);
	            this.state = 242;
	            this.match(YaraParser.RP);
	            break;

	        case 10:
	            this.state = 244;
	            this.literal();
	            break;

	        case 11:
	            this.state = 245;
	            this.pos_fn();
	            break;

	        case 12:
	            this.state = 246;
	            this.match(YaraParser.DOLLAR);
	            break;

	        case 13:
	            this.state = 247;
	            this.match(YaraParser.HASH);
	            break;

	        case 14:
	            this.state = 248;
	            this.match(YaraParser.AT_);
	            break;

	        case 15:
	            this.state = 249;
	            this.match(YaraParser.EM);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 287;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 285;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 252;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 253;
	                    this.match(YaraParser.DOT);
	                    this.state = 254;
	                    this.expr(25);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 255;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 256;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 257;
	                    this.expr(22);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 258;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 259;
	                    _la = this._input.LA(1);
	                    if(!(_la===58 || _la===59)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 260;
	                    this.expr(21);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 261;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 262;
	                    _la = this._input.LA(1);
	                    if(!(_la===73 || _la===74)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 263;
	                    this.expr(20);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 264;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 265;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 6145) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 266;
	                    this.expr(19);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 267;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 268;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 66)) & ~0x1f) === 0 && ((1 << (_la - 66)) & 63) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 269;
	                    this.expr(18);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 270;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 271;
	                    this.function_();
	                    this.state = 272;
	                    this.expr(12);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 274;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 275;
	                    this.match(YaraParser.AND);
	                    this.state = 276;
	                    this.expr(10);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 277;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 278;
	                    this.match(YaraParser.OR);
	                    this.state = 279;
	                    this.expr(9);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, YaraParser.RULE_expr);
	                    this.state = 280;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 281;
	                    this.match(YaraParser.LSB);
	                    this.state = 282;
	                    this.expr(0);
	                    this.state = 283;
	                    this.match(YaraParser.RSB);
	                    break;

	                } 
	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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
	    this.enterRule(localctx, 24, YaraParser.RULE_literal);
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.true_false();
	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 291;
	            this.number();
	            break;
	        case 85:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 292;
	            this.match(YaraParser.STRING_ID);
	            break;
	        case 84:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 293;
	            this.match(YaraParser.HEX_LITERAL);
	            break;
	        case 89:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 294;
	            this.match(YaraParser.COUNT_REF);
	            break;
	        case 90:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 295;
	            this.match(YaraParser.OFFSET_REF);
	            break;
	        case 91:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 296;
	            this.match(YaraParser.LENGTH_REF);
	            break;
	        case 92:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 297;
	            this.match(YaraParser.SIZE_LITERAL);
	            break;
	        case 86:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 298;
	            this.match(YaraParser.ID);
	            break;
	        case 88:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 299;
	            this.match(YaraParser.DOUBLE_QUOTE_STR);
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



	string_set() {
	    let localctx = new String_setContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, YaraParser.RULE_string_set);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(YaraParser.LP);
	        this.state = 303;
	        this.string_id_list();
	        this.state = 304;
	        this.match(YaraParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_id_list() {
	    let localctx = new String_id_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, YaraParser.RULE_string_id_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        _la = this._input.LA(1);
	        if(!(_la===85 || _la===87)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 311;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===76) {
	            this.state = 307;
	            this.match(YaraParser.COMMA);
	            this.state = 308;
	            _la = this._input.LA(1);
	            if(!(_la===85 || _la===87)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
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



	function_() {
	    let localctx = new FunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, YaraParser.RULE_function);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        _la = this._input.LA(1);
	        if(!(((((_la - 6)) & ~0x1f) === 0 && ((1 << (_la - 6)) & 270010115) !== 0))) {
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



	pos_fn() {
	    let localctx = new Pos_fnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, YaraParser.RULE_pos_fn);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        _la = this._input.LA(1);
	        if(!(_la===8 || _la===10)) {
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



	fn4() {
	    let localctx = new Fn4Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, YaraParser.RULE_fn4);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 318;
	        _la = this._input.LA(1);
	        if(!(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 33030207) !== 0))) {
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



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, YaraParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(YaraParser.LP);
	        this.state = 321;
	        this.expr(0);
	        this.state = 322;
	        this.match(YaraParser.RANGE);
	        this.state = 323;
	        this.expr(0);
	        this.state = 324;
	        this.match(YaraParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	true_false() {
	    let localctx = new True_falseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, YaraParser.RULE_true_false);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        _la = this._input.LA(1);
	        if(!(_la===9 || _la===37)) {
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



	strings_section() {
	    let localctx = new Strings_sectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, YaraParser.RULE_strings_section);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(YaraParser.STRINGS);
	        this.state = 329;
	        this.match(YaraParser.COLON);
	        this.state = 331; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 330;
	            this.string_def();
	            this.state = 333; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===85);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	meta_section() {
	    let localctx = new Meta_sectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, YaraParser.RULE_meta_section);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(YaraParser.META);
	        this.state = 336;
	        this.match(YaraParser.COLON);
	        this.state = 338; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 337;
	            this.meta_def();
	            this.state = 340; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===86);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_def() {
	    let localctx = new String_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, YaraParser.RULE_string_def);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.match(YaraParser.STRING_ID);
	        this.state = 343;
	        this.match(YaraParser.ASSIGN_S);
	        this.state = 344;
	        this.string_value();
	        this.state = 348;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32 || ((((_la - 94)) & ~0x1f) === 0 && ((1 << (_la - 94)) & 127) !== 0)) {
	            this.state = 345;
	            this.string_modifier();
	            this.state = 350;
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



	string_modifier() {
	    let localctx = new String_modifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, YaraParser.RULE_string_modifier);
	    var _la = 0;
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 98:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.match(YaraParser.NOCASE);
	            break;
	        case 99:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            this.match(YaraParser.WIDE);
	            break;
	        case 94:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 353;
	            this.match(YaraParser.ASCII);
	            break;
	        case 100:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 354;
	            this.match(YaraParser.XOR);
	            break;
	        case 95:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 355;
	            this.match(YaraParser.BASE64);
	            this.state = 357;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 356;
	                this.args();
	            }

	            break;
	        case 96:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 359;
	            this.match(YaraParser.BASE64WIDE);
	            this.state = 361;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===45) {
	                this.state = 360;
	                this.args();
	            }

	            break;
	        case 97:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 363;
	            this.match(YaraParser.FULLWORD);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 364;
	            this.match(YaraParser.PRIVATE);
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



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, YaraParser.RULE_args);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(YaraParser.LP);
	        this.state = 368;
	        this.string();
	        this.state = 369;
	        this.match(YaraParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	meta_def() {
	    let localctx = new Meta_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, YaraParser.RULE_meta_def);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.id_();
	        this.state = 372;
	        this.match(YaraParser.ASSIGN);
	        this.state = 373;
	        this.meta_value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_value() {
	    let localctx = new String_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, YaraParser.RULE_string_value);
	    var _la = 0;
	    try {
	        this.state = 385;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 88:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 375;
	            this.string();
	            break;
	        case 102:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            this.match(YaraParser.LCB_S);
	            this.state = 378; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 377;
	                this.string_construct();
	                this.state = 380; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===45 || _la===83);
	            this.state = 382;
	            this.match(YaraParser.RCB);
	            break;
	        case 103:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 384;
	            this.match(YaraParser.REGEX_STR);
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



	string_construct() {
	    let localctx = new String_constructContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, YaraParser.RULE_string_construct);
	    var _la = 0;
	    try {
	        this.state = 402;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 387;
	            this.match(YaraParser.HEX_STR);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 390;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 83:
	                this.state = 388;
	                this.match(YaraParser.HEX_STR);
	                break;
	            case 45:
	                this.state = 389;
	                this.alt();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 393; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 392;
	                this.jump();
	                this.state = 395; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===49);
	            this.state = 399;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 83:
	                this.state = 397;
	                this.match(YaraParser.HEX_STR);
	                break;
	            case 45:
	                this.state = 398;
	                this.alt();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 401;
	            this.alt();
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



	alt() {
	    let localctx = new AltContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, YaraParser.RULE_alt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(YaraParser.LP);
	        this.state = 406; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 405;
	            this.match(YaraParser.HEX_STR);
	            this.state = 408; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===83);
	        this.state = 416; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 410;
	            this.match(YaraParser.PIPE);
	            this.state = 412; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 411;
	                this.match(YaraParser.HEX_STR);
	                this.state = 414; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===83);
	            this.state = 418; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===52);
	        this.state = 420;
	        this.match(YaraParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	jump() {
	    let localctx = new JumpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, YaraParser.RULE_jump);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(YaraParser.LSB);

	        this.state = 424;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===104) {
	            this.state = 423;
	            this.match(YaraParser.DEC);
	        }

	        this.state = 430;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 426;
	            this.match(YaraParser.MINUS);
	            this.state = 428;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===104) {
	                this.state = 427;
	                this.match(YaraParser.DEC);
	            }

	        }

	        this.state = 432;
	        this.match(YaraParser.RSB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	meta_value() {
	    let localctx = new Meta_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, YaraParser.RULE_meta_value);
	    try {
	        this.state = 438;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 88:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 434;
	            this.string();
	            break;
	        case 9:
	        case 37:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 435;
	            this.true_false();
	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 436;
	            this.number();
	            break;
	        case 84:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 437;
	            this.match(YaraParser.HEX_LITERAL);
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, YaraParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(YaraParser.DOUBLE_QUOTE_STR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 64, YaraParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.match(YaraParser.DECIMAL_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

YaraParser.EOF = antlr4.Token.EOF;
YaraParser.ALL = 1;
YaraParser.AND = 2;
YaraParser.ANY = 3;
YaraParser.AT = 4;
YaraParser.CONDITION = 5;
YaraParser.CONTAINS = 6;
YaraParser.ENDSWITH = 7;
YaraParser.ENTRYPOINT = 8;
YaraParser.FALSE = 9;
YaraParser.FILESIZE = 10;
YaraParser.FOR = 11;
YaraParser.GLOBAL = 12;
YaraParser.IMPORT = 13;
YaraParser.ICONTAINS = 14;
YaraParser.IENDSWITH = 15;
YaraParser.IEQUALS = 16;
YaraParser.IN = 17;
YaraParser.INCLUDE = 18;
YaraParser.INT16 = 19;
YaraParser.INT16BE = 20;
YaraParser.INT32 = 21;
YaraParser.INT32BE = 22;
YaraParser.INT8 = 23;
YaraParser.INT8BE = 24;
YaraParser.ISTARTSWITH = 25;
YaraParser.MATCHES = 26;
YaraParser.META = 27;
YaraParser.NONE = 28;
YaraParser.NOT = 29;
YaraParser.OF = 30;
YaraParser.OR = 31;
YaraParser.PRIVATE = 32;
YaraParser.RULE = 33;
YaraParser.STARTSWITH = 34;
YaraParser.STRINGS = 35;
YaraParser.THEM = 36;
YaraParser.TRUE = 37;
YaraParser.UINT16 = 38;
YaraParser.UINT16BE = 39;
YaraParser.UINT32 = 40;
YaraParser.UINT32BE = 41;
YaraParser.UINT8 = 42;
YaraParser.UINT8BE = 43;
YaraParser.DEFINED = 44;
YaraParser.LP = 45;
YaraParser.RP = 46;
YaraParser.LCB = 47;
YaraParser.RCB = 48;
YaraParser.LSB = 49;
YaraParser.RSB = 50;
YaraParser.SLASH = 51;
YaraParser.PIPE = 52;
YaraParser.QM = 53;
YaraParser.EM = 54;
YaraParser.AT_ = 55;
YaraParser.COLON = 56;
YaraParser.ASSIGN = 57;
YaraParser.MINUS = 58;
YaraParser.PLUS = 59;
YaraParser.STAR = 60;
YaraParser.DIV = 61;
YaraParser.MOD = 62;
YaraParser.BITAND = 63;
YaraParser.BITXOR = 64;
YaraParser.BITNOT = 65;
YaraParser.LT = 66;
YaraParser.LE = 67;
YaraParser.GT = 68;
YaraParser.GE = 69;
YaraParser.EQUAL = 70;
YaraParser.NE = 71;
YaraParser.DOT = 72;
YaraParser.LSHIFT = 73;
YaraParser.RSHIFT = 74;
YaraParser.RANGE = 75;
YaraParser.COMMA = 76;
YaraParser.DOLLAR = 77;
YaraParser.HASH = 78;
YaraParser.WHITE_SPACE = 79;
YaraParser.BLOCK_COMMENT = 80;
YaraParser.LINE_COMMENT = 81;
YaraParser.DECIMAL_LITERAL = 82;
YaraParser.HEX_STR = 83;
YaraParser.HEX_LITERAL = 84;
YaraParser.STRING_ID = 85;
YaraParser.ID = 86;
YaraParser.STRING_WILD = 87;
YaraParser.DOUBLE_QUOTE_STR = 88;
YaraParser.COUNT_REF = 89;
YaraParser.OFFSET_REF = 90;
YaraParser.LENGTH_REF = 91;
YaraParser.SIZE_LITERAL = 92;
YaraParser.BYTE_MASKED = 93;
YaraParser.ASCII = 94;
YaraParser.BASE64 = 95;
YaraParser.BASE64WIDE = 96;
YaraParser.FULLWORD = 97;
YaraParser.NOCASE = 98;
YaraParser.WIDE = 99;
YaraParser.XOR = 100;
YaraParser.ASSIGN_S = 101;
YaraParser.LCB_S = 102;
YaraParser.REGEX_STR = 103;
YaraParser.DEC = 104;

YaraParser.RULE_startRule = 0;
YaraParser.RULE_decl = 1;
YaraParser.RULE_import_decl = 2;
YaraParser.RULE_include_decl = 3;
YaraParser.RULE_rule_decl = 4;
YaraParser.RULE_rule_modifier = 5;
YaraParser.RULE_tags = 6;
YaraParser.RULE_id_ = 7;
YaraParser.RULE_condition_section = 8;
YaraParser.RULE_for_expr = 9;
YaraParser.RULE_bool_expr = 10;
YaraParser.RULE_expr = 11;
YaraParser.RULE_literal = 12;
YaraParser.RULE_string_set = 13;
YaraParser.RULE_string_id_list = 14;
YaraParser.RULE_function = 15;
YaraParser.RULE_pos_fn = 16;
YaraParser.RULE_fn4 = 17;
YaraParser.RULE_range = 18;
YaraParser.RULE_true_false = 19;
YaraParser.RULE_strings_section = 20;
YaraParser.RULE_meta_section = 21;
YaraParser.RULE_string_def = 22;
YaraParser.RULE_string_modifier = 23;
YaraParser.RULE_args = 24;
YaraParser.RULE_meta_def = 25;
YaraParser.RULE_string_value = 26;
YaraParser.RULE_string_construct = 27;
YaraParser.RULE_alt = 28;
YaraParser.RULE_jump = 29;
YaraParser.RULE_meta_value = 30;
YaraParser.RULE_string = 31;
YaraParser.RULE_number = 32;

class StartRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_startRule;
    }

	EOF() {
	    return this.getToken(YaraParser.EOF, 0);
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
	    if(listener instanceof YaraParserListener ) {
	        listener.enterStartRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitStartRule(this);
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
        this.ruleIndex = YaraParser.RULE_decl;
    }

	import_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Import_declContext);
	    } else {
	        return this.getTypedRuleContext(Import_declContext,i);
	    }
	};

	include_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Include_declContext);
	    } else {
	        return this.getTypedRuleContext(Include_declContext,i);
	    }
	};

	rule_decl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_declContext);
	    } else {
	        return this.getTypedRuleContext(Rule_declContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitDecl(this);
		}
	}


}



class Import_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_import_decl;
    }

	IMPORT() {
	    return this.getToken(YaraParser.IMPORT, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterImport_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitImport_decl(this);
		}
	}


}



class Include_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_include_decl;
    }

	INCLUDE() {
	    return this.getToken(YaraParser.INCLUDE, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterInclude_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitInclude_decl(this);
		}
	}


}



class Rule_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_rule_decl;
    }

	RULE() {
	    return this.getToken(YaraParser.RULE, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	LCB() {
	    return this.getToken(YaraParser.LCB, 0);
	};

	condition_section() {
	    return this.getTypedRuleContext(Condition_sectionContext,0);
	};

	RCB() {
	    return this.getToken(YaraParser.RCB, 0);
	};

	rule_modifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_modifierContext);
	    } else {
	        return this.getTypedRuleContext(Rule_modifierContext,i);
	    }
	};

	tags() {
	    return this.getTypedRuleContext(TagsContext,0);
	};

	meta_section() {
	    return this.getTypedRuleContext(Meta_sectionContext,0);
	};

	strings_section() {
	    return this.getTypedRuleContext(Strings_sectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterRule_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitRule_decl(this);
		}
	}


}



class Rule_modifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_rule_modifier;
    }

	PRIVATE() {
	    return this.getToken(YaraParser.PRIVATE, 0);
	};

	GLOBAL() {
	    return this.getToken(YaraParser.GLOBAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterRule_modifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitRule_modifier(this);
		}
	}


}



class TagsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_tags;
    }

	COLON() {
	    return this.getToken(YaraParser.COLON, 0);
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

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterTags(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitTags(this);
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
        this.ruleIndex = YaraParser.RULE_id_;
    }

	ID() {
	    return this.getToken(YaraParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitId_(this);
		}
	}


}



class Condition_sectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_condition_section;
    }

	CONDITION() {
	    return this.getToken(YaraParser.CONDITION, 0);
	};

	COLON() {
	    return this.getToken(YaraParser.COLON, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	for_expr() {
	    return this.getTypedRuleContext(For_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterCondition_section(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitCondition_section(this);
		}
	}


}



class For_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_for_expr;
    }

	FOR() {
	    return this.getToken(YaraParser.FOR, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	COLON() {
	    return this.getToken(YaraParser.COLON, 0);
	};

	LP() {
	    return this.getToken(YaraParser.LP, 0);
	};

	bool_expr() {
	    return this.getTypedRuleContext(Bool_exprContext,0);
	};

	RP() {
	    return this.getToken(YaraParser.RP, 0);
	};

	ANY() {
	    return this.getToken(YaraParser.ANY, 0);
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

	IN() {
	    return this.getToken(YaraParser.IN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.COMMA);
	    } else {
	        return this.getToken(YaraParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterFor_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitFor_expr(this);
		}
	}


}



class Bool_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_bool_expr;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	bool_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Bool_exprContext);
	    } else {
	        return this.getTypedRuleContext(Bool_exprContext,i);
	    }
	};

	NOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.NOT);
	    } else {
	        return this.getToken(YaraParser.NOT, i);
	    }
	};


	AND() {
	    return this.getToken(YaraParser.AND, 0);
	};

	OR() {
	    return this.getToken(YaraParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterBool_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitBool_expr(this);
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
        this.ruleIndex = YaraParser.RULE_expr;
    }

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

	MINUS() {
	    return this.getToken(YaraParser.MINUS, 0);
	};

	BITNOT() {
	    return this.getToken(YaraParser.BITNOT, 0);
	};

	fn4() {
	    return this.getTypedRuleContext(Fn4Context,0);
	};

	LP() {
	    return this.getToken(YaraParser.LP, 0);
	};

	RP() {
	    return this.getToken(YaraParser.RP, 0);
	};

	OF() {
	    return this.getToken(YaraParser.OF, 0);
	};

	number = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NumberContext);
	    } else {
	        return this.getTypedRuleContext(NumberContext,i);
	    }
	};

	ALL() {
	    return this.getToken(YaraParser.ALL, 0);
	};

	ANY() {
	    return this.getToken(YaraParser.ANY, 0);
	};

	NONE() {
	    return this.getToken(YaraParser.NONE, 0);
	};

	string_set() {
	    return this.getTypedRuleContext(String_setContext,0);
	};

	ID() {
	    return this.getToken(YaraParser.ID, 0);
	};

	THEM() {
	    return this.getToken(YaraParser.THEM, 0);
	};

	IN() {
	    return this.getToken(YaraParser.IN, 0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	COUNT_REF() {
	    return this.getToken(YaraParser.COUNT_REF, 0);
	};

	STRING_ID() {
	    return this.getToken(YaraParser.STRING_ID, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	AT() {
	    return this.getToken(YaraParser.AT, 0);
	};

	DOLLAR() {
	    return this.getToken(YaraParser.DOLLAR, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.COMMA);
	    } else {
	        return this.getToken(YaraParser.COMMA, i);
	    }
	};


	NOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.NOT);
	    } else {
	        return this.getToken(YaraParser.NOT, i);
	    }
	};


	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	pos_fn() {
	    return this.getTypedRuleContext(Pos_fnContext,0);
	};

	HASH() {
	    return this.getToken(YaraParser.HASH, 0);
	};

	AT_() {
	    return this.getToken(YaraParser.AT_, 0);
	};

	EM() {
	    return this.getToken(YaraParser.EM, 0);
	};

	DOT() {
	    return this.getToken(YaraParser.DOT, 0);
	};

	STAR() {
	    return this.getToken(YaraParser.STAR, 0);
	};

	DIV() {
	    return this.getToken(YaraParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(YaraParser.MOD, 0);
	};

	PLUS() {
	    return this.getToken(YaraParser.PLUS, 0);
	};

	LSHIFT() {
	    return this.getToken(YaraParser.LSHIFT, 0);
	};

	RSHIFT() {
	    return this.getToken(YaraParser.RSHIFT, 0);
	};

	BITAND() {
	    return this.getToken(YaraParser.BITAND, 0);
	};

	BITXOR() {
	    return this.getToken(YaraParser.BITXOR, 0);
	};

	PIPE() {
	    return this.getToken(YaraParser.PIPE, 0);
	};

	LT() {
	    return this.getToken(YaraParser.LT, 0);
	};

	LE() {
	    return this.getToken(YaraParser.LE, 0);
	};

	GT() {
	    return this.getToken(YaraParser.GT, 0);
	};

	GE() {
	    return this.getToken(YaraParser.GE, 0);
	};

	EQUAL() {
	    return this.getToken(YaraParser.EQUAL, 0);
	};

	NE() {
	    return this.getToken(YaraParser.NE, 0);
	};

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	AND() {
	    return this.getToken(YaraParser.AND, 0);
	};

	OR() {
	    return this.getToken(YaraParser.OR, 0);
	};

	LSB() {
	    return this.getToken(YaraParser.LSB, 0);
	};

	RSB() {
	    return this.getToken(YaraParser.RSB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
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
        this.ruleIndex = YaraParser.RULE_literal;
    }

	true_false() {
	    return this.getTypedRuleContext(True_falseContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	STRING_ID() {
	    return this.getToken(YaraParser.STRING_ID, 0);
	};

	HEX_LITERAL() {
	    return this.getToken(YaraParser.HEX_LITERAL, 0);
	};

	COUNT_REF() {
	    return this.getToken(YaraParser.COUNT_REF, 0);
	};

	OFFSET_REF() {
	    return this.getToken(YaraParser.OFFSET_REF, 0);
	};

	LENGTH_REF() {
	    return this.getToken(YaraParser.LENGTH_REF, 0);
	};

	SIZE_LITERAL() {
	    return this.getToken(YaraParser.SIZE_LITERAL, 0);
	};

	ID() {
	    return this.getToken(YaraParser.ID, 0);
	};

	DOUBLE_QUOTE_STR() {
	    return this.getToken(YaraParser.DOUBLE_QUOTE_STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class String_setContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_string_set;
    }

	LP() {
	    return this.getToken(YaraParser.LP, 0);
	};

	string_id_list() {
	    return this.getTypedRuleContext(String_id_listContext,0);
	};

	RP() {
	    return this.getToken(YaraParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterString_set(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitString_set(this);
		}
	}


}



class String_id_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_string_id_list;
    }

	STRING_ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.STRING_ID);
	    } else {
	        return this.getToken(YaraParser.STRING_ID, i);
	    }
	};


	STRING_WILD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.STRING_WILD);
	    } else {
	        return this.getToken(YaraParser.STRING_WILD, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.COMMA);
	    } else {
	        return this.getToken(YaraParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterString_id_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitString_id_list(this);
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
        this.ruleIndex = YaraParser.RULE_function;
    }

	CONTAINS() {
	    return this.getToken(YaraParser.CONTAINS, 0);
	};

	ICONTAINS() {
	    return this.getToken(YaraParser.ICONTAINS, 0);
	};

	STARTSWITH() {
	    return this.getToken(YaraParser.STARTSWITH, 0);
	};

	ISTARTSWITH() {
	    return this.getToken(YaraParser.ISTARTSWITH, 0);
	};

	ENDSWITH() {
	    return this.getToken(YaraParser.ENDSWITH, 0);
	};

	IENDSWITH() {
	    return this.getToken(YaraParser.IENDSWITH, 0);
	};

	IEQUALS() {
	    return this.getToken(YaraParser.IEQUALS, 0);
	};

	MATCHES() {
	    return this.getToken(YaraParser.MATCHES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitFunction(this);
		}
	}


}



class Pos_fnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_pos_fn;
    }

	ENTRYPOINT() {
	    return this.getToken(YaraParser.ENTRYPOINT, 0);
	};

	FILESIZE() {
	    return this.getToken(YaraParser.FILESIZE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterPos_fn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitPos_fn(this);
		}
	}


}



class Fn4Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_fn4;
    }

	INT16() {
	    return this.getToken(YaraParser.INT16, 0);
	};

	INT16BE() {
	    return this.getToken(YaraParser.INT16BE, 0);
	};

	UINT16() {
	    return this.getToken(YaraParser.UINT16, 0);
	};

	UINT16BE() {
	    return this.getToken(YaraParser.UINT16BE, 0);
	};

	INT32() {
	    return this.getToken(YaraParser.INT32, 0);
	};

	INT32BE() {
	    return this.getToken(YaraParser.INT32BE, 0);
	};

	UINT32() {
	    return this.getToken(YaraParser.UINT32, 0);
	};

	UINT32BE() {
	    return this.getToken(YaraParser.UINT32BE, 0);
	};

	INT8() {
	    return this.getToken(YaraParser.INT8, 0);
	};

	INT8BE() {
	    return this.getToken(YaraParser.INT8BE, 0);
	};

	UINT8() {
	    return this.getToken(YaraParser.UINT8, 0);
	};

	UINT8BE() {
	    return this.getToken(YaraParser.UINT8BE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterFn4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitFn4(this);
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
        this.ruleIndex = YaraParser.RULE_range;
    }

	LP() {
	    return this.getToken(YaraParser.LP, 0);
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

	RANGE() {
	    return this.getToken(YaraParser.RANGE, 0);
	};

	RP() {
	    return this.getToken(YaraParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitRange(this);
		}
	}


}



class True_falseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_true_false;
    }

	TRUE() {
	    return this.getToken(YaraParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(YaraParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterTrue_false(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitTrue_false(this);
		}
	}


}



class Strings_sectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_strings_section;
    }

	STRINGS() {
	    return this.getToken(YaraParser.STRINGS, 0);
	};

	COLON() {
	    return this.getToken(YaraParser.COLON, 0);
	};

	string_def = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_defContext);
	    } else {
	        return this.getTypedRuleContext(String_defContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterStrings_section(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitStrings_section(this);
		}
	}


}



class Meta_sectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_meta_section;
    }

	META() {
	    return this.getToken(YaraParser.META, 0);
	};

	COLON() {
	    return this.getToken(YaraParser.COLON, 0);
	};

	meta_def = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Meta_defContext);
	    } else {
	        return this.getTypedRuleContext(Meta_defContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterMeta_section(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitMeta_section(this);
		}
	}


}



class String_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_string_def;
    }

	STRING_ID() {
	    return this.getToken(YaraParser.STRING_ID, 0);
	};

	ASSIGN_S() {
	    return this.getToken(YaraParser.ASSIGN_S, 0);
	};

	string_value() {
	    return this.getTypedRuleContext(String_valueContext,0);
	};

	string_modifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_modifierContext);
	    } else {
	        return this.getTypedRuleContext(String_modifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterString_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitString_def(this);
		}
	}


}



class String_modifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_string_modifier;
    }

	NOCASE() {
	    return this.getToken(YaraParser.NOCASE, 0);
	};

	WIDE() {
	    return this.getToken(YaraParser.WIDE, 0);
	};

	ASCII() {
	    return this.getToken(YaraParser.ASCII, 0);
	};

	XOR() {
	    return this.getToken(YaraParser.XOR, 0);
	};

	BASE64() {
	    return this.getToken(YaraParser.BASE64, 0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	BASE64WIDE() {
	    return this.getToken(YaraParser.BASE64WIDE, 0);
	};

	FULLWORD() {
	    return this.getToken(YaraParser.FULLWORD, 0);
	};

	PRIVATE() {
	    return this.getToken(YaraParser.PRIVATE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterString_modifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitString_modifier(this);
		}
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_args;
    }

	LP() {
	    return this.getToken(YaraParser.LP, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	RP() {
	    return this.getToken(YaraParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitArgs(this);
		}
	}


}



class Meta_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_meta_def;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	ASSIGN() {
	    return this.getToken(YaraParser.ASSIGN, 0);
	};

	meta_value() {
	    return this.getTypedRuleContext(Meta_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterMeta_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitMeta_def(this);
		}
	}


}



class String_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_string_value;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	LCB_S() {
	    return this.getToken(YaraParser.LCB_S, 0);
	};

	RCB() {
	    return this.getToken(YaraParser.RCB, 0);
	};

	string_construct = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_constructContext);
	    } else {
	        return this.getTypedRuleContext(String_constructContext,i);
	    }
	};

	REGEX_STR() {
	    return this.getToken(YaraParser.REGEX_STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterString_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitString_value(this);
		}
	}


}



class String_constructContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_string_construct;
    }

	HEX_STR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.HEX_STR);
	    } else {
	        return this.getToken(YaraParser.HEX_STR, i);
	    }
	};


	alt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AltContext);
	    } else {
	        return this.getTypedRuleContext(AltContext,i);
	    }
	};

	jump = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(JumpContext);
	    } else {
	        return this.getTypedRuleContext(JumpContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterString_construct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitString_construct(this);
		}
	}


}



class AltContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_alt;
    }

	LP() {
	    return this.getToken(YaraParser.LP, 0);
	};

	RP() {
	    return this.getToken(YaraParser.RP, 0);
	};

	HEX_STR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.HEX_STR);
	    } else {
	        return this.getToken(YaraParser.HEX_STR, i);
	    }
	};


	PIPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.PIPE);
	    } else {
	        return this.getToken(YaraParser.PIPE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterAlt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitAlt(this);
		}
	}


}



class JumpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_jump;
    }

	LSB() {
	    return this.getToken(YaraParser.LSB, 0);
	};

	RSB() {
	    return this.getToken(YaraParser.RSB, 0);
	};

	DEC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YaraParser.DEC);
	    } else {
	        return this.getToken(YaraParser.DEC, i);
	    }
	};


	MINUS() {
	    return this.getToken(YaraParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterJump(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitJump(this);
		}
	}


}



class Meta_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YaraParser.RULE_meta_value;
    }

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	true_false() {
	    return this.getTypedRuleContext(True_falseContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	HEX_LITERAL() {
	    return this.getToken(YaraParser.HEX_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterMeta_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitMeta_value(this);
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
        this.ruleIndex = YaraParser.RULE_string;
    }

	DOUBLE_QUOTE_STR() {
	    return this.getToken(YaraParser.DOUBLE_QUOTE_STR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitString(this);
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
        this.ruleIndex = YaraParser.RULE_number;
    }

	DECIMAL_LITERAL() {
	    return this.getToken(YaraParser.DECIMAL_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YaraParserListener ) {
	        listener.exitNumber(this);
		}
	}


}




YaraParser.StartRuleContext = StartRuleContext; 
YaraParser.DeclContext = DeclContext; 
YaraParser.Import_declContext = Import_declContext; 
YaraParser.Include_declContext = Include_declContext; 
YaraParser.Rule_declContext = Rule_declContext; 
YaraParser.Rule_modifierContext = Rule_modifierContext; 
YaraParser.TagsContext = TagsContext; 
YaraParser.Id_Context = Id_Context; 
YaraParser.Condition_sectionContext = Condition_sectionContext; 
YaraParser.For_exprContext = For_exprContext; 
YaraParser.Bool_exprContext = Bool_exprContext; 
YaraParser.ExprContext = ExprContext; 
YaraParser.LiteralContext = LiteralContext; 
YaraParser.String_setContext = String_setContext; 
YaraParser.String_id_listContext = String_id_listContext; 
YaraParser.FunctionContext = FunctionContext; 
YaraParser.Pos_fnContext = Pos_fnContext; 
YaraParser.Fn4Context = Fn4Context; 
YaraParser.RangeContext = RangeContext; 
YaraParser.True_falseContext = True_falseContext; 
YaraParser.Strings_sectionContext = Strings_sectionContext; 
YaraParser.Meta_sectionContext = Meta_sectionContext; 
YaraParser.String_defContext = String_defContext; 
YaraParser.String_modifierContext = String_modifierContext; 
YaraParser.ArgsContext = ArgsContext; 
YaraParser.Meta_defContext = Meta_defContext; 
YaraParser.String_valueContext = String_valueContext; 
YaraParser.String_constructContext = String_constructContext; 
YaraParser.AltContext = AltContext; 
YaraParser.JumpContext = JumpContext; 
YaraParser.Meta_valueContext = Meta_valueContext; 
YaraParser.StringContext = StringContext; 
YaraParser.NumberContext = NumberContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
