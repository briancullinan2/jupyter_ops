// Generated from ./spass/SpassParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import SpassParserListener from './SpassParserListener.js';
const serializedATN = [4,1,99,698,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,5,0,113,8,0,
10,0,12,0,116,9,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,130,
8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,140,8,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,3,1,150,8,1,1,1,1,1,3,1,154,8,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,162,
8,1,1,1,1,1,3,1,166,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,
179,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,189,8,1,1,1,1,1,3,1,193,8,1,
1,1,1,1,1,1,1,2,1,2,1,3,3,3,201,8,3,1,3,3,3,204,8,3,1,3,5,3,207,8,3,10,3,
12,3,210,9,3,1,3,5,3,213,8,3,10,3,12,3,216,9,3,1,3,5,3,219,8,3,10,3,12,3,
222,9,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,235,8,4,1,4,1,4,
1,4,1,4,1,4,1,4,1,4,1,4,3,4,245,8,4,5,4,247,8,4,10,4,12,4,250,9,4,1,4,1,
4,1,4,3,4,255,8,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,266,8,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,276,8,4,5,4,278,8,4,10,4,12,4,281,9,4,1,4,
1,4,1,4,3,4,286,8,4,1,4,1,4,1,4,1,4,1,4,5,4,293,8,4,10,4,12,4,296,9,4,1,
4,1,4,1,4,3,4,301,8,4,1,4,1,4,1,4,1,5,1,5,1,5,5,5,309,8,5,10,5,12,5,312,
9,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,3,6,321,8,6,1,7,1,7,1,7,3,7,326,8,7,1,7,
1,7,1,7,1,7,1,8,1,8,1,8,1,8,5,8,336,8,8,10,8,12,8,339,9,8,1,8,1,8,1,9,1,
9,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,3,10,362,8,10,1,11,1,11,1,11,1,11,1,11,4,11,369,8,11,11,11,12,11,
370,1,11,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,3,15,390,8,15,1,15,1,15,3,15,394,8,15,1,15,1,15,5,15,398,
8,15,10,15,12,15,401,9,15,1,15,1,15,1,15,1,16,1,16,1,17,1,17,3,17,410,8,
17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,
425,8,18,10,18,12,18,428,9,18,1,18,1,18,3,18,432,8,18,1,19,1,19,1,19,1,19,
5,19,438,8,19,10,19,12,19,441,9,19,1,19,1,19,1,20,1,20,1,20,3,20,448,8,20,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,460,8,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,473,8,22,1,22,1,22,3,22,
477,8,22,1,22,1,22,5,22,481,8,22,10,22,12,22,484,9,22,1,22,1,22,1,22,1,23,
1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,499,8,24,1,25,1,25,1,25,
1,25,1,25,1,25,1,25,1,25,3,25,509,8,25,1,26,1,26,1,26,1,26,1,26,5,26,516,
8,26,10,26,12,26,519,9,26,1,26,1,26,1,27,1,27,1,27,1,27,1,27,5,27,528,8,
27,10,27,12,27,531,9,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,3,28,540,8,28,
1,28,1,28,3,28,544,8,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,28,
1,28,1,28,3,28,558,8,28,1,28,1,28,1,28,5,28,563,8,28,10,28,12,28,566,9,28,
1,28,1,28,1,28,1,29,1,29,1,29,3,29,574,8,29,1,30,1,30,3,30,578,8,30,1,31,
1,31,1,31,3,31,583,8,31,1,32,1,32,1,32,1,32,5,32,589,8,32,10,32,12,32,592,
9,32,1,32,1,32,1,33,1,33,1,33,3,33,599,8,33,1,34,1,34,1,34,1,34,1,34,1,34,
1,34,1,34,1,34,5,34,610,8,34,10,34,12,34,613,9,34,1,34,1,34,1,35,1,35,1,
35,3,35,620,8,35,1,36,1,36,1,36,3,36,625,8,36,1,37,1,37,3,37,629,8,37,1,
38,1,38,1,39,1,39,1,40,1,40,1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,
1,45,4,45,647,8,45,11,45,12,45,648,1,45,1,45,1,45,1,45,1,45,1,45,1,45,1,
45,1,45,1,45,1,45,1,45,3,45,663,8,45,1,45,1,45,1,45,3,45,668,8,45,1,46,1,
46,1,46,1,46,1,46,5,46,675,8,46,10,46,12,46,678,9,46,1,46,1,46,1,46,1,47,
1,47,1,48,1,48,1,49,1,49,3,49,689,8,49,1,50,4,50,692,8,50,11,50,12,50,693,
1,51,1,51,1,51,0,0,52,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
86,88,90,92,94,96,98,100,102,0,5,2,0,68,68,89,90,2,0,4,4,15,15,2,0,11,11,
18,18,17,0,10,10,14,14,20,20,23,24,28,28,35,35,39,39,52,52,55,56,60,60,66,
67,71,72,76,76,78,81,85,85,88,88,91,91,6,0,40,41,62,62,65,65,69,70,75,75,
86,86,729,0,104,1,0,0,0,2,121,1,0,0,0,4,197,1,0,0,0,6,200,1,0,0,0,8,223,
1,0,0,0,10,305,1,0,0,0,12,320,1,0,0,0,14,322,1,0,0,0,16,331,1,0,0,0,18,342,
1,0,0,0,20,361,1,0,0,0,22,363,1,0,0,0,24,375,1,0,0,0,26,377,1,0,0,0,28,379,
1,0,0,0,30,381,1,0,0,0,32,405,1,0,0,0,34,409,1,0,0,0,36,431,1,0,0,0,38,433,
1,0,0,0,40,447,1,0,0,0,42,459,1,0,0,0,44,461,1,0,0,0,46,488,1,0,0,0,48,498,
1,0,0,0,50,508,1,0,0,0,52,510,1,0,0,0,54,522,1,0,0,0,56,534,1,0,0,0,58,573,
1,0,0,0,60,577,1,0,0,0,62,582,1,0,0,0,64,584,1,0,0,0,66,598,1,0,0,0,68,600,
1,0,0,0,70,619,1,0,0,0,72,624,1,0,0,0,74,628,1,0,0,0,76,630,1,0,0,0,78,632,
1,0,0,0,80,634,1,0,0,0,82,636,1,0,0,0,84,638,1,0,0,0,86,640,1,0,0,0,88,642,
1,0,0,0,90,667,1,0,0,0,92,669,1,0,0,0,94,682,1,0,0,0,96,684,1,0,0,0,98,688,
1,0,0,0,100,691,1,0,0,0,102,695,1,0,0,0,104,105,5,5,0,0,105,106,5,59,0,0,
106,107,3,96,48,0,107,108,5,9,0,0,108,109,5,19,0,0,109,110,3,2,1,0,110,114,
3,6,3,0,111,113,3,90,45,0,112,111,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,
0,114,115,1,0,0,0,115,117,1,0,0,0,116,114,1,0,0,0,117,118,5,22,0,0,118,119,
5,19,0,0,119,120,5,0,0,1,120,1,1,0,0,0,121,122,5,44,0,0,122,123,5,19,0,0,
123,124,5,53,0,0,124,129,5,59,0,0,125,126,5,94,0,0,126,127,3,102,51,0,127,
128,5,98,0,0,128,130,1,0,0,0,129,125,1,0,0,0,129,130,1,0,0,0,130,131,1,0,
0,0,131,132,5,9,0,0,132,133,5,19,0,0,133,134,5,3,0,0,134,139,5,59,0,0,135,
136,5,94,0,0,136,137,3,102,51,0,137,138,5,98,0,0,138,140,1,0,0,0,139,135,
1,0,0,0,139,140,1,0,0,0,140,141,1,0,0,0,141,142,5,9,0,0,142,153,5,19,0,0,
143,144,5,92,0,0,144,149,5,59,0,0,145,146,5,94,0,0,146,147,3,102,51,0,147,
148,5,98,0,0,148,150,1,0,0,0,149,145,1,0,0,0,149,150,1,0,0,0,150,151,1,0,
0,0,151,152,5,9,0,0,152,154,5,19,0,0,153,143,1,0,0,0,153,154,1,0,0,0,154,
165,1,0,0,0,155,156,5,50,0,0,156,161,5,59,0,0,157,158,5,94,0,0,158,159,3,
102,51,0,159,160,5,98,0,0,160,162,1,0,0,0,161,157,1,0,0,0,161,162,1,0,0,
0,162,163,1,0,0,0,163,164,5,9,0,0,164,166,5,19,0,0,165,155,1,0,0,0,165,166,
1,0,0,0,166,167,1,0,0,0,167,168,5,82,0,0,168,169,5,59,0,0,169,170,3,4,2,
0,170,171,5,9,0,0,171,172,5,19,0,0,172,173,5,17,0,0,173,178,5,59,0,0,174,
175,5,94,0,0,175,176,3,102,51,0,176,177,5,98,0,0,177,179,1,0,0,0,178,174,
1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,181,5,9,0,0,181,192,5,19,0,0,
182,183,5,16,0,0,183,188,5,59,0,0,184,185,5,94,0,0,185,186,3,102,51,0,186,
187,5,98,0,0,187,189,1,0,0,0,188,184,1,0,0,0,188,189,1,0,0,0,189,190,1,0,
0,0,190,191,5,9,0,0,191,193,5,19,0,0,192,182,1,0,0,0,192,193,1,0,0,0,193,
194,1,0,0,0,194,195,5,21,0,0,195,196,5,19,0,0,196,3,1,0,0,0,197,198,7,0,
0,0,198,5,1,0,0,0,199,201,3,8,4,0,200,199,1,0,0,0,200,201,1,0,0,0,201,203,
1,0,0,0,202,204,3,10,5,0,203,202,1,0,0,0,203,204,1,0,0,0,204,208,1,0,0,0,
205,207,3,30,15,0,206,205,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,
1,0,0,0,209,214,1,0,0,0,210,208,1,0,0,0,211,213,3,44,22,0,212,211,1,0,0,
0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,220,1,0,0,0,216,214,
1,0,0,0,217,219,3,56,28,0,218,217,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,
0,220,221,1,0,0,0,221,7,1,0,0,0,222,220,1,0,0,0,223,224,5,49,0,0,224,254,
5,19,0,0,225,226,5,33,0,0,226,234,5,57,0,0,227,235,3,28,14,0,228,229,5,59,
0,0,229,230,3,28,14,0,230,231,5,13,0,0,231,232,3,98,49,0,232,233,5,9,0,0,
233,235,1,0,0,0,234,227,1,0,0,0,234,228,1,0,0,0,235,248,1,0,0,0,236,244,
5,13,0,0,237,245,3,28,14,0,238,239,5,59,0,0,239,240,3,28,14,0,240,241,5,
13,0,0,241,242,3,98,49,0,242,243,5,9,0,0,243,245,1,0,0,0,244,237,1,0,0,0,
244,238,1,0,0,0,245,247,1,0,0,0,246,236,1,0,0,0,247,250,1,0,0,0,248,246,
1,0,0,0,248,249,1,0,0,0,249,251,1,0,0,0,250,248,1,0,0,0,251,252,5,7,0,0,
252,253,5,19,0,0,253,255,1,0,0,0,254,225,1,0,0,0,254,255,1,0,0,0,255,285,
1,0,0,0,256,257,5,64,0,0,257,265,5,57,0,0,258,266,3,26,13,0,259,260,5,59,
0,0,260,261,3,26,13,0,261,262,5,13,0,0,262,263,3,98,49,0,263,264,5,9,0,0,
264,266,1,0,0,0,265,258,1,0,0,0,265,259,1,0,0,0,266,279,1,0,0,0,267,275,
5,13,0,0,268,276,3,26,13,0,269,270,5,59,0,0,270,271,3,26,13,0,271,272,5,
13,0,0,272,273,3,98,49,0,273,274,5,9,0,0,274,276,1,0,0,0,275,268,1,0,0,0,
275,269,1,0,0,0,276,278,1,0,0,0,277,267,1,0,0,0,278,281,1,0,0,0,279,277,
1,0,0,0,279,280,1,0,0,0,280,282,1,0,0,0,281,279,1,0,0,0,282,283,5,7,0,0,
283,284,5,19,0,0,284,286,1,0,0,0,285,256,1,0,0,0,285,286,1,0,0,0,286,300,
1,0,0,0,287,288,5,74,0,0,288,289,5,57,0,0,289,294,3,24,12,0,290,291,5,13,
0,0,291,293,3,24,12,0,292,290,1,0,0,0,293,296,1,0,0,0,294,292,1,0,0,0,294,
295,1,0,0,0,295,297,1,0,0,0,296,294,1,0,0,0,297,298,5,7,0,0,298,299,5,19,
0,0,299,301,1,0,0,0,300,287,1,0,0,0,300,301,1,0,0,0,301,302,1,0,0,0,302,
303,5,21,0,0,303,304,5,19,0,0,304,9,1,0,0,0,305,306,5,43,0,0,306,310,5,19,
0,0,307,309,3,12,6,0,308,307,1,0,0,0,309,312,1,0,0,0,310,308,1,0,0,0,310,
311,1,0,0,0,311,313,1,0,0,0,312,310,1,0,0,0,313,314,5,21,0,0,314,315,5,19,
0,0,315,11,1,0,0,0,316,321,3,18,9,0,317,321,3,20,10,0,318,321,3,22,11,0,
319,321,3,14,7,0,320,316,1,0,0,0,320,317,1,0,0,0,320,318,1,0,0,0,320,319,
1,0,0,0,321,13,1,0,0,0,322,323,5,73,0,0,323,325,3,24,12,0,324,326,5,32,0,
0,325,324,1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,328,5,34,0,0,328,329,
3,16,8,0,329,330,5,19,0,0,330,15,1,0,0,0,331,332,5,57,0,0,332,337,3,28,14,
0,333,334,5,13,0,0,334,336,3,28,14,0,335,333,1,0,0,0,336,339,1,0,0,0,337,
335,1,0,0,0,337,338,1,0,0,0,338,340,1,0,0,0,339,337,1,0,0,0,340,341,5,7,
0,0,341,17,1,0,0,0,342,343,5,84,0,0,343,344,5,59,0,0,344,345,3,24,12,0,345,
346,5,13,0,0,346,347,3,24,12,0,347,348,5,9,0,0,348,349,5,19,0,0,349,19,1,
0,0,0,350,351,5,30,0,0,351,352,5,59,0,0,352,353,3,38,19,0,353,354,5,13,0,
0,354,355,3,36,18,0,355,356,5,9,0,0,356,357,5,19,0,0,357,362,1,0,0,0,358,
359,3,36,18,0,359,360,5,19,0,0,360,362,1,0,0,0,361,350,1,0,0,0,361,358,1,
0,0,0,362,21,1,0,0,0,363,364,5,63,0,0,364,365,5,59,0,0,365,368,3,26,13,0,
366,367,5,13,0,0,367,369,3,24,12,0,368,366,1,0,0,0,369,370,1,0,0,0,370,368,
1,0,0,0,370,371,1,0,0,0,371,372,1,0,0,0,372,373,5,9,0,0,373,374,5,19,0,0,
374,23,1,0,0,0,375,376,3,96,48,0,376,25,1,0,0,0,377,378,3,96,48,0,378,27,
1,0,0,0,379,380,3,96,48,0,380,29,1,0,0,0,381,382,5,45,0,0,382,383,5,59,0,
0,383,384,3,32,16,0,384,385,5,9,0,0,385,399,5,19,0,0,386,387,5,31,0,0,387,
389,5,59,0,0,388,390,3,36,18,0,389,388,1,0,0,0,389,390,1,0,0,0,390,393,1,
0,0,0,391,392,5,13,0,0,392,394,3,34,17,0,393,391,1,0,0,0,393,394,1,0,0,0,
394,395,1,0,0,0,395,396,5,9,0,0,396,398,5,19,0,0,397,386,1,0,0,0,398,401,
1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,402,1,0,0,0,401,399,1,0,0,0,
402,403,5,21,0,0,403,404,5,19,0,0,404,31,1,0,0,0,405,406,7,1,0,0,406,33,
1,0,0,0,407,410,3,96,48,0,408,410,3,100,50,0,409,407,1,0,0,0,409,408,1,0,
0,0,410,35,1,0,0,0,411,412,3,40,20,0,412,413,5,59,0,0,413,414,3,38,19,0,
414,415,5,13,0,0,415,416,3,36,18,0,416,417,5,9,0,0,417,432,1,0,0,0,418,432,
3,42,21,0,419,420,3,42,21,0,420,421,5,59,0,0,421,426,3,36,18,0,422,423,5,
13,0,0,423,425,3,36,18,0,424,422,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,
426,427,1,0,0,0,427,429,1,0,0,0,428,426,1,0,0,0,429,430,5,9,0,0,430,432,
1,0,0,0,431,411,1,0,0,0,431,418,1,0,0,0,431,419,1,0,0,0,432,37,1,0,0,0,433,
434,5,57,0,0,434,439,3,36,18,0,435,436,5,13,0,0,436,438,3,36,18,0,437,435,
1,0,0,0,438,441,1,0,0,0,439,437,1,0,0,0,439,440,1,0,0,0,440,442,1,0,0,0,
441,439,1,0,0,0,442,443,5,7,0,0,443,39,1,0,0,0,444,448,5,30,0,0,445,448,
5,27,0,0,446,448,3,96,48,0,447,444,1,0,0,0,447,445,1,0,0,0,447,446,1,0,0,
0,448,41,1,0,0,0,449,460,5,25,0,0,450,460,5,87,0,0,451,460,5,29,0,0,452,
460,5,61,0,0,453,460,5,2,0,0,454,460,5,54,0,0,455,460,5,38,0,0,456,460,5,
37,0,0,457,460,5,26,0,0,458,460,3,96,48,0,459,449,1,0,0,0,459,450,1,0,0,
0,459,451,1,0,0,0,459,452,1,0,0,0,459,453,1,0,0,0,459,454,1,0,0,0,459,455,
1,0,0,0,459,456,1,0,0,0,459,457,1,0,0,0,459,458,1,0,0,0,460,43,1,0,0,0,461,
462,5,42,0,0,462,463,5,59,0,0,463,464,3,32,16,0,464,465,5,13,0,0,465,466,
3,46,23,0,466,467,5,9,0,0,467,482,5,19,0,0,468,469,5,6,0,0,469,472,5,59,
0,0,470,473,3,48,24,0,471,473,3,50,25,0,472,470,1,0,0,0,472,471,1,0,0,0,
472,473,1,0,0,0,473,476,1,0,0,0,474,475,5,13,0,0,475,477,3,34,17,0,476,474,
1,0,0,0,476,477,1,0,0,0,477,478,1,0,0,0,478,479,5,9,0,0,479,481,5,19,0,0,
480,468,1,0,0,0,481,484,1,0,0,0,482,480,1,0,0,0,482,483,1,0,0,0,483,485,
1,0,0,0,484,482,1,0,0,0,485,486,5,21,0,0,486,487,5,19,0,0,487,45,1,0,0,0,
488,489,7,2,0,0,489,47,1,0,0,0,490,491,5,30,0,0,491,492,5,59,0,0,492,493,
3,38,19,0,493,494,5,13,0,0,494,495,3,52,26,0,495,496,5,9,0,0,496,499,1,0,
0,0,497,499,3,52,26,0,498,490,1,0,0,0,498,497,1,0,0,0,499,49,1,0,0,0,500,
501,5,27,0,0,501,502,5,59,0,0,502,503,3,38,19,0,503,504,5,13,0,0,504,505,
3,54,27,0,505,506,5,9,0,0,506,509,1,0,0,0,507,509,3,54,27,0,508,500,1,0,
0,0,508,507,1,0,0,0,509,51,1,0,0,0,510,511,5,61,0,0,511,512,5,59,0,0,512,
517,3,36,18,0,513,514,5,13,0,0,514,516,3,36,18,0,515,513,1,0,0,0,516,519,
1,0,0,0,517,515,1,0,0,0,517,518,1,0,0,0,518,520,1,0,0,0,519,517,1,0,0,0,
520,521,5,9,0,0,521,53,1,0,0,0,522,523,5,2,0,0,523,524,5,59,0,0,524,529,
3,36,18,0,525,526,5,13,0,0,526,528,3,36,18,0,527,525,1,0,0,0,528,531,1,0,
0,0,529,527,1,0,0,0,529,530,1,0,0,0,530,532,1,0,0,0,531,529,1,0,0,0,532,
533,5,9,0,0,533,55,1,0,0,0,534,543,5,47,0,0,535,536,5,59,0,0,536,539,3,74,
37,0,537,538,5,13,0,0,538,540,3,68,34,0,539,537,1,0,0,0,539,540,1,0,0,0,
540,541,1,0,0,0,541,542,5,9,0,0,542,544,1,0,0,0,543,535,1,0,0,0,543,544,
1,0,0,0,544,545,1,0,0,0,545,564,5,19,0,0,546,547,5,83,0,0,547,548,5,59,0,
0,548,549,3,58,29,0,549,550,5,13,0,0,550,551,3,60,30,0,551,552,5,13,0,0,
552,553,3,62,31,0,553,554,5,13,0,0,554,557,3,64,32,0,555,556,5,13,0,0,556,
558,3,68,34,0,557,555,1,0,0,0,557,558,1,0,0,0,558,559,1,0,0,0,559,560,5,
9,0,0,560,561,5,19,0,0,561,563,1,0,0,0,562,546,1,0,0,0,563,566,1,0,0,0,564,
562,1,0,0,0,564,565,1,0,0,0,565,567,1,0,0,0,566,564,1,0,0,0,567,568,5,21,
0,0,568,569,5,19,0,0,569,57,1,0,0,0,570,574,3,36,18,0,571,574,3,96,48,0,
572,574,3,76,38,0,573,570,1,0,0,0,573,571,1,0,0,0,573,572,1,0,0,0,574,59,
1,0,0,0,575,578,3,36,18,0,576,578,3,78,39,0,577,575,1,0,0,0,577,576,1,0,
0,0,578,61,1,0,0,0,579,583,3,36,18,0,580,583,3,96,48,0,581,583,3,80,40,0,
582,579,1,0,0,0,582,580,1,0,0,0,582,581,1,0,0,0,583,63,1,0,0,0,584,585,5,
57,0,0,585,590,3,66,33,0,586,587,5,13,0,0,587,589,3,66,33,0,588,586,1,0,
0,0,589,592,1,0,0,0,590,588,1,0,0,0,590,591,1,0,0,0,591,593,1,0,0,0,592,
590,1,0,0,0,593,594,5,7,0,0,594,65,1,0,0,0,595,599,3,36,18,0,596,599,3,96,
48,0,597,599,3,82,41,0,598,595,1,0,0,0,598,596,1,0,0,0,598,597,1,0,0,0,599,
67,1,0,0,0,600,601,5,57,0,0,601,602,3,70,35,0,602,603,5,12,0,0,603,611,3,
72,36,0,604,605,5,13,0,0,605,606,3,70,35,0,606,607,5,12,0,0,607,608,3,72,
36,0,608,610,1,0,0,0,609,604,1,0,0,0,610,613,1,0,0,0,611,609,1,0,0,0,611,
612,1,0,0,0,612,614,1,0,0,0,613,611,1,0,0,0,614,615,5,7,0,0,615,69,1,0,0,
0,616,620,3,36,18,0,617,620,3,96,48,0,618,620,3,86,43,0,619,616,1,0,0,0,
619,617,1,0,0,0,619,618,1,0,0,0,620,71,1,0,0,0,621,625,3,36,18,0,622,625,
3,96,48,0,623,625,3,88,44,0,624,621,1,0,0,0,624,622,1,0,0,0,624,623,1,0,
0,0,625,73,1,0,0,0,626,629,3,96,48,0,627,629,3,84,42,0,628,626,1,0,0,0,628,
627,1,0,0,0,629,75,1,0,0,0,630,631,3,100,50,0,631,77,1,0,0,0,632,633,3,48,
24,0,633,79,1,0,0,0,634,635,7,3,0,0,635,81,1,0,0,0,636,637,3,100,50,0,637,
83,1,0,0,0,638,639,5,75,0,0,639,85,1,0,0,0,640,641,5,77,0,0,641,87,1,0,0,
0,642,643,3,100,50,0,643,89,1,0,0,0,644,646,5,46,0,0,645,647,3,92,46,0,646,
645,1,0,0,0,647,648,1,0,0,0,648,646,1,0,0,0,648,649,1,0,0,0,649,650,1,0,
0,0,650,651,5,21,0,0,651,652,5,19,0,0,652,668,1,0,0,0,653,654,5,48,0,0,654,
655,5,59,0,0,655,656,3,94,47,0,656,657,5,9,0,0,657,662,5,19,0,0,658,659,
5,94,0,0,659,660,3,102,51,0,660,661,5,98,0,0,661,663,1,0,0,0,662,658,1,0,
0,0,662,663,1,0,0,0,663,664,1,0,0,0,664,665,5,21,0,0,665,666,5,19,0,0,666,
668,1,0,0,0,667,644,1,0,0,0,667,653,1,0,0,0,668,91,1,0,0,0,669,670,5,36,
0,0,670,671,5,57,0,0,671,676,3,34,17,0,672,673,5,13,0,0,673,675,3,34,17,
0,674,672,1,0,0,0,675,678,1,0,0,0,676,674,1,0,0,0,676,677,1,0,0,0,677,679,
1,0,0,0,678,676,1,0,0,0,679,680,5,7,0,0,680,681,5,19,0,0,681,93,1,0,0,0,
682,683,7,4,0,0,683,95,1,0,0,0,684,685,5,95,0,0,685,97,1,0,0,0,686,689,5,
51,0,0,687,689,3,100,50,0,688,686,1,0,0,0,688,687,1,0,0,0,689,99,1,0,0,0,
690,692,5,97,0,0,691,690,1,0,0,0,692,693,1,0,0,0,693,691,1,0,0,0,693,694,
1,0,0,0,694,101,1,0,0,0,695,696,5,99,0,0,696,103,1,0,0,0,66,114,129,139,
149,153,161,165,178,188,192,200,203,208,214,220,234,244,248,254,265,275,
279,285,294,300,310,320,325,337,361,370,389,393,399,409,426,431,439,447,
459,472,476,482,498,508,517,529,539,543,557,564,573,577,582,590,598,611,
619,624,628,648,662,667,676,688,693];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SpassParser extends antlr4.Parser {

    static grammarFileName = "SpassParser.g4";
    static literalNames = [ null, "'-'", "'and'", "'author'", "'axioms'", 
                            "'begin_problem'", "'clause'", "']'", "'}'", 
                            "')'", "'ClR'", "'cnf'", "':'", "','", "'Con'", 
                            "'conjectures'", "'date'", "'description'", 
                            "'dnf'", "'.'", "'EmS'", "'end_of_list'", "'end_problem'", 
                            "'EqF'", "'EqR'", "'equal'", "'equiv'", "'exists'", 
                            "'Fac'", "'false'", "'forall'", "'formula'", 
                            "'freely'", "'functions'", "'generated_by'", 
                            "'GeR'", "'hypothesis'", "'implied'", "'implies'", 
                            "'Inp'", "'KIV'", "'LEM'", "'list_of_clauses'", 
                            "'list_of_declarations'", "'list_of_descriptions'", 
                            "'list_of_formulae'", "'list_of_general_settings'", 
                            "'list_of_proof'", "'list_of_settings'", "'list_of_symbols'", 
                            "'logic'", "'-1'", "'MPm'", "'name'", "'not'", 
                            "'Obv'", "'OHy'", "'['", "'{'", "'('", "'OPm'", 
                            "'or'", "'OTTER'", "'predicate'", "'predicates'", 
                            "'PROTEIN'", "'Rew'", "'RRE'", "'satisfiable'", 
                            "'SATURATE'", "'SETHEO'", "'SHy'", "'SoR'", 
                            "'sort'", "'sorts'", "'SPASS'", "'SpL'", "'splitlevel'", 
                            "'SPm'", "'SpR'", "'Spt'", "'SSi'", "'status'", 
                            "'step'", "'subsort'", "'Ter'", "'3TAP'", "'true'", 
                            "'UnC'", "'unknown'", "'unsatisfiable'", "'URR'", 
                            "'version'", null, "'{*'", null, null, null, 
                            "'*}'" ];
    static symbolicNames = [ null, "Special_symbol", "And", "Author", "Axioms", 
                             "Begin_problem", "Clause", "CloseB", "CloseBc", 
                             "CloseP", "ClR", "Cnf", "Colon", "Comma", "Con", 
                             "Conjectures", "Date", "Description", "Dnf", 
                             "Dot", "EmS", "End_of_list", "End_problem", 
                             "EqF", "EqR", "Equal", "Equiv", "Exists", "Fac", 
                             "False_", "Forall", "Formula", "Freely", "Functions", 
                             "Generated_by", "GeR", "Hypothesis", "Implied", 
                             "Implies", "Inp", "KIV", "LEM", "List_of_clauses", 
                             "List_of_declarations", "List_of_descriptions", 
                             "List_of_formulae", "List_of_general_settings", 
                             "List_of_proof", "List_of_settings", "List_of_symbols", 
                             "Logic", "MOne", "MPm", "Name", "Not", "Obv", 
                             "OHy", "OpenB", "OpenBc", "OpenP", "OPm", "Or", 
                             "OTTER", "Predicate", "Predicates", "PROTEIN", 
                             "Rew", "RRE", "Satisfiable", "SATURATE", "SETHEO", 
                             "SHy", "SoR", "Sort", "Sorts", "SPASS", "SpL", 
                             "Splitlevel", "SPm", "SpR", "Spt", "SSi", "Status", 
                             "Step", "Subsort", "Ter", "ThreeTAP", "True_", 
                             "UnC", "Unknown", "Unsatisfiable", "URR", "Version", 
                             "WS", "Open", "Identifier", "Letter", "Digit", 
                             "Close", "JustText" ];
    static ruleNames = [ "problem", "description", "log_state", "logical_part", 
                         "symbol_list", "declaration_list", "declaration", 
                         "gen_decl", "func_list", "subsort_decl", "term_decl", 
                         "pred_decl", "sort_sym", "pred_sym", "fun_sym", 
                         "formula_list", "origin_type", "label", "term", 
                         "term_list", "quant_sym", "symbol", "clause_list", 
                         "clause_type", "cnf_clause", "dnf_clause", "cnf_clause_body", 
                         "dnf_clause_body", "proof_list", "reference", "result", 
                         "rule_appl", "parent_list", "parent_", "assoc_list", 
                         "key", "value", "proof_type", "user_reference", 
                         "user_result", "user_rule_appl", "user_parent", 
                         "user_proof_type", "user_key", "user_value", "settings", 
                         "setting_entry", "setting_label", "identifier", 
                         "arity", "number", "text_" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SpassParser.ruleNames;
        this.literalNames = SpassParser.literalNames;
        this.symbolicNames = SpassParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	problem() {
	    let localctx = new ProblemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SpassParser.RULE_problem);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(SpassParser.Begin_problem);
	        this.state = 105;
	        this.match(SpassParser.OpenP);
	        this.state = 106;
	        this.identifier();
	        this.state = 107;
	        this.match(SpassParser.CloseP);
	        this.state = 108;
	        this.match(SpassParser.Dot);
	        this.state = 109;
	        this.description();
	        this.state = 110;
	        this.logical_part();
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.List_of_general_settings || _la===SpassParser.List_of_settings) {
	            this.state = 111;
	            this.settings();
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
	        this.match(SpassParser.End_problem);
	        this.state = 118;
	        this.match(SpassParser.Dot);
	        this.state = 119;
	        this.match(SpassParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SpassParser.RULE_description);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(SpassParser.List_of_descriptions);
	        this.state = 122;
	        this.match(SpassParser.Dot);
	        this.state = 123;
	        this.match(SpassParser.Name);
	        this.state = 124;
	        this.match(SpassParser.OpenP);
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Open) {
	            this.state = 125;
	            this.match(SpassParser.Open);
	            this.state = 126;
	            this.text_();
	            this.state = 127;
	            this.match(SpassParser.Close);
	        }

	        this.state = 131;
	        this.match(SpassParser.CloseP);
	        this.state = 132;
	        this.match(SpassParser.Dot);
	        this.state = 133;
	        this.match(SpassParser.Author);
	        this.state = 134;
	        this.match(SpassParser.OpenP);
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Open) {
	            this.state = 135;
	            this.match(SpassParser.Open);
	            this.state = 136;
	            this.text_();
	            this.state = 137;
	            this.match(SpassParser.Close);
	        }

	        this.state = 141;
	        this.match(SpassParser.CloseP);
	        this.state = 142;
	        this.match(SpassParser.Dot);
	        this.state = 153;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Version) {
	            this.state = 143;
	            this.match(SpassParser.Version);
	            this.state = 144;
	            this.match(SpassParser.OpenP);
	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Open) {
	                this.state = 145;
	                this.match(SpassParser.Open);
	                this.state = 146;
	                this.text_();
	                this.state = 147;
	                this.match(SpassParser.Close);
	            }

	            this.state = 151;
	            this.match(SpassParser.CloseP);
	            this.state = 152;
	            this.match(SpassParser.Dot);
	        }

	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Logic) {
	            this.state = 155;
	            this.match(SpassParser.Logic);
	            this.state = 156;
	            this.match(SpassParser.OpenP);
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Open) {
	                this.state = 157;
	                this.match(SpassParser.Open);
	                this.state = 158;
	                this.text_();
	                this.state = 159;
	                this.match(SpassParser.Close);
	            }

	            this.state = 163;
	            this.match(SpassParser.CloseP);
	            this.state = 164;
	            this.match(SpassParser.Dot);
	        }

	        this.state = 167;
	        this.match(SpassParser.Status);
	        this.state = 168;
	        this.match(SpassParser.OpenP);
	        this.state = 169;
	        this.log_state();
	        this.state = 170;
	        this.match(SpassParser.CloseP);
	        this.state = 171;
	        this.match(SpassParser.Dot);
	        this.state = 172;
	        this.match(SpassParser.Description);
	        this.state = 173;
	        this.match(SpassParser.OpenP);
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Open) {
	            this.state = 174;
	            this.match(SpassParser.Open);
	            this.state = 175;
	            this.text_();
	            this.state = 176;
	            this.match(SpassParser.Close);
	        }

	        this.state = 180;
	        this.match(SpassParser.CloseP);
	        this.state = 181;
	        this.match(SpassParser.Dot);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Date) {
	            this.state = 182;
	            this.match(SpassParser.Date);
	            this.state = 183;
	            this.match(SpassParser.OpenP);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Open) {
	                this.state = 184;
	                this.match(SpassParser.Open);
	                this.state = 185;
	                this.text_();
	                this.state = 186;
	                this.match(SpassParser.Close);
	            }

	            this.state = 190;
	            this.match(SpassParser.CloseP);
	            this.state = 191;
	            this.match(SpassParser.Dot);
	        }

	        this.state = 194;
	        this.match(SpassParser.End_of_list);
	        this.state = 195;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	log_state() {
	    let localctx = new Log_stateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SpassParser.RULE_log_state);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        _la = this._input.LA(1);
	        if(!(((((_la - 68)) & ~0x1f) == 0 && ((1 << (_la - 68)) & ((1 << (SpassParser.Satisfiable - 68)) | (1 << (SpassParser.Unknown - 68)) | (1 << (SpassParser.Unsatisfiable - 68)))) !== 0))) {
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



	logical_part() {
	    let localctx = new Logical_partContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SpassParser.RULE_logical_part);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.List_of_symbols) {
	            this.state = 199;
	            this.symbol_list();
	        }

	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.List_of_declarations) {
	            this.state = 202;
	            this.declaration_list();
	        }

	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.List_of_formulae) {
	            this.state = 205;
	            this.formula_list();
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.List_of_clauses) {
	            this.state = 211;
	            this.clause_list();
	            this.state = 216;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 220;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.List_of_proof) {
	            this.state = 217;
	            this.proof_list();
	            this.state = 222;
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



	symbol_list() {
	    let localctx = new Symbol_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SpassParser.RULE_symbol_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(SpassParser.List_of_symbols);
	        this.state = 224;
	        this.match(SpassParser.Dot);
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Functions) {
	            this.state = 225;
	            this.match(SpassParser.Functions);
	            this.state = 226;
	            this.match(SpassParser.OpenB);
	            this.state = 234;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SpassParser.Identifier:
	                this.state = 227;
	                this.fun_sym();
	                break;
	            case SpassParser.OpenP:
	                this.state = 228;
	                this.match(SpassParser.OpenP);
	                this.state = 229;
	                this.fun_sym();
	                this.state = 230;
	                this.match(SpassParser.Comma);
	                this.state = 231;
	                this.arity();
	                this.state = 232;
	                this.match(SpassParser.CloseP);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 248;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SpassParser.Comma) {
	                this.state = 236;
	                this.match(SpassParser.Comma);
	                this.state = 244;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case SpassParser.Identifier:
	                    this.state = 237;
	                    this.fun_sym();
	                    break;
	                case SpassParser.OpenP:
	                    this.state = 238;
	                    this.match(SpassParser.OpenP);
	                    this.state = 239;
	                    this.fun_sym();
	                    this.state = 240;
	                    this.match(SpassParser.Comma);
	                    this.state = 241;
	                    this.arity();
	                    this.state = 242;
	                    this.match(SpassParser.CloseP);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 250;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 251;
	            this.match(SpassParser.CloseB);
	            this.state = 252;
	            this.match(SpassParser.Dot);
	        }

	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Predicates) {
	            this.state = 256;
	            this.match(SpassParser.Predicates);
	            this.state = 257;
	            this.match(SpassParser.OpenB);
	            this.state = 265;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case SpassParser.Identifier:
	                this.state = 258;
	                this.pred_sym();
	                break;
	            case SpassParser.OpenP:
	                this.state = 259;
	                this.match(SpassParser.OpenP);
	                this.state = 260;
	                this.pred_sym();
	                this.state = 261;
	                this.match(SpassParser.Comma);
	                this.state = 262;
	                this.arity();
	                this.state = 263;
	                this.match(SpassParser.CloseP);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 279;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SpassParser.Comma) {
	                this.state = 267;
	                this.match(SpassParser.Comma);
	                this.state = 275;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case SpassParser.Identifier:
	                    this.state = 268;
	                    this.pred_sym();
	                    break;
	                case SpassParser.OpenP:
	                    this.state = 269;
	                    this.match(SpassParser.OpenP);
	                    this.state = 270;
	                    this.pred_sym();
	                    this.state = 271;
	                    this.match(SpassParser.Comma);
	                    this.state = 272;
	                    this.arity();
	                    this.state = 273;
	                    this.match(SpassParser.CloseP);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 281;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 282;
	            this.match(SpassParser.CloseB);
	            this.state = 283;
	            this.match(SpassParser.Dot);
	        }

	        this.state = 300;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Sorts) {
	            this.state = 287;
	            this.match(SpassParser.Sorts);
	            this.state = 288;
	            this.match(SpassParser.OpenB);
	            this.state = 289;
	            this.sort_sym();
	            this.state = 294;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SpassParser.Comma) {
	                this.state = 290;
	                this.match(SpassParser.Comma);
	                this.state = 291;
	                this.sort_sym();
	                this.state = 296;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 297;
	            this.match(SpassParser.CloseB);
	            this.state = 298;
	            this.match(SpassParser.Dot);
	        }

	        this.state = 302;
	        this.match(SpassParser.End_of_list);
	        this.state = 303;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration_list() {
	    let localctx = new Declaration_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SpassParser.RULE_declaration_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(SpassParser.List_of_declarations);
	        this.state = 306;
	        this.match(SpassParser.Dot);
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpassParser.And) | (1 << SpassParser.Equal) | (1 << SpassParser.Equiv) | (1 << SpassParser.Exists) | (1 << SpassParser.False_) | (1 << SpassParser.Forall))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SpassParser.Implied - 37)) | (1 << (SpassParser.Implies - 37)) | (1 << (SpassParser.Not - 37)) | (1 << (SpassParser.Or - 37)) | (1 << (SpassParser.Predicate - 37)))) !== 0) || ((((_la - 73)) & ~0x1f) == 0 && ((1 << (_la - 73)) & ((1 << (SpassParser.Sort - 73)) | (1 << (SpassParser.Subsort - 73)) | (1 << (SpassParser.True_ - 73)) | (1 << (SpassParser.Identifier - 73)))) !== 0)) {
	            this.state = 307;
	            this.declaration();
	            this.state = 312;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 313;
	        this.match(SpassParser.End_of_list);
	        this.state = 314;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 12, SpassParser.RULE_declaration);
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.Subsort:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 316;
	            this.subsort_decl();
	            break;
	        case SpassParser.And:
	        case SpassParser.Equal:
	        case SpassParser.Equiv:
	        case SpassParser.Exists:
	        case SpassParser.False_:
	        case SpassParser.Forall:
	        case SpassParser.Implied:
	        case SpassParser.Implies:
	        case SpassParser.Not:
	        case SpassParser.Or:
	        case SpassParser.True_:
	        case SpassParser.Identifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 317;
	            this.term_decl();
	            break;
	        case SpassParser.Predicate:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 318;
	            this.pred_decl();
	            break;
	        case SpassParser.Sort:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 319;
	            this.gen_decl();
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



	gen_decl() {
	    let localctx = new Gen_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SpassParser.RULE_gen_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(SpassParser.Sort);
	        this.state = 323;
	        this.sort_sym();
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.Freely) {
	            this.state = 324;
	            this.match(SpassParser.Freely);
	        }

	        this.state = 327;
	        this.match(SpassParser.Generated_by);
	        this.state = 328;
	        this.func_list();
	        this.state = 329;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	func_list() {
	    let localctx = new Func_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SpassParser.RULE_func_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(SpassParser.OpenB);
	        this.state = 332;
	        this.fun_sym();
	        this.state = 337;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Comma) {
	            this.state = 333;
	            this.match(SpassParser.Comma);
	            this.state = 334;
	            this.fun_sym();
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 340;
	        this.match(SpassParser.CloseB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	subsort_decl() {
	    let localctx = new Subsort_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SpassParser.RULE_subsort_decl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 342;
	        this.match(SpassParser.Subsort);
	        this.state = 343;
	        this.match(SpassParser.OpenP);
	        this.state = 344;
	        this.sort_sym();
	        this.state = 345;
	        this.match(SpassParser.Comma);
	        this.state = 346;
	        this.sort_sym();
	        this.state = 347;
	        this.match(SpassParser.CloseP);
	        this.state = 348;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	term_decl() {
	    let localctx = new Term_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SpassParser.RULE_term_decl);
	    try {
	        this.state = 361;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 350;
	            this.match(SpassParser.Forall);
	            this.state = 351;
	            this.match(SpassParser.OpenP);
	            this.state = 352;
	            this.term_list();
	            this.state = 353;
	            this.match(SpassParser.Comma);
	            this.state = 354;
	            this.term();
	            this.state = 355;
	            this.match(SpassParser.CloseP);
	            this.state = 356;
	            this.match(SpassParser.Dot);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 358;
	            this.term();
	            this.state = 359;
	            this.match(SpassParser.Dot);
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



	pred_decl() {
	    let localctx = new Pred_declContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SpassParser.RULE_pred_decl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        this.match(SpassParser.Predicate);
	        this.state = 364;
	        this.match(SpassParser.OpenP);
	        this.state = 365;
	        this.pred_sym();
	        this.state = 368; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 366;
	            this.match(SpassParser.Comma);
	            this.state = 367;
	            this.sort_sym();
	            this.state = 370; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SpassParser.Comma);
	        this.state = 372;
	        this.match(SpassParser.CloseP);
	        this.state = 373;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sort_sym() {
	    let localctx = new Sort_symContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, SpassParser.RULE_sort_sym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
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



	pred_sym() {
	    let localctx = new Pred_symContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, SpassParser.RULE_pred_sym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
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



	fun_sym() {
	    let localctx = new Fun_symContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, SpassParser.RULE_fun_sym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
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



	formula_list() {
	    let localctx = new Formula_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, SpassParser.RULE_formula_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.match(SpassParser.List_of_formulae);
	        this.state = 382;
	        this.match(SpassParser.OpenP);
	        this.state = 383;
	        this.origin_type();
	        this.state = 384;
	        this.match(SpassParser.CloseP);
	        this.state = 385;
	        this.match(SpassParser.Dot);
	        this.state = 399;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Formula) {
	            this.state = 386;
	            this.match(SpassParser.Formula);
	            this.state = 387;
	            this.match(SpassParser.OpenP);
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpassParser.And) | (1 << SpassParser.Equal) | (1 << SpassParser.Equiv) | (1 << SpassParser.Exists) | (1 << SpassParser.False_) | (1 << SpassParser.Forall))) !== 0) || ((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (SpassParser.Implied - 37)) | (1 << (SpassParser.Implies - 37)) | (1 << (SpassParser.Not - 37)) | (1 << (SpassParser.Or - 37)))) !== 0) || _la===SpassParser.True_ || _la===SpassParser.Identifier) {
	                this.state = 388;
	                this.term();
	            }

	            this.state = 393;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Comma) {
	                this.state = 391;
	                this.match(SpassParser.Comma);
	                this.state = 392;
	                this.label();
	            }

	            this.state = 395;
	            this.match(SpassParser.CloseP);
	            this.state = 396;
	            this.match(SpassParser.Dot);
	            this.state = 401;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 402;
	        this.match(SpassParser.End_of_list);
	        this.state = 403;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	origin_type() {
	    let localctx = new Origin_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, SpassParser.RULE_origin_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        _la = this._input.LA(1);
	        if(!(_la===SpassParser.Axioms || _la===SpassParser.Conjectures)) {
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



	label() {
	    let localctx = new LabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, SpassParser.RULE_label);
	    try {
	        this.state = 409;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 407;
	            this.identifier();
	            break;
	        case SpassParser.Digit:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 408;
	            this.number();
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



	term() {
	    let localctx = new TermContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, SpassParser.RULE_term);
	    var _la = 0; // Token type
	    try {
	        this.state = 431;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 411;
	            this.quant_sym();
	            this.state = 412;
	            this.match(SpassParser.OpenP);
	            this.state = 413;
	            this.term_list();
	            this.state = 414;
	            this.match(SpassParser.Comma);
	            this.state = 415;
	            this.term();
	            this.state = 416;
	            this.match(SpassParser.CloseP);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 418;
	            this.symbol();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 419;
	            this.symbol();
	            this.state = 420;
	            this.match(SpassParser.OpenP);
	            this.state = 421;
	            this.term();
	            this.state = 426;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===SpassParser.Comma) {
	                this.state = 422;
	                this.match(SpassParser.Comma);
	                this.state = 423;
	                this.term();
	                this.state = 428;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 429;
	            this.match(SpassParser.CloseP);
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



	term_list() {
	    let localctx = new Term_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, SpassParser.RULE_term_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        this.match(SpassParser.OpenB);
	        this.state = 434;
	        this.term();
	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Comma) {
	            this.state = 435;
	            this.match(SpassParser.Comma);
	            this.state = 436;
	            this.term();
	            this.state = 441;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 442;
	        this.match(SpassParser.CloseB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quant_sym() {
	    let localctx = new Quant_symContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, SpassParser.RULE_quant_sym);
	    try {
	        this.state = 447;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.Forall:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 444;
	            this.match(SpassParser.Forall);
	            break;
	        case SpassParser.Exists:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 445;
	            this.match(SpassParser.Exists);
	            break;
	        case SpassParser.Identifier:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 446;
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



	symbol() {
	    let localctx = new SymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, SpassParser.RULE_symbol);
	    try {
	        this.state = 459;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.Equal:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 449;
	            this.match(SpassParser.Equal);
	            break;
	        case SpassParser.True_:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 450;
	            this.match(SpassParser.True_);
	            break;
	        case SpassParser.False_:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 451;
	            this.match(SpassParser.False_);
	            break;
	        case SpassParser.Or:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 452;
	            this.match(SpassParser.Or);
	            break;
	        case SpassParser.And:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 453;
	            this.match(SpassParser.And);
	            break;
	        case SpassParser.Not:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 454;
	            this.match(SpassParser.Not);
	            break;
	        case SpassParser.Implies:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 455;
	            this.match(SpassParser.Implies);
	            break;
	        case SpassParser.Implied:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 456;
	            this.match(SpassParser.Implied);
	            break;
	        case SpassParser.Equiv:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 457;
	            this.match(SpassParser.Equiv);
	            break;
	        case SpassParser.Identifier:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 458;
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



	clause_list() {
	    let localctx = new Clause_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, SpassParser.RULE_clause_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 461;
	        this.match(SpassParser.List_of_clauses);
	        this.state = 462;
	        this.match(SpassParser.OpenP);
	        this.state = 463;
	        this.origin_type();
	        this.state = 464;
	        this.match(SpassParser.Comma);
	        this.state = 465;
	        this.clause_type();
	        this.state = 466;
	        this.match(SpassParser.CloseP);
	        this.state = 467;
	        this.match(SpassParser.Dot);
	        this.state = 482;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Clause) {
	            this.state = 468;
	            this.match(SpassParser.Clause);
	            this.state = 469;
	            this.match(SpassParser.OpenP);
	            this.state = 472;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case SpassParser.Forall:
	            case SpassParser.Or:
	            	this.state = 470;
	            	this.cnf_clause();
	            	break;
	            case SpassParser.And:
	            case SpassParser.Exists:
	            	this.state = 471;
	            	this.dnf_clause();
	            	break;
	            case SpassParser.CloseP:
	            case SpassParser.Comma:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 476;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Comma) {
	                this.state = 474;
	                this.match(SpassParser.Comma);
	                this.state = 475;
	                this.label();
	            }

	            this.state = 478;
	            this.match(SpassParser.CloseP);
	            this.state = 479;
	            this.match(SpassParser.Dot);
	            this.state = 484;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 485;
	        this.match(SpassParser.End_of_list);
	        this.state = 486;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	clause_type() {
	    let localctx = new Clause_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, SpassParser.RULE_clause_type);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        _la = this._input.LA(1);
	        if(!(_la===SpassParser.Cnf || _la===SpassParser.Dnf)) {
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



	cnf_clause() {
	    let localctx = new Cnf_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, SpassParser.RULE_cnf_clause);
	    try {
	        this.state = 498;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.Forall:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 490;
	            this.match(SpassParser.Forall);
	            this.state = 491;
	            this.match(SpassParser.OpenP);
	            this.state = 492;
	            this.term_list();
	            this.state = 493;
	            this.match(SpassParser.Comma);
	            this.state = 494;
	            this.cnf_clause_body();
	            this.state = 495;
	            this.match(SpassParser.CloseP);
	            break;
	        case SpassParser.Or:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 497;
	            this.cnf_clause_body();
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



	dnf_clause() {
	    let localctx = new Dnf_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, SpassParser.RULE_dnf_clause);
	    try {
	        this.state = 508;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.Exists:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 500;
	            this.match(SpassParser.Exists);
	            this.state = 501;
	            this.match(SpassParser.OpenP);
	            this.state = 502;
	            this.term_list();
	            this.state = 503;
	            this.match(SpassParser.Comma);
	            this.state = 504;
	            this.dnf_clause_body();
	            this.state = 505;
	            this.match(SpassParser.CloseP);
	            break;
	        case SpassParser.And:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 507;
	            this.dnf_clause_body();
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



	cnf_clause_body() {
	    let localctx = new Cnf_clause_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, SpassParser.RULE_cnf_clause_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 510;
	        this.match(SpassParser.Or);
	        this.state = 511;
	        this.match(SpassParser.OpenP);
	        this.state = 512;
	        this.term();
	        this.state = 517;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Comma) {
	            this.state = 513;
	            this.match(SpassParser.Comma);
	            this.state = 514;
	            this.term();
	            this.state = 519;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 520;
	        this.match(SpassParser.CloseP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dnf_clause_body() {
	    let localctx = new Dnf_clause_bodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, SpassParser.RULE_dnf_clause_body);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
	        this.match(SpassParser.And);
	        this.state = 523;
	        this.match(SpassParser.OpenP);
	        this.state = 524;
	        this.term();
	        this.state = 529;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Comma) {
	            this.state = 525;
	            this.match(SpassParser.Comma);
	            this.state = 526;
	            this.term();
	            this.state = 531;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 532;
	        this.match(SpassParser.CloseP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	proof_list() {
	    let localctx = new Proof_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, SpassParser.RULE_proof_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.match(SpassParser.List_of_proof);
	        this.state = 543;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===SpassParser.OpenP) {
	            this.state = 535;
	            this.match(SpassParser.OpenP);
	            this.state = 536;
	            this.proof_type();
	            this.state = 539;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Comma) {
	                this.state = 537;
	                this.match(SpassParser.Comma);
	                this.state = 538;
	                this.assoc_list();
	            }

	            this.state = 541;
	            this.match(SpassParser.CloseP);
	        }

	        this.state = 545;
	        this.match(SpassParser.Dot);
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Step) {
	            this.state = 546;
	            this.match(SpassParser.Step);
	            this.state = 547;
	            this.match(SpassParser.OpenP);
	            this.state = 548;
	            this.reference();
	            this.state = 549;
	            this.match(SpassParser.Comma);
	            this.state = 550;
	            this.result();
	            this.state = 551;
	            this.match(SpassParser.Comma);
	            this.state = 552;
	            this.rule_appl();
	            this.state = 553;
	            this.match(SpassParser.Comma);
	            this.state = 554;
	            this.parent_list();
	            this.state = 557;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Comma) {
	                this.state = 555;
	                this.match(SpassParser.Comma);
	                this.state = 556;
	                this.assoc_list();
	            }

	            this.state = 559;
	            this.match(SpassParser.CloseP);
	            this.state = 560;
	            this.match(SpassParser.Dot);
	            this.state = 566;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 567;
	        this.match(SpassParser.End_of_list);
	        this.state = 568;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 58, SpassParser.RULE_reference);
	    try {
	        this.state = 573;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 570;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 571;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 572;
	            this.user_reference();
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



	result() {
	    let localctx = new ResultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, SpassParser.RULE_result);
	    try {
	        this.state = 577;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 575;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 576;
	            this.user_result();
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



	rule_appl() {
	    let localctx = new Rule_applContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, SpassParser.RULE_rule_appl);
	    try {
	        this.state = 582;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 579;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 580;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 581;
	            this.user_rule_appl();
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



	parent_list() {
	    let localctx = new Parent_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, SpassParser.RULE_parent_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        this.match(SpassParser.OpenB);
	        this.state = 585;
	        this.parent_();
	        this.state = 590;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Comma) {
	            this.state = 586;
	            this.match(SpassParser.Comma);
	            this.state = 587;
	            this.parent_();
	            this.state = 592;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 593;
	        this.match(SpassParser.CloseB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parent_() {
	    let localctx = new Parent_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, SpassParser.RULE_parent_);
	    try {
	        this.state = 598;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 595;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 596;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 597;
	            this.user_parent();
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



	assoc_list() {
	    let localctx = new Assoc_listContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, SpassParser.RULE_assoc_list);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 600;
	        this.match(SpassParser.OpenB);
	        this.state = 601;
	        this.key();
	        this.state = 602;
	        this.match(SpassParser.Colon);
	        this.state = 603;
	        this.value();
	        this.state = 611;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Comma) {
	            this.state = 604;
	            this.match(SpassParser.Comma);
	            this.state = 605;
	            this.key();
	            this.state = 606;
	            this.match(SpassParser.Colon);
	            this.state = 607;
	            this.value();
	            this.state = 613;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 614;
	        this.match(SpassParser.CloseB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, SpassParser.RULE_key);
	    try {
	        this.state = 619;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,57,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 616;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 617;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 618;
	            this.user_key();
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



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, SpassParser.RULE_value);
	    try {
	        this.state = 624;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,58,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 621;
	            this.term();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 622;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 623;
	            this.user_value();
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



	proof_type() {
	    let localctx = new Proof_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, SpassParser.RULE_proof_type);
	    try {
	        this.state = 628;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 626;
	            this.identifier();
	            break;
	        case SpassParser.SPASS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 627;
	            this.user_proof_type();
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



	user_reference() {
	    let localctx = new User_referenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, SpassParser.RULE_user_reference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 630;
	        this.number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user_result() {
	    let localctx = new User_resultContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, SpassParser.RULE_user_result);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 632;
	        this.cnf_clause();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user_rule_appl() {
	    let localctx = new User_rule_applContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, SpassParser.RULE_user_rule_appl);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 634;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SpassParser.ClR) | (1 << SpassParser.Con) | (1 << SpassParser.EmS) | (1 << SpassParser.EqF) | (1 << SpassParser.EqR) | (1 << SpassParser.Fac))) !== 0) || ((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (SpassParser.GeR - 35)) | (1 << (SpassParser.Inp - 35)) | (1 << (SpassParser.MPm - 35)) | (1 << (SpassParser.Obv - 35)) | (1 << (SpassParser.OHy - 35)) | (1 << (SpassParser.OPm - 35)) | (1 << (SpassParser.Rew - 35)))) !== 0) || ((((_la - 67)) & ~0x1f) == 0 && ((1 << (_la - 67)) & ((1 << (SpassParser.RRE - 67)) | (1 << (SpassParser.SHy - 67)) | (1 << (SpassParser.SoR - 67)) | (1 << (SpassParser.SpL - 67)) | (1 << (SpassParser.SPm - 67)) | (1 << (SpassParser.SpR - 67)) | (1 << (SpassParser.Spt - 67)) | (1 << (SpassParser.SSi - 67)) | (1 << (SpassParser.Ter - 67)) | (1 << (SpassParser.UnC - 67)) | (1 << (SpassParser.URR - 67)))) !== 0))) {
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



	user_parent() {
	    let localctx = new User_parentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, SpassParser.RULE_user_parent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 636;
	        this.number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user_proof_type() {
	    let localctx = new User_proof_typeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, SpassParser.RULE_user_proof_type);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 638;
	        this.match(SpassParser.SPASS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user_key() {
	    let localctx = new User_keyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, SpassParser.RULE_user_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 640;
	        this.match(SpassParser.Splitlevel);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	user_value() {
	    let localctx = new User_valueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, SpassParser.RULE_user_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 642;
	        this.number();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	settings() {
	    let localctx = new SettingsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, SpassParser.RULE_settings);
	    var _la = 0; // Token type
	    try {
	        this.state = 667;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.List_of_general_settings:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 644;
	            this.match(SpassParser.List_of_general_settings);
	            this.state = 646; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 645;
	                this.setting_entry();
	                this.state = 648; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===SpassParser.Hypothesis);
	            this.state = 650;
	            this.match(SpassParser.End_of_list);
	            this.state = 651;
	            this.match(SpassParser.Dot);
	            break;
	        case SpassParser.List_of_settings:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 653;
	            this.match(SpassParser.List_of_settings);
	            this.state = 654;
	            this.match(SpassParser.OpenP);
	            this.state = 655;
	            this.setting_label();
	            this.state = 656;
	            this.match(SpassParser.CloseP);
	            this.state = 657;
	            this.match(SpassParser.Dot);
	            this.state = 662;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===SpassParser.Open) {
	                this.state = 658;
	                this.match(SpassParser.Open);
	                this.state = 659;
	                this.text_();
	                this.state = 660;
	                this.match(SpassParser.Close);
	            }

	            this.state = 664;
	            this.match(SpassParser.End_of_list);
	            this.state = 665;
	            this.match(SpassParser.Dot);
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



	setting_entry() {
	    let localctx = new Setting_entryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, SpassParser.RULE_setting_entry);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 669;
	        this.match(SpassParser.Hypothesis);
	        this.state = 670;
	        this.match(SpassParser.OpenB);
	        this.state = 671;
	        this.label();
	        this.state = 676;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===SpassParser.Comma) {
	            this.state = 672;
	            this.match(SpassParser.Comma);
	            this.state = 673;
	            this.label();
	            this.state = 678;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 679;
	        this.match(SpassParser.CloseB);
	        this.state = 680;
	        this.match(SpassParser.Dot);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setting_label() {
	    let localctx = new Setting_labelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, SpassParser.RULE_setting_label);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 682;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) == 0 && ((1 << (_la - 40)) & ((1 << (SpassParser.KIV - 40)) | (1 << (SpassParser.LEM - 40)) | (1 << (SpassParser.OTTER - 40)) | (1 << (SpassParser.PROTEIN - 40)) | (1 << (SpassParser.SATURATE - 40)) | (1 << (SpassParser.SETHEO - 40)))) !== 0) || _la===SpassParser.SPASS || _la===SpassParser.ThreeTAP)) {
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, SpassParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 684;
	        this.match(SpassParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arity() {
	    let localctx = new ArityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, SpassParser.RULE_arity);
	    try {
	        this.state = 688;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case SpassParser.MOne:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 686;
	            this.match(SpassParser.MOne);
	            break;
	        case SpassParser.Digit:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 687;
	            this.number();
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, SpassParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 691; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 690;
	            this.match(SpassParser.Digit);
	            this.state = 693; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===SpassParser.Digit);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	text_() {
	    let localctx = new Text_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, SpassParser.RULE_text_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 695;
	        this.match(SpassParser.JustText);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

SpassParser.EOF = antlr4.Token.EOF;
SpassParser.Special_symbol = 1;
SpassParser.And = 2;
SpassParser.Author = 3;
SpassParser.Axioms = 4;
SpassParser.Begin_problem = 5;
SpassParser.Clause = 6;
SpassParser.CloseB = 7;
SpassParser.CloseBc = 8;
SpassParser.CloseP = 9;
SpassParser.ClR = 10;
SpassParser.Cnf = 11;
SpassParser.Colon = 12;
SpassParser.Comma = 13;
SpassParser.Con = 14;
SpassParser.Conjectures = 15;
SpassParser.Date = 16;
SpassParser.Description = 17;
SpassParser.Dnf = 18;
SpassParser.Dot = 19;
SpassParser.EmS = 20;
SpassParser.End_of_list = 21;
SpassParser.End_problem = 22;
SpassParser.EqF = 23;
SpassParser.EqR = 24;
SpassParser.Equal = 25;
SpassParser.Equiv = 26;
SpassParser.Exists = 27;
SpassParser.Fac = 28;
SpassParser.False_ = 29;
SpassParser.Forall = 30;
SpassParser.Formula = 31;
SpassParser.Freely = 32;
SpassParser.Functions = 33;
SpassParser.Generated_by = 34;
SpassParser.GeR = 35;
SpassParser.Hypothesis = 36;
SpassParser.Implied = 37;
SpassParser.Implies = 38;
SpassParser.Inp = 39;
SpassParser.KIV = 40;
SpassParser.LEM = 41;
SpassParser.List_of_clauses = 42;
SpassParser.List_of_declarations = 43;
SpassParser.List_of_descriptions = 44;
SpassParser.List_of_formulae = 45;
SpassParser.List_of_general_settings = 46;
SpassParser.List_of_proof = 47;
SpassParser.List_of_settings = 48;
SpassParser.List_of_symbols = 49;
SpassParser.Logic = 50;
SpassParser.MOne = 51;
SpassParser.MPm = 52;
SpassParser.Name = 53;
SpassParser.Not = 54;
SpassParser.Obv = 55;
SpassParser.OHy = 56;
SpassParser.OpenB = 57;
SpassParser.OpenBc = 58;
SpassParser.OpenP = 59;
SpassParser.OPm = 60;
SpassParser.Or = 61;
SpassParser.OTTER = 62;
SpassParser.Predicate = 63;
SpassParser.Predicates = 64;
SpassParser.PROTEIN = 65;
SpassParser.Rew = 66;
SpassParser.RRE = 67;
SpassParser.Satisfiable = 68;
SpassParser.SATURATE = 69;
SpassParser.SETHEO = 70;
SpassParser.SHy = 71;
SpassParser.SoR = 72;
SpassParser.Sort = 73;
SpassParser.Sorts = 74;
SpassParser.SPASS = 75;
SpassParser.SpL = 76;
SpassParser.Splitlevel = 77;
SpassParser.SPm = 78;
SpassParser.SpR = 79;
SpassParser.Spt = 80;
SpassParser.SSi = 81;
SpassParser.Status = 82;
SpassParser.Step = 83;
SpassParser.Subsort = 84;
SpassParser.Ter = 85;
SpassParser.ThreeTAP = 86;
SpassParser.True_ = 87;
SpassParser.UnC = 88;
SpassParser.Unknown = 89;
SpassParser.Unsatisfiable = 90;
SpassParser.URR = 91;
SpassParser.Version = 92;
SpassParser.WS = 93;
SpassParser.Open = 94;
SpassParser.Identifier = 95;
SpassParser.Letter = 96;
SpassParser.Digit = 97;
SpassParser.Close = 98;
SpassParser.JustText = 99;

SpassParser.RULE_problem = 0;
SpassParser.RULE_description = 1;
SpassParser.RULE_log_state = 2;
SpassParser.RULE_logical_part = 3;
SpassParser.RULE_symbol_list = 4;
SpassParser.RULE_declaration_list = 5;
SpassParser.RULE_declaration = 6;
SpassParser.RULE_gen_decl = 7;
SpassParser.RULE_func_list = 8;
SpassParser.RULE_subsort_decl = 9;
SpassParser.RULE_term_decl = 10;
SpassParser.RULE_pred_decl = 11;
SpassParser.RULE_sort_sym = 12;
SpassParser.RULE_pred_sym = 13;
SpassParser.RULE_fun_sym = 14;
SpassParser.RULE_formula_list = 15;
SpassParser.RULE_origin_type = 16;
SpassParser.RULE_label = 17;
SpassParser.RULE_term = 18;
SpassParser.RULE_term_list = 19;
SpassParser.RULE_quant_sym = 20;
SpassParser.RULE_symbol = 21;
SpassParser.RULE_clause_list = 22;
SpassParser.RULE_clause_type = 23;
SpassParser.RULE_cnf_clause = 24;
SpassParser.RULE_dnf_clause = 25;
SpassParser.RULE_cnf_clause_body = 26;
SpassParser.RULE_dnf_clause_body = 27;
SpassParser.RULE_proof_list = 28;
SpassParser.RULE_reference = 29;
SpassParser.RULE_result = 30;
SpassParser.RULE_rule_appl = 31;
SpassParser.RULE_parent_list = 32;
SpassParser.RULE_parent_ = 33;
SpassParser.RULE_assoc_list = 34;
SpassParser.RULE_key = 35;
SpassParser.RULE_value = 36;
SpassParser.RULE_proof_type = 37;
SpassParser.RULE_user_reference = 38;
SpassParser.RULE_user_result = 39;
SpassParser.RULE_user_rule_appl = 40;
SpassParser.RULE_user_parent = 41;
SpassParser.RULE_user_proof_type = 42;
SpassParser.RULE_user_key = 43;
SpassParser.RULE_user_value = 44;
SpassParser.RULE_settings = 45;
SpassParser.RULE_setting_entry = 46;
SpassParser.RULE_setting_label = 47;
SpassParser.RULE_identifier = 48;
SpassParser.RULE_arity = 49;
SpassParser.RULE_number = 50;
SpassParser.RULE_text_ = 51;

class ProblemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_problem;
    }

	Begin_problem() {
	    return this.getToken(SpassParser.Begin_problem, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	logical_part() {
	    return this.getTypedRuleContext(Logical_partContext,0);
	};

	End_problem() {
	    return this.getToken(SpassParser.End_problem, 0);
	};

	EOF() {
	    return this.getToken(SpassParser.EOF, 0);
	};

	settings = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SettingsContext);
	    } else {
	        return this.getTypedRuleContext(SettingsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterProblem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitProblem(this);
		}
	}


}



class DescriptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_description;
    }

	List_of_descriptions() {
	    return this.getToken(SpassParser.List_of_descriptions, 0);
	};

	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	Name() {
	    return this.getToken(SpassParser.Name, 0);
	};

	OpenP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.OpenP);
	    } else {
	        return this.getToken(SpassParser.OpenP, i);
	    }
	};


	CloseP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.CloseP);
	    } else {
	        return this.getToken(SpassParser.CloseP, i);
	    }
	};


	Author() {
	    return this.getToken(SpassParser.Author, 0);
	};

	Status() {
	    return this.getToken(SpassParser.Status, 0);
	};

	log_state() {
	    return this.getTypedRuleContext(Log_stateContext,0);
	};

	Description() {
	    return this.getToken(SpassParser.Description, 0);
	};

	End_of_list() {
	    return this.getToken(SpassParser.End_of_list, 0);
	};

	Open = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Open);
	    } else {
	        return this.getToken(SpassParser.Open, i);
	    }
	};


	text_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Text_Context);
	    } else {
	        return this.getTypedRuleContext(Text_Context,i);
	    }
	};

	Close = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Close);
	    } else {
	        return this.getToken(SpassParser.Close, i);
	    }
	};


	Version() {
	    return this.getToken(SpassParser.Version, 0);
	};

	Logic() {
	    return this.getToken(SpassParser.Logic, 0);
	};

	Date() {
	    return this.getToken(SpassParser.Date, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitDescription(this);
		}
	}


}



class Log_stateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_log_state;
    }

	Satisfiable() {
	    return this.getToken(SpassParser.Satisfiable, 0);
	};

	Unsatisfiable() {
	    return this.getToken(SpassParser.Unsatisfiable, 0);
	};

	Unknown() {
	    return this.getToken(SpassParser.Unknown, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterLog_state(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitLog_state(this);
		}
	}


}



class Logical_partContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_logical_part;
    }

	symbol_list() {
	    return this.getTypedRuleContext(Symbol_listContext,0);
	};

	declaration_list() {
	    return this.getTypedRuleContext(Declaration_listContext,0);
	};

	formula_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Formula_listContext);
	    } else {
	        return this.getTypedRuleContext(Formula_listContext,i);
	    }
	};

	clause_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Clause_listContext);
	    } else {
	        return this.getTypedRuleContext(Clause_listContext,i);
	    }
	};

	proof_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Proof_listContext);
	    } else {
	        return this.getTypedRuleContext(Proof_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterLogical_part(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitLogical_part(this);
		}
	}


}



class Symbol_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_symbol_list;
    }

	List_of_symbols() {
	    return this.getToken(SpassParser.List_of_symbols, 0);
	};

	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	End_of_list() {
	    return this.getToken(SpassParser.End_of_list, 0);
	};

	Functions() {
	    return this.getToken(SpassParser.Functions, 0);
	};

	OpenB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.OpenB);
	    } else {
	        return this.getToken(SpassParser.OpenB, i);
	    }
	};


	CloseB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.CloseB);
	    } else {
	        return this.getToken(SpassParser.CloseB, i);
	    }
	};


	Predicates() {
	    return this.getToken(SpassParser.Predicates, 0);
	};

	Sorts() {
	    return this.getToken(SpassParser.Sorts, 0);
	};

	sort_sym = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sort_symContext);
	    } else {
	        return this.getTypedRuleContext(Sort_symContext,i);
	    }
	};

	fun_sym = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Fun_symContext);
	    } else {
	        return this.getTypedRuleContext(Fun_symContext,i);
	    }
	};

	OpenP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.OpenP);
	    } else {
	        return this.getToken(SpassParser.OpenP, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	arity = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArityContext);
	    } else {
	        return this.getTypedRuleContext(ArityContext,i);
	    }
	};

	CloseP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.CloseP);
	    } else {
	        return this.getToken(SpassParser.CloseP, i);
	    }
	};


	pred_sym = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Pred_symContext);
	    } else {
	        return this.getTypedRuleContext(Pred_symContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterSymbol_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitSymbol_list(this);
		}
	}


}



class Declaration_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_declaration_list;
    }

	List_of_declarations() {
	    return this.getToken(SpassParser.List_of_declarations, 0);
	};

	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	End_of_list() {
	    return this.getToken(SpassParser.End_of_list, 0);
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

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterDeclaration_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitDeclaration_list(this);
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
        this.ruleIndex = SpassParser.RULE_declaration;
    }

	subsort_decl() {
	    return this.getTypedRuleContext(Subsort_declContext,0);
	};

	term_decl() {
	    return this.getTypedRuleContext(Term_declContext,0);
	};

	pred_decl() {
	    return this.getTypedRuleContext(Pred_declContext,0);
	};

	gen_decl() {
	    return this.getTypedRuleContext(Gen_declContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class Gen_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_gen_decl;
    }

	Sort() {
	    return this.getToken(SpassParser.Sort, 0);
	};

	sort_sym() {
	    return this.getTypedRuleContext(Sort_symContext,0);
	};

	Generated_by() {
	    return this.getToken(SpassParser.Generated_by, 0);
	};

	func_list() {
	    return this.getTypedRuleContext(Func_listContext,0);
	};

	Dot() {
	    return this.getToken(SpassParser.Dot, 0);
	};

	Freely() {
	    return this.getToken(SpassParser.Freely, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterGen_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitGen_decl(this);
		}
	}


}



class Func_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_func_list;
    }

	OpenB() {
	    return this.getToken(SpassParser.OpenB, 0);
	};

	fun_sym = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Fun_symContext);
	    } else {
	        return this.getTypedRuleContext(Fun_symContext,i);
	    }
	};

	CloseB() {
	    return this.getToken(SpassParser.CloseB, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterFunc_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitFunc_list(this);
		}
	}


}



class Subsort_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_subsort_decl;
    }

	Subsort() {
	    return this.getToken(SpassParser.Subsort, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	sort_sym = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sort_symContext);
	    } else {
	        return this.getTypedRuleContext(Sort_symContext,i);
	    }
	};

	Comma() {
	    return this.getToken(SpassParser.Comma, 0);
	};

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	Dot() {
	    return this.getToken(SpassParser.Dot, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterSubsort_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitSubsort_decl(this);
		}
	}


}



class Term_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_term_decl;
    }

	Forall() {
	    return this.getToken(SpassParser.Forall, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	term_list() {
	    return this.getTypedRuleContext(Term_listContext,0);
	};

	Comma() {
	    return this.getToken(SpassParser.Comma, 0);
	};

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	Dot() {
	    return this.getToken(SpassParser.Dot, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterTerm_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitTerm_decl(this);
		}
	}


}



class Pred_declContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_pred_decl;
    }

	Predicate() {
	    return this.getToken(SpassParser.Predicate, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	pred_sym() {
	    return this.getTypedRuleContext(Pred_symContext,0);
	};

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	Dot() {
	    return this.getToken(SpassParser.Dot, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	sort_sym = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sort_symContext);
	    } else {
	        return this.getTypedRuleContext(Sort_symContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterPred_decl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitPred_decl(this);
		}
	}


}



class Sort_symContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_sort_sym;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterSort_sym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitSort_sym(this);
		}
	}


}



class Pred_symContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_pred_sym;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterPred_sym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitPred_sym(this);
		}
	}


}



class Fun_symContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_fun_sym;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterFun_sym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitFun_sym(this);
		}
	}


}



class Formula_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_formula_list;
    }

	List_of_formulae() {
	    return this.getToken(SpassParser.List_of_formulae, 0);
	};

	OpenP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.OpenP);
	    } else {
	        return this.getToken(SpassParser.OpenP, i);
	    }
	};


	origin_type() {
	    return this.getTypedRuleContext(Origin_typeContext,0);
	};

	CloseP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.CloseP);
	    } else {
	        return this.getToken(SpassParser.CloseP, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	End_of_list() {
	    return this.getToken(SpassParser.End_of_list, 0);
	};

	Formula = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Formula);
	    } else {
	        return this.getToken(SpassParser.Formula, i);
	    }
	};


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

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	label = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelContext);
	    } else {
	        return this.getTypedRuleContext(LabelContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterFormula_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitFormula_list(this);
		}
	}


}



class Origin_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_origin_type;
    }

	Axioms() {
	    return this.getToken(SpassParser.Axioms, 0);
	};

	Conjectures() {
	    return this.getToken(SpassParser.Conjectures, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterOrigin_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitOrigin_type(this);
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
        this.ruleIndex = SpassParser.RULE_label;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitLabel(this);
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
        this.ruleIndex = SpassParser.RULE_term;
    }

	quant_sym() {
	    return this.getTypedRuleContext(Quant_symContext,0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	term_list() {
	    return this.getTypedRuleContext(Term_listContext,0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


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

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterTerm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitTerm(this);
		}
	}


}



class Term_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_term_list;
    }

	OpenB() {
	    return this.getToken(SpassParser.OpenB, 0);
	};

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

	CloseB() {
	    return this.getToken(SpassParser.CloseB, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterTerm_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitTerm_list(this);
		}
	}


}



class Quant_symContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_quant_sym;
    }

	Forall() {
	    return this.getToken(SpassParser.Forall, 0);
	};

	Exists() {
	    return this.getToken(SpassParser.Exists, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterQuant_sym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitQuant_sym(this);
		}
	}


}



class SymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_symbol;
    }

	Equal() {
	    return this.getToken(SpassParser.Equal, 0);
	};

	True_() {
	    return this.getToken(SpassParser.True_, 0);
	};

	False_() {
	    return this.getToken(SpassParser.False_, 0);
	};

	Or() {
	    return this.getToken(SpassParser.Or, 0);
	};

	And() {
	    return this.getToken(SpassParser.And, 0);
	};

	Not() {
	    return this.getToken(SpassParser.Not, 0);
	};

	Implies() {
	    return this.getToken(SpassParser.Implies, 0);
	};

	Implied() {
	    return this.getToken(SpassParser.Implied, 0);
	};

	Equiv() {
	    return this.getToken(SpassParser.Equiv, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitSymbol(this);
		}
	}


}



class Clause_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_clause_list;
    }

	List_of_clauses() {
	    return this.getToken(SpassParser.List_of_clauses, 0);
	};

	OpenP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.OpenP);
	    } else {
	        return this.getToken(SpassParser.OpenP, i);
	    }
	};


	origin_type() {
	    return this.getTypedRuleContext(Origin_typeContext,0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	clause_type() {
	    return this.getTypedRuleContext(Clause_typeContext,0);
	};

	CloseP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.CloseP);
	    } else {
	        return this.getToken(SpassParser.CloseP, i);
	    }
	};


	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	End_of_list() {
	    return this.getToken(SpassParser.End_of_list, 0);
	};

	Clause = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Clause);
	    } else {
	        return this.getToken(SpassParser.Clause, i);
	    }
	};


	cnf_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Cnf_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Cnf_clauseContext,i);
	    }
	};

	dnf_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dnf_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Dnf_clauseContext,i);
	    }
	};

	label = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelContext);
	    } else {
	        return this.getTypedRuleContext(LabelContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterClause_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitClause_list(this);
		}
	}


}



class Clause_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_clause_type;
    }

	Cnf() {
	    return this.getToken(SpassParser.Cnf, 0);
	};

	Dnf() {
	    return this.getToken(SpassParser.Dnf, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterClause_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitClause_type(this);
		}
	}


}



class Cnf_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_cnf_clause;
    }

	Forall() {
	    return this.getToken(SpassParser.Forall, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	term_list() {
	    return this.getTypedRuleContext(Term_listContext,0);
	};

	Comma() {
	    return this.getToken(SpassParser.Comma, 0);
	};

	cnf_clause_body() {
	    return this.getTypedRuleContext(Cnf_clause_bodyContext,0);
	};

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterCnf_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitCnf_clause(this);
		}
	}


}



class Dnf_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_dnf_clause;
    }

	Exists() {
	    return this.getToken(SpassParser.Exists, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	term_list() {
	    return this.getTypedRuleContext(Term_listContext,0);
	};

	Comma() {
	    return this.getToken(SpassParser.Comma, 0);
	};

	dnf_clause_body() {
	    return this.getTypedRuleContext(Dnf_clause_bodyContext,0);
	};

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterDnf_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitDnf_clause(this);
		}
	}


}



class Cnf_clause_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_cnf_clause_body;
    }

	Or() {
	    return this.getToken(SpassParser.Or, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

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

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterCnf_clause_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitCnf_clause_body(this);
		}
	}


}



class Dnf_clause_bodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_dnf_clause_body;
    }

	And() {
	    return this.getToken(SpassParser.And, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

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

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterDnf_clause_body(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitDnf_clause_body(this);
		}
	}


}



class Proof_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_proof_list;
    }

	List_of_proof() {
	    return this.getToken(SpassParser.List_of_proof, 0);
	};

	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	End_of_list() {
	    return this.getToken(SpassParser.End_of_list, 0);
	};

	OpenP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.OpenP);
	    } else {
	        return this.getToken(SpassParser.OpenP, i);
	    }
	};


	proof_type() {
	    return this.getTypedRuleContext(Proof_typeContext,0);
	};

	CloseP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.CloseP);
	    } else {
	        return this.getToken(SpassParser.CloseP, i);
	    }
	};


	Step = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Step);
	    } else {
	        return this.getToken(SpassParser.Step, i);
	    }
	};


	reference = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReferenceContext);
	    } else {
	        return this.getTypedRuleContext(ReferenceContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	result = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ResultContext);
	    } else {
	        return this.getTypedRuleContext(ResultContext,i);
	    }
	};

	rule_appl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Rule_applContext);
	    } else {
	        return this.getTypedRuleContext(Rule_applContext,i);
	    }
	};

	parent_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Parent_listContext);
	    } else {
	        return this.getTypedRuleContext(Parent_listContext,i);
	    }
	};

	assoc_list = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Assoc_listContext);
	    } else {
	        return this.getTypedRuleContext(Assoc_listContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterProof_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitProof_list(this);
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
        this.ruleIndex = SpassParser.RULE_reference;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	user_reference() {
	    return this.getTypedRuleContext(User_referenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitReference(this);
		}
	}


}



class ResultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_result;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	user_result() {
	    return this.getTypedRuleContext(User_resultContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterResult(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitResult(this);
		}
	}


}



class Rule_applContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_rule_appl;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	user_rule_appl() {
	    return this.getTypedRuleContext(User_rule_applContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterRule_appl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitRule_appl(this);
		}
	}


}



class Parent_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_parent_list;
    }

	OpenB() {
	    return this.getToken(SpassParser.OpenB, 0);
	};

	parent_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Parent_Context);
	    } else {
	        return this.getTypedRuleContext(Parent_Context,i);
	    }
	};

	CloseB() {
	    return this.getToken(SpassParser.CloseB, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterParent_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitParent_list(this);
		}
	}


}



class Parent_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_parent_;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	user_parent() {
	    return this.getTypedRuleContext(User_parentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterParent_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitParent_(this);
		}
	}


}



class Assoc_listContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_assoc_list;
    }

	OpenB() {
	    return this.getToken(SpassParser.OpenB, 0);
	};

	key = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeyContext);
	    } else {
	        return this.getTypedRuleContext(KeyContext,i);
	    }
	};

	Colon = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Colon);
	    } else {
	        return this.getToken(SpassParser.Colon, i);
	    }
	};


	value = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueContext);
	    } else {
	        return this.getTypedRuleContext(ValueContext,i);
	    }
	};

	CloseB() {
	    return this.getToken(SpassParser.CloseB, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterAssoc_list(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitAssoc_list(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_key;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	user_key() {
	    return this.getTypedRuleContext(User_keyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitKey(this);
		}
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_value;
    }

	term() {
	    return this.getTypedRuleContext(TermContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	user_value() {
	    return this.getTypedRuleContext(User_valueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitValue(this);
		}
	}


}



class Proof_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_proof_type;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	user_proof_type() {
	    return this.getTypedRuleContext(User_proof_typeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterProof_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitProof_type(this);
		}
	}


}



class User_referenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_user_reference;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterUser_reference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitUser_reference(this);
		}
	}


}



class User_resultContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_user_result;
    }

	cnf_clause() {
	    return this.getTypedRuleContext(Cnf_clauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterUser_result(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitUser_result(this);
		}
	}


}



class User_rule_applContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_user_rule_appl;
    }

	GeR() {
	    return this.getToken(SpassParser.GeR, 0);
	};

	SpL() {
	    return this.getToken(SpassParser.SpL, 0);
	};

	SpR() {
	    return this.getToken(SpassParser.SpR, 0);
	};

	EqF() {
	    return this.getToken(SpassParser.EqF, 0);
	};

	Rew() {
	    return this.getToken(SpassParser.Rew, 0);
	};

	Obv() {
	    return this.getToken(SpassParser.Obv, 0);
	};

	EmS() {
	    return this.getToken(SpassParser.EmS, 0);
	};

	SoR() {
	    return this.getToken(SpassParser.SoR, 0);
	};

	EqR() {
	    return this.getToken(SpassParser.EqR, 0);
	};

	MPm() {
	    return this.getToken(SpassParser.MPm, 0);
	};

	SPm() {
	    return this.getToken(SpassParser.SPm, 0);
	};

	OPm() {
	    return this.getToken(SpassParser.OPm, 0);
	};

	SHy() {
	    return this.getToken(SpassParser.SHy, 0);
	};

	OHy() {
	    return this.getToken(SpassParser.OHy, 0);
	};

	URR() {
	    return this.getToken(SpassParser.URR, 0);
	};

	Fac() {
	    return this.getToken(SpassParser.Fac, 0);
	};

	Spt() {
	    return this.getToken(SpassParser.Spt, 0);
	};

	Inp() {
	    return this.getToken(SpassParser.Inp, 0);
	};

	Con() {
	    return this.getToken(SpassParser.Con, 0);
	};

	RRE() {
	    return this.getToken(SpassParser.RRE, 0);
	};

	SSi() {
	    return this.getToken(SpassParser.SSi, 0);
	};

	ClR() {
	    return this.getToken(SpassParser.ClR, 0);
	};

	UnC() {
	    return this.getToken(SpassParser.UnC, 0);
	};

	Ter() {
	    return this.getToken(SpassParser.Ter, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterUser_rule_appl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitUser_rule_appl(this);
		}
	}


}



class User_parentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_user_parent;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterUser_parent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitUser_parent(this);
		}
	}


}



class User_proof_typeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_user_proof_type;
    }

	SPASS() {
	    return this.getToken(SpassParser.SPASS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterUser_proof_type(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitUser_proof_type(this);
		}
	}


}



class User_keyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_user_key;
    }

	Splitlevel() {
	    return this.getToken(SpassParser.Splitlevel, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterUser_key(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitUser_key(this);
		}
	}


}



class User_valueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_user_value;
    }

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterUser_value(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitUser_value(this);
		}
	}


}



class SettingsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_settings;
    }

	List_of_general_settings() {
	    return this.getToken(SpassParser.List_of_general_settings, 0);
	};

	End_of_list() {
	    return this.getToken(SpassParser.End_of_list, 0);
	};

	Dot = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Dot);
	    } else {
	        return this.getToken(SpassParser.Dot, i);
	    }
	};


	setting_entry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Setting_entryContext);
	    } else {
	        return this.getTypedRuleContext(Setting_entryContext,i);
	    }
	};

	List_of_settings() {
	    return this.getToken(SpassParser.List_of_settings, 0);
	};

	OpenP() {
	    return this.getToken(SpassParser.OpenP, 0);
	};

	setting_label() {
	    return this.getTypedRuleContext(Setting_labelContext,0);
	};

	CloseP() {
	    return this.getToken(SpassParser.CloseP, 0);
	};

	Open() {
	    return this.getToken(SpassParser.Open, 0);
	};

	text_() {
	    return this.getTypedRuleContext(Text_Context,0);
	};

	Close() {
	    return this.getToken(SpassParser.Close, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterSettings(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitSettings(this);
		}
	}


}



class Setting_entryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_setting_entry;
    }

	Hypothesis() {
	    return this.getToken(SpassParser.Hypothesis, 0);
	};

	OpenB() {
	    return this.getToken(SpassParser.OpenB, 0);
	};

	label = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LabelContext);
	    } else {
	        return this.getTypedRuleContext(LabelContext,i);
	    }
	};

	CloseB() {
	    return this.getToken(SpassParser.CloseB, 0);
	};

	Dot() {
	    return this.getToken(SpassParser.Dot, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Comma);
	    } else {
	        return this.getToken(SpassParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterSetting_entry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitSetting_entry(this);
		}
	}


}



class Setting_labelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_setting_label;
    }

	KIV() {
	    return this.getToken(SpassParser.KIV, 0);
	};

	LEM() {
	    return this.getToken(SpassParser.LEM, 0);
	};

	OTTER() {
	    return this.getToken(SpassParser.OTTER, 0);
	};

	PROTEIN() {
	    return this.getToken(SpassParser.PROTEIN, 0);
	};

	SATURATE() {
	    return this.getToken(SpassParser.SATURATE, 0);
	};

	ThreeTAP() {
	    return this.getToken(SpassParser.ThreeTAP, 0);
	};

	SETHEO() {
	    return this.getToken(SpassParser.SETHEO, 0);
	};

	SPASS() {
	    return this.getToken(SpassParser.SPASS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterSetting_label(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitSetting_label(this);
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
        this.ruleIndex = SpassParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(SpassParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class ArityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_arity;
    }

	MOne() {
	    return this.getToken(SpassParser.MOne, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterArity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitArity(this);
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
        this.ruleIndex = SpassParser.RULE_number;
    }

	Digit = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(SpassParser.Digit);
	    } else {
	        return this.getToken(SpassParser.Digit, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitNumber(this);
		}
	}


}



class Text_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SpassParser.RULE_text_;
    }

	JustText() {
	    return this.getToken(SpassParser.JustText, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.enterText_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SpassParserListener ) {
	        listener.exitText_(this);
		}
	}


}




SpassParser.ProblemContext = ProblemContext; 
SpassParser.DescriptionContext = DescriptionContext; 
SpassParser.Log_stateContext = Log_stateContext; 
SpassParser.Logical_partContext = Logical_partContext; 
SpassParser.Symbol_listContext = Symbol_listContext; 
SpassParser.Declaration_listContext = Declaration_listContext; 
SpassParser.DeclarationContext = DeclarationContext; 
SpassParser.Gen_declContext = Gen_declContext; 
SpassParser.Func_listContext = Func_listContext; 
SpassParser.Subsort_declContext = Subsort_declContext; 
SpassParser.Term_declContext = Term_declContext; 
SpassParser.Pred_declContext = Pred_declContext; 
SpassParser.Sort_symContext = Sort_symContext; 
SpassParser.Pred_symContext = Pred_symContext; 
SpassParser.Fun_symContext = Fun_symContext; 
SpassParser.Formula_listContext = Formula_listContext; 
SpassParser.Origin_typeContext = Origin_typeContext; 
SpassParser.LabelContext = LabelContext; 
SpassParser.TermContext = TermContext; 
SpassParser.Term_listContext = Term_listContext; 
SpassParser.Quant_symContext = Quant_symContext; 
SpassParser.SymbolContext = SymbolContext; 
SpassParser.Clause_listContext = Clause_listContext; 
SpassParser.Clause_typeContext = Clause_typeContext; 
SpassParser.Cnf_clauseContext = Cnf_clauseContext; 
SpassParser.Dnf_clauseContext = Dnf_clauseContext; 
SpassParser.Cnf_clause_bodyContext = Cnf_clause_bodyContext; 
SpassParser.Dnf_clause_bodyContext = Dnf_clause_bodyContext; 
SpassParser.Proof_listContext = Proof_listContext; 
SpassParser.ReferenceContext = ReferenceContext; 
SpassParser.ResultContext = ResultContext; 
SpassParser.Rule_applContext = Rule_applContext; 
SpassParser.Parent_listContext = Parent_listContext; 
SpassParser.Parent_Context = Parent_Context; 
SpassParser.Assoc_listContext = Assoc_listContext; 
SpassParser.KeyContext = KeyContext; 
SpassParser.ValueContext = ValueContext; 
SpassParser.Proof_typeContext = Proof_typeContext; 
SpassParser.User_referenceContext = User_referenceContext; 
SpassParser.User_resultContext = User_resultContext; 
SpassParser.User_rule_applContext = User_rule_applContext; 
SpassParser.User_parentContext = User_parentContext; 
SpassParser.User_proof_typeContext = User_proof_typeContext; 
SpassParser.User_keyContext = User_keyContext; 
SpassParser.User_valueContext = User_valueContext; 
SpassParser.SettingsContext = SettingsContext; 
SpassParser.Setting_entryContext = Setting_entryContext; 
SpassParser.Setting_labelContext = Setting_labelContext; 
SpassParser.IdentifierContext = IdentifierContext; 
SpassParser.ArityContext = ArityContext; 
SpassParser.NumberContext = NumberContext; 
SpassParser.Text_Context = Text_Context; 
