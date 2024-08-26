// Generated from Resources/Parsers/turing/turing.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import turingListener from './turingListener.js';
const serializedATN = [4,1,64,665,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,1,0,4,0,108,8,0,11,0,12,0,109,1,1,
1,1,1,1,3,1,115,8,1,1,2,1,2,1,2,3,2,120,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,3,3,131,8,3,1,3,1,3,1,3,3,3,136,8,3,1,4,1,4,1,4,1,4,1,4,1,4,5,4,
144,8,4,10,4,12,4,147,9,4,1,4,1,4,1,5,1,5,1,5,1,5,5,5,155,8,5,10,5,12,5,
158,9,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,167,8,5,10,5,12,5,170,9,5,1,5,1,
5,1,5,1,5,3,5,176,8,5,3,5,178,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,
7,3,7,190,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,200,8,8,3,8,202,8,8,1,
9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,5,10,212,8,10,10,10,12,10,215,9,10,1,10,
1,10,1,10,1,11,1,11,3,11,222,8,11,1,12,1,12,1,12,1,12,5,12,228,8,12,10,12,
12,12,231,9,12,1,12,1,12,1,12,1,12,1,12,5,12,238,8,12,10,12,12,12,241,9,
12,1,12,1,12,1,12,5,12,246,8,12,10,12,12,12,249,9,12,1,12,1,12,1,12,1,13,
1,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,265,8,15,10,15,12,
15,268,9,15,1,15,1,15,3,15,272,8,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,280,
8,15,10,15,12,15,283,9,15,1,15,1,15,3,15,287,8,15,1,15,1,15,1,15,1,16,3,
16,293,8,16,1,16,1,16,1,16,5,16,298,8,16,10,16,12,16,301,9,16,1,16,1,16,
1,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,5,17,321,8,17,10,17,12,17,324,9,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,5,17,338,8,17,10,17,12,17,341,9,17,1,17,1,
17,1,17,1,17,1,17,1,17,3,17,349,8,17,1,18,1,18,1,18,1,18,1,19,5,19,356,8,
19,10,19,12,19,359,9,19,1,20,1,20,3,20,363,8,20,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,379,8,21,1,21,1,21,1,21,
1,21,1,21,1,21,3,21,387,8,21,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,
1,23,1,23,5,23,400,8,23,10,23,12,23,403,9,23,1,23,1,23,3,23,407,8,23,1,23,
1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,5,
25,424,8,25,10,25,12,25,427,9,25,1,25,1,25,1,25,1,25,1,25,1,25,5,25,435,
8,25,10,25,12,25,438,9,25,1,25,1,25,1,25,5,25,443,8,25,10,25,12,25,446,9,
25,1,25,1,25,1,25,3,25,451,8,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,3,26,464,8,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,1,26,
1,26,1,26,1,26,1,26,3,26,479,8,26,1,26,1,26,1,26,1,26,3,26,485,8,26,1,27,
1,27,1,27,1,27,1,27,3,27,492,8,27,1,27,1,27,1,27,3,27,497,8,27,1,27,3,27,
500,8,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,3,28,509,8,28,3,28,511,8,28,
3,28,513,8,28,1,28,3,28,516,8,28,1,29,1,29,1,29,1,29,1,29,3,29,523,8,29,
1,29,1,29,1,29,5,29,528,8,29,10,29,12,29,531,9,29,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,3,30,543,8,30,1,31,1,31,1,31,1,31,1,31,1,31,
1,31,1,31,1,31,5,31,554,8,31,10,31,12,31,557,9,31,1,32,1,32,1,33,1,33,1,
33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,
1,40,1,40,1,41,1,41,1,41,3,41,583,8,41,1,42,1,42,1,42,1,42,5,42,589,8,42,
10,42,12,42,592,9,42,1,42,1,42,1,42,1,42,3,42,598,8,42,1,43,1,43,1,44,1,
44,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,615,8,45,
1,45,1,45,1,45,1,45,5,45,621,8,45,10,45,12,45,624,9,45,1,46,1,46,1,47,1,
47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,
1,48,3,48,645,8,48,1,49,1,49,1,50,1,50,1,50,1,50,1,50,3,50,654,8,50,1,50,
1,50,1,51,1,51,1,51,1,51,1,51,1,52,1,52,1,52,0,1,90,53,0,2,4,6,8,10,12,14,
16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,0,3,2,
0,36,36,38,38,2,0,42,43,59,61,2,0,44,45,58,58,705,0,107,1,0,0,0,2,114,1,
0,0,0,4,119,1,0,0,0,6,135,1,0,0,0,8,137,1,0,0,0,10,177,1,0,0,0,12,179,1,
0,0,0,14,189,1,0,0,0,16,201,1,0,0,0,18,203,1,0,0,0,20,207,1,0,0,0,22,221,
1,0,0,0,24,223,1,0,0,0,26,253,1,0,0,0,28,255,1,0,0,0,30,258,1,0,0,0,32,292,
1,0,0,0,34,348,1,0,0,0,36,350,1,0,0,0,38,357,1,0,0,0,40,362,1,0,0,0,42,386,
1,0,0,0,44,388,1,0,0,0,46,390,1,0,0,0,48,411,1,0,0,0,50,416,1,0,0,0,52,484,
1,0,0,0,54,486,1,0,0,0,56,515,1,0,0,0,58,517,1,0,0,0,60,542,1,0,0,0,62,544,
1,0,0,0,64,558,1,0,0,0,66,560,1,0,0,0,68,564,1,0,0,0,70,566,1,0,0,0,72,568,
1,0,0,0,74,570,1,0,0,0,76,572,1,0,0,0,78,574,1,0,0,0,80,576,1,0,0,0,82,582,
1,0,0,0,84,597,1,0,0,0,86,599,1,0,0,0,88,601,1,0,0,0,90,614,1,0,0,0,92,625,
1,0,0,0,94,627,1,0,0,0,96,644,1,0,0,0,98,646,1,0,0,0,100,648,1,0,0,0,102,
657,1,0,0,0,104,662,1,0,0,0,106,108,3,2,1,0,107,106,1,0,0,0,108,109,1,0,
0,0,109,107,1,0,0,0,109,110,1,0,0,0,110,1,1,0,0,0,111,115,3,4,2,0,112,115,
3,42,21,0,113,115,3,28,14,0,114,111,1,0,0,0,114,112,1,0,0,0,114,113,1,0,
0,0,115,3,1,0,0,0,116,120,3,6,3,0,117,120,3,10,5,0,118,120,3,12,6,0,119,
116,1,0,0,0,119,117,1,0,0,0,119,118,1,0,0,0,120,5,1,0,0,0,121,122,5,1,0,
0,122,123,3,104,52,0,123,124,5,2,0,0,124,125,3,90,45,0,125,136,1,0,0,0,126,
127,5,1,0,0,127,130,3,104,52,0,128,129,5,3,0,0,129,131,3,14,7,0,130,128,
1,0,0,0,130,131,1,0,0,0,131,132,1,0,0,0,132,133,5,2,0,0,133,134,3,8,4,0,
134,136,1,0,0,0,135,121,1,0,0,0,135,126,1,0,0,0,136,7,1,0,0,0,137,138,3,
90,45,0,138,139,5,4,0,0,139,140,5,5,0,0,140,145,3,8,4,0,141,142,5,6,0,0,
142,144,3,8,4,0,143,141,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,
1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,149,5,7,0,0,149,9,1,0,0,0,150,
151,5,8,0,0,151,156,3,104,52,0,152,153,5,6,0,0,153,155,3,104,52,0,154,152,
1,0,0,0,155,158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,159,1,0,0,0,
158,156,1,0,0,0,159,160,5,2,0,0,160,161,3,90,45,0,161,178,1,0,0,0,162,163,
5,8,0,0,163,168,3,104,52,0,164,165,5,6,0,0,165,167,3,104,52,0,166,164,1,
0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,171,1,0,0,0,170,
168,1,0,0,0,171,172,5,3,0,0,172,175,3,14,7,0,173,174,5,2,0,0,174,176,3,8,
4,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,150,1,0,0,0,177,
162,1,0,0,0,178,11,1,0,0,0,179,180,5,9,0,0,180,181,3,104,52,0,181,182,5,
3,0,0,182,183,3,14,7,0,183,13,1,0,0,0,184,190,3,16,8,0,185,190,3,18,9,0,
186,190,3,20,10,0,187,190,3,24,12,0,188,190,3,26,13,0,189,184,1,0,0,0,189,
185,1,0,0,0,189,186,1,0,0,0,189,187,1,0,0,0,189,188,1,0,0,0,190,15,1,0,0,
0,191,202,5,10,0,0,192,202,5,11,0,0,193,202,5,12,0,0,194,199,5,13,0,0,195,
196,5,4,0,0,196,197,3,88,44,0,197,198,5,7,0,0,198,200,1,0,0,0,199,195,1,
0,0,0,199,200,1,0,0,0,200,202,1,0,0,0,201,191,1,0,0,0,201,192,1,0,0,0,201,
193,1,0,0,0,201,194,1,0,0,0,202,17,1,0,0,0,203,204,3,88,44,0,204,205,5,14,
0,0,205,206,3,90,45,0,206,19,1,0,0,0,207,208,5,15,0,0,208,213,3,22,11,0,
209,210,5,6,0,0,210,212,3,22,11,0,211,209,1,0,0,0,212,215,1,0,0,0,213,211,
1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,217,5,16,0,0,
217,218,3,14,7,0,218,21,1,0,0,0,219,222,3,18,9,0,220,222,3,26,13,0,221,219,
1,0,0,0,221,220,1,0,0,0,222,23,1,0,0,0,223,224,5,17,0,0,224,229,3,104,52,
0,225,226,5,6,0,0,226,228,3,104,52,0,227,225,1,0,0,0,228,231,1,0,0,0,229,
227,1,0,0,0,229,230,1,0,0,0,230,232,1,0,0,0,231,229,1,0,0,0,232,233,5,3,
0,0,233,247,3,14,7,0,234,239,3,104,52,0,235,236,5,6,0,0,236,238,3,104,52,
0,237,235,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,242,
1,0,0,0,241,239,1,0,0,0,242,243,5,3,0,0,243,244,3,14,7,0,244,246,1,0,0,0,
245,234,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,247,248,1,0,0,0,248,250,
1,0,0,0,249,247,1,0,0,0,250,251,5,18,0,0,251,252,5,17,0,0,252,25,1,0,0,0,
253,254,3,104,52,0,254,27,1,0,0,0,255,256,3,30,15,0,256,257,3,36,18,0,257,
29,1,0,0,0,258,259,5,19,0,0,259,271,3,104,52,0,260,261,5,4,0,0,261,266,3,
32,16,0,262,263,5,6,0,0,263,265,3,32,16,0,264,262,1,0,0,0,265,268,1,0,0,
0,266,264,1,0,0,0,266,267,1,0,0,0,267,269,1,0,0,0,268,266,1,0,0,0,269,270,
5,7,0,0,270,272,1,0,0,0,271,260,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,
273,274,5,20,0,0,274,286,3,104,52,0,275,276,5,4,0,0,276,281,3,32,16,0,277,
278,5,6,0,0,278,280,3,32,16,0,279,277,1,0,0,0,280,283,1,0,0,0,281,279,1,
0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,283,281,1,0,0,0,284,285,5,7,0,0,285,
287,1,0,0,0,286,275,1,0,0,0,286,287,1,0,0,0,287,288,1,0,0,0,288,289,5,3,
0,0,289,290,3,14,7,0,290,31,1,0,0,0,291,293,5,8,0,0,292,291,1,0,0,0,292,
293,1,0,0,0,293,294,1,0,0,0,294,299,3,104,52,0,295,296,5,6,0,0,296,298,3,
104,52,0,297,295,1,0,0,0,298,301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,
300,302,1,0,0,0,301,299,1,0,0,0,302,303,5,3,0,0,303,304,3,34,17,0,304,33,
1,0,0,0,305,306,5,3,0,0,306,349,3,14,7,0,307,308,5,13,0,0,308,309,5,4,0,
0,309,310,5,21,0,0,310,349,5,7,0,0,311,312,5,15,0,0,312,313,3,88,44,0,313,
314,5,14,0,0,314,322,5,21,0,0,315,316,5,6,0,0,316,317,3,88,44,0,317,318,
5,14,0,0,318,319,5,21,0,0,319,321,1,0,0,0,320,315,1,0,0,0,321,324,1,0,0,
0,322,320,1,0,0,0,322,323,1,0,0,0,323,325,1,0,0,0,324,322,1,0,0,0,325,326,
5,16,0,0,326,327,3,14,7,0,327,349,1,0,0,0,328,329,5,15,0,0,329,330,3,88,
44,0,330,331,5,14,0,0,331,339,5,21,0,0,332,333,5,6,0,0,333,334,3,88,44,0,
334,335,5,14,0,0,335,336,5,21,0,0,336,338,1,0,0,0,337,332,1,0,0,0,338,341,
1,0,0,0,339,337,1,0,0,0,339,340,1,0,0,0,340,342,1,0,0,0,341,339,1,0,0,0,
342,343,5,16,0,0,343,344,3,92,46,0,344,345,5,4,0,0,345,346,5,21,0,0,346,
347,5,7,0,0,347,349,1,0,0,0,348,305,1,0,0,0,348,307,1,0,0,0,348,311,1,0,
0,0,348,328,1,0,0,0,349,35,1,0,0,0,350,351,3,38,19,0,351,352,5,18,0,0,352,
353,3,104,52,0,353,37,1,0,0,0,354,356,3,40,20,0,355,354,1,0,0,0,356,359,
1,0,0,0,357,355,1,0,0,0,357,358,1,0,0,0,358,39,1,0,0,0,359,357,1,0,0,0,360,
363,3,4,2,0,361,363,3,42,21,0,362,360,1,0,0,0,362,361,1,0,0,0,363,41,1,0,
0,0,364,365,3,78,39,0,365,366,5,2,0,0,366,367,3,90,45,0,367,387,1,0,0,0,
368,387,3,44,22,0,369,370,5,22,0,0,370,387,3,86,43,0,371,372,5,23,0,0,372,
387,3,90,45,0,373,387,3,46,23,0,374,387,3,48,24,0,375,378,5,24,0,0,376,377,
5,25,0,0,377,379,3,86,43,0,378,376,1,0,0,0,378,379,1,0,0,0,379,387,1,0,0,
0,380,387,3,50,25,0,381,387,3,52,26,0,382,387,3,54,27,0,383,387,3,58,29,
0,384,387,3,62,31,0,385,387,3,66,33,0,386,364,1,0,0,0,386,368,1,0,0,0,386,
369,1,0,0,0,386,371,1,0,0,0,386,373,1,0,0,0,386,374,1,0,0,0,386,375,1,0,
0,0,386,380,1,0,0,0,386,381,1,0,0,0,386,382,1,0,0,0,386,383,1,0,0,0,386,
384,1,0,0,0,386,385,1,0,0,0,387,43,1,0,0,0,388,389,3,80,40,0,389,45,1,0,
0,0,390,391,5,26,0,0,391,392,3,86,43,0,392,393,5,27,0,0,393,401,3,38,19,
0,394,395,5,28,0,0,395,396,3,86,43,0,396,397,5,27,0,0,397,398,3,38,19,0,
398,400,1,0,0,0,399,394,1,0,0,0,400,403,1,0,0,0,401,399,1,0,0,0,401,402,
1,0,0,0,402,406,1,0,0,0,403,401,1,0,0,0,404,405,5,29,0,0,405,407,3,38,19,
0,406,404,1,0,0,0,406,407,1,0,0,0,407,408,1,0,0,0,408,409,5,18,0,0,409,410,
5,26,0,0,410,47,1,0,0,0,411,412,5,30,0,0,412,413,3,38,19,0,413,414,5,18,
0,0,414,415,5,30,0,0,415,49,1,0,0,0,416,417,5,31,0,0,417,418,3,90,45,0,418,
419,5,16,0,0,419,420,5,32,0,0,420,425,3,88,44,0,421,422,5,6,0,0,422,424,
3,88,44,0,423,421,1,0,0,0,424,427,1,0,0,0,425,423,1,0,0,0,425,426,1,0,0,
0,426,428,1,0,0,0,427,425,1,0,0,0,428,429,5,3,0,0,429,444,3,38,19,0,430,
431,5,32,0,0,431,436,3,88,44,0,432,433,5,6,0,0,433,435,3,88,44,0,434,432,
1,0,0,0,435,438,1,0,0,0,436,434,1,0,0,0,436,437,1,0,0,0,437,439,1,0,0,0,
438,436,1,0,0,0,439,440,5,3,0,0,440,441,3,38,19,0,441,443,1,0,0,0,442,430,
1,0,0,0,443,446,1,0,0,0,444,442,1,0,0,0,444,445,1,0,0,0,445,450,1,0,0,0,
446,444,1,0,0,0,447,448,5,32,0,0,448,449,5,3,0,0,449,451,3,38,19,0,450,447,
1,0,0,0,450,451,1,0,0,0,451,452,1,0,0,0,452,453,5,18,0,0,453,454,5,31,0,
0,454,51,1,0,0,0,455,456,5,33,0,0,456,457,3,104,52,0,457,458,5,3,0,0,458,
459,3,90,45,0,459,460,5,14,0,0,460,463,3,90,45,0,461,462,5,34,0,0,462,464,
3,90,45,0,463,461,1,0,0,0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,3,38,19,
0,466,467,5,18,0,0,467,468,5,33,0,0,468,485,1,0,0,0,469,470,5,33,0,0,470,
471,5,35,0,0,471,472,3,104,52,0,472,473,5,3,0,0,473,474,3,90,45,0,474,475,
5,14,0,0,475,478,3,90,45,0,476,477,5,34,0,0,477,479,3,90,45,0,478,476,1,
0,0,0,478,479,1,0,0,0,479,480,1,0,0,0,480,481,3,38,19,0,481,482,5,18,0,0,
482,483,5,33,0,0,483,485,1,0,0,0,484,455,1,0,0,0,484,469,1,0,0,0,485,53,
1,0,0,0,486,491,5,36,0,0,487,488,5,3,0,0,488,489,3,68,34,0,489,490,5,6,0,
0,490,492,1,0,0,0,491,487,1,0,0,0,491,492,1,0,0,0,492,493,1,0,0,0,493,496,
3,56,28,0,494,495,5,6,0,0,495,497,3,56,28,0,496,494,1,0,0,0,496,497,1,0,
0,0,497,499,1,0,0,0,498,500,5,14,0,0,499,498,1,0,0,0,499,500,1,0,0,0,500,
55,1,0,0,0,501,512,3,90,45,0,502,503,5,3,0,0,503,510,3,70,35,0,504,505,5,
3,0,0,505,508,3,72,36,0,506,507,5,3,0,0,507,509,3,74,37,0,508,506,1,0,0,
0,508,509,1,0,0,0,509,511,1,0,0,0,510,504,1,0,0,0,510,511,1,0,0,0,511,513,
1,0,0,0,512,502,1,0,0,0,512,513,1,0,0,0,513,516,1,0,0,0,514,516,5,37,0,0,
515,501,1,0,0,0,515,514,1,0,0,0,516,57,1,0,0,0,517,522,5,38,0,0,518,519,
5,3,0,0,519,520,3,68,34,0,520,521,5,6,0,0,521,523,1,0,0,0,522,518,1,0,0,
0,522,523,1,0,0,0,523,524,1,0,0,0,524,529,3,60,30,0,525,526,5,6,0,0,526,
528,3,60,30,0,527,525,1,0,0,0,528,531,1,0,0,0,529,527,1,0,0,0,529,530,1,
0,0,0,530,59,1,0,0,0,531,529,1,0,0,0,532,543,3,78,39,0,533,534,5,37,0,0,
534,535,3,78,39,0,535,536,5,3,0,0,536,537,5,21,0,0,537,543,1,0,0,0,538,539,
3,78,39,0,539,540,5,3,0,0,540,541,3,70,35,0,541,543,1,0,0,0,542,532,1,0,
0,0,542,533,1,0,0,0,542,538,1,0,0,0,543,61,1,0,0,0,544,545,5,39,0,0,545,
546,5,3,0,0,546,547,3,76,38,0,547,548,5,6,0,0,548,549,3,92,46,0,549,550,
5,6,0,0,550,555,3,64,32,0,551,552,5,6,0,0,552,554,3,64,32,0,553,551,1,0,
0,0,554,557,1,0,0,0,555,553,1,0,0,0,555,556,1,0,0,0,556,63,1,0,0,0,557,555,
1,0,0,0,558,559,7,0,0,0,559,65,1,0,0,0,560,561,5,40,0,0,561,562,5,3,0,0,
562,563,3,76,38,0,563,67,1,0,0,0,564,565,3,90,45,0,565,69,1,0,0,0,566,567,
3,90,45,0,567,71,1,0,0,0,568,569,3,90,45,0,569,73,1,0,0,0,570,571,3,90,45,
0,571,75,1,0,0,0,572,573,3,90,45,0,573,77,1,0,0,0,574,575,3,80,40,0,575,
79,1,0,0,0,576,577,3,104,52,0,577,578,3,82,41,0,578,81,1,0,0,0,579,580,3,
84,42,0,580,581,3,82,41,0,581,583,1,0,0,0,582,579,1,0,0,0,582,583,1,0,0,
0,583,83,1,0,0,0,584,585,5,4,0,0,585,590,3,90,45,0,586,587,5,6,0,0,587,589,
3,90,45,0,588,586,1,0,0,0,589,592,1,0,0,0,590,588,1,0,0,0,590,591,1,0,0,
0,591,593,1,0,0,0,592,590,1,0,0,0,593,594,5,7,0,0,594,598,1,0,0,0,595,596,
5,41,0,0,596,598,3,104,52,0,597,584,1,0,0,0,597,595,1,0,0,0,598,85,1,0,0,
0,599,600,3,90,45,0,600,87,1,0,0,0,601,602,3,90,45,0,602,89,1,0,0,0,603,
604,6,45,-1,0,604,615,3,80,40,0,605,615,3,94,47,0,606,615,3,100,50,0,607,
608,3,98,49,0,608,609,3,90,45,2,609,615,1,0,0,0,610,611,5,4,0,0,611,612,
3,90,45,0,612,613,5,7,0,0,613,615,1,0,0,0,614,603,1,0,0,0,614,605,1,0,0,
0,614,606,1,0,0,0,614,607,1,0,0,0,614,610,1,0,0,0,615,622,1,0,0,0,616,617,
10,3,0,0,617,618,3,96,48,0,618,619,3,90,45,4,619,621,1,0,0,0,620,616,1,0,
0,0,621,624,1,0,0,0,622,620,1,0,0,0,622,623,1,0,0,0,623,91,1,0,0,0,624,622,
1,0,0,0,625,626,5,61,0,0,626,93,1,0,0,0,627,628,7,1,0,0,628,95,1,0,0,0,629,
645,5,44,0,0,630,645,5,45,0,0,631,645,5,21,0,0,632,633,5,46,0,0,633,645,
5,47,0,0,634,645,5,48,0,0,635,645,5,49,0,0,636,645,5,50,0,0,637,645,5,51,
0,0,638,645,5,52,0,0,639,645,5,53,0,0,640,645,5,54,0,0,641,645,5,55,0,0,
642,645,5,56,0,0,643,645,5,57,0,0,644,629,1,0,0,0,644,630,1,0,0,0,644,631,
1,0,0,0,644,632,1,0,0,0,644,634,1,0,0,0,644,635,1,0,0,0,644,636,1,0,0,0,
644,637,1,0,0,0,644,638,1,0,0,0,644,639,1,0,0,0,644,640,1,0,0,0,644,641,
1,0,0,0,644,642,1,0,0,0,644,643,1,0,0,0,645,97,1,0,0,0,646,647,7,2,0,0,647,
99,1,0,0,0,648,649,3,80,40,0,649,650,5,4,0,0,650,653,3,102,51,0,651,652,
5,14,0,0,652,654,3,102,51,0,653,651,1,0,0,0,653,654,1,0,0,0,654,655,1,0,
0,0,655,656,5,7,0,0,656,101,1,0,0,0,657,658,3,90,45,0,658,659,5,21,0,0,659,
660,5,45,0,0,660,661,3,90,45,0,661,103,1,0,0,0,662,663,5,62,0,0,663,105,
1,0,0,0,58,109,114,119,130,135,145,156,168,175,177,189,199,201,213,221,229,
239,247,266,271,281,286,292,299,322,339,348,357,362,378,386,401,406,425,
436,444,450,463,478,484,491,496,499,508,510,512,515,522,529,542,555,582,
590,597,614,622,644,653];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class turingParser extends antlr4.Parser {

    static grammarFileName = "turing.g4";
    static literalNames = [ null, "'const'", "':='", "':'", "'('", "'init'", 
                            "','", "')'", "'var'", "'type'", "'int'", "'real'", 
                            "'boolean'", "'string'", "'..'", "'array'", 
                            "'of'", "'record'", "'end'", "'procedure'", 
                            "'function'", "'*'", "'assert'", "'result'", 
                            "'exit'", "'when'", "'if'", "'then'", "'elsif'", 
                            "'else'", "'loop'", "'case'", "'label'", "'for'", 
                            "'by'", "'decreasing'", "'put'", "'skip'", "'get'", 
                            "'open'", "'close'", "'.'", "'true'", "'false'", 
                            "'+'", "'\\u2013'", "'/'", "'div'", "'mod'", 
                            "'**'", "'<'", "'>'", "'='", "'<='", "'>='", 
                            "'not='", "'and'", "'or'", "'not'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "ExplicitUnsignedIntegerConstant", 
                             "ExplicitUnsignedRealConstant", "ExplicitStringConstant", 
                             "IDENTIFIER", "COMMENT", "WS" ];
    static ruleNames = [ "program", "declarationOrStatementInMainProgram", 
                         "declaration", "constantDeclaration", "initializingValue", 
                         "variableDeclaration", "typeDeclaration", "typeSpec", 
                         "standardType", "subrangeType", "arrayType", "indexType", 
                         "recordType", "namedType", "subprogramDeclaration", 
                         "subprogramHeader", "parameterDeclaration", "parameterType", 
                         "subprogramBody", "declarationsAndStatements", 
                         "declarationOrStatement", "statement", "procedureCall", 
                         "ifStatement", "loopStatement", "caseStatement", 
                         "forStatement", "putStatement", "putItem", "getStatement", 
                         "getItem", "openStatement", "capability", "closeStatement", 
                         "streamNumber", "widthExpn", "fractionWidth", "exponentWidth", 
                         "fileNumber", "variableReference", "reference", 
                         "reference_2", "componentSelector", "booleanExpn", 
                         "compileTimeExpn", "expn", "string", "explicitConstant", 
                         "infixOperator", "prefixOperator", "substring", 
                         "substringPosition", "id_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = turingParser.ruleNames;
        this.literalNames = turingParser.literalNames;
        this.symbolicNames = turingParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 45:
    	    		return this.expn_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expn_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, turingParser.RULE_program);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 106;
	            this.declarationOrStatementInMainProgram();
	            this.state = 109; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turingParser.T__0) | (1 << turingParser.T__7) | (1 << turingParser.T__8) | (1 << turingParser.T__18) | (1 << turingParser.T__21) | (1 << turingParser.T__22) | (1 << turingParser.T__23) | (1 << turingParser.T__25) | (1 << turingParser.T__29) | (1 << turingParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (turingParser.T__32 - 33)) | (1 << (turingParser.T__35 - 33)) | (1 << (turingParser.T__37 - 33)) | (1 << (turingParser.T__38 - 33)) | (1 << (turingParser.T__39 - 33)) | (1 << (turingParser.IDENTIFIER - 33)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declarationOrStatementInMainProgram() {
	    let localctx = new DeclarationOrStatementInMainProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, turingParser.RULE_declarationOrStatementInMainProgram);
	    try {
	        this.state = 114;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turingParser.T__0:
	        case turingParser.T__7:
	        case turingParser.T__8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.declaration();
	            break;
	        case turingParser.T__21:
	        case turingParser.T__22:
	        case turingParser.T__23:
	        case turingParser.T__25:
	        case turingParser.T__29:
	        case turingParser.T__30:
	        case turingParser.T__32:
	        case turingParser.T__35:
	        case turingParser.T__37:
	        case turingParser.T__38:
	        case turingParser.T__39:
	        case turingParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.statement();
	            break;
	        case turingParser.T__18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.subprogramDeclaration();
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



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, turingParser.RULE_declaration);
	    try {
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turingParser.T__0:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 116;
	            this.constantDeclaration();
	            break;
	        case turingParser.T__7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 117;
	            this.variableDeclaration();
	            break;
	        case turingParser.T__8:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 118;
	            this.typeDeclaration();
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



	constantDeclaration() {
	    let localctx = new ConstantDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, turingParser.RULE_constantDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 121;
	            this.match(turingParser.T__0);
	            this.state = 122;
	            this.id_();
	            this.state = 123;
	            this.match(turingParser.T__1);
	            this.state = 124;
	            this.expn(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 126;
	            this.match(turingParser.T__0);
	            this.state = 127;
	            this.id_();
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===turingParser.T__2) {
	                this.state = 128;
	                this.match(turingParser.T__2);
	                this.state = 129;
	                this.typeSpec();
	            }

	            this.state = 132;
	            this.match(turingParser.T__1);
	            this.state = 133;
	            this.initializingValue();
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



	initializingValue() {
	    let localctx = new InitializingValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, turingParser.RULE_initializingValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.expn(0);
	        this.state = 138;
	        this.match(turingParser.T__3);
	        this.state = 139;
	        this.match(turingParser.T__4);

	        this.state = 140;
	        this.initializingValue();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__5) {
	            this.state = 141;
	            this.match(turingParser.T__5);
	            this.state = 142;
	            this.initializingValue();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
	        this.match(turingParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 10, turingParser.RULE_variableDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 177;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 150;
	            this.match(turingParser.T__7);
	            this.state = 151;
	            this.id_();
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 152;
	                this.match(turingParser.T__5);
	                this.state = 153;
	                this.id_();
	                this.state = 158;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 159;
	            this.match(turingParser.T__1);
	            this.state = 160;
	            this.expn(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.match(turingParser.T__7);
	            this.state = 163;
	            this.id_();
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 164;
	                this.match(turingParser.T__5);
	                this.state = 165;
	                this.id_();
	                this.state = 170;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 171;
	            this.match(turingParser.T__2);
	            this.state = 172;
	            this.typeSpec();
	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===turingParser.T__1) {
	                this.state = 173;
	                this.match(turingParser.T__1);
	                this.state = 174;
	                this.initializingValue();
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



	typeDeclaration() {
	    let localctx = new TypeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, turingParser.RULE_typeDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        this.match(turingParser.T__8);
	        this.state = 180;
	        this.id_();
	        this.state = 181;
	        this.match(turingParser.T__2);
	        this.state = 182;
	        this.typeSpec();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeSpec() {
	    let localctx = new TypeSpecContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, turingParser.RULE_typeSpec);
	    try {
	        this.state = 189;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 184;
	            this.standardType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.subrangeType();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 186;
	            this.arrayType();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 187;
	            this.recordType();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 188;
	            this.namedType();
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



	standardType() {
	    let localctx = new StandardTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, turingParser.RULE_standardType);
	    var _la = 0; // Token type
	    try {
	        this.state = 201;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turingParser.T__9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 191;
	            this.match(turingParser.T__9);
	            break;
	        case turingParser.T__10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 192;
	            this.match(turingParser.T__10);
	            break;
	        case turingParser.T__11:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 193;
	            this.match(turingParser.T__11);
	            break;
	        case turingParser.T__12:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 194;
	            this.match(turingParser.T__12);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===turingParser.T__3) {
	                this.state = 195;
	                this.match(turingParser.T__3);
	                this.state = 196;
	                this.compileTimeExpn();
	                this.state = 197;
	                this.match(turingParser.T__6);
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



	subrangeType() {
	    let localctx = new SubrangeTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, turingParser.RULE_subrangeType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.compileTimeExpn();
	        this.state = 204;
	        this.match(turingParser.T__13);
	        this.state = 205;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 20, turingParser.RULE_arrayType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.match(turingParser.T__14);
	        this.state = 208;
	        this.indexType();
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__5) {
	            this.state = 209;
	            this.match(turingParser.T__5);
	            this.state = 210;
	            this.indexType();
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 216;
	        this.match(turingParser.T__15);
	        this.state = 217;
	        this.typeSpec();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	indexType() {
	    let localctx = new IndexTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, turingParser.RULE_indexType);
	    try {
	        this.state = 221;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 219;
	            this.subrangeType();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 220;
	            this.namedType();
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



	recordType() {
	    let localctx = new RecordTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, turingParser.RULE_recordType);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(turingParser.T__16);
	        this.state = 224;
	        this.id_();
	        this.state = 229;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__5) {
	            this.state = 225;
	            this.match(turingParser.T__5);
	            this.state = 226;
	            this.id_();
	            this.state = 231;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 232;
	        this.match(turingParser.T__2);
	        this.state = 233;
	        this.typeSpec();
	        this.state = 247;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.IDENTIFIER) {
	            this.state = 234;
	            this.id_();
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 235;
	                this.match(turingParser.T__5);
	                this.state = 236;
	                this.id_();
	                this.state = 241;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 242;
	            this.match(turingParser.T__2);
	            this.state = 243;
	            this.typeSpec();
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 250;
	        this.match(turingParser.T__17);
	        this.state = 251;
	        this.match(turingParser.T__16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namedType() {
	    let localctx = new NamedTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, turingParser.RULE_namedType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
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



	subprogramDeclaration() {
	    let localctx = new SubprogramDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, turingParser.RULE_subprogramDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.subprogramHeader();
	        this.state = 256;
	        this.subprogramBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subprogramHeader() {
	    let localctx = new SubprogramHeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, turingParser.RULE_subprogramHeader);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this.match(turingParser.T__18);
	        this.state = 259;
	        this.id_();
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__3) {
	            this.state = 260;
	            this.match(turingParser.T__3);
	            this.state = 261;
	            this.parameterDeclaration();
	            this.state = 266;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 262;
	                this.match(turingParser.T__5);
	                this.state = 263;
	                this.parameterDeclaration();
	                this.state = 268;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 269;
	            this.match(turingParser.T__6);
	        }

	        this.state = 273;
	        this.match(turingParser.T__19);
	        this.state = 274;
	        this.id_();
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__3) {
	            this.state = 275;
	            this.match(turingParser.T__3);
	            this.state = 276;
	            this.parameterDeclaration();
	            this.state = 281;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 277;
	                this.match(turingParser.T__5);
	                this.state = 278;
	                this.parameterDeclaration();
	                this.state = 283;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 284;
	            this.match(turingParser.T__6);
	        }

	        this.state = 288;
	        this.match(turingParser.T__2);
	        this.state = 289;
	        this.typeSpec();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterDeclaration() {
	    let localctx = new ParameterDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, turingParser.RULE_parameterDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__7) {
	            this.state = 291;
	            this.match(turingParser.T__7);
	        }

	        this.state = 294;
	        this.id_();
	        this.state = 299;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__5) {
	            this.state = 295;
	            this.match(turingParser.T__5);
	            this.state = 296;
	            this.id_();
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 302;
	        this.match(turingParser.T__2);
	        this.state = 303;
	        this.parameterType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterType() {
	    let localctx = new ParameterTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, turingParser.RULE_parameterType);
	    var _la = 0; // Token type
	    try {
	        this.state = 348;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 305;
	            this.match(turingParser.T__2);
	            this.state = 306;
	            this.typeSpec();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 307;
	            this.match(turingParser.T__12);
	            this.state = 308;
	            this.match(turingParser.T__3);
	            this.state = 309;
	            this.match(turingParser.T__20);
	            this.state = 310;
	            this.match(turingParser.T__6);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 311;
	            this.match(turingParser.T__14);
	            this.state = 312;
	            this.compileTimeExpn();
	            this.state = 313;
	            this.match(turingParser.T__13);
	            this.state = 314;
	            this.match(turingParser.T__20);
	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 315;
	                this.match(turingParser.T__5);
	                this.state = 316;
	                this.compileTimeExpn();
	                this.state = 317;
	                this.match(turingParser.T__13);
	                this.state = 318;
	                this.match(turingParser.T__20);
	                this.state = 324;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 325;
	            this.match(turingParser.T__15);
	            this.state = 326;
	            this.typeSpec();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 328;
	            this.match(turingParser.T__14);
	            this.state = 329;
	            this.compileTimeExpn();
	            this.state = 330;
	            this.match(turingParser.T__13);
	            this.state = 331;
	            this.match(turingParser.T__20);
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 332;
	                this.match(turingParser.T__5);
	                this.state = 333;
	                this.compileTimeExpn();
	                this.state = 334;
	                this.match(turingParser.T__13);
	                this.state = 335;
	                this.match(turingParser.T__20);
	                this.state = 341;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 342;
	            this.match(turingParser.T__15);
	            this.state = 343;
	            this.string();
	            this.state = 344;
	            this.match(turingParser.T__3);
	            this.state = 345;
	            this.match(turingParser.T__20);
	            this.state = 346;
	            this.match(turingParser.T__6);
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



	subprogramBody() {
	    let localctx = new SubprogramBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, turingParser.RULE_subprogramBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 350;
	        this.declarationsAndStatements();
	        this.state = 351;
	        this.match(turingParser.T__17);
	        this.state = 352;
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



	declarationsAndStatements() {
	    let localctx = new DeclarationsAndStatementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, turingParser.RULE_declarationsAndStatements);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << turingParser.T__0) | (1 << turingParser.T__7) | (1 << turingParser.T__8) | (1 << turingParser.T__21) | (1 << turingParser.T__22) | (1 << turingParser.T__23) | (1 << turingParser.T__25) | (1 << turingParser.T__29) | (1 << turingParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (turingParser.T__32 - 33)) | (1 << (turingParser.T__35 - 33)) | (1 << (turingParser.T__37 - 33)) | (1 << (turingParser.T__38 - 33)) | (1 << (turingParser.T__39 - 33)) | (1 << (turingParser.IDENTIFIER - 33)))) !== 0)) {
	            this.state = 354;
	            this.declarationOrStatement();
	            this.state = 359;
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



	declarationOrStatement() {
	    let localctx = new DeclarationOrStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, turingParser.RULE_declarationOrStatement);
	    try {
	        this.state = 362;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turingParser.T__0:
	        case turingParser.T__7:
	        case turingParser.T__8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 360;
	            this.declaration();
	            break;
	        case turingParser.T__21:
	        case turingParser.T__22:
	        case turingParser.T__23:
	        case turingParser.T__25:
	        case turingParser.T__29:
	        case turingParser.T__30:
	        case turingParser.T__32:
	        case turingParser.T__35:
	        case turingParser.T__37:
	        case turingParser.T__38:
	        case turingParser.T__39:
	        case turingParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 361;
	            this.statement();
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, turingParser.RULE_statement);
	    var _la = 0; // Token type
	    try {
	        this.state = 386;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 364;
	            this.variableReference();
	            this.state = 365;
	            this.match(turingParser.T__1);
	            this.state = 366;
	            this.expn(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 368;
	            this.procedureCall();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 369;
	            this.match(turingParser.T__21);
	            this.state = 370;
	            this.booleanExpn();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 371;
	            this.match(turingParser.T__22);
	            this.state = 372;
	            this.expn(0);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 373;
	            this.ifStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 374;
	            this.loopStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 375;
	            this.match(turingParser.T__23);
	            this.state = 378;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===turingParser.T__24) {
	                this.state = 376;
	                this.match(turingParser.T__24);
	                this.state = 377;
	                this.booleanExpn();
	            }

	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 380;
	            this.caseStatement();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 381;
	            this.forStatement();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 382;
	            this.putStatement();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 383;
	            this.getStatement();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 384;
	            this.openStatement();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 385;
	            this.closeStatement();
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



	procedureCall() {
	    let localctx = new ProcedureCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, turingParser.RULE_procedureCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 388;
	        this.reference();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 46, turingParser.RULE_ifStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.match(turingParser.T__25);
	        this.state = 391;
	        this.booleanExpn();
	        this.state = 392;
	        this.match(turingParser.T__26);
	        this.state = 393;
	        this.declarationsAndStatements();
	        this.state = 401;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__27) {
	            this.state = 394;
	            this.match(turingParser.T__27);
	            this.state = 395;
	            this.booleanExpn();
	            this.state = 396;
	            this.match(turingParser.T__26);
	            this.state = 397;
	            this.declarationsAndStatements();
	            this.state = 403;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 406;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__28) {
	            this.state = 404;
	            this.match(turingParser.T__28);
	            this.state = 405;
	            this.declarationsAndStatements();
	        }

	        this.state = 408;
	        this.match(turingParser.T__17);
	        this.state = 409;
	        this.match(turingParser.T__25);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 48, turingParser.RULE_loopStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this.match(turingParser.T__29);
	        this.state = 412;
	        this.declarationsAndStatements();
	        this.state = 413;
	        this.match(turingParser.T__17);
	        this.state = 414;
	        this.match(turingParser.T__29);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 50, turingParser.RULE_caseStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        this.match(turingParser.T__30);
	        this.state = 417;
	        this.expn(0);
	        this.state = 418;
	        this.match(turingParser.T__15);
	        this.state = 419;
	        this.match(turingParser.T__31);
	        this.state = 420;
	        this.compileTimeExpn();
	        this.state = 425;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__5) {
	            this.state = 421;
	            this.match(turingParser.T__5);
	            this.state = 422;
	            this.compileTimeExpn();
	            this.state = 427;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 428;
	        this.match(turingParser.T__2);
	        this.state = 429;
	        this.declarationsAndStatements();
	        this.state = 444;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 430;
	                this.match(turingParser.T__31);
	                this.state = 431;
	                this.compileTimeExpn();
	                this.state = 436;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===turingParser.T__5) {
	                    this.state = 432;
	                    this.match(turingParser.T__5);
	                    this.state = 433;
	                    this.compileTimeExpn();
	                    this.state = 438;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 439;
	                this.match(turingParser.T__2);
	                this.state = 440;
	                this.declarationsAndStatements(); 
	            }
	            this.state = 446;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	        }

	        this.state = 450;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__31) {
	            this.state = 447;
	            this.match(turingParser.T__31);
	            this.state = 448;
	            this.match(turingParser.T__2);
	            this.state = 449;
	            this.declarationsAndStatements();
	        }

	        this.state = 452;
	        this.match(turingParser.T__17);
	        this.state = 453;
	        this.match(turingParser.T__30);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 52, turingParser.RULE_forStatement);
	    var _la = 0; // Token type
	    try {
	        this.state = 484;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 455;
	            this.match(turingParser.T__32);
	            this.state = 456;
	            this.id_();
	            this.state = 457;
	            this.match(turingParser.T__2);
	            this.state = 458;
	            this.expn(0);
	            this.state = 459;
	            this.match(turingParser.T__13);
	            this.state = 460;
	            this.expn(0);
	            this.state = 463;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===turingParser.T__33) {
	                this.state = 461;
	                this.match(turingParser.T__33);
	                this.state = 462;
	                this.expn(0);
	            }

	            this.state = 465;
	            this.declarationsAndStatements();
	            this.state = 466;
	            this.match(turingParser.T__17);
	            this.state = 467;
	            this.match(turingParser.T__32);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 469;
	            this.match(turingParser.T__32);
	            this.state = 470;
	            this.match(turingParser.T__34);
	            this.state = 471;
	            this.id_();
	            this.state = 472;
	            this.match(turingParser.T__2);
	            this.state = 473;
	            this.expn(0);
	            this.state = 474;
	            this.match(turingParser.T__13);
	            this.state = 475;
	            this.expn(0);
	            this.state = 478;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===turingParser.T__33) {
	                this.state = 476;
	                this.match(turingParser.T__33);
	                this.state = 477;
	                this.expn(0);
	            }

	            this.state = 480;
	            this.declarationsAndStatements();
	            this.state = 481;
	            this.match(turingParser.T__17);
	            this.state = 482;
	            this.match(turingParser.T__32);
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



	putStatement() {
	    let localctx = new PutStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, turingParser.RULE_putStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 486;
	        this.match(turingParser.T__35);
	        this.state = 491;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__2) {
	            this.state = 487;
	            this.match(turingParser.T__2);
	            this.state = 488;
	            this.streamNumber();
	            this.state = 489;
	            this.match(turingParser.T__5);
	        }

	        this.state = 493;
	        this.putItem();
	        this.state = 496;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__5) {
	            this.state = 494;
	            this.match(turingParser.T__5);
	            this.state = 495;
	            this.putItem();
	        }

	        this.state = 499;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__13) {
	            this.state = 498;
	            this.match(turingParser.T__13);
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



	putItem() {
	    let localctx = new PutItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, turingParser.RULE_putItem);
	    var _la = 0; // Token type
	    try {
	        this.state = 515;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turingParser.T__3:
	        case turingParser.T__41:
	        case turingParser.T__42:
	        case turingParser.T__43:
	        case turingParser.T__44:
	        case turingParser.T__57:
	        case turingParser.ExplicitUnsignedIntegerConstant:
	        case turingParser.ExplicitUnsignedRealConstant:
	        case turingParser.ExplicitStringConstant:
	        case turingParser.IDENTIFIER:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 501;
	            this.expn(0);
	            this.state = 512;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===turingParser.T__2) {
	                this.state = 502;
	                this.match(turingParser.T__2);
	                this.state = 503;
	                this.widthExpn();
	                this.state = 510;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===turingParser.T__2) {
	                    this.state = 504;
	                    this.match(turingParser.T__2);
	                    this.state = 505;
	                    this.fractionWidth();
	                    this.state = 508;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===turingParser.T__2) {
	                        this.state = 506;
	                        this.match(turingParser.T__2);
	                        this.state = 507;
	                        this.exponentWidth();
	                    }

	                }

	            }

	            break;
	        case turingParser.T__36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 514;
	            this.match(turingParser.T__36);
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



	getStatement() {
	    let localctx = new GetStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, turingParser.RULE_getStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 517;
	        this.match(turingParser.T__37);
	        this.state = 522;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__2) {
	            this.state = 518;
	            this.match(turingParser.T__2);
	            this.state = 519;
	            this.streamNumber();
	            this.state = 520;
	            this.match(turingParser.T__5);
	        }

	        this.state = 524;
	        this.getItem();
	        this.state = 529;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__5) {
	            this.state = 525;
	            this.match(turingParser.T__5);
	            this.state = 526;
	            this.getItem();
	            this.state = 531;
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



	getItem() {
	    let localctx = new GetItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, turingParser.RULE_getItem);
	    try {
	        this.state = 542;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 532;
	            this.variableReference();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 533;
	            this.match(turingParser.T__36);
	            this.state = 534;
	            this.variableReference();
	            this.state = 535;
	            this.match(turingParser.T__2);
	            this.state = 536;
	            this.match(turingParser.T__20);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 538;
	            this.variableReference();
	            this.state = 539;
	            this.match(turingParser.T__2);
	            this.state = 540;
	            this.widthExpn();
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



	openStatement() {
	    let localctx = new OpenStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, turingParser.RULE_openStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this.match(turingParser.T__38);
	        this.state = 545;
	        this.match(turingParser.T__2);
	        this.state = 546;
	        this.fileNumber();
	        this.state = 547;
	        this.match(turingParser.T__5);
	        this.state = 548;
	        this.string();
	        this.state = 549;
	        this.match(turingParser.T__5);
	        this.state = 550;
	        this.capability();
	        this.state = 555;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===turingParser.T__5) {
	            this.state = 551;
	            this.match(turingParser.T__5);
	            this.state = 552;
	            this.capability();
	            this.state = 557;
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



	capability() {
	    let localctx = new CapabilityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, turingParser.RULE_capability);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 558;
	        _la = this._input.LA(1);
	        if(!(_la===turingParser.T__35 || _la===turingParser.T__37)) {
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



	closeStatement() {
	    let localctx = new CloseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, turingParser.RULE_closeStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 560;
	        this.match(turingParser.T__39);
	        this.state = 561;
	        this.match(turingParser.T__2);
	        this.state = 562;
	        this.fileNumber();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	streamNumber() {
	    let localctx = new StreamNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, turingParser.RULE_streamNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 564;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	widthExpn() {
	    let localctx = new WidthExpnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, turingParser.RULE_widthExpn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fractionWidth() {
	    let localctx = new FractionWidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, turingParser.RULE_fractionWidth);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exponentWidth() {
	    let localctx = new ExponentWidthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, turingParser.RULE_exponentWidth);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 570;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fileNumber() {
	    let localctx = new FileNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, turingParser.RULE_fileNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 572;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableReference() {
	    let localctx = new VariableReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, turingParser.RULE_variableReference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 574;
	        this.reference();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reference() {
	    let localctx = new ReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, turingParser.RULE_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 576;
	        this.id_();
	        this.state = 577;
	        this.reference_2();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reference_2() {
	    let localctx = new Reference_2Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, turingParser.RULE_reference_2);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 582;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        if(la_===1) {
	            this.state = 579;
	            this.componentSelector();
	            this.state = 580;
	            this.reference_2();

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



	componentSelector() {
	    let localctx = new ComponentSelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, turingParser.RULE_componentSelector);
	    var _la = 0; // Token type
	    try {
	        this.state = 597;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turingParser.T__3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 584;
	            this.match(turingParser.T__3);
	            this.state = 585;
	            this.expn(0);
	            this.state = 590;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===turingParser.T__5) {
	                this.state = 586;
	                this.match(turingParser.T__5);
	                this.state = 587;
	                this.expn(0);
	                this.state = 592;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 593;
	            this.match(turingParser.T__6);
	            break;
	        case turingParser.T__40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 595;
	            this.match(turingParser.T__40);
	            this.state = 596;
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



	booleanExpn() {
	    let localctx = new BooleanExpnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, turingParser.RULE_booleanExpn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compileTimeExpn() {
	    let localctx = new CompileTimeExpnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, turingParser.RULE_compileTimeExpn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 601;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expn(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpnContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 90;
	    this.enterRecursionRule(localctx, 90, turingParser.RULE_expn, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 614;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,54,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 604;
	            this.reference();
	            break;

	        case 2:
	            this.state = 605;
	            this.explicitConstant();
	            break;

	        case 3:
	            this.state = 606;
	            this.substring();
	            break;

	        case 4:
	            this.state = 607;
	            this.prefixOperator();
	            this.state = 608;
	            this.expn(2);
	            break;

	        case 5:
	            this.state = 610;
	            this.match(turingParser.T__3);
	            this.state = 611;
	            this.expn(0);
	            this.state = 612;
	            this.match(turingParser.T__6);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 622;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ExpnContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, turingParser.RULE_expn);
	                this.state = 616;
	                if (!( this.precpred(this._ctx, 3))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                }
	                this.state = 617;
	                this.infixOperator();
	                this.state = 618;
	                this.expn(4); 
	            }
	            this.state = 624;
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, turingParser.RULE_string);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 625;
	        this.match(turingParser.ExplicitStringConstant);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	explicitConstant() {
	    let localctx = new ExplicitConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, turingParser.RULE_explicitConstant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 627;
	        _la = this._input.LA(1);
	        if(!(((((_la - 42)) & ~0x1f) == 0 && ((1 << (_la - 42)) & ((1 << (turingParser.T__41 - 42)) | (1 << (turingParser.T__42 - 42)) | (1 << (turingParser.ExplicitUnsignedIntegerConstant - 42)) | (1 << (turingParser.ExplicitUnsignedRealConstant - 42)) | (1 << (turingParser.ExplicitStringConstant - 42)))) !== 0))) {
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



	infixOperator() {
	    let localctx = new InfixOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, turingParser.RULE_infixOperator);
	    try {
	        this.state = 644;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case turingParser.T__43:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 629;
	            this.match(turingParser.T__43);
	            break;
	        case turingParser.T__44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 630;
	            this.match(turingParser.T__44);
	            break;
	        case turingParser.T__20:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 631;
	            this.match(turingParser.T__20);
	            break;
	        case turingParser.T__45:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 632;
	            this.match(turingParser.T__45);
	            this.state = 633;
	            this.match(turingParser.T__46);
	            break;
	        case turingParser.T__47:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 634;
	            this.match(turingParser.T__47);
	            break;
	        case turingParser.T__48:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 635;
	            this.match(turingParser.T__48);
	            break;
	        case turingParser.T__49:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 636;
	            this.match(turingParser.T__49);
	            break;
	        case turingParser.T__50:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 637;
	            this.match(turingParser.T__50);
	            break;
	        case turingParser.T__51:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 638;
	            this.match(turingParser.T__51);
	            break;
	        case turingParser.T__52:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 639;
	            this.match(turingParser.T__52);
	            break;
	        case turingParser.T__53:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 640;
	            this.match(turingParser.T__53);
	            break;
	        case turingParser.T__54:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 641;
	            this.match(turingParser.T__54);
	            break;
	        case turingParser.T__55:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 642;
	            this.match(turingParser.T__55);
	            break;
	        case turingParser.T__56:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 643;
	            this.match(turingParser.T__56);
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



	prefixOperator() {
	    let localctx = new PrefixOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, turingParser.RULE_prefixOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 646;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (turingParser.T__43 - 44)) | (1 << (turingParser.T__44 - 44)) | (1 << (turingParser.T__57 - 44)))) !== 0))) {
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



	substring() {
	    let localctx = new SubstringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, turingParser.RULE_substring);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 648;
	        this.reference();
	        this.state = 649;
	        this.match(turingParser.T__3);
	        this.state = 650;
	        this.substringPosition();
	        this.state = 653;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===turingParser.T__13) {
	            this.state = 651;
	            this.match(turingParser.T__13);
	            this.state = 652;
	            this.substringPosition();
	        }

	        this.state = 655;
	        this.match(turingParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	substringPosition() {
	    let localctx = new SubstringPositionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, turingParser.RULE_substringPosition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 657;
	        this.expn(0);

	        this.state = 658;
	        this.match(turingParser.T__20);

	        this.state = 659;
	        this.match(turingParser.T__44);
	        this.state = 660;
	        this.expn(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 104, turingParser.RULE_id_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 662;
	        this.match(turingParser.IDENTIFIER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

turingParser.EOF = antlr4.Token.EOF;
turingParser.T__0 = 1;
turingParser.T__1 = 2;
turingParser.T__2 = 3;
turingParser.T__3 = 4;
turingParser.T__4 = 5;
turingParser.T__5 = 6;
turingParser.T__6 = 7;
turingParser.T__7 = 8;
turingParser.T__8 = 9;
turingParser.T__9 = 10;
turingParser.T__10 = 11;
turingParser.T__11 = 12;
turingParser.T__12 = 13;
turingParser.T__13 = 14;
turingParser.T__14 = 15;
turingParser.T__15 = 16;
turingParser.T__16 = 17;
turingParser.T__17 = 18;
turingParser.T__18 = 19;
turingParser.T__19 = 20;
turingParser.T__20 = 21;
turingParser.T__21 = 22;
turingParser.T__22 = 23;
turingParser.T__23 = 24;
turingParser.T__24 = 25;
turingParser.T__25 = 26;
turingParser.T__26 = 27;
turingParser.T__27 = 28;
turingParser.T__28 = 29;
turingParser.T__29 = 30;
turingParser.T__30 = 31;
turingParser.T__31 = 32;
turingParser.T__32 = 33;
turingParser.T__33 = 34;
turingParser.T__34 = 35;
turingParser.T__35 = 36;
turingParser.T__36 = 37;
turingParser.T__37 = 38;
turingParser.T__38 = 39;
turingParser.T__39 = 40;
turingParser.T__40 = 41;
turingParser.T__41 = 42;
turingParser.T__42 = 43;
turingParser.T__43 = 44;
turingParser.T__44 = 45;
turingParser.T__45 = 46;
turingParser.T__46 = 47;
turingParser.T__47 = 48;
turingParser.T__48 = 49;
turingParser.T__49 = 50;
turingParser.T__50 = 51;
turingParser.T__51 = 52;
turingParser.T__52 = 53;
turingParser.T__53 = 54;
turingParser.T__54 = 55;
turingParser.T__55 = 56;
turingParser.T__56 = 57;
turingParser.T__57 = 58;
turingParser.ExplicitUnsignedIntegerConstant = 59;
turingParser.ExplicitUnsignedRealConstant = 60;
turingParser.ExplicitStringConstant = 61;
turingParser.IDENTIFIER = 62;
turingParser.COMMENT = 63;
turingParser.WS = 64;

turingParser.RULE_program = 0;
turingParser.RULE_declarationOrStatementInMainProgram = 1;
turingParser.RULE_declaration = 2;
turingParser.RULE_constantDeclaration = 3;
turingParser.RULE_initializingValue = 4;
turingParser.RULE_variableDeclaration = 5;
turingParser.RULE_typeDeclaration = 6;
turingParser.RULE_typeSpec = 7;
turingParser.RULE_standardType = 8;
turingParser.RULE_subrangeType = 9;
turingParser.RULE_arrayType = 10;
turingParser.RULE_indexType = 11;
turingParser.RULE_recordType = 12;
turingParser.RULE_namedType = 13;
turingParser.RULE_subprogramDeclaration = 14;
turingParser.RULE_subprogramHeader = 15;
turingParser.RULE_parameterDeclaration = 16;
turingParser.RULE_parameterType = 17;
turingParser.RULE_subprogramBody = 18;
turingParser.RULE_declarationsAndStatements = 19;
turingParser.RULE_declarationOrStatement = 20;
turingParser.RULE_statement = 21;
turingParser.RULE_procedureCall = 22;
turingParser.RULE_ifStatement = 23;
turingParser.RULE_loopStatement = 24;
turingParser.RULE_caseStatement = 25;
turingParser.RULE_forStatement = 26;
turingParser.RULE_putStatement = 27;
turingParser.RULE_putItem = 28;
turingParser.RULE_getStatement = 29;
turingParser.RULE_getItem = 30;
turingParser.RULE_openStatement = 31;
turingParser.RULE_capability = 32;
turingParser.RULE_closeStatement = 33;
turingParser.RULE_streamNumber = 34;
turingParser.RULE_widthExpn = 35;
turingParser.RULE_fractionWidth = 36;
turingParser.RULE_exponentWidth = 37;
turingParser.RULE_fileNumber = 38;
turingParser.RULE_variableReference = 39;
turingParser.RULE_reference = 40;
turingParser.RULE_reference_2 = 41;
turingParser.RULE_componentSelector = 42;
turingParser.RULE_booleanExpn = 43;
turingParser.RULE_compileTimeExpn = 44;
turingParser.RULE_expn = 45;
turingParser.RULE_string = 46;
turingParser.RULE_explicitConstant = 47;
turingParser.RULE_infixOperator = 48;
turingParser.RULE_prefixOperator = 49;
turingParser.RULE_substring = 50;
turingParser.RULE_substringPosition = 51;
turingParser.RULE_id_ = 52;

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
        this.ruleIndex = turingParser.RULE_program;
    }

	declarationOrStatementInMainProgram = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationOrStatementInMainProgramContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationOrStatementInMainProgramContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitProgram(this);
		}
	}


}



class DeclarationOrStatementInMainProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_declarationOrStatementInMainProgram;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	subprogramDeclaration() {
	    return this.getTypedRuleContext(SubprogramDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclarationOrStatementInMainProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclarationOrStatementInMainProgram(this);
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
        this.ruleIndex = turingParser.RULE_declaration;
    }

	constantDeclaration() {
	    return this.getTypedRuleContext(ConstantDeclarationContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	typeDeclaration() {
	    return this.getTypedRuleContext(TypeDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclaration(this);
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
        this.ruleIndex = turingParser.RULE_constantDeclaration;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	initializingValue() {
	    return this.getTypedRuleContext(InitializingValueContext,0);
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterConstantDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitConstantDeclaration(this);
		}
	}


}



class InitializingValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_initializingValue;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	initializingValue = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InitializingValueContext);
	    } else {
	        return this.getTypedRuleContext(InitializingValueContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterInitializingValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitInitializingValue(this);
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
        this.ruleIndex = turingParser.RULE_variableDeclaration;
    }

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

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	initializingValue() {
	    return this.getTypedRuleContext(InitializingValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitVariableDeclaration(this);
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
        this.ruleIndex = turingParser.RULE_typeDeclaration;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterTypeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitTypeDeclaration(this);
		}
	}


}



class TypeSpecContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_typeSpec;
    }

	standardType() {
	    return this.getTypedRuleContext(StandardTypeContext,0);
	};

	subrangeType() {
	    return this.getTypedRuleContext(SubrangeTypeContext,0);
	};

	arrayType() {
	    return this.getTypedRuleContext(ArrayTypeContext,0);
	};

	recordType() {
	    return this.getTypedRuleContext(RecordTypeContext,0);
	};

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterTypeSpec(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitTypeSpec(this);
		}
	}


}



class StandardTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_standardType;
    }

	compileTimeExpn() {
	    return this.getTypedRuleContext(CompileTimeExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterStandardType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitStandardType(this);
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
        this.ruleIndex = turingParser.RULE_subrangeType;
    }

	compileTimeExpn() {
	    return this.getTypedRuleContext(CompileTimeExpnContext,0);
	};

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubrangeType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
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
        this.ruleIndex = turingParser.RULE_arrayType;
    }

	indexType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IndexTypeContext);
	    } else {
	        return this.getTypedRuleContext(IndexTypeContext,i);
	    }
	};

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterArrayType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitArrayType(this);
		}
	}


}



class IndexTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_indexType;
    }

	subrangeType() {
	    return this.getTypedRuleContext(SubrangeTypeContext,0);
	};

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterIndexType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitIndexType(this);
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
        this.ruleIndex = turingParser.RULE_recordType;
    }

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

	typeSpec = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeSpecContext);
	    } else {
	        return this.getTypedRuleContext(TypeSpecContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterRecordType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitRecordType(this);
		}
	}


}



class NamedTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_namedType;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterNamedType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitNamedType(this);
		}
	}


}



class SubprogramDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_subprogramDeclaration;
    }

	subprogramHeader() {
	    return this.getTypedRuleContext(SubprogramHeaderContext,0);
	};

	subprogramBody() {
	    return this.getTypedRuleContext(SubprogramBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubprogramDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubprogramDeclaration(this);
		}
	}


}



class SubprogramHeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_subprogramHeader;
    }

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

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	parameterDeclaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterDeclarationContext);
	    } else {
	        return this.getTypedRuleContext(ParameterDeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubprogramHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubprogramHeader(this);
		}
	}


}



class ParameterDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_parameterDeclaration;
    }

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

	parameterType() {
	    return this.getTypedRuleContext(ParameterTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterParameterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitParameterDeclaration(this);
		}
	}


}



class ParameterTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_parameterType;
    }

	typeSpec() {
	    return this.getTypedRuleContext(TypeSpecContext,0);
	};

	compileTimeExpn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CompileTimeExpnContext);
	    } else {
	        return this.getTypedRuleContext(CompileTimeExpnContext,i);
	    }
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterParameterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitParameterType(this);
		}
	}


}



class SubprogramBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_subprogramBody;
    }

	declarationsAndStatements() {
	    return this.getTypedRuleContext(DeclarationsAndStatementsContext,0);
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubprogramBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubprogramBody(this);
		}
	}


}



class DeclarationsAndStatementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_declarationsAndStatements;
    }

	declarationOrStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationOrStatementContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationOrStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclarationsAndStatements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclarationsAndStatements(this);
		}
	}


}



class DeclarationOrStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_declarationOrStatement;
    }

	declaration() {
	    return this.getTypedRuleContext(DeclarationContext,0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterDeclarationOrStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitDeclarationOrStatement(this);
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
        this.ruleIndex = turingParser.RULE_statement;
    }

	variableReference() {
	    return this.getTypedRuleContext(VariableReferenceContext,0);
	};

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	procedureCall() {
	    return this.getTypedRuleContext(ProcedureCallContext,0);
	};

	booleanExpn() {
	    return this.getTypedRuleContext(BooleanExpnContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	loopStatement() {
	    return this.getTypedRuleContext(LoopStatementContext,0);
	};

	caseStatement() {
	    return this.getTypedRuleContext(CaseStatementContext,0);
	};

	forStatement() {
	    return this.getTypedRuleContext(ForStatementContext,0);
	};

	putStatement() {
	    return this.getTypedRuleContext(PutStatementContext,0);
	};

	getStatement() {
	    return this.getTypedRuleContext(GetStatementContext,0);
	};

	openStatement() {
	    return this.getTypedRuleContext(OpenStatementContext,0);
	};

	closeStatement() {
	    return this.getTypedRuleContext(CloseStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitStatement(this);
		}
	}


}



class ProcedureCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_procedureCall;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterProcedureCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitProcedureCall(this);
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
        this.ruleIndex = turingParser.RULE_ifStatement;
    }

	booleanExpn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BooleanExpnContext);
	    } else {
	        return this.getTypedRuleContext(BooleanExpnContext,i);
	    }
	};

	declarationsAndStatements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationsAndStatementsContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationsAndStatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitIfStatement(this);
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
        this.ruleIndex = turingParser.RULE_loopStatement;
    }

	declarationsAndStatements() {
	    return this.getTypedRuleContext(DeclarationsAndStatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterLoopStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitLoopStatement(this);
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
        this.ruleIndex = turingParser.RULE_caseStatement;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	compileTimeExpn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CompileTimeExpnContext);
	    } else {
	        return this.getTypedRuleContext(CompileTimeExpnContext,i);
	    }
	};

	declarationsAndStatements = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationsAndStatementsContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationsAndStatementsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCaseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCaseStatement(this);
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
        this.ruleIndex = turingParser.RULE_forStatement;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	declarationsAndStatements() {
	    return this.getTypedRuleContext(DeclarationsAndStatementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterForStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitForStatement(this);
		}
	}


}



class PutStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_putStatement;
    }

	putItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PutItemContext);
	    } else {
	        return this.getTypedRuleContext(PutItemContext,i);
	    }
	};

	streamNumber() {
	    return this.getTypedRuleContext(StreamNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterPutStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitPutStatement(this);
		}
	}


}



class PutItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_putItem;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	widthExpn() {
	    return this.getTypedRuleContext(WidthExpnContext,0);
	};

	fractionWidth() {
	    return this.getTypedRuleContext(FractionWidthContext,0);
	};

	exponentWidth() {
	    return this.getTypedRuleContext(ExponentWidthContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterPutItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitPutItem(this);
		}
	}


}



class GetStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_getStatement;
    }

	getItem = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GetItemContext);
	    } else {
	        return this.getTypedRuleContext(GetItemContext,i);
	    }
	};

	streamNumber() {
	    return this.getTypedRuleContext(StreamNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterGetStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitGetStatement(this);
		}
	}


}



class GetItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_getItem;
    }

	variableReference() {
	    return this.getTypedRuleContext(VariableReferenceContext,0);
	};

	widthExpn() {
	    return this.getTypedRuleContext(WidthExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterGetItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitGetItem(this);
		}
	}


}



class OpenStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_openStatement;
    }

	fileNumber() {
	    return this.getTypedRuleContext(FileNumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	capability = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CapabilityContext);
	    } else {
	        return this.getTypedRuleContext(CapabilityContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterOpenStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitOpenStatement(this);
		}
	}


}



class CapabilityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_capability;
    }


	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCapability(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCapability(this);
		}
	}


}



class CloseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_closeStatement;
    }

	fileNumber() {
	    return this.getTypedRuleContext(FileNumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCloseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCloseStatement(this);
		}
	}


}



class StreamNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_streamNumber;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterStreamNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitStreamNumber(this);
		}
	}


}



class WidthExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_widthExpn;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterWidthExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitWidthExpn(this);
		}
	}


}



class FractionWidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_fractionWidth;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterFractionWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitFractionWidth(this);
		}
	}


}



class ExponentWidthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_exponentWidth;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterExponentWidth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitExponentWidth(this);
		}
	}


}



class FileNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_fileNumber;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterFileNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitFileNumber(this);
		}
	}


}



class VariableReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_variableReference;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterVariableReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitVariableReference(this);
		}
	}


}



class ReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_reference;
    }

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	reference_2() {
	    return this.getTypedRuleContext(Reference_2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitReference(this);
		}
	}


}



class Reference_2Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_reference_2;
    }

	componentSelector() {
	    return this.getTypedRuleContext(ComponentSelectorContext,0);
	};

	reference_2() {
	    return this.getTypedRuleContext(Reference_2Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterReference_2(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitReference_2(this);
		}
	}


}



class ComponentSelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_componentSelector;
    }

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	id_() {
	    return this.getTypedRuleContext(Id_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterComponentSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitComponentSelector(this);
		}
	}


}



class BooleanExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_booleanExpn;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterBooleanExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitBooleanExpn(this);
		}
	}


}



class CompileTimeExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_compileTimeExpn;
    }

	expn() {
	    return this.getTypedRuleContext(ExpnContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterCompileTimeExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitCompileTimeExpn(this);
		}
	}


}



class ExpnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_expn;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	explicitConstant() {
	    return this.getTypedRuleContext(ExplicitConstantContext,0);
	};

	substring() {
	    return this.getTypedRuleContext(SubstringContext,0);
	};

	prefixOperator() {
	    return this.getTypedRuleContext(PrefixOperatorContext,0);
	};

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	infixOperator() {
	    return this.getTypedRuleContext(InfixOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterExpn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitExpn(this);
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
        this.ruleIndex = turingParser.RULE_string;
    }

	ExplicitStringConstant() {
	    return this.getToken(turingParser.ExplicitStringConstant, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitString(this);
		}
	}


}



class ExplicitConstantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_explicitConstant;
    }

	ExplicitUnsignedIntegerConstant() {
	    return this.getToken(turingParser.ExplicitUnsignedIntegerConstant, 0);
	};

	ExplicitUnsignedRealConstant() {
	    return this.getToken(turingParser.ExplicitUnsignedRealConstant, 0);
	};

	ExplicitStringConstant() {
	    return this.getToken(turingParser.ExplicitStringConstant, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterExplicitConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitExplicitConstant(this);
		}
	}


}



class InfixOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_infixOperator;
    }


	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterInfixOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitInfixOperator(this);
		}
	}


}



class PrefixOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_prefixOperator;
    }


	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterPrefixOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitPrefixOperator(this);
		}
	}


}



class SubstringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_substring;
    }

	reference() {
	    return this.getTypedRuleContext(ReferenceContext,0);
	};

	substringPosition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SubstringPositionContext);
	    } else {
	        return this.getTypedRuleContext(SubstringPositionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubstring(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubstring(this);
		}
	}


}



class SubstringPositionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = turingParser.RULE_substringPosition;
    }

	expn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpnContext);
	    } else {
	        return this.getTypedRuleContext(ExpnContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterSubstringPosition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitSubstringPosition(this);
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
        this.ruleIndex = turingParser.RULE_id_;
    }

	IDENTIFIER() {
	    return this.getToken(turingParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.enterId_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof turingListener ) {
	        listener.exitId_(this);
		}
	}


}




turingParser.ProgramContext = ProgramContext; 
turingParser.DeclarationOrStatementInMainProgramContext = DeclarationOrStatementInMainProgramContext; 
turingParser.DeclarationContext = DeclarationContext; 
turingParser.ConstantDeclarationContext = ConstantDeclarationContext; 
turingParser.InitializingValueContext = InitializingValueContext; 
turingParser.VariableDeclarationContext = VariableDeclarationContext; 
turingParser.TypeDeclarationContext = TypeDeclarationContext; 
turingParser.TypeSpecContext = TypeSpecContext; 
turingParser.StandardTypeContext = StandardTypeContext; 
turingParser.SubrangeTypeContext = SubrangeTypeContext; 
turingParser.ArrayTypeContext = ArrayTypeContext; 
turingParser.IndexTypeContext = IndexTypeContext; 
turingParser.RecordTypeContext = RecordTypeContext; 
turingParser.NamedTypeContext = NamedTypeContext; 
turingParser.SubprogramDeclarationContext = SubprogramDeclarationContext; 
turingParser.SubprogramHeaderContext = SubprogramHeaderContext; 
turingParser.ParameterDeclarationContext = ParameterDeclarationContext; 
turingParser.ParameterTypeContext = ParameterTypeContext; 
turingParser.SubprogramBodyContext = SubprogramBodyContext; 
turingParser.DeclarationsAndStatementsContext = DeclarationsAndStatementsContext; 
turingParser.DeclarationOrStatementContext = DeclarationOrStatementContext; 
turingParser.StatementContext = StatementContext; 
turingParser.ProcedureCallContext = ProcedureCallContext; 
turingParser.IfStatementContext = IfStatementContext; 
turingParser.LoopStatementContext = LoopStatementContext; 
turingParser.CaseStatementContext = CaseStatementContext; 
turingParser.ForStatementContext = ForStatementContext; 
turingParser.PutStatementContext = PutStatementContext; 
turingParser.PutItemContext = PutItemContext; 
turingParser.GetStatementContext = GetStatementContext; 
turingParser.GetItemContext = GetItemContext; 
turingParser.OpenStatementContext = OpenStatementContext; 
turingParser.CapabilityContext = CapabilityContext; 
turingParser.CloseStatementContext = CloseStatementContext; 
turingParser.StreamNumberContext = StreamNumberContext; 
turingParser.WidthExpnContext = WidthExpnContext; 
turingParser.FractionWidthContext = FractionWidthContext; 
turingParser.ExponentWidthContext = ExponentWidthContext; 
turingParser.FileNumberContext = FileNumberContext; 
turingParser.VariableReferenceContext = VariableReferenceContext; 
turingParser.ReferenceContext = ReferenceContext; 
turingParser.Reference_2Context = Reference_2Context; 
turingParser.ComponentSelectorContext = ComponentSelectorContext; 
turingParser.BooleanExpnContext = BooleanExpnContext; 
turingParser.CompileTimeExpnContext = CompileTimeExpnContext; 
turingParser.ExpnContext = ExpnContext; 
turingParser.StringContext = StringContext; 
turingParser.ExplicitConstantContext = ExplicitConstantContext; 
turingParser.InfixOperatorContext = InfixOperatorContext; 
turingParser.PrefixOperatorContext = PrefixOperatorContext; 
turingParser.SubstringContext = SubstringContext; 
turingParser.SubstringPositionContext = SubstringPositionContext; 
turingParser.Id_Context = Id_Context; 
