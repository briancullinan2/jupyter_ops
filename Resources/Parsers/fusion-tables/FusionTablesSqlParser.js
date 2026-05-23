// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/fusion-tables/FusionTablesSql.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import FusionTablesSqlListener from './FusionTablesSqlListener.js';
const serializedATN = [4,1,78,516,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,5,0,88,8,0,10,0,12,0,91,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,3,1,105,8,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,
4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,144,8,8,10,8,12,8,147,9,8,1,8,1,8,
1,8,1,8,3,8,153,8,8,1,8,5,8,156,8,8,10,8,12,8,159,9,8,1,8,1,8,1,9,1,9,1,
9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,174,8,10,10,10,12,10,177,9,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,5,10,186,8,10,10,10,12,10,189,9,10,
1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,199,8,11,10,11,12,11,202,9,
11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,3,13,219,8,13,1,14,1,14,1,14,1,14,1,15,1,15,1,15,3,15,228,8,15,1,16,
1,16,1,16,1,16,5,16,234,8,16,10,16,12,16,237,9,16,1,16,1,16,1,16,5,16,242,
8,16,10,16,12,16,245,9,16,1,16,1,16,3,16,249,8,16,1,16,1,16,1,16,1,16,1,
16,5,16,256,8,16,10,16,12,16,259,9,16,3,16,261,8,16,1,16,1,16,1,16,1,16,
1,16,5,16,268,8,16,10,16,12,16,271,9,16,3,16,273,8,16,1,16,1,16,1,16,1,16,
3,16,279,8,16,3,16,281,8,16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,
291,8,17,1,17,3,17,294,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,312,8,19,1,20,1,20,1,20,3,20,317,
8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,22,3,
22,332,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,3,22,351,8,22,1,22,1,22,1,22,1,22,3,22,357,8,22,
1,22,1,22,1,22,1,22,1,22,1,22,5,22,365,8,22,10,22,12,22,368,9,22,1,22,1,
22,1,22,1,22,3,22,374,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,
384,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,395,8,22,3,22,
397,8,22,1,23,1,23,1,24,1,24,1,25,1,25,1,26,1,26,3,26,407,8,26,1,27,1,27,
1,27,1,27,1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,3,30,488,8,30,1,31,1,31,1,32,1,32,3,32,494,8,32,1,
33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,39,1,40,
1,40,1,41,1,41,1,42,1,42,1,42,0,0,43,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
76,78,80,82,84,0,4,2,0,9,9,20,20,4,0,10,10,17,17,39,40,53,53,1,0,6,7,1,0,
65,69,581,0,89,1,0,0,0,2,104,1,0,0,0,4,108,1,0,0,0,6,110,1,0,0,0,8,112,1,
0,0,0,10,121,1,0,0,0,12,124,1,0,0,0,14,127,1,0,0,0,16,134,1,0,0,0,18,162,
1,0,0,0,20,166,1,0,0,0,22,192,1,0,0,0,24,206,1,0,0,0,26,210,1,0,0,0,28,220,
1,0,0,0,30,224,1,0,0,0,32,229,1,0,0,0,34,290,1,0,0,0,36,295,1,0,0,0,38,311,
1,0,0,0,40,316,1,0,0,0,42,320,1,0,0,0,44,396,1,0,0,0,46,398,1,0,0,0,48,400,
1,0,0,0,50,402,1,0,0,0,52,406,1,0,0,0,54,408,1,0,0,0,56,415,1,0,0,0,58,422,
1,0,0,0,60,487,1,0,0,0,62,489,1,0,0,0,64,493,1,0,0,0,66,495,1,0,0,0,68,497,
1,0,0,0,70,499,1,0,0,0,72,501,1,0,0,0,74,503,1,0,0,0,76,505,1,0,0,0,78,507,
1,0,0,0,80,509,1,0,0,0,82,511,1,0,0,0,84,513,1,0,0,0,86,88,3,2,1,0,87,86,
1,0,0,0,88,91,1,0,0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,92,1,0,0,0,91,89,1,
0,0,0,92,93,5,0,0,1,93,1,1,0,0,0,94,105,3,14,7,0,95,105,3,32,16,0,96,105,
3,16,8,0,97,105,3,8,4,0,98,105,3,26,13,0,99,105,3,18,9,0,100,105,3,20,10,
0,101,105,3,22,11,0,102,105,3,10,5,0,103,105,3,12,6,0,104,94,1,0,0,0,104,
95,1,0,0,0,104,96,1,0,0,0,104,97,1,0,0,0,104,98,1,0,0,0,104,99,1,0,0,0,104,
100,1,0,0,0,104,101,1,0,0,0,104,102,1,0,0,0,104,103,1,0,0,0,105,106,1,0,
0,0,106,107,5,1,0,0,107,3,1,0,0,0,108,109,3,72,36,0,109,5,1,0,0,0,110,111,
3,72,36,0,111,7,1,0,0,0,112,113,5,18,0,0,113,114,5,57,0,0,114,115,3,68,34,
0,115,116,5,8,0,0,116,117,5,51,0,0,117,118,5,2,0,0,118,119,5,26,0,0,119,
120,3,4,2,0,120,9,1,0,0,0,121,122,5,21,0,0,122,123,3,4,2,0,123,11,1,0,0,
0,124,125,5,55,0,0,125,126,5,58,0,0,126,13,1,0,0,0,127,128,5,5,0,0,128,129,
5,57,0,0,129,130,3,4,2,0,130,131,5,49,0,0,131,132,5,59,0,0,132,133,3,68,
34,0,133,15,1,0,0,0,134,135,5,18,0,0,135,136,5,62,0,0,136,137,3,78,39,0,
137,138,5,8,0,0,138,139,5,70,0,0,139,140,5,51,0,0,140,145,3,38,19,0,141,
142,5,3,0,0,142,144,3,38,19,0,143,141,1,0,0,0,144,147,1,0,0,0,145,143,1,
0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,145,1,0,0,0,148,149,5,26,0,0,149,
152,3,30,15,0,150,151,5,63,0,0,151,153,3,44,22,0,152,150,1,0,0,0,152,153,
1,0,0,0,153,157,1,0,0,0,154,156,3,36,18,0,155,154,1,0,0,0,156,159,1,0,0,
0,157,155,1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,157,1,0,0,0,160,161,
5,71,0,0,161,17,1,0,0,0,162,163,5,24,0,0,163,164,5,57,0,0,164,165,3,4,2,
0,165,19,1,0,0,0,166,167,5,31,0,0,167,168,5,32,0,0,168,169,3,6,3,0,169,170,
5,70,0,0,170,175,3,48,24,0,171,172,5,3,0,0,172,174,3,48,24,0,173,171,1,0,
0,0,174,177,1,0,0,0,175,173,1,0,0,0,175,176,1,0,0,0,176,178,1,0,0,0,177,
175,1,0,0,0,178,179,5,71,0,0,179,180,1,0,0,0,180,181,5,61,0,0,181,182,5,
70,0,0,182,187,3,64,32,0,183,184,5,3,0,0,184,186,3,64,32,0,185,183,1,0,0,
0,186,189,1,0,0,0,187,185,1,0,0,0,187,188,1,0,0,0,188,190,1,0,0,0,189,187,
1,0,0,0,190,191,5,71,0,0,191,21,1,0,0,0,192,193,5,60,0,0,193,194,3,6,3,0,
194,195,5,54,0,0,195,200,3,24,12,0,196,197,5,3,0,0,197,199,3,24,12,0,198,
196,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,203,1,0,
0,0,202,200,1,0,0,0,203,204,5,63,0,0,204,205,3,28,14,0,205,23,1,0,0,0,206,
207,3,48,24,0,207,208,5,68,0,0,208,209,3,64,32,0,209,25,1,0,0,0,210,211,
5,19,0,0,211,212,5,26,0,0,212,218,3,6,3,0,213,214,5,63,0,0,214,215,3,48,
24,0,215,216,5,68,0,0,216,217,3,64,32,0,217,219,1,0,0,0,218,213,1,0,0,0,
218,219,1,0,0,0,219,27,1,0,0,0,220,221,3,68,34,0,221,222,5,68,0,0,222,223,
3,84,42,0,223,29,1,0,0,0,224,227,3,72,36,0,225,226,5,8,0,0,226,228,3,80,
40,0,227,225,1,0,0,0,227,228,1,0,0,0,228,31,1,0,0,0,229,230,5,51,0,0,230,
235,3,38,19,0,231,232,5,3,0,0,232,234,3,38,19,0,233,231,1,0,0,0,234,237,
1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,235,1,0,0,0,
238,239,5,26,0,0,239,243,3,30,15,0,240,242,3,36,18,0,241,240,1,0,0,0,242,
245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,248,1,0,0,0,245,243,1,0,
0,0,246,247,5,63,0,0,247,249,3,44,22,0,248,246,1,0,0,0,248,249,1,0,0,0,249,
260,1,0,0,0,250,251,5,27,0,0,251,252,5,11,0,0,252,257,3,40,20,0,253,254,
5,3,0,0,254,256,3,40,20,0,255,253,1,0,0,0,256,259,1,0,0,0,257,255,1,0,0,
0,257,258,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,260,250,1,0,0,0,260,261,
1,0,0,0,261,272,1,0,0,0,262,263,5,46,0,0,263,264,5,11,0,0,264,269,3,34,17,
0,265,266,5,3,0,0,266,268,3,34,17,0,267,265,1,0,0,0,268,271,1,0,0,0,269,
267,1,0,0,0,269,270,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,272,262,1,0,
0,0,272,273,1,0,0,0,273,280,1,0,0,0,274,275,5,44,0,0,275,278,3,82,41,0,276,
277,5,37,0,0,277,279,3,82,41,0,278,276,1,0,0,0,278,279,1,0,0,0,279,281,1,
0,0,0,280,274,1,0,0,0,280,281,1,0,0,0,281,33,1,0,0,0,282,291,3,40,20,0,283,
284,5,50,0,0,284,285,5,70,0,0,285,286,3,40,20,0,286,287,5,3,0,0,287,288,
3,58,29,0,288,289,5,71,0,0,289,291,1,0,0,0,290,282,1,0,0,0,290,283,1,0,0,
0,291,293,1,0,0,0,292,294,7,0,0,0,293,292,1,0,0,0,293,294,1,0,0,0,294,35,
1,0,0,0,295,296,5,35,0,0,296,297,5,47,0,0,297,298,5,33,0,0,298,299,3,30,
15,0,299,300,5,45,0,0,300,301,3,40,20,0,301,302,5,68,0,0,302,303,3,40,20,
0,303,37,1,0,0,0,304,312,5,2,0,0,305,306,3,72,36,0,306,307,5,4,0,0,307,308,
5,2,0,0,308,312,1,0,0,0,309,312,3,40,20,0,310,312,3,42,21,0,311,304,1,0,
0,0,311,305,1,0,0,0,311,309,1,0,0,0,311,310,1,0,0,0,312,39,1,0,0,0,313,314,
3,72,36,0,314,315,5,4,0,0,315,317,1,0,0,0,316,313,1,0,0,0,316,317,1,0,0,
0,317,318,1,0,0,0,318,319,3,74,37,0,319,41,1,0,0,0,320,321,7,1,0,0,321,322,
5,70,0,0,322,323,3,40,20,0,323,324,5,71,0,0,324,43,1,0,0,0,325,326,3,46,
23,0,326,327,3,62,31,0,327,331,3,64,32,0,328,329,3,50,25,0,329,330,3,44,
22,0,330,332,1,0,0,0,331,328,1,0,0,0,331,332,1,0,0,0,332,397,1,0,0,0,333,
350,3,46,23,0,334,351,5,36,0,0,335,351,5,38,0,0,336,337,5,56,0,0,337,351,
5,64,0,0,338,339,5,25,0,0,339,351,5,64,0,0,340,351,5,16,0,0,341,342,5,16,
0,0,342,343,5,29,0,0,343,351,5,13,0,0,344,345,5,22,0,0,345,346,5,41,0,0,
346,351,5,23,0,0,347,348,5,41,0,0,348,349,5,42,0,0,349,351,5,59,0,0,350,
334,1,0,0,0,350,335,1,0,0,0,350,336,1,0,0,0,350,338,1,0,0,0,350,340,1,0,
0,0,350,341,1,0,0,0,350,344,1,0,0,0,350,347,1,0,0,0,351,352,1,0,0,0,352,
356,3,84,42,0,353,354,3,50,25,0,354,355,3,44,22,0,355,357,1,0,0,0,356,353,
1,0,0,0,356,357,1,0,0,0,357,397,1,0,0,0,358,359,3,46,23,0,359,360,5,30,0,
0,360,361,5,70,0,0,361,366,3,84,42,0,362,363,5,3,0,0,363,365,3,84,42,0,364,
362,1,0,0,0,365,368,1,0,0,0,366,364,1,0,0,0,366,367,1,0,0,0,367,369,1,0,
0,0,368,366,1,0,0,0,369,373,5,71,0,0,370,371,3,50,25,0,371,372,3,44,22,0,
372,374,1,0,0,0,373,370,1,0,0,0,373,374,1,0,0,0,374,397,1,0,0,0,375,376,
3,46,23,0,376,377,5,12,0,0,377,378,3,64,32,0,378,379,5,6,0,0,379,383,3,64,
32,0,380,381,3,50,25,0,381,382,3,44,22,0,382,384,1,0,0,0,383,380,1,0,0,0,
383,384,1,0,0,0,384,397,1,0,0,0,385,386,5,52,0,0,386,387,5,70,0,0,387,388,
3,40,20,0,388,389,5,3,0,0,389,390,3,52,26,0,390,394,5,71,0,0,391,392,3,50,
25,0,392,393,3,44,22,0,393,395,1,0,0,0,394,391,1,0,0,0,394,395,1,0,0,0,395,
397,1,0,0,0,396,325,1,0,0,0,396,333,1,0,0,0,396,358,1,0,0,0,396,375,1,0,
0,0,396,385,1,0,0,0,397,45,1,0,0,0,398,399,3,40,20,0,399,47,1,0,0,0,400,
401,3,74,37,0,401,49,1,0,0,0,402,403,7,2,0,0,403,51,1,0,0,0,404,407,3,54,
27,0,405,407,3,56,28,0,406,404,1,0,0,0,406,405,1,0,0,0,407,53,1,0,0,0,408,
409,5,14,0,0,409,410,5,70,0,0,410,411,3,58,29,0,411,412,5,3,0,0,412,413,
3,82,41,0,413,414,5,71,0,0,414,55,1,0,0,0,415,416,5,48,0,0,416,417,5,70,
0,0,417,418,3,58,29,0,418,419,5,3,0,0,419,420,3,58,29,0,420,421,5,71,0,0,
421,57,1,0,0,0,422,423,5,34,0,0,423,424,5,70,0,0,424,425,3,82,41,0,425,426,
5,3,0,0,426,427,3,82,41,0,427,428,5,71,0,0,428,59,1,0,0,0,429,488,1,0,0,
0,430,488,5,5,0,0,431,488,5,6,0,0,432,488,5,7,0,0,433,488,5,8,0,0,434,488,
5,9,0,0,435,488,5,10,0,0,436,488,5,11,0,0,437,488,5,12,0,0,438,488,5,13,
0,0,439,488,5,14,0,0,440,488,5,15,0,0,441,488,5,23,0,0,442,488,5,16,0,0,
443,488,5,17,0,0,444,488,5,18,0,0,445,488,5,19,0,0,446,488,5,20,0,0,447,
488,5,22,0,0,448,488,5,24,0,0,449,488,5,25,0,0,450,488,5,42,0,0,451,488,
5,26,0,0,452,488,5,27,0,0,453,488,5,28,0,0,454,488,5,29,0,0,455,488,5,30,
0,0,456,488,5,31,0,0,457,488,5,32,0,0,458,488,5,33,0,0,459,488,5,34,0,0,
460,488,5,35,0,0,461,488,5,36,0,0,462,488,5,37,0,0,463,488,5,38,0,0,464,
488,5,39,0,0,465,488,5,40,0,0,466,488,5,41,0,0,467,488,5,43,0,0,468,488,
5,44,0,0,469,488,5,45,0,0,470,488,5,46,0,0,471,488,5,47,0,0,472,488,5,48,
0,0,473,488,5,49,0,0,474,488,5,51,0,0,475,488,5,54,0,0,476,488,5,56,0,0,
477,488,5,50,0,0,478,488,5,52,0,0,479,488,5,53,0,0,480,488,5,57,0,0,481,
488,5,59,0,0,482,488,5,60,0,0,483,488,5,61,0,0,484,488,5,62,0,0,485,488,
5,63,0,0,486,488,5,64,0,0,487,429,1,0,0,0,487,430,1,0,0,0,487,431,1,0,0,
0,487,432,1,0,0,0,487,433,1,0,0,0,487,434,1,0,0,0,487,435,1,0,0,0,487,436,
1,0,0,0,487,437,1,0,0,0,487,438,1,0,0,0,487,439,1,0,0,0,487,440,1,0,0,0,
487,441,1,0,0,0,487,442,1,0,0,0,487,443,1,0,0,0,487,444,1,0,0,0,487,445,
1,0,0,0,487,446,1,0,0,0,487,447,1,0,0,0,487,448,1,0,0,0,487,449,1,0,0,0,
487,450,1,0,0,0,487,451,1,0,0,0,487,452,1,0,0,0,487,453,1,0,0,0,487,454,
1,0,0,0,487,455,1,0,0,0,487,456,1,0,0,0,487,457,1,0,0,0,487,458,1,0,0,0,
487,459,1,0,0,0,487,460,1,0,0,0,487,461,1,0,0,0,487,462,1,0,0,0,487,463,
1,0,0,0,487,464,1,0,0,0,487,465,1,0,0,0,487,466,1,0,0,0,487,467,1,0,0,0,
487,468,1,0,0,0,487,469,1,0,0,0,487,470,1,0,0,0,487,471,1,0,0,0,487,472,
1,0,0,0,487,473,1,0,0,0,487,474,1,0,0,0,487,475,1,0,0,0,487,476,1,0,0,0,
487,477,1,0,0,0,487,478,1,0,0,0,487,479,1,0,0,0,487,480,1,0,0,0,487,481,
1,0,0,0,487,482,1,0,0,0,487,483,1,0,0,0,487,484,1,0,0,0,487,485,1,0,0,0,
487,486,1,0,0,0,488,61,1,0,0,0,489,490,7,3,0,0,490,63,1,0,0,0,491,494,3,
82,41,0,492,494,3,84,42,0,493,491,1,0,0,0,493,492,1,0,0,0,494,65,1,0,0,0,
495,496,3,84,42,0,496,67,1,0,0,0,497,498,3,84,42,0,498,69,1,0,0,0,499,500,
3,68,34,0,500,71,1,0,0,0,501,502,3,68,34,0,502,73,1,0,0,0,503,504,3,68,34,
0,504,75,1,0,0,0,505,506,3,72,36,0,506,77,1,0,0,0,507,508,3,68,34,0,508,
79,1,0,0,0,509,510,3,68,34,0,510,81,1,0,0,0,511,512,5,72,0,0,512,83,1,0,
0,0,513,514,5,73,0,0,514,85,1,0,0,0,34,89,104,145,152,157,175,187,200,218,
227,235,243,248,257,260,269,272,278,280,290,293,311,316,331,350,356,366,
373,383,394,396,406,487,493];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class FusionTablesSqlParser extends antlr4.Parser {

    static grammarFileName = "FusionTablesSql.g4";
    static literalNames = [ null, "';'", "'*'", "','", "'.'", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, "'<='", "'>='", "'>'", "'='", "'<'", 
                            "'('", "')'" ];
    static symbolicNames = [ null, null, null, null, null, "K_ALTER", "K_AND", 
                             "K_OR", "K_AS", "K_ASC", "K_AVERAGE", "K_BY", 
                             "K_BETWEEN", "K_CASE", "K_CIRCLE", "K_COLUMN", 
                             "K_CONTAINS", "K_COUNT", "K_CREATE", "K_DELETE", 
                             "K_DESC", "K_DESCRIBE", "K_DOES", "K_CONTAIN", 
                             "K_DROP", "K_ENDS", "K_FROM", "K_GROUP", "K_HAVING", 
                             "K_IGNORING", "K_IN", "K_INSERT", "K_INTO", 
                             "K_JOIN", "K_LATLNG", "K_LEFT", "K_LIKE", "K_LIMIT", 
                             "K_MATCHES", "K_MAXIMUM", "K_MINIMUM", "K_NOT", 
                             "K_EQUAL", "K_OF", "K_OFFSET", "K_ON", "K_ORDER", 
                             "K_OUTER", "K_RECTANGLE", "K_RENAME", "K_ST_DISTANCE", 
                             "K_SELECT", "K_ST_INTERSECTS", "K_SUM", "K_SET", 
                             "K_SHOW", "K_STARTS", "K_TABLE", "K_TABLES", 
                             "K_TO", "K_UPDATE", "K_VALUES", "K_VIEW", "K_WHERE", 
                             "K_WITH", "LT_EQ", "GT_EQ", "GT", "EQ", "LT", 
                             "LPAR", "RPAR", "NUMERIC_LITERAL", "STRING_LITERAL", 
                             "STRING", "QUOTED_STRING", "SINGLELINE_COMMENT", 
                             "MULTILINE_COMMENT", "WHITESPACE" ];
    static ruleNames = [ "fusionTablesSql", "sql_stmt", "table_name_in_ddl", 
                         "table_name_in_dml", "create_table_as_select_stmt", 
                         "describe_stmt", "show_tables_stmt", "alter_table_stmt", 
                         "create_view_stmt", "drop_table_stmt", "insert_stmt", 
                         "update_stmt", "column_assignment", "delete_stmt", 
                         "eq_comparison", "table_name_with_alias", "select_stmt", 
                         "ordering_term", "join_clause", "result_column", 
                         "qualified_column_name", "aggregate_exp", "expr", 
                         "column_name_beginning_expr", "column_name_in_dml", 
                         "and_or_or", "geometry", "circle", "rectangle", 
                         "coordinate", "keyword", "operator_", "literal", 
                         "error_message", "identifier", "column_alias", 
                         "table_name", "column_name", "new_table_name", 
                         "view_name", "table_alias", "numeric_literal", 
                         "string_literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FusionTablesSqlParser.ruleNames;
        this.literalNames = FusionTablesSqlParser.literalNames;
        this.symbolicNames = FusionTablesSqlParser.symbolicNames;
    }



	fusionTablesSql() {
	    let localctx = new FusionTablesSqlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FusionTablesSqlParser.RULE_fusionTablesSql);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2167144480) !== 0) || ((((_la - 51)) & ~0x1f) === 0 && ((1 << (_la - 51)) & 529) !== 0)) {
	            this.state = 86;
	            this.sql_stmt();
	            this.state = 91;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 92;
	        this.match(FusionTablesSqlParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sql_stmt() {
	    let localctx = new Sql_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FusionTablesSqlParser.RULE_sql_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 94;
	            this.alter_table_stmt();
	            break;

	        case 2:
	            this.state = 95;
	            this.select_stmt();
	            break;

	        case 3:
	            this.state = 96;
	            this.create_view_stmt();
	            break;

	        case 4:
	            this.state = 97;
	            this.create_table_as_select_stmt();
	            break;

	        case 5:
	            this.state = 98;
	            this.delete_stmt();
	            break;

	        case 6:
	            this.state = 99;
	            this.drop_table_stmt();
	            break;

	        case 7:
	            this.state = 100;
	            this.insert_stmt();
	            break;

	        case 8:
	            this.state = 101;
	            this.update_stmt();
	            break;

	        case 9:
	            this.state = 102;
	            this.describe_stmt();
	            break;

	        case 10:
	            this.state = 103;
	            this.show_tables_stmt();
	            break;

	        }
	        this.state = 106;
	        this.match(FusionTablesSqlParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_name_in_ddl() {
	    let localctx = new Table_name_in_ddlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FusionTablesSqlParser.RULE_table_name_in_ddl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 108;
	        this.table_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_name_in_dml() {
	    let localctx = new Table_name_in_dmlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FusionTablesSqlParser.RULE_table_name_in_dml);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 110;
	        this.table_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	create_table_as_select_stmt() {
	    let localctx = new Create_table_as_select_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, FusionTablesSqlParser.RULE_create_table_as_select_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 112;
	        this.match(FusionTablesSqlParser.K_CREATE);
	        this.state = 113;
	        this.match(FusionTablesSqlParser.K_TABLE);
	        this.state = 114;
	        this.identifier();
	        this.state = 115;
	        this.match(FusionTablesSqlParser.K_AS);
	        this.state = 116;
	        this.match(FusionTablesSqlParser.K_SELECT);
	        this.state = 117;
	        this.match(FusionTablesSqlParser.T__1);
	        this.state = 118;
	        this.match(FusionTablesSqlParser.K_FROM);
	        this.state = 119;
	        this.table_name_in_ddl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	describe_stmt() {
	    let localctx = new Describe_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, FusionTablesSqlParser.RULE_describe_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.match(FusionTablesSqlParser.K_DESCRIBE);
	        this.state = 122;
	        this.table_name_in_ddl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	show_tables_stmt() {
	    let localctx = new Show_tables_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, FusionTablesSqlParser.RULE_show_tables_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(FusionTablesSqlParser.K_SHOW);
	        this.state = 125;
	        this.match(FusionTablesSqlParser.K_TABLES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alter_table_stmt() {
	    let localctx = new Alter_table_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, FusionTablesSqlParser.RULE_alter_table_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(FusionTablesSqlParser.K_ALTER);
	        this.state = 128;
	        this.match(FusionTablesSqlParser.K_TABLE);
	        this.state = 129;
	        this.table_name_in_ddl();

	        this.state = 130;
	        this.match(FusionTablesSqlParser.K_RENAME);
	        this.state = 131;
	        this.match(FusionTablesSqlParser.K_TO);
	        this.state = 132;
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



	create_view_stmt() {
	    let localctx = new Create_view_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, FusionTablesSqlParser.RULE_create_view_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(FusionTablesSqlParser.K_CREATE);
	        this.state = 135;
	        this.match(FusionTablesSqlParser.K_VIEW);
	        this.state = 136;
	        this.view_name();
	        this.state = 137;
	        this.match(FusionTablesSqlParser.K_AS);
	        this.state = 138;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 139;
	        this.match(FusionTablesSqlParser.K_SELECT);
	        this.state = 140;
	        this.result_column();
	        this.state = 145;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 141;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 142;
	            this.result_column();
	            this.state = 147;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 148;
	        this.match(FusionTablesSqlParser.K_FROM);

	        this.state = 149;
	        this.table_name_with_alias();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 150;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            this.state = 151;
	            this.expr();
	        }

	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 154;
	            this.join_clause();
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 160;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	drop_table_stmt() {
	    let localctx = new Drop_table_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, FusionTablesSqlParser.RULE_drop_table_stmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this.match(FusionTablesSqlParser.K_DROP);
	        this.state = 163;
	        this.match(FusionTablesSqlParser.K_TABLE);
	        this.state = 164;
	        this.table_name_in_ddl();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	insert_stmt() {
	    let localctx = new Insert_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, FusionTablesSqlParser.RULE_insert_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 166;
	        this.match(FusionTablesSqlParser.K_INSERT);
	        this.state = 167;
	        this.match(FusionTablesSqlParser.K_INTO);
	        this.state = 168;
	        this.table_name_in_dml();

	        this.state = 169;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 170;
	        this.column_name_in_dml();
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 171;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 172;
	            this.column_name_in_dml();
	            this.state = 177;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this.match(FusionTablesSqlParser.RPAR);

	        this.state = 180;
	        this.match(FusionTablesSqlParser.K_VALUES);
	        this.state = 181;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 182;
	        this.literal();
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 183;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 184;
	            this.literal();
	            this.state = 189;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 190;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	update_stmt() {
	    let localctx = new Update_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, FusionTablesSqlParser.RULE_update_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(FusionTablesSqlParser.K_UPDATE);
	        this.state = 193;
	        this.table_name_in_dml();
	        this.state = 194;
	        this.match(FusionTablesSqlParser.K_SET);
	        this.state = 195;
	        this.column_assignment();
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 196;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 197;
	            this.column_assignment();
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 203;
	        this.match(FusionTablesSqlParser.K_WHERE);
	        this.state = 204;
	        this.eq_comparison();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_assignment() {
	    let localctx = new Column_assignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, FusionTablesSqlParser.RULE_column_assignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this.column_name_in_dml();
	        this.state = 207;
	        this.match(FusionTablesSqlParser.EQ);
	        this.state = 208;
	        this.literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	delete_stmt() {
	    let localctx = new Delete_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, FusionTablesSqlParser.RULE_delete_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(FusionTablesSqlParser.K_DELETE);
	        this.state = 211;
	        this.match(FusionTablesSqlParser.K_FROM);
	        this.state = 212;
	        this.table_name_in_dml();
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 213;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            this.state = 214;
	            this.column_name_in_dml();
	            this.state = 215;
	            this.match(FusionTablesSqlParser.EQ);
	            this.state = 216;
	            this.literal();
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



	eq_comparison() {
	    let localctx = new Eq_comparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, FusionTablesSqlParser.RULE_eq_comparison);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        this.identifier();
	        this.state = 221;
	        this.match(FusionTablesSqlParser.EQ);
	        this.state = 222;
	        this.string_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	table_name_with_alias() {
	    let localctx = new Table_name_with_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, FusionTablesSqlParser.RULE_table_name_with_alias);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 224;
	        this.table_name();
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 225;
	            this.match(FusionTablesSqlParser.K_AS);
	            this.state = 226;
	            this.table_alias();
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



	select_stmt() {
	    let localctx = new Select_stmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, FusionTablesSqlParser.RULE_select_stmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 229;
	        this.match(FusionTablesSqlParser.K_SELECT);
	        this.state = 230;
	        this.result_column();
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 231;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 232;
	            this.result_column();
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 238;
	        this.match(FusionTablesSqlParser.K_FROM);
	        this.state = 239;
	        this.table_name_with_alias();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 240;
	            this.join_clause();
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 246;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            this.state = 247;
	            this.expr();
	        }

	        this.state = 260;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 250;
	            this.match(FusionTablesSqlParser.K_GROUP);
	            this.state = 251;
	            this.match(FusionTablesSqlParser.K_BY);
	            this.state = 252;
	            this.qualified_column_name();
	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 253;
	                this.match(FusionTablesSqlParser.T__2);
	                this.state = 254;
	                this.qualified_column_name();
	                this.state = 259;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 272;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===46) {
	            this.state = 262;
	            this.match(FusionTablesSqlParser.K_ORDER);
	            this.state = 263;
	            this.match(FusionTablesSqlParser.K_BY);
	            this.state = 264;
	            this.ordering_term();
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 265;
	                this.match(FusionTablesSqlParser.T__2);
	                this.state = 266;
	                this.ordering_term();
	                this.state = 271;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 280;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===44) {
	            this.state = 274;
	            this.match(FusionTablesSqlParser.K_OFFSET);
	            this.state = 275;
	            this.numeric_literal();
	            this.state = 278;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 276;
	                this.match(FusionTablesSqlParser.K_LIMIT);
	                this.state = 277;
	                this.numeric_literal();
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



	ordering_term() {
	    let localctx = new Ordering_termContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, FusionTablesSqlParser.RULE_ordering_term);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 73:
	            this.state = 282;
	            this.qualified_column_name();
	            break;
	        case 50:
	            this.state = 283;
	            this.match(FusionTablesSqlParser.K_ST_DISTANCE);
	            this.state = 284;
	            this.match(FusionTablesSqlParser.LPAR);
	            this.state = 285;
	            this.qualified_column_name();
	            this.state = 286;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 287;
	            this.coordinate();
	            this.state = 288;
	            this.match(FusionTablesSqlParser.RPAR);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 293;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9 || _la===20) {
	            this.state = 292;
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===20)) {
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



	join_clause() {
	    let localctx = new Join_clauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, FusionTablesSqlParser.RULE_join_clause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 295;
	        this.match(FusionTablesSqlParser.K_LEFT);
	        this.state = 296;
	        this.match(FusionTablesSqlParser.K_OUTER);
	        this.state = 297;
	        this.match(FusionTablesSqlParser.K_JOIN);
	        this.state = 298;
	        this.table_name_with_alias();
	        this.state = 299;
	        this.match(FusionTablesSqlParser.K_ON);
	        this.state = 300;
	        this.qualified_column_name();
	        this.state = 301;
	        this.match(FusionTablesSqlParser.EQ);
	        this.state = 302;
	        this.qualified_column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	result_column() {
	    let localctx = new Result_columnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, FusionTablesSqlParser.RULE_result_column);
	    try {
	        this.state = 311;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 304;
	            this.match(FusionTablesSqlParser.T__1);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 305;
	            this.table_name();
	            this.state = 306;
	            this.match(FusionTablesSqlParser.T__3);
	            this.state = 307;
	            this.match(FusionTablesSqlParser.T__1);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 309;
	            this.qualified_column_name();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 310;
	            this.aggregate_exp();
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



	qualified_column_name() {
	    let localctx = new Qualified_column_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, FusionTablesSqlParser.RULE_qualified_column_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        if(la_===1) {
	            this.state = 313;
	            this.table_name();
	            this.state = 314;
	            this.match(FusionTablesSqlParser.T__3);

	        }
	        this.state = 318;
	        this.column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	aggregate_exp() {
	    let localctx = new Aggregate_expContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, FusionTablesSqlParser.RULE_aggregate_exp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        _la = this._input.LA(1);
	        if(!(_la===10 || _la===17 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 16387) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 321;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 322;
	        this.qualified_column_name();
	        this.state = 323;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 44, FusionTablesSqlParser.RULE_expr);
	    var _la = 0;
	    try {
	        this.state = 396;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 325;
	            this.column_name_beginning_expr();

	            this.state = 326;
	            this.operator_();
	            this.state = 327;
	            this.literal();
	            this.state = 331;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===7) {
	                this.state = 328;
	                this.and_or_or();
	                this.state = 329;
	                this.expr();
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 333;
	            this.column_name_beginning_expr();
	            this.state = 350;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 334;
	                this.match(FusionTablesSqlParser.K_LIKE);
	                break;

	            case 2:
	                this.state = 335;
	                this.match(FusionTablesSqlParser.K_MATCHES);
	                break;

	            case 3:
	                this.state = 336;
	                this.match(FusionTablesSqlParser.K_STARTS);
	                this.state = 337;
	                this.match(FusionTablesSqlParser.K_WITH);
	                break;

	            case 4:
	                this.state = 338;
	                this.match(FusionTablesSqlParser.K_ENDS);
	                this.state = 339;
	                this.match(FusionTablesSqlParser.K_WITH);
	                break;

	            case 5:
	                this.state = 340;
	                this.match(FusionTablesSqlParser.K_CONTAINS);
	                break;

	            case 6:
	                this.state = 341;
	                this.match(FusionTablesSqlParser.K_CONTAINS);
	                this.state = 342;
	                this.match(FusionTablesSqlParser.K_IGNORING);
	                this.state = 343;
	                this.match(FusionTablesSqlParser.K_CASE);
	                break;

	            case 7:
	                this.state = 344;
	                this.match(FusionTablesSqlParser.K_DOES);
	                this.state = 345;
	                this.match(FusionTablesSqlParser.K_NOT);
	                this.state = 346;
	                this.match(FusionTablesSqlParser.K_CONTAIN);
	                break;

	            case 8:
	                this.state = 347;
	                this.match(FusionTablesSqlParser.K_NOT);
	                this.state = 348;
	                this.match(FusionTablesSqlParser.K_EQUAL);
	                this.state = 349;
	                this.match(FusionTablesSqlParser.K_TO);
	                break;

	            }
	            this.state = 352;
	            this.string_literal();
	            this.state = 356;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===7) {
	                this.state = 353;
	                this.and_or_or();
	                this.state = 354;
	                this.expr();
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 358;
	            this.column_name_beginning_expr();
	            this.state = 359;
	            this.match(FusionTablesSqlParser.K_IN);
	            this.state = 360;
	            this.match(FusionTablesSqlParser.LPAR);
	            this.state = 361;
	            this.string_literal();
	            this.state = 366;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===3) {
	                this.state = 362;
	                this.match(FusionTablesSqlParser.T__2);
	                this.state = 363;
	                this.string_literal();
	                this.state = 368;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 369;
	            this.match(FusionTablesSqlParser.RPAR);
	            this.state = 373;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===7) {
	                this.state = 370;
	                this.and_or_or();
	                this.state = 371;
	                this.expr();
	            }

	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 375;
	            this.column_name_beginning_expr();
	            this.state = 376;
	            this.match(FusionTablesSqlParser.K_BETWEEN);
	            this.state = 377;
	            this.literal();
	            this.state = 378;
	            this.match(FusionTablesSqlParser.K_AND);
	            this.state = 379;
	            this.literal();
	            this.state = 383;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===7) {
	                this.state = 380;
	                this.and_or_or();
	                this.state = 381;
	                this.expr();
	            }

	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 385;
	            this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
	            this.state = 386;
	            this.match(FusionTablesSqlParser.LPAR);
	            this.state = 387;
	            this.qualified_column_name();
	            this.state = 388;
	            this.match(FusionTablesSqlParser.T__2);
	            this.state = 389;
	            this.geometry();
	            this.state = 390;
	            this.match(FusionTablesSqlParser.RPAR);
	            this.state = 394;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===7) {
	                this.state = 391;
	                this.and_or_or();
	                this.state = 392;
	                this.expr();
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



	column_name_beginning_expr() {
	    let localctx = new Column_name_beginning_exprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, FusionTablesSqlParser.RULE_column_name_beginning_expr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.qualified_column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_name_in_dml() {
	    let localctx = new Column_name_in_dmlContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, FusionTablesSqlParser.RULE_column_name_in_dml);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.column_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	and_or_or() {
	    let localctx = new And_or_orContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, FusionTablesSqlParser.RULE_and_or_or);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===7)) {
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



	geometry() {
	    let localctx = new GeometryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, FusionTablesSqlParser.RULE_geometry);
	    try {
	        this.state = 406;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 404;
	            this.circle();
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 405;
	            this.rectangle();
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



	circle() {
	    let localctx = new CircleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, FusionTablesSqlParser.RULE_circle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.match(FusionTablesSqlParser.K_CIRCLE);
	        this.state = 409;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 410;
	        this.coordinate();
	        this.state = 411;
	        this.match(FusionTablesSqlParser.T__2);
	        this.state = 412;
	        this.numeric_literal();
	        this.state = 413;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rectangle() {
	    let localctx = new RectangleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, FusionTablesSqlParser.RULE_rectangle);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this.match(FusionTablesSqlParser.K_RECTANGLE);
	        this.state = 416;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 417;
	        this.coordinate();
	        this.state = 418;
	        this.match(FusionTablesSqlParser.T__2);
	        this.state = 419;
	        this.coordinate();
	        this.state = 420;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	coordinate() {
	    let localctx = new CoordinateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, FusionTablesSqlParser.RULE_coordinate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(FusionTablesSqlParser.K_LATLNG);
	        this.state = 423;
	        this.match(FusionTablesSqlParser.LPAR);
	        this.state = 424;
	        this.numeric_literal();
	        this.state = 425;
	        this.match(FusionTablesSqlParser.T__2);
	        this.state = 426;
	        this.numeric_literal();
	        this.state = 427;
	        this.match(FusionTablesSqlParser.RPAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, FusionTablesSqlParser.RULE_keyword);
	    try {
	        this.state = 487;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case -1:
	            this.enterOuterAlt(localctx, 1);

	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 430;
	            this.match(FusionTablesSqlParser.K_ALTER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 431;
	            this.match(FusionTablesSqlParser.K_AND);
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 432;
	            this.match(FusionTablesSqlParser.K_OR);
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 433;
	            this.match(FusionTablesSqlParser.K_AS);
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 434;
	            this.match(FusionTablesSqlParser.K_ASC);
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 435;
	            this.match(FusionTablesSqlParser.K_AVERAGE);
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 436;
	            this.match(FusionTablesSqlParser.K_BY);
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 437;
	            this.match(FusionTablesSqlParser.K_BETWEEN);
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 438;
	            this.match(FusionTablesSqlParser.K_CASE);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 439;
	            this.match(FusionTablesSqlParser.K_CIRCLE);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 440;
	            this.match(FusionTablesSqlParser.K_COLUMN);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 441;
	            this.match(FusionTablesSqlParser.K_CONTAIN);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 442;
	            this.match(FusionTablesSqlParser.K_CONTAINS);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 443;
	            this.match(FusionTablesSqlParser.K_COUNT);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 444;
	            this.match(FusionTablesSqlParser.K_CREATE);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 445;
	            this.match(FusionTablesSqlParser.K_DELETE);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 446;
	            this.match(FusionTablesSqlParser.K_DESC);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 447;
	            this.match(FusionTablesSqlParser.K_DOES);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 448;
	            this.match(FusionTablesSqlParser.K_DROP);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 449;
	            this.match(FusionTablesSqlParser.K_ENDS);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 450;
	            this.match(FusionTablesSqlParser.K_EQUAL);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 451;
	            this.match(FusionTablesSqlParser.K_FROM);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 452;
	            this.match(FusionTablesSqlParser.K_GROUP);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 453;
	            this.match(FusionTablesSqlParser.K_HAVING);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 454;
	            this.match(FusionTablesSqlParser.K_IGNORING);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 455;
	            this.match(FusionTablesSqlParser.K_IN);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 456;
	            this.match(FusionTablesSqlParser.K_INSERT);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 457;
	            this.match(FusionTablesSqlParser.K_INTO);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 458;
	            this.match(FusionTablesSqlParser.K_JOIN);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 459;
	            this.match(FusionTablesSqlParser.K_LATLNG);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 460;
	            this.match(FusionTablesSqlParser.K_LEFT);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 461;
	            this.match(FusionTablesSqlParser.K_LIKE);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 462;
	            this.match(FusionTablesSqlParser.K_LIMIT);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 463;
	            this.match(FusionTablesSqlParser.K_MATCHES);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 464;
	            this.match(FusionTablesSqlParser.K_MAXIMUM);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 37);
	            this.state = 465;
	            this.match(FusionTablesSqlParser.K_MINIMUM);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 38);
	            this.state = 466;
	            this.match(FusionTablesSqlParser.K_NOT);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 39);
	            this.state = 467;
	            this.match(FusionTablesSqlParser.K_OF);
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 40);
	            this.state = 468;
	            this.match(FusionTablesSqlParser.K_OFFSET);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 41);
	            this.state = 469;
	            this.match(FusionTablesSqlParser.K_ON);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 42);
	            this.state = 470;
	            this.match(FusionTablesSqlParser.K_ORDER);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 43);
	            this.state = 471;
	            this.match(FusionTablesSqlParser.K_OUTER);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 44);
	            this.state = 472;
	            this.match(FusionTablesSqlParser.K_RECTANGLE);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 45);
	            this.state = 473;
	            this.match(FusionTablesSqlParser.K_RENAME);
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 46);
	            this.state = 474;
	            this.match(FusionTablesSqlParser.K_SELECT);
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 47);
	            this.state = 475;
	            this.match(FusionTablesSqlParser.K_SET);
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 48);
	            this.state = 476;
	            this.match(FusionTablesSqlParser.K_STARTS);
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 49);
	            this.state = 477;
	            this.match(FusionTablesSqlParser.K_ST_DISTANCE);
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 50);
	            this.state = 478;
	            this.match(FusionTablesSqlParser.K_ST_INTERSECTS);
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 51);
	            this.state = 479;
	            this.match(FusionTablesSqlParser.K_SUM);
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 52);
	            this.state = 480;
	            this.match(FusionTablesSqlParser.K_TABLE);
	            break;
	        case 59:
	            this.enterOuterAlt(localctx, 53);
	            this.state = 481;
	            this.match(FusionTablesSqlParser.K_TO);
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 54);
	            this.state = 482;
	            this.match(FusionTablesSqlParser.K_UPDATE);
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 55);
	            this.state = 483;
	            this.match(FusionTablesSqlParser.K_VALUES);
	            break;
	        case 62:
	            this.enterOuterAlt(localctx, 56);
	            this.state = 484;
	            this.match(FusionTablesSqlParser.K_VIEW);
	            break;
	        case 63:
	            this.enterOuterAlt(localctx, 57);
	            this.state = 485;
	            this.match(FusionTablesSqlParser.K_WHERE);
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 58);
	            this.state = 486;
	            this.match(FusionTablesSqlParser.K_WITH);
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



	operator_() {
	    let localctx = new Operator_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, FusionTablesSqlParser.RULE_operator_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        _la = this._input.LA(1);
	        if(!(((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 31) !== 0))) {
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, FusionTablesSqlParser.RULE_literal);
	    try {
	        this.state = 493;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 72:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 491;
	            this.numeric_literal();
	            break;
	        case 73:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 492;
	            this.string_literal();
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



	error_message() {
	    let localctx = new Error_messageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, FusionTablesSqlParser.RULE_error_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
	        this.string_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 68, FusionTablesSqlParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this.string_literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	column_alias() {
	    let localctx = new Column_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, FusionTablesSqlParser.RULE_column_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 499;
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



	table_name() {
	    let localctx = new Table_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, FusionTablesSqlParser.RULE_table_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 501;
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



	column_name() {
	    let localctx = new Column_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, FusionTablesSqlParser.RULE_column_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 503;
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



	new_table_name() {
	    let localctx = new New_table_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, FusionTablesSqlParser.RULE_new_table_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 505;
	        this.table_name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	view_name() {
	    let localctx = new View_nameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, FusionTablesSqlParser.RULE_view_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 507;
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



	table_alias() {
	    let localctx = new Table_aliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, FusionTablesSqlParser.RULE_table_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 509;
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



	numeric_literal() {
	    let localctx = new Numeric_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, FusionTablesSqlParser.RULE_numeric_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 511;
	        this.match(FusionTablesSqlParser.NUMERIC_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	string_literal() {
	    let localctx = new String_literalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, FusionTablesSqlParser.RULE_string_literal);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 513;
	        this.match(FusionTablesSqlParser.STRING_LITERAL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

FusionTablesSqlParser.EOF = antlr4.Token.EOF;
FusionTablesSqlParser.T__0 = 1;
FusionTablesSqlParser.T__1 = 2;
FusionTablesSqlParser.T__2 = 3;
FusionTablesSqlParser.T__3 = 4;
FusionTablesSqlParser.K_ALTER = 5;
FusionTablesSqlParser.K_AND = 6;
FusionTablesSqlParser.K_OR = 7;
FusionTablesSqlParser.K_AS = 8;
FusionTablesSqlParser.K_ASC = 9;
FusionTablesSqlParser.K_AVERAGE = 10;
FusionTablesSqlParser.K_BY = 11;
FusionTablesSqlParser.K_BETWEEN = 12;
FusionTablesSqlParser.K_CASE = 13;
FusionTablesSqlParser.K_CIRCLE = 14;
FusionTablesSqlParser.K_COLUMN = 15;
FusionTablesSqlParser.K_CONTAINS = 16;
FusionTablesSqlParser.K_COUNT = 17;
FusionTablesSqlParser.K_CREATE = 18;
FusionTablesSqlParser.K_DELETE = 19;
FusionTablesSqlParser.K_DESC = 20;
FusionTablesSqlParser.K_DESCRIBE = 21;
FusionTablesSqlParser.K_DOES = 22;
FusionTablesSqlParser.K_CONTAIN = 23;
FusionTablesSqlParser.K_DROP = 24;
FusionTablesSqlParser.K_ENDS = 25;
FusionTablesSqlParser.K_FROM = 26;
FusionTablesSqlParser.K_GROUP = 27;
FusionTablesSqlParser.K_HAVING = 28;
FusionTablesSqlParser.K_IGNORING = 29;
FusionTablesSqlParser.K_IN = 30;
FusionTablesSqlParser.K_INSERT = 31;
FusionTablesSqlParser.K_INTO = 32;
FusionTablesSqlParser.K_JOIN = 33;
FusionTablesSqlParser.K_LATLNG = 34;
FusionTablesSqlParser.K_LEFT = 35;
FusionTablesSqlParser.K_LIKE = 36;
FusionTablesSqlParser.K_LIMIT = 37;
FusionTablesSqlParser.K_MATCHES = 38;
FusionTablesSqlParser.K_MAXIMUM = 39;
FusionTablesSqlParser.K_MINIMUM = 40;
FusionTablesSqlParser.K_NOT = 41;
FusionTablesSqlParser.K_EQUAL = 42;
FusionTablesSqlParser.K_OF = 43;
FusionTablesSqlParser.K_OFFSET = 44;
FusionTablesSqlParser.K_ON = 45;
FusionTablesSqlParser.K_ORDER = 46;
FusionTablesSqlParser.K_OUTER = 47;
FusionTablesSqlParser.K_RECTANGLE = 48;
FusionTablesSqlParser.K_RENAME = 49;
FusionTablesSqlParser.K_ST_DISTANCE = 50;
FusionTablesSqlParser.K_SELECT = 51;
FusionTablesSqlParser.K_ST_INTERSECTS = 52;
FusionTablesSqlParser.K_SUM = 53;
FusionTablesSqlParser.K_SET = 54;
FusionTablesSqlParser.K_SHOW = 55;
FusionTablesSqlParser.K_STARTS = 56;
FusionTablesSqlParser.K_TABLE = 57;
FusionTablesSqlParser.K_TABLES = 58;
FusionTablesSqlParser.K_TO = 59;
FusionTablesSqlParser.K_UPDATE = 60;
FusionTablesSqlParser.K_VALUES = 61;
FusionTablesSqlParser.K_VIEW = 62;
FusionTablesSqlParser.K_WHERE = 63;
FusionTablesSqlParser.K_WITH = 64;
FusionTablesSqlParser.LT_EQ = 65;
FusionTablesSqlParser.GT_EQ = 66;
FusionTablesSqlParser.GT = 67;
FusionTablesSqlParser.EQ = 68;
FusionTablesSqlParser.LT = 69;
FusionTablesSqlParser.LPAR = 70;
FusionTablesSqlParser.RPAR = 71;
FusionTablesSqlParser.NUMERIC_LITERAL = 72;
FusionTablesSqlParser.STRING_LITERAL = 73;
FusionTablesSqlParser.STRING = 74;
FusionTablesSqlParser.QUOTED_STRING = 75;
FusionTablesSqlParser.SINGLELINE_COMMENT = 76;
FusionTablesSqlParser.MULTILINE_COMMENT = 77;
FusionTablesSqlParser.WHITESPACE = 78;

FusionTablesSqlParser.RULE_fusionTablesSql = 0;
FusionTablesSqlParser.RULE_sql_stmt = 1;
FusionTablesSqlParser.RULE_table_name_in_ddl = 2;
FusionTablesSqlParser.RULE_table_name_in_dml = 3;
FusionTablesSqlParser.RULE_create_table_as_select_stmt = 4;
FusionTablesSqlParser.RULE_describe_stmt = 5;
FusionTablesSqlParser.RULE_show_tables_stmt = 6;
FusionTablesSqlParser.RULE_alter_table_stmt = 7;
FusionTablesSqlParser.RULE_create_view_stmt = 8;
FusionTablesSqlParser.RULE_drop_table_stmt = 9;
FusionTablesSqlParser.RULE_insert_stmt = 10;
FusionTablesSqlParser.RULE_update_stmt = 11;
FusionTablesSqlParser.RULE_column_assignment = 12;
FusionTablesSqlParser.RULE_delete_stmt = 13;
FusionTablesSqlParser.RULE_eq_comparison = 14;
FusionTablesSqlParser.RULE_table_name_with_alias = 15;
FusionTablesSqlParser.RULE_select_stmt = 16;
FusionTablesSqlParser.RULE_ordering_term = 17;
FusionTablesSqlParser.RULE_join_clause = 18;
FusionTablesSqlParser.RULE_result_column = 19;
FusionTablesSqlParser.RULE_qualified_column_name = 20;
FusionTablesSqlParser.RULE_aggregate_exp = 21;
FusionTablesSqlParser.RULE_expr = 22;
FusionTablesSqlParser.RULE_column_name_beginning_expr = 23;
FusionTablesSqlParser.RULE_column_name_in_dml = 24;
FusionTablesSqlParser.RULE_and_or_or = 25;
FusionTablesSqlParser.RULE_geometry = 26;
FusionTablesSqlParser.RULE_circle = 27;
FusionTablesSqlParser.RULE_rectangle = 28;
FusionTablesSqlParser.RULE_coordinate = 29;
FusionTablesSqlParser.RULE_keyword = 30;
FusionTablesSqlParser.RULE_operator_ = 31;
FusionTablesSqlParser.RULE_literal = 32;
FusionTablesSqlParser.RULE_error_message = 33;
FusionTablesSqlParser.RULE_identifier = 34;
FusionTablesSqlParser.RULE_column_alias = 35;
FusionTablesSqlParser.RULE_table_name = 36;
FusionTablesSqlParser.RULE_column_name = 37;
FusionTablesSqlParser.RULE_new_table_name = 38;
FusionTablesSqlParser.RULE_view_name = 39;
FusionTablesSqlParser.RULE_table_alias = 40;
FusionTablesSqlParser.RULE_numeric_literal = 41;
FusionTablesSqlParser.RULE_string_literal = 42;

class FusionTablesSqlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_fusionTablesSql;
    }

	EOF() {
	    return this.getToken(FusionTablesSqlParser.EOF, 0);
	};

	sql_stmt = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Sql_stmtContext);
	    } else {
	        return this.getTypedRuleContext(Sql_stmtContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterFusionTablesSql(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitFusionTablesSql(this);
		}
	}


}



class Sql_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_sql_stmt;
    }

	alter_table_stmt() {
	    return this.getTypedRuleContext(Alter_table_stmtContext,0);
	};

	select_stmt() {
	    return this.getTypedRuleContext(Select_stmtContext,0);
	};

	create_view_stmt() {
	    return this.getTypedRuleContext(Create_view_stmtContext,0);
	};

	create_table_as_select_stmt() {
	    return this.getTypedRuleContext(Create_table_as_select_stmtContext,0);
	};

	delete_stmt() {
	    return this.getTypedRuleContext(Delete_stmtContext,0);
	};

	drop_table_stmt() {
	    return this.getTypedRuleContext(Drop_table_stmtContext,0);
	};

	insert_stmt() {
	    return this.getTypedRuleContext(Insert_stmtContext,0);
	};

	update_stmt() {
	    return this.getTypedRuleContext(Update_stmtContext,0);
	};

	describe_stmt() {
	    return this.getTypedRuleContext(Describe_stmtContext,0);
	};

	show_tables_stmt() {
	    return this.getTypedRuleContext(Show_tables_stmtContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterSql_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitSql_stmt(this);
		}
	}


}



class Table_name_in_ddlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name_in_ddl;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name_in_ddl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name_in_ddl(this);
		}
	}


}



class Table_name_in_dmlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name_in_dml;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name_in_dml(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name_in_dml(this);
		}
	}


}



class Create_table_as_select_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_create_table_as_select_stmt;
    }

	K_CREATE() {
	    return this.getToken(FusionTablesSqlParser.K_CREATE, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCreate_table_as_select_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCreate_table_as_select_stmt(this);
		}
	}


}



class Describe_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_describe_stmt;
    }

	K_DESCRIBE() {
	    return this.getToken(FusionTablesSqlParser.K_DESCRIBE, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterDescribe_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitDescribe_stmt(this);
		}
	}


}



class Show_tables_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_show_tables_stmt;
    }

	K_SHOW() {
	    return this.getToken(FusionTablesSqlParser.K_SHOW, 0);
	};

	K_TABLES() {
	    return this.getToken(FusionTablesSqlParser.K_TABLES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterShow_tables_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitShow_tables_stmt(this);
		}
	}


}



class Alter_table_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_alter_table_stmt;
    }

	K_ALTER() {
	    return this.getToken(FusionTablesSqlParser.K_ALTER, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	K_RENAME() {
	    return this.getToken(FusionTablesSqlParser.K_RENAME, 0);
	};

	K_TO() {
	    return this.getToken(FusionTablesSqlParser.K_TO, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterAlter_table_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitAlter_table_stmt(this);
		}
	}


}



class Create_view_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_create_view_stmt;
    }

	K_CREATE() {
	    return this.getToken(FusionTablesSqlParser.K_CREATE, 0);
	};

	K_VIEW() {
	    return this.getToken(FusionTablesSqlParser.K_VIEW, 0);
	};

	view_name() {
	    return this.getTypedRuleContext(View_nameContext,0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	result_column = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Result_columnContext);
	    } else {
	        return this.getTypedRuleContext(Result_columnContext,i);
	    }
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	table_name_with_alias() {
	    return this.getTypedRuleContext(Table_name_with_aliasContext,0);
	};

	join_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Join_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Join_clauseContext,i);
	    }
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCreate_view_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCreate_view_stmt(this);
		}
	}


}



class Drop_table_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_drop_table_stmt;
    }

	K_DROP() {
	    return this.getToken(FusionTablesSqlParser.K_DROP, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	table_name_in_ddl() {
	    return this.getTypedRuleContext(Table_name_in_ddlContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterDrop_table_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitDrop_table_stmt(this);
		}
	}


}



class Insert_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_insert_stmt;
    }

	K_INSERT() {
	    return this.getToken(FusionTablesSqlParser.K_INSERT, 0);
	};

	K_INTO() {
	    return this.getToken(FusionTablesSqlParser.K_INTO, 0);
	};

	table_name_in_dml() {
	    return this.getTypedRuleContext(Table_name_in_dmlContext,0);
	};

	LPAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FusionTablesSqlParser.LPAR);
	    } else {
	        return this.getToken(FusionTablesSqlParser.LPAR, i);
	    }
	};


	column_name_in_dml = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Column_name_in_dmlContext);
	    } else {
	        return this.getTypedRuleContext(Column_name_in_dmlContext,i);
	    }
	};

	RPAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FusionTablesSqlParser.RPAR);
	    } else {
	        return this.getToken(FusionTablesSqlParser.RPAR, i);
	    }
	};


	K_VALUES() {
	    return this.getToken(FusionTablesSqlParser.K_VALUES, 0);
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
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterInsert_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitInsert_stmt(this);
		}
	}


}



class Update_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_update_stmt;
    }

	K_UPDATE() {
	    return this.getToken(FusionTablesSqlParser.K_UPDATE, 0);
	};

	table_name_in_dml() {
	    return this.getTypedRuleContext(Table_name_in_dmlContext,0);
	};

	K_SET() {
	    return this.getToken(FusionTablesSqlParser.K_SET, 0);
	};

	column_assignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Column_assignmentContext);
	    } else {
	        return this.getTypedRuleContext(Column_assignmentContext,i);
	    }
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	eq_comparison() {
	    return this.getTypedRuleContext(Eq_comparisonContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterUpdate_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitUpdate_stmt(this);
		}
	}


}



class Column_assignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_assignment;
    }

	column_name_in_dml() {
	    return this.getTypedRuleContext(Column_name_in_dmlContext,0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_assignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_assignment(this);
		}
	}


}



class Delete_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_delete_stmt;
    }

	K_DELETE() {
	    return this.getToken(FusionTablesSqlParser.K_DELETE, 0);
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	table_name_in_dml() {
	    return this.getTypedRuleContext(Table_name_in_dmlContext,0);
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	column_name_in_dml() {
	    return this.getTypedRuleContext(Column_name_in_dmlContext,0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterDelete_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitDelete_stmt(this);
		}
	}


}



class Eq_comparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_eq_comparison;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterEq_comparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitEq_comparison(this);
		}
	}


}



class Table_name_with_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name_with_alias;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	table_alias() {
	    return this.getTypedRuleContext(Table_aliasContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name_with_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name_with_alias(this);
		}
	}


}



class Select_stmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_select_stmt;
    }

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	result_column = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Result_columnContext);
	    } else {
	        return this.getTypedRuleContext(Result_columnContext,i);
	    }
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	table_name_with_alias() {
	    return this.getTypedRuleContext(Table_name_with_aliasContext,0);
	};

	join_clause = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Join_clauseContext);
	    } else {
	        return this.getTypedRuleContext(Join_clauseContext,i);
	    }
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	K_GROUP() {
	    return this.getToken(FusionTablesSqlParser.K_GROUP, 0);
	};

	K_BY = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(FusionTablesSqlParser.K_BY);
	    } else {
	        return this.getToken(FusionTablesSqlParser.K_BY, i);
	    }
	};


	qualified_column_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Qualified_column_nameContext);
	    } else {
	        return this.getTypedRuleContext(Qualified_column_nameContext,i);
	    }
	};

	K_ORDER() {
	    return this.getToken(FusionTablesSqlParser.K_ORDER, 0);
	};

	ordering_term = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Ordering_termContext);
	    } else {
	        return this.getTypedRuleContext(Ordering_termContext,i);
	    }
	};

	K_OFFSET() {
	    return this.getToken(FusionTablesSqlParser.K_OFFSET, 0);
	};

	numeric_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Numeric_literalContext);
	    } else {
	        return this.getTypedRuleContext(Numeric_literalContext,i);
	    }
	};

	K_LIMIT() {
	    return this.getToken(FusionTablesSqlParser.K_LIMIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterSelect_stmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitSelect_stmt(this);
		}
	}


}



class Ordering_termContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_ordering_term;
    }

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	K_ST_DISTANCE() {
	    return this.getToken(FusionTablesSqlParser.K_ST_DISTANCE, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	coordinate() {
	    return this.getTypedRuleContext(CoordinateContext,0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	K_ASC() {
	    return this.getToken(FusionTablesSqlParser.K_ASC, 0);
	};

	K_DESC() {
	    return this.getToken(FusionTablesSqlParser.K_DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterOrdering_term(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitOrdering_term(this);
		}
	}


}



class Join_clauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_join_clause;
    }

	K_LEFT() {
	    return this.getToken(FusionTablesSqlParser.K_LEFT, 0);
	};

	K_OUTER() {
	    return this.getToken(FusionTablesSqlParser.K_OUTER, 0);
	};

	K_JOIN() {
	    return this.getToken(FusionTablesSqlParser.K_JOIN, 0);
	};

	table_name_with_alias() {
	    return this.getTypedRuleContext(Table_name_with_aliasContext,0);
	};

	K_ON() {
	    return this.getToken(FusionTablesSqlParser.K_ON, 0);
	};

	qualified_column_name = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Qualified_column_nameContext);
	    } else {
	        return this.getTypedRuleContext(Qualified_column_nameContext,i);
	    }
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterJoin_clause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitJoin_clause(this);
		}
	}


}



class Result_columnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_result_column;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	aggregate_exp() {
	    return this.getTypedRuleContext(Aggregate_expContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterResult_column(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitResult_column(this);
		}
	}


}



class Qualified_column_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_qualified_column_name;
    }

	column_name() {
	    return this.getTypedRuleContext(Column_nameContext,0);
	};

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterQualified_column_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitQualified_column_name(this);
		}
	}


}



class Aggregate_expContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_aggregate_exp;
    }

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	K_SUM() {
	    return this.getToken(FusionTablesSqlParser.K_SUM, 0);
	};

	K_COUNT() {
	    return this.getToken(FusionTablesSqlParser.K_COUNT, 0);
	};

	K_AVERAGE() {
	    return this.getToken(FusionTablesSqlParser.K_AVERAGE, 0);
	};

	K_MAXIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MAXIMUM, 0);
	};

	K_MINIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MINIMUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterAggregate_exp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitAggregate_exp(this);
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
        this.ruleIndex = FusionTablesSqlParser.RULE_expr;
    }

	column_name_beginning_expr() {
	    return this.getTypedRuleContext(Column_name_beginning_exprContext,0);
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

	operator_() {
	    return this.getTypedRuleContext(Operator_Context,0);
	};

	and_or_or() {
	    return this.getTypedRuleContext(And_or_orContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	string_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(String_literalContext);
	    } else {
	        return this.getTypedRuleContext(String_literalContext,i);
	    }
	};

	K_LIKE() {
	    return this.getToken(FusionTablesSqlParser.K_LIKE, 0);
	};

	K_MATCHES() {
	    return this.getToken(FusionTablesSqlParser.K_MATCHES, 0);
	};

	K_STARTS() {
	    return this.getToken(FusionTablesSqlParser.K_STARTS, 0);
	};

	K_WITH() {
	    return this.getToken(FusionTablesSqlParser.K_WITH, 0);
	};

	K_ENDS() {
	    return this.getToken(FusionTablesSqlParser.K_ENDS, 0);
	};

	K_CONTAINS() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAINS, 0);
	};

	K_IGNORING() {
	    return this.getToken(FusionTablesSqlParser.K_IGNORING, 0);
	};

	K_CASE() {
	    return this.getToken(FusionTablesSqlParser.K_CASE, 0);
	};

	K_DOES() {
	    return this.getToken(FusionTablesSqlParser.K_DOES, 0);
	};

	K_NOT() {
	    return this.getToken(FusionTablesSqlParser.K_NOT, 0);
	};

	K_CONTAIN() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAIN, 0);
	};

	K_EQUAL() {
	    return this.getToken(FusionTablesSqlParser.K_EQUAL, 0);
	};

	K_TO() {
	    return this.getToken(FusionTablesSqlParser.K_TO, 0);
	};

	K_IN() {
	    return this.getToken(FusionTablesSqlParser.K_IN, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	K_BETWEEN() {
	    return this.getToken(FusionTablesSqlParser.K_BETWEEN, 0);
	};

	K_AND() {
	    return this.getToken(FusionTablesSqlParser.K_AND, 0);
	};

	K_ST_INTERSECTS() {
	    return this.getToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0);
	};

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	geometry() {
	    return this.getTypedRuleContext(GeometryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitExpr(this);
		}
	}


}



class Column_name_beginning_exprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_name_beginning_expr;
    }

	qualified_column_name() {
	    return this.getTypedRuleContext(Qualified_column_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_name_beginning_expr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_name_beginning_expr(this);
		}
	}


}



class Column_name_in_dmlContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_name_in_dml;
    }

	column_name() {
	    return this.getTypedRuleContext(Column_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_name_in_dml(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_name_in_dml(this);
		}
	}


}



class And_or_orContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_and_or_or;
    }

	K_AND() {
	    return this.getToken(FusionTablesSqlParser.K_AND, 0);
	};

	K_OR() {
	    return this.getToken(FusionTablesSqlParser.K_OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterAnd_or_or(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitAnd_or_or(this);
		}
	}


}



class GeometryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_geometry;
    }

	circle() {
	    return this.getTypedRuleContext(CircleContext,0);
	};

	rectangle() {
	    return this.getTypedRuleContext(RectangleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterGeometry(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitGeometry(this);
		}
	}


}



class CircleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_circle;
    }

	K_CIRCLE() {
	    return this.getToken(FusionTablesSqlParser.K_CIRCLE, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	coordinate() {
	    return this.getTypedRuleContext(CoordinateContext,0);
	};

	numeric_literal() {
	    return this.getTypedRuleContext(Numeric_literalContext,0);
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCircle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCircle(this);
		}
	}


}



class RectangleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_rectangle;
    }

	K_RECTANGLE() {
	    return this.getToken(FusionTablesSqlParser.K_RECTANGLE, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	coordinate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CoordinateContext);
	    } else {
	        return this.getTypedRuleContext(CoordinateContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterRectangle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitRectangle(this);
		}
	}


}



class CoordinateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_coordinate;
    }

	K_LATLNG() {
	    return this.getToken(FusionTablesSqlParser.K_LATLNG, 0);
	};

	LPAR() {
	    return this.getToken(FusionTablesSqlParser.LPAR, 0);
	};

	numeric_literal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Numeric_literalContext);
	    } else {
	        return this.getTypedRuleContext(Numeric_literalContext,i);
	    }
	};

	RPAR() {
	    return this.getToken(FusionTablesSqlParser.RPAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterCoordinate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitCoordinate(this);
		}
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_keyword;
    }

	K_ALTER() {
	    return this.getToken(FusionTablesSqlParser.K_ALTER, 0);
	};

	K_AND() {
	    return this.getToken(FusionTablesSqlParser.K_AND, 0);
	};

	K_OR() {
	    return this.getToken(FusionTablesSqlParser.K_OR, 0);
	};

	K_AS() {
	    return this.getToken(FusionTablesSqlParser.K_AS, 0);
	};

	K_ASC() {
	    return this.getToken(FusionTablesSqlParser.K_ASC, 0);
	};

	K_AVERAGE() {
	    return this.getToken(FusionTablesSqlParser.K_AVERAGE, 0);
	};

	K_BY() {
	    return this.getToken(FusionTablesSqlParser.K_BY, 0);
	};

	K_BETWEEN() {
	    return this.getToken(FusionTablesSqlParser.K_BETWEEN, 0);
	};

	K_CASE() {
	    return this.getToken(FusionTablesSqlParser.K_CASE, 0);
	};

	K_CIRCLE() {
	    return this.getToken(FusionTablesSqlParser.K_CIRCLE, 0);
	};

	K_COLUMN() {
	    return this.getToken(FusionTablesSqlParser.K_COLUMN, 0);
	};

	K_CONTAIN() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAIN, 0);
	};

	K_CONTAINS() {
	    return this.getToken(FusionTablesSqlParser.K_CONTAINS, 0);
	};

	K_COUNT() {
	    return this.getToken(FusionTablesSqlParser.K_COUNT, 0);
	};

	K_CREATE() {
	    return this.getToken(FusionTablesSqlParser.K_CREATE, 0);
	};

	K_DELETE() {
	    return this.getToken(FusionTablesSqlParser.K_DELETE, 0);
	};

	K_DESC() {
	    return this.getToken(FusionTablesSqlParser.K_DESC, 0);
	};

	K_DOES() {
	    return this.getToken(FusionTablesSqlParser.K_DOES, 0);
	};

	K_DROP() {
	    return this.getToken(FusionTablesSqlParser.K_DROP, 0);
	};

	K_ENDS() {
	    return this.getToken(FusionTablesSqlParser.K_ENDS, 0);
	};

	K_EQUAL() {
	    return this.getToken(FusionTablesSqlParser.K_EQUAL, 0);
	};

	K_FROM() {
	    return this.getToken(FusionTablesSqlParser.K_FROM, 0);
	};

	K_GROUP() {
	    return this.getToken(FusionTablesSqlParser.K_GROUP, 0);
	};

	K_HAVING() {
	    return this.getToken(FusionTablesSqlParser.K_HAVING, 0);
	};

	K_IGNORING() {
	    return this.getToken(FusionTablesSqlParser.K_IGNORING, 0);
	};

	K_IN() {
	    return this.getToken(FusionTablesSqlParser.K_IN, 0);
	};

	K_INSERT() {
	    return this.getToken(FusionTablesSqlParser.K_INSERT, 0);
	};

	K_INTO() {
	    return this.getToken(FusionTablesSqlParser.K_INTO, 0);
	};

	K_JOIN() {
	    return this.getToken(FusionTablesSqlParser.K_JOIN, 0);
	};

	K_LATLNG() {
	    return this.getToken(FusionTablesSqlParser.K_LATLNG, 0);
	};

	K_LEFT() {
	    return this.getToken(FusionTablesSqlParser.K_LEFT, 0);
	};

	K_LIKE() {
	    return this.getToken(FusionTablesSqlParser.K_LIKE, 0);
	};

	K_LIMIT() {
	    return this.getToken(FusionTablesSqlParser.K_LIMIT, 0);
	};

	K_MATCHES() {
	    return this.getToken(FusionTablesSqlParser.K_MATCHES, 0);
	};

	K_MAXIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MAXIMUM, 0);
	};

	K_MINIMUM() {
	    return this.getToken(FusionTablesSqlParser.K_MINIMUM, 0);
	};

	K_NOT() {
	    return this.getToken(FusionTablesSqlParser.K_NOT, 0);
	};

	K_OF() {
	    return this.getToken(FusionTablesSqlParser.K_OF, 0);
	};

	K_OFFSET() {
	    return this.getToken(FusionTablesSqlParser.K_OFFSET, 0);
	};

	K_ON() {
	    return this.getToken(FusionTablesSqlParser.K_ON, 0);
	};

	K_ORDER() {
	    return this.getToken(FusionTablesSqlParser.K_ORDER, 0);
	};

	K_OUTER() {
	    return this.getToken(FusionTablesSqlParser.K_OUTER, 0);
	};

	K_RECTANGLE() {
	    return this.getToken(FusionTablesSqlParser.K_RECTANGLE, 0);
	};

	K_RENAME() {
	    return this.getToken(FusionTablesSqlParser.K_RENAME, 0);
	};

	K_SELECT() {
	    return this.getToken(FusionTablesSqlParser.K_SELECT, 0);
	};

	K_SET() {
	    return this.getToken(FusionTablesSqlParser.K_SET, 0);
	};

	K_STARTS() {
	    return this.getToken(FusionTablesSqlParser.K_STARTS, 0);
	};

	K_ST_DISTANCE() {
	    return this.getToken(FusionTablesSqlParser.K_ST_DISTANCE, 0);
	};

	K_ST_INTERSECTS() {
	    return this.getToken(FusionTablesSqlParser.K_ST_INTERSECTS, 0);
	};

	K_SUM() {
	    return this.getToken(FusionTablesSqlParser.K_SUM, 0);
	};

	K_TABLE() {
	    return this.getToken(FusionTablesSqlParser.K_TABLE, 0);
	};

	K_TO() {
	    return this.getToken(FusionTablesSqlParser.K_TO, 0);
	};

	K_UPDATE() {
	    return this.getToken(FusionTablesSqlParser.K_UPDATE, 0);
	};

	K_VALUES() {
	    return this.getToken(FusionTablesSqlParser.K_VALUES, 0);
	};

	K_VIEW() {
	    return this.getToken(FusionTablesSqlParser.K_VIEW, 0);
	};

	K_WHERE() {
	    return this.getToken(FusionTablesSqlParser.K_WHERE, 0);
	};

	K_WITH() {
	    return this.getToken(FusionTablesSqlParser.K_WITH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitKeyword(this);
		}
	}


}



class Operator_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_operator_;
    }

	LT() {
	    return this.getToken(FusionTablesSqlParser.LT, 0);
	};

	LT_EQ() {
	    return this.getToken(FusionTablesSqlParser.LT_EQ, 0);
	};

	GT() {
	    return this.getToken(FusionTablesSqlParser.GT, 0);
	};

	GT_EQ() {
	    return this.getToken(FusionTablesSqlParser.GT_EQ, 0);
	};

	EQ() {
	    return this.getToken(FusionTablesSqlParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterOperator_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitOperator_(this);
		}
	}


}



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
        this.ruleIndex = FusionTablesSqlParser.RULE_literal;
    }

	numeric_literal() {
	    return this.getTypedRuleContext(Numeric_literalContext,0);
	};

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class Error_messageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_error_message;
    }

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterError_message(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitError_message(this);
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
        this.ruleIndex = FusionTablesSqlParser.RULE_identifier;
    }

	string_literal() {
	    return this.getTypedRuleContext(String_literalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitIdentifier(this);
		}
	}


}



class Column_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_alias;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_alias(this);
		}
	}


}



class Table_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_name(this);
		}
	}


}



class Column_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_column_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterColumn_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitColumn_name(this);
		}
	}


}



class New_table_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_new_table_name;
    }

	table_name() {
	    return this.getTypedRuleContext(Table_nameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterNew_table_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitNew_table_name(this);
		}
	}


}



class View_nameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_view_name;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterView_name(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitView_name(this);
		}
	}


}



class Table_aliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_table_alias;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterTable_alias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitTable_alias(this);
		}
	}


}



class Numeric_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_numeric_literal;
    }

	NUMERIC_LITERAL() {
	    return this.getToken(FusionTablesSqlParser.NUMERIC_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterNumeric_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitNumeric_literal(this);
		}
	}


}



class String_literalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FusionTablesSqlParser.RULE_string_literal;
    }

	STRING_LITERAL() {
	    return this.getToken(FusionTablesSqlParser.STRING_LITERAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.enterString_literal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FusionTablesSqlListener ) {
	        listener.exitString_literal(this);
		}
	}


}




FusionTablesSqlParser.FusionTablesSqlContext = FusionTablesSqlContext; 
FusionTablesSqlParser.Sql_stmtContext = Sql_stmtContext; 
FusionTablesSqlParser.Table_name_in_ddlContext = Table_name_in_ddlContext; 
FusionTablesSqlParser.Table_name_in_dmlContext = Table_name_in_dmlContext; 
FusionTablesSqlParser.Create_table_as_select_stmtContext = Create_table_as_select_stmtContext; 
FusionTablesSqlParser.Describe_stmtContext = Describe_stmtContext; 
FusionTablesSqlParser.Show_tables_stmtContext = Show_tables_stmtContext; 
FusionTablesSqlParser.Alter_table_stmtContext = Alter_table_stmtContext; 
FusionTablesSqlParser.Create_view_stmtContext = Create_view_stmtContext; 
FusionTablesSqlParser.Drop_table_stmtContext = Drop_table_stmtContext; 
FusionTablesSqlParser.Insert_stmtContext = Insert_stmtContext; 
FusionTablesSqlParser.Update_stmtContext = Update_stmtContext; 
FusionTablesSqlParser.Column_assignmentContext = Column_assignmentContext; 
FusionTablesSqlParser.Delete_stmtContext = Delete_stmtContext; 
FusionTablesSqlParser.Eq_comparisonContext = Eq_comparisonContext; 
FusionTablesSqlParser.Table_name_with_aliasContext = Table_name_with_aliasContext; 
FusionTablesSqlParser.Select_stmtContext = Select_stmtContext; 
FusionTablesSqlParser.Ordering_termContext = Ordering_termContext; 
FusionTablesSqlParser.Join_clauseContext = Join_clauseContext; 
FusionTablesSqlParser.Result_columnContext = Result_columnContext; 
FusionTablesSqlParser.Qualified_column_nameContext = Qualified_column_nameContext; 
FusionTablesSqlParser.Aggregate_expContext = Aggregate_expContext; 
FusionTablesSqlParser.ExprContext = ExprContext; 
FusionTablesSqlParser.Column_name_beginning_exprContext = Column_name_beginning_exprContext; 
FusionTablesSqlParser.Column_name_in_dmlContext = Column_name_in_dmlContext; 
FusionTablesSqlParser.And_or_orContext = And_or_orContext; 
FusionTablesSqlParser.GeometryContext = GeometryContext; 
FusionTablesSqlParser.CircleContext = CircleContext; 
FusionTablesSqlParser.RectangleContext = RectangleContext; 
FusionTablesSqlParser.CoordinateContext = CoordinateContext; 
FusionTablesSqlParser.KeywordContext = KeywordContext; 
FusionTablesSqlParser.Operator_Context = Operator_Context; 
FusionTablesSqlParser.LiteralContext = LiteralContext; 
FusionTablesSqlParser.Error_messageContext = Error_messageContext; 
FusionTablesSqlParser.IdentifierContext = IdentifierContext; 
FusionTablesSqlParser.Column_aliasContext = Column_aliasContext; 
FusionTablesSqlParser.Table_nameContext = Table_nameContext; 
FusionTablesSqlParser.Column_nameContext = Column_nameContext; 
FusionTablesSqlParser.New_table_nameContext = New_table_nameContext; 
FusionTablesSqlParser.View_nameContext = View_nameContext; 
FusionTablesSqlParser.Table_aliasContext = Table_aliasContext; 
FusionTablesSqlParser.Numeric_literalContext = Numeric_literalContext; 
FusionTablesSqlParser.String_literalContext = String_literalContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
