// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/antlr/antlr3/ANTLRv3Parser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ANTLRv3ParserListener from './ANTLRv3ParserListener.js';
const serializedATN = [4,1,90,546,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,1,0,3,0,92,8,0,1,0,1,0,1,0,1,0,3,0,98,8,0,
1,0,1,0,1,0,1,0,3,0,104,8,0,1,0,3,0,107,8,0,1,0,5,0,110,8,0,10,0,12,0,113,
9,0,1,0,5,0,116,8,0,10,0,12,0,119,9,0,1,0,4,0,122,8,0,11,0,12,0,123,1,0,
1,0,1,1,1,1,1,1,4,1,131,8,1,11,1,12,1,132,1,1,1,1,1,2,1,2,1,2,1,2,3,2,141,
8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,3,4,153,8,4,1,4,1,4,1,4,1,5,
1,5,1,5,3,5,161,8,5,1,6,1,6,1,6,5,6,166,8,6,10,6,12,6,169,9,6,1,6,1,6,1,
7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,3,8,183,8,8,1,9,3,9,186,8,9,1,9,3,
9,189,8,9,1,9,1,9,3,9,193,8,9,1,9,3,9,196,8,9,1,9,1,9,3,9,200,8,9,1,9,3,
9,203,8,9,1,9,3,9,206,8,9,1,9,3,9,209,8,9,1,9,5,9,212,8,9,10,9,12,9,215,
9,9,1,9,1,9,1,9,1,9,3,9,221,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,
5,11,231,8,11,10,11,12,11,234,9,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,242,
8,12,10,12,12,12,245,9,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,255,
8,12,10,12,12,12,258,9,12,1,12,1,12,3,12,262,8,12,1,13,1,13,3,13,266,8,13,
1,13,3,13,269,8,13,1,13,1,13,1,13,1,13,1,13,1,13,5,13,277,8,13,10,13,12,
13,280,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,5,14,290,8,14,10,14,
12,14,293,9,14,1,15,4,15,296,8,15,11,15,12,15,297,1,15,3,15,301,8,15,1,16,
4,16,304,8,16,11,16,12,16,305,1,16,3,16,309,8,16,1,16,3,16,312,8,16,1,17,
1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,3,20,328,
8,20,1,20,1,20,1,20,1,20,1,20,3,20,335,8,20,1,20,1,20,1,20,3,20,340,8,20,
1,20,1,20,1,20,1,20,1,20,1,20,3,20,348,8,20,1,20,1,20,1,20,3,20,353,8,20,
3,20,355,8,20,1,21,1,21,5,21,359,8,21,10,21,12,21,362,9,21,1,21,1,21,1,22,
1,22,5,22,368,8,22,10,22,12,22,371,9,22,1,22,1,22,1,23,1,23,1,23,1,23,3,
23,379,8,23,1,23,1,23,1,23,1,23,1,23,3,23,386,8,23,1,23,1,23,3,23,390,8,
23,1,23,3,23,393,8,23,3,23,395,8,23,1,24,1,24,1,24,3,24,400,8,24,1,25,1,
25,1,25,4,25,405,8,25,11,25,12,25,406,1,25,1,25,1,26,1,26,1,26,1,26,1,26,
1,26,3,26,417,8,26,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,3,28,427,8,28,
1,28,1,28,3,28,431,8,28,1,28,3,28,434,8,28,1,29,1,29,1,30,1,30,1,31,1,31,
1,31,1,31,1,31,5,31,445,8,31,10,31,12,31,448,9,31,1,31,1,31,1,31,3,31,453,
8,31,1,32,1,32,1,32,3,32,458,8,32,1,33,1,33,1,33,1,33,1,34,4,34,465,8,34,
11,34,12,34,466,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,476,8,35,1,35,3,
35,479,8,35,1,36,1,36,1,36,3,36,484,8,36,1,36,1,36,1,36,1,36,1,36,3,36,491,
8,36,1,37,1,37,1,37,1,38,1,38,1,38,5,38,499,8,38,10,38,12,38,502,9,38,1,
38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,515,8,39,1,40,
1,40,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,5,
42,532,8,42,10,42,12,42,535,9,42,1,42,3,42,538,8,42,1,43,1,43,1,43,1,43,
1,44,1,44,1,44,0,0,45,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
86,88,0,8,1,0,42,43,2,0,33,33,53,55,2,0,64,64,78,78,1,0,35,36,2,0,42,43,
81,81,2,0,69,70,76,76,1,0,44,45,1,0,81,82,597,0,91,1,0,0,0,2,127,1,0,0,0,
4,136,1,0,0,0,6,144,1,0,0,0,8,148,1,0,0,0,10,160,1,0,0,0,12,162,1,0,0,0,
14,172,1,0,0,0,16,182,1,0,0,0,18,185,1,0,0,0,20,222,1,0,0,0,22,226,1,0,0,
0,24,261,1,0,0,0,26,263,1,0,0,0,28,283,1,0,0,0,30,300,1,0,0,0,32,311,1,0,
0,0,34,313,1,0,0,0,36,317,1,0,0,0,38,320,1,0,0,0,40,354,1,0,0,0,42,356,1,
0,0,0,44,365,1,0,0,0,46,394,1,0,0,0,48,396,1,0,0,0,50,401,1,0,0,0,52,410,
1,0,0,0,54,418,1,0,0,0,56,430,1,0,0,0,58,435,1,0,0,0,60,437,1,0,0,0,62,452,
1,0,0,0,64,457,1,0,0,0,66,459,1,0,0,0,68,464,1,0,0,0,70,478,1,0,0,0,72,490,
1,0,0,0,74,492,1,0,0,0,76,495,1,0,0,0,78,514,1,0,0,0,80,516,1,0,0,0,82,521,
1,0,0,0,84,537,1,0,0,0,86,539,1,0,0,0,88,543,1,0,0,0,90,92,5,1,0,0,91,90,
1,0,0,0,91,92,1,0,0,0,92,97,1,0,0,0,93,98,5,3,0,0,94,98,5,2,0,0,95,98,5,
58,0,0,96,98,1,0,0,0,97,93,1,0,0,0,97,94,1,0,0,0,97,95,1,0,0,0,97,96,1,0,
0,0,98,99,1,0,0,0,99,100,5,52,0,0,100,101,3,88,44,0,101,103,5,74,0,0,102,
104,3,12,6,0,103,102,1,0,0,0,103,104,1,0,0,0,104,106,1,0,0,0,105,107,3,2,
1,0,106,105,1,0,0,0,106,107,1,0,0,0,107,111,1,0,0,0,108,110,3,6,3,0,109,
108,1,0,0,0,110,113,1,0,0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,117,1,0,
0,0,113,111,1,0,0,0,114,116,3,8,4,0,115,114,1,0,0,0,116,119,1,0,0,0,117,
115,1,0,0,0,117,118,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,120,122,3,18,
9,0,121,120,1,0,0,0,122,123,1,0,0,0,123,121,1,0,0,0,123,124,1,0,0,0,124,
125,1,0,0,0,125,126,5,0,0,1,126,1,1,0,0,0,127,128,5,49,0,0,128,130,5,65,
0,0,129,131,3,4,2,0,130,129,1,0,0,0,131,132,1,0,0,0,132,130,1,0,0,0,132,
133,1,0,0,0,133,134,1,0,0,0,134,135,5,71,0,0,135,3,1,0,0,0,136,140,5,81,
0,0,137,138,5,64,0,0,138,141,7,0,0,0,139,141,1,0,0,0,140,137,1,0,0,0,140,
139,1,0,0,0,141,142,1,0,0,0,142,143,5,74,0,0,143,5,1,0,0,0,144,145,5,28,
0,0,145,146,3,88,44,0,146,147,3,42,21,0,147,7,1,0,0,0,148,152,5,59,0,0,149,
150,3,10,5,0,150,151,5,61,0,0,151,153,1,0,0,0,152,149,1,0,0,0,152,153,1,
0,0,0,153,154,1,0,0,0,154,155,3,88,44,0,155,156,3,42,21,0,156,9,1,0,0,0,
157,161,3,88,44,0,158,161,5,3,0,0,159,161,5,2,0,0,160,157,1,0,0,0,160,158,
1,0,0,0,160,159,1,0,0,0,161,11,1,0,0,0,162,163,5,48,0,0,163,167,5,65,0,0,
164,166,3,14,7,0,165,164,1,0,0,0,166,169,1,0,0,0,167,165,1,0,0,0,167,168,
1,0,0,0,168,170,1,0,0,0,169,167,1,0,0,0,170,171,5,71,0,0,171,13,1,0,0,0,
172,173,3,88,44,0,173,174,5,64,0,0,174,175,3,16,8,0,175,176,5,74,0,0,176,
15,1,0,0,0,177,183,3,88,44,0,178,183,5,43,0,0,179,183,5,42,0,0,180,183,5,
41,0,0,181,183,5,76,0,0,182,177,1,0,0,0,182,178,1,0,0,0,182,179,1,0,0,0,
182,180,1,0,0,0,182,181,1,0,0,0,183,17,1,0,0,0,184,186,5,1,0,0,185,184,1,
0,0,0,185,186,1,0,0,0,186,188,1,0,0,0,187,189,7,1,0,0,188,187,1,0,0,0,188,
189,1,0,0,0,189,190,1,0,0,0,190,192,3,88,44,0,191,193,5,36,0,0,192,191,1,
0,0,0,192,193,1,0,0,0,193,195,1,0,0,0,194,196,3,44,22,0,195,194,1,0,0,0,
195,196,1,0,0,0,196,199,1,0,0,0,197,198,5,56,0,0,198,200,3,44,22,0,199,197,
1,0,0,0,199,200,1,0,0,0,200,202,1,0,0,0,201,203,3,22,11,0,202,201,1,0,0,
0,202,203,1,0,0,0,203,205,1,0,0,0,204,206,3,12,6,0,205,204,1,0,0,0,205,206,
1,0,0,0,206,208,1,0,0,0,207,209,3,24,12,0,208,207,1,0,0,0,208,209,1,0,0,
0,209,213,1,0,0,0,210,212,3,20,10,0,211,210,1,0,0,0,212,215,1,0,0,0,213,
211,1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,217,5,60,
0,0,217,218,3,28,14,0,218,220,5,74,0,0,219,221,3,32,16,0,220,219,1,0,0,0,
220,221,1,0,0,0,221,19,1,0,0,0,222,223,5,59,0,0,223,224,3,88,44,0,224,225,
3,42,21,0,225,21,1,0,0,0,226,227,5,57,0,0,227,232,3,88,44,0,228,229,5,62,
0,0,229,231,3,88,44,0,230,228,1,0,0,0,231,234,1,0,0,0,232,230,1,0,0,0,232,
233,1,0,0,0,233,23,1,0,0,0,234,232,1,0,0,0,235,236,5,28,0,0,236,262,3,42,
21,0,237,238,5,28,0,0,238,243,3,88,44,0,239,240,5,62,0,0,240,242,3,88,44,
0,241,239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,246,
1,0,0,0,245,243,1,0,0,0,246,247,5,74,0,0,247,262,1,0,0,0,248,249,5,28,0,
0,249,250,3,42,21,0,250,251,5,28,0,0,251,256,3,88,44,0,252,253,5,62,0,0,
253,255,3,88,44,0,254,252,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,
1,0,0,0,257,259,1,0,0,0,258,256,1,0,0,0,259,260,5,74,0,0,260,262,1,0,0,0,
261,235,1,0,0,0,261,237,1,0,0,0,261,248,1,0,0,0,262,25,1,0,0,0,263,268,5,
67,0,0,264,266,3,12,6,0,265,264,1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,0,
267,269,5,60,0,0,268,265,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,270,271,
3,30,15,0,271,278,3,62,31,0,272,273,5,68,0,0,273,274,3,30,15,0,274,275,3,
62,31,0,275,277,1,0,0,0,276,272,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,
278,279,1,0,0,0,279,281,1,0,0,0,280,278,1,0,0,0,281,282,5,73,0,0,282,27,
1,0,0,0,283,284,3,30,15,0,284,291,3,62,31,0,285,286,5,68,0,0,286,287,3,30,
15,0,287,288,3,62,31,0,288,290,1,0,0,0,289,285,1,0,0,0,290,293,1,0,0,0,291,
289,1,0,0,0,291,292,1,0,0,0,292,29,1,0,0,0,293,291,1,0,0,0,294,296,3,38,
19,0,295,294,1,0,0,0,296,297,1,0,0,0,297,295,1,0,0,0,297,298,1,0,0,0,298,
301,1,0,0,0,299,301,1,0,0,0,300,295,1,0,0,0,300,299,1,0,0,0,301,31,1,0,0,
0,302,304,3,34,17,0,303,302,1,0,0,0,304,305,1,0,0,0,305,303,1,0,0,0,305,
306,1,0,0,0,306,308,1,0,0,0,307,309,3,36,18,0,308,307,1,0,0,0,308,309,1,
0,0,0,309,312,1,0,0,0,310,312,3,36,18,0,311,303,1,0,0,0,311,310,1,0,0,0,
312,33,1,0,0,0,313,314,5,50,0,0,314,315,3,44,22,0,315,316,3,42,21,0,316,
35,1,0,0,0,317,318,5,51,0,0,318,319,3,42,21,0,319,37,1,0,0,0,320,321,3,40,
20,0,321,39,1,0,0,0,322,323,3,88,44,0,323,324,7,2,0,0,324,327,3,46,23,0,
325,328,3,60,30,0,326,328,1,0,0,0,327,325,1,0,0,0,327,326,1,0,0,0,328,355,
1,0,0,0,329,330,3,88,44,0,330,331,7,2,0,0,331,334,3,26,13,0,332,335,3,60,
30,0,333,335,1,0,0,0,334,332,1,0,0,0,334,333,1,0,0,0,335,355,1,0,0,0,336,
339,3,46,23,0,337,340,3,60,30,0,338,340,1,0,0,0,339,337,1,0,0,0,339,338,
1,0,0,0,340,355,1,0,0,0,341,355,3,52,26,0,342,355,3,42,21,0,343,344,3,42,
21,0,344,347,5,70,0,0,345,348,5,75,0,0,346,348,1,0,0,0,347,345,1,0,0,0,347,
346,1,0,0,0,348,355,1,0,0,0,349,352,3,50,25,0,350,353,3,60,30,0,351,353,
1,0,0,0,352,350,1,0,0,0,352,351,1,0,0,0,353,355,1,0,0,0,354,322,1,0,0,0,
354,329,1,0,0,0,354,336,1,0,0,0,354,341,1,0,0,0,354,342,1,0,0,0,354,343,
1,0,0,0,354,349,1,0,0,0,355,41,1,0,0,0,356,360,5,47,0,0,357,359,5,38,0,0,
358,357,1,0,0,0,359,362,1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,363,
1,0,0,0,362,360,1,0,0,0,363,364,5,86,0,0,364,43,1,0,0,0,365,369,5,46,0,0,
366,368,5,85,0,0,367,366,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,
1,0,0,0,370,372,1,0,0,0,371,369,1,0,0,0,372,373,5,83,0,0,373,45,1,0,0,0,
374,378,3,54,27,0,375,379,5,35,0,0,376,379,5,36,0,0,377,379,1,0,0,0,378,
375,1,0,0,0,378,376,1,0,0,0,378,377,1,0,0,0,379,395,1,0,0,0,380,395,3,56,
28,0,381,385,3,48,24,0,382,386,5,35,0,0,383,386,5,36,0,0,384,386,1,0,0,0,
385,382,1,0,0,0,385,383,1,0,0,0,385,384,1,0,0,0,386,395,1,0,0,0,387,389,
5,82,0,0,388,390,3,44,22,0,389,388,1,0,0,0,389,390,1,0,0,0,390,392,1,0,0,
0,391,393,7,3,0,0,392,391,1,0,0,0,392,393,1,0,0,0,393,395,1,0,0,0,394,374,
1,0,0,0,394,380,1,0,0,0,394,381,1,0,0,0,394,387,1,0,0,0,395,47,1,0,0,0,396,
399,5,79,0,0,397,400,3,58,29,0,398,400,3,26,13,0,399,397,1,0,0,0,399,398,
1,0,0,0,400,49,1,0,0,0,401,402,5,34,0,0,402,404,3,38,19,0,403,405,3,38,19,
0,404,403,1,0,0,0,405,406,1,0,0,0,406,404,1,0,0,0,406,407,1,0,0,0,407,408,
1,0,0,0,408,409,5,73,0,0,409,51,1,0,0,0,410,416,3,26,13,0,411,417,5,70,0,
0,412,417,5,76,0,0,413,417,5,69,0,0,414,417,5,75,0,0,415,417,1,0,0,0,416,
411,1,0,0,0,416,412,1,0,0,0,416,413,1,0,0,0,416,414,1,0,0,0,416,415,1,0,
0,0,417,53,1,0,0,0,418,419,5,42,0,0,419,420,5,10,0,0,420,421,5,42,0,0,421,
55,1,0,0,0,422,431,5,42,0,0,423,426,5,81,0,0,424,427,3,44,22,0,425,427,1,
0,0,0,426,424,1,0,0,0,426,425,1,0,0,0,427,431,1,0,0,0,428,431,5,43,0,0,429,
431,5,63,0,0,430,422,1,0,0,0,430,423,1,0,0,0,430,428,1,0,0,0,430,429,1,0,
0,0,431,433,1,0,0,0,432,434,7,3,0,0,433,432,1,0,0,0,433,434,1,0,0,0,434,
57,1,0,0,0,435,436,7,4,0,0,436,59,1,0,0,0,437,438,7,5,0,0,438,61,1,0,0,0,
439,440,5,37,0,0,440,441,3,42,21,0,441,442,5,70,0,0,442,443,3,64,32,0,443,
445,1,0,0,0,444,439,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,447,1,0,
0,0,447,449,1,0,0,0,448,446,1,0,0,0,449,450,5,37,0,0,450,453,3,64,32,0,451,
453,1,0,0,0,452,446,1,0,0,0,452,451,1,0,0,0,453,63,1,0,0,0,454,458,3,78,
39,0,455,458,3,68,34,0,456,458,1,0,0,0,457,454,1,0,0,0,457,455,1,0,0,0,457,
456,1,0,0,0,458,65,1,0,0,0,459,460,5,67,0,0,460,461,3,68,34,0,461,462,5,
73,0,0,462,67,1,0,0,0,463,465,3,70,35,0,464,463,1,0,0,0,465,466,1,0,0,0,
466,464,1,0,0,0,466,467,1,0,0,0,467,69,1,0,0,0,468,479,3,72,36,0,469,470,
3,72,36,0,470,471,3,60,30,0,471,479,1,0,0,0,472,475,3,76,38,0,473,476,3,
60,30,0,474,476,1,0,0,0,475,473,1,0,0,0,475,474,1,0,0,0,476,479,1,0,0,0,
477,479,3,74,37,0,478,468,1,0,0,0,478,469,1,0,0,0,478,472,1,0,0,0,478,477,
1,0,0,0,479,71,1,0,0,0,480,491,5,42,0,0,481,483,5,81,0,0,482,484,3,44,22,
0,483,482,1,0,0,0,483,484,1,0,0,0,484,491,1,0,0,0,485,491,5,82,0,0,486,491,
5,43,0,0,487,488,5,77,0,0,488,491,3,88,44,0,489,491,3,42,21,0,490,480,1,
0,0,0,490,481,1,0,0,0,490,485,1,0,0,0,490,486,1,0,0,0,490,487,1,0,0,0,490,
489,1,0,0,0,491,73,1,0,0,0,492,493,3,66,33,0,493,494,3,60,30,0,494,75,1,
0,0,0,495,496,5,34,0,0,496,500,3,72,36,0,497,499,3,70,35,0,498,497,1,0,0,
0,499,502,1,0,0,0,500,498,1,0,0,0,500,501,1,0,0,0,501,503,1,0,0,0,502,500,
1,0,0,0,503,504,5,73,0,0,504,77,1,0,0,0,505,506,3,88,44,0,506,507,5,67,0,
0,507,508,3,84,42,0,508,509,5,73,0,0,509,510,7,6,0,0,510,515,1,0,0,0,511,
515,3,80,40,0,512,515,3,82,41,0,513,515,3,42,21,0,514,505,1,0,0,0,514,511,
1,0,0,0,514,512,1,0,0,0,514,513,1,0,0,0,515,79,1,0,0,0,516,517,3,88,44,0,
517,518,5,67,0,0,518,519,3,84,42,0,519,520,5,73,0,0,520,81,1,0,0,0,521,522,
5,67,0,0,522,523,3,42,21,0,523,524,5,73,0,0,524,525,5,67,0,0,525,526,3,84,
42,0,526,527,5,73,0,0,527,83,1,0,0,0,528,533,3,86,43,0,529,530,5,62,0,0,
530,532,3,86,43,0,531,529,1,0,0,0,532,535,1,0,0,0,533,531,1,0,0,0,533,534,
1,0,0,0,534,538,1,0,0,0,535,533,1,0,0,0,536,538,1,0,0,0,537,528,1,0,0,0,
537,536,1,0,0,0,538,85,1,0,0,0,539,540,3,88,44,0,540,541,5,64,0,0,541,542,
3,42,21,0,542,87,1,0,0,0,543,544,7,7,0,0,544,89,1,0,0,0,67,91,97,103,106,
111,117,123,132,140,152,160,167,182,185,188,192,195,199,202,205,208,213,
220,232,243,256,261,265,268,278,291,297,300,305,308,311,327,334,339,347,
352,354,360,369,378,385,389,392,394,399,406,416,426,430,433,446,452,457,
466,475,478,483,490,500,514,533,537];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ANTLRv3Parser extends antlr4.Parser {

    static grammarFileName = "ANTLRv3Parser.g4";
    static literalNames = [ null, null, "'parser'", "'lexer'", null, null, 
                            null, null, null, null, "'..'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, "'scope'", 
                            null, null, null, null, "'fragment'", "'^('", 
                            "'^'", "'!'", null, null, null, null, null, 
                            null, null, null, null, null, null, "'options'", 
                            "'tokens'", "'catch'", "'finally'", "'grammar'", 
                            "'private'", "'protected'", "'public'", "'returns'", 
                            "'throws'", "'tree'", null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, "'=>'" ];
    static symbolicNames = [ null, "DOC_COMMENT", "PARSER", "LEXER", "RULE", 
                             "BLOCK", "OPTIONAL", "CLOSURE", "POSITIVE_CLOSURE", 
                             "SYNPRED", "RANGE", "CHAR_RANGE", "EPSILON", 
                             "ALT", "EOR", "EOB", "EOA", "ID", "ARG", "ARGLIST", 
                             "RET", "LEXER_GRAMMAR", "PARSER_GRAMMAR", "TREE_GRAMMAR", 
                             "COMBINED_GRAMMAR", "INITACTION", "LABEL", 
                             "TEMPLATE", "SCOPE", "SEMPRED", "GATED_SEMPRED", 
                             "SYN_SEMPRED", "BACKTRACK_SEMPRED", "FRAGMENT", 
                             "TREE_BEGIN", "ROOT", "BANG", "REWRITE", "ACTION_CONTENT", 
                             "SL_COMMENT", "ML_COMMENT", "INT", "CHAR_LITERAL", 
                             "STRING_LITERAL", "DOUBLE_QUOTE_STRING_LITERAL", 
                             "DOUBLE_ANGLE_STRING_LITERAL", "BEGIN_ARGUMENT", 
                             "BEGIN_ACTION", "OPTIONS", "TOKENS", "CATCH", 
                             "FINALLY", "GRAMMAR", "PRIVATE", "PROTECTED", 
                             "PUBLIC", "RETURNS", "THROWS", "TREE", "AT", 
                             "COLON", "COLONCOLON", "COMMA", "DOT", "EQUAL", 
                             "LBRACE", "LBRACK", "LPAREN", "OR", "PLUS", 
                             "QM", "RBRACE", "RBRACK", "RPAREN", "SEMI", 
                             "SEMPREDOP", "STAR", "DOLLAR", "PEQ", "NOT", 
                             "WS", "TOKEN_REF", "RULE_REF", "END_ARGUMENT", 
                             "UNTERMINATED_ARGUMENT", "ARGUMENT_CONTENT", 
                             "END_ACTION", "UNTERMINATED_ACTION", "OPT_LBRACE", 
                             "LEXER_CHAR_SET", "UNTERMINATED_CHAR_SET" ];
    static ruleNames = [ "grammarDef", "tokensSpec", "tokenSpec", "attrScope", 
                         "action", "actionScopeName", "optionsSpec", "option", 
                         "optionValue", "rule_", "ruleAction", "throwsSpec", 
                         "ruleScopeSpec", "block", "altList", "alternative", 
                         "exceptionGroup", "exceptionHandler", "finallyClause", 
                         "element", "elementNoOptionSpec", "actionBlock", 
                         "argActionBlock", "atom", "notSet", "treeSpec", 
                         "ebnf", "range_", "terminal_", "notTerminal", "ebnfSuffix", 
                         "rewrite", "rewrite_alternative", "rewrite_tree_block", 
                         "rewrite_tree_alternative", "rewrite_tree_element", 
                         "rewrite_tree_atom", "rewrite_tree_ebnf", "rewrite_tree", 
                         "rewrite_template", "rewrite_template_ref", "rewrite_indirect_template_head", 
                         "rewrite_template_args", "rewrite_template_arg", 
                         "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ANTLRv3Parser.ruleNames;
        this.literalNames = ANTLRv3Parser.literalNames;
        this.symbolicNames = ANTLRv3Parser.symbolicNames;
    }



	grammarDef() {
	    let localctx = new GrammarDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ANTLRv3Parser.RULE_grammarDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 90;
	            this.match(ANTLRv3Parser.DOC_COMMENT);
	        }

	        this.state = 97;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 93;
	            this.match(ANTLRv3Parser.LEXER);
	            break;
	        case 2:
	            this.state = 94;
	            this.match(ANTLRv3Parser.PARSER);
	            break;
	        case 58:
	            this.state = 95;
	            this.match(ANTLRv3Parser.TREE);
	            break;
	        case 52:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 99;
	        this.match(ANTLRv3Parser.GRAMMAR);
	        this.state = 100;
	        this.id_();
	        this.state = 101;
	        this.match(ANTLRv3Parser.SEMI);
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 102;
	            this.optionsSpec();
	        }

	        this.state = 106;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===49) {
	            this.state = 105;
	            this.tokensSpec();
	        }

	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 108;
	            this.attrScope();
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===59) {
	            this.state = 114;
	            this.action();
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 121; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 120;
	            this.rule_();
	            this.state = 123; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7340033) !== 0) || _la===81 || _la===82);
	        this.state = 125;
	        this.match(ANTLRv3Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tokensSpec() {
	    let localctx = new TokensSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ANTLRv3Parser.RULE_tokensSpec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(ANTLRv3Parser.TOKENS);
	        this.state = 128;
	        this.match(ANTLRv3Parser.LBRACE);
	        this.state = 130; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 129;
	            this.tokenSpec();
	            this.state = 132; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===81);
	        this.state = 134;
	        this.match(ANTLRv3Parser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tokenSpec() {
	    let localctx = new TokenSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ANTLRv3Parser.RULE_tokenSpec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 136;
	        this.match(ANTLRv3Parser.TOKEN_REF);
	        this.state = 140;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 64:
	            this.state = 137;
	            this.match(ANTLRv3Parser.EQUAL);
	            this.state = 138;
	            _la = this._input.LA(1);
	            if(!(_la===42 || _la===43)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;
	        case 74:
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 142;
	        this.match(ANTLRv3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attrScope() {
	    let localctx = new AttrScopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ANTLRv3Parser.RULE_attrScope);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(ANTLRv3Parser.SCOPE);
	        this.state = 145;
	        this.id_();
	        this.state = 146;
	        this.actionBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ANTLRv3Parser.RULE_action);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(ANTLRv3Parser.AT);
	        this.state = 152;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 149;
	            this.actionScopeName();
	            this.state = 150;
	            this.match(ANTLRv3Parser.COLONCOLON);

	        }
	        this.state = 154;
	        this.id_();
	        this.state = 155;
	        this.actionBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	actionScopeName() {
	    let localctx = new ActionScopeNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ANTLRv3Parser.RULE_actionScopeName);
	    try {
	        this.state = 160;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            this.id_();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.match(ANTLRv3Parser.LEXER);
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 159;
	            this.match(ANTLRv3Parser.PARSER);
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



	optionsSpec() {
	    let localctx = new OptionsSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ANTLRv3Parser.RULE_optionsSpec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(ANTLRv3Parser.OPTIONS);
	        this.state = 163;
	        this.match(ANTLRv3Parser.LBRACE);
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===81 || _la===82) {
	            this.state = 164;
	            this.option();
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 170;
	        this.match(ANTLRv3Parser.RBRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	option() {
	    let localctx = new OptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ANTLRv3Parser.RULE_option);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.id_();
	        this.state = 173;
	        this.match(ANTLRv3Parser.EQUAL);
	        this.state = 174;
	        this.optionValue();
	        this.state = 175;
	        this.match(ANTLRv3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionValue() {
	    let localctx = new OptionValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ANTLRv3Parser.RULE_optionValue);
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 177;
	            this.id_();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 178;
	            this.match(ANTLRv3Parser.STRING_LITERAL);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 179;
	            this.match(ANTLRv3Parser.CHAR_LITERAL);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 180;
	            this.match(ANTLRv3Parser.INT);
	            break;
	        case 76:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 181;
	            this.match(ANTLRv3Parser.STAR);
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



	rule_() {
	    let localctx = new Rule_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ANTLRv3Parser.RULE_rule_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 184;
	            this.match(ANTLRv3Parser.DOC_COMMENT);
	        }

	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7340033) !== 0)) {
	            this.state = 187;
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 7340033) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 190;
	        this.id_();
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===36) {
	            this.state = 191;
	            this.match(ANTLRv3Parser.BANG);
	        }

	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46) {
	            this.state = 194;
	            this.argActionBlock();
	        }

	        this.state = 199;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===56) {
	            this.state = 197;
	            this.match(ANTLRv3Parser.RETURNS);
	            this.state = 198;
	            this.argActionBlock();
	        }

	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===57) {
	            this.state = 201;
	            this.throwsSpec();
	        }

	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 204;
	            this.optionsSpec();
	        }

	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 207;
	            this.ruleScopeSpec();
	        }

	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===59) {
	            this.state = 210;
	            this.ruleAction();
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 216;
	        this.match(ANTLRv3Parser.COLON);
	        this.state = 217;
	        this.altList();
	        this.state = 218;
	        this.match(ANTLRv3Parser.SEMI);
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===50 || _la===51) {
	            this.state = 219;
	            this.exceptionGroup();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleAction() {
	    let localctx = new RuleActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ANTLRv3Parser.RULE_ruleAction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(ANTLRv3Parser.AT);
	        this.state = 223;
	        this.id_();
	        this.state = 224;
	        this.actionBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	throwsSpec() {
	    let localctx = new ThrowsSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ANTLRv3Parser.RULE_throwsSpec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.match(ANTLRv3Parser.THROWS);
	        this.state = 227;
	        this.id_();
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===62) {
	            this.state = 228;
	            this.match(ANTLRv3Parser.COMMA);
	            this.state = 229;
	            this.id_();
	            this.state = 234;
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



	ruleScopeSpec() {
	    let localctx = new RuleScopeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ANTLRv3Parser.RULE_ruleScopeSpec);
	    var _la = 0;
	    try {
	        this.state = 261;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 235;
	            this.match(ANTLRv3Parser.SCOPE);
	            this.state = 236;
	            this.actionBlock();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 237;
	            this.match(ANTLRv3Parser.SCOPE);
	            this.state = 238;
	            this.id_();
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===62) {
	                this.state = 239;
	                this.match(ANTLRv3Parser.COMMA);
	                this.state = 240;
	                this.id_();
	                this.state = 245;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 246;
	            this.match(ANTLRv3Parser.SEMI);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 248;
	            this.match(ANTLRv3Parser.SCOPE);
	            this.state = 249;
	            this.actionBlock();
	            this.state = 250;
	            this.match(ANTLRv3Parser.SCOPE);
	            this.state = 251;
	            this.id_();
	            this.state = 256;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===62) {
	                this.state = 252;
	                this.match(ANTLRv3Parser.COMMA);
	                this.state = 253;
	                this.id_();
	                this.state = 258;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 259;
	            this.match(ANTLRv3Parser.SEMI);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ANTLRv3Parser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(ANTLRv3Parser.LPAREN);
	        this.state = 268;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48 || _la===60) {
	            this.state = 265;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 264;
	                this.optionsSpec();
	            }

	            this.state = 267;
	            this.match(ANTLRv3Parser.COLON);
	        }

	        this.state = 270;
	        this.alternative();
	        this.state = 271;
	        this.rewrite();
	        this.state = 278;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===68) {
	            this.state = 272;
	            this.match(ANTLRv3Parser.OR);
	            this.state = 273;
	            this.alternative();
	            this.state = 274;
	            this.rewrite();
	            this.state = 280;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 281;
	        this.match(ANTLRv3Parser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	altList() {
	    let localctx = new AltListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ANTLRv3Parser.RULE_altList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.alternative();
	        this.state = 284;
	        this.rewrite();
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===68) {
	            this.state = 285;
	            this.match(ANTLRv3Parser.OR);
	            this.state = 286;
	            this.alternative();
	            this.state = 287;
	            this.rewrite();
	            this.state = 293;
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



	alternative() {
	    let localctx = new AlternativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ANTLRv3Parser.RULE_alternative);
	    var _la = 0;
	    try {
	        this.state = 300;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	        case 42:
	        case 43:
	        case 47:
	        case 63:
	        case 67:
	        case 79:
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 295; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 294;
	                this.element();
	                this.state = 297; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 536879873) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 53249) !== 0));
	            break;
	        case 37:
	        case 68:
	        case 73:
	        case 74:
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



	exceptionGroup() {
	    let localctx = new ExceptionGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ANTLRv3Parser.RULE_exceptionGroup);
	    var _la = 0;
	    try {
	        this.state = 311;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 303; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 302;
	                this.exceptionHandler();
	                this.state = 305; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===50);
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 307;
	                this.finallyClause();
	            }

	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 310;
	            this.finallyClause();
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



	exceptionHandler() {
	    let localctx = new ExceptionHandlerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ANTLRv3Parser.RULE_exceptionHandler);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(ANTLRv3Parser.CATCH);
	        this.state = 314;
	        this.argActionBlock();
	        this.state = 315;
	        this.actionBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finallyClause() {
	    let localctx = new FinallyClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, ANTLRv3Parser.RULE_finallyClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(ANTLRv3Parser.FINALLY);
	        this.state = 318;
	        this.actionBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 38, ANTLRv3Parser.RULE_element);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.elementNoOptionSpec();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementNoOptionSpec() {
	    let localctx = new ElementNoOptionSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ANTLRv3Parser.RULE_elementNoOptionSpec);
	    var _la = 0;
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 322;
	            this.id_();
	            this.state = 323;
	            _la = this._input.LA(1);
	            if(!(_la===64 || _la===78)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 324;
	            this.atom();
	            this.state = 327;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 69:
	            case 70:
	            case 76:
	                this.state = 325;
	                this.ebnfSuffix();
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 73:
	            case 74:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.id_();
	            this.state = 330;
	            _la = this._input.LA(1);
	            if(!(_la===64 || _la===78)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 331;
	            this.block();
	            this.state = 334;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 69:
	            case 70:
	            case 76:
	                this.state = 332;
	                this.ebnfSuffix();
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 73:
	            case 74:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 336;
	            this.atom();
	            this.state = 339;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 69:
	            case 70:
	            case 76:
	                this.state = 337;
	                this.ebnfSuffix();
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 73:
	            case 74:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 341;
	            this.ebnf();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 342;
	            this.actionBlock();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 343;
	            this.actionBlock();
	            this.state = 344;
	            this.match(ANTLRv3Parser.QM);
	            this.state = 347;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 75:
	                this.state = 345;
	                this.match(ANTLRv3Parser.SEMPREDOP);
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 73:
	            case 74:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 349;
	            this.treeSpec();
	            this.state = 352;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 69:
	            case 70:
	            case 76:
	                this.state = 350;
	                this.ebnfSuffix();
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 73:
	            case 74:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	actionBlock() {
	    let localctx = new ActionBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ANTLRv3Parser.RULE_actionBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(ANTLRv3Parser.BEGIN_ACTION);
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 357;
	            this.match(ANTLRv3Parser.ACTION_CONTENT);
	            this.state = 362;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 363;
	        this.match(ANTLRv3Parser.END_ACTION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argActionBlock() {
	    let localctx = new ArgActionBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ANTLRv3Parser.RULE_argActionBlock);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(ANTLRv3Parser.BEGIN_ARGUMENT);
	        this.state = 369;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===85) {
	            this.state = 366;
	            this.match(ANTLRv3Parser.ARGUMENT_CONTENT);
	            this.state = 371;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 372;
	        this.match(ANTLRv3Parser.END_ARGUMENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ANTLRv3Parser.RULE_atom);
	    var _la = 0;
	    try {
	        this.state = 394;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 374;
	            this.range_();
	            this.state = 378;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 35:
	                this.state = 375;
	                this.match(ANTLRv3Parser.ROOT);
	                break;
	            case 36:
	                this.state = 376;
	                this.match(ANTLRv3Parser.BANG);
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 69:
	            case 70:
	            case 73:
	            case 74:
	            case 76:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 380;
	            this.terminal_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 381;
	            this.notSet();
	            this.state = 385;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 35:
	                this.state = 382;
	                this.match(ANTLRv3Parser.ROOT);
	                break;
	            case 36:
	                this.state = 383;
	                this.match(ANTLRv3Parser.BANG);
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 69:
	            case 70:
	            case 73:
	            case 74:
	            case 76:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 387;
	            this.match(ANTLRv3Parser.RULE_REF);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===46) {
	                this.state = 388;
	                this.argActionBlock();
	            }

	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===35 || _la===36) {
	                this.state = 391;
	                _la = this._input.LA(1);
	                if(!(_la===35 || _la===36)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
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



	notSet() {
	    let localctx = new NotSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ANTLRv3Parser.RULE_notSet);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(ANTLRv3Parser.NOT);
	        this.state = 399;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	        case 43:
	        case 81:
	            this.state = 397;
	            this.notTerminal();
	            break;
	        case 67:
	            this.state = 398;
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



	treeSpec() {
	    let localctx = new TreeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ANTLRv3Parser.RULE_treeSpec);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.match(ANTLRv3Parser.TREE_BEGIN);
	        this.state = 402;
	        this.element();
	        this.state = 404; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 403;
	            this.element();
	            this.state = 406; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 536879873) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 53249) !== 0));
	        this.state = 408;
	        this.match(ANTLRv3Parser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ebnf() {
	    let localctx = new EbnfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ANTLRv3Parser.RULE_ebnf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.block();
	        this.state = 416;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.state = 411;
	            this.match(ANTLRv3Parser.QM);
	            break;
	        case 76:
	            this.state = 412;
	            this.match(ANTLRv3Parser.STAR);
	            break;
	        case 69:
	            this.state = 413;
	            this.match(ANTLRv3Parser.PLUS);
	            break;
	        case 75:
	            this.state = 414;
	            this.match(ANTLRv3Parser.SEMPREDOP);
	            break;
	        case 34:
	        case 37:
	        case 42:
	        case 43:
	        case 47:
	        case 63:
	        case 67:
	        case 68:
	        case 73:
	        case 74:
	        case 79:
	        case 81:
	        case 82:
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



	range_() {
	    let localctx = new Range_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ANTLRv3Parser.RULE_range_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.match(ANTLRv3Parser.CHAR_LITERAL);
	        this.state = 419;
	        this.match(ANTLRv3Parser.RANGE);
	        this.state = 420;
	        this.match(ANTLRv3Parser.CHAR_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminal_() {
	    let localctx = new Terminal_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ANTLRv3Parser.RULE_terminal_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.state = 422;
	            this.match(ANTLRv3Parser.CHAR_LITERAL);
	            break;
	        case 81:
	            this.state = 423;
	            this.match(ANTLRv3Parser.TOKEN_REF);
	            this.state = 426;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 46:
	                this.state = 424;
	                this.argActionBlock();
	                break;
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 63:
	            case 67:
	            case 68:
	            case 69:
	            case 70:
	            case 73:
	            case 74:
	            case 76:
	            case 79:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case 43:
	            this.state = 428;
	            this.match(ANTLRv3Parser.STRING_LITERAL);
	            break;
	        case 63:
	            this.state = 429;
	            this.match(ANTLRv3Parser.DOT);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 433;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===35 || _la===36) {
	            this.state = 432;
	            _la = this._input.LA(1);
	            if(!(_la===35 || _la===36)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	notTerminal() {
	    let localctx = new NotTerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, ANTLRv3Parser.RULE_notTerminal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        _la = this._input.LA(1);
	        if(!(_la===42 || _la===43 || _la===81)) {
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



	ebnfSuffix() {
	    let localctx = new EbnfSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ANTLRv3Parser.RULE_ebnfSuffix);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
	        _la = this._input.LA(1);
	        if(!(((((_la - 69)) & ~0x1f) === 0 && ((1 << (_la - 69)) & 131) !== 0))) {
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



	rewrite() {
	    let localctx = new RewriteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ANTLRv3Parser.RULE_rewrite);
	    try {
	        this.state = 452;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 37:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 446;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 439;
	                    this.match(ANTLRv3Parser.REWRITE);
	                    this.state = 440;
	                    this.actionBlock();
	                    this.state = 441;
	                    this.match(ANTLRv3Parser.QM);
	                    this.state = 442;
	                    this.rewrite_alternative(); 
	                }
	                this.state = 448;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
	            }

	            this.state = 449;
	            this.match(ANTLRv3Parser.REWRITE);
	            this.state = 450;
	            this.rewrite_alternative();
	            break;
	        case 68:
	        case 73:
	        case 74:
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



	rewrite_alternative() {
	    let localctx = new Rewrite_alternativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ANTLRv3Parser.RULE_rewrite_alternative);
	    try {
	        this.state = 457;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 454;
	            this.rewrite_template();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 455;
	            this.rewrite_tree_alternative();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);

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



	rewrite_tree_block() {
	    let localctx = new Rewrite_tree_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ANTLRv3Parser.RULE_rewrite_tree_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this.match(ANTLRv3Parser.LPAREN);
	        this.state = 460;
	        this.rewrite_tree_alternative();
	        this.state = 461;
	        this.match(ANTLRv3Parser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rewrite_tree_alternative() {
	    let localctx = new Rewrite_tree_alternativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, ANTLRv3Parser.RULE_rewrite_tree_alternative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 463;
	            this.rewrite_tree_element();
	            this.state = 466; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 8961) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 50177) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rewrite_tree_element() {
	    let localctx = new Rewrite_tree_elementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, ANTLRv3Parser.RULE_rewrite_tree_element);
	    try {
	        this.state = 478;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 468;
	            this.rewrite_tree_atom();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 469;
	            this.rewrite_tree_atom();
	            this.state = 470;
	            this.ebnfSuffix();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 472;
	            this.rewrite_tree();
	            this.state = 475;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 69:
	            case 70:
	            case 76:
	                this.state = 473;
	                this.ebnfSuffix();
	                break;
	            case 34:
	            case 37:
	            case 42:
	            case 43:
	            case 47:
	            case 67:
	            case 68:
	            case 73:
	            case 74:
	            case 77:
	            case 81:
	            case 82:
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 477;
	            this.rewrite_tree_ebnf();
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



	rewrite_tree_atom() {
	    let localctx = new Rewrite_tree_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ANTLRv3Parser.RULE_rewrite_tree_atom);
	    var _la = 0;
	    try {
	        this.state = 490;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 42:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 480;
	            this.match(ANTLRv3Parser.CHAR_LITERAL);
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 481;
	            this.match(ANTLRv3Parser.TOKEN_REF);
	            this.state = 483;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===46) {
	                this.state = 482;
	                this.argActionBlock();
	            }

	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 485;
	            this.match(ANTLRv3Parser.RULE_REF);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 486;
	            this.match(ANTLRv3Parser.STRING_LITERAL);
	            break;
	        case 77:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 487;
	            this.match(ANTLRv3Parser.DOLLAR);
	            this.state = 488;
	            this.id_();
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 489;
	            this.actionBlock();
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



	rewrite_tree_ebnf() {
	    let localctx = new Rewrite_tree_ebnfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, ANTLRv3Parser.RULE_rewrite_tree_ebnf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
	        this.rewrite_tree_block();
	        this.state = 493;
	        this.ebnfSuffix();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rewrite_tree() {
	    let localctx = new Rewrite_treeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ANTLRv3Parser.RULE_rewrite_tree);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
	        this.match(ANTLRv3Parser.TREE_BEGIN);
	        this.state = 496;
	        this.rewrite_tree_atom();
	        this.state = 500;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 8961) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 50177) !== 0)) {
	            this.state = 497;
	            this.rewrite_tree_element();
	            this.state = 502;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 503;
	        this.match(ANTLRv3Parser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rewrite_template() {
	    let localctx = new Rewrite_templateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, ANTLRv3Parser.RULE_rewrite_template);
	    var _la = 0;
	    try {
	        this.state = 514;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 505;
	            this.id_();
	            this.state = 506;
	            this.match(ANTLRv3Parser.LPAREN);
	            this.state = 507;
	            this.rewrite_template_args();
	            this.state = 508;
	            this.match(ANTLRv3Parser.RPAREN);
	            this.state = 509;
	            _la = this._input.LA(1);
	            if(!(_la===44 || _la===45)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 511;
	            this.rewrite_template_ref();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 512;
	            this.rewrite_indirect_template_head();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 513;
	            this.actionBlock();
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



	rewrite_template_ref() {
	    let localctx = new Rewrite_template_refContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, ANTLRv3Parser.RULE_rewrite_template_ref);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 516;
	        this.id_();
	        this.state = 517;
	        this.match(ANTLRv3Parser.LPAREN);
	        this.state = 518;
	        this.rewrite_template_args();
	        this.state = 519;
	        this.match(ANTLRv3Parser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rewrite_indirect_template_head() {
	    let localctx = new Rewrite_indirect_template_headContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, ANTLRv3Parser.RULE_rewrite_indirect_template_head);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 521;
	        this.match(ANTLRv3Parser.LPAREN);
	        this.state = 522;
	        this.actionBlock();
	        this.state = 523;
	        this.match(ANTLRv3Parser.RPAREN);
	        this.state = 524;
	        this.match(ANTLRv3Parser.LPAREN);
	        this.state = 525;
	        this.rewrite_template_args();
	        this.state = 526;
	        this.match(ANTLRv3Parser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rewrite_template_args() {
	    let localctx = new Rewrite_template_argsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, ANTLRv3Parser.RULE_rewrite_template_args);
	    var _la = 0;
	    try {
	        this.state = 537;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 528;
	            this.rewrite_template_arg();
	            this.state = 533;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===62) {
	                this.state = 529;
	                this.match(ANTLRv3Parser.COMMA);
	                this.state = 530;
	                this.rewrite_template_arg();
	                this.state = 535;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case 73:
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



	rewrite_template_arg() {
	    let localctx = new Rewrite_template_argContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, ANTLRv3Parser.RULE_rewrite_template_arg);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 539;
	        this.id_();
	        this.state = 540;
	        this.match(ANTLRv3Parser.EQUAL);
	        this.state = 541;
	        this.actionBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 88, ANTLRv3Parser.RULE_id_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 543;
	        _la = this._input.LA(1);
	        if(!(_la===81 || _la===82)) {
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

ANTLRv3Parser.EOF = antlr4.Token.EOF;
ANTLRv3Parser.DOC_COMMENT = 1;
ANTLRv3Parser.PARSER = 2;
ANTLRv3Parser.LEXER = 3;
ANTLRv3Parser.RULE = 4;
ANTLRv3Parser.BLOCK = 5;
ANTLRv3Parser.OPTIONAL = 6;
ANTLRv3Parser.CLOSURE = 7;
ANTLRv3Parser.POSITIVE_CLOSURE = 8;
ANTLRv3Parser.SYNPRED = 9;
ANTLRv3Parser.RANGE = 10;
ANTLRv3Parser.CHAR_RANGE = 11;
ANTLRv3Parser.EPSILON = 12;
ANTLRv3Parser.ALT = 13;
ANTLRv3Parser.EOR = 14;
ANTLRv3Parser.EOB = 15;
ANTLRv3Parser.EOA = 16;
ANTLRv3Parser.ID = 17;
ANTLRv3Parser.ARG = 18;
ANTLRv3Parser.ARGLIST = 19;
ANTLRv3Parser.RET = 20;
ANTLRv3Parser.LEXER_GRAMMAR = 21;
ANTLRv3Parser.PARSER_GRAMMAR = 22;
ANTLRv3Parser.TREE_GRAMMAR = 23;
ANTLRv3Parser.COMBINED_GRAMMAR = 24;
ANTLRv3Parser.INITACTION = 25;
ANTLRv3Parser.LABEL = 26;
ANTLRv3Parser.TEMPLATE = 27;
ANTLRv3Parser.SCOPE = 28;
ANTLRv3Parser.SEMPRED = 29;
ANTLRv3Parser.GATED_SEMPRED = 30;
ANTLRv3Parser.SYN_SEMPRED = 31;
ANTLRv3Parser.BACKTRACK_SEMPRED = 32;
ANTLRv3Parser.FRAGMENT = 33;
ANTLRv3Parser.TREE_BEGIN = 34;
ANTLRv3Parser.ROOT = 35;
ANTLRv3Parser.BANG = 36;
ANTLRv3Parser.REWRITE = 37;
ANTLRv3Parser.ACTION_CONTENT = 38;
ANTLRv3Parser.SL_COMMENT = 39;
ANTLRv3Parser.ML_COMMENT = 40;
ANTLRv3Parser.INT = 41;
ANTLRv3Parser.CHAR_LITERAL = 42;
ANTLRv3Parser.STRING_LITERAL = 43;
ANTLRv3Parser.DOUBLE_QUOTE_STRING_LITERAL = 44;
ANTLRv3Parser.DOUBLE_ANGLE_STRING_LITERAL = 45;
ANTLRv3Parser.BEGIN_ARGUMENT = 46;
ANTLRv3Parser.BEGIN_ACTION = 47;
ANTLRv3Parser.OPTIONS = 48;
ANTLRv3Parser.TOKENS = 49;
ANTLRv3Parser.CATCH = 50;
ANTLRv3Parser.FINALLY = 51;
ANTLRv3Parser.GRAMMAR = 52;
ANTLRv3Parser.PRIVATE = 53;
ANTLRv3Parser.PROTECTED = 54;
ANTLRv3Parser.PUBLIC = 55;
ANTLRv3Parser.RETURNS = 56;
ANTLRv3Parser.THROWS = 57;
ANTLRv3Parser.TREE = 58;
ANTLRv3Parser.AT = 59;
ANTLRv3Parser.COLON = 60;
ANTLRv3Parser.COLONCOLON = 61;
ANTLRv3Parser.COMMA = 62;
ANTLRv3Parser.DOT = 63;
ANTLRv3Parser.EQUAL = 64;
ANTLRv3Parser.LBRACE = 65;
ANTLRv3Parser.LBRACK = 66;
ANTLRv3Parser.LPAREN = 67;
ANTLRv3Parser.OR = 68;
ANTLRv3Parser.PLUS = 69;
ANTLRv3Parser.QM = 70;
ANTLRv3Parser.RBRACE = 71;
ANTLRv3Parser.RBRACK = 72;
ANTLRv3Parser.RPAREN = 73;
ANTLRv3Parser.SEMI = 74;
ANTLRv3Parser.SEMPREDOP = 75;
ANTLRv3Parser.STAR = 76;
ANTLRv3Parser.DOLLAR = 77;
ANTLRv3Parser.PEQ = 78;
ANTLRv3Parser.NOT = 79;
ANTLRv3Parser.WS = 80;
ANTLRv3Parser.TOKEN_REF = 81;
ANTLRv3Parser.RULE_REF = 82;
ANTLRv3Parser.END_ARGUMENT = 83;
ANTLRv3Parser.UNTERMINATED_ARGUMENT = 84;
ANTLRv3Parser.ARGUMENT_CONTENT = 85;
ANTLRv3Parser.END_ACTION = 86;
ANTLRv3Parser.UNTERMINATED_ACTION = 87;
ANTLRv3Parser.OPT_LBRACE = 88;
ANTLRv3Parser.LEXER_CHAR_SET = 89;
ANTLRv3Parser.UNTERMINATED_CHAR_SET = 90;

ANTLRv3Parser.RULE_grammarDef = 0;
ANTLRv3Parser.RULE_tokensSpec = 1;
ANTLRv3Parser.RULE_tokenSpec = 2;
ANTLRv3Parser.RULE_attrScope = 3;
ANTLRv3Parser.RULE_action = 4;
ANTLRv3Parser.RULE_actionScopeName = 5;
ANTLRv3Parser.RULE_optionsSpec = 6;
ANTLRv3Parser.RULE_option = 7;
ANTLRv3Parser.RULE_optionValue = 8;
ANTLRv3Parser.RULE_rule_ = 9;
ANTLRv3Parser.RULE_ruleAction = 10;
ANTLRv3Parser.RULE_throwsSpec = 11;
ANTLRv3Parser.RULE_ruleScopeSpec = 12;
ANTLRv3Parser.RULE_block = 13;
ANTLRv3Parser.RULE_altList = 14;
ANTLRv3Parser.RULE_alternative = 15;
ANTLRv3Parser.RULE_exceptionGroup = 16;
ANTLRv3Parser.RULE_exceptionHandler = 17;
ANTLRv3Parser.RULE_finallyClause = 18;
ANTLRv3Parser.RULE_element = 19;
ANTLRv3Parser.RULE_elementNoOptionSpec = 20;
ANTLRv3Parser.RULE_actionBlock = 21;
ANTLRv3Parser.RULE_argActionBlock = 22;
ANTLRv3Parser.RULE_atom = 23;
ANTLRv3Parser.RULE_notSet = 24;
ANTLRv3Parser.RULE_treeSpec = 25;
ANTLRv3Parser.RULE_ebnf = 26;
ANTLRv3Parser.RULE_range_ = 27;
ANTLRv3Parser.RULE_terminal_ = 28;
ANTLRv3Parser.RULE_notTerminal = 29;
ANTLRv3Parser.RULE_ebnfSuffix = 30;
ANTLRv3Parser.RULE_rewrite = 31;
ANTLRv3Parser.RULE_rewrite_alternative = 32;
ANTLRv3Parser.RULE_rewrite_tree_block = 33;
ANTLRv3Parser.RULE_rewrite_tree_alternative = 34;
ANTLRv3Parser.RULE_rewrite_tree_element = 35;
ANTLRv3Parser.RULE_rewrite_tree_atom = 36;
ANTLRv3Parser.RULE_rewrite_tree_ebnf = 37;
ANTLRv3Parser.RULE_rewrite_tree = 38;
ANTLRv3Parser.RULE_rewrite_template = 39;
ANTLRv3Parser.RULE_rewrite_template_ref = 40;
ANTLRv3Parser.RULE_rewrite_indirect_template_head = 41;
ANTLRv3Parser.RULE_rewrite_template_args = 42;
ANTLRv3Parser.RULE_rewrite_template_arg = 43;
ANTLRv3Parser.RULE_id_ = 44;

class GrammarDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_grammarDef;
    }

	GRAMMAR() {
	    return this.getToken(ANTLRv3Parser.GRAMMAR, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	SEMI() {
	    return this.getToken(ANTLRv3Parser.SEMI, 0);
	};

	EOF() {
	    return this.getToken(ANTLRv3Parser.EOF, 0);
	};

	LEXER() {
	    return this.getToken(ANTLRv3Parser.LEXER, 0);
	};

	PARSER() {
	    return this.getToken(ANTLRv3Parser.PARSER, 0);
	};

	TREE() {
	    return this.getToken(ANTLRv3Parser.TREE, 0);
	};

	DOC_COMMENT() {
	    return this.getToken(ANTLRv3Parser.DOC_COMMENT, 0);
	};

	optionsSpec() {
	    return this.getTypedRuleContext(OptionsSpecContext,0);
	};

	tokensSpec() {
	    return this.getTypedRuleContext(TokensSpecContext,0);
	};

	attrScope = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttrScopeContext);
	    } else {
	        return this.getTypedRuleContext(AttrScopeContext,i);
	    }
	};

	action = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionContext);
	    } else {
	        return this.getTypedRuleContext(ActionContext,i);
	    }
	};

	rule_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_Context);
	    } else {
	        return this.getTypedRuleContext(Rule_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterGrammarDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitGrammarDef(this);
		}
	}


}



class TokensSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_tokensSpec;
    }

	TOKENS() {
	    return this.getToken(ANTLRv3Parser.TOKENS, 0);
	};

	LBRACE() {
	    return this.getToken(ANTLRv3Parser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ANTLRv3Parser.RBRACE, 0);
	};

	tokenSpec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TokenSpecContext);
	    } else {
	        return this.getTypedRuleContext(TokenSpecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterTokensSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitTokensSpec(this);
		}
	}


}



class TokenSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_tokenSpec;
    }

	TOKEN_REF() {
	    return this.getToken(ANTLRv3Parser.TOKEN_REF, 0);
	};

	SEMI() {
	    return this.getToken(ANTLRv3Parser.SEMI, 0);
	};

	EQUAL() {
	    return this.getToken(ANTLRv3Parser.EQUAL, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(ANTLRv3Parser.STRING_LITERAL, 0);
	};

	CHAR_LITERAL() {
	    return this.getToken(ANTLRv3Parser.CHAR_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterTokenSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitTokenSpec(this);
		}
	}


}



class AttrScopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_attrScope;
    }

	SCOPE() {
	    return this.getToken(ANTLRv3Parser.SCOPE, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterAttrScope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitAttrScope(this);
		}
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_action;
    }

	AT() {
	    return this.getToken(ANTLRv3Parser.AT, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	actionScopeName() {
	    return this.getTypedRuleContext(ActionScopeNameContext,0);
	};

	COLONCOLON() {
	    return this.getToken(ANTLRv3Parser.COLONCOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitAction(this);
		}
	}


}



class ActionScopeNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_actionScopeName;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	LEXER() {
	    return this.getToken(ANTLRv3Parser.LEXER, 0);
	};

	PARSER() {
	    return this.getToken(ANTLRv3Parser.PARSER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterActionScopeName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitActionScopeName(this);
		}
	}


}



class OptionsSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_optionsSpec;
    }

	OPTIONS() {
	    return this.getToken(ANTLRv3Parser.OPTIONS, 0);
	};

	LBRACE() {
	    return this.getToken(ANTLRv3Parser.LBRACE, 0);
	};

	RBRACE() {
	    return this.getToken(ANTLRv3Parser.RBRACE, 0);
	};

	option = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionContext);
	    } else {
	        return this.getTypedRuleContext(OptionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterOptionsSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitOptionsSpec(this);
		}
	}


}



class OptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_option;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	EQUAL() {
	    return this.getToken(ANTLRv3Parser.EQUAL, 0);
	};

	optionValue() {
	    return this.getTypedRuleContext(OptionValueContext,0);
	};

	SEMI() {
	    return this.getToken(ANTLRv3Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitOption(this);
		}
	}


}



class OptionValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_optionValue;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	STRING_LITERAL() {
	    return this.getToken(ANTLRv3Parser.STRING_LITERAL, 0);
	};

	CHAR_LITERAL() {
	    return this.getToken(ANTLRv3Parser.CHAR_LITERAL, 0);
	};

	INT() {
	    return this.getToken(ANTLRv3Parser.INT, 0);
	};

	STAR() {
	    return this.getToken(ANTLRv3Parser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterOptionValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitOptionValue(this);
		}
	}


}



class Rule_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rule_;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	COLON() {
	    return this.getToken(ANTLRv3Parser.COLON, 0);
	};

	altList() {
	    return this.getTypedRuleContext(AltListContext,0);
	};

	SEMI() {
	    return this.getToken(ANTLRv3Parser.SEMI, 0);
	};

	DOC_COMMENT() {
	    return this.getToken(ANTLRv3Parser.DOC_COMMENT, 0);
	};

	BANG() {
	    return this.getToken(ANTLRv3Parser.BANG, 0);
	};

	argActionBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgActionBlockContext);
	    } else {
	        return this.getTypedRuleContext(ArgActionBlockContext,i);
	    }
	};

	RETURNS() {
	    return this.getToken(ANTLRv3Parser.RETURNS, 0);
	};

	throwsSpec() {
	    return this.getTypedRuleContext(ThrowsSpecContext,0);
	};

	optionsSpec() {
	    return this.getTypedRuleContext(OptionsSpecContext,0);
	};

	ruleScopeSpec() {
	    return this.getTypedRuleContext(RuleScopeSpecContext,0);
	};

	ruleAction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RuleActionContext);
	    } else {
	        return this.getTypedRuleContext(RuleActionContext,i);
	    }
	};

	exceptionGroup() {
	    return this.getTypedRuleContext(ExceptionGroupContext,0);
	};

	PROTECTED() {
	    return this.getToken(ANTLRv3Parser.PROTECTED, 0);
	};

	PUBLIC() {
	    return this.getToken(ANTLRv3Parser.PUBLIC, 0);
	};

	PRIVATE() {
	    return this.getToken(ANTLRv3Parser.PRIVATE, 0);
	};

	FRAGMENT() {
	    return this.getToken(ANTLRv3Parser.FRAGMENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRule_(this);
		}
	}


}



class RuleActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_ruleAction;
    }

	AT() {
	    return this.getToken(ANTLRv3Parser.AT, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRuleAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRuleAction(this);
		}
	}


}



class ThrowsSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_throwsSpec;
    }

	THROWS() {
	    return this.getToken(ANTLRv3Parser.THROWS, 0);
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
	        return this.getTokens(ANTLRv3Parser.COMMA);
	    } else {
	        return this.getToken(ANTLRv3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterThrowsSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitThrowsSpec(this);
		}
	}


}



class RuleScopeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_ruleScopeSpec;
    }

	SCOPE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.SCOPE);
	    } else {
	        return this.getToken(ANTLRv3Parser.SCOPE, i);
	    }
	};


	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
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

	SEMI() {
	    return this.getToken(ANTLRv3Parser.SEMI, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.COMMA);
	    } else {
	        return this.getToken(ANTLRv3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRuleScopeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRuleScopeSpec(this);
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
        this.ruleIndex = ANTLRv3Parser.RULE_block;
    }

	LPAREN() {
	    return this.getToken(ANTLRv3Parser.LPAREN, 0);
	};

	alternative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlternativeContext);
	    } else {
	        return this.getTypedRuleContext(AlternativeContext,i);
	    }
	};

	rewrite = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RewriteContext);
	    } else {
	        return this.getTypedRuleContext(RewriteContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(ANTLRv3Parser.RPAREN, 0);
	};

	COLON() {
	    return this.getToken(ANTLRv3Parser.COLON, 0);
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.OR);
	    } else {
	        return this.getToken(ANTLRv3Parser.OR, i);
	    }
	};


	optionsSpec() {
	    return this.getTypedRuleContext(OptionsSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitBlock(this);
		}
	}


}



class AltListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_altList;
    }

	alternative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AlternativeContext);
	    } else {
	        return this.getTypedRuleContext(AlternativeContext,i);
	    }
	};

	rewrite = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RewriteContext);
	    } else {
	        return this.getTypedRuleContext(RewriteContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.OR);
	    } else {
	        return this.getToken(ANTLRv3Parser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterAltList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitAltList(this);
		}
	}


}



class AlternativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_alternative;
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

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterAlternative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitAlternative(this);
		}
	}


}



class ExceptionGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_exceptionGroup;
    }

	exceptionHandler = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExceptionHandlerContext);
	    } else {
	        return this.getTypedRuleContext(ExceptionHandlerContext,i);
	    }
	};

	finallyClause() {
	    return this.getTypedRuleContext(FinallyClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterExceptionGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitExceptionGroup(this);
		}
	}


}



class ExceptionHandlerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_exceptionHandler;
    }

	CATCH() {
	    return this.getToken(ANTLRv3Parser.CATCH, 0);
	};

	argActionBlock() {
	    return this.getTypedRuleContext(ArgActionBlockContext,0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterExceptionHandler(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitExceptionHandler(this);
		}
	}


}



class FinallyClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_finallyClause;
    }

	FINALLY() {
	    return this.getToken(ANTLRv3Parser.FINALLY, 0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterFinallyClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitFinallyClause(this);
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
        this.ruleIndex = ANTLRv3Parser.RULE_element;
    }

	elementNoOptionSpec() {
	    return this.getTypedRuleContext(ElementNoOptionSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitElement(this);
		}
	}


}



class ElementNoOptionSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_elementNoOptionSpec;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	EQUAL() {
	    return this.getToken(ANTLRv3Parser.EQUAL, 0);
	};

	PEQ() {
	    return this.getToken(ANTLRv3Parser.PEQ, 0);
	};

	ebnfSuffix() {
	    return this.getTypedRuleContext(EbnfSuffixContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	ebnf() {
	    return this.getTypedRuleContext(EbnfContext,0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	QM() {
	    return this.getToken(ANTLRv3Parser.QM, 0);
	};

	SEMPREDOP() {
	    return this.getToken(ANTLRv3Parser.SEMPREDOP, 0);
	};

	treeSpec() {
	    return this.getTypedRuleContext(TreeSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterElementNoOptionSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitElementNoOptionSpec(this);
		}
	}


}



class ActionBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_actionBlock;
    }

	BEGIN_ACTION() {
	    return this.getToken(ANTLRv3Parser.BEGIN_ACTION, 0);
	};

	END_ACTION() {
	    return this.getToken(ANTLRv3Parser.END_ACTION, 0);
	};

	ACTION_CONTENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.ACTION_CONTENT);
	    } else {
	        return this.getToken(ANTLRv3Parser.ACTION_CONTENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterActionBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitActionBlock(this);
		}
	}


}



class ArgActionBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_argActionBlock;
    }

	BEGIN_ARGUMENT() {
	    return this.getToken(ANTLRv3Parser.BEGIN_ARGUMENT, 0);
	};

	END_ARGUMENT() {
	    return this.getToken(ANTLRv3Parser.END_ARGUMENT, 0);
	};

	ARGUMENT_CONTENT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.ARGUMENT_CONTENT);
	    } else {
	        return this.getToken(ANTLRv3Parser.ARGUMENT_CONTENT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterArgActionBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitArgActionBlock(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_atom;
    }

	range_() {
	    return this.getTypedRuleContext(Range_Context,0);
	};

	ROOT() {
	    return this.getToken(ANTLRv3Parser.ROOT, 0);
	};

	BANG() {
	    return this.getToken(ANTLRv3Parser.BANG, 0);
	};

	terminal_() {
	    return this.getTypedRuleContext(Terminal_Context,0);
	};

	notSet() {
	    return this.getTypedRuleContext(NotSetContext,0);
	};

	RULE_REF() {
	    return this.getToken(ANTLRv3Parser.RULE_REF, 0);
	};

	argActionBlock() {
	    return this.getTypedRuleContext(ArgActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitAtom(this);
		}
	}


}



class NotSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_notSet;
    }

	NOT() {
	    return this.getToken(ANTLRv3Parser.NOT, 0);
	};

	notTerminal() {
	    return this.getTypedRuleContext(NotTerminalContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterNotSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitNotSet(this);
		}
	}


}



class TreeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_treeSpec;
    }

	TREE_BEGIN() {
	    return this.getToken(ANTLRv3Parser.TREE_BEGIN, 0);
	};

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

	RPAREN() {
	    return this.getToken(ANTLRv3Parser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterTreeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitTreeSpec(this);
		}
	}


}



class EbnfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_ebnf;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	QM() {
	    return this.getToken(ANTLRv3Parser.QM, 0);
	};

	STAR() {
	    return this.getToken(ANTLRv3Parser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(ANTLRv3Parser.PLUS, 0);
	};

	SEMPREDOP() {
	    return this.getToken(ANTLRv3Parser.SEMPREDOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterEbnf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitEbnf(this);
		}
	}


}



class Range_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_range_;
    }

	CHAR_LITERAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.CHAR_LITERAL);
	    } else {
	        return this.getToken(ANTLRv3Parser.CHAR_LITERAL, i);
	    }
	};


	RANGE() {
	    return this.getToken(ANTLRv3Parser.RANGE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRange_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRange_(this);
		}
	}


}



class Terminal_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_terminal_;
    }

	CHAR_LITERAL() {
	    return this.getToken(ANTLRv3Parser.CHAR_LITERAL, 0);
	};

	TOKEN_REF() {
	    return this.getToken(ANTLRv3Parser.TOKEN_REF, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(ANTLRv3Parser.STRING_LITERAL, 0);
	};

	DOT() {
	    return this.getToken(ANTLRv3Parser.DOT, 0);
	};

	argActionBlock() {
	    return this.getTypedRuleContext(ArgActionBlockContext,0);
	};

	ROOT() {
	    return this.getToken(ANTLRv3Parser.ROOT, 0);
	};

	BANG() {
	    return this.getToken(ANTLRv3Parser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterTerminal_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitTerminal_(this);
		}
	}


}



class NotTerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_notTerminal;
    }

	CHAR_LITERAL() {
	    return this.getToken(ANTLRv3Parser.CHAR_LITERAL, 0);
	};

	TOKEN_REF() {
	    return this.getToken(ANTLRv3Parser.TOKEN_REF, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(ANTLRv3Parser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterNotTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitNotTerminal(this);
		}
	}


}



class EbnfSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_ebnfSuffix;
    }

	QM() {
	    return this.getToken(ANTLRv3Parser.QM, 0);
	};

	STAR() {
	    return this.getToken(ANTLRv3Parser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(ANTLRv3Parser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterEbnfSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitEbnfSuffix(this);
		}
	}


}



class RewriteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite;
    }

	REWRITE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.REWRITE);
	    } else {
	        return this.getToken(ANTLRv3Parser.REWRITE, i);
	    }
	};


	rewrite_alternative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rewrite_alternativeContext);
	    } else {
	        return this.getTypedRuleContext(Rewrite_alternativeContext,i);
	    }
	};

	actionBlock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ActionBlockContext);
	    } else {
	        return this.getTypedRuleContext(ActionBlockContext,i);
	    }
	};

	QM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.QM);
	    } else {
	        return this.getToken(ANTLRv3Parser.QM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite(this);
		}
	}


}



class Rewrite_alternativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_alternative;
    }

	rewrite_template() {
	    return this.getTypedRuleContext(Rewrite_templateContext,0);
	};

	rewrite_tree_alternative() {
	    return this.getTypedRuleContext(Rewrite_tree_alternativeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_alternative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_alternative(this);
		}
	}


}



class Rewrite_tree_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_tree_block;
    }

	LPAREN() {
	    return this.getToken(ANTLRv3Parser.LPAREN, 0);
	};

	rewrite_tree_alternative() {
	    return this.getTypedRuleContext(Rewrite_tree_alternativeContext,0);
	};

	RPAREN() {
	    return this.getToken(ANTLRv3Parser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_tree_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_tree_block(this);
		}
	}


}



class Rewrite_tree_alternativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_tree_alternative;
    }

	rewrite_tree_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rewrite_tree_elementContext);
	    } else {
	        return this.getTypedRuleContext(Rewrite_tree_elementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_tree_alternative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_tree_alternative(this);
		}
	}


}



class Rewrite_tree_elementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_tree_element;
    }

	rewrite_tree_atom() {
	    return this.getTypedRuleContext(Rewrite_tree_atomContext,0);
	};

	ebnfSuffix() {
	    return this.getTypedRuleContext(EbnfSuffixContext,0);
	};

	rewrite_tree() {
	    return this.getTypedRuleContext(Rewrite_treeContext,0);
	};

	rewrite_tree_ebnf() {
	    return this.getTypedRuleContext(Rewrite_tree_ebnfContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_tree_element(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_tree_element(this);
		}
	}


}



class Rewrite_tree_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_tree_atom;
    }

	CHAR_LITERAL() {
	    return this.getToken(ANTLRv3Parser.CHAR_LITERAL, 0);
	};

	TOKEN_REF() {
	    return this.getToken(ANTLRv3Parser.TOKEN_REF, 0);
	};

	argActionBlock() {
	    return this.getTypedRuleContext(ArgActionBlockContext,0);
	};

	RULE_REF() {
	    return this.getToken(ANTLRv3Parser.RULE_REF, 0);
	};

	STRING_LITERAL() {
	    return this.getToken(ANTLRv3Parser.STRING_LITERAL, 0);
	};

	DOLLAR() {
	    return this.getToken(ANTLRv3Parser.DOLLAR, 0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_tree_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_tree_atom(this);
		}
	}


}



class Rewrite_tree_ebnfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_tree_ebnf;
    }

	rewrite_tree_block() {
	    return this.getTypedRuleContext(Rewrite_tree_blockContext,0);
	};

	ebnfSuffix() {
	    return this.getTypedRuleContext(EbnfSuffixContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_tree_ebnf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_tree_ebnf(this);
		}
	}


}



class Rewrite_treeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_tree;
    }

	TREE_BEGIN() {
	    return this.getToken(ANTLRv3Parser.TREE_BEGIN, 0);
	};

	rewrite_tree_atom() {
	    return this.getTypedRuleContext(Rewrite_tree_atomContext,0);
	};

	RPAREN() {
	    return this.getToken(ANTLRv3Parser.RPAREN, 0);
	};

	rewrite_tree_element = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rewrite_tree_elementContext);
	    } else {
	        return this.getTypedRuleContext(Rewrite_tree_elementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_tree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_tree(this);
		}
	}


}



class Rewrite_templateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_template;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	LPAREN() {
	    return this.getToken(ANTLRv3Parser.LPAREN, 0);
	};

	rewrite_template_args() {
	    return this.getTypedRuleContext(Rewrite_template_argsContext,0);
	};

	RPAREN() {
	    return this.getToken(ANTLRv3Parser.RPAREN, 0);
	};

	DOUBLE_QUOTE_STRING_LITERAL() {
	    return this.getToken(ANTLRv3Parser.DOUBLE_QUOTE_STRING_LITERAL, 0);
	};

	DOUBLE_ANGLE_STRING_LITERAL() {
	    return this.getToken(ANTLRv3Parser.DOUBLE_ANGLE_STRING_LITERAL, 0);
	};

	rewrite_template_ref() {
	    return this.getTypedRuleContext(Rewrite_template_refContext,0);
	};

	rewrite_indirect_template_head() {
	    return this.getTypedRuleContext(Rewrite_indirect_template_headContext,0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_template(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_template(this);
		}
	}


}



class Rewrite_template_refContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_template_ref;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	LPAREN() {
	    return this.getToken(ANTLRv3Parser.LPAREN, 0);
	};

	rewrite_template_args() {
	    return this.getTypedRuleContext(Rewrite_template_argsContext,0);
	};

	RPAREN() {
	    return this.getToken(ANTLRv3Parser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_template_ref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_template_ref(this);
		}
	}


}



class Rewrite_indirect_template_headContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_indirect_template_head;
    }

	LPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.LPAREN);
	    } else {
	        return this.getToken(ANTLRv3Parser.LPAREN, i);
	    }
	};


	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	RPAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.RPAREN);
	    } else {
	        return this.getToken(ANTLRv3Parser.RPAREN, i);
	    }
	};


	rewrite_template_args() {
	    return this.getTypedRuleContext(Rewrite_template_argsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_indirect_template_head(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_indirect_template_head(this);
		}
	}


}



class Rewrite_template_argsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_template_args;
    }

	rewrite_template_arg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rewrite_template_argContext);
	    } else {
	        return this.getTypedRuleContext(Rewrite_template_argContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ANTLRv3Parser.COMMA);
	    } else {
	        return this.getToken(ANTLRv3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_template_args(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_template_args(this);
		}
	}


}



class Rewrite_template_argContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ANTLRv3Parser.RULE_rewrite_template_arg;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	EQUAL() {
	    return this.getToken(ANTLRv3Parser.EQUAL, 0);
	};

	actionBlock() {
	    return this.getTypedRuleContext(ActionBlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterRewrite_template_arg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitRewrite_template_arg(this);
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
        this.ruleIndex = ANTLRv3Parser.RULE_id_;
    }

	TOKEN_REF() {
	    return this.getToken(ANTLRv3Parser.TOKEN_REF, 0);
	};

	RULE_REF() {
	    return this.getToken(ANTLRv3Parser.RULE_REF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ANTLRv3ParserListener ) {
	        listener.exitId_(this);
		}
	}


}




ANTLRv3Parser.GrammarDefContext = GrammarDefContext; 
ANTLRv3Parser.TokensSpecContext = TokensSpecContext; 
ANTLRv3Parser.TokenSpecContext = TokenSpecContext; 
ANTLRv3Parser.AttrScopeContext = AttrScopeContext; 
ANTLRv3Parser.ActionContext = ActionContext; 
ANTLRv3Parser.ActionScopeNameContext = ActionScopeNameContext; 
ANTLRv3Parser.OptionsSpecContext = OptionsSpecContext; 
ANTLRv3Parser.OptionContext = OptionContext; 
ANTLRv3Parser.OptionValueContext = OptionValueContext; 
ANTLRv3Parser.Rule_Context = Rule_Context; 
ANTLRv3Parser.RuleActionContext = RuleActionContext; 
ANTLRv3Parser.ThrowsSpecContext = ThrowsSpecContext; 
ANTLRv3Parser.RuleScopeSpecContext = RuleScopeSpecContext; 
ANTLRv3Parser.BlockContext = BlockContext; 
ANTLRv3Parser.AltListContext = AltListContext; 
ANTLRv3Parser.AlternativeContext = AlternativeContext; 
ANTLRv3Parser.ExceptionGroupContext = ExceptionGroupContext; 
ANTLRv3Parser.ExceptionHandlerContext = ExceptionHandlerContext; 
ANTLRv3Parser.FinallyClauseContext = FinallyClauseContext; 
ANTLRv3Parser.ElementContext = ElementContext; 
ANTLRv3Parser.ElementNoOptionSpecContext = ElementNoOptionSpecContext; 
ANTLRv3Parser.ActionBlockContext = ActionBlockContext; 
ANTLRv3Parser.ArgActionBlockContext = ArgActionBlockContext; 
ANTLRv3Parser.AtomContext = AtomContext; 
ANTLRv3Parser.NotSetContext = NotSetContext; 
ANTLRv3Parser.TreeSpecContext = TreeSpecContext; 
ANTLRv3Parser.EbnfContext = EbnfContext; 
ANTLRv3Parser.Range_Context = Range_Context; 
ANTLRv3Parser.Terminal_Context = Terminal_Context; 
ANTLRv3Parser.NotTerminalContext = NotTerminalContext; 
ANTLRv3Parser.EbnfSuffixContext = EbnfSuffixContext; 
ANTLRv3Parser.RewriteContext = RewriteContext; 
ANTLRv3Parser.Rewrite_alternativeContext = Rewrite_alternativeContext; 
ANTLRv3Parser.Rewrite_tree_blockContext = Rewrite_tree_blockContext; 
ANTLRv3Parser.Rewrite_tree_alternativeContext = Rewrite_tree_alternativeContext; 
ANTLRv3Parser.Rewrite_tree_elementContext = Rewrite_tree_elementContext; 
ANTLRv3Parser.Rewrite_tree_atomContext = Rewrite_tree_atomContext; 
ANTLRv3Parser.Rewrite_tree_ebnfContext = Rewrite_tree_ebnfContext; 
ANTLRv3Parser.Rewrite_treeContext = Rewrite_treeContext; 
ANTLRv3Parser.Rewrite_templateContext = Rewrite_templateContext; 
ANTLRv3Parser.Rewrite_template_refContext = Rewrite_template_refContext; 
ANTLRv3Parser.Rewrite_indirect_template_headContext = Rewrite_indirect_template_headContext; 
ANTLRv3Parser.Rewrite_template_argsContext = Rewrite_template_argsContext; 
ANTLRv3Parser.Rewrite_template_argContext = Rewrite_template_argContext; 
ANTLRv3Parser.Id_Context = Id_Context; 
