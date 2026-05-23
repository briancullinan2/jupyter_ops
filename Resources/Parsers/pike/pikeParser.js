// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/pike/pike.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import pikeListener from './pikeListener.js';
const serializedATN = [4,1,94,611,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,1,0,5,0,110,8,0,10,0,12,
0,113,9,0,1,0,3,0,116,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,125,8,1,1,2,3,
2,128,8,2,1,2,1,2,1,2,1,2,1,3,3,3,135,8,3,1,3,1,3,1,3,1,3,3,3,141,8,3,1,
3,1,3,1,4,3,4,146,8,4,1,4,1,4,1,4,1,4,3,4,152,8,4,1,4,1,4,1,4,1,5,3,5,158,
8,5,1,5,1,5,1,5,1,5,3,5,164,8,5,1,5,1,5,1,5,1,6,3,6,170,8,6,1,6,1,6,1,6,
1,6,1,7,1,7,1,7,5,7,179,8,7,10,7,12,7,182,9,7,1,8,5,8,185,8,8,10,8,12,8,
188,9,8,1,8,1,8,1,8,3,8,193,8,8,1,9,3,9,196,8,9,1,9,1,9,1,9,1,9,1,10,1,10,
1,10,5,10,205,8,10,10,10,12,10,208,9,10,1,11,1,11,1,11,1,11,1,12,3,12,215,
8,12,1,12,1,12,3,12,219,8,12,1,13,1,13,3,13,223,8,13,1,13,1,13,1,13,1,13,
1,14,1,14,1,15,1,15,5,15,233,8,15,10,15,12,15,236,9,15,1,15,1,15,1,16,1,
16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,
3,16,256,8,16,1,17,1,17,1,17,1,17,3,17,262,8,17,1,18,1,18,1,18,1,18,1,18,
1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,21,1,21,1,
21,3,21,284,8,21,1,21,1,21,3,21,288,8,21,1,21,1,21,3,21,292,8,21,1,21,1,
21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,3,23,307,8,23,
1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,
26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,5,28,331,8,28,10,28,12,28,334,9,28,
1,29,1,29,1,29,5,29,339,8,29,10,29,12,29,342,9,29,1,29,1,29,1,30,1,30,1,
30,1,30,1,30,1,30,3,30,352,8,30,1,31,1,31,1,31,5,31,357,8,31,10,31,12,31,
360,9,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,386,8,32,1,33,
1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,401,8,33,
1,33,5,33,404,8,33,10,33,12,33,407,9,33,1,34,1,34,1,34,1,34,1,34,1,34,1,
34,1,34,1,34,1,34,3,34,419,8,34,1,34,1,34,3,34,423,8,34,1,35,1,35,1,35,1,
35,1,35,1,35,3,35,431,8,35,1,36,1,36,1,36,1,36,1,36,1,36,3,36,439,8,36,1,
37,1,37,1,37,1,37,1,37,1,37,1,37,5,37,448,8,37,10,37,12,37,451,9,37,1,37,
1,37,1,38,1,38,1,38,1,38,1,38,3,38,460,8,38,1,39,1,39,1,39,3,39,465,8,39,
1,39,1,39,1,39,1,40,1,40,1,40,5,40,473,8,40,10,40,12,40,476,9,40,1,41,1,
41,1,41,1,41,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,
1,43,5,43,495,8,43,10,43,12,43,498,9,43,3,43,500,8,43,1,43,3,43,503,8,43,
1,43,1,43,1,44,1,44,1,45,1,45,1,45,1,45,1,46,1,46,1,46,5,46,516,8,46,10,
46,12,46,519,9,46,3,46,521,8,46,1,46,3,46,524,8,46,1,47,3,47,527,8,47,1,
47,1,47,1,48,1,48,3,48,533,8,48,1,48,1,48,1,49,1,49,1,49,5,49,540,8,49,10,
49,12,49,543,9,49,1,49,3,49,546,8,49,1,50,1,50,5,50,550,8,50,10,50,12,50,
553,9,50,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,564,8,51,1,51,
1,51,1,51,1,51,1,51,1,51,1,51,3,51,573,8,51,1,51,1,51,1,51,1,51,1,51,3,51,
580,8,51,1,51,1,51,1,51,1,51,1,51,3,51,587,8,51,1,51,1,51,3,51,591,8,51,
3,51,593,8,51,1,52,1,52,1,52,1,52,5,52,599,8,52,10,52,12,52,602,9,52,1,52,
3,52,605,8,52,1,52,1,52,1,53,1,53,1,53,0,0,54,0,2,4,6,8,10,12,14,16,18,20,
22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,
70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,0,3,1,0,14,
19,2,0,9,9,33,41,2,0,8,8,43,58,659,0,111,1,0,0,0,2,124,1,0,0,0,4,127,1,0,
0,0,6,134,1,0,0,0,8,145,1,0,0,0,10,157,1,0,0,0,12,169,1,0,0,0,14,175,1,0,
0,0,16,186,1,0,0,0,18,195,1,0,0,0,20,201,1,0,0,0,22,209,1,0,0,0,24,214,1,
0,0,0,26,220,1,0,0,0,28,228,1,0,0,0,30,230,1,0,0,0,32,255,1,0,0,0,34,257,
1,0,0,0,36,263,1,0,0,0,38,269,1,0,0,0,40,272,1,0,0,0,42,280,1,0,0,0,44,296,
1,0,0,0,46,302,1,0,0,0,48,310,1,0,0,0,50,313,1,0,0,0,52,321,1,0,0,0,54,324,
1,0,0,0,56,327,1,0,0,0,58,340,1,0,0,0,60,345,1,0,0,0,62,358,1,0,0,0,64,385,
1,0,0,0,66,400,1,0,0,0,68,422,1,0,0,0,70,424,1,0,0,0,72,432,1,0,0,0,74,440,
1,0,0,0,76,459,1,0,0,0,78,461,1,0,0,0,80,469,1,0,0,0,82,477,1,0,0,0,84,481,
1,0,0,0,86,485,1,0,0,0,88,506,1,0,0,0,90,508,1,0,0,0,92,520,1,0,0,0,94,526,
1,0,0,0,96,530,1,0,0,0,98,536,1,0,0,0,100,547,1,0,0,0,102,592,1,0,0,0,104,
594,1,0,0,0,106,608,1,0,0,0,108,110,3,2,1,0,109,108,1,0,0,0,110,113,1,0,
0,0,111,109,1,0,0,0,111,112,1,0,0,0,112,115,1,0,0,0,113,111,1,0,0,0,114,
116,5,0,0,1,115,114,1,0,0,0,115,116,1,0,0,0,116,1,1,0,0,0,117,125,3,4,2,
0,118,125,3,6,3,0,119,125,3,8,4,0,120,125,3,10,5,0,121,125,3,12,6,0,122,
125,3,18,9,0,123,125,3,24,12,0,124,117,1,0,0,0,124,118,1,0,0,0,124,119,1,
0,0,0,124,120,1,0,0,0,124,121,1,0,0,0,124,122,1,0,0,0,124,123,1,0,0,0,125,
3,1,0,0,0,126,128,3,28,14,0,127,126,1,0,0,0,127,128,1,0,0,0,128,129,1,0,
0,0,129,130,5,1,0,0,130,131,3,80,40,0,131,132,5,2,0,0,132,5,1,0,0,0,133,
135,3,28,14,0,134,133,1,0,0,0,134,135,1,0,0,0,135,136,1,0,0,0,136,137,5,
3,0,0,137,140,3,88,44,0,138,139,5,4,0,0,139,141,3,106,53,0,140,138,1,0,0,
0,140,141,1,0,0,0,141,142,1,0,0,0,142,143,5,2,0,0,143,7,1,0,0,0,144,146,
3,28,14,0,145,144,1,0,0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,148,3,100,
50,0,148,149,3,106,53,0,149,151,5,5,0,0,150,152,3,98,49,0,151,150,1,0,0,
0,151,152,1,0,0,0,152,153,1,0,0,0,153,154,5,6,0,0,154,155,5,2,0,0,155,9,
1,0,0,0,156,158,3,28,14,0,157,156,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,
0,159,160,3,100,50,0,160,161,3,106,53,0,161,163,5,5,0,0,162,164,3,98,49,
0,163,162,1,0,0,0,163,164,1,0,0,0,164,165,1,0,0,0,165,166,5,6,0,0,166,167,
3,30,15,0,167,11,1,0,0,0,168,170,3,28,14,0,169,168,1,0,0,0,169,170,1,0,0,
0,170,171,1,0,0,0,171,172,3,100,50,0,172,173,3,14,7,0,173,174,5,2,0,0,174,
13,1,0,0,0,175,180,3,16,8,0,176,177,5,7,0,0,177,179,3,16,8,0,178,176,1,0,
0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,15,1,0,0,0,182,180,
1,0,0,0,183,185,5,8,0,0,184,183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,
186,187,1,0,0,0,187,189,1,0,0,0,188,186,1,0,0,0,189,192,3,106,53,0,190,191,
5,9,0,0,191,193,3,58,29,0,192,190,1,0,0,0,192,193,1,0,0,0,193,17,1,0,0,0,
194,196,3,28,14,0,195,194,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,198,
5,10,0,0,198,199,3,20,10,0,199,200,5,2,0,0,200,19,1,0,0,0,201,206,3,22,11,
0,202,203,5,7,0,0,203,205,3,22,11,0,204,202,1,0,0,0,205,208,1,0,0,0,206,
204,1,0,0,0,206,207,1,0,0,0,207,21,1,0,0,0,208,206,1,0,0,0,209,210,3,106,
53,0,210,211,5,9,0,0,211,212,3,58,29,0,212,23,1,0,0,0,213,215,3,28,14,0,
214,213,1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,218,5,11,0,0,217,219,
5,2,0,0,218,217,1,0,0,0,218,219,1,0,0,0,219,25,1,0,0,0,220,222,5,11,0,0,
221,223,3,106,53,0,222,221,1,0,0,0,222,223,1,0,0,0,223,224,1,0,0,0,224,225,
5,12,0,0,225,226,3,0,0,0,226,227,5,13,0,0,227,27,1,0,0,0,228,229,7,0,0,0,
229,29,1,0,0,0,230,234,5,12,0,0,231,233,3,32,16,0,232,231,1,0,0,0,233,236,
1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,237,1,0,0,0,236,234,1,0,0,0,
237,238,5,13,0,0,238,31,1,0,0,0,239,240,3,58,29,0,240,241,5,2,0,0,241,256,
1,0,0,0,242,256,3,34,17,0,243,256,3,36,18,0,244,256,3,40,20,0,245,256,3,
42,21,0,246,256,3,44,22,0,247,256,3,46,23,0,248,256,3,48,24,0,249,256,3,
30,15,0,250,256,3,38,19,0,251,256,3,50,25,0,252,256,3,52,26,0,253,256,3,
54,27,0,254,256,5,2,0,0,255,239,1,0,0,0,255,242,1,0,0,0,255,243,1,0,0,0,
255,244,1,0,0,0,255,245,1,0,0,0,255,246,1,0,0,0,255,247,1,0,0,0,255,248,
1,0,0,0,255,249,1,0,0,0,255,250,1,0,0,0,255,251,1,0,0,0,255,252,1,0,0,0,
255,253,1,0,0,0,255,254,1,0,0,0,256,33,1,0,0,0,257,258,5,20,0,0,258,261,
3,32,16,0,259,260,5,21,0,0,260,262,3,32,16,0,261,259,1,0,0,0,261,262,1,0,
0,0,262,35,1,0,0,0,263,264,5,22,0,0,264,265,5,5,0,0,265,266,3,56,28,0,266,
267,5,6,0,0,267,268,3,32,16,0,268,37,1,0,0,0,269,270,5,23,0,0,270,271,3,
56,28,0,271,39,1,0,0,0,272,273,5,24,0,0,273,274,3,32,16,0,274,275,3,36,18,
0,275,276,5,5,0,0,276,277,3,56,28,0,277,278,5,6,0,0,278,279,5,2,0,0,279,
41,1,0,0,0,280,281,5,25,0,0,281,283,5,5,0,0,282,284,3,56,28,0,283,282,1,
0,0,0,283,284,1,0,0,0,284,285,1,0,0,0,285,287,5,2,0,0,286,288,3,56,28,0,
287,286,1,0,0,0,287,288,1,0,0,0,288,289,1,0,0,0,289,291,5,2,0,0,290,292,
3,56,28,0,291,290,1,0,0,0,291,292,1,0,0,0,292,293,1,0,0,0,293,294,5,6,0,
0,294,295,3,32,16,0,295,43,1,0,0,0,296,297,5,26,0,0,297,298,5,5,0,0,298,
299,3,56,28,0,299,300,5,6,0,0,300,301,3,30,15,0,301,45,1,0,0,0,302,303,5,
27,0,0,303,306,3,56,28,0,304,305,5,28,0,0,305,307,3,56,28,0,306,304,1,0,
0,0,306,307,1,0,0,0,307,308,1,0,0,0,308,309,5,4,0,0,309,47,1,0,0,0,310,311,
5,29,0,0,311,312,5,4,0,0,312,49,1,0,0,0,313,314,5,30,0,0,314,315,5,5,0,0,
315,316,3,56,28,0,316,317,5,4,0,0,317,318,3,66,33,0,318,319,5,6,0,0,319,
320,3,32,16,0,320,51,1,0,0,0,321,322,5,31,0,0,322,323,5,2,0,0,323,53,1,0,
0,0,324,325,5,32,0,0,325,326,5,2,0,0,326,55,1,0,0,0,327,332,3,58,29,0,328,
329,5,7,0,0,329,331,3,58,29,0,330,328,1,0,0,0,331,334,1,0,0,0,332,330,1,
0,0,0,332,333,1,0,0,0,333,57,1,0,0,0,334,332,1,0,0,0,335,336,3,76,38,0,336,
337,7,1,0,0,337,339,1,0,0,0,338,335,1,0,0,0,339,342,1,0,0,0,340,338,1,0,
0,0,340,341,1,0,0,0,341,343,1,0,0,0,342,340,1,0,0,0,343,344,3,60,30,0,344,
59,1,0,0,0,345,351,3,62,31,0,346,347,5,42,0,0,347,348,3,60,30,0,348,349,
5,4,0,0,349,350,3,60,30,0,350,352,1,0,0,0,351,346,1,0,0,0,351,352,1,0,0,
0,352,61,1,0,0,0,353,354,3,64,32,0,354,355,7,2,0,0,355,357,1,0,0,0,356,353,
1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,358,359,1,0,0,0,359,361,1,0,0,0,
360,358,1,0,0,0,361,362,3,64,32,0,362,63,1,0,0,0,363,386,3,66,33,0,364,365,
5,5,0,0,365,366,3,100,50,0,366,367,5,6,0,0,367,368,3,64,32,0,368,386,1,0,
0,0,369,370,5,59,0,0,370,386,3,66,33,0,371,372,5,60,0,0,372,386,3,66,33,
0,373,374,3,66,33,0,374,375,5,59,0,0,375,386,1,0,0,0,376,377,3,66,33,0,377,
378,5,60,0,0,378,386,1,0,0,0,379,380,5,61,0,0,380,386,3,64,32,0,381,382,
5,62,0,0,382,386,3,64,32,0,383,384,5,63,0,0,384,386,3,64,32,0,385,363,1,
0,0,0,385,364,1,0,0,0,385,369,1,0,0,0,385,371,1,0,0,0,385,373,1,0,0,0,385,
376,1,0,0,0,385,379,1,0,0,0,385,381,1,0,0,0,385,383,1,0,0,0,386,65,1,0,0,
0,387,401,5,93,0,0,388,401,5,92,0,0,389,401,5,91,0,0,390,401,3,70,35,0,391,
401,3,72,36,0,392,401,3,74,37,0,393,401,3,78,39,0,394,401,3,26,13,0,395,
401,3,80,40,0,396,401,3,86,43,0,397,401,3,84,42,0,398,401,3,82,41,0,399,
401,3,90,45,0,400,387,1,0,0,0,400,388,1,0,0,0,400,389,1,0,0,0,400,390,1,
0,0,0,400,391,1,0,0,0,400,392,1,0,0,0,400,393,1,0,0,0,400,394,1,0,0,0,400,
395,1,0,0,0,400,396,1,0,0,0,400,397,1,0,0,0,400,398,1,0,0,0,400,399,1,0,
0,0,401,405,1,0,0,0,402,404,3,68,34,0,403,402,1,0,0,0,404,407,1,0,0,0,405,
403,1,0,0,0,405,406,1,0,0,0,406,67,1,0,0,0,407,405,1,0,0,0,408,409,5,5,0,
0,409,410,3,92,46,0,410,411,5,6,0,0,411,423,1,0,0,0,412,413,5,64,0,0,413,
423,3,106,53,0,414,415,5,65,0,0,415,418,3,56,28,0,416,417,5,28,0,0,417,419,
3,56,28,0,418,416,1,0,0,0,418,419,1,0,0,0,419,420,1,0,0,0,420,421,5,66,0,
0,421,423,1,0,0,0,422,408,1,0,0,0,422,412,1,0,0,0,422,414,1,0,0,0,423,69,
1,0,0,0,424,430,5,67,0,0,425,426,5,5,0,0,426,427,3,56,28,0,427,428,5,6,0,
0,428,431,1,0,0,0,429,431,3,30,15,0,430,425,1,0,0,0,430,429,1,0,0,0,431,
71,1,0,0,0,432,438,5,68,0,0,433,434,5,5,0,0,434,435,3,56,28,0,435,436,5,
6,0,0,436,439,1,0,0,0,437,439,3,30,15,0,438,433,1,0,0,0,438,437,1,0,0,0,
439,73,1,0,0,0,440,441,5,69,0,0,441,442,5,5,0,0,442,443,3,58,29,0,443,444,
5,7,0,0,444,449,3,58,29,0,445,446,5,7,0,0,446,448,3,76,38,0,447,445,1,0,
0,0,448,451,1,0,0,0,449,447,1,0,0,0,449,450,1,0,0,0,450,452,1,0,0,0,451,
449,1,0,0,0,452,453,5,6,0,0,453,75,1,0,0,0,454,455,5,70,0,0,455,460,3,66,
33,0,456,457,3,100,50,0,457,458,3,106,53,0,458,460,1,0,0,0,459,454,1,0,0,
0,459,456,1,0,0,0,460,77,1,0,0,0,461,462,5,70,0,0,462,464,5,5,0,0,463,465,
3,98,49,0,464,463,1,0,0,0,464,465,1,0,0,0,465,466,1,0,0,0,466,467,5,6,0,
0,467,468,3,30,15,0,468,79,1,0,0,0,469,474,3,106,53,0,470,471,5,71,0,0,471,
473,3,106,53,0,472,470,1,0,0,0,473,476,1,0,0,0,474,472,1,0,0,0,474,475,1,
0,0,0,475,81,1,0,0,0,476,474,1,0,0,0,477,478,5,72,0,0,478,479,3,92,46,0,
479,480,5,73,0,0,480,83,1,0,0,0,481,482,5,74,0,0,482,483,3,92,46,0,483,484,
5,75,0,0,484,85,1,0,0,0,485,499,5,76,0,0,486,487,3,56,28,0,487,488,5,4,0,
0,488,496,3,56,28,0,489,490,5,7,0,0,490,491,3,56,28,0,491,492,5,4,0,0,492,
493,3,56,28,0,493,495,1,0,0,0,494,489,1,0,0,0,495,498,1,0,0,0,496,494,1,
0,0,0,496,497,1,0,0,0,497,500,1,0,0,0,498,496,1,0,0,0,499,486,1,0,0,0,499,
500,1,0,0,0,500,502,1,0,0,0,501,503,5,7,0,0,502,501,1,0,0,0,502,503,1,0,
0,0,503,504,1,0,0,0,504,505,5,77,0,0,505,87,1,0,0,0,506,507,3,80,40,0,507,
89,1,0,0,0,508,509,5,5,0,0,509,510,3,56,28,0,510,511,5,6,0,0,511,91,1,0,
0,0,512,517,3,94,47,0,513,514,5,7,0,0,514,516,3,94,47,0,515,513,1,0,0,0,
516,519,1,0,0,0,517,515,1,0,0,0,517,518,1,0,0,0,518,521,1,0,0,0,519,517,
1,0,0,0,520,512,1,0,0,0,520,521,1,0,0,0,521,523,1,0,0,0,522,524,5,7,0,0,
523,522,1,0,0,0,523,524,1,0,0,0,524,93,1,0,0,0,525,527,5,78,0,0,526,525,
1,0,0,0,526,527,1,0,0,0,527,528,1,0,0,0,528,529,3,58,29,0,529,95,1,0,0,0,
530,532,3,100,50,0,531,533,5,79,0,0,532,531,1,0,0,0,532,533,1,0,0,0,533,
534,1,0,0,0,534,535,3,106,53,0,535,97,1,0,0,0,536,541,3,96,48,0,537,538,
5,7,0,0,538,540,3,96,48,0,539,537,1,0,0,0,540,543,1,0,0,0,541,539,1,0,0,
0,541,542,1,0,0,0,542,545,1,0,0,0,543,541,1,0,0,0,544,546,5,7,0,0,545,544,
1,0,0,0,545,546,1,0,0,0,546,99,1,0,0,0,547,551,3,102,51,0,548,550,5,8,0,
0,549,548,1,0,0,0,550,553,1,0,0,0,551,549,1,0,0,0,551,552,1,0,0,0,552,101,
1,0,0,0,553,551,1,0,0,0,554,593,5,80,0,0,555,593,5,82,0,0,556,593,5,81,0,
0,557,593,5,83,0,0,558,563,5,84,0,0,559,560,5,5,0,0,560,561,3,88,44,0,561,
562,5,6,0,0,562,564,1,0,0,0,563,559,1,0,0,0,563,564,1,0,0,0,564,593,1,0,
0,0,565,572,5,85,0,0,566,567,5,5,0,0,567,568,3,100,50,0,568,569,5,4,0,0,
569,570,3,100,50,0,570,571,5,6,0,0,571,573,1,0,0,0,572,566,1,0,0,0,572,573,
1,0,0,0,573,593,1,0,0,0,574,579,5,86,0,0,575,576,5,5,0,0,576,577,3,100,50,
0,577,578,5,6,0,0,578,580,1,0,0,0,579,575,1,0,0,0,579,580,1,0,0,0,580,593,
1,0,0,0,581,586,5,87,0,0,582,583,5,5,0,0,583,584,3,100,50,0,584,585,5,6,
0,0,585,587,1,0,0,0,586,582,1,0,0,0,586,587,1,0,0,0,587,593,1,0,0,0,588,
590,5,88,0,0,589,591,3,104,52,0,590,589,1,0,0,0,590,591,1,0,0,0,591,593,
1,0,0,0,592,554,1,0,0,0,592,555,1,0,0,0,592,556,1,0,0,0,592,557,1,0,0,0,
592,558,1,0,0,0,592,565,1,0,0,0,592,574,1,0,0,0,592,581,1,0,0,0,592,588,
1,0,0,0,593,103,1,0,0,0,594,595,5,5,0,0,595,600,3,100,50,0,596,597,5,7,0,
0,597,599,3,100,50,0,598,596,1,0,0,0,599,602,1,0,0,0,600,598,1,0,0,0,600,
601,1,0,0,0,601,604,1,0,0,0,602,600,1,0,0,0,603,605,5,79,0,0,604,603,1,0,
0,0,604,605,1,0,0,0,605,606,1,0,0,0,606,607,5,6,0,0,607,105,1,0,0,0,608,
609,5,89,0,0,609,107,1,0,0,0,60,111,115,124,127,134,140,145,151,157,163,
169,180,186,192,195,206,214,218,222,234,255,261,283,287,291,306,332,340,
351,358,385,400,405,418,422,430,438,449,459,464,474,496,499,502,517,520,
523,526,532,541,545,551,563,572,579,586,590,592,600,604];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class pikeParser extends antlr4.Parser {

    static grammarFileName = "pike.g4";
    static literalNames = [ null, "'import'", "';'", "'inherit'", "':'", 
                            "'('", "')'", "','", "'*'", "'='", "'constant'", 
                            "'class'", "'{'", "'}'", "'static'", "'private'", 
                            "'nomask'", "'public'", "'protected'", "'inline'", 
                            "'if'", "'else'", "'while'", "'return'", "'do'", 
                            "'for'", "'switch'", "'case'", "'..'", "'default'", 
                            "'foreach'", "'break'", "'continue'", "'+='", 
                            "'*='", "'/='", "'&='", "'|='", "'^='", "'<<='", 
                            "'>>='", "'%='", "'?'", "'||'", "'&&'", "'|'", 
                            "'^'", "'&'", "'=='", "'!='", "'>'", "'<'", 
                            "'>='", "'<='", "'<<'", "'>>'", "'+'", "'/'", 
                            "'%'", "'--'", "'++'", "'~'", "'-'", "'!'", 
                            "'->'", "'['", "']'", "'catch'", "'gauge'", 
                            "'sscanf'", "'lambda'", "'.'", "'({'", "'})'", 
                            "'(<'", "'>)'", "'(['", "'])'", "'@'", "'...'", 
                            "'int'", "'float'", "'string'", "'program'", 
                            "'object'", "'mapping'", "'array'", "'multiset'", 
                            "'function'" ];
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
                             "INTTYPE", "FLOATTYPE", "STRINGTYPE", "PROGRAMTYPE", 
                             "OBJECTTYPE", "MAPPINGTYPE", "ARRAYTYPE", "MULTISETTYPE", 
                             "FUNCTIONTYPE", "IDENTIFIER", "LETTER", "FLOAT", 
                             "NUMBER", "STRING", "WS" ];
    static ruleNames = [ "program", "definition", "impo", "inheritance", 
                         "function_declaration", "function_definition", 
                         "variables", "variable_names", "variable_name", 
                         "constant", "constant_names", "constant_name", 
                         "class_def", "class_implementation", "modifiers", 
                         "block", "statement", "cond", "while_stmt", "return_stmt", 
                         "do_while_stmt", "for_stmt", "switch_stmt", "case_stmt", 
                         "default_stmt", "foreach_stmt", "break_stmt", "continue_stmt", 
                         "expression", "expression2", "expression3", "expression4", 
                         "expression5", "expression6", "extension", "catch_", 
                         "gauge", "sscanf", "lvalue", "lambda", "constant_identifier", 
                         "array", "multiset", "mapping", "program_specifier", 
                         "parenthesis", "expression_list", "splice_expression", 
                         "argument", "arguments", "type_", "type__", "function_type", 
                         "identifier" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = pikeParser.ruleNames;
        this.literalNames = pikeParser.literalNames;
        this.symbolicNames = pikeParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, pikeParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1035274) !== 0) || ((((_la - 80)) & ~0x1f) === 0 && ((1 << (_la - 80)) & 511) !== 0)) {
	            this.state = 108;
	            this.definition();
	            this.state = 113;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===-1) {
	            this.state = 114;
	            this.match(pikeParser.EOF);
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, pikeParser.RULE_definition);
	    try {
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.impo();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 118;
	            this.inheritance();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 119;
	            this.function_declaration();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 120;
	            this.function_definition();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 121;
	            this.variables();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 122;
	            this.constant();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 123;
	            this.class_def();
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



	impo() {
	    let localctx = new ImpoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, pikeParser.RULE_impo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0)) {
	            this.state = 126;
	            this.modifiers();
	        }

	        this.state = 129;
	        this.match(pikeParser.T__0);
	        this.state = 130;
	        this.constant_identifier();
	        this.state = 131;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 6, pikeParser.RULE_inheritance);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0)) {
	            this.state = 133;
	            this.modifiers();
	        }

	        this.state = 136;
	        this.match(pikeParser.T__2);
	        this.state = 137;
	        this.program_specifier();
	        this.state = 140;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 138;
	            this.match(pikeParser.T__3);
	            this.state = 139;
	            this.identifier();
	        }

	        this.state = 142;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_declaration() {
	    let localctx = new Function_declarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, pikeParser.RULE_function_declaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0)) {
	            this.state = 144;
	            this.modifiers();
	        }

	        this.state = 147;
	        this.type_();
	        this.state = 148;
	        this.identifier();
	        this.state = 149;
	        this.match(pikeParser.T__4);
	        this.state = 151;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 80)) & ~0x1f) === 0 && ((1 << (_la - 80)) & 511) !== 0)) {
	            this.state = 150;
	            this.arguments();
	        }

	        this.state = 153;
	        this.match(pikeParser.T__5);
	        this.state = 154;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_definition() {
	    let localctx = new Function_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, pikeParser.RULE_function_definition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0)) {
	            this.state = 156;
	            this.modifiers();
	        }

	        this.state = 159;
	        this.type_();
	        this.state = 160;
	        this.identifier();
	        this.state = 161;
	        this.match(pikeParser.T__4);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 80)) & ~0x1f) === 0 && ((1 << (_la - 80)) & 511) !== 0)) {
	            this.state = 162;
	            this.arguments();
	        }

	        this.state = 165;
	        this.match(pikeParser.T__5);
	        this.state = 166;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variables() {
	    let localctx = new VariablesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, pikeParser.RULE_variables);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0)) {
	            this.state = 168;
	            this.modifiers();
	        }

	        this.state = 171;
	        this.type_();
	        this.state = 172;
	        this.variable_names();
	        this.state = 173;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable_names() {
	    let localctx = new Variable_namesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, pikeParser.RULE_variable_names);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.variable_name();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 176;
	            this.match(pikeParser.T__6);
	            this.state = 177;
	            this.variable_name();
	            this.state = 182;
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



	variable_name() {
	    let localctx = new Variable_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, pikeParser.RULE_variable_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 183;
	            this.match(pikeParser.T__7);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 189;
	        this.identifier();
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9) {
	            this.state = 190;
	            this.match(pikeParser.T__8);
	            this.state = 191;
	            this.expression2();
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
	    this.enterRule(localctx, 18, pikeParser.RULE_constant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0)) {
	            this.state = 194;
	            this.modifiers();
	        }

	        this.state = 197;
	        this.match(pikeParser.T__9);
	        this.state = 198;
	        this.constant_names();
	        this.state = 199;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant_names() {
	    let localctx = new Constant_namesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, pikeParser.RULE_constant_names);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 201;
	        this.constant_name();
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 202;
	            this.match(pikeParser.T__6);
	            this.state = 203;
	            this.constant_name();
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



	constant_name() {
	    let localctx = new Constant_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, pikeParser.RULE_constant_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.identifier();
	        this.state = 210;
	        this.match(pikeParser.T__8);
	        this.state = 211;
	        this.expression2();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	class_def() {
	    let localctx = new Class_defContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, pikeParser.RULE_class_def);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0)) {
	            this.state = 213;
	            this.modifiers();
	        }

	        this.state = 216;
	        this.match(pikeParser.T__10);
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 217;
	            this.match(pikeParser.T__1);
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



	class_implementation() {
	    let localctx = new Class_implementationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, pikeParser.RULE_class_implementation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.match(pikeParser.T__10);
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===89) {
	            this.state = 221;
	            this.identifier();
	        }

	        this.state = 224;
	        this.match(pikeParser.T__11);
	        this.state = 225;
	        this.program();
	        this.state = 226;
	        this.match(pikeParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	modifiers() {
	    let localctx = new ModifiersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, pikeParser.RULE_modifiers);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1032192) !== 0))) {
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, pikeParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(pikeParser.T__11);
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4023392292) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4160749569) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 125821615) !== 0)) {
	            this.state = 231;
	            this.statement();
	            this.state = 236;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 237;
	        this.match(pikeParser.T__12);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 32, pikeParser.RULE_statement);
	    try {
	        this.state = 255;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 11:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 72:
	        case 74:
	        case 76:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	        case 89:
	        case 91:
	        case 92:
	        case 93:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 239;
	            this.expression2();
	            this.state = 240;
	            this.match(pikeParser.T__1);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 242;
	            this.cond();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 243;
	            this.while_stmt();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 244;
	            this.do_while_stmt();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 245;
	            this.for_stmt();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 246;
	            this.switch_stmt();
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 247;
	            this.case_stmt();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 248;
	            this.default_stmt();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 249;
	            this.block();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 250;
	            this.return_stmt();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 251;
	            this.foreach_stmt();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 252;
	            this.break_stmt();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 253;
	            this.continue_stmt();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 254;
	            this.match(pikeParser.T__1);
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



	cond() {
	    let localctx = new CondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, pikeParser.RULE_cond);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(pikeParser.T__19);
	        this.state = 258;
	        this.statement();
	        this.state = 261;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        if(la_===1) {
	            this.state = 259;
	            this.match(pikeParser.T__20);
	            this.state = 260;
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



	while_stmt() {
	    let localctx = new While_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, pikeParser.RULE_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(pikeParser.T__21);
	        this.state = 264;
	        this.match(pikeParser.T__4);
	        this.state = 265;
	        this.expression();
	        this.state = 266;
	        this.match(pikeParser.T__5);
	        this.state = 267;
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



	return_stmt() {
	    let localctx = new Return_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, pikeParser.RULE_return_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.match(pikeParser.T__22);
	        this.state = 270;
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



	do_while_stmt() {
	    let localctx = new Do_while_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, pikeParser.RULE_do_while_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(pikeParser.T__23);
	        this.state = 273;
	        this.statement();
	        this.state = 274;
	        this.while_stmt();
	        this.state = 275;
	        this.match(pikeParser.T__4);
	        this.state = 276;
	        this.expression();
	        this.state = 277;
	        this.match(pikeParser.T__5);
	        this.state = 278;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_stmt() {
	    let localctx = new For_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, pikeParser.RULE_for_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(pikeParser.T__24);
	        this.state = 281;
	        this.match(pikeParser.T__4);
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===11 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 2145562399) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 7) !== 0)) {
	            this.state = 282;
	            this.expression();
	        }

	        this.state = 285;
	        this.match(pikeParser.T__1);
	        this.state = 287;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===11 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 2145562399) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 7) !== 0)) {
	            this.state = 286;
	            this.expression();
	        }

	        this.state = 289;
	        this.match(pikeParser.T__1);
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===11 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 2145562399) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 7) !== 0)) {
	            this.state = 290;
	            this.expression();
	        }

	        this.state = 293;
	        this.match(pikeParser.T__5);
	        this.state = 294;
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



	switch_stmt() {
	    let localctx = new Switch_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, pikeParser.RULE_switch_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(pikeParser.T__25);
	        this.state = 297;
	        this.match(pikeParser.T__4);
	        this.state = 298;
	        this.expression();
	        this.state = 299;
	        this.match(pikeParser.T__5);
	        this.state = 300;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	case_stmt() {
	    let localctx = new Case_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, pikeParser.RULE_case_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(pikeParser.T__26);
	        this.state = 303;
	        this.expression();
	        this.state = 306;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===28) {
	            this.state = 304;
	            this.match(pikeParser.T__27);
	            this.state = 305;
	            this.expression();
	        }

	        this.state = 308;
	        this.match(pikeParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	default_stmt() {
	    let localctx = new Default_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, pikeParser.RULE_default_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        this.match(pikeParser.T__28);
	        this.state = 311;
	        this.match(pikeParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	foreach_stmt() {
	    let localctx = new Foreach_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, pikeParser.RULE_foreach_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.match(pikeParser.T__29);
	        this.state = 314;
	        this.match(pikeParser.T__4);
	        this.state = 315;
	        this.expression();
	        this.state = 316;
	        this.match(pikeParser.T__3);
	        this.state = 317;
	        this.expression6();
	        this.state = 318;
	        this.match(pikeParser.T__5);
	        this.state = 319;
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



	break_stmt() {
	    let localctx = new Break_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, pikeParser.RULE_break_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.match(pikeParser.T__30);
	        this.state = 322;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	continue_stmt() {
	    let localctx = new Continue_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, pikeParser.RULE_continue_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 324;
	        this.match(pikeParser.T__31);
	        this.state = 325;
	        this.match(pikeParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 56, pikeParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 327;
	        this.expression2();
	        this.state = 332;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 328;
	                this.match(pikeParser.T__6);
	                this.state = 329;
	                this.expression2(); 
	            }
	            this.state = 334;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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



	expression2() {
	    let localctx = new Expression2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, pikeParser.RULE_expression2);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 340;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 335;
	                this.lvalue();
	                this.state = 336;
	                _la = this._input.LA(1);
	                if(!(_la===9 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 511) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 342;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
	        }

	        this.state = 343;
	        this.expression3();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression3() {
	    let localctx = new Expression3Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, pikeParser.RULE_expression3);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.expression4();
	        this.state = 351;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 346;
	            this.match(pikeParser.T__41);
	            this.state = 347;
	            this.expression3();
	            this.state = 348;
	            this.match(pikeParser.T__3);
	            this.state = 349;
	            this.expression3();
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



	expression4() {
	    let localctx = new Expression4Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, pikeParser.RULE_expression4);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 353;
	                this.expression5();
	                this.state = 354;
	                _la = this._input.LA(1);
	                if(!(_la===8 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 65535) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 360;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	        }

	        this.state = 361;
	        this.expression5();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression5() {
	    let localctx = new Expression5Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, pikeParser.RULE_expression5);
	    try {
	        this.state = 385;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 363;
	            this.expression6();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 364;
	            this.match(pikeParser.T__4);
	            this.state = 365;
	            this.type_();
	            this.state = 366;
	            this.match(pikeParser.T__5);
	            this.state = 367;
	            this.expression5();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 369;
	            this.match(pikeParser.T__58);
	            this.state = 370;
	            this.expression6();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 371;
	            this.match(pikeParser.T__59);
	            this.state = 372;
	            this.expression6();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 373;
	            this.expression6();
	            this.state = 374;
	            this.match(pikeParser.T__58);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 376;
	            this.expression6();
	            this.state = 377;
	            this.match(pikeParser.T__59);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 379;
	            this.match(pikeParser.T__60);
	            this.state = 380;
	            this.expression5();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 381;
	            this.match(pikeParser.T__61);
	            this.state = 382;
	            this.expression5();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 383;
	            this.match(pikeParser.T__62);
	            this.state = 384;
	            this.expression5();
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



	expression6() {
	    let localctx = new Expression6Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, pikeParser.RULE_expression6);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 93:
	            this.state = 387;
	            this.match(pikeParser.STRING);
	            break;
	        case 92:
	            this.state = 388;
	            this.match(pikeParser.NUMBER);
	            break;
	        case 91:
	            this.state = 389;
	            this.match(pikeParser.FLOAT);
	            break;
	        case 67:
	            this.state = 390;
	            this.catch_();
	            break;
	        case 68:
	            this.state = 391;
	            this.gauge();
	            break;
	        case 69:
	            this.state = 392;
	            this.sscanf();
	            break;
	        case 70:
	            this.state = 393;
	            this.lambda();
	            break;
	        case 11:
	            this.state = 394;
	            this.class_implementation();
	            break;
	        case 89:
	            this.state = 395;
	            this.constant_identifier();
	            break;
	        case 76:
	            this.state = 396;
	            this.mapping();
	            break;
	        case 74:
	            this.state = 397;
	            this.multiset();
	            break;
	        case 72:
	            this.state = 398;
	            this.array();
	            break;
	        case 5:
	            this.state = 399;
	            this.parenthesis();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 405;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 402;
	                this.extension(); 
	            }
	            this.state = 407;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
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



	extension() {
	    let localctx = new ExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, pikeParser.RULE_extension);
	    var _la = 0;
	    try {
	        this.state = 422;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 408;
	            this.match(pikeParser.T__4);
	            this.state = 409;
	            this.expression_list();
	            this.state = 410;
	            this.match(pikeParser.T__5);
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 412;
	            this.match(pikeParser.T__63);
	            this.state = 413;
	            this.identifier();
	            break;
	        case 65:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 414;
	            this.match(pikeParser.T__64);
	            this.state = 415;
	            this.expression();
	            this.state = 418;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===28) {
	                this.state = 416;
	                this.match(pikeParser.T__27);
	                this.state = 417;
	                this.expression();
	            }

	            this.state = 420;
	            this.match(pikeParser.T__65);
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



	catch_() {
	    let localctx = new Catch_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, pikeParser.RULE_catch_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this.match(pikeParser.T__66);
	        this.state = 430;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 425;
	            this.match(pikeParser.T__4);
	            this.state = 426;
	            this.expression();
	            this.state = 427;
	            this.match(pikeParser.T__5);
	            break;
	        case 12:
	            this.state = 429;
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



	gauge() {
	    let localctx = new GaugeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, pikeParser.RULE_gauge);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.match(pikeParser.T__67);
	        this.state = 438;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.state = 433;
	            this.match(pikeParser.T__4);
	            this.state = 434;
	            this.expression();
	            this.state = 435;
	            this.match(pikeParser.T__5);
	            break;
	        case 12:
	            this.state = 437;
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



	sscanf() {
	    let localctx = new SscanfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, pikeParser.RULE_sscanf);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(pikeParser.T__68);
	        this.state = 441;
	        this.match(pikeParser.T__4);
	        this.state = 442;
	        this.expression2();
	        this.state = 443;
	        this.match(pikeParser.T__6);
	        this.state = 444;
	        this.expression2();
	        this.state = 449;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 445;
	            this.match(pikeParser.T__6);
	            this.state = 446;
	            this.lvalue();
	            this.state = 451;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 452;
	        this.match(pikeParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lvalue() {
	    let localctx = new LvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, pikeParser.RULE_lvalue);
	    try {
	        this.state = 459;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 70:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 454;
	            this.match(pikeParser.T__69);
	            this.state = 455;
	            this.expression6();
	            break;
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        case 85:
	        case 86:
	        case 87:
	        case 88:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 456;
	            this.type_();
	            this.state = 457;
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



	lambda() {
	    let localctx = new LambdaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, pikeParser.RULE_lambda);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        this.match(pikeParser.T__69);
	        this.state = 462;
	        this.match(pikeParser.T__4);
	        this.state = 464;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 80)) & ~0x1f) === 0 && ((1 << (_la - 80)) & 511) !== 0)) {
	            this.state = 463;
	            this.arguments();
	        }

	        this.state = 466;
	        this.match(pikeParser.T__5);
	        this.state = 467;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constant_identifier() {
	    let localctx = new Constant_identifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, pikeParser.RULE_constant_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 469;
	        this.identifier();
	        this.state = 474;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 470;
	            this.match(pikeParser.T__70);
	            this.state = 471;
	            this.identifier();
	            this.state = 476;
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



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, pikeParser.RULE_array);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 477;
	        this.match(pikeParser.T__71);
	        this.state = 478;
	        this.expression_list();
	        this.state = 479;
	        this.match(pikeParser.T__72);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiset() {
	    let localctx = new MultisetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, pikeParser.RULE_multiset);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.match(pikeParser.T__73);
	        this.state = 482;
	        this.expression_list();
	        this.state = 483;
	        this.match(pikeParser.T__74);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapping() {
	    let localctx = new MappingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, pikeParser.RULE_mapping);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 485;
	        this.match(pikeParser.T__75);
	        this.state = 499;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===11 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 2145562399) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 7) !== 0)) {
	            this.state = 486;
	            this.expression();
	            this.state = 487;
	            this.match(pikeParser.T__3);
	            this.state = 488;
	            this.expression();
	            this.state = 496;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 489;
	                    this.match(pikeParser.T__6);
	                    this.state = 490;
	                    this.expression();
	                    this.state = 491;
	                    this.match(pikeParser.T__3);
	                    this.state = 492;
	                    this.expression(); 
	                }
	                this.state = 498;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	            }

	        }

	        this.state = 502;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 501;
	            this.match(pikeParser.T__6);
	        }

	        this.state = 504;
	        this.match(pikeParser.T__76);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	program_specifier() {
	    let localctx = new Program_specifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, pikeParser.RULE_program_specifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.constant_identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parenthesis() {
	    let localctx = new ParenthesisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, pikeParser.RULE_parenthesis);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        this.match(pikeParser.T__4);
	        this.state = 509;
	        this.expression();
	        this.state = 510;
	        this.match(pikeParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression_list() {
	    let localctx = new Expression_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, pikeParser.RULE_expression_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===11 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 2146086687) !== 0) || ((((_la - 91)) & ~0x1f) === 0 && ((1 << (_la - 91)) & 7) !== 0)) {
	            this.state = 512;
	            this.splice_expression();
	            this.state = 517;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 513;
	                    this.match(pikeParser.T__6);
	                    this.state = 514;
	                    this.splice_expression(); 
	                }
	                this.state = 519;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	            }

	        }

	        this.state = 523;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 522;
	            this.match(pikeParser.T__6);
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



	splice_expression() {
	    let localctx = new Splice_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, pikeParser.RULE_splice_expression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 526;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===78) {
	            this.state = 525;
	            this.match(pikeParser.T__77);
	        }

	        this.state = 528;
	        this.expression2();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 96, pikeParser.RULE_argument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 530;
	        this.type_();
	        this.state = 532;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 531;
	            this.match(pikeParser.T__78);
	        }

	        this.state = 534;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 98, pikeParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 536;
	        this.argument();
	        this.state = 541;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 537;
	                this.match(pikeParser.T__6);
	                this.state = 538;
	                this.argument(); 
	            }
	            this.state = 543;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
	        }

	        this.state = 545;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 544;
	            this.match(pikeParser.T__6);
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
	    this.enterRule(localctx, 100, pikeParser.RULE_type_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 547;
	        this.type__();
	        this.state = 551;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,51,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 548;
	                this.match(pikeParser.T__7); 
	            }
	            this.state = 553;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,51,this._ctx);
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



	type__() {
	    let localctx = new Type__Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, pikeParser.RULE_type__);
	    var _la = 0;
	    try {
	        this.state = 592;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 554;
	            this.match(pikeParser.INTTYPE);
	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 555;
	            this.match(pikeParser.STRINGTYPE);
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 556;
	            this.match(pikeParser.FLOATTYPE);
	            break;
	        case 83:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 557;
	            this.match(pikeParser.PROGRAMTYPE);
	            break;
	        case 84:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 558;
	            this.match(pikeParser.OBJECTTYPE);
	            this.state = 563;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 559;
	                this.match(pikeParser.T__4);
	                this.state = 560;
	                this.program_specifier();
	                this.state = 561;
	                this.match(pikeParser.T__5);
	            }

	            break;
	        case 85:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 565;
	            this.match(pikeParser.MAPPINGTYPE);
	            this.state = 572;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 566;
	                this.match(pikeParser.T__4);
	                this.state = 567;
	                this.type_();
	                this.state = 568;
	                this.match(pikeParser.T__3);
	                this.state = 569;
	                this.type_();
	                this.state = 570;
	                this.match(pikeParser.T__5);
	            }

	            break;
	        case 86:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 574;
	            this.match(pikeParser.ARRAYTYPE);
	            this.state = 579;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 575;
	                this.match(pikeParser.T__4);
	                this.state = 576;
	                this.type_();
	                this.state = 577;
	                this.match(pikeParser.T__5);
	            }

	            break;
	        case 87:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 581;
	            this.match(pikeParser.MULTISETTYPE);
	            this.state = 586;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 582;
	                this.match(pikeParser.T__4);
	                this.state = 583;
	                this.type_();
	                this.state = 584;
	                this.match(pikeParser.T__5);
	            }

	            break;
	        case 88:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 588;
	            this.match(pikeParser.FUNCTIONTYPE);
	            this.state = 590;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5) {
	                this.state = 589;
	                this.function_type();
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



	function_type() {
	    let localctx = new Function_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, pikeParser.RULE_function_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 594;
	        this.match(pikeParser.T__4);
	        this.state = 595;
	        this.type_();
	        this.state = 600;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7) {
	            this.state = 596;
	            this.match(pikeParser.T__6);
	            this.state = 597;
	            this.type_();
	            this.state = 602;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 604;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 603;
	            this.match(pikeParser.T__78);
	        }

	        this.state = 606;
	        this.match(pikeParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 106, pikeParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 608;
	        this.match(pikeParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

pikeParser.EOF = antlr4.Token.EOF;
pikeParser.T__0 = 1;
pikeParser.T__1 = 2;
pikeParser.T__2 = 3;
pikeParser.T__3 = 4;
pikeParser.T__4 = 5;
pikeParser.T__5 = 6;
pikeParser.T__6 = 7;
pikeParser.T__7 = 8;
pikeParser.T__8 = 9;
pikeParser.T__9 = 10;
pikeParser.T__10 = 11;
pikeParser.T__11 = 12;
pikeParser.T__12 = 13;
pikeParser.T__13 = 14;
pikeParser.T__14 = 15;
pikeParser.T__15 = 16;
pikeParser.T__16 = 17;
pikeParser.T__17 = 18;
pikeParser.T__18 = 19;
pikeParser.T__19 = 20;
pikeParser.T__20 = 21;
pikeParser.T__21 = 22;
pikeParser.T__22 = 23;
pikeParser.T__23 = 24;
pikeParser.T__24 = 25;
pikeParser.T__25 = 26;
pikeParser.T__26 = 27;
pikeParser.T__27 = 28;
pikeParser.T__28 = 29;
pikeParser.T__29 = 30;
pikeParser.T__30 = 31;
pikeParser.T__31 = 32;
pikeParser.T__32 = 33;
pikeParser.T__33 = 34;
pikeParser.T__34 = 35;
pikeParser.T__35 = 36;
pikeParser.T__36 = 37;
pikeParser.T__37 = 38;
pikeParser.T__38 = 39;
pikeParser.T__39 = 40;
pikeParser.T__40 = 41;
pikeParser.T__41 = 42;
pikeParser.T__42 = 43;
pikeParser.T__43 = 44;
pikeParser.T__44 = 45;
pikeParser.T__45 = 46;
pikeParser.T__46 = 47;
pikeParser.T__47 = 48;
pikeParser.T__48 = 49;
pikeParser.T__49 = 50;
pikeParser.T__50 = 51;
pikeParser.T__51 = 52;
pikeParser.T__52 = 53;
pikeParser.T__53 = 54;
pikeParser.T__54 = 55;
pikeParser.T__55 = 56;
pikeParser.T__56 = 57;
pikeParser.T__57 = 58;
pikeParser.T__58 = 59;
pikeParser.T__59 = 60;
pikeParser.T__60 = 61;
pikeParser.T__61 = 62;
pikeParser.T__62 = 63;
pikeParser.T__63 = 64;
pikeParser.T__64 = 65;
pikeParser.T__65 = 66;
pikeParser.T__66 = 67;
pikeParser.T__67 = 68;
pikeParser.T__68 = 69;
pikeParser.T__69 = 70;
pikeParser.T__70 = 71;
pikeParser.T__71 = 72;
pikeParser.T__72 = 73;
pikeParser.T__73 = 74;
pikeParser.T__74 = 75;
pikeParser.T__75 = 76;
pikeParser.T__76 = 77;
pikeParser.T__77 = 78;
pikeParser.T__78 = 79;
pikeParser.INTTYPE = 80;
pikeParser.FLOATTYPE = 81;
pikeParser.STRINGTYPE = 82;
pikeParser.PROGRAMTYPE = 83;
pikeParser.OBJECTTYPE = 84;
pikeParser.MAPPINGTYPE = 85;
pikeParser.ARRAYTYPE = 86;
pikeParser.MULTISETTYPE = 87;
pikeParser.FUNCTIONTYPE = 88;
pikeParser.IDENTIFIER = 89;
pikeParser.LETTER = 90;
pikeParser.FLOAT = 91;
pikeParser.NUMBER = 92;
pikeParser.STRING = 93;
pikeParser.WS = 94;

pikeParser.RULE_program = 0;
pikeParser.RULE_definition = 1;
pikeParser.RULE_impo = 2;
pikeParser.RULE_inheritance = 3;
pikeParser.RULE_function_declaration = 4;
pikeParser.RULE_function_definition = 5;
pikeParser.RULE_variables = 6;
pikeParser.RULE_variable_names = 7;
pikeParser.RULE_variable_name = 8;
pikeParser.RULE_constant = 9;
pikeParser.RULE_constant_names = 10;
pikeParser.RULE_constant_name = 11;
pikeParser.RULE_class_def = 12;
pikeParser.RULE_class_implementation = 13;
pikeParser.RULE_modifiers = 14;
pikeParser.RULE_block = 15;
pikeParser.RULE_statement = 16;
pikeParser.RULE_cond = 17;
pikeParser.RULE_while_stmt = 18;
pikeParser.RULE_return_stmt = 19;
pikeParser.RULE_do_while_stmt = 20;
pikeParser.RULE_for_stmt = 21;
pikeParser.RULE_switch_stmt = 22;
pikeParser.RULE_case_stmt = 23;
pikeParser.RULE_default_stmt = 24;
pikeParser.RULE_foreach_stmt = 25;
pikeParser.RULE_break_stmt = 26;
pikeParser.RULE_continue_stmt = 27;
pikeParser.RULE_expression = 28;
pikeParser.RULE_expression2 = 29;
pikeParser.RULE_expression3 = 30;
pikeParser.RULE_expression4 = 31;
pikeParser.RULE_expression5 = 32;
pikeParser.RULE_expression6 = 33;
pikeParser.RULE_extension = 34;
pikeParser.RULE_catch_ = 35;
pikeParser.RULE_gauge = 36;
pikeParser.RULE_sscanf = 37;
pikeParser.RULE_lvalue = 38;
pikeParser.RULE_lambda = 39;
pikeParser.RULE_constant_identifier = 40;
pikeParser.RULE_array = 41;
pikeParser.RULE_multiset = 42;
pikeParser.RULE_mapping = 43;
pikeParser.RULE_program_specifier = 44;
pikeParser.RULE_parenthesis = 45;
pikeParser.RULE_expression_list = 46;
pikeParser.RULE_splice_expression = 47;
pikeParser.RULE_argument = 48;
pikeParser.RULE_arguments = 49;
pikeParser.RULE_type_ = 50;
pikeParser.RULE_type__ = 51;
pikeParser.RULE_function_type = 52;
pikeParser.RULE_identifier = 53;

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
        this.ruleIndex = pikeParser.RULE_program;
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

	EOF() {
	    return this.getToken(pikeParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitProgram(this);
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
        this.ruleIndex = pikeParser.RULE_definition;
    }

	impo() {
	    return this.getTypedRuleContext(ImpoContext,0);
	};

	inheritance() {
	    return this.getTypedRuleContext(InheritanceContext,0);
	};

	function_declaration() {
	    return this.getTypedRuleContext(Function_declarationContext,0);
	};

	function_definition() {
	    return this.getTypedRuleContext(Function_definitionContext,0);
	};

	variables() {
	    return this.getTypedRuleContext(VariablesContext,0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	class_def() {
	    return this.getTypedRuleContext(Class_defContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class ImpoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_impo;
    }

	constant_identifier() {
	    return this.getTypedRuleContext(Constant_identifierContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterImpo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitImpo(this);
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
        this.ruleIndex = pikeParser.RULE_inheritance;
    }

	program_specifier() {
	    return this.getTypedRuleContext(Program_specifierContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterInheritance(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitInheritance(this);
		}
	}


}



class Function_declarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_function_declaration;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterFunction_declaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitFunction_declaration(this);
		}
	}


}



class Function_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_function_definition;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterFunction_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitFunction_definition(this);
		}
	}


}



class VariablesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_variables;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	variable_names() {
	    return this.getTypedRuleContext(Variable_namesContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterVariables(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitVariables(this);
		}
	}


}



class Variable_namesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_variable_names;
    }

	variable_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Variable_nameContext);
	    } else {
	        return this.getTypedRuleContext(Variable_nameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterVariable_names(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitVariable_names(this);
		}
	}


}



class Variable_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_variable_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression2() {
	    return this.getTypedRuleContext(Expression2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterVariable_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitVariable_name(this);
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
        this.ruleIndex = pikeParser.RULE_constant;
    }

	constant_names() {
	    return this.getTypedRuleContext(Constant_namesContext,0);
	};

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitConstant(this);
		}
	}


}



class Constant_namesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_constant_names;
    }

	constant_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Constant_nameContext);
	    } else {
	        return this.getTypedRuleContext(Constant_nameContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterConstant_names(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitConstant_names(this);
		}
	}


}



class Constant_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_constant_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	expression2() {
	    return this.getTypedRuleContext(Expression2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterConstant_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitConstant_name(this);
		}
	}


}



class Class_defContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_class_def;
    }

	modifiers() {
	    return this.getTypedRuleContext(ModifiersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterClass_def(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitClass_def(this);
		}
	}


}



class Class_implementationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_class_implementation;
    }

	program() {
	    return this.getTypedRuleContext(ProgramContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterClass_implementation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitClass_implementation(this);
		}
	}


}



class ModifiersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_modifiers;
    }


	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterModifiers(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitModifiers(this);
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
        this.ruleIndex = pikeParser.RULE_block;
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

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitBlock(this);
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
        this.ruleIndex = pikeParser.RULE_statement;
    }

	expression2() {
	    return this.getTypedRuleContext(Expression2Context,0);
	};

	cond() {
	    return this.getTypedRuleContext(CondContext,0);
	};

	while_stmt() {
	    return this.getTypedRuleContext(While_stmtContext,0);
	};

	do_while_stmt() {
	    return this.getTypedRuleContext(Do_while_stmtContext,0);
	};

	for_stmt() {
	    return this.getTypedRuleContext(For_stmtContext,0);
	};

	switch_stmt() {
	    return this.getTypedRuleContext(Switch_stmtContext,0);
	};

	case_stmt() {
	    return this.getTypedRuleContext(Case_stmtContext,0);
	};

	default_stmt() {
	    return this.getTypedRuleContext(Default_stmtContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	return_stmt() {
	    return this.getTypedRuleContext(Return_stmtContext,0);
	};

	foreach_stmt() {
	    return this.getTypedRuleContext(Foreach_stmtContext,0);
	};

	break_stmt() {
	    return this.getTypedRuleContext(Break_stmtContext,0);
	};

	continue_stmt() {
	    return this.getTypedRuleContext(Continue_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitStatement(this);
		}
	}


}



class CondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_cond;
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

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterCond(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitCond(this);
		}
	}


}



class While_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_while_stmt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterWhile_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitWhile_stmt(this);
		}
	}


}



class Return_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_return_stmt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterReturn_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitReturn_stmt(this);
		}
	}


}



class Do_while_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_do_while_stmt;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	while_stmt() {
	    return this.getTypedRuleContext(While_stmtContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterDo_while_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitDo_while_stmt(this);
		}
	}


}



class For_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_for_stmt;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
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
	    if(listener instanceof pikeListener ) {
	        listener.enterFor_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitFor_stmt(this);
		}
	}


}



class Switch_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_switch_stmt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterSwitch_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitSwitch_stmt(this);
		}
	}


}



class Case_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_case_stmt;
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
	    if(listener instanceof pikeListener ) {
	        listener.enterCase_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitCase_stmt(this);
		}
	}


}



class Default_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_default_stmt;
    }


	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterDefault_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitDefault_stmt(this);
		}
	}


}



class Foreach_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_foreach_stmt;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	expression6() {
	    return this.getTypedRuleContext(Expression6Context,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterForeach_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitForeach_stmt(this);
		}
	}


}



class Break_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_break_stmt;
    }


	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterBreak_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitBreak_stmt(this);
		}
	}


}



class Continue_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_continue_stmt;
    }


	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterContinue_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitContinue_stmt(this);
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
        this.ruleIndex = pikeParser.RULE_expression;
    }

	expression2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression2Context);
	    } else {
	        return this.getTypedRuleContext(Expression2Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Expression2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_expression2;
    }

	expression3() {
	    return this.getTypedRuleContext(Expression3Context,0);
	};

	lvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LvalueContext);
	    } else {
	        return this.getTypedRuleContext(LvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterExpression2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExpression2(this);
		}
	}


}



class Expression3Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_expression3;
    }

	expression4() {
	    return this.getTypedRuleContext(Expression4Context,0);
	};

	expression3 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression3Context);
	    } else {
	        return this.getTypedRuleContext(Expression3Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterExpression3(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExpression3(this);
		}
	}


}



class Expression4Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_expression4;
    }

	expression5 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression5Context);
	    } else {
	        return this.getTypedRuleContext(Expression5Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterExpression4(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExpression4(this);
		}
	}


}



class Expression5Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_expression5;
    }

	expression6() {
	    return this.getTypedRuleContext(Expression6Context,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	expression5() {
	    return this.getTypedRuleContext(Expression5Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterExpression5(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExpression5(this);
		}
	}


}



class Expression6Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_expression6;
    }

	STRING() {
	    return this.getToken(pikeParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(pikeParser.NUMBER, 0);
	};

	FLOAT() {
	    return this.getToken(pikeParser.FLOAT, 0);
	};

	catch_() {
	    return this.getTypedRuleContext(Catch_Context,0);
	};

	gauge() {
	    return this.getTypedRuleContext(GaugeContext,0);
	};

	sscanf() {
	    return this.getTypedRuleContext(SscanfContext,0);
	};

	lambda() {
	    return this.getTypedRuleContext(LambdaContext,0);
	};

	class_implementation() {
	    return this.getTypedRuleContext(Class_implementationContext,0);
	};

	constant_identifier() {
	    return this.getTypedRuleContext(Constant_identifierContext,0);
	};

	mapping() {
	    return this.getTypedRuleContext(MappingContext,0);
	};

	multiset() {
	    return this.getTypedRuleContext(MultisetContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	parenthesis() {
	    return this.getTypedRuleContext(ParenthesisContext,0);
	};

	extension = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExtensionContext);
	    } else {
	        return this.getTypedRuleContext(ExtensionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterExpression6(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExpression6(this);
		}
	}


}



class ExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_extension;
    }

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
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
	    if(listener instanceof pikeListener ) {
	        listener.enterExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExtension(this);
		}
	}


}



class Catch_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_catch_;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterCatch_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitCatch_(this);
		}
	}


}



class GaugeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_gauge;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterGauge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitGauge(this);
		}
	}


}



class SscanfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_sscanf;
    }

	expression2 = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Expression2Context);
	    } else {
	        return this.getTypedRuleContext(Expression2Context,i);
	    }
	};

	lvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LvalueContext);
	    } else {
	        return this.getTypedRuleContext(LvalueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterSscanf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitSscanf(this);
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
        this.ruleIndex = pikeParser.RULE_lvalue;
    }

	expression6() {
	    return this.getTypedRuleContext(Expression6Context,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterLvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitLvalue(this);
		}
	}


}



class LambdaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_lambda;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterLambda(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitLambda(this);
		}
	}


}



class Constant_identifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_constant_identifier;
    }

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterConstant_identifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitConstant_identifier(this);
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
        this.ruleIndex = pikeParser.RULE_array;
    }

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterArray(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitArray(this);
		}
	}


}



class MultisetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_multiset;
    }

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterMultiset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitMultiset(this);
		}
	}


}



class MappingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_mapping;
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
	    if(listener instanceof pikeListener ) {
	        listener.enterMapping(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitMapping(this);
		}
	}


}



class Program_specifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_program_specifier;
    }

	constant_identifier() {
	    return this.getTypedRuleContext(Constant_identifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterProgram_specifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitProgram_specifier(this);
		}
	}


}



class ParenthesisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_parenthesis;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterParenthesis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitParenthesis(this);
		}
	}


}



class Expression_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_expression_list;
    }

	splice_expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Splice_expressionContext);
	    } else {
	        return this.getTypedRuleContext(Splice_expressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterExpression_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitExpression_list(this);
		}
	}


}



class Splice_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_splice_expression;
    }

	expression2() {
	    return this.getTypedRuleContext(Expression2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterSplice_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitSplice_expression(this);
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
        this.ruleIndex = pikeParser.RULE_argument;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitArgument(this);
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
        this.ruleIndex = pikeParser.RULE_arguments;
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
	    if(listener instanceof pikeListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitArguments(this);
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
        this.ruleIndex = pikeParser.RULE_type_;
    }

	type__() {
	    return this.getTypedRuleContext(Type__Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitType_(this);
		}
	}


}



class Type__Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_type__;
    }

	INTTYPE() {
	    return this.getToken(pikeParser.INTTYPE, 0);
	};

	STRINGTYPE() {
	    return this.getToken(pikeParser.STRINGTYPE, 0);
	};

	FLOATTYPE() {
	    return this.getToken(pikeParser.FLOATTYPE, 0);
	};

	PROGRAMTYPE() {
	    return this.getToken(pikeParser.PROGRAMTYPE, 0);
	};

	OBJECTTYPE() {
	    return this.getToken(pikeParser.OBJECTTYPE, 0);
	};

	program_specifier() {
	    return this.getTypedRuleContext(Program_specifierContext,0);
	};

	MAPPINGTYPE() {
	    return this.getToken(pikeParser.MAPPINGTYPE, 0);
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

	ARRAYTYPE() {
	    return this.getToken(pikeParser.ARRAYTYPE, 0);
	};

	MULTISETTYPE() {
	    return this.getToken(pikeParser.MULTISETTYPE, 0);
	};

	FUNCTIONTYPE() {
	    return this.getToken(pikeParser.FUNCTIONTYPE, 0);
	};

	function_type() {
	    return this.getTypedRuleContext(Function_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterType__(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitType__(this);
		}
	}


}



class Function_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = pikeParser.RULE_function_type;
    }

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
	    if(listener instanceof pikeListener ) {
	        listener.enterFunction_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitFunction_type(this);
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
        this.ruleIndex = pikeParser.RULE_identifier;
    }

	IDENTIFIER() {
	    return this.getToken(pikeParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof pikeListener ) {
	        listener.exitIdentifier(this);
		}
	}


}




pikeParser.ProgramContext = ProgramContext; 
pikeParser.DefinitionContext = DefinitionContext; 
pikeParser.ImpoContext = ImpoContext; 
pikeParser.InheritanceContext = InheritanceContext; 
pikeParser.Function_declarationContext = Function_declarationContext; 
pikeParser.Function_definitionContext = Function_definitionContext; 
pikeParser.VariablesContext = VariablesContext; 
pikeParser.Variable_namesContext = Variable_namesContext; 
pikeParser.Variable_nameContext = Variable_nameContext; 
pikeParser.ConstantContext = ConstantContext; 
pikeParser.Constant_namesContext = Constant_namesContext; 
pikeParser.Constant_nameContext = Constant_nameContext; 
pikeParser.Class_defContext = Class_defContext; 
pikeParser.Class_implementationContext = Class_implementationContext; 
pikeParser.ModifiersContext = ModifiersContext; 
pikeParser.BlockContext = BlockContext; 
pikeParser.StatementContext = StatementContext; 
pikeParser.CondContext = CondContext; 
pikeParser.While_stmtContext = While_stmtContext; 
pikeParser.Return_stmtContext = Return_stmtContext; 
pikeParser.Do_while_stmtContext = Do_while_stmtContext; 
pikeParser.For_stmtContext = For_stmtContext; 
pikeParser.Switch_stmtContext = Switch_stmtContext; 
pikeParser.Case_stmtContext = Case_stmtContext; 
pikeParser.Default_stmtContext = Default_stmtContext; 
pikeParser.Foreach_stmtContext = Foreach_stmtContext; 
pikeParser.Break_stmtContext = Break_stmtContext; 
pikeParser.Continue_stmtContext = Continue_stmtContext; 
pikeParser.ExpressionContext = ExpressionContext; 
pikeParser.Expression2Context = Expression2Context; 
pikeParser.Expression3Context = Expression3Context; 
pikeParser.Expression4Context = Expression4Context; 
pikeParser.Expression5Context = Expression5Context; 
pikeParser.Expression6Context = Expression6Context; 
pikeParser.ExtensionContext = ExtensionContext; 
pikeParser.Catch_Context = Catch_Context; 
pikeParser.GaugeContext = GaugeContext; 
pikeParser.SscanfContext = SscanfContext; 
pikeParser.LvalueContext = LvalueContext; 
pikeParser.LambdaContext = LambdaContext; 
pikeParser.Constant_identifierContext = Constant_identifierContext; 
pikeParser.ArrayContext = ArrayContext; 
pikeParser.MultisetContext = MultisetContext; 
pikeParser.MappingContext = MappingContext; 
pikeParser.Program_specifierContext = Program_specifierContext; 
pikeParser.ParenthesisContext = ParenthesisContext; 
pikeParser.Expression_listContext = Expression_listContext; 
pikeParser.Splice_expressionContext = Splice_expressionContext; 
pikeParser.ArgumentContext = ArgumentContext; 
pikeParser.ArgumentsContext = ArgumentsContext; 
pikeParser.Type_Context = Type_Context; 
pikeParser.Type__Context = Type__Context; 
pikeParser.Function_typeContext = Function_typeContext; 
pikeParser.IdentifierContext = IdentifierContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
