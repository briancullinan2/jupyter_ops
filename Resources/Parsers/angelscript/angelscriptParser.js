// Generated from ./angelscript/angelscript.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import angelscriptListener from './angelscriptListener.js';
const serializedATN = [4,1,73,713,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,
0,1,0,4,0,103,8,0,11,0,12,0,104,1,1,5,1,108,8,1,10,1,12,1,111,9,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,5,1,120,8,1,10,1,12,1,123,9,1,3,1,125,8,1,1,1,1,1,
1,1,1,1,1,1,5,1,132,8,1,10,1,12,1,135,9,1,1,1,3,1,138,8,1,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,5,4,152,8,4,10,4,12,4,155,9,4,1,4,3,4,
158,8,4,1,4,1,4,3,4,162,8,4,1,4,3,4,165,8,4,3,4,167,8,4,1,4,1,4,1,4,3,4,
172,8,4,1,4,3,4,175,8,4,1,4,1,4,3,4,179,8,4,1,5,5,5,182,8,5,10,5,12,5,185,
9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,194,8,5,10,5,12,5,197,9,5,3,5,199,8,
5,1,5,1,5,1,5,5,5,204,8,5,10,5,12,5,207,9,5,1,5,3,5,210,8,5,1,6,3,6,213,
8,6,1,6,1,6,1,6,1,6,1,6,3,6,220,8,6,1,6,3,6,223,8,6,1,6,1,6,1,6,1,6,1,6,
3,6,230,8,6,1,6,3,6,233,8,6,5,6,235,8,6,10,6,12,6,238,9,6,1,6,1,6,1,7,1,
7,1,7,3,7,245,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,5,8,255,8,8,10,8,12,8,
258,9,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,267,8,8,1,8,1,8,1,8,1,8,3,8,273,
8,8,5,8,275,8,8,10,8,12,8,278,9,8,1,8,3,8,281,8,8,1,9,5,9,284,8,9,10,9,12,
9,287,9,9,1,9,1,9,1,9,3,9,292,8,9,1,9,1,9,1,9,1,9,1,10,3,10,299,8,10,1,10,
1,10,3,10,303,8,10,1,10,1,10,1,10,1,10,3,10,309,8,10,1,10,1,10,1,10,3,10,
314,8,10,5,10,316,8,10,10,10,12,10,319,9,10,1,10,1,10,1,11,1,11,1,11,1,12,
1,12,3,12,328,8,12,1,12,1,12,1,12,3,12,333,8,12,1,12,1,12,1,13,1,13,1,13,
5,13,340,8,13,10,13,12,13,343,9,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,3,
14,352,8,14,1,14,1,14,3,14,356,8,14,1,14,1,14,1,14,1,14,3,14,362,8,14,1,
14,1,14,3,14,366,8,14,5,14,368,8,14,10,14,12,14,371,9,14,3,14,373,8,14,1,
14,1,14,1,15,1,15,3,15,379,8,15,3,15,381,8,15,1,16,3,16,384,8,16,1,16,1,
16,1,16,1,16,1,16,1,16,5,16,392,8,16,10,16,12,16,395,9,16,1,16,1,16,5,16,
399,8,16,10,16,12,16,402,9,16,1,16,1,16,1,16,1,16,3,16,408,8,16,5,16,410,
8,16,10,16,12,16,413,9,16,1,17,1,17,1,17,3,17,418,8,17,1,17,1,17,1,17,3,
17,423,8,17,5,17,425,8,17,10,17,12,17,428,9,17,1,17,1,17,1,18,3,18,433,8,
18,1,18,1,18,5,18,437,8,18,10,18,12,18,440,9,18,1,18,1,18,1,18,1,18,1,18,
5,18,447,8,18,10,18,12,18,450,9,18,1,18,1,18,3,18,454,8,18,1,18,3,18,457,
8,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,
20,472,8,20,1,21,1,21,1,21,1,21,1,21,1,21,5,21,480,8,21,10,21,12,21,483,
9,21,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,3,23,494,8,23,1,23,1,23,
1,23,1,23,5,23,500,8,23,10,23,12,23,503,9,23,3,23,505,8,23,1,23,1,23,1,23,
1,24,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,531,8,26,1,27,1,27,1,27,1,28,3,28,
537,8,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,30,1,30,3,30,548,8,30,1,30,
1,30,1,31,1,31,1,31,3,31,555,8,31,1,31,1,31,5,31,559,8,31,10,31,12,31,562,
9,31,1,32,1,32,1,32,1,32,5,32,568,8,32,10,32,12,32,571,9,32,1,33,1,33,1,
33,3,33,576,8,33,1,33,1,33,5,33,580,8,33,10,33,12,33,583,9,33,1,33,1,33,
5,33,587,8,33,10,33,12,33,590,9,33,3,33,592,8,33,1,34,1,34,1,34,1,34,1,34,
1,34,1,34,1,34,1,34,1,34,1,34,3,34,605,8,34,1,35,1,35,1,35,1,36,1,36,1,36,
3,36,613,8,36,1,36,1,36,1,36,3,36,618,8,36,1,36,1,36,1,36,3,36,623,8,36,
1,36,1,36,5,36,627,8,36,10,36,12,36,630,9,36,1,36,1,36,1,36,1,36,1,36,3,
36,637,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,38,1,38,1,38,1,38,
1,38,3,38,652,8,38,1,38,1,38,1,38,1,38,1,38,3,38,659,8,38,1,38,5,38,662,
8,38,10,38,12,38,665,9,38,3,38,667,8,38,1,38,1,38,1,38,1,39,1,39,1,39,1,
39,1,40,1,40,1,40,1,41,1,41,1,41,3,41,682,8,41,1,41,1,41,1,41,1,41,3,41,
688,8,41,1,41,5,41,691,8,41,10,41,12,41,694,9,41,1,41,1,41,1,42,1,42,1,42,
3,42,701,8,42,1,43,1,43,1,43,1,43,1,43,1,43,3,43,709,8,43,1,44,1,44,1,44,
0,0,45,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,0,7,1,0,2,
5,2,0,2,2,5,5,1,0,13,14,1,0,24,25,1,0,29,31,3,0,38,39,63,63,68,68,1,0,58,
61,799,0,102,1,0,0,0,2,109,1,0,0,0,4,139,1,0,0,0,6,144,1,0,0,0,8,153,1,0,
0,0,10,183,1,0,0,0,12,212,1,0,0,0,14,241,1,0,0,0,16,256,1,0,0,0,18,285,1,
0,0,0,20,298,1,0,0,0,22,322,1,0,0,0,24,325,1,0,0,0,26,336,1,0,0,0,28,346,
1,0,0,0,30,380,1,0,0,0,32,383,1,0,0,0,34,414,1,0,0,0,36,432,1,0,0,0,38,458,
1,0,0,0,40,471,1,0,0,0,42,473,1,0,0,0,44,486,1,0,0,0,46,489,1,0,0,0,48,509,
1,0,0,0,50,515,1,0,0,0,52,523,1,0,0,0,54,532,1,0,0,0,56,536,1,0,0,0,58,540,
1,0,0,0,60,545,1,0,0,0,62,554,1,0,0,0,64,563,1,0,0,0,66,591,1,0,0,0,68,604,
1,0,0,0,70,606,1,0,0,0,72,636,1,0,0,0,74,638,1,0,0,0,76,646,1,0,0,0,78,671,
1,0,0,0,80,675,1,0,0,0,82,678,1,0,0,0,84,697,1,0,0,0,86,702,1,0,0,0,88,710,
1,0,0,0,90,103,3,14,7,0,91,103,3,16,8,0,92,103,3,4,2,0,93,103,3,2,1,0,94,
103,3,22,11,0,95,103,3,10,5,0,96,103,3,18,9,0,97,103,3,20,10,0,98,103,3,
12,6,0,99,103,3,8,4,0,100,103,3,6,3,0,101,103,5,1,0,0,102,90,1,0,0,0,102,
91,1,0,0,0,102,92,1,0,0,0,102,93,1,0,0,0,102,94,1,0,0,0,102,95,1,0,0,0,102,
96,1,0,0,0,102,97,1,0,0,0,102,98,1,0,0,0,102,99,1,0,0,0,102,100,1,0,0,0,
102,101,1,0,0,0,103,104,1,0,0,0,104,102,1,0,0,0,104,105,1,0,0,0,105,1,1,
0,0,0,106,108,7,0,0,0,107,106,1,0,0,0,108,111,1,0,0,0,109,107,1,0,0,0,109,
110,1,0,0,0,110,112,1,0,0,0,111,109,1,0,0,0,112,113,5,6,0,0,113,137,5,68,
0,0,114,138,5,1,0,0,115,116,5,7,0,0,116,121,5,68,0,0,117,118,5,8,0,0,118,
120,5,68,0,0,119,117,1,0,0,0,120,123,1,0,0,0,121,119,1,0,0,0,121,122,1,0,
0,0,122,125,1,0,0,0,123,121,1,0,0,0,124,115,1,0,0,0,124,125,1,0,0,0,125,
126,1,0,0,0,126,133,5,9,0,0,127,132,3,20,10,0,128,132,3,8,4,0,129,132,3,
12,6,0,130,132,3,18,9,0,131,127,1,0,0,0,131,128,1,0,0,0,131,129,1,0,0,0,
131,130,1,0,0,0,132,135,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,136,
1,0,0,0,135,133,1,0,0,0,136,138,5,10,0,0,137,114,1,0,0,0,137,124,1,0,0,0,
138,3,1,0,0,0,139,140,5,11,0,0,140,141,5,63,0,0,141,142,5,68,0,0,142,143,
5,1,0,0,143,5,1,0,0,0,144,145,5,12,0,0,145,146,5,68,0,0,146,147,5,9,0,0,
147,148,3,0,0,0,148,149,5,10,0,0,149,7,1,0,0,0,150,152,7,1,0,0,151,150,1,
0,0,0,152,155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,157,1,0,0,0,155,
153,1,0,0,0,156,158,7,2,0,0,157,156,1,0,0,0,157,158,1,0,0,0,158,166,1,0,
0,0,159,161,3,32,16,0,160,162,5,15,0,0,161,160,1,0,0,0,161,162,1,0,0,0,162,
165,1,0,0,0,163,165,5,16,0,0,164,159,1,0,0,0,164,163,1,0,0,0,165,167,1,0,
0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,168,1,0,0,0,168,169,5,68,0,0,169,
171,3,28,14,0,170,172,5,17,0,0,171,170,1,0,0,0,171,172,1,0,0,0,172,174,1,
0,0,0,173,175,5,64,0,0,174,173,1,0,0,0,174,175,1,0,0,0,175,178,1,0,0,0,176,
179,5,1,0,0,177,179,3,26,13,0,178,176,1,0,0,0,178,177,1,0,0,0,179,9,1,0,
0,0,180,182,7,1,0,0,181,180,1,0,0,0,182,185,1,0,0,0,183,181,1,0,0,0,183,
184,1,0,0,0,184,186,1,0,0,0,185,183,1,0,0,0,186,187,5,18,0,0,187,209,5,68,
0,0,188,210,5,1,0,0,189,190,5,7,0,0,190,195,5,68,0,0,191,192,5,8,0,0,192,
194,5,68,0,0,193,191,1,0,0,0,194,197,1,0,0,0,195,193,1,0,0,0,195,196,1,0,
0,0,196,199,1,0,0,0,197,195,1,0,0,0,198,189,1,0,0,0,198,199,1,0,0,0,199,
200,1,0,0,0,200,205,5,9,0,0,201,204,3,20,10,0,202,204,3,24,12,0,203,201,
1,0,0,0,203,202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,
206,208,1,0,0,0,207,205,1,0,0,0,208,210,5,10,0,0,209,188,1,0,0,0,209,198,
1,0,0,0,210,11,1,0,0,0,211,213,7,2,0,0,212,211,1,0,0,0,212,213,1,0,0,0,213,
214,1,0,0,0,214,215,3,32,16,0,215,222,5,68,0,0,216,219,5,19,0,0,217,220,
3,34,17,0,218,220,3,64,32,0,219,217,1,0,0,0,219,218,1,0,0,0,220,223,1,0,
0,0,221,223,3,82,41,0,222,216,1,0,0,0,222,221,1,0,0,0,222,223,1,0,0,0,223,
236,1,0,0,0,224,225,5,8,0,0,225,232,5,68,0,0,226,229,5,19,0,0,227,230,3,
34,17,0,228,230,3,64,32,0,229,227,1,0,0,0,229,228,1,0,0,0,230,233,1,0,0,
0,231,233,3,82,41,0,232,226,1,0,0,0,232,231,1,0,0,0,232,233,1,0,0,0,233,
235,1,0,0,0,234,224,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,1,0,
0,0,237,239,1,0,0,0,238,236,1,0,0,0,239,240,5,1,0,0,240,13,1,0,0,0,241,242,
5,20,0,0,242,244,3,32,16,0,243,245,5,15,0,0,244,243,1,0,0,0,244,245,1,0,
0,0,245,246,1,0,0,0,246,247,5,68,0,0,247,248,3,28,14,0,248,249,5,64,0,0,
249,250,5,21,0,0,250,251,5,70,0,0,251,252,5,1,0,0,252,15,1,0,0,0,253,255,
7,1,0,0,254,253,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,
257,259,1,0,0,0,258,256,1,0,0,0,259,260,5,22,0,0,260,280,5,68,0,0,261,281,
5,1,0,0,262,263,5,9,0,0,263,266,5,68,0,0,264,265,5,19,0,0,265,267,3,64,32,
0,266,264,1,0,0,0,266,267,1,0,0,0,267,276,1,0,0,0,268,269,5,8,0,0,269,272,
5,68,0,0,270,271,5,19,0,0,271,273,3,64,32,0,272,270,1,0,0,0,272,273,1,0,
0,0,273,275,1,0,0,0,274,268,1,0,0,0,275,278,1,0,0,0,276,274,1,0,0,0,276,
277,1,0,0,0,277,279,1,0,0,0,278,276,1,0,0,0,279,281,5,10,0,0,280,261,1,0,
0,0,280,262,1,0,0,0,281,17,1,0,0,0,282,284,7,1,0,0,283,282,1,0,0,0,284,287,
1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,288,1,0,0,0,287,285,1,0,0,0,
288,289,5,23,0,0,289,291,3,32,16,0,290,292,5,15,0,0,291,290,1,0,0,0,291,
292,1,0,0,0,292,293,1,0,0,0,293,294,5,68,0,0,294,295,3,28,14,0,295,296,5,
1,0,0,296,19,1,0,0,0,297,299,7,2,0,0,298,297,1,0,0,0,298,299,1,0,0,0,299,
300,1,0,0,0,300,302,3,32,16,0,301,303,5,15,0,0,302,301,1,0,0,0,302,303,1,
0,0,0,303,304,1,0,0,0,304,305,5,68,0,0,305,317,5,9,0,0,306,308,7,3,0,0,307,
309,5,17,0,0,308,307,1,0,0,0,308,309,1,0,0,0,309,310,1,0,0,0,310,313,5,64,
0,0,311,314,3,26,13,0,312,314,5,1,0,0,313,311,1,0,0,0,313,312,1,0,0,0,314,
316,1,0,0,0,315,306,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,0,
0,0,318,320,1,0,0,0,319,317,1,0,0,0,320,321,5,10,0,0,321,21,1,0,0,0,322,
323,5,26,0,0,323,324,3,2,1,0,324,23,1,0,0,0,325,327,3,32,16,0,326,328,5,
15,0,0,327,326,1,0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,330,5,68,0,0,
330,332,3,28,14,0,331,333,5,17,0,0,332,331,1,0,0,0,332,333,1,0,0,0,333,334,
1,0,0,0,334,335,5,1,0,0,335,25,1,0,0,0,336,341,5,9,0,0,337,340,3,12,6,0,
338,340,3,40,20,0,339,337,1,0,0,0,339,338,1,0,0,0,340,343,1,0,0,0,341,339,
1,0,0,0,341,342,1,0,0,0,342,344,1,0,0,0,343,341,1,0,0,0,344,345,5,10,0,0,
345,27,1,0,0,0,346,372,5,27,0,0,347,373,5,66,0,0,348,349,3,32,16,0,349,351,
3,30,15,0,350,352,5,68,0,0,351,350,1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,
0,353,354,5,19,0,0,354,356,3,64,32,0,355,353,1,0,0,0,355,356,1,0,0,0,356,
369,1,0,0,0,357,358,5,8,0,0,358,359,3,32,16,0,359,361,3,30,15,0,360,362,
5,68,0,0,361,360,1,0,0,0,361,362,1,0,0,0,362,365,1,0,0,0,363,364,5,19,0,
0,364,366,3,64,32,0,365,363,1,0,0,0,365,366,1,0,0,0,366,368,1,0,0,0,367,
357,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,373,1,0,
0,0,371,369,1,0,0,0,372,347,1,0,0,0,372,348,1,0,0,0,372,373,1,0,0,0,373,
374,1,0,0,0,374,375,5,28,0,0,375,29,1,0,0,0,376,378,5,15,0,0,377,379,7,4,
0,0,378,377,1,0,0,0,378,379,1,0,0,0,379,381,1,0,0,0,380,376,1,0,0,0,380,
381,1,0,0,0,381,31,1,0,0,0,382,384,5,17,0,0,383,382,1,0,0,0,383,384,1,0,
0,0,384,385,1,0,0,0,385,386,3,36,18,0,386,400,3,38,19,0,387,388,5,32,0,0,
388,393,3,32,16,0,389,390,5,8,0,0,390,392,3,32,16,0,391,389,1,0,0,0,392,
395,1,0,0,0,393,391,1,0,0,0,393,394,1,0,0,0,394,396,1,0,0,0,395,393,1,0,
0,0,396,397,5,33,0,0,397,399,1,0,0,0,398,387,1,0,0,0,399,402,1,0,0,0,400,
398,1,0,0,0,400,401,1,0,0,0,401,411,1,0,0,0,402,400,1,0,0,0,403,404,5,34,
0,0,404,410,5,35,0,0,405,407,5,36,0,0,406,408,5,17,0,0,407,406,1,0,0,0,407,
408,1,0,0,0,408,410,1,0,0,0,409,403,1,0,0,0,409,405,1,0,0,0,410,413,1,0,
0,0,411,409,1,0,0,0,411,412,1,0,0,0,412,33,1,0,0,0,413,411,1,0,0,0,414,417,
5,9,0,0,415,418,3,84,42,0,416,418,3,34,17,0,417,415,1,0,0,0,417,416,1,0,
0,0,417,418,1,0,0,0,418,426,1,0,0,0,419,422,5,8,0,0,420,423,3,84,42,0,421,
423,3,34,17,0,422,420,1,0,0,0,422,421,1,0,0,0,422,423,1,0,0,0,423,425,1,
0,0,0,424,419,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,
429,1,0,0,0,428,426,1,0,0,0,429,430,5,10,0,0,430,35,1,0,0,0,431,433,5,37,
0,0,432,431,1,0,0,0,432,433,1,0,0,0,433,438,1,0,0,0,434,435,5,68,0,0,435,
437,5,37,0,0,436,434,1,0,0,0,437,440,1,0,0,0,438,436,1,0,0,0,438,439,1,0,
0,0,439,456,1,0,0,0,440,438,1,0,0,0,441,453,5,68,0,0,442,443,5,32,0,0,443,
448,3,32,16,0,444,445,5,8,0,0,445,447,3,32,16,0,446,444,1,0,0,0,447,450,
1,0,0,0,448,446,1,0,0,0,448,449,1,0,0,0,449,451,1,0,0,0,450,448,1,0,0,0,
451,452,5,33,0,0,452,454,1,0,0,0,453,442,1,0,0,0,453,454,1,0,0,0,454,455,
1,0,0,0,455,457,5,37,0,0,456,441,1,0,0,0,456,457,1,0,0,0,457,37,1,0,0,0,
458,459,7,5,0,0,459,39,1,0,0,0,460,472,3,52,26,0,461,472,3,46,23,0,462,472,
3,48,24,0,463,472,3,60,30,0,464,472,3,26,13,0,465,472,3,44,22,0,466,472,
3,54,27,0,467,472,3,50,25,0,468,472,3,42,21,0,469,472,3,56,28,0,470,472,
3,58,29,0,471,460,1,0,0,0,471,461,1,0,0,0,471,462,1,0,0,0,471,463,1,0,0,
0,471,464,1,0,0,0,471,465,1,0,0,0,471,466,1,0,0,0,471,467,1,0,0,0,471,468,
1,0,0,0,471,469,1,0,0,0,471,470,1,0,0,0,472,41,1,0,0,0,473,474,5,40,0,0,
474,475,5,27,0,0,475,476,3,84,42,0,476,477,5,28,0,0,477,481,5,9,0,0,478,
480,3,62,31,0,479,478,1,0,0,0,480,483,1,0,0,0,481,479,1,0,0,0,481,482,1,
0,0,0,482,484,1,0,0,0,483,481,1,0,0,0,484,485,5,10,0,0,485,43,1,0,0,0,486,
487,5,41,0,0,487,488,5,1,0,0,488,45,1,0,0,0,489,490,5,42,0,0,490,493,5,27,
0,0,491,494,3,12,6,0,492,494,3,56,28,0,493,491,1,0,0,0,493,492,1,0,0,0,494,
495,1,0,0,0,495,504,3,56,28,0,496,501,3,84,42,0,497,498,5,8,0,0,498,500,
3,84,42,0,499,497,1,0,0,0,500,503,1,0,0,0,501,499,1,0,0,0,501,502,1,0,0,
0,502,505,1,0,0,0,503,501,1,0,0,0,504,496,1,0,0,0,504,505,1,0,0,0,505,506,
1,0,0,0,506,507,5,28,0,0,507,508,3,40,20,0,508,47,1,0,0,0,509,510,5,43,0,
0,510,511,5,27,0,0,511,512,3,84,42,0,512,513,5,28,0,0,513,514,3,40,20,0,
514,49,1,0,0,0,515,516,5,44,0,0,516,517,3,40,20,0,517,518,5,43,0,0,518,519,
5,27,0,0,519,520,3,84,42,0,520,521,5,28,0,0,521,522,5,1,0,0,522,51,1,0,0,
0,523,524,5,45,0,0,524,525,5,27,0,0,525,526,3,84,42,0,526,527,5,28,0,0,527,
530,3,40,20,0,528,529,5,46,0,0,529,531,3,40,20,0,530,528,1,0,0,0,530,531,
1,0,0,0,531,53,1,0,0,0,532,533,5,47,0,0,533,534,5,1,0,0,534,55,1,0,0,0,535,
537,3,84,42,0,536,535,1,0,0,0,536,537,1,0,0,0,537,538,1,0,0,0,538,539,5,
1,0,0,539,57,1,0,0,0,540,541,5,48,0,0,541,542,3,26,13,0,542,543,5,49,0,0,
543,544,3,26,13,0,544,59,1,0,0,0,545,547,5,50,0,0,546,548,3,84,42,0,547,
546,1,0,0,0,547,548,1,0,0,0,548,549,1,0,0,0,549,550,5,1,0,0,550,61,1,0,0,
0,551,552,5,51,0,0,552,555,3,64,32,0,553,555,5,52,0,0,554,551,1,0,0,0,554,
553,1,0,0,0,555,556,1,0,0,0,556,560,5,7,0,0,557,559,3,40,20,0,558,557,1,
0,0,0,559,562,1,0,0,0,560,558,1,0,0,0,560,561,1,0,0,0,561,63,1,0,0,0,562,
560,1,0,0,0,563,569,3,66,33,0,564,565,3,88,44,0,565,566,3,66,33,0,566,568,
1,0,0,0,567,564,1,0,0,0,568,571,1,0,0,0,569,567,1,0,0,0,569,570,1,0,0,0,
570,65,1,0,0,0,571,569,1,0,0,0,572,573,3,32,16,0,573,574,5,19,0,0,574,576,
1,0,0,0,575,572,1,0,0,0,575,576,1,0,0,0,576,577,1,0,0,0,577,592,3,34,17,
0,578,580,5,65,0,0,579,578,1,0,0,0,580,583,1,0,0,0,581,579,1,0,0,0,581,582,
1,0,0,0,582,584,1,0,0,0,583,581,1,0,0,0,584,588,3,68,34,0,585,587,3,72,36,
0,586,585,1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,592,
1,0,0,0,590,588,1,0,0,0,591,575,1,0,0,0,591,581,1,0,0,0,592,67,1,0,0,0,593,
605,5,66,0,0,594,605,3,70,35,0,595,605,3,78,39,0,596,605,3,80,40,0,597,605,
3,74,37,0,598,605,5,67,0,0,599,600,5,27,0,0,600,601,3,84,42,0,601,602,5,
28,0,0,602,605,1,0,0,0,603,605,3,76,38,0,604,593,1,0,0,0,604,594,1,0,0,0,
604,595,1,0,0,0,604,596,1,0,0,0,604,597,1,0,0,0,604,598,1,0,0,0,604,599,
1,0,0,0,604,603,1,0,0,0,605,69,1,0,0,0,606,607,3,32,16,0,607,608,3,82,41,
0,608,71,1,0,0,0,609,612,5,53,0,0,610,613,3,78,39,0,611,613,5,68,0,0,612,
610,1,0,0,0,612,611,1,0,0,0,613,637,1,0,0,0,614,617,5,34,0,0,615,616,5,68,
0,0,616,618,5,7,0,0,617,615,1,0,0,0,617,618,1,0,0,0,618,619,1,0,0,0,619,
628,3,84,42,0,620,622,5,8,0,0,621,623,5,68,0,0,622,621,1,0,0,0,622,623,1,
0,0,0,623,624,1,0,0,0,624,625,5,7,0,0,625,627,3,84,42,0,626,620,1,0,0,0,
627,630,1,0,0,0,628,626,1,0,0,0,628,629,1,0,0,0,629,631,1,0,0,0,630,628,
1,0,0,0,631,632,5,35,0,0,632,637,1,0,0,0,633,637,3,82,41,0,634,637,5,54,
0,0,635,637,5,55,0,0,636,609,1,0,0,0,636,614,1,0,0,0,636,633,1,0,0,0,636,
634,1,0,0,0,636,635,1,0,0,0,637,73,1,0,0,0,638,639,5,56,0,0,639,640,5,32,
0,0,640,641,3,32,16,0,641,642,5,33,0,0,642,643,5,27,0,0,643,644,3,84,42,
0,644,645,5,28,0,0,645,75,1,0,0,0,646,647,5,57,0,0,647,666,5,27,0,0,648,
649,3,32,16,0,649,650,3,30,15,0,650,652,1,0,0,0,651,648,1,0,0,0,651,652,
1,0,0,0,652,653,1,0,0,0,653,663,5,68,0,0,654,658,5,8,0,0,655,656,3,32,16,
0,656,657,3,30,15,0,657,659,1,0,0,0,658,655,1,0,0,0,658,659,1,0,0,0,659,
660,1,0,0,0,660,662,5,68,0,0,661,654,1,0,0,0,662,665,1,0,0,0,663,661,1,0,
0,0,663,664,1,0,0,0,664,667,1,0,0,0,665,663,1,0,0,0,666,651,1,0,0,0,666,
667,1,0,0,0,667,668,1,0,0,0,668,669,5,28,0,0,669,670,3,26,13,0,670,77,1,
0,0,0,671,672,3,36,18,0,672,673,5,68,0,0,673,674,3,82,41,0,674,79,1,0,0,
0,675,676,3,36,18,0,676,677,5,68,0,0,677,81,1,0,0,0,678,681,5,27,0,0,679,
680,5,68,0,0,680,682,5,7,0,0,681,679,1,0,0,0,681,682,1,0,0,0,682,683,1,0,
0,0,683,692,3,84,42,0,684,687,5,8,0,0,685,686,5,68,0,0,686,688,5,7,0,0,687,
685,1,0,0,0,687,688,1,0,0,0,688,689,1,0,0,0,689,691,3,84,42,0,690,684,1,
0,0,0,691,694,1,0,0,0,692,690,1,0,0,0,692,693,1,0,0,0,693,695,1,0,0,0,694,
692,1,0,0,0,695,696,5,28,0,0,696,83,1,0,0,0,697,700,3,86,43,0,698,699,5,
62,0,0,699,701,3,84,42,0,700,698,1,0,0,0,700,701,1,0,0,0,701,85,1,0,0,0,
702,708,3,64,32,0,703,704,5,38,0,0,704,705,3,84,42,0,705,706,5,7,0,0,706,
707,3,84,42,0,707,709,1,0,0,0,708,703,1,0,0,0,708,709,1,0,0,0,709,87,1,0,
0,0,710,711,7,6,0,0,711,89,1,0,0,0,97,102,104,109,121,124,131,133,137,153,
157,161,164,166,171,174,178,183,195,198,203,205,209,212,219,222,229,232,
236,244,256,266,272,276,280,285,291,298,302,308,313,317,327,332,339,341,
351,355,361,365,369,372,378,380,383,393,400,407,409,411,417,422,426,432,
438,448,453,456,471,481,493,501,504,530,536,547,554,560,569,575,581,588,
591,604,612,617,622,628,636,651,658,663,666,681,687,692,700,708];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class angelscriptParser extends antlr4.Parser {

    static grammarFileName = "angelscript.g4";
    static literalNames = [ null, "';'", "'shared'", "'abstract'", "'final'", 
                            "'external'", "'class'", "':'", "','", "'{'", 
                            "'}'", "'typedef'", "'namespace'", "'private'", 
                            "'protected'", "'&'", "'~'", "'const'", "'interface'", 
                            "'='", "'import'", "'from'", "'enum'", "'funcdef'", 
                            "'get'", "'set'", "'mixin'", "'('", "')'", "'in'", 
                            "'out'", "'inout'", "'<'", "'>'", "'['", "']'", 
                            "'@'", "'::'", "'?'", "'auto'", "'switch'", 
                            "'break'", "'for'", "'while'", "'do'", "'if'", 
                            "'else'", "'continue'", "'try'", "'catch'", 
                            "'return'", "'case'", "'default'", "'.'", "'++'", 
                            "'--'", "'cast'", "'function'", null, null, 
                            null, null, null, null, null, null, "'void'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "BITOP", "MATHOP", "COMPOP", "LOGICOP", 
                             "ASSIGNOP", "PRIMTYPE", "FUNCATTR", "EXPRPREOP", 
                             "VOID", "LITERAL", "IDENTIFIER", "NUMBER", 
                             "STRING", "BITS", "COMMENT", "WS" ];
    static ruleNames = [ "script", "class_", "typdef", "namespace", "func_", 
                         "interface_", "var_", "import_", "enum_", "funcdef", 
                         "virtprop", "mixin_", "intfmthd", "statblock", 
                         "paramlist", "typemod", "type_", "initlist", "scope", 
                         "datatype", "statement", "switch_", "break_", "for_", 
                         "while_", "dowhile", "if_", "continue_", "exprstat", 
                         "try_", "return_", "case_", "expr", "exprterm", 
                         "exprvalue", "constructcall", "exprpostop", "cast", 
                         "lambda_", "funccall", "varaccess", "arglist", 
                         "assign", "condition", "exprop" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = angelscriptParser.ruleNames;
        this.literalNames = angelscriptParser.literalNames;
        this.symbolicNames = angelscriptParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, angelscriptParser.RULE_script);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 102;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 90;
	                this.import_();
	                break;

	            case 2:
	                this.state = 91;
	                this.enum_();
	                break;

	            case 3:
	                this.state = 92;
	                this.typdef();
	                break;

	            case 4:
	                this.state = 93;
	                this.class_();
	                break;

	            case 5:
	                this.state = 94;
	                this.mixin_();
	                break;

	            case 6:
	                this.state = 95;
	                this.interface_();
	                break;

	            case 7:
	                this.state = 96;
	                this.funcdef();
	                break;

	            case 8:
	                this.state = 97;
	                this.virtprop();
	                break;

	            case 9:
	                this.state = 98;
	                this.var_();
	                break;

	            case 10:
	                this.state = 99;
	                this.func_();
	                break;

	            case 11:
	                this.state = 100;
	                this.namespace();
	                break;

	            case 12:
	                this.state = 101;
	                this.match(angelscriptParser.T__0);
	                break;

	            }
	            this.state = 104; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__0) | (1 << angelscriptParser.T__1) | (1 << angelscriptParser.T__2) | (1 << angelscriptParser.T__3) | (1 << angelscriptParser.T__4) | (1 << angelscriptParser.T__5) | (1 << angelscriptParser.T__10) | (1 << angelscriptParser.T__11) | (1 << angelscriptParser.T__12) | (1 << angelscriptParser.T__13) | (1 << angelscriptParser.T__15) | (1 << angelscriptParser.T__16) | (1 << angelscriptParser.T__17) | (1 << angelscriptParser.T__19) | (1 << angelscriptParser.T__21) | (1 << angelscriptParser.T__22) | (1 << angelscriptParser.T__25))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_() {
	    let localctx = new Class_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, angelscriptParser.RULE_class_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__1) | (1 << angelscriptParser.T__2) | (1 << angelscriptParser.T__3) | (1 << angelscriptParser.T__4))) !== 0)) {
	            this.state = 106;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__1) | (1 << angelscriptParser.T__2) | (1 << angelscriptParser.T__3) | (1 << angelscriptParser.T__4))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 111;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 112;
	        this.match(angelscriptParser.T__5);
	        this.state = 113;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 137;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case angelscriptParser.T__0:
	            this.state = 114;
	            this.match(angelscriptParser.T__0);
	            break;
	        case angelscriptParser.T__6:
	        case angelscriptParser.T__8:
	            this.state = 124;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===angelscriptParser.T__6) {
	                this.state = 115;
	                this.match(angelscriptParser.T__6);
	                this.state = 116;
	                this.match(angelscriptParser.IDENTIFIER);
	                this.state = 121;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===angelscriptParser.T__7) {
	                    this.state = 117;
	                    this.match(angelscriptParser.T__7);
	                    this.state = 118;
	                    this.match(angelscriptParser.IDENTIFIER);
	                    this.state = 123;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 126;
	            this.match(angelscriptParser.T__8);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__1) | (1 << angelscriptParser.T__4) | (1 << angelscriptParser.T__12) | (1 << angelscriptParser.T__13) | (1 << angelscriptParser.T__15) | (1 << angelscriptParser.T__16) | (1 << angelscriptParser.T__22))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	                this.state = 131;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 127;
	                    this.virtprop();
	                    break;

	                case 2:
	                    this.state = 128;
	                    this.func_();
	                    break;

	                case 3:
	                    this.state = 129;
	                    this.var_();
	                    break;

	                case 4:
	                    this.state = 130;
	                    this.funcdef();
	                    break;

	                }
	                this.state = 135;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 136;
	            this.match(angelscriptParser.T__9);
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



	typdef() {
	    let localctx = new TypdefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, angelscriptParser.RULE_typdef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(angelscriptParser.T__10);
	        this.state = 140;
	        this.match(angelscriptParser.PRIMTYPE);
	        this.state = 141;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 142;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namespace() {
	    let localctx = new NamespaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, angelscriptParser.RULE_namespace);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.match(angelscriptParser.T__11);
	        this.state = 145;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 146;
	        this.match(angelscriptParser.T__8);
	        this.state = 147;
	        this.script();
	        this.state = 148;
	        this.match(angelscriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_() {
	    let localctx = new Func_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, angelscriptParser.RULE_func_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4) {
	            this.state = 150;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 155;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__12 || _la===angelscriptParser.T__13) {
	            this.state = 156;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__12 || _la===angelscriptParser.T__13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 166;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 164;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case angelscriptParser.T__16:
	            case angelscriptParser.T__36:
	            case angelscriptParser.T__37:
	            case angelscriptParser.T__38:
	            case angelscriptParser.PRIMTYPE:
	            case angelscriptParser.IDENTIFIER:
	                this.state = 159;
	                this.type_();
	                this.state = 161;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===angelscriptParser.T__14) {
	                    this.state = 160;
	                    this.match(angelscriptParser.T__14);
	                }

	                break;
	            case angelscriptParser.T__15:
	                this.state = 163;
	                this.match(angelscriptParser.T__15);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }

	        }
	        this.state = 168;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 169;
	        this.paramlist();
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__16) {
	            this.state = 170;
	            this.match(angelscriptParser.T__16);
	        }

	        this.state = 174;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.FUNCATTR) {
	            this.state = 173;
	            this.match(angelscriptParser.FUNCATTR);
	        }

	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case angelscriptParser.T__0:
	            this.state = 176;
	            this.match(angelscriptParser.T__0);
	            break;
	        case angelscriptParser.T__8:
	            this.state = 177;
	            this.statblock();
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



	interface_() {
	    let localctx = new Interface_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, angelscriptParser.RULE_interface_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4) {
	            this.state = 180;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 185;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 186;
	        this.match(angelscriptParser.T__17);
	        this.state = 187;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 209;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case angelscriptParser.T__0:
	            this.state = 188;
	            this.match(angelscriptParser.T__0);
	            break;
	        case angelscriptParser.T__6:
	        case angelscriptParser.T__8:
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===angelscriptParser.T__6) {
	                this.state = 189;
	                this.match(angelscriptParser.T__6);
	                this.state = 190;
	                this.match(angelscriptParser.IDENTIFIER);
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===angelscriptParser.T__7) {
	                    this.state = 191;
	                    this.match(angelscriptParser.T__7);
	                    this.state = 192;
	                    this.match(angelscriptParser.IDENTIFIER);
	                    this.state = 197;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 200;
	            this.match(angelscriptParser.T__8);
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__12) | (1 << angelscriptParser.T__13) | (1 << angelscriptParser.T__16))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	                this.state = 203;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 201;
	                    this.virtprop();
	                    break;

	                case 2:
	                    this.state = 202;
	                    this.intfmthd();
	                    break;

	                }
	                this.state = 207;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 208;
	            this.match(angelscriptParser.T__9);
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
	    this.enterRule(localctx, 12, angelscriptParser.RULE_var_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__12 || _la===angelscriptParser.T__13) {
	            this.state = 211;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__12 || _la===angelscriptParser.T__13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 214;
	        this.type_();
	        this.state = 215;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 222;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case angelscriptParser.T__18:
	        	this.state = 216;
	        	this.match(angelscriptParser.T__18);
	        	this.state = 219;
	        	this._errHandler.sync(this);
	        	var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        	switch(la_) {
	        	case 1:
	        	    this.state = 217;
	        	    this.initlist();
	        	    break;

	        	case 2:
	        	    this.state = 218;
	        	    this.expr();
	        	    break;

	        	}
	        	break;
	        case angelscriptParser.T__26:
	        	this.state = 221;
	        	this.arglist();
	        	break;
	        case angelscriptParser.T__0:
	        case angelscriptParser.T__7:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__7) {
	            this.state = 224;
	            this.match(angelscriptParser.T__7);
	            this.state = 225;
	            this.match(angelscriptParser.IDENTIFIER);
	            this.state = 232;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case angelscriptParser.T__18:
	            	this.state = 226;
	            	this.match(angelscriptParser.T__18);
	            	this.state = 229;
	            	this._errHandler.sync(this);
	            	var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            	switch(la_) {
	            	case 1:
	            	    this.state = 227;
	            	    this.initlist();
	            	    break;

	            	case 2:
	            	    this.state = 228;
	            	    this.expr();
	            	    break;

	            	}
	            	break;
	            case angelscriptParser.T__26:
	            	this.state = 231;
	            	this.arglist();
	            	break;
	            case angelscriptParser.T__0:
	            case angelscriptParser.T__7:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 238;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 239;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	import_() {
	    let localctx = new Import_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, angelscriptParser.RULE_import_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(angelscriptParser.T__19);
	        this.state = 242;
	        this.type_();
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__14) {
	            this.state = 243;
	            this.match(angelscriptParser.T__14);
	        }

	        this.state = 246;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 247;
	        this.paramlist();
	        this.state = 248;
	        this.match(angelscriptParser.FUNCATTR);
	        this.state = 249;
	        this.match(angelscriptParser.T__20);
	        this.state = 250;
	        this.match(angelscriptParser.STRING);
	        this.state = 251;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enum_() {
	    let localctx = new Enum_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, angelscriptParser.RULE_enum_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4) {
	            this.state = 253;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 258;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 259;
	        this.match(angelscriptParser.T__21);
	        this.state = 260;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 280;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case angelscriptParser.T__0:
	            this.state = 261;
	            this.match(angelscriptParser.T__0);
	            break;
	        case angelscriptParser.T__8:
	            this.state = 262;
	            this.match(angelscriptParser.T__8);
	            this.state = 263;
	            this.match(angelscriptParser.IDENTIFIER);
	            this.state = 266;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===angelscriptParser.T__18) {
	                this.state = 264;
	                this.match(angelscriptParser.T__18);
	                this.state = 265;
	                this.expr();
	            }

	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===angelscriptParser.T__7) {
	                this.state = 268;
	                this.match(angelscriptParser.T__7);
	                this.state = 269;
	                this.match(angelscriptParser.IDENTIFIER);
	                this.state = 272;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===angelscriptParser.T__18) {
	                    this.state = 270;
	                    this.match(angelscriptParser.T__18);
	                    this.state = 271;
	                    this.expr();
	                }

	                this.state = 278;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 279;
	            this.match(angelscriptParser.T__9);
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



	funcdef() {
	    let localctx = new FuncdefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, angelscriptParser.RULE_funcdef);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4) {
	            this.state = 282;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__1 || _la===angelscriptParser.T__4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 287;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 288;
	        this.match(angelscriptParser.T__22);
	        this.state = 289;
	        this.type_();
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__14) {
	            this.state = 290;
	            this.match(angelscriptParser.T__14);
	        }

	        this.state = 293;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 294;
	        this.paramlist();
	        this.state = 295;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	virtprop() {
	    let localctx = new VirtpropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, angelscriptParser.RULE_virtprop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__12 || _la===angelscriptParser.T__13) {
	            this.state = 297;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__12 || _la===angelscriptParser.T__13)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 300;
	        this.type_();
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__14) {
	            this.state = 301;
	            this.match(angelscriptParser.T__14);
	        }

	        this.state = 304;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 305;
	        this.match(angelscriptParser.T__8);
	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__23 || _la===angelscriptParser.T__24) {
	            this.state = 306;
	            _la = this._input.LA(1);
	            if(!(_la===angelscriptParser.T__23 || _la===angelscriptParser.T__24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===angelscriptParser.T__16) {
	                this.state = 307;
	                this.match(angelscriptParser.T__16);
	            }

	            this.state = 310;
	            this.match(angelscriptParser.FUNCATTR);
	            this.state = 313;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case angelscriptParser.T__8:
	                this.state = 311;
	                this.statblock();
	                break;
	            case angelscriptParser.T__0:
	                this.state = 312;
	                this.match(angelscriptParser.T__0);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 320;
	        this.match(angelscriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mixin_() {
	    let localctx = new Mixin_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, angelscriptParser.RULE_mixin_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(angelscriptParser.T__25);
	        this.state = 323;
	        this.class_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intfmthd() {
	    let localctx = new IntfmthdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, angelscriptParser.RULE_intfmthd);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.type_();
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__14) {
	            this.state = 326;
	            this.match(angelscriptParser.T__14);
	        }

	        this.state = 329;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 330;
	        this.paramlist();
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__16) {
	            this.state = 331;
	            this.match(angelscriptParser.T__16);
	        }

	        this.state = 334;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statblock() {
	    let localctx = new StatblockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, angelscriptParser.RULE_statblock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.match(angelscriptParser.T__8);
	        this.state = 341;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__0) | (1 << angelscriptParser.T__8) | (1 << angelscriptParser.T__12) | (1 << angelscriptParser.T__13) | (1 << angelscriptParser.T__16) | (1 << angelscriptParser.T__26))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.T__39 - 37)) | (1 << (angelscriptParser.T__40 - 37)) | (1 << (angelscriptParser.T__41 - 37)) | (1 << (angelscriptParser.T__42 - 37)) | (1 << (angelscriptParser.T__43 - 37)) | (1 << (angelscriptParser.T__44 - 37)) | (1 << (angelscriptParser.T__46 - 37)) | (1 << (angelscriptParser.T__47 - 37)) | (1 << (angelscriptParser.T__49 - 37)) | (1 << (angelscriptParser.T__55 - 37)) | (1 << (angelscriptParser.T__56 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.EXPRPREOP - 37)) | (1 << (angelscriptParser.VOID - 37)) | (1 << (angelscriptParser.LITERAL - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	            this.state = 339;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 337;
	                this.var_();
	                break;

	            case 2:
	                this.state = 338;
	                this.statement();
	                break;

	            }
	            this.state = 343;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 344;
	        this.match(angelscriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramlist() {
	    let localctx = new ParamlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, angelscriptParser.RULE_paramlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.match(angelscriptParser.T__26);
	        this.state = 372;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case angelscriptParser.VOID:
	        	this.state = 347;
	        	this.match(angelscriptParser.VOID);
	        	break;
	        case angelscriptParser.T__16:
	        case angelscriptParser.T__36:
	        case angelscriptParser.T__37:
	        case angelscriptParser.T__38:
	        case angelscriptParser.PRIMTYPE:
	        case angelscriptParser.IDENTIFIER:
	        	this.state = 348;
	        	this.type_();
	        	this.state = 349;
	        	this.typemod();
	        	this.state = 351;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if(_la===angelscriptParser.IDENTIFIER) {
	        	    this.state = 350;
	        	    this.match(angelscriptParser.IDENTIFIER);
	        	}

	        	this.state = 355;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if(_la===angelscriptParser.T__18) {
	        	    this.state = 353;
	        	    this.match(angelscriptParser.T__18);
	        	    this.state = 354;
	        	    this.expr();
	        	}

	        	this.state = 369;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	while(_la===angelscriptParser.T__7) {
	        	    this.state = 357;
	        	    this.match(angelscriptParser.T__7);
	        	    this.state = 358;
	        	    this.type_();
	        	    this.state = 359;
	        	    this.typemod();
	        	    this.state = 361;
	        	    this._errHandler.sync(this);
	        	    _la = this._input.LA(1);
	        	    if(_la===angelscriptParser.IDENTIFIER) {
	        	        this.state = 360;
	        	        this.match(angelscriptParser.IDENTIFIER);
	        	    }

	        	    this.state = 365;
	        	    this._errHandler.sync(this);
	        	    _la = this._input.LA(1);
	        	    if(_la===angelscriptParser.T__18) {
	        	        this.state = 363;
	        	        this.match(angelscriptParser.T__18);
	        	        this.state = 364;
	        	        this.expr();
	        	    }

	        	    this.state = 371;
	        	    this._errHandler.sync(this);
	        	    _la = this._input.LA(1);
	        	}
	        	break;
	        case angelscriptParser.T__27:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 374;
	        this.match(angelscriptParser.T__27);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typemod() {
	    let localctx = new TypemodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, angelscriptParser.RULE_typemod);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__14) {
	            this.state = 376;
	            this.match(angelscriptParser.T__14);
	            this.state = 378;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__28) | (1 << angelscriptParser.T__29) | (1 << angelscriptParser.T__30))) !== 0)) {
	                this.state = 377;
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__28) | (1 << angelscriptParser.T__29) | (1 << angelscriptParser.T__30))) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, angelscriptParser.RULE_type_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__16) {
	            this.state = 382;
	            this.match(angelscriptParser.T__16);
	        }

	        this.state = 385;
	        this.scope();
	        this.state = 386;
	        this.datatype();
	        this.state = 400;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__31) {
	            this.state = 387;
	            this.match(angelscriptParser.T__31);
	            this.state = 388;
	            this.type_();
	            this.state = 393;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===angelscriptParser.T__7) {
	                this.state = 389;
	                this.match(angelscriptParser.T__7);
	                this.state = 390;
	                this.type_();
	                this.state = 395;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 396;
	            this.match(angelscriptParser.T__32);
	            this.state = 402;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__33 || _la===angelscriptParser.T__35) {
	            this.state = 409;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case angelscriptParser.T__33:
	                this.state = 403;
	                this.match(angelscriptParser.T__33);
	                this.state = 404;
	                this.match(angelscriptParser.T__34);
	                break;
	            case angelscriptParser.T__35:
	                this.state = 405;
	                this.match(angelscriptParser.T__35);
	                this.state = 407;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===angelscriptParser.T__16) {
	                    this.state = 406;
	                    this.match(angelscriptParser.T__16);
	                }

	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 413;
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



	initlist() {
	    let localctx = new InitlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, angelscriptParser.RULE_initlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.match(angelscriptParser.T__8);
	        this.state = 417;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	        if(la_===1) {
	            this.state = 415;
	            this.assign();

	        } else if(la_===2) {
	            this.state = 416;
	            this.initlist();

	        }
	        this.state = 426;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__7) {
	            this.state = 419;
	            this.match(angelscriptParser.T__7);
	            this.state = 422;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	            if(la_===1) {
	                this.state = 420;
	                this.assign();

	            } else if(la_===2) {
	                this.state = 421;
	                this.initlist();

	            }
	            this.state = 428;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 429;
	        this.match(angelscriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scope() {
	    let localctx = new ScopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, angelscriptParser.RULE_scope);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__36) {
	            this.state = 431;
	            this.match(angelscriptParser.T__36);
	        }

	        this.state = 438;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,63,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 434;
	                this.match(angelscriptParser.IDENTIFIER);
	                this.state = 435;
	                this.match(angelscriptParser.T__36); 
	            }
	            this.state = 440;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,63,this._ctx);
	        }

	        this.state = 456;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
	        if(la_===1) {
	            this.state = 441;
	            this.match(angelscriptParser.IDENTIFIER);
	            this.state = 453;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===angelscriptParser.T__31) {
	                this.state = 442;
	                this.match(angelscriptParser.T__31);
	                this.state = 443;
	                this.type_();
	                this.state = 448;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===angelscriptParser.T__7) {
	                    this.state = 444;
	                    this.match(angelscriptParser.T__7);
	                    this.state = 445;
	                    this.type_();
	                    this.state = 450;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 451;
	                this.match(angelscriptParser.T__32);
	            }

	            this.state = 455;
	            this.match(angelscriptParser.T__36);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	datatype() {
	    let localctx = new DatatypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, angelscriptParser.RULE_datatype);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        _la = this._input.LA(1);
	        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (angelscriptParser.T__37 - 38)) | (1 << (angelscriptParser.T__38 - 38)) | (1 << (angelscriptParser.PRIMTYPE - 38)) | (1 << (angelscriptParser.IDENTIFIER - 38)))) !== 0))) {
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, angelscriptParser.RULE_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 471;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,67,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 460;
	            this.if_();
	            break;

	        case 2:
	            this.state = 461;
	            this.for_();
	            break;

	        case 3:
	            this.state = 462;
	            this.while_();
	            break;

	        case 4:
	            this.state = 463;
	            this.return_();
	            break;

	        case 5:
	            this.state = 464;
	            this.statblock();
	            break;

	        case 6:
	            this.state = 465;
	            this.break_();
	            break;

	        case 7:
	            this.state = 466;
	            this.continue_();
	            break;

	        case 8:
	            this.state = 467;
	            this.dowhile();
	            break;

	        case 9:
	            this.state = 468;
	            this.switch_();
	            break;

	        case 10:
	            this.state = 469;
	            this.exprstat();
	            break;

	        case 11:
	            this.state = 470;
	            this.try_();
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



	switch_() {
	    let localctx = new Switch_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, angelscriptParser.RULE_switch_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 473;
	        this.match(angelscriptParser.T__39);
	        this.state = 474;
	        this.match(angelscriptParser.T__26);
	        this.state = 475;
	        this.assign();
	        this.state = 476;
	        this.match(angelscriptParser.T__27);
	        this.state = 477;
	        this.match(angelscriptParser.T__8);
	        this.state = 481;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__50 || _la===angelscriptParser.T__51) {
	            this.state = 478;
	            this.case_();
	            this.state = 483;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 484;
	        this.match(angelscriptParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	break_() {
	    let localctx = new Break_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, angelscriptParser.RULE_break_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 486;
	        this.match(angelscriptParser.T__40);
	        this.state = 487;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_() {
	    let localctx = new For_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, angelscriptParser.RULE_for_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.match(angelscriptParser.T__41);
	        this.state = 490;
	        this.match(angelscriptParser.T__26);
	        this.state = 493;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 491;
	            this.var_();
	            break;

	        case 2:
	            this.state = 492;
	            this.exprstat();
	            break;

	        }
	        this.state = 495;
	        this.exprstat();
	        this.state = 504;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__8) | (1 << angelscriptParser.T__16) | (1 << angelscriptParser.T__26))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.T__55 - 37)) | (1 << (angelscriptParser.T__56 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.EXPRPREOP - 37)) | (1 << (angelscriptParser.VOID - 37)) | (1 << (angelscriptParser.LITERAL - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	            this.state = 496;
	            this.assign();
	            this.state = 501;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===angelscriptParser.T__7) {
	                this.state = 497;
	                this.match(angelscriptParser.T__7);
	                this.state = 498;
	                this.assign();
	                this.state = 503;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 506;
	        this.match(angelscriptParser.T__27);
	        this.state = 507;
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



	while_() {
	    let localctx = new While_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, angelscriptParser.RULE_while_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 509;
	        this.match(angelscriptParser.T__42);
	        this.state = 510;
	        this.match(angelscriptParser.T__26);
	        this.state = 511;
	        this.assign();
	        this.state = 512;
	        this.match(angelscriptParser.T__27);
	        this.state = 513;
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



	dowhile() {
	    let localctx = new DowhileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, angelscriptParser.RULE_dowhile);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 515;
	        this.match(angelscriptParser.T__43);
	        this.state = 516;
	        this.statement();
	        this.state = 517;
	        this.match(angelscriptParser.T__42);
	        this.state = 518;
	        this.match(angelscriptParser.T__26);
	        this.state = 519;
	        this.assign();
	        this.state = 520;
	        this.match(angelscriptParser.T__27);
	        this.state = 521;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_() {
	    let localctx = new If_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, angelscriptParser.RULE_if_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        this.match(angelscriptParser.T__44);
	        this.state = 524;
	        this.match(angelscriptParser.T__26);
	        this.state = 525;
	        this.assign();
	        this.state = 526;
	        this.match(angelscriptParser.T__27);
	        this.state = 527;
	        this.statement();
	        this.state = 530;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	        if(la_===1) {
	            this.state = 528;
	            this.match(angelscriptParser.T__45);
	            this.state = 529;
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



	continue_() {
	    let localctx = new Continue_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, angelscriptParser.RULE_continue_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 532;
	        this.match(angelscriptParser.T__46);
	        this.state = 533;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprstat() {
	    let localctx = new ExprstatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, angelscriptParser.RULE_exprstat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 536;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__8) | (1 << angelscriptParser.T__16) | (1 << angelscriptParser.T__26))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.T__55 - 37)) | (1 << (angelscriptParser.T__56 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.EXPRPREOP - 37)) | (1 << (angelscriptParser.VOID - 37)) | (1 << (angelscriptParser.LITERAL - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	            this.state = 535;
	            this.assign();
	        }

	        this.state = 538;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	try_() {
	    let localctx = new Try_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, angelscriptParser.RULE_try_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 540;
	        this.match(angelscriptParser.T__47);
	        this.state = 541;
	        this.statblock();
	        this.state = 542;
	        this.match(angelscriptParser.T__48);
	        this.state = 543;
	        this.statblock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_() {
	    let localctx = new Return_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, angelscriptParser.RULE_return_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 545;
	        this.match(angelscriptParser.T__49);
	        this.state = 547;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__8) | (1 << angelscriptParser.T__16) | (1 << angelscriptParser.T__26))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.T__55 - 37)) | (1 << (angelscriptParser.T__56 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.EXPRPREOP - 37)) | (1 << (angelscriptParser.VOID - 37)) | (1 << (angelscriptParser.LITERAL - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	            this.state = 546;
	            this.assign();
	        }

	        this.state = 549;
	        this.match(angelscriptParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	case_() {
	    let localctx = new Case_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, angelscriptParser.RULE_case_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 554;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case angelscriptParser.T__50:
	            this.state = 551;
	            this.match(angelscriptParser.T__50);
	            this.state = 552;
	            this.expr();
	            break;
	        case angelscriptParser.T__51:
	            this.state = 553;
	            this.match(angelscriptParser.T__51);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 556;
	        this.match(angelscriptParser.T__6);
	        this.state = 560;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << angelscriptParser.T__0) | (1 << angelscriptParser.T__8) | (1 << angelscriptParser.T__16) | (1 << angelscriptParser.T__26))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.T__39 - 37)) | (1 << (angelscriptParser.T__40 - 37)) | (1 << (angelscriptParser.T__41 - 37)) | (1 << (angelscriptParser.T__42 - 37)) | (1 << (angelscriptParser.T__43 - 37)) | (1 << (angelscriptParser.T__44 - 37)) | (1 << (angelscriptParser.T__46 - 37)) | (1 << (angelscriptParser.T__47 - 37)) | (1 << (angelscriptParser.T__49 - 37)) | (1 << (angelscriptParser.T__55 - 37)) | (1 << (angelscriptParser.T__56 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.EXPRPREOP - 37)) | (1 << (angelscriptParser.VOID - 37)) | (1 << (angelscriptParser.LITERAL - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	            this.state = 557;
	            this.statement();
	            this.state = 562;
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



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, angelscriptParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 563;
	        this.exprterm();
	        this.state = 569;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (angelscriptParser.BITOP - 58)) | (1 << (angelscriptParser.MATHOP - 58)) | (1 << (angelscriptParser.COMPOP - 58)) | (1 << (angelscriptParser.LOGICOP - 58)))) !== 0)) {
	            this.state = 564;
	            this.exprop();
	            this.state = 565;
	            this.exprterm();
	            this.state = 571;
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



	exprterm() {
	    let localctx = new ExprtermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, angelscriptParser.RULE_exprterm);
	    var _la = 0; // Token type
	    try {
	        this.state = 591;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,81,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 575;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===angelscriptParser.T__16 || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	                this.state = 572;
	                this.type_();
	                this.state = 573;
	                this.match(angelscriptParser.T__18);
	            }

	            this.state = 577;
	            this.initlist();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 581;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===angelscriptParser.EXPRPREOP) {
	                this.state = 578;
	                this.match(angelscriptParser.EXPRPREOP);
	                this.state = 583;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 584;
	            this.exprvalue();
	            this.state = 588;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(((((_la - 27)) & ~0x1f) == 0 && ((1 << (_la - 27)) & ((1 << (angelscriptParser.T__26 - 27)) | (1 << (angelscriptParser.T__33 - 27)) | (1 << (angelscriptParser.T__52 - 27)) | (1 << (angelscriptParser.T__53 - 27)) | (1 << (angelscriptParser.T__54 - 27)))) !== 0)) {
	                this.state = 585;
	                this.exprpostop();
	                this.state = 590;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	exprvalue() {
	    let localctx = new ExprvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, angelscriptParser.RULE_exprvalue);
	    try {
	        this.state = 604;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 593;
	            this.match(angelscriptParser.VOID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 594;
	            this.constructcall();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 595;
	            this.funccall();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 596;
	            this.varaccess();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 597;
	            this.cast();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 598;
	            this.match(angelscriptParser.LITERAL);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 599;
	            this.match(angelscriptParser.T__26);
	            this.state = 600;
	            this.assign();
	            this.state = 601;
	            this.match(angelscriptParser.T__27);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 603;
	            this.lambda_();
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



	constructcall() {
	    let localctx = new ConstructcallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, angelscriptParser.RULE_constructcall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 606;
	        this.type_();
	        this.state = 607;
	        this.arglist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprpostop() {
	    let localctx = new ExprpostopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, angelscriptParser.RULE_exprpostop);
	    var _la = 0; // Token type
	    try {
	        this.state = 636;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case angelscriptParser.T__52:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 609;
	            this.match(angelscriptParser.T__52);
	            this.state = 612;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,83,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 610;
	                this.funccall();
	                break;

	            case 2:
	                this.state = 611;
	                this.match(angelscriptParser.IDENTIFIER);
	                break;

	            }
	            break;
	        case angelscriptParser.T__33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 614;
	            this.match(angelscriptParser.T__33);
	            this.state = 617;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,84,this._ctx);
	            if(la_===1) {
	                this.state = 615;
	                this.match(angelscriptParser.IDENTIFIER);
	                this.state = 616;
	                this.match(angelscriptParser.T__6);

	            }
	            this.state = 619;
	            this.assign();
	            this.state = 628;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===angelscriptParser.T__7) {
	                this.state = 620;
	                this.match(angelscriptParser.T__7);
	                this.state = 622;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===angelscriptParser.IDENTIFIER) {
	                    this.state = 621;
	                    this.match(angelscriptParser.IDENTIFIER);
	                }

	                this.state = 624;
	                this.match(angelscriptParser.T__6);
	                this.state = 625;
	                this.assign();
	                this.state = 630;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 631;
	            this.match(angelscriptParser.T__34);
	            break;
	        case angelscriptParser.T__26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 633;
	            this.arglist();
	            break;
	        case angelscriptParser.T__53:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 634;
	            this.match(angelscriptParser.T__53);
	            break;
	        case angelscriptParser.T__54:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 635;
	            this.match(angelscriptParser.T__54);
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



	cast() {
	    let localctx = new CastContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, angelscriptParser.RULE_cast);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 638;
	        this.match(angelscriptParser.T__55);
	        this.state = 639;
	        this.match(angelscriptParser.T__31);
	        this.state = 640;
	        this.type_();
	        this.state = 641;
	        this.match(angelscriptParser.T__32);
	        this.state = 642;
	        this.match(angelscriptParser.T__26);
	        this.state = 643;
	        this.assign();
	        this.state = 644;
	        this.match(angelscriptParser.T__27);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lambda_() {
	    let localctx = new Lambda_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, angelscriptParser.RULE_lambda_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 646;
	        this.match(angelscriptParser.T__56);
	        this.state = 647;
	        this.match(angelscriptParser.T__26);
	        this.state = 666;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__16 || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (angelscriptParser.T__36 - 37)) | (1 << (angelscriptParser.T__37 - 37)) | (1 << (angelscriptParser.T__38 - 37)) | (1 << (angelscriptParser.PRIMTYPE - 37)) | (1 << (angelscriptParser.IDENTIFIER - 37)))) !== 0)) {
	            this.state = 651;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,88,this._ctx);
	            if(la_===1) {
	                this.state = 648;
	                this.type_();
	                this.state = 649;
	                this.typemod();

	            }
	            this.state = 653;
	            this.match(angelscriptParser.IDENTIFIER);
	            this.state = 663;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===angelscriptParser.T__7) {
	                this.state = 654;
	                this.match(angelscriptParser.T__7);
	                this.state = 658;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,89,this._ctx);
	                if(la_===1) {
	                    this.state = 655;
	                    this.type_();
	                    this.state = 656;
	                    this.typemod();

	                }
	                this.state = 660;
	                this.match(angelscriptParser.IDENTIFIER);
	                this.state = 665;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 668;
	        this.match(angelscriptParser.T__27);
	        this.state = 669;
	        this.statblock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funccall() {
	    let localctx = new FunccallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, angelscriptParser.RULE_funccall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 671;
	        this.scope();
	        this.state = 672;
	        this.match(angelscriptParser.IDENTIFIER);
	        this.state = 673;
	        this.arglist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varaccess() {
	    let localctx = new VaraccessContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, angelscriptParser.RULE_varaccess);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 675;
	        this.scope();
	        this.state = 676;
	        this.match(angelscriptParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arglist() {
	    let localctx = new ArglistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, angelscriptParser.RULE_arglist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 678;
	        this.match(angelscriptParser.T__26);
	        this.state = 681;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,92,this._ctx);
	        if(la_===1) {
	            this.state = 679;
	            this.match(angelscriptParser.IDENTIFIER);
	            this.state = 680;
	            this.match(angelscriptParser.T__6);

	        }
	        this.state = 683;
	        this.assign();
	        this.state = 692;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===angelscriptParser.T__7) {
	            this.state = 684;
	            this.match(angelscriptParser.T__7);
	            this.state = 687;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,93,this._ctx);
	            if(la_===1) {
	                this.state = 685;
	                this.match(angelscriptParser.IDENTIFIER);
	                this.state = 686;
	                this.match(angelscriptParser.T__6);

	            }
	            this.state = 689;
	            this.assign();
	            this.state = 694;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 695;
	        this.match(angelscriptParser.T__27);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assign() {
	    let localctx = new AssignContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, angelscriptParser.RULE_assign);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 697;
	        this.condition();
	        this.state = 700;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,95,this._ctx);
	        if(la_===1) {
	            this.state = 698;
	            this.match(angelscriptParser.ASSIGNOP);
	            this.state = 699;
	            this.assign();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, angelscriptParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 702;
	        this.expr();
	        this.state = 708;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===angelscriptParser.T__37) {
	            this.state = 703;
	            this.match(angelscriptParser.T__37);
	            this.state = 704;
	            this.assign();
	            this.state = 705;
	            this.match(angelscriptParser.T__6);
	            this.state = 706;
	            this.assign();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprop() {
	    let localctx = new ExpropContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, angelscriptParser.RULE_exprop);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 710;
	        _la = this._input.LA(1);
	        if(!(((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (angelscriptParser.BITOP - 58)) | (1 << (angelscriptParser.MATHOP - 58)) | (1 << (angelscriptParser.COMPOP - 58)) | (1 << (angelscriptParser.LOGICOP - 58)))) !== 0))) {
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

angelscriptParser.EOF = antlr4.Token.EOF;
angelscriptParser.T__0 = 1;
angelscriptParser.T__1 = 2;
angelscriptParser.T__2 = 3;
angelscriptParser.T__3 = 4;
angelscriptParser.T__4 = 5;
angelscriptParser.T__5 = 6;
angelscriptParser.T__6 = 7;
angelscriptParser.T__7 = 8;
angelscriptParser.T__8 = 9;
angelscriptParser.T__9 = 10;
angelscriptParser.T__10 = 11;
angelscriptParser.T__11 = 12;
angelscriptParser.T__12 = 13;
angelscriptParser.T__13 = 14;
angelscriptParser.T__14 = 15;
angelscriptParser.T__15 = 16;
angelscriptParser.T__16 = 17;
angelscriptParser.T__17 = 18;
angelscriptParser.T__18 = 19;
angelscriptParser.T__19 = 20;
angelscriptParser.T__20 = 21;
angelscriptParser.T__21 = 22;
angelscriptParser.T__22 = 23;
angelscriptParser.T__23 = 24;
angelscriptParser.T__24 = 25;
angelscriptParser.T__25 = 26;
angelscriptParser.T__26 = 27;
angelscriptParser.T__27 = 28;
angelscriptParser.T__28 = 29;
angelscriptParser.T__29 = 30;
angelscriptParser.T__30 = 31;
angelscriptParser.T__31 = 32;
angelscriptParser.T__32 = 33;
angelscriptParser.T__33 = 34;
angelscriptParser.T__34 = 35;
angelscriptParser.T__35 = 36;
angelscriptParser.T__36 = 37;
angelscriptParser.T__37 = 38;
angelscriptParser.T__38 = 39;
angelscriptParser.T__39 = 40;
angelscriptParser.T__40 = 41;
angelscriptParser.T__41 = 42;
angelscriptParser.T__42 = 43;
angelscriptParser.T__43 = 44;
angelscriptParser.T__44 = 45;
angelscriptParser.T__45 = 46;
angelscriptParser.T__46 = 47;
angelscriptParser.T__47 = 48;
angelscriptParser.T__48 = 49;
angelscriptParser.T__49 = 50;
angelscriptParser.T__50 = 51;
angelscriptParser.T__51 = 52;
angelscriptParser.T__52 = 53;
angelscriptParser.T__53 = 54;
angelscriptParser.T__54 = 55;
angelscriptParser.T__55 = 56;
angelscriptParser.T__56 = 57;
angelscriptParser.BITOP = 58;
angelscriptParser.MATHOP = 59;
angelscriptParser.COMPOP = 60;
angelscriptParser.LOGICOP = 61;
angelscriptParser.ASSIGNOP = 62;
angelscriptParser.PRIMTYPE = 63;
angelscriptParser.FUNCATTR = 64;
angelscriptParser.EXPRPREOP = 65;
angelscriptParser.VOID = 66;
angelscriptParser.LITERAL = 67;
angelscriptParser.IDENTIFIER = 68;
angelscriptParser.NUMBER = 69;
angelscriptParser.STRING = 70;
angelscriptParser.BITS = 71;
angelscriptParser.COMMENT = 72;
angelscriptParser.WS = 73;

angelscriptParser.RULE_script = 0;
angelscriptParser.RULE_class_ = 1;
angelscriptParser.RULE_typdef = 2;
angelscriptParser.RULE_namespace = 3;
angelscriptParser.RULE_func_ = 4;
angelscriptParser.RULE_interface_ = 5;
angelscriptParser.RULE_var_ = 6;
angelscriptParser.RULE_import_ = 7;
angelscriptParser.RULE_enum_ = 8;
angelscriptParser.RULE_funcdef = 9;
angelscriptParser.RULE_virtprop = 10;
angelscriptParser.RULE_mixin_ = 11;
angelscriptParser.RULE_intfmthd = 12;
angelscriptParser.RULE_statblock = 13;
angelscriptParser.RULE_paramlist = 14;
angelscriptParser.RULE_typemod = 15;
angelscriptParser.RULE_type_ = 16;
angelscriptParser.RULE_initlist = 17;
angelscriptParser.RULE_scope = 18;
angelscriptParser.RULE_datatype = 19;
angelscriptParser.RULE_statement = 20;
angelscriptParser.RULE_switch_ = 21;
angelscriptParser.RULE_break_ = 22;
angelscriptParser.RULE_for_ = 23;
angelscriptParser.RULE_while_ = 24;
angelscriptParser.RULE_dowhile = 25;
angelscriptParser.RULE_if_ = 26;
angelscriptParser.RULE_continue_ = 27;
angelscriptParser.RULE_exprstat = 28;
angelscriptParser.RULE_try_ = 29;
angelscriptParser.RULE_return_ = 30;
angelscriptParser.RULE_case_ = 31;
angelscriptParser.RULE_expr = 32;
angelscriptParser.RULE_exprterm = 33;
angelscriptParser.RULE_exprvalue = 34;
angelscriptParser.RULE_constructcall = 35;
angelscriptParser.RULE_exprpostop = 36;
angelscriptParser.RULE_cast = 37;
angelscriptParser.RULE_lambda_ = 38;
angelscriptParser.RULE_funccall = 39;
angelscriptParser.RULE_varaccess = 40;
angelscriptParser.RULE_arglist = 41;
angelscriptParser.RULE_assign = 42;
angelscriptParser.RULE_condition = 43;
angelscriptParser.RULE_exprop = 44;

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
        this.ruleIndex = angelscriptParser.RULE_script;
    }

	import_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Import_Context);
	    } else {
	        return this.getTypedRuleContext(Import_Context,i);
	    }
	};

	enum_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Enum_Context);
	    } else {
	        return this.getTypedRuleContext(Enum_Context,i);
	    }
	};

	typdef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypdefContext);
	    } else {
	        return this.getTypedRuleContext(TypdefContext,i);
	    }
	};

	class_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Class_Context);
	    } else {
	        return this.getTypedRuleContext(Class_Context,i);
	    }
	};

	mixin_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Mixin_Context);
	    } else {
	        return this.getTypedRuleContext(Mixin_Context,i);
	    }
	};

	interface_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Interface_Context);
	    } else {
	        return this.getTypedRuleContext(Interface_Context,i);
	    }
	};

	funcdef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncdefContext);
	    } else {
	        return this.getTypedRuleContext(FuncdefContext,i);
	    }
	};

	virtprop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VirtpropContext);
	    } else {
	        return this.getTypedRuleContext(VirtpropContext,i);
	    }
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

	func_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_Context);
	    } else {
	        return this.getTypedRuleContext(Func_Context,i);
	    }
	};

	namespace = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NamespaceContext);
	    } else {
	        return this.getTypedRuleContext(NamespaceContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitScript(this);
		}
	}


}



class Class_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_class_;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
	    }
	};


	virtprop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VirtpropContext);
	    } else {
	        return this.getTypedRuleContext(VirtpropContext,i);
	    }
	};

	func_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Func_Context);
	    } else {
	        return this.getTypedRuleContext(Func_Context,i);
	    }
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

	funcdef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncdefContext);
	    } else {
	        return this.getTypedRuleContext(FuncdefContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterClass_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitClass_(this);
		}
	}


}



class TypdefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_typdef;
    }

	PRIMTYPE() {
	    return this.getToken(angelscriptParser.PRIMTYPE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterTypdef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitTypdef(this);
		}
	}


}



class NamespaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_namespace;
    }

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	script() {
	    return this.getTypedRuleContext(ScriptContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterNamespace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitNamespace(this);
		}
	}


}



class Func_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_func_;
    }

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	paramlist() {
	    return this.getTypedRuleContext(ParamlistContext,0);
	};

	statblock() {
	    return this.getTypedRuleContext(StatblockContext,0);
	};

	FUNCATTR() {
	    return this.getToken(angelscriptParser.FUNCATTR, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterFunc_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitFunc_(this);
		}
	}


}



class Interface_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_interface_;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
	    }
	};


	virtprop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VirtpropContext);
	    } else {
	        return this.getTypedRuleContext(VirtpropContext,i);
	    }
	};

	intfmthd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntfmthdContext);
	    } else {
	        return this.getTypedRuleContext(IntfmthdContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterInterface_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitInterface_(this);
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
        this.ruleIndex = angelscriptParser.RULE_var_;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
	    }
	};


	arglist = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArglistContext);
	    } else {
	        return this.getTypedRuleContext(ArglistContext,i);
	    }
	};

	initlist = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InitlistContext);
	    } else {
	        return this.getTypedRuleContext(InitlistContext,i);
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
	    if(listener instanceof angelscriptListener ) {
	        listener.enterVar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitVar_(this);
		}
	}


}



class Import_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_import_;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	paramlist() {
	    return this.getTypedRuleContext(ParamlistContext,0);
	};

	FUNCATTR() {
	    return this.getToken(angelscriptParser.FUNCATTR, 0);
	};

	STRING() {
	    return this.getToken(angelscriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterImport_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitImport_(this);
		}
	}


}



class Enum_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_enum_;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
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
	    if(listener instanceof angelscriptListener ) {
	        listener.enterEnum_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitEnum_(this);
		}
	}


}



class FuncdefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_funcdef;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	paramlist() {
	    return this.getTypedRuleContext(ParamlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterFuncdef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitFuncdef(this);
		}
	}


}



class VirtpropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_virtprop;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	FUNCATTR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.FUNCATTR);
	    } else {
	        return this.getToken(angelscriptParser.FUNCATTR, i);
	    }
	};


	statblock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatblockContext);
	    } else {
	        return this.getTypedRuleContext(StatblockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterVirtprop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitVirtprop(this);
		}
	}


}



class Mixin_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_mixin_;
    }

	class_() {
	    return this.getTypedRuleContext(Class_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterMixin_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitMixin_(this);
		}
	}


}



class IntfmthdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_intfmthd;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	paramlist() {
	    return this.getTypedRuleContext(ParamlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterIntfmthd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitIntfmthd(this);
		}
	}


}



class StatblockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_statblock;
    }

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
	    if(listener instanceof angelscriptListener ) {
	        listener.enterStatblock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitStatblock(this);
		}
	}


}



class ParamlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_paramlist;
    }

	VOID() {
	    return this.getToken(angelscriptParser.VOID, 0);
	};

	type_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_Context);
	    } else {
	        return this.getTypedRuleContext(Type_Context,i);
	    }
	};

	typemod = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypemodContext);
	    } else {
	        return this.getTypedRuleContext(TypemodContext,i);
	    }
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
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
	    if(listener instanceof angelscriptListener ) {
	        listener.enterParamlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitParamlist(this);
		}
	}


}



class TypemodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_typemod;
    }


	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterTypemod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitTypemod(this);
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
        this.ruleIndex = angelscriptParser.RULE_type_;
    }

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	datatype() {
	    return this.getTypedRuleContext(DatatypeContext,0);
	};

	type_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_Context);
	    } else {
	        return this.getTypedRuleContext(Type_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitType_(this);
		}
	}


}



class InitlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_initlist;
    }

	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	initlist = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InitlistContext);
	    } else {
	        return this.getTypedRuleContext(InitlistContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterInitlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitInitlist(this);
		}
	}


}



class ScopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_scope;
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
	    }
	};


	type_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_Context);
	    } else {
	        return this.getTypedRuleContext(Type_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterScope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitScope(this);
		}
	}


}



class DatatypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_datatype;
    }

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	PRIMTYPE() {
	    return this.getToken(angelscriptParser.PRIMTYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterDatatype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitDatatype(this);
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
        this.ruleIndex = angelscriptParser.RULE_statement;
    }

	if_() {
	    return this.getTypedRuleContext(If_Context,0);
	};

	for_() {
	    return this.getTypedRuleContext(For_Context,0);
	};

	while_() {
	    return this.getTypedRuleContext(While_Context,0);
	};

	return_() {
	    return this.getTypedRuleContext(Return_Context,0);
	};

	statblock() {
	    return this.getTypedRuleContext(StatblockContext,0);
	};

	break_() {
	    return this.getTypedRuleContext(Break_Context,0);
	};

	continue_() {
	    return this.getTypedRuleContext(Continue_Context,0);
	};

	dowhile() {
	    return this.getTypedRuleContext(DowhileContext,0);
	};

	switch_() {
	    return this.getTypedRuleContext(Switch_Context,0);
	};

	exprstat() {
	    return this.getTypedRuleContext(ExprstatContext,0);
	};

	try_() {
	    return this.getTypedRuleContext(Try_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Switch_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_switch_;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	case_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Case_Context);
	    } else {
	        return this.getTypedRuleContext(Case_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterSwitch_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitSwitch_(this);
		}
	}


}



class Break_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_break_;
    }


	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterBreak_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitBreak_(this);
		}
	}


}



class For_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_for_;
    }

	exprstat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprstatContext);
	    } else {
	        return this.getTypedRuleContext(ExprstatContext,i);
	    }
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterFor_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitFor_(this);
		}
	}


}



class While_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_while_;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterWhile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitWhile_(this);
		}
	}


}



class DowhileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_dowhile;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterDowhile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitDowhile(this);
		}
	}


}



class If_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_if_;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
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
	    if(listener instanceof angelscriptListener ) {
	        listener.enterIf_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitIf_(this);
		}
	}


}



class Continue_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_continue_;
    }


	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterContinue_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitContinue_(this);
		}
	}


}



class ExprstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_exprstat;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterExprstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitExprstat(this);
		}
	}


}



class Try_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_try_;
    }

	statblock = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatblockContext);
	    } else {
	        return this.getTypedRuleContext(StatblockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterTry_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitTry_(this);
		}
	}


}



class Return_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_return_;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterReturn_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitReturn_(this);
		}
	}


}



class Case_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_case_;
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

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterCase_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitCase_(this);
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
        this.ruleIndex = angelscriptParser.RULE_expr;
    }

	exprterm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprtermContext);
	    } else {
	        return this.getTypedRuleContext(ExprtermContext,i);
	    }
	};

	exprop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpropContext);
	    } else {
	        return this.getTypedRuleContext(ExpropContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitExpr(this);
		}
	}


}



class ExprtermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_exprterm;
    }

	initlist() {
	    return this.getTypedRuleContext(InitlistContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	exprvalue() {
	    return this.getTypedRuleContext(ExprvalueContext,0);
	};

	EXPRPREOP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.EXPRPREOP);
	    } else {
	        return this.getToken(angelscriptParser.EXPRPREOP, i);
	    }
	};


	exprpostop = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprpostopContext);
	    } else {
	        return this.getTypedRuleContext(ExprpostopContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterExprterm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitExprterm(this);
		}
	}


}



class ExprvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_exprvalue;
    }

	VOID() {
	    return this.getToken(angelscriptParser.VOID, 0);
	};

	constructcall() {
	    return this.getTypedRuleContext(ConstructcallContext,0);
	};

	funccall() {
	    return this.getTypedRuleContext(FunccallContext,0);
	};

	varaccess() {
	    return this.getTypedRuleContext(VaraccessContext,0);
	};

	cast() {
	    return this.getTypedRuleContext(CastContext,0);
	};

	LITERAL() {
	    return this.getToken(angelscriptParser.LITERAL, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	lambda_() {
	    return this.getTypedRuleContext(Lambda_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterExprvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitExprvalue(this);
		}
	}


}



class ConstructcallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_constructcall;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterConstructcall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitConstructcall(this);
		}
	}


}



class ExprpostopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_exprpostop;
    }

	funccall() {
	    return this.getTypedRuleContext(FunccallContext,0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
	    }
	};


	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterExprpostop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitExprpostop(this);
		}
	}


}



class CastContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_cast;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterCast(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitCast(this);
		}
	}


}



class Lambda_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_lambda_;
    }

	statblock() {
	    return this.getTypedRuleContext(StatblockContext,0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
	    }
	};


	type_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Type_Context);
	    } else {
	        return this.getTypedRuleContext(Type_Context,i);
	    }
	};

	typemod = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypemodContext);
	    } else {
	        return this.getTypedRuleContext(TypemodContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterLambda_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitLambda_(this);
		}
	}


}



class FunccallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_funccall;
    }

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	arglist() {
	    return this.getTypedRuleContext(ArglistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterFunccall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitFunccall(this);
		}
	}


}



class VaraccessContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_varaccess;
    }

	scope() {
	    return this.getTypedRuleContext(ScopeContext,0);
	};

	IDENTIFIER() {
	    return this.getToken(angelscriptParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterVaraccess(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitVaraccess(this);
		}
	}


}



class ArglistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_arglist;
    }

	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(angelscriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(angelscriptParser.IDENTIFIER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterArglist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitArglist(this);
		}
	}


}



class AssignContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_assign;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	ASSIGNOP() {
	    return this.getToken(angelscriptParser.ASSIGNOP, 0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitAssign(this);
		}
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_condition;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	assign = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignContext);
	    } else {
	        return this.getTypedRuleContext(AssignContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitCondition(this);
		}
	}


}



class ExpropContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = angelscriptParser.RULE_exprop;
    }

	MATHOP() {
	    return this.getToken(angelscriptParser.MATHOP, 0);
	};

	COMPOP() {
	    return this.getToken(angelscriptParser.COMPOP, 0);
	};

	LOGICOP() {
	    return this.getToken(angelscriptParser.LOGICOP, 0);
	};

	BITOP() {
	    return this.getToken(angelscriptParser.BITOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.enterExprop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof angelscriptListener ) {
	        listener.exitExprop(this);
		}
	}


}




angelscriptParser.ScriptContext = ScriptContext; 
angelscriptParser.Class_Context = Class_Context; 
angelscriptParser.TypdefContext = TypdefContext; 
angelscriptParser.NamespaceContext = NamespaceContext; 
angelscriptParser.Func_Context = Func_Context; 
angelscriptParser.Interface_Context = Interface_Context; 
angelscriptParser.Var_Context = Var_Context; 
angelscriptParser.Import_Context = Import_Context; 
angelscriptParser.Enum_Context = Enum_Context; 
angelscriptParser.FuncdefContext = FuncdefContext; 
angelscriptParser.VirtpropContext = VirtpropContext; 
angelscriptParser.Mixin_Context = Mixin_Context; 
angelscriptParser.IntfmthdContext = IntfmthdContext; 
angelscriptParser.StatblockContext = StatblockContext; 
angelscriptParser.ParamlistContext = ParamlistContext; 
angelscriptParser.TypemodContext = TypemodContext; 
angelscriptParser.Type_Context = Type_Context; 
angelscriptParser.InitlistContext = InitlistContext; 
angelscriptParser.ScopeContext = ScopeContext; 
angelscriptParser.DatatypeContext = DatatypeContext; 
angelscriptParser.StatementContext = StatementContext; 
angelscriptParser.Switch_Context = Switch_Context; 
angelscriptParser.Break_Context = Break_Context; 
angelscriptParser.For_Context = For_Context; 
angelscriptParser.While_Context = While_Context; 
angelscriptParser.DowhileContext = DowhileContext; 
angelscriptParser.If_Context = If_Context; 
angelscriptParser.Continue_Context = Continue_Context; 
angelscriptParser.ExprstatContext = ExprstatContext; 
angelscriptParser.Try_Context = Try_Context; 
angelscriptParser.Return_Context = Return_Context; 
angelscriptParser.Case_Context = Case_Context; 
angelscriptParser.ExprContext = ExprContext; 
angelscriptParser.ExprtermContext = ExprtermContext; 
angelscriptParser.ExprvalueContext = ExprvalueContext; 
angelscriptParser.ConstructcallContext = ConstructcallContext; 
angelscriptParser.ExprpostopContext = ExprpostopContext; 
angelscriptParser.CastContext = CastContext; 
angelscriptParser.Lambda_Context = Lambda_Context; 
angelscriptParser.FunccallContext = FunccallContext; 
angelscriptParser.VaraccessContext = VaraccessContext; 
angelscriptParser.ArglistContext = ArglistContext; 
angelscriptParser.AssignContext = AssignContext; 
angelscriptParser.ConditionContext = ConditionContext; 
angelscriptParser.ExpropContext = ExpropContext; 
