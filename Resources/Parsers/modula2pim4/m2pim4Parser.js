// Generated from Resources/Parsers/modula2pim4/m2pim4.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import m2pim4Listener from './m2pim4Listener.js';
const serializedATN = [4,1,77,813,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,2,72,7,72,2,73,7,73,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,
5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,9,5,9,170,8,9,10,9,12,9,173,9,9,
1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,3,11,183,8,11,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,3,12,194,8,12,1,13,1,13,1,13,3,13,199,8,13,1,13,
1,13,1,13,1,13,5,13,205,8,13,10,13,12,13,208,9,13,1,14,1,14,1,15,1,15,1,
15,1,15,5,15,216,8,15,10,15,12,15,219,9,15,1,16,1,16,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,3,17,233,8,17,1,17,3,17,236,8,17,1,18,1,18,
1,18,3,18,241,8,18,3,18,243,8,18,1,19,1,19,1,19,1,19,5,19,249,8,19,10,19,
12,19,252,9,19,3,19,254,8,19,1,19,1,19,1,20,1,20,1,20,3,20,261,8,20,1,21,
1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,273,8,22,1,23,1,23,1,23,
3,23,278,8,23,1,24,1,24,1,24,1,24,1,25,1,25,1,25,5,25,287,8,25,10,25,12,
25,290,9,25,1,26,1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,27,5,27,302,8,
27,10,27,12,27,305,9,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,29,1,29,1,29,
5,29,317,8,29,10,29,12,29,320,9,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,3,30,331,8,30,1,30,3,30,334,8,30,1,30,1,30,1,30,1,30,5,30,340,8,
30,10,30,12,30,343,9,30,1,30,1,30,3,30,347,8,30,1,30,1,30,3,30,351,8,30,
1,31,1,31,1,31,1,31,1,32,1,32,1,32,5,32,360,8,32,10,32,12,32,363,9,32,1,
33,1,33,1,33,3,33,368,8,33,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,35,1,36,
1,36,3,36,380,8,36,1,37,1,37,3,37,384,8,37,1,37,1,37,1,37,3,37,389,8,37,
1,37,5,37,392,8,37,10,37,12,37,395,9,37,3,37,397,8,37,1,37,1,37,1,37,3,37,
402,8,37,1,38,1,38,1,38,1,38,1,39,1,39,3,39,410,8,39,1,40,1,40,1,40,1,40,
1,40,3,40,417,8,40,1,40,1,40,5,40,421,8,40,10,40,12,40,424,9,40,4,40,426,
8,40,11,40,12,40,427,1,41,1,41,1,41,5,41,433,8,41,10,41,12,41,436,9,41,1,
42,1,42,1,42,1,42,3,42,442,8,42,1,43,1,43,1,43,3,43,447,8,43,1,43,1,43,1,
43,1,43,5,43,453,8,43,10,43,12,43,456,9,43,1,44,1,44,1,44,1,44,5,44,462,
8,44,10,44,12,44,465,9,44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
45,3,45,477,8,45,1,45,3,45,480,8,45,1,46,1,46,1,46,1,46,3,46,486,8,46,1,
46,3,46,489,8,46,3,46,491,8,46,3,46,493,8,46,1,47,1,47,3,47,497,8,47,1,47,
1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,512,8,48,
3,48,514,8,48,1,49,1,49,1,49,1,49,3,49,520,8,49,3,49,522,8,49,1,50,1,50,
1,50,5,50,527,8,50,10,50,12,50,530,9,50,1,51,1,51,1,51,1,51,1,51,1,51,1,
51,1,51,1,51,5,51,541,8,51,10,51,12,51,544,9,51,1,51,1,51,3,51,548,8,51,
1,51,1,51,1,52,1,52,1,52,1,52,1,52,1,52,5,52,558,8,52,10,52,12,52,561,9,
52,1,52,1,52,3,52,565,8,52,1,52,1,52,1,53,1,53,1,53,1,53,1,54,1,54,1,54,
1,54,1,54,1,54,1,55,1,55,1,55,1,55,1,55,1,56,1,56,1,56,1,56,1,56,1,56,1,
56,1,56,3,56,592,8,56,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,58,1,58,
1,58,1,58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,60,1,60,1,60,3,60,616,8,60,
1,61,5,61,619,8,61,10,61,12,61,622,9,61,1,61,1,61,3,61,626,8,61,1,61,1,61,
1,62,1,62,1,62,1,62,5,62,634,8,62,10,62,12,62,637,9,62,1,62,1,62,1,62,1,
62,5,62,643,8,62,10,62,12,62,646,9,62,1,62,1,62,1,62,1,62,5,62,652,8,62,
10,62,12,62,655,9,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,663,8,62,1,63,1,
63,1,63,1,63,5,63,669,8,63,10,63,12,63,672,9,63,3,63,674,8,63,1,63,1,63,
1,63,3,63,679,8,63,1,64,3,64,682,8,64,1,64,1,64,1,64,1,64,1,65,1,65,3,65,
690,8,65,1,65,1,65,1,66,1,66,1,66,3,66,697,8,66,1,66,1,66,5,66,701,8,66,
10,66,12,66,704,9,66,1,66,3,66,707,8,66,1,66,1,66,1,66,1,67,1,67,1,67,1,
67,1,68,1,68,3,68,718,8,68,1,68,1,68,1,68,1,69,1,69,3,69,725,8,69,1,69,1,
69,1,69,1,69,1,70,1,70,1,70,1,70,1,70,5,70,736,8,70,10,70,12,70,739,9,70,
1,70,3,70,742,8,70,1,70,5,70,745,8,70,10,70,12,70,748,9,70,1,70,1,70,1,70,
1,70,1,71,1,71,1,71,1,71,5,71,758,8,71,10,71,12,71,761,9,71,1,71,1,71,1,
71,1,71,3,71,767,8,71,1,71,1,71,5,71,771,8,71,10,71,12,71,774,9,71,1,71,
1,71,1,71,1,71,5,71,780,8,71,10,71,12,71,783,9,71,1,71,1,71,1,71,3,71,788,
8,71,1,72,1,72,1,72,3,72,793,8,72,1,72,1,72,5,72,797,8,72,10,72,12,72,800,
9,72,1,72,1,72,1,72,1,72,1,73,1,73,3,73,808,8,73,1,73,3,73,811,8,73,1,73,
0,0,74,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
134,136,138,140,142,144,146,0,3,1,0,69,70,2,0,9,10,53,53,4,0,11,13,28,28,
35,35,49,49,858,0,148,1,0,0,0,2,150,1,0,0,0,4,152,1,0,0,0,6,154,1,0,0,0,
8,156,1,0,0,0,10,158,1,0,0,0,12,160,1,0,0,0,14,162,1,0,0,0,16,164,1,0,0,
0,18,166,1,0,0,0,20,174,1,0,0,0,22,178,1,0,0,0,24,193,1,0,0,0,26,198,1,0,
0,0,28,209,1,0,0,0,30,211,1,0,0,0,32,220,1,0,0,0,34,235,1,0,0,0,36,242,1,
0,0,0,38,244,1,0,0,0,40,257,1,0,0,0,42,262,1,0,0,0,44,272,1,0,0,0,46,277,
1,0,0,0,48,279,1,0,0,0,50,283,1,0,0,0,52,291,1,0,0,0,54,297,1,0,0,0,56,309,
1,0,0,0,58,313,1,0,0,0,60,350,1,0,0,0,62,352,1,0,0,0,64,356,1,0,0,0,66,364,
1,0,0,0,68,369,1,0,0,0,70,373,1,0,0,0,72,377,1,0,0,0,74,381,1,0,0,0,76,403,
1,0,0,0,78,407,1,0,0,0,80,425,1,0,0,0,82,429,1,0,0,0,84,437,1,0,0,0,86,446,
1,0,0,0,88,457,1,0,0,0,90,479,1,0,0,0,92,492,1,0,0,0,94,494,1,0,0,0,96,513,
1,0,0,0,98,515,1,0,0,0,100,523,1,0,0,0,102,531,1,0,0,0,104,551,1,0,0,0,106,
568,1,0,0,0,108,572,1,0,0,0,110,578,1,0,0,0,112,583,1,0,0,0,114,597,1,0,
0,0,116,601,1,0,0,0,118,607,1,0,0,0,120,612,1,0,0,0,122,620,1,0,0,0,124,
662,1,0,0,0,126,664,1,0,0,0,128,681,1,0,0,0,130,689,1,0,0,0,132,693,1,0,
0,0,134,711,1,0,0,0,136,715,1,0,0,0,138,724,1,0,0,0,140,730,1,0,0,0,142,
787,1,0,0,0,144,789,1,0,0,0,146,810,1,0,0,0,148,149,5,68,0,0,149,1,1,0,0,
0,150,151,7,0,0,0,151,3,1,0,0,0,152,153,5,69,0,0,153,5,1,0,0,0,154,155,5,
70,0,0,155,7,1,0,0,0,156,157,5,75,0,0,157,9,1,0,0,0,158,159,5,74,0,0,159,
11,1,0,0,0,160,161,5,72,0,0,161,13,1,0,0,0,162,163,5,73,0,0,163,15,1,0,0,
0,164,165,5,71,0,0,165,17,1,0,0,0,166,171,3,0,0,0,167,168,5,1,0,0,168,170,
3,0,0,0,169,167,1,0,0,0,170,173,1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,
172,19,1,0,0,0,173,171,1,0,0,0,174,175,3,0,0,0,175,176,5,2,0,0,176,177,3,
22,11,0,177,21,1,0,0,0,178,182,3,26,13,0,179,180,3,24,12,0,180,181,3,26,
13,0,181,183,1,0,0,0,182,179,1,0,0,0,182,183,1,0,0,0,183,23,1,0,0,0,184,
194,5,2,0,0,185,194,5,3,0,0,186,194,5,4,0,0,187,194,5,5,0,0,188,194,5,6,
0,0,189,194,5,7,0,0,190,194,5,8,0,0,191,192,5,47,0,0,192,194,6,12,-1,0,193,
184,1,0,0,0,193,185,1,0,0,0,193,186,1,0,0,0,193,187,1,0,0,0,193,188,1,0,
0,0,193,189,1,0,0,0,193,190,1,0,0,0,193,191,1,0,0,0,194,25,1,0,0,0,195,199,
5,9,0,0,196,197,5,10,0,0,197,199,6,13,-1,0,198,195,1,0,0,0,198,196,1,0,0,
0,198,199,1,0,0,0,199,200,1,0,0,0,200,206,3,30,15,0,201,202,3,28,14,0,202,
203,3,30,15,0,203,205,1,0,0,0,204,201,1,0,0,0,205,208,1,0,0,0,206,204,1,
0,0,0,206,207,1,0,0,0,207,27,1,0,0,0,208,206,1,0,0,0,209,210,7,1,0,0,210,
29,1,0,0,0,211,217,3,34,17,0,212,213,3,32,16,0,213,214,3,34,17,0,214,216,
1,0,0,0,215,212,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,0,0,0,
218,31,1,0,0,0,219,217,1,0,0,0,220,221,7,2,0,0,221,33,1,0,0,0,222,236,3,
2,1,0,223,236,3,16,8,0,224,236,3,36,18,0,225,226,5,14,0,0,226,227,3,22,11,
0,227,228,5,15,0,0,228,236,1,0,0,0,229,233,5,51,0,0,230,231,5,16,0,0,231,
233,6,17,-1,0,232,229,1,0,0,0,232,230,1,0,0,0,233,234,1,0,0,0,234,236,3,
34,17,0,235,222,1,0,0,0,235,223,1,0,0,0,235,224,1,0,0,0,235,225,1,0,0,0,
235,232,1,0,0,0,236,35,1,0,0,0,237,243,3,38,19,0,238,240,3,18,9,0,239,241,
3,38,19,0,240,239,1,0,0,0,240,241,1,0,0,0,241,243,1,0,0,0,242,237,1,0,0,
0,242,238,1,0,0,0,243,37,1,0,0,0,244,253,5,17,0,0,245,250,3,40,20,0,246,
247,5,18,0,0,247,249,3,40,20,0,248,246,1,0,0,0,249,252,1,0,0,0,250,248,1,
0,0,0,250,251,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,253,245,1,0,0,0,253,
254,1,0,0,0,254,255,1,0,0,0,255,256,5,19,0,0,256,39,1,0,0,0,257,260,3,22,
11,0,258,259,5,20,0,0,259,261,3,22,11,0,260,258,1,0,0,0,260,261,1,0,0,0,
261,41,1,0,0,0,262,263,3,0,0,0,263,264,5,2,0,0,264,265,3,44,22,0,265,43,
1,0,0,0,266,273,3,46,23,0,267,273,3,54,27,0,268,273,3,56,28,0,269,273,3,
68,34,0,270,273,3,70,35,0,271,273,3,72,36,0,272,266,1,0,0,0,272,267,1,0,
0,0,272,268,1,0,0,0,272,269,1,0,0,0,272,270,1,0,0,0,272,271,1,0,0,0,273,
45,1,0,0,0,274,278,3,18,9,0,275,278,3,48,24,0,276,278,3,52,26,0,277,274,
1,0,0,0,277,275,1,0,0,0,277,276,1,0,0,0,278,47,1,0,0,0,279,280,5,14,0,0,
280,281,3,50,25,0,281,282,5,15,0,0,282,49,1,0,0,0,283,288,3,0,0,0,284,285,
5,18,0,0,285,287,3,0,0,0,286,284,1,0,0,0,287,290,1,0,0,0,288,286,1,0,0,0,
288,289,1,0,0,0,289,51,1,0,0,0,290,288,1,0,0,0,291,292,5,21,0,0,292,293,
3,22,11,0,293,294,5,20,0,0,294,295,3,22,11,0,295,296,5,22,0,0,296,53,1,0,
0,0,297,298,5,29,0,0,298,303,3,46,23,0,299,300,5,18,0,0,300,302,3,46,23,
0,301,299,1,0,0,0,302,305,1,0,0,0,303,301,1,0,0,0,303,304,1,0,0,0,304,306,
1,0,0,0,305,303,1,0,0,0,306,307,5,52,0,0,307,308,3,44,22,0,308,55,1,0,0,
0,309,310,5,57,0,0,310,311,3,58,29,0,311,312,5,39,0,0,312,57,1,0,0,0,313,
318,3,60,30,0,314,315,5,23,0,0,315,317,3,60,30,0,316,314,1,0,0,0,317,320,
1,0,0,0,318,316,1,0,0,0,318,319,1,0,0,0,319,59,1,0,0,0,320,318,1,0,0,0,321,
322,3,50,25,0,322,323,5,24,0,0,323,324,3,44,22,0,324,351,1,0,0,0,325,326,
5,32,0,0,326,333,3,0,0,0,327,331,5,24,0,0,328,329,5,1,0,0,329,331,6,30,-1,
0,330,327,1,0,0,0,330,328,1,0,0,0,331,332,1,0,0,0,332,334,3,18,9,0,333,330,
1,0,0,0,333,334,1,0,0,0,334,335,1,0,0,0,335,336,5,52,0,0,336,341,3,62,31,
0,337,338,5,25,0,0,338,340,3,62,31,0,339,337,1,0,0,0,340,343,1,0,0,0,341,
339,1,0,0,0,341,342,1,0,0,0,342,346,1,0,0,0,343,341,1,0,0,0,344,345,5,37,
0,0,345,347,3,58,29,0,346,344,1,0,0,0,346,347,1,0,0,0,347,348,1,0,0,0,348,
349,5,39,0,0,349,351,1,0,0,0,350,321,1,0,0,0,350,325,1,0,0,0,350,351,1,0,
0,0,351,61,1,0,0,0,352,353,3,64,32,0,353,354,5,24,0,0,354,355,3,58,29,0,
355,63,1,0,0,0,356,361,3,66,33,0,357,358,5,18,0,0,358,360,3,66,33,0,359,
357,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,65,1,0,0,
0,363,361,1,0,0,0,364,367,3,22,11,0,365,366,5,20,0,0,366,368,3,22,11,0,367,
365,1,0,0,0,367,368,1,0,0,0,368,67,1,0,0,0,369,370,5,60,0,0,370,371,5,52,
0,0,371,372,3,46,23,0,372,69,1,0,0,0,373,374,5,54,0,0,374,375,5,62,0,0,375,
376,3,44,22,0,376,71,1,0,0,0,377,379,5,55,0,0,378,380,3,74,37,0,379,378,
1,0,0,0,379,380,1,0,0,0,380,73,1,0,0,0,381,396,5,14,0,0,382,384,5,65,0,0,
383,382,1,0,0,0,383,384,1,0,0,0,384,385,1,0,0,0,385,393,3,130,65,0,386,388,
5,18,0,0,387,389,5,65,0,0,388,387,1,0,0,0,388,389,1,0,0,0,389,390,1,0,0,
0,390,392,3,130,65,0,391,386,1,0,0,0,392,395,1,0,0,0,393,391,1,0,0,0,393,
394,1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,396,383,1,0,0,0,396,397,1,0,
0,0,397,398,1,0,0,0,398,401,5,15,0,0,399,400,5,24,0,0,400,402,3,18,9,0,401,
399,1,0,0,0,401,402,1,0,0,0,402,75,1,0,0,0,403,404,3,50,25,0,404,405,5,24,
0,0,405,406,3,44,22,0,406,77,1,0,0,0,407,409,3,18,9,0,408,410,3,80,40,0,
409,408,1,0,0,0,409,410,1,0,0,0,410,79,1,0,0,0,411,412,5,21,0,0,412,413,
3,82,41,0,413,414,5,22,0,0,414,417,1,0,0,0,415,417,5,26,0,0,416,411,1,0,
0,0,416,415,1,0,0,0,417,422,1,0,0,0,418,419,5,1,0,0,419,421,3,0,0,0,420,
418,1,0,0,0,421,424,1,0,0,0,422,420,1,0,0,0,422,423,1,0,0,0,423,426,1,0,
0,0,424,422,1,0,0,0,425,416,1,0,0,0,426,427,1,0,0,0,427,425,1,0,0,0,427,
428,1,0,0,0,428,81,1,0,0,0,429,434,3,84,42,0,430,431,5,18,0,0,431,433,3,
84,42,0,432,430,1,0,0,0,433,436,1,0,0,0,434,432,1,0,0,0,434,435,1,0,0,0,
435,83,1,0,0,0,436,434,1,0,0,0,437,441,3,86,43,0,438,439,3,24,12,0,439,440,
3,86,43,0,440,442,1,0,0,0,441,438,1,0,0,0,441,442,1,0,0,0,442,85,1,0,0,0,
443,447,5,9,0,0,444,445,5,10,0,0,445,447,6,43,-1,0,446,443,1,0,0,0,446,444,
1,0,0,0,446,447,1,0,0,0,447,448,1,0,0,0,448,454,3,88,44,0,449,450,3,28,14,
0,450,451,3,88,44,0,451,453,1,0,0,0,452,449,1,0,0,0,453,456,1,0,0,0,454,
452,1,0,0,0,454,455,1,0,0,0,455,87,1,0,0,0,456,454,1,0,0,0,457,463,3,90,
45,0,458,459,3,32,16,0,459,460,3,90,45,0,460,462,1,0,0,0,461,458,1,0,0,0,
462,465,1,0,0,0,463,461,1,0,0,0,463,464,1,0,0,0,464,89,1,0,0,0,465,463,1,
0,0,0,466,480,3,2,1,0,467,480,3,16,8,0,468,480,3,92,46,0,469,470,5,14,0,
0,470,471,3,84,42,0,471,472,5,15,0,0,472,480,1,0,0,0,473,477,5,51,0,0,474,
475,5,16,0,0,475,477,6,45,-1,0,476,473,1,0,0,0,476,474,1,0,0,0,477,478,1,
0,0,0,478,480,3,90,45,0,479,466,1,0,0,0,479,467,1,0,0,0,479,468,1,0,0,0,
479,469,1,0,0,0,479,476,1,0,0,0,480,91,1,0,0,0,481,493,3,38,19,0,482,490,
3,18,9,0,483,491,3,38,19,0,484,486,3,80,40,0,485,484,1,0,0,0,485,486,1,0,
0,0,486,488,1,0,0,0,487,489,3,94,47,0,488,487,1,0,0,0,488,489,1,0,0,0,489,
491,1,0,0,0,490,483,1,0,0,0,490,485,1,0,0,0,491,493,1,0,0,0,492,481,1,0,
0,0,492,482,1,0,0,0,493,93,1,0,0,0,494,496,5,14,0,0,495,497,3,82,41,0,496,
495,1,0,0,0,496,497,1,0,0,0,497,498,1,0,0,0,498,499,5,15,0,0,499,95,1,0,
0,0,500,514,3,98,49,0,501,514,3,102,51,0,502,514,3,104,52,0,503,514,3,108,
54,0,504,514,3,110,55,0,505,514,3,114,57,0,506,514,3,112,56,0,507,514,3,
116,58,0,508,514,5,40,0,0,509,511,5,59,0,0,510,512,3,84,42,0,511,510,1,0,
0,0,511,512,1,0,0,0,512,514,1,0,0,0,513,500,1,0,0,0,513,501,1,0,0,0,513,
502,1,0,0,0,513,503,1,0,0,0,513,504,1,0,0,0,513,505,1,0,0,0,513,506,1,0,
0,0,513,507,1,0,0,0,513,508,1,0,0,0,513,509,1,0,0,0,513,514,1,0,0,0,514,
97,1,0,0,0,515,521,3,78,39,0,516,517,5,27,0,0,517,522,3,84,42,0,518,520,
3,94,47,0,519,518,1,0,0,0,519,520,1,0,0,0,520,522,1,0,0,0,521,516,1,0,0,
0,521,519,1,0,0,0,522,99,1,0,0,0,523,528,3,96,48,0,524,525,5,23,0,0,525,
527,3,96,48,0,526,524,1,0,0,0,527,530,1,0,0,0,528,526,1,0,0,0,528,529,1,
0,0,0,529,101,1,0,0,0,530,528,1,0,0,0,531,532,5,44,0,0,532,533,3,84,42,0,
533,534,5,61,0,0,534,542,3,100,50,0,535,536,5,38,0,0,536,537,3,84,42,0,537,
538,5,61,0,0,538,539,3,100,50,0,539,541,1,0,0,0,540,535,1,0,0,0,541,544,
1,0,0,0,542,540,1,0,0,0,542,543,1,0,0,0,543,547,1,0,0,0,544,542,1,0,0,0,
545,546,5,37,0,0,546,548,3,100,50,0,547,545,1,0,0,0,547,548,1,0,0,0,548,
549,1,0,0,0,549,550,5,39,0,0,550,103,1,0,0,0,551,552,5,32,0,0,552,553,3,
84,42,0,553,554,5,52,0,0,554,559,3,106,53,0,555,556,5,25,0,0,556,558,3,106,
53,0,557,555,1,0,0,0,558,561,1,0,0,0,559,557,1,0,0,0,559,560,1,0,0,0,560,
564,1,0,0,0,561,559,1,0,0,0,562,563,5,37,0,0,563,565,3,100,50,0,564,562,
1,0,0,0,564,565,1,0,0,0,565,566,1,0,0,0,566,567,5,39,0,0,567,105,1,0,0,0,
568,569,3,64,32,0,569,570,5,24,0,0,570,571,3,100,50,0,571,107,1,0,0,0,572,
573,5,66,0,0,573,574,3,84,42,0,574,575,5,36,0,0,575,576,3,100,50,0,576,577,
5,39,0,0,577,109,1,0,0,0,578,579,5,58,0,0,579,580,3,100,50,0,580,581,5,64,
0,0,581,582,3,84,42,0,582,111,1,0,0,0,583,584,5,42,0,0,584,585,3,0,0,0,585,
586,5,27,0,0,586,587,3,84,42,0,587,588,5,62,0,0,588,591,3,84,42,0,589,590,
5,31,0,0,590,592,3,22,11,0,591,589,1,0,0,0,591,592,1,0,0,0,592,593,1,0,0,
0,593,594,5,36,0,0,594,595,3,100,50,0,595,596,5,39,0,0,596,113,1,0,0,0,597,
598,5,48,0,0,598,599,3,100,50,0,599,600,5,39,0,0,600,115,1,0,0,0,601,602,
5,67,0,0,602,603,3,78,39,0,603,604,5,36,0,0,604,605,3,100,50,0,605,606,5,
39,0,0,606,117,1,0,0,0,607,608,3,120,60,0,608,609,5,23,0,0,609,610,3,122,
61,0,610,611,3,0,0,0,611,119,1,0,0,0,612,613,5,55,0,0,613,615,3,0,0,0,614,
616,3,126,63,0,615,614,1,0,0,0,615,616,1,0,0,0,616,121,1,0,0,0,617,619,3,
124,62,0,618,617,1,0,0,0,619,622,1,0,0,0,620,618,1,0,0,0,620,621,1,0,0,0,
621,625,1,0,0,0,622,620,1,0,0,0,623,624,5,30,0,0,624,626,3,100,50,0,625,
623,1,0,0,0,625,626,1,0,0,0,626,627,1,0,0,0,627,628,5,39,0,0,628,123,1,0,
0,0,629,635,5,33,0,0,630,631,3,20,10,0,631,632,5,23,0,0,632,634,1,0,0,0,
633,630,1,0,0,0,634,637,1,0,0,0,635,633,1,0,0,0,635,636,1,0,0,0,636,663,
1,0,0,0,637,635,1,0,0,0,638,644,5,63,0,0,639,640,3,42,21,0,640,641,5,23,
0,0,641,643,1,0,0,0,642,639,1,0,0,0,643,646,1,0,0,0,644,642,1,0,0,0,644,
645,1,0,0,0,645,663,1,0,0,0,646,644,1,0,0,0,647,653,5,65,0,0,648,649,3,76,
38,0,649,650,5,23,0,0,650,652,1,0,0,0,651,648,1,0,0,0,652,655,1,0,0,0,653,
651,1,0,0,0,653,654,1,0,0,0,654,663,1,0,0,0,655,653,1,0,0,0,656,657,3,118,
59,0,657,658,5,23,0,0,658,663,1,0,0,0,659,660,3,132,66,0,660,661,5,23,0,
0,661,663,1,0,0,0,662,629,1,0,0,0,662,638,1,0,0,0,662,647,1,0,0,0,662,656,
1,0,0,0,662,659,1,0,0,0,663,125,1,0,0,0,664,673,5,14,0,0,665,670,3,128,64,
0,666,667,5,23,0,0,667,669,3,128,64,0,668,666,1,0,0,0,669,672,1,0,0,0,670,
668,1,0,0,0,670,671,1,0,0,0,671,674,1,0,0,0,672,670,1,0,0,0,673,665,1,0,
0,0,673,674,1,0,0,0,674,675,1,0,0,0,675,678,5,15,0,0,676,677,5,24,0,0,677,
679,3,18,9,0,678,676,1,0,0,0,678,679,1,0,0,0,679,127,1,0,0,0,680,682,5,65,
0,0,681,680,1,0,0,0,681,682,1,0,0,0,682,683,1,0,0,0,683,684,3,50,25,0,684,
685,5,24,0,0,685,686,3,130,65,0,686,129,1,0,0,0,687,688,5,29,0,0,688,690,
5,52,0,0,689,687,1,0,0,0,689,690,1,0,0,0,690,691,1,0,0,0,691,692,3,18,9,
0,692,131,1,0,0,0,693,694,5,50,0,0,694,696,3,0,0,0,695,697,3,134,67,0,696,
695,1,0,0,0,696,697,1,0,0,0,697,698,1,0,0,0,698,702,5,23,0,0,699,701,3,138,
69,0,700,699,1,0,0,0,701,704,1,0,0,0,702,700,1,0,0,0,702,703,1,0,0,0,703,
706,1,0,0,0,704,702,1,0,0,0,705,707,3,136,68,0,706,705,1,0,0,0,706,707,1,
0,0,0,707,708,1,0,0,0,708,709,3,122,61,0,709,710,3,0,0,0,710,133,1,0,0,0,
711,712,5,21,0,0,712,713,3,22,11,0,713,714,5,22,0,0,714,135,1,0,0,0,715,
717,5,41,0,0,716,718,5,56,0,0,717,716,1,0,0,0,717,718,1,0,0,0,718,719,1,
0,0,0,719,720,3,50,25,0,720,721,5,23,0,0,721,137,1,0,0,0,722,723,5,43,0,
0,723,725,3,0,0,0,724,722,1,0,0,0,724,725,1,0,0,0,725,726,1,0,0,0,726,727,
5,46,0,0,727,728,3,50,25,0,728,729,5,23,0,0,729,139,1,0,0,0,730,731,5,34,
0,0,731,732,5,50,0,0,732,733,3,0,0,0,733,737,5,23,0,0,734,736,3,138,69,0,
735,734,1,0,0,0,736,739,1,0,0,0,737,735,1,0,0,0,737,738,1,0,0,0,738,741,
1,0,0,0,739,737,1,0,0,0,740,742,3,136,68,0,741,740,1,0,0,0,741,742,1,0,0,
0,742,746,1,0,0,0,743,745,3,142,71,0,744,743,1,0,0,0,745,748,1,0,0,0,746,
744,1,0,0,0,746,747,1,0,0,0,747,749,1,0,0,0,748,746,1,0,0,0,749,750,5,39,
0,0,750,751,3,0,0,0,751,752,5,1,0,0,752,141,1,0,0,0,753,759,5,33,0,0,754,
755,3,20,10,0,755,756,5,23,0,0,756,758,1,0,0,0,757,754,1,0,0,0,758,761,1,
0,0,0,759,757,1,0,0,0,759,760,1,0,0,0,760,788,1,0,0,0,761,759,1,0,0,0,762,
772,5,63,0,0,763,766,3,0,0,0,764,765,5,2,0,0,765,767,3,44,22,0,766,764,1,
0,0,0,766,767,1,0,0,0,767,768,1,0,0,0,768,769,5,23,0,0,769,771,1,0,0,0,770,
763,1,0,0,0,771,774,1,0,0,0,772,770,1,0,0,0,772,773,1,0,0,0,773,788,1,0,
0,0,774,772,1,0,0,0,775,781,5,65,0,0,776,777,3,76,38,0,777,778,5,23,0,0,
778,780,1,0,0,0,779,776,1,0,0,0,780,783,1,0,0,0,781,779,1,0,0,0,781,782,
1,0,0,0,782,788,1,0,0,0,783,781,1,0,0,0,784,785,3,120,60,0,785,786,5,23,
0,0,786,788,1,0,0,0,787,753,1,0,0,0,787,762,1,0,0,0,787,775,1,0,0,0,787,
784,1,0,0,0,788,143,1,0,0,0,789,790,5,50,0,0,790,792,3,0,0,0,791,793,3,134,
67,0,792,791,1,0,0,0,792,793,1,0,0,0,793,794,1,0,0,0,794,798,5,23,0,0,795,
797,3,138,69,0,796,795,1,0,0,0,797,800,1,0,0,0,798,796,1,0,0,0,798,799,1,
0,0,0,799,801,1,0,0,0,800,798,1,0,0,0,801,802,3,122,61,0,802,803,3,0,0,0,
803,804,5,1,0,0,804,145,1,0,0,0,805,811,3,140,70,0,806,808,5,45,0,0,807,
806,1,0,0,0,807,808,1,0,0,0,808,809,1,0,0,0,809,811,3,144,72,0,810,805,1,
0,0,0,810,807,1,0,0,0,811,147,1,0,0,0,86,171,182,193,198,206,217,232,235,
240,242,250,253,260,272,277,288,303,318,330,333,341,346,350,361,367,379,
383,388,393,396,401,409,416,422,427,434,441,446,454,463,476,479,485,488,
490,492,496,511,513,519,521,528,542,547,559,564,591,615,620,625,635,644,
653,662,670,673,678,681,689,696,702,706,717,724,737,741,746,759,766,772,
781,787,792,798,807,810];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class m2pim4Parser extends antlr4.Parser {

    static grammarFileName = "m2pim4.g4";
    static literalNames = [ null, "'.'", "'='", "'#'", "'<>'", "'<'", "'<='", 
                            "'>'", "'>='", "'+'", "'-'", "'*'", "'/'", "'&'", 
                            "'('", "')'", "'~'", "'{'", "','", "'}'", "'..'", 
                            "'['", "']'", "';'", "':'", "'|'", "'^'", "':='", 
                            "'AND'", "'ARRAY'", "'BEGIN'", "'BY'", "'CASE'", 
                            "'CONST'", "'DEFINITION'", "'DIV'", "'DO'", 
                            "'ELSE'", "'ELSIF'", "'END'", "'EXIT'", "'EXPORT'", 
                            "'FOR'", "'FROM'", "'IF'", "'IMPLEMENTATION'", 
                            "'IMPORT'", "'IN'", "'LOOP'", "'MOD'", "'MODULE'", 
                            "'NOT'", "'OF'", "'OR'", "'POINTER'", "'PROCEDURE'", 
                            "'QUALIFIED'", "'RECORD'", "'REPEAT'", "'RETURN'", 
                            "'SET'", "'THEN'", "'TO'", "'TYPE'", "'UNTIL'", 
                            "'VAR'", "'WHILE'", "'WITH'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, "AND", "ARRAY", "BEGIN", 
                             "BY", "CASE", "CONST", "DEFINITION", "DIV", 
                             "DO", "ELSE", "ELSIF", "END", "EXIT", "EXPORT", 
                             "FOR", "FROM", "IF", "IMPLEMENTATION", "IMPORT", 
                             "IN", "LOOP", "MOD", "MODULE", "NOT", "OF", 
                             "OR", "POINTER", "PROCEDURE", "QUALIFIED", 
                             "RECORD", "REPEAT", "RETURN", "SET", "THEN", 
                             "TO", "TYPE", "UNTIL", "VAR", "WHILE", "WITH", 
                             "IDENT", "INTEGER", "REAL", "STRING", "DIGIT", 
                             "OCTAL_DIGIT", "HEX_DIGIT", "SCALE_FACTOR", 
                             "COMMENT", "WS" ];
    static ruleNames = [ "ident", "number", "integer", "real", "scaleFactor", 
                         "hexDigit", "digit", "octalDigit", "string", "qualident", 
                         "constantDeclaration", "constExpression", "relation", 
                         "simpleConstExpr", "addOperator", "constTerm", 
                         "mulOperator", "constFactor", "setOrQualident", 
                         "set_", "element", "typeDeclaration", "type_", 
                         "simpleType", "enumeration", "identList", "subrangeType", 
                         "arrayType", "recordType", "fieldListSequence", 
                         "fieldList", "variant", "caseLabelList", "caseLabels", 
                         "setType", "pointerType", "procedureType", "formalTypeList", 
                         "variableDeclaration", "designator", "designatorTail", 
                         "expList", "expression", "simpleExpression", "term", 
                         "factor", "setOrDesignatorOrProcCall", "actualParameters", 
                         "statement", "assignmentOrProcCall", "statementSequence", 
                         "ifStatement", "caseStatement", "ccase", "whileStatement", 
                         "repeatStatement", "forStatement", "loopStatement", 
                         "withStatement", "procedureDeclaration", "procedureHeading", 
                         "block", "declaration", "formalParameters", "fpSection", 
                         "formalType", "moduleDeclaration", "priority", 
                         "exportList", "importList", "definitionModule", 
                         "definition", "programModule", "compilationUnit" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = m2pim4Parser.ruleNames;
        this.literalNames = m2pim4Parser.literalNames;
        this.symbolicNames = m2pim4Parser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, m2pim4Parser.RULE_ident);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(m2pim4Parser.IDENT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, m2pim4Parser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 150;
	        _la = this._input.LA(1);
	        if(!(_la===m2pim4Parser.INTEGER || _la===m2pim4Parser.REAL)) {
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



	integer() {
	    let localctx = new IntegerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, m2pim4Parser.RULE_integer);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 152;
	        this.match(m2pim4Parser.INTEGER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	real() {
	    let localctx = new RealContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, m2pim4Parser.RULE_real);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(m2pim4Parser.REAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scaleFactor() {
	    let localctx = new ScaleFactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, m2pim4Parser.RULE_scaleFactor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 156;
	        this.match(m2pim4Parser.SCALE_FACTOR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hexDigit() {
	    let localctx = new HexDigitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, m2pim4Parser.RULE_hexDigit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 158;
	        this.match(m2pim4Parser.HEX_DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	digit() {
	    let localctx = new DigitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, m2pim4Parser.RULE_digit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(m2pim4Parser.DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	octalDigit() {
	    let localctx = new OctalDigitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, m2pim4Parser.RULE_octalDigit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(m2pim4Parser.OCTAL_DIGIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 16, m2pim4Parser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(m2pim4Parser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qualident() {
	    let localctx = new QualidentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, m2pim4Parser.RULE_qualident);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.ident();
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__0) {
	            this.state = 167;
	            this.match(m2pim4Parser.T__0);
	            this.state = 168;
	            this.ident();
	            this.state = 173;
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



	constantDeclaration() {
	    let localctx = new ConstantDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, m2pim4Parser.RULE_constantDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.ident();
	        this.state = 175;
	        this.match(m2pim4Parser.T__1);
	        this.state = 176;
	        this.constExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constExpression() {
	    let localctx = new ConstExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, m2pim4Parser.RULE_constExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.simpleConstExpr();
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__1) | (1 << m2pim4Parser.T__2) | (1 << m2pim4Parser.T__3) | (1 << m2pim4Parser.T__4) | (1 << m2pim4Parser.T__5) | (1 << m2pim4Parser.T__6) | (1 << m2pim4Parser.T__7))) !== 0) || _la===m2pim4Parser.IN) {
	            this.state = 179;
	            this.relation();
	            this.state = 180;
	            this.simpleConstExpr();
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



	relation() {
	    let localctx = new RelationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, m2pim4Parser.RULE_relation);
	    try {
	        this.state = 193;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.T__1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.match(m2pim4Parser.T__1);
	            break;
	        case m2pim4Parser.T__2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.match(m2pim4Parser.T__2);
	            break;
	        case m2pim4Parser.T__3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 186;
	            this.match(m2pim4Parser.T__3);
	            break;
	        case m2pim4Parser.T__4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 187;
	            this.match(m2pim4Parser.T__4);
	            break;
	        case m2pim4Parser.T__5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 188;
	            this.match(m2pim4Parser.T__5);
	            break;
	        case m2pim4Parser.T__6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 189;
	            this.match(m2pim4Parser.T__6);
	            break;
	        case m2pim4Parser.T__7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 190;
	            this.match(m2pim4Parser.T__7);
	            break;
	        case m2pim4Parser.IN:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 191;
	            this.match(m2pim4Parser.IN);
	                   
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



	simpleConstExpr() {
	    let localctx = new SimpleConstExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, m2pim4Parser.RULE_simpleConstExpr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case m2pim4Parser.T__8:
	        	this.state = 195;
	        	this.match(m2pim4Parser.T__8);
	        	break;
	        case m2pim4Parser.T__9:
	        	this.state = 196;
	        	this.match(m2pim4Parser.T__9);
	        	       
	        	break;
	        case m2pim4Parser.T__13:
	        case m2pim4Parser.T__15:
	        case m2pim4Parser.T__16:
	        case m2pim4Parser.NOT:
	        case m2pim4Parser.IDENT:
	        case m2pim4Parser.INTEGER:
	        case m2pim4Parser.REAL:
	        case m2pim4Parser.STRING:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 200;
	        this.constTerm();
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__8 || _la===m2pim4Parser.T__9 || _la===m2pim4Parser.OR) {
	            this.state = 201;
	            this.addOperator();
	            this.state = 202;
	            this.constTerm();
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



	addOperator() {
	    let localctx = new AddOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, m2pim4Parser.RULE_addOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        _la = this._input.LA(1);
	        if(!(_la===m2pim4Parser.T__8 || _la===m2pim4Parser.T__9 || _la===m2pim4Parser.OR)) {
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



	constTerm() {
	    let localctx = new ConstTermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, m2pim4Parser.RULE_constTerm);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.constFactor();
	        this.state = 217;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la===m2pim4Parser.DIV || _la===m2pim4Parser.MOD) {
	            this.state = 212;
	            this.mulOperator();
	            this.state = 213;
	            this.constFactor();
	            this.state = 219;
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



	mulOperator() {
	    let localctx = new MulOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, m2pim4Parser.RULE_mulOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la===m2pim4Parser.DIV || _la===m2pim4Parser.MOD)) {
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



	constFactor() {
	    let localctx = new ConstFactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, m2pim4Parser.RULE_constFactor);
	    try {
	        this.state = 235;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.INTEGER:
	        case m2pim4Parser.REAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 222;
	            this.number();
	            break;
	        case m2pim4Parser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 223;
	            this.string();
	            break;
	        case m2pim4Parser.T__16:
	        case m2pim4Parser.IDENT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 224;
	            this.setOrQualident();
	            break;
	        case m2pim4Parser.T__13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 225;
	            this.match(m2pim4Parser.T__13);
	            this.state = 226;
	            this.constExpression();
	            this.state = 227;
	            this.match(m2pim4Parser.T__14);
	            break;
	        case m2pim4Parser.T__15:
	        case m2pim4Parser.NOT:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 232;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case m2pim4Parser.NOT:
	                this.state = 229;
	                this.match(m2pim4Parser.NOT);
	                break;
	            case m2pim4Parser.T__15:
	                this.state = 230;
	                this.match(m2pim4Parser.T__15);
	                       
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 234;
	            this.constFactor();
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



	setOrQualident() {
	    let localctx = new SetOrQualidentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, m2pim4Parser.RULE_setOrQualident);
	    var _la = 0; // Token type
	    try {
	        this.state = 242;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.T__16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 237;
	            this.set_();
	            break;
	        case m2pim4Parser.IDENT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 238;
	            this.qualident();
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===m2pim4Parser.T__16) {
	                this.state = 239;
	                this.set_();
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



	set_() {
	    let localctx = new Set_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, m2pim4Parser.RULE_set_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.match(m2pim4Parser.T__16);
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
	            this.state = 245;
	            this.element();
	            this.state = 250;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.T__17) {
	                this.state = 246;
	                this.match(m2pim4Parser.T__17);
	                this.state = 247;
	                this.element();
	                this.state = 252;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 255;
	        this.match(m2pim4Parser.T__18);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 40, m2pim4Parser.RULE_element);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.constExpression();
	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__19) {
	            this.state = 258;
	            this.match(m2pim4Parser.T__19);
	            this.state = 259;
	            this.constExpression();
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



	typeDeclaration() {
	    let localctx = new TypeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, m2pim4Parser.RULE_typeDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.ident();
	        this.state = 263;
	        this.match(m2pim4Parser.T__1);
	        this.state = 264;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 44, m2pim4Parser.RULE_type_);
	    try {
	        this.state = 272;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.T__13:
	        case m2pim4Parser.T__20:
	        case m2pim4Parser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            this.simpleType();
	            break;
	        case m2pim4Parser.ARRAY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 267;
	            this.arrayType();
	            break;
	        case m2pim4Parser.RECORD:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 268;
	            this.recordType();
	            break;
	        case m2pim4Parser.SET:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 269;
	            this.setType();
	            break;
	        case m2pim4Parser.POINTER:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 270;
	            this.pointerType();
	            break;
	        case m2pim4Parser.PROCEDURE:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 271;
	            this.procedureType();
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



	simpleType() {
	    let localctx = new SimpleTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, m2pim4Parser.RULE_simpleType);
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.IDENT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.qualident();
	            break;
	        case m2pim4Parser.T__13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 275;
	            this.enumeration();
	            break;
	        case m2pim4Parser.T__20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 276;
	            this.subrangeType();
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



	enumeration() {
	    let localctx = new EnumerationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, m2pim4Parser.RULE_enumeration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(m2pim4Parser.T__13);
	        this.state = 280;
	        this.identList();
	        this.state = 281;
	        this.match(m2pim4Parser.T__14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identList() {
	    let localctx = new IdentListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, m2pim4Parser.RULE_identList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.ident();
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__17) {
	            this.state = 284;
	            this.match(m2pim4Parser.T__17);
	            this.state = 285;
	            this.ident();
	            this.state = 290;
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



	subrangeType() {
	    let localctx = new SubrangeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, m2pim4Parser.RULE_subrangeType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 291;
	        this.match(m2pim4Parser.T__20);
	        this.state = 292;
	        this.constExpression();
	        this.state = 293;
	        this.match(m2pim4Parser.T__19);
	        this.state = 294;
	        this.constExpression();
	        this.state = 295;
	        this.match(m2pim4Parser.T__21);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayType() {
	    let localctx = new ArrayTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, m2pim4Parser.RULE_arrayType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.match(m2pim4Parser.ARRAY);
	        this.state = 298;
	        this.simpleType();
	        this.state = 303;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__17) {
	            this.state = 299;
	            this.match(m2pim4Parser.T__17);
	            this.state = 300;
	            this.simpleType();
	            this.state = 305;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 306;
	        this.match(m2pim4Parser.OF);
	        this.state = 307;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	recordType() {
	    let localctx = new RecordTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, m2pim4Parser.RULE_recordType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(m2pim4Parser.RECORD);
	        this.state = 310;
	        this.fieldListSequence();
	        this.state = 311;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldListSequence() {
	    let localctx = new FieldListSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, m2pim4Parser.RULE_fieldListSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
	        this.fieldList();
	        this.state = 318;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__22) {
	            this.state = 314;
	            this.match(m2pim4Parser.T__22);
	            this.state = 315;
	            this.fieldList();
	            this.state = 320;
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



	fieldList() {
	    let localctx = new FieldListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, m2pim4Parser.RULE_fieldList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case m2pim4Parser.IDENT:
	        	this.state = 321;
	        	this.identList();
	        	this.state = 322;
	        	this.match(m2pim4Parser.T__23);
	        	this.state = 323;
	        	this.type_();
	        	break;
	        case m2pim4Parser.CASE:
	        	this.state = 325;
	        	this.match(m2pim4Parser.CASE);
	        	this.state = 326;
	        	this.ident();
	        	this.state = 333;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if(_la===m2pim4Parser.T__0 || _la===m2pim4Parser.T__23) {
	        	    this.state = 330;
	        	    this._errHandler.sync(this);
	        	    switch(this._input.LA(1)) {
	        	    case m2pim4Parser.T__23:
	        	        this.state = 327;
	        	        this.match(m2pim4Parser.T__23);
	        	        break;
	        	    case m2pim4Parser.T__0:
	        	        this.state = 328;
	        	        this.match(m2pim4Parser.T__0);
	        	               
	        	        break;
	        	    default:
	        	        throw new antlr4.error.NoViableAltException(this);
	        	    }
	        	    this.state = 332;
	        	    this.qualident();
	        	}

	        	this.state = 335;
	        	this.match(m2pim4Parser.OF);
	        	this.state = 336;
	        	this.variant();
	        	this.state = 341;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	while(_la===m2pim4Parser.T__24) {
	        	    this.state = 337;
	        	    this.match(m2pim4Parser.T__24);
	        	    this.state = 338;
	        	    this.variant();
	        	    this.state = 343;
	        	    this._errHandler.sync(this);
	        	    _la = this._input.LA(1);
	        	}
	        	this.state = 346;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if(_la===m2pim4Parser.ELSE) {
	        	    this.state = 344;
	        	    this.match(m2pim4Parser.ELSE);
	        	    this.state = 345;
	        	    this.fieldListSequence();
	        	}

	        	this.state = 348;
	        	this.match(m2pim4Parser.END);
	        	break;
	        case m2pim4Parser.T__22:
	        case m2pim4Parser.T__24:
	        case m2pim4Parser.ELSE:
	        case m2pim4Parser.END:
	        	break;
	        default:
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



	variant() {
	    let localctx = new VariantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, m2pim4Parser.RULE_variant);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.caseLabelList();
	        this.state = 353;
	        this.match(m2pim4Parser.T__23);
	        this.state = 354;
	        this.fieldListSequence();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseLabelList() {
	    let localctx = new CaseLabelListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, m2pim4Parser.RULE_caseLabelList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.caseLabels();
	        this.state = 361;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__17) {
	            this.state = 357;
	            this.match(m2pim4Parser.T__17);
	            this.state = 358;
	            this.caseLabels();
	            this.state = 363;
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



	caseLabels() {
	    let localctx = new CaseLabelsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, m2pim4Parser.RULE_caseLabels);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.constExpression();
	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__19) {
	            this.state = 365;
	            this.match(m2pim4Parser.T__19);
	            this.state = 366;
	            this.constExpression();
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



	setType() {
	    let localctx = new SetTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, m2pim4Parser.RULE_setType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(m2pim4Parser.SET);
	        this.state = 370;
	        this.match(m2pim4Parser.OF);
	        this.state = 371;
	        this.simpleType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pointerType() {
	    let localctx = new PointerTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, m2pim4Parser.RULE_pointerType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(m2pim4Parser.POINTER);
	        this.state = 374;
	        this.match(m2pim4Parser.TO);
	        this.state = 375;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureType() {
	    let localctx = new ProcedureTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, m2pim4Parser.RULE_procedureType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.match(m2pim4Parser.PROCEDURE);
	        this.state = 379;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__13) {
	            this.state = 378;
	            this.formalTypeList();
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



	formalTypeList() {
	    let localctx = new FormalTypeListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, m2pim4Parser.RULE_formalTypeList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.match(m2pim4Parser.T__13);
	        this.state = 396;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.ARRAY || _la===m2pim4Parser.VAR || _la===m2pim4Parser.IDENT) {
	            this.state = 383;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===m2pim4Parser.VAR) {
	                this.state = 382;
	                this.match(m2pim4Parser.VAR);
	            }

	            this.state = 385;
	            this.formalType();
	            this.state = 393;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.T__17) {
	                this.state = 386;
	                this.match(m2pim4Parser.T__17);
	                this.state = 388;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===m2pim4Parser.VAR) {
	                    this.state = 387;
	                    this.match(m2pim4Parser.VAR);
	                }

	                this.state = 390;
	                this.formalType();
	                this.state = 395;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 398;
	        this.match(m2pim4Parser.T__14);
	        this.state = 401;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__23) {
	            this.state = 399;
	            this.match(m2pim4Parser.T__23);
	            this.state = 400;
	            this.qualident();
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



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, m2pim4Parser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.identList();
	        this.state = 404;
	        this.match(m2pim4Parser.T__23);
	        this.state = 405;
	        this.type_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	designator() {
	    let localctx = new DesignatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, m2pim4Parser.RULE_designator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.qualident();
	        this.state = 409;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__20 || _la===m2pim4Parser.T__25) {
	            this.state = 408;
	            this.designatorTail();
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



	designatorTail() {
	    let localctx = new DesignatorTailContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, m2pim4Parser.RULE_designatorTail);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 416;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case m2pim4Parser.T__20:
	                this.state = 411;
	                this.match(m2pim4Parser.T__20);
	                this.state = 412;
	                this.expList();
	                this.state = 413;
	                this.match(m2pim4Parser.T__21);
	                break;
	            case m2pim4Parser.T__25:
	                this.state = 415;
	                this.match(m2pim4Parser.T__25);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 422;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.T__0) {
	                this.state = 418;
	                this.match(m2pim4Parser.T__0);
	                this.state = 419;
	                this.ident();
	                this.state = 424;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 427; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===m2pim4Parser.T__20 || _la===m2pim4Parser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expList() {
	    let localctx = new ExpListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, m2pim4Parser.RULE_expList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.expression();
	        this.state = 434;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__17) {
	            this.state = 430;
	            this.match(m2pim4Parser.T__17);
	            this.state = 431;
	            this.expression();
	            this.state = 436;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, m2pim4Parser.RULE_expression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 437;
	        this.simpleExpression();
	        this.state = 441;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__1) | (1 << m2pim4Parser.T__2) | (1 << m2pim4Parser.T__3) | (1 << m2pim4Parser.T__4) | (1 << m2pim4Parser.T__5) | (1 << m2pim4Parser.T__6) | (1 << m2pim4Parser.T__7))) !== 0) || _la===m2pim4Parser.IN) {
	            this.state = 438;
	            this.relation();
	            this.state = 439;
	            this.simpleExpression();
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



	simpleExpression() {
	    let localctx = new SimpleExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, m2pim4Parser.RULE_simpleExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 446;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case m2pim4Parser.T__8:
	        	this.state = 443;
	        	this.match(m2pim4Parser.T__8);
	        	break;
	        case m2pim4Parser.T__9:
	        	this.state = 444;
	        	this.match(m2pim4Parser.T__9);
	        	       
	        	break;
	        case m2pim4Parser.T__13:
	        case m2pim4Parser.T__15:
	        case m2pim4Parser.T__16:
	        case m2pim4Parser.NOT:
	        case m2pim4Parser.IDENT:
	        case m2pim4Parser.INTEGER:
	        case m2pim4Parser.REAL:
	        case m2pim4Parser.STRING:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 448;
	        this.term();
	        this.state = 454;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__8 || _la===m2pim4Parser.T__9 || _la===m2pim4Parser.OR) {
	            this.state = 449;
	            this.addOperator();
	            this.state = 450;
	            this.term();
	            this.state = 456;
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, m2pim4Parser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this.factor();
	        this.state = 463;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__10) | (1 << m2pim4Parser.T__11) | (1 << m2pim4Parser.T__12) | (1 << m2pim4Parser.AND))) !== 0) || _la===m2pim4Parser.DIV || _la===m2pim4Parser.MOD) {
	            this.state = 458;
	            this.mulOperator();
	            this.state = 459;
	            this.factor();
	            this.state = 465;
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



	factor() {
	    let localctx = new FactorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, m2pim4Parser.RULE_factor);
	    try {
	        this.state = 479;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.INTEGER:
	        case m2pim4Parser.REAL:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 466;
	            this.number();
	            break;
	        case m2pim4Parser.STRING:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 467;
	            this.string();
	            break;
	        case m2pim4Parser.T__16:
	        case m2pim4Parser.IDENT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 468;
	            this.setOrDesignatorOrProcCall();
	            break;
	        case m2pim4Parser.T__13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 469;
	            this.match(m2pim4Parser.T__13);
	            this.state = 470;
	            this.expression();
	            this.state = 471;
	            this.match(m2pim4Parser.T__14);
	            break;
	        case m2pim4Parser.T__15:
	        case m2pim4Parser.NOT:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 476;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case m2pim4Parser.NOT:
	                this.state = 473;
	                this.match(m2pim4Parser.NOT);
	                break;
	            case m2pim4Parser.T__15:
	                this.state = 474;
	                this.match(m2pim4Parser.T__15);
	                       
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 478;
	            this.factor();
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



	setOrDesignatorOrProcCall() {
	    let localctx = new SetOrDesignatorOrProcCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, m2pim4Parser.RULE_setOrDesignatorOrProcCall);
	    var _la = 0; // Token type
	    try {
	        this.state = 492;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.T__16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 481;
	            this.set_();
	            break;
	        case m2pim4Parser.IDENT:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 482;
	            this.qualident();
	            this.state = 490;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case m2pim4Parser.T__16:
	                this.state = 483;
	                this.set_();
	                break;
	            case m2pim4Parser.T__1:
	            case m2pim4Parser.T__2:
	            case m2pim4Parser.T__3:
	            case m2pim4Parser.T__4:
	            case m2pim4Parser.T__5:
	            case m2pim4Parser.T__6:
	            case m2pim4Parser.T__7:
	            case m2pim4Parser.T__8:
	            case m2pim4Parser.T__9:
	            case m2pim4Parser.T__10:
	            case m2pim4Parser.T__11:
	            case m2pim4Parser.T__12:
	            case m2pim4Parser.T__13:
	            case m2pim4Parser.T__14:
	            case m2pim4Parser.T__17:
	            case m2pim4Parser.T__20:
	            case m2pim4Parser.T__21:
	            case m2pim4Parser.T__22:
	            case m2pim4Parser.T__24:
	            case m2pim4Parser.T__25:
	            case m2pim4Parser.AND:
	            case m2pim4Parser.BY:
	            case m2pim4Parser.DIV:
	            case m2pim4Parser.DO:
	            case m2pim4Parser.ELSE:
	            case m2pim4Parser.ELSIF:
	            case m2pim4Parser.END:
	            case m2pim4Parser.IN:
	            case m2pim4Parser.MOD:
	            case m2pim4Parser.OF:
	            case m2pim4Parser.OR:
	            case m2pim4Parser.THEN:
	            case m2pim4Parser.TO:
	            case m2pim4Parser.UNTIL:
	                this.state = 485;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===m2pim4Parser.T__20 || _la===m2pim4Parser.T__25) {
	                    this.state = 484;
	                    this.designatorTail();
	                }

	                this.state = 488;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===m2pim4Parser.T__13) {
	                    this.state = 487;
	                    this.actualParameters();
	                }

	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	actualParameters() {
	    let localctx = new ActualParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, m2pim4Parser.RULE_actualParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.match(m2pim4Parser.T__13);
	        this.state = 496;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
	            this.state = 495;
	            this.expList();
	        }

	        this.state = 498;
	        this.match(m2pim4Parser.T__14);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 96, m2pim4Parser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 513;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case m2pim4Parser.IDENT:
	        	this.state = 500;
	        	this.assignmentOrProcCall();
	        	break;
	        case m2pim4Parser.IF:
	        	this.state = 501;
	        	this.ifStatement();
	        	break;
	        case m2pim4Parser.CASE:
	        	this.state = 502;
	        	this.caseStatement();
	        	break;
	        case m2pim4Parser.WHILE:
	        	this.state = 503;
	        	this.whileStatement();
	        	break;
	        case m2pim4Parser.REPEAT:
	        	this.state = 504;
	        	this.repeatStatement();
	        	break;
	        case m2pim4Parser.LOOP:
	        	this.state = 505;
	        	this.loopStatement();
	        	break;
	        case m2pim4Parser.FOR:
	        	this.state = 506;
	        	this.forStatement();
	        	break;
	        case m2pim4Parser.WITH:
	        	this.state = 507;
	        	this.withStatement();
	        	break;
	        case m2pim4Parser.EXIT:
	        	this.state = 508;
	        	this.match(m2pim4Parser.EXIT);
	        	break;
	        case m2pim4Parser.RETURN:
	        	this.state = 509;
	        	this.match(m2pim4Parser.RETURN);
	        	this.state = 511;
	        	this._errHandler.sync(this);
	        	_la = this._input.LA(1);
	        	if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << m2pim4Parser.T__8) | (1 << m2pim4Parser.T__9) | (1 << m2pim4Parser.T__13) | (1 << m2pim4Parser.T__15) | (1 << m2pim4Parser.T__16))) !== 0) || ((((_la - 51)) & ~0x1f) == 0 && ((1 << (_la - 51)) & ((1 << (m2pim4Parser.NOT - 51)) | (1 << (m2pim4Parser.IDENT - 51)) | (1 << (m2pim4Parser.INTEGER - 51)) | (1 << (m2pim4Parser.REAL - 51)) | (1 << (m2pim4Parser.STRING - 51)))) !== 0)) {
	        	    this.state = 510;
	        	    this.expression();
	        	}

	        	break;
	        case m2pim4Parser.T__22:
	        case m2pim4Parser.T__24:
	        case m2pim4Parser.ELSE:
	        case m2pim4Parser.ELSIF:
	        case m2pim4Parser.END:
	        case m2pim4Parser.UNTIL:
	        	break;
	        default:
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



	assignmentOrProcCall() {
	    let localctx = new AssignmentOrProcCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, m2pim4Parser.RULE_assignmentOrProcCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 515;
	        this.designator();
	        this.state = 521;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.T__26:
	            this.state = 516;
	            this.match(m2pim4Parser.T__26);
	            this.state = 517;
	            this.expression();
	            break;
	        case m2pim4Parser.T__13:
	        case m2pim4Parser.T__22:
	        case m2pim4Parser.T__24:
	        case m2pim4Parser.ELSE:
	        case m2pim4Parser.ELSIF:
	        case m2pim4Parser.END:
	        case m2pim4Parser.UNTIL:
	            this.state = 519;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===m2pim4Parser.T__13) {
	                this.state = 518;
	                this.actualParameters();
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



	statementSequence() {
	    let localctx = new StatementSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, m2pim4Parser.RULE_statementSequence);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        this.statement();
	        this.state = 528;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__22) {
	            this.state = 524;
	            this.match(m2pim4Parser.T__22);
	            this.state = 525;
	            this.statement();
	            this.state = 530;
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



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, m2pim4Parser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 531;
	        this.match(m2pim4Parser.IF);
	        this.state = 532;
	        this.expression();
	        this.state = 533;
	        this.match(m2pim4Parser.THEN);
	        this.state = 534;
	        this.statementSequence();
	        this.state = 542;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.ELSIF) {
	            this.state = 535;
	            this.match(m2pim4Parser.ELSIF);
	            this.state = 536;
	            this.expression();
	            this.state = 537;
	            this.match(m2pim4Parser.THEN);
	            this.state = 538;
	            this.statementSequence();
	            this.state = 544;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 547;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.ELSE) {
	            this.state = 545;
	            this.match(m2pim4Parser.ELSE);
	            this.state = 546;
	            this.statementSequence();
	        }

	        this.state = 549;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caseStatement() {
	    let localctx = new CaseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, m2pim4Parser.RULE_caseStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 551;
	        this.match(m2pim4Parser.CASE);
	        this.state = 552;
	        this.expression();
	        this.state = 553;
	        this.match(m2pim4Parser.OF);
	        this.state = 554;
	        this.ccase();
	        this.state = 559;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.T__24) {
	            this.state = 555;
	            this.match(m2pim4Parser.T__24);
	            this.state = 556;
	            this.ccase();
	            this.state = 561;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.ELSE) {
	            this.state = 562;
	            this.match(m2pim4Parser.ELSE);
	            this.state = 563;
	            this.statementSequence();
	        }

	        this.state = 566;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ccase() {
	    let localctx = new CcaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, m2pim4Parser.RULE_ccase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this.caseLabelList();
	        this.state = 569;
	        this.match(m2pim4Parser.T__23);
	        this.state = 570;
	        this.statementSequence();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whileStatement() {
	    let localctx = new WhileStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, m2pim4Parser.RULE_whileStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 572;
	        this.match(m2pim4Parser.WHILE);
	        this.state = 573;
	        this.expression();
	        this.state = 574;
	        this.match(m2pim4Parser.DO);
	        this.state = 575;
	        this.statementSequence();
	        this.state = 576;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	repeatStatement() {
	    let localctx = new RepeatStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, m2pim4Parser.RULE_repeatStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 578;
	        this.match(m2pim4Parser.REPEAT);
	        this.state = 579;
	        this.statementSequence();
	        this.state = 580;
	        this.match(m2pim4Parser.UNTIL);
	        this.state = 581;
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



	forStatement() {
	    let localctx = new ForStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, m2pim4Parser.RULE_forStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.match(m2pim4Parser.FOR);
	        this.state = 584;
	        this.ident();
	        this.state = 585;
	        this.match(m2pim4Parser.T__26);
	        this.state = 586;
	        this.expression();
	        this.state = 587;
	        this.match(m2pim4Parser.TO);
	        this.state = 588;
	        this.expression();
	        this.state = 591;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.BY) {
	            this.state = 589;
	            this.match(m2pim4Parser.BY);
	            this.state = 590;
	            this.constExpression();
	        }

	        this.state = 593;
	        this.match(m2pim4Parser.DO);
	        this.state = 594;
	        this.statementSequence();
	        this.state = 595;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loopStatement() {
	    let localctx = new LoopStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, m2pim4Parser.RULE_loopStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 597;
	        this.match(m2pim4Parser.LOOP);
	        this.state = 598;
	        this.statementSequence();
	        this.state = 599;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	withStatement() {
	    let localctx = new WithStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, m2pim4Parser.RULE_withStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 601;
	        this.match(m2pim4Parser.WITH);
	        this.state = 602;
	        this.designator();
	        this.state = 603;
	        this.match(m2pim4Parser.DO);
	        this.state = 604;
	        this.statementSequence();
	        this.state = 605;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureDeclaration() {
	    let localctx = new ProcedureDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, m2pim4Parser.RULE_procedureDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 607;
	        this.procedureHeading();
	        this.state = 608;
	        this.match(m2pim4Parser.T__22);
	        this.state = 609;
	        this.block();
	        this.state = 610;
	        this.ident();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	procedureHeading() {
	    let localctx = new ProcedureHeadingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, m2pim4Parser.RULE_procedureHeading);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 612;
	        this.match(m2pim4Parser.PROCEDURE);
	        this.state = 613;
	        this.ident();
	        this.state = 615;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__13) {
	            this.state = 614;
	            this.formalParameters();
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
	    this.enterRule(localctx, 122, m2pim4Parser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 620;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (m2pim4Parser.CONST - 33)) | (1 << (m2pim4Parser.MODULE - 33)) | (1 << (m2pim4Parser.PROCEDURE - 33)) | (1 << (m2pim4Parser.TYPE - 33)))) !== 0) || _la===m2pim4Parser.VAR) {
	            this.state = 617;
	            this.declaration();
	            this.state = 622;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 625;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.BEGIN) {
	            this.state = 623;
	            this.match(m2pim4Parser.BEGIN);
	            this.state = 624;
	            this.statementSequence();
	        }

	        this.state = 627;
	        this.match(m2pim4Parser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, m2pim4Parser.RULE_declaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 662;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.CONST:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 629;
	            this.match(m2pim4Parser.CONST);
	            this.state = 635;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.IDENT) {
	                this.state = 630;
	                this.constantDeclaration();
	                this.state = 631;
	                this.match(m2pim4Parser.T__22);
	                this.state = 637;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case m2pim4Parser.TYPE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 638;
	            this.match(m2pim4Parser.TYPE);
	            this.state = 644;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.IDENT) {
	                this.state = 639;
	                this.typeDeclaration();
	                this.state = 640;
	                this.match(m2pim4Parser.T__22);
	                this.state = 646;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case m2pim4Parser.VAR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 647;
	            this.match(m2pim4Parser.VAR);
	            this.state = 653;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.IDENT) {
	                this.state = 648;
	                this.variableDeclaration();
	                this.state = 649;
	                this.match(m2pim4Parser.T__22);
	                this.state = 655;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case m2pim4Parser.PROCEDURE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 656;
	            this.procedureDeclaration();
	            this.state = 657;
	            this.match(m2pim4Parser.T__22);
	            break;
	        case m2pim4Parser.MODULE:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 659;
	            this.moduleDeclaration();
	            this.state = 660;
	            this.match(m2pim4Parser.T__22);
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



	formalParameters() {
	    let localctx = new FormalParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, m2pim4Parser.RULE_formalParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 664;
	        this.match(m2pim4Parser.T__13);
	        this.state = 673;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.VAR || _la===m2pim4Parser.IDENT) {
	            this.state = 665;
	            this.fpSection();
	            this.state = 670;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.T__22) {
	                this.state = 666;
	                this.match(m2pim4Parser.T__22);
	                this.state = 667;
	                this.fpSection();
	                this.state = 672;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 675;
	        this.match(m2pim4Parser.T__14);
	        this.state = 678;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__23) {
	            this.state = 676;
	            this.match(m2pim4Parser.T__23);
	            this.state = 677;
	            this.qualident();
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



	fpSection() {
	    let localctx = new FpSectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, m2pim4Parser.RULE_fpSection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 681;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.VAR) {
	            this.state = 680;
	            this.match(m2pim4Parser.VAR);
	        }

	        this.state = 683;
	        this.identList();
	        this.state = 684;
	        this.match(m2pim4Parser.T__23);
	        this.state = 685;
	        this.formalType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalType() {
	    let localctx = new FormalTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, m2pim4Parser.RULE_formalType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 689;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.ARRAY) {
	            this.state = 687;
	            this.match(m2pim4Parser.ARRAY);
	            this.state = 688;
	            this.match(m2pim4Parser.OF);
	        }

	        this.state = 691;
	        this.qualident();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	moduleDeclaration() {
	    let localctx = new ModuleDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, m2pim4Parser.RULE_moduleDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 693;
	        this.match(m2pim4Parser.MODULE);
	        this.state = 694;
	        this.ident();
	        this.state = 696;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__20) {
	            this.state = 695;
	            this.priority();
	        }

	        this.state = 698;
	        this.match(m2pim4Parser.T__22);
	        this.state = 702;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.FROM || _la===m2pim4Parser.IMPORT) {
	            this.state = 699;
	            this.importList();
	            this.state = 704;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 706;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.EXPORT) {
	            this.state = 705;
	            this.exportList();
	        }

	        this.state = 708;
	        this.block();
	        this.state = 709;
	        this.ident();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	priority() {
	    let localctx = new PriorityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, m2pim4Parser.RULE_priority);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 711;
	        this.match(m2pim4Parser.T__20);
	        this.state = 712;
	        this.constExpression();
	        this.state = 713;
	        this.match(m2pim4Parser.T__21);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exportList() {
	    let localctx = new ExportListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, m2pim4Parser.RULE_exportList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 715;
	        this.match(m2pim4Parser.EXPORT);
	        this.state = 717;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.QUALIFIED) {
	            this.state = 716;
	            this.match(m2pim4Parser.QUALIFIED);
	        }

	        this.state = 719;
	        this.identList();
	        this.state = 720;
	        this.match(m2pim4Parser.T__22);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importList() {
	    let localctx = new ImportListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, m2pim4Parser.RULE_importList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 724;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.FROM) {
	            this.state = 722;
	            this.match(m2pim4Parser.FROM);
	            this.state = 723;
	            this.ident();
	        }

	        this.state = 726;
	        this.match(m2pim4Parser.IMPORT);
	        this.state = 727;
	        this.identList();
	        this.state = 728;
	        this.match(m2pim4Parser.T__22);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definitionModule() {
	    let localctx = new DefinitionModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, m2pim4Parser.RULE_definitionModule);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 730;
	        this.match(m2pim4Parser.DEFINITION);
	        this.state = 731;
	        this.match(m2pim4Parser.MODULE);
	        this.state = 732;
	        this.ident();
	        this.state = 733;
	        this.match(m2pim4Parser.T__22);
	        this.state = 737;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.FROM || _la===m2pim4Parser.IMPORT) {
	            this.state = 734;
	            this.importList();
	            this.state = 739;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 741;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.EXPORT) {
	            this.state = 740;
	            this.exportList();
	        }

	        this.state = 746;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (m2pim4Parser.CONST - 33)) | (1 << (m2pim4Parser.PROCEDURE - 33)) | (1 << (m2pim4Parser.TYPE - 33)))) !== 0) || _la===m2pim4Parser.VAR) {
	            this.state = 743;
	            this.definition();
	            this.state = 748;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 749;
	        this.match(m2pim4Parser.END);
	        this.state = 750;
	        this.ident();
	        this.state = 751;
	        this.match(m2pim4Parser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 142, m2pim4Parser.RULE_definition);
	    var _la = 0; // Token type
	    try {
	        this.state = 787;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.CONST:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 753;
	            this.match(m2pim4Parser.CONST);
	            this.state = 759;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.IDENT) {
	                this.state = 754;
	                this.constantDeclaration();
	                this.state = 755;
	                this.match(m2pim4Parser.T__22);
	                this.state = 761;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case m2pim4Parser.TYPE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 762;
	            this.match(m2pim4Parser.TYPE);
	            this.state = 772;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.IDENT) {
	                this.state = 763;
	                this.ident();
	                this.state = 766;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===m2pim4Parser.T__1) {
	                    this.state = 764;
	                    this.match(m2pim4Parser.T__1);
	                    this.state = 765;
	                    this.type_();
	                }

	                this.state = 768;
	                this.match(m2pim4Parser.T__22);
	                this.state = 774;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case m2pim4Parser.VAR:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 775;
	            this.match(m2pim4Parser.VAR);
	            this.state = 781;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===m2pim4Parser.IDENT) {
	                this.state = 776;
	                this.variableDeclaration();
	                this.state = 777;
	                this.match(m2pim4Parser.T__22);
	                this.state = 783;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case m2pim4Parser.PROCEDURE:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 784;
	            this.procedureHeading();
	            this.state = 785;
	            this.match(m2pim4Parser.T__22);
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



	programModule() {
	    let localctx = new ProgramModuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, m2pim4Parser.RULE_programModule);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 789;
	        this.match(m2pim4Parser.MODULE);
	        this.state = 790;
	        this.ident();
	        this.state = 792;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===m2pim4Parser.T__20) {
	            this.state = 791;
	            this.priority();
	        }

	        this.state = 794;
	        this.match(m2pim4Parser.T__22);
	        this.state = 798;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===m2pim4Parser.FROM || _la===m2pim4Parser.IMPORT) {
	            this.state = 795;
	            this.importList();
	            this.state = 800;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 801;
	        this.block();
	        this.state = 802;
	        this.ident();
	        this.state = 803;
	        this.match(m2pim4Parser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compilationUnit() {
	    let localctx = new CompilationUnitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 146, m2pim4Parser.RULE_compilationUnit);
	    var _la = 0; // Token type
	    try {
	        this.state = 810;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case m2pim4Parser.DEFINITION:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 805;
	            this.definitionModule();
	            break;
	        case m2pim4Parser.IMPLEMENTATION:
	        case m2pim4Parser.MODULE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 807;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===m2pim4Parser.IMPLEMENTATION) {
	                this.state = 806;
	                this.match(m2pim4Parser.IMPLEMENTATION);
	            }

	            this.state = 809;
	            this.programModule();
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


}

m2pim4Parser.EOF = antlr4.Token.EOF;
m2pim4Parser.T__0 = 1;
m2pim4Parser.T__1 = 2;
m2pim4Parser.T__2 = 3;
m2pim4Parser.T__3 = 4;
m2pim4Parser.T__4 = 5;
m2pim4Parser.T__5 = 6;
m2pim4Parser.T__6 = 7;
m2pim4Parser.T__7 = 8;
m2pim4Parser.T__8 = 9;
m2pim4Parser.T__9 = 10;
m2pim4Parser.T__10 = 11;
m2pim4Parser.T__11 = 12;
m2pim4Parser.T__12 = 13;
m2pim4Parser.T__13 = 14;
m2pim4Parser.T__14 = 15;
m2pim4Parser.T__15 = 16;
m2pim4Parser.T__16 = 17;
m2pim4Parser.T__17 = 18;
m2pim4Parser.T__18 = 19;
m2pim4Parser.T__19 = 20;
m2pim4Parser.T__20 = 21;
m2pim4Parser.T__21 = 22;
m2pim4Parser.T__22 = 23;
m2pim4Parser.T__23 = 24;
m2pim4Parser.T__24 = 25;
m2pim4Parser.T__25 = 26;
m2pim4Parser.T__26 = 27;
m2pim4Parser.AND = 28;
m2pim4Parser.ARRAY = 29;
m2pim4Parser.BEGIN = 30;
m2pim4Parser.BY = 31;
m2pim4Parser.CASE = 32;
m2pim4Parser.CONST = 33;
m2pim4Parser.DEFINITION = 34;
m2pim4Parser.DIV = 35;
m2pim4Parser.DO = 36;
m2pim4Parser.ELSE = 37;
m2pim4Parser.ELSIF = 38;
m2pim4Parser.END = 39;
m2pim4Parser.EXIT = 40;
m2pim4Parser.EXPORT = 41;
m2pim4Parser.FOR = 42;
m2pim4Parser.FROM = 43;
m2pim4Parser.IF = 44;
m2pim4Parser.IMPLEMENTATION = 45;
m2pim4Parser.IMPORT = 46;
m2pim4Parser.IN = 47;
m2pim4Parser.LOOP = 48;
m2pim4Parser.MOD = 49;
m2pim4Parser.MODULE = 50;
m2pim4Parser.NOT = 51;
m2pim4Parser.OF = 52;
m2pim4Parser.OR = 53;
m2pim4Parser.POINTER = 54;
m2pim4Parser.PROCEDURE = 55;
m2pim4Parser.QUALIFIED = 56;
m2pim4Parser.RECORD = 57;
m2pim4Parser.REPEAT = 58;
m2pim4Parser.RETURN = 59;
m2pim4Parser.SET = 60;
m2pim4Parser.THEN = 61;
m2pim4Parser.TO = 62;
m2pim4Parser.TYPE = 63;
m2pim4Parser.UNTIL = 64;
m2pim4Parser.VAR = 65;
m2pim4Parser.WHILE = 66;
m2pim4Parser.WITH = 67;
m2pim4Parser.IDENT = 68;
m2pim4Parser.INTEGER = 69;
m2pim4Parser.REAL = 70;
m2pim4Parser.STRING = 71;
m2pim4Parser.DIGIT = 72;
m2pim4Parser.OCTAL_DIGIT = 73;
m2pim4Parser.HEX_DIGIT = 74;
m2pim4Parser.SCALE_FACTOR = 75;
m2pim4Parser.COMMENT = 76;
m2pim4Parser.WS = 77;

m2pim4Parser.RULE_ident = 0;
m2pim4Parser.RULE_number = 1;
m2pim4Parser.RULE_integer = 2;
m2pim4Parser.RULE_real = 3;
m2pim4Parser.RULE_scaleFactor = 4;
m2pim4Parser.RULE_hexDigit = 5;
m2pim4Parser.RULE_digit = 6;
m2pim4Parser.RULE_octalDigit = 7;
m2pim4Parser.RULE_string = 8;
m2pim4Parser.RULE_qualident = 9;
m2pim4Parser.RULE_constantDeclaration = 10;
m2pim4Parser.RULE_constExpression = 11;
m2pim4Parser.RULE_relation = 12;
m2pim4Parser.RULE_simpleConstExpr = 13;
m2pim4Parser.RULE_addOperator = 14;
m2pim4Parser.RULE_constTerm = 15;
m2pim4Parser.RULE_mulOperator = 16;
m2pim4Parser.RULE_constFactor = 17;
m2pim4Parser.RULE_setOrQualident = 18;
m2pim4Parser.RULE_set_ = 19;
m2pim4Parser.RULE_element = 20;
m2pim4Parser.RULE_typeDeclaration = 21;
m2pim4Parser.RULE_type_ = 22;
m2pim4Parser.RULE_simpleType = 23;
m2pim4Parser.RULE_enumeration = 24;
m2pim4Parser.RULE_identList = 25;
m2pim4Parser.RULE_subrangeType = 26;
m2pim4Parser.RULE_arrayType = 27;
m2pim4Parser.RULE_recordType = 28;
m2pim4Parser.RULE_fieldListSequence = 29;
m2pim4Parser.RULE_fieldList = 30;
m2pim4Parser.RULE_variant = 31;
m2pim4Parser.RULE_caseLabelList = 32;
m2pim4Parser.RULE_caseLabels = 33;
m2pim4Parser.RULE_setType = 34;
m2pim4Parser.RULE_pointerType = 35;
m2pim4Parser.RULE_procedureType = 36;
m2pim4Parser.RULE_formalTypeList = 37;
m2pim4Parser.RULE_variableDeclaration = 38;
m2pim4Parser.RULE_designator = 39;
m2pim4Parser.RULE_designatorTail = 40;
m2pim4Parser.RULE_expList = 41;
m2pim4Parser.RULE_expression = 42;
m2pim4Parser.RULE_simpleExpression = 43;
m2pim4Parser.RULE_term = 44;
m2pim4Parser.RULE_factor = 45;
m2pim4Parser.RULE_setOrDesignatorOrProcCall = 46;
m2pim4Parser.RULE_actualParameters = 47;
m2pim4Parser.RULE_statement = 48;
m2pim4Parser.RULE_assignmentOrProcCall = 49;
m2pim4Parser.RULE_statementSequence = 50;
m2pim4Parser.RULE_ifStatement = 51;
m2pim4Parser.RULE_caseStatement = 52;
m2pim4Parser.RULE_ccase = 53;
m2pim4Parser.RULE_whileStatement = 54;
m2pim4Parser.RULE_repeatStatement = 55;
m2pim4Parser.RULE_forStatement = 56;
m2pim4Parser.RULE_loopStatement = 57;
m2pim4Parser.RULE_withStatement = 58;
m2pim4Parser.RULE_procedureDeclaration = 59;
m2pim4Parser.RULE_procedureHeading = 60;
m2pim4Parser.RULE_block = 61;
m2pim4Parser.RULE_declaration = 62;
m2pim4Parser.RULE_formalParameters = 63;
m2pim4Parser.RULE_fpSection = 64;
m2pim4Parser.RULE_formalType = 65;
m2pim4Parser.RULE_moduleDeclaration = 66;
m2pim4Parser.RULE_priority = 67;
m2pim4Parser.RULE_exportList = 68;
m2pim4Parser.RULE_importList = 69;
m2pim4Parser.RULE_definitionModule = 70;
m2pim4Parser.RULE_definition = 71;
m2pim4Parser.RULE_programModule = 72;
m2pim4Parser.RULE_compilationUnit = 73;

class IdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_ident;
    }

	IDENT() {
	    return this.getToken(m2pim4Parser.IDENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitIdent(this);
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
        this.ruleIndex = m2pim4Parser.RULE_number;
    }

	INTEGER() {
	    return this.getToken(m2pim4Parser.INTEGER, 0);
	};

	REAL() {
	    return this.getToken(m2pim4Parser.REAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitNumber(this);
		}
	}


}



class IntegerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_integer;
    }

	INTEGER() {
	    return this.getToken(m2pim4Parser.INTEGER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterInteger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitInteger(this);
		}
	}


}



class RealContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_real;
    }

	REAL() {
	    return this.getToken(m2pim4Parser.REAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterReal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitReal(this);
		}
	}


}



class ScaleFactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_scaleFactor;
    }

	SCALE_FACTOR() {
	    return this.getToken(m2pim4Parser.SCALE_FACTOR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterScaleFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitScaleFactor(this);
		}
	}


}



class HexDigitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_hexDigit;
    }

	HEX_DIGIT() {
	    return this.getToken(m2pim4Parser.HEX_DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterHexDigit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitHexDigit(this);
		}
	}


}



class DigitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_digit;
    }

	DIGIT() {
	    return this.getToken(m2pim4Parser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterDigit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitDigit(this);
		}
	}


}



class OctalDigitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_octalDigit;
    }

	OCTAL_DIGIT() {
	    return this.getToken(m2pim4Parser.OCTAL_DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterOctalDigit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitOctalDigit(this);
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
        this.ruleIndex = m2pim4Parser.RULE_string;
    }

	STRING() {
	    return this.getToken(m2pim4Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitString(this);
		}
	}


}



class QualidentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_qualident;
    }

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterQualident(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitQualident(this);
		}
	}


}



class ConstantDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_constantDeclaration;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	constExpression() {
	    return this.getTypedRuleContext(ConstExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterConstantDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitConstantDeclaration(this);
		}
	}


}



class ConstExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_constExpression;
    }

	simpleConstExpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleConstExprContext);
	    } else {
	        return this.getTypedRuleContext(SimpleConstExprContext,i);
	    }
	};

	relation() {
	    return this.getTypedRuleContext(RelationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterConstExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitConstExpression(this);
		}
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_relation;
    }

	IN() {
	    return this.getToken(m2pim4Parser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitRelation(this);
		}
	}


}



class SimpleConstExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_simpleConstExpr;
    }

	constTerm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstTermContext);
	    } else {
	        return this.getTypedRuleContext(ConstTermContext,i);
	    }
	};

	addOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddOperatorContext);
	    } else {
	        return this.getTypedRuleContext(AddOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSimpleConstExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSimpleConstExpr(this);
		}
	}


}



class AddOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_addOperator;
    }

	OR() {
	    return this.getToken(m2pim4Parser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterAddOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitAddOperator(this);
		}
	}


}



class ConstTermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_constTerm;
    }

	constFactor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstFactorContext);
	    } else {
	        return this.getTypedRuleContext(ConstFactorContext,i);
	    }
	};

	mulOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MulOperatorContext);
	    } else {
	        return this.getTypedRuleContext(MulOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterConstTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitConstTerm(this);
		}
	}


}



class MulOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_mulOperator;
    }

	DIV() {
	    return this.getToken(m2pim4Parser.DIV, 0);
	};

	MOD() {
	    return this.getToken(m2pim4Parser.MOD, 0);
	};

	AND() {
	    return this.getToken(m2pim4Parser.AND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterMulOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitMulOperator(this);
		}
	}


}



class ConstFactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_constFactor;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	setOrQualident() {
	    return this.getTypedRuleContext(SetOrQualidentContext,0);
	};

	constExpression() {
	    return this.getTypedRuleContext(ConstExpressionContext,0);
	};

	constFactor() {
	    return this.getTypedRuleContext(ConstFactorContext,0);
	};

	NOT() {
	    return this.getToken(m2pim4Parser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterConstFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitConstFactor(this);
		}
	}


}



class SetOrQualidentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_setOrQualident;
    }

	set_() {
	    return this.getTypedRuleContext(Set_Context,0);
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSetOrQualident(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSetOrQualident(this);
		}
	}


}



class Set_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_set_;
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
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSet_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSet_(this);
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
        this.ruleIndex = m2pim4Parser.RULE_element;
    }

	constExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConstExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitElement(this);
		}
	}


}



class TypeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_typeDeclaration;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterTypeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitTypeDeclaration(this);
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
        this.ruleIndex = m2pim4Parser.RULE_type_;
    }

	simpleType() {
	    return this.getTypedRuleContext(SimpleTypeContext,0);
	};

	arrayType() {
	    return this.getTypedRuleContext(ArrayTypeContext,0);
	};

	recordType() {
	    return this.getTypedRuleContext(RecordTypeContext,0);
	};

	setType() {
	    return this.getTypedRuleContext(SetTypeContext,0);
	};

	pointerType() {
	    return this.getTypedRuleContext(PointerTypeContext,0);
	};

	procedureType() {
	    return this.getTypedRuleContext(ProcedureTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitType_(this);
		}
	}


}



class SimpleTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_simpleType;
    }

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	enumeration() {
	    return this.getTypedRuleContext(EnumerationContext,0);
	};

	subrangeType() {
	    return this.getTypedRuleContext(SubrangeTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSimpleType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSimpleType(this);
		}
	}


}



class EnumerationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_enumeration;
    }

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterEnumeration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitEnumeration(this);
		}
	}


}



class IdentListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_identList;
    }

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterIdentList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitIdentList(this);
		}
	}


}



class SubrangeTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_subrangeType;
    }

	constExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConstExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSubrangeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSubrangeType(this);
		}
	}


}



class ArrayTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_arrayType;
    }

	ARRAY() {
	    return this.getToken(m2pim4Parser.ARRAY, 0);
	};

	simpleType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleTypeContext);
	    } else {
	        return this.getTypedRuleContext(SimpleTypeContext,i);
	    }
	};

	OF() {
	    return this.getToken(m2pim4Parser.OF, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterArrayType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitArrayType(this);
		}
	}


}



class RecordTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_recordType;
    }

	RECORD() {
	    return this.getToken(m2pim4Parser.RECORD, 0);
	};

	fieldListSequence() {
	    return this.getTypedRuleContext(FieldListSequenceContext,0);
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterRecordType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitRecordType(this);
		}
	}


}



class FieldListSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_fieldListSequence;
    }

	fieldList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldListContext);
	    } else {
	        return this.getTypedRuleContext(FieldListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterFieldListSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitFieldListSequence(this);
		}
	}


}



class FieldListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_fieldList;
    }

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	CASE() {
	    return this.getToken(m2pim4Parser.CASE, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	OF() {
	    return this.getToken(m2pim4Parser.OF, 0);
	};

	variant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariantContext);
	    } else {
	        return this.getTypedRuleContext(VariantContext,i);
	    }
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	ELSE() {
	    return this.getToken(m2pim4Parser.ELSE, 0);
	};

	fieldListSequence() {
	    return this.getTypedRuleContext(FieldListSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterFieldList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitFieldList(this);
		}
	}


}



class VariantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_variant;
    }

	caseLabelList() {
	    return this.getTypedRuleContext(CaseLabelListContext,0);
	};

	fieldListSequence() {
	    return this.getTypedRuleContext(FieldListSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterVariant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitVariant(this);
		}
	}


}



class CaseLabelListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_caseLabelList;
    }

	caseLabels = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaseLabelsContext);
	    } else {
	        return this.getTypedRuleContext(CaseLabelsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterCaseLabelList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitCaseLabelList(this);
		}
	}


}



class CaseLabelsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_caseLabels;
    }

	constExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ConstExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterCaseLabels(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitCaseLabels(this);
		}
	}


}



class SetTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_setType;
    }

	SET() {
	    return this.getToken(m2pim4Parser.SET, 0);
	};

	OF() {
	    return this.getToken(m2pim4Parser.OF, 0);
	};

	simpleType() {
	    return this.getTypedRuleContext(SimpleTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSetType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSetType(this);
		}
	}


}



class PointerTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_pointerType;
    }

	POINTER() {
	    return this.getToken(m2pim4Parser.POINTER, 0);
	};

	TO() {
	    return this.getToken(m2pim4Parser.TO, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterPointerType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitPointerType(this);
		}
	}


}



class ProcedureTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_procedureType;
    }

	PROCEDURE() {
	    return this.getToken(m2pim4Parser.PROCEDURE, 0);
	};

	formalTypeList() {
	    return this.getTypedRuleContext(FormalTypeListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterProcedureType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitProcedureType(this);
		}
	}


}



class FormalTypeListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_formalTypeList;
    }

	formalType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormalTypeContext);
	    } else {
	        return this.getTypedRuleContext(FormalTypeContext,i);
	    }
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	VAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(m2pim4Parser.VAR);
	    } else {
	        return this.getToken(m2pim4Parser.VAR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterFormalTypeList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitFormalTypeList(this);
		}
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_variableDeclaration;
    }

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class DesignatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_designator;
    }

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	designatorTail() {
	    return this.getTypedRuleContext(DesignatorTailContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterDesignator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitDesignator(this);
		}
	}


}



class DesignatorTailContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_designatorTail;
    }

	expList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpListContext);
	    } else {
	        return this.getTypedRuleContext(ExpListContext,i);
	    }
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterDesignatorTail(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitDesignatorTail(this);
		}
	}


}



class ExpListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_expList;
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
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterExpList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitExpList(this);
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
        this.ruleIndex = m2pim4Parser.RULE_expression;
    }

	simpleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SimpleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SimpleExpressionContext,i);
	    }
	};

	relation() {
	    return this.getTypedRuleContext(RelationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitExpression(this);
		}
	}


}



class SimpleExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_simpleExpression;
    }

	term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TermContext);
	    } else {
	        return this.getTypedRuleContext(TermContext,i);
	    }
	};

	addOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AddOperatorContext);
	    } else {
	        return this.getTypedRuleContext(AddOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSimpleExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSimpleExpression(this);
		}
	}


}



class TermContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_term;
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	mulOperator = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MulOperatorContext);
	    } else {
	        return this.getTypedRuleContext(MulOperatorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitTerm(this);
		}
	}


}



class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_factor;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	setOrDesignatorOrProcCall() {
	    return this.getTypedRuleContext(SetOrDesignatorOrProcCallContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	NOT() {
	    return this.getToken(m2pim4Parser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterFactor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitFactor(this);
		}
	}


}



class SetOrDesignatorOrProcCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_setOrDesignatorOrProcCall;
    }

	set_() {
	    return this.getTypedRuleContext(Set_Context,0);
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	designatorTail() {
	    return this.getTypedRuleContext(DesignatorTailContext,0);
	};

	actualParameters() {
	    return this.getTypedRuleContext(ActualParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterSetOrDesignatorOrProcCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitSetOrDesignatorOrProcCall(this);
		}
	}


}



class ActualParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_actualParameters;
    }

	expList() {
	    return this.getTypedRuleContext(ExpListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterActualParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitActualParameters(this);
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
        this.ruleIndex = m2pim4Parser.RULE_statement;
    }

	assignmentOrProcCall() {
	    return this.getTypedRuleContext(AssignmentOrProcCallContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	caseStatement() {
	    return this.getTypedRuleContext(CaseStatementContext,0);
	};

	whileStatement() {
	    return this.getTypedRuleContext(WhileStatementContext,0);
	};

	repeatStatement() {
	    return this.getTypedRuleContext(RepeatStatementContext,0);
	};

	loopStatement() {
	    return this.getTypedRuleContext(LoopStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	withStatement() {
	    return this.getTypedRuleContext(WithStatementContext,0);
	};

	EXIT() {
	    return this.getToken(m2pim4Parser.EXIT, 0);
	};

	RETURN() {
	    return this.getToken(m2pim4Parser.RETURN, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitStatement(this);
		}
	}


}



class AssignmentOrProcCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_assignmentOrProcCall;
    }

	designator() {
	    return this.getTypedRuleContext(DesignatorContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	actualParameters() {
	    return this.getTypedRuleContext(ActualParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterAssignmentOrProcCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitAssignmentOrProcCall(this);
		}
	}


}



class StatementSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_statementSequence;
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
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterStatementSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitStatementSequence(this);
		}
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_ifStatement;
    }

	IF() {
	    return this.getToken(m2pim4Parser.IF, 0);
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

	THEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(m2pim4Parser.THEN);
	    } else {
	        return this.getToken(m2pim4Parser.THEN, i);
	    }
	};


	statementSequence = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementSequenceContext);
	    } else {
	        return this.getTypedRuleContext(StatementSequenceContext,i);
	    }
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	ELSIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(m2pim4Parser.ELSIF);
	    } else {
	        return this.getToken(m2pim4Parser.ELSIF, i);
	    }
	};


	ELSE() {
	    return this.getToken(m2pim4Parser.ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitIfStatement(this);
		}
	}


}



class CaseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_caseStatement;
    }

	CASE() {
	    return this.getToken(m2pim4Parser.CASE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	OF() {
	    return this.getToken(m2pim4Parser.OF, 0);
	};

	ccase = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CcaseContext);
	    } else {
	        return this.getTypedRuleContext(CcaseContext,i);
	    }
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	ELSE() {
	    return this.getToken(m2pim4Parser.ELSE, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterCaseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitCaseStatement(this);
		}
	}


}



class CcaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_ccase;
    }

	caseLabelList() {
	    return this.getTypedRuleContext(CaseLabelListContext,0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterCcase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitCcase(this);
		}
	}


}



class WhileStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_whileStatement;
    }

	WHILE() {
	    return this.getToken(m2pim4Parser.WHILE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	DO() {
	    return this.getToken(m2pim4Parser.DO, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterWhileStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitWhileStatement(this);
		}
	}


}



class RepeatStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_repeatStatement;
    }

	REPEAT() {
	    return this.getToken(m2pim4Parser.REPEAT, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	UNTIL() {
	    return this.getToken(m2pim4Parser.UNTIL, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterRepeatStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitRepeatStatement(this);
		}
	}


}



class ForStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_forStatement;
    }

	FOR() {
	    return this.getToken(m2pim4Parser.FOR, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
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

	TO() {
	    return this.getToken(m2pim4Parser.TO, 0);
	};

	DO() {
	    return this.getToken(m2pim4Parser.DO, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	BY() {
	    return this.getToken(m2pim4Parser.BY, 0);
	};

	constExpression() {
	    return this.getTypedRuleContext(ConstExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitForStatement(this);
		}
	}


}



class LoopStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_loopStatement;
    }

	LOOP() {
	    return this.getToken(m2pim4Parser.LOOP, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterLoopStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitLoopStatement(this);
		}
	}


}



class WithStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_withStatement;
    }

	WITH() {
	    return this.getToken(m2pim4Parser.WITH, 0);
	};

	designator() {
	    return this.getTypedRuleContext(DesignatorContext,0);
	};

	DO() {
	    return this.getToken(m2pim4Parser.DO, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterWithStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitWithStatement(this);
		}
	}


}



class ProcedureDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_procedureDeclaration;
    }

	procedureHeading() {
	    return this.getTypedRuleContext(ProcedureHeadingContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterProcedureDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitProcedureDeclaration(this);
		}
	}


}



class ProcedureHeadingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_procedureHeading;
    }

	PROCEDURE() {
	    return this.getToken(m2pim4Parser.PROCEDURE, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	formalParameters() {
	    return this.getTypedRuleContext(FormalParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterProcedureHeading(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitProcedureHeading(this);
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
        this.ruleIndex = m2pim4Parser.RULE_block;
    }

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	BEGIN() {
	    return this.getToken(m2pim4Parser.BEGIN, 0);
	};

	statementSequence() {
	    return this.getTypedRuleContext(StatementSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitBlock(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_declaration;
    }

	CONST() {
	    return this.getToken(m2pim4Parser.CONST, 0);
	};

	constantDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ConstantDeclarationContext,i);
	    }
	};

	TYPE() {
	    return this.getToken(m2pim4Parser.TYPE, 0);
	};

	typeDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(TypeDeclarationContext,i);
	    }
	};

	VAR() {
	    return this.getToken(m2pim4Parser.VAR, 0);
	};

	variableDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationContext,i);
	    }
	};

	procedureDeclaration() {
	    return this.getTypedRuleContext(ProcedureDeclarationContext,0);
	};

	moduleDeclaration() {
	    return this.getTypedRuleContext(ModuleDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class FormalParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_formalParameters;
    }

	fpSection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FpSectionContext);
	    } else {
	        return this.getTypedRuleContext(FpSectionContext,i);
	    }
	};

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterFormalParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitFormalParameters(this);
		}
	}


}



class FpSectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_fpSection;
    }

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	formalType() {
	    return this.getTypedRuleContext(FormalTypeContext,0);
	};

	VAR() {
	    return this.getToken(m2pim4Parser.VAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterFpSection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitFpSection(this);
		}
	}


}



class FormalTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_formalType;
    }

	qualident() {
	    return this.getTypedRuleContext(QualidentContext,0);
	};

	ARRAY() {
	    return this.getToken(m2pim4Parser.ARRAY, 0);
	};

	OF() {
	    return this.getToken(m2pim4Parser.OF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterFormalType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitFormalType(this);
		}
	}


}



class ModuleDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_moduleDeclaration;
    }

	MODULE() {
	    return this.getToken(m2pim4Parser.MODULE, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	priority() {
	    return this.getTypedRuleContext(PriorityContext,0);
	};

	importList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportListContext);
	    } else {
	        return this.getTypedRuleContext(ImportListContext,i);
	    }
	};

	exportList() {
	    return this.getTypedRuleContext(ExportListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterModuleDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitModuleDeclaration(this);
		}
	}


}



class PriorityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_priority;
    }

	constExpression() {
	    return this.getTypedRuleContext(ConstExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterPriority(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitPriority(this);
		}
	}


}



class ExportListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_exportList;
    }

	EXPORT() {
	    return this.getToken(m2pim4Parser.EXPORT, 0);
	};

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	QUALIFIED() {
	    return this.getToken(m2pim4Parser.QUALIFIED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterExportList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitExportList(this);
		}
	}


}



class ImportListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_importList;
    }

	IMPORT() {
	    return this.getToken(m2pim4Parser.IMPORT, 0);
	};

	identList() {
	    return this.getTypedRuleContext(IdentListContext,0);
	};

	FROM() {
	    return this.getToken(m2pim4Parser.FROM, 0);
	};

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterImportList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitImportList(this);
		}
	}


}



class DefinitionModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_definitionModule;
    }

	DEFINITION() {
	    return this.getToken(m2pim4Parser.DEFINITION, 0);
	};

	MODULE() {
	    return this.getToken(m2pim4Parser.MODULE, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	END() {
	    return this.getToken(m2pim4Parser.END, 0);
	};

	importList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportListContext);
	    } else {
	        return this.getTypedRuleContext(ImportListContext,i);
	    }
	};

	exportList() {
	    return this.getTypedRuleContext(ExportListContext,0);
	};

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

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterDefinitionModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitDefinitionModule(this);
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
        this.ruleIndex = m2pim4Parser.RULE_definition;
    }

	CONST() {
	    return this.getToken(m2pim4Parser.CONST, 0);
	};

	constantDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ConstantDeclarationContext,i);
	    }
	};

	TYPE() {
	    return this.getToken(m2pim4Parser.TYPE, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
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

	VAR() {
	    return this.getToken(m2pim4Parser.VAR, 0);
	};

	variableDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(VariableDeclarationContext,i);
	    }
	};

	procedureHeading() {
	    return this.getTypedRuleContext(ProcedureHeadingContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitDefinition(this);
		}
	}


}



class ProgramModuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_programModule;
    }

	MODULE() {
	    return this.getToken(m2pim4Parser.MODULE, 0);
	};

	ident = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentContext);
	    } else {
	        return this.getTypedRuleContext(IdentContext,i);
	    }
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	priority() {
	    return this.getTypedRuleContext(PriorityContext,0);
	};

	importList = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportListContext);
	    } else {
	        return this.getTypedRuleContext(ImportListContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterProgramModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitProgramModule(this);
		}
	}


}



class CompilationUnitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = m2pim4Parser.RULE_compilationUnit;
    }

	definitionModule() {
	    return this.getTypedRuleContext(DefinitionModuleContext,0);
	};

	programModule() {
	    return this.getTypedRuleContext(ProgramModuleContext,0);
	};

	IMPLEMENTATION() {
	    return this.getToken(m2pim4Parser.IMPLEMENTATION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.enterCompilationUnit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof m2pim4Listener ) {
	        listener.exitCompilationUnit(this);
		}
	}


}




m2pim4Parser.IdentContext = IdentContext; 
m2pim4Parser.NumberContext = NumberContext; 
m2pim4Parser.IntegerContext = IntegerContext; 
m2pim4Parser.RealContext = RealContext; 
m2pim4Parser.ScaleFactorContext = ScaleFactorContext; 
m2pim4Parser.HexDigitContext = HexDigitContext; 
m2pim4Parser.DigitContext = DigitContext; 
m2pim4Parser.OctalDigitContext = OctalDigitContext; 
m2pim4Parser.StringContext = StringContext; 
m2pim4Parser.QualidentContext = QualidentContext; 
m2pim4Parser.ConstantDeclarationContext = ConstantDeclarationContext; 
m2pim4Parser.ConstExpressionContext = ConstExpressionContext; 
m2pim4Parser.RelationContext = RelationContext; 
m2pim4Parser.SimpleConstExprContext = SimpleConstExprContext; 
m2pim4Parser.AddOperatorContext = AddOperatorContext; 
m2pim4Parser.ConstTermContext = ConstTermContext; 
m2pim4Parser.MulOperatorContext = MulOperatorContext; 
m2pim4Parser.ConstFactorContext = ConstFactorContext; 
m2pim4Parser.SetOrQualidentContext = SetOrQualidentContext; 
m2pim4Parser.Set_Context = Set_Context; 
m2pim4Parser.ElementContext = ElementContext; 
m2pim4Parser.TypeDeclarationContext = TypeDeclarationContext; 
m2pim4Parser.Type_Context = Type_Context; 
m2pim4Parser.SimpleTypeContext = SimpleTypeContext; 
m2pim4Parser.EnumerationContext = EnumerationContext; 
m2pim4Parser.IdentListContext = IdentListContext; 
m2pim4Parser.SubrangeTypeContext = SubrangeTypeContext; 
m2pim4Parser.ArrayTypeContext = ArrayTypeContext; 
m2pim4Parser.RecordTypeContext = RecordTypeContext; 
m2pim4Parser.FieldListSequenceContext = FieldListSequenceContext; 
m2pim4Parser.FieldListContext = FieldListContext; 
m2pim4Parser.VariantContext = VariantContext; 
m2pim4Parser.CaseLabelListContext = CaseLabelListContext; 
m2pim4Parser.CaseLabelsContext = CaseLabelsContext; 
m2pim4Parser.SetTypeContext = SetTypeContext; 
m2pim4Parser.PointerTypeContext = PointerTypeContext; 
m2pim4Parser.ProcedureTypeContext = ProcedureTypeContext; 
m2pim4Parser.FormalTypeListContext = FormalTypeListContext; 
m2pim4Parser.VariableDeclarationContext = VariableDeclarationContext; 
m2pim4Parser.DesignatorContext = DesignatorContext; 
m2pim4Parser.DesignatorTailContext = DesignatorTailContext; 
m2pim4Parser.ExpListContext = ExpListContext; 
m2pim4Parser.ExpressionContext = ExpressionContext; 
m2pim4Parser.SimpleExpressionContext = SimpleExpressionContext; 
m2pim4Parser.TermContext = TermContext; 
m2pim4Parser.FactorContext = FactorContext; 
m2pim4Parser.SetOrDesignatorOrProcCallContext = SetOrDesignatorOrProcCallContext; 
m2pim4Parser.ActualParametersContext = ActualParametersContext; 
m2pim4Parser.StatementContext = StatementContext; 
m2pim4Parser.AssignmentOrProcCallContext = AssignmentOrProcCallContext; 
m2pim4Parser.StatementSequenceContext = StatementSequenceContext; 
m2pim4Parser.IfStatementContext = IfStatementContext; 
m2pim4Parser.CaseStatementContext = CaseStatementContext; 
m2pim4Parser.CcaseContext = CcaseContext; 
m2pim4Parser.WhileStatementContext = WhileStatementContext; 
m2pim4Parser.RepeatStatementContext = RepeatStatementContext; 
m2pim4Parser.ForStatementContext = ForStatementContext; 
m2pim4Parser.LoopStatementContext = LoopStatementContext; 
m2pim4Parser.WithStatementContext = WithStatementContext; 
m2pim4Parser.ProcedureDeclarationContext = ProcedureDeclarationContext; 
m2pim4Parser.ProcedureHeadingContext = ProcedureHeadingContext; 
m2pim4Parser.BlockContext = BlockContext; 
m2pim4Parser.DeclarationContext = DeclarationContext; 
m2pim4Parser.FormalParametersContext = FormalParametersContext; 
m2pim4Parser.FpSectionContext = FpSectionContext; 
m2pim4Parser.FormalTypeContext = FormalTypeContext; 
m2pim4Parser.ModuleDeclarationContext = ModuleDeclarationContext; 
m2pim4Parser.PriorityContext = PriorityContext; 
m2pim4Parser.ExportListContext = ExportListContext; 
m2pim4Parser.ImportListContext = ImportListContext; 
m2pim4Parser.DefinitionModuleContext = DefinitionModuleContext; 
m2pim4Parser.DefinitionContext = DefinitionContext; 
m2pim4Parser.ProgramModuleContext = ProgramModuleContext; 
m2pim4Parser.CompilationUnitContext = CompilationUnitContext; 
