// Generated from Resources/Parsers/scss/ScssParser.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ScssParserListener from './ScssParserListener.js';
const serializedATN = [4,1,77,726,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
1,0,5,0,144,8,0,10,0,12,0,147,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,3,1,161,8,1,1,2,1,2,1,2,5,2,166,8,2,10,2,12,2,169,9,2,1,2,3,2,
172,8,2,1,3,1,3,3,3,176,8,3,1,4,3,4,179,8,4,1,4,1,4,1,4,1,5,1,5,4,5,186,
8,5,11,5,12,5,187,1,6,1,6,1,6,5,6,193,8,6,10,6,12,6,196,9,6,1,6,3,6,199,
8,6,1,7,1,7,1,7,3,7,204,8,7,1,7,1,7,1,7,1,7,3,7,210,8,7,1,8,1,8,1,8,3,8,
215,8,8,1,8,1,8,1,8,1,8,3,8,221,8,8,1,8,3,8,224,8,8,3,8,226,8,8,1,8,1,8,
1,9,1,9,1,9,3,9,233,8,9,1,9,3,9,236,8,9,1,9,1,9,1,10,1,10,1,10,3,10,243,
8,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,251,8,10,1,10,3,10,254,8,10,1,11,
1,11,1,11,1,11,3,11,260,8,11,1,11,3,11,263,8,11,1,11,1,11,1,11,3,11,268,
8,11,1,11,1,11,1,12,5,12,273,8,12,10,12,12,12,276,9,12,1,12,1,12,1,13,1,
13,1,13,1,13,1,14,1,14,1,14,1,14,3,14,288,8,14,1,15,1,15,1,15,1,15,1,15,
3,15,295,8,15,1,15,3,15,298,8,15,1,16,1,16,1,17,1,17,1,17,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,3,18,313,8,18,1,19,1,19,1,19,1,19,5,19,319,8,19,
10,19,12,19,322,9,19,1,19,3,19,325,8,19,1,20,1,20,1,20,1,20,1,20,1,21,1,
21,1,21,1,22,1,22,1,22,3,22,338,8,22,1,22,3,22,341,8,22,1,23,1,23,1,23,3,
23,346,8,23,1,23,1,23,1,23,1,23,3,23,352,8,23,1,24,1,24,1,24,1,24,1,24,3,
24,359,8,24,1,24,3,24,362,8,24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,
25,1,25,1,26,1,26,1,27,1,27,3,27,378,8,27,1,28,1,28,1,28,1,28,1,29,1,29,
1,29,1,29,5,29,388,8,29,10,29,12,29,391,9,29,1,29,1,29,1,29,1,29,1,30,1,
30,1,30,3,30,400,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,31,3,31,409,8,31,1,
31,3,31,412,8,31,1,31,1,31,3,31,416,8,31,1,32,1,32,1,32,1,32,3,32,422,8,
32,1,33,1,33,1,33,3,33,427,8,33,1,34,1,34,1,34,1,34,1,34,5,34,434,8,34,10,
34,12,34,437,9,34,1,34,3,34,440,8,34,1,34,1,34,1,35,1,35,1,35,1,35,1,36,
1,36,1,36,1,36,1,37,1,37,1,37,5,37,455,8,37,10,37,12,37,458,9,37,3,37,460,
8,37,1,38,3,38,463,8,38,1,38,1,38,1,38,5,38,468,8,38,10,38,12,38,471,9,38,
1,38,1,38,1,38,5,38,476,8,38,10,38,12,38,479,9,38,3,38,481,8,38,1,39,1,39,
1,40,1,40,1,40,1,40,3,40,489,8,40,1,40,1,40,1,41,1,41,1,42,1,42,1,42,1,43,
1,43,1,43,5,43,501,8,43,10,43,12,43,504,9,43,1,43,3,43,507,8,43,1,43,1,43,
1,44,1,44,1,44,5,44,514,8,44,10,44,12,44,517,9,44,1,45,4,45,520,8,45,11,
45,12,45,521,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,1,46,3,46,534,
8,46,1,47,1,47,1,48,1,48,1,48,1,48,1,48,3,48,543,8,48,1,48,1,48,3,48,547,
8,48,1,49,1,49,1,49,1,49,1,49,3,49,554,8,49,1,49,1,49,1,50,1,50,1,51,1,51,
5,51,562,8,51,10,51,12,51,565,9,51,1,51,1,51,1,51,1,51,5,51,571,8,51,10,
51,12,51,574,9,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,3,51,583,8,51,1,52,
1,52,5,52,587,8,52,10,52,12,52,590,9,52,1,53,1,53,1,53,1,53,1,53,3,53,597,
8,53,1,54,1,54,1,54,1,55,1,55,1,55,1,55,3,55,606,8,55,1,55,1,55,1,55,1,55,
1,55,1,55,1,55,1,55,1,55,1,55,3,55,618,8,55,1,55,1,55,3,55,622,8,55,1,56,
1,56,1,56,1,56,3,56,628,8,56,1,57,1,57,3,57,632,8,57,1,57,5,57,635,8,57,
10,57,12,57,638,9,57,1,58,1,58,1,58,1,58,1,59,1,59,3,59,646,8,59,1,60,3,
60,649,8,60,1,60,1,60,3,60,653,8,60,1,60,1,60,1,61,1,61,4,61,659,8,61,11,
61,12,61,660,1,62,1,62,1,62,3,62,666,8,62,1,63,1,63,1,63,4,63,671,8,63,11,
63,12,63,672,1,63,3,63,676,8,63,1,64,1,64,4,64,680,8,64,11,64,12,64,681,
1,65,1,65,1,65,3,65,687,8,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,3,66,696,
8,66,1,67,1,67,1,67,1,67,5,67,702,8,67,10,67,12,67,705,9,67,1,67,3,67,708,
8,67,1,67,1,67,1,68,1,68,1,68,1,68,1,69,1,69,1,69,3,69,719,8,69,1,70,1,70,
1,70,3,70,724,8,70,1,70,0,0,71,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
122,124,126,128,130,132,134,136,138,140,0,11,2,0,20,20,29,30,2,0,5,5,18,
18,2,0,7,7,31,32,1,0,24,28,3,0,13,13,15,15,34,35,1,0,54,55,1,0,58,59,2,0,
13,14,24,24,2,0,64,64,67,67,1,0,36,38,2,0,64,64,77,77,779,0,145,1,0,0,0,
2,160,1,0,0,0,4,162,1,0,0,0,6,173,1,0,0,0,8,178,1,0,0,0,10,183,1,0,0,0,12,
189,1,0,0,0,14,203,1,0,0,0,16,211,1,0,0,0,18,229,1,0,0,0,20,239,1,0,0,0,
22,255,1,0,0,0,24,274,1,0,0,0,26,279,1,0,0,0,28,287,1,0,0,0,30,294,1,0,0,
0,32,299,1,0,0,0,34,301,1,0,0,0,36,312,1,0,0,0,38,314,1,0,0,0,40,326,1,0,
0,0,42,331,1,0,0,0,44,340,1,0,0,0,46,351,1,0,0,0,48,353,1,0,0,0,50,365,1,
0,0,0,52,373,1,0,0,0,54,377,1,0,0,0,56,379,1,0,0,0,58,383,1,0,0,0,60,399,
1,0,0,0,62,415,1,0,0,0,64,421,1,0,0,0,66,423,1,0,0,0,68,428,1,0,0,0,70,443,
1,0,0,0,72,447,1,0,0,0,74,459,1,0,0,0,76,480,1,0,0,0,78,482,1,0,0,0,80,484,
1,0,0,0,82,492,1,0,0,0,84,494,1,0,0,0,86,497,1,0,0,0,88,510,1,0,0,0,90,519,
1,0,0,0,92,533,1,0,0,0,94,535,1,0,0,0,96,546,1,0,0,0,98,548,1,0,0,0,100,
557,1,0,0,0,102,582,1,0,0,0,104,584,1,0,0,0,106,596,1,0,0,0,108,598,1,0,
0,0,110,621,1,0,0,0,112,623,1,0,0,0,114,629,1,0,0,0,116,639,1,0,0,0,118,
643,1,0,0,0,120,648,1,0,0,0,122,658,1,0,0,0,124,665,1,0,0,0,126,667,1,0,
0,0,128,677,1,0,0,0,130,683,1,0,0,0,132,695,1,0,0,0,134,697,1,0,0,0,136,
711,1,0,0,0,138,718,1,0,0,0,140,723,1,0,0,0,142,144,3,2,1,0,143,142,1,0,
0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,146,1,0,0,0,146,1,1,0,0,0,147,145,
1,0,0,0,148,161,3,62,31,0,149,161,3,72,36,0,150,161,3,84,42,0,151,161,3,
16,8,0,152,161,3,18,9,0,153,161,3,22,11,0,154,161,3,48,24,0,155,161,3,20,
10,0,156,161,3,38,19,0,157,161,3,50,25,0,158,161,3,56,28,0,159,161,3,58,
29,0,160,148,1,0,0,0,160,149,1,0,0,0,160,150,1,0,0,0,160,151,1,0,0,0,160,
152,1,0,0,0,160,153,1,0,0,0,160,154,1,0,0,0,160,155,1,0,0,0,160,156,1,0,
0,0,160,157,1,0,0,0,160,158,1,0,0,0,160,159,1,0,0,0,161,3,1,0,0,0,162,167,
3,6,3,0,163,164,5,18,0,0,164,166,3,6,3,0,165,163,1,0,0,0,166,169,1,0,0,0,
167,165,1,0,0,0,167,168,1,0,0,0,168,171,1,0,0,0,169,167,1,0,0,0,170,172,
5,5,0,0,171,170,1,0,0,0,171,172,1,0,0,0,172,5,1,0,0,0,173,175,3,8,4,0,174,
176,3,10,5,0,175,174,1,0,0,0,175,176,1,0,0,0,176,7,1,0,0,0,177,179,3,122,
61,0,178,177,1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,181,7,0,0,0,181,
182,5,64,0,0,182,9,1,0,0,0,183,185,5,16,0,0,184,186,3,36,18,0,185,184,1,
0,0,0,186,187,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,11,1,0,0,0,189,
194,3,14,7,0,190,191,5,18,0,0,191,193,3,14,7,0,192,190,1,0,0,0,193,196,1,
0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,198,1,0,0,0,196,194,1,0,0,0,197,
199,7,1,0,0,198,197,1,0,0,0,198,199,1,0,0,0,199,13,1,0,0,0,200,201,3,8,4,
0,201,202,5,16,0,0,202,204,1,0,0,0,203,200,1,0,0,0,203,204,1,0,0,0,204,209,
1,0,0,0,205,210,3,30,15,0,206,210,3,128,64,0,207,210,3,130,65,0,208,210,
3,134,67,0,209,205,1,0,0,0,209,206,1,0,0,0,209,207,1,0,0,0,209,208,1,0,0,
0,210,15,1,0,0,0,211,225,5,39,0,0,212,214,5,66,0,0,213,215,3,4,2,0,214,213,
1,0,0,0,214,215,1,0,0,0,215,216,1,0,0,0,216,226,5,8,0,0,217,223,5,64,0,0,
218,220,5,7,0,0,219,221,3,4,2,0,220,219,1,0,0,0,220,221,1,0,0,0,221,222,
1,0,0,0,222,224,5,8,0,0,223,218,1,0,0,0,223,224,1,0,0,0,224,226,1,0,0,0,
225,212,1,0,0,0,225,217,1,0,0,0,226,227,1,0,0,0,227,228,3,86,43,0,228,17,
1,0,0,0,229,235,5,52,0,0,230,232,5,7,0,0,231,233,3,12,6,0,232,231,1,0,0,
0,232,233,1,0,0,0,233,234,1,0,0,0,234,236,5,8,0,0,235,230,1,0,0,0,235,236,
1,0,0,0,236,237,1,0,0,0,237,238,5,17,0,0,238,19,1,0,0,0,239,242,5,47,0,0,
240,243,5,64,0,0,241,243,3,120,60,0,242,240,1,0,0,0,242,241,1,0,0,0,243,
253,1,0,0,0,244,254,5,17,0,0,245,246,5,61,0,0,246,247,5,7,0,0,247,248,3,
4,2,0,248,249,5,8,0,0,249,251,1,0,0,0,250,245,1,0,0,0,250,251,1,0,0,0,251,
252,1,0,0,0,252,254,3,86,43,0,253,244,1,0,0,0,253,250,1,0,0,0,253,254,1,
0,0,0,254,21,1,0,0,0,255,259,5,40,0,0,256,260,5,66,0,0,257,258,5,64,0,0,
258,260,5,7,0,0,259,256,1,0,0,0,259,257,1,0,0,0,260,262,1,0,0,0,261,263,
3,4,2,0,262,261,1,0,0,0,262,263,1,0,0,0,263,264,1,0,0,0,264,265,5,8,0,0,
265,267,5,9,0,0,266,268,3,24,12,0,267,266,1,0,0,0,267,268,1,0,0,0,268,269,
1,0,0,0,269,270,5,10,0,0,270,23,1,0,0,0,271,273,3,28,14,0,272,271,1,0,0,
0,273,276,1,0,0,0,274,272,1,0,0,0,274,275,1,0,0,0,275,277,1,0,0,0,276,274,
1,0,0,0,277,278,3,26,13,0,278,25,1,0,0,0,279,280,5,50,0,0,280,281,3,30,15,
0,281,282,5,17,0,0,282,27,1,0,0,0,283,284,3,30,15,0,284,285,5,17,0,0,285,
288,1,0,0,0,286,288,3,2,1,0,287,283,1,0,0,0,287,286,1,0,0,0,288,29,1,0,0,
0,289,295,3,36,18,0,290,291,7,2,0,0,291,292,3,30,15,0,292,293,5,8,0,0,293,
295,1,0,0,0,294,289,1,0,0,0,294,290,1,0,0,0,295,297,1,0,0,0,296,298,3,34,
17,0,297,296,1,0,0,0,297,298,1,0,0,0,298,31,1,0,0,0,299,300,7,3,0,0,300,
33,1,0,0,0,301,302,3,32,16,0,302,303,3,30,15,0,303,35,1,0,0,0,304,313,3,
118,59,0,305,313,3,102,51,0,306,313,5,69,0,0,307,313,5,67,0,0,308,313,5,
1,0,0,309,313,3,116,58,0,310,313,3,8,4,0,311,313,3,120,60,0,312,304,1,0,
0,0,312,305,1,0,0,0,312,306,1,0,0,0,312,307,1,0,0,0,312,308,1,0,0,0,312,
309,1,0,0,0,312,310,1,0,0,0,312,311,1,0,0,0,313,37,1,0,0,0,314,315,5,43,
0,0,315,316,3,44,22,0,316,320,3,86,43,0,317,319,3,40,20,0,318,317,1,0,0,
0,319,322,1,0,0,0,320,318,1,0,0,0,320,321,1,0,0,0,321,324,1,0,0,0,322,320,
1,0,0,0,323,325,3,42,21,0,324,323,1,0,0,0,324,325,1,0,0,0,325,39,1,0,0,0,
326,327,5,41,0,0,327,328,5,42,0,0,328,329,3,44,22,0,329,330,3,86,43,0,330,
41,1,0,0,0,331,332,5,41,0,0,332,333,3,86,43,0,333,43,1,0,0,0,334,337,3,46,
23,0,335,336,5,4,0,0,336,338,3,44,22,0,337,335,1,0,0,0,337,338,1,0,0,0,338,
341,1,0,0,0,339,341,5,1,0,0,340,334,1,0,0,0,340,339,1,0,0,0,341,45,1,0,0,
0,342,345,3,30,15,0,343,344,7,4,0,0,344,346,3,44,22,0,345,343,1,0,0,0,345,
346,1,0,0,0,346,352,1,0,0,0,347,348,5,7,0,0,348,349,3,44,22,0,349,350,5,
8,0,0,350,352,1,0,0,0,351,342,1,0,0,0,351,347,1,0,0,0,352,47,1,0,0,0,353,
354,3,8,4,0,354,358,5,16,0,0,355,359,3,114,57,0,356,359,3,130,65,0,357,359,
3,134,67,0,358,355,1,0,0,0,358,356,1,0,0,0,358,357,1,0,0,0,359,361,1,0,0,
0,360,362,5,56,0,0,361,360,1,0,0,0,361,362,1,0,0,0,362,363,1,0,0,0,363,364,
5,17,0,0,364,49,1,0,0,0,365,366,5,44,0,0,366,367,3,8,4,0,367,368,5,53,0,
0,368,369,3,52,26,0,369,370,7,5,0,0,370,371,3,54,27,0,371,372,3,86,43,0,
372,51,1,0,0,0,373,374,5,68,0,0,374,53,1,0,0,0,375,378,5,68,0,0,376,378,
3,120,60,0,377,375,1,0,0,0,377,376,1,0,0,0,378,55,1,0,0,0,379,380,5,45,0,
0,380,381,3,44,22,0,381,382,3,86,43,0,382,57,1,0,0,0,383,384,5,46,0,0,384,
389,3,8,4,0,385,386,5,18,0,0,386,388,3,8,4,0,387,385,1,0,0,0,388,391,1,0,
0,0,389,387,1,0,0,0,389,390,1,0,0,0,390,392,1,0,0,0,391,389,1,0,0,0,392,
393,5,2,0,0,393,394,3,60,30,0,394,395,3,86,43,0,395,59,1,0,0,0,396,400,3,
30,15,0,397,400,3,124,62,0,398,400,3,134,67,0,399,396,1,0,0,0,399,397,1,
0,0,0,399,398,1,0,0,0,400,61,1,0,0,0,401,402,5,48,0,0,402,403,3,64,32,0,
403,404,5,17,0,0,404,416,1,0,0,0,405,406,5,49,0,0,406,408,3,64,32,0,407,
409,3,66,33,0,408,407,1,0,0,0,408,409,1,0,0,0,409,411,1,0,0,0,410,412,3,
68,34,0,411,410,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,414,5,17,0,0,
414,416,1,0,0,0,415,401,1,0,0,0,415,405,1,0,0,0,416,63,1,0,0,0,417,422,5,
67,0,0,418,419,5,33,0,0,419,420,5,74,0,0,420,422,5,73,0,0,421,417,1,0,0,
0,421,418,1,0,0,0,422,65,1,0,0,0,423,426,5,62,0,0,424,427,5,25,0,0,425,427,
3,102,51,0,426,424,1,0,0,0,426,425,1,0,0,0,427,67,1,0,0,0,428,429,5,63,0,
0,429,430,5,7,0,0,430,435,3,70,35,0,431,432,5,18,0,0,432,434,3,70,35,0,433,
431,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,439,1,0,
0,0,437,435,1,0,0,0,438,440,5,18,0,0,439,438,1,0,0,0,439,440,1,0,0,0,440,
441,1,0,0,0,441,442,5,8,0,0,442,69,1,0,0,0,443,444,3,108,54,0,444,445,5,
16,0,0,445,446,3,36,18,0,446,71,1,0,0,0,447,448,5,51,0,0,448,449,3,74,37,
0,449,450,3,86,43,0,450,73,1,0,0,0,451,456,3,76,38,0,452,453,5,18,0,0,453,
455,3,76,38,0,454,452,1,0,0,0,455,458,1,0,0,0,456,454,1,0,0,0,456,457,1,
0,0,0,457,460,1,0,0,0,458,456,1,0,0,0,459,451,1,0,0,0,459,460,1,0,0,0,460,
75,1,0,0,0,461,463,7,6,0,0,462,461,1,0,0,0,462,463,1,0,0,0,463,464,1,0,0,
0,464,469,3,78,39,0,465,466,5,60,0,0,466,468,3,80,40,0,467,465,1,0,0,0,468,
471,1,0,0,0,469,467,1,0,0,0,469,470,1,0,0,0,470,481,1,0,0,0,471,469,1,0,
0,0,472,477,3,80,40,0,473,474,5,60,0,0,474,476,3,80,40,0,475,473,1,0,0,0,
476,479,1,0,0,0,477,475,1,0,0,0,477,478,1,0,0,0,478,481,1,0,0,0,479,477,
1,0,0,0,480,462,1,0,0,0,480,472,1,0,0,0,481,77,1,0,0,0,482,483,5,64,0,0,
483,79,1,0,0,0,484,485,5,7,0,0,485,488,3,82,41,0,486,487,5,16,0,0,487,489,
3,30,15,0,488,486,1,0,0,0,488,489,1,0,0,0,489,490,1,0,0,0,490,491,5,8,0,
0,491,81,1,0,0,0,492,493,5,64,0,0,493,83,1,0,0,0,494,495,3,88,44,0,495,496,
3,86,43,0,496,85,1,0,0,0,497,502,5,9,0,0,498,501,3,110,55,0,499,501,3,2,
1,0,500,498,1,0,0,0,500,499,1,0,0,0,501,504,1,0,0,0,502,500,1,0,0,0,502,
503,1,0,0,0,503,506,1,0,0,0,504,502,1,0,0,0,505,507,3,112,56,0,506,505,1,
0,0,0,506,507,1,0,0,0,507,508,1,0,0,0,508,509,5,10,0,0,509,87,1,0,0,0,510,
515,3,90,45,0,511,512,5,18,0,0,512,514,3,90,45,0,513,511,1,0,0,0,514,517,
1,0,0,0,515,513,1,0,0,0,515,516,1,0,0,0,516,89,1,0,0,0,517,515,1,0,0,0,518,
520,3,92,46,0,519,518,1,0,0,0,520,521,1,0,0,0,521,519,1,0,0,0,521,522,1,
0,0,0,522,91,1,0,0,0,523,534,3,102,51,0,524,525,5,23,0,0,525,534,3,102,51,
0,526,527,5,19,0,0,527,534,3,102,51,0,528,534,5,22,0,0,529,534,5,25,0,0,
530,534,3,94,47,0,531,534,3,98,49,0,532,534,3,96,48,0,533,523,1,0,0,0,533,
524,1,0,0,0,533,526,1,0,0,0,533,528,1,0,0,0,533,529,1,0,0,0,533,530,1,0,
0,0,533,531,1,0,0,0,533,532,1,0,0,0,534,93,1,0,0,0,535,536,7,7,0,0,536,95,
1,0,0,0,537,547,3,104,52,0,538,539,3,104,52,0,539,542,5,7,0,0,540,543,3,
90,45,0,541,543,3,30,15,0,542,540,1,0,0,0,542,541,1,0,0,0,543,544,1,0,0,
0,544,545,5,8,0,0,545,547,1,0,0,0,546,537,1,0,0,0,546,538,1,0,0,0,547,97,
1,0,0,0,548,549,5,11,0,0,549,553,5,64,0,0,550,551,3,100,50,0,551,552,7,8,
0,0,552,554,1,0,0,0,553,550,1,0,0,0,553,554,1,0,0,0,554,555,1,0,0,0,555,
556,5,12,0,0,556,99,1,0,0,0,557,558,7,9,0,0,558,101,1,0,0,0,559,563,5,64,
0,0,560,562,3,106,53,0,561,560,1,0,0,0,562,565,1,0,0,0,563,561,1,0,0,0,563,
564,1,0,0,0,564,583,1,0,0,0,565,563,1,0,0,0,566,567,5,6,0,0,567,568,3,108,
54,0,568,572,5,10,0,0,569,571,3,106,53,0,570,569,1,0,0,0,571,574,1,0,0,0,
572,570,1,0,0,0,572,573,1,0,0,0,573,583,1,0,0,0,574,572,1,0,0,0,575,583,
5,60,0,0,576,583,5,53,0,0,577,583,5,59,0,0,578,583,5,58,0,0,579,583,5,55,
0,0,580,583,5,54,0,0,581,583,5,61,0,0,582,559,1,0,0,0,582,566,1,0,0,0,582,
575,1,0,0,0,582,576,1,0,0,0,582,577,1,0,0,0,582,578,1,0,0,0,582,579,1,0,
0,0,582,580,1,0,0,0,582,581,1,0,0,0,583,103,1,0,0,0,584,588,5,65,0,0,585,
587,3,106,53,0,586,585,1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,
0,0,0,589,105,1,0,0,0,590,588,1,0,0,0,591,592,5,76,0,0,592,593,3,108,54,
0,593,594,5,10,0,0,594,597,1,0,0,0,595,597,5,77,0,0,596,591,1,0,0,0,596,
595,1,0,0,0,597,107,1,0,0,0,598,599,5,20,0,0,599,600,7,10,0,0,600,109,1,
0,0,0,601,602,3,102,51,0,602,603,5,16,0,0,603,605,3,114,57,0,604,606,5,57,
0,0,605,604,1,0,0,0,605,606,1,0,0,0,606,607,1,0,0,0,607,608,5,17,0,0,608,
622,1,0,0,0,609,610,3,102,51,0,610,611,5,16,0,0,611,612,3,86,43,0,612,622,
1,0,0,0,613,614,3,102,51,0,614,615,5,16,0,0,615,617,3,114,57,0,616,618,5,
57,0,0,617,616,1,0,0,0,617,618,1,0,0,0,618,619,1,0,0,0,619,620,3,86,43,0,
620,622,1,0,0,0,621,601,1,0,0,0,621,609,1,0,0,0,621,613,1,0,0,0,622,111,
1,0,0,0,623,624,3,102,51,0,624,625,5,16,0,0,625,627,3,114,57,0,626,628,5,
57,0,0,627,626,1,0,0,0,627,628,1,0,0,0,628,113,1,0,0,0,629,636,3,30,15,0,
630,632,5,18,0,0,631,630,1,0,0,0,631,632,1,0,0,0,632,633,1,0,0,0,633,635,
3,30,15,0,634,631,1,0,0,0,635,638,1,0,0,0,636,634,1,0,0,0,636,637,1,0,0,
0,637,115,1,0,0,0,638,636,1,0,0,0,639,640,5,33,0,0,640,641,5,74,0,0,641,
642,5,73,0,0,642,117,1,0,0,0,643,645,5,68,0,0,644,646,5,3,0,0,645,644,1,
0,0,0,645,646,1,0,0,0,646,119,1,0,0,0,647,649,3,122,61,0,648,647,1,0,0,0,
648,649,1,0,0,0,649,650,1,0,0,0,650,652,5,66,0,0,651,653,3,12,6,0,652,651,
1,0,0,0,652,653,1,0,0,0,653,654,1,0,0,0,654,655,5,8,0,0,655,121,1,0,0,0,
656,657,5,64,0,0,657,659,5,19,0,0,658,656,1,0,0,0,659,660,1,0,0,0,660,658,
1,0,0,0,660,661,1,0,0,0,661,123,1,0,0,0,662,666,3,126,63,0,663,666,3,128,
64,0,664,666,3,130,65,0,665,662,1,0,0,0,665,663,1,0,0,0,665,664,1,0,0,0,
666,125,1,0,0,0,667,670,3,132,66,0,668,669,5,18,0,0,669,671,3,132,66,0,670,
668,1,0,0,0,671,672,1,0,0,0,672,670,1,0,0,0,672,673,1,0,0,0,673,675,1,0,
0,0,674,676,5,18,0,0,675,674,1,0,0,0,675,676,1,0,0,0,676,127,1,0,0,0,677,
679,3,132,66,0,678,680,3,132,66,0,679,678,1,0,0,0,680,681,1,0,0,0,681,679,
1,0,0,0,681,682,1,0,0,0,682,129,1,0,0,0,683,686,5,11,0,0,684,687,3,126,63,
0,685,687,3,128,64,0,686,684,1,0,0,0,686,685,1,0,0,0,687,688,1,0,0,0,688,
689,5,12,0,0,689,131,1,0,0,0,690,696,3,30,15,0,691,692,5,7,0,0,692,693,3,
124,62,0,693,694,5,8,0,0,694,696,1,0,0,0,695,690,1,0,0,0,695,691,1,0,0,0,
696,133,1,0,0,0,697,698,5,7,0,0,698,703,3,136,68,0,699,700,5,18,0,0,700,
702,3,136,68,0,701,699,1,0,0,0,702,705,1,0,0,0,703,701,1,0,0,0,703,704,1,
0,0,0,704,707,1,0,0,0,705,703,1,0,0,0,706,708,5,18,0,0,707,706,1,0,0,0,707,
708,1,0,0,0,708,709,1,0,0,0,709,710,5,8,0,0,710,135,1,0,0,0,711,712,3,138,
69,0,712,713,5,16,0,0,713,714,3,140,70,0,714,137,1,0,0,0,715,719,3,30,15,
0,716,719,3,124,62,0,717,719,3,134,67,0,718,715,1,0,0,0,718,716,1,0,0,0,
718,717,1,0,0,0,719,139,1,0,0,0,720,724,3,30,15,0,721,724,3,124,62,0,722,
724,3,134,67,0,723,720,1,0,0,0,723,721,1,0,0,0,723,722,1,0,0,0,724,141,1,
0,0,0,87,145,160,167,171,175,178,187,194,198,203,209,214,220,223,225,232,
235,242,250,253,259,262,267,274,287,294,297,312,320,324,337,340,345,351,
358,361,377,389,399,408,411,415,421,426,435,439,456,459,462,469,477,480,
488,500,502,506,515,521,533,542,546,553,563,572,582,588,596,605,617,621,
627,631,636,645,648,652,660,665,672,675,681,686,695,703,707,718,723];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class ScssParser extends antlr4.Parser {

    static grammarFileName = "ScssParser.g4";
    static literalNames = [ null, "'null'", "'in'", null, null, "'...'", 
                            null, "'('", "')'", "'{'", "'}'", "'['", "']'", 
                            "'>'", "'~'", "'<'", "':'", "';'", "','", "'.'", 
                            "'$'", "'@'", "'&'", "'#'", "'+'", "'*'", "'/'", 
                            "'-'", "'%'", null, null, null, null, null, 
                            "'=='", "'!='", "'='", "'|='", "'~='", "'@mixin'", 
                            "'@function'", "'@else'", "'if'", "'@if'", "'@for'", 
                            "'@while'", "'@each'", "'@include'", "'@import'", 
                            "'@use'", "'@return'", "'@media'", "'@content'", 
                            "'from'", "'to'", "'through'", "'!default'", 
                            "'!important'", "'only'", "'not'", "'and'", 
                            "'using'", "'as'", "'with'" ];
    static symbolicNames = [ null, "NULL_", "IN", "Unit", "COMBINE_COMPARE", 
                             "Ellipsis", "InterpolationStart", "LPAREN", 
                             "RPAREN", "BlockStart", "BlockEnd", "LBRACK", 
                             "RBRACK", "GT", "TIL", "LT", "COLON", "SEMI", 
                             "COMMA", "DOT", "DOLLAR", "AT", "AND", "HASH", 
                             "PLUS", "TIMES", "DIV", "MINUS", "PERC", "MINUS_DOLLAR", 
                             "PLUS_DOLLAR", "MINUS_LPAREN", "PLUS_LPAREN", 
                             "UrlStart", "EQEQ", "NOTEQ", "EQ", "PIPE_EQ", 
                             "TILD_EQ", "MIXIN", "FUNCTION", "AT_ELSE", 
                             "IF", "AT_IF", "AT_FOR", "AT_WHILE", "AT_EACH", 
                             "INCLUDE", "IMPORT", "USE", "RETURN", "MEDIA", 
                             "CONTENT", "FROM", "TO", "THROUGH", "POUND_DEFAULT", 
                             "IMPORTANT", "ONLY", "NOT", "AND_WORD", "USING", 
                             "AS", "WITH", "Identifier", "PseudoIdentifier", 
                             "FunctionIdentifier", "StringLiteral", "Number", 
                             "Color", "WS", "SL_COMMENT", "COMMENT", "UrlEnd", 
                             "Url", "SPACE", "InterpolationStartAfter", 
                             "IdentifierAfter" ];
    static ruleNames = [ "stylesheet", "statement", "declaredParams", "declaredParam", 
                         "variableName", "paramOptionalValue", "passedParams", 
                         "passedParam", "mixinDeclaration", "contentDeclaration", 
                         "includeDeclaration", "functionDeclaration", "functionBody", 
                         "functionReturn", "functionStatement", "commandStatement", 
                         "mathCharacter", "mathStatement", "expression", 
                         "ifDeclaration", "elseIfStatement", "elseStatement", 
                         "conditions", "condition", "variableDeclaration", 
                         "forDeclaration", "fromNumber", "throughNumber", 
                         "whileDeclaration", "eachDeclaration", "eachValueList", 
                         "importDeclaration", "referenceUrl", "asClause", 
                         "withClause", "keywordArgument", "mediaDeclaration", 
                         "mediaQueryList", "mediaQuery", "mediaType", "mediaExpression", 
                         "mediaFeature", "ruleset", "block", "selectors", 
                         "selector", "element", "combinator", "pseudo", 
                         "attrib", "attribRelate", "identifier", "pseudoIdentifier", 
                         "identifierPart", "identifierVariableName", "property_", 
                         "lastProperty", "propertyValue", "url", "measurement", 
                         "functionCall", "namespace", "list_", "listCommaSeparated", 
                         "listSpaceSeparated", "listBracketed", "listElement", 
                         "map_", "mapEntry", "mapKey", "mapValue" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ScssParser.ruleNames;
        this.literalNames = ScssParser.literalNames;
        this.symbolicNames = ScssParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	stylesheet() {
	    let localctx = new StylesheetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ScssParser.RULE_stylesheet);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.InterpolationStart) | (1 << ScssParser.LBRACK) | (1 << ScssParser.GT) | (1 << ScssParser.TIL) | (1 << ScssParser.DOT) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.PLUS) | (1 << ScssParser.TIMES) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR))) !== 0) || ((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (ScssParser.MIXIN - 39)) | (1 << (ScssParser.FUNCTION - 39)) | (1 << (ScssParser.AT_IF - 39)) | (1 << (ScssParser.AT_FOR - 39)) | (1 << (ScssParser.AT_WHILE - 39)) | (1 << (ScssParser.AT_EACH - 39)) | (1 << (ScssParser.INCLUDE - 39)) | (1 << (ScssParser.IMPORT - 39)) | (1 << (ScssParser.USE - 39)) | (1 << (ScssParser.MEDIA - 39)) | (1 << (ScssParser.CONTENT - 39)) | (1 << (ScssParser.FROM - 39)) | (1 << (ScssParser.TO - 39)) | (1 << (ScssParser.THROUGH - 39)) | (1 << (ScssParser.ONLY - 39)) | (1 << (ScssParser.NOT - 39)) | (1 << (ScssParser.AND_WORD - 39)) | (1 << (ScssParser.USING - 39)) | (1 << (ScssParser.Identifier - 39)) | (1 << (ScssParser.PseudoIdentifier - 39)))) !== 0)) {
	            this.state = 142;
	            this.statement();
	            this.state = 147;
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



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ScssParser.RULE_statement);
	    try {
	        this.state = 160;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 148;
	            this.importDeclaration();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 149;
	            this.mediaDeclaration();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 150;
	            this.ruleset();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 151;
	            this.mixinDeclaration();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 152;
	            this.contentDeclaration();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 153;
	            this.functionDeclaration();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 154;
	            this.variableDeclaration();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 155;
	            this.includeDeclaration();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 156;
	            this.ifDeclaration();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 157;
	            this.forDeclaration();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 158;
	            this.whileDeclaration();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 159;
	            this.eachDeclaration();
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



	declaredParams() {
	    let localctx = new DeclaredParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ScssParser.RULE_declaredParams);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.declaredParam();
	        this.state = 167;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ScssParser.COMMA) {
	            this.state = 163;
	            this.match(ScssParser.COMMA);
	            this.state = 164;
	            this.declaredParam();
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 171;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.Ellipsis) {
	            this.state = 170;
	            this.match(ScssParser.Ellipsis);
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



	declaredParam() {
	    let localctx = new DeclaredParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ScssParser.RULE_declaredParam);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 173;
	        this.variableName();
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.COLON) {
	            this.state = 174;
	            this.paramOptionalValue();
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



	variableName() {
	    let localctx = new VariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ScssParser.RULE_variableName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.Identifier) {
	            this.state = 177;
	            this.namespace();
	        }

	        this.state = 180;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 181;
	        this.match(ScssParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramOptionalValue() {
	    let localctx = new ParamOptionalValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ScssParser.RULE_paramOptionalValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 183;
	        this.match(ScssParser.COLON);
	        this.state = 185; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 184;
	            this.expression();
	            this.state = 187; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL_) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (ScssParser.UrlStart - 33)) | (1 << (ScssParser.FROM - 33)) | (1 << (ScssParser.TO - 33)) | (1 << (ScssParser.THROUGH - 33)) | (1 << (ScssParser.ONLY - 33)) | (1 << (ScssParser.NOT - 33)) | (1 << (ScssParser.AND_WORD - 33)) | (1 << (ScssParser.USING - 33)) | (1 << (ScssParser.Identifier - 33)))) !== 0) || ((((_la - 66)) & ~0x1f) == 0 && ((1 << (_la - 66)) & ((1 << (ScssParser.FunctionIdentifier - 66)) | (1 << (ScssParser.StringLiteral - 66)) | (1 << (ScssParser.Number - 66)) | (1 << (ScssParser.Color - 66)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	passedParams() {
	    let localctx = new PassedParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ScssParser.RULE_passedParams);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.passedParam();
	        this.state = 194;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 190;
	                this.match(ScssParser.COMMA);
	                this.state = 191;
	                this.passedParam(); 
	            }
	            this.state = 196;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.Ellipsis || _la===ScssParser.COMMA) {
	            this.state = 197;
	            _la = this._input.LA(1);
	            if(!(_la===ScssParser.Ellipsis || _la===ScssParser.COMMA)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
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



	passedParam() {
	    let localctx = new PassedParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ScssParser.RULE_passedParam);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 200;
	            this.variableName();
	            this.state = 201;
	            this.match(ScssParser.COLON);

	        }
	        this.state = 209;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 205;
	            this.commandStatement();
	            break;

	        case 2:
	            this.state = 206;
	            this.listSpaceSeparated();
	            break;

	        case 3:
	            this.state = 207;
	            this.listBracketed();
	            break;

	        case 4:
	            this.state = 208;
	            this.map_();
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



	mixinDeclaration() {
	    let localctx = new MixinDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ScssParser.RULE_mixinDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.match(ScssParser.MIXIN);
	        this.state = 225;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.FunctionIdentifier:
	            this.state = 212;
	            this.match(ScssParser.FunctionIdentifier);
	            this.state = 214;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR))) !== 0) || _la===ScssParser.Identifier) {
	                this.state = 213;
	                this.declaredParams();
	            }

	            this.state = 216;
	            this.match(ScssParser.RPAREN);
	            break;
	        case ScssParser.Identifier:
	            this.state = 217;
	            this.match(ScssParser.Identifier);
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.LPAREN) {
	                this.state = 218;
	                this.match(ScssParser.LPAREN);
	                this.state = 220;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR))) !== 0) || _la===ScssParser.Identifier) {
	                    this.state = 219;
	                    this.declaredParams();
	                }

	                this.state = 222;
	                this.match(ScssParser.RPAREN);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 227;
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



	contentDeclaration() {
	    let localctx = new ContentDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, ScssParser.RULE_contentDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(ScssParser.CONTENT);
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.LPAREN) {
	            this.state = 230;
	            this.match(ScssParser.LPAREN);
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL_) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.LBRACK) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR) | (1 << ScssParser.MINUS_LPAREN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ScssParser.PLUS_LPAREN - 32)) | (1 << (ScssParser.UrlStart - 32)) | (1 << (ScssParser.FROM - 32)) | (1 << (ScssParser.TO - 32)) | (1 << (ScssParser.THROUGH - 32)) | (1 << (ScssParser.ONLY - 32)) | (1 << (ScssParser.NOT - 32)) | (1 << (ScssParser.AND_WORD - 32)) | (1 << (ScssParser.USING - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (ScssParser.Identifier - 64)) | (1 << (ScssParser.FunctionIdentifier - 64)) | (1 << (ScssParser.StringLiteral - 64)) | (1 << (ScssParser.Number - 64)) | (1 << (ScssParser.Color - 64)))) !== 0)) {
	                this.state = 231;
	                this.passedParams();
	            }

	            this.state = 234;
	            this.match(ScssParser.RPAREN);
	        }

	        this.state = 237;
	        this.match(ScssParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	includeDeclaration() {
	    let localctx = new IncludeDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, ScssParser.RULE_includeDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(ScssParser.INCLUDE);
	        this.state = 242;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 240;
	            this.match(ScssParser.Identifier);
	            break;

	        case 2:
	            this.state = 241;
	            this.functionCall();
	            break;

	        }
	        this.state = 253;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 244;
	            this.match(ScssParser.SEMI);

	        } else if(la_===2) {
	            this.state = 250;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.USING) {
	                this.state = 245;
	                this.match(ScssParser.USING);
	                this.state = 246;
	                this.match(ScssParser.LPAREN);
	                this.state = 247;
	                this.declaredParams();
	                this.state = 248;
	                this.match(ScssParser.RPAREN);
	            }

	            this.state = 252;
	            this.block();

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



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, ScssParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 255;
	        this.match(ScssParser.FUNCTION);
	        this.state = 259;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.FunctionIdentifier:
	            this.state = 256;
	            this.match(ScssParser.FunctionIdentifier);
	            break;
	        case ScssParser.Identifier:
	            this.state = 257;
	            this.match(ScssParser.Identifier);
	            this.state = 258;
	            this.match(ScssParser.LPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR))) !== 0) || _la===ScssParser.Identifier) {
	            this.state = 261;
	            this.declaredParams();
	        }

	        this.state = 264;
	        this.match(ScssParser.RPAREN);
	        this.state = 265;
	        this.match(ScssParser.BlockStart);
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL_) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.LBRACK) | (1 << ScssParser.GT) | (1 << ScssParser.TIL) | (1 << ScssParser.DOT) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.PLUS) | (1 << ScssParser.TIMES) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR) | (1 << ScssParser.MINUS_LPAREN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ScssParser.PLUS_LPAREN - 32)) | (1 << (ScssParser.UrlStart - 32)) | (1 << (ScssParser.MIXIN - 32)) | (1 << (ScssParser.FUNCTION - 32)) | (1 << (ScssParser.AT_IF - 32)) | (1 << (ScssParser.AT_FOR - 32)) | (1 << (ScssParser.AT_WHILE - 32)) | (1 << (ScssParser.AT_EACH - 32)) | (1 << (ScssParser.INCLUDE - 32)) | (1 << (ScssParser.IMPORT - 32)) | (1 << (ScssParser.USE - 32)) | (1 << (ScssParser.RETURN - 32)) | (1 << (ScssParser.MEDIA - 32)) | (1 << (ScssParser.CONTENT - 32)) | (1 << (ScssParser.FROM - 32)) | (1 << (ScssParser.TO - 32)) | (1 << (ScssParser.THROUGH - 32)) | (1 << (ScssParser.ONLY - 32)) | (1 << (ScssParser.NOT - 32)) | (1 << (ScssParser.AND_WORD - 32)) | (1 << (ScssParser.USING - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (ScssParser.Identifier - 64)) | (1 << (ScssParser.PseudoIdentifier - 64)) | (1 << (ScssParser.FunctionIdentifier - 64)) | (1 << (ScssParser.StringLiteral - 64)) | (1 << (ScssParser.Number - 64)) | (1 << (ScssParser.Color - 64)))) !== 0)) {
	            this.state = 266;
	            this.functionBody();
	        }

	        this.state = 269;
	        this.match(ScssParser.BlockEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, ScssParser.RULE_functionBody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL_) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.LBRACK) | (1 << ScssParser.GT) | (1 << ScssParser.TIL) | (1 << ScssParser.DOT) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.PLUS) | (1 << ScssParser.TIMES) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR) | (1 << ScssParser.MINUS_LPAREN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ScssParser.PLUS_LPAREN - 32)) | (1 << (ScssParser.UrlStart - 32)) | (1 << (ScssParser.MIXIN - 32)) | (1 << (ScssParser.FUNCTION - 32)) | (1 << (ScssParser.AT_IF - 32)) | (1 << (ScssParser.AT_FOR - 32)) | (1 << (ScssParser.AT_WHILE - 32)) | (1 << (ScssParser.AT_EACH - 32)) | (1 << (ScssParser.INCLUDE - 32)) | (1 << (ScssParser.IMPORT - 32)) | (1 << (ScssParser.USE - 32)) | (1 << (ScssParser.MEDIA - 32)) | (1 << (ScssParser.CONTENT - 32)) | (1 << (ScssParser.FROM - 32)) | (1 << (ScssParser.TO - 32)) | (1 << (ScssParser.THROUGH - 32)) | (1 << (ScssParser.ONLY - 32)) | (1 << (ScssParser.NOT - 32)) | (1 << (ScssParser.AND_WORD - 32)) | (1 << (ScssParser.USING - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (ScssParser.Identifier - 64)) | (1 << (ScssParser.PseudoIdentifier - 64)) | (1 << (ScssParser.FunctionIdentifier - 64)) | (1 << (ScssParser.StringLiteral - 64)) | (1 << (ScssParser.Number - 64)) | (1 << (ScssParser.Color - 64)))) !== 0)) {
	            this.state = 271;
	            this.functionStatement();
	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 277;
	        this.functionReturn();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionReturn() {
	    let localctx = new FunctionReturnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, ScssParser.RULE_functionReturn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(ScssParser.RETURN);
	        this.state = 280;
	        this.commandStatement();
	        this.state = 281;
	        this.match(ScssParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionStatement() {
	    let localctx = new FunctionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, ScssParser.RULE_functionStatement);
	    try {
	        this.state = 287;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 283;
	            this.commandStatement();
	            this.state = 284;
	            this.match(ScssParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.statement();
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



	commandStatement() {
	    let localctx = new CommandStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, ScssParser.RULE_commandStatement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.NULL_:
	        case ScssParser.InterpolationStart:
	        case ScssParser.DOLLAR:
	        case ScssParser.MINUS_DOLLAR:
	        case ScssParser.PLUS_DOLLAR:
	        case ScssParser.UrlStart:
	        case ScssParser.FROM:
	        case ScssParser.TO:
	        case ScssParser.THROUGH:
	        case ScssParser.ONLY:
	        case ScssParser.NOT:
	        case ScssParser.AND_WORD:
	        case ScssParser.USING:
	        case ScssParser.Identifier:
	        case ScssParser.FunctionIdentifier:
	        case ScssParser.StringLiteral:
	        case ScssParser.Number:
	        case ScssParser.Color:
	            this.state = 289;
	            this.expression();
	            break;
	        case ScssParser.LPAREN:
	        case ScssParser.MINUS_LPAREN:
	        case ScssParser.PLUS_LPAREN:
	            this.state = 290;
	            _la = this._input.LA(1);
	            if(!(((((_la - 7)) & ~0x1f) == 0 && ((1 << (_la - 7)) & ((1 << (ScssParser.LPAREN - 7)) | (1 << (ScssParser.MINUS_LPAREN - 7)) | (1 << (ScssParser.PLUS_LPAREN - 7)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 291;
	            this.commandStatement();
	            this.state = 292;
	            this.match(ScssParser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.PLUS) | (1 << ScssParser.TIMES) | (1 << ScssParser.DIV) | (1 << ScssParser.MINUS) | (1 << ScssParser.PERC))) !== 0)) {
	            this.state = 296;
	            this.mathStatement();
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



	mathCharacter() {
	    let localctx = new MathCharacterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, ScssParser.RULE_mathCharacter);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.PLUS) | (1 << ScssParser.TIMES) | (1 << ScssParser.DIV) | (1 << ScssParser.MINUS) | (1 << ScssParser.PERC))) !== 0))) {
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



	mathStatement() {
	    let localctx = new MathStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, ScssParser.RULE_mathStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.mathCharacter();
	        this.state = 302;
	        this.commandStatement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 36, ScssParser.RULE_expression);
	    try {
	        this.state = 312;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.measurement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.identifier();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 306;
	            this.match(ScssParser.Color);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 307;
	            this.match(ScssParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 308;
	            this.match(ScssParser.NULL_);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 309;
	            this.url();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 310;
	            this.variableName();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 311;
	            this.functionCall();
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



	ifDeclaration() {
	    let localctx = new IfDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, ScssParser.RULE_ifDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.match(ScssParser.AT_IF);
	        this.state = 315;
	        this.conditions();
	        this.state = 316;
	        this.block();
	        this.state = 320;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 317;
	                this.elseIfStatement(); 
	            }
	            this.state = 322;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	        }

	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.AT_ELSE) {
	            this.state = 323;
	            this.elseStatement();
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



	elseIfStatement() {
	    let localctx = new ElseIfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, ScssParser.RULE_elseIfStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this.match(ScssParser.AT_ELSE);
	        this.state = 327;
	        this.match(ScssParser.IF);
	        this.state = 328;
	        this.conditions();
	        this.state = 329;
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



	elseStatement() {
	    let localctx = new ElseStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, ScssParser.RULE_elseStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 331;
	        this.match(ScssParser.AT_ELSE);
	        this.state = 332;
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



	conditions() {
	    let localctx = new ConditionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, ScssParser.RULE_conditions);
	    try {
	        this.state = 340;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 334;
	            this.condition();
	            this.state = 337;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	            if(la_===1) {
	                this.state = 335;
	                this.match(ScssParser.COMBINE_COMPARE);
	                this.state = 336;
	                this.conditions();

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 339;
	            this.match(ScssParser.NULL_);
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



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, ScssParser.RULE_condition);
	    var _la = 0; // Token type
	    try {
	        this.state = 351;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 342;
	            this.commandStatement();
	            this.state = 345;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (ScssParser.GT - 13)) | (1 << (ScssParser.LT - 13)) | (1 << (ScssParser.EQEQ - 13)) | (1 << (ScssParser.NOTEQ - 13)))) !== 0)) {
	                this.state = 343;
	                _la = this._input.LA(1);
	                if(!(((((_la - 13)) & ~0x1f) == 0 && ((1 << (_la - 13)) & ((1 << (ScssParser.GT - 13)) | (1 << (ScssParser.LT - 13)) | (1 << (ScssParser.EQEQ - 13)) | (1 << (ScssParser.NOTEQ - 13)))) !== 0))) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 344;
	                this.conditions();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 347;
	            this.match(ScssParser.LPAREN);
	            this.state = 348;
	            this.conditions();
	            this.state = 349;
	            this.match(ScssParser.RPAREN);
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



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, ScssParser.RULE_variableDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.variableName();
	        this.state = 354;
	        this.match(ScssParser.COLON);
	        this.state = 358;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 355;
	            this.propertyValue();
	            break;

	        case 2:
	            this.state = 356;
	            this.listBracketed();
	            break;

	        case 3:
	            this.state = 357;
	            this.map_();
	            break;

	        }
	        this.state = 361;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.POUND_DEFAULT) {
	            this.state = 360;
	            this.match(ScssParser.POUND_DEFAULT);
	        }

	        this.state = 363;
	        this.match(ScssParser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forDeclaration() {
	    let localctx = new ForDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, ScssParser.RULE_forDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(ScssParser.AT_FOR);
	        this.state = 366;
	        this.variableName();
	        this.state = 367;
	        this.match(ScssParser.FROM);
	        this.state = 368;
	        this.fromNumber();
	        this.state = 369;
	        _la = this._input.LA(1);
	        if(!(_la===ScssParser.TO || _la===ScssParser.THROUGH)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 370;
	        this.throughNumber();
	        this.state = 371;
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



	fromNumber() {
	    let localctx = new FromNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, ScssParser.RULE_fromNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(ScssParser.Number);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	throughNumber() {
	    let localctx = new ThroughNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, ScssParser.RULE_throughNumber);
	    try {
	        this.state = 377;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.Number:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 375;
	            this.match(ScssParser.Number);
	            break;
	        case ScssParser.Identifier:
	        case ScssParser.FunctionIdentifier:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            this.functionCall();
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



	whileDeclaration() {
	    let localctx = new WhileDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, ScssParser.RULE_whileDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(ScssParser.AT_WHILE);
	        this.state = 380;
	        this.conditions();
	        this.state = 381;
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



	eachDeclaration() {
	    let localctx = new EachDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, ScssParser.RULE_eachDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 383;
	        this.match(ScssParser.AT_EACH);
	        this.state = 384;
	        this.variableName();
	        this.state = 389;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ScssParser.COMMA) {
	            this.state = 385;
	            this.match(ScssParser.COMMA);
	            this.state = 386;
	            this.variableName();
	            this.state = 391;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 392;
	        this.match(ScssParser.IN);
	        this.state = 393;
	        this.eachValueList();
	        this.state = 394;
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



	eachValueList() {
	    let localctx = new EachValueListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, ScssParser.RULE_eachValueList);
	    try {
	        this.state = 399;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 396;
	            this.commandStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 397;
	            this.list_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 398;
	            this.map_();
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



	importDeclaration() {
	    let localctx = new ImportDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, ScssParser.RULE_importDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.state = 415;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.IMPORT:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 401;
	            this.match(ScssParser.IMPORT);
	            this.state = 402;
	            this.referenceUrl();
	            this.state = 403;
	            this.match(ScssParser.SEMI);
	            break;
	        case ScssParser.USE:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 405;
	            this.match(ScssParser.USE);
	            this.state = 406;
	            this.referenceUrl();
	            this.state = 408;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.AS) {
	                this.state = 407;
	                this.asClause();
	            }

	            this.state = 411;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.WITH) {
	                this.state = 410;
	                this.withClause();
	            }

	            this.state = 413;
	            this.match(ScssParser.SEMI);
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



	referenceUrl() {
	    let localctx = new ReferenceUrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, ScssParser.RULE_referenceUrl);
	    try {
	        this.state = 421;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.StringLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 417;
	            this.match(ScssParser.StringLiteral);
	            break;
	        case ScssParser.UrlStart:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 418;
	            this.match(ScssParser.UrlStart);
	            this.state = 419;
	            this.match(ScssParser.Url);
	            this.state = 420;
	            this.match(ScssParser.UrlEnd);
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



	asClause() {
	    let localctx = new AsClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, ScssParser.RULE_asClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 423;
	        this.match(ScssParser.AS);
	        this.state = 426;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.TIMES:
	            this.state = 424;
	            this.match(ScssParser.TIMES);
	            break;
	        case ScssParser.InterpolationStart:
	        case ScssParser.FROM:
	        case ScssParser.TO:
	        case ScssParser.THROUGH:
	        case ScssParser.ONLY:
	        case ScssParser.NOT:
	        case ScssParser.AND_WORD:
	        case ScssParser.USING:
	        case ScssParser.Identifier:
	            this.state = 425;
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



	withClause() {
	    let localctx = new WithClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, ScssParser.RULE_withClause);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.match(ScssParser.WITH);
	        this.state = 429;
	        this.match(ScssParser.LPAREN);
	        this.state = 430;
	        this.keywordArgument();
	        this.state = 435;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 431;
	                this.match(ScssParser.COMMA);
	                this.state = 432;
	                this.keywordArgument(); 
	            }
	            this.state = 437;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	        }

	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.COMMA) {
	            this.state = 438;
	            this.match(ScssParser.COMMA);
	        }

	        this.state = 441;
	        this.match(ScssParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keywordArgument() {
	    let localctx = new KeywordArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, ScssParser.RULE_keywordArgument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
	        this.identifierVariableName();
	        this.state = 444;
	        this.match(ScssParser.COLON);
	        this.state = 445;
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



	mediaDeclaration() {
	    let localctx = new MediaDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, ScssParser.RULE_mediaDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(ScssParser.MEDIA);
	        this.state = 448;
	        this.mediaQueryList();
	        this.state = 449;
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



	mediaQueryList() {
	    let localctx = new MediaQueryListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, ScssParser.RULE_mediaQueryList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.LPAREN || ((((_la - 58)) & ~0x1f) == 0 && ((1 << (_la - 58)) & ((1 << (ScssParser.ONLY - 58)) | (1 << (ScssParser.NOT - 58)) | (1 << (ScssParser.Identifier - 58)))) !== 0)) {
	            this.state = 451;
	            this.mediaQuery();
	            this.state = 456;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ScssParser.COMMA) {
	                this.state = 452;
	                this.match(ScssParser.COMMA);
	                this.state = 453;
	                this.mediaQuery();
	                this.state = 458;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	mediaQuery() {
	    let localctx = new MediaQueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, ScssParser.RULE_mediaQuery);
	    var _la = 0; // Token type
	    try {
	        this.state = 480;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.ONLY:
	        case ScssParser.NOT:
	        case ScssParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 462;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.ONLY || _la===ScssParser.NOT) {
	                this.state = 461;
	                _la = this._input.LA(1);
	                if(!(_la===ScssParser.ONLY || _la===ScssParser.NOT)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 464;
	            this.mediaType();
	            this.state = 469;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ScssParser.AND_WORD) {
	                this.state = 465;
	                this.match(ScssParser.AND_WORD);
	                this.state = 466;
	                this.mediaExpression();
	                this.state = 471;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case ScssParser.LPAREN:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 472;
	            this.mediaExpression();
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ScssParser.AND_WORD) {
	                this.state = 473;
	                this.match(ScssParser.AND_WORD);
	                this.state = 474;
	                this.mediaExpression();
	                this.state = 479;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
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



	mediaType() {
	    let localctx = new MediaTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, ScssParser.RULE_mediaType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 482;
	        this.match(ScssParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mediaExpression() {
	    let localctx = new MediaExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, ScssParser.RULE_mediaExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484;
	        this.match(ScssParser.LPAREN);
	        this.state = 485;
	        this.mediaFeature();
	        this.state = 488;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.COLON) {
	            this.state = 486;
	            this.match(ScssParser.COLON);
	            this.state = 487;
	            this.commandStatement();
	        }

	        this.state = 490;
	        this.match(ScssParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mediaFeature() {
	    let localctx = new MediaFeatureContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, ScssParser.RULE_mediaFeature);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
	        this.match(ScssParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleset() {
	    let localctx = new RulesetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, ScssParser.RULE_ruleset);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 494;
	        this.selectors();
	        this.state = 495;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, ScssParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this.match(ScssParser.BlockStart);
	        this.state = 502;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,54,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 500;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 498;
	                    this.property_();
	                    break;

	                case 2:
	                    this.state = 499;
	                    this.statement();
	                    break;

	                } 
	            }
	            this.state = 504;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,54,this._ctx);
	        }

	        this.state = 506;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.InterpolationStart || ((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (ScssParser.FROM - 53)) | (1 << (ScssParser.TO - 53)) | (1 << (ScssParser.THROUGH - 53)) | (1 << (ScssParser.ONLY - 53)) | (1 << (ScssParser.NOT - 53)) | (1 << (ScssParser.AND_WORD - 53)) | (1 << (ScssParser.USING - 53)) | (1 << (ScssParser.Identifier - 53)))) !== 0)) {
	            this.state = 505;
	            this.lastProperty();
	        }

	        this.state = 508;
	        this.match(ScssParser.BlockEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selectors() {
	    let localctx = new SelectorsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, ScssParser.RULE_selectors);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 510;
	        this.selector();
	        this.state = 515;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ScssParser.COMMA) {
	            this.state = 511;
	            this.match(ScssParser.COMMA);
	            this.state = 512;
	            this.selector();
	            this.state = 517;
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



	selector() {
	    let localctx = new SelectorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, ScssParser.RULE_selector);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 519; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 518;
	            this.element();
	            this.state = 521; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.InterpolationStart) | (1 << ScssParser.LBRACK) | (1 << ScssParser.GT) | (1 << ScssParser.TIL) | (1 << ScssParser.DOT) | (1 << ScssParser.AND) | (1 << ScssParser.HASH) | (1 << ScssParser.PLUS) | (1 << ScssParser.TIMES))) !== 0) || ((((_la - 53)) & ~0x1f) == 0 && ((1 << (_la - 53)) & ((1 << (ScssParser.FROM - 53)) | (1 << (ScssParser.TO - 53)) | (1 << (ScssParser.THROUGH - 53)) | (1 << (ScssParser.ONLY - 53)) | (1 << (ScssParser.NOT - 53)) | (1 << (ScssParser.AND_WORD - 53)) | (1 << (ScssParser.USING - 53)) | (1 << (ScssParser.Identifier - 53)) | (1 << (ScssParser.PseudoIdentifier - 53)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 92, ScssParser.RULE_element);
	    try {
	        this.state = 533;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.InterpolationStart:
	        case ScssParser.FROM:
	        case ScssParser.TO:
	        case ScssParser.THROUGH:
	        case ScssParser.ONLY:
	        case ScssParser.NOT:
	        case ScssParser.AND_WORD:
	        case ScssParser.USING:
	        case ScssParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 523;
	            this.identifier();
	            break;
	        case ScssParser.HASH:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 524;
	            this.match(ScssParser.HASH);
	            this.state = 525;
	            this.identifier();
	            break;
	        case ScssParser.DOT:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 526;
	            this.match(ScssParser.DOT);
	            this.state = 527;
	            this.identifier();
	            break;
	        case ScssParser.AND:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 528;
	            this.match(ScssParser.AND);
	            break;
	        case ScssParser.TIMES:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 529;
	            this.match(ScssParser.TIMES);
	            break;
	        case ScssParser.GT:
	        case ScssParser.TIL:
	        case ScssParser.PLUS:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 530;
	            this.combinator();
	            break;
	        case ScssParser.LBRACK:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 531;
	            this.attrib();
	            break;
	        case ScssParser.PseudoIdentifier:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 532;
	            this.pseudo();
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



	combinator() {
	    let localctx = new CombinatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, ScssParser.RULE_combinator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 535;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.GT) | (1 << ScssParser.TIL) | (1 << ScssParser.PLUS))) !== 0))) {
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



	pseudo() {
	    let localctx = new PseudoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, ScssParser.RULE_pseudo);
	    try {
	        this.state = 546;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 537;
	            this.pseudoIdentifier();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 538;
	            this.pseudoIdentifier();
	            this.state = 539;
	            this.match(ScssParser.LPAREN);
	            this.state = 542;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,59,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 540;
	                this.selector();
	                break;

	            case 2:
	                this.state = 541;
	                this.commandStatement();
	                break;

	            }
	            this.state = 544;
	            this.match(ScssParser.RPAREN);
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



	attrib() {
	    let localctx = new AttribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, ScssParser.RULE_attrib);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 548;
	        this.match(ScssParser.LBRACK);
	        this.state = 549;
	        this.match(ScssParser.Identifier);
	        this.state = 553;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ScssParser.EQ - 36)) | (1 << (ScssParser.PIPE_EQ - 36)) | (1 << (ScssParser.TILD_EQ - 36)))) !== 0)) {
	            this.state = 550;
	            this.attribRelate();
	            this.state = 551;
	            _la = this._input.LA(1);
	            if(!(_la===ScssParser.Identifier || _la===ScssParser.StringLiteral)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 555;
	        this.match(ScssParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribRelate() {
	    let localctx = new AttribRelateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, ScssParser.RULE_attribRelate);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 557;
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (ScssParser.EQ - 36)) | (1 << (ScssParser.PIPE_EQ - 36)) | (1 << (ScssParser.TILD_EQ - 36)))) !== 0))) {
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
	    this.enterRule(localctx, 102, ScssParser.RULE_identifier);
	    var _la = 0; // Token type
	    try {
	        this.state = 582;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 559;
	            this.match(ScssParser.Identifier);
	            this.state = 563;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ScssParser.InterpolationStartAfter || _la===ScssParser.IdentifierAfter) {
	                this.state = 560;
	                this.identifierPart();
	                this.state = 565;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case ScssParser.InterpolationStart:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 566;
	            this.match(ScssParser.InterpolationStart);
	            this.state = 567;
	            this.identifierVariableName();
	            this.state = 568;
	            this.match(ScssParser.BlockEnd);
	            this.state = 572;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===ScssParser.InterpolationStartAfter || _la===ScssParser.IdentifierAfter) {
	                this.state = 569;
	                this.identifierPart();
	                this.state = 574;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            break;
	        case ScssParser.AND_WORD:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 575;
	            this.match(ScssParser.AND_WORD);
	            break;
	        case ScssParser.FROM:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 576;
	            this.match(ScssParser.FROM);
	            break;
	        case ScssParser.NOT:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 577;
	            this.match(ScssParser.NOT);
	            break;
	        case ScssParser.ONLY:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 578;
	            this.match(ScssParser.ONLY);
	            break;
	        case ScssParser.THROUGH:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 579;
	            this.match(ScssParser.THROUGH);
	            break;
	        case ScssParser.TO:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 580;
	            this.match(ScssParser.TO);
	            break;
	        case ScssParser.USING:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 581;
	            this.match(ScssParser.USING);
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



	pseudoIdentifier() {
	    let localctx = new PseudoIdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, ScssParser.RULE_pseudoIdentifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        this.match(ScssParser.PseudoIdentifier);
	        this.state = 588;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===ScssParser.InterpolationStartAfter || _la===ScssParser.IdentifierAfter) {
	            this.state = 585;
	            this.identifierPart();
	            this.state = 590;
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



	identifierPart() {
	    let localctx = new IdentifierPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, ScssParser.RULE_identifierPart);
	    try {
	        this.state = 596;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case ScssParser.InterpolationStartAfter:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 591;
	            this.match(ScssParser.InterpolationStartAfter);
	            this.state = 592;
	            this.identifierVariableName();
	            this.state = 593;
	            this.match(ScssParser.BlockEnd);
	            break;
	        case ScssParser.IdentifierAfter:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 595;
	            this.match(ScssParser.IdentifierAfter);
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



	identifierVariableName() {
	    let localctx = new IdentifierVariableNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, ScssParser.RULE_identifierVariableName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 598;
	        this.match(ScssParser.DOLLAR);
	        this.state = 599;
	        _la = this._input.LA(1);
	        if(!(_la===ScssParser.Identifier || _la===ScssParser.IdentifierAfter)) {
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



	property_() {
	    let localctx = new Property_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, ScssParser.RULE_property_);
	    var _la = 0; // Token type
	    try {
	        this.state = 621;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,69,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 601;
	            this.identifier();
	            this.state = 602;
	            this.match(ScssParser.COLON);
	            this.state = 603;
	            this.propertyValue();
	            this.state = 605;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.IMPORTANT) {
	                this.state = 604;
	                this.match(ScssParser.IMPORTANT);
	            }

	            this.state = 607;
	            this.match(ScssParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 609;
	            this.identifier();
	            this.state = 610;
	            this.match(ScssParser.COLON);
	            this.state = 611;
	            this.block();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 613;
	            this.identifier();
	            this.state = 614;
	            this.match(ScssParser.COLON);
	            this.state = 615;
	            this.propertyValue();
	            this.state = 617;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.IMPORTANT) {
	                this.state = 616;
	                this.match(ScssParser.IMPORTANT);
	            }

	            this.state = 619;
	            this.block();
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



	lastProperty() {
	    let localctx = new LastPropertyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, ScssParser.RULE_lastProperty);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 623;
	        this.identifier();
	        this.state = 624;
	        this.match(ScssParser.COLON);
	        this.state = 625;
	        this.propertyValue();
	        this.state = 627;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.IMPORTANT) {
	            this.state = 626;
	            this.match(ScssParser.IMPORTANT);
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



	propertyValue() {
	    let localctx = new PropertyValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, ScssParser.RULE_propertyValue);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 629;
	        this.commandStatement();
	        this.state = 636;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL_) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.COMMA) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR) | (1 << ScssParser.MINUS_LPAREN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ScssParser.PLUS_LPAREN - 32)) | (1 << (ScssParser.UrlStart - 32)) | (1 << (ScssParser.FROM - 32)) | (1 << (ScssParser.TO - 32)) | (1 << (ScssParser.THROUGH - 32)) | (1 << (ScssParser.ONLY - 32)) | (1 << (ScssParser.NOT - 32)) | (1 << (ScssParser.AND_WORD - 32)) | (1 << (ScssParser.USING - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (ScssParser.Identifier - 64)) | (1 << (ScssParser.FunctionIdentifier - 64)) | (1 << (ScssParser.StringLiteral - 64)) | (1 << (ScssParser.Number - 64)) | (1 << (ScssParser.Color - 64)))) !== 0)) {
	            this.state = 631;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===ScssParser.COMMA) {
	                this.state = 630;
	                this.match(ScssParser.COMMA);
	            }

	            this.state = 633;
	            this.commandStatement();
	            this.state = 638;
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



	url() {
	    let localctx = new UrlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, ScssParser.RULE_url);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 639;
	        this.match(ScssParser.UrlStart);
	        this.state = 640;
	        this.match(ScssParser.Url);
	        this.state = 641;
	        this.match(ScssParser.UrlEnd);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	measurement() {
	    let localctx = new MeasurementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, ScssParser.RULE_measurement);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 643;
	        this.match(ScssParser.Number);
	        this.state = 645;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.Unit) {
	            this.state = 644;
	            this.match(ScssParser.Unit);
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



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, ScssParser.RULE_functionCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 648;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.Identifier) {
	            this.state = 647;
	            this.namespace();
	        }

	        this.state = 650;
	        this.match(ScssParser.FunctionIdentifier);
	        this.state = 652;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL_) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.LBRACK) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR) | (1 << ScssParser.MINUS_LPAREN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ScssParser.PLUS_LPAREN - 32)) | (1 << (ScssParser.UrlStart - 32)) | (1 << (ScssParser.FROM - 32)) | (1 << (ScssParser.TO - 32)) | (1 << (ScssParser.THROUGH - 32)) | (1 << (ScssParser.ONLY - 32)) | (1 << (ScssParser.NOT - 32)) | (1 << (ScssParser.AND_WORD - 32)) | (1 << (ScssParser.USING - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (ScssParser.Identifier - 64)) | (1 << (ScssParser.FunctionIdentifier - 64)) | (1 << (ScssParser.StringLiteral - 64)) | (1 << (ScssParser.Number - 64)) | (1 << (ScssParser.Color - 64)))) !== 0)) {
	            this.state = 651;
	            this.passedParams();
	        }

	        this.state = 654;
	        this.match(ScssParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 122, ScssParser.RULE_namespace);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 658; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 656;
	            this.match(ScssParser.Identifier);
	            this.state = 657;
	            this.match(ScssParser.DOT);
	            this.state = 660; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===ScssParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list_() {
	    let localctx = new List_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, ScssParser.RULE_list_);
	    try {
	        this.state = 665;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,77,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 662;
	            this.listCommaSeparated();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 663;
	            this.listSpaceSeparated();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 664;
	            this.listBracketed();
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



	listCommaSeparated() {
	    let localctx = new ListCommaSeparatedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, ScssParser.RULE_listCommaSeparated);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 667;
	        this.listElement();
	        this.state = 670; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 668;
	        		this.match(ScssParser.COMMA);
	        		this.state = 669;
	        		this.listElement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 672; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,78, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 675;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,79,this._ctx);
	        if(la_===1) {
	            this.state = 674;
	            this.match(ScssParser.COMMA);

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



	listSpaceSeparated() {
	    let localctx = new ListSpaceSeparatedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, ScssParser.RULE_listSpaceSeparated);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 677;
	        this.listElement();
	        this.state = 679; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 678;
	            this.listElement();
	            this.state = 681; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ScssParser.NULL_) | (1 << ScssParser.InterpolationStart) | (1 << ScssParser.LPAREN) | (1 << ScssParser.DOLLAR) | (1 << ScssParser.MINUS_DOLLAR) | (1 << ScssParser.PLUS_DOLLAR) | (1 << ScssParser.MINUS_LPAREN))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (ScssParser.PLUS_LPAREN - 32)) | (1 << (ScssParser.UrlStart - 32)) | (1 << (ScssParser.FROM - 32)) | (1 << (ScssParser.TO - 32)) | (1 << (ScssParser.THROUGH - 32)) | (1 << (ScssParser.ONLY - 32)) | (1 << (ScssParser.NOT - 32)) | (1 << (ScssParser.AND_WORD - 32)) | (1 << (ScssParser.USING - 32)))) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & ((1 << (ScssParser.Identifier - 64)) | (1 << (ScssParser.FunctionIdentifier - 64)) | (1 << (ScssParser.StringLiteral - 64)) | (1 << (ScssParser.Number - 64)) | (1 << (ScssParser.Color - 64)))) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listBracketed() {
	    let localctx = new ListBracketedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, ScssParser.RULE_listBracketed);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 683;
	        this.match(ScssParser.LBRACK);
	        this.state = 686;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,81,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 684;
	            this.listCommaSeparated();
	            break;

	        case 2:
	            this.state = 685;
	            this.listSpaceSeparated();
	            break;

	        }
	        this.state = 688;
	        this.match(ScssParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listElement() {
	    let localctx = new ListElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, ScssParser.RULE_listElement);
	    try {
	        this.state = 695;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,82,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 690;
	            this.commandStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 691;
	            this.match(ScssParser.LPAREN);
	            this.state = 692;
	            this.list_();
	            this.state = 693;
	            this.match(ScssParser.RPAREN);
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



	map_() {
	    let localctx = new Map_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, ScssParser.RULE_map_);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 697;
	        this.match(ScssParser.LPAREN);
	        this.state = 698;
	        this.mapEntry();
	        this.state = 703;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,83,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 699;
	                this.match(ScssParser.COMMA);
	                this.state = 700;
	                this.mapEntry(); 
	            }
	            this.state = 705;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,83,this._ctx);
	        }

	        this.state = 707;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===ScssParser.COMMA) {
	            this.state = 706;
	            this.match(ScssParser.COMMA);
	        }

	        this.state = 709;
	        this.match(ScssParser.RPAREN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapEntry() {
	    let localctx = new MapEntryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, ScssParser.RULE_mapEntry);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 711;
	        this.mapKey();
	        this.state = 712;
	        this.match(ScssParser.COLON);
	        this.state = 713;
	        this.mapValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapKey() {
	    let localctx = new MapKeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, ScssParser.RULE_mapKey);
	    try {
	        this.state = 718;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,85,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 715;
	            this.commandStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 716;
	            this.list_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 717;
	            this.map_();
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



	mapValue() {
	    let localctx = new MapValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, ScssParser.RULE_mapValue);
	    try {
	        this.state = 723;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,86,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 720;
	            this.commandStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 721;
	            this.list_();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 722;
	            this.map_();
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

ScssParser.EOF = antlr4.Token.EOF;
ScssParser.NULL_ = 1;
ScssParser.IN = 2;
ScssParser.Unit = 3;
ScssParser.COMBINE_COMPARE = 4;
ScssParser.Ellipsis = 5;
ScssParser.InterpolationStart = 6;
ScssParser.LPAREN = 7;
ScssParser.RPAREN = 8;
ScssParser.BlockStart = 9;
ScssParser.BlockEnd = 10;
ScssParser.LBRACK = 11;
ScssParser.RBRACK = 12;
ScssParser.GT = 13;
ScssParser.TIL = 14;
ScssParser.LT = 15;
ScssParser.COLON = 16;
ScssParser.SEMI = 17;
ScssParser.COMMA = 18;
ScssParser.DOT = 19;
ScssParser.DOLLAR = 20;
ScssParser.AT = 21;
ScssParser.AND = 22;
ScssParser.HASH = 23;
ScssParser.PLUS = 24;
ScssParser.TIMES = 25;
ScssParser.DIV = 26;
ScssParser.MINUS = 27;
ScssParser.PERC = 28;
ScssParser.MINUS_DOLLAR = 29;
ScssParser.PLUS_DOLLAR = 30;
ScssParser.MINUS_LPAREN = 31;
ScssParser.PLUS_LPAREN = 32;
ScssParser.UrlStart = 33;
ScssParser.EQEQ = 34;
ScssParser.NOTEQ = 35;
ScssParser.EQ = 36;
ScssParser.PIPE_EQ = 37;
ScssParser.TILD_EQ = 38;
ScssParser.MIXIN = 39;
ScssParser.FUNCTION = 40;
ScssParser.AT_ELSE = 41;
ScssParser.IF = 42;
ScssParser.AT_IF = 43;
ScssParser.AT_FOR = 44;
ScssParser.AT_WHILE = 45;
ScssParser.AT_EACH = 46;
ScssParser.INCLUDE = 47;
ScssParser.IMPORT = 48;
ScssParser.USE = 49;
ScssParser.RETURN = 50;
ScssParser.MEDIA = 51;
ScssParser.CONTENT = 52;
ScssParser.FROM = 53;
ScssParser.TO = 54;
ScssParser.THROUGH = 55;
ScssParser.POUND_DEFAULT = 56;
ScssParser.IMPORTANT = 57;
ScssParser.ONLY = 58;
ScssParser.NOT = 59;
ScssParser.AND_WORD = 60;
ScssParser.USING = 61;
ScssParser.AS = 62;
ScssParser.WITH = 63;
ScssParser.Identifier = 64;
ScssParser.PseudoIdentifier = 65;
ScssParser.FunctionIdentifier = 66;
ScssParser.StringLiteral = 67;
ScssParser.Number = 68;
ScssParser.Color = 69;
ScssParser.WS = 70;
ScssParser.SL_COMMENT = 71;
ScssParser.COMMENT = 72;
ScssParser.UrlEnd = 73;
ScssParser.Url = 74;
ScssParser.SPACE = 75;
ScssParser.InterpolationStartAfter = 76;
ScssParser.IdentifierAfter = 77;

ScssParser.RULE_stylesheet = 0;
ScssParser.RULE_statement = 1;
ScssParser.RULE_declaredParams = 2;
ScssParser.RULE_declaredParam = 3;
ScssParser.RULE_variableName = 4;
ScssParser.RULE_paramOptionalValue = 5;
ScssParser.RULE_passedParams = 6;
ScssParser.RULE_passedParam = 7;
ScssParser.RULE_mixinDeclaration = 8;
ScssParser.RULE_contentDeclaration = 9;
ScssParser.RULE_includeDeclaration = 10;
ScssParser.RULE_functionDeclaration = 11;
ScssParser.RULE_functionBody = 12;
ScssParser.RULE_functionReturn = 13;
ScssParser.RULE_functionStatement = 14;
ScssParser.RULE_commandStatement = 15;
ScssParser.RULE_mathCharacter = 16;
ScssParser.RULE_mathStatement = 17;
ScssParser.RULE_expression = 18;
ScssParser.RULE_ifDeclaration = 19;
ScssParser.RULE_elseIfStatement = 20;
ScssParser.RULE_elseStatement = 21;
ScssParser.RULE_conditions = 22;
ScssParser.RULE_condition = 23;
ScssParser.RULE_variableDeclaration = 24;
ScssParser.RULE_forDeclaration = 25;
ScssParser.RULE_fromNumber = 26;
ScssParser.RULE_throughNumber = 27;
ScssParser.RULE_whileDeclaration = 28;
ScssParser.RULE_eachDeclaration = 29;
ScssParser.RULE_eachValueList = 30;
ScssParser.RULE_importDeclaration = 31;
ScssParser.RULE_referenceUrl = 32;
ScssParser.RULE_asClause = 33;
ScssParser.RULE_withClause = 34;
ScssParser.RULE_keywordArgument = 35;
ScssParser.RULE_mediaDeclaration = 36;
ScssParser.RULE_mediaQueryList = 37;
ScssParser.RULE_mediaQuery = 38;
ScssParser.RULE_mediaType = 39;
ScssParser.RULE_mediaExpression = 40;
ScssParser.RULE_mediaFeature = 41;
ScssParser.RULE_ruleset = 42;
ScssParser.RULE_block = 43;
ScssParser.RULE_selectors = 44;
ScssParser.RULE_selector = 45;
ScssParser.RULE_element = 46;
ScssParser.RULE_combinator = 47;
ScssParser.RULE_pseudo = 48;
ScssParser.RULE_attrib = 49;
ScssParser.RULE_attribRelate = 50;
ScssParser.RULE_identifier = 51;
ScssParser.RULE_pseudoIdentifier = 52;
ScssParser.RULE_identifierPart = 53;
ScssParser.RULE_identifierVariableName = 54;
ScssParser.RULE_property_ = 55;
ScssParser.RULE_lastProperty = 56;
ScssParser.RULE_propertyValue = 57;
ScssParser.RULE_url = 58;
ScssParser.RULE_measurement = 59;
ScssParser.RULE_functionCall = 60;
ScssParser.RULE_namespace = 61;
ScssParser.RULE_list_ = 62;
ScssParser.RULE_listCommaSeparated = 63;
ScssParser.RULE_listSpaceSeparated = 64;
ScssParser.RULE_listBracketed = 65;
ScssParser.RULE_listElement = 66;
ScssParser.RULE_map_ = 67;
ScssParser.RULE_mapEntry = 68;
ScssParser.RULE_mapKey = 69;
ScssParser.RULE_mapValue = 70;

class StylesheetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_stylesheet;
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
	    if(listener instanceof ScssParserListener ) {
	        listener.enterStylesheet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitStylesheet(this);
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
        this.ruleIndex = ScssParser.RULE_statement;
    }

	importDeclaration() {
	    return this.getTypedRuleContext(ImportDeclarationContext,0);
	};

	mediaDeclaration() {
	    return this.getTypedRuleContext(MediaDeclarationContext,0);
	};

	ruleset() {
	    return this.getTypedRuleContext(RulesetContext,0);
	};

	mixinDeclaration() {
	    return this.getTypedRuleContext(MixinDeclarationContext,0);
	};

	contentDeclaration() {
	    return this.getTypedRuleContext(ContentDeclarationContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	includeDeclaration() {
	    return this.getTypedRuleContext(IncludeDeclarationContext,0);
	};

	ifDeclaration() {
	    return this.getTypedRuleContext(IfDeclarationContext,0);
	};

	forDeclaration() {
	    return this.getTypedRuleContext(ForDeclarationContext,0);
	};

	whileDeclaration() {
	    return this.getTypedRuleContext(WhileDeclarationContext,0);
	};

	eachDeclaration() {
	    return this.getTypedRuleContext(EachDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitStatement(this);
		}
	}


}



class DeclaredParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_declaredParams;
    }

	declaredParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaredParamContext);
	    } else {
	        return this.getTypedRuleContext(DeclaredParamContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	Ellipsis() {
	    return this.getToken(ScssParser.Ellipsis, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterDeclaredParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitDeclaredParams(this);
		}
	}


}



class DeclaredParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_declaredParam;
    }

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	paramOptionalValue() {
	    return this.getTypedRuleContext(ParamOptionalValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterDeclaredParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitDeclaredParam(this);
		}
	}


}



class VariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_variableName;
    }

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	DOLLAR() {
	    return this.getToken(ScssParser.DOLLAR, 0);
	};

	MINUS_DOLLAR() {
	    return this.getToken(ScssParser.MINUS_DOLLAR, 0);
	};

	PLUS_DOLLAR() {
	    return this.getToken(ScssParser.PLUS_DOLLAR, 0);
	};

	namespace() {
	    return this.getTypedRuleContext(NamespaceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitVariableName(this);
		}
	}


}



class ParamOptionalValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_paramOptionalValue;
    }

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
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
	    if(listener instanceof ScssParserListener ) {
	        listener.enterParamOptionalValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitParamOptionalValue(this);
		}
	}


}



class PassedParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_passedParams;
    }

	passedParam = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PassedParamContext);
	    } else {
	        return this.getTypedRuleContext(PassedParamContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	Ellipsis() {
	    return this.getToken(ScssParser.Ellipsis, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterPassedParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitPassedParams(this);
		}
	}


}



class PassedParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_passedParam;
    }

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	listSpaceSeparated() {
	    return this.getTypedRuleContext(ListSpaceSeparatedContext,0);
	};

	listBracketed() {
	    return this.getTypedRuleContext(ListBracketedContext,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterPassedParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitPassedParam(this);
		}
	}


}



class MixinDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mixinDeclaration;
    }

	MIXIN() {
	    return this.getToken(ScssParser.MIXIN, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	FunctionIdentifier() {
	    return this.getToken(ScssParser.FunctionIdentifier, 0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	declaredParams() {
	    return this.getTypedRuleContext(DeclaredParamsContext,0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMixinDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMixinDeclaration(this);
		}
	}


}



class ContentDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_contentDeclaration;
    }

	CONTENT() {
	    return this.getToken(ScssParser.CONTENT, 0);
	};

	SEMI() {
	    return this.getToken(ScssParser.SEMI, 0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	passedParams() {
	    return this.getTypedRuleContext(PassedParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterContentDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitContentDeclaration(this);
		}
	}


}



class IncludeDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_includeDeclaration;
    }

	INCLUDE() {
	    return this.getToken(ScssParser.INCLUDE, 0);
	};

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	SEMI() {
	    return this.getToken(ScssParser.SEMI, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	USING() {
	    return this.getToken(ScssParser.USING, 0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	declaredParams() {
	    return this.getTypedRuleContext(DeclaredParamsContext,0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterIncludeDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitIncludeDeclaration(this);
		}
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_functionDeclaration;
    }

	FUNCTION() {
	    return this.getToken(ScssParser.FUNCTION, 0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	BlockStart() {
	    return this.getToken(ScssParser.BlockStart, 0);
	};

	BlockEnd() {
	    return this.getToken(ScssParser.BlockEnd, 0);
	};

	FunctionIdentifier() {
	    return this.getToken(ScssParser.FunctionIdentifier, 0);
	};

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	declaredParams() {
	    return this.getTypedRuleContext(DeclaredParamsContext,0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_functionBody;
    }

	functionReturn() {
	    return this.getTypedRuleContext(FunctionReturnContext,0);
	};

	functionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FunctionStatementContext);
	    } else {
	        return this.getTypedRuleContext(FunctionStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitFunctionBody(this);
		}
	}


}



class FunctionReturnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_functionReturn;
    }

	RETURN() {
	    return this.getToken(ScssParser.RETURN, 0);
	};

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	SEMI() {
	    return this.getToken(ScssParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterFunctionReturn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitFunctionReturn(this);
		}
	}


}



class FunctionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_functionStatement;
    }

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	SEMI() {
	    return this.getToken(ScssParser.SEMI, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterFunctionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitFunctionStatement(this);
		}
	}


}



class CommandStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_commandStatement;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	MINUS_LPAREN() {
	    return this.getToken(ScssParser.MINUS_LPAREN, 0);
	};

	PLUS_LPAREN() {
	    return this.getToken(ScssParser.PLUS_LPAREN, 0);
	};

	mathStatement() {
	    return this.getTypedRuleContext(MathStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterCommandStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitCommandStatement(this);
		}
	}


}



class MathCharacterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mathCharacter;
    }

	TIMES() {
	    return this.getToken(ScssParser.TIMES, 0);
	};

	PLUS() {
	    return this.getToken(ScssParser.PLUS, 0);
	};

	DIV() {
	    return this.getToken(ScssParser.DIV, 0);
	};

	MINUS() {
	    return this.getToken(ScssParser.MINUS, 0);
	};

	PERC() {
	    return this.getToken(ScssParser.PERC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMathCharacter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMathCharacter(this);
		}
	}


}



class MathStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mathStatement;
    }

	mathCharacter() {
	    return this.getTypedRuleContext(MathCharacterContext,0);
	};

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMathStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMathStatement(this);
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
        this.ruleIndex = ScssParser.RULE_expression;
    }

	measurement() {
	    return this.getTypedRuleContext(MeasurementContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Color() {
	    return this.getToken(ScssParser.Color, 0);
	};

	StringLiteral() {
	    return this.getToken(ScssParser.StringLiteral, 0);
	};

	NULL_() {
	    return this.getToken(ScssParser.NULL_, 0);
	};

	url() {
	    return this.getTypedRuleContext(UrlContext,0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitExpression(this);
		}
	}


}



class IfDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_ifDeclaration;
    }

	AT_IF() {
	    return this.getToken(ScssParser.AT_IF, 0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	elseIfStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfStatementContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfStatementContext,i);
	    }
	};

	elseStatement() {
	    return this.getTypedRuleContext(ElseStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterIfDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitIfDeclaration(this);
		}
	}


}



class ElseIfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_elseIfStatement;
    }

	AT_ELSE() {
	    return this.getToken(ScssParser.AT_ELSE, 0);
	};

	IF() {
	    return this.getToken(ScssParser.IF, 0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterElseIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitElseIfStatement(this);
		}
	}


}



class ElseStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_elseStatement;
    }

	AT_ELSE() {
	    return this.getToken(ScssParser.AT_ELSE, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterElseStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitElseStatement(this);
		}
	}


}



class ConditionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_conditions;
    }

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	COMBINE_COMPARE() {
	    return this.getToken(ScssParser.COMBINE_COMPARE, 0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	NULL_() {
	    return this.getToken(ScssParser.NULL_, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterConditions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitConditions(this);
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
        this.ruleIndex = ScssParser.RULE_condition;
    }

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	EQEQ() {
	    return this.getToken(ScssParser.EQEQ, 0);
	};

	LT() {
	    return this.getToken(ScssParser.LT, 0);
	};

	GT() {
	    return this.getToken(ScssParser.GT, 0);
	};

	NOTEQ() {
	    return this.getToken(ScssParser.NOTEQ, 0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitCondition(this);
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
        this.ruleIndex = ScssParser.RULE_variableDeclaration;
    }

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
	};

	SEMI() {
	    return this.getToken(ScssParser.SEMI, 0);
	};

	propertyValue() {
	    return this.getTypedRuleContext(PropertyValueContext,0);
	};

	listBracketed() {
	    return this.getTypedRuleContext(ListBracketedContext,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	POUND_DEFAULT() {
	    return this.getToken(ScssParser.POUND_DEFAULT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}


}



class ForDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_forDeclaration;
    }

	AT_FOR() {
	    return this.getToken(ScssParser.AT_FOR, 0);
	};

	variableName() {
	    return this.getTypedRuleContext(VariableNameContext,0);
	};

	FROM() {
	    return this.getToken(ScssParser.FROM, 0);
	};

	fromNumber() {
	    return this.getTypedRuleContext(FromNumberContext,0);
	};

	throughNumber() {
	    return this.getTypedRuleContext(ThroughNumberContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	TO() {
	    return this.getToken(ScssParser.TO, 0);
	};

	THROUGH() {
	    return this.getToken(ScssParser.THROUGH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterForDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitForDeclaration(this);
		}
	}


}



class FromNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_fromNumber;
    }

	Number() {
	    return this.getToken(ScssParser.Number, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterFromNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitFromNumber(this);
		}
	}


}



class ThroughNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_throughNumber;
    }

	Number() {
	    return this.getToken(ScssParser.Number, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterThroughNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitThroughNumber(this);
		}
	}


}



class WhileDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_whileDeclaration;
    }

	AT_WHILE() {
	    return this.getToken(ScssParser.AT_WHILE, 0);
	};

	conditions() {
	    return this.getTypedRuleContext(ConditionsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterWhileDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitWhileDeclaration(this);
		}
	}


}



class EachDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_eachDeclaration;
    }

	AT_EACH() {
	    return this.getToken(ScssParser.AT_EACH, 0);
	};

	variableName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableNameContext);
	    } else {
	        return this.getTypedRuleContext(VariableNameContext,i);
	    }
	};

	IN() {
	    return this.getToken(ScssParser.IN, 0);
	};

	eachValueList() {
	    return this.getTypedRuleContext(EachValueListContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterEachDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitEachDeclaration(this);
		}
	}


}



class EachValueListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_eachValueList;
    }

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterEachValueList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitEachValueList(this);
		}
	}


}



class ImportDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_importDeclaration;
    }

	IMPORT() {
	    return this.getToken(ScssParser.IMPORT, 0);
	};

	referenceUrl() {
	    return this.getTypedRuleContext(ReferenceUrlContext,0);
	};

	SEMI() {
	    return this.getToken(ScssParser.SEMI, 0);
	};

	USE() {
	    return this.getToken(ScssParser.USE, 0);
	};

	asClause() {
	    return this.getTypedRuleContext(AsClauseContext,0);
	};

	withClause() {
	    return this.getTypedRuleContext(WithClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterImportDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitImportDeclaration(this);
		}
	}


}



class ReferenceUrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_referenceUrl;
    }

	StringLiteral() {
	    return this.getToken(ScssParser.StringLiteral, 0);
	};

	UrlStart() {
	    return this.getToken(ScssParser.UrlStart, 0);
	};

	Url() {
	    return this.getToken(ScssParser.Url, 0);
	};

	UrlEnd() {
	    return this.getToken(ScssParser.UrlEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterReferenceUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitReferenceUrl(this);
		}
	}


}



class AsClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_asClause;
    }

	AS() {
	    return this.getToken(ScssParser.AS, 0);
	};

	TIMES() {
	    return this.getToken(ScssParser.TIMES, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterAsClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitAsClause(this);
		}
	}


}



class WithClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_withClause;
    }

	WITH() {
	    return this.getToken(ScssParser.WITH, 0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	keywordArgument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeywordArgumentContext);
	    } else {
	        return this.getTypedRuleContext(KeywordArgumentContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterWithClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitWithClause(this);
		}
	}


}



class KeywordArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_keywordArgument;
    }

	identifierVariableName() {
	    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
	};

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterKeywordArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitKeywordArgument(this);
		}
	}


}



class MediaDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mediaDeclaration;
    }

	MEDIA() {
	    return this.getToken(ScssParser.MEDIA, 0);
	};

	mediaQueryList() {
	    return this.getTypedRuleContext(MediaQueryListContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMediaDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMediaDeclaration(this);
		}
	}


}



class MediaQueryListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mediaQueryList;
    }

	mediaQuery = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MediaQueryContext);
	    } else {
	        return this.getTypedRuleContext(MediaQueryContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMediaQueryList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMediaQueryList(this);
		}
	}


}



class MediaQueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mediaQuery;
    }

	mediaType() {
	    return this.getTypedRuleContext(MediaTypeContext,0);
	};

	AND_WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.AND_WORD);
	    } else {
	        return this.getToken(ScssParser.AND_WORD, i);
	    }
	};


	mediaExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MediaExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MediaExpressionContext,i);
	    }
	};

	ONLY() {
	    return this.getToken(ScssParser.ONLY, 0);
	};

	NOT() {
	    return this.getToken(ScssParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMediaQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMediaQuery(this);
		}
	}


}



class MediaTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mediaType;
    }

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMediaType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMediaType(this);
		}
	}


}



class MediaExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mediaExpression;
    }

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	mediaFeature() {
	    return this.getTypedRuleContext(MediaFeatureContext,0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
	};

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMediaExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMediaExpression(this);
		}
	}


}



class MediaFeatureContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mediaFeature;
    }

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMediaFeature(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMediaFeature(this);
		}
	}


}



class RulesetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_ruleset;
    }

	selectors() {
	    return this.getTypedRuleContext(SelectorsContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterRuleset(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitRuleset(this);
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
        this.ruleIndex = ScssParser.RULE_block;
    }

	BlockStart() {
	    return this.getToken(ScssParser.BlockStart, 0);
	};

	BlockEnd() {
	    return this.getToken(ScssParser.BlockEnd, 0);
	};

	property_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Property_Context);
	    } else {
	        return this.getTypedRuleContext(Property_Context,i);
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

	lastProperty() {
	    return this.getTypedRuleContext(LastPropertyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitBlock(this);
		}
	}


}



class SelectorsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_selectors;
    }

	selector = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectorContext);
	    } else {
	        return this.getTypedRuleContext(SelectorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterSelectors(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitSelectors(this);
		}
	}


}



class SelectorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_selector;
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
	    if(listener instanceof ScssParserListener ) {
	        listener.enterSelector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitSelector(this);
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
        this.ruleIndex = ScssParser.RULE_element;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	HASH() {
	    return this.getToken(ScssParser.HASH, 0);
	};

	DOT() {
	    return this.getToken(ScssParser.DOT, 0);
	};

	AND() {
	    return this.getToken(ScssParser.AND, 0);
	};

	TIMES() {
	    return this.getToken(ScssParser.TIMES, 0);
	};

	combinator() {
	    return this.getTypedRuleContext(CombinatorContext,0);
	};

	attrib() {
	    return this.getTypedRuleContext(AttribContext,0);
	};

	pseudo() {
	    return this.getTypedRuleContext(PseudoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitElement(this);
		}
	}


}



class CombinatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_combinator;
    }

	GT() {
	    return this.getToken(ScssParser.GT, 0);
	};

	PLUS() {
	    return this.getToken(ScssParser.PLUS, 0);
	};

	TIL() {
	    return this.getToken(ScssParser.TIL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterCombinator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitCombinator(this);
		}
	}


}



class PseudoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_pseudo;
    }

	pseudoIdentifier() {
	    return this.getTypedRuleContext(PseudoIdentifierContext,0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	selector() {
	    return this.getTypedRuleContext(SelectorContext,0);
	};

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterPseudo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitPseudo(this);
		}
	}


}



class AttribContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_attrib;
    }

	LBRACK() {
	    return this.getToken(ScssParser.LBRACK, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.Identifier);
	    } else {
	        return this.getToken(ScssParser.Identifier, i);
	    }
	};


	RBRACK() {
	    return this.getToken(ScssParser.RBRACK, 0);
	};

	attribRelate() {
	    return this.getTypedRuleContext(AttribRelateContext,0);
	};

	StringLiteral() {
	    return this.getToken(ScssParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterAttrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitAttrib(this);
		}
	}


}



class AttribRelateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_attribRelate;
    }

	EQ() {
	    return this.getToken(ScssParser.EQ, 0);
	};

	PIPE_EQ() {
	    return this.getToken(ScssParser.PIPE_EQ, 0);
	};

	TILD_EQ() {
	    return this.getToken(ScssParser.TILD_EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterAttribRelate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitAttribRelate(this);
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
        this.ruleIndex = ScssParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	identifierPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierPartContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierPartContext,i);
	    }
	};

	InterpolationStart() {
	    return this.getToken(ScssParser.InterpolationStart, 0);
	};

	identifierVariableName() {
	    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
	};

	BlockEnd() {
	    return this.getToken(ScssParser.BlockEnd, 0);
	};

	AND_WORD() {
	    return this.getToken(ScssParser.AND_WORD, 0);
	};

	FROM() {
	    return this.getToken(ScssParser.FROM, 0);
	};

	NOT() {
	    return this.getToken(ScssParser.NOT, 0);
	};

	ONLY() {
	    return this.getToken(ScssParser.ONLY, 0);
	};

	THROUGH() {
	    return this.getToken(ScssParser.THROUGH, 0);
	};

	TO() {
	    return this.getToken(ScssParser.TO, 0);
	};

	USING() {
	    return this.getToken(ScssParser.USING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class PseudoIdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_pseudoIdentifier;
    }

	PseudoIdentifier() {
	    return this.getToken(ScssParser.PseudoIdentifier, 0);
	};

	identifierPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierPartContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierPartContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterPseudoIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitPseudoIdentifier(this);
		}
	}


}



class IdentifierPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_identifierPart;
    }

	InterpolationStartAfter() {
	    return this.getToken(ScssParser.InterpolationStartAfter, 0);
	};

	identifierVariableName() {
	    return this.getTypedRuleContext(IdentifierVariableNameContext,0);
	};

	BlockEnd() {
	    return this.getToken(ScssParser.BlockEnd, 0);
	};

	IdentifierAfter() {
	    return this.getToken(ScssParser.IdentifierAfter, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterIdentifierPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitIdentifierPart(this);
		}
	}


}



class IdentifierVariableNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_identifierVariableName;
    }

	DOLLAR() {
	    return this.getToken(ScssParser.DOLLAR, 0);
	};

	Identifier() {
	    return this.getToken(ScssParser.Identifier, 0);
	};

	IdentifierAfter() {
	    return this.getToken(ScssParser.IdentifierAfter, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterIdentifierVariableName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitIdentifierVariableName(this);
		}
	}


}



class Property_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_property_;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
	};

	propertyValue() {
	    return this.getTypedRuleContext(PropertyValueContext,0);
	};

	SEMI() {
	    return this.getToken(ScssParser.SEMI, 0);
	};

	IMPORTANT() {
	    return this.getToken(ScssParser.IMPORTANT, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterProperty_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitProperty_(this);
		}
	}


}



class LastPropertyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_lastProperty;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
	};

	propertyValue() {
	    return this.getTypedRuleContext(PropertyValueContext,0);
	};

	IMPORTANT() {
	    return this.getToken(ScssParser.IMPORTANT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterLastProperty(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitLastProperty(this);
		}
	}


}



class PropertyValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_propertyValue;
    }

	commandStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CommandStatementContext);
	    } else {
	        return this.getTypedRuleContext(CommandStatementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterPropertyValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitPropertyValue(this);
		}
	}


}



class UrlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_url;
    }

	UrlStart() {
	    return this.getToken(ScssParser.UrlStart, 0);
	};

	Url() {
	    return this.getToken(ScssParser.Url, 0);
	};

	UrlEnd() {
	    return this.getToken(ScssParser.UrlEnd, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterUrl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitUrl(this);
		}
	}


}



class MeasurementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_measurement;
    }

	Number() {
	    return this.getToken(ScssParser.Number, 0);
	};

	Unit() {
	    return this.getToken(ScssParser.Unit, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMeasurement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMeasurement(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_functionCall;
    }

	FunctionIdentifier() {
	    return this.getToken(ScssParser.FunctionIdentifier, 0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	namespace() {
	    return this.getTypedRuleContext(NamespaceContext,0);
	};

	passedParams() {
	    return this.getTypedRuleContext(PassedParamsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitFunctionCall(this);
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
        this.ruleIndex = ScssParser.RULE_namespace;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.Identifier);
	    } else {
	        return this.getToken(ScssParser.Identifier, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.DOT);
	    } else {
	        return this.getToken(ScssParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterNamespace(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitNamespace(this);
		}
	}


}



class List_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_list_;
    }

	listCommaSeparated() {
	    return this.getTypedRuleContext(ListCommaSeparatedContext,0);
	};

	listSpaceSeparated() {
	    return this.getTypedRuleContext(ListSpaceSeparatedContext,0);
	};

	listBracketed() {
	    return this.getTypedRuleContext(ListBracketedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterList_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitList_(this);
		}
	}


}



class ListCommaSeparatedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_listCommaSeparated;
    }

	listElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListElementContext);
	    } else {
	        return this.getTypedRuleContext(ListElementContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterListCommaSeparated(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitListCommaSeparated(this);
		}
	}


}



class ListSpaceSeparatedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_listSpaceSeparated;
    }

	listElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ListElementContext);
	    } else {
	        return this.getTypedRuleContext(ListElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterListSpaceSeparated(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitListSpaceSeparated(this);
		}
	}


}



class ListBracketedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_listBracketed;
    }

	LBRACK() {
	    return this.getToken(ScssParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(ScssParser.RBRACK, 0);
	};

	listCommaSeparated() {
	    return this.getTypedRuleContext(ListCommaSeparatedContext,0);
	};

	listSpaceSeparated() {
	    return this.getTypedRuleContext(ListSpaceSeparatedContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterListBracketed(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitListBracketed(this);
		}
	}


}



class ListElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_listElement;
    }

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterListElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitListElement(this);
		}
	}


}



class Map_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_map_;
    }

	LPAREN() {
	    return this.getToken(ScssParser.LPAREN, 0);
	};

	mapEntry = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MapEntryContext);
	    } else {
	        return this.getTypedRuleContext(MapEntryContext,i);
	    }
	};

	RPAREN() {
	    return this.getToken(ScssParser.RPAREN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ScssParser.COMMA);
	    } else {
	        return this.getToken(ScssParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMap_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMap_(this);
		}
	}


}



class MapEntryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mapEntry;
    }

	mapKey() {
	    return this.getTypedRuleContext(MapKeyContext,0);
	};

	COLON() {
	    return this.getToken(ScssParser.COLON, 0);
	};

	mapValue() {
	    return this.getTypedRuleContext(MapValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMapEntry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMapEntry(this);
		}
	}


}



class MapKeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mapKey;
    }

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMapKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMapKey(this);
		}
	}


}



class MapValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ScssParser.RULE_mapValue;
    }

	commandStatement() {
	    return this.getTypedRuleContext(CommandStatementContext,0);
	};

	list_() {
	    return this.getTypedRuleContext(List_Context,0);
	};

	map_() {
	    return this.getTypedRuleContext(Map_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.enterMapValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ScssParserListener ) {
	        listener.exitMapValue(this);
		}
	}


}




ScssParser.StylesheetContext = StylesheetContext; 
ScssParser.StatementContext = StatementContext; 
ScssParser.DeclaredParamsContext = DeclaredParamsContext; 
ScssParser.DeclaredParamContext = DeclaredParamContext; 
ScssParser.VariableNameContext = VariableNameContext; 
ScssParser.ParamOptionalValueContext = ParamOptionalValueContext; 
ScssParser.PassedParamsContext = PassedParamsContext; 
ScssParser.PassedParamContext = PassedParamContext; 
ScssParser.MixinDeclarationContext = MixinDeclarationContext; 
ScssParser.ContentDeclarationContext = ContentDeclarationContext; 
ScssParser.IncludeDeclarationContext = IncludeDeclarationContext; 
ScssParser.FunctionDeclarationContext = FunctionDeclarationContext; 
ScssParser.FunctionBodyContext = FunctionBodyContext; 
ScssParser.FunctionReturnContext = FunctionReturnContext; 
ScssParser.FunctionStatementContext = FunctionStatementContext; 
ScssParser.CommandStatementContext = CommandStatementContext; 
ScssParser.MathCharacterContext = MathCharacterContext; 
ScssParser.MathStatementContext = MathStatementContext; 
ScssParser.ExpressionContext = ExpressionContext; 
ScssParser.IfDeclarationContext = IfDeclarationContext; 
ScssParser.ElseIfStatementContext = ElseIfStatementContext; 
ScssParser.ElseStatementContext = ElseStatementContext; 
ScssParser.ConditionsContext = ConditionsContext; 
ScssParser.ConditionContext = ConditionContext; 
ScssParser.VariableDeclarationContext = VariableDeclarationContext; 
ScssParser.ForDeclarationContext = ForDeclarationContext; 
ScssParser.FromNumberContext = FromNumberContext; 
ScssParser.ThroughNumberContext = ThroughNumberContext; 
ScssParser.WhileDeclarationContext = WhileDeclarationContext; 
ScssParser.EachDeclarationContext = EachDeclarationContext; 
ScssParser.EachValueListContext = EachValueListContext; 
ScssParser.ImportDeclarationContext = ImportDeclarationContext; 
ScssParser.ReferenceUrlContext = ReferenceUrlContext; 
ScssParser.AsClauseContext = AsClauseContext; 
ScssParser.WithClauseContext = WithClauseContext; 
ScssParser.KeywordArgumentContext = KeywordArgumentContext; 
ScssParser.MediaDeclarationContext = MediaDeclarationContext; 
ScssParser.MediaQueryListContext = MediaQueryListContext; 
ScssParser.MediaQueryContext = MediaQueryContext; 
ScssParser.MediaTypeContext = MediaTypeContext; 
ScssParser.MediaExpressionContext = MediaExpressionContext; 
ScssParser.MediaFeatureContext = MediaFeatureContext; 
ScssParser.RulesetContext = RulesetContext; 
ScssParser.BlockContext = BlockContext; 
ScssParser.SelectorsContext = SelectorsContext; 
ScssParser.SelectorContext = SelectorContext; 
ScssParser.ElementContext = ElementContext; 
ScssParser.CombinatorContext = CombinatorContext; 
ScssParser.PseudoContext = PseudoContext; 
ScssParser.AttribContext = AttribContext; 
ScssParser.AttribRelateContext = AttribRelateContext; 
ScssParser.IdentifierContext = IdentifierContext; 
ScssParser.PseudoIdentifierContext = PseudoIdentifierContext; 
ScssParser.IdentifierPartContext = IdentifierPartContext; 
ScssParser.IdentifierVariableNameContext = IdentifierVariableNameContext; 
ScssParser.Property_Context = Property_Context; 
ScssParser.LastPropertyContext = LastPropertyContext; 
ScssParser.PropertyValueContext = PropertyValueContext; 
ScssParser.UrlContext = UrlContext; 
ScssParser.MeasurementContext = MeasurementContext; 
ScssParser.FunctionCallContext = FunctionCallContext; 
ScssParser.NamespaceContext = NamespaceContext; 
ScssParser.List_Context = List_Context; 
ScssParser.ListCommaSeparatedContext = ListCommaSeparatedContext; 
ScssParser.ListSpaceSeparatedContext = ListSpaceSeparatedContext; 
ScssParser.ListBracketedContext = ListBracketedContext; 
ScssParser.ListElementContext = ListElementContext; 
ScssParser.Map_Context = Map_Context; 
ScssParser.MapEntryContext = MapEntryContext; 
ScssParser.MapKeyContext = MapKeyContext; 
ScssParser.MapValueContext = MapValueContext; 
