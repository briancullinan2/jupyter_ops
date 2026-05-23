// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/protobuf/protobuf3/Protobuf3.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Protobuf3Listener from './Protobuf3Listener.js';
import Protobuf3ParserBase from './Protobuf3ParserBase.js';

const serializedATN = [4,1,60,537,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,5,1,128,8,1,
10,1,12,1,131,9,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,3,3,142,8,3,1,3,1,
3,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,
6,3,6,164,8,6,3,6,166,8,6,1,7,1,7,1,8,3,8,171,8,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,3,8,181,8,8,1,8,1,8,1,9,1,9,1,9,5,9,188,8,9,10,9,12,9,191,9,9,
1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,5,12,205,8,12,
10,12,12,12,208,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,
13,220,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,237,8,14,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,
1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,
16,262,8,16,1,17,1,17,1,17,3,17,267,8,17,1,17,1,17,1,18,1,18,1,18,5,18,274,
8,18,10,18,12,18,277,9,18,1,19,1,19,1,19,1,19,3,19,283,8,19,3,19,285,8,19,
1,20,1,20,1,20,5,20,290,8,20,10,20,12,20,293,9,20,1,21,1,21,1,21,1,21,3,
21,299,8,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,5,23,309,8,23,10,23,
12,23,312,9,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,3,24,321,8,24,1,25,1,25,
1,25,3,25,326,8,25,1,25,1,25,3,25,330,8,25,1,25,1,25,1,26,1,26,1,26,1,26,
5,26,338,8,26,10,26,12,26,341,9,26,1,26,1,26,1,27,1,27,1,27,1,27,1,28,1,
28,1,28,1,28,1,28,1,29,1,29,1,29,5,29,357,8,29,10,29,12,29,360,9,29,1,29,
1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,374,8,30,1,31,
1,31,1,31,1,31,1,31,5,31,381,8,31,10,31,12,31,384,9,31,1,31,1,31,1,32,1,
32,1,32,1,32,1,32,1,32,5,32,394,8,32,10,32,12,32,397,9,32,1,32,1,32,1,32,
1,33,1,33,1,33,3,33,405,8,33,1,34,1,34,1,34,1,34,3,34,411,8,34,1,34,1,34,
1,34,1,34,1,34,3,34,418,8,34,1,34,1,34,1,34,1,34,1,34,5,34,425,8,34,10,34,
12,34,428,9,34,1,34,1,34,3,34,432,8,34,1,35,1,35,1,35,3,35,437,8,35,1,35,
1,35,3,35,441,8,35,1,35,1,35,1,35,1,35,3,35,447,8,35,1,36,1,36,1,36,1,36,
1,36,5,36,454,8,36,10,36,12,36,457,9,36,1,36,1,36,1,37,1,37,1,38,1,38,3,
38,465,8,38,1,39,1,39,1,39,5,39,470,8,39,10,39,12,39,473,9,39,1,40,1,40,
1,41,1,41,1,42,1,42,1,43,1,43,1,44,1,44,1,45,1,45,1,46,1,46,1,47,1,47,3,
47,491,8,47,1,47,1,47,1,47,5,47,496,8,47,10,47,12,47,499,9,47,1,47,1,47,
1,48,1,48,3,48,505,8,48,1,48,1,48,1,48,5,48,510,8,48,10,48,12,48,513,9,48,
1,48,1,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,1,
55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,58,0,0,59,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
112,114,116,0,7,1,0,36,37,1,0,3,4,1,0,7,8,1,0,11,22,1,0,51,52,2,0,36,37,
53,53,2,0,1,35,54,54,557,0,118,1,0,0,0,2,121,1,0,0,0,4,134,1,0,0,0,6,139,
1,0,0,0,8,147,1,0,0,0,10,151,1,0,0,0,12,165,1,0,0,0,14,167,1,0,0,0,16,170,
1,0,0,0,18,184,1,0,0,0,20,192,1,0,0,0,22,196,1,0,0,0,24,198,1,0,0,0,26,211,
1,0,0,0,28,223,1,0,0,0,30,240,1,0,0,0,32,261,1,0,0,0,34,263,1,0,0,0,36,270,
1,0,0,0,38,278,1,0,0,0,40,286,1,0,0,0,42,298,1,0,0,0,44,300,1,0,0,0,46,305,
1,0,0,0,48,320,1,0,0,0,50,322,1,0,0,0,52,333,1,0,0,0,54,344,1,0,0,0,56,348,
1,0,0,0,58,353,1,0,0,0,60,373,1,0,0,0,62,375,1,0,0,0,64,387,1,0,0,0,66,404,
1,0,0,0,68,406,1,0,0,0,70,446,1,0,0,0,72,448,1,0,0,0,74,460,1,0,0,0,76,464,
1,0,0,0,78,466,1,0,0,0,80,474,1,0,0,0,82,476,1,0,0,0,84,478,1,0,0,0,86,480,
1,0,0,0,88,482,1,0,0,0,90,484,1,0,0,0,92,486,1,0,0,0,94,488,1,0,0,0,96,502,
1,0,0,0,98,516,1,0,0,0,100,518,1,0,0,0,102,520,1,0,0,0,104,522,1,0,0,0,106,
524,1,0,0,0,108,526,1,0,0,0,110,528,1,0,0,0,112,530,1,0,0,0,114,532,1,0,
0,0,116,534,1,0,0,0,118,119,6,0,-1,0,119,120,3,2,1,0,120,1,1,0,0,0,121,129,
3,4,2,0,122,128,3,6,3,0,123,128,3,8,4,0,124,128,3,10,5,0,125,128,3,42,21,
0,126,128,3,74,37,0,127,122,1,0,0,0,127,123,1,0,0,0,127,124,1,0,0,0,127,
125,1,0,0,0,127,126,1,0,0,0,128,131,1,0,0,0,129,127,1,0,0,0,129,130,1,0,
0,0,130,132,1,0,0,0,131,129,1,0,0,0,132,133,5,0,0,1,133,3,1,0,0,0,134,135,
5,1,0,0,135,136,5,39,0,0,136,137,7,0,0,0,137,138,5,38,0,0,138,5,1,0,0,0,
139,141,5,2,0,0,140,142,7,1,0,0,141,140,1,0,0,0,141,142,1,0,0,0,142,143,
1,0,0,0,143,144,3,100,50,0,144,145,5,38,0,0,145,146,6,3,-1,0,146,7,1,0,0,
0,147,148,5,5,0,0,148,149,3,78,39,0,149,150,5,38,0,0,150,9,1,0,0,0,151,152,
5,6,0,0,152,153,3,12,6,0,153,154,5,39,0,0,154,155,3,70,35,0,155,156,5,38,
0,0,156,11,1,0,0,0,157,166,3,78,39,0,158,159,5,40,0,0,159,160,3,78,39,0,
160,163,5,41,0,0,161,162,5,48,0,0,162,164,3,78,39,0,163,161,1,0,0,0,163,
164,1,0,0,0,164,166,1,0,0,0,165,157,1,0,0,0,165,158,1,0,0,0,166,13,1,0,0,
0,167,168,7,2,0,0,168,15,1,0,0,0,169,171,3,14,7,0,170,169,1,0,0,0,170,171,
1,0,0,0,171,172,1,0,0,0,172,173,3,32,16,0,173,174,3,84,42,0,174,175,5,39,
0,0,175,180,3,22,11,0,176,177,5,42,0,0,177,178,3,18,9,0,178,179,5,43,0,0,
179,181,1,0,0,0,180,176,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,183,
5,38,0,0,183,17,1,0,0,0,184,189,3,20,10,0,185,186,5,49,0,0,186,188,3,20,
10,0,187,185,1,0,0,0,188,191,1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,
19,1,0,0,0,191,189,1,0,0,0,192,193,3,12,6,0,193,194,5,39,0,0,194,195,3,70,
35,0,195,21,1,0,0,0,196,197,3,98,49,0,197,23,1,0,0,0,198,199,5,9,0,0,199,
200,3,86,43,0,200,206,5,44,0,0,201,205,3,10,5,0,202,205,3,26,13,0,203,205,
3,74,37,0,204,201,1,0,0,0,204,202,1,0,0,0,204,203,1,0,0,0,205,208,1,0,0,
0,206,204,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,206,1,0,0,0,209,210,
5,45,0,0,210,25,1,0,0,0,211,212,3,32,16,0,212,213,3,84,42,0,213,214,5,39,
0,0,214,219,3,22,11,0,215,216,5,42,0,0,216,217,3,18,9,0,217,218,5,43,0,0,
218,220,1,0,0,0,219,215,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,222,
5,38,0,0,222,27,1,0,0,0,223,224,5,10,0,0,224,225,5,46,0,0,225,226,3,30,15,
0,226,227,5,49,0,0,227,228,3,32,16,0,228,229,5,47,0,0,229,230,3,88,44,0,
230,231,5,39,0,0,231,236,3,22,11,0,232,233,5,42,0,0,233,234,3,18,9,0,234,
235,5,43,0,0,235,237,1,0,0,0,236,232,1,0,0,0,236,237,1,0,0,0,237,238,1,0,
0,0,238,239,5,38,0,0,239,29,1,0,0,0,240,241,7,3,0,0,241,31,1,0,0,0,242,262,
5,23,0,0,243,262,5,24,0,0,244,262,5,11,0,0,245,262,5,12,0,0,246,262,5,13,
0,0,247,262,5,14,0,0,248,262,5,15,0,0,249,262,5,16,0,0,250,262,5,17,0,0,
251,262,5,18,0,0,252,262,5,19,0,0,253,262,5,20,0,0,254,262,5,21,0,0,255,
262,5,22,0,0,256,262,5,25,0,0,257,258,4,16,0,0,258,262,3,94,47,0,259,260,
4,16,1,0,260,262,3,96,48,0,261,242,1,0,0,0,261,243,1,0,0,0,261,244,1,0,0,
0,261,245,1,0,0,0,261,246,1,0,0,0,261,247,1,0,0,0,261,248,1,0,0,0,261,249,
1,0,0,0,261,250,1,0,0,0,261,251,1,0,0,0,261,252,1,0,0,0,261,253,1,0,0,0,
261,254,1,0,0,0,261,255,1,0,0,0,261,256,1,0,0,0,261,257,1,0,0,0,261,259,
1,0,0,0,262,33,1,0,0,0,263,266,5,26,0,0,264,267,3,36,18,0,265,267,3,40,20,
0,266,264,1,0,0,0,266,265,1,0,0,0,267,268,1,0,0,0,268,269,5,38,0,0,269,35,
1,0,0,0,270,275,3,38,19,0,271,272,5,49,0,0,272,274,3,38,19,0,273,271,1,0,
0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,37,1,0,0,0,277,275,
1,0,0,0,278,284,3,98,49,0,279,282,5,27,0,0,280,283,3,98,49,0,281,283,5,28,
0,0,282,280,1,0,0,0,282,281,1,0,0,0,283,285,1,0,0,0,284,279,1,0,0,0,284,
285,1,0,0,0,285,39,1,0,0,0,286,291,3,100,50,0,287,288,5,49,0,0,288,290,3,
100,50,0,289,287,1,0,0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,
292,41,1,0,0,0,293,291,1,0,0,0,294,299,3,56,28,0,295,299,3,44,22,0,296,299,
3,62,31,0,297,299,3,64,32,0,298,294,1,0,0,0,298,295,1,0,0,0,298,296,1,0,
0,0,298,297,1,0,0,0,299,43,1,0,0,0,300,301,5,29,0,0,301,302,3,82,41,0,302,
303,3,110,55,0,303,304,3,46,23,0,304,45,1,0,0,0,305,306,5,44,0,0,306,310,
3,108,54,0,307,309,3,48,24,0,308,307,1,0,0,0,309,312,1,0,0,0,310,308,1,0,
0,0,310,311,1,0,0,0,311,313,1,0,0,0,312,310,1,0,0,0,313,314,5,45,0,0,314,
315,3,112,56,0,315,47,1,0,0,0,316,321,3,10,5,0,317,321,3,50,25,0,318,321,
3,34,17,0,319,321,3,74,37,0,320,316,1,0,0,0,320,317,1,0,0,0,320,318,1,0,
0,0,320,319,1,0,0,0,321,49,1,0,0,0,322,323,3,76,38,0,323,325,5,39,0,0,324,
326,5,52,0,0,325,324,1,0,0,0,325,326,1,0,0,0,326,327,1,0,0,0,327,329,3,98,
49,0,328,330,3,52,26,0,329,328,1,0,0,0,329,330,1,0,0,0,330,331,1,0,0,0,331,
332,5,38,0,0,332,51,1,0,0,0,333,334,5,42,0,0,334,339,3,54,27,0,335,336,5,
49,0,0,336,338,3,54,27,0,337,335,1,0,0,0,338,341,1,0,0,0,339,337,1,0,0,0,
339,340,1,0,0,0,340,342,1,0,0,0,341,339,1,0,0,0,342,343,5,43,0,0,343,53,
1,0,0,0,344,345,3,12,6,0,345,346,5,39,0,0,346,347,3,70,35,0,347,55,1,0,0,
0,348,349,5,30,0,0,349,350,3,80,40,0,350,351,3,114,57,0,351,352,3,58,29,
0,352,57,1,0,0,0,353,354,5,44,0,0,354,358,3,108,54,0,355,357,3,60,30,0,356,
355,1,0,0,0,357,360,1,0,0,0,358,356,1,0,0,0,358,359,1,0,0,0,359,361,1,0,
0,0,360,358,1,0,0,0,361,362,5,45,0,0,362,363,3,112,56,0,363,59,1,0,0,0,364,
374,3,16,8,0,365,374,3,44,22,0,366,374,3,56,28,0,367,374,3,62,31,0,368,374,
3,10,5,0,369,374,3,24,12,0,370,374,3,28,14,0,371,374,3,34,17,0,372,374,3,
74,37,0,373,364,1,0,0,0,373,365,1,0,0,0,373,366,1,0,0,0,373,367,1,0,0,0,
373,368,1,0,0,0,373,369,1,0,0,0,373,370,1,0,0,0,373,371,1,0,0,0,373,372,
1,0,0,0,374,61,1,0,0,0,375,376,5,32,0,0,376,377,3,94,47,0,377,382,5,44,0,
0,378,381,3,16,8,0,379,381,3,74,37,0,380,378,1,0,0,0,380,379,1,0,0,0,381,
384,1,0,0,0,382,380,1,0,0,0,382,383,1,0,0,0,383,385,1,0,0,0,384,382,1,0,
0,0,385,386,5,45,0,0,386,63,1,0,0,0,387,388,5,31,0,0,388,389,3,90,45,0,389,
390,3,116,58,0,390,391,5,44,0,0,391,395,3,108,54,0,392,394,3,66,33,0,393,
392,1,0,0,0,394,397,1,0,0,0,395,393,1,0,0,0,395,396,1,0,0,0,396,398,1,0,
0,0,397,395,1,0,0,0,398,399,5,45,0,0,399,400,3,112,56,0,400,65,1,0,0,0,401,
405,3,10,5,0,402,405,3,68,34,0,403,405,3,74,37,0,404,401,1,0,0,0,404,402,
1,0,0,0,404,403,1,0,0,0,405,67,1,0,0,0,406,407,5,33,0,0,407,408,3,92,46,
0,408,410,5,40,0,0,409,411,5,34,0,0,410,409,1,0,0,0,410,411,1,0,0,0,411,
412,1,0,0,0,412,413,3,94,47,0,413,414,5,41,0,0,414,415,5,35,0,0,415,417,
5,40,0,0,416,418,5,34,0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,419,1,0,0,
0,419,420,3,94,47,0,420,431,5,41,0,0,421,426,5,44,0,0,422,425,3,10,5,0,423,
425,3,74,37,0,424,422,1,0,0,0,424,423,1,0,0,0,425,428,1,0,0,0,426,424,1,
0,0,0,426,427,1,0,0,0,427,429,1,0,0,0,428,426,1,0,0,0,429,432,5,45,0,0,430,
432,5,38,0,0,431,421,1,0,0,0,431,430,1,0,0,0,432,69,1,0,0,0,433,434,4,35,
2,0,434,447,3,78,39,0,435,437,7,4,0,0,436,435,1,0,0,0,436,437,1,0,0,0,437,
438,1,0,0,0,438,447,3,98,49,0,439,441,7,4,0,0,440,439,1,0,0,0,440,441,1,
0,0,0,441,442,1,0,0,0,442,447,3,104,52,0,443,447,3,100,50,0,444,447,3,102,
51,0,445,447,3,72,36,0,446,433,1,0,0,0,446,436,1,0,0,0,446,440,1,0,0,0,446,
443,1,0,0,0,446,444,1,0,0,0,446,445,1,0,0,0,447,71,1,0,0,0,448,455,5,44,
0,0,449,450,3,76,38,0,450,451,5,50,0,0,451,452,3,70,35,0,452,454,1,0,0,0,
453,449,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,0,456,458,
1,0,0,0,457,455,1,0,0,0,458,459,5,45,0,0,459,73,1,0,0,0,460,461,5,38,0,0,
461,75,1,0,0,0,462,465,5,57,0,0,463,465,3,106,53,0,464,462,1,0,0,0,464,463,
1,0,0,0,465,77,1,0,0,0,466,471,3,76,38,0,467,468,5,48,0,0,468,470,3,76,38,
0,469,467,1,0,0,0,470,473,1,0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,79,
1,0,0,0,473,471,1,0,0,0,474,475,3,76,38,0,475,81,1,0,0,0,476,477,3,76,38,
0,477,83,1,0,0,0,478,479,3,76,38,0,479,85,1,0,0,0,480,481,3,76,38,0,481,
87,1,0,0,0,482,483,3,76,38,0,483,89,1,0,0,0,484,485,3,76,38,0,485,91,1,0,
0,0,486,487,3,76,38,0,487,93,1,0,0,0,488,490,4,47,3,0,489,491,5,48,0,0,490,
489,1,0,0,0,490,491,1,0,0,0,491,497,1,0,0,0,492,493,3,76,38,0,493,494,5,
48,0,0,494,496,1,0,0,0,495,492,1,0,0,0,496,499,1,0,0,0,497,495,1,0,0,0,497,
498,1,0,0,0,498,500,1,0,0,0,499,497,1,0,0,0,500,501,3,80,40,0,501,95,1,0,
0,0,502,504,4,48,4,0,503,505,5,48,0,0,504,503,1,0,0,0,504,505,1,0,0,0,505,
511,1,0,0,0,506,507,3,76,38,0,507,508,5,48,0,0,508,510,1,0,0,0,509,506,1,
0,0,0,510,513,1,0,0,0,511,509,1,0,0,0,511,512,1,0,0,0,512,514,1,0,0,0,513,
511,1,0,0,0,514,515,3,82,41,0,515,97,1,0,0,0,516,517,5,56,0,0,517,99,1,0,
0,0,518,519,7,5,0,0,519,101,1,0,0,0,520,521,5,54,0,0,521,103,1,0,0,0,522,
523,5,55,0,0,523,105,1,0,0,0,524,525,7,6,0,0,525,107,1,0,0,0,526,527,6,54,
-1,0,527,109,1,0,0,0,528,529,6,55,-1,0,529,111,1,0,0,0,530,531,6,56,-1,0,
531,113,1,0,0,0,532,533,6,57,-1,0,533,115,1,0,0,0,534,535,6,58,-1,0,535,
117,1,0,0,0,45,127,129,141,163,165,170,180,189,204,206,219,236,261,266,275,
282,284,291,298,310,320,325,329,339,358,373,380,382,395,404,410,417,424,
426,431,436,440,446,455,464,471,490,497,504,511];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Protobuf3Parser extends Protobuf3ParserBase {

    static grammarFileName = "Protobuf3.g4";
    static literalNames = [ null, "'syntax'", "'import'", "'weak'", "'public'", 
                            "'package'", "'option'", "'optional'", "'repeated'", 
                            "'oneof'", "'map'", "'int32'", "'int64'", "'uint32'", 
                            "'uint64'", "'sint32'", "'sint64'", "'fixed32'", 
                            "'fixed64'", "'sfixed32'", "'sfixed64'", "'bool'", 
                            "'string'", "'double'", "'float'", "'bytes'", 
                            "'reserved'", "'to'", "'max'", "'enum'", "'message'", 
                            "'service'", "'extend'", "'rpc'", "'stream'", 
                            "'returns'", "'\"proto3\"'", "''proto3''", "';'", 
                            "'='", "'('", "')'", "'['", "']'", "'{'", "'}'", 
                            "'<'", "'>'", "'.'", "','", "':'", "'+'", "'-'" ];
    static symbolicNames = [ null, "SYNTAX", "IMPORT", "WEAK", "PUBLIC", 
                             "PACKAGE", "OPTION", "OPTIONAL", "REPEATED", 
                             "ONEOF", "MAP", "INT32", "INT64", "UINT32", 
                             "UINT64", "SINT32", "SINT64", "FIXED32", "FIXED64", 
                             "SFIXED32", "SFIXED64", "BOOL", "STRING", "DOUBLE", 
                             "FLOAT", "BYTES", "RESERVED", "TO", "MAX", 
                             "ENUM", "MESSAGE", "SERVICE", "EXTEND", "RPC", 
                             "STREAM", "RETURNS", "PROTO3_LIT_SINGLE", "PROTO3_LIT_DOUBLE", 
                             "SEMI", "EQ", "LP", "RP", "LB", "RB", "LC", 
                             "RC", "LT", "GT", "DOT", "COMMA", "COLON", 
                             "PLUS", "MINUS", "STR_LIT", "BOOL_LIT", "FLOAT_LIT", 
                             "INT_LIT", "IDENTIFIER", "WS", "LINE_COMMENT", 
                             "COMMENT" ];
    static ruleNames = [ "twoPassParse", "proto", "syntax", "importStatement", 
                         "packageStatement", "optionStatement", "optionName", 
                         "fieldLabel", "field", "fieldOptions", "fieldOption", 
                         "fieldNumber", "oneof", "oneofField", "mapField", 
                         "keyType", "type_", "reserved", "ranges", "range_", 
                         "reservedFieldNames", "topLevelDef", "enumDef", 
                         "enumBody", "enumElement", "enumField", "enumValueOptions", 
                         "enumValueOption", "messageDef", "messageBody", 
                         "messageElement", "extendDef", "serviceDef", "serviceElement", 
                         "rpc", "constant", "blockLit", "emptyStatement_", 
                         "ident", "fullIdent", "messageName", "enumName", 
                         "fieldName", "oneofName", "mapName", "serviceName", 
                         "rpcName", "messageType", "enumType", "intLit", 
                         "strLit", "boolLit", "floatLit", "keywords", "doEnterBlock", 
                         "doEnumNameDef", "doExitBlock", "doMessageNameDef", 
                         "doServiceNameDef" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Protobuf3Parser.ruleNames;
        this.literalNames = Protobuf3Parser.literalNames;
        this.symbolicNames = Protobuf3Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 16:
    	    		return this.type__sempred(localctx, predIndex);
    	case 35:
    	    		return this.constant_sempred(localctx, predIndex);
    	case 47:
    	    		return this.messageType_sempred(localctx, predIndex);
    	case 48:
    	    		return this.enumType_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    type__sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return  this.IsNotKeyword() ;
    		case 1:
    			return  this.IsNotKeyword() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    constant_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return  this.IsNotKeyword() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    messageType_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return  this.IsMessageType_() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    enumType_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 4:
    			return  this.IsEnumType_() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	twoPassParse() {
	    let localctx = new TwoPassParseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Protobuf3Parser.RULE_twoPassParse);
	    try {
	        this.enterOuterAlt(localctx, 1);
	         this.DoRewind(); 
	        this.state = 119;
	        this.proto();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	proto() {
	    let localctx = new ProtoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Protobuf3Parser.RULE_proto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 121;
	        this.syntax();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096484) !== 0) || _la===32 || _la===38) {
	            this.state = 127;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 2:
	                this.state = 122;
	                this.importStatement();
	                break;
	            case 5:
	                this.state = 123;
	                this.packageStatement();
	                break;
	            case 6:
	                this.state = 124;
	                this.optionStatement();
	                break;
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	                this.state = 125;
	                this.topLevelDef();
	                break;
	            case 38:
	                this.state = 126;
	                this.emptyStatement_();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 132;
	        this.match(Protobuf3Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	syntax() {
	    let localctx = new SyntaxContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Protobuf3Parser.RULE_syntax);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 134;
	        this.match(Protobuf3Parser.SYNTAX);
	        this.state = 135;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 136;
	        _la = this._input.LA(1);
	        if(!(_la===36 || _la===37)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 137;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStatement() {
	    let localctx = new ImportStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Protobuf3Parser.RULE_importStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 139;
	        this.match(Protobuf3Parser.IMPORT);
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3 || _la===4) {
	            this.state = 140;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 143;
	        this.strLit();
	        this.state = 144;
	        this.match(Protobuf3Parser.SEMI);
	         this.DoImportStatement_(); 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	packageStatement() {
	    let localctx = new PackageStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Protobuf3Parser.RULE_packageStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(Protobuf3Parser.PACKAGE);
	        this.state = 148;
	        this.fullIdent();
	        this.state = 149;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionStatement() {
	    let localctx = new OptionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Protobuf3Parser.RULE_optionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(Protobuf3Parser.OPTION);
	        this.state = 152;
	        this.optionName();
	        this.state = 153;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 154;
	        this.constant();
	        this.state = 155;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	optionName() {
	    let localctx = new OptionNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Protobuf3Parser.RULE_optionName);
	    var _la = 0;
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 54:
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 157;
	            this.fullIdent();
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 158;
	            this.match(Protobuf3Parser.LP);
	            this.state = 159;
	            this.fullIdent();
	            this.state = 160;
	            this.match(Protobuf3Parser.RP);
	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 161;
	                this.match(Protobuf3Parser.DOT);
	                this.state = 162;
	                this.fullIdent();
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



	fieldLabel() {
	    let localctx = new FieldLabelContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, Protobuf3Parser.RULE_fieldLabel);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        _la = this._input.LA(1);
	        if(!(_la===7 || _la===8)) {
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, Protobuf3Parser.RULE_field);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 169;
	            this.fieldLabel();

	        }
	        this.state = 172;
	        this.type_();
	        this.state = 173;
	        this.fieldName();
	        this.state = 174;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 175;
	        this.fieldNumber();
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 176;
	            this.match(Protobuf3Parser.LB);
	            this.state = 177;
	            this.fieldOptions();
	            this.state = 178;
	            this.match(Protobuf3Parser.RB);
	        }

	        this.state = 182;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldOptions() {
	    let localctx = new FieldOptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, Protobuf3Parser.RULE_fieldOptions);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.fieldOption();
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 185;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 186;
	            this.fieldOption();
	            this.state = 191;
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



	fieldOption() {
	    let localctx = new FieldOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, Protobuf3Parser.RULE_fieldOption);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.optionName();
	        this.state = 193;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 194;
	        this.constant();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldNumber() {
	    let localctx = new FieldNumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, Protobuf3Parser.RULE_fieldNumber);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.intLit();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oneof() {
	    let localctx = new OneofContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, Protobuf3Parser.RULE_oneof);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this.match(Protobuf3Parser.ONEOF);
	        this.state = 199;
	        this.oneofName();
	        this.state = 200;
	        this.match(Protobuf3Parser.LC);
	        this.state = 206;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 204;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 201;
	                    this.optionStatement();
	                    break;

	                case 2:
	                    this.state = 202;
	                    this.oneofField();
	                    break;

	                case 3:
	                    this.state = 203;
	                    this.emptyStatement_();
	                    break;

	                } 
	            }
	            this.state = 208;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	        }

	        this.state = 209;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	oneofField() {
	    let localctx = new OneofFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, Protobuf3Parser.RULE_oneofField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 211;
	        this.type_();
	        this.state = 212;
	        this.fieldName();
	        this.state = 213;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 214;
	        this.fieldNumber();
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 215;
	            this.match(Protobuf3Parser.LB);
	            this.state = 216;
	            this.fieldOptions();
	            this.state = 217;
	            this.match(Protobuf3Parser.RB);
	        }

	        this.state = 221;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapField() {
	    let localctx = new MapFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, Protobuf3Parser.RULE_mapField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.match(Protobuf3Parser.MAP);
	        this.state = 224;
	        this.match(Protobuf3Parser.LT);
	        this.state = 225;
	        this.keyType();
	        this.state = 226;
	        this.match(Protobuf3Parser.COMMA);
	        this.state = 227;
	        this.type_();
	        this.state = 228;
	        this.match(Protobuf3Parser.GT);
	        this.state = 229;
	        this.mapName();
	        this.state = 230;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 231;
	        this.fieldNumber();
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 232;
	            this.match(Protobuf3Parser.LB);
	            this.state = 233;
	            this.fieldOptions();
	            this.state = 234;
	            this.match(Protobuf3Parser.RB);
	        }

	        this.state = 238;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyType() {
	    let localctx = new KeyTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, Protobuf3Parser.RULE_keyType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 8386560) !== 0))) {
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



	type_() {
	    let localctx = new Type_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, Protobuf3Parser.RULE_type_);
	    try {
	        this.state = 261;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 242;
	            this.match(Protobuf3Parser.DOUBLE);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 243;
	            this.match(Protobuf3Parser.FLOAT);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 244;
	            this.match(Protobuf3Parser.INT32);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 245;
	            this.match(Protobuf3Parser.INT64);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 246;
	            this.match(Protobuf3Parser.UINT32);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 247;
	            this.match(Protobuf3Parser.UINT64);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 248;
	            this.match(Protobuf3Parser.SINT32);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 249;
	            this.match(Protobuf3Parser.SINT64);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 250;
	            this.match(Protobuf3Parser.FIXED32);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 251;
	            this.match(Protobuf3Parser.FIXED64);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 252;
	            this.match(Protobuf3Parser.SFIXED32);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 253;
	            this.match(Protobuf3Parser.SFIXED64);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 254;
	            this.match(Protobuf3Parser.BOOL);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 255;
	            this.match(Protobuf3Parser.STRING);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 256;
	            this.match(Protobuf3Parser.BYTES);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 257;
	            if (!(  this.IsNotKeyword() )) {
	                throw new antlr4.error.FailedPredicateException(this, " this.IsNotKeyword() ");
	            }
	            this.state = 258;
	            this.messageType();
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 259;
	            if (!(  this.IsNotKeyword() )) {
	                throw new antlr4.error.FailedPredicateException(this, " this.IsNotKeyword() ");
	            }
	            this.state = 260;
	            this.enumType();
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



	reserved() {
	    let localctx = new ReservedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, Protobuf3Parser.RULE_reserved);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(Protobuf3Parser.RESERVED);
	        this.state = 266;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 56:
	            this.state = 264;
	            this.ranges();
	            break;
	        case 36:
	        case 37:
	        case 53:
	            this.state = 265;
	            this.reservedFieldNames();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 268;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ranges() {
	    let localctx = new RangesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, Protobuf3Parser.RULE_ranges);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.range_();
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 271;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 272;
	            this.range_();
	            this.state = 277;
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



	range_() {
	    let localctx = new Range_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, Protobuf3Parser.RULE_range_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.intLit();
	        this.state = 284;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===27) {
	            this.state = 279;
	            this.match(Protobuf3Parser.TO);
	            this.state = 282;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 56:
	                this.state = 280;
	                this.intLit();
	                break;
	            case 28:
	                this.state = 281;
	                this.match(Protobuf3Parser.MAX);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	reservedFieldNames() {
	    let localctx = new ReservedFieldNamesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, Protobuf3Parser.RULE_reservedFieldNames);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.strLit();
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 287;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 288;
	            this.strLit();
	            this.state = 293;
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



	topLevelDef() {
	    let localctx = new TopLevelDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, Protobuf3Parser.RULE_topLevelDef);
	    try {
	        this.state = 298;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            this.messageDef();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            this.enumDef();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 296;
	            this.extendDef();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 297;
	            this.serviceDef();
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



	enumDef() {
	    let localctx = new EnumDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, Protobuf3Parser.RULE_enumDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(Protobuf3Parser.ENUM);
	        this.state = 301;
	        this.enumName();
	        this.state = 302;
	        this.doEnumNameDef();
	        this.state = 303;
	        this.enumBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumBody() {
	    let localctx = new EnumBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, Protobuf3Parser.RULE_enumBody);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.match(Protobuf3Parser.LC);
	        this.state = 306;
	        this.doEnterBlock();
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 37748815) !== 0)) {
	            this.state = 307;
	            this.enumElement();
	            this.state = 312;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 313;
	        this.match(Protobuf3Parser.RC);
	        this.state = 314;
	        this.doExitBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumElement() {
	    let localctx = new EnumElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, Protobuf3Parser.RULE_enumElement);
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 316;
	            this.optionStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 317;
	            this.enumField();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 318;
	            this.reserved();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 319;
	            this.emptyStatement_();
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



	enumField() {
	    let localctx = new EnumFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, Protobuf3Parser.RULE_enumField);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.ident();
	        this.state = 323;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 325;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===52) {
	            this.state = 324;
	            this.match(Protobuf3Parser.MINUS);
	        }

	        this.state = 327;
	        this.intLit();
	        this.state = 329;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 328;
	            this.enumValueOptions();
	        }

	        this.state = 331;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValueOptions() {
	    let localctx = new EnumValueOptionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, Protobuf3Parser.RULE_enumValueOptions);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this.match(Protobuf3Parser.LB);
	        this.state = 334;
	        this.enumValueOption();
	        this.state = 339;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===49) {
	            this.state = 335;
	            this.match(Protobuf3Parser.COMMA);
	            this.state = 336;
	            this.enumValueOption();
	            this.state = 341;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 342;
	        this.match(Protobuf3Parser.RB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValueOption() {
	    let localctx = new EnumValueOptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, Protobuf3Parser.RULE_enumValueOption);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.optionName();
	        this.state = 345;
	        this.match(Protobuf3Parser.EQ);
	        this.state = 346;
	        this.constant();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	messageDef() {
	    let localctx = new MessageDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, Protobuf3Parser.RULE_messageDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.match(Protobuf3Parser.MESSAGE);
	        this.state = 349;
	        this.messageName();
	        this.state = 350;
	        this.doMessageNameDef();
	        this.state = 351;
	        this.messageBody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	messageBody() {
	    let localctx = new MessageBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, Protobuf3Parser.RULE_messageBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 353;
	        this.match(Protobuf3Parser.LC);
	        this.state = 354;
	        this.doEnterBlock();
	        this.state = 358;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 355;
	                this.messageElement(); 
	            }
	            this.state = 360;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	        this.state = 361;
	        this.match(Protobuf3Parser.RC);
	        this.state = 362;
	        this.doExitBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	messageElement() {
	    let localctx = new MessageElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, Protobuf3Parser.RULE_messageElement);
	    try {
	        this.state = 373;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 364;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 365;
	            this.enumDef();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 366;
	            this.messageDef();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 367;
	            this.extendDef();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 368;
	            this.optionStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 369;
	            this.oneof();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 370;
	            this.mapField();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 371;
	            this.reserved();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 372;
	            this.emptyStatement_();
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



	extendDef() {
	    let localctx = new ExtendDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, Protobuf3Parser.RULE_extendDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 375;
	        this.match(Protobuf3Parser.EXTEND);
	        this.state = 376;
	        this.messageType();
	        this.state = 377;
	        this.match(Protobuf3Parser.LC);
	        this.state = 382;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,27,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 380;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,26,this._ctx);
	                switch(la_) {
	                case 1:
	                    this.state = 378;
	                    this.field();
	                    break;

	                case 2:
	                    this.state = 379;
	                    this.emptyStatement_();
	                    break;

	                } 
	            }
	            this.state = 384;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,27,this._ctx);
	        }

	        this.state = 385;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	serviceDef() {
	    let localctx = new ServiceDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, Protobuf3Parser.RULE_serviceDef);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 387;
	        this.match(Protobuf3Parser.SERVICE);
	        this.state = 388;
	        this.serviceName();
	        this.state = 389;
	        this.doServiceNameDef();
	        this.state = 390;
	        this.match(Protobuf3Parser.LC);
	        this.state = 391;
	        this.doEnterBlock();
	        this.state = 395;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6 || _la===33 || _la===38) {
	            this.state = 392;
	            this.serviceElement();
	            this.state = 397;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 398;
	        this.match(Protobuf3Parser.RC);
	        this.state = 399;
	        this.doExitBlock();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	serviceElement() {
	    let localctx = new ServiceElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, Protobuf3Parser.RULE_serviceElement);
	    try {
	        this.state = 404;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 401;
	            this.optionStatement();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 402;
	            this.rpc();
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 403;
	            this.emptyStatement_();
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



	rpc() {
	    let localctx = new RpcContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, Protobuf3Parser.RULE_rpc);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(Protobuf3Parser.RPC);
	        this.state = 407;
	        this.rpcName();
	        this.state = 408;
	        this.match(Protobuf3Parser.LP);
	        this.state = 410;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        if(la_===1) {
	            this.state = 409;
	            this.match(Protobuf3Parser.STREAM);

	        }
	        this.state = 412;
	        this.messageType();
	        this.state = 413;
	        this.match(Protobuf3Parser.RP);
	        this.state = 414;
	        this.match(Protobuf3Parser.RETURNS);
	        this.state = 415;
	        this.match(Protobuf3Parser.LP);
	        this.state = 417;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        if(la_===1) {
	            this.state = 416;
	            this.match(Protobuf3Parser.STREAM);

	        }
	        this.state = 419;
	        this.messageType();
	        this.state = 420;
	        this.match(Protobuf3Parser.RP);
	        this.state = 431;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.state = 421;
	            this.match(Protobuf3Parser.LC);
	            this.state = 426;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6 || _la===38) {
	                this.state = 424;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 6:
	                    this.state = 422;
	                    this.optionStatement();
	                    break;
	                case 38:
	                    this.state = 423;
	                    this.emptyStatement_();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                }
	                this.state = 428;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 429;
	            this.match(Protobuf3Parser.RC);
	            break;
	        case 38:
	            this.state = 430;
	            this.match(Protobuf3Parser.SEMI);
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



	constant() {
	    let localctx = new ConstantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, Protobuf3Parser.RULE_constant);
	    var _la = 0;
	    try {
	        this.state = 446;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 433;
	            if (!(  this.IsNotKeyword() )) {
	                throw new antlr4.error.FailedPredicateException(this, " this.IsNotKeyword() ");
	            }
	            this.state = 434;
	            this.fullIdent();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 436;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51 || _la===52) {
	                this.state = 435;
	                _la = this._input.LA(1);
	                if(!(_la===51 || _la===52)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 438;
	            this.intLit();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 440;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51 || _la===52) {
	                this.state = 439;
	                _la = this._input.LA(1);
	                if(!(_la===51 || _la===52)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	            }

	            this.state = 442;
	            this.floatLit();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 443;
	            this.strLit();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 444;
	            this.boolLit();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 445;
	            this.blockLit();
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



	blockLit() {
	    let localctx = new BlockLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, Protobuf3Parser.RULE_blockLit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(Protobuf3Parser.LC);
	        this.state = 455;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 37748751) !== 0)) {
	            this.state = 449;
	            this.ident();
	            this.state = 450;
	            this.match(Protobuf3Parser.COLON);
	            this.state = 451;
	            this.constant();
	            this.state = 457;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 458;
	        this.match(Protobuf3Parser.RC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emptyStatement_() {
	    let localctx = new EmptyStatement_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, Protobuf3Parser.RULE_emptyStatement_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        this.match(Protobuf3Parser.SEMI);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ident() {
	    let localctx = new IdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, Protobuf3Parser.RULE_ident);
	    try {
	        this.state = 464;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 57:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 462;
	            this.match(Protobuf3Parser.IDENTIFIER);
	            break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 5:
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	        case 10:
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	        case 18:
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 463;
	            this.keywords();
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



	fullIdent() {
	    let localctx = new FullIdentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, Protobuf3Parser.RULE_fullIdent);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 466;
	        this.ident();
	        this.state = 471;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===48) {
	            this.state = 467;
	            this.match(Protobuf3Parser.DOT);
	            this.state = 468;
	            this.ident();
	            this.state = 473;
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



	messageName() {
	    let localctx = new MessageNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, Protobuf3Parser.RULE_messageName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 474;
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



	enumName() {
	    let localctx = new EnumNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, Protobuf3Parser.RULE_enumName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 476;
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



	fieldName() {
	    let localctx = new FieldNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, Protobuf3Parser.RULE_fieldName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 478;
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



	oneofName() {
	    let localctx = new OneofNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, Protobuf3Parser.RULE_oneofName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 480;
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



	mapName() {
	    let localctx = new MapNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, Protobuf3Parser.RULE_mapName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 482;
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



	serviceName() {
	    let localctx = new ServiceNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, Protobuf3Parser.RULE_serviceName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 484;
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



	rpcName() {
	    let localctx = new RpcNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, Protobuf3Parser.RULE_rpcName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 486;
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



	messageType() {
	    let localctx = new MessageTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, Protobuf3Parser.RULE_messageType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        if (!(  this.IsMessageType_() )) {
	            throw new antlr4.error.FailedPredicateException(this, " this.IsMessageType_() ");
	        }
	        this.state = 490;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 489;
	            this.match(Protobuf3Parser.DOT);
	        }

	        this.state = 497;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 492;
	                this.ident();
	                this.state = 493;
	                this.match(Protobuf3Parser.DOT); 
	            }
	            this.state = 499;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	        }

	        this.state = 500;
	        this.messageName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumType() {
	    let localctx = new EnumTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, Protobuf3Parser.RULE_enumType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 502;
	        if (!(  this.IsEnumType_() )) {
	            throw new antlr4.error.FailedPredicateException(this, " this.IsEnumType_() ");
	        }
	        this.state = 504;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===48) {
	            this.state = 503;
	            this.match(Protobuf3Parser.DOT);
	        }

	        this.state = 511;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,44,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 506;
	                this.ident();
	                this.state = 507;
	                this.match(Protobuf3Parser.DOT); 
	            }
	            this.state = 513;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,44,this._ctx);
	        }

	        this.state = 514;
	        this.enumName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intLit() {
	    let localctx = new IntLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, Protobuf3Parser.RULE_intLit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 516;
	        this.match(Protobuf3Parser.INT_LIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	strLit() {
	    let localctx = new StrLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, Protobuf3Parser.RULE_strLit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 518;
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 131075) !== 0))) {
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



	boolLit() {
	    let localctx = new BoolLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, Protobuf3Parser.RULE_boolLit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this.match(Protobuf3Parser.BOOL_LIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floatLit() {
	    let localctx = new FloatLitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, Protobuf3Parser.RULE_floatLit);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
	        this.match(Protobuf3Parser.FLOAT_LIT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keywords() {
	    let localctx = new KeywordsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, Protobuf3Parser.RULE_keywords);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 524;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967294) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4194319) !== 0))) {
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



	doEnterBlock() {
	    let localctx = new DoEnterBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, Protobuf3Parser.RULE_doEnterBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	         this.DoEnterBlock_(); 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doEnumNameDef() {
	    let localctx = new DoEnumNameDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, Protobuf3Parser.RULE_doEnumNameDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	         this.DoEnumNameDef_(); 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doExitBlock() {
	    let localctx = new DoExitBlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, Protobuf3Parser.RULE_doExitBlock);
	    try {
	        this.enterOuterAlt(localctx, 1);
	         this.DoExitBlock_(); 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doMessageNameDef() {
	    let localctx = new DoMessageNameDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, Protobuf3Parser.RULE_doMessageNameDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	         this.DoMessageNameDef_(); 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	doServiceNameDef() {
	    let localctx = new DoServiceNameDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, Protobuf3Parser.RULE_doServiceNameDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	         this.DoServiceNameDef_(); 
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

Protobuf3Parser.EOF = antlr4.Token.EOF;
Protobuf3Parser.SYNTAX = 1;
Protobuf3Parser.IMPORT = 2;
Protobuf3Parser.WEAK = 3;
Protobuf3Parser.PUBLIC = 4;
Protobuf3Parser.PACKAGE = 5;
Protobuf3Parser.OPTION = 6;
Protobuf3Parser.OPTIONAL = 7;
Protobuf3Parser.REPEATED = 8;
Protobuf3Parser.ONEOF = 9;
Protobuf3Parser.MAP = 10;
Protobuf3Parser.INT32 = 11;
Protobuf3Parser.INT64 = 12;
Protobuf3Parser.UINT32 = 13;
Protobuf3Parser.UINT64 = 14;
Protobuf3Parser.SINT32 = 15;
Protobuf3Parser.SINT64 = 16;
Protobuf3Parser.FIXED32 = 17;
Protobuf3Parser.FIXED64 = 18;
Protobuf3Parser.SFIXED32 = 19;
Protobuf3Parser.SFIXED64 = 20;
Protobuf3Parser.BOOL = 21;
Protobuf3Parser.STRING = 22;
Protobuf3Parser.DOUBLE = 23;
Protobuf3Parser.FLOAT = 24;
Protobuf3Parser.BYTES = 25;
Protobuf3Parser.RESERVED = 26;
Protobuf3Parser.TO = 27;
Protobuf3Parser.MAX = 28;
Protobuf3Parser.ENUM = 29;
Protobuf3Parser.MESSAGE = 30;
Protobuf3Parser.SERVICE = 31;
Protobuf3Parser.EXTEND = 32;
Protobuf3Parser.RPC = 33;
Protobuf3Parser.STREAM = 34;
Protobuf3Parser.RETURNS = 35;
Protobuf3Parser.PROTO3_LIT_SINGLE = 36;
Protobuf3Parser.PROTO3_LIT_DOUBLE = 37;
Protobuf3Parser.SEMI = 38;
Protobuf3Parser.EQ = 39;
Protobuf3Parser.LP = 40;
Protobuf3Parser.RP = 41;
Protobuf3Parser.LB = 42;
Protobuf3Parser.RB = 43;
Protobuf3Parser.LC = 44;
Protobuf3Parser.RC = 45;
Protobuf3Parser.LT = 46;
Protobuf3Parser.GT = 47;
Protobuf3Parser.DOT = 48;
Protobuf3Parser.COMMA = 49;
Protobuf3Parser.COLON = 50;
Protobuf3Parser.PLUS = 51;
Protobuf3Parser.MINUS = 52;
Protobuf3Parser.STR_LIT = 53;
Protobuf3Parser.BOOL_LIT = 54;
Protobuf3Parser.FLOAT_LIT = 55;
Protobuf3Parser.INT_LIT = 56;
Protobuf3Parser.IDENTIFIER = 57;
Protobuf3Parser.WS = 58;
Protobuf3Parser.LINE_COMMENT = 59;
Protobuf3Parser.COMMENT = 60;

Protobuf3Parser.RULE_twoPassParse = 0;
Protobuf3Parser.RULE_proto = 1;
Protobuf3Parser.RULE_syntax = 2;
Protobuf3Parser.RULE_importStatement = 3;
Protobuf3Parser.RULE_packageStatement = 4;
Protobuf3Parser.RULE_optionStatement = 5;
Protobuf3Parser.RULE_optionName = 6;
Protobuf3Parser.RULE_fieldLabel = 7;
Protobuf3Parser.RULE_field = 8;
Protobuf3Parser.RULE_fieldOptions = 9;
Protobuf3Parser.RULE_fieldOption = 10;
Protobuf3Parser.RULE_fieldNumber = 11;
Protobuf3Parser.RULE_oneof = 12;
Protobuf3Parser.RULE_oneofField = 13;
Protobuf3Parser.RULE_mapField = 14;
Protobuf3Parser.RULE_keyType = 15;
Protobuf3Parser.RULE_type_ = 16;
Protobuf3Parser.RULE_reserved = 17;
Protobuf3Parser.RULE_ranges = 18;
Protobuf3Parser.RULE_range_ = 19;
Protobuf3Parser.RULE_reservedFieldNames = 20;
Protobuf3Parser.RULE_topLevelDef = 21;
Protobuf3Parser.RULE_enumDef = 22;
Protobuf3Parser.RULE_enumBody = 23;
Protobuf3Parser.RULE_enumElement = 24;
Protobuf3Parser.RULE_enumField = 25;
Protobuf3Parser.RULE_enumValueOptions = 26;
Protobuf3Parser.RULE_enumValueOption = 27;
Protobuf3Parser.RULE_messageDef = 28;
Protobuf3Parser.RULE_messageBody = 29;
Protobuf3Parser.RULE_messageElement = 30;
Protobuf3Parser.RULE_extendDef = 31;
Protobuf3Parser.RULE_serviceDef = 32;
Protobuf3Parser.RULE_serviceElement = 33;
Protobuf3Parser.RULE_rpc = 34;
Protobuf3Parser.RULE_constant = 35;
Protobuf3Parser.RULE_blockLit = 36;
Protobuf3Parser.RULE_emptyStatement_ = 37;
Protobuf3Parser.RULE_ident = 38;
Protobuf3Parser.RULE_fullIdent = 39;
Protobuf3Parser.RULE_messageName = 40;
Protobuf3Parser.RULE_enumName = 41;
Protobuf3Parser.RULE_fieldName = 42;
Protobuf3Parser.RULE_oneofName = 43;
Protobuf3Parser.RULE_mapName = 44;
Protobuf3Parser.RULE_serviceName = 45;
Protobuf3Parser.RULE_rpcName = 46;
Protobuf3Parser.RULE_messageType = 47;
Protobuf3Parser.RULE_enumType = 48;
Protobuf3Parser.RULE_intLit = 49;
Protobuf3Parser.RULE_strLit = 50;
Protobuf3Parser.RULE_boolLit = 51;
Protobuf3Parser.RULE_floatLit = 52;
Protobuf3Parser.RULE_keywords = 53;
Protobuf3Parser.RULE_doEnterBlock = 54;
Protobuf3Parser.RULE_doEnumNameDef = 55;
Protobuf3Parser.RULE_doExitBlock = 56;
Protobuf3Parser.RULE_doMessageNameDef = 57;
Protobuf3Parser.RULE_doServiceNameDef = 58;

class TwoPassParseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_twoPassParse;
    }

	proto() {
	    return this.getTypedRuleContext(ProtoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterTwoPassParse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitTwoPassParse(this);
		}
	}


}



class ProtoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_proto;
    }

	syntax() {
	    return this.getTypedRuleContext(SyntaxContext,0);
	};

	EOF() {
	    return this.getToken(Protobuf3Parser.EOF, 0);
	};

	importStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatementContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatementContext,i);
	    }
	};

	packageStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PackageStatementContext);
	    } else {
	        return this.getTypedRuleContext(PackageStatementContext,i);
	    }
	};

	optionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionStatementContext);
	    } else {
	        return this.getTypedRuleContext(OptionStatementContext,i);
	    }
	};

	topLevelDef = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopLevelDefContext);
	    } else {
	        return this.getTypedRuleContext(TopLevelDefContext,i);
	    }
	};

	emptyStatement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyStatement_Context);
	    } else {
	        return this.getTypedRuleContext(EmptyStatement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterProto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitProto(this);
		}
	}


}



class SyntaxContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_syntax;
    }

	SYNTAX() {
	    return this.getToken(Protobuf3Parser.SYNTAX, 0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	PROTO3_LIT_SINGLE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
	};

	PROTO3_LIT_DOUBLE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_DOUBLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterSyntax(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitSyntax(this);
		}
	}


}



class ImportStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_importStatement;
    }

	IMPORT() {
	    return this.getToken(Protobuf3Parser.IMPORT, 0);
	};

	strLit() {
	    return this.getTypedRuleContext(StrLitContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	WEAK() {
	    return this.getToken(Protobuf3Parser.WEAK, 0);
	};

	PUBLIC() {
	    return this.getToken(Protobuf3Parser.PUBLIC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterImportStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitImportStatement(this);
		}
	}


}



class PackageStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_packageStatement;
    }

	PACKAGE() {
	    return this.getToken(Protobuf3Parser.PACKAGE, 0);
	};

	fullIdent() {
	    return this.getTypedRuleContext(FullIdentContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterPackageStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitPackageStatement(this);
		}
	}


}



class OptionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_optionStatement;
    }

	OPTION() {
	    return this.getToken(Protobuf3Parser.OPTION, 0);
	};

	optionName() {
	    return this.getTypedRuleContext(OptionNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOptionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOptionStatement(this);
		}
	}


}



class OptionNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_optionName;
    }

	fullIdent = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FullIdentContext);
	    } else {
	        return this.getTypedRuleContext(FullIdentContext,i);
	    }
	};

	LP() {
	    return this.getToken(Protobuf3Parser.LP, 0);
	};

	RP() {
	    return this.getToken(Protobuf3Parser.RP, 0);
	};

	DOT() {
	    return this.getToken(Protobuf3Parser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOptionName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOptionName(this);
		}
	}


}



class FieldLabelContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldLabel;
    }

	OPTIONAL() {
	    return this.getToken(Protobuf3Parser.OPTIONAL, 0);
	};

	REPEATED() {
	    return this.getToken(Protobuf3Parser.REPEATED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldLabel(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_field;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	fieldNumber() {
	    return this.getTypedRuleContext(FieldNumberContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	fieldLabel() {
	    return this.getTypedRuleContext(FieldLabelContext,0);
	};

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	fieldOptions() {
	    return this.getTypedRuleContext(FieldOptionsContext,0);
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitField(this);
		}
	}


}



class FieldOptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldOptions;
    }

	fieldOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldOptionContext);
	    } else {
	        return this.getTypedRuleContext(FieldOptionContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldOptions(this);
		}
	}


}



class FieldOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldOption;
    }

	optionName() {
	    return this.getTypedRuleContext(OptionNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldOption(this);
		}
	}


}



class FieldNumberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldNumber;
    }

	intLit() {
	    return this.getTypedRuleContext(IntLitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldNumber(this);
		}
	}


}



class OneofContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_oneof;
    }

	ONEOF() {
	    return this.getToken(Protobuf3Parser.ONEOF, 0);
	};

	oneofName() {
	    return this.getTypedRuleContext(OneofNameContext,0);
	};

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	optionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionStatementContext);
	    } else {
	        return this.getTypedRuleContext(OptionStatementContext,i);
	    }
	};

	oneofField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OneofFieldContext);
	    } else {
	        return this.getTypedRuleContext(OneofFieldContext,i);
	    }
	};

	emptyStatement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyStatement_Context);
	    } else {
	        return this.getTypedRuleContext(EmptyStatement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOneof(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOneof(this);
		}
	}


}



class OneofFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_oneofField;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	fieldNumber() {
	    return this.getTypedRuleContext(FieldNumberContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	fieldOptions() {
	    return this.getTypedRuleContext(FieldOptionsContext,0);
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOneofField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOneofField(this);
		}
	}


}



class MapFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_mapField;
    }

	MAP() {
	    return this.getToken(Protobuf3Parser.MAP, 0);
	};

	LT() {
	    return this.getToken(Protobuf3Parser.LT, 0);
	};

	keyType() {
	    return this.getTypedRuleContext(KeyTypeContext,0);
	};

	COMMA() {
	    return this.getToken(Protobuf3Parser.COMMA, 0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	GT() {
	    return this.getToken(Protobuf3Parser.GT, 0);
	};

	mapName() {
	    return this.getTypedRuleContext(MapNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	fieldNumber() {
	    return this.getTypedRuleContext(FieldNumberContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	fieldOptions() {
	    return this.getTypedRuleContext(FieldOptionsContext,0);
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMapField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMapField(this);
		}
	}


}



class KeyTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_keyType;
    }

	INT32() {
	    return this.getToken(Protobuf3Parser.INT32, 0);
	};

	INT64() {
	    return this.getToken(Protobuf3Parser.INT64, 0);
	};

	UINT32() {
	    return this.getToken(Protobuf3Parser.UINT32, 0);
	};

	UINT64() {
	    return this.getToken(Protobuf3Parser.UINT64, 0);
	};

	SINT32() {
	    return this.getToken(Protobuf3Parser.SINT32, 0);
	};

	SINT64() {
	    return this.getToken(Protobuf3Parser.SINT64, 0);
	};

	FIXED32() {
	    return this.getToken(Protobuf3Parser.FIXED32, 0);
	};

	FIXED64() {
	    return this.getToken(Protobuf3Parser.FIXED64, 0);
	};

	SFIXED32() {
	    return this.getToken(Protobuf3Parser.SFIXED32, 0);
	};

	SFIXED64() {
	    return this.getToken(Protobuf3Parser.SFIXED64, 0);
	};

	BOOL() {
	    return this.getToken(Protobuf3Parser.BOOL, 0);
	};

	STRING() {
	    return this.getToken(Protobuf3Parser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterKeyType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitKeyType(this);
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
        this.ruleIndex = Protobuf3Parser.RULE_type_;
    }

	DOUBLE() {
	    return this.getToken(Protobuf3Parser.DOUBLE, 0);
	};

	FLOAT() {
	    return this.getToken(Protobuf3Parser.FLOAT, 0);
	};

	INT32() {
	    return this.getToken(Protobuf3Parser.INT32, 0);
	};

	INT64() {
	    return this.getToken(Protobuf3Parser.INT64, 0);
	};

	UINT32() {
	    return this.getToken(Protobuf3Parser.UINT32, 0);
	};

	UINT64() {
	    return this.getToken(Protobuf3Parser.UINT64, 0);
	};

	SINT32() {
	    return this.getToken(Protobuf3Parser.SINT32, 0);
	};

	SINT64() {
	    return this.getToken(Protobuf3Parser.SINT64, 0);
	};

	FIXED32() {
	    return this.getToken(Protobuf3Parser.FIXED32, 0);
	};

	FIXED64() {
	    return this.getToken(Protobuf3Parser.FIXED64, 0);
	};

	SFIXED32() {
	    return this.getToken(Protobuf3Parser.SFIXED32, 0);
	};

	SFIXED64() {
	    return this.getToken(Protobuf3Parser.SFIXED64, 0);
	};

	BOOL() {
	    return this.getToken(Protobuf3Parser.BOOL, 0);
	};

	STRING() {
	    return this.getToken(Protobuf3Parser.STRING, 0);
	};

	BYTES() {
	    return this.getToken(Protobuf3Parser.BYTES, 0);
	};

	messageType() {
	    return this.getTypedRuleContext(MessageTypeContext,0);
	};

	enumType() {
	    return this.getTypedRuleContext(EnumTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitType_(this);
		}
	}


}



class ReservedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_reserved;
    }

	RESERVED() {
	    return this.getToken(Protobuf3Parser.RESERVED, 0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	ranges() {
	    return this.getTypedRuleContext(RangesContext,0);
	};

	reservedFieldNames() {
	    return this.getTypedRuleContext(ReservedFieldNamesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterReserved(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitReserved(this);
		}
	}


}



class RangesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_ranges;
    }

	range_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Range_Context);
	    } else {
	        return this.getTypedRuleContext(Range_Context,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRanges(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRanges(this);
		}
	}


}



class Range_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_range_;
    }

	intLit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntLitContext);
	    } else {
	        return this.getTypedRuleContext(IntLitContext,i);
	    }
	};

	TO() {
	    return this.getToken(Protobuf3Parser.TO, 0);
	};

	MAX() {
	    return this.getToken(Protobuf3Parser.MAX, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRange_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRange_(this);
		}
	}


}



class ReservedFieldNamesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_reservedFieldNames;
    }

	strLit = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StrLitContext);
	    } else {
	        return this.getTypedRuleContext(StrLitContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterReservedFieldNames(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitReservedFieldNames(this);
		}
	}


}



class TopLevelDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_topLevelDef;
    }

	messageDef() {
	    return this.getTypedRuleContext(MessageDefContext,0);
	};

	enumDef() {
	    return this.getTypedRuleContext(EnumDefContext,0);
	};

	extendDef() {
	    return this.getTypedRuleContext(ExtendDefContext,0);
	};

	serviceDef() {
	    return this.getTypedRuleContext(ServiceDefContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterTopLevelDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitTopLevelDef(this);
		}
	}


}



class EnumDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumDef;
    }

	ENUM() {
	    return this.getToken(Protobuf3Parser.ENUM, 0);
	};

	enumName() {
	    return this.getTypedRuleContext(EnumNameContext,0);
	};

	doEnumNameDef() {
	    return this.getTypedRuleContext(DoEnumNameDefContext,0);
	};

	enumBody() {
	    return this.getTypedRuleContext(EnumBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumDef(this);
		}
	}


}



class EnumBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumBody;
    }

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	doEnterBlock() {
	    return this.getTypedRuleContext(DoEnterBlockContext,0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	doExitBlock() {
	    return this.getTypedRuleContext(DoExitBlockContext,0);
	};

	enumElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumElementContext);
	    } else {
	        return this.getTypedRuleContext(EnumElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumBody(this);
		}
	}


}



class EnumElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumElement;
    }

	optionStatement() {
	    return this.getTypedRuleContext(OptionStatementContext,0);
	};

	enumField() {
	    return this.getTypedRuleContext(EnumFieldContext,0);
	};

	reserved() {
	    return this.getTypedRuleContext(ReservedContext,0);
	};

	emptyStatement_() {
	    return this.getTypedRuleContext(EmptyStatement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumElement(this);
		}
	}


}



class EnumFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumField;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	intLit() {
	    return this.getTypedRuleContext(IntLitContext,0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	MINUS() {
	    return this.getToken(Protobuf3Parser.MINUS, 0);
	};

	enumValueOptions() {
	    return this.getTypedRuleContext(EnumValueOptionsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumField(this);
		}
	}


}



class EnumValueOptionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumValueOptions;
    }

	LB() {
	    return this.getToken(Protobuf3Parser.LB, 0);
	};

	enumValueOption = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumValueOptionContext);
	    } else {
	        return this.getTypedRuleContext(EnumValueOptionContext,i);
	    }
	};

	RB() {
	    return this.getToken(Protobuf3Parser.RB, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COMMA);
	    } else {
	        return this.getToken(Protobuf3Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumValueOptions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumValueOptions(this);
		}
	}


}



class EnumValueOptionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumValueOption;
    }

	optionName() {
	    return this.getTypedRuleContext(OptionNameContext,0);
	};

	EQ() {
	    return this.getToken(Protobuf3Parser.EQ, 0);
	};

	constant() {
	    return this.getTypedRuleContext(ConstantContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumValueOption(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumValueOption(this);
		}
	}


}



class MessageDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageDef;
    }

	MESSAGE() {
	    return this.getToken(Protobuf3Parser.MESSAGE, 0);
	};

	messageName() {
	    return this.getTypedRuleContext(MessageNameContext,0);
	};

	doMessageNameDef() {
	    return this.getTypedRuleContext(DoMessageNameDefContext,0);
	};

	messageBody() {
	    return this.getTypedRuleContext(MessageBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageDef(this);
		}
	}


}



class MessageBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageBody;
    }

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	doEnterBlock() {
	    return this.getTypedRuleContext(DoEnterBlockContext,0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	doExitBlock() {
	    return this.getTypedRuleContext(DoExitBlockContext,0);
	};

	messageElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MessageElementContext);
	    } else {
	        return this.getTypedRuleContext(MessageElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageBody(this);
		}
	}


}



class MessageElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageElement;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	enumDef() {
	    return this.getTypedRuleContext(EnumDefContext,0);
	};

	messageDef() {
	    return this.getTypedRuleContext(MessageDefContext,0);
	};

	extendDef() {
	    return this.getTypedRuleContext(ExtendDefContext,0);
	};

	optionStatement() {
	    return this.getTypedRuleContext(OptionStatementContext,0);
	};

	oneof() {
	    return this.getTypedRuleContext(OneofContext,0);
	};

	mapField() {
	    return this.getTypedRuleContext(MapFieldContext,0);
	};

	reserved() {
	    return this.getTypedRuleContext(ReservedContext,0);
	};

	emptyStatement_() {
	    return this.getTypedRuleContext(EmptyStatement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageElement(this);
		}
	}


}



class ExtendDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_extendDef;
    }

	EXTEND() {
	    return this.getToken(Protobuf3Parser.EXTEND, 0);
	};

	messageType() {
	    return this.getTypedRuleContext(MessageTypeContext,0);
	};

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	emptyStatement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyStatement_Context);
	    } else {
	        return this.getTypedRuleContext(EmptyStatement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterExtendDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitExtendDef(this);
		}
	}


}



class ServiceDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_serviceDef;
    }

	SERVICE() {
	    return this.getToken(Protobuf3Parser.SERVICE, 0);
	};

	serviceName() {
	    return this.getTypedRuleContext(ServiceNameContext,0);
	};

	doServiceNameDef() {
	    return this.getTypedRuleContext(DoServiceNameDefContext,0);
	};

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	doEnterBlock() {
	    return this.getTypedRuleContext(DoEnterBlockContext,0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	doExitBlock() {
	    return this.getTypedRuleContext(DoExitBlockContext,0);
	};

	serviceElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ServiceElementContext);
	    } else {
	        return this.getTypedRuleContext(ServiceElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterServiceDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitServiceDef(this);
		}
	}


}



class ServiceElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_serviceElement;
    }

	optionStatement() {
	    return this.getTypedRuleContext(OptionStatementContext,0);
	};

	rpc() {
	    return this.getTypedRuleContext(RpcContext,0);
	};

	emptyStatement_() {
	    return this.getTypedRuleContext(EmptyStatement_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterServiceElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitServiceElement(this);
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
        this.ruleIndex = Protobuf3Parser.RULE_rpc;
    }

	RPC() {
	    return this.getToken(Protobuf3Parser.RPC, 0);
	};

	rpcName() {
	    return this.getTypedRuleContext(RpcNameContext,0);
	};

	LP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.LP);
	    } else {
	        return this.getToken(Protobuf3Parser.LP, i);
	    }
	};


	messageType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MessageTypeContext);
	    } else {
	        return this.getTypedRuleContext(MessageTypeContext,i);
	    }
	};

	RP = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.RP);
	    } else {
	        return this.getToken(Protobuf3Parser.RP, i);
	    }
	};


	RETURNS() {
	    return this.getToken(Protobuf3Parser.RETURNS, 0);
	};

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
	};

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	STREAM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.STREAM);
	    } else {
	        return this.getToken(Protobuf3Parser.STREAM, i);
	    }
	};


	optionStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OptionStatementContext);
	    } else {
	        return this.getTypedRuleContext(OptionStatementContext,i);
	    }
	};

	emptyStatement_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EmptyStatement_Context);
	    } else {
	        return this.getTypedRuleContext(EmptyStatement_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRpc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRpc(this);
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
        this.ruleIndex = Protobuf3Parser.RULE_constant;
    }

	fullIdent() {
	    return this.getTypedRuleContext(FullIdentContext,0);
	};

	intLit() {
	    return this.getTypedRuleContext(IntLitContext,0);
	};

	MINUS() {
	    return this.getToken(Protobuf3Parser.MINUS, 0);
	};

	PLUS() {
	    return this.getToken(Protobuf3Parser.PLUS, 0);
	};

	floatLit() {
	    return this.getTypedRuleContext(FloatLitContext,0);
	};

	strLit() {
	    return this.getTypedRuleContext(StrLitContext,0);
	};

	boolLit() {
	    return this.getTypedRuleContext(BoolLitContext,0);
	};

	blockLit() {
	    return this.getTypedRuleContext(BlockLitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterConstant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitConstant(this);
		}
	}


}



class BlockLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_blockLit;
    }

	LC() {
	    return this.getToken(Protobuf3Parser.LC, 0);
	};

	RC() {
	    return this.getToken(Protobuf3Parser.RC, 0);
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

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.COLON);
	    } else {
	        return this.getToken(Protobuf3Parser.COLON, i);
	    }
	};


	constant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConstantContext);
	    } else {
	        return this.getTypedRuleContext(ConstantContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterBlockLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitBlockLit(this);
		}
	}


}



class EmptyStatement_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_emptyStatement_;
    }

	SEMI() {
	    return this.getToken(Protobuf3Parser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEmptyStatement_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEmptyStatement_(this);
		}
	}


}



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
        this.ruleIndex = Protobuf3Parser.RULE_ident;
    }

	IDENTIFIER() {
	    return this.getToken(Protobuf3Parser.IDENTIFIER, 0);
	};

	keywords() {
	    return this.getTypedRuleContext(KeywordsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitIdent(this);
		}
	}


}



class FullIdentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fullIdent;
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

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.DOT);
	    } else {
	        return this.getToken(Protobuf3Parser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFullIdent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFullIdent(this);
		}
	}


}



class MessageNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageName(this);
		}
	}


}



class EnumNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumName(this);
		}
	}


}



class FieldNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_fieldName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFieldName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFieldName(this);
		}
	}


}



class OneofNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_oneofName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterOneofName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitOneofName(this);
		}
	}


}



class MapNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_mapName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMapName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMapName(this);
		}
	}


}



class ServiceNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_serviceName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterServiceName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitServiceName(this);
		}
	}


}



class RpcNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_rpcName;
    }

	ident() {
	    return this.getTypedRuleContext(IdentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterRpcName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitRpcName(this);
		}
	}


}



class MessageTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_messageType;
    }

	messageName() {
	    return this.getTypedRuleContext(MessageNameContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.DOT);
	    } else {
	        return this.getToken(Protobuf3Parser.DOT, i);
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
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterMessageType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitMessageType(this);
		}
	}


}



class EnumTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_enumType;
    }

	enumName() {
	    return this.getTypedRuleContext(EnumNameContext,0);
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(Protobuf3Parser.DOT);
	    } else {
	        return this.getToken(Protobuf3Parser.DOT, i);
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
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterEnumType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitEnumType(this);
		}
	}


}



class IntLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_intLit;
    }

	INT_LIT() {
	    return this.getToken(Protobuf3Parser.INT_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterIntLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitIntLit(this);
		}
	}


}



class StrLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_strLit;
    }

	STR_LIT() {
	    return this.getToken(Protobuf3Parser.STR_LIT, 0);
	};

	PROTO3_LIT_SINGLE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_SINGLE, 0);
	};

	PROTO3_LIT_DOUBLE() {
	    return this.getToken(Protobuf3Parser.PROTO3_LIT_DOUBLE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterStrLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitStrLit(this);
		}
	}


}



class BoolLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_boolLit;
    }

	BOOL_LIT() {
	    return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterBoolLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitBoolLit(this);
		}
	}


}



class FloatLitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_floatLit;
    }

	FLOAT_LIT() {
	    return this.getToken(Protobuf3Parser.FLOAT_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterFloatLit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitFloatLit(this);
		}
	}


}



class KeywordsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_keywords;
    }

	SYNTAX() {
	    return this.getToken(Protobuf3Parser.SYNTAX, 0);
	};

	IMPORT() {
	    return this.getToken(Protobuf3Parser.IMPORT, 0);
	};

	WEAK() {
	    return this.getToken(Protobuf3Parser.WEAK, 0);
	};

	PUBLIC() {
	    return this.getToken(Protobuf3Parser.PUBLIC, 0);
	};

	PACKAGE() {
	    return this.getToken(Protobuf3Parser.PACKAGE, 0);
	};

	OPTION() {
	    return this.getToken(Protobuf3Parser.OPTION, 0);
	};

	OPTIONAL() {
	    return this.getToken(Protobuf3Parser.OPTIONAL, 0);
	};

	REPEATED() {
	    return this.getToken(Protobuf3Parser.REPEATED, 0);
	};

	ONEOF() {
	    return this.getToken(Protobuf3Parser.ONEOF, 0);
	};

	MAP() {
	    return this.getToken(Protobuf3Parser.MAP, 0);
	};

	INT32() {
	    return this.getToken(Protobuf3Parser.INT32, 0);
	};

	INT64() {
	    return this.getToken(Protobuf3Parser.INT64, 0);
	};

	UINT32() {
	    return this.getToken(Protobuf3Parser.UINT32, 0);
	};

	UINT64() {
	    return this.getToken(Protobuf3Parser.UINT64, 0);
	};

	SINT32() {
	    return this.getToken(Protobuf3Parser.SINT32, 0);
	};

	SINT64() {
	    return this.getToken(Protobuf3Parser.SINT64, 0);
	};

	FIXED32() {
	    return this.getToken(Protobuf3Parser.FIXED32, 0);
	};

	FIXED64() {
	    return this.getToken(Protobuf3Parser.FIXED64, 0);
	};

	SFIXED32() {
	    return this.getToken(Protobuf3Parser.SFIXED32, 0);
	};

	SFIXED64() {
	    return this.getToken(Protobuf3Parser.SFIXED64, 0);
	};

	BOOL() {
	    return this.getToken(Protobuf3Parser.BOOL, 0);
	};

	STRING() {
	    return this.getToken(Protobuf3Parser.STRING, 0);
	};

	DOUBLE() {
	    return this.getToken(Protobuf3Parser.DOUBLE, 0);
	};

	FLOAT() {
	    return this.getToken(Protobuf3Parser.FLOAT, 0);
	};

	BYTES() {
	    return this.getToken(Protobuf3Parser.BYTES, 0);
	};

	RESERVED() {
	    return this.getToken(Protobuf3Parser.RESERVED, 0);
	};

	TO() {
	    return this.getToken(Protobuf3Parser.TO, 0);
	};

	MAX() {
	    return this.getToken(Protobuf3Parser.MAX, 0);
	};

	ENUM() {
	    return this.getToken(Protobuf3Parser.ENUM, 0);
	};

	MESSAGE() {
	    return this.getToken(Protobuf3Parser.MESSAGE, 0);
	};

	SERVICE() {
	    return this.getToken(Protobuf3Parser.SERVICE, 0);
	};

	EXTEND() {
	    return this.getToken(Protobuf3Parser.EXTEND, 0);
	};

	RPC() {
	    return this.getToken(Protobuf3Parser.RPC, 0);
	};

	STREAM() {
	    return this.getToken(Protobuf3Parser.STREAM, 0);
	};

	RETURNS() {
	    return this.getToken(Protobuf3Parser.RETURNS, 0);
	};

	BOOL_LIT() {
	    return this.getToken(Protobuf3Parser.BOOL_LIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterKeywords(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitKeywords(this);
		}
	}


}



class DoEnterBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_doEnterBlock;
    }


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterDoEnterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitDoEnterBlock(this);
		}
	}


}



class DoEnumNameDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_doEnumNameDef;
    }


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterDoEnumNameDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitDoEnumNameDef(this);
		}
	}


}



class DoExitBlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_doExitBlock;
    }


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterDoExitBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitDoExitBlock(this);
		}
	}


}



class DoMessageNameDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_doMessageNameDef;
    }


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterDoMessageNameDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitDoMessageNameDef(this);
		}
	}


}



class DoServiceNameDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Protobuf3Parser.RULE_doServiceNameDef;
    }


	enterRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.enterDoServiceNameDef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Protobuf3Listener ) {
	        listener.exitDoServiceNameDef(this);
		}
	}


}




Protobuf3Parser.TwoPassParseContext = TwoPassParseContext; 
Protobuf3Parser.ProtoContext = ProtoContext; 
Protobuf3Parser.SyntaxContext = SyntaxContext; 
Protobuf3Parser.ImportStatementContext = ImportStatementContext; 
Protobuf3Parser.PackageStatementContext = PackageStatementContext; 
Protobuf3Parser.OptionStatementContext = OptionStatementContext; 
Protobuf3Parser.OptionNameContext = OptionNameContext; 
Protobuf3Parser.FieldLabelContext = FieldLabelContext; 
Protobuf3Parser.FieldContext = FieldContext; 
Protobuf3Parser.FieldOptionsContext = FieldOptionsContext; 
Protobuf3Parser.FieldOptionContext = FieldOptionContext; 
Protobuf3Parser.FieldNumberContext = FieldNumberContext; 
Protobuf3Parser.OneofContext = OneofContext; 
Protobuf3Parser.OneofFieldContext = OneofFieldContext; 
Protobuf3Parser.MapFieldContext = MapFieldContext; 
Protobuf3Parser.KeyTypeContext = KeyTypeContext; 
Protobuf3Parser.Type_Context = Type_Context; 
Protobuf3Parser.ReservedContext = ReservedContext; 
Protobuf3Parser.RangesContext = RangesContext; 
Protobuf3Parser.Range_Context = Range_Context; 
Protobuf3Parser.ReservedFieldNamesContext = ReservedFieldNamesContext; 
Protobuf3Parser.TopLevelDefContext = TopLevelDefContext; 
Protobuf3Parser.EnumDefContext = EnumDefContext; 
Protobuf3Parser.EnumBodyContext = EnumBodyContext; 
Protobuf3Parser.EnumElementContext = EnumElementContext; 
Protobuf3Parser.EnumFieldContext = EnumFieldContext; 
Protobuf3Parser.EnumValueOptionsContext = EnumValueOptionsContext; 
Protobuf3Parser.EnumValueOptionContext = EnumValueOptionContext; 
Protobuf3Parser.MessageDefContext = MessageDefContext; 
Protobuf3Parser.MessageBodyContext = MessageBodyContext; 
Protobuf3Parser.MessageElementContext = MessageElementContext; 
Protobuf3Parser.ExtendDefContext = ExtendDefContext; 
Protobuf3Parser.ServiceDefContext = ServiceDefContext; 
Protobuf3Parser.ServiceElementContext = ServiceElementContext; 
Protobuf3Parser.RpcContext = RpcContext; 
Protobuf3Parser.ConstantContext = ConstantContext; 
Protobuf3Parser.BlockLitContext = BlockLitContext; 
Protobuf3Parser.EmptyStatement_Context = EmptyStatement_Context; 
Protobuf3Parser.IdentContext = IdentContext; 
Protobuf3Parser.FullIdentContext = FullIdentContext; 
Protobuf3Parser.MessageNameContext = MessageNameContext; 
Protobuf3Parser.EnumNameContext = EnumNameContext; 
Protobuf3Parser.FieldNameContext = FieldNameContext; 
Protobuf3Parser.OneofNameContext = OneofNameContext; 
Protobuf3Parser.MapNameContext = MapNameContext; 
Protobuf3Parser.ServiceNameContext = ServiceNameContext; 
Protobuf3Parser.RpcNameContext = RpcNameContext; 
Protobuf3Parser.MessageTypeContext = MessageTypeContext; 
Protobuf3Parser.EnumTypeContext = EnumTypeContext; 
Protobuf3Parser.IntLitContext = IntLitContext; 
Protobuf3Parser.StrLitContext = StrLitContext; 
Protobuf3Parser.BoolLitContext = BoolLitContext; 
Protobuf3Parser.FloatLitContext = FloatLitContext; 
Protobuf3Parser.KeywordsContext = KeywordsContext; 
Protobuf3Parser.DoEnterBlockContext = DoEnterBlockContext; 
Protobuf3Parser.DoEnumNameDefContext = DoEnumNameDefContext; 
Protobuf3Parser.DoExitBlockContext = DoExitBlockContext; 
Protobuf3Parser.DoMessageNameDefContext = DoMessageNameDefContext; 
Protobuf3Parser.DoServiceNameDefContext = DoServiceNameDefContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
