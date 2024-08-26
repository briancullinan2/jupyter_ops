// Generated from Resources/Parsers/ruby/Corundum.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CorundumListener from './CorundumListener.js';
const serializedATN = [4,1,60,824,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,152,8,1,1,1,1,1,1,1,1,1,5,1,158,
8,1,10,1,12,1,161,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,173,8,
2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,
8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,3,12,212,8,12,1,13,1,13,3,13,216,8,13,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,3,14,225,8,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,233,
8,15,10,15,12,15,236,9,15,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,255,8,18,1,19,1,19,1,20,1,20,
1,20,1,20,1,20,1,20,5,20,265,8,20,10,20,12,20,268,9,20,1,21,1,21,3,21,272,
8,21,1,22,1,22,1,22,1,22,3,22,278,8,22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,
286,8,23,1,24,1,24,1,25,1,25,1,25,1,25,1,25,3,25,295,8,25,1,26,1,26,1,27,
1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,
27,1,27,1,27,1,27,3,27,318,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,
28,342,8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,366,8,29,1,30,1,30,
1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,
31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,396,8,31,
1,32,1,32,1,33,1,33,1,33,1,33,3,33,404,8,33,1,34,1,34,1,34,1,34,1,34,1,34,
5,34,412,8,34,10,34,12,34,415,9,34,1,35,1,35,1,36,1,36,1,37,1,37,1,37,1,
37,1,37,1,37,5,37,427,8,37,10,37,12,37,430,9,37,1,38,1,38,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,1,39,3,39,443,8,39,1,39,1,39,1,39,1,39,1,39,1,39,
1,39,1,39,1,39,1,39,1,39,5,39,456,8,39,10,39,12,39,459,9,39,1,40,1,40,1,
40,1,40,1,40,1,40,1,40,1,40,3,40,469,8,40,1,41,1,41,1,41,1,41,1,41,1,41,
1,41,1,41,3,41,479,8,41,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,489,
8,42,1,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,499,8,43,1,44,1,44,1,44,
1,44,1,44,1,44,1,44,1,44,3,44,509,8,44,1,45,1,45,1,45,1,45,1,45,1,46,1,46,
1,46,1,46,1,47,1,47,1,47,1,47,1,48,1,48,1,48,3,48,527,8,48,1,48,1,48,1,48,
1,48,3,48,533,8,48,5,48,535,8,48,10,48,12,48,538,9,48,1,49,1,49,1,49,1,49,
3,49,544,8,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,552,8,49,1,49,1,49,3,49,
556,8,49,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,
1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,584,
8,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,
50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,5,50,607,8,50,10,50,12,50,610,9,50,
1,51,1,51,1,51,3,51,615,8,51,1,52,1,52,1,52,1,52,1,52,1,52,3,52,623,8,52,
1,52,1,52,1,52,1,52,1,52,1,52,5,52,631,8,52,10,52,12,52,634,9,52,1,53,1,
53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,650,
8,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,5,53,664,
8,53,10,53,12,53,667,9,53,1,54,1,54,1,54,1,54,1,54,1,54,3,54,675,8,54,1,
54,1,54,1,54,1,54,1,54,1,54,5,54,683,8,54,10,54,12,54,686,9,54,1,55,1,55,
1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,55,1,
55,1,55,1,55,1,55,1,55,3,55,709,8,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,
1,56,3,56,719,8,56,1,57,1,57,1,57,3,57,724,8,57,1,58,1,58,1,59,1,59,1,59,
1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,
59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,754,8,59,1,59,1,59,1,59,
1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,
59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,5,59,783,8,59,10,59,12,59,
786,9,59,1,60,1,60,1,61,1,61,1,62,1,62,1,63,1,63,1,64,1,64,1,65,1,65,1,66,
1,66,1,67,1,67,1,68,1,68,1,69,1,69,1,69,3,69,809,8,69,1,69,1,69,1,69,1,69,
5,69,815,8,69,10,69,12,69,818,9,69,1,70,1,70,1,71,1,71,1,71,0,13,2,30,40,
68,74,78,96,100,104,106,108,118,138,72,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,
74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
118,120,122,124,126,128,130,132,134,136,138,140,142,0,10,1,0,33,38,1,0,22,
24,1,0,20,21,1,0,28,31,1,0,26,27,2,0,42,42,47,47,1,0,43,44,1,0,40,41,1,0,
45,46,1,0,18,19,877,0,144,1,0,0,0,2,151,1,0,0,0,4,172,1,0,0,0,6,174,1,0,
0,0,8,178,1,0,0,0,10,182,1,0,0,0,12,184,1,0,0,0,14,186,1,0,0,0,16,189,1,
0,0,0,18,194,1,0,0,0,20,196,1,0,0,0,22,200,1,0,0,0,24,211,1,0,0,0,26,215,
1,0,0,0,28,224,1,0,0,0,30,226,1,0,0,0,32,237,1,0,0,0,34,239,1,0,0,0,36,254,
1,0,0,0,38,256,1,0,0,0,40,258,1,0,0,0,42,271,1,0,0,0,44,277,1,0,0,0,46,279,
1,0,0,0,48,287,1,0,0,0,50,294,1,0,0,0,52,296,1,0,0,0,54,317,1,0,0,0,56,341,
1,0,0,0,58,365,1,0,0,0,60,367,1,0,0,0,62,395,1,0,0,0,64,397,1,0,0,0,66,403,
1,0,0,0,68,405,1,0,0,0,70,416,1,0,0,0,72,418,1,0,0,0,74,420,1,0,0,0,76,431,
1,0,0,0,78,442,1,0,0,0,80,468,1,0,0,0,82,478,1,0,0,0,84,488,1,0,0,0,86,498,
1,0,0,0,88,508,1,0,0,0,90,510,1,0,0,0,92,515,1,0,0,0,94,519,1,0,0,0,96,523,
1,0,0,0,98,555,1,0,0,0,100,583,1,0,0,0,102,614,1,0,0,0,104,622,1,0,0,0,106,
649,1,0,0,0,108,674,1,0,0,0,110,708,1,0,0,0,112,718,1,0,0,0,114,723,1,0,
0,0,116,725,1,0,0,0,118,753,1,0,0,0,120,787,1,0,0,0,122,789,1,0,0,0,124,
791,1,0,0,0,126,793,1,0,0,0,128,795,1,0,0,0,130,797,1,0,0,0,132,799,1,0,
0,0,134,801,1,0,0,0,136,803,1,0,0,0,138,808,1,0,0,0,140,819,1,0,0,0,142,
821,1,0,0,0,144,145,3,2,1,0,145,1,1,0,0,0,146,147,6,1,-1,0,147,148,3,4,2,
0,148,149,3,138,69,0,149,152,1,0,0,0,150,152,3,138,69,0,151,146,1,0,0,0,
151,150,1,0,0,0,152,159,1,0,0,0,153,154,10,2,0,0,154,155,3,4,2,0,155,156,
3,138,69,0,156,158,1,0,0,0,157,153,1,0,0,0,158,161,1,0,0,0,159,157,1,0,0,
0,159,160,1,0,0,0,160,3,1,0,0,0,161,159,1,0,0,0,162,173,3,20,10,0,163,173,
3,12,6,0,164,173,3,14,7,0,165,173,3,56,28,0,166,173,3,58,29,0,167,173,3,
118,59,0,168,173,3,34,17,0,169,173,3,60,30,0,170,173,3,62,31,0,171,173,3,
16,8,0,172,162,1,0,0,0,172,163,1,0,0,0,172,164,1,0,0,0,172,165,1,0,0,0,172,
166,1,0,0,0,172,167,1,0,0,0,172,168,1,0,0,0,172,169,1,0,0,0,172,170,1,0,
0,0,172,171,1,0,0,0,173,5,1,0,0,0,174,175,3,116,58,0,175,176,5,32,0,0,176,
177,3,134,67,0,177,7,1,0,0,0,178,179,3,134,67,0,179,180,5,32,0,0,180,181,
3,50,25,0,181,9,1,0,0,0,182,183,3,134,67,0,183,11,1,0,0,0,184,185,3,36,18,
0,185,13,1,0,0,0,186,187,5,5,0,0,187,188,3,122,61,0,188,15,1,0,0,0,189,190,
5,9,0,0,190,191,3,142,71,0,191,192,3,18,9,0,192,193,5,6,0,0,193,17,1,0,0,
0,194,195,3,2,1,0,195,19,1,0,0,0,196,197,3,24,12,0,197,198,3,22,11,0,198,
199,5,6,0,0,199,21,1,0,0,0,200,201,3,2,1,0,201,23,1,0,0,0,202,203,5,7,0,
0,203,204,3,26,13,0,204,205,3,142,71,0,205,212,1,0,0,0,206,207,5,7,0,0,207,
208,3,26,13,0,208,209,3,28,14,0,209,210,3,142,71,0,210,212,1,0,0,0,211,202,
1,0,0,0,211,206,1,0,0,0,212,25,1,0,0,0,213,216,3,136,68,0,214,216,3,132,
66,0,215,213,1,0,0,0,215,214,1,0,0,0,216,27,1,0,0,0,217,218,5,48,0,0,218,
225,5,49,0,0,219,220,5,48,0,0,220,221,3,30,15,0,221,222,5,49,0,0,222,225,
1,0,0,0,223,225,3,30,15,0,224,217,1,0,0,0,224,219,1,0,0,0,224,223,1,0,0,
0,225,29,1,0,0,0,226,227,6,15,-1,0,227,228,3,32,16,0,228,234,1,0,0,0,229,
230,10,1,0,0,230,231,5,2,0,0,231,233,3,32,16,0,232,229,1,0,0,0,233,236,1,
0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,31,1,0,0,0,236,234,1,0,0,0,237,
238,3,132,66,0,238,33,1,0,0,0,239,240,5,8,0,0,240,241,3,50,25,0,241,35,1,
0,0,0,242,243,3,26,13,0,243,244,5,48,0,0,244,245,3,38,19,0,245,246,5,49,
0,0,246,255,1,0,0,0,247,248,3,26,13,0,248,249,3,38,19,0,249,255,1,0,0,0,
250,251,3,26,13,0,251,252,5,48,0,0,252,253,5,49,0,0,253,255,1,0,0,0,254,
242,1,0,0,0,254,247,1,0,0,0,254,250,1,0,0,0,255,37,1,0,0,0,256,257,3,40,
20,0,257,39,1,0,0,0,258,259,6,20,-1,0,259,260,3,42,21,0,260,266,1,0,0,0,
261,262,10,1,0,0,262,263,5,2,0,0,263,265,3,42,21,0,264,261,1,0,0,0,265,268,
1,0,0,0,266,264,1,0,0,0,266,267,1,0,0,0,267,41,1,0,0,0,268,266,1,0,0,0,269,
272,3,44,22,0,270,272,3,46,23,0,271,269,1,0,0,0,271,270,1,0,0,0,272,43,1,
0,0,0,273,278,3,104,52,0,274,278,3,106,53,0,275,278,3,108,54,0,276,278,3,
100,50,0,277,273,1,0,0,0,277,274,1,0,0,0,277,275,1,0,0,0,277,276,1,0,0,0,
278,45,1,0,0,0,279,280,3,132,66,0,280,285,5,32,0,0,281,286,3,104,52,0,282,
286,3,106,53,0,283,286,3,108,54,0,284,286,3,100,50,0,285,281,1,0,0,0,285,
282,1,0,0,0,285,283,1,0,0,0,285,284,1,0,0,0,286,47,1,0,0,0,287,288,3,36,
18,0,288,49,1,0,0,0,289,295,3,104,52,0,290,295,3,106,53,0,291,295,3,108,
54,0,292,295,3,100,50,0,293,295,3,10,5,0,294,289,1,0,0,0,294,290,1,0,0,0,
294,291,1,0,0,0,294,292,1,0,0,0,294,293,1,0,0,0,295,51,1,0,0,0,296,297,3,
54,27,0,297,53,1,0,0,0,298,299,5,12,0,0,299,300,3,70,35,0,300,301,3,142,
71,0,301,302,3,76,38,0,302,318,1,0,0,0,303,304,5,12,0,0,304,305,3,70,35,
0,305,306,3,142,71,0,306,307,3,76,38,0,307,308,3,140,70,0,308,309,3,142,
71,0,309,310,3,76,38,0,310,318,1,0,0,0,311,312,5,12,0,0,312,313,3,70,35,
0,313,314,3,142,71,0,314,315,3,76,38,0,315,316,3,54,27,0,316,318,1,0,0,0,
317,298,1,0,0,0,317,303,1,0,0,0,317,311,1,0,0,0,318,55,1,0,0,0,319,320,5,
10,0,0,320,321,3,70,35,0,321,322,3,142,71,0,322,323,3,76,38,0,323,324,5,
6,0,0,324,342,1,0,0,0,325,326,5,10,0,0,326,327,3,70,35,0,327,328,3,142,71,
0,328,329,3,76,38,0,329,330,3,140,70,0,330,331,3,142,71,0,331,332,3,76,38,
0,332,333,5,6,0,0,333,342,1,0,0,0,334,335,5,10,0,0,335,336,3,70,35,0,336,
337,3,142,71,0,337,338,3,76,38,0,338,339,3,52,26,0,339,340,5,6,0,0,340,342,
1,0,0,0,341,319,1,0,0,0,341,325,1,0,0,0,341,334,1,0,0,0,342,57,1,0,0,0,343,
344,5,13,0,0,344,345,3,70,35,0,345,346,3,142,71,0,346,347,3,76,38,0,347,
348,5,6,0,0,348,366,1,0,0,0,349,350,5,13,0,0,350,351,3,70,35,0,351,352,3,
142,71,0,352,353,3,76,38,0,353,354,3,140,70,0,354,355,3,142,71,0,355,356,
3,76,38,0,356,357,5,6,0,0,357,366,1,0,0,0,358,359,5,13,0,0,359,360,3,70,
35,0,360,361,3,142,71,0,361,362,3,76,38,0,362,363,3,52,26,0,363,364,5,6,
0,0,364,366,1,0,0,0,365,343,1,0,0,0,365,349,1,0,0,0,365,358,1,0,0,0,366,
59,1,0,0,0,367,368,5,14,0,0,368,369,3,70,35,0,369,370,3,142,71,0,370,371,
3,76,38,0,371,372,5,6,0,0,372,61,1,0,0,0,373,374,5,17,0,0,374,375,5,48,0,
0,375,376,3,64,32,0,376,377,5,3,0,0,377,378,3,70,35,0,378,379,5,3,0,0,379,
380,3,72,36,0,380,381,5,49,0,0,381,382,3,142,71,0,382,383,3,76,38,0,383,
384,5,6,0,0,384,396,1,0,0,0,385,386,5,17,0,0,386,387,3,64,32,0,387,388,5,
3,0,0,388,389,3,70,35,0,389,390,5,3,0,0,390,391,3,72,36,0,391,392,3,142,
71,0,392,393,3,76,38,0,393,394,5,6,0,0,394,396,1,0,0,0,395,373,1,0,0,0,395,
385,1,0,0,0,396,63,1,0,0,0,397,398,3,68,34,0,398,65,1,0,0,0,399,404,3,84,
42,0,400,404,3,86,43,0,401,404,3,88,44,0,402,404,3,82,41,0,403,399,1,0,0,
0,403,400,1,0,0,0,403,401,1,0,0,0,403,402,1,0,0,0,404,67,1,0,0,0,405,406,
6,34,-1,0,406,407,3,66,33,0,407,413,1,0,0,0,408,409,10,2,0,0,409,410,5,2,
0,0,410,412,3,66,33,0,411,408,1,0,0,0,412,415,1,0,0,0,413,411,1,0,0,0,413,
414,1,0,0,0,414,69,1,0,0,0,415,413,1,0,0,0,416,417,3,110,55,0,417,71,1,0,
0,0,418,419,3,74,37,0,419,73,1,0,0,0,420,421,6,37,-1,0,421,422,3,66,33,0,
422,428,1,0,0,0,423,424,10,2,0,0,424,425,5,2,0,0,425,427,3,66,33,0,426,423,
1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,75,1,0,0,0,430,
428,1,0,0,0,431,432,3,78,39,0,432,77,1,0,0,0,433,434,6,39,-1,0,434,435,3,
4,2,0,435,436,3,138,69,0,436,443,1,0,0,0,437,438,5,15,0,0,438,443,3,138,
69,0,439,440,3,120,60,0,440,441,3,138,69,0,441,443,1,0,0,0,442,433,1,0,0,
0,442,437,1,0,0,0,442,439,1,0,0,0,443,457,1,0,0,0,444,445,10,3,0,0,445,446,
3,4,2,0,446,447,3,138,69,0,447,456,1,0,0,0,448,449,10,2,0,0,449,450,5,15,
0,0,450,456,3,138,69,0,451,452,10,1,0,0,452,453,3,120,60,0,453,454,3,138,
69,0,454,456,1,0,0,0,455,444,1,0,0,0,455,448,1,0,0,0,455,451,1,0,0,0,456,
459,1,0,0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,79,1,0,0,0,459,457,1,0,0,
0,460,461,3,116,58,0,461,462,5,32,0,0,462,463,3,118,59,0,463,469,1,0,0,0,
464,465,3,116,58,0,465,466,7,0,0,0,466,467,3,118,59,0,467,469,1,0,0,0,468,
460,1,0,0,0,468,464,1,0,0,0,469,81,1,0,0,0,470,471,3,116,58,0,471,472,5,
32,0,0,472,473,3,100,50,0,473,479,1,0,0,0,474,475,3,116,58,0,475,476,7,0,
0,0,476,477,3,100,50,0,477,479,1,0,0,0,478,470,1,0,0,0,478,474,1,0,0,0,479,
83,1,0,0,0,480,481,3,116,58,0,481,482,5,32,0,0,482,483,3,104,52,0,483,489,
1,0,0,0,484,485,3,116,58,0,485,486,7,0,0,0,486,487,3,104,52,0,487,489,1,
0,0,0,488,480,1,0,0,0,488,484,1,0,0,0,489,85,1,0,0,0,490,491,3,116,58,0,
491,492,5,32,0,0,492,493,3,106,53,0,493,499,1,0,0,0,494,495,3,116,58,0,495,
496,7,0,0,0,496,497,3,106,53,0,497,499,1,0,0,0,498,490,1,0,0,0,498,494,1,
0,0,0,499,87,1,0,0,0,500,501,3,116,58,0,501,502,5,32,0,0,502,503,3,108,54,
0,503,509,1,0,0,0,504,505,3,116,58,0,505,506,5,33,0,0,506,507,3,108,54,0,
507,509,1,0,0,0,508,500,1,0,0,0,508,504,1,0,0,0,509,89,1,0,0,0,510,511,3,
116,58,0,511,512,5,32,0,0,512,513,5,50,0,0,513,514,5,51,0,0,514,91,1,0,0,
0,515,516,3,98,49,0,516,517,5,32,0,0,517,518,3,50,25,0,518,93,1,0,0,0,519,
520,5,50,0,0,520,521,3,96,48,0,521,522,5,51,0,0,522,95,1,0,0,0,523,526,6,
48,-1,0,524,527,3,104,52,0,525,527,3,100,50,0,526,524,1,0,0,0,526,525,1,
0,0,0,527,536,1,0,0,0,528,529,10,1,0,0,529,532,5,2,0,0,530,533,3,104,52,
0,531,533,3,100,50,0,532,530,1,0,0,0,532,531,1,0,0,0,533,535,1,0,0,0,534,
528,1,0,0,0,535,538,1,0,0,0,536,534,1,0,0,0,536,537,1,0,0,0,537,97,1,0,0,
0,538,536,1,0,0,0,539,540,3,132,66,0,540,543,5,50,0,0,541,544,3,104,52,0,
542,544,3,100,50,0,543,541,1,0,0,0,543,542,1,0,0,0,544,545,1,0,0,0,545,546,
5,51,0,0,546,556,1,0,0,0,547,548,3,134,67,0,548,551,5,50,0,0,549,552,3,104,
52,0,550,552,3,100,50,0,551,549,1,0,0,0,551,550,1,0,0,0,552,553,1,0,0,0,
553,554,5,51,0,0,554,556,1,0,0,0,555,539,1,0,0,0,555,547,1,0,0,0,556,99,
1,0,0,0,557,558,6,50,-1,0,558,559,3,104,52,0,559,560,7,1,0,0,560,561,3,100,
50,13,561,584,1,0,0,0,562,563,3,106,53,0,563,564,7,1,0,0,564,565,3,100,50,
11,565,584,1,0,0,0,566,567,3,108,54,0,567,568,5,22,0,0,568,569,3,100,50,
8,569,584,1,0,0,0,570,571,3,104,52,0,571,572,7,2,0,0,572,573,3,100,50,6,
573,584,1,0,0,0,574,575,3,106,53,0,575,576,7,2,0,0,576,577,3,100,50,4,577,
584,1,0,0,0,578,579,5,48,0,0,579,580,3,100,50,0,580,581,5,49,0,0,581,584,
1,0,0,0,582,584,3,102,51,0,583,557,1,0,0,0,583,562,1,0,0,0,583,566,1,0,0,
0,583,570,1,0,0,0,583,574,1,0,0,0,583,578,1,0,0,0,583,582,1,0,0,0,584,608,
1,0,0,0,585,586,10,10,0,0,586,587,7,1,0,0,587,607,3,100,50,11,588,589,10,
3,0,0,589,590,7,2,0,0,590,607,3,100,50,4,591,592,10,14,0,0,592,593,7,1,0,
0,593,607,3,104,52,0,594,595,10,12,0,0,595,596,7,1,0,0,596,607,3,106,53,
0,597,598,10,9,0,0,598,599,5,22,0,0,599,607,3,108,54,0,600,601,10,7,0,0,
601,602,7,2,0,0,602,607,3,104,52,0,603,604,10,5,0,0,604,605,7,2,0,0,605,
607,3,106,53,0,606,585,1,0,0,0,606,588,1,0,0,0,606,591,1,0,0,0,606,594,1,
0,0,0,606,597,1,0,0,0,606,600,1,0,0,0,606,603,1,0,0,0,607,610,1,0,0,0,608,
606,1,0,0,0,608,609,1,0,0,0,609,101,1,0,0,0,610,608,1,0,0,0,611,615,3,132,
66,0,612,615,3,48,24,0,613,615,3,98,49,0,614,611,1,0,0,0,614,612,1,0,0,0,
614,613,1,0,0,0,615,103,1,0,0,0,616,617,6,52,-1,0,617,618,5,48,0,0,618,619,
3,104,52,0,619,620,5,49,0,0,620,623,1,0,0,0,621,623,3,126,63,0,622,616,1,
0,0,0,622,621,1,0,0,0,623,632,1,0,0,0,624,625,10,4,0,0,625,626,7,1,0,0,626,
631,3,104,52,5,627,628,10,3,0,0,628,629,7,2,0,0,629,631,3,104,52,4,630,624,
1,0,0,0,630,627,1,0,0,0,631,634,1,0,0,0,632,630,1,0,0,0,632,633,1,0,0,0,
633,105,1,0,0,0,634,632,1,0,0,0,635,636,6,53,-1,0,636,637,3,104,52,0,637,
638,7,1,0,0,638,639,3,106,53,7,639,650,1,0,0,0,640,641,3,104,52,0,641,642,
7,2,0,0,642,643,3,106,53,4,643,650,1,0,0,0,644,645,5,48,0,0,645,646,3,106,
53,0,646,647,5,49,0,0,647,650,1,0,0,0,648,650,3,124,62,0,649,635,1,0,0,0,
649,640,1,0,0,0,649,644,1,0,0,0,649,648,1,0,0,0,650,665,1,0,0,0,651,652,
10,8,0,0,652,653,7,1,0,0,653,664,3,106,53,9,654,655,10,5,0,0,655,656,7,2,
0,0,656,664,3,106,53,6,657,658,10,6,0,0,658,659,7,1,0,0,659,664,3,104,52,
0,660,661,10,3,0,0,661,662,7,2,0,0,662,664,3,104,52,0,663,651,1,0,0,0,663,
654,1,0,0,0,663,657,1,0,0,0,663,660,1,0,0,0,664,667,1,0,0,0,665,663,1,0,
0,0,665,666,1,0,0,0,666,107,1,0,0,0,667,665,1,0,0,0,668,669,6,54,-1,0,669,
670,3,104,52,0,670,671,5,22,0,0,671,672,3,108,54,3,672,675,1,0,0,0,673,675,
3,122,61,0,674,668,1,0,0,0,674,673,1,0,0,0,675,684,1,0,0,0,676,677,10,2,
0,0,677,678,5,20,0,0,678,683,3,108,54,3,679,680,10,4,0,0,680,681,5,22,0,
0,681,683,3,104,52,0,682,676,1,0,0,0,682,679,1,0,0,0,683,686,1,0,0,0,684,
682,1,0,0,0,684,685,1,0,0,0,685,109,1,0,0,0,686,684,1,0,0,0,687,688,3,112,
56,0,688,689,5,39,0,0,689,690,3,110,55,0,690,709,1,0,0,0,691,692,3,112,56,
0,692,693,5,45,0,0,693,694,3,110,55,0,694,709,1,0,0,0,695,696,3,112,56,0,
696,697,5,40,0,0,697,698,3,110,55,0,698,709,1,0,0,0,699,700,3,112,56,0,700,
701,5,46,0,0,701,702,3,110,55,0,702,709,1,0,0,0,703,704,5,48,0,0,704,705,
3,110,55,0,705,706,5,49,0,0,706,709,1,0,0,0,707,709,3,112,56,0,708,687,1,
0,0,0,708,691,1,0,0,0,708,695,1,0,0,0,708,699,1,0,0,0,708,703,1,0,0,0,708,
707,1,0,0,0,709,111,1,0,0,0,710,711,3,114,57,0,711,712,7,3,0,0,712,713,3,
114,57,0,713,719,1,0,0,0,714,715,3,114,57,0,715,716,7,4,0,0,716,717,3,114,
57,0,717,719,1,0,0,0,718,710,1,0,0,0,718,714,1,0,0,0,719,113,1,0,0,0,720,
724,3,50,25,0,721,724,3,98,49,0,722,724,3,132,66,0,723,720,1,0,0,0,723,721,
1,0,0,0,723,722,1,0,0,0,724,115,1,0,0,0,725,726,3,132,66,0,726,117,1,0,0,
0,727,728,6,59,-1,0,728,754,3,116,58,0,729,754,3,90,45,0,730,754,3,92,46,
0,731,754,3,104,52,0,732,754,3,106,53,0,733,754,3,108,54,0,734,754,3,8,4,
0,735,754,3,6,3,0,736,754,3,82,41,0,737,754,3,88,44,0,738,754,3,86,43,0,
739,754,3,84,42,0,740,754,3,80,40,0,741,754,3,36,18,0,742,754,3,122,61,0,
743,754,3,128,64,0,744,754,3,124,62,0,745,754,3,126,63,0,746,754,3,130,65,
0,747,748,7,5,0,0,748,754,3,118,59,10,749,750,5,48,0,0,750,751,3,118,59,
0,751,752,5,49,0,0,752,754,1,0,0,0,753,727,1,0,0,0,753,729,1,0,0,0,753,730,
1,0,0,0,753,731,1,0,0,0,753,732,1,0,0,0,753,733,1,0,0,0,753,734,1,0,0,0,
753,735,1,0,0,0,753,736,1,0,0,0,753,737,1,0,0,0,753,738,1,0,0,0,753,739,
1,0,0,0,753,740,1,0,0,0,753,741,1,0,0,0,753,742,1,0,0,0,753,743,1,0,0,0,
753,744,1,0,0,0,753,745,1,0,0,0,753,746,1,0,0,0,753,747,1,0,0,0,753,749,
1,0,0,0,754,784,1,0,0,0,755,756,10,11,0,0,756,757,5,25,0,0,757,783,3,118,
59,12,758,759,10,9,0,0,759,760,7,1,0,0,760,783,3,118,59,10,761,762,10,8,
0,0,762,763,7,2,0,0,763,783,3,118,59,9,764,765,10,7,0,0,765,766,7,6,0,0,
766,783,3,118,59,8,767,768,10,6,0,0,768,769,5,39,0,0,769,783,3,118,59,7,
770,771,10,5,0,0,771,772,7,7,0,0,772,783,3,118,59,6,773,774,10,4,0,0,774,
775,7,3,0,0,775,783,3,118,59,5,776,777,10,3,0,0,777,778,7,4,0,0,778,783,
3,118,59,4,779,780,10,2,0,0,780,781,7,8,0,0,781,783,3,118,59,3,782,755,1,
0,0,0,782,758,1,0,0,0,782,761,1,0,0,0,782,764,1,0,0,0,782,767,1,0,0,0,782,
770,1,0,0,0,782,773,1,0,0,0,782,776,1,0,0,0,782,779,1,0,0,0,783,786,1,0,
0,0,784,782,1,0,0,0,784,785,1,0,0,0,785,119,1,0,0,0,786,784,1,0,0,0,787,
788,5,16,0,0,788,121,1,0,0,0,789,790,5,1,0,0,790,123,1,0,0,0,791,792,5,57,
0,0,792,125,1,0,0,0,793,794,5,56,0,0,794,127,1,0,0,0,795,796,7,9,0,0,796,
129,1,0,0,0,797,798,5,52,0,0,798,131,1,0,0,0,799,800,5,58,0,0,800,133,1,
0,0,0,801,802,5,59,0,0,802,135,1,0,0,0,803,804,5,60,0,0,804,137,1,0,0,0,
805,806,6,69,-1,0,806,809,5,3,0,0,807,809,3,142,71,0,808,805,1,0,0,0,808,
807,1,0,0,0,809,816,1,0,0,0,810,811,10,4,0,0,811,815,5,3,0,0,812,813,10,
3,0,0,813,815,3,142,71,0,814,810,1,0,0,0,814,812,1,0,0,0,815,818,1,0,0,0,
816,814,1,0,0,0,816,817,1,0,0,0,817,139,1,0,0,0,818,816,1,0,0,0,819,820,
5,11,0,0,820,141,1,0,0,0,821,822,5,4,0,0,822,143,1,0,0,0,56,151,159,172,
211,215,224,234,254,266,271,277,285,294,317,341,365,395,403,413,428,442,
455,457,468,478,488,498,508,526,532,536,543,551,555,583,606,608,614,622,
630,632,649,663,665,674,682,684,708,718,723,753,782,784,808,814,816];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CorundumParser extends antlr4.Parser {

    static grammarFileName = "Corundum.g4";
    static literalNames = [ null, null, "','", "';'", null, "'require'", 
                            "'end'", "'def'", "'return'", "'pir'", "'if'", 
                            "'else'", "'elsif'", "'unless'", "'while'", 
                            "'retry'", "'break'", "'for'", "'true'", "'false'", 
                            "'+'", "'-'", "'*'", "'/'", "'%'", "'**'", "'=='", 
                            "'!='", "'>'", "'<'", "'<='", "'>='", "'='", 
                            "'+='", "'-='", "'*='", "'/='", "'%='", "'**='", 
                            "'&'", "'|'", "'^'", "'~'", "'<<'", "'>>'", 
                            null, null, null, "'('", "')'", "'['", "']'", 
                            "'nil'" ];
    static symbolicNames = [ null, "LITERAL", "COMMA", "SEMICOLON", "CRLF", 
                             "REQUIRE", "END", "DEF", "RETURN", "PIR", "IF", 
                             "ELSE", "ELSIF", "UNLESS", "WHILE", "RETRY", 
                             "BREAK", "FOR", "TRUE", "FALSE", "PLUS", "MINUS", 
                             "MUL", "DIV", "MOD", "EXP", "EQUAL", "NOT_EQUAL", 
                             "GREATER", "LESS", "LESS_EQUAL", "GREATER_EQUAL", 
                             "ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", "MUL_ASSIGN", 
                             "DIV_ASSIGN", "MOD_ASSIGN", "EXP_ASSIGN", "BIT_AND", 
                             "BIT_OR", "BIT_XOR", "BIT_NOT", "BIT_SHL", 
                             "BIT_SHR", "AND", "OR", "NOT", "LEFT_RBRACKET", 
                             "RIGHT_RBRACKET", "LEFT_SBRACKET", "RIGHT_SBRACKET", 
                             "NIL", "SL_COMMENT", "ML_COMMENT", "WS", "INT", 
                             "FLOAT", "ID", "ID_GLOBAL", "ID_FUNCTION" ];
    static ruleNames = [ "prog", "expression_list", "expression", "global_get", 
                         "global_set", "global_result", "function_inline_call", 
                         "require_block", "pir_inline", "pir_expression_list", 
                         "function_definition", "function_definition_body", 
                         "function_definition_header", "function_name", 
                         "function_definition_params", "function_definition_params_list", 
                         "function_definition_param_id", "return_statement", 
                         "function_call", "function_call_param_list", "function_call_params", 
                         "function_param", "function_unnamed_param", "function_named_param", 
                         "function_call_assignment", "all_result", "elsif_statement", 
                         "if_elsif_statement", "if_statement", "unless_statement", 
                         "while_statement", "for_statement", "init_expression", 
                         "all_assignment", "for_init_list", "cond_expression", 
                         "loop_expression", "for_loop_list", "statement_body", 
                         "statement_expression_list", "assignment", "dynamic_assignment", 
                         "int_assignment", "float_assignment", "string_assignment", 
                         "initial_array_assignment", "array_assignment", 
                         "array_definition", "array_definition_elements", 
                         "array_selector", "dynamic_result", "dynamic_", 
                         "int_result", "float_result", "string_result", 
                         "comparison_list", "comparison", "comp_var", "lvalue", 
                         "rvalue", "break_expression", "literal_t", "float_t", 
                         "int_t", "bool_t", "nil_t", "id_", "id_global", 
                         "id_function", "terminator", "else_token", "crlf" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CorundumParser.ruleNames;
        this.literalNames = CorundumParser.literalNames;
        this.symbolicNames = CorundumParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 1:
    	    		return this.expression_list_sempred(localctx, predIndex);
    	case 15:
    	    		return this.function_definition_params_list_sempred(localctx, predIndex);
    	case 20:
    	    		return this.function_call_params_sempred(localctx, predIndex);
    	case 34:
    	    		return this.for_init_list_sempred(localctx, predIndex);
    	case 37:
    	    		return this.for_loop_list_sempred(localctx, predIndex);
    	case 39:
    	    		return this.statement_expression_list_sempred(localctx, predIndex);
    	case 48:
    	    		return this.array_definition_elements_sempred(localctx, predIndex);
    	case 50:
    	    		return this.dynamic_result_sempred(localctx, predIndex);
    	case 52:
    	    		return this.int_result_sempred(localctx, predIndex);
    	case 53:
    	    		return this.float_result_sempred(localctx, predIndex);
    	case 54:
    	    		return this.string_result_sempred(localctx, predIndex);
    	case 59:
    	    		return this.rvalue_sempred(localctx, predIndex);
    	case 69:
    	    		return this.terminator_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expression_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    function_definition_params_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    function_call_params_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    for_init_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    for_loop_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    statement_expression_list_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		case 7:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    array_definition_elements_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    dynamic_result_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 9:
    			return this.precpred(this._ctx, 10);
    		case 10:
    			return this.precpred(this._ctx, 3);
    		case 11:
    			return this.precpred(this._ctx, 14);
    		case 12:
    			return this.precpred(this._ctx, 12);
    		case 13:
    			return this.precpred(this._ctx, 9);
    		case 14:
    			return this.precpred(this._ctx, 7);
    		case 15:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    int_result_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 16:
    			return this.precpred(this._ctx, 4);
    		case 17:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    float_result_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 18:
    			return this.precpred(this._ctx, 8);
    		case 19:
    			return this.precpred(this._ctx, 5);
    		case 20:
    			return this.precpred(this._ctx, 6);
    		case 21:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    string_result_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 22:
    			return this.precpred(this._ctx, 2);
    		case 23:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    rvalue_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 24:
    			return this.precpred(this._ctx, 11);
    		case 25:
    			return this.precpred(this._ctx, 9);
    		case 26:
    			return this.precpred(this._ctx, 8);
    		case 27:
    			return this.precpred(this._ctx, 7);
    		case 28:
    			return this.precpred(this._ctx, 6);
    		case 29:
    			return this.precpred(this._ctx, 5);
    		case 30:
    			return this.precpred(this._ctx, 4);
    		case 31:
    			return this.precpred(this._ctx, 3);
    		case 32:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    terminator_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 33:
    			return this.precpred(this._ctx, 4);
    		case 34:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CorundumParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.expression_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expression_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Expression_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 2;
	    this.enterRecursionRule(localctx, 2, CorundumParser.RULE_expression_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CorundumParser.LITERAL:
	        case CorundumParser.REQUIRE:
	        case CorundumParser.DEF:
	        case CorundumParser.RETURN:
	        case CorundumParser.PIR:
	        case CorundumParser.IF:
	        case CorundumParser.UNLESS:
	        case CorundumParser.WHILE:
	        case CorundumParser.FOR:
	        case CorundumParser.TRUE:
	        case CorundumParser.FALSE:
	        case CorundumParser.BIT_NOT:
	        case CorundumParser.NOT:
	        case CorundumParser.LEFT_RBRACKET:
	        case CorundumParser.NIL:
	        case CorundumParser.INT:
	        case CorundumParser.FLOAT:
	        case CorundumParser.ID:
	        case CorundumParser.ID_GLOBAL:
	        case CorundumParser.ID_FUNCTION:
	            this.state = 147;
	            this.expression();
	            this.state = 148;
	            this.terminator(0);
	            break;
	        case CorundumParser.SEMICOLON:
	        case CorundumParser.CRLF:
	            this.state = 150;
	            this.terminator(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 159;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Expression_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_expression_list);
	                this.state = 153;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 154;
	                this.expression();
	                this.state = 155;
	                this.terminator(0); 
	            }
	            this.state = 161;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CorundumParser.RULE_expression);
	    try {
	        this.state = 172;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 162;
	            this.function_definition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 163;
	            this.function_inline_call();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.require_block();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 165;
	            this.if_statement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 166;
	            this.unless_statement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 167;
	            this.rvalue(0);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 168;
	            this.return_statement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 169;
	            this.while_statement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 170;
	            this.for_statement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 171;
	            this.pir_inline();
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



	global_get() {
	    let localctx = new Global_getContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CorundumParser.RULE_global_get);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        localctx.var_name = this.lvalue();
	        this.state = 175;
	        localctx.op = this.match(CorundumParser.ASSIGN);
	        this.state = 176;
	        localctx.global_name = this.id_global();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	global_set() {
	    let localctx = new Global_setContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CorundumParser.RULE_global_set);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        localctx.global_name = this.id_global();
	        this.state = 179;
	        localctx.op = this.match(CorundumParser.ASSIGN);
	        this.state = 180;
	        localctx.result = this.all_result();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	global_result() {
	    let localctx = new Global_resultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CorundumParser.RULE_global_result);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.id_global();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_inline_call() {
	    let localctx = new Function_inline_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CorundumParser.RULE_function_inline_call);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.function_call();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	require_block() {
	    let localctx = new Require_blockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CorundumParser.RULE_require_block);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(CorundumParser.REQUIRE);
	        this.state = 187;
	        this.literal_t();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pir_inline() {
	    let localctx = new Pir_inlineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CorundumParser.RULE_pir_inline);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(CorundumParser.PIR);
	        this.state = 190;
	        this.crlf();
	        this.state = 191;
	        this.pir_expression_list();
	        this.state = 192;
	        this.match(CorundumParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pir_expression_list() {
	    let localctx = new Pir_expression_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CorundumParser.RULE_pir_expression_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.expression_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 20, CorundumParser.RULE_function_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.function_definition_header();
	        this.state = 197;
	        this.function_definition_body();
	        this.state = 198;
	        this.match(CorundumParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_definition_body() {
	    let localctx = new Function_definition_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CorundumParser.RULE_function_definition_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.expression_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_definition_header() {
	    let localctx = new Function_definition_headerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CorundumParser.RULE_function_definition_header);
	    try {
	        this.state = 211;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 202;
	            this.match(CorundumParser.DEF);
	            this.state = 203;
	            this.function_name();
	            this.state = 204;
	            this.crlf();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 206;
	            this.match(CorundumParser.DEF);
	            this.state = 207;
	            this.function_name();
	            this.state = 208;
	            this.function_definition_params();
	            this.state = 209;
	            this.crlf();
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



	function_name() {
	    let localctx = new Function_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CorundumParser.RULE_function_name);
	    try {
	        this.state = 215;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CorundumParser.ID_FUNCTION:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.id_function();
	            break;
	        case CorundumParser.ID:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
	            this.id_();
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



	function_definition_params() {
	    let localctx = new Function_definition_paramsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CorundumParser.RULE_function_definition_params);
	    try {
	        this.state = 224;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 217;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 218;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 219;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 220;
	            this.function_definition_params_list(0);
	            this.state = 221;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 223;
	            this.function_definition_params_list(0);
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


	function_definition_params_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Function_definition_params_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 30;
	    this.enterRecursionRule(localctx, 30, CorundumParser.RULE_function_definition_params_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.function_definition_param_id();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 234;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Function_definition_params_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_function_definition_params_list);
	                this.state = 229;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 230;
	                this.match(CorundumParser.COMMA);
	                this.state = 231;
	                this.function_definition_param_id(); 
	            }
	            this.state = 236;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
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



	function_definition_param_id() {
	    let localctx = new Function_definition_param_idContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, CorundumParser.RULE_function_definition_param_id);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 237;
	        this.id_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	return_statement() {
	    let localctx = new Return_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, CorundumParser.RULE_return_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(CorundumParser.RETURN);
	        this.state = 240;
	        this.all_result();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	function_call() {
	    let localctx = new Function_callContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, CorundumParser.RULE_function_call);
	    try {
	        this.state = 254;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 242;
	            localctx.name = this.function_name();
	            this.state = 243;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 244;
	            localctx.params = this.function_call_param_list();
	            this.state = 245;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            localctx.name = this.function_name();
	            this.state = 248;
	            localctx.params = this.function_call_param_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 250;
	            localctx.name = this.function_name();
	            this.state = 251;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 252;
	            this.match(CorundumParser.RIGHT_RBRACKET);
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



	function_call_param_list() {
	    let localctx = new Function_call_param_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, CorundumParser.RULE_function_call_param_list);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.function_call_params(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	function_call_params(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Function_call_paramsContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 40;
	    this.enterRecursionRule(localctx, 40, CorundumParser.RULE_function_call_params, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.function_param();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 266;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Function_call_paramsContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_function_call_params);
	                this.state = 261;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 262;
	                this.match(CorundumParser.COMMA);
	                this.state = 263;
	                this.function_param(); 
	            }
	            this.state = 268;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
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



	function_param() {
	    let localctx = new Function_paramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, CorundumParser.RULE_function_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 269;
	            this.function_unnamed_param();
	            break;

	        case 2:
	            this.state = 270;
	            this.function_named_param();
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



	function_unnamed_param() {
	    let localctx = new Function_unnamed_paramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, CorundumParser.RULE_function_unnamed_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 273;
	            this.int_result(0);
	            break;

	        case 2:
	            this.state = 274;
	            this.float_result(0);
	            break;

	        case 3:
	            this.state = 275;
	            this.string_result(0);
	            break;

	        case 4:
	            this.state = 276;
	            this.dynamic_result(0);
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



	function_named_param() {
	    let localctx = new Function_named_paramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, CorundumParser.RULE_function_named_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.id_();
	        this.state = 280;
	        localctx.op = this.match(CorundumParser.ASSIGN);
	        this.state = 285;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 281;
	            this.int_result(0);
	            break;

	        case 2:
	            this.state = 282;
	            this.float_result(0);
	            break;

	        case 3:
	            this.state = 283;
	            this.string_result(0);
	            break;

	        case 4:
	            this.state = 284;
	            this.dynamic_result(0);
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



	function_call_assignment() {
	    let localctx = new Function_call_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, CorundumParser.RULE_function_call_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.function_call();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	all_result() {
	    let localctx = new All_resultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, CorundumParser.RULE_all_result);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 289;
	            this.int_result(0);
	            break;

	        case 2:
	            this.state = 290;
	            this.float_result(0);
	            break;

	        case 3:
	            this.state = 291;
	            this.string_result(0);
	            break;

	        case 4:
	            this.state = 292;
	            this.dynamic_result(0);
	            break;

	        case 5:
	            this.state = 293;
	            this.global_result();
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



	elsif_statement() {
	    let localctx = new Elsif_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, CorundumParser.RULE_elsif_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.if_elsif_statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	if_elsif_statement() {
	    let localctx = new If_elsif_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, CorundumParser.RULE_if_elsif_statement);
	    try {
	        this.state = 317;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 298;
	            this.match(CorundumParser.ELSIF);
	            this.state = 299;
	            this.cond_expression();
	            this.state = 300;
	            this.crlf();
	            this.state = 301;
	            this.statement_body();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 303;
	            this.match(CorundumParser.ELSIF);
	            this.state = 304;
	            this.cond_expression();
	            this.state = 305;
	            this.crlf();
	            this.state = 306;
	            this.statement_body();
	            this.state = 307;
	            this.else_token();
	            this.state = 308;
	            this.crlf();
	            this.state = 309;
	            this.statement_body();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 311;
	            this.match(CorundumParser.ELSIF);
	            this.state = 312;
	            this.cond_expression();
	            this.state = 313;
	            this.crlf();
	            this.state = 314;
	            this.statement_body();
	            this.state = 315;
	            this.if_elsif_statement();
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



	if_statement() {
	    let localctx = new If_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, CorundumParser.RULE_if_statement);
	    try {
	        this.state = 341;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 319;
	            this.match(CorundumParser.IF);
	            this.state = 320;
	            this.cond_expression();
	            this.state = 321;
	            this.crlf();
	            this.state = 322;
	            this.statement_body();
	            this.state = 323;
	            this.match(CorundumParser.END);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 325;
	            this.match(CorundumParser.IF);
	            this.state = 326;
	            this.cond_expression();
	            this.state = 327;
	            this.crlf();
	            this.state = 328;
	            this.statement_body();
	            this.state = 329;
	            this.else_token();
	            this.state = 330;
	            this.crlf();
	            this.state = 331;
	            this.statement_body();
	            this.state = 332;
	            this.match(CorundumParser.END);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 334;
	            this.match(CorundumParser.IF);
	            this.state = 335;
	            this.cond_expression();
	            this.state = 336;
	            this.crlf();
	            this.state = 337;
	            this.statement_body();
	            this.state = 338;
	            this.elsif_statement();
	            this.state = 339;
	            this.match(CorundumParser.END);
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



	unless_statement() {
	    let localctx = new Unless_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, CorundumParser.RULE_unless_statement);
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 343;
	            this.match(CorundumParser.UNLESS);
	            this.state = 344;
	            this.cond_expression();
	            this.state = 345;
	            this.crlf();
	            this.state = 346;
	            this.statement_body();
	            this.state = 347;
	            this.match(CorundumParser.END);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 349;
	            this.match(CorundumParser.UNLESS);
	            this.state = 350;
	            this.cond_expression();
	            this.state = 351;
	            this.crlf();
	            this.state = 352;
	            this.statement_body();
	            this.state = 353;
	            this.else_token();
	            this.state = 354;
	            this.crlf();
	            this.state = 355;
	            this.statement_body();
	            this.state = 356;
	            this.match(CorundumParser.END);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 358;
	            this.match(CorundumParser.UNLESS);
	            this.state = 359;
	            this.cond_expression();
	            this.state = 360;
	            this.crlf();
	            this.state = 361;
	            this.statement_body();
	            this.state = 362;
	            this.elsif_statement();
	            this.state = 363;
	            this.match(CorundumParser.END);
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



	while_statement() {
	    let localctx = new While_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, CorundumParser.RULE_while_statement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
	        this.match(CorundumParser.WHILE);
	        this.state = 368;
	        this.cond_expression();
	        this.state = 369;
	        this.crlf();
	        this.state = 370;
	        this.statement_body();
	        this.state = 371;
	        this.match(CorundumParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	for_statement() {
	    let localctx = new For_statementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, CorundumParser.RULE_for_statement);
	    try {
	        this.state = 395;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 373;
	            this.match(CorundumParser.FOR);
	            this.state = 374;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 375;
	            this.init_expression();
	            this.state = 376;
	            this.match(CorundumParser.SEMICOLON);
	            this.state = 377;
	            this.cond_expression();
	            this.state = 378;
	            this.match(CorundumParser.SEMICOLON);
	            this.state = 379;
	            this.loop_expression();
	            this.state = 380;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            this.state = 381;
	            this.crlf();
	            this.state = 382;
	            this.statement_body();
	            this.state = 383;
	            this.match(CorundumParser.END);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 385;
	            this.match(CorundumParser.FOR);
	            this.state = 386;
	            this.init_expression();
	            this.state = 387;
	            this.match(CorundumParser.SEMICOLON);
	            this.state = 388;
	            this.cond_expression();
	            this.state = 389;
	            this.match(CorundumParser.SEMICOLON);
	            this.state = 390;
	            this.loop_expression();
	            this.state = 391;
	            this.crlf();
	            this.state = 392;
	            this.statement_body();
	            this.state = 393;
	            this.match(CorundumParser.END);
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



	init_expression() {
	    let localctx = new Init_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, CorundumParser.RULE_init_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.for_init_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	all_assignment() {
	    let localctx = new All_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, CorundumParser.RULE_all_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 399;
	            this.int_assignment();
	            break;

	        case 2:
	            this.state = 400;
	            this.float_assignment();
	            break;

	        case 3:
	            this.state = 401;
	            this.string_assignment();
	            break;

	        case 4:
	            this.state = 402;
	            this.dynamic_assignment();
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


	for_init_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new For_init_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 68;
	    this.enterRecursionRule(localctx, 68, CorundumParser.RULE_for_init_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.all_assignment();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 413;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new For_init_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_for_init_list);
	                this.state = 408;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 409;
	                this.match(CorundumParser.COMMA);
	                this.state = 410;
	                this.all_assignment(); 
	            }
	            this.state = 415;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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



	cond_expression() {
	    let localctx = new Cond_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, CorundumParser.RULE_cond_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        this.comparison_list();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loop_expression() {
	    let localctx = new Loop_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, CorundumParser.RULE_loop_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this.for_loop_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	for_loop_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new For_loop_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 74;
	    this.enterRecursionRule(localctx, 74, CorundumParser.RULE_for_loop_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.all_assignment();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 428;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new For_loop_listContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_for_loop_list);
	                this.state = 423;
	                if (!( this.precpred(this._ctx, 2))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                }
	                this.state = 424;
	                this.match(CorundumParser.COMMA);
	                this.state = 425;
	                this.all_assignment(); 
	            }
	            this.state = 430;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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



	statement_body() {
	    let localctx = new Statement_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, CorundumParser.RULE_statement_body);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this.statement_expression_list(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	statement_expression_list(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Statement_expression_listContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 78;
	    this.enterRecursionRule(localctx, 78, CorundumParser.RULE_statement_expression_list, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CorundumParser.LITERAL:
	        case CorundumParser.REQUIRE:
	        case CorundumParser.DEF:
	        case CorundumParser.RETURN:
	        case CorundumParser.PIR:
	        case CorundumParser.IF:
	        case CorundumParser.UNLESS:
	        case CorundumParser.WHILE:
	        case CorundumParser.FOR:
	        case CorundumParser.TRUE:
	        case CorundumParser.FALSE:
	        case CorundumParser.BIT_NOT:
	        case CorundumParser.NOT:
	        case CorundumParser.LEFT_RBRACKET:
	        case CorundumParser.NIL:
	        case CorundumParser.INT:
	        case CorundumParser.FLOAT:
	        case CorundumParser.ID:
	        case CorundumParser.ID_GLOBAL:
	        case CorundumParser.ID_FUNCTION:
	            this.state = 434;
	            this.expression();
	            this.state = 435;
	            this.terminator(0);
	            break;
	        case CorundumParser.RETRY:
	            this.state = 437;
	            this.match(CorundumParser.RETRY);
	            this.state = 438;
	            this.terminator(0);
	            break;
	        case CorundumParser.BREAK:
	            this.state = 439;
	            this.break_expression();
	            this.state = 440;
	            this.terminator(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 457;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 455;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Statement_expression_listContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_statement_expression_list);
	                    this.state = 444;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 445;
	                    this.expression();
	                    this.state = 446;
	                    this.terminator(0);
	                    break;

	                case 2:
	                    localctx = new Statement_expression_listContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_statement_expression_list);
	                    this.state = 448;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 449;
	                    this.match(CorundumParser.RETRY);
	                    this.state = 450;
	                    this.terminator(0);
	                    break;

	                case 3:
	                    localctx = new Statement_expression_listContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_statement_expression_list);
	                    this.state = 451;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 452;
	                    this.break_expression();
	                    this.state = 453;
	                    this.terminator(0);
	                    break;

	                } 
	            }
	            this.state = 459;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
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



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, CorundumParser.RULE_assignment);
	    var _la = 0; // Token type
	    try {
	        this.state = 468;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 460;
	            localctx.var_id = this.lvalue();
	            this.state = 461;
	            localctx.op = this.match(CorundumParser.ASSIGN);
	            this.state = 462;
	            this.rvalue(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 464;
	            localctx.var_id = this.lvalue();
	            this.state = 465;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 466;
	            this.rvalue(0);
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



	dynamic_assignment() {
	    let localctx = new Dynamic_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, CorundumParser.RULE_dynamic_assignment);
	    var _la = 0; // Token type
	    try {
	        this.state = 478;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 470;
	            localctx.var_id = this.lvalue();
	            this.state = 471;
	            localctx.op = this.match(CorundumParser.ASSIGN);
	            this.state = 472;
	            this.dynamic_result(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 474;
	            localctx.var_id = this.lvalue();
	            this.state = 475;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 476;
	            this.dynamic_result(0);
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



	int_assignment() {
	    let localctx = new Int_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, CorundumParser.RULE_int_assignment);
	    var _la = 0; // Token type
	    try {
	        this.state = 488;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 480;
	            localctx.var_id = this.lvalue();
	            this.state = 481;
	            localctx.op = this.match(CorundumParser.ASSIGN);
	            this.state = 482;
	            this.int_result(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 484;
	            localctx.var_id = this.lvalue();
	            this.state = 485;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 486;
	            this.int_result(0);
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



	float_assignment() {
	    let localctx = new Float_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, CorundumParser.RULE_float_assignment);
	    var _la = 0; // Token type
	    try {
	        this.state = 498;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 490;
	            localctx.var_id = this.lvalue();
	            this.state = 491;
	            localctx.op = this.match(CorundumParser.ASSIGN);
	            this.state = 492;
	            this.float_result(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 494;
	            localctx.var_id = this.lvalue();
	            this.state = 495;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (CorundumParser.PLUS_ASSIGN - 33)) | (1 << (CorundumParser.MINUS_ASSIGN - 33)) | (1 << (CorundumParser.MUL_ASSIGN - 33)) | (1 << (CorundumParser.DIV_ASSIGN - 33)) | (1 << (CorundumParser.MOD_ASSIGN - 33)) | (1 << (CorundumParser.EXP_ASSIGN - 33)))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 496;
	            this.float_result(0);
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



	string_assignment() {
	    let localctx = new String_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, CorundumParser.RULE_string_assignment);
	    try {
	        this.state = 508;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 500;
	            localctx.var_id = this.lvalue();
	            this.state = 501;
	            localctx.op = this.match(CorundumParser.ASSIGN);
	            this.state = 502;
	            this.string_result(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 504;
	            localctx.var_id = this.lvalue();
	            this.state = 505;
	            localctx.op = this.match(CorundumParser.PLUS_ASSIGN);
	            this.state = 506;
	            this.string_result(0);
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



	initial_array_assignment() {
	    let localctx = new Initial_array_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, CorundumParser.RULE_initial_array_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 510;
	        localctx.var_id = this.lvalue();
	        this.state = 511;
	        localctx.op = this.match(CorundumParser.ASSIGN);
	        this.state = 512;
	        this.match(CorundumParser.LEFT_SBRACKET);
	        this.state = 513;
	        this.match(CorundumParser.RIGHT_SBRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_assignment() {
	    let localctx = new Array_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, CorundumParser.RULE_array_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 515;
	        localctx.arr_def = this.array_selector();
	        this.state = 516;
	        localctx.op = this.match(CorundumParser.ASSIGN);
	        this.state = 517;
	        localctx.arr_val = this.all_result();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array_definition() {
	    let localctx = new Array_definitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, CorundumParser.RULE_array_definition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 519;
	        this.match(CorundumParser.LEFT_SBRACKET);
	        this.state = 520;
	        this.array_definition_elements(0);
	        this.state = 521;
	        this.match(CorundumParser.RIGHT_SBRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	array_definition_elements(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Array_definition_elementsContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 96;
	    this.enterRecursionRule(localctx, 96, CorundumParser.RULE_array_definition_elements, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 526;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 524;
	            this.int_result(0);
	            break;

	        case 2:
	            this.state = 525;
	            this.dynamic_result(0);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 536;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new Array_definition_elementsContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_array_definition_elements);
	                this.state = 528;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 529;
	                this.match(CorundumParser.COMMA);
	                this.state = 532;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 530;
	                    this.int_result(0);
	                    break;

	                case 2:
	                    this.state = 531;
	                    this.dynamic_result(0);
	                    break;

	                } 
	            }
	            this.state = 538;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
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



	array_selector() {
	    let localctx = new Array_selectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, CorundumParser.RULE_array_selector);
	    try {
	        this.state = 555;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CorundumParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 539;
	            this.id_();
	            this.state = 540;
	            this.match(CorundumParser.LEFT_SBRACKET);
	            this.state = 543;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 541;
	                this.int_result(0);
	                break;

	            case 2:
	                this.state = 542;
	                this.dynamic_result(0);
	                break;

	            }
	            this.state = 545;
	            this.match(CorundumParser.RIGHT_SBRACKET);
	            break;
	        case CorundumParser.ID_GLOBAL:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 547;
	            this.id_global();
	            this.state = 548;
	            this.match(CorundumParser.LEFT_SBRACKET);
	            this.state = 551;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 549;
	                this.int_result(0);
	                break;

	            case 2:
	                this.state = 550;
	                this.dynamic_result(0);
	                break;

	            }
	            this.state = 553;
	            this.match(CorundumParser.RIGHT_SBRACKET);
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


	dynamic_result(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Dynamic_resultContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 100;
	    this.enterRecursionRule(localctx, 100, CorundumParser.RULE_dynamic_result, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 558;
	            this.int_result(0);
	            this.state = 559;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 560;
	            this.dynamic_result(13);
	            break;

	        case 2:
	            this.state = 562;
	            this.float_result(0);
	            this.state = 563;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 564;
	            this.dynamic_result(11);
	            break;

	        case 3:
	            this.state = 566;
	            this.string_result(0);
	            this.state = 567;
	            localctx.op = this.match(CorundumParser.MUL);
	            this.state = 568;
	            this.dynamic_result(8);
	            break;

	        case 4:
	            this.state = 570;
	            this.int_result(0);
	            this.state = 571;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 572;
	            this.dynamic_result(6);
	            break;

	        case 5:
	            this.state = 574;
	            this.float_result(0);
	            this.state = 575;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 576;
	            this.dynamic_result(4);
	            break;

	        case 6:
	            this.state = 578;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 579;
	            this.dynamic_result(0);
	            this.state = 580;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;

	        case 7:
	            this.state = 582;
	            this.dynamic_();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 608;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 606;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Dynamic_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_dynamic_result);
	                    this.state = 585;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 586;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 587;
	                    this.dynamic_result(11);
	                    break;

	                case 2:
	                    localctx = new Dynamic_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_dynamic_result);
	                    this.state = 588;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 589;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 590;
	                    this.dynamic_result(4);
	                    break;

	                case 3:
	                    localctx = new Dynamic_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_dynamic_result);
	                    this.state = 591;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 592;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 593;
	                    this.int_result(0);
	                    break;

	                case 4:
	                    localctx = new Dynamic_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_dynamic_result);
	                    this.state = 594;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 595;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 596;
	                    this.float_result(0);
	                    break;

	                case 5:
	                    localctx = new Dynamic_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_dynamic_result);
	                    this.state = 597;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 598;
	                    localctx.op = this.match(CorundumParser.MUL);
	                    this.state = 599;
	                    this.string_result(0);
	                    break;

	                case 6:
	                    localctx = new Dynamic_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_dynamic_result);
	                    this.state = 600;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 601;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 602;
	                    this.int_result(0);
	                    break;

	                case 7:
	                    localctx = new Dynamic_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_dynamic_result);
	                    this.state = 603;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 604;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 605;
	                    this.float_result(0);
	                    break;

	                } 
	            }
	            this.state = 610;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
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



	dynamic_() {
	    let localctx = new Dynamic_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, CorundumParser.RULE_dynamic_);
	    try {
	        this.state = 614;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 611;
	            this.id_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 612;
	            this.function_call_assignment();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 613;
	            this.array_selector();
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


	int_result(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Int_resultContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 104;
	    this.enterRecursionRule(localctx, 104, CorundumParser.RULE_int_result, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 622;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CorundumParser.LEFT_RBRACKET:
	            this.state = 617;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 618;
	            this.int_result(0);
	            this.state = 619;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;
	        case CorundumParser.INT:
	            this.state = 621;
	            this.int_t();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 632;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 630;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Int_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_int_result);
	                    this.state = 624;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 625;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 626;
	                    this.int_result(5);
	                    break;

	                case 2:
	                    localctx = new Int_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_int_result);
	                    this.state = 627;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 628;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 629;
	                    this.int_result(4);
	                    break;

	                } 
	            }
	            this.state = 634;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
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


	float_result(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new Float_resultContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 106;
	    this.enterRecursionRule(localctx, 106, CorundumParser.RULE_float_result, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 649;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 636;
	            this.int_result(0);
	            this.state = 637;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 638;
	            this.float_result(7);
	            break;

	        case 2:
	            this.state = 640;
	            this.int_result(0);
	            this.state = 641;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 642;
	            this.float_result(4);
	            break;

	        case 3:
	            this.state = 644;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 645;
	            this.float_result(0);
	            this.state = 646;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;

	        case 4:
	            this.state = 648;
	            this.float_t();
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 665;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 663;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,42,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new Float_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_float_result);
	                    this.state = 651;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 652;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 653;
	                    this.float_result(9);
	                    break;

	                case 2:
	                    localctx = new Float_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_float_result);
	                    this.state = 654;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 655;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 656;
	                    this.float_result(6);
	                    break;

	                case 3:
	                    localctx = new Float_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_float_result);
	                    this.state = 657;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 658;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 659;
	                    this.int_result(0);
	                    break;

	                case 4:
	                    localctx = new Float_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_float_result);
	                    this.state = 660;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 661;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 662;
	                    this.int_result(0);
	                    break;

	                } 
	            }
	            this.state = 667;
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


	string_result(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new String_resultContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 108;
	    this.enterRecursionRule(localctx, 108, CorundumParser.RULE_string_result, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 674;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CorundumParser.LEFT_RBRACKET:
	        case CorundumParser.INT:
	            this.state = 669;
	            this.int_result(0);
	            this.state = 670;
	            localctx.op = this.match(CorundumParser.MUL);
	            this.state = 671;
	            this.string_result(3);
	            break;
	        case CorundumParser.LITERAL:
	            this.state = 673;
	            this.literal_t();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 684;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 682;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,45,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new String_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_string_result);
	                    this.state = 676;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 677;
	                    localctx.op = this.match(CorundumParser.PLUS);
	                    this.state = 678;
	                    this.string_result(3);
	                    break;

	                case 2:
	                    localctx = new String_resultContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_string_result);
	                    this.state = 679;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 680;
	                    localctx.op = this.match(CorundumParser.MUL);
	                    this.state = 681;
	                    this.int_result(0);
	                    break;

	                } 
	            }
	            this.state = 686;
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



	comparison_list() {
	    let localctx = new Comparison_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, CorundumParser.RULE_comparison_list);
	    try {
	        this.state = 708;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 687;
	            localctx.left = this.comparison();
	            this.state = 688;
	            localctx.op = this.match(CorundumParser.BIT_AND);
	            this.state = 689;
	            localctx.right = this.comparison_list();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 691;
	            localctx.left = this.comparison();
	            this.state = 692;
	            localctx.op = this.match(CorundumParser.AND);
	            this.state = 693;
	            localctx.right = this.comparison_list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 695;
	            localctx.left = this.comparison();
	            this.state = 696;
	            localctx.op = this.match(CorundumParser.BIT_OR);
	            this.state = 697;
	            localctx.right = this.comparison_list();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 699;
	            localctx.left = this.comparison();
	            this.state = 700;
	            localctx.op = this.match(CorundumParser.OR);
	            this.state = 701;
	            localctx.right = this.comparison_list();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 703;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 704;
	            this.comparison_list();
	            this.state = 705;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 707;
	            this.comparison();
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



	comparison() {
	    let localctx = new ComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, CorundumParser.RULE_comparison);
	    var _la = 0; // Token type
	    try {
	        this.state = 718;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 710;
	            localctx.left = this.comp_var();
	            this.state = 711;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.GREATER) | (1 << CorundumParser.LESS) | (1 << CorundumParser.LESS_EQUAL) | (1 << CorundumParser.GREATER_EQUAL))) !== 0))) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 712;
	            localctx.right = this.comp_var();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 714;
	            localctx.left = this.comp_var();
	            this.state = 715;
	            localctx.op = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===CorundumParser.EQUAL || _la===CorundumParser.NOT_EQUAL)) {
	                localctx.op = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 716;
	            localctx.right = this.comp_var();
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



	comp_var() {
	    let localctx = new Comp_varContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, CorundumParser.RULE_comp_var);
	    try {
	        this.state = 723;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 720;
	            this.all_result();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 721;
	            this.array_selector();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 722;
	            this.id_();
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



	lvalue() {
	    let localctx = new LvalueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, CorundumParser.RULE_lvalue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 725;
	        this.id_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	rvalue(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new RvalueContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 118;
	    this.enterRecursionRule(localctx, 118, CorundumParser.RULE_rvalue, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 753;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 728;
	            this.lvalue();
	            break;

	        case 2:
	            this.state = 729;
	            this.initial_array_assignment();
	            break;

	        case 3:
	            this.state = 730;
	            this.array_assignment();
	            break;

	        case 4:
	            this.state = 731;
	            this.int_result(0);
	            break;

	        case 5:
	            this.state = 732;
	            this.float_result(0);
	            break;

	        case 6:
	            this.state = 733;
	            this.string_result(0);
	            break;

	        case 7:
	            this.state = 734;
	            this.global_set();
	            break;

	        case 8:
	            this.state = 735;
	            this.global_get();
	            break;

	        case 9:
	            this.state = 736;
	            this.dynamic_assignment();
	            break;

	        case 10:
	            this.state = 737;
	            this.string_assignment();
	            break;

	        case 11:
	            this.state = 738;
	            this.float_assignment();
	            break;

	        case 12:
	            this.state = 739;
	            this.int_assignment();
	            break;

	        case 13:
	            this.state = 740;
	            this.assignment();
	            break;

	        case 14:
	            this.state = 741;
	            this.function_call();
	            break;

	        case 15:
	            this.state = 742;
	            this.literal_t();
	            break;

	        case 16:
	            this.state = 743;
	            this.bool_t();
	            break;

	        case 17:
	            this.state = 744;
	            this.float_t();
	            break;

	        case 18:
	            this.state = 745;
	            this.int_t();
	            break;

	        case 19:
	            this.state = 746;
	            this.nil_t();
	            break;

	        case 20:
	            this.state = 747;
	            _la = this._input.LA(1);
	            if(!(_la===CorundumParser.BIT_NOT || _la===CorundumParser.NOT)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 748;
	            this.rvalue(10);
	            break;

	        case 21:
	            this.state = 749;
	            this.match(CorundumParser.LEFT_RBRACKET);
	            this.state = 750;
	            this.rvalue(0);
	            this.state = 751;
	            this.match(CorundumParser.RIGHT_RBRACKET);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 784;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,52,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 782;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 755;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 756;
	                    this.match(CorundumParser.EXP);
	                    this.state = 757;
	                    this.rvalue(12);
	                    break;

	                case 2:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 758;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 759;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.MUL) | (1 << CorundumParser.DIV) | (1 << CorundumParser.MOD))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 760;
	                    this.rvalue(10);
	                    break;

	                case 3:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 761;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 762;
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.PLUS || _la===CorundumParser.MINUS)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 763;
	                    this.rvalue(9);
	                    break;

	                case 4:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 764;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 765;
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.BIT_SHL || _la===CorundumParser.BIT_SHR)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 766;
	                    this.rvalue(8);
	                    break;

	                case 5:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 767;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 768;
	                    this.match(CorundumParser.BIT_AND);
	                    this.state = 769;
	                    this.rvalue(7);
	                    break;

	                case 6:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 770;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 771;
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.BIT_OR || _la===CorundumParser.BIT_XOR)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 772;
	                    this.rvalue(6);
	                    break;

	                case 7:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 773;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 774;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CorundumParser.GREATER) | (1 << CorundumParser.LESS) | (1 << CorundumParser.LESS_EQUAL) | (1 << CorundumParser.GREATER_EQUAL))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 775;
	                    this.rvalue(5);
	                    break;

	                case 8:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 776;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 777;
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.EQUAL || _la===CorundumParser.NOT_EQUAL)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 778;
	                    this.rvalue(4);
	                    break;

	                case 9:
	                    localctx = new RvalueContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_rvalue);
	                    this.state = 779;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 780;
	                    _la = this._input.LA(1);
	                    if(!(_la===CorundumParser.AND || _la===CorundumParser.OR)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 781;
	                    this.rvalue(3);
	                    break;

	                } 
	            }
	            this.state = 786;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,52,this._ctx);
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



	break_expression() {
	    let localctx = new Break_expressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, CorundumParser.RULE_break_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 787;
	        this.match(CorundumParser.BREAK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal_t() {
	    let localctx = new Literal_tContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, CorundumParser.RULE_literal_t);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 789;
	        this.match(CorundumParser.LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	float_t() {
	    let localctx = new Float_tContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, CorundumParser.RULE_float_t);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 791;
	        this.match(CorundumParser.FLOAT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	int_t() {
	    let localctx = new Int_tContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, CorundumParser.RULE_int_t);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 793;
	        this.match(CorundumParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bool_t() {
	    let localctx = new Bool_tContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, CorundumParser.RULE_bool_t);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 795;
	        _la = this._input.LA(1);
	        if(!(_la===CorundumParser.TRUE || _la===CorundumParser.FALSE)) {
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



	nil_t() {
	    let localctx = new Nil_tContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, CorundumParser.RULE_nil_t);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 797;
	        this.match(CorundumParser.NIL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 132, CorundumParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 799;
	        this.match(CorundumParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id_global() {
	    let localctx = new Id_globalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, CorundumParser.RULE_id_global);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 801;
	        this.match(CorundumParser.ID_GLOBAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id_function() {
	    let localctx = new Id_functionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, CorundumParser.RULE_id_function);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 803;
	        this.match(CorundumParser.ID_FUNCTION);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    const _startState = 138;
	    this.enterRecursionRule(localctx, 138, CorundumParser.RULE_terminator, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 808;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CorundumParser.SEMICOLON:
	            this.state = 806;
	            this.match(CorundumParser.SEMICOLON);
	            break;
	        case CorundumParser.CRLF:
	            this.state = 807;
	            this.crlf();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 816;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 814;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new TerminatorContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_terminator);
	                    this.state = 810;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 811;
	                    this.match(CorundumParser.SEMICOLON);
	                    break;

	                case 2:
	                    localctx = new TerminatorContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CorundumParser.RULE_terminator);
	                    this.state = 812;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 813;
	                    this.crlf();
	                    break;

	                } 
	            }
	            this.state = 818;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
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



	else_token() {
	    let localctx = new Else_tokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, CorundumParser.RULE_else_token);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 819;
	        this.match(CorundumParser.ELSE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crlf() {
	    let localctx = new CrlfContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, CorundumParser.RULE_crlf);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 821;
	        this.match(CorundumParser.CRLF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

CorundumParser.EOF = antlr4.Token.EOF;
CorundumParser.LITERAL = 1;
CorundumParser.COMMA = 2;
CorundumParser.SEMICOLON = 3;
CorundumParser.CRLF = 4;
CorundumParser.REQUIRE = 5;
CorundumParser.END = 6;
CorundumParser.DEF = 7;
CorundumParser.RETURN = 8;
CorundumParser.PIR = 9;
CorundumParser.IF = 10;
CorundumParser.ELSE = 11;
CorundumParser.ELSIF = 12;
CorundumParser.UNLESS = 13;
CorundumParser.WHILE = 14;
CorundumParser.RETRY = 15;
CorundumParser.BREAK = 16;
CorundumParser.FOR = 17;
CorundumParser.TRUE = 18;
CorundumParser.FALSE = 19;
CorundumParser.PLUS = 20;
CorundumParser.MINUS = 21;
CorundumParser.MUL = 22;
CorundumParser.DIV = 23;
CorundumParser.MOD = 24;
CorundumParser.EXP = 25;
CorundumParser.EQUAL = 26;
CorundumParser.NOT_EQUAL = 27;
CorundumParser.GREATER = 28;
CorundumParser.LESS = 29;
CorundumParser.LESS_EQUAL = 30;
CorundumParser.GREATER_EQUAL = 31;
CorundumParser.ASSIGN = 32;
CorundumParser.PLUS_ASSIGN = 33;
CorundumParser.MINUS_ASSIGN = 34;
CorundumParser.MUL_ASSIGN = 35;
CorundumParser.DIV_ASSIGN = 36;
CorundumParser.MOD_ASSIGN = 37;
CorundumParser.EXP_ASSIGN = 38;
CorundumParser.BIT_AND = 39;
CorundumParser.BIT_OR = 40;
CorundumParser.BIT_XOR = 41;
CorundumParser.BIT_NOT = 42;
CorundumParser.BIT_SHL = 43;
CorundumParser.BIT_SHR = 44;
CorundumParser.AND = 45;
CorundumParser.OR = 46;
CorundumParser.NOT = 47;
CorundumParser.LEFT_RBRACKET = 48;
CorundumParser.RIGHT_RBRACKET = 49;
CorundumParser.LEFT_SBRACKET = 50;
CorundumParser.RIGHT_SBRACKET = 51;
CorundumParser.NIL = 52;
CorundumParser.SL_COMMENT = 53;
CorundumParser.ML_COMMENT = 54;
CorundumParser.WS = 55;
CorundumParser.INT = 56;
CorundumParser.FLOAT = 57;
CorundumParser.ID = 58;
CorundumParser.ID_GLOBAL = 59;
CorundumParser.ID_FUNCTION = 60;

CorundumParser.RULE_prog = 0;
CorundumParser.RULE_expression_list = 1;
CorundumParser.RULE_expression = 2;
CorundumParser.RULE_global_get = 3;
CorundumParser.RULE_global_set = 4;
CorundumParser.RULE_global_result = 5;
CorundumParser.RULE_function_inline_call = 6;
CorundumParser.RULE_require_block = 7;
CorundumParser.RULE_pir_inline = 8;
CorundumParser.RULE_pir_expression_list = 9;
CorundumParser.RULE_function_definition = 10;
CorundumParser.RULE_function_definition_body = 11;
CorundumParser.RULE_function_definition_header = 12;
CorundumParser.RULE_function_name = 13;
CorundumParser.RULE_function_definition_params = 14;
CorundumParser.RULE_function_definition_params_list = 15;
CorundumParser.RULE_function_definition_param_id = 16;
CorundumParser.RULE_return_statement = 17;
CorundumParser.RULE_function_call = 18;
CorundumParser.RULE_function_call_param_list = 19;
CorundumParser.RULE_function_call_params = 20;
CorundumParser.RULE_function_param = 21;
CorundumParser.RULE_function_unnamed_param = 22;
CorundumParser.RULE_function_named_param = 23;
CorundumParser.RULE_function_call_assignment = 24;
CorundumParser.RULE_all_result = 25;
CorundumParser.RULE_elsif_statement = 26;
CorundumParser.RULE_if_elsif_statement = 27;
CorundumParser.RULE_if_statement = 28;
CorundumParser.RULE_unless_statement = 29;
CorundumParser.RULE_while_statement = 30;
CorundumParser.RULE_for_statement = 31;
CorundumParser.RULE_init_expression = 32;
CorundumParser.RULE_all_assignment = 33;
CorundumParser.RULE_for_init_list = 34;
CorundumParser.RULE_cond_expression = 35;
CorundumParser.RULE_loop_expression = 36;
CorundumParser.RULE_for_loop_list = 37;
CorundumParser.RULE_statement_body = 38;
CorundumParser.RULE_statement_expression_list = 39;
CorundumParser.RULE_assignment = 40;
CorundumParser.RULE_dynamic_assignment = 41;
CorundumParser.RULE_int_assignment = 42;
CorundumParser.RULE_float_assignment = 43;
CorundumParser.RULE_string_assignment = 44;
CorundumParser.RULE_initial_array_assignment = 45;
CorundumParser.RULE_array_assignment = 46;
CorundumParser.RULE_array_definition = 47;
CorundumParser.RULE_array_definition_elements = 48;
CorundumParser.RULE_array_selector = 49;
CorundumParser.RULE_dynamic_result = 50;
CorundumParser.RULE_dynamic_ = 51;
CorundumParser.RULE_int_result = 52;
CorundumParser.RULE_float_result = 53;
CorundumParser.RULE_string_result = 54;
CorundumParser.RULE_comparison_list = 55;
CorundumParser.RULE_comparison = 56;
CorundumParser.RULE_comp_var = 57;
CorundumParser.RULE_lvalue = 58;
CorundumParser.RULE_rvalue = 59;
CorundumParser.RULE_break_expression = 60;
CorundumParser.RULE_literal_t = 61;
CorundumParser.RULE_float_t = 62;
CorundumParser.RULE_int_t = 63;
CorundumParser.RULE_bool_t = 64;
CorundumParser.RULE_nil_t = 65;
CorundumParser.RULE_id_ = 66;
CorundumParser.RULE_id_global = 67;
CorundumParser.RULE_id_function = 68;
CorundumParser.RULE_terminator = 69;
CorundumParser.RULE_else_token = 70;
CorundumParser.RULE_crlf = 71;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_prog;
    }

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitProg(this);
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
        this.ruleIndex = CorundumParser.RULE_expression_list;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	terminator() {
	    return this.getTypedRuleContext(TerminatorContext,0);
	};

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterExpression_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitExpression_list(this);
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
        this.ruleIndex = CorundumParser.RULE_expression;
    }

	function_definition() {
	    return this.getTypedRuleContext(Function_definitionContext,0);
	};

	function_inline_call() {
	    return this.getTypedRuleContext(Function_inline_callContext,0);
	};

	require_block() {
	    return this.getTypedRuleContext(Require_blockContext,0);
	};

	if_statement() {
	    return this.getTypedRuleContext(If_statementContext,0);
	};

	unless_statement() {
	    return this.getTypedRuleContext(Unless_statementContext,0);
	};

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	return_statement() {
	    return this.getTypedRuleContext(Return_statementContext,0);
	};

	while_statement() {
	    return this.getTypedRuleContext(While_statementContext,0);
	};

	for_statement() {
	    return this.getTypedRuleContext(For_statementContext,0);
	};

	pir_inline() {
	    return this.getTypedRuleContext(Pir_inlineContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitExpression(this);
		}
	}


}



class Global_getContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_global_get;
        this.var_name = null; // LvalueContext
        this.op = null; // Token
        this.global_name = null; // Id_globalContext
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	id_global() {
	    return this.getTypedRuleContext(Id_globalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterGlobal_get(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitGlobal_get(this);
		}
	}


}



class Global_setContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_global_set;
        this.global_name = null; // Id_globalContext
        this.op = null; // Token
        this.result = null; // All_resultContext
    }

	id_global() {
	    return this.getTypedRuleContext(Id_globalContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	all_result() {
	    return this.getTypedRuleContext(All_resultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterGlobal_set(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitGlobal_set(this);
		}
	}


}



class Global_resultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_global_result;
    }

	id_global() {
	    return this.getTypedRuleContext(Id_globalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterGlobal_result(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitGlobal_result(this);
		}
	}


}



class Function_inline_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_inline_call;
    }

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_inline_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_inline_call(this);
		}
	}


}



class Require_blockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_require_block;
    }

	REQUIRE() {
	    return this.getToken(CorundumParser.REQUIRE, 0);
	};

	literal_t() {
	    return this.getTypedRuleContext(Literal_tContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterRequire_block(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitRequire_block(this);
		}
	}


}



class Pir_inlineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_pir_inline;
    }

	PIR() {
	    return this.getToken(CorundumParser.PIR, 0);
	};

	crlf() {
	    return this.getTypedRuleContext(CrlfContext,0);
	};

	pir_expression_list() {
	    return this.getTypedRuleContext(Pir_expression_listContext,0);
	};

	END() {
	    return this.getToken(CorundumParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterPir_inline(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitPir_inline(this);
		}
	}


}



class Pir_expression_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_pir_expression_list;
    }

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterPir_expression_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitPir_expression_list(this);
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
        this.ruleIndex = CorundumParser.RULE_function_definition;
    }

	function_definition_header() {
	    return this.getTypedRuleContext(Function_definition_headerContext,0);
	};

	function_definition_body() {
	    return this.getTypedRuleContext(Function_definition_bodyContext,0);
	};

	END() {
	    return this.getToken(CorundumParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_definition(this);
		}
	}


}



class Function_definition_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_definition_body;
    }

	expression_list() {
	    return this.getTypedRuleContext(Expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_definition_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_definition_body(this);
		}
	}


}



class Function_definition_headerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_definition_header;
    }

	DEF() {
	    return this.getToken(CorundumParser.DEF, 0);
	};

	function_name() {
	    return this.getTypedRuleContext(Function_nameContext,0);
	};

	crlf() {
	    return this.getTypedRuleContext(CrlfContext,0);
	};

	function_definition_params() {
	    return this.getTypedRuleContext(Function_definition_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_definition_header(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_definition_header(this);
		}
	}


}



class Function_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_name;
    }

	id_function() {
	    return this.getTypedRuleContext(Id_functionContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_name(this);
		}
	}


}



class Function_definition_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_definition_params;
    }

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	function_definition_params_list() {
	    return this.getTypedRuleContext(Function_definition_params_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_definition_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_definition_params(this);
		}
	}


}



class Function_definition_params_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_definition_params_list;
    }

	function_definition_param_id() {
	    return this.getTypedRuleContext(Function_definition_param_idContext,0);
	};

	function_definition_params_list() {
	    return this.getTypedRuleContext(Function_definition_params_listContext,0);
	};

	COMMA() {
	    return this.getToken(CorundumParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_definition_params_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_definition_params_list(this);
		}
	}


}



class Function_definition_param_idContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_definition_param_id;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_definition_param_id(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_definition_param_id(this);
		}
	}


}



class Return_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_return_statement;
    }

	RETURN() {
	    return this.getToken(CorundumParser.RETURN, 0);
	};

	all_result() {
	    return this.getTypedRuleContext(All_resultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterReturn_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitReturn_statement(this);
		}
	}


}



class Function_callContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_call;
        this.name = null; // Function_nameContext
        this.params = null; // Function_call_param_listContext
    }

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	function_name() {
	    return this.getTypedRuleContext(Function_nameContext,0);
	};

	function_call_param_list() {
	    return this.getTypedRuleContext(Function_call_param_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_call(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_call(this);
		}
	}


}



class Function_call_param_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_call_param_list;
    }

	function_call_params() {
	    return this.getTypedRuleContext(Function_call_paramsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_call_param_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_call_param_list(this);
		}
	}


}



class Function_call_paramsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_call_params;
    }

	function_param() {
	    return this.getTypedRuleContext(Function_paramContext,0);
	};

	function_call_params() {
	    return this.getTypedRuleContext(Function_call_paramsContext,0);
	};

	COMMA() {
	    return this.getToken(CorundumParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_call_params(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_call_params(this);
		}
	}


}



class Function_paramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_param;
    }

	function_unnamed_param() {
	    return this.getTypedRuleContext(Function_unnamed_paramContext,0);
	};

	function_named_param() {
	    return this.getTypedRuleContext(Function_named_paramContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_param(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_param(this);
		}
	}


}



class Function_unnamed_paramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_unnamed_param;
    }

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	float_result() {
	    return this.getTypedRuleContext(Float_resultContext,0);
	};

	string_result() {
	    return this.getTypedRuleContext(String_resultContext,0);
	};

	dynamic_result() {
	    return this.getTypedRuleContext(Dynamic_resultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_unnamed_param(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_unnamed_param(this);
		}
	}


}



class Function_named_paramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_named_param;
        this.op = null; // Token
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	float_result() {
	    return this.getTypedRuleContext(Float_resultContext,0);
	};

	string_result() {
	    return this.getTypedRuleContext(String_resultContext,0);
	};

	dynamic_result() {
	    return this.getTypedRuleContext(Dynamic_resultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_named_param(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_named_param(this);
		}
	}


}



class Function_call_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_function_call_assignment;
    }

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFunction_call_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFunction_call_assignment(this);
		}
	}


}



class All_resultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_all_result;
    }

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	float_result() {
	    return this.getTypedRuleContext(Float_resultContext,0);
	};

	string_result() {
	    return this.getTypedRuleContext(String_resultContext,0);
	};

	dynamic_result() {
	    return this.getTypedRuleContext(Dynamic_resultContext,0);
	};

	global_result() {
	    return this.getTypedRuleContext(Global_resultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterAll_result(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitAll_result(this);
		}
	}


}



class Elsif_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_elsif_statement;
    }

	if_elsif_statement() {
	    return this.getTypedRuleContext(If_elsif_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterElsif_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitElsif_statement(this);
		}
	}


}



class If_elsif_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_if_elsif_statement;
    }

	ELSIF() {
	    return this.getToken(CorundumParser.ELSIF, 0);
	};

	cond_expression() {
	    return this.getTypedRuleContext(Cond_expressionContext,0);
	};

	crlf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CrlfContext);
	    } else {
	        return this.getTypedRuleContext(CrlfContext,i);
	    }
	};

	statement_body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statement_bodyContext);
	    } else {
	        return this.getTypedRuleContext(Statement_bodyContext,i);
	    }
	};

	else_token() {
	    return this.getTypedRuleContext(Else_tokenContext,0);
	};

	if_elsif_statement() {
	    return this.getTypedRuleContext(If_elsif_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterIf_elsif_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitIf_elsif_statement(this);
		}
	}


}



class If_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_if_statement;
    }

	IF() {
	    return this.getToken(CorundumParser.IF, 0);
	};

	cond_expression() {
	    return this.getTypedRuleContext(Cond_expressionContext,0);
	};

	crlf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CrlfContext);
	    } else {
	        return this.getTypedRuleContext(CrlfContext,i);
	    }
	};

	statement_body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statement_bodyContext);
	    } else {
	        return this.getTypedRuleContext(Statement_bodyContext,i);
	    }
	};

	END() {
	    return this.getToken(CorundumParser.END, 0);
	};

	else_token() {
	    return this.getTypedRuleContext(Else_tokenContext,0);
	};

	elsif_statement() {
	    return this.getTypedRuleContext(Elsif_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterIf_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitIf_statement(this);
		}
	}


}



class Unless_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_unless_statement;
    }

	UNLESS() {
	    return this.getToken(CorundumParser.UNLESS, 0);
	};

	cond_expression() {
	    return this.getTypedRuleContext(Cond_expressionContext,0);
	};

	crlf = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CrlfContext);
	    } else {
	        return this.getTypedRuleContext(CrlfContext,i);
	    }
	};

	statement_body = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Statement_bodyContext);
	    } else {
	        return this.getTypedRuleContext(Statement_bodyContext,i);
	    }
	};

	END() {
	    return this.getToken(CorundumParser.END, 0);
	};

	else_token() {
	    return this.getTypedRuleContext(Else_tokenContext,0);
	};

	elsif_statement() {
	    return this.getTypedRuleContext(Elsif_statementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterUnless_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitUnless_statement(this);
		}
	}


}



class While_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_while_statement;
    }

	WHILE() {
	    return this.getToken(CorundumParser.WHILE, 0);
	};

	cond_expression() {
	    return this.getTypedRuleContext(Cond_expressionContext,0);
	};

	crlf() {
	    return this.getTypedRuleContext(CrlfContext,0);
	};

	statement_body() {
	    return this.getTypedRuleContext(Statement_bodyContext,0);
	};

	END() {
	    return this.getToken(CorundumParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterWhile_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitWhile_statement(this);
		}
	}


}



class For_statementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_for_statement;
    }

	FOR() {
	    return this.getToken(CorundumParser.FOR, 0);
	};

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	init_expression() {
	    return this.getTypedRuleContext(Init_expressionContext,0);
	};

	SEMICOLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CorundumParser.SEMICOLON);
	    } else {
	        return this.getToken(CorundumParser.SEMICOLON, i);
	    }
	};


	cond_expression() {
	    return this.getTypedRuleContext(Cond_expressionContext,0);
	};

	loop_expression() {
	    return this.getTypedRuleContext(Loop_expressionContext,0);
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	crlf() {
	    return this.getTypedRuleContext(CrlfContext,0);
	};

	statement_body() {
	    return this.getTypedRuleContext(Statement_bodyContext,0);
	};

	END() {
	    return this.getToken(CorundumParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFor_statement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFor_statement(this);
		}
	}


}



class Init_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_init_expression;
    }

	for_init_list() {
	    return this.getTypedRuleContext(For_init_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterInit_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitInit_expression(this);
		}
	}


}



class All_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_all_assignment;
    }

	int_assignment() {
	    return this.getTypedRuleContext(Int_assignmentContext,0);
	};

	float_assignment() {
	    return this.getTypedRuleContext(Float_assignmentContext,0);
	};

	string_assignment() {
	    return this.getTypedRuleContext(String_assignmentContext,0);
	};

	dynamic_assignment() {
	    return this.getTypedRuleContext(Dynamic_assignmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterAll_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitAll_assignment(this);
		}
	}


}



class For_init_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_for_init_list;
    }

	all_assignment() {
	    return this.getTypedRuleContext(All_assignmentContext,0);
	};

	for_init_list() {
	    return this.getTypedRuleContext(For_init_listContext,0);
	};

	COMMA() {
	    return this.getToken(CorundumParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFor_init_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFor_init_list(this);
		}
	}


}



class Cond_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_cond_expression;
    }

	comparison_list() {
	    return this.getTypedRuleContext(Comparison_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterCond_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitCond_expression(this);
		}
	}


}



class Loop_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_loop_expression;
    }

	for_loop_list() {
	    return this.getTypedRuleContext(For_loop_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterLoop_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitLoop_expression(this);
		}
	}


}



class For_loop_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_for_loop_list;
    }

	all_assignment() {
	    return this.getTypedRuleContext(All_assignmentContext,0);
	};

	for_loop_list() {
	    return this.getTypedRuleContext(For_loop_listContext,0);
	};

	COMMA() {
	    return this.getToken(CorundumParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFor_loop_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFor_loop_list(this);
		}
	}


}



class Statement_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_statement_body;
    }

	statement_expression_list() {
	    return this.getTypedRuleContext(Statement_expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterStatement_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitStatement_body(this);
		}
	}


}



class Statement_expression_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_statement_expression_list;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	terminator() {
	    return this.getTypedRuleContext(TerminatorContext,0);
	};

	RETRY() {
	    return this.getToken(CorundumParser.RETRY, 0);
	};

	break_expression() {
	    return this.getTypedRuleContext(Break_expressionContext,0);
	};

	statement_expression_list() {
	    return this.getTypedRuleContext(Statement_expression_listContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterStatement_expression_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitStatement_expression_list(this);
		}
	}


}



class AssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_assignment;
        this.var_id = null; // LvalueContext
        this.op = null; // Token
    }

	rvalue() {
	    return this.getTypedRuleContext(RvalueContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	PLUS_ASSIGN() {
	    return this.getToken(CorundumParser.PLUS_ASSIGN, 0);
	};

	MINUS_ASSIGN() {
	    return this.getToken(CorundumParser.MINUS_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(CorundumParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(CorundumParser.DIV_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(CorundumParser.MOD_ASSIGN, 0);
	};

	EXP_ASSIGN() {
	    return this.getToken(CorundumParser.EXP_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class Dynamic_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_dynamic_assignment;
        this.var_id = null; // LvalueContext
        this.op = null; // Token
    }

	dynamic_result() {
	    return this.getTypedRuleContext(Dynamic_resultContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	PLUS_ASSIGN() {
	    return this.getToken(CorundumParser.PLUS_ASSIGN, 0);
	};

	MINUS_ASSIGN() {
	    return this.getToken(CorundumParser.MINUS_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(CorundumParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(CorundumParser.DIV_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(CorundumParser.MOD_ASSIGN, 0);
	};

	EXP_ASSIGN() {
	    return this.getToken(CorundumParser.EXP_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterDynamic_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitDynamic_assignment(this);
		}
	}


}



class Int_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_int_assignment;
        this.var_id = null; // LvalueContext
        this.op = null; // Token
    }

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	PLUS_ASSIGN() {
	    return this.getToken(CorundumParser.PLUS_ASSIGN, 0);
	};

	MINUS_ASSIGN() {
	    return this.getToken(CorundumParser.MINUS_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(CorundumParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(CorundumParser.DIV_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(CorundumParser.MOD_ASSIGN, 0);
	};

	EXP_ASSIGN() {
	    return this.getToken(CorundumParser.EXP_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterInt_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitInt_assignment(this);
		}
	}


}



class Float_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_float_assignment;
        this.var_id = null; // LvalueContext
        this.op = null; // Token
    }

	float_result() {
	    return this.getTypedRuleContext(Float_resultContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	PLUS_ASSIGN() {
	    return this.getToken(CorundumParser.PLUS_ASSIGN, 0);
	};

	MINUS_ASSIGN() {
	    return this.getToken(CorundumParser.MINUS_ASSIGN, 0);
	};

	MUL_ASSIGN() {
	    return this.getToken(CorundumParser.MUL_ASSIGN, 0);
	};

	DIV_ASSIGN() {
	    return this.getToken(CorundumParser.DIV_ASSIGN, 0);
	};

	MOD_ASSIGN() {
	    return this.getToken(CorundumParser.MOD_ASSIGN, 0);
	};

	EXP_ASSIGN() {
	    return this.getToken(CorundumParser.EXP_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFloat_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFloat_assignment(this);
		}
	}


}



class String_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_string_assignment;
        this.var_id = null; // LvalueContext
        this.op = null; // Token
    }

	string_result() {
	    return this.getTypedRuleContext(String_resultContext,0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	PLUS_ASSIGN() {
	    return this.getToken(CorundumParser.PLUS_ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterString_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitString_assignment(this);
		}
	}


}



class Initial_array_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_initial_array_assignment;
        this.var_id = null; // LvalueContext
        this.op = null; // Token
    }

	LEFT_SBRACKET() {
	    return this.getToken(CorundumParser.LEFT_SBRACKET, 0);
	};

	RIGHT_SBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_SBRACKET, 0);
	};

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterInitial_array_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitInitial_array_assignment(this);
		}
	}


}



class Array_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_array_assignment;
        this.arr_def = null; // Array_selectorContext
        this.op = null; // Token
        this.arr_val = null; // All_resultContext
    }

	array_selector() {
	    return this.getTypedRuleContext(Array_selectorContext,0);
	};

	ASSIGN() {
	    return this.getToken(CorundumParser.ASSIGN, 0);
	};

	all_result() {
	    return this.getTypedRuleContext(All_resultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterArray_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitArray_assignment(this);
		}
	}


}



class Array_definitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_array_definition;
    }

	LEFT_SBRACKET() {
	    return this.getToken(CorundumParser.LEFT_SBRACKET, 0);
	};

	array_definition_elements() {
	    return this.getTypedRuleContext(Array_definition_elementsContext,0);
	};

	RIGHT_SBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_SBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterArray_definition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitArray_definition(this);
		}
	}


}



class Array_definition_elementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_array_definition_elements;
    }

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	dynamic_result() {
	    return this.getTypedRuleContext(Dynamic_resultContext,0);
	};

	array_definition_elements() {
	    return this.getTypedRuleContext(Array_definition_elementsContext,0);
	};

	COMMA() {
	    return this.getToken(CorundumParser.COMMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterArray_definition_elements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitArray_definition_elements(this);
		}
	}


}



class Array_selectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_array_selector;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	LEFT_SBRACKET() {
	    return this.getToken(CorundumParser.LEFT_SBRACKET, 0);
	};

	RIGHT_SBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_SBRACKET, 0);
	};

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	dynamic_result() {
	    return this.getTypedRuleContext(Dynamic_resultContext,0);
	};

	id_global() {
	    return this.getTypedRuleContext(Id_globalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterArray_selector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitArray_selector(this);
		}
	}


}



class Dynamic_resultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_dynamic_result;
        this.op = null; // Token
    }

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	dynamic_result = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dynamic_resultContext);
	    } else {
	        return this.getTypedRuleContext(Dynamic_resultContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CorundumParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CorundumParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CorundumParser.MOD, 0);
	};

	float_result() {
	    return this.getTypedRuleContext(Float_resultContext,0);
	};

	string_result() {
	    return this.getTypedRuleContext(String_resultContext,0);
	};

	PLUS() {
	    return this.getToken(CorundumParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CorundumParser.MINUS, 0);
	};

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	dynamic_() {
	    return this.getTypedRuleContext(Dynamic_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterDynamic_result(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitDynamic_result(this);
		}
	}


}



class Dynamic_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_dynamic_;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	function_call_assignment() {
	    return this.getTypedRuleContext(Function_call_assignmentContext,0);
	};

	array_selector() {
	    return this.getTypedRuleContext(Array_selectorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterDynamic_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitDynamic_(this);
		}
	}


}



class Int_resultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_int_result;
        this.op = null; // Token
    }

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	int_result = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Int_resultContext);
	    } else {
	        return this.getTypedRuleContext(Int_resultContext,i);
	    }
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	int_t() {
	    return this.getTypedRuleContext(Int_tContext,0);
	};

	MUL() {
	    return this.getToken(CorundumParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CorundumParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CorundumParser.MOD, 0);
	};

	PLUS() {
	    return this.getToken(CorundumParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CorundumParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterInt_result(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitInt_result(this);
		}
	}


}



class Float_resultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_float_result;
        this.op = null; // Token
    }

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	float_result = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Float_resultContext);
	    } else {
	        return this.getTypedRuleContext(Float_resultContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CorundumParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CorundumParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CorundumParser.MOD, 0);
	};

	PLUS() {
	    return this.getToken(CorundumParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CorundumParser.MINUS, 0);
	};

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	float_t() {
	    return this.getTypedRuleContext(Float_tContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFloat_result(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFloat_result(this);
		}
	}


}



class String_resultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_string_result;
        this.op = null; // Token
    }

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	string_result = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_resultContext);
	    } else {
	        return this.getTypedRuleContext(String_resultContext,i);
	    }
	};

	MUL() {
	    return this.getToken(CorundumParser.MUL, 0);
	};

	literal_t() {
	    return this.getTypedRuleContext(Literal_tContext,0);
	};

	PLUS() {
	    return this.getToken(CorundumParser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterString_result(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitString_result(this);
		}
	}


}



class Comparison_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_comparison_list;
        this.left = null; // ComparisonContext
        this.op = null; // Token
        this.right = null; // Comparison_listContext
    }

	comparison() {
	    return this.getTypedRuleContext(ComparisonContext,0);
	};

	BIT_AND() {
	    return this.getToken(CorundumParser.BIT_AND, 0);
	};

	comparison_list() {
	    return this.getTypedRuleContext(Comparison_listContext,0);
	};

	AND() {
	    return this.getToken(CorundumParser.AND, 0);
	};

	BIT_OR() {
	    return this.getToken(CorundumParser.BIT_OR, 0);
	};

	OR() {
	    return this.getToken(CorundumParser.OR, 0);
	};

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterComparison_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitComparison_list(this);
		}
	}


}



class ComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_comparison;
        this.left = null; // Comp_varContext
        this.op = null; // Token
        this.right = null; // Comp_varContext
    }

	comp_var = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Comp_varContext);
	    } else {
	        return this.getTypedRuleContext(Comp_varContext,i);
	    }
	};

	LESS() {
	    return this.getToken(CorundumParser.LESS, 0);
	};

	GREATER() {
	    return this.getToken(CorundumParser.GREATER, 0);
	};

	LESS_EQUAL() {
	    return this.getToken(CorundumParser.LESS_EQUAL, 0);
	};

	GREATER_EQUAL() {
	    return this.getToken(CorundumParser.GREATER_EQUAL, 0);
	};

	EQUAL() {
	    return this.getToken(CorundumParser.EQUAL, 0);
	};

	NOT_EQUAL() {
	    return this.getToken(CorundumParser.NOT_EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitComparison(this);
		}
	}


}



class Comp_varContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_comp_var;
    }

	all_result() {
	    return this.getTypedRuleContext(All_resultContext,0);
	};

	array_selector() {
	    return this.getTypedRuleContext(Array_selectorContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterComp_var(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitComp_var(this);
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
        this.ruleIndex = CorundumParser.RULE_lvalue;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterLvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitLvalue(this);
		}
	}


}



class RvalueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_rvalue;
    }

	lvalue() {
	    return this.getTypedRuleContext(LvalueContext,0);
	};

	initial_array_assignment() {
	    return this.getTypedRuleContext(Initial_array_assignmentContext,0);
	};

	array_assignment() {
	    return this.getTypedRuleContext(Array_assignmentContext,0);
	};

	int_result() {
	    return this.getTypedRuleContext(Int_resultContext,0);
	};

	float_result() {
	    return this.getTypedRuleContext(Float_resultContext,0);
	};

	string_result() {
	    return this.getTypedRuleContext(String_resultContext,0);
	};

	global_set() {
	    return this.getTypedRuleContext(Global_setContext,0);
	};

	global_get() {
	    return this.getTypedRuleContext(Global_getContext,0);
	};

	dynamic_assignment() {
	    return this.getTypedRuleContext(Dynamic_assignmentContext,0);
	};

	string_assignment() {
	    return this.getTypedRuleContext(String_assignmentContext,0);
	};

	float_assignment() {
	    return this.getTypedRuleContext(Float_assignmentContext,0);
	};

	int_assignment() {
	    return this.getTypedRuleContext(Int_assignmentContext,0);
	};

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	function_call() {
	    return this.getTypedRuleContext(Function_callContext,0);
	};

	literal_t() {
	    return this.getTypedRuleContext(Literal_tContext,0);
	};

	bool_t() {
	    return this.getTypedRuleContext(Bool_tContext,0);
	};

	float_t() {
	    return this.getTypedRuleContext(Float_tContext,0);
	};

	int_t() {
	    return this.getTypedRuleContext(Int_tContext,0);
	};

	nil_t() {
	    return this.getTypedRuleContext(Nil_tContext,0);
	};

	rvalue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RvalueContext);
	    } else {
	        return this.getTypedRuleContext(RvalueContext,i);
	    }
	};

	NOT() {
	    return this.getToken(CorundumParser.NOT, 0);
	};

	BIT_NOT() {
	    return this.getToken(CorundumParser.BIT_NOT, 0);
	};

	LEFT_RBRACKET() {
	    return this.getToken(CorundumParser.LEFT_RBRACKET, 0);
	};

	RIGHT_RBRACKET() {
	    return this.getToken(CorundumParser.RIGHT_RBRACKET, 0);
	};

	EXP() {
	    return this.getToken(CorundumParser.EXP, 0);
	};

	MUL() {
	    return this.getToken(CorundumParser.MUL, 0);
	};

	DIV() {
	    return this.getToken(CorundumParser.DIV, 0);
	};

	MOD() {
	    return this.getToken(CorundumParser.MOD, 0);
	};

	PLUS() {
	    return this.getToken(CorundumParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CorundumParser.MINUS, 0);
	};

	BIT_SHL() {
	    return this.getToken(CorundumParser.BIT_SHL, 0);
	};

	BIT_SHR() {
	    return this.getToken(CorundumParser.BIT_SHR, 0);
	};

	BIT_AND() {
	    return this.getToken(CorundumParser.BIT_AND, 0);
	};

	BIT_OR() {
	    return this.getToken(CorundumParser.BIT_OR, 0);
	};

	BIT_XOR() {
	    return this.getToken(CorundumParser.BIT_XOR, 0);
	};

	LESS() {
	    return this.getToken(CorundumParser.LESS, 0);
	};

	GREATER() {
	    return this.getToken(CorundumParser.GREATER, 0);
	};

	LESS_EQUAL() {
	    return this.getToken(CorundumParser.LESS_EQUAL, 0);
	};

	GREATER_EQUAL() {
	    return this.getToken(CorundumParser.GREATER_EQUAL, 0);
	};

	EQUAL() {
	    return this.getToken(CorundumParser.EQUAL, 0);
	};

	NOT_EQUAL() {
	    return this.getToken(CorundumParser.NOT_EQUAL, 0);
	};

	OR() {
	    return this.getToken(CorundumParser.OR, 0);
	};

	AND() {
	    return this.getToken(CorundumParser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterRvalue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitRvalue(this);
		}
	}


}



class Break_expressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_break_expression;
    }

	BREAK() {
	    return this.getToken(CorundumParser.BREAK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterBreak_expression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitBreak_expression(this);
		}
	}


}



class Literal_tContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_literal_t;
    }

	LITERAL() {
	    return this.getToken(CorundumParser.LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterLiteral_t(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitLiteral_t(this);
		}
	}


}



class Float_tContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_float_t;
    }

	FLOAT() {
	    return this.getToken(CorundumParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterFloat_t(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitFloat_t(this);
		}
	}


}



class Int_tContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_int_t;
    }

	INT() {
	    return this.getToken(CorundumParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterInt_t(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitInt_t(this);
		}
	}


}



class Bool_tContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_bool_t;
    }

	TRUE() {
	    return this.getToken(CorundumParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(CorundumParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterBool_t(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitBool_t(this);
		}
	}


}



class Nil_tContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_nil_t;
    }

	NIL() {
	    return this.getToken(CorundumParser.NIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterNil_t(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitNil_t(this);
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
        this.ruleIndex = CorundumParser.RULE_id_;
    }

	ID() {
	    return this.getToken(CorundumParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitId_(this);
		}
	}


}



class Id_globalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_id_global;
    }

	ID_GLOBAL() {
	    return this.getToken(CorundumParser.ID_GLOBAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterId_global(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitId_global(this);
		}
	}


}



class Id_functionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_id_function;
    }

	ID_FUNCTION() {
	    return this.getToken(CorundumParser.ID_FUNCTION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterId_function(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitId_function(this);
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
        this.ruleIndex = CorundumParser.RULE_terminator;
    }

	SEMICOLON() {
	    return this.getToken(CorundumParser.SEMICOLON, 0);
	};

	crlf() {
	    return this.getTypedRuleContext(CrlfContext,0);
	};

	terminator() {
	    return this.getTypedRuleContext(TerminatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterTerminator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitTerminator(this);
		}
	}


}



class Else_tokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_else_token;
    }

	ELSE() {
	    return this.getToken(CorundumParser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterElse_token(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitElse_token(this);
		}
	}


}



class CrlfContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CorundumParser.RULE_crlf;
    }

	CRLF() {
	    return this.getToken(CorundumParser.CRLF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.enterCrlf(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CorundumListener ) {
	        listener.exitCrlf(this);
		}
	}


}




CorundumParser.ProgContext = ProgContext; 
CorundumParser.Expression_listContext = Expression_listContext; 
CorundumParser.ExpressionContext = ExpressionContext; 
CorundumParser.Global_getContext = Global_getContext; 
CorundumParser.Global_setContext = Global_setContext; 
CorundumParser.Global_resultContext = Global_resultContext; 
CorundumParser.Function_inline_callContext = Function_inline_callContext; 
CorundumParser.Require_blockContext = Require_blockContext; 
CorundumParser.Pir_inlineContext = Pir_inlineContext; 
CorundumParser.Pir_expression_listContext = Pir_expression_listContext; 
CorundumParser.Function_definitionContext = Function_definitionContext; 
CorundumParser.Function_definition_bodyContext = Function_definition_bodyContext; 
CorundumParser.Function_definition_headerContext = Function_definition_headerContext; 
CorundumParser.Function_nameContext = Function_nameContext; 
CorundumParser.Function_definition_paramsContext = Function_definition_paramsContext; 
CorundumParser.Function_definition_params_listContext = Function_definition_params_listContext; 
CorundumParser.Function_definition_param_idContext = Function_definition_param_idContext; 
CorundumParser.Return_statementContext = Return_statementContext; 
CorundumParser.Function_callContext = Function_callContext; 
CorundumParser.Function_call_param_listContext = Function_call_param_listContext; 
CorundumParser.Function_call_paramsContext = Function_call_paramsContext; 
CorundumParser.Function_paramContext = Function_paramContext; 
CorundumParser.Function_unnamed_paramContext = Function_unnamed_paramContext; 
CorundumParser.Function_named_paramContext = Function_named_paramContext; 
CorundumParser.Function_call_assignmentContext = Function_call_assignmentContext; 
CorundumParser.All_resultContext = All_resultContext; 
CorundumParser.Elsif_statementContext = Elsif_statementContext; 
CorundumParser.If_elsif_statementContext = If_elsif_statementContext; 
CorundumParser.If_statementContext = If_statementContext; 
CorundumParser.Unless_statementContext = Unless_statementContext; 
CorundumParser.While_statementContext = While_statementContext; 
CorundumParser.For_statementContext = For_statementContext; 
CorundumParser.Init_expressionContext = Init_expressionContext; 
CorundumParser.All_assignmentContext = All_assignmentContext; 
CorundumParser.For_init_listContext = For_init_listContext; 
CorundumParser.Cond_expressionContext = Cond_expressionContext; 
CorundumParser.Loop_expressionContext = Loop_expressionContext; 
CorundumParser.For_loop_listContext = For_loop_listContext; 
CorundumParser.Statement_bodyContext = Statement_bodyContext; 
CorundumParser.Statement_expression_listContext = Statement_expression_listContext; 
CorundumParser.AssignmentContext = AssignmentContext; 
CorundumParser.Dynamic_assignmentContext = Dynamic_assignmentContext; 
CorundumParser.Int_assignmentContext = Int_assignmentContext; 
CorundumParser.Float_assignmentContext = Float_assignmentContext; 
CorundumParser.String_assignmentContext = String_assignmentContext; 
CorundumParser.Initial_array_assignmentContext = Initial_array_assignmentContext; 
CorundumParser.Array_assignmentContext = Array_assignmentContext; 
CorundumParser.Array_definitionContext = Array_definitionContext; 
CorundumParser.Array_definition_elementsContext = Array_definition_elementsContext; 
CorundumParser.Array_selectorContext = Array_selectorContext; 
CorundumParser.Dynamic_resultContext = Dynamic_resultContext; 
CorundumParser.Dynamic_Context = Dynamic_Context; 
CorundumParser.Int_resultContext = Int_resultContext; 
CorundumParser.Float_resultContext = Float_resultContext; 
CorundumParser.String_resultContext = String_resultContext; 
CorundumParser.Comparison_listContext = Comparison_listContext; 
CorundumParser.ComparisonContext = ComparisonContext; 
CorundumParser.Comp_varContext = Comp_varContext; 
CorundumParser.LvalueContext = LvalueContext; 
CorundumParser.RvalueContext = RvalueContext; 
CorundumParser.Break_expressionContext = Break_expressionContext; 
CorundumParser.Literal_tContext = Literal_tContext; 
CorundumParser.Float_tContext = Float_tContext; 
CorundumParser.Int_tContext = Int_tContext; 
CorundumParser.Bool_tContext = Bool_tContext; 
CorundumParser.Nil_tContext = Nil_tContext; 
CorundumParser.Id_Context = Id_Context; 
CorundumParser.Id_globalContext = Id_globalContext; 
CorundumParser.Id_functionContext = Id_functionContext; 
CorundumParser.TerminatorContext = TerminatorContext; 
CorundumParser.Else_tokenContext = Else_tokenContext; 
CorundumParser.CrlfContext = CrlfContext; 
