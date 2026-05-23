// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/awk/awk.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import awkListener from './awkListener.js';
const serializedATN = [4,1,66,661,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,3,
0,85,8,0,1,0,1,0,1,1,1,1,1,1,5,1,92,8,1,10,1,12,1,95,9,1,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,110,8,2,1,3,3,3,113,8,3,1,4,1,4,
1,4,5,4,118,8,4,10,4,12,4,121,9,4,1,5,1,5,3,5,125,8,5,1,6,1,6,1,6,1,6,1,
6,3,6,132,8,6,1,7,1,7,1,8,1,8,1,8,1,8,3,8,140,8,8,1,8,1,8,1,9,1,9,1,9,3,
9,147,8,9,1,9,1,9,5,9,151,8,9,10,9,12,9,154,9,9,1,10,4,10,157,8,10,11,10,
12,10,158,1,11,5,11,162,8,11,10,11,12,11,165,9,11,1,11,1,11,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,182,8,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,3,12,217,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,
13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,264,8,13,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,282,8,14,1,15,
3,15,285,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,295,8,16,1,17,
1,17,3,17,299,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,3,18,315,8,18,1,19,1,19,1,19,1,19,1,19,1,19,3,19,323,8,19,
1,20,3,20,326,8,20,1,21,1,21,1,21,1,21,1,21,5,21,333,8,21,10,21,12,21,336,
9,21,1,22,1,22,1,22,1,22,1,22,4,22,343,8,22,11,22,12,22,344,1,23,3,23,348,
8,23,1,24,1,24,3,24,352,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,5,25,397,8,25,10,25,12,25,400,9,25,1,26,1,26,1,
26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,3,26,420,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,3,26,438,8,26,1,26,1,26,1,26,3,26,443,8,26,3,26,
445,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,
26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,486,8,26,
10,26,12,26,489,9,26,1,27,3,27,492,8,27,1,28,1,28,1,28,1,28,1,28,5,28,499,
8,28,10,28,12,28,502,9,28,1,29,1,29,3,29,506,8,29,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,5,30,545,8,30,10,30,12,30,548,9,30,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,
31,568,8,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,3,31,586,8,31,3,31,588,8,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,
31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,5,31,
623,8,31,10,31,12,31,626,9,31,1,32,1,32,1,32,1,32,1,32,3,32,633,8,32,1,32,
1,32,3,32,637,8,32,1,33,1,33,3,33,641,8,33,1,34,5,34,644,8,34,10,34,12,34,
647,9,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,1,40,1,40,
0,5,18,50,52,60,62,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,8,2,
0,24,24,30,30,2,0,6,6,62,62,1,0,11,12,1,0,14,16,5,0,9,9,17,17,48,49,51,51,
54,54,2,0,18,18,55,55,2,0,46,46,50,50,5,0,22,22,43,43,47,47,52,53,57,58,
739,0,82,1,0,0,0,2,93,1,0,0,0,4,109,1,0,0,0,6,112,1,0,0,0,8,114,1,0,0,0,
10,124,1,0,0,0,12,126,1,0,0,0,14,133,1,0,0,0,16,135,1,0,0,0,18,146,1,0,0,
0,20,156,1,0,0,0,22,163,1,0,0,0,24,216,1,0,0,0,26,263,1,0,0,0,28,281,1,0,
0,0,30,284,1,0,0,0,32,294,1,0,0,0,34,296,1,0,0,0,36,314,1,0,0,0,38,322,1,
0,0,0,40,325,1,0,0,0,42,327,1,0,0,0,44,337,1,0,0,0,46,347,1,0,0,0,48,351,
1,0,0,0,50,353,1,0,0,0,52,444,1,0,0,0,54,491,1,0,0,0,56,493,1,0,0,0,58,505,
1,0,0,0,60,507,1,0,0,0,62,587,1,0,0,0,64,636,1,0,0,0,66,638,1,0,0,0,68,645,
1,0,0,0,70,648,1,0,0,0,72,650,1,0,0,0,74,652,1,0,0,0,76,654,1,0,0,0,78,656,
1,0,0,0,80,658,1,0,0,0,82,84,3,2,1,0,83,85,3,4,2,0,84,83,1,0,0,0,84,85,1,
0,0,0,85,86,1,0,0,0,86,87,5,0,0,1,87,1,1,0,0,0,88,89,3,4,2,0,89,90,3,18,
9,0,90,92,1,0,0,0,91,88,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,
0,94,3,1,0,0,0,95,93,1,0,0,0,96,110,3,16,8,0,97,98,3,10,5,0,98,99,3,16,8,
0,99,110,1,0,0,0,100,110,3,12,6,0,101,102,5,33,0,0,102,103,3,78,39,0,103,
104,5,1,0,0,104,105,3,6,3,0,105,106,5,2,0,0,106,107,3,68,34,0,107,108,3,
16,8,0,108,110,1,0,0,0,109,96,1,0,0,0,109,97,1,0,0,0,109,100,1,0,0,0,109,
101,1,0,0,0,110,5,1,0,0,0,111,113,3,8,4,0,112,111,1,0,0,0,112,113,1,0,0,
0,113,7,1,0,0,0,114,119,3,80,40,0,115,116,5,3,0,0,116,118,3,80,40,0,117,
115,1,0,0,0,118,121,1,0,0,0,119,117,1,0,0,0,119,120,1,0,0,0,120,9,1,0,0,
0,121,119,1,0,0,0,122,125,3,12,6,0,123,125,3,14,7,0,124,122,1,0,0,0,124,
123,1,0,0,0,125,11,1,0,0,0,126,131,3,48,24,0,127,128,5,3,0,0,128,129,3,68,
34,0,129,130,3,48,24,0,130,132,1,0,0,0,131,127,1,0,0,0,131,132,1,0,0,0,132,
13,1,0,0,0,133,134,7,0,0,0,134,15,1,0,0,0,135,136,5,4,0,0,136,139,3,68,34,
0,137,140,3,20,10,0,138,140,3,22,11,0,139,137,1,0,0,0,139,138,1,0,0,0,139,
140,1,0,0,0,140,141,1,0,0,0,141,142,5,5,0,0,142,17,1,0,0,0,143,144,6,9,-1,
0,144,147,5,6,0,0,145,147,5,62,0,0,146,143,1,0,0,0,146,145,1,0,0,0,147,152,
1,0,0,0,148,149,10,3,0,0,149,151,5,62,0,0,150,148,1,0,0,0,151,154,1,0,0,
0,152,150,1,0,0,0,152,153,1,0,0,0,153,19,1,0,0,0,154,152,1,0,0,0,155,157,
3,24,12,0,156,155,1,0,0,0,157,158,1,0,0,0,158,156,1,0,0,0,158,159,1,0,0,
0,159,21,1,0,0,0,160,162,3,24,12,0,161,160,1,0,0,0,162,165,1,0,0,0,163,161,
1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,163,1,0,0,0,166,167,3,26,13,
0,167,23,1,0,0,0,168,169,3,16,8,0,169,170,3,68,34,0,170,217,1,0,0,0,171,
172,5,35,0,0,172,173,5,1,0,0,173,174,3,48,24,0,174,175,5,2,0,0,175,176,3,
68,34,0,176,181,3,24,12,0,177,178,5,29,0,0,178,179,3,68,34,0,179,180,3,24,
12,0,180,182,1,0,0,0,181,177,1,0,0,0,181,182,1,0,0,0,182,217,1,0,0,0,183,
184,5,41,0,0,184,185,5,1,0,0,185,186,3,48,24,0,186,187,5,2,0,0,187,188,3,
68,34,0,188,189,3,24,12,0,189,217,1,0,0,0,190,191,5,32,0,0,191,192,5,1,0,
0,192,193,3,30,15,0,193,194,5,6,0,0,194,195,3,46,23,0,195,196,5,6,0,0,196,
197,3,30,15,0,197,198,5,2,0,0,198,199,3,68,34,0,199,200,3,24,12,0,200,217,
1,0,0,0,201,202,5,32,0,0,202,203,5,1,0,0,203,204,3,80,40,0,204,205,5,36,
0,0,205,206,3,80,40,0,206,207,5,2,0,0,207,208,3,68,34,0,208,209,3,24,12,
0,209,217,1,0,0,0,210,211,5,6,0,0,211,217,3,68,34,0,212,213,3,28,14,0,213,
214,7,1,0,0,214,215,3,68,34,0,215,217,1,0,0,0,216,168,1,0,0,0,216,171,1,
0,0,0,216,183,1,0,0,0,216,190,1,0,0,0,216,201,1,0,0,0,216,210,1,0,0,0,216,
212,1,0,0,0,217,25,1,0,0,0,218,264,3,28,14,0,219,220,5,35,0,0,220,221,5,
1,0,0,221,222,3,48,24,0,222,223,5,2,0,0,223,224,3,68,34,0,224,225,3,26,13,
0,225,264,1,0,0,0,226,227,5,35,0,0,227,228,5,1,0,0,228,229,3,48,24,0,229,
230,5,2,0,0,230,231,3,68,34,0,231,232,3,24,12,0,232,233,5,29,0,0,233,234,
3,68,34,0,234,235,3,26,13,0,235,264,1,0,0,0,236,237,5,41,0,0,237,238,5,1,
0,0,238,239,3,48,24,0,239,240,5,2,0,0,240,241,3,68,34,0,241,242,3,26,13,
0,242,264,1,0,0,0,243,244,5,32,0,0,244,245,5,1,0,0,245,246,3,30,15,0,246,
247,5,6,0,0,247,248,3,46,23,0,248,249,5,6,0,0,249,250,3,30,15,0,250,251,
5,2,0,0,251,252,3,68,34,0,252,253,3,26,13,0,253,264,1,0,0,0,254,255,5,32,
0,0,255,256,5,1,0,0,256,257,3,80,40,0,257,258,5,36,0,0,258,259,3,80,40,0,
259,260,5,2,0,0,260,261,3,68,34,0,261,262,3,26,13,0,262,264,1,0,0,0,263,
218,1,0,0,0,263,219,1,0,0,0,263,226,1,0,0,0,263,236,1,0,0,0,263,243,1,0,
0,0,263,254,1,0,0,0,264,27,1,0,0,0,265,282,3,32,16,0,266,282,5,25,0,0,267,
282,5,26,0,0,268,282,5,37,0,0,269,270,5,31,0,0,270,282,3,46,23,0,271,272,
5,40,0,0,272,282,3,46,23,0,273,274,5,28,0,0,274,275,3,68,34,0,275,276,3,
24,12,0,276,277,5,41,0,0,277,278,5,1,0,0,278,279,3,48,24,0,279,280,5,2,0,
0,280,282,1,0,0,0,281,265,1,0,0,0,281,266,1,0,0,0,281,267,1,0,0,0,281,268,
1,0,0,0,281,269,1,0,0,0,281,271,1,0,0,0,281,273,1,0,0,0,282,29,1,0,0,0,283,
285,3,32,16,0,284,283,1,0,0,0,284,285,1,0,0,0,285,31,1,0,0,0,286,287,5,27,
0,0,287,288,3,80,40,0,288,289,5,7,0,0,289,290,3,42,21,0,290,291,5,8,0,0,
291,295,1,0,0,0,292,295,3,48,24,0,293,295,3,34,17,0,294,286,1,0,0,0,294,
292,1,0,0,0,294,293,1,0,0,0,295,33,1,0,0,0,296,298,3,36,18,0,297,299,3,38,
19,0,298,297,1,0,0,0,298,299,1,0,0,0,299,35,1,0,0,0,300,301,5,38,0,0,301,
315,3,54,27,0,302,303,5,38,0,0,303,304,5,1,0,0,304,305,3,44,22,0,305,306,
5,2,0,0,306,315,1,0,0,0,307,308,5,39,0,0,308,315,3,56,28,0,309,310,5,39,
0,0,310,311,5,1,0,0,311,312,3,44,22,0,312,313,5,2,0,0,313,315,1,0,0,0,314,
300,1,0,0,0,314,302,1,0,0,0,314,307,1,0,0,0,314,309,1,0,0,0,315,37,1,0,0,
0,316,317,5,9,0,0,317,323,3,48,24,0,318,319,5,45,0,0,319,323,3,48,24,0,320,
321,5,10,0,0,321,323,3,48,24,0,322,316,1,0,0,0,322,318,1,0,0,0,322,320,1,
0,0,0,323,39,1,0,0,0,324,326,3,42,21,0,325,324,1,0,0,0,325,326,1,0,0,0,326,
41,1,0,0,0,327,334,3,48,24,0,328,329,5,3,0,0,329,330,3,68,34,0,330,331,3,
48,24,0,331,333,1,0,0,0,332,328,1,0,0,0,333,336,1,0,0,0,334,332,1,0,0,0,
334,335,1,0,0,0,335,43,1,0,0,0,336,334,1,0,0,0,337,342,3,48,24,0,338,339,
5,3,0,0,339,340,3,68,34,0,340,341,3,48,24,0,341,343,1,0,0,0,342,338,1,0,
0,0,343,344,1,0,0,0,344,342,1,0,0,0,344,345,1,0,0,0,345,45,1,0,0,0,346,348,
3,48,24,0,347,346,1,0,0,0,347,348,1,0,0,0,348,47,1,0,0,0,349,352,3,50,25,
0,350,352,3,52,26,0,351,349,1,0,0,0,351,350,1,0,0,0,352,49,1,0,0,0,353,354,
6,25,-1,0,354,355,7,2,0,0,355,356,3,48,24,0,356,398,1,0,0,0,357,358,10,11,
0,0,358,359,5,13,0,0,359,397,3,48,24,0,360,361,10,10,0,0,361,362,7,3,0,0,
362,397,3,48,24,0,363,364,10,9,0,0,364,365,7,2,0,0,365,397,3,48,24,0,366,
367,10,8,0,0,367,397,3,52,26,0,368,369,10,7,0,0,369,370,7,4,0,0,370,397,
3,48,24,0,371,372,10,6,0,0,372,373,7,5,0,0,373,397,3,48,24,0,374,375,10,
5,0,0,375,376,5,36,0,0,376,397,3,80,40,0,377,378,10,4,0,0,378,379,5,44,0,
0,379,380,3,68,34,0,380,381,3,48,24,0,381,397,1,0,0,0,382,383,10,3,0,0,383,
384,5,56,0,0,384,385,3,68,34,0,385,386,3,48,24,0,386,397,1,0,0,0,387,388,
10,2,0,0,388,389,5,19,0,0,389,390,3,48,24,0,390,391,5,20,0,0,391,392,3,48,
24,0,392,397,1,0,0,0,393,394,10,1,0,0,394,395,5,10,0,0,395,397,3,66,33,0,
396,357,1,0,0,0,396,360,1,0,0,0,396,363,1,0,0,0,396,366,1,0,0,0,396,368,
1,0,0,0,396,371,1,0,0,0,396,374,1,0,0,0,396,377,1,0,0,0,396,382,1,0,0,0,
396,387,1,0,0,0,396,393,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,
1,0,0,0,399,51,1,0,0,0,400,398,1,0,0,0,401,402,6,26,-1,0,402,403,5,1,0,0,
403,404,3,48,24,0,404,405,5,2,0,0,405,445,1,0,0,0,406,407,5,21,0,0,407,445,
3,48,24,0,408,409,5,1,0,0,409,410,3,44,22,0,410,411,5,2,0,0,411,412,5,36,
0,0,412,413,3,80,40,0,413,445,1,0,0,0,414,445,3,70,35,0,415,445,3,72,36,
0,416,445,3,74,37,0,417,419,3,64,32,0,418,420,7,6,0,0,419,418,1,0,0,0,419,
420,1,0,0,0,420,445,1,0,0,0,421,422,7,6,0,0,422,445,3,64,32,0,423,424,3,
64,32,0,424,425,7,7,0,0,425,426,3,48,24,0,426,445,1,0,0,0,427,428,3,78,39,
0,428,429,5,1,0,0,429,430,3,40,20,0,430,431,5,2,0,0,431,445,1,0,0,0,432,
437,3,76,38,0,433,434,5,1,0,0,434,435,3,40,20,0,435,436,5,2,0,0,436,438,
1,0,0,0,437,433,1,0,0,0,437,438,1,0,0,0,438,445,1,0,0,0,439,442,3,66,33,
0,440,441,5,17,0,0,441,443,3,48,24,0,442,440,1,0,0,0,442,443,1,0,0,0,443,
445,1,0,0,0,444,401,1,0,0,0,444,406,1,0,0,0,444,408,1,0,0,0,444,414,1,0,
0,0,444,415,1,0,0,0,444,416,1,0,0,0,444,417,1,0,0,0,444,421,1,0,0,0,444,
423,1,0,0,0,444,427,1,0,0,0,444,432,1,0,0,0,444,439,1,0,0,0,445,487,1,0,
0,0,446,447,10,18,0,0,447,486,3,52,26,19,448,449,10,21,0,0,449,450,5,13,
0,0,450,486,3,48,24,0,451,452,10,20,0,0,452,453,7,3,0,0,453,486,3,48,24,
0,454,455,10,19,0,0,455,456,7,2,0,0,456,486,3,48,24,0,457,458,10,17,0,0,
458,459,7,4,0,0,459,486,3,48,24,0,460,461,10,16,0,0,461,462,7,5,0,0,462,
486,3,48,24,0,463,464,10,15,0,0,464,465,5,36,0,0,465,486,3,80,40,0,466,467,
10,13,0,0,467,468,5,44,0,0,468,469,3,68,34,0,469,470,3,48,24,0,470,486,1,
0,0,0,471,472,10,12,0,0,472,473,5,56,0,0,473,474,3,68,34,0,474,475,3,48,
24,0,475,486,1,0,0,0,476,477,10,11,0,0,477,478,5,19,0,0,478,479,3,48,24,
0,479,480,5,20,0,0,480,481,3,48,24,0,481,486,1,0,0,0,482,483,10,1,0,0,483,
484,5,10,0,0,484,486,3,66,33,0,485,446,1,0,0,0,485,448,1,0,0,0,485,451,1,
0,0,0,485,454,1,0,0,0,485,457,1,0,0,0,485,460,1,0,0,0,485,463,1,0,0,0,485,
466,1,0,0,0,485,471,1,0,0,0,485,476,1,0,0,0,485,482,1,0,0,0,486,489,1,0,
0,0,487,485,1,0,0,0,487,488,1,0,0,0,488,53,1,0,0,0,489,487,1,0,0,0,490,492,
3,56,28,0,491,490,1,0,0,0,491,492,1,0,0,0,492,55,1,0,0,0,493,500,3,58,29,
0,494,495,5,3,0,0,495,496,3,68,34,0,496,497,3,58,29,0,497,499,1,0,0,0,498,
494,1,0,0,0,499,502,1,0,0,0,500,498,1,0,0,0,500,501,1,0,0,0,501,57,1,0,0,
0,502,500,1,0,0,0,503,506,3,60,30,0,504,506,3,62,31,0,505,503,1,0,0,0,505,
504,1,0,0,0,506,59,1,0,0,0,507,508,6,30,-1,0,508,509,7,2,0,0,509,510,3,58,
29,0,510,546,1,0,0,0,511,512,10,9,0,0,512,513,5,13,0,0,513,545,3,58,29,0,
514,515,10,8,0,0,515,516,7,3,0,0,516,545,3,58,29,0,517,518,10,7,0,0,518,
519,7,2,0,0,519,545,3,58,29,0,520,521,10,6,0,0,521,545,3,62,31,0,522,523,
10,5,0,0,523,524,7,5,0,0,524,545,3,58,29,0,525,526,10,4,0,0,526,527,5,36,
0,0,527,545,3,80,40,0,528,529,10,3,0,0,529,530,5,44,0,0,530,531,3,68,34,
0,531,532,3,58,29,0,532,545,1,0,0,0,533,534,10,2,0,0,534,535,5,56,0,0,535,
536,3,68,34,0,536,537,3,58,29,0,537,545,1,0,0,0,538,539,10,1,0,0,539,540,
5,19,0,0,540,541,3,58,29,0,541,542,5,20,0,0,542,543,3,58,29,0,543,545,1,
0,0,0,544,511,1,0,0,0,544,514,1,0,0,0,544,517,1,0,0,0,544,520,1,0,0,0,544,
522,1,0,0,0,544,525,1,0,0,0,544,528,1,0,0,0,544,533,1,0,0,0,544,538,1,0,
0,0,545,548,1,0,0,0,546,544,1,0,0,0,546,547,1,0,0,0,547,61,1,0,0,0,548,546,
1,0,0,0,549,550,6,31,-1,0,550,551,5,1,0,0,551,552,3,48,24,0,552,553,5,2,
0,0,553,588,1,0,0,0,554,555,5,21,0,0,555,588,3,58,29,0,556,557,5,1,0,0,557,
558,3,44,22,0,558,559,5,2,0,0,559,560,5,36,0,0,560,561,3,80,40,0,561,588,
1,0,0,0,562,588,3,70,35,0,563,588,3,72,36,0,564,588,3,74,37,0,565,567,3,
64,32,0,566,568,7,6,0,0,567,566,1,0,0,0,567,568,1,0,0,0,568,588,1,0,0,0,
569,570,7,6,0,0,570,588,3,64,32,0,571,572,3,64,32,0,572,573,7,7,0,0,573,
574,3,58,29,0,574,588,1,0,0,0,575,576,3,78,39,0,576,577,5,1,0,0,577,578,
3,40,20,0,578,579,5,2,0,0,579,588,1,0,0,0,580,585,3,76,38,0,581,582,5,1,
0,0,582,583,3,40,20,0,583,584,5,2,0,0,584,586,1,0,0,0,585,581,1,0,0,0,585,
586,1,0,0,0,586,588,1,0,0,0,587,549,1,0,0,0,587,554,1,0,0,0,587,556,1,0,
0,0,587,562,1,0,0,0,587,563,1,0,0,0,587,564,1,0,0,0,587,565,1,0,0,0,587,
569,1,0,0,0,587,571,1,0,0,0,587,575,1,0,0,0,587,580,1,0,0,0,588,624,1,0,
0,0,589,590,10,15,0,0,590,623,3,62,31,16,591,592,10,18,0,0,592,593,5,13,
0,0,593,623,3,58,29,0,594,595,10,17,0,0,595,596,7,3,0,0,596,623,3,58,29,
0,597,598,10,16,0,0,598,599,7,2,0,0,599,623,3,58,29,0,600,601,10,14,0,0,
601,602,7,5,0,0,602,623,3,58,29,0,603,604,10,13,0,0,604,605,5,36,0,0,605,
623,3,80,40,0,606,607,10,11,0,0,607,608,5,44,0,0,608,609,3,68,34,0,609,610,
3,58,29,0,610,623,1,0,0,0,611,612,10,10,0,0,612,613,5,56,0,0,613,614,3,68,
34,0,614,615,3,58,29,0,615,623,1,0,0,0,616,617,10,9,0,0,617,618,5,19,0,0,
618,619,3,58,29,0,619,620,5,20,0,0,620,621,3,58,29,0,621,623,1,0,0,0,622,
589,1,0,0,0,622,591,1,0,0,0,622,594,1,0,0,0,622,597,1,0,0,0,622,600,1,0,
0,0,622,603,1,0,0,0,622,606,1,0,0,0,622,611,1,0,0,0,622,616,1,0,0,0,623,
626,1,0,0,0,624,622,1,0,0,0,624,625,1,0,0,0,625,63,1,0,0,0,626,624,1,0,0,
0,627,632,3,80,40,0,628,629,5,7,0,0,629,630,3,42,21,0,630,631,5,8,0,0,631,
633,1,0,0,0,632,628,1,0,0,0,632,633,1,0,0,0,633,637,1,0,0,0,634,635,5,23,
0,0,635,637,3,48,24,0,636,627,1,0,0,0,636,634,1,0,0,0,637,65,1,0,0,0,638,
640,5,34,0,0,639,641,3,64,32,0,640,639,1,0,0,0,640,641,1,0,0,0,641,67,1,
0,0,0,642,644,5,62,0,0,643,642,1,0,0,0,644,647,1,0,0,0,645,643,1,0,0,0,645,
646,1,0,0,0,646,69,1,0,0,0,647,645,1,0,0,0,648,649,5,63,0,0,649,71,1,0,0,
0,650,651,5,65,0,0,651,73,1,0,0,0,652,653,5,60,0,0,653,75,1,0,0,0,654,655,
5,42,0,0,655,77,1,0,0,0,656,657,5,66,0,0,657,79,1,0,0,0,658,659,5,66,0,0,
659,81,1,0,0,0,48,84,93,109,112,119,124,131,139,146,152,158,163,181,216,
263,281,284,294,298,314,322,325,334,344,347,351,396,398,419,437,442,444,
485,487,491,500,505,544,546,567,585,587,622,624,632,636,640,645];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class awkParser extends antlr4.Parser {

    static grammarFileName = "awk.g4";
    static literalNames = [ null, "'('", "')'", "','", "'{'", "'}'", "';'", 
                            "'['", "']'", "'>'", "'|'", "'+'", "'-'", "'^'", 
                            "'*'", "'/'", "'%'", "'<'", "'~'", "'?'", "':'", 
                            "'!'", "'='", "'$'", "'BEGIN'", "'break'", "'continue'", 
                            "'delete'", "'do'", "'else'", "'END'", "'exit'", 
                            "'for'", "'function'", "'getline'", "'if'", 
                            "'in'", "'next'", "'print'", "'printf'", "'return'", 
                            "'while'", null, "'+='", "'&&'", "'>>'", "'--'", 
                            "'/='", "'=='", "'>='", "'++'", "'<='", "'%='", 
                            "'*='", "'!='", "'!~'", "'||'", "'^='", "'-='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "BEGIN", "BREAK", "CONTINUE", "DELETE", "DO", 
                             "ELSE", "END", "EXIT", "FOR", "FUNCTION", "GETLINE", 
                             "IF", "IN", "NEXT", "PRINT", "PRINTF", "RETURN", 
                             "WHILE", "BUILTIN_FUNC_NAME", "ADD_ASSIGN", 
                             "AND", "APPEND", "DECR", "DIV_ASSIGN", "EQ", 
                             "GE", "INCR", "LE", "MOD_ASSIGN", "MUL_ASSIGN", 
                             "NE", "NO_MATCH", "OR", "POW_ASSIGN", "SUB_ASSIGN", 
                             "COMMENT", "ERE", "ESC_NEWLINE", "NEWLINE", 
                             "NUMBER", "SPACE", "STRING", "WORD" ];
    static ruleNames = [ "program", "item_list", "item", "param_list_opt", 
                         "param_list", "pattern", "normal_pattern", "special_pattern", 
                         "action_", "terminator", "terminated_statement_list", 
                         "unterminated_statement_list", "terminated_statement", 
                         "unterminated_statement", "terminatable_statement", 
                         "simple_statement_opt", "simple_statement", "print_statement", 
                         "simple_print_statement", "output_redirection", 
                         "expr_list_opt", "expr_list", "multiple_expr_list", 
                         "expr_opt", "expr", "unary_expr", "non_unary_expr", 
                         "print_expr_list_opt", "print_expr_list", "print_expr", 
                         "unary_print_expr", "non_unary_print_expr", "lvalue", 
                         "simple_get", "newline_opt", "number", "string", 
                         "ere", "builtin_func_name", "func_name", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = awkParser.ruleNames;
        this.literalNames = awkParser.literalNames;
        this.symbolicNames = awkParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 9:
    	    		return this.terminator_sempred(localctx, predIndex);
    	case 25:
    	    		return this.unary_expr_sempred(localctx, predIndex);
    	case 26:
    	    		return this.non_unary_expr_sempred(localctx, predIndex);
    	case 30:
    	    		return this.unary_print_expr_sempred(localctx, predIndex);
    	case 31:
    	    		return this.non_unary_print_expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    terminator_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    unary_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 11);
    		case 2:
    			return this.precpred(this._ctx, 10);
    		case 3:
    			return this.precpred(this._ctx, 9);
    		case 4:
    			return this.precpred(this._ctx, 8);
    		case 5:
    			return this.precpred(this._ctx, 7);
    		case 6:
    			return this.precpred(this._ctx, 6);
    		case 7:
    			return this.precpred(this._ctx, 5);
    		case 8:
    			return this.precpred(this._ctx, 4);
    		case 9:
    			return this.precpred(this._ctx, 3);
    		case 10:
    			return this.precpred(this._ctx, 2);
    		case 11:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    non_unary_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 12:
    			return this.precpred(this._ctx, 18);
    		case 13:
    			return this.precpred(this._ctx, 21);
    		case 14:
    			return this.precpred(this._ctx, 20);
    		case 15:
    			return this.precpred(this._ctx, 19);
    		case 16:
    			return this.precpred(this._ctx, 17);
    		case 17:
    			return this.precpred(this._ctx, 16);
    		case 18:
    			return this.precpred(this._ctx, 15);
    		case 19:
    			return this.precpred(this._ctx, 13);
    		case 20:
    			return this.precpred(this._ctx, 12);
    		case 21:
    			return this.precpred(this._ctx, 11);
    		case 22:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    unary_print_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 23:
    			return this.precpred(this._ctx, 9);
    		case 24:
    			return this.precpred(this._ctx, 8);
    		case 25:
    			return this.precpred(this._ctx, 7);
    		case 26:
    			return this.precpred(this._ctx, 6);
    		case 27:
    			return this.precpred(this._ctx, 5);
    		case 28:
    			return this.precpred(this._ctx, 4);
    		case 29:
    			return this.precpred(this._ctx, 3);
    		case 30:
    			return this.precpred(this._ctx, 2);
    		case 31:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    non_unary_print_expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 32:
    			return this.precpred(this._ctx, 15);
    		case 33:
    			return this.precpred(this._ctx, 18);
    		case 34:
    			return this.precpred(this._ctx, 17);
    		case 35:
    			return this.precpred(this._ctx, 16);
    		case 36:
    			return this.precpred(this._ctx, 14);
    		case 37:
    			return this.precpred(this._ctx, 13);
    		case 38:
    			return this.precpred(this._ctx, 11);
    		case 39:
    			return this.precpred(this._ctx, 10);
    		case 40:
    			return this.precpred(this._ctx, 9);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, awkParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.item_list();
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1101010962) !== 0) || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 1208099331) !== 0) || _la===65 || _la===66) {
	            this.state = 83;
	            this.item();
	        }

	        this.state = 86;
	        this.match(awkParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item_list() {
	    let localctx = new Item_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, awkParser.RULE_item_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 88;
	                this.item();
	                this.state = 89;
	                this.terminator(0); 
	            }
	            this.state = 95;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, awkParser.RULE_item);
	    try {
	        this.state = 109;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.action_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.pattern();
	            this.state = 98;
	            this.action_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 100;
	            this.normal_pattern();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 101;
	            this.match(awkParser.FUNCTION);
	            this.state = 102;
	            this.func_name();
	            this.state = 103;
	            this.match(awkParser.T__0);
	            this.state = 104;
	            this.param_list_opt();
	            this.state = 105;
	            this.match(awkParser.T__1);
	            this.state = 106;
	            this.newline_opt();
	            this.state = 107;
	            this.action_();
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



	param_list_opt() {
	    let localctx = new Param_list_optContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, awkParser.RULE_param_list_opt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===66) {
	            this.state = 111;
	            this.param_list();
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



	param_list() {
	    let localctx = new Param_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, awkParser.RULE_param_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 114;
	        this.name();
	        this.state = 119;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 115;
	            this.match(awkParser.T__2);
	            this.state = 116;
	            this.name();
	            this.state = 121;
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
	    this.enterRule(localctx, 10, awkParser.RULE_pattern);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 11:
	        case 12:
	        case 21:
	        case 23:
	        case 34:
	        case 42:
	        case 46:
	        case 50:
	        case 60:
	        case 63:
	        case 65:
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 122;
	            this.normal_pattern();
	            break;
	        case 24:
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.special_pattern();
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



	normal_pattern() {
	    let localctx = new Normal_patternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, awkParser.RULE_normal_pattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.expr();
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 127;
	            this.match(awkParser.T__2);
	            this.state = 128;
	            this.newline_opt();
	            this.state = 129;
	            this.expr();
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



	special_pattern() {
	    let localctx = new Special_patternContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, awkParser.RULE_special_pattern);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        _la = this._input.LA(1);
	        if(!(_la===24 || _la===30)) {
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



	action_() {
	    let localctx = new Action_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, awkParser.RULE_action_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 135;
	        this.match(awkParser.T__3);
	        this.state = 136;
	        this.newline_opt();
	        this.state = 139;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 137;
	            this.terminated_statement_list();

	        } else if(la_===2) {
	            this.state = 138;
	            this.unterminated_statement_list();

	        }
	        this.state = 141;
	        this.match(awkParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	terminator(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TerminatorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 18;
	    this.enterRecursionRule(localctx, 18, awkParser.RULE_terminator, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 146;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.state = 144;
	            this.match(awkParser.T__5);
	            break;
	        case 62:
	            this.state = 145;
	            this.match(awkParser.NEWLINE);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 152;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new TerminatorContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_terminator);
	                this.state = 148;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 149;
	                this.match(awkParser.NEWLINE); 
	            }
	            this.state = 154;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
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



	terminated_statement_list() {
	    let localctx = new Terminated_statement_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, awkParser.RULE_terminated_statement_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 155;
	            this.terminated_statement();
	            this.state = 158; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2661292114) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 2416199661) !== 0) || _la===65 || _la===66);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unterminated_statement_list() {
	    let localctx = new Unterminated_statement_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, awkParser.RULE_unterminated_statement_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 163;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 160;
	                this.terminated_statement(); 
	            }
	            this.state = 165;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	        }

	        this.state = 166;
	        this.unterminated_statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminated_statement() {
	    let localctx = new Terminated_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, awkParser.RULE_terminated_statement);
	    var _la = 0;
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 168;
	            this.action_();
	            this.state = 169;
	            this.newline_opt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(awkParser.IF);
	            this.state = 172;
	            this.match(awkParser.T__0);
	            this.state = 173;
	            this.expr();
	            this.state = 174;
	            this.match(awkParser.T__1);
	            this.state = 175;
	            this.newline_opt();
	            this.state = 176;
	            this.terminated_statement();
	            this.state = 181;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	            if(la_===1) {
	                this.state = 177;
	                this.match(awkParser.ELSE);
	                this.state = 178;
	                this.newline_opt();
	                this.state = 179;
	                this.terminated_statement();

	            }
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 183;
	            this.match(awkParser.WHILE);
	            this.state = 184;
	            this.match(awkParser.T__0);
	            this.state = 185;
	            this.expr();
	            this.state = 186;
	            this.match(awkParser.T__1);
	            this.state = 187;
	            this.newline_opt();
	            this.state = 188;
	            this.terminated_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 190;
	            this.match(awkParser.FOR);
	            this.state = 191;
	            this.match(awkParser.T__0);
	            this.state = 192;
	            this.simple_statement_opt();
	            this.state = 193;
	            this.match(awkParser.T__5);
	            this.state = 194;
	            this.expr_opt();
	            this.state = 195;
	            this.match(awkParser.T__5);
	            this.state = 196;
	            this.simple_statement_opt();
	            this.state = 197;
	            this.match(awkParser.T__1);
	            this.state = 198;
	            this.newline_opt();
	            this.state = 199;
	            this.terminated_statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 201;
	            this.match(awkParser.FOR);
	            this.state = 202;
	            this.match(awkParser.T__0);
	            this.state = 203;
	            this.name();
	            this.state = 204;
	            this.match(awkParser.IN);
	            this.state = 205;
	            this.name();
	            this.state = 206;
	            this.match(awkParser.T__1);
	            this.state = 207;
	            this.newline_opt();
	            this.state = 208;
	            this.terminated_statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 210;
	            this.match(awkParser.T__5);
	            this.state = 211;
	            this.newline_opt();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 212;
	            this.terminatable_statement();
	            this.state = 213;
	            _la = this._input.LA(1);
	            if(!(_la===6 || _la===62)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 214;
	            this.newline_opt();
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



	unterminated_statement() {
	    let localctx = new Unterminated_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, awkParser.RULE_unterminated_statement);
	    try {
	        this.state = 263;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 218;
	            this.terminatable_statement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 219;
	            this.match(awkParser.IF);
	            this.state = 220;
	            this.match(awkParser.T__0);
	            this.state = 221;
	            this.expr();
	            this.state = 222;
	            this.match(awkParser.T__1);
	            this.state = 223;
	            this.newline_opt();
	            this.state = 224;
	            this.unterminated_statement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 226;
	            this.match(awkParser.IF);
	            this.state = 227;
	            this.match(awkParser.T__0);
	            this.state = 228;
	            this.expr();
	            this.state = 229;
	            this.match(awkParser.T__1);
	            this.state = 230;
	            this.newline_opt();
	            this.state = 231;
	            this.terminated_statement();
	            this.state = 232;
	            this.match(awkParser.ELSE);
	            this.state = 233;
	            this.newline_opt();
	            this.state = 234;
	            this.unterminated_statement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 236;
	            this.match(awkParser.WHILE);
	            this.state = 237;
	            this.match(awkParser.T__0);
	            this.state = 238;
	            this.expr();
	            this.state = 239;
	            this.match(awkParser.T__1);
	            this.state = 240;
	            this.newline_opt();
	            this.state = 241;
	            this.unterminated_statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 243;
	            this.match(awkParser.FOR);
	            this.state = 244;
	            this.match(awkParser.T__0);
	            this.state = 245;
	            this.simple_statement_opt();
	            this.state = 246;
	            this.match(awkParser.T__5);
	            this.state = 247;
	            this.expr_opt();
	            this.state = 248;
	            this.match(awkParser.T__5);
	            this.state = 249;
	            this.simple_statement_opt();
	            this.state = 250;
	            this.match(awkParser.T__1);
	            this.state = 251;
	            this.newline_opt();
	            this.state = 252;
	            this.unterminated_statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 254;
	            this.match(awkParser.FOR);
	            this.state = 255;
	            this.match(awkParser.T__0);
	            this.state = 256;
	            this.name();
	            this.state = 257;
	            this.match(awkParser.IN);
	            this.state = 258;
	            this.name();
	            this.state = 259;
	            this.match(awkParser.T__1);
	            this.state = 260;
	            this.newline_opt();
	            this.state = 261;
	            this.unterminated_statement();
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



	terminatable_statement() {
	    let localctx = new Terminatable_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, awkParser.RULE_terminatable_statement);
	    try {
	        this.state = 281;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 11:
	        case 12:
	        case 21:
	        case 23:
	        case 27:
	        case 34:
	        case 38:
	        case 39:
	        case 42:
	        case 46:
	        case 50:
	        case 60:
	        case 63:
	        case 65:
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 265;
	            this.simple_statement();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 266;
	            this.match(awkParser.BREAK);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
	            this.match(awkParser.CONTINUE);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 268;
	            this.match(awkParser.NEXT);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 269;
	            this.match(awkParser.EXIT);
	            this.state = 270;
	            this.expr_opt();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 271;
	            this.match(awkParser.RETURN);
	            this.state = 272;
	            this.expr_opt();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 273;
	            this.match(awkParser.DO);
	            this.state = 274;
	            this.newline_opt();
	            this.state = 275;
	            this.terminated_statement();
	            this.state = 276;
	            this.match(awkParser.WHILE);
	            this.state = 277;
	            this.match(awkParser.T__0);
	            this.state = 278;
	            this.expr();
	            this.state = 279;
	            this.match(awkParser.T__1);
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



	simple_statement_opt() {
	    let localctx = new Simple_statement_optContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, awkParser.RULE_simple_statement_opt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 144709634) !== 0) || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 2751533361) !== 0) || _la===66) {
	            this.state = 283;
	            this.simple_statement();
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



	simple_statement() {
	    let localctx = new Simple_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, awkParser.RULE_simple_statement);
	    try {
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.match(awkParser.DELETE);
	            this.state = 287;
	            this.name();
	            this.state = 288;
	            this.match(awkParser.T__6);
	            this.state = 289;
	            this.expr_list();
	            this.state = 290;
	            this.match(awkParser.T__7);
	            break;
	        case 1:
	        case 11:
	        case 12:
	        case 21:
	        case 23:
	        case 34:
	        case 42:
	        case 46:
	        case 50:
	        case 60:
	        case 63:
	        case 65:
	        case 66:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 292;
	            this.expr();
	            break;
	        case 38:
	        case 39:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 293;
	            this.print_statement();
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



	print_statement() {
	    let localctx = new Print_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, awkParser.RULE_print_statement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.simple_print_statement();
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9 || _la===10 || _la===45) {
	            this.state = 297;
	            this.output_redirection();
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



	simple_print_statement() {
	    let localctx = new Simple_print_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, awkParser.RULE_simple_print_statement);
	    try {
	        this.state = 314;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 300;
	            this.match(awkParser.PRINT);
	            this.state = 301;
	            this.print_expr_list_opt();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 302;
	            this.match(awkParser.PRINT);
	            this.state = 303;
	            this.match(awkParser.T__0);
	            this.state = 304;
	            this.multiple_expr_list();
	            this.state = 305;
	            this.match(awkParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 307;
	            this.match(awkParser.PRINTF);
	            this.state = 308;
	            this.print_expr_list();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 309;
	            this.match(awkParser.PRINTF);
	            this.state = 310;
	            this.match(awkParser.T__0);
	            this.state = 311;
	            this.multiple_expr_list();
	            this.state = 312;
	            this.match(awkParser.T__1);
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



	output_redirection() {
	    let localctx = new Output_redirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, awkParser.RULE_output_redirection);
	    try {
	        this.state = 322;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 316;
	            this.match(awkParser.T__8);
	            this.state = 317;
	            this.expr();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 318;
	            this.match(awkParser.APPEND);
	            this.state = 319;
	            this.expr();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 320;
	            this.match(awkParser.T__9);
	            this.state = 321;
	            this.expr();
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



	expr_list_opt() {
	    let localctx = new Expr_list_optContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, awkParser.RULE_expr_list_opt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 10491906) !== 0) || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 2751533313) !== 0) || _la===66) {
	            this.state = 324;
	            this.expr_list();
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



	expr_list() {
	    let localctx = new Expr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, awkParser.RULE_expr_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.expr();
	        this.state = 334;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 328;
	            this.match(awkParser.T__2);
	            this.state = 329;
	            this.newline_opt();
	            this.state = 330;
	            this.expr();
	            this.state = 336;
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



	multiple_expr_list() {
	    let localctx = new Multiple_expr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, awkParser.RULE_multiple_expr_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337;
	        this.expr();
	        this.state = 342; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 338;
	            this.match(awkParser.T__2);
	            this.state = 339;
	            this.newline_opt();
	            this.state = 340;
	            this.expr();
	            this.state = 344; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr_opt() {
	    let localctx = new Expr_optContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, awkParser.RULE_expr_opt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 10491906) !== 0) || ((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 2751533313) !== 0) || _la===66) {
	            this.state = 346;
	            this.expr();
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
	    this.enterRule(localctx, 48, awkParser.RULE_expr);
	    try {
	        this.state = 351;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 349;
	            this.unary_expr(0);
	            break;
	        case 1:
	        case 21:
	        case 23:
	        case 34:
	        case 42:
	        case 46:
	        case 50:
	        case 60:
	        case 63:
	        case 65:
	        case 66:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 350;
	            this.non_unary_expr(0);
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


	unary_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Unary_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 50;
	    this.enterRecursionRule(localctx, 50, awkParser.RULE_unary_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 355;
	        this.expr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 398;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 396;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 357;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 358;
	                    this.match(awkParser.T__12);
	                    this.state = 359;
	                    this.expr();
	                    break;

	                case 2:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 360;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 361;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 362;
	                    this.expr();
	                    break;

	                case 3:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 363;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 364;
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 365;
	                    this.expr();
	                    break;

	                case 4:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 366;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 367;
	                    this.non_unary_expr(0);
	                    break;

	                case 5:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 368;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 369;
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===17 || ((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 75) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 370;
	                    this.expr();
	                    break;

	                case 6:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 371;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 372;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===55)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 373;
	                    this.expr();
	                    break;

	                case 7:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 374;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 375;
	                    this.match(awkParser.IN);
	                    this.state = 376;
	                    this.name();
	                    break;

	                case 8:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 377;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 378;
	                    this.match(awkParser.AND);
	                    this.state = 379;
	                    this.newline_opt();
	                    this.state = 380;
	                    this.expr();
	                    break;

	                case 9:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 382;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 383;
	                    this.match(awkParser.OR);
	                    this.state = 384;
	                    this.newline_opt();
	                    this.state = 385;
	                    this.expr();
	                    break;

	                case 10:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 387;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 388;
	                    this.match(awkParser.T__18);
	                    this.state = 389;
	                    this.expr();
	                    this.state = 390;
	                    this.match(awkParser.T__19);
	                    this.state = 391;
	                    this.expr();
	                    break;

	                case 11:
	                    localctx = new Unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_expr);
	                    this.state = 393;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 394;
	                    this.match(awkParser.T__9);
	                    this.state = 395;
	                    this.simple_get();
	                    break;

	                } 
	            }
	            this.state = 400;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
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


	non_unary_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Non_unary_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 52;
	    this.enterRecursionRule(localctx, 52, awkParser.RULE_non_unary_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 444;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 402;
	            this.match(awkParser.T__0);
	            this.state = 403;
	            this.expr();
	            this.state = 404;
	            this.match(awkParser.T__1);
	            break;

	        case 2:
	            this.state = 406;
	            this.match(awkParser.T__20);
	            this.state = 407;
	            this.expr();
	            break;

	        case 3:
	            this.state = 408;
	            this.match(awkParser.T__0);
	            this.state = 409;
	            this.multiple_expr_list();
	            this.state = 410;
	            this.match(awkParser.T__1);
	            this.state = 411;
	            this.match(awkParser.IN);
	            this.state = 412;
	            this.name();
	            break;

	        case 4:
	            this.state = 414;
	            this.number();
	            break;

	        case 5:
	            this.state = 415;
	            this.string();
	            break;

	        case 6:
	            this.state = 416;
	            this.ere();
	            break;

	        case 7:
	            this.state = 417;
	            this.lvalue();
	            this.state = 419;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            if(la_===1) {
	                this.state = 418;
	                _la = this._input.LA(1);
	                if(!(_la===46 || _la===50)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            break;

	        case 8:
	            this.state = 421;
	            _la = this._input.LA(1);
	            if(!(_la===46 || _la===50)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 422;
	            this.lvalue();
	            break;

	        case 9:
	            this.state = 423;
	            this.lvalue();
	            this.state = 424;
	            _la = this._input.LA(1);
	            if(!(_la===22 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 50705) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 425;
	            this.expr();
	            break;

	        case 10:
	            this.state = 427;
	            this.func_name();
	            this.state = 428;
	            this.match(awkParser.T__0);
	            this.state = 429;
	            this.expr_list_opt();
	            this.state = 430;
	            this.match(awkParser.T__1);
	            break;

	        case 11:
	            this.state = 432;
	            this.builtin_func_name();
	            this.state = 437;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	            if(la_===1) {
	                this.state = 433;
	                this.match(awkParser.T__0);
	                this.state = 434;
	                this.expr_list_opt();
	                this.state = 435;
	                this.match(awkParser.T__1);

	            }
	            break;

	        case 12:
	            this.state = 439;
	            this.simple_get();
	            this.state = 442;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 440;
	                this.match(awkParser.T__16);
	                this.state = 441;
	                this.expr();

	            }
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 487;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 485;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 446;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 447;
	                    this.non_unary_expr(19);
	                    break;

	                case 2:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 448;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 449;
	                    this.match(awkParser.T__12);
	                    this.state = 450;
	                    this.expr();
	                    break;

	                case 3:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 451;
	                    if (!( this.precpred(this._ctx, 20))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 20)");
	                    }
	                    this.state = 452;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 453;
	                    this.expr();
	                    break;

	                case 4:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 454;
	                    if (!( this.precpred(this._ctx, 19))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 19)");
	                    }
	                    this.state = 455;
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 456;
	                    this.expr();
	                    break;

	                case 5:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 457;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 458;
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===17 || ((((_la - 48)) & ~0x1f) === 0 && ((1 << (_la - 48)) & 75) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 459;
	                    this.expr();
	                    break;

	                case 6:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 460;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 461;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===55)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 462;
	                    this.expr();
	                    break;

	                case 7:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 463;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 464;
	                    this.match(awkParser.IN);
	                    this.state = 465;
	                    this.name();
	                    break;

	                case 8:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 466;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 467;
	                    this.match(awkParser.AND);
	                    this.state = 468;
	                    this.newline_opt();
	                    this.state = 469;
	                    this.expr();
	                    break;

	                case 9:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 471;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 472;
	                    this.match(awkParser.OR);
	                    this.state = 473;
	                    this.newline_opt();
	                    this.state = 474;
	                    this.expr();
	                    break;

	                case 10:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 476;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 477;
	                    this.match(awkParser.T__18);
	                    this.state = 478;
	                    this.expr();
	                    this.state = 479;
	                    this.match(awkParser.T__19);
	                    this.state = 480;
	                    this.expr();
	                    break;

	                case 11:
	                    localctx = new Non_unary_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_expr);
	                    this.state = 482;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 483;
	                    this.match(awkParser.T__9);
	                    this.state = 484;
	                    this.simple_get();
	                    break;

	                } 
	            }
	            this.state = 489;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
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



	print_expr_list_opt() {
	    let localctx = new Print_expr_list_optContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, awkParser.RULE_print_expr_list_opt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 10491906) !== 0) || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 27525393) !== 0)) {
	            this.state = 490;
	            this.print_expr_list();
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



	print_expr_list() {
	    let localctx = new Print_expr_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, awkParser.RULE_print_expr_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 493;
	        this.print_expr();
	        this.state = 500;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 494;
	            this.match(awkParser.T__2);
	            this.state = 495;
	            this.newline_opt();
	            this.state = 496;
	            this.print_expr();
	            this.state = 502;
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



	print_expr() {
	    let localctx = new Print_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, awkParser.RULE_print_expr);
	    try {
	        this.state = 505;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 11:
	        case 12:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 503;
	            this.unary_print_expr(0);
	            break;
	        case 1:
	        case 21:
	        case 23:
	        case 42:
	        case 46:
	        case 50:
	        case 60:
	        case 63:
	        case 65:
	        case 66:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 504;
	            this.non_unary_print_expr(0);
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


	unary_print_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Unary_print_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, awkParser.RULE_unary_print_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        _la = this._input.LA(1);
	        if(!(_la===11 || _la===12)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 509;
	        this.print_expr();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 546;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 544;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 511;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 512;
	                    this.match(awkParser.T__12);
	                    this.state = 513;
	                    this.print_expr();
	                    break;

	                case 2:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 514;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 515;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 516;
	                    this.print_expr();
	                    break;

	                case 3:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 517;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 518;
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 519;
	                    this.print_expr();
	                    break;

	                case 4:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 520;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 521;
	                    this.non_unary_print_expr(0);
	                    break;

	                case 5:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 522;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 523;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===55)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 524;
	                    this.print_expr();
	                    break;

	                case 6:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 525;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 526;
	                    this.match(awkParser.IN);
	                    this.state = 527;
	                    this.name();
	                    break;

	                case 7:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 528;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 529;
	                    this.match(awkParser.AND);
	                    this.state = 530;
	                    this.newline_opt();
	                    this.state = 531;
	                    this.print_expr();
	                    break;

	                case 8:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 533;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 534;
	                    this.match(awkParser.OR);
	                    this.state = 535;
	                    this.newline_opt();
	                    this.state = 536;
	                    this.print_expr();
	                    break;

	                case 9:
	                    localctx = new Unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_unary_print_expr);
	                    this.state = 538;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 539;
	                    this.match(awkParser.T__18);
	                    this.state = 540;
	                    this.print_expr();
	                    this.state = 541;
	                    this.match(awkParser.T__19);
	                    this.state = 542;
	                    this.print_expr();
	                    break;

	                } 
	            }
	            this.state = 548;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
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


	non_unary_print_expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Non_unary_print_exprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 62;
	    this.enterRecursionRule(localctx, 62, awkParser.RULE_non_unary_print_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 587;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 550;
	            this.match(awkParser.T__0);
	            this.state = 551;
	            this.expr();
	            this.state = 552;
	            this.match(awkParser.T__1);
	            break;

	        case 2:
	            this.state = 554;
	            this.match(awkParser.T__20);
	            this.state = 555;
	            this.print_expr();
	            break;

	        case 3:
	            this.state = 556;
	            this.match(awkParser.T__0);
	            this.state = 557;
	            this.multiple_expr_list();
	            this.state = 558;
	            this.match(awkParser.T__1);
	            this.state = 559;
	            this.match(awkParser.IN);
	            this.state = 560;
	            this.name();
	            break;

	        case 4:
	            this.state = 562;
	            this.number();
	            break;

	        case 5:
	            this.state = 563;
	            this.string();
	            break;

	        case 6:
	            this.state = 564;
	            this.ere();
	            break;

	        case 7:
	            this.state = 565;
	            this.lvalue();
	            this.state = 567;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	            if(la_===1) {
	                this.state = 566;
	                _la = this._input.LA(1);
	                if(!(_la===46 || _la===50)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }

	            }
	            break;

	        case 8:
	            this.state = 569;
	            _la = this._input.LA(1);
	            if(!(_la===46 || _la===50)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 570;
	            this.lvalue();
	            break;

	        case 9:
	            this.state = 571;
	            this.lvalue();
	            this.state = 572;
	            _la = this._input.LA(1);
	            if(!(_la===22 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 50705) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 573;
	            this.print_expr();
	            break;

	        case 10:
	            this.state = 575;
	            this.func_name();
	            this.state = 576;
	            this.match(awkParser.T__0);
	            this.state = 577;
	            this.expr_list_opt();
	            this.state = 578;
	            this.match(awkParser.T__1);
	            break;

	        case 11:
	            this.state = 580;
	            this.builtin_func_name();
	            this.state = 585;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	            if(la_===1) {
	                this.state = 581;
	                this.match(awkParser.T__0);
	                this.state = 582;
	                this.expr_list_opt();
	                this.state = 583;
	                this.match(awkParser.T__1);

	            }
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 624;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 622;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 589;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 590;
	                    this.non_unary_print_expr(16);
	                    break;

	                case 2:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 591;
	                    if (!( this.precpred(this._ctx, 18))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 18)");
	                    }
	                    this.state = 592;
	                    this.match(awkParser.T__12);
	                    this.state = 593;
	                    this.print_expr();
	                    break;

	                case 3:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 594;
	                    if (!( this.precpred(this._ctx, 17))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 17)");
	                    }
	                    this.state = 595;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 114688) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 596;
	                    this.print_expr();
	                    break;

	                case 4:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 597;
	                    if (!( this.precpred(this._ctx, 16))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 16)");
	                    }
	                    this.state = 598;
	                    _la = this._input.LA(1);
	                    if(!(_la===11 || _la===12)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 599;
	                    this.print_expr();
	                    break;

	                case 5:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 600;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 601;
	                    _la = this._input.LA(1);
	                    if(!(_la===18 || _la===55)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 602;
	                    this.print_expr();
	                    break;

	                case 6:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 603;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 604;
	                    this.match(awkParser.IN);
	                    this.state = 605;
	                    this.name();
	                    break;

	                case 7:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 606;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 607;
	                    this.match(awkParser.AND);
	                    this.state = 608;
	                    this.newline_opt();
	                    this.state = 609;
	                    this.print_expr();
	                    break;

	                case 8:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 611;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 612;
	                    this.match(awkParser.OR);
	                    this.state = 613;
	                    this.newline_opt();
	                    this.state = 614;
	                    this.print_expr();
	                    break;

	                case 9:
	                    localctx = new Non_unary_print_exprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, awkParser.RULE_non_unary_print_expr);
	                    this.state = 616;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 617;
	                    this.match(awkParser.T__18);
	                    this.state = 618;
	                    this.print_expr();
	                    this.state = 619;
	                    this.match(awkParser.T__19);
	                    this.state = 620;
	                    this.print_expr();
	                    break;

	                } 
	            }
	            this.state = 626;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
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



	lvalue() {
	    let localctx = new LvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, awkParser.RULE_lvalue);
	    try {
	        this.state = 636;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 627;
	            this.name();
	            this.state = 632;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	            if(la_===1) {
	                this.state = 628;
	                this.match(awkParser.T__6);
	                this.state = 629;
	                this.expr_list();
	                this.state = 630;
	                this.match(awkParser.T__7);

	            }
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 634;
	            this.match(awkParser.T__22);
	            this.state = 635;
	            this.expr();
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



	simple_get() {
	    let localctx = new Simple_getContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, awkParser.RULE_simple_get);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 638;
	        this.match(awkParser.GETLINE);
	        this.state = 640;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        if(la_===1) {
	            this.state = 639;
	            this.lvalue();

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



	newline_opt() {
	    let localctx = new Newline_optContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, awkParser.RULE_newline_opt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 645;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===62) {
	            this.state = 642;
	            this.match(awkParser.NEWLINE);
	            this.state = 647;
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, awkParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 648;
	        this.match(awkParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 72, awkParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 650;
	        this.match(awkParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ere() {
	    let localctx = new EreContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, awkParser.RULE_ere);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 652;
	        this.match(awkParser.ERE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	builtin_func_name() {
	    let localctx = new Builtin_func_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, awkParser.RULE_builtin_func_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 654;
	        this.match(awkParser.BUILTIN_FUNC_NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_name() {
	    let localctx = new Func_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, awkParser.RULE_func_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 656;
	        this.match(awkParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 80, awkParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 658;
	        this.match(awkParser.WORD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

awkParser.EOF = antlr4.Token.EOF;
awkParser.T__0 = 1;
awkParser.T__1 = 2;
awkParser.T__2 = 3;
awkParser.T__3 = 4;
awkParser.T__4 = 5;
awkParser.T__5 = 6;
awkParser.T__6 = 7;
awkParser.T__7 = 8;
awkParser.T__8 = 9;
awkParser.T__9 = 10;
awkParser.T__10 = 11;
awkParser.T__11 = 12;
awkParser.T__12 = 13;
awkParser.T__13 = 14;
awkParser.T__14 = 15;
awkParser.T__15 = 16;
awkParser.T__16 = 17;
awkParser.T__17 = 18;
awkParser.T__18 = 19;
awkParser.T__19 = 20;
awkParser.T__20 = 21;
awkParser.T__21 = 22;
awkParser.T__22 = 23;
awkParser.BEGIN = 24;
awkParser.BREAK = 25;
awkParser.CONTINUE = 26;
awkParser.DELETE = 27;
awkParser.DO = 28;
awkParser.ELSE = 29;
awkParser.END = 30;
awkParser.EXIT = 31;
awkParser.FOR = 32;
awkParser.FUNCTION = 33;
awkParser.GETLINE = 34;
awkParser.IF = 35;
awkParser.IN = 36;
awkParser.NEXT = 37;
awkParser.PRINT = 38;
awkParser.PRINTF = 39;
awkParser.RETURN = 40;
awkParser.WHILE = 41;
awkParser.BUILTIN_FUNC_NAME = 42;
awkParser.ADD_ASSIGN = 43;
awkParser.AND = 44;
awkParser.APPEND = 45;
awkParser.DECR = 46;
awkParser.DIV_ASSIGN = 47;
awkParser.EQ = 48;
awkParser.GE = 49;
awkParser.INCR = 50;
awkParser.LE = 51;
awkParser.MOD_ASSIGN = 52;
awkParser.MUL_ASSIGN = 53;
awkParser.NE = 54;
awkParser.NO_MATCH = 55;
awkParser.OR = 56;
awkParser.POW_ASSIGN = 57;
awkParser.SUB_ASSIGN = 58;
awkParser.COMMENT = 59;
awkParser.ERE = 60;
awkParser.ESC_NEWLINE = 61;
awkParser.NEWLINE = 62;
awkParser.NUMBER = 63;
awkParser.SPACE = 64;
awkParser.STRING = 65;
awkParser.WORD = 66;

awkParser.RULE_program = 0;
awkParser.RULE_item_list = 1;
awkParser.RULE_item = 2;
awkParser.RULE_param_list_opt = 3;
awkParser.RULE_param_list = 4;
awkParser.RULE_pattern = 5;
awkParser.RULE_normal_pattern = 6;
awkParser.RULE_special_pattern = 7;
awkParser.RULE_action_ = 8;
awkParser.RULE_terminator = 9;
awkParser.RULE_terminated_statement_list = 10;
awkParser.RULE_unterminated_statement_list = 11;
awkParser.RULE_terminated_statement = 12;
awkParser.RULE_unterminated_statement = 13;
awkParser.RULE_terminatable_statement = 14;
awkParser.RULE_simple_statement_opt = 15;
awkParser.RULE_simple_statement = 16;
awkParser.RULE_print_statement = 17;
awkParser.RULE_simple_print_statement = 18;
awkParser.RULE_output_redirection = 19;
awkParser.RULE_expr_list_opt = 20;
awkParser.RULE_expr_list = 21;
awkParser.RULE_multiple_expr_list = 22;
awkParser.RULE_expr_opt = 23;
awkParser.RULE_expr = 24;
awkParser.RULE_unary_expr = 25;
awkParser.RULE_non_unary_expr = 26;
awkParser.RULE_print_expr_list_opt = 27;
awkParser.RULE_print_expr_list = 28;
awkParser.RULE_print_expr = 29;
awkParser.RULE_unary_print_expr = 30;
awkParser.RULE_non_unary_print_expr = 31;
awkParser.RULE_lvalue = 32;
awkParser.RULE_simple_get = 33;
awkParser.RULE_newline_opt = 34;
awkParser.RULE_number = 35;
awkParser.RULE_string = 36;
awkParser.RULE_ere = 37;
awkParser.RULE_builtin_func_name = 38;
awkParser.RULE_func_name = 39;
awkParser.RULE_name = 40;

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
        this.ruleIndex = awkParser.RULE_program;
    }

	item_list() {
	    return this.getTypedRuleContext(Item_listContext,0);
	};

	EOF() {
	    return this.getToken(awkParser.EOF, 0);
	};

	item() {
	    return this.getTypedRuleContext(ItemContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitProgram(this);
		}
	}


}



class Item_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_item_list;
    }

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	terminator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminatorContext);
	    } else {
	        return this.getTypedRuleContext(TerminatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterItem_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitItem_list(this);
		}
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_item;
    }

	action_() {
	    return this.getTypedRuleContext(Action_Context,0);
	};

	pattern() {
	    return this.getTypedRuleContext(PatternContext,0);
	};

	normal_pattern() {
	    return this.getTypedRuleContext(Normal_patternContext,0);
	};

	FUNCTION() {
	    return this.getToken(awkParser.FUNCTION, 0);
	};

	func_name() {
	    return this.getTypedRuleContext(Func_nameContext,0);
	};

	param_list_opt() {
	    return this.getTypedRuleContext(Param_list_optContext,0);
	};

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitItem(this);
		}
	}


}



class Param_list_optContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_param_list_opt;
    }

	param_list() {
	    return this.getTypedRuleContext(Param_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterParam_list_opt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitParam_list_opt(this);
		}
	}


}



class Param_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_param_list;
    }

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterParam_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitParam_list(this);
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
        this.ruleIndex = awkParser.RULE_pattern;
    }

	normal_pattern() {
	    return this.getTypedRuleContext(Normal_patternContext,0);
	};

	special_pattern() {
	    return this.getTypedRuleContext(Special_patternContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterPattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitPattern(this);
		}
	}


}



class Normal_patternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_normal_pattern;
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

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterNormal_pattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitNormal_pattern(this);
		}
	}


}



class Special_patternContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_special_pattern;
    }

	BEGIN() {
	    return this.getToken(awkParser.BEGIN, 0);
	};

	END() {
	    return this.getToken(awkParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterSpecial_pattern(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitSpecial_pattern(this);
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
        this.ruleIndex = awkParser.RULE_action_;
    }

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	terminated_statement_list() {
	    return this.getTypedRuleContext(Terminated_statement_listContext,0);
	};

	unterminated_statement_list() {
	    return this.getTypedRuleContext(Unterminated_statement_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterAction_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitAction_(this);
		}
	}


}



class TerminatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_terminator;
    }

	NEWLINE() {
	    return this.getToken(awkParser.NEWLINE, 0);
	};

	terminator() {
	    return this.getTypedRuleContext(TerminatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterTerminator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitTerminator(this);
		}
	}


}



class Terminated_statement_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_terminated_statement_list;
    }

	terminated_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Terminated_statementContext);
	    } else {
	        return this.getTypedRuleContext(Terminated_statementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterTerminated_statement_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitTerminated_statement_list(this);
		}
	}


}



class Unterminated_statement_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_unterminated_statement_list;
    }

	unterminated_statement() {
	    return this.getTypedRuleContext(Unterminated_statementContext,0);
	};

	terminated_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Terminated_statementContext);
	    } else {
	        return this.getTypedRuleContext(Terminated_statementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterUnterminated_statement_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitUnterminated_statement_list(this);
		}
	}


}



class Terminated_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_terminated_statement;
    }

	action_() {
	    return this.getTypedRuleContext(Action_Context,0);
	};

	newline_opt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Newline_optContext);
	    } else {
	        return this.getTypedRuleContext(Newline_optContext,i);
	    }
	};

	IF() {
	    return this.getToken(awkParser.IF, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	terminated_statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Terminated_statementContext);
	    } else {
	        return this.getTypedRuleContext(Terminated_statementContext,i);
	    }
	};

	ELSE() {
	    return this.getToken(awkParser.ELSE, 0);
	};

	WHILE() {
	    return this.getToken(awkParser.WHILE, 0);
	};

	FOR() {
	    return this.getToken(awkParser.FOR, 0);
	};

	simple_statement_opt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_statement_optContext);
	    } else {
	        return this.getTypedRuleContext(Simple_statement_optContext,i);
	    }
	};

	expr_opt() {
	    return this.getTypedRuleContext(Expr_optContext,0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	IN() {
	    return this.getToken(awkParser.IN, 0);
	};

	terminatable_statement() {
	    return this.getTypedRuleContext(Terminatable_statementContext,0);
	};

	NEWLINE() {
	    return this.getToken(awkParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterTerminated_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitTerminated_statement(this);
		}
	}


}



class Unterminated_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_unterminated_statement;
    }

	terminatable_statement() {
	    return this.getTypedRuleContext(Terminatable_statementContext,0);
	};

	IF() {
	    return this.getToken(awkParser.IF, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	newline_opt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Newline_optContext);
	    } else {
	        return this.getTypedRuleContext(Newline_optContext,i);
	    }
	};

	unterminated_statement() {
	    return this.getTypedRuleContext(Unterminated_statementContext,0);
	};

	terminated_statement() {
	    return this.getTypedRuleContext(Terminated_statementContext,0);
	};

	ELSE() {
	    return this.getToken(awkParser.ELSE, 0);
	};

	WHILE() {
	    return this.getToken(awkParser.WHILE, 0);
	};

	FOR() {
	    return this.getToken(awkParser.FOR, 0);
	};

	simple_statement_opt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Simple_statement_optContext);
	    } else {
	        return this.getTypedRuleContext(Simple_statement_optContext,i);
	    }
	};

	expr_opt() {
	    return this.getTypedRuleContext(Expr_optContext,0);
	};

	name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameContext);
	    } else {
	        return this.getTypedRuleContext(NameContext,i);
	    }
	};

	IN() {
	    return this.getToken(awkParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterUnterminated_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitUnterminated_statement(this);
		}
	}


}



class Terminatable_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_terminatable_statement;
    }

	simple_statement() {
	    return this.getTypedRuleContext(Simple_statementContext,0);
	};

	BREAK() {
	    return this.getToken(awkParser.BREAK, 0);
	};

	CONTINUE() {
	    return this.getToken(awkParser.CONTINUE, 0);
	};

	NEXT() {
	    return this.getToken(awkParser.NEXT, 0);
	};

	EXIT() {
	    return this.getToken(awkParser.EXIT, 0);
	};

	expr_opt() {
	    return this.getTypedRuleContext(Expr_optContext,0);
	};

	RETURN() {
	    return this.getToken(awkParser.RETURN, 0);
	};

	DO() {
	    return this.getToken(awkParser.DO, 0);
	};

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	terminated_statement() {
	    return this.getTypedRuleContext(Terminated_statementContext,0);
	};

	WHILE() {
	    return this.getToken(awkParser.WHILE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterTerminatable_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitTerminatable_statement(this);
		}
	}


}



class Simple_statement_optContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_simple_statement_opt;
    }

	simple_statement() {
	    return this.getTypedRuleContext(Simple_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterSimple_statement_opt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitSimple_statement_opt(this);
		}
	}


}



class Simple_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_simple_statement;
    }

	DELETE() {
	    return this.getToken(awkParser.DELETE, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expr_list() {
	    return this.getTypedRuleContext(Expr_listContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	print_statement() {
	    return this.getTypedRuleContext(Print_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterSimple_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitSimple_statement(this);
		}
	}


}



class Print_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_print_statement;
    }

	simple_print_statement() {
	    return this.getTypedRuleContext(Simple_print_statementContext,0);
	};

	output_redirection() {
	    return this.getTypedRuleContext(Output_redirectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterPrint_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitPrint_statement(this);
		}
	}


}



class Simple_print_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_simple_print_statement;
    }

	PRINT() {
	    return this.getToken(awkParser.PRINT, 0);
	};

	print_expr_list_opt() {
	    return this.getTypedRuleContext(Print_expr_list_optContext,0);
	};

	multiple_expr_list() {
	    return this.getTypedRuleContext(Multiple_expr_listContext,0);
	};

	PRINTF() {
	    return this.getToken(awkParser.PRINTF, 0);
	};

	print_expr_list() {
	    return this.getTypedRuleContext(Print_expr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterSimple_print_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitSimple_print_statement(this);
		}
	}


}



class Output_redirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_output_redirection;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	APPEND() {
	    return this.getToken(awkParser.APPEND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterOutput_redirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitOutput_redirection(this);
		}
	}


}



class Expr_list_optContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_expr_list_opt;
    }

	expr_list() {
	    return this.getTypedRuleContext(Expr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterExpr_list_opt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitExpr_list_opt(this);
		}
	}


}



class Expr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_expr_list;
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

	newline_opt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Newline_optContext);
	    } else {
	        return this.getTypedRuleContext(Newline_optContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterExpr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitExpr_list(this);
		}
	}


}



class Multiple_expr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_multiple_expr_list;
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

	newline_opt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Newline_optContext);
	    } else {
	        return this.getTypedRuleContext(Newline_optContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterMultiple_expr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitMultiple_expr_list(this);
		}
	}


}



class Expr_optContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_expr_opt;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterExpr_opt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitExpr_opt(this);
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
        this.ruleIndex = awkParser.RULE_expr;
    }

	unary_expr() {
	    return this.getTypedRuleContext(Unary_exprContext,0);
	};

	non_unary_expr() {
	    return this.getTypedRuleContext(Non_unary_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitExpr(this);
		}
	}


}



class Unary_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_unary_expr;
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

	unary_expr() {
	    return this.getTypedRuleContext(Unary_exprContext,0);
	};

	non_unary_expr() {
	    return this.getTypedRuleContext(Non_unary_exprContext,0);
	};

	LE() {
	    return this.getToken(awkParser.LE, 0);
	};

	NE() {
	    return this.getToken(awkParser.NE, 0);
	};

	EQ() {
	    return this.getToken(awkParser.EQ, 0);
	};

	GE() {
	    return this.getToken(awkParser.GE, 0);
	};

	NO_MATCH() {
	    return this.getToken(awkParser.NO_MATCH, 0);
	};

	IN() {
	    return this.getToken(awkParser.IN, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	AND() {
	    return this.getToken(awkParser.AND, 0);
	};

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	OR() {
	    return this.getToken(awkParser.OR, 0);
	};

	simple_get() {
	    return this.getTypedRuleContext(Simple_getContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterUnary_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitUnary_expr(this);
		}
	}


}



class Non_unary_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_non_unary_expr;
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

	multiple_expr_list() {
	    return this.getTypedRuleContext(Multiple_expr_listContext,0);
	};

	IN() {
	    return this.getToken(awkParser.IN, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	ere() {
	    return this.getTypedRuleContext(EreContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	INCR() {
	    return this.getToken(awkParser.INCR, 0);
	};

	DECR() {
	    return this.getToken(awkParser.DECR, 0);
	};

	POW_ASSIGN() {
	    return this.getToken(awkParser.POW_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(awkParser.MOD_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(awkParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(awkParser.DIV_ASSIGN, 0);
	};

	ADD_ASSIGN() {
	    return this.getToken(awkParser.ADD_ASSIGN, 0);
	};

	SUB_ASSIGN() {
	    return this.getToken(awkParser.SUB_ASSIGN, 0);
	};

	func_name() {
	    return this.getTypedRuleContext(Func_nameContext,0);
	};

	expr_list_opt() {
	    return this.getTypedRuleContext(Expr_list_optContext,0);
	};

	builtin_func_name() {
	    return this.getTypedRuleContext(Builtin_func_nameContext,0);
	};

	simple_get() {
	    return this.getTypedRuleContext(Simple_getContext,0);
	};

	non_unary_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Non_unary_exprContext);
	    } else {
	        return this.getTypedRuleContext(Non_unary_exprContext,i);
	    }
	};

	LE() {
	    return this.getToken(awkParser.LE, 0);
	};

	NE() {
	    return this.getToken(awkParser.NE, 0);
	};

	EQ() {
	    return this.getToken(awkParser.EQ, 0);
	};

	GE() {
	    return this.getToken(awkParser.GE, 0);
	};

	NO_MATCH() {
	    return this.getToken(awkParser.NO_MATCH, 0);
	};

	AND() {
	    return this.getToken(awkParser.AND, 0);
	};

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	OR() {
	    return this.getToken(awkParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterNon_unary_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitNon_unary_expr(this);
		}
	}


}



class Print_expr_list_optContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_print_expr_list_opt;
    }

	print_expr_list() {
	    return this.getTypedRuleContext(Print_expr_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterPrint_expr_list_opt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitPrint_expr_list_opt(this);
		}
	}


}



class Print_expr_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_print_expr_list;
    }

	print_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Print_exprContext);
	    } else {
	        return this.getTypedRuleContext(Print_exprContext,i);
	    }
	};

	newline_opt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Newline_optContext);
	    } else {
	        return this.getTypedRuleContext(Newline_optContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterPrint_expr_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitPrint_expr_list(this);
		}
	}


}



class Print_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_print_expr;
    }

	unary_print_expr() {
	    return this.getTypedRuleContext(Unary_print_exprContext,0);
	};

	non_unary_print_expr() {
	    return this.getTypedRuleContext(Non_unary_print_exprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterPrint_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitPrint_expr(this);
		}
	}


}



class Unary_print_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_unary_print_expr;
    }

	print_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Print_exprContext);
	    } else {
	        return this.getTypedRuleContext(Print_exprContext,i);
	    }
	};

	unary_print_expr() {
	    return this.getTypedRuleContext(Unary_print_exprContext,0);
	};

	non_unary_print_expr() {
	    return this.getTypedRuleContext(Non_unary_print_exprContext,0);
	};

	NO_MATCH() {
	    return this.getToken(awkParser.NO_MATCH, 0);
	};

	IN() {
	    return this.getToken(awkParser.IN, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	AND() {
	    return this.getToken(awkParser.AND, 0);
	};

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	OR() {
	    return this.getToken(awkParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterUnary_print_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitUnary_print_expr(this);
		}
	}


}



class Non_unary_print_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_non_unary_print_expr;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	print_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Print_exprContext);
	    } else {
	        return this.getTypedRuleContext(Print_exprContext,i);
	    }
	};

	multiple_expr_list() {
	    return this.getTypedRuleContext(Multiple_expr_listContext,0);
	};

	IN() {
	    return this.getToken(awkParser.IN, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	ere() {
	    return this.getTypedRuleContext(EreContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	INCR() {
	    return this.getToken(awkParser.INCR, 0);
	};

	DECR() {
	    return this.getToken(awkParser.DECR, 0);
	};

	POW_ASSIGN() {
	    return this.getToken(awkParser.POW_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(awkParser.MOD_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(awkParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(awkParser.DIV_ASSIGN, 0);
	};

	ADD_ASSIGN() {
	    return this.getToken(awkParser.ADD_ASSIGN, 0);
	};

	SUB_ASSIGN() {
	    return this.getToken(awkParser.SUB_ASSIGN, 0);
	};

	func_name() {
	    return this.getTypedRuleContext(Func_nameContext,0);
	};

	expr_list_opt() {
	    return this.getTypedRuleContext(Expr_list_optContext,0);
	};

	builtin_func_name() {
	    return this.getTypedRuleContext(Builtin_func_nameContext,0);
	};

	non_unary_print_expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Non_unary_print_exprContext);
	    } else {
	        return this.getTypedRuleContext(Non_unary_print_exprContext,i);
	    }
	};

	NO_MATCH() {
	    return this.getToken(awkParser.NO_MATCH, 0);
	};

	AND() {
	    return this.getToken(awkParser.AND, 0);
	};

	newline_opt() {
	    return this.getTypedRuleContext(Newline_optContext,0);
	};

	OR() {
	    return this.getToken(awkParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterNon_unary_print_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitNon_unary_print_expr(this);
		}
	}


}



class LvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_lvalue;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expr_list() {
	    return this.getTypedRuleContext(Expr_listContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterLvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitLvalue(this);
		}
	}


}



class Simple_getContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_simple_get;
    }

	GETLINE() {
	    return this.getToken(awkParser.GETLINE, 0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterSimple_get(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitSimple_get(this);
		}
	}


}



class Newline_optContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_newline_opt;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(awkParser.NEWLINE);
	    } else {
	        return this.getToken(awkParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterNewline_opt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitNewline_opt(this);
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
        this.ruleIndex = awkParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(awkParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitNumber(this);
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
        this.ruleIndex = awkParser.RULE_string;
    }

	STRING() {
	    return this.getToken(awkParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitString(this);
		}
	}


}



class EreContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_ere;
    }

	ERE() {
	    return this.getToken(awkParser.ERE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterEre(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitEre(this);
		}
	}


}



class Builtin_func_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_builtin_func_name;
    }

	BUILTIN_FUNC_NAME() {
	    return this.getToken(awkParser.BUILTIN_FUNC_NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterBuiltin_func_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitBuiltin_func_name(this);
		}
	}


}



class Func_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = awkParser.RULE_func_name;
    }

	WORD() {
	    return this.getToken(awkParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterFunc_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitFunc_name(this);
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
        this.ruleIndex = awkParser.RULE_name;
    }

	WORD() {
	    return this.getToken(awkParser.WORD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof awkListener ) {
	        listener.exitName(this);
		}
	}


}




awkParser.ProgramContext = ProgramContext; 
awkParser.Item_listContext = Item_listContext; 
awkParser.ItemContext = ItemContext; 
awkParser.Param_list_optContext = Param_list_optContext; 
awkParser.Param_listContext = Param_listContext; 
awkParser.PatternContext = PatternContext; 
awkParser.Normal_patternContext = Normal_patternContext; 
awkParser.Special_patternContext = Special_patternContext; 
awkParser.Action_Context = Action_Context; 
awkParser.TerminatorContext = TerminatorContext; 
awkParser.Terminated_statement_listContext = Terminated_statement_listContext; 
awkParser.Unterminated_statement_listContext = Unterminated_statement_listContext; 
awkParser.Terminated_statementContext = Terminated_statementContext; 
awkParser.Unterminated_statementContext = Unterminated_statementContext; 
awkParser.Terminatable_statementContext = Terminatable_statementContext; 
awkParser.Simple_statement_optContext = Simple_statement_optContext; 
awkParser.Simple_statementContext = Simple_statementContext; 
awkParser.Print_statementContext = Print_statementContext; 
awkParser.Simple_print_statementContext = Simple_print_statementContext; 
awkParser.Output_redirectionContext = Output_redirectionContext; 
awkParser.Expr_list_optContext = Expr_list_optContext; 
awkParser.Expr_listContext = Expr_listContext; 
awkParser.Multiple_expr_listContext = Multiple_expr_listContext; 
awkParser.Expr_optContext = Expr_optContext; 
awkParser.ExprContext = ExprContext; 
awkParser.Unary_exprContext = Unary_exprContext; 
awkParser.Non_unary_exprContext = Non_unary_exprContext; 
awkParser.Print_expr_list_optContext = Print_expr_list_optContext; 
awkParser.Print_expr_listContext = Print_expr_listContext; 
awkParser.Print_exprContext = Print_exprContext; 
awkParser.Unary_print_exprContext = Unary_print_exprContext; 
awkParser.Non_unary_print_exprContext = Non_unary_print_exprContext; 
awkParser.LvalueContext = LvalueContext; 
awkParser.Simple_getContext = Simple_getContext; 
awkParser.Newline_optContext = Newline_optContext; 
awkParser.NumberContext = NumberContext; 
awkParser.StringContext = StringContext; 
awkParser.EreContext = EreContext; 
awkParser.Builtin_func_nameContext = Builtin_func_nameContext; 
awkParser.Func_nameContext = Func_nameContext; 
awkParser.NameContext = NameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
