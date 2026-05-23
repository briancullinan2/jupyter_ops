// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/ocl/OCL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import OCLListener from './OCLListener.js';
const serializedATN = [4,1,129,686,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,1,0,1,0,4,0,51,8,0,11,0,12,0,52,1,
0,1,0,1,1,1,1,3,1,59,8,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,67,8,2,1,2,1,2,1,2,
1,3,1,3,1,3,1,3,1,3,1,3,3,3,78,8,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,123,8,
4,1,5,1,5,1,5,5,5,128,8,5,10,5,12,5,131,9,5,1,5,1,5,1,6,1,6,1,6,3,6,138,
8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,152,8,8,10,8,12,
8,155,9,8,1,8,1,8,1,8,1,9,1,9,1,9,3,9,163,8,9,1,9,1,9,1,9,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,181,8,10,1,10,1,10,
1,10,1,10,1,10,1,10,3,10,189,8,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,197,
8,10,10,10,12,10,200,9,10,1,11,1,11,1,11,5,11,205,8,11,10,11,12,11,208,9,
11,1,12,1,12,1,12,5,12,213,8,12,10,12,12,12,216,9,12,1,13,1,13,1,13,5,13,
221,8,13,10,13,12,13,224,9,13,1,14,1,14,1,14,5,14,229,8,14,10,14,12,14,232,
9,14,1,15,1,15,1,15,3,15,237,8,15,1,16,1,16,5,16,241,8,16,10,16,12,16,244,
9,16,1,17,1,17,3,17,248,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,3,18,293,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,3,18,320,8,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,328,8,
18,10,18,12,18,331,9,18,3,18,333,8,18,1,18,1,18,1,18,3,18,338,8,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,3,18,376,8,18,1,18,1,18,1,18,1,18,1,18,1,18,
3,18,384,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,392,8,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,481,8,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,495,8,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,506,8,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,3,18,517,8,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,3,18,528,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
3,18,539,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,550,8,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,561,8,18,1,18,1,18,1,18,
1,18,3,18,567,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,575,8,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,586,8,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,3,18,597,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,628,8,18,10,18,12,18,631,9,18,3,18,
633,8,18,1,18,1,18,1,18,3,18,638,8,18,3,18,640,8,18,1,19,1,19,1,19,3,19,
645,8,19,1,20,1,20,1,20,5,20,650,8,20,10,20,12,20,653,9,20,1,21,1,21,3,21,
657,8,21,1,21,1,21,1,21,3,21,662,8,21,1,21,1,21,1,21,3,21,667,8,21,1,21,
1,21,1,21,3,21,672,8,21,1,21,1,21,1,21,3,21,677,8,21,1,21,3,21,680,8,21,
1,22,1,22,1,23,1,23,1,23,0,1,20,24,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,0,8,1,0,26,31,3,0,3,3,22,22,32,39,1,0,40,43,
1,0,44,47,2,0,40,41,48,50,2,0,63,63,86,97,2,0,59,59,64,64,1,0,56,58,790,
0,50,1,0,0,0,2,58,1,0,0,0,4,62,1,0,0,0,6,71,1,0,0,0,8,122,1,0,0,0,10,129,
1,0,0,0,12,137,1,0,0,0,14,139,1,0,0,0,16,147,1,0,0,0,18,159,1,0,0,0,20,180,
1,0,0,0,22,201,1,0,0,0,24,209,1,0,0,0,26,217,1,0,0,0,28,225,1,0,0,0,30,236,
1,0,0,0,32,238,1,0,0,0,34,247,1,0,0,0,36,639,1,0,0,0,38,641,1,0,0,0,40,646,
1,0,0,0,42,679,1,0,0,0,44,681,1,0,0,0,46,683,1,0,0,0,48,51,3,4,2,0,49,51,
3,6,3,0,50,48,1,0,0,0,50,49,1,0,0,0,51,52,1,0,0,0,52,50,1,0,0,0,52,53,1,
0,0,0,53,54,1,0,0,0,54,55,5,0,0,1,55,1,1,0,0,0,56,59,3,4,2,0,57,59,3,6,3,
0,58,56,1,0,0,0,58,57,1,0,0,0,59,60,1,0,0,0,60,61,5,0,0,1,61,3,1,0,0,0,62,
63,5,1,0,0,63,64,5,128,0,0,64,66,5,2,0,0,65,67,5,128,0,0,66,65,1,0,0,0,66,
67,1,0,0,0,67,68,1,0,0,0,68,69,5,3,0,0,69,70,3,12,6,0,70,5,1,0,0,0,71,72,
5,1,0,0,72,73,3,46,23,0,73,74,5,3,0,0,74,77,3,8,4,0,75,76,5,4,0,0,76,78,
3,12,6,0,77,75,1,0,0,0,77,78,1,0,0,0,78,79,1,0,0,0,79,80,5,5,0,0,80,81,3,
12,6,0,81,7,1,0,0,0,82,83,5,6,0,0,83,84,5,7,0,0,84,85,3,8,4,0,85,86,5,8,
0,0,86,123,1,0,0,0,87,88,5,9,0,0,88,89,5,7,0,0,89,90,3,8,4,0,90,91,5,8,0,
0,91,123,1,0,0,0,92,93,5,10,0,0,93,94,5,7,0,0,94,95,3,8,4,0,95,96,5,8,0,
0,96,123,1,0,0,0,97,98,5,11,0,0,98,99,5,7,0,0,99,100,3,8,4,0,100,101,5,8,
0,0,101,123,1,0,0,0,102,103,5,12,0,0,103,104,5,7,0,0,104,105,3,8,4,0,105,
106,5,8,0,0,106,123,1,0,0,0,107,108,5,13,0,0,108,109,5,7,0,0,109,110,3,8,
4,0,110,111,5,14,0,0,111,112,3,8,4,0,112,113,5,8,0,0,113,123,1,0,0,0,114,
115,5,15,0,0,115,116,5,7,0,0,116,117,3,8,4,0,117,118,5,14,0,0,118,119,3,
8,4,0,119,120,5,8,0,0,120,123,1,0,0,0,121,123,3,44,22,0,122,82,1,0,0,0,122,
87,1,0,0,0,122,92,1,0,0,0,122,97,1,0,0,0,122,102,1,0,0,0,122,107,1,0,0,0,
122,114,1,0,0,0,122,121,1,0,0,0,123,9,1,0,0,0,124,125,3,12,6,0,125,126,5,
14,0,0,126,128,1,0,0,0,127,124,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,
130,1,0,0,0,130,132,1,0,0,0,131,129,1,0,0,0,132,133,3,12,6,0,133,11,1,0,
0,0,134,138,3,22,11,0,135,138,3,14,7,0,136,138,3,16,8,0,137,134,1,0,0,0,
137,135,1,0,0,0,137,136,1,0,0,0,138,13,1,0,0,0,139,140,5,16,0,0,140,141,
3,12,6,0,141,142,5,17,0,0,142,143,3,12,6,0,143,144,5,18,0,0,144,145,3,12,
6,0,145,146,5,19,0,0,146,15,1,0,0,0,147,148,5,20,0,0,148,153,3,18,9,0,149,
150,5,14,0,0,150,152,3,18,9,0,151,149,1,0,0,0,152,155,1,0,0,0,153,151,1,
0,0,0,153,154,1,0,0,0,154,156,1,0,0,0,155,153,1,0,0,0,156,157,5,21,0,0,157,
158,3,12,6,0,158,17,1,0,0,0,159,162,5,128,0,0,160,161,5,3,0,0,161,163,3,
8,4,0,162,160,1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,165,5,22,0,0,165,
166,3,12,6,0,166,19,1,0,0,0,167,168,6,10,-1,0,168,181,5,123,0,0,169,181,
5,118,0,0,170,181,5,127,0,0,171,181,5,119,0,0,172,181,5,120,0,0,173,181,
5,121,0,0,174,181,5,122,0,0,175,181,5,128,0,0,176,177,5,7,0,0,177,178,3,
12,6,0,178,179,5,8,0,0,179,181,1,0,0,0,180,167,1,0,0,0,180,169,1,0,0,0,180,
170,1,0,0,0,180,171,1,0,0,0,180,172,1,0,0,0,180,173,1,0,0,0,180,174,1,0,
0,0,180,175,1,0,0,0,180,176,1,0,0,0,181,198,1,0,0,0,182,183,10,10,0,0,183,
184,5,23,0,0,184,197,5,128,0,0,185,186,10,9,0,0,186,188,5,7,0,0,187,189,
3,10,5,0,188,187,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,197,5,8,0,0,
191,192,10,8,0,0,192,193,5,24,0,0,193,194,3,12,6,0,194,195,5,25,0,0,195,
197,1,0,0,0,196,182,1,0,0,0,196,185,1,0,0,0,196,191,1,0,0,0,197,200,1,0,
0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,21,1,0,0,0,200,198,1,0,0,0,201,206,
3,24,12,0,202,203,7,0,0,0,203,205,3,24,12,0,204,202,1,0,0,0,205,208,1,0,
0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,23,1,0,0,0,208,206,1,0,0,0,209,214,
3,26,13,0,210,211,7,1,0,0,211,213,3,26,13,0,212,210,1,0,0,0,213,216,1,0,
0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,25,1,0,0,0,216,214,1,0,0,0,217,222,
3,28,14,0,218,219,7,2,0,0,219,221,3,28,14,0,220,218,1,0,0,0,221,224,1,0,
0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,27,1,0,0,0,224,222,1,0,0,0,225,230,
3,30,15,0,226,227,7,3,0,0,227,229,3,30,15,0,228,226,1,0,0,0,229,232,1,0,
0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,29,1,0,0,0,232,230,1,0,0,0,233,234,
7,4,0,0,234,237,3,30,15,0,235,237,3,32,16,0,236,233,1,0,0,0,236,235,1,0,
0,0,237,31,1,0,0,0,238,242,3,34,17,0,239,241,3,36,18,0,240,239,1,0,0,0,241,
244,1,0,0,0,242,240,1,0,0,0,242,243,1,0,0,0,243,33,1,0,0,0,244,242,1,0,0,
0,245,248,3,42,21,0,246,248,3,20,10,0,247,245,1,0,0,0,247,246,1,0,0,0,248,
35,1,0,0,0,249,250,5,23,0,0,250,251,5,51,0,0,251,252,5,7,0,0,252,640,5,8,
0,0,253,254,5,23,0,0,254,255,5,52,0,0,255,256,5,7,0,0,256,640,5,8,0,0,257,
258,5,23,0,0,258,259,5,53,0,0,259,260,5,7,0,0,260,640,5,8,0,0,261,262,5,
23,0,0,262,263,5,54,0,0,263,264,5,7,0,0,264,640,5,8,0,0,265,266,5,23,0,0,
266,267,5,55,0,0,267,268,5,7,0,0,268,640,5,8,0,0,269,270,5,23,0,0,270,271,
5,56,0,0,271,272,5,7,0,0,272,640,5,8,0,0,273,274,5,23,0,0,274,275,5,57,0,
0,275,276,5,7,0,0,276,277,3,12,6,0,277,278,5,8,0,0,278,640,1,0,0,0,279,280,
5,23,0,0,280,281,5,58,0,0,281,282,5,7,0,0,282,283,3,12,6,0,283,284,5,8,0,
0,284,640,1,0,0,0,285,286,5,23,0,0,286,287,5,59,0,0,287,288,5,7,0,0,288,
289,3,12,6,0,289,292,5,8,0,0,290,291,5,23,0,0,291,293,5,128,0,0,292,290,
1,0,0,0,292,293,1,0,0,0,293,640,1,0,0,0,294,295,5,23,0,0,295,296,5,60,0,
0,296,297,5,7,0,0,297,640,5,8,0,0,298,299,5,23,0,0,299,300,5,61,0,0,300,
301,5,7,0,0,301,640,5,8,0,0,302,303,5,23,0,0,303,304,5,62,0,0,304,305,5,
7,0,0,305,640,5,8,0,0,306,307,5,23,0,0,307,308,5,63,0,0,308,309,5,7,0,0,
309,310,3,12,6,0,310,311,5,8,0,0,311,640,1,0,0,0,312,313,5,23,0,0,313,314,
5,64,0,0,314,315,5,7,0,0,315,316,3,12,6,0,316,319,5,8,0,0,317,318,5,23,0,
0,318,320,5,128,0,0,319,317,1,0,0,0,319,320,1,0,0,0,320,640,1,0,0,0,321,
322,5,23,0,0,322,323,5,128,0,0,323,332,5,7,0,0,324,329,3,12,6,0,325,326,
5,14,0,0,326,328,3,12,6,0,327,325,1,0,0,0,328,331,1,0,0,0,329,327,1,0,0,
0,329,330,1,0,0,0,330,333,1,0,0,0,331,329,1,0,0,0,332,324,1,0,0,0,332,333,
1,0,0,0,333,334,1,0,0,0,334,337,5,8,0,0,335,336,5,23,0,0,336,338,5,128,0,
0,337,335,1,0,0,0,337,338,1,0,0,0,338,640,1,0,0,0,339,340,5,23,0,0,340,640,
5,128,0,0,341,342,5,65,0,0,342,343,5,60,0,0,343,344,5,7,0,0,344,640,5,8,
0,0,345,346,5,65,0,0,346,347,5,66,0,0,347,348,5,7,0,0,348,640,5,8,0,0,349,
350,5,65,0,0,350,351,5,67,0,0,351,352,5,7,0,0,352,640,5,8,0,0,353,354,5,
65,0,0,354,355,5,68,0,0,355,356,5,7,0,0,356,640,5,8,0,0,357,358,5,65,0,0,
358,359,5,69,0,0,359,360,5,7,0,0,360,640,5,8,0,0,361,362,5,65,0,0,362,363,
5,70,0,0,363,364,5,7,0,0,364,640,5,8,0,0,365,366,5,65,0,0,366,367,5,71,0,
0,367,368,5,7,0,0,368,640,5,8,0,0,369,370,5,65,0,0,370,371,5,72,0,0,371,
372,5,7,0,0,372,375,5,8,0,0,373,374,5,23,0,0,374,376,5,128,0,0,375,373,1,
0,0,0,375,376,1,0,0,0,376,640,1,0,0,0,377,378,5,65,0,0,378,379,5,73,0,0,
379,380,5,7,0,0,380,383,5,8,0,0,381,382,5,23,0,0,382,384,5,128,0,0,383,381,
1,0,0,0,383,384,1,0,0,0,384,640,1,0,0,0,385,386,5,65,0,0,386,387,5,74,0,
0,387,388,5,7,0,0,388,391,5,8,0,0,389,390,5,23,0,0,390,392,5,128,0,0,391,
389,1,0,0,0,391,392,1,0,0,0,392,640,1,0,0,0,393,394,5,65,0,0,394,395,5,75,
0,0,395,396,5,7,0,0,396,640,5,8,0,0,397,398,5,65,0,0,398,399,5,76,0,0,399,
400,5,7,0,0,400,640,5,8,0,0,401,402,5,65,0,0,402,403,5,77,0,0,403,404,5,
7,0,0,404,640,5,8,0,0,405,406,5,65,0,0,406,407,5,78,0,0,407,408,5,7,0,0,
408,640,5,8,0,0,409,410,5,65,0,0,410,411,5,52,0,0,411,412,5,7,0,0,412,640,
5,8,0,0,413,414,5,65,0,0,414,415,5,53,0,0,415,416,5,7,0,0,416,640,5,8,0,
0,417,418,5,65,0,0,418,419,5,54,0,0,419,420,5,7,0,0,420,640,5,8,0,0,421,
422,5,65,0,0,422,423,5,55,0,0,423,424,5,7,0,0,424,640,5,8,0,0,425,426,5,
65,0,0,426,427,5,79,0,0,427,428,5,7,0,0,428,640,5,8,0,0,429,430,5,65,0,0,
430,431,5,61,0,0,431,432,5,7,0,0,432,640,5,8,0,0,433,434,5,65,0,0,434,435,
5,62,0,0,435,436,5,7,0,0,436,640,5,8,0,0,437,438,5,65,0,0,438,439,5,80,0,
0,439,440,5,7,0,0,440,640,5,8,0,0,441,442,5,65,0,0,442,443,5,81,0,0,443,
444,5,7,0,0,444,640,5,8,0,0,445,446,5,65,0,0,446,447,5,82,0,0,447,448,5,
7,0,0,448,640,5,8,0,0,449,450,5,65,0,0,450,451,5,83,0,0,451,452,5,7,0,0,
452,640,5,8,0,0,453,454,5,65,0,0,454,455,5,84,0,0,455,456,5,7,0,0,456,640,
5,8,0,0,457,458,5,65,0,0,458,459,5,85,0,0,459,460,5,7,0,0,460,640,5,8,0,
0,461,462,5,65,0,0,462,463,7,5,0,0,463,464,5,7,0,0,464,465,3,12,6,0,465,
466,5,8,0,0,466,640,1,0,0,0,467,468,5,65,0,0,468,469,5,98,0,0,469,470,5,
7,0,0,470,471,3,12,6,0,471,472,5,8,0,0,472,640,1,0,0,0,473,474,5,65,0,0,
474,475,7,6,0,0,475,476,5,7,0,0,476,477,3,12,6,0,477,480,5,8,0,0,478,479,
5,23,0,0,479,481,5,128,0,0,480,478,1,0,0,0,480,481,1,0,0,0,481,640,1,0,0,
0,482,483,5,65,0,0,483,484,7,7,0,0,484,485,5,7,0,0,485,486,3,12,6,0,486,
487,5,8,0,0,487,640,1,0,0,0,488,489,5,65,0,0,489,490,5,99,0,0,490,494,5,
7,0,0,491,492,3,38,19,0,492,493,5,100,0,0,493,495,1,0,0,0,494,491,1,0,0,
0,494,495,1,0,0,0,495,496,1,0,0,0,496,497,3,12,6,0,497,498,5,8,0,0,498,640,
1,0,0,0,499,500,5,65,0,0,500,501,5,101,0,0,501,505,5,7,0,0,502,503,3,38,
19,0,503,504,5,100,0,0,504,506,1,0,0,0,505,502,1,0,0,0,505,506,1,0,0,0,506,
507,1,0,0,0,507,508,3,12,6,0,508,509,5,8,0,0,509,640,1,0,0,0,510,511,5,65,
0,0,511,512,5,102,0,0,512,516,5,7,0,0,513,514,3,38,19,0,514,515,5,100,0,
0,515,517,1,0,0,0,516,513,1,0,0,0,516,517,1,0,0,0,517,518,1,0,0,0,518,519,
3,12,6,0,519,520,5,8,0,0,520,640,1,0,0,0,521,522,5,65,0,0,522,523,5,103,
0,0,523,527,5,7,0,0,524,525,3,40,20,0,525,526,5,100,0,0,526,528,1,0,0,0,
527,524,1,0,0,0,527,528,1,0,0,0,528,529,1,0,0,0,529,530,3,12,6,0,530,531,
5,8,0,0,531,640,1,0,0,0,532,533,5,65,0,0,533,534,5,104,0,0,534,538,5,7,0,
0,535,536,3,40,20,0,536,537,5,100,0,0,537,539,1,0,0,0,538,535,1,0,0,0,538,
539,1,0,0,0,539,540,1,0,0,0,540,541,3,12,6,0,541,542,5,8,0,0,542,640,1,0,
0,0,543,544,5,65,0,0,544,545,5,105,0,0,545,549,5,7,0,0,546,547,3,38,19,0,
547,548,5,100,0,0,548,550,1,0,0,0,549,546,1,0,0,0,549,550,1,0,0,0,550,551,
1,0,0,0,551,552,3,12,6,0,552,553,5,8,0,0,553,640,1,0,0,0,554,555,5,65,0,
0,555,556,5,72,0,0,556,560,5,7,0,0,557,558,3,38,19,0,558,559,5,100,0,0,559,
561,1,0,0,0,560,557,1,0,0,0,560,561,1,0,0,0,561,562,1,0,0,0,562,563,3,12,
6,0,563,566,5,8,0,0,564,565,5,23,0,0,565,567,5,128,0,0,566,564,1,0,0,0,566,
567,1,0,0,0,567,640,1,0,0,0,568,569,5,65,0,0,569,570,5,106,0,0,570,574,5,
7,0,0,571,572,3,38,19,0,572,573,5,100,0,0,573,575,1,0,0,0,574,571,1,0,0,
0,574,575,1,0,0,0,575,576,1,0,0,0,576,577,3,12,6,0,577,578,5,8,0,0,578,640,
1,0,0,0,579,580,5,65,0,0,580,581,5,107,0,0,581,585,5,7,0,0,582,583,3,38,
19,0,583,584,5,100,0,0,584,586,1,0,0,0,585,582,1,0,0,0,585,586,1,0,0,0,586,
587,1,0,0,0,587,588,3,12,6,0,588,589,5,8,0,0,589,640,1,0,0,0,590,591,5,65,
0,0,591,592,5,108,0,0,592,596,5,7,0,0,593,594,3,38,19,0,594,595,5,100,0,
0,595,597,1,0,0,0,596,593,1,0,0,0,596,597,1,0,0,0,597,598,1,0,0,0,598,599,
3,12,6,0,599,600,5,8,0,0,600,640,1,0,0,0,601,602,5,65,0,0,602,603,5,109,
0,0,603,604,5,7,0,0,604,605,3,12,6,0,605,606,5,14,0,0,606,607,3,12,6,0,607,
608,5,8,0,0,608,640,1,0,0,0,609,610,5,65,0,0,610,611,5,110,0,0,611,612,5,
7,0,0,612,613,3,44,22,0,613,614,5,111,0,0,614,615,3,38,19,0,615,616,5,22,
0,0,616,617,3,12,6,0,617,618,5,100,0,0,618,619,3,12,6,0,619,620,5,8,0,0,
620,640,1,0,0,0,621,622,5,65,0,0,622,623,5,128,0,0,623,632,5,7,0,0,624,629,
3,12,6,0,625,626,5,14,0,0,626,628,3,12,6,0,627,625,1,0,0,0,628,631,1,0,0,
0,629,627,1,0,0,0,629,630,1,0,0,0,630,633,1,0,0,0,631,629,1,0,0,0,632,624,
1,0,0,0,632,633,1,0,0,0,633,634,1,0,0,0,634,637,5,8,0,0,635,636,5,23,0,0,
636,638,5,128,0,0,637,635,1,0,0,0,637,638,1,0,0,0,638,640,1,0,0,0,639,249,
1,0,0,0,639,253,1,0,0,0,639,257,1,0,0,0,639,261,1,0,0,0,639,265,1,0,0,0,
639,269,1,0,0,0,639,273,1,0,0,0,639,279,1,0,0,0,639,285,1,0,0,0,639,294,
1,0,0,0,639,298,1,0,0,0,639,302,1,0,0,0,639,306,1,0,0,0,639,312,1,0,0,0,
639,321,1,0,0,0,639,339,1,0,0,0,639,341,1,0,0,0,639,345,1,0,0,0,639,349,
1,0,0,0,639,353,1,0,0,0,639,357,1,0,0,0,639,361,1,0,0,0,639,365,1,0,0,0,
639,369,1,0,0,0,639,377,1,0,0,0,639,385,1,0,0,0,639,393,1,0,0,0,639,397,
1,0,0,0,639,401,1,0,0,0,639,405,1,0,0,0,639,409,1,0,0,0,639,413,1,0,0,0,
639,417,1,0,0,0,639,421,1,0,0,0,639,425,1,0,0,0,639,429,1,0,0,0,639,433,
1,0,0,0,639,437,1,0,0,0,639,441,1,0,0,0,639,445,1,0,0,0,639,449,1,0,0,0,
639,453,1,0,0,0,639,457,1,0,0,0,639,461,1,0,0,0,639,467,1,0,0,0,639,473,
1,0,0,0,639,482,1,0,0,0,639,488,1,0,0,0,639,499,1,0,0,0,639,510,1,0,0,0,
639,521,1,0,0,0,639,532,1,0,0,0,639,543,1,0,0,0,639,554,1,0,0,0,639,568,
1,0,0,0,639,579,1,0,0,0,639,590,1,0,0,0,639,601,1,0,0,0,639,609,1,0,0,0,
639,621,1,0,0,0,640,37,1,0,0,0,641,644,5,128,0,0,642,643,5,3,0,0,643,645,
3,8,4,0,644,642,1,0,0,0,644,645,1,0,0,0,645,39,1,0,0,0,646,651,3,38,19,0,
647,648,5,14,0,0,648,650,3,38,19,0,649,647,1,0,0,0,650,653,1,0,0,0,651,649,
1,0,0,0,651,652,1,0,0,0,652,41,1,0,0,0,653,651,1,0,0,0,654,656,5,112,0,0,
655,657,3,10,5,0,656,655,1,0,0,0,656,657,1,0,0,0,657,658,1,0,0,0,658,680,
5,113,0,0,659,661,5,114,0,0,660,662,3,10,5,0,661,660,1,0,0,0,661,662,1,0,
0,0,662,663,1,0,0,0,663,680,5,113,0,0,664,666,5,115,0,0,665,667,3,10,5,0,
666,665,1,0,0,0,666,667,1,0,0,0,667,668,1,0,0,0,668,680,5,113,0,0,669,671,
5,116,0,0,670,672,3,10,5,0,671,670,1,0,0,0,671,672,1,0,0,0,672,673,1,0,0,
0,673,680,5,113,0,0,674,676,5,117,0,0,675,677,3,10,5,0,676,675,1,0,0,0,676,
677,1,0,0,0,677,678,1,0,0,0,678,680,5,113,0,0,679,654,1,0,0,0,679,659,1,
0,0,0,679,664,1,0,0,0,679,669,1,0,0,0,679,674,1,0,0,0,680,43,1,0,0,0,681,
682,5,128,0,0,682,45,1,0,0,0,683,684,5,122,0,0,684,47,1,0,0,0,53,50,52,58,
66,77,122,129,137,153,162,180,188,196,198,206,214,222,230,236,242,247,292,
319,329,332,337,375,383,391,480,494,505,516,527,538,549,560,566,574,585,
596,629,632,637,639,644,651,656,661,666,671,676,679];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class OCLParser extends antlr4.Parser {

    static grammarFileName = "OCL.g4";
    static literalNames = [ null, "'context'", "'inv'", "':'", "'init:'", 
                            "'derive:'", "'Sequence'", "'('", "')'", "'Set'", 
                            "'Bag'", "'OrderedSet'", "'Ref'", "'Map'", "','", 
                            "'Function'", "'if'", "'then'", "'else'", "'endif'", 
                            "'let'", "'in'", "'='", "'.'", "'['", "']'", 
                            "'and'", "'&'", "'or'", "'xor'", "'=>'", "'implies'", 
                            "'<'", "'>'", "'>='", "'<='", "'/='", "'<>'", 
                            "'/:'", "'<:'", "'+'", "'-'", "'..'", "'|->'", 
                            "'*'", "'/'", "'mod'", "'div'", "'not'", "'?'", 
                            "'!'", "'allInstances'", "'oclType'", "'oclIsUndefined'", 
                            "'oclIsInvalid'", "'oclIsNew'", "'oclAsSet'", 
                            "'oclIsTypeOf'", "'oclIsKindOf'", "'oclAsType'", 
                            "'size'", "'max'", "'min'", "'indexOf'", "'at'", 
                            "'->'", "'isEmpty'", "'notEmpty'", "'asSet'", 
                            "'asBag'", "'asOrderedSet'", "'asSequence'", 
                            "'any'", "'first'", "'last'", "'reverse'", "'floor'", 
                            "'round'", "'abs'", "'sum'", "'characters'", 
                            "'toInteger'", "'toReal'", "'toBoolean'", "'toUpperCase'", 
                            "'toLowerCase'", "'union'", "'intersection'", 
                            "'includes'", "'excludes'", "'including'", "'excluding'", 
                            "'includesAll'", "'symmetricDifference'", "'excludesAll'", 
                            "'prepend'", "'append'", "'count'", "'equalsIgnoreCase'", 
                            "'collect'", "'|'", "'select'", "'reject'", 
                            "'forAll'", "'exists'", "'one'", "'closure'", 
                            "'sortedBy'", "'isUnique'", "'insertAt'", "'iterate'", 
                            "';'", "'OrderedSet{'", "'}'", "'Bag{'", "'Set{'", 
                            "'Sequence{'", "'Map{'", null, null, null, null, 
                            null, "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "BOOLEAN_LITERAL", 
                             "FLOAT_LITERAL", "STRING1_LITERAL", "STRING2_LITERAL", 
                             "ENUMERATION_LITERAL", "NULL_LITERAL", "MULTILINE_COMMENT", 
                             "LINE_COMMENT", "NEWLINE", "INT", "ID", "WS" ];
    static ruleNames = [ "multipleContextSpecifications", "contextSpecification", 
                         "singleInvariant", "singleDerivedAttribute", "type", 
                         "expressionList", "expression", "conditionalExpression", 
                         "letExpression", "letBinding", "basicExpression", 
                         "logicalExpression", "equalityExpression", "additiveExpression", 
                         "multiplicativeExpression", "unaryExpression", 
                         "navigationExpression", "primaryFactor", "postfixSuffix", 
                         "identOptType", "identOptTypeList", "setExpression", 
                         "identifier", "qualified_name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = OCLParser.ruleNames;
        this.literalNames = OCLParser.literalNames;
        this.symbolicNames = OCLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.basicExpression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    basicExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 10);
    		case 1:
    			return this.precpred(this._ctx, 9);
    		case 2:
    			return this.precpred(this._ctx, 8);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	multipleContextSpecifications() {
	    let localctx = new MultipleContextSpecificationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, OCLParser.RULE_multipleContextSpecifications);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 50;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 48;
	                this.singleInvariant();
	                break;

	            case 2:
	                this.state = 49;
	                this.singleDerivedAttribute();
	                break;

	            }
	            this.state = 52; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 54;
	        this.match(OCLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contextSpecification() {
	    let localctx = new ContextSpecificationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, OCLParser.RULE_contextSpecification);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 56;
	            this.singleInvariant();
	            break;

	        case 2:
	            this.state = 57;
	            this.singleDerivedAttribute();
	            break;

	        }
	        this.state = 60;
	        this.match(OCLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	singleInvariant() {
	    let localctx = new SingleInvariantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, OCLParser.RULE_singleInvariant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 62;
	        this.match(OCLParser.T__0);
	        this.state = 63;
	        this.match(OCLParser.ID);
	        this.state = 64;
	        this.match(OCLParser.T__1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===128) {
	            this.state = 65;
	            this.match(OCLParser.ID);
	        }

	        this.state = 68;
	        this.match(OCLParser.T__2);
	        this.state = 69;
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



	singleDerivedAttribute() {
	    let localctx = new SingleDerivedAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, OCLParser.RULE_singleDerivedAttribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 71;
	        this.match(OCLParser.T__0);
	        this.state = 72;
	        this.qualified_name();
	        this.state = 73;
	        this.match(OCLParser.T__2);
	        this.state = 74;
	        this.type();
	        this.state = 77;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 75;
	            this.match(OCLParser.T__3);
	            this.state = 76;
	            this.expression();
	        }

	        this.state = 79;
	        this.match(OCLParser.T__4);
	        this.state = 80;
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, OCLParser.RULE_type);
	    try {
	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            this.match(OCLParser.T__5);
	            this.state = 83;
	            this.match(OCLParser.T__6);
	            this.state = 84;
	            this.type();
	            this.state = 85;
	            this.match(OCLParser.T__7);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.match(OCLParser.T__8);
	            this.state = 88;
	            this.match(OCLParser.T__6);
	            this.state = 89;
	            this.type();
	            this.state = 90;
	            this.match(OCLParser.T__7);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.match(OCLParser.T__9);
	            this.state = 93;
	            this.match(OCLParser.T__6);
	            this.state = 94;
	            this.type();
	            this.state = 95;
	            this.match(OCLParser.T__7);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 97;
	            this.match(OCLParser.T__10);
	            this.state = 98;
	            this.match(OCLParser.T__6);
	            this.state = 99;
	            this.type();
	            this.state = 100;
	            this.match(OCLParser.T__7);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 102;
	            this.match(OCLParser.T__11);
	            this.state = 103;
	            this.match(OCLParser.T__6);
	            this.state = 104;
	            this.type();
	            this.state = 105;
	            this.match(OCLParser.T__7);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 107;
	            this.match(OCLParser.T__12);
	            this.state = 108;
	            this.match(OCLParser.T__6);
	            this.state = 109;
	            this.type();
	            this.state = 110;
	            this.match(OCLParser.T__13);
	            this.state = 111;
	            this.type();
	            this.state = 112;
	            this.match(OCLParser.T__7);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 114;
	            this.match(OCLParser.T__14);
	            this.state = 115;
	            this.match(OCLParser.T__6);
	            this.state = 116;
	            this.type();
	            this.state = 117;
	            this.match(OCLParser.T__13);
	            this.state = 118;
	            this.type();
	            this.state = 119;
	            this.match(OCLParser.T__7);
	            break;
	        case 128:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 121;
	            this.identifier();
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



	expressionList() {
	    let localctx = new ExpressionListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, OCLParser.RULE_expressionList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 129;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 124;
	                this.expression();
	                this.state = 125;
	                this.match(OCLParser.T__13); 
	            }
	            this.state = 131;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	        this.state = 132;
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
	    this.enterRule(localctx, 12, OCLParser.RULE_expression);
	    try {
	        this.state = 137;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 40:
	        case 41:
	        case 48:
	        case 49:
	        case 50:
	        case 112:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 127:
	        case 128:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.logicalExpression();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.conditionalExpression();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            this.letExpression();
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



	conditionalExpression() {
	    let localctx = new ConditionalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, OCLParser.RULE_conditionalExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(OCLParser.T__15);
	        this.state = 140;
	        this.expression();
	        this.state = 141;
	        this.match(OCLParser.T__16);
	        this.state = 142;
	        this.expression();
	        this.state = 143;
	        this.match(OCLParser.T__17);
	        this.state = 144;
	        this.expression();
	        this.state = 145;
	        this.match(OCLParser.T__18);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	letExpression() {
	    let localctx = new LetExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, OCLParser.RULE_letExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(OCLParser.T__19);
	        this.state = 148;
	        this.letBinding();
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 149;
	            this.match(OCLParser.T__13);
	            this.state = 150;
	            this.letBinding();
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 156;
	        this.match(OCLParser.T__20);
	        this.state = 157;
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



	letBinding() {
	    let localctx = new LetBindingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, OCLParser.RULE_letBinding);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        this.match(OCLParser.ID);
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 160;
	            this.match(OCLParser.T__2);
	            this.state = 161;
	            this.type();
	        }

	        this.state = 164;
	        this.match(OCLParser.T__21);
	        this.state = 165;
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


	basicExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new BasicExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 20;
	    this.enterRecursionRule(localctx, 20, OCLParser.RULE_basicExpression, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 123:
	            this.state = 168;
	            this.match(OCLParser.NULL_LITERAL);
	            break;
	        case 118:
	            this.state = 169;
	            this.match(OCLParser.BOOLEAN_LITERAL);
	            break;
	        case 127:
	            this.state = 170;
	            this.match(OCLParser.INT);
	            break;
	        case 119:
	            this.state = 171;
	            this.match(OCLParser.FLOAT_LITERAL);
	            break;
	        case 120:
	            this.state = 172;
	            this.match(OCLParser.STRING1_LITERAL);
	            break;
	        case 121:
	            this.state = 173;
	            this.match(OCLParser.STRING2_LITERAL);
	            break;
	        case 122:
	            this.state = 174;
	            this.match(OCLParser.ENUMERATION_LITERAL);
	            break;
	        case 128:
	            this.state = 175;
	            this.match(OCLParser.ID);
	            break;
	        case 7:
	            this.state = 176;
	            this.match(OCLParser.T__6);
	            this.state = 177;
	            this.expression();
	            this.state = 178;
	            this.match(OCLParser.T__7);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 196;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new BasicExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, OCLParser.RULE_basicExpression);
	                    this.state = 182;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 183;
	                    this.match(OCLParser.T__22);
	                    this.state = 184;
	                    this.match(OCLParser.ID);
	                    break;

	                case 2:
	                    localctx = new BasicExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, OCLParser.RULE_basicExpression);
	                    this.state = 185;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 186;
	                    this.match(OCLParser.T__6);
	                    this.state = 188;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                        this.state = 187;
	                        this.expressionList();
	                    }

	                    this.state = 190;
	                    this.match(OCLParser.T__7);
	                    break;

	                case 3:
	                    localctx = new BasicExpressionContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, OCLParser.RULE_basicExpression);
	                    this.state = 191;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 192;
	                    this.match(OCLParser.T__23);
	                    this.state = 193;
	                    this.expression();
	                    this.state = 194;
	                    this.match(OCLParser.T__24);
	                    break;

	                } 
	            }
	            this.state = 200;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
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



	logicalExpression() {
	    let localctx = new LogicalExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, OCLParser.RULE_logicalExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.equalityExpression();
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4227858432) !== 0)) {
	            this.state = 202;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4227858432) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 203;
	            this.equalityExpression();
	            this.state = 208;
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



	equalityExpression() {
	    let localctx = new EqualityExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, OCLParser.RULE_equalityExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.additiveExpression();
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===22 || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 255) !== 0)) {
	            this.state = 210;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===22 || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 255) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 211;
	            this.additiveExpression();
	            this.state = 216;
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



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, OCLParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.multiplicativeExpression();
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 15) !== 0)) {
	            this.state = 218;
	            _la = this._input.LA(1);
	            if(!(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 219;
	            this.multiplicativeExpression();
	            this.state = 224;
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
	    this.enterRule(localctx, 28, OCLParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.unaryExpression();
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 15) !== 0)) {
	            this.state = 226;
	            _la = this._input.LA(1);
	            if(!(((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 15) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 227;
	            this.unaryExpression();
	            this.state = 232;
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
	    this.enterRule(localctx, 30, OCLParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.state = 236;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	        case 41:
	        case 48:
	        case 49:
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 233;
	            _la = this._input.LA(1);
	            if(!(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 234;
	            this.unaryExpression();
	            break;
	        case 7:
	        case 112:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 127:
	        case 128:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 235;
	            this.navigationExpression();
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



	navigationExpression() {
	    let localctx = new NavigationExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, OCLParser.RULE_navigationExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.primaryFactor();
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===65) {
	            this.state = 239;
	            this.postfixSuffix();
	            this.state = 244;
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



	primaryFactor() {
	    let localctx = new PrimaryFactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, OCLParser.RULE_primaryFactor);
	    try {
	        this.state = 247;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 112:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 245;
	            this.setExpression();
	            break;
	        case 7:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 127:
	        case 128:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 246;
	            this.basicExpression(0);
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



	postfixSuffix() {
	    let localctx = new PostfixSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, OCLParser.RULE_postfixSuffix);
	    var _la = 0;
	    try {
	        this.state = 639;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 249;
	            this.match(OCLParser.T__22);
	            this.state = 250;
	            this.match(OCLParser.T__50);
	            this.state = 251;
	            this.match(OCLParser.T__6);
	            this.state = 252;
	            this.match(OCLParser.T__7);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 253;
	            this.match(OCLParser.T__22);
	            this.state = 254;
	            this.match(OCLParser.T__51);
	            this.state = 255;
	            this.match(OCLParser.T__6);
	            this.state = 256;
	            this.match(OCLParser.T__7);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 257;
	            this.match(OCLParser.T__22);
	            this.state = 258;
	            this.match(OCLParser.T__52);
	            this.state = 259;
	            this.match(OCLParser.T__6);
	            this.state = 260;
	            this.match(OCLParser.T__7);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 261;
	            this.match(OCLParser.T__22);
	            this.state = 262;
	            this.match(OCLParser.T__53);
	            this.state = 263;
	            this.match(OCLParser.T__6);
	            this.state = 264;
	            this.match(OCLParser.T__7);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 265;
	            this.match(OCLParser.T__22);
	            this.state = 266;
	            this.match(OCLParser.T__54);
	            this.state = 267;
	            this.match(OCLParser.T__6);
	            this.state = 268;
	            this.match(OCLParser.T__7);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 269;
	            this.match(OCLParser.T__22);
	            this.state = 270;
	            this.match(OCLParser.T__55);
	            this.state = 271;
	            this.match(OCLParser.T__6);
	            this.state = 272;
	            this.match(OCLParser.T__7);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 273;
	            this.match(OCLParser.T__22);
	            this.state = 274;
	            this.match(OCLParser.T__56);
	            this.state = 275;
	            this.match(OCLParser.T__6);
	            this.state = 276;
	            this.expression();
	            this.state = 277;
	            this.match(OCLParser.T__7);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 279;
	            this.match(OCLParser.T__22);
	            this.state = 280;
	            this.match(OCLParser.T__57);
	            this.state = 281;
	            this.match(OCLParser.T__6);
	            this.state = 282;
	            this.expression();
	            this.state = 283;
	            this.match(OCLParser.T__7);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 285;
	            this.match(OCLParser.T__22);
	            this.state = 286;
	            this.match(OCLParser.T__58);
	            this.state = 287;
	            this.match(OCLParser.T__6);
	            this.state = 288;
	            this.expression();
	            this.state = 289;
	            this.match(OCLParser.T__7);
	            this.state = 292;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            if(la_===1) {
	                this.state = 290;
	                this.match(OCLParser.T__22);
	                this.state = 291;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 294;
	            this.match(OCLParser.T__22);
	            this.state = 295;
	            this.match(OCLParser.T__59);
	            this.state = 296;
	            this.match(OCLParser.T__6);
	            this.state = 297;
	            this.match(OCLParser.T__7);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 298;
	            this.match(OCLParser.T__22);
	            this.state = 299;
	            this.match(OCLParser.T__60);
	            this.state = 300;
	            this.match(OCLParser.T__6);
	            this.state = 301;
	            this.match(OCLParser.T__7);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 302;
	            this.match(OCLParser.T__22);
	            this.state = 303;
	            this.match(OCLParser.T__61);
	            this.state = 304;
	            this.match(OCLParser.T__6);
	            this.state = 305;
	            this.match(OCLParser.T__7);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 306;
	            this.match(OCLParser.T__22);
	            this.state = 307;
	            this.match(OCLParser.T__62);
	            this.state = 308;
	            this.match(OCLParser.T__6);
	            this.state = 309;
	            this.expression();
	            this.state = 310;
	            this.match(OCLParser.T__7);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 312;
	            this.match(OCLParser.T__22);
	            this.state = 313;
	            this.match(OCLParser.T__63);
	            this.state = 314;
	            this.match(OCLParser.T__6);
	            this.state = 315;
	            this.expression();
	            this.state = 316;
	            this.match(OCLParser.T__7);
	            this.state = 319;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	            if(la_===1) {
	                this.state = 317;
	                this.match(OCLParser.T__22);
	                this.state = 318;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 321;
	            this.match(OCLParser.T__22);
	            this.state = 322;
	            this.match(OCLParser.ID);
	            this.state = 323;
	            this.match(OCLParser.T__6);
	            this.state = 332;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                this.state = 324;
	                this.expression();
	                this.state = 329;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===14) {
	                    this.state = 325;
	                    this.match(OCLParser.T__13);
	                    this.state = 326;
	                    this.expression();
	                    this.state = 331;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 334;
	            this.match(OCLParser.T__7);
	            this.state = 337;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            if(la_===1) {
	                this.state = 335;
	                this.match(OCLParser.T__22);
	                this.state = 336;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 339;
	            this.match(OCLParser.T__22);
	            this.state = 340;
	            this.match(OCLParser.ID);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 341;
	            this.match(OCLParser.T__64);
	            this.state = 342;
	            this.match(OCLParser.T__59);
	            this.state = 343;
	            this.match(OCLParser.T__6);
	            this.state = 344;
	            this.match(OCLParser.T__7);
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 345;
	            this.match(OCLParser.T__64);
	            this.state = 346;
	            this.match(OCLParser.T__65);
	            this.state = 347;
	            this.match(OCLParser.T__6);
	            this.state = 348;
	            this.match(OCLParser.T__7);
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 349;
	            this.match(OCLParser.T__64);
	            this.state = 350;
	            this.match(OCLParser.T__66);
	            this.state = 351;
	            this.match(OCLParser.T__6);
	            this.state = 352;
	            this.match(OCLParser.T__7);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 353;
	            this.match(OCLParser.T__64);
	            this.state = 354;
	            this.match(OCLParser.T__67);
	            this.state = 355;
	            this.match(OCLParser.T__6);
	            this.state = 356;
	            this.match(OCLParser.T__7);
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 357;
	            this.match(OCLParser.T__64);
	            this.state = 358;
	            this.match(OCLParser.T__68);
	            this.state = 359;
	            this.match(OCLParser.T__6);
	            this.state = 360;
	            this.match(OCLParser.T__7);
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 361;
	            this.match(OCLParser.T__64);
	            this.state = 362;
	            this.match(OCLParser.T__69);
	            this.state = 363;
	            this.match(OCLParser.T__6);
	            this.state = 364;
	            this.match(OCLParser.T__7);
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 365;
	            this.match(OCLParser.T__64);
	            this.state = 366;
	            this.match(OCLParser.T__70);
	            this.state = 367;
	            this.match(OCLParser.T__6);
	            this.state = 368;
	            this.match(OCLParser.T__7);
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 369;
	            this.match(OCLParser.T__64);
	            this.state = 370;
	            this.match(OCLParser.T__71);
	            this.state = 371;
	            this.match(OCLParser.T__6);
	            this.state = 372;
	            this.match(OCLParser.T__7);
	            this.state = 375;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            if(la_===1) {
	                this.state = 373;
	                this.match(OCLParser.T__22);
	                this.state = 374;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 377;
	            this.match(OCLParser.T__64);
	            this.state = 378;
	            this.match(OCLParser.T__72);
	            this.state = 379;
	            this.match(OCLParser.T__6);
	            this.state = 380;
	            this.match(OCLParser.T__7);
	            this.state = 383;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	            if(la_===1) {
	                this.state = 381;
	                this.match(OCLParser.T__22);
	                this.state = 382;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 385;
	            this.match(OCLParser.T__64);
	            this.state = 386;
	            this.match(OCLParser.T__73);
	            this.state = 387;
	            this.match(OCLParser.T__6);
	            this.state = 388;
	            this.match(OCLParser.T__7);
	            this.state = 391;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 389;
	                this.match(OCLParser.T__22);
	                this.state = 390;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 393;
	            this.match(OCLParser.T__64);
	            this.state = 394;
	            this.match(OCLParser.T__74);
	            this.state = 395;
	            this.match(OCLParser.T__6);
	            this.state = 396;
	            this.match(OCLParser.T__7);
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 397;
	            this.match(OCLParser.T__64);
	            this.state = 398;
	            this.match(OCLParser.T__75);
	            this.state = 399;
	            this.match(OCLParser.T__6);
	            this.state = 400;
	            this.match(OCLParser.T__7);
	            break;

	        case 29:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 401;
	            this.match(OCLParser.T__64);
	            this.state = 402;
	            this.match(OCLParser.T__76);
	            this.state = 403;
	            this.match(OCLParser.T__6);
	            this.state = 404;
	            this.match(OCLParser.T__7);
	            break;

	        case 30:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 405;
	            this.match(OCLParser.T__64);
	            this.state = 406;
	            this.match(OCLParser.T__77);
	            this.state = 407;
	            this.match(OCLParser.T__6);
	            this.state = 408;
	            this.match(OCLParser.T__7);
	            break;

	        case 31:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 409;
	            this.match(OCLParser.T__64);
	            this.state = 410;
	            this.match(OCLParser.T__51);
	            this.state = 411;
	            this.match(OCLParser.T__6);
	            this.state = 412;
	            this.match(OCLParser.T__7);
	            break;

	        case 32:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 413;
	            this.match(OCLParser.T__64);
	            this.state = 414;
	            this.match(OCLParser.T__52);
	            this.state = 415;
	            this.match(OCLParser.T__6);
	            this.state = 416;
	            this.match(OCLParser.T__7);
	            break;

	        case 33:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 417;
	            this.match(OCLParser.T__64);
	            this.state = 418;
	            this.match(OCLParser.T__53);
	            this.state = 419;
	            this.match(OCLParser.T__6);
	            this.state = 420;
	            this.match(OCLParser.T__7);
	            break;

	        case 34:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 421;
	            this.match(OCLParser.T__64);
	            this.state = 422;
	            this.match(OCLParser.T__54);
	            this.state = 423;
	            this.match(OCLParser.T__6);
	            this.state = 424;
	            this.match(OCLParser.T__7);
	            break;

	        case 35:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 425;
	            this.match(OCLParser.T__64);
	            this.state = 426;
	            this.match(OCLParser.T__78);
	            this.state = 427;
	            this.match(OCLParser.T__6);
	            this.state = 428;
	            this.match(OCLParser.T__7);
	            break;

	        case 36:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 429;
	            this.match(OCLParser.T__64);
	            this.state = 430;
	            this.match(OCLParser.T__60);
	            this.state = 431;
	            this.match(OCLParser.T__6);
	            this.state = 432;
	            this.match(OCLParser.T__7);
	            break;

	        case 37:
	            this.enterOuterAlt(localctx, 37);
	            this.state = 433;
	            this.match(OCLParser.T__64);
	            this.state = 434;
	            this.match(OCLParser.T__61);
	            this.state = 435;
	            this.match(OCLParser.T__6);
	            this.state = 436;
	            this.match(OCLParser.T__7);
	            break;

	        case 38:
	            this.enterOuterAlt(localctx, 38);
	            this.state = 437;
	            this.match(OCLParser.T__64);
	            this.state = 438;
	            this.match(OCLParser.T__79);
	            this.state = 439;
	            this.match(OCLParser.T__6);
	            this.state = 440;
	            this.match(OCLParser.T__7);
	            break;

	        case 39:
	            this.enterOuterAlt(localctx, 39);
	            this.state = 441;
	            this.match(OCLParser.T__64);
	            this.state = 442;
	            this.match(OCLParser.T__80);
	            this.state = 443;
	            this.match(OCLParser.T__6);
	            this.state = 444;
	            this.match(OCLParser.T__7);
	            break;

	        case 40:
	            this.enterOuterAlt(localctx, 40);
	            this.state = 445;
	            this.match(OCLParser.T__64);
	            this.state = 446;
	            this.match(OCLParser.T__81);
	            this.state = 447;
	            this.match(OCLParser.T__6);
	            this.state = 448;
	            this.match(OCLParser.T__7);
	            break;

	        case 41:
	            this.enterOuterAlt(localctx, 41);
	            this.state = 449;
	            this.match(OCLParser.T__64);
	            this.state = 450;
	            this.match(OCLParser.T__82);
	            this.state = 451;
	            this.match(OCLParser.T__6);
	            this.state = 452;
	            this.match(OCLParser.T__7);
	            break;

	        case 42:
	            this.enterOuterAlt(localctx, 42);
	            this.state = 453;
	            this.match(OCLParser.T__64);
	            this.state = 454;
	            this.match(OCLParser.T__83);
	            this.state = 455;
	            this.match(OCLParser.T__6);
	            this.state = 456;
	            this.match(OCLParser.T__7);
	            break;

	        case 43:
	            this.enterOuterAlt(localctx, 43);
	            this.state = 457;
	            this.match(OCLParser.T__64);
	            this.state = 458;
	            this.match(OCLParser.T__84);
	            this.state = 459;
	            this.match(OCLParser.T__6);
	            this.state = 460;
	            this.match(OCLParser.T__7);
	            break;

	        case 44:
	            this.enterOuterAlt(localctx, 44);
	            this.state = 461;
	            this.match(OCLParser.T__64);
	            this.state = 462;
	            _la = this._input.LA(1);
	            if(!(((((_la - 63)) & ~0x1f) === 0 && ((1 << (_la - 63)) & 4286578689) !== 0) || ((((_la - 95)) & ~0x1f) === 0 && ((1 << (_la - 95)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 463;
	            this.match(OCLParser.T__6);
	            this.state = 464;
	            this.expression();
	            this.state = 465;
	            this.match(OCLParser.T__7);
	            break;

	        case 45:
	            this.enterOuterAlt(localctx, 45);
	            this.state = 467;
	            this.match(OCLParser.T__64);
	            this.state = 468;
	            this.match(OCLParser.T__97);
	            this.state = 469;
	            this.match(OCLParser.T__6);
	            this.state = 470;
	            this.expression();
	            this.state = 471;
	            this.match(OCLParser.T__7);
	            break;

	        case 46:
	            this.enterOuterAlt(localctx, 46);
	            this.state = 473;
	            this.match(OCLParser.T__64);
	            this.state = 474;
	            _la = this._input.LA(1);
	            if(!(_la===59 || _la===64)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 475;
	            this.match(OCLParser.T__6);
	            this.state = 476;
	            this.expression();
	            this.state = 477;
	            this.match(OCLParser.T__7);
	            this.state = 480;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	            if(la_===1) {
	                this.state = 478;
	                this.match(OCLParser.T__22);
	                this.state = 479;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 47:
	            this.enterOuterAlt(localctx, 47);
	            this.state = 482;
	            this.match(OCLParser.T__64);
	            this.state = 483;
	            _la = this._input.LA(1);
	            if(!(((((_la - 56)) & ~0x1f) === 0 && ((1 << (_la - 56)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 484;
	            this.match(OCLParser.T__6);
	            this.state = 485;
	            this.expression();
	            this.state = 486;
	            this.match(OCLParser.T__7);
	            break;

	        case 48:
	            this.enterOuterAlt(localctx, 48);
	            this.state = 488;
	            this.match(OCLParser.T__64);
	            this.state = 489;
	            this.match(OCLParser.T__98);
	            this.state = 490;
	            this.match(OCLParser.T__6);
	            this.state = 494;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 491;
	                this.identOptType();
	                this.state = 492;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 496;
	            this.expression();
	            this.state = 497;
	            this.match(OCLParser.T__7);
	            break;

	        case 49:
	            this.enterOuterAlt(localctx, 49);
	            this.state = 499;
	            this.match(OCLParser.T__64);
	            this.state = 500;
	            this.match(OCLParser.T__100);
	            this.state = 501;
	            this.match(OCLParser.T__6);
	            this.state = 505;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            if(la_===1) {
	                this.state = 502;
	                this.identOptType();
	                this.state = 503;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 507;
	            this.expression();
	            this.state = 508;
	            this.match(OCLParser.T__7);
	            break;

	        case 50:
	            this.enterOuterAlt(localctx, 50);
	            this.state = 510;
	            this.match(OCLParser.T__64);
	            this.state = 511;
	            this.match(OCLParser.T__101);
	            this.state = 512;
	            this.match(OCLParser.T__6);
	            this.state = 516;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            if(la_===1) {
	                this.state = 513;
	                this.identOptType();
	                this.state = 514;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 518;
	            this.expression();
	            this.state = 519;
	            this.match(OCLParser.T__7);
	            break;

	        case 51:
	            this.enterOuterAlt(localctx, 51);
	            this.state = 521;
	            this.match(OCLParser.T__64);
	            this.state = 522;
	            this.match(OCLParser.T__102);
	            this.state = 523;
	            this.match(OCLParser.T__6);
	            this.state = 527;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	            if(la_===1) {
	                this.state = 524;
	                this.identOptTypeList();
	                this.state = 525;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 529;
	            this.expression();
	            this.state = 530;
	            this.match(OCLParser.T__7);
	            break;

	        case 52:
	            this.enterOuterAlt(localctx, 52);
	            this.state = 532;
	            this.match(OCLParser.T__64);
	            this.state = 533;
	            this.match(OCLParser.T__103);
	            this.state = 534;
	            this.match(OCLParser.T__6);
	            this.state = 538;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	            if(la_===1) {
	                this.state = 535;
	                this.identOptTypeList();
	                this.state = 536;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 540;
	            this.expression();
	            this.state = 541;
	            this.match(OCLParser.T__7);
	            break;

	        case 53:
	            this.enterOuterAlt(localctx, 53);
	            this.state = 543;
	            this.match(OCLParser.T__64);
	            this.state = 544;
	            this.match(OCLParser.T__104);
	            this.state = 545;
	            this.match(OCLParser.T__6);
	            this.state = 549;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	            if(la_===1) {
	                this.state = 546;
	                this.identOptType();
	                this.state = 547;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 551;
	            this.expression();
	            this.state = 552;
	            this.match(OCLParser.T__7);
	            break;

	        case 54:
	            this.enterOuterAlt(localctx, 54);
	            this.state = 554;
	            this.match(OCLParser.T__64);
	            this.state = 555;
	            this.match(OCLParser.T__71);
	            this.state = 556;
	            this.match(OCLParser.T__6);
	            this.state = 560;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	            if(la_===1) {
	                this.state = 557;
	                this.identOptType();
	                this.state = 558;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 562;
	            this.expression();
	            this.state = 563;
	            this.match(OCLParser.T__7);
	            this.state = 566;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	            if(la_===1) {
	                this.state = 564;
	                this.match(OCLParser.T__22);
	                this.state = 565;
	                this.match(OCLParser.ID);

	            }
	            break;

	        case 55:
	            this.enterOuterAlt(localctx, 55);
	            this.state = 568;
	            this.match(OCLParser.T__64);
	            this.state = 569;
	            this.match(OCLParser.T__105);
	            this.state = 570;
	            this.match(OCLParser.T__6);
	            this.state = 574;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	            if(la_===1) {
	                this.state = 571;
	                this.identOptType();
	                this.state = 572;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 576;
	            this.expression();
	            this.state = 577;
	            this.match(OCLParser.T__7);
	            break;

	        case 56:
	            this.enterOuterAlt(localctx, 56);
	            this.state = 579;
	            this.match(OCLParser.T__64);
	            this.state = 580;
	            this.match(OCLParser.T__106);
	            this.state = 581;
	            this.match(OCLParser.T__6);
	            this.state = 585;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	            if(la_===1) {
	                this.state = 582;
	                this.identOptType();
	                this.state = 583;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 587;
	            this.expression();
	            this.state = 588;
	            this.match(OCLParser.T__7);
	            break;

	        case 57:
	            this.enterOuterAlt(localctx, 57);
	            this.state = 590;
	            this.match(OCLParser.T__64);
	            this.state = 591;
	            this.match(OCLParser.T__107);
	            this.state = 592;
	            this.match(OCLParser.T__6);
	            this.state = 596;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	            if(la_===1) {
	                this.state = 593;
	                this.identOptType();
	                this.state = 594;
	                this.match(OCLParser.T__99);

	            }
	            this.state = 598;
	            this.expression();
	            this.state = 599;
	            this.match(OCLParser.T__7);
	            break;

	        case 58:
	            this.enterOuterAlt(localctx, 58);
	            this.state = 601;
	            this.match(OCLParser.T__64);
	            this.state = 602;
	            this.match(OCLParser.T__108);
	            this.state = 603;
	            this.match(OCLParser.T__6);
	            this.state = 604;
	            this.expression();
	            this.state = 605;
	            this.match(OCLParser.T__13);
	            this.state = 606;
	            this.expression();
	            this.state = 607;
	            this.match(OCLParser.T__7);
	            break;

	        case 59:
	            this.enterOuterAlt(localctx, 59);
	            this.state = 609;
	            this.match(OCLParser.T__64);
	            this.state = 610;
	            this.match(OCLParser.T__109);
	            this.state = 611;
	            this.match(OCLParser.T__6);
	            this.state = 612;
	            this.identifier();
	            this.state = 613;
	            this.match(OCLParser.T__110);
	            this.state = 614;
	            this.identOptType();
	            this.state = 615;
	            this.match(OCLParser.T__21);
	            this.state = 616;
	            this.expression();
	            this.state = 617;
	            this.match(OCLParser.T__99);
	            this.state = 618;
	            this.expression();
	            this.state = 619;
	            this.match(OCLParser.T__7);
	            break;

	        case 60:
	            this.enterOuterAlt(localctx, 60);
	            this.state = 621;
	            this.match(OCLParser.T__64);
	            this.state = 622;
	            this.match(OCLParser.ID);
	            this.state = 623;
	            this.match(OCLParser.T__6);
	            this.state = 632;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                this.state = 624;
	                this.expression();
	                this.state = 629;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===14) {
	                    this.state = 625;
	                    this.match(OCLParser.T__13);
	                    this.state = 626;
	                    this.expression();
	                    this.state = 631;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 634;
	            this.match(OCLParser.T__7);
	            this.state = 637;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	            if(la_===1) {
	                this.state = 635;
	                this.match(OCLParser.T__22);
	                this.state = 636;
	                this.match(OCLParser.ID);

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



	identOptType() {
	    let localctx = new IdentOptTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, OCLParser.RULE_identOptType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 641;
	        this.match(OCLParser.ID);
	        this.state = 644;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 642;
	            this.match(OCLParser.T__2);
	            this.state = 643;
	            this.type();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identOptTypeList() {
	    let localctx = new IdentOptTypeListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, OCLParser.RULE_identOptTypeList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 646;
	        this.identOptType();
	        this.state = 651;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 647;
	            this.match(OCLParser.T__13);
	            this.state = 648;
	            this.identOptType();
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



	setExpression() {
	    let localctx = new SetExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, OCLParser.RULE_setExpression);
	    var _la = 0;
	    try {
	        this.state = 679;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 112:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 654;
	            this.match(OCLParser.T__111);
	            this.state = 656;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                this.state = 655;
	                this.expressionList();
	            }

	            this.state = 658;
	            this.match(OCLParser.T__112);
	            break;
	        case 114:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 659;
	            this.match(OCLParser.T__113);
	            this.state = 661;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                this.state = 660;
	                this.expressionList();
	            }

	            this.state = 663;
	            this.match(OCLParser.T__112);
	            break;
	        case 115:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 664;
	            this.match(OCLParser.T__114);
	            this.state = 666;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                this.state = 665;
	                this.expressionList();
	            }

	            this.state = 668;
	            this.match(OCLParser.T__112);
	            break;
	        case 116:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 669;
	            this.match(OCLParser.T__115);
	            this.state = 671;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                this.state = 670;
	                this.expressionList();
	            }

	            this.state = 673;
	            this.match(OCLParser.T__112);
	            break;
	        case 117:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 674;
	            this.match(OCLParser.T__116);
	            this.state = 676;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1114240) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1795) !== 0) || ((((_la - 112)) & ~0x1f) === 0 && ((1 << (_la - 112)) & 102397) !== 0)) {
	                this.state = 675;
	                this.expressionList();
	            }

	            this.state = 678;
	            this.match(OCLParser.T__112);
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
	    this.enterRule(localctx, 44, OCLParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 681;
	        this.match(OCLParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qualified_name() {
	    let localctx = new Qualified_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, OCLParser.RULE_qualified_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 683;
	        this.match(OCLParser.ENUMERATION_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

OCLParser.EOF = antlr4.Token.EOF;
OCLParser.T__0 = 1;
OCLParser.T__1 = 2;
OCLParser.T__2 = 3;
OCLParser.T__3 = 4;
OCLParser.T__4 = 5;
OCLParser.T__5 = 6;
OCLParser.T__6 = 7;
OCLParser.T__7 = 8;
OCLParser.T__8 = 9;
OCLParser.T__9 = 10;
OCLParser.T__10 = 11;
OCLParser.T__11 = 12;
OCLParser.T__12 = 13;
OCLParser.T__13 = 14;
OCLParser.T__14 = 15;
OCLParser.T__15 = 16;
OCLParser.T__16 = 17;
OCLParser.T__17 = 18;
OCLParser.T__18 = 19;
OCLParser.T__19 = 20;
OCLParser.T__20 = 21;
OCLParser.T__21 = 22;
OCLParser.T__22 = 23;
OCLParser.T__23 = 24;
OCLParser.T__24 = 25;
OCLParser.T__25 = 26;
OCLParser.T__26 = 27;
OCLParser.T__27 = 28;
OCLParser.T__28 = 29;
OCLParser.T__29 = 30;
OCLParser.T__30 = 31;
OCLParser.T__31 = 32;
OCLParser.T__32 = 33;
OCLParser.T__33 = 34;
OCLParser.T__34 = 35;
OCLParser.T__35 = 36;
OCLParser.T__36 = 37;
OCLParser.T__37 = 38;
OCLParser.T__38 = 39;
OCLParser.T__39 = 40;
OCLParser.T__40 = 41;
OCLParser.T__41 = 42;
OCLParser.T__42 = 43;
OCLParser.T__43 = 44;
OCLParser.T__44 = 45;
OCLParser.T__45 = 46;
OCLParser.T__46 = 47;
OCLParser.T__47 = 48;
OCLParser.T__48 = 49;
OCLParser.T__49 = 50;
OCLParser.T__50 = 51;
OCLParser.T__51 = 52;
OCLParser.T__52 = 53;
OCLParser.T__53 = 54;
OCLParser.T__54 = 55;
OCLParser.T__55 = 56;
OCLParser.T__56 = 57;
OCLParser.T__57 = 58;
OCLParser.T__58 = 59;
OCLParser.T__59 = 60;
OCLParser.T__60 = 61;
OCLParser.T__61 = 62;
OCLParser.T__62 = 63;
OCLParser.T__63 = 64;
OCLParser.T__64 = 65;
OCLParser.T__65 = 66;
OCLParser.T__66 = 67;
OCLParser.T__67 = 68;
OCLParser.T__68 = 69;
OCLParser.T__69 = 70;
OCLParser.T__70 = 71;
OCLParser.T__71 = 72;
OCLParser.T__72 = 73;
OCLParser.T__73 = 74;
OCLParser.T__74 = 75;
OCLParser.T__75 = 76;
OCLParser.T__76 = 77;
OCLParser.T__77 = 78;
OCLParser.T__78 = 79;
OCLParser.T__79 = 80;
OCLParser.T__80 = 81;
OCLParser.T__81 = 82;
OCLParser.T__82 = 83;
OCLParser.T__83 = 84;
OCLParser.T__84 = 85;
OCLParser.T__85 = 86;
OCLParser.T__86 = 87;
OCLParser.T__87 = 88;
OCLParser.T__88 = 89;
OCLParser.T__89 = 90;
OCLParser.T__90 = 91;
OCLParser.T__91 = 92;
OCLParser.T__92 = 93;
OCLParser.T__93 = 94;
OCLParser.T__94 = 95;
OCLParser.T__95 = 96;
OCLParser.T__96 = 97;
OCLParser.T__97 = 98;
OCLParser.T__98 = 99;
OCLParser.T__99 = 100;
OCLParser.T__100 = 101;
OCLParser.T__101 = 102;
OCLParser.T__102 = 103;
OCLParser.T__103 = 104;
OCLParser.T__104 = 105;
OCLParser.T__105 = 106;
OCLParser.T__106 = 107;
OCLParser.T__107 = 108;
OCLParser.T__108 = 109;
OCLParser.T__109 = 110;
OCLParser.T__110 = 111;
OCLParser.T__111 = 112;
OCLParser.T__112 = 113;
OCLParser.T__113 = 114;
OCLParser.T__114 = 115;
OCLParser.T__115 = 116;
OCLParser.T__116 = 117;
OCLParser.BOOLEAN_LITERAL = 118;
OCLParser.FLOAT_LITERAL = 119;
OCLParser.STRING1_LITERAL = 120;
OCLParser.STRING2_LITERAL = 121;
OCLParser.ENUMERATION_LITERAL = 122;
OCLParser.NULL_LITERAL = 123;
OCLParser.MULTILINE_COMMENT = 124;
OCLParser.LINE_COMMENT = 125;
OCLParser.NEWLINE = 126;
OCLParser.INT = 127;
OCLParser.ID = 128;
OCLParser.WS = 129;

OCLParser.RULE_multipleContextSpecifications = 0;
OCLParser.RULE_contextSpecification = 1;
OCLParser.RULE_singleInvariant = 2;
OCLParser.RULE_singleDerivedAttribute = 3;
OCLParser.RULE_type = 4;
OCLParser.RULE_expressionList = 5;
OCLParser.RULE_expression = 6;
OCLParser.RULE_conditionalExpression = 7;
OCLParser.RULE_letExpression = 8;
OCLParser.RULE_letBinding = 9;
OCLParser.RULE_basicExpression = 10;
OCLParser.RULE_logicalExpression = 11;
OCLParser.RULE_equalityExpression = 12;
OCLParser.RULE_additiveExpression = 13;
OCLParser.RULE_multiplicativeExpression = 14;
OCLParser.RULE_unaryExpression = 15;
OCLParser.RULE_navigationExpression = 16;
OCLParser.RULE_primaryFactor = 17;
OCLParser.RULE_postfixSuffix = 18;
OCLParser.RULE_identOptType = 19;
OCLParser.RULE_identOptTypeList = 20;
OCLParser.RULE_setExpression = 21;
OCLParser.RULE_identifier = 22;
OCLParser.RULE_qualified_name = 23;

class MultipleContextSpecificationsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_multipleContextSpecifications;
    }

	EOF() {
	    return this.getToken(OCLParser.EOF, 0);
	};

	singleInvariant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleInvariantContext);
	    } else {
	        return this.getTypedRuleContext(SingleInvariantContext,i);
	    }
	};

	singleDerivedAttribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleDerivedAttributeContext);
	    } else {
	        return this.getTypedRuleContext(SingleDerivedAttributeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterMultipleContextSpecifications(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitMultipleContextSpecifications(this);
		}
	}


}



class ContextSpecificationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_contextSpecification;
    }

	EOF() {
	    return this.getToken(OCLParser.EOF, 0);
	};

	singleInvariant() {
	    return this.getTypedRuleContext(SingleInvariantContext,0);
	};

	singleDerivedAttribute() {
	    return this.getTypedRuleContext(SingleDerivedAttributeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterContextSpecification(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitContextSpecification(this);
		}
	}


}



class SingleInvariantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_singleInvariant;
    }

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OCLParser.ID);
	    } else {
	        return this.getToken(OCLParser.ID, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterSingleInvariant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitSingleInvariant(this);
		}
	}


}



class SingleDerivedAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_singleDerivedAttribute;
    }

	qualified_name() {
	    return this.getTypedRuleContext(Qualified_nameContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
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
	    if(listener instanceof OCLListener ) {
	        listener.enterSingleDerivedAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitSingleDerivedAttribute(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_type;
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitType(this);
		}
	}


}



class ExpressionListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_expressionList;
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

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterExpressionList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitExpressionList(this);
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
        this.ruleIndex = OCLParser.RULE_expression;
    }

	logicalExpression() {
	    return this.getTypedRuleContext(LogicalExpressionContext,0);
	};

	conditionalExpression() {
	    return this.getTypedRuleContext(ConditionalExpressionContext,0);
	};

	letExpression() {
	    return this.getTypedRuleContext(LetExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ConditionalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_conditionalExpression;
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

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterConditionalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitConditionalExpression(this);
		}
	}


}



class LetExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_letExpression;
    }

	letBinding = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LetBindingContext);
	    } else {
	        return this.getTypedRuleContext(LetBindingContext,i);
	    }
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterLetExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitLetExpression(this);
		}
	}


}



class LetBindingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_letBinding;
    }

	ID() {
	    return this.getToken(OCLParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterLetBinding(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitLetBinding(this);
		}
	}


}



class BasicExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_basicExpression;
    }

	NULL_LITERAL() {
	    return this.getToken(OCLParser.NULL_LITERAL, 0);
	};

	BOOLEAN_LITERAL() {
	    return this.getToken(OCLParser.BOOLEAN_LITERAL, 0);
	};

	INT() {
	    return this.getToken(OCLParser.INT, 0);
	};

	FLOAT_LITERAL() {
	    return this.getToken(OCLParser.FLOAT_LITERAL, 0);
	};

	STRING1_LITERAL() {
	    return this.getToken(OCLParser.STRING1_LITERAL, 0);
	};

	STRING2_LITERAL() {
	    return this.getToken(OCLParser.STRING2_LITERAL, 0);
	};

	ENUMERATION_LITERAL() {
	    return this.getToken(OCLParser.ENUMERATION_LITERAL, 0);
	};

	ID() {
	    return this.getToken(OCLParser.ID, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	basicExpression() {
	    return this.getTypedRuleContext(BasicExpressionContext,0);
	};

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterBasicExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitBasicExpression(this);
		}
	}


}



class LogicalExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_logicalExpression;
    }

	equalityExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqualityExpressionContext);
	    } else {
	        return this.getTypedRuleContext(EqualityExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterLogicalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitLogicalExpression(this);
		}
	}


}



class EqualityExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_equalityExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterEqualityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitEqualityExpression(this);
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
        this.ruleIndex = OCLParser.RULE_additiveExpression;
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

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
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
        this.ruleIndex = OCLParser.RULE_multiplicativeExpression;
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

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
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
        this.ruleIndex = OCLParser.RULE_unaryExpression;
    }

	unaryExpression() {
	    return this.getTypedRuleContext(UnaryExpressionContext,0);
	};

	navigationExpression() {
	    return this.getTypedRuleContext(NavigationExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitUnaryExpression(this);
		}
	}


}



class NavigationExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_navigationExpression;
    }

	primaryFactor() {
	    return this.getTypedRuleContext(PrimaryFactorContext,0);
	};

	postfixSuffix = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PostfixSuffixContext);
	    } else {
	        return this.getTypedRuleContext(PostfixSuffixContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterNavigationExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitNavigationExpression(this);
		}
	}


}



class PrimaryFactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_primaryFactor;
    }

	setExpression() {
	    return this.getTypedRuleContext(SetExpressionContext,0);
	};

	basicExpression() {
	    return this.getTypedRuleContext(BasicExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterPrimaryFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitPrimaryFactor(this);
		}
	}


}



class PostfixSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_postfixSuffix;
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

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(OCLParser.ID);
	    } else {
	        return this.getToken(OCLParser.ID, i);
	    }
	};


	identOptType() {
	    return this.getTypedRuleContext(IdentOptTypeContext,0);
	};

	identOptTypeList() {
	    return this.getTypedRuleContext(IdentOptTypeListContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterPostfixSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitPostfixSuffix(this);
		}
	}


}



class IdentOptTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_identOptType;
    }

	ID() {
	    return this.getToken(OCLParser.ID, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterIdentOptType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitIdentOptType(this);
		}
	}


}



class IdentOptTypeListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_identOptTypeList;
    }

	identOptType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentOptTypeContext);
	    } else {
	        return this.getTypedRuleContext(IdentOptTypeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterIdentOptTypeList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitIdentOptTypeList(this);
		}
	}


}



class SetExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_setExpression;
    }

	expressionList() {
	    return this.getTypedRuleContext(ExpressionListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterSetExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitSetExpression(this);
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
        this.ruleIndex = OCLParser.RULE_identifier;
    }

	ID() {
	    return this.getToken(OCLParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Qualified_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = OCLParser.RULE_qualified_name;
    }

	ENUMERATION_LITERAL() {
	    return this.getToken(OCLParser.ENUMERATION_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.enterQualified_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof OCLListener ) {
	        listener.exitQualified_name(this);
		}
	}


}




OCLParser.MultipleContextSpecificationsContext = MultipleContextSpecificationsContext; 
OCLParser.ContextSpecificationContext = ContextSpecificationContext; 
OCLParser.SingleInvariantContext = SingleInvariantContext; 
OCLParser.SingleDerivedAttributeContext = SingleDerivedAttributeContext; 
OCLParser.TypeContext = TypeContext; 
OCLParser.ExpressionListContext = ExpressionListContext; 
OCLParser.ExpressionContext = ExpressionContext; 
OCLParser.ConditionalExpressionContext = ConditionalExpressionContext; 
OCLParser.LetExpressionContext = LetExpressionContext; 
OCLParser.LetBindingContext = LetBindingContext; 
OCLParser.BasicExpressionContext = BasicExpressionContext; 
OCLParser.LogicalExpressionContext = LogicalExpressionContext; 
OCLParser.EqualityExpressionContext = EqualityExpressionContext; 
OCLParser.AdditiveExpressionContext = AdditiveExpressionContext; 
OCLParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
OCLParser.UnaryExpressionContext = UnaryExpressionContext; 
OCLParser.NavigationExpressionContext = NavigationExpressionContext; 
OCLParser.PrimaryFactorContext = PrimaryFactorContext; 
OCLParser.PostfixSuffixContext = PostfixSuffixContext; 
OCLParser.IdentOptTypeContext = IdentOptTypeContext; 
OCLParser.IdentOptTypeListContext = IdentOptTypeListContext; 
OCLParser.SetExpressionContext = SetExpressionContext; 
OCLParser.IdentifierContext = IdentifierContext; 
OCLParser.Qualified_nameContext = Qualified_nameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
