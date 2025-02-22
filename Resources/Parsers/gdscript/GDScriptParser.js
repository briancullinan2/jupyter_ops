// Generated from ./gdscript/GDScriptParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import GDScriptParserListener from './GDScriptParserListener.js';
const serializedATN = [4,1,97,654,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,1,0,1,0,1,0,3,0,92,8,0,1,0,3,0,95,8,0,1,0,5,0,98,8,0,
10,0,12,0,101,9,0,1,0,1,0,1,1,1,1,1,1,1,1,5,1,109,8,1,10,1,12,1,112,9,1,
1,2,1,2,1,2,1,2,3,2,118,8,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,
130,8,3,1,4,3,4,133,8,4,1,4,3,4,136,8,4,1,4,1,4,1,4,1,4,3,4,142,8,4,1,4,
1,4,3,4,146,8,4,1,4,1,4,3,4,150,8,4,1,4,3,4,153,8,4,1,4,1,4,1,5,1,5,3,5,
159,8,5,1,5,1,5,3,5,163,8,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,171,8,6,10,6,12,
6,174,9,6,3,6,176,8,6,1,6,3,6,179,8,6,1,7,1,7,1,8,1,8,1,8,1,8,3,8,187,8,
8,1,8,1,8,1,8,1,8,1,9,1,9,1,9,3,9,196,8,9,1,9,1,9,1,10,1,10,1,10,1,10,5,
10,204,8,10,10,10,12,10,207,9,10,3,10,209,8,10,1,10,1,10,1,11,1,11,3,11,
215,8,11,1,11,1,11,1,11,1,11,3,11,221,8,11,1,11,1,11,1,11,1,11,3,11,227,
8,11,5,11,229,8,11,10,11,12,11,232,9,11,1,11,3,11,235,8,11,1,11,1,11,1,11,
1,12,3,12,241,8,12,1,12,3,12,244,8,12,1,12,1,12,1,12,1,12,3,12,250,8,12,
1,12,1,12,1,12,3,12,255,8,12,1,12,1,12,1,12,1,13,1,13,1,13,5,13,263,8,13,
10,13,12,13,266,9,13,1,14,3,14,269,8,14,1,14,1,14,1,14,3,14,274,8,14,1,14,
1,14,3,14,278,8,14,1,15,1,15,1,16,1,16,1,16,1,16,3,16,286,8,16,1,16,1,16,
1,16,1,16,3,16,292,8,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,5,17,302,
8,17,10,17,12,17,305,9,17,1,18,1,18,1,18,3,18,310,8,18,1,18,1,18,1,18,1,
18,1,18,1,18,3,18,318,8,18,1,18,4,18,321,8,18,11,18,12,18,322,1,18,1,18,
1,19,1,19,1,19,1,19,1,19,1,19,3,19,333,8,19,1,20,4,20,336,8,20,11,20,12,
20,337,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,3,21,355,8,21,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
1,23,5,23,368,8,23,10,23,12,23,371,9,23,1,23,1,23,1,23,3,23,376,8,23,1,24,
1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,4,27,401,8,27,11,27,12,27,402,1,28,
1,28,1,28,5,28,408,8,28,10,28,12,28,411,9,28,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,3,29,420,8,29,1,30,1,30,1,30,1,31,1,31,1,31,1,31,5,31,429,8,31,10,
31,12,31,432,9,31,1,31,3,31,435,8,31,3,31,437,8,31,1,31,1,31,1,32,1,32,3,
32,443,8,32,1,32,1,32,5,32,447,8,32,10,32,12,32,450,9,32,1,32,3,32,453,8,
32,1,32,1,32,1,33,1,33,1,33,3,33,460,8,33,1,34,1,34,1,34,1,34,1,34,1,34,
3,34,468,8,34,1,34,3,34,471,8,34,1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,
1,36,3,36,482,8,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,3,37,491,8,37,1,37,
1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,
39,1,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,5,41,
522,8,41,10,41,12,41,525,9,41,1,41,3,41,528,8,41,3,41,530,8,41,1,41,1,41,
1,41,1,41,1,41,5,41,537,8,41,10,41,12,41,540,9,41,1,41,3,41,543,8,41,3,41,
545,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,3,41,556,8,41,1,41,
1,41,1,41,1,41,1,41,1,41,5,41,564,8,41,10,41,12,41,567,9,41,3,41,569,8,41,
1,41,1,41,1,41,1,41,1,41,1,41,3,41,577,8,41,1,41,1,41,1,41,1,41,1,41,1,41,
1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,
1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,1,
41,3,41,629,8,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,5,41,638,8,41,10,41,
12,41,641,9,41,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,652,8,43,
1,43,0,1,82,44,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,0,13,
2,0,47,47,50,50,1,0,47,48,1,0,14,19,2,0,46,46,75,75,2,0,56,56,58,65,1,0,
90,91,2,0,39,39,78,78,1,0,92,94,1,0,88,89,1,0,79,84,2,0,38,38,77,77,2,0,
37,37,76,76,1,0,47,52,732,0,91,1,0,0,0,2,104,1,0,0,0,4,113,1,0,0,0,6,129,
1,0,0,0,8,132,1,0,0,0,10,156,1,0,0,0,12,164,1,0,0,0,14,180,1,0,0,0,16,182,
1,0,0,0,18,192,1,0,0,0,20,199,1,0,0,0,22,212,1,0,0,0,24,240,1,0,0,0,26,259,
1,0,0,0,28,268,1,0,0,0,30,279,1,0,0,0,32,281,1,0,0,0,34,298,1,0,0,0,36,306,
1,0,0,0,38,332,1,0,0,0,40,335,1,0,0,0,42,354,1,0,0,0,44,356,1,0,0,0,46,358,
1,0,0,0,48,377,1,0,0,0,50,382,1,0,0,0,52,389,1,0,0,0,54,400,1,0,0,0,56,404,
1,0,0,0,58,419,1,0,0,0,60,421,1,0,0,0,62,424,1,0,0,0,64,440,1,0,0,0,66,456,
1,0,0,0,68,470,1,0,0,0,70,472,1,0,0,0,72,477,1,0,0,0,74,485,1,0,0,0,76,495,
1,0,0,0,78,503,1,0,0,0,80,508,1,0,0,0,82,576,1,0,0,0,84,642,1,0,0,0,86,651,
1,0,0,0,88,89,3,2,1,0,89,90,5,46,0,0,90,92,1,0,0,0,91,88,1,0,0,0,91,92,1,
0,0,0,92,94,1,0,0,0,93,95,3,4,2,0,94,93,1,0,0,0,94,95,1,0,0,0,95,99,1,0,
0,0,96,98,3,6,3,0,97,96,1,0,0,0,98,101,1,0,0,0,99,97,1,0,0,0,99,100,1,0,
0,0,100,102,1,0,0,0,101,99,1,0,0,0,102,103,5,0,0,1,103,1,1,0,0,0,104,105,
5,3,0,0,105,110,7,0,0,0,106,107,5,53,0,0,107,109,5,47,0,0,108,106,1,0,0,
0,109,112,1,0,0,0,110,108,1,0,0,0,110,111,1,0,0,0,111,3,1,0,0,0,112,110,
1,0,0,0,113,114,5,4,0,0,114,117,5,47,0,0,115,116,5,54,0,0,116,118,5,50,0,
0,117,115,1,0,0,0,117,118,1,0,0,0,118,119,1,0,0,0,119,120,5,46,0,0,120,5,
1,0,0,0,121,130,3,8,4,0,122,130,3,16,8,0,123,130,3,18,9,0,124,130,3,22,11,
0,125,130,3,24,12,0,126,130,3,32,16,0,127,130,3,36,18,0,128,130,5,45,0,0,
129,121,1,0,0,0,129,122,1,0,0,0,129,123,1,0,0,0,129,124,1,0,0,0,129,125,
1,0,0,0,129,126,1,0,0,0,129,127,1,0,0,0,129,128,1,0,0,0,130,7,1,0,0,0,131,
133,5,5,0,0,132,131,1,0,0,0,132,133,1,0,0,0,133,135,1,0,0,0,134,136,3,12,
6,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,6,0,0,138,
149,5,47,0,0,139,140,5,55,0,0,140,142,3,14,7,0,141,139,1,0,0,0,141,142,1,
0,0,0,142,145,1,0,0,0,143,144,5,56,0,0,144,146,3,82,41,0,145,143,1,0,0,0,
145,146,1,0,0,0,146,150,1,0,0,0,147,148,5,57,0,0,148,150,3,82,41,0,149,141,
1,0,0,0,149,147,1,0,0,0,150,152,1,0,0,0,151,153,3,10,5,0,152,151,1,0,0,0,
152,153,1,0,0,0,153,154,1,0,0,0,154,155,5,46,0,0,155,9,1,0,0,0,156,158,5,
7,0,0,157,159,5,47,0,0,158,157,1,0,0,0,158,159,1,0,0,0,159,162,1,0,0,0,160,
161,5,54,0,0,161,163,5,47,0,0,162,160,1,0,0,0,162,163,1,0,0,0,163,11,1,0,
0,0,164,178,5,8,0,0,165,175,5,66,0,0,166,176,5,48,0,0,167,172,5,47,0,0,168,
169,5,54,0,0,169,171,3,84,42,0,170,168,1,0,0,0,171,174,1,0,0,0,172,170,1,
0,0,0,172,173,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,175,166,1,0,0,0,175,
167,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,179,5,67,0,0,178,165,1,0,
0,0,178,179,1,0,0,0,179,13,1,0,0,0,180,181,7,1,0,0,181,15,1,0,0,0,182,183,
5,9,0,0,183,186,5,47,0,0,184,185,5,55,0,0,185,187,3,14,7,0,186,184,1,0,0,
0,186,187,1,0,0,0,187,188,1,0,0,0,188,189,5,56,0,0,189,190,3,82,41,0,190,
191,5,46,0,0,191,17,1,0,0,0,192,193,5,10,0,0,193,195,5,47,0,0,194,196,3,
20,10,0,195,194,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,198,5,46,0,0,
198,19,1,0,0,0,199,208,5,66,0,0,200,205,5,47,0,0,201,202,5,54,0,0,202,204,
5,47,0,0,203,201,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,
206,209,1,0,0,0,207,205,1,0,0,0,208,200,1,0,0,0,208,209,1,0,0,0,209,210,
1,0,0,0,210,211,5,67,0,0,211,21,1,0,0,0,212,214,5,11,0,0,213,215,5,47,0,
0,214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,5,68,0,0,217,220,
5,47,0,0,218,219,5,56,0,0,219,221,3,82,41,0,220,218,1,0,0,0,220,221,1,0,
0,0,221,230,1,0,0,0,222,223,5,54,0,0,223,226,5,47,0,0,224,225,5,56,0,0,225,
227,3,82,41,0,226,224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,0,0,228,222,1,
0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,234,1,0,0,0,232,
230,1,0,0,0,233,235,5,54,0,0,234,233,1,0,0,0,234,235,1,0,0,0,235,236,1,0,
0,0,236,237,5,69,0,0,237,238,5,46,0,0,238,23,1,0,0,0,239,241,3,30,15,0,240,
239,1,0,0,0,240,241,1,0,0,0,241,243,1,0,0,0,242,244,5,12,0,0,243,242,1,0,
0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,5,13,0,0,246,247,5,47,0,0,247,
249,5,66,0,0,248,250,3,26,13,0,249,248,1,0,0,0,249,250,1,0,0,0,250,251,1,
0,0,0,251,254,5,67,0,0,252,253,5,70,0,0,253,255,3,14,7,0,254,252,1,0,0,0,
254,255,1,0,0,0,255,256,1,0,0,0,256,257,5,55,0,0,257,258,3,38,19,0,258,25,
1,0,0,0,259,264,3,28,14,0,260,261,5,54,0,0,261,263,3,28,14,0,262,260,1,0,
0,0,263,266,1,0,0,0,264,262,1,0,0,0,264,265,1,0,0,0,265,27,1,0,0,0,266,264,
1,0,0,0,267,269,5,6,0,0,268,267,1,0,0,0,268,269,1,0,0,0,269,270,1,0,0,0,
270,273,5,47,0,0,271,272,5,55,0,0,272,274,3,14,7,0,273,271,1,0,0,0,273,274,
1,0,0,0,274,277,1,0,0,0,275,276,5,56,0,0,276,278,3,82,41,0,277,275,1,0,0,
0,277,278,1,0,0,0,278,29,1,0,0,0,279,280,7,2,0,0,280,31,1,0,0,0,281,282,
5,13,0,0,282,283,5,47,0,0,283,285,5,66,0,0,284,286,3,26,13,0,285,284,1,0,
0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,288,5,67,0,0,288,289,5,53,0,0,289,
291,5,66,0,0,290,292,3,34,17,0,291,290,1,0,0,0,291,292,1,0,0,0,292,293,1,
0,0,0,293,294,5,67,0,0,294,295,1,0,0,0,295,296,5,55,0,0,296,297,3,38,19,
0,297,33,1,0,0,0,298,303,3,82,41,0,299,300,5,54,0,0,300,302,3,82,41,0,301,
299,1,0,0,0,302,305,1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,35,1,0,0,
0,305,303,1,0,0,0,306,307,5,20,0,0,307,309,5,47,0,0,308,310,3,2,1,0,309,
308,1,0,0,0,309,310,1,0,0,0,310,311,1,0,0,0,311,312,5,55,0,0,312,313,5,46,
0,0,313,317,5,1,0,0,314,315,3,2,1,0,315,316,5,46,0,0,316,318,1,0,0,0,317,
314,1,0,0,0,317,318,1,0,0,0,318,320,1,0,0,0,319,321,3,6,3,0,320,319,1,0,
0,0,321,322,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,
325,5,2,0,0,325,37,1,0,0,0,326,333,3,42,21,0,327,328,5,46,0,0,328,329,5,
1,0,0,329,330,3,40,20,0,330,331,5,2,0,0,331,333,1,0,0,0,332,326,1,0,0,0,
332,327,1,0,0,0,333,39,1,0,0,0,334,336,3,42,21,0,335,334,1,0,0,0,336,337,
1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,41,1,0,0,0,339,355,3,72,36,0,
340,355,3,46,23,0,341,355,3,50,25,0,342,355,3,48,24,0,343,355,3,52,26,0,
344,355,3,68,34,0,345,355,3,70,35,0,346,355,3,80,40,0,347,355,3,74,37,0,
348,355,3,76,38,0,349,355,3,78,39,0,350,351,5,21,0,0,351,355,3,44,22,0,352,
353,5,22,0,0,353,355,3,44,22,0,354,339,1,0,0,0,354,340,1,0,0,0,354,341,1,
0,0,0,354,342,1,0,0,0,354,343,1,0,0,0,354,344,1,0,0,0,354,345,1,0,0,0,354,
346,1,0,0,0,354,347,1,0,0,0,354,348,1,0,0,0,354,349,1,0,0,0,354,350,1,0,
0,0,354,352,1,0,0,0,355,43,1,0,0,0,356,357,7,3,0,0,357,45,1,0,0,0,358,359,
5,23,0,0,359,360,3,82,41,0,360,361,5,55,0,0,361,369,3,38,19,0,362,363,5,
24,0,0,363,364,3,82,41,0,364,365,5,55,0,0,365,366,3,38,19,0,366,368,1,0,
0,0,367,362,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,
375,1,0,0,0,371,369,1,0,0,0,372,373,5,36,0,0,373,374,5,55,0,0,374,376,3,
38,19,0,375,372,1,0,0,0,375,376,1,0,0,0,376,47,1,0,0,0,377,378,5,25,0,0,
378,379,3,82,41,0,379,380,5,55,0,0,380,381,3,38,19,0,381,49,1,0,0,0,382,
383,5,26,0,0,383,384,5,47,0,0,384,385,5,27,0,0,385,386,3,82,41,0,386,387,
5,55,0,0,387,388,3,38,19,0,388,51,1,0,0,0,389,390,5,28,0,0,390,391,3,82,
41,0,391,392,5,46,0,0,392,393,5,1,0,0,393,394,3,54,27,0,394,395,5,2,0,0,
395,53,1,0,0,0,396,397,3,56,28,0,397,398,5,55,0,0,398,399,3,38,19,0,399,
401,1,0,0,0,400,396,1,0,0,0,401,402,1,0,0,0,402,400,1,0,0,0,402,403,1,0,
0,0,403,55,1,0,0,0,404,409,3,58,29,0,405,406,5,54,0,0,406,408,3,58,29,0,
407,405,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,410,57,1,
0,0,0,411,409,1,0,0,0,412,420,3,84,42,0,413,420,5,48,0,0,414,420,5,49,0,
0,415,420,5,71,0,0,416,420,3,60,30,0,417,420,3,62,31,0,418,420,3,64,32,0,
419,412,1,0,0,0,419,413,1,0,0,0,419,414,1,0,0,0,419,415,1,0,0,0,419,416,
1,0,0,0,419,417,1,0,0,0,419,418,1,0,0,0,420,59,1,0,0,0,421,422,5,6,0,0,422,
423,5,47,0,0,423,61,1,0,0,0,424,436,5,72,0,0,425,430,3,58,29,0,426,427,5,
54,0,0,427,429,3,58,29,0,428,426,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,
430,431,1,0,0,0,431,434,1,0,0,0,432,430,1,0,0,0,433,435,5,74,0,0,434,433,
1,0,0,0,434,435,1,0,0,0,435,437,1,0,0,0,436,425,1,0,0,0,436,437,1,0,0,0,
437,438,1,0,0,0,438,439,5,73,0,0,439,63,1,0,0,0,440,442,5,68,0,0,441,443,
3,66,33,0,442,441,1,0,0,0,442,443,1,0,0,0,443,448,1,0,0,0,444,445,5,54,0,
0,445,447,3,66,33,0,446,444,1,0,0,0,447,450,1,0,0,0,448,446,1,0,0,0,448,
449,1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,451,453,5,74,0,0,452,451,1,0,
0,0,452,453,1,0,0,0,453,454,1,0,0,0,454,455,5,69,0,0,455,65,1,0,0,0,456,
459,5,50,0,0,457,458,5,55,0,0,458,460,3,58,29,0,459,457,1,0,0,0,459,460,
1,0,0,0,460,67,1,0,0,0,461,462,5,29,0,0,462,471,3,44,22,0,463,464,5,30,0,
0,464,471,3,44,22,0,465,467,5,31,0,0,466,468,3,82,41,0,467,466,1,0,0,0,467,
468,1,0,0,0,468,469,1,0,0,0,469,471,3,44,22,0,470,461,1,0,0,0,470,463,1,
0,0,0,470,465,1,0,0,0,471,69,1,0,0,0,472,473,3,82,41,0,473,474,7,4,0,0,474,
475,3,82,41,0,475,476,3,44,22,0,476,71,1,0,0,0,477,478,5,6,0,0,478,481,5,
47,0,0,479,480,5,56,0,0,480,482,3,82,41,0,481,479,1,0,0,0,481,482,1,0,0,
0,482,483,1,0,0,0,483,484,3,44,22,0,484,73,1,0,0,0,485,486,5,32,0,0,486,
487,5,66,0,0,487,490,3,82,41,0,488,489,5,54,0,0,489,491,5,50,0,0,490,488,
1,0,0,0,490,491,1,0,0,0,491,492,1,0,0,0,492,493,5,67,0,0,493,494,3,44,22,
0,494,75,1,0,0,0,495,496,5,33,0,0,496,497,5,66,0,0,497,498,3,82,41,0,498,
499,5,54,0,0,499,500,3,82,41,0,500,501,1,0,0,0,501,502,5,67,0,0,502,77,1,
0,0,0,503,504,5,34,0,0,504,505,5,66,0,0,505,506,5,49,0,0,506,507,5,67,0,
0,507,79,1,0,0,0,508,509,3,82,41,0,509,510,3,44,22,0,510,81,1,0,0,0,511,
512,6,41,-1,0,512,577,5,41,0,0,513,577,5,42,0,0,514,577,5,43,0,0,515,577,
5,44,0,0,516,577,3,84,42,0,517,529,5,72,0,0,518,523,3,82,41,0,519,520,5,
54,0,0,520,522,3,82,41,0,521,519,1,0,0,0,522,525,1,0,0,0,523,521,1,0,0,0,
523,524,1,0,0,0,524,527,1,0,0,0,525,523,1,0,0,0,526,528,5,54,0,0,527,526,
1,0,0,0,527,528,1,0,0,0,528,530,1,0,0,0,529,518,1,0,0,0,529,530,1,0,0,0,
530,531,1,0,0,0,531,577,5,73,0,0,532,544,5,68,0,0,533,538,3,86,43,0,534,
535,5,54,0,0,535,537,3,86,43,0,536,534,1,0,0,0,537,540,1,0,0,0,538,536,1,
0,0,0,538,539,1,0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,541,543,5,54,0,0,542,
541,1,0,0,0,542,543,1,0,0,0,543,545,1,0,0,0,544,533,1,0,0,0,544,545,1,0,
0,0,545,546,1,0,0,0,546,577,5,69,0,0,547,548,5,66,0,0,548,549,3,82,41,0,
549,550,5,67,0,0,550,577,1,0,0,0,551,552,5,53,0,0,552,553,5,47,0,0,553,555,
5,66,0,0,554,556,3,34,17,0,555,554,1,0,0,0,555,556,1,0,0,0,556,557,1,0,0,
0,557,577,5,67,0,0,558,568,5,96,0,0,559,569,5,50,0,0,560,565,5,47,0,0,561,
562,5,93,0,0,562,564,5,47,0,0,563,561,1,0,0,0,564,567,1,0,0,0,565,563,1,
0,0,0,565,566,1,0,0,0,566,569,1,0,0,0,567,565,1,0,0,0,568,559,1,0,0,0,568,
560,1,0,0,0,569,577,1,0,0,0,570,571,5,95,0,0,571,577,3,82,41,16,572,573,
7,5,0,0,573,577,3,82,41,15,574,575,7,6,0,0,575,577,3,82,41,5,576,511,1,0,
0,0,576,513,1,0,0,0,576,514,1,0,0,0,576,515,1,0,0,0,576,516,1,0,0,0,576,
517,1,0,0,0,576,532,1,0,0,0,576,547,1,0,0,0,576,551,1,0,0,0,576,558,1,0,
0,0,576,570,1,0,0,0,576,572,1,0,0,0,576,574,1,0,0,0,577,639,1,0,0,0,578,
579,10,14,0,0,579,580,7,7,0,0,580,638,3,82,41,15,581,582,10,13,0,0,582,583,
5,90,0,0,583,638,3,82,41,14,584,585,10,12,0,0,585,586,5,91,0,0,586,638,3,
82,41,13,587,588,10,11,0,0,588,589,7,8,0,0,589,638,3,82,41,12,590,591,10,
10,0,0,591,592,5,87,0,0,592,638,3,82,41,11,593,594,10,9,0,0,594,595,5,86,
0,0,595,638,3,82,41,10,596,597,10,8,0,0,597,598,5,85,0,0,598,638,3,82,41,
9,599,600,10,7,0,0,600,601,7,9,0,0,601,638,3,82,41,8,602,603,10,6,0,0,603,
604,5,27,0,0,604,638,3,82,41,7,605,606,10,4,0,0,606,607,7,10,0,0,607,638,
3,82,41,5,608,609,10,3,0,0,609,610,7,11,0,0,610,638,3,82,41,4,611,612,10,
2,0,0,612,613,5,23,0,0,613,614,3,82,41,0,614,615,5,36,0,0,615,616,3,82,41,
3,616,638,1,0,0,0,617,618,10,22,0,0,618,619,5,72,0,0,619,620,3,82,41,0,620,
621,5,73,0,0,621,638,1,0,0,0,622,623,10,21,0,0,623,624,5,53,0,0,624,638,
5,47,0,0,625,626,10,20,0,0,626,628,5,66,0,0,627,629,3,34,17,0,628,627,1,
0,0,0,628,629,1,0,0,0,629,630,1,0,0,0,630,638,5,67,0,0,631,632,10,17,0,0,
632,633,5,40,0,0,633,638,7,1,0,0,634,635,10,1,0,0,635,636,5,35,0,0,636,638,
3,14,7,0,637,578,1,0,0,0,637,581,1,0,0,0,637,584,1,0,0,0,637,587,1,0,0,0,
637,590,1,0,0,0,637,593,1,0,0,0,637,596,1,0,0,0,637,599,1,0,0,0,637,602,
1,0,0,0,637,605,1,0,0,0,637,608,1,0,0,0,637,611,1,0,0,0,637,617,1,0,0,0,
637,622,1,0,0,0,637,625,1,0,0,0,637,631,1,0,0,0,637,634,1,0,0,0,638,641,
1,0,0,0,639,637,1,0,0,0,639,640,1,0,0,0,640,83,1,0,0,0,641,639,1,0,0,0,642,
643,7,12,0,0,643,85,1,0,0,0,644,645,3,82,41,0,645,646,5,55,0,0,646,647,3,
82,41,0,647,652,1,0,0,0,648,649,5,47,0,0,649,650,5,56,0,0,650,652,3,82,41,
0,651,644,1,0,0,0,651,648,1,0,0,0,652,87,1,0,0,0,73,91,94,99,110,117,129,
132,135,141,145,149,152,158,162,172,175,178,186,195,205,208,214,220,226,
230,234,240,243,249,254,264,268,273,277,285,291,303,309,317,322,332,337,
354,369,375,402,409,419,430,434,436,442,448,452,459,467,470,481,490,523,
527,529,538,542,544,555,565,568,576,628,637,639,651];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GDScriptParser extends antlr4.Parser {

    static grammarFileName = "GDScriptParser.g4";
    static literalNames = [ null, null, null, "'extends'", "'class_name'", 
                            "'onready'", "'var'", "'setget'", "'export'", 
                            "'const'", "'signal'", "'enum'", "'static'", 
                            "'func'", "'remote'", "'master'", "'puppet'", 
                            "'remotesync'", "'mastersync'", "'puppetsync'", 
                            "'class'", "'breakpoint'", "'pass'", "'if'", 
                            "'elif'", "'while'", "'for'", "'in'", "'match'", 
                            "'continue'", "'break'", "'return'", "'assert'", 
                            "'yield'", "'preload'", "'as'", "'else'", "'or'", 
                            "'and'", "'not'", "'is'", "'true'", "'false'", 
                            "'null'", "'self'", "'tool'", null, null, null, 
                            null, null, null, null, "'.'", "','", "':'", 
                            "'='", "':='", "'+='", "'-='", "'*='", "'/='", 
                            "'%='", "'&='", "'|='", "'^='", "'('", "')'", 
                            "'{'", "'}'", "'->'", "'_'", "'['", "']'", "'..'", 
                            "';'", "'||'", "'&&'", "'!'", "'<'", "'>'", 
                            "'=='", "'>='", "'<='", "'!='", "'|'", "'^'", 
                            "'&'", "'<<'", "'>>'", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'~'", "'$'" ];
    static symbolicNames = [ null, "INDENT", "DEDENT", "EXTENDS", "CLASS_NAME", 
                             "ONREADY", "VAR", "SETGET", "EXPORT", "CONST", 
                             "SIGNAL", "ENUM", "STATIC", "FUNC", "REMOTE", 
                             "MASTER", "PUPPET", "REMOTESYNC", "MASTERSYNC", 
                             "PUPPETSYNC", "CLASS", "BREAKPOINT", "PASS", 
                             "IF", "ELIF", "WHILE", "FOR", "IN", "MATCH", 
                             "CONTINUE", "BREAK", "RETURN", "ASSERT", "YIELD", 
                             "PRELOAD", "AS", "ELSE", "OR", "AND", "NOT", 
                             "IS", "TRUE", "FALSE", "NULL", "SELF", "TOOL", 
                             "NEWLINE", "IDENTIFIER", "BUILTINTYPE", "CONSTANT", 
                             "STRING", "INTEGER", "FLOAT", "DOT", "COMMA", 
                             "COLON", "ASSIGN", "COLON_ASSIGN", "ADD_ASSIGN", 
                             "MINUS_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", 
                             "MOD_ASSIGN", "AND_ASSIGN", "OR_ASSIGN", "XOR_ASSIGN", 
                             "OPEN_PAREN", "CLOSE_PAREN", "OPEN_BRACE", 
                             "CLOSE_BRACE", "ARROW", "UNDERSCORE", "OPEN_BRACK", 
                             "CLOSE_BRACK", "DOTDOT", "SEMI_COLON", "LOGIC_OR", 
                             "LOGIC_AND", "LOGIC_NOT", "LESS_THAN", "GREATER_THAN", 
                             "EQUALS", "GT_EQ", "LT_EQ", "NOT_EQ", "OR_OP", 
                             "XOR", "AND_OP", "LEFT_SHIFT", "RIGHT_SHIFT", 
                             "ADD", "MINUS", "STAR", "DIV", "MOD", "NOT_OP", 
                             "DOLLAR", "SKIP_" ];
    static ruleNames = [ "program", "inheritance", "className", "topLevelDecl", 
                         "classVarDecl", "setget", "export", "typeHint", 
                         "constDecl", "signalDecl", "signalParList", "enumDecl", 
                         "methodDecl", "parList", "parameter", "rpc", "constructorDecl", 
                         "argList", "innerClass", "stmtOrSuite", "suite", 
                         "stmt", "stmtEnd", "ifStmt", "whileStmt", "forStmt", 
                         "matchStmt", "matchBlock", "patternList", "pattern", 
                         "bindingPattern", "arrayPattern", "dictPattern", 
                         "keyValuePattern", "flowStmt", "assignmentStmt", 
                         "varDeclStmt", "assertStmt", "yieldStmt", "preloadStmt", 
                         "exprStmt", "expression", "literal", "keyValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GDScriptParser.ruleNames;
        this.literalNames = GDScriptParser.literalNames;
        this.symbolicNames = GDScriptParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 41:
    	    		return this.expression_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 14);
    		case 1:
    			return this.precpred(this._ctx, 13);
    		case 2:
    			return this.precpred(this._ctx, 12);
    		case 3:
    			return this.precpred(this._ctx, 11);
    		case 4:
    			return this.precpred(this._ctx, 10);
    		case 5:
    			return this.precpred(this._ctx, 9);
    		case 6:
    			return this.precpred(this._ctx, 8);
    		case 7:
    			return this.precpred(this._ctx, 7);
    		case 8:
    			return this.precpred(this._ctx, 6);
    		case 9:
    			return this.precpred(this._ctx, 4);
    		case 10:
    			return this.precpred(this._ctx, 3);
    		case 11:
    			return this.precpred(this._ctx, 2);
    		case 12:
    			return this.precpred(this._ctx, 22);
    		case 13:
    			return this.precpred(this._ctx, 21);
    		case 14:
    			return this.precpred(this._ctx, 20);
    		case 15:
    			return this.precpred(this._ctx, 17);
    		case 16:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GDScriptParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.EXTENDS) {
	            this.state = 88;
	            this.inheritance();
	            this.state = 89;
	            this.match(GDScriptParser.NEWLINE);
	        }

	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.CLASS_NAME) {
	            this.state = 93;
	            this.className();
	        }

	        this.state = 99;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GDScriptParser.ONREADY) | (1 << GDScriptParser.VAR) | (1 << GDScriptParser.EXPORT) | (1 << GDScriptParser.CONST) | (1 << GDScriptParser.SIGNAL) | (1 << GDScriptParser.ENUM) | (1 << GDScriptParser.STATIC) | (1 << GDScriptParser.FUNC) | (1 << GDScriptParser.REMOTE) | (1 << GDScriptParser.MASTER) | (1 << GDScriptParser.PUPPET) | (1 << GDScriptParser.REMOTESYNC) | (1 << GDScriptParser.MASTERSYNC) | (1 << GDScriptParser.PUPPETSYNC) | (1 << GDScriptParser.CLASS))) !== 0) || _la===GDScriptParser.TOOL) {
	            this.state = 96;
	            this.topLevelDecl();
	            this.state = 101;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 102;
	        this.match(GDScriptParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, GDScriptParser.RULE_inheritance);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(GDScriptParser.EXTENDS);
	        this.state = 105;
	        _la = this._input.LA(1);
	        if(!(_la===GDScriptParser.IDENTIFIER || _la===GDScriptParser.STRING)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 110;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GDScriptParser.DOT) {
	            this.state = 106;
	            this.match(GDScriptParser.DOT);
	            this.state = 107;
	            this.match(GDScriptParser.IDENTIFIER);
	            this.state = 112;
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



	className() {
	    let localctx = new ClassNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GDScriptParser.RULE_className);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 113;
	        this.match(GDScriptParser.CLASS_NAME);
	        this.state = 114;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 117;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.COMMA) {
	            this.state = 115;
	            this.match(GDScriptParser.COMMA);
	            this.state = 116;
	            this.match(GDScriptParser.STRING);
	        }

	        this.state = 119;
	        this.match(GDScriptParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	topLevelDecl() {
	    let localctx = new TopLevelDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GDScriptParser.RULE_topLevelDecl);
	    try {
	        this.state = 129;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.classVarDecl();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 122;
	            this.constDecl();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 123;
	            this.signalDecl();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 124;
	            this.enumDecl();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 125;
	            this.methodDecl();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 126;
	            this.constructorDecl();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 127;
	            this.innerClass();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 128;
	            this.match(GDScriptParser.TOOL);
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



	classVarDecl() {
	    let localctx = new ClassVarDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GDScriptParser.RULE_classVarDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.ONREADY) {
	            this.state = 131;
	            this.match(GDScriptParser.ONREADY);
	        }

	        this.state = 135;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.EXPORT) {
	            this.state = 134;
	            this.export_();
	        }

	        this.state = 137;
	        this.match(GDScriptParser.VAR);
	        this.state = 138;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 149;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GDScriptParser.SETGET:
	        case GDScriptParser.NEWLINE:
	        case GDScriptParser.COLON:
	        case GDScriptParser.ASSIGN:
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GDScriptParser.COLON) {
	                this.state = 139;
	                this.match(GDScriptParser.COLON);
	                this.state = 140;
	                this.typeHint();
	            }

	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GDScriptParser.ASSIGN) {
	                this.state = 143;
	                this.match(GDScriptParser.ASSIGN);
	                this.state = 144;
	                this.expression(0);
	            }

	            break;
	        case GDScriptParser.COLON_ASSIGN:
	            this.state = 147;
	            this.match(GDScriptParser.COLON_ASSIGN);
	            this.state = 148;
	            this.expression(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.SETGET) {
	            this.state = 151;
	            this.setget();
	        }

	        this.state = 154;
	        this.match(GDScriptParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setget() {
	    let localctx = new SetgetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GDScriptParser.RULE_setget);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(GDScriptParser.SETGET);
	        this.state = 158;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.IDENTIFIER) {
	            this.state = 157;
	            this.match(GDScriptParser.IDENTIFIER);
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.COMMA) {
	            this.state = 160;
	            this.match(GDScriptParser.COMMA);
	            this.state = 161;
	            this.match(GDScriptParser.IDENTIFIER);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	export_() {
	    let localctx = new ExportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GDScriptParser.RULE_export);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(GDScriptParser.EXPORT);
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.OPEN_PAREN) {
	            this.state = 165;
	            this.match(GDScriptParser.OPEN_PAREN);
	            this.state = 175;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case GDScriptParser.BUILTINTYPE:
	            	this.state = 166;
	            	this.match(GDScriptParser.BUILTINTYPE);
	            	break;
	            case GDScriptParser.IDENTIFIER:
	            	this.state = 167;
	            	this.match(GDScriptParser.IDENTIFIER);
	            	this.state = 172;
	            	this._errHandler.sync(this);
	            	_la = this._input.LA(1);
	            	while(_la===GDScriptParser.COMMA) {
	            	    this.state = 168;
	            	    this.match(GDScriptParser.COMMA);
	            	    this.state = 169;
	            	    this.literal();
	            	    this.state = 174;
	            	    this._errHandler.sync(this);
	            	    _la = this._input.LA(1);
	            	}
	            	break;
	            case GDScriptParser.CLOSE_PAREN:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 177;
	            this.match(GDScriptParser.CLOSE_PAREN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeHint() {
	    let localctx = new TypeHintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GDScriptParser.RULE_typeHint);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        _la = this._input.LA(1);
	        if(!(_la===GDScriptParser.IDENTIFIER || _la===GDScriptParser.BUILTINTYPE)) {
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



	constDecl() {
	    let localctx = new ConstDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GDScriptParser.RULE_constDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(GDScriptParser.CONST);
	        this.state = 183;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.COLON) {
	            this.state = 184;
	            this.match(GDScriptParser.COLON);
	            this.state = 185;
	            this.typeHint();
	        }

	        this.state = 188;
	        this.match(GDScriptParser.ASSIGN);
	        this.state = 189;
	        this.expression(0);
	        this.state = 190;
	        this.match(GDScriptParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signalDecl() {
	    let localctx = new SignalDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GDScriptParser.RULE_signalDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(GDScriptParser.SIGNAL);
	        this.state = 193;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.OPEN_PAREN) {
	            this.state = 194;
	            this.signalParList();
	        }

	        this.state = 197;
	        this.match(GDScriptParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	signalParList() {
	    let localctx = new SignalParListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GDScriptParser.RULE_signalParList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(GDScriptParser.OPEN_PAREN);
	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.IDENTIFIER) {
	            this.state = 200;
	            this.match(GDScriptParser.IDENTIFIER);
	            this.state = 205;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===GDScriptParser.COMMA) {
	                this.state = 201;
	                this.match(GDScriptParser.COMMA);
	                this.state = 202;
	                this.match(GDScriptParser.IDENTIFIER);
	                this.state = 207;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 210;
	        this.match(GDScriptParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumDecl() {
	    let localctx = new EnumDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GDScriptParser.RULE_enumDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(GDScriptParser.ENUM);
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.IDENTIFIER) {
	            this.state = 213;
	            this.match(GDScriptParser.IDENTIFIER);
	        }

	        this.state = 216;
	        this.match(GDScriptParser.OPEN_BRACE);

	        this.state = 217;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.ASSIGN) {
	            this.state = 218;
	            this.match(GDScriptParser.ASSIGN);
	            this.state = 219;
	            this.expression(0);
	        }

	        this.state = 230;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 222;
	                this.match(GDScriptParser.COMMA);
	                this.state = 223;
	                this.match(GDScriptParser.IDENTIFIER);
	                this.state = 226;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===GDScriptParser.ASSIGN) {
	                    this.state = 224;
	                    this.match(GDScriptParser.ASSIGN);
	                    this.state = 225;
	                    this.expression(0);
	                }
	         
	            }
	            this.state = 232;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.COMMA) {
	            this.state = 233;
	            this.match(GDScriptParser.COMMA);
	        }

	        this.state = 236;
	        this.match(GDScriptParser.CLOSE_BRACE);
	        this.state = 237;
	        this.match(GDScriptParser.NEWLINE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	methodDecl() {
	    let localctx = new MethodDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GDScriptParser.RULE_methodDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GDScriptParser.REMOTE) | (1 << GDScriptParser.MASTER) | (1 << GDScriptParser.PUPPET) | (1 << GDScriptParser.REMOTESYNC) | (1 << GDScriptParser.MASTERSYNC) | (1 << GDScriptParser.PUPPETSYNC))) !== 0)) {
	            this.state = 239;
	            this.rpc();
	        }

	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.STATIC) {
	            this.state = 242;
	            this.match(GDScriptParser.STATIC);
	        }

	        this.state = 245;
	        this.match(GDScriptParser.FUNC);
	        this.state = 246;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 247;
	        this.match(GDScriptParser.OPEN_PAREN);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.VAR || _la===GDScriptParser.IDENTIFIER) {
	            this.state = 248;
	            this.parList();
	        }

	        this.state = 251;
	        this.match(GDScriptParser.CLOSE_PAREN);
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.ARROW) {
	            this.state = 252;
	            this.match(GDScriptParser.ARROW);
	            this.state = 253;
	            this.typeHint();
	        }

	        this.state = 256;
	        this.match(GDScriptParser.COLON);
	        this.state = 257;
	        this.stmtOrSuite();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parList() {
	    let localctx = new ParListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GDScriptParser.RULE_parList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.parameter();
	        this.state = 264;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GDScriptParser.COMMA) {
	            this.state = 260;
	            this.match(GDScriptParser.COMMA);
	            this.state = 261;
	            this.parameter();
	            this.state = 266;
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GDScriptParser.RULE_parameter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.VAR) {
	            this.state = 267;
	            this.match(GDScriptParser.VAR);
	        }

	        this.state = 270;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.COLON) {
	            this.state = 271;
	            this.match(GDScriptParser.COLON);
	            this.state = 272;
	            this.typeHint();
	        }

	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.ASSIGN) {
	            this.state = 275;
	            this.match(GDScriptParser.ASSIGN);
	            this.state = 276;
	            this.expression(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rpc() {
	    let localctx = new RpcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GDScriptParser.RULE_rpc);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GDScriptParser.REMOTE) | (1 << GDScriptParser.MASTER) | (1 << GDScriptParser.PUPPET) | (1 << GDScriptParser.REMOTESYNC) | (1 << GDScriptParser.MASTERSYNC) | (1 << GDScriptParser.PUPPETSYNC))) !== 0))) {
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



	constructorDecl() {
	    let localctx = new ConstructorDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, GDScriptParser.RULE_constructorDecl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(GDScriptParser.FUNC);
	        this.state = 282;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 283;
	        this.match(GDScriptParser.OPEN_PAREN);
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.VAR || _la===GDScriptParser.IDENTIFIER) {
	            this.state = 284;
	            this.parList();
	        }

	        this.state = 287;
	        this.match(GDScriptParser.CLOSE_PAREN);

	        this.state = 288;
	        this.match(GDScriptParser.DOT);
	        this.state = 289;
	        this.match(GDScriptParser.OPEN_PAREN);
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (GDScriptParser.NOT - 39)) | (1 << (GDScriptParser.TRUE - 39)) | (1 << (GDScriptParser.FALSE - 39)) | (1 << (GDScriptParser.NULL - 39)) | (1 << (GDScriptParser.SELF - 39)) | (1 << (GDScriptParser.IDENTIFIER - 39)) | (1 << (GDScriptParser.BUILTINTYPE - 39)) | (1 << (GDScriptParser.CONSTANT - 39)) | (1 << (GDScriptParser.STRING - 39)) | (1 << (GDScriptParser.INTEGER - 39)) | (1 << (GDScriptParser.FLOAT - 39)) | (1 << (GDScriptParser.DOT - 39)) | (1 << (GDScriptParser.OPEN_PAREN - 39)) | (1 << (GDScriptParser.OPEN_BRACE - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (GDScriptParser.OPEN_BRACK - 72)) | (1 << (GDScriptParser.LOGIC_NOT - 72)) | (1 << (GDScriptParser.ADD - 72)) | (1 << (GDScriptParser.MINUS - 72)) | (1 << (GDScriptParser.NOT_OP - 72)) | (1 << (GDScriptParser.DOLLAR - 72)))) !== 0)) {
	            this.state = 290;
	            this.argList();
	        }

	        this.state = 293;
	        this.match(GDScriptParser.CLOSE_PAREN);
	        this.state = 295;
	        this.match(GDScriptParser.COLON);
	        this.state = 296;
	        this.stmtOrSuite();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 34, GDScriptParser.RULE_argList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this.expression(0);
	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GDScriptParser.COMMA) {
	            this.state = 299;
	            this.match(GDScriptParser.COMMA);
	            this.state = 300;
	            this.expression(0);
	            this.state = 305;
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



	innerClass() {
	    let localctx = new InnerClassContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GDScriptParser.RULE_innerClass);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(GDScriptParser.CLASS);
	        this.state = 307;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 309;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.EXTENDS) {
	            this.state = 308;
	            this.inheritance();
	        }

	        this.state = 311;
	        this.match(GDScriptParser.COLON);
	        this.state = 312;
	        this.match(GDScriptParser.NEWLINE);
	        this.state = 313;
	        this.match(GDScriptParser.INDENT);
	        this.state = 317;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.EXTENDS) {
	            this.state = 314;
	            this.inheritance();
	            this.state = 315;
	            this.match(GDScriptParser.NEWLINE);
	        }

	        this.state = 320; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 319;
	            this.topLevelDecl();
	            this.state = 322; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GDScriptParser.ONREADY) | (1 << GDScriptParser.VAR) | (1 << GDScriptParser.EXPORT) | (1 << GDScriptParser.CONST) | (1 << GDScriptParser.SIGNAL) | (1 << GDScriptParser.ENUM) | (1 << GDScriptParser.STATIC) | (1 << GDScriptParser.FUNC) | (1 << GDScriptParser.REMOTE) | (1 << GDScriptParser.MASTER) | (1 << GDScriptParser.PUPPET) | (1 << GDScriptParser.REMOTESYNC) | (1 << GDScriptParser.MASTERSYNC) | (1 << GDScriptParser.PUPPETSYNC) | (1 << GDScriptParser.CLASS))) !== 0) || _la===GDScriptParser.TOOL);
	        this.state = 324;
	        this.match(GDScriptParser.DEDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmtOrSuite() {
	    let localctx = new StmtOrSuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GDScriptParser.RULE_stmtOrSuite);
	    try {
	        this.state = 332;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GDScriptParser.VAR:
	        case GDScriptParser.BREAKPOINT:
	        case GDScriptParser.PASS:
	        case GDScriptParser.IF:
	        case GDScriptParser.WHILE:
	        case GDScriptParser.FOR:
	        case GDScriptParser.MATCH:
	        case GDScriptParser.CONTINUE:
	        case GDScriptParser.BREAK:
	        case GDScriptParser.RETURN:
	        case GDScriptParser.ASSERT:
	        case GDScriptParser.YIELD:
	        case GDScriptParser.PRELOAD:
	        case GDScriptParser.NOT:
	        case GDScriptParser.TRUE:
	        case GDScriptParser.FALSE:
	        case GDScriptParser.NULL:
	        case GDScriptParser.SELF:
	        case GDScriptParser.IDENTIFIER:
	        case GDScriptParser.BUILTINTYPE:
	        case GDScriptParser.CONSTANT:
	        case GDScriptParser.STRING:
	        case GDScriptParser.INTEGER:
	        case GDScriptParser.FLOAT:
	        case GDScriptParser.DOT:
	        case GDScriptParser.OPEN_PAREN:
	        case GDScriptParser.OPEN_BRACE:
	        case GDScriptParser.OPEN_BRACK:
	        case GDScriptParser.LOGIC_NOT:
	        case GDScriptParser.ADD:
	        case GDScriptParser.MINUS:
	        case GDScriptParser.NOT_OP:
	        case GDScriptParser.DOLLAR:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 326;
	            this.stmt();
	            break;
	        case GDScriptParser.NEWLINE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 327;
	            this.match(GDScriptParser.NEWLINE);
	            this.state = 328;
	            this.match(GDScriptParser.INDENT);
	            this.state = 329;
	            this.suite();
	            this.state = 330;
	            this.match(GDScriptParser.DEDENT);
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



	suite() {
	    let localctx = new SuiteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GDScriptParser.RULE_suite);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 334;
	            this.stmt();
	            this.state = 337; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << GDScriptParser.VAR) | (1 << GDScriptParser.BREAKPOINT) | (1 << GDScriptParser.PASS) | (1 << GDScriptParser.IF) | (1 << GDScriptParser.WHILE) | (1 << GDScriptParser.FOR) | (1 << GDScriptParser.MATCH) | (1 << GDScriptParser.CONTINUE) | (1 << GDScriptParser.BREAK) | (1 << GDScriptParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (GDScriptParser.ASSERT - 32)) | (1 << (GDScriptParser.YIELD - 32)) | (1 << (GDScriptParser.PRELOAD - 32)) | (1 << (GDScriptParser.NOT - 32)) | (1 << (GDScriptParser.TRUE - 32)) | (1 << (GDScriptParser.FALSE - 32)) | (1 << (GDScriptParser.NULL - 32)) | (1 << (GDScriptParser.SELF - 32)) | (1 << (GDScriptParser.IDENTIFIER - 32)) | (1 << (GDScriptParser.BUILTINTYPE - 32)) | (1 << (GDScriptParser.CONSTANT - 32)) | (1 << (GDScriptParser.STRING - 32)) | (1 << (GDScriptParser.INTEGER - 32)) | (1 << (GDScriptParser.FLOAT - 32)) | (1 << (GDScriptParser.DOT - 32)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (GDScriptParser.OPEN_PAREN - 66)) | (1 << (GDScriptParser.OPEN_BRACE - 66)) | (1 << (GDScriptParser.OPEN_BRACK - 66)) | (1 << (GDScriptParser.LOGIC_NOT - 66)) | (1 << (GDScriptParser.ADD - 66)) | (1 << (GDScriptParser.MINUS - 66)) | (1 << (GDScriptParser.NOT_OP - 66)) | (1 << (GDScriptParser.DOLLAR - 66)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stmt() {
	    let localctx = new StmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, GDScriptParser.RULE_stmt);
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 339;
	            this.varDeclStmt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 340;
	            this.ifStmt();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 341;
	            this.forStmt();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 342;
	            this.whileStmt();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 343;
	            this.matchStmt();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 344;
	            this.flowStmt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 345;
	            this.assignmentStmt();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 346;
	            this.exprStmt();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 347;
	            this.assertStmt();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 348;
	            this.yieldStmt();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 349;
	            this.preloadStmt();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 350;
	            this.match(GDScriptParser.BREAKPOINT);
	            this.state = 351;
	            this.stmtEnd();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 352;
	            this.match(GDScriptParser.PASS);
	            this.state = 353;
	            this.stmtEnd();
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



	stmtEnd() {
	    let localctx = new StmtEndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, GDScriptParser.RULE_stmtEnd);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        _la = this._input.LA(1);
	        if(!(_la===GDScriptParser.NEWLINE || _la===GDScriptParser.SEMI_COLON)) {
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



	ifStmt() {
	    let localctx = new IfStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, GDScriptParser.RULE_ifStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(GDScriptParser.IF);
	        this.state = 359;
	        this.expression(0);
	        this.state = 360;
	        this.match(GDScriptParser.COLON);
	        this.state = 361;
	        this.stmtOrSuite();
	        this.state = 369;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 362;
	                this.match(GDScriptParser.ELIF);
	                this.state = 363;
	                this.expression(0);
	                this.state = 364;
	                this.match(GDScriptParser.COLON);
	                this.state = 365;
	                this.stmtOrSuite(); 
	            }
	            this.state = 371;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
	        }

	        this.state = 375;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        if(la_===1) {
	            this.state = 372;
	            this.match(GDScriptParser.ELSE);
	            this.state = 373;
	            this.match(GDScriptParser.COLON);
	            this.state = 374;
	            this.stmtOrSuite();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStmt() {
	    let localctx = new WhileStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GDScriptParser.RULE_whileStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(GDScriptParser.WHILE);
	        this.state = 378;
	        this.expression(0);
	        this.state = 379;
	        this.match(GDScriptParser.COLON);
	        this.state = 380;
	        this.stmtOrSuite();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forStmt() {
	    let localctx = new ForStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, GDScriptParser.RULE_forStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.match(GDScriptParser.FOR);
	        this.state = 383;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 384;
	        this.match(GDScriptParser.IN);
	        this.state = 385;
	        this.expression(0);
	        this.state = 386;
	        this.match(GDScriptParser.COLON);
	        this.state = 387;
	        this.stmtOrSuite();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchStmt() {
	    let localctx = new MatchStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, GDScriptParser.RULE_matchStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(GDScriptParser.MATCH);
	        this.state = 390;
	        this.expression(0);
	        this.state = 391;
	        this.match(GDScriptParser.NEWLINE);
	        this.state = 392;
	        this.match(GDScriptParser.INDENT);
	        this.state = 393;
	        this.matchBlock();
	        this.state = 394;
	        this.match(GDScriptParser.DEDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchBlock() {
	    let localctx = new MatchBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, GDScriptParser.RULE_matchBlock);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 396;
	            this.patternList();
	            this.state = 397;
	            this.match(GDScriptParser.COLON);
	            this.state = 398;
	            this.stmtOrSuite();
	            this.state = 402; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===GDScriptParser.VAR || ((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (GDScriptParser.IDENTIFIER - 47)) | (1 << (GDScriptParser.BUILTINTYPE - 47)) | (1 << (GDScriptParser.CONSTANT - 47)) | (1 << (GDScriptParser.STRING - 47)) | (1 << (GDScriptParser.INTEGER - 47)) | (1 << (GDScriptParser.FLOAT - 47)) | (1 << (GDScriptParser.OPEN_BRACE - 47)) | (1 << (GDScriptParser.UNDERSCORE - 47)) | (1 << (GDScriptParser.OPEN_BRACK - 47)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	patternList() {
	    let localctx = new PatternListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, GDScriptParser.RULE_patternList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.pattern();
	        this.state = 409;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GDScriptParser.COMMA) {
	            this.state = 405;
	            this.match(GDScriptParser.COMMA);
	            this.state = 406;
	            this.pattern();
	            this.state = 411;
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



	pattern() {
	    let localctx = new PatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, GDScriptParser.RULE_pattern);
	    try {
	        this.state = 419;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 412;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 413;
	            this.match(GDScriptParser.BUILTINTYPE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 414;
	            this.match(GDScriptParser.CONSTANT);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 415;
	            this.match(GDScriptParser.UNDERSCORE);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 416;
	            this.bindingPattern();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 417;
	            this.arrayPattern();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 418;
	            this.dictPattern();
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



	bindingPattern() {
	    let localctx = new BindingPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, GDScriptParser.RULE_bindingPattern);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.match(GDScriptParser.VAR);
	        this.state = 422;
	        this.match(GDScriptParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayPattern() {
	    let localctx = new ArrayPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, GDScriptParser.RULE_arrayPattern);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this.match(GDScriptParser.OPEN_BRACK);
	        this.state = 436;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.VAR || ((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (GDScriptParser.IDENTIFIER - 47)) | (1 << (GDScriptParser.BUILTINTYPE - 47)) | (1 << (GDScriptParser.CONSTANT - 47)) | (1 << (GDScriptParser.STRING - 47)) | (1 << (GDScriptParser.INTEGER - 47)) | (1 << (GDScriptParser.FLOAT - 47)) | (1 << (GDScriptParser.OPEN_BRACE - 47)) | (1 << (GDScriptParser.UNDERSCORE - 47)) | (1 << (GDScriptParser.OPEN_BRACK - 47)))) !== 0)) {
	            this.state = 425;
	            this.pattern();
	            this.state = 430;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===GDScriptParser.COMMA) {
	                this.state = 426;
	                this.match(GDScriptParser.COMMA);
	                this.state = 427;
	                this.pattern();
	                this.state = 432;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 434;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===GDScriptParser.DOTDOT) {
	                this.state = 433;
	                this.match(GDScriptParser.DOTDOT);
	            }

	        }

	        this.state = 438;
	        this.match(GDScriptParser.CLOSE_BRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dictPattern() {
	    let localctx = new DictPatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, GDScriptParser.RULE_dictPattern);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(GDScriptParser.OPEN_BRACE);
	        this.state = 442;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.STRING) {
	            this.state = 441;
	            this.keyValuePattern();
	        }

	        this.state = 448;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===GDScriptParser.COMMA) {
	            this.state = 444;
	            this.match(GDScriptParser.COMMA);
	            this.state = 445;
	            this.keyValuePattern();
	            this.state = 450;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 452;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.DOTDOT) {
	            this.state = 451;
	            this.match(GDScriptParser.DOTDOT);
	        }

	        this.state = 454;
	        this.match(GDScriptParser.CLOSE_BRACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyValuePattern() {
	    let localctx = new KeyValuePatternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, GDScriptParser.RULE_keyValuePattern);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 456;
	        this.match(GDScriptParser.STRING);
	        this.state = 459;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.COLON) {
	            this.state = 457;
	            this.match(GDScriptParser.COLON);
	            this.state = 458;
	            this.pattern();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flowStmt() {
	    let localctx = new FlowStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, GDScriptParser.RULE_flowStmt);
	    var _la = 0; // Token type
	    try {
	        this.state = 470;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GDScriptParser.CONTINUE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 461;
	            this.match(GDScriptParser.CONTINUE);
	            this.state = 462;
	            this.stmtEnd();
	            break;
	        case GDScriptParser.BREAK:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 463;
	            this.match(GDScriptParser.BREAK);
	            this.state = 464;
	            this.stmtEnd();
	            break;
	        case GDScriptParser.RETURN:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 465;
	            this.match(GDScriptParser.RETURN);
	            this.state = 467;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (GDScriptParser.NOT - 39)) | (1 << (GDScriptParser.TRUE - 39)) | (1 << (GDScriptParser.FALSE - 39)) | (1 << (GDScriptParser.NULL - 39)) | (1 << (GDScriptParser.SELF - 39)) | (1 << (GDScriptParser.IDENTIFIER - 39)) | (1 << (GDScriptParser.BUILTINTYPE - 39)) | (1 << (GDScriptParser.CONSTANT - 39)) | (1 << (GDScriptParser.STRING - 39)) | (1 << (GDScriptParser.INTEGER - 39)) | (1 << (GDScriptParser.FLOAT - 39)) | (1 << (GDScriptParser.DOT - 39)) | (1 << (GDScriptParser.OPEN_PAREN - 39)) | (1 << (GDScriptParser.OPEN_BRACE - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (GDScriptParser.OPEN_BRACK - 72)) | (1 << (GDScriptParser.LOGIC_NOT - 72)) | (1 << (GDScriptParser.ADD - 72)) | (1 << (GDScriptParser.MINUS - 72)) | (1 << (GDScriptParser.NOT_OP - 72)) | (1 << (GDScriptParser.DOLLAR - 72)))) !== 0)) {
	                this.state = 466;
	                this.expression(0);
	            }

	            this.state = 469;
	            this.stmtEnd();
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



	assignmentStmt() {
	    let localctx = new AssignmentStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, GDScriptParser.RULE_assignmentStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 472;
	        this.expression(0);
	        this.state = 473;
	        _la = this._input.LA(1);
	        if(!(((((_la - 56)) & ~0x1f) == 0 && ((1 << (_la - 56)) & ((1 << (GDScriptParser.ASSIGN - 56)) | (1 << (GDScriptParser.ADD_ASSIGN - 56)) | (1 << (GDScriptParser.MINUS_ASSIGN - 56)) | (1 << (GDScriptParser.MUL_ASSIGN - 56)) | (1 << (GDScriptParser.DIV_ASSIGN - 56)) | (1 << (GDScriptParser.MOD_ASSIGN - 56)) | (1 << (GDScriptParser.AND_ASSIGN - 56)) | (1 << (GDScriptParser.OR_ASSIGN - 56)) | (1 << (GDScriptParser.XOR_ASSIGN - 56)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 474;
	        this.expression(0);
	        this.state = 475;
	        this.stmtEnd();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varDeclStmt() {
	    let localctx = new VarDeclStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, GDScriptParser.RULE_varDeclStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        this.match(GDScriptParser.VAR);
	        this.state = 478;
	        this.match(GDScriptParser.IDENTIFIER);
	        this.state = 481;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.ASSIGN) {
	            this.state = 479;
	            this.match(GDScriptParser.ASSIGN);
	            this.state = 480;
	            this.expression(0);
	        }

	        this.state = 483;
	        this.stmtEnd();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assertStmt() {
	    let localctx = new AssertStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, GDScriptParser.RULE_assertStmt);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
	        this.match(GDScriptParser.ASSERT);
	        this.state = 486;
	        this.match(GDScriptParser.OPEN_PAREN);
	        this.state = 487;
	        this.expression(0);
	        this.state = 490;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===GDScriptParser.COMMA) {
	            this.state = 488;
	            this.match(GDScriptParser.COMMA);
	            this.state = 489;
	            this.match(GDScriptParser.STRING);
	        }

	        this.state = 492;
	        this.match(GDScriptParser.CLOSE_PAREN);
	        this.state = 493;
	        this.stmtEnd();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	yieldStmt() {
	    let localctx = new YieldStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, GDScriptParser.RULE_yieldStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
	        this.match(GDScriptParser.YIELD);
	        this.state = 496;
	        this.match(GDScriptParser.OPEN_PAREN);

	        this.state = 497;
	        this.expression(0);
	        this.state = 498;
	        this.match(GDScriptParser.COMMA);
	        this.state = 499;
	        this.expression(0);
	        this.state = 501;
	        this.match(GDScriptParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	preloadStmt() {
	    let localctx = new PreloadStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, GDScriptParser.RULE_preloadStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
	        this.match(GDScriptParser.PRELOAD);
	        this.state = 504;
	        this.match(GDScriptParser.OPEN_PAREN);
	        this.state = 505;
	        this.match(GDScriptParser.CONSTANT);
	        this.state = 506;
	        this.match(GDScriptParser.CLOSE_PAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprStmt() {
	    let localctx = new ExprStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, GDScriptParser.RULE_exprStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        this.expression(0);
	        this.state = 509;
	        this.stmtEnd();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    const _startState = 82;
	    this.enterRecursionRule(localctx, 82, GDScriptParser.RULE_expression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 576;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case GDScriptParser.TRUE:
	            localctx = new PrimaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 512;
	            this.match(GDScriptParser.TRUE);
	            break;
	        case GDScriptParser.FALSE:
	            localctx = new PrimaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 513;
	            this.match(GDScriptParser.FALSE);
	            break;
	        case GDScriptParser.NULL:
	            localctx = new PrimaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 514;
	            this.match(GDScriptParser.NULL);
	            break;
	        case GDScriptParser.SELF:
	            localctx = new PrimaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 515;
	            this.match(GDScriptParser.SELF);
	            break;
	        case GDScriptParser.IDENTIFIER:
	        case GDScriptParser.BUILTINTYPE:
	        case GDScriptParser.CONSTANT:
	        case GDScriptParser.STRING:
	        case GDScriptParser.INTEGER:
	        case GDScriptParser.FLOAT:
	            localctx = new PrimaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 516;
	            this.literal();
	            break;
	        case GDScriptParser.OPEN_BRACK:
	            localctx = new ArrayDeclContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 517;
	            this.match(GDScriptParser.OPEN_BRACK);
	            this.state = 529;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (GDScriptParser.NOT - 39)) | (1 << (GDScriptParser.TRUE - 39)) | (1 << (GDScriptParser.FALSE - 39)) | (1 << (GDScriptParser.NULL - 39)) | (1 << (GDScriptParser.SELF - 39)) | (1 << (GDScriptParser.IDENTIFIER - 39)) | (1 << (GDScriptParser.BUILTINTYPE - 39)) | (1 << (GDScriptParser.CONSTANT - 39)) | (1 << (GDScriptParser.STRING - 39)) | (1 << (GDScriptParser.INTEGER - 39)) | (1 << (GDScriptParser.FLOAT - 39)) | (1 << (GDScriptParser.DOT - 39)) | (1 << (GDScriptParser.OPEN_PAREN - 39)) | (1 << (GDScriptParser.OPEN_BRACE - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (GDScriptParser.OPEN_BRACK - 72)) | (1 << (GDScriptParser.LOGIC_NOT - 72)) | (1 << (GDScriptParser.ADD - 72)) | (1 << (GDScriptParser.MINUS - 72)) | (1 << (GDScriptParser.NOT_OP - 72)) | (1 << (GDScriptParser.DOLLAR - 72)))) !== 0)) {
	                this.state = 518;
	                this.expression(0);
	                this.state = 523;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,59,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 519;
	                        this.match(GDScriptParser.COMMA);
	                        this.state = 520;
	                        this.expression(0); 
	                    }
	                    this.state = 525;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,59,this._ctx);
	                }

	                this.state = 527;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===GDScriptParser.COMMA) {
	                    this.state = 526;
	                    this.match(GDScriptParser.COMMA);
	                }

	            }

	            this.state = 531;
	            this.match(GDScriptParser.CLOSE_BRACK);
	            break;
	        case GDScriptParser.OPEN_BRACE:
	            localctx = new DictDeclContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 532;
	            this.match(GDScriptParser.OPEN_BRACE);
	            this.state = 544;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (GDScriptParser.NOT - 39)) | (1 << (GDScriptParser.TRUE - 39)) | (1 << (GDScriptParser.FALSE - 39)) | (1 << (GDScriptParser.NULL - 39)) | (1 << (GDScriptParser.SELF - 39)) | (1 << (GDScriptParser.IDENTIFIER - 39)) | (1 << (GDScriptParser.BUILTINTYPE - 39)) | (1 << (GDScriptParser.CONSTANT - 39)) | (1 << (GDScriptParser.STRING - 39)) | (1 << (GDScriptParser.INTEGER - 39)) | (1 << (GDScriptParser.FLOAT - 39)) | (1 << (GDScriptParser.DOT - 39)) | (1 << (GDScriptParser.OPEN_PAREN - 39)) | (1 << (GDScriptParser.OPEN_BRACE - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (GDScriptParser.OPEN_BRACK - 72)) | (1 << (GDScriptParser.LOGIC_NOT - 72)) | (1 << (GDScriptParser.ADD - 72)) | (1 << (GDScriptParser.MINUS - 72)) | (1 << (GDScriptParser.NOT_OP - 72)) | (1 << (GDScriptParser.DOLLAR - 72)))) !== 0)) {
	                this.state = 533;
	                this.keyValue();
	                this.state = 538;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,62,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 534;
	                        this.match(GDScriptParser.COMMA);
	                        this.state = 535;
	                        this.keyValue(); 
	                    }
	                    this.state = 540;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,62,this._ctx);
	                }

	                this.state = 542;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===GDScriptParser.COMMA) {
	                    this.state = 541;
	                    this.match(GDScriptParser.COMMA);
	                }

	            }

	            this.state = 546;
	            this.match(GDScriptParser.CLOSE_BRACE);
	            break;
	        case GDScriptParser.OPEN_PAREN:
	            localctx = new PrimaryContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 547;
	            this.match(GDScriptParser.OPEN_PAREN);
	            this.state = 548;
	            this.expression(0);
	            this.state = 549;
	            this.match(GDScriptParser.CLOSE_PAREN);
	            break;
	        case GDScriptParser.DOT:
	            localctx = new CallContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 551;
	            this.match(GDScriptParser.DOT);
	            this.state = 552;
	            this.match(GDScriptParser.IDENTIFIER);
	            this.state = 553;
	            this.match(GDScriptParser.OPEN_PAREN);
	            this.state = 555;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (GDScriptParser.NOT - 39)) | (1 << (GDScriptParser.TRUE - 39)) | (1 << (GDScriptParser.FALSE - 39)) | (1 << (GDScriptParser.NULL - 39)) | (1 << (GDScriptParser.SELF - 39)) | (1 << (GDScriptParser.IDENTIFIER - 39)) | (1 << (GDScriptParser.BUILTINTYPE - 39)) | (1 << (GDScriptParser.CONSTANT - 39)) | (1 << (GDScriptParser.STRING - 39)) | (1 << (GDScriptParser.INTEGER - 39)) | (1 << (GDScriptParser.FLOAT - 39)) | (1 << (GDScriptParser.DOT - 39)) | (1 << (GDScriptParser.OPEN_PAREN - 39)) | (1 << (GDScriptParser.OPEN_BRACE - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (GDScriptParser.OPEN_BRACK - 72)) | (1 << (GDScriptParser.LOGIC_NOT - 72)) | (1 << (GDScriptParser.ADD - 72)) | (1 << (GDScriptParser.MINUS - 72)) | (1 << (GDScriptParser.NOT_OP - 72)) | (1 << (GDScriptParser.DOLLAR - 72)))) !== 0)) {
	                this.state = 554;
	                this.argList();
	            }

	            this.state = 557;
	            this.match(GDScriptParser.CLOSE_PAREN);
	            break;
	        case GDScriptParser.DOLLAR:
	            localctx = new GetNodeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 558;
	            this.match(GDScriptParser.DOLLAR);
	            this.state = 568;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case GDScriptParser.STRING:
	                this.state = 559;
	                this.match(GDScriptParser.STRING);
	                break;
	            case GDScriptParser.IDENTIFIER:
	                this.state = 560;
	                this.match(GDScriptParser.IDENTIFIER);
	                this.state = 565;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,66,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 561;
	                        this.match(GDScriptParser.DIV);
	                        this.state = 562;
	                        this.match(GDScriptParser.IDENTIFIER); 
	                    }
	                    this.state = 567;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,66,this._ctx);
	                }

	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;
	        case GDScriptParser.NOT_OP:
	            localctx = new BitNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 570;
	            this.match(GDScriptParser.NOT_OP);
	            this.state = 571;
	            this.expression(16);
	            break;
	        case GDScriptParser.ADD:
	        case GDScriptParser.MINUS:
	            localctx = new SignContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 572;
	            _la = this._input.LA(1);
	            if(!(_la===GDScriptParser.ADD || _la===GDScriptParser.MINUS)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 573;
	            this.expression(15);
	            break;
	        case GDScriptParser.NOT:
	        case GDScriptParser.LOGIC_NOT:
	            localctx = new LogicNotContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 574;
	            _la = this._input.LA(1);
	            if(!(_la===GDScriptParser.NOT || _la===GDScriptParser.LOGIC_NOT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 575;
	            this.expression(5);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 639;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,71,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 637;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,70,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new FactorContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 578;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 579;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 92)) & ~0x1f) == 0 && ((1 << (_la - 92)) & ((1 << (GDScriptParser.STAR - 92)) | (1 << (GDScriptParser.DIV - 92)) | (1 << (GDScriptParser.MOD - 92)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 580;
	                    this.expression(15);
	                    break;

	                case 2:
	                    localctx = new PlusContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 581;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 582;
	                    this.match(GDScriptParser.ADD);
	                    this.state = 583;
	                    this.expression(14);
	                    break;

	                case 3:
	                    localctx = new MinusContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 584;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 585;
	                    this.match(GDScriptParser.MINUS);
	                    this.state = 586;
	                    this.expression(13);
	                    break;

	                case 4:
	                    localctx = new BitShiftContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 587;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 588;
	                    _la = this._input.LA(1);
	                    if(!(_la===GDScriptParser.LEFT_SHIFT || _la===GDScriptParser.RIGHT_SHIFT)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 589;
	                    this.expression(12);
	                    break;

	                case 5:
	                    localctx = new BitAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 590;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 591;
	                    this.match(GDScriptParser.AND_OP);
	                    this.state = 592;
	                    this.expression(11);
	                    break;

	                case 6:
	                    localctx = new BitXorContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 593;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 594;
	                    this.match(GDScriptParser.XOR);
	                    this.state = 595;
	                    this.expression(10);
	                    break;

	                case 7:
	                    localctx = new BitOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 596;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 597;
	                    this.match(GDScriptParser.OR_OP);
	                    this.state = 598;
	                    this.expression(9);
	                    break;

	                case 8:
	                    localctx = new ComparisonContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 599;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 600;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 79)) & ~0x1f) == 0 && ((1 << (_la - 79)) & ((1 << (GDScriptParser.LESS_THAN - 79)) | (1 << (GDScriptParser.GREATER_THAN - 79)) | (1 << (GDScriptParser.EQUALS - 79)) | (1 << (GDScriptParser.GT_EQ - 79)) | (1 << (GDScriptParser.LT_EQ - 79)) | (1 << (GDScriptParser.NOT_EQ - 79)))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 601;
	                    this.expression(8);
	                    break;

	                case 9:
	                    localctx = new InContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 602;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 603;
	                    this.match(GDScriptParser.IN);
	                    this.state = 604;
	                    this.expression(7);
	                    break;

	                case 10:
	                    localctx = new LogicAndContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 605;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 606;
	                    _la = this._input.LA(1);
	                    if(!(_la===GDScriptParser.AND || _la===GDScriptParser.LOGIC_AND)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 607;
	                    this.expression(5);
	                    break;

	                case 11:
	                    localctx = new LogicOrContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 608;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 609;
	                    _la = this._input.LA(1);
	                    if(!(_la===GDScriptParser.OR || _la===GDScriptParser.LOGIC_OR)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 610;
	                    this.expression(4);
	                    break;

	                case 12:
	                    localctx = new TernacyExprContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 611;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 612;
	                    this.match(GDScriptParser.IF);
	                    this.state = 613;
	                    this.expression(0);
	                    this.state = 614;
	                    this.match(GDScriptParser.ELSE);
	                    this.state = 615;
	                    this.expression(3);
	                    break;

	                case 13:
	                    localctx = new SubscriptionContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 617;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 618;
	                    this.match(GDScriptParser.OPEN_BRACK);
	                    this.state = 619;
	                    this.expression(0);
	                    this.state = 620;
	                    this.match(GDScriptParser.CLOSE_BRACK);
	                    break;

	                case 14:
	                    localctx = new AttributeContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 622;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 623;
	                    this.match(GDScriptParser.DOT);
	                    this.state = 624;
	                    this.match(GDScriptParser.IDENTIFIER);
	                    break;

	                case 15:
	                    localctx = new CallContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 625;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 626;
	                    this.match(GDScriptParser.OPEN_PAREN);
	                    this.state = 628;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (GDScriptParser.NOT - 39)) | (1 << (GDScriptParser.TRUE - 39)) | (1 << (GDScriptParser.FALSE - 39)) | (1 << (GDScriptParser.NULL - 39)) | (1 << (GDScriptParser.SELF - 39)) | (1 << (GDScriptParser.IDENTIFIER - 39)) | (1 << (GDScriptParser.BUILTINTYPE - 39)) | (1 << (GDScriptParser.CONSTANT - 39)) | (1 << (GDScriptParser.STRING - 39)) | (1 << (GDScriptParser.INTEGER - 39)) | (1 << (GDScriptParser.FLOAT - 39)) | (1 << (GDScriptParser.DOT - 39)) | (1 << (GDScriptParser.OPEN_PAREN - 39)) | (1 << (GDScriptParser.OPEN_BRACE - 39)))) !== 0) || ((((_la - 72)) & ~0x1f) == 0 && ((1 << (_la - 72)) & ((1 << (GDScriptParser.OPEN_BRACK - 72)) | (1 << (GDScriptParser.LOGIC_NOT - 72)) | (1 << (GDScriptParser.ADD - 72)) | (1 << (GDScriptParser.MINUS - 72)) | (1 << (GDScriptParser.NOT_OP - 72)) | (1 << (GDScriptParser.DOLLAR - 72)))) !== 0)) {
	                        this.state = 627;
	                        this.argList();
	                    }

	                    this.state = 630;
	                    this.match(GDScriptParser.CLOSE_PAREN);
	                    break;

	                case 16:
	                    localctx = new IsContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 631;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 632;
	                    this.match(GDScriptParser.IS);
	                    this.state = 633;
	                    _la = this._input.LA(1);
	                    if(!(_la===GDScriptParser.IDENTIFIER || _la===GDScriptParser.BUILTINTYPE)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    break;

	                case 17:
	                    localctx = new CastContext(this, new ExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, GDScriptParser.RULE_expression);
	                    this.state = 634;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 635;
	                    this.match(GDScriptParser.AS);
	                    this.state = 636;
	                    this.typeHint();
	                    break;

	                } 
	            }
	            this.state = 641;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,71,this._ctx);
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
	    this.enterRule(localctx, 84, GDScriptParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 642;
	        _la = this._input.LA(1);
	        if(!(((((_la - 47)) & ~0x1f) == 0 && ((1 << (_la - 47)) & ((1 << (GDScriptParser.IDENTIFIER - 47)) | (1 << (GDScriptParser.BUILTINTYPE - 47)) | (1 << (GDScriptParser.CONSTANT - 47)) | (1 << (GDScriptParser.STRING - 47)) | (1 << (GDScriptParser.INTEGER - 47)) | (1 << (GDScriptParser.FLOAT - 47)))) !== 0))) {
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



	keyValue() {
	    let localctx = new KeyValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, GDScriptParser.RULE_keyValue);
	    try {
	        this.state = 651;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,72,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 644;
	            this.expression(0);
	            this.state = 645;
	            this.match(GDScriptParser.COLON);
	            this.state = 646;
	            this.expression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 648;
	            this.match(GDScriptParser.IDENTIFIER);
	            this.state = 649;
	            this.match(GDScriptParser.ASSIGN);
	            this.state = 650;
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


}

GDScriptParser.EOF = antlr4.Token.EOF;
GDScriptParser.INDENT = 1;
GDScriptParser.DEDENT = 2;
GDScriptParser.EXTENDS = 3;
GDScriptParser.CLASS_NAME = 4;
GDScriptParser.ONREADY = 5;
GDScriptParser.VAR = 6;
GDScriptParser.SETGET = 7;
GDScriptParser.EXPORT = 8;
GDScriptParser.CONST = 9;
GDScriptParser.SIGNAL = 10;
GDScriptParser.ENUM = 11;
GDScriptParser.STATIC = 12;
GDScriptParser.FUNC = 13;
GDScriptParser.REMOTE = 14;
GDScriptParser.MASTER = 15;
GDScriptParser.PUPPET = 16;
GDScriptParser.REMOTESYNC = 17;
GDScriptParser.MASTERSYNC = 18;
GDScriptParser.PUPPETSYNC = 19;
GDScriptParser.CLASS = 20;
GDScriptParser.BREAKPOINT = 21;
GDScriptParser.PASS = 22;
GDScriptParser.IF = 23;
GDScriptParser.ELIF = 24;
GDScriptParser.WHILE = 25;
GDScriptParser.FOR = 26;
GDScriptParser.IN = 27;
GDScriptParser.MATCH = 28;
GDScriptParser.CONTINUE = 29;
GDScriptParser.BREAK = 30;
GDScriptParser.RETURN = 31;
GDScriptParser.ASSERT = 32;
GDScriptParser.YIELD = 33;
GDScriptParser.PRELOAD = 34;
GDScriptParser.AS = 35;
GDScriptParser.ELSE = 36;
GDScriptParser.OR = 37;
GDScriptParser.AND = 38;
GDScriptParser.NOT = 39;
GDScriptParser.IS = 40;
GDScriptParser.TRUE = 41;
GDScriptParser.FALSE = 42;
GDScriptParser.NULL = 43;
GDScriptParser.SELF = 44;
GDScriptParser.TOOL = 45;
GDScriptParser.NEWLINE = 46;
GDScriptParser.IDENTIFIER = 47;
GDScriptParser.BUILTINTYPE = 48;
GDScriptParser.CONSTANT = 49;
GDScriptParser.STRING = 50;
GDScriptParser.INTEGER = 51;
GDScriptParser.FLOAT = 52;
GDScriptParser.DOT = 53;
GDScriptParser.COMMA = 54;
GDScriptParser.COLON = 55;
GDScriptParser.ASSIGN = 56;
GDScriptParser.COLON_ASSIGN = 57;
GDScriptParser.ADD_ASSIGN = 58;
GDScriptParser.MINUS_ASSIGN = 59;
GDScriptParser.MUL_ASSIGN = 60;
GDScriptParser.DIV_ASSIGN = 61;
GDScriptParser.MOD_ASSIGN = 62;
GDScriptParser.AND_ASSIGN = 63;
GDScriptParser.OR_ASSIGN = 64;
GDScriptParser.XOR_ASSIGN = 65;
GDScriptParser.OPEN_PAREN = 66;
GDScriptParser.CLOSE_PAREN = 67;
GDScriptParser.OPEN_BRACE = 68;
GDScriptParser.CLOSE_BRACE = 69;
GDScriptParser.ARROW = 70;
GDScriptParser.UNDERSCORE = 71;
GDScriptParser.OPEN_BRACK = 72;
GDScriptParser.CLOSE_BRACK = 73;
GDScriptParser.DOTDOT = 74;
GDScriptParser.SEMI_COLON = 75;
GDScriptParser.LOGIC_OR = 76;
GDScriptParser.LOGIC_AND = 77;
GDScriptParser.LOGIC_NOT = 78;
GDScriptParser.LESS_THAN = 79;
GDScriptParser.GREATER_THAN = 80;
GDScriptParser.EQUALS = 81;
GDScriptParser.GT_EQ = 82;
GDScriptParser.LT_EQ = 83;
GDScriptParser.NOT_EQ = 84;
GDScriptParser.OR_OP = 85;
GDScriptParser.XOR = 86;
GDScriptParser.AND_OP = 87;
GDScriptParser.LEFT_SHIFT = 88;
GDScriptParser.RIGHT_SHIFT = 89;
GDScriptParser.ADD = 90;
GDScriptParser.MINUS = 91;
GDScriptParser.STAR = 92;
GDScriptParser.DIV = 93;
GDScriptParser.MOD = 94;
GDScriptParser.NOT_OP = 95;
GDScriptParser.DOLLAR = 96;
GDScriptParser.SKIP_ = 97;

GDScriptParser.RULE_program = 0;
GDScriptParser.RULE_inheritance = 1;
GDScriptParser.RULE_className = 2;
GDScriptParser.RULE_topLevelDecl = 3;
GDScriptParser.RULE_classVarDecl = 4;
GDScriptParser.RULE_setget = 5;
GDScriptParser.RULE_export = 6;
GDScriptParser.RULE_typeHint = 7;
GDScriptParser.RULE_constDecl = 8;
GDScriptParser.RULE_signalDecl = 9;
GDScriptParser.RULE_signalParList = 10;
GDScriptParser.RULE_enumDecl = 11;
GDScriptParser.RULE_methodDecl = 12;
GDScriptParser.RULE_parList = 13;
GDScriptParser.RULE_parameter = 14;
GDScriptParser.RULE_rpc = 15;
GDScriptParser.RULE_constructorDecl = 16;
GDScriptParser.RULE_argList = 17;
GDScriptParser.RULE_innerClass = 18;
GDScriptParser.RULE_stmtOrSuite = 19;
GDScriptParser.RULE_suite = 20;
GDScriptParser.RULE_stmt = 21;
GDScriptParser.RULE_stmtEnd = 22;
GDScriptParser.RULE_ifStmt = 23;
GDScriptParser.RULE_whileStmt = 24;
GDScriptParser.RULE_forStmt = 25;
GDScriptParser.RULE_matchStmt = 26;
GDScriptParser.RULE_matchBlock = 27;
GDScriptParser.RULE_patternList = 28;
GDScriptParser.RULE_pattern = 29;
GDScriptParser.RULE_bindingPattern = 30;
GDScriptParser.RULE_arrayPattern = 31;
GDScriptParser.RULE_dictPattern = 32;
GDScriptParser.RULE_keyValuePattern = 33;
GDScriptParser.RULE_flowStmt = 34;
GDScriptParser.RULE_assignmentStmt = 35;
GDScriptParser.RULE_varDeclStmt = 36;
GDScriptParser.RULE_assertStmt = 37;
GDScriptParser.RULE_yieldStmt = 38;
GDScriptParser.RULE_preloadStmt = 39;
GDScriptParser.RULE_exprStmt = 40;
GDScriptParser.RULE_expression = 41;
GDScriptParser.RULE_literal = 42;
GDScriptParser.RULE_keyValue = 43;

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
        this.ruleIndex = GDScriptParser.RULE_program;
    }

	EOF() {
	    return this.getToken(GDScriptParser.EOF, 0);
	};

	inheritance() {
	    return this.getTypedRuleContext(InheritanceContext,0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	className() {
	    return this.getTypedRuleContext(ClassNameContext,0);
	};

	topLevelDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopLevelDeclContext);
	    } else {
	        return this.getTypedRuleContext(TopLevelDeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = GDScriptParser.RULE_inheritance;
    }

	EXTENDS() {
	    return this.getToken(GDScriptParser.EXTENDS, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(GDScriptParser.IDENTIFIER, i);
	    }
	};


	STRING() {
	    return this.getToken(GDScriptParser.STRING, 0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.DOT);
	    } else {
	        return this.getToken(GDScriptParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterInheritance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitInheritance(this);
		}
	}


}



class ClassNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_className;
    }

	CLASS_NAME() {
	    return this.getToken(GDScriptParser.CLASS_NAME, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	COMMA() {
	    return this.getToken(GDScriptParser.COMMA, 0);
	};

	STRING() {
	    return this.getToken(GDScriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterClassName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitClassName(this);
		}
	}


}



class TopLevelDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_topLevelDecl;
    }

	classVarDecl() {
	    return this.getTypedRuleContext(ClassVarDeclContext,0);
	};

	constDecl() {
	    return this.getTypedRuleContext(ConstDeclContext,0);
	};

	signalDecl() {
	    return this.getTypedRuleContext(SignalDeclContext,0);
	};

	enumDecl() {
	    return this.getTypedRuleContext(EnumDeclContext,0);
	};

	methodDecl() {
	    return this.getTypedRuleContext(MethodDeclContext,0);
	};

	constructorDecl() {
	    return this.getTypedRuleContext(ConstructorDeclContext,0);
	};

	innerClass() {
	    return this.getTypedRuleContext(InnerClassContext,0);
	};

	TOOL() {
	    return this.getToken(GDScriptParser.TOOL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterTopLevelDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitTopLevelDecl(this);
		}
	}


}



class ClassVarDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_classVarDecl;
    }

	VAR() {
	    return this.getToken(GDScriptParser.VAR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	COLON_ASSIGN() {
	    return this.getToken(GDScriptParser.COLON_ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	ONREADY() {
	    return this.getToken(GDScriptParser.ONREADY, 0);
	};

	export_() {
	    return this.getTypedRuleContext(ExportContext,0);
	};

	setget() {
	    return this.getTypedRuleContext(SetgetContext,0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	typeHint() {
	    return this.getTypedRuleContext(TypeHintContext,0);
	};

	ASSIGN() {
	    return this.getToken(GDScriptParser.ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterClassVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitClassVarDecl(this);
		}
	}


}



class SetgetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_setget;
    }

	SETGET() {
	    return this.getToken(GDScriptParser.SETGET, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(GDScriptParser.IDENTIFIER, i);
	    }
	};


	COMMA() {
	    return this.getToken(GDScriptParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterSetget(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitSetget(this);
		}
	}


}



class ExportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_export;
    }

	EXPORT() {
	    return this.getToken(GDScriptParser.EXPORT, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
	};

	BUILTINTYPE() {
	    return this.getToken(GDScriptParser.BUILTINTYPE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LiteralContext);
	    } else {
	        return this.getTypedRuleContext(LiteralContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterExport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitExport(this);
		}
	}


}



class TypeHintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_typeHint;
    }

	BUILTINTYPE() {
	    return this.getToken(GDScriptParser.BUILTINTYPE, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterTypeHint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitTypeHint(this);
		}
	}


}



class ConstDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_constDecl;
    }

	CONST() {
	    return this.getToken(GDScriptParser.CONST, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(GDScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	typeHint() {
	    return this.getTypedRuleContext(TypeHintContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterConstDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitConstDecl(this);
		}
	}


}



class SignalDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_signalDecl;
    }

	SIGNAL() {
	    return this.getToken(GDScriptParser.SIGNAL, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	signalParList() {
	    return this.getTypedRuleContext(SignalParListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterSignalDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitSignalDecl(this);
		}
	}


}



class SignalParListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_signalParList;
    }

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(GDScriptParser.IDENTIFIER, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterSignalParList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitSignalParList(this);
		}
	}


}



class EnumDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_enumDecl;
    }

	ENUM() {
	    return this.getToken(GDScriptParser.ENUM, 0);
	};

	OPEN_BRACE() {
	    return this.getToken(GDScriptParser.OPEN_BRACE, 0);
	};

	CLOSE_BRACE() {
	    return this.getToken(GDScriptParser.CLOSE_BRACE, 0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(GDScriptParser.IDENTIFIER, i);
	    }
	};


	ASSIGN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.ASSIGN);
	    } else {
	        return this.getToken(GDScriptParser.ASSIGN, i);
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

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterEnumDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitEnumDecl(this);
		}
	}


}



class MethodDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_methodDecl;
    }

	FUNC() {
	    return this.getToken(GDScriptParser.FUNC, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	stmtOrSuite() {
	    return this.getTypedRuleContext(StmtOrSuiteContext,0);
	};

	rpc() {
	    return this.getTypedRuleContext(RpcContext,0);
	};

	STATIC() {
	    return this.getToken(GDScriptParser.STATIC, 0);
	};

	parList() {
	    return this.getTypedRuleContext(ParListContext,0);
	};

	ARROW() {
	    return this.getToken(GDScriptParser.ARROW, 0);
	};

	typeHint() {
	    return this.getTypedRuleContext(TypeHintContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterMethodDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitMethodDecl(this);
		}
	}


}



class ParListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_parList;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterParList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitParList(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_parameter;
    }

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	VAR() {
	    return this.getToken(GDScriptParser.VAR, 0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	typeHint() {
	    return this.getTypedRuleContext(TypeHintContext,0);
	};

	ASSIGN() {
	    return this.getToken(GDScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitParameter(this);
		}
	}


}



class RpcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_rpc;
    }

	REMOTE() {
	    return this.getToken(GDScriptParser.REMOTE, 0);
	};

	MASTER() {
	    return this.getToken(GDScriptParser.MASTER, 0);
	};

	PUPPET() {
	    return this.getToken(GDScriptParser.PUPPET, 0);
	};

	REMOTESYNC() {
	    return this.getToken(GDScriptParser.REMOTESYNC, 0);
	};

	MASTERSYNC() {
	    return this.getToken(GDScriptParser.MASTERSYNC, 0);
	};

	PUPPETSYNC() {
	    return this.getToken(GDScriptParser.PUPPETSYNC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterRpc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitRpc(this);
		}
	}


}



class ConstructorDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_constructorDecl;
    }

	FUNC() {
	    return this.getToken(GDScriptParser.FUNC, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	OPEN_PAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.OPEN_PAREN);
	    } else {
	        return this.getToken(GDScriptParser.OPEN_PAREN, i);
	    }
	};


	CLOSE_PAREN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.CLOSE_PAREN);
	    } else {
	        return this.getToken(GDScriptParser.CLOSE_PAREN, i);
	    }
	};


	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	stmtOrSuite() {
	    return this.getTypedRuleContext(StmtOrSuiteContext,0);
	};

	DOT() {
	    return this.getToken(GDScriptParser.DOT, 0);
	};

	parList() {
	    return this.getTypedRuleContext(ParListContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterConstructorDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitConstructorDecl(this);
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
        this.ruleIndex = GDScriptParser.RULE_argList;
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
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterArgList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitArgList(this);
		}
	}


}



class InnerClassContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_innerClass;
    }

	CLASS() {
	    return this.getToken(GDScriptParser.CLASS, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.NEWLINE);
	    } else {
	        return this.getToken(GDScriptParser.NEWLINE, i);
	    }
	};


	INDENT() {
	    return this.getToken(GDScriptParser.INDENT, 0);
	};

	DEDENT() {
	    return this.getToken(GDScriptParser.DEDENT, 0);
	};

	inheritance = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InheritanceContext);
	    } else {
	        return this.getTypedRuleContext(InheritanceContext,i);
	    }
	};

	topLevelDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopLevelDeclContext);
	    } else {
	        return this.getTypedRuleContext(TopLevelDeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterInnerClass(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitInnerClass(this);
		}
	}


}



class StmtOrSuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_stmtOrSuite;
    }

	stmt() {
	    return this.getTypedRuleContext(StmtContext,0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	INDENT() {
	    return this.getToken(GDScriptParser.INDENT, 0);
	};

	suite() {
	    return this.getTypedRuleContext(SuiteContext,0);
	};

	DEDENT() {
	    return this.getToken(GDScriptParser.DEDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterStmtOrSuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitStmtOrSuite(this);
		}
	}


}



class SuiteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_suite;
    }

	stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtContext);
	    } else {
	        return this.getTypedRuleContext(StmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterSuite(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitSuite(this);
		}
	}


}



class StmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_stmt;
    }

	varDeclStmt() {
	    return this.getTypedRuleContext(VarDeclStmtContext,0);
	};

	ifStmt() {
	    return this.getTypedRuleContext(IfStmtContext,0);
	};

	forStmt() {
	    return this.getTypedRuleContext(ForStmtContext,0);
	};

	whileStmt() {
	    return this.getTypedRuleContext(WhileStmtContext,0);
	};

	matchStmt() {
	    return this.getTypedRuleContext(MatchStmtContext,0);
	};

	flowStmt() {
	    return this.getTypedRuleContext(FlowStmtContext,0);
	};

	assignmentStmt() {
	    return this.getTypedRuleContext(AssignmentStmtContext,0);
	};

	exprStmt() {
	    return this.getTypedRuleContext(ExprStmtContext,0);
	};

	assertStmt() {
	    return this.getTypedRuleContext(AssertStmtContext,0);
	};

	yieldStmt() {
	    return this.getTypedRuleContext(YieldStmtContext,0);
	};

	preloadStmt() {
	    return this.getTypedRuleContext(PreloadStmtContext,0);
	};

	BREAKPOINT() {
	    return this.getToken(GDScriptParser.BREAKPOINT, 0);
	};

	stmtEnd() {
	    return this.getTypedRuleContext(StmtEndContext,0);
	};

	PASS() {
	    return this.getToken(GDScriptParser.PASS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitStmt(this);
		}
	}


}



class StmtEndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_stmtEnd;
    }

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	SEMI_COLON() {
	    return this.getToken(GDScriptParser.SEMI_COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterStmtEnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitStmtEnd(this);
		}
	}


}



class IfStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_ifStmt;
    }

	IF() {
	    return this.getToken(GDScriptParser.IF, 0);
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

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COLON);
	    } else {
	        return this.getToken(GDScriptParser.COLON, i);
	    }
	};


	stmtOrSuite = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtOrSuiteContext);
	    } else {
	        return this.getTypedRuleContext(StmtOrSuiteContext,i);
	    }
	};

	ELIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.ELIF);
	    } else {
	        return this.getToken(GDScriptParser.ELIF, i);
	    }
	};


	ELSE() {
	    return this.getToken(GDScriptParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitIfStmt(this);
		}
	}


}



class WhileStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_whileStmt;
    }

	WHILE() {
	    return this.getToken(GDScriptParser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	stmtOrSuite() {
	    return this.getTypedRuleContext(StmtOrSuiteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitWhileStmt(this);
		}
	}


}



class ForStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_forStmt;
    }

	FOR() {
	    return this.getToken(GDScriptParser.FOR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	IN() {
	    return this.getToken(GDScriptParser.IN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	stmtOrSuite() {
	    return this.getTypedRuleContext(StmtOrSuiteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterForStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitForStmt(this);
		}
	}


}



class MatchStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_matchStmt;
    }

	MATCH() {
	    return this.getToken(GDScriptParser.MATCH, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	NEWLINE() {
	    return this.getToken(GDScriptParser.NEWLINE, 0);
	};

	INDENT() {
	    return this.getToken(GDScriptParser.INDENT, 0);
	};

	matchBlock() {
	    return this.getTypedRuleContext(MatchBlockContext,0);
	};

	DEDENT() {
	    return this.getToken(GDScriptParser.DEDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterMatchStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitMatchStmt(this);
		}
	}


}



class MatchBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_matchBlock;
    }

	patternList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternListContext);
	    } else {
	        return this.getTypedRuleContext(PatternListContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COLON);
	    } else {
	        return this.getToken(GDScriptParser.COLON, i);
	    }
	};


	stmtOrSuite = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StmtOrSuiteContext);
	    } else {
	        return this.getTypedRuleContext(StmtOrSuiteContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterMatchBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitMatchBlock(this);
		}
	}


}



class PatternListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_patternList;
    }

	pattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternContext);
	    } else {
	        return this.getTypedRuleContext(PatternContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterPatternList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitPatternList(this);
		}
	}


}



class PatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_pattern;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	BUILTINTYPE() {
	    return this.getToken(GDScriptParser.BUILTINTYPE, 0);
	};

	CONSTANT() {
	    return this.getToken(GDScriptParser.CONSTANT, 0);
	};

	UNDERSCORE() {
	    return this.getToken(GDScriptParser.UNDERSCORE, 0);
	};

	bindingPattern() {
	    return this.getTypedRuleContext(BindingPatternContext,0);
	};

	arrayPattern() {
	    return this.getTypedRuleContext(ArrayPatternContext,0);
	};

	dictPattern() {
	    return this.getTypedRuleContext(DictPatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitPattern(this);
		}
	}


}



class BindingPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_bindingPattern;
    }

	VAR() {
	    return this.getToken(GDScriptParser.VAR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterBindingPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitBindingPattern(this);
		}
	}


}



class ArrayPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_arrayPattern;
    }

	OPEN_BRACK() {
	    return this.getToken(GDScriptParser.OPEN_BRACK, 0);
	};

	CLOSE_BRACK() {
	    return this.getToken(GDScriptParser.CLOSE_BRACK, 0);
	};

	pattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PatternContext);
	    } else {
	        return this.getTypedRuleContext(PatternContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	DOTDOT() {
	    return this.getToken(GDScriptParser.DOTDOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterArrayPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitArrayPattern(this);
		}
	}


}



class DictPatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_dictPattern;
    }

	OPEN_BRACE() {
	    return this.getToken(GDScriptParser.OPEN_BRACE, 0);
	};

	CLOSE_BRACE() {
	    return this.getToken(GDScriptParser.CLOSE_BRACE, 0);
	};

	keyValuePattern = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyValuePatternContext);
	    } else {
	        return this.getTypedRuleContext(KeyValuePatternContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	DOTDOT() {
	    return this.getToken(GDScriptParser.DOTDOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterDictPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitDictPattern(this);
		}
	}


}



class KeyValuePatternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_keyValuePattern;
    }

	STRING() {
	    return this.getToken(GDScriptParser.STRING, 0);
	};

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterKeyValuePattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitKeyValuePattern(this);
		}
	}


}



class FlowStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_flowStmt;
    }

	CONTINUE() {
	    return this.getToken(GDScriptParser.CONTINUE, 0);
	};

	stmtEnd() {
	    return this.getTypedRuleContext(StmtEndContext,0);
	};

	BREAK() {
	    return this.getToken(GDScriptParser.BREAK, 0);
	};

	RETURN() {
	    return this.getToken(GDScriptParser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterFlowStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitFlowStmt(this);
		}
	}


}



class AssignmentStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_assignmentStmt;
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

	stmtEnd() {
	    return this.getTypedRuleContext(StmtEndContext,0);
	};

	ASSIGN() {
	    return this.getToken(GDScriptParser.ASSIGN, 0);
	};

	ADD_ASSIGN() {
	    return this.getToken(GDScriptParser.ADD_ASSIGN, 0);
	};

	MINUS_ASSIGN() {
	    return this.getToken(GDScriptParser.MINUS_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(GDScriptParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(GDScriptParser.DIV_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(GDScriptParser.MOD_ASSIGN, 0);
	};

	AND_ASSIGN() {
	    return this.getToken(GDScriptParser.AND_ASSIGN, 0);
	};

	OR_ASSIGN() {
	    return this.getToken(GDScriptParser.OR_ASSIGN, 0);
	};

	XOR_ASSIGN() {
	    return this.getToken(GDScriptParser.XOR_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterAssignmentStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitAssignmentStmt(this);
		}
	}


}



class VarDeclStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_varDeclStmt;
    }

	VAR() {
	    return this.getToken(GDScriptParser.VAR, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	stmtEnd() {
	    return this.getTypedRuleContext(StmtEndContext,0);
	};

	ASSIGN() {
	    return this.getToken(GDScriptParser.ASSIGN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterVarDeclStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitVarDeclStmt(this);
		}
	}


}



class AssertStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_assertStmt;
    }

	ASSERT() {
	    return this.getToken(GDScriptParser.ASSERT, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
	};

	stmtEnd() {
	    return this.getTypedRuleContext(StmtEndContext,0);
	};

	COMMA() {
	    return this.getToken(GDScriptParser.COMMA, 0);
	};

	STRING() {
	    return this.getToken(GDScriptParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterAssertStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitAssertStmt(this);
		}
	}


}



class YieldStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_yieldStmt;
    }

	YIELD() {
	    return this.getToken(GDScriptParser.YIELD, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
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

	COMMA() {
	    return this.getToken(GDScriptParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterYieldStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitYieldStmt(this);
		}
	}


}



class PreloadStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_preloadStmt;
    }

	PRELOAD() {
	    return this.getToken(GDScriptParser.PRELOAD, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	CONSTANT() {
	    return this.getToken(GDScriptParser.CONSTANT, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterPreloadStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitPreloadStmt(this);
		}
	}


}



class ExprStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_exprStmt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	stmtEnd() {
	    return this.getTypedRuleContext(StmtEndContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterExprStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitExprStmt(this);
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
        this.ruleIndex = GDScriptParser.RULE_expression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class MinusContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	MINUS() {
	    return this.getToken(GDScriptParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterMinus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitMinus(this);
		}
	}


}

GDScriptParser.MinusContext = MinusContext;

class BitShiftContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	LEFT_SHIFT() {
	    return this.getToken(GDScriptParser.LEFT_SHIFT, 0);
	};

	RIGHT_SHIFT() {
	    return this.getToken(GDScriptParser.RIGHT_SHIFT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterBitShift(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitBitShift(this);
		}
	}


}

GDScriptParser.BitShiftContext = BitShiftContext;

class ComparisonContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	LESS_THAN() {
	    return this.getToken(GDScriptParser.LESS_THAN, 0);
	};

	GREATER_THAN() {
	    return this.getToken(GDScriptParser.GREATER_THAN, 0);
	};

	LT_EQ() {
	    return this.getToken(GDScriptParser.LT_EQ, 0);
	};

	GT_EQ() {
	    return this.getToken(GDScriptParser.GT_EQ, 0);
	};

	EQUALS() {
	    return this.getToken(GDScriptParser.EQUALS, 0);
	};

	NOT_EQ() {
	    return this.getToken(GDScriptParser.NOT_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitComparison(this);
		}
	}


}

GDScriptParser.ComparisonContext = ComparisonContext;

class InContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	IN() {
	    return this.getToken(GDScriptParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterIn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitIn(this);
		}
	}


}

GDScriptParser.InContext = InContext;

class BitOrContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	OR_OP() {
	    return this.getToken(GDScriptParser.OR_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterBitOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitBitOr(this);
		}
	}


}

GDScriptParser.BitOrContext = BitOrContext;

class LogicOrContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	OR() {
	    return this.getToken(GDScriptParser.OR, 0);
	};

	LOGIC_OR() {
	    return this.getToken(GDScriptParser.LOGIC_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterLogicOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitLogicOr(this);
		}
	}


}

GDScriptParser.LogicOrContext = LogicOrContext;

class SignContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	MINUS() {
	    return this.getToken(GDScriptParser.MINUS, 0);
	};

	ADD() {
	    return this.getToken(GDScriptParser.ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterSign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitSign(this);
		}
	}


}

GDScriptParser.SignContext = SignContext;

class ArrayDeclContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPEN_BRACK() {
	    return this.getToken(GDScriptParser.OPEN_BRACK, 0);
	};

	CLOSE_BRACK() {
	    return this.getToken(GDScriptParser.CLOSE_BRACK, 0);
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
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterArrayDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitArrayDecl(this);
		}
	}


}

GDScriptParser.ArrayDeclContext = ArrayDeclContext;

class IsContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	IS() {
	    return this.getToken(GDScriptParser.IS, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	BUILTINTYPE() {
	    return this.getToken(GDScriptParser.BUILTINTYPE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterIs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitIs(this);
		}
	}


}

GDScriptParser.IsContext = IsContext;

class SubscriptionContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	OPEN_BRACK() {
	    return this.getToken(GDScriptParser.OPEN_BRACK, 0);
	};

	CLOSE_BRACK() {
	    return this.getToken(GDScriptParser.CLOSE_BRACK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterSubscription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitSubscription(this);
		}
	}


}

GDScriptParser.SubscriptionContext = SubscriptionContext;

class PlusContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	ADD() {
	    return this.getToken(GDScriptParser.ADD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterPlus(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitPlus(this);
		}
	}


}

GDScriptParser.PlusContext = PlusContext;

class CallContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DOT() {
	    return this.getToken(GDScriptParser.DOT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitCall(this);
		}
	}


}

GDScriptParser.CallContext = CallContext;

class CastContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	AS() {
	    return this.getToken(GDScriptParser.AS, 0);
	};

	typeHint() {
	    return this.getTypedRuleContext(TypeHintContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterCast(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitCast(this);
		}
	}


}

GDScriptParser.CastContext = CastContext;

class BitAndContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	AND_OP() {
	    return this.getToken(GDScriptParser.AND_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterBitAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitBitAnd(this);
		}
	}


}

GDScriptParser.BitAndContext = BitAndContext;

class LogicAndContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	AND() {
	    return this.getToken(GDScriptParser.AND, 0);
	};

	LOGIC_AND() {
	    return this.getToken(GDScriptParser.LOGIC_AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterLogicAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitLogicAnd(this);
		}
	}


}

GDScriptParser.LogicAndContext = LogicAndContext;

class TernacyExprContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	IF() {
	    return this.getToken(GDScriptParser.IF, 0);
	};

	ELSE() {
	    return this.getToken(GDScriptParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterTernacyExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitTernacyExpr(this);
		}
	}


}

GDScriptParser.TernacyExprContext = TernacyExprContext;

class DictDeclContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OPEN_BRACE() {
	    return this.getToken(GDScriptParser.OPEN_BRACE, 0);
	};

	CLOSE_BRACE() {
	    return this.getToken(GDScriptParser.CLOSE_BRACE, 0);
	};

	keyValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyValueContext);
	    } else {
	        return this.getTypedRuleContext(KeyValueContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.COMMA);
	    } else {
	        return this.getToken(GDScriptParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterDictDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitDictDecl(this);
		}
	}


}

GDScriptParser.DictDeclContext = DictDeclContext;

class BitXorContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	XOR() {
	    return this.getToken(GDScriptParser.XOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterBitXor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitBitXor(this);
		}
	}


}

GDScriptParser.BitXorContext = BitXorContext;

class GetNodeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	DOLLAR() {
	    return this.getToken(GDScriptParser.DOLLAR, 0);
	};

	STRING() {
	    return this.getToken(GDScriptParser.STRING, 0);
	};

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.IDENTIFIER);
	    } else {
	        return this.getToken(GDScriptParser.IDENTIFIER, i);
	    }
	};


	DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GDScriptParser.DIV);
	    } else {
	        return this.getToken(GDScriptParser.DIV, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterGetNode(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitGetNode(this);
		}
	}


}

GDScriptParser.GetNodeContext = GetNodeContext;

class AttributeContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	DOT() {
	    return this.getToken(GDScriptParser.DOT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitAttribute(this);
		}
	}


}

GDScriptParser.AttributeContext = AttributeContext;

class FactorContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
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

	STAR() {
	    return this.getToken(GDScriptParser.STAR, 0);
	};

	DIV() {
	    return this.getToken(GDScriptParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(GDScriptParser.MOD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitFactor(this);
		}
	}


}

GDScriptParser.FactorContext = FactorContext;

class BitNotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NOT_OP() {
	    return this.getToken(GDScriptParser.NOT_OP, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterBitNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitBitNot(this);
		}
	}


}

GDScriptParser.BitNotContext = BitNotContext;

class LogicNotContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	LOGIC_NOT() {
	    return this.getToken(GDScriptParser.LOGIC_NOT, 0);
	};

	NOT() {
	    return this.getToken(GDScriptParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterLogicNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitLogicNot(this);
		}
	}


}

GDScriptParser.LogicNotContext = LogicNotContext;

class PrimaryContext extends ExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(GDScriptParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(GDScriptParser.FALSE, 0);
	};

	NULL() {
	    return this.getToken(GDScriptParser.NULL, 0);
	};

	SELF() {
	    return this.getToken(GDScriptParser.SELF, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	OPEN_PAREN() {
	    return this.getToken(GDScriptParser.OPEN_PAREN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GDScriptParser.CLOSE_PAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitPrimary(this);
		}
	}


}

GDScriptParser.PrimaryContext = PrimaryContext;

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
        this.ruleIndex = GDScriptParser.RULE_literal;
    }

	STRING() {
	    return this.getToken(GDScriptParser.STRING, 0);
	};

	INTEGER() {
	    return this.getToken(GDScriptParser.INTEGER, 0);
	};

	FLOAT() {
	    return this.getToken(GDScriptParser.FLOAT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	BUILTINTYPE() {
	    return this.getToken(GDScriptParser.BUILTINTYPE, 0);
	};

	CONSTANT() {
	    return this.getToken(GDScriptParser.CONSTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class KeyValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GDScriptParser.RULE_keyValue;
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

	COLON() {
	    return this.getToken(GDScriptParser.COLON, 0);
	};

	IDENTIFIER() {
	    return this.getToken(GDScriptParser.IDENTIFIER, 0);
	};

	ASSIGN() {
	    return this.getToken(GDScriptParser.ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.enterKeyValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GDScriptParserListener ) {
	        listener.exitKeyValue(this);
		}
	}


}




GDScriptParser.ProgramContext = ProgramContext; 
GDScriptParser.InheritanceContext = InheritanceContext; 
GDScriptParser.ClassNameContext = ClassNameContext; 
GDScriptParser.TopLevelDeclContext = TopLevelDeclContext; 
GDScriptParser.ClassVarDeclContext = ClassVarDeclContext; 
GDScriptParser.SetgetContext = SetgetContext; 
GDScriptParser.ExportContext = ExportContext; 
GDScriptParser.TypeHintContext = TypeHintContext; 
GDScriptParser.ConstDeclContext = ConstDeclContext; 
GDScriptParser.SignalDeclContext = SignalDeclContext; 
GDScriptParser.SignalParListContext = SignalParListContext; 
GDScriptParser.EnumDeclContext = EnumDeclContext; 
GDScriptParser.MethodDeclContext = MethodDeclContext; 
GDScriptParser.ParListContext = ParListContext; 
GDScriptParser.ParameterContext = ParameterContext; 
GDScriptParser.RpcContext = RpcContext; 
GDScriptParser.ConstructorDeclContext = ConstructorDeclContext; 
GDScriptParser.ArgListContext = ArgListContext; 
GDScriptParser.InnerClassContext = InnerClassContext; 
GDScriptParser.StmtOrSuiteContext = StmtOrSuiteContext; 
GDScriptParser.SuiteContext = SuiteContext; 
GDScriptParser.StmtContext = StmtContext; 
GDScriptParser.StmtEndContext = StmtEndContext; 
GDScriptParser.IfStmtContext = IfStmtContext; 
GDScriptParser.WhileStmtContext = WhileStmtContext; 
GDScriptParser.ForStmtContext = ForStmtContext; 
GDScriptParser.MatchStmtContext = MatchStmtContext; 
GDScriptParser.MatchBlockContext = MatchBlockContext; 
GDScriptParser.PatternListContext = PatternListContext; 
GDScriptParser.PatternContext = PatternContext; 
GDScriptParser.BindingPatternContext = BindingPatternContext; 
GDScriptParser.ArrayPatternContext = ArrayPatternContext; 
GDScriptParser.DictPatternContext = DictPatternContext; 
GDScriptParser.KeyValuePatternContext = KeyValuePatternContext; 
GDScriptParser.FlowStmtContext = FlowStmtContext; 
GDScriptParser.AssignmentStmtContext = AssignmentStmtContext; 
GDScriptParser.VarDeclStmtContext = VarDeclStmtContext; 
GDScriptParser.AssertStmtContext = AssertStmtContext; 
GDScriptParser.YieldStmtContext = YieldStmtContext; 
GDScriptParser.PreloadStmtContext = PreloadStmtContext; 
GDScriptParser.ExprStmtContext = ExprStmtContext; 
GDScriptParser.ExpressionContext = ExpressionContext; 
GDScriptParser.LiteralContext = LiteralContext; 
GDScriptParser.KeyValueContext = KeyValueContext; 
