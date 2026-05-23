// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/gvpr/gvprParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import gvprParserListener from './gvprParserListener.js';
import GvprParserBase from './GvprParserBase.js';

const serializedATN = [4,1,92,587,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,5,0,82,8,0,10,0,
12,0,85,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,94,8,1,1,1,1,1,1,1,1,1,1,1,3,
1,101,8,1,1,1,1,1,1,1,1,1,1,1,3,1,108,8,1,1,1,1,1,1,1,1,1,3,1,114,8,1,1,
1,1,1,1,1,1,1,1,1,3,1,121,8,1,1,1,1,1,1,1,1,1,3,1,127,8,1,1,1,1,1,1,1,1,
1,1,1,3,1,134,8,1,1,1,1,1,1,1,1,1,1,1,3,1,141,8,1,3,1,143,8,1,1,2,3,2,146,
8,2,1,2,3,2,149,8,2,1,3,4,3,152,8,3,11,3,12,3,153,1,4,1,4,1,4,3,4,159,8,
4,1,5,1,5,1,5,1,5,3,5,165,8,5,1,5,5,5,168,8,5,10,5,12,5,171,9,5,1,5,3,5,
174,8,5,1,6,1,6,3,6,178,8,6,1,6,1,6,3,6,182,8,6,1,6,1,6,1,6,1,6,3,6,188,
8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,200,8,6,1,6,3,6,203,8,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,214,8,6,1,6,1,6,3,6,218,8,6,1,6,
1,6,3,6,222,8,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,3,6,259,8,6,1,6,1,6,3,6,263,8,6,1,6,1,6,3,6,267,8,6,3,6,269,
8,6,1,7,1,7,1,7,5,7,274,8,7,10,7,12,7,277,9,7,1,8,1,8,3,8,281,8,8,1,9,1,
9,1,9,1,9,1,9,5,9,288,8,9,10,9,12,9,291,9,9,1,10,1,10,1,10,1,10,1,10,1,10,
3,10,299,8,10,1,11,1,11,1,12,1,12,1,12,5,12,306,8,12,10,12,12,12,309,9,12,
1,13,1,13,3,13,313,8,13,1,13,3,13,316,8,13,1,14,1,14,1,14,1,15,1,15,1,16,
1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,3,18,355,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,3,18,431,8,18,1,18,3,18,434,8,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,477,8,18,5,18,479,
8,18,10,18,12,18,482,9,18,1,19,1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,
23,3,23,494,8,23,1,23,3,23,497,8,23,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,
25,3,25,507,8,25,1,26,1,26,1,26,1,26,1,27,1,27,3,27,515,8,27,1,28,1,28,1,
28,1,28,1,28,1,28,5,28,523,8,28,10,28,12,28,526,9,28,1,29,1,29,1,29,3,29,
531,8,29,1,30,1,30,1,30,1,30,1,30,1,30,5,30,539,8,30,10,30,12,30,542,9,30,
1,31,1,31,1,31,1,32,1,32,4,32,549,8,32,11,32,12,32,550,1,33,1,33,1,33,1,
34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,566,8,34,1,35,1,35,
1,36,1,36,1,36,1,36,1,36,3,36,575,8,36,1,36,1,36,1,37,1,37,1,38,1,38,3,38,
583,8,38,1,39,1,39,1,39,0,5,14,18,36,56,60,40,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,
70,72,74,76,78,0,13,2,0,27,27,44,44,3,0,57,57,74,74,78,78,2,0,50,50,64,64,
2,0,39,40,47,48,2,0,35,35,52,52,2,0,70,70,73,73,2,0,67,67,84,84,2,0,4,6,
90,90,4,0,59,59,61,61,68,68,89,89,2,0,65,65,77,77,2,0,30,30,91,91,2,0,67,
67,91,91,8,0,22,22,29,29,37,37,45,45,49,49,80,80,86,87,91,91,653,0,83,1,
0,0,0,2,142,1,0,0,0,4,145,1,0,0,0,6,151,1,0,0,0,8,155,1,0,0,0,10,160,1,0,
0,0,12,268,1,0,0,0,14,270,1,0,0,0,16,278,1,0,0,0,18,282,1,0,0,0,20,298,1,
0,0,0,22,300,1,0,0,0,24,302,1,0,0,0,26,310,1,0,0,0,28,317,1,0,0,0,30,320,
1,0,0,0,32,322,1,0,0,0,34,324,1,0,0,0,36,433,1,0,0,0,38,483,1,0,0,0,40,485,
1,0,0,0,42,487,1,0,0,0,44,489,1,0,0,0,46,491,1,0,0,0,48,498,1,0,0,0,50,506,
1,0,0,0,52,508,1,0,0,0,54,514,1,0,0,0,56,516,1,0,0,0,58,530,1,0,0,0,60,532,
1,0,0,0,62,543,1,0,0,0,64,548,1,0,0,0,66,552,1,0,0,0,68,565,1,0,0,0,70,567,
1,0,0,0,72,569,1,0,0,0,74,578,1,0,0,0,76,580,1,0,0,0,78,584,1,0,0,0,80,82,
3,2,1,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,86,1,
0,0,0,85,83,1,0,0,0,86,87,5,0,0,1,87,1,1,0,0,0,88,93,5,15,0,0,89,90,5,54,
0,0,90,91,3,4,2,0,91,92,5,20,0,0,92,94,1,0,0,0,93,89,1,0,0,0,93,94,1,0,0,
0,94,143,1,0,0,0,95,100,5,16,0,0,96,97,5,54,0,0,97,98,3,4,2,0,98,99,5,20,
0,0,99,101,1,0,0,0,100,96,1,0,0,0,100,101,1,0,0,0,101,143,1,0,0,0,102,107,
5,51,0,0,103,104,5,53,0,0,104,105,3,4,2,0,105,106,5,19,0,0,106,108,1,0,0,
0,107,103,1,0,0,0,107,108,1,0,0,0,108,113,1,0,0,0,109,110,5,54,0,0,110,111,
3,4,2,0,111,112,5,20,0,0,112,114,1,0,0,0,113,109,1,0,0,0,113,114,1,0,0,0,
114,143,1,0,0,0,115,120,5,31,0,0,116,117,5,53,0,0,117,118,3,4,2,0,118,119,
5,19,0,0,119,121,1,0,0,0,120,116,1,0,0,0,120,121,1,0,0,0,121,126,1,0,0,0,
122,123,5,54,0,0,123,124,3,4,2,0,124,125,5,20,0,0,125,127,1,0,0,0,126,122,
1,0,0,0,126,127,1,0,0,0,127,143,1,0,0,0,128,133,5,34,0,0,129,130,5,54,0,
0,130,131,3,4,2,0,131,132,5,20,0,0,132,134,1,0,0,0,133,129,1,0,0,0,133,134,
1,0,0,0,134,143,1,0,0,0,135,140,5,33,0,0,136,137,5,54,0,0,137,138,3,4,2,
0,138,139,5,20,0,0,139,141,1,0,0,0,140,136,1,0,0,0,140,141,1,0,0,0,141,143,
1,0,0,0,142,88,1,0,0,0,142,95,1,0,0,0,142,102,1,0,0,0,142,115,1,0,0,0,142,
128,1,0,0,0,142,135,1,0,0,0,143,3,1,0,0,0,144,146,3,10,5,0,145,144,1,0,0,
0,145,146,1,0,0,0,146,148,1,0,0,0,147,149,3,6,3,0,148,147,1,0,0,0,148,149,
1,0,0,0,149,5,1,0,0,0,150,152,3,8,4,0,151,150,1,0,0,0,152,153,1,0,0,0,153,
151,1,0,0,0,153,154,1,0,0,0,154,7,1,0,0,0,155,156,3,74,37,0,156,158,5,23,
0,0,157,159,3,10,5,0,158,157,1,0,0,0,158,159,1,0,0,0,159,9,1,0,0,0,160,169,
3,12,6,0,161,162,4,5,0,0,162,165,5,66,0,0,163,165,4,5,1,0,164,161,1,0,0,
0,164,163,1,0,0,0,165,166,1,0,0,0,166,168,3,12,6,0,167,164,1,0,0,0,168,171,
1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,
172,174,5,66,0,0,173,172,1,0,0,0,173,174,1,0,0,0,174,11,1,0,0,0,175,177,
5,54,0,0,176,178,3,10,5,0,177,176,1,0,0,0,177,178,1,0,0,0,178,179,1,0,0,
0,179,269,5,20,0,0,180,182,3,22,11,0,181,180,1,0,0,0,181,182,1,0,0,0,182,
183,1,0,0,0,183,184,3,76,38,0,184,185,3,24,12,0,185,269,1,0,0,0,186,188,
3,22,11,0,187,186,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,3,76,38,
0,190,191,3,28,14,0,191,269,1,0,0,0,192,269,3,36,18,0,193,194,5,42,0,0,194,
195,5,55,0,0,195,196,3,36,18,0,196,197,5,26,0,0,197,202,3,12,6,0,198,200,
5,66,0,0,199,198,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,203,3,34,17,
0,202,199,1,0,0,0,202,203,1,0,0,0,203,269,1,0,0,0,204,205,5,38,0,0,205,206,
5,55,0,0,206,207,3,46,23,0,207,208,5,26,0,0,208,209,3,12,6,0,209,269,1,0,
0,0,210,211,5,38,0,0,211,213,5,55,0,0,212,214,3,36,18,0,213,212,1,0,0,0,
213,214,1,0,0,0,214,215,1,0,0,0,215,217,5,66,0,0,216,218,3,36,18,0,217,216,
1,0,0,0,217,218,1,0,0,0,218,219,1,0,0,0,219,221,5,66,0,0,220,222,3,36,18,
0,221,220,1,0,0,0,221,222,1,0,0,0,222,223,1,0,0,0,223,224,5,26,0,0,224,269,
3,12,6,0,225,226,5,46,0,0,226,227,5,55,0,0,227,228,3,46,23,0,228,229,5,26,
0,0,229,230,3,12,6,0,230,269,1,0,0,0,231,232,5,85,0,0,232,233,5,55,0,0,233,
234,5,91,0,0,234,269,5,26,0,0,235,236,5,85,0,0,236,237,5,55,0,0,237,238,
5,91,0,0,238,239,5,24,0,0,239,240,3,36,18,0,240,241,5,26,0,0,241,269,1,0,
0,0,242,243,5,88,0,0,243,244,5,55,0,0,244,245,3,36,18,0,245,246,5,26,0,0,
246,247,3,12,6,0,247,269,1,0,0,0,248,249,5,83,0,0,249,250,5,55,0,0,250,251,
3,36,18,0,251,252,5,26,0,0,252,253,5,54,0,0,253,254,3,14,7,0,254,255,5,20,
0,0,255,269,1,0,0,0,256,258,5,17,0,0,257,259,3,36,18,0,258,257,1,0,0,0,258,
259,1,0,0,0,259,269,1,0,0,0,260,262,5,25,0,0,261,263,3,36,18,0,262,261,1,
0,0,0,262,263,1,0,0,0,263,269,1,0,0,0,264,266,5,63,0,0,265,267,3,36,18,0,
266,265,1,0,0,0,266,267,1,0,0,0,267,269,1,0,0,0,268,175,1,0,0,0,268,181,
1,0,0,0,268,187,1,0,0,0,268,192,1,0,0,0,268,193,1,0,0,0,268,204,1,0,0,0,
268,210,1,0,0,0,268,225,1,0,0,0,268,231,1,0,0,0,268,235,1,0,0,0,268,242,
1,0,0,0,268,248,1,0,0,0,268,256,1,0,0,0,268,260,1,0,0,0,268,264,1,0,0,0,
269,13,1,0,0,0,270,275,6,7,-1,0,271,272,10,1,0,0,272,274,3,16,8,0,273,271,
1,0,0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,15,1,0,0,0,277,
275,1,0,0,0,278,280,3,18,9,0,279,281,3,10,5,0,280,279,1,0,0,0,280,281,1,
0,0,0,281,17,1,0,0,0,282,283,6,9,-1,0,283,284,3,20,10,0,284,289,1,0,0,0,
285,286,10,1,0,0,286,288,3,20,10,0,287,285,1,0,0,0,288,291,1,0,0,0,289,287,
1,0,0,0,289,290,1,0,0,0,290,19,1,0,0,0,291,289,1,0,0,0,292,293,5,18,0,0,
293,294,3,40,20,0,294,295,5,23,0,0,295,299,1,0,0,0,296,297,5,28,0,0,297,
299,5,23,0,0,298,292,1,0,0,0,298,296,1,0,0,0,299,21,1,0,0,0,300,301,5,79,
0,0,301,23,1,0,0,0,302,307,3,26,13,0,303,304,5,24,0,0,304,306,3,26,13,0,
305,303,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,25,1,
0,0,0,309,307,1,0,0,0,310,312,3,30,15,0,311,313,3,50,25,0,312,311,1,0,0,
0,312,313,1,0,0,0,313,315,1,0,0,0,314,316,3,70,35,0,315,314,1,0,0,0,315,
316,1,0,0,0,316,27,1,0,0,0,317,318,3,30,15,0,318,319,3,72,36,0,319,29,1,
0,0,0,320,321,5,91,0,0,321,31,1,0,0,0,322,323,5,91,0,0,323,33,1,0,0,0,324,
325,5,32,0,0,325,326,3,12,6,0,326,35,1,0,0,0,327,328,6,18,-1,0,328,329,5,
55,0,0,329,330,3,36,18,0,330,331,5,26,0,0,331,434,1,0,0,0,332,333,5,55,0,
0,333,334,3,76,38,0,334,335,5,26,0,0,335,336,3,36,18,32,336,434,1,0,0,0,
337,338,7,0,0,0,338,434,3,46,23,0,339,340,3,46,23,0,340,341,7,0,0,0,341,
434,1,0,0,0,342,343,5,14,0,0,343,355,3,36,18,0,344,345,5,58,0,0,345,355,
5,91,0,0,346,347,5,69,0,0,347,355,3,36,18,0,348,349,5,73,0,0,349,355,3,36,
18,0,350,351,5,70,0,0,351,355,3,36,18,0,352,353,5,9,0,0,353,355,3,46,23,
0,354,342,1,0,0,0,354,344,1,0,0,0,354,346,1,0,0,0,354,348,1,0,0,0,354,350,
1,0,0,0,354,352,1,0,0,0,355,434,1,0,0,0,356,357,3,48,24,0,357,358,5,53,0,
0,358,359,3,54,27,0,359,360,5,19,0,0,360,434,1,0,0,0,361,362,3,78,39,0,362,
363,5,55,0,0,363,364,3,54,27,0,364,365,5,26,0,0,365,434,1,0,0,0,366,367,
5,41,0,0,367,368,5,55,0,0,368,369,3,54,27,0,369,370,5,26,0,0,370,434,1,0,
0,0,371,372,5,81,0,0,372,373,5,55,0,0,373,374,3,54,27,0,374,375,5,26,0,0,
375,434,1,0,0,0,376,377,5,82,0,0,377,378,5,55,0,0,378,379,3,54,27,0,379,
380,5,26,0,0,380,434,1,0,0,0,381,382,3,38,19,0,382,383,5,55,0,0,383,384,
3,36,18,0,384,385,5,24,0,0,385,386,5,91,0,0,386,387,5,26,0,0,387,434,1,0,
0,0,388,389,3,38,19,0,389,390,5,55,0,0,390,391,3,36,18,0,391,392,5,24,0,
0,392,393,5,91,0,0,393,394,5,24,0,0,394,395,3,36,18,0,395,396,5,26,0,0,396,
434,1,0,0,0,397,398,5,36,0,0,398,399,5,55,0,0,399,400,3,36,18,0,400,401,
5,26,0,0,401,434,1,0,0,0,402,403,5,62,0,0,403,404,5,55,0,0,404,434,5,26,
0,0,405,406,5,76,0,0,406,407,5,55,0,0,407,434,5,26,0,0,408,409,5,76,0,0,
409,410,5,55,0,0,410,411,3,36,18,0,411,412,5,26,0,0,412,434,1,0,0,0,413,
414,5,60,0,0,414,415,5,55,0,0,415,416,3,54,27,0,416,417,5,26,0,0,417,434,
1,0,0,0,418,419,3,42,21,0,419,420,5,55,0,0,420,421,3,54,27,0,421,422,5,26,
0,0,422,434,1,0,0,0,423,424,3,44,22,0,424,425,5,55,0,0,425,426,3,54,27,0,
426,427,5,26,0,0,427,434,1,0,0,0,428,430,3,46,23,0,429,431,3,68,34,0,430,
429,1,0,0,0,430,431,1,0,0,0,431,434,1,0,0,0,432,434,3,40,20,0,433,327,1,
0,0,0,433,332,1,0,0,0,433,337,1,0,0,0,433,339,1,0,0,0,433,354,1,0,0,0,433,
356,1,0,0,0,433,361,1,0,0,0,433,366,1,0,0,0,433,371,1,0,0,0,433,376,1,0,
0,0,433,381,1,0,0,0,433,388,1,0,0,0,433,397,1,0,0,0,433,402,1,0,0,0,433,
405,1,0,0,0,433,408,1,0,0,0,433,413,1,0,0,0,433,418,1,0,0,0,433,423,1,0,
0,0,433,428,1,0,0,0,433,432,1,0,0,0,434,480,1,0,0,0,435,436,10,28,0,0,436,
437,7,1,0,0,437,479,3,36,18,29,438,439,10,26,0,0,439,440,7,2,0,0,440,479,
3,36,18,27,441,442,10,25,0,0,442,443,7,3,0,0,443,479,3,36,18,26,444,445,
10,24,0,0,445,446,7,4,0,0,446,479,3,36,18,25,447,448,10,23,0,0,448,449,5,
9,0,0,449,479,3,36,18,24,450,451,10,22,0,0,451,452,5,21,0,0,452,479,3,36,
18,23,453,454,10,21,0,0,454,455,5,75,0,0,455,479,3,36,18,22,456,457,10,20,
0,0,457,458,5,10,0,0,458,479,3,36,18,21,459,460,10,19,0,0,460,461,5,56,0,
0,461,479,3,36,18,20,462,463,10,18,0,0,463,464,5,71,0,0,464,465,3,36,18,
0,465,466,5,23,0,0,466,467,3,36,18,18,467,479,1,0,0,0,468,469,10,17,0,0,
469,470,5,24,0,0,470,479,3,36,18,18,471,476,10,27,0,0,472,473,7,5,0,0,473,
477,3,36,18,0,474,475,5,43,0,0,475,477,5,91,0,0,476,472,1,0,0,0,476,474,
1,0,0,0,477,479,1,0,0,0,478,435,1,0,0,0,478,438,1,0,0,0,478,441,1,0,0,0,
478,444,1,0,0,0,478,447,1,0,0,0,478,450,1,0,0,0,478,453,1,0,0,0,478,456,
1,0,0,0,478,459,1,0,0,0,478,462,1,0,0,0,478,468,1,0,0,0,478,471,1,0,0,0,
479,482,1,0,0,0,480,478,1,0,0,0,480,481,1,0,0,0,481,37,1,0,0,0,482,480,1,
0,0,0,483,484,7,6,0,0,484,39,1,0,0,0,485,486,7,7,0,0,486,41,1,0,0,0,487,
488,7,8,0,0,488,43,1,0,0,0,489,490,7,9,0,0,490,45,1,0,0,0,491,493,7,10,0,
0,492,494,3,52,26,0,493,492,1,0,0,0,493,494,1,0,0,0,494,496,1,0,0,0,495,
497,3,64,32,0,496,495,1,0,0,0,496,497,1,0,0,0,497,47,1,0,0,0,498,499,5,91,
0,0,499,49,1,0,0,0,500,501,5,53,0,0,501,507,5,19,0,0,502,503,5,53,0,0,503,
504,3,76,38,0,504,505,5,19,0,0,505,507,1,0,0,0,506,500,1,0,0,0,506,502,1,
0,0,0,507,51,1,0,0,0,508,509,5,53,0,0,509,510,3,36,18,0,510,511,5,19,0,0,
511,53,1,0,0,0,512,515,1,0,0,0,513,515,3,56,28,0,514,512,1,0,0,0,514,513,
1,0,0,0,515,55,1,0,0,0,516,517,6,28,-1,0,517,518,3,36,18,0,518,524,1,0,0,
0,519,520,10,1,0,0,520,521,5,24,0,0,521,523,3,36,18,0,522,519,1,0,0,0,523,
526,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,57,1,0,0,0,526,524,1,0,0,
0,527,531,1,0,0,0,528,531,3,76,38,0,529,531,3,60,30,0,530,527,1,0,0,0,530,
528,1,0,0,0,530,529,1,0,0,0,531,59,1,0,0,0,532,533,6,30,-1,0,533,534,3,62,
31,0,534,540,1,0,0,0,535,536,10,1,0,0,536,537,5,24,0,0,537,539,3,62,31,0,
538,535,1,0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,540,541,1,0,0,0,541,61,1,
0,0,0,542,540,1,0,0,0,543,544,3,76,38,0,544,545,3,32,16,0,545,63,1,0,0,0,
546,547,5,72,0,0,547,549,7,11,0,0,548,546,1,0,0,0,549,550,1,0,0,0,550,548,
1,0,0,0,550,551,1,0,0,0,551,65,1,0,0,0,552,553,5,72,0,0,553,554,5,91,0,0,
554,67,1,0,0,0,555,556,5,7,0,0,556,566,3,36,18,0,557,558,5,11,0,0,558,566,
3,36,18,0,559,560,5,8,0,0,560,566,3,36,18,0,561,562,5,12,0,0,562,566,3,36,
18,0,563,564,5,13,0,0,564,566,3,36,18,0,565,555,1,0,0,0,565,557,1,0,0,0,
565,559,1,0,0,0,565,561,1,0,0,0,565,563,1,0,0,0,566,69,1,0,0,0,567,568,3,
68,34,0,568,71,1,0,0,0,569,570,5,55,0,0,570,571,3,58,29,0,571,572,5,26,0,
0,572,574,5,54,0,0,573,575,3,10,5,0,574,573,1,0,0,0,574,575,1,0,0,0,575,
576,1,0,0,0,576,577,5,20,0,0,577,73,1,0,0,0,578,579,5,91,0,0,579,75,1,0,
0,0,580,582,7,12,0,0,581,583,5,78,0,0,582,581,1,0,0,0,582,583,1,0,0,0,583,
77,1,0,0,0,584,585,5,91,0,0,585,79,1,0,0,0,53,83,93,100,107,113,120,126,
133,140,142,145,148,153,158,164,169,173,177,181,187,199,202,213,217,221,
258,262,266,268,275,280,289,298,307,312,315,354,430,433,476,478,480,493,
496,506,514,524,530,540,550,565,574,582];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class gvprParser extends GvprParserBase {

    static grammarFileName = "gvprParser.g4";
    static literalNames = [ null, null, null, null, null, null, null, "'='", 
                            "'-='", "'&'", "'&&'", "'+='", "'*='", "'/='", 
                            "'!'", "'BEGIN'", "'BEG_G'", "'break'", "'case'", 
                            "']'", "'}'", "'^'", "'char'", "':'", "','", 
                            "'continue'", "')'", "'--'", "'default'", "'double'", 
                            "'$'", "'E'", "'else'", "'END'", "'END_G'", 
                            "'=='", "'exit'", "'float'", "'for'", "'>='", 
                            "'>'", "'gsub'", "'if'", "'in'", "'++'", "'int'", 
                            "'forr'", "'<='", "'<'", "'long'", "'lsh'", 
                            "'N'", "'!='", "'['", "'{'", "'('", "'||'", 
                            "'%'", "'#'", "'printf'", "'procedure'", "'query'", 
                            "'rand'", "'return'", "'rsh'", "'scanf'", "';'", 
                            "'split'", "'sprintf'", "'~'", "'+'", "'?'", 
                            "'.'", "'-'", "'/'", "'|'", "'srand'", "'sscanf'", 
                            "'*'", "'static'", "'string'", "'sub'", "'substr'", 
                            "'switch'", "'tokens'", "'unset'", "'unsigned'", 
                            "'void'", "'while'", "'print'" ];
    static symbolicNames = [ null, "MLCOMMENT", "SLCOMMENT", "SHELLCOMMENT", 
                             "IntegerConstant", "FloatingConstant", "CharacterConstant", 
                             "AEQ", "AMEQ", "AMP", "AND", "APEQ", "ASEQ", 
                             "ASLEQ", "BANG", "BEGIN", "BEG_G", "BREAK", 
                             "CASE", "CB", "CCBC", "CIRCUMFLEX", "CHAR", 
                             "COLON", "COMMA", "CONTINUE", "CP", "DEC", 
                             "DEFAULT", "DOUBLE", "DOLLAR", "E", "ELSE", 
                             "END", "END_G", "EQ", "EXIT", "FLOAT", "FOR", 
                             "GE", "GT", "GSUB", "IF", "IN_OP", "INC", "INT", 
                             "ITERATER", "LE", "LT", "LONG", "LSH", "N", 
                             "NE", "OB", "OCBC", "OP", "OR", "PERCENT", 
                             "POUND", "PRINTF", "PROCEDURE", "QUERY", "RAND", 
                             "RETURN", "RSH", "SCANF", "SEMI_COLON", "SPLIT", 
                             "SPRINTF", "SQUIGGLE", "PLUS", "QM", "DOT", 
                             "MINUS", "SLASH", "PIPE", "SRAND", "SSCANF", 
                             "STAR", "STATIC", "STRING", "SUB", "SUBSTR", 
                             "SWITCH", "TOKENS", "UNSET", "UNSIGNED", "VOID", 
                             "WHILE", "XPRINT", "StringLit", "ID", "WS" ];
    static ruleNames = [ "preds", "pred", "program", "action_list", "action_", 
                         "statement_list", "statement", "switch_list", "switch_item", 
                         "case_list", "case_item", "static", "dcl_list", 
                         "dcl_item", "fdcl_item", "dcl_name", "name", "else_", 
                         "expr", "splitop", "constant", "print_", "scan", 
                         "variable", "array_", "array", "index", "args", 
                         "arg_list", "formals", "formal_list", "formal_item", 
                         "members", "member", "assign", "initialize_", "finitialize_", 
                         "label", "declare", "function" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = gvprParser.ruleNames;
        this.literalNames = gvprParser.literalNames;
        this.symbolicNames = gvprParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 5:
    	    		return this.statement_list_sempred(localctx, predIndex);
    	case 7:
    	    		return this.switch_list_sempred(localctx, predIndex);
    	case 9:
    	    		return this.case_list_sempred(localctx, predIndex);
    	case 18:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 28:
    	    		return this.arg_list_sempred(localctx, predIndex);
    	case 30:
    	    		return this.formal_list_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    statement_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return  this.IsSemiRequired() ;
    		case 1:
    			return  this.IsSemiNotRequired() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    switch_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    case_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 28);
    		case 5:
    			return this.precpred(this._ctx, 26);
    		case 6:
    			return this.precpred(this._ctx, 25);
    		case 7:
    			return this.precpred(this._ctx, 24);
    		case 8:
    			return this.precpred(this._ctx, 23);
    		case 9:
    			return this.precpred(this._ctx, 22);
    		case 10:
    			return this.precpred(this._ctx, 21);
    		case 11:
    			return this.precpred(this._ctx, 20);
    		case 12:
    			return this.precpred(this._ctx, 19);
    		case 13:
    			return this.precpred(this._ctx, 18);
    		case 14:
    			return this.precpred(this._ctx, 17);
    		case 15:
    			return this.precpred(this._ctx, 27);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    arg_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 16:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    formal_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 17:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	preds() {
	    let localctx = new PredsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, gvprParser.RULE_preds);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2147581952) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 262147) !== 0)) {
	            this.state = 80;
	            this.pred();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 86;
	        this.match(gvprParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pred() {
	    let localctx = new PredContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, gvprParser.RULE_pred);
	    var _la = 0;
	    try {
	        this.state = 142;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 88;
	            this.match(gvprParser.BEGIN);
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 89;
	                this.match(gvprParser.OCBC);
	                this.state = 90;
	                this.program();
	                this.state = 91;
	                this.match(gvprParser.CCBC);
	            }

	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 95;
	            this.match(gvprParser.BEG_G);
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 96;
	                this.match(gvprParser.OCBC);
	                this.state = 97;
	                this.program();
	                this.state = 98;
	                this.match(gvprParser.CCBC);
	            }

	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.match(gvprParser.N);
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===53) {
	                this.state = 103;
	                this.match(gvprParser.OB);
	                this.state = 104;
	                this.program();
	                this.state = 105;
	                this.match(gvprParser.CB);
	            }

	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 109;
	                this.match(gvprParser.OCBC);
	                this.state = 110;
	                this.program();
	                this.state = 111;
	                this.match(gvprParser.CCBC);
	            }

	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 115;
	            this.match(gvprParser.E);
	            this.state = 120;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===53) {
	                this.state = 116;
	                this.match(gvprParser.OB);
	                this.state = 117;
	                this.program();
	                this.state = 118;
	                this.match(gvprParser.CB);
	            }

	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 122;
	                this.match(gvprParser.OCBC);
	                this.state = 123;
	                this.program();
	                this.state = 124;
	                this.match(gvprParser.CCBC);
	            }

	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 128;
	            this.match(gvprParser.END_G);
	            this.state = 133;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 129;
	                this.match(gvprParser.OCBC);
	                this.state = 130;
	                this.program();
	                this.state = 131;
	                this.match(gvprParser.CCBC);
	            }

	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 135;
	            this.match(gvprParser.END);
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 136;
	                this.match(gvprParser.OCBC);
	                this.state = 137;
	                this.program();
	                this.state = 138;
	                this.match(gvprParser.CCBC);
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



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, gvprParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 144;
	            this.statement_list();

	        }
	        this.state = 148;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===91) {
	            this.state = 147;
	            this.action_list();
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



	action_list() {
	    let localctx = new Action_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, gvprParser.RULE_action_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 150;
	            this.action_();
	            this.state = 153; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===91);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	action_() {
	    let localctx = new Action_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, gvprParser.RULE_action_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 155;
	        this.label();
	        this.state = 156;
	        this.match(gvprParser.COLON);
	        this.state = 158;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 157;
	            this.statement_list();

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



	statement_list() {
	    let localctx = new Statement_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, gvprParser.RULE_statement_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.statement();
	        this.state = 169;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 164;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 161;
	                    if (!(  this.IsSemiRequired() )) {
	                        throw new antlr4.error.FailedPredicateException(this, " this.IsSemiRequired() ");
	                    }
	                    this.state = 162;
	                    this.match(gvprParser.SEMI_COLON);
	                    break;

	                case 2:
	                    this.state = 163;
	                    if (!(  this.IsSemiNotRequired() )) {
	                        throw new antlr4.error.FailedPredicateException(this, " this.IsSemiNotRequired() ");
	                    }
	                    break;

	                }
	                this.state = 166;
	                this.statement(); 
	            }
	            this.state = 171;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	        this.state = 173;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 172;
	            this.match(gvprParser.SEMI_COLON);

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
	    this.enterRule(localctx, 12, gvprParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 268;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 175;
	            this.match(gvprParser.OCBC);
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1782727280) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 2949392231) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 16775975) !== 0)) {
	                this.state = 176;
	                this.statement_list();
	            }

	            this.state = 179;
	            this.match(gvprParser.CCBC);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===79) {
	                this.state = 180;
	                this.static_();
	            }

	            this.state = 183;
	            this.declare();
	            this.state = 184;
	            this.dcl_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 187;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===79) {
	                this.state = 186;
	                this.static_();
	            }

	            this.state = 189;
	            this.declare();
	            this.state = 190;
	            this.fdcl_item();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 192;
	            this.expr(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 193;
	            this.match(gvprParser.IF);
	            this.state = 194;
	            this.match(gvprParser.OP);
	            this.state = 195;
	            this.expr(0);
	            this.state = 196;
	            this.match(gvprParser.CP);
	            this.state = 197;
	            this.statement();
	            this.state = 202;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            if(la_===1) {
	                this.state = 199;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===66) {
	                    this.state = 198;
	                    this.match(gvprParser.SEMI_COLON);
	                }

	                this.state = 201;
	                this.else_();

	            }
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 204;
	            this.match(gvprParser.FOR);
	            this.state = 205;
	            this.match(gvprParser.OP);
	            this.state = 206;
	            this.variable();
	            this.state = 207;
	            this.match(gvprParser.CP);
	            this.state = 208;
	            this.statement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 210;
	            this.match(gvprParser.FOR);
	            this.state = 211;
	            this.match(gvprParser.OP);
	            this.state = 213;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1207976560) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 2814902561) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 14770983) !== 0)) {
	                this.state = 212;
	                this.expr(0);
	            }

	            this.state = 215;
	            this.match(gvprParser.SEMI_COLON);
	            this.state = 217;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1207976560) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 2814902561) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 14770983) !== 0)) {
	                this.state = 216;
	                this.expr(0);
	            }

	            this.state = 219;
	            this.match(gvprParser.SEMI_COLON);
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1207976560) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 2814902561) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 14770983) !== 0)) {
	                this.state = 220;
	                this.expr(0);
	            }

	            this.state = 223;
	            this.match(gvprParser.CP);
	            this.state = 224;
	            this.statement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 225;
	            this.match(gvprParser.ITERATER);
	            this.state = 226;
	            this.match(gvprParser.OP);
	            this.state = 227;
	            this.variable();
	            this.state = 228;
	            this.match(gvprParser.CP);
	            this.state = 229;
	            this.statement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 231;
	            this.match(gvprParser.UNSET);
	            this.state = 232;
	            this.match(gvprParser.OP);
	            this.state = 233;
	            this.match(gvprParser.ID);
	            this.state = 234;
	            this.match(gvprParser.CP);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 235;
	            this.match(gvprParser.UNSET);
	            this.state = 236;
	            this.match(gvprParser.OP);
	            this.state = 237;
	            this.match(gvprParser.ID);
	            this.state = 238;
	            this.match(gvprParser.COMMA);
	            this.state = 239;
	            this.expr(0);
	            this.state = 240;
	            this.match(gvprParser.CP);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 242;
	            this.match(gvprParser.WHILE);
	            this.state = 243;
	            this.match(gvprParser.OP);
	            this.state = 244;
	            this.expr(0);
	            this.state = 245;
	            this.match(gvprParser.CP);
	            this.state = 246;
	            this.statement();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 248;
	            this.match(gvprParser.SWITCH);
	            this.state = 249;
	            this.match(gvprParser.OP);
	            this.state = 250;
	            this.expr(0);
	            this.state = 251;
	            this.match(gvprParser.CP);
	            this.state = 252;
	            this.match(gvprParser.OCBC);
	            this.state = 253;
	            this.switch_list(0);
	            this.state = 254;
	            this.match(gvprParser.CCBC);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 256;
	            this.match(gvprParser.BREAK);
	            this.state = 258;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	            if(la_===1) {
	                this.state = 257;
	                this.expr(0);

	            }
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 260;
	            this.match(gvprParser.CONTINUE);
	            this.state = 262;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	            if(la_===1) {
	                this.state = 261;
	                this.expr(0);

	            }
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 264;
	            this.match(gvprParser.RETURN);
	            this.state = 266;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	            if(la_===1) {
	                this.state = 265;
	                this.expr(0);

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


	switch_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Switch_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, gvprParser.RULE_switch_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 275;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Switch_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_switch_list);
	                this.state = 271;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 272;
	                this.switch_item(); 
	            }
	            this.state = 277;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
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



	switch_item() {
	    let localctx = new Switch_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, gvprParser.RULE_switch_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.case_list(0);
	        this.state = 280;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 279;
	            this.statement_list();

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


	case_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Case_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, gvprParser.RULE_case_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.case_item();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 289;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Case_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_case_list);
	                this.state = 285;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 286;
	                this.case_item(); 
	            }
	            this.state = 291;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
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



	case_item() {
	    let localctx = new Case_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, gvprParser.RULE_case_item);
	    try {
	        this.state = 298;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.match(gvprParser.CASE);
	            this.state = 293;
	            this.constant();
	            this.state = 294;
	            this.match(gvprParser.COLON);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 296;
	            this.match(gvprParser.DEFAULT);
	            this.state = 297;
	            this.match(gvprParser.COLON);
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



	static_() {
	    let localctx = new StaticContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, gvprParser.RULE_static);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(gvprParser.STATIC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dcl_list() {
	    let localctx = new Dcl_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, gvprParser.RULE_dcl_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.dcl_item();
	        this.state = 307;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 303;
	                this.match(gvprParser.COMMA);
	                this.state = 304;
	                this.dcl_item(); 
	            }
	            this.state = 309;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
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



	dcl_item() {
	    let localctx = new Dcl_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, gvprParser.RULE_dcl_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.dcl_name();
	        this.state = 312;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 311;
	            this.array();

	        }
	        this.state = 315;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        if(la_===1) {
	            this.state = 314;
	            this.initialize_();

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



	fdcl_item() {
	    let localctx = new Fdcl_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, gvprParser.RULE_fdcl_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.dcl_name();
	        this.state = 318;
	        this.finitialize_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dcl_name() {
	    let localctx = new Dcl_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, gvprParser.RULE_dcl_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(gvprParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 32, gvprParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(gvprParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	else_() {
	    let localctx = new Else_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, gvprParser.RULE_else_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(gvprParser.ELSE);
	        this.state = 325;
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


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 36;
	    this.enterRecursionRule(localctx, 36, gvprParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 328;
	            this.match(gvprParser.OP);
	            this.state = 329;
	            this.expr(0);
	            this.state = 330;
	            this.match(gvprParser.CP);
	            break;

	        case 2:
	            this.state = 332;
	            this.match(gvprParser.OP);
	            this.state = 333;
	            this.declare();
	            this.state = 334;
	            this.match(gvprParser.CP);
	            this.state = 335;
	            this.expr(32);
	            break;

	        case 3:
	            this.state = 337;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===44)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 338;
	            this.variable();
	            break;

	        case 4:
	            this.state = 339;
	            this.variable();
	            this.state = 340;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===44)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 5:
	            this.state = 354;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 14:
	                this.state = 342;
	                this.match(gvprParser.BANG);
	                this.state = 343;
	                this.expr(0);
	                break;
	            case 58:
	                this.state = 344;
	                this.match(gvprParser.POUND);
	                this.state = 345;
	                this.match(gvprParser.ID);
	                break;
	            case 69:
	                this.state = 346;
	                this.match(gvprParser.SQUIGGLE);
	                this.state = 347;
	                this.expr(0);
	                break;
	            case 73:
	                this.state = 348;
	                this.match(gvprParser.MINUS);
	                this.state = 349;
	                this.expr(0);
	                break;
	            case 70:
	                this.state = 350;
	                this.match(gvprParser.PLUS);
	                this.state = 351;
	                this.expr(0);
	                break;
	            case 9:
	                this.state = 352;
	                this.match(gvprParser.AMP);
	                this.state = 353;
	                this.variable();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            break;

	        case 6:
	            this.state = 356;
	            this.array_();
	            this.state = 357;
	            this.match(gvprParser.OB);
	            this.state = 358;
	            this.args();
	            this.state = 359;
	            this.match(gvprParser.CB);
	            break;

	        case 7:
	            this.state = 361;
	            this.function_();
	            this.state = 362;
	            this.match(gvprParser.OP);
	            this.state = 363;
	            this.args();
	            this.state = 364;
	            this.match(gvprParser.CP);
	            break;

	        case 8:
	            this.state = 366;
	            this.match(gvprParser.GSUB);
	            this.state = 367;
	            this.match(gvprParser.OP);
	            this.state = 368;
	            this.args();
	            this.state = 369;
	            this.match(gvprParser.CP);
	            break;

	        case 9:
	            this.state = 371;
	            this.match(gvprParser.SUB);
	            this.state = 372;
	            this.match(gvprParser.OP);
	            this.state = 373;
	            this.args();
	            this.state = 374;
	            this.match(gvprParser.CP);
	            break;

	        case 10:
	            this.state = 376;
	            this.match(gvprParser.SUBSTR);
	            this.state = 377;
	            this.match(gvprParser.OP);
	            this.state = 378;
	            this.args();
	            this.state = 379;
	            this.match(gvprParser.CP);
	            break;

	        case 11:
	            this.state = 381;
	            this.splitop();
	            this.state = 382;
	            this.match(gvprParser.OP);
	            this.state = 383;
	            this.expr(0);
	            this.state = 384;
	            this.match(gvprParser.COMMA);
	            this.state = 385;
	            this.match(gvprParser.ID);
	            this.state = 386;
	            this.match(gvprParser.CP);
	            break;

	        case 12:
	            this.state = 388;
	            this.splitop();
	            this.state = 389;
	            this.match(gvprParser.OP);
	            this.state = 390;
	            this.expr(0);
	            this.state = 391;
	            this.match(gvprParser.COMMA);
	            this.state = 392;
	            this.match(gvprParser.ID);
	            this.state = 393;
	            this.match(gvprParser.COMMA);
	            this.state = 394;
	            this.expr(0);
	            this.state = 395;
	            this.match(gvprParser.CP);
	            break;

	        case 13:
	            this.state = 397;
	            this.match(gvprParser.EXIT);
	            this.state = 398;
	            this.match(gvprParser.OP);
	            this.state = 399;
	            this.expr(0);
	            this.state = 400;
	            this.match(gvprParser.CP);
	            break;

	        case 14:
	            this.state = 402;
	            this.match(gvprParser.RAND);
	            this.state = 403;
	            this.match(gvprParser.OP);
	            this.state = 404;
	            this.match(gvprParser.CP);
	            break;

	        case 15:
	            this.state = 405;
	            this.match(gvprParser.SRAND);
	            this.state = 406;
	            this.match(gvprParser.OP);
	            this.state = 407;
	            this.match(gvprParser.CP);
	            break;

	        case 16:
	            this.state = 408;
	            this.match(gvprParser.SRAND);
	            this.state = 409;
	            this.match(gvprParser.OP);
	            this.state = 410;
	            this.expr(0);
	            this.state = 411;
	            this.match(gvprParser.CP);
	            break;

	        case 17:
	            this.state = 413;
	            this.match(gvprParser.PROCEDURE);
	            this.state = 414;
	            this.match(gvprParser.OP);
	            this.state = 415;
	            this.args();
	            this.state = 416;
	            this.match(gvprParser.CP);
	            break;

	        case 18:
	            this.state = 418;
	            this.print_();
	            this.state = 419;
	            this.match(gvprParser.OP);
	            this.state = 420;
	            this.args();
	            this.state = 421;
	            this.match(gvprParser.CP);
	            break;

	        case 19:
	            this.state = 423;
	            this.scan();
	            this.state = 424;
	            this.match(gvprParser.OP);
	            this.state = 425;
	            this.args();
	            this.state = 426;
	            this.match(gvprParser.CP);
	            break;

	        case 20:
	            this.state = 428;
	            this.variable();
	            this.state = 430;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	            if(la_===1) {
	                this.state = 429;
	                this.assign();

	            }
	            break;

	        case 21:
	            this.state = 432;
	            this.constant();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 480;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 478;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 435;
	                    if (!( this.precpred(this._ctx, 28))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 28)");
	                    }
	                    this.state = 436;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 2228225) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 437;
	                    this.expr(29);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 438;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 439;
	                    _la = this._input.LA(1);
	                    if(!(_la===50 || _la===64)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 440;
	                    this.expr(27);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 441;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 442;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 771) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 443;
	                    this.expr(26);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 444;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 445;
	                    _la = this._input.LA(1);
	                    if(!(_la===35 || _la===52)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 446;
	                    this.expr(25);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 447;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 448;
	                    this.match(gvprParser.AMP);
	                    this.state = 449;
	                    this.expr(24);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 450;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 451;
	                    this.match(gvprParser.CIRCUMFLEX);
	                    this.state = 452;
	                    this.expr(23);
	                    break;

	                case 7:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 453;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 454;
	                    this.match(gvprParser.PIPE);
	                    this.state = 455;
	                    this.expr(22);
	                    break;

	                case 8:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 456;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 457;
	                    this.match(gvprParser.AND);
	                    this.state = 458;
	                    this.expr(21);
	                    break;

	                case 9:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 459;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 460;
	                    this.match(gvprParser.OR);
	                    this.state = 461;
	                    this.expr(20);
	                    break;

	                case 10:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 462;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 463;
	                    this.match(gvprParser.QM);
	                    this.state = 464;
	                    this.expr(0);
	                    this.state = 465;
	                    this.match(gvprParser.COLON);
	                    this.state = 466;
	                    this.expr(18);
	                    break;

	                case 11:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 468;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 469;
	                    this.match(gvprParser.COMMA);
	                    this.state = 470;
	                    this.expr(18);
	                    break;

	                case 12:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_expr);
	                    this.state = 471;
	                    if (!( this.precpred(this._ctx, 27))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 27)");
	                    }
	                    this.state = 476;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 70:
	                    case 73:
	                        this.state = 472;
	                        _la = this._input.LA(1);
	                        if(!(_la===70 || _la===73)) {
	                        this._errHandler.recoverInline(this);
	                        }
	                        else {
	                        	this._errHandler.reportMatch(this);
	                            this.consume();
	                        }
	                        this.state = 473;
	                        this.expr(0);
	                        break;
	                    case 43:
	                        this.state = 474;
	                        this.match(gvprParser.IN_OP);
	                        this.state = 475;
	                        this.match(gvprParser.ID);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    break;

	                } 
	            }
	            this.state = 482;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
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



	splitop() {
	    let localctx = new SplitopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, gvprParser.RULE_splitop);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 483;
	        _la = this._input.LA(1);
	        if(!(_la===67 || _la===84)) {
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, gvprParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 112) !== 0) || _la===90)) {
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



	print_() {
	    let localctx = new Print_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, gvprParser.RULE_print_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
	        _la = this._input.LA(1);
	        if(!(((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 1073742341) !== 0))) {
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



	scan() {
	    let localctx = new ScanContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, gvprParser.RULE_scan);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        _la = this._input.LA(1);
	        if(!(_la===65 || _la===77)) {
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



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, gvprParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        _la = this._input.LA(1);
	        if(!(_la===30 || _la===91)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 493;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	        if(la_===1) {
	            this.state = 492;
	            this.index();

	        }
	        this.state = 496;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        if(la_===1) {
	            this.state = 495;
	            this.members();

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



	array_() {
	    let localctx = new Array_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, gvprParser.RULE_array_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 498;
	        this.match(gvprParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, gvprParser.RULE_array);
	    try {
	        this.state = 506;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 500;
	            this.match(gvprParser.OB);
	            this.state = 501;
	            this.match(gvprParser.CB);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 502;
	            this.match(gvprParser.OB);
	            this.state = 503;
	            this.declare();
	            this.state = 504;
	            this.match(gvprParser.CB);
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



	index() {
	    let localctx = new IndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, gvprParser.RULE_index);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        this.match(gvprParser.OB);
	        this.state = 509;
	        this.expr(0);
	        this.state = 510;
	        this.match(gvprParser.CB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 54, gvprParser.RULE_args);
	    try {
	        this.state = 514;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 26:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 4:
	        case 5:
	        case 6:
	        case 9:
	        case 14:
	        case 27:
	        case 30:
	        case 36:
	        case 41:
	        case 44:
	        case 55:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 65:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 73:
	        case 76:
	        case 77:
	        case 81:
	        case 82:
	        case 84:
	        case 89:
	        case 90:
	        case 91:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 513;
	            this.arg_list(0);
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


	arg_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Arg_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 56;
	    this.enterRecursionRule(localctx, 56, gvprParser.RULE_arg_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.expr(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 524;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Arg_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_arg_list);
	                this.state = 519;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 520;
	                this.match(gvprParser.COMMA);
	                this.state = 521;
	                this.expr(0); 
	            }
	            this.state = 526;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
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



	formals() {
	    let localctx = new FormalsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, gvprParser.RULE_formals);
	    try {
	        this.state = 530;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 528;
	            this.declare();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 529;
	            this.formal_list(0);
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


	formal_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Formal_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, gvprParser.RULE_formal_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 533;
	        this.formal_item();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 540;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Formal_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, gvprParser.RULE_formal_list);
	                this.state = 535;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 536;
	                this.match(gvprParser.COMMA);
	                this.state = 537;
	                this.formal_item(); 
	            }
	            this.state = 542;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
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



	formal_item() {
	    let localctx = new Formal_itemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, gvprParser.RULE_formal_item);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 543;
	        this.declare();
	        this.state = 544;
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



	members() {
	    let localctx = new MembersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, gvprParser.RULE_members);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 548; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 546;
	        		this.match(gvprParser.DOT);
	        		this.state = 547;
	        		_la = this._input.LA(1);
	        		if(!(_la===67 || _la===91)) {
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
	        	this.state = 550; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,49, this._ctx);
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



	member() {
	    let localctx = new MemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, gvprParser.RULE_member);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 552;
	        this.match(gvprParser.DOT);
	        this.state = 553;
	        this.match(gvprParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 68, gvprParser.RULE_assign);
	    try {
	        this.state = 565;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 555;
	            this.match(gvprParser.AEQ);
	            this.state = 556;
	            this.expr(0);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 557;
	            this.match(gvprParser.APEQ);
	            this.state = 558;
	            this.expr(0);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 559;
	            this.match(gvprParser.AMEQ);
	            this.state = 560;
	            this.expr(0);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 561;
	            this.match(gvprParser.ASEQ);
	            this.state = 562;
	            this.expr(0);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 563;
	            this.match(gvprParser.ASLEQ);
	            this.state = 564;
	            this.expr(0);
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



	initialize_() {
	    let localctx = new Initialize_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, gvprParser.RULE_initialize_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 567;
	        this.assign();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	finitialize_() {
	    let localctx = new Finitialize_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, gvprParser.RULE_finitialize_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 569;
	        this.match(gvprParser.OP);
	        this.state = 570;
	        this.formals();
	        this.state = 571;
	        this.match(gvprParser.CP);
	        this.state = 572;
	        this.match(gvprParser.OCBC);
	        this.state = 574;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1782727280) !== 0) || ((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 2949392231) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 16775975) !== 0)) {
	            this.state = 573;
	            this.statement_list();
	        }

	        this.state = 576;
	        this.match(gvprParser.CCBC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, gvprParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 578;
	        this.match(gvprParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declare() {
	    let localctx = new DeclareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, gvprParser.RULE_declare);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 580;
	        _la = this._input.LA(1);
	        if(!(((((_la - 22)) & ~0x1f) === 0 && ((1 << (_la - 22)) & 142639233) !== 0) || ((((_la - 80)) & ~0x1f) === 0 && ((1 << (_la - 80)) & 2241) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 582;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===78) {
	            this.state = 581;
	            this.match(gvprParser.STAR);
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
	    this.enterRule(localctx, 78, gvprParser.RULE_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        this.match(gvprParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

gvprParser.EOF = antlr4.Token.EOF;
gvprParser.MLCOMMENT = 1;
gvprParser.SLCOMMENT = 2;
gvprParser.SHELLCOMMENT = 3;
gvprParser.IntegerConstant = 4;
gvprParser.FloatingConstant = 5;
gvprParser.CharacterConstant = 6;
gvprParser.AEQ = 7;
gvprParser.AMEQ = 8;
gvprParser.AMP = 9;
gvprParser.AND = 10;
gvprParser.APEQ = 11;
gvprParser.ASEQ = 12;
gvprParser.ASLEQ = 13;
gvprParser.BANG = 14;
gvprParser.BEGIN = 15;
gvprParser.BEG_G = 16;
gvprParser.BREAK = 17;
gvprParser.CASE = 18;
gvprParser.CB = 19;
gvprParser.CCBC = 20;
gvprParser.CIRCUMFLEX = 21;
gvprParser.CHAR = 22;
gvprParser.COLON = 23;
gvprParser.COMMA = 24;
gvprParser.CONTINUE = 25;
gvprParser.CP = 26;
gvprParser.DEC = 27;
gvprParser.DEFAULT = 28;
gvprParser.DOUBLE = 29;
gvprParser.DOLLAR = 30;
gvprParser.E = 31;
gvprParser.ELSE = 32;
gvprParser.END = 33;
gvprParser.END_G = 34;
gvprParser.EQ = 35;
gvprParser.EXIT = 36;
gvprParser.FLOAT = 37;
gvprParser.FOR = 38;
gvprParser.GE = 39;
gvprParser.GT = 40;
gvprParser.GSUB = 41;
gvprParser.IF = 42;
gvprParser.IN_OP = 43;
gvprParser.INC = 44;
gvprParser.INT = 45;
gvprParser.ITERATER = 46;
gvprParser.LE = 47;
gvprParser.LT = 48;
gvprParser.LONG = 49;
gvprParser.LSH = 50;
gvprParser.N = 51;
gvprParser.NE = 52;
gvprParser.OB = 53;
gvprParser.OCBC = 54;
gvprParser.OP = 55;
gvprParser.OR = 56;
gvprParser.PERCENT = 57;
gvprParser.POUND = 58;
gvprParser.PRINTF = 59;
gvprParser.PROCEDURE = 60;
gvprParser.QUERY = 61;
gvprParser.RAND = 62;
gvprParser.RETURN = 63;
gvprParser.RSH = 64;
gvprParser.SCANF = 65;
gvprParser.SEMI_COLON = 66;
gvprParser.SPLIT = 67;
gvprParser.SPRINTF = 68;
gvprParser.SQUIGGLE = 69;
gvprParser.PLUS = 70;
gvprParser.QM = 71;
gvprParser.DOT = 72;
gvprParser.MINUS = 73;
gvprParser.SLASH = 74;
gvprParser.PIPE = 75;
gvprParser.SRAND = 76;
gvprParser.SSCANF = 77;
gvprParser.STAR = 78;
gvprParser.STATIC = 79;
gvprParser.STRING = 80;
gvprParser.SUB = 81;
gvprParser.SUBSTR = 82;
gvprParser.SWITCH = 83;
gvprParser.TOKENS = 84;
gvprParser.UNSET = 85;
gvprParser.UNSIGNED = 86;
gvprParser.VOID = 87;
gvprParser.WHILE = 88;
gvprParser.XPRINT = 89;
gvprParser.StringLit = 90;
gvprParser.ID = 91;
gvprParser.WS = 92;

gvprParser.RULE_preds = 0;
gvprParser.RULE_pred = 1;
gvprParser.RULE_program = 2;
gvprParser.RULE_action_list = 3;
gvprParser.RULE_action_ = 4;
gvprParser.RULE_statement_list = 5;
gvprParser.RULE_statement = 6;
gvprParser.RULE_switch_list = 7;
gvprParser.RULE_switch_item = 8;
gvprParser.RULE_case_list = 9;
gvprParser.RULE_case_item = 10;
gvprParser.RULE_static = 11;
gvprParser.RULE_dcl_list = 12;
gvprParser.RULE_dcl_item = 13;
gvprParser.RULE_fdcl_item = 14;
gvprParser.RULE_dcl_name = 15;
gvprParser.RULE_name = 16;
gvprParser.RULE_else_ = 17;
gvprParser.RULE_expr = 18;
gvprParser.RULE_splitop = 19;
gvprParser.RULE_constant = 20;
gvprParser.RULE_print_ = 21;
gvprParser.RULE_scan = 22;
gvprParser.RULE_variable = 23;
gvprParser.RULE_array_ = 24;
gvprParser.RULE_array = 25;
gvprParser.RULE_index = 26;
gvprParser.RULE_args = 27;
gvprParser.RULE_arg_list = 28;
gvprParser.RULE_formals = 29;
gvprParser.RULE_formal_list = 30;
gvprParser.RULE_formal_item = 31;
gvprParser.RULE_members = 32;
gvprParser.RULE_member = 33;
gvprParser.RULE_assign = 34;
gvprParser.RULE_initialize_ = 35;
gvprParser.RULE_finitialize_ = 36;
gvprParser.RULE_label = 37;
gvprParser.RULE_declare = 38;
gvprParser.RULE_function = 39;

class PredsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_preds;
    }

	EOF() {
	    return this.getToken(gvprParser.EOF, 0);
	};

	pred = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredContext);
	    } else {
	        return this.getTypedRuleContext(PredContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterPreds(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitPreds(this);
		}
	}


}



class PredContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_pred;
    }

	BEGIN() {
	    return this.getToken(gvprParser.BEGIN, 0);
	};

	OCBC() {
	    return this.getToken(gvprParser.OCBC, 0);
	};

	program = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProgramContext);
	    } else {
	        return this.getTypedRuleContext(ProgramContext,i);
	    }
	};

	CCBC() {
	    return this.getToken(gvprParser.CCBC, 0);
	};

	BEG_G() {
	    return this.getToken(gvprParser.BEG_G, 0);
	};

	N() {
	    return this.getToken(gvprParser.N, 0);
	};

	OB() {
	    return this.getToken(gvprParser.OB, 0);
	};

	CB() {
	    return this.getToken(gvprParser.CB, 0);
	};

	E() {
	    return this.getToken(gvprParser.E, 0);
	};

	END_G() {
	    return this.getToken(gvprParser.END_G, 0);
	};

	END() {
	    return this.getToken(gvprParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterPred(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitPred(this);
		}
	}


}



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
        this.ruleIndex = gvprParser.RULE_program;
    }

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	action_list() {
	    return this.getTypedRuleContext(Action_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitProgram(this);
		}
	}


}



class Action_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_action_list;
    }

	action_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Action_Context);
	    } else {
	        return this.getTypedRuleContext(Action_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterAction_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitAction_list(this);
		}
	}


}



class Action_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_action_;
    }

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	COLON() {
	    return this.getToken(gvprParser.COLON, 0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterAction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitAction_(this);
		}
	}


}



class Statement_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_statement_list;
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

	SEMI_COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gvprParser.SEMI_COLON);
	    } else {
	        return this.getToken(gvprParser.SEMI_COLON, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterStatement_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitStatement_list(this);
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
        this.ruleIndex = gvprParser.RULE_statement;
    }

	OCBC() {
	    return this.getToken(gvprParser.OCBC, 0);
	};

	CCBC() {
	    return this.getToken(gvprParser.CCBC, 0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	declare() {
	    return this.getTypedRuleContext(DeclareContext,0);
	};

	dcl_list() {
	    return this.getTypedRuleContext(Dcl_listContext,0);
	};

	static_() {
	    return this.getTypedRuleContext(StaticContext,0);
	};

	fdcl_item() {
	    return this.getTypedRuleContext(Fdcl_itemContext,0);
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

	IF() {
	    return this.getToken(gvprParser.IF, 0);
	};

	OP() {
	    return this.getToken(gvprParser.OP, 0);
	};

	CP() {
	    return this.getToken(gvprParser.CP, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	else_() {
	    return this.getTypedRuleContext(Else_Context,0);
	};

	SEMI_COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gvprParser.SEMI_COLON);
	    } else {
	        return this.getToken(gvprParser.SEMI_COLON, i);
	    }
	};


	FOR() {
	    return this.getToken(gvprParser.FOR, 0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ITERATER() {
	    return this.getToken(gvprParser.ITERATER, 0);
	};

	UNSET() {
	    return this.getToken(gvprParser.UNSET, 0);
	};

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	COMMA() {
	    return this.getToken(gvprParser.COMMA, 0);
	};

	WHILE() {
	    return this.getToken(gvprParser.WHILE, 0);
	};

	SWITCH() {
	    return this.getToken(gvprParser.SWITCH, 0);
	};

	switch_list() {
	    return this.getTypedRuleContext(Switch_listContext,0);
	};

	BREAK() {
	    return this.getToken(gvprParser.BREAK, 0);
	};

	CONTINUE() {
	    return this.getToken(gvprParser.CONTINUE, 0);
	};

	RETURN() {
	    return this.getToken(gvprParser.RETURN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class Switch_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_switch_list;
    }

	switch_list() {
	    return this.getTypedRuleContext(Switch_listContext,0);
	};

	switch_item() {
	    return this.getTypedRuleContext(Switch_itemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterSwitch_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitSwitch_list(this);
		}
	}


}



class Switch_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_switch_item;
    }

	case_list() {
	    return this.getTypedRuleContext(Case_listContext,0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterSwitch_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitSwitch_item(this);
		}
	}


}



class Case_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_case_list;
    }

	case_item() {
	    return this.getTypedRuleContext(Case_itemContext,0);
	};

	case_list() {
	    return this.getTypedRuleContext(Case_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterCase_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitCase_list(this);
		}
	}


}



class Case_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_case_item;
    }

	CASE() {
	    return this.getToken(gvprParser.CASE, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	COLON() {
	    return this.getToken(gvprParser.COLON, 0);
	};

	DEFAULT() {
	    return this.getToken(gvprParser.DEFAULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterCase_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitCase_item(this);
		}
	}


}



class StaticContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_static;
    }

	STATIC() {
	    return this.getToken(gvprParser.STATIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterStatic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitStatic(this);
		}
	}


}



class Dcl_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_dcl_list;
    }

	dcl_item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dcl_itemContext);
	    } else {
	        return this.getTypedRuleContext(Dcl_itemContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gvprParser.COMMA);
	    } else {
	        return this.getToken(gvprParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterDcl_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitDcl_list(this);
		}
	}


}



class Dcl_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_dcl_item;
    }

	dcl_name() {
	    return this.getTypedRuleContext(Dcl_nameContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	initialize_() {
	    return this.getTypedRuleContext(Initialize_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterDcl_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitDcl_item(this);
		}
	}


}



class Fdcl_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_fdcl_item;
    }

	dcl_name() {
	    return this.getTypedRuleContext(Dcl_nameContext,0);
	};

	finitialize_() {
	    return this.getTypedRuleContext(Finitialize_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterFdcl_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitFdcl_item(this);
		}
	}


}



class Dcl_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_dcl_name;
    }

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterDcl_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitDcl_name(this);
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
        this.ruleIndex = gvprParser.RULE_name;
    }

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitName(this);
		}
	}


}



class Else_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_else_;
    }

	ELSE() {
	    return this.getToken(gvprParser.ELSE, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterElse_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitElse_(this);
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
        this.ruleIndex = gvprParser.RULE_expr;
    }

	OP() {
	    return this.getToken(gvprParser.OP, 0);
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

	CP() {
	    return this.getToken(gvprParser.CP, 0);
	};

	declare() {
	    return this.getTypedRuleContext(DeclareContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	INC() {
	    return this.getToken(gvprParser.INC, 0);
	};

	DEC() {
	    return this.getToken(gvprParser.DEC, 0);
	};

	BANG() {
	    return this.getToken(gvprParser.BANG, 0);
	};

	POUND() {
	    return this.getToken(gvprParser.POUND, 0);
	};

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	SQUIGGLE() {
	    return this.getToken(gvprParser.SQUIGGLE, 0);
	};

	MINUS() {
	    return this.getToken(gvprParser.MINUS, 0);
	};

	PLUS() {
	    return this.getToken(gvprParser.PLUS, 0);
	};

	AMP() {
	    return this.getToken(gvprParser.AMP, 0);
	};

	array_() {
	    return this.getTypedRuleContext(Array_Context,0);
	};

	OB() {
	    return this.getToken(gvprParser.OB, 0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	CB() {
	    return this.getToken(gvprParser.CB, 0);
	};

	function_() {
	    return this.getTypedRuleContext(FunctionContext,0);
	};

	GSUB() {
	    return this.getToken(gvprParser.GSUB, 0);
	};

	SUB() {
	    return this.getToken(gvprParser.SUB, 0);
	};

	SUBSTR() {
	    return this.getToken(gvprParser.SUBSTR, 0);
	};

	splitop() {
	    return this.getTypedRuleContext(SplitopContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gvprParser.COMMA);
	    } else {
	        return this.getToken(gvprParser.COMMA, i);
	    }
	};


	EXIT() {
	    return this.getToken(gvprParser.EXIT, 0);
	};

	RAND() {
	    return this.getToken(gvprParser.RAND, 0);
	};

	SRAND() {
	    return this.getToken(gvprParser.SRAND, 0);
	};

	PROCEDURE() {
	    return this.getToken(gvprParser.PROCEDURE, 0);
	};

	print_() {
	    return this.getTypedRuleContext(Print_Context,0);
	};

	scan() {
	    return this.getTypedRuleContext(ScanContext,0);
	};

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	STAR() {
	    return this.getToken(gvprParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(gvprParser.SLASH, 0);
	};

	PERCENT() {
	    return this.getToken(gvprParser.PERCENT, 0);
	};

	LSH() {
	    return this.getToken(gvprParser.LSH, 0);
	};

	RSH() {
	    return this.getToken(gvprParser.RSH, 0);
	};

	LT() {
	    return this.getToken(gvprParser.LT, 0);
	};

	GT() {
	    return this.getToken(gvprParser.GT, 0);
	};

	LE() {
	    return this.getToken(gvprParser.LE, 0);
	};

	GE() {
	    return this.getToken(gvprParser.GE, 0);
	};

	EQ() {
	    return this.getToken(gvprParser.EQ, 0);
	};

	NE() {
	    return this.getToken(gvprParser.NE, 0);
	};

	CIRCUMFLEX() {
	    return this.getToken(gvprParser.CIRCUMFLEX, 0);
	};

	PIPE() {
	    return this.getToken(gvprParser.PIPE, 0);
	};

	AND() {
	    return this.getToken(gvprParser.AND, 0);
	};

	OR() {
	    return this.getToken(gvprParser.OR, 0);
	};

	QM() {
	    return this.getToken(gvprParser.QM, 0);
	};

	COLON() {
	    return this.getToken(gvprParser.COLON, 0);
	};

	IN_OP() {
	    return this.getToken(gvprParser.IN_OP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitExpr(this);
		}
	}


}



class SplitopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_splitop;
    }

	SPLIT() {
	    return this.getToken(gvprParser.SPLIT, 0);
	};

	TOKENS() {
	    return this.getToken(gvprParser.TOKENS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterSplitop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitSplitop(this);
		}
	}


}



class ConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_constant;
    }

	IntegerConstant() {
	    return this.getToken(gvprParser.IntegerConstant, 0);
	};

	FloatingConstant() {
	    return this.getToken(gvprParser.FloatingConstant, 0);
	};

	CharacterConstant() {
	    return this.getToken(gvprParser.CharacterConstant, 0);
	};

	StringLit() {
	    return this.getToken(gvprParser.StringLit, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitConstant(this);
		}
	}


}



class Print_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_print_;
    }

	XPRINT() {
	    return this.getToken(gvprParser.XPRINT, 0);
	};

	PRINTF() {
	    return this.getToken(gvprParser.PRINTF, 0);
	};

	QUERY() {
	    return this.getToken(gvprParser.QUERY, 0);
	};

	SPRINTF() {
	    return this.getToken(gvprParser.SPRINTF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterPrint_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitPrint_(this);
		}
	}


}



class ScanContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_scan;
    }

	SCANF() {
	    return this.getToken(gvprParser.SCANF, 0);
	};

	SSCANF() {
	    return this.getToken(gvprParser.SSCANF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterScan(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitScan(this);
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
        this.ruleIndex = gvprParser.RULE_variable;
    }

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	DOLLAR() {
	    return this.getToken(gvprParser.DOLLAR, 0);
	};

	index() {
	    return this.getTypedRuleContext(IndexContext,0);
	};

	members() {
	    return this.getTypedRuleContext(MembersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitVariable(this);
		}
	}


}



class Array_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_array_;
    }

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterArray_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitArray_(this);
		}
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_array;
    }

	OB() {
	    return this.getToken(gvprParser.OB, 0);
	};

	CB() {
	    return this.getToken(gvprParser.CB, 0);
	};

	declare() {
	    return this.getTypedRuleContext(DeclareContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitArray(this);
		}
	}


}



class IndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_index;
    }

	OB() {
	    return this.getToken(gvprParser.OB, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CB() {
	    return this.getToken(gvprParser.CB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitIndex(this);
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
        this.ruleIndex = gvprParser.RULE_args;
    }

	arg_list() {
	    return this.getTypedRuleContext(Arg_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitArgs(this);
		}
	}


}



class Arg_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_arg_list;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	arg_list() {
	    return this.getTypedRuleContext(Arg_listContext,0);
	};

	COMMA() {
	    return this.getToken(gvprParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterArg_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitArg_list(this);
		}
	}


}



class FormalsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_formals;
    }

	declare() {
	    return this.getTypedRuleContext(DeclareContext,0);
	};

	formal_list() {
	    return this.getTypedRuleContext(Formal_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterFormals(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitFormals(this);
		}
	}


}



class Formal_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_formal_list;
    }

	formal_item() {
	    return this.getTypedRuleContext(Formal_itemContext,0);
	};

	formal_list() {
	    return this.getTypedRuleContext(Formal_listContext,0);
	};

	COMMA() {
	    return this.getToken(gvprParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterFormal_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitFormal_list(this);
		}
	}


}



class Formal_itemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_formal_item;
    }

	declare() {
	    return this.getTypedRuleContext(DeclareContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterFormal_item(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitFormal_item(this);
		}
	}


}



class MembersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_members;
    }

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gvprParser.DOT);
	    } else {
	        return this.getToken(gvprParser.DOT, i);
	    }
	};


	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gvprParser.ID);
	    } else {
	        return this.getToken(gvprParser.ID, i);
	    }
	};


	SPLIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(gvprParser.SPLIT);
	    } else {
	        return this.getToken(gvprParser.SPLIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterMembers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitMembers(this);
		}
	}


}



class MemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_member;
    }

	DOT() {
	    return this.getToken(gvprParser.DOT, 0);
	};

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterMember(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitMember(this);
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
        this.ruleIndex = gvprParser.RULE_assign;
    }

	AEQ() {
	    return this.getToken(gvprParser.AEQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	APEQ() {
	    return this.getToken(gvprParser.APEQ, 0);
	};

	AMEQ() {
	    return this.getToken(gvprParser.AMEQ, 0);
	};

	ASEQ() {
	    return this.getToken(gvprParser.ASEQ, 0);
	};

	ASLEQ() {
	    return this.getToken(gvprParser.ASLEQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitAssign(this);
		}
	}


}



class Initialize_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_initialize_;
    }

	assign() {
	    return this.getTypedRuleContext(AssignContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterInitialize_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitInitialize_(this);
		}
	}


}



class Finitialize_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_finitialize_;
    }

	OP() {
	    return this.getToken(gvprParser.OP, 0);
	};

	formals() {
	    return this.getTypedRuleContext(FormalsContext,0);
	};

	CP() {
	    return this.getToken(gvprParser.CP, 0);
	};

	OCBC() {
	    return this.getToken(gvprParser.OCBC, 0);
	};

	CCBC() {
	    return this.getToken(gvprParser.CCBC, 0);
	};

	statement_list() {
	    return this.getTypedRuleContext(Statement_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterFinitialize_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitFinitialize_(this);
		}
	}


}



class LabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_label;
    }

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitLabel(this);
		}
	}


}



class DeclareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = gvprParser.RULE_declare;
    }

	CHAR() {
	    return this.getToken(gvprParser.CHAR, 0);
	};

	DOUBLE() {
	    return this.getToken(gvprParser.DOUBLE, 0);
	};

	FLOAT() {
	    return this.getToken(gvprParser.FLOAT, 0);
	};

	INT() {
	    return this.getToken(gvprParser.INT, 0);
	};

	LONG() {
	    return this.getToken(gvprParser.LONG, 0);
	};

	UNSIGNED() {
	    return this.getToken(gvprParser.UNSIGNED, 0);
	};

	VOID() {
	    return this.getToken(gvprParser.VOID, 0);
	};

	STRING() {
	    return this.getToken(gvprParser.STRING, 0);
	};

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	STAR() {
	    return this.getToken(gvprParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterDeclare(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitDeclare(this);
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
        this.ruleIndex = gvprParser.RULE_function;
    }

	ID() {
	    return this.getToken(gvprParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.enterFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof gvprParserListener ) {
	        listener.exitFunction(this);
		}
	}


}




gvprParser.PredsContext = PredsContext; 
gvprParser.PredContext = PredContext; 
gvprParser.ProgramContext = ProgramContext; 
gvprParser.Action_listContext = Action_listContext; 
gvprParser.Action_Context = Action_Context; 
gvprParser.Statement_listContext = Statement_listContext; 
gvprParser.StatementContext = StatementContext; 
gvprParser.Switch_listContext = Switch_listContext; 
gvprParser.Switch_itemContext = Switch_itemContext; 
gvprParser.Case_listContext = Case_listContext; 
gvprParser.Case_itemContext = Case_itemContext; 
gvprParser.StaticContext = StaticContext; 
gvprParser.Dcl_listContext = Dcl_listContext; 
gvprParser.Dcl_itemContext = Dcl_itemContext; 
gvprParser.Fdcl_itemContext = Fdcl_itemContext; 
gvprParser.Dcl_nameContext = Dcl_nameContext; 
gvprParser.NameContext = NameContext; 
gvprParser.Else_Context = Else_Context; 
gvprParser.ExprContext = ExprContext; 
gvprParser.SplitopContext = SplitopContext; 
gvprParser.ConstantContext = ConstantContext; 
gvprParser.Print_Context = Print_Context; 
gvprParser.ScanContext = ScanContext; 
gvprParser.VariableContext = VariableContext; 
gvprParser.Array_Context = Array_Context; 
gvprParser.ArrayContext = ArrayContext; 
gvprParser.IndexContext = IndexContext; 
gvprParser.ArgsContext = ArgsContext; 
gvprParser.Arg_listContext = Arg_listContext; 
gvprParser.FormalsContext = FormalsContext; 
gvprParser.Formal_listContext = Formal_listContext; 
gvprParser.Formal_itemContext = Formal_itemContext; 
gvprParser.MembersContext = MembersContext; 
gvprParser.MemberContext = MemberContext; 
gvprParser.AssignContext = AssignContext; 
gvprParser.Initialize_Context = Initialize_Context; 
gvprParser.Finitialize_Context = Finitialize_Context; 
gvprParser.LabelContext = LabelContext; 
gvprParser.DeclareContext = DeclareContext; 
gvprParser.FunctionContext = FunctionContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
