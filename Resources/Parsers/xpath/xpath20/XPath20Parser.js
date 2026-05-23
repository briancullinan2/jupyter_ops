// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/xpath/xpath20/XPath20Parser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import XPath20ParserListener from './XPath20ParserListener.js';
import XPath20ParserBase from './XPath20ParserBase.js';

const serializedATN = [4,1,105,584,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,1,0,1,0,1,0,1,1,1,1,1,1,5,1,151,8,1,10,1,12,1,154,9,1,1,2,1,2,
1,2,1,2,3,2,160,8,2,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,1,4,5,4,177,8,4,10,4,12,4,180,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,5,5,5,193,8,5,10,5,12,5,196,9,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,213,8,7,10,7,12,7,216,9,7,1,8,1,8,1,8,5,
8,221,8,8,10,8,12,8,224,9,8,1,9,1,9,1,9,1,9,3,9,230,8,9,1,9,1,9,3,9,234,
8,9,1,10,1,10,1,10,3,10,239,8,10,1,11,1,11,1,11,5,11,244,8,11,10,11,12,11,
247,9,11,1,12,1,12,1,12,5,12,252,8,12,10,12,12,12,255,9,12,1,13,1,13,1,13,
5,13,260,8,13,10,13,12,13,263,9,13,1,14,1,14,1,14,5,14,268,8,14,10,14,12,
14,271,9,14,1,15,1,15,1,15,1,15,3,15,277,8,15,1,16,1,16,1,16,1,16,3,16,283,
8,16,1,17,1,17,1,17,1,17,3,17,289,8,17,1,18,1,18,1,18,1,18,3,18,295,8,18,
1,19,5,19,298,8,19,10,19,12,19,301,9,19,1,19,1,19,1,20,1,20,1,21,1,21,1,
22,1,22,1,23,1,23,1,24,1,24,3,24,315,8,24,1,24,1,24,1,24,3,24,320,8,24,1,
25,1,25,1,25,5,25,325,8,25,10,25,12,25,328,9,25,1,26,1,26,3,26,332,8,26,
1,27,1,27,3,27,336,8,27,1,27,1,27,1,28,1,28,1,28,1,28,3,28,344,8,28,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,3,29,362,8,29,1,30,3,30,365,8,30,1,30,1,30,1,31,1,31,1,31,1,31,3,31,373,
8,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,385,8,32,1,33,
1,33,1,34,1,34,3,34,391,8,34,1,35,1,35,3,35,395,8,35,1,36,1,36,1,36,1,36,
1,36,3,36,402,8,36,1,37,1,37,1,37,1,38,5,38,408,8,38,10,38,12,38,411,9,38,
1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,40,1,40,3,40,422,8,40,1,41,1,41,3,41,
426,8,41,1,42,1,42,1,43,1,43,1,43,1,44,1,44,1,45,1,45,3,45,437,8,45,1,45,
1,45,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,5,47,449,8,47,10,47,12,47,452,
9,47,3,47,454,8,47,1,47,1,47,1,48,1,48,3,48,460,8,48,1,49,1,49,1,49,1,49,
1,49,3,49,467,8,49,3,49,469,8,49,1,50,1,50,1,51,1,51,1,51,1,51,1,51,3,51,
478,8,51,1,52,1,52,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,1,53,3,53,491,
8,53,1,54,1,54,1,54,1,54,1,55,1,55,1,55,1,55,3,55,501,8,55,1,55,1,55,1,56,
1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,58,1,58,1,58,3,58,516,8,58,1,58,1,58,
1,59,1,59,1,59,1,59,1,59,3,59,525,8,59,3,59,527,8,59,1,59,1,59,1,60,1,60,
3,60,533,8,60,1,61,1,61,1,61,1,61,1,61,1,62,1,62,1,63,1,63,1,63,1,63,1,63,
1,63,3,63,548,8,63,3,63,550,8,63,3,63,552,8,63,1,63,1,63,1,64,1,64,3,64,
558,8,64,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,67,1,67,1,68,1,68,1,69,1,69,
1,70,1,70,1,71,1,71,1,71,4,71,578,8,71,11,71,12,71,579,1,71,1,71,1,71,0,
0,72,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,
96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,128,130,132,
134,136,138,140,142,0,13,2,0,54,54,89,89,2,0,22,22,28,28,4,0,35,35,48,48,
62,62,73,73,2,0,27,27,94,94,2,0,55,55,66,66,4,0,15,16,18,19,21,21,23,23,
5,0,53,53,60,61,69,69,71,71,76,76,3,0,17,17,20,20,67,67,1,0,33,34,1,0,95,
97,3,0,28,28,31,31,35,35,2,0,98,98,103,103,4,0,36,91,93,94,99,99,102,102,
589,0,144,1,0,0,0,2,147,1,0,0,0,4,159,1,0,0,0,6,161,1,0,0,0,8,165,1,0,0,
0,10,181,1,0,0,0,12,200,1,0,0,0,14,209,1,0,0,0,16,217,1,0,0,0,18,225,1,0,
0,0,20,235,1,0,0,0,22,240,1,0,0,0,24,248,1,0,0,0,26,256,1,0,0,0,28,264,1,
0,0,0,30,272,1,0,0,0,32,278,1,0,0,0,34,284,1,0,0,0,36,290,1,0,0,0,38,299,
1,0,0,0,40,304,1,0,0,0,42,306,1,0,0,0,44,308,1,0,0,0,46,310,1,0,0,0,48,319,
1,0,0,0,50,321,1,0,0,0,52,331,1,0,0,0,54,335,1,0,0,0,56,343,1,0,0,0,58,361,
1,0,0,0,60,364,1,0,0,0,62,372,1,0,0,0,64,384,1,0,0,0,66,386,1,0,0,0,68,390,
1,0,0,0,70,394,1,0,0,0,72,401,1,0,0,0,74,403,1,0,0,0,76,409,1,0,0,0,78,412,
1,0,0,0,80,421,1,0,0,0,82,425,1,0,0,0,84,427,1,0,0,0,86,429,1,0,0,0,88,432,
1,0,0,0,90,434,1,0,0,0,92,440,1,0,0,0,94,442,1,0,0,0,96,457,1,0,0,0,98,468,
1,0,0,0,100,470,1,0,0,0,102,477,1,0,0,0,104,479,1,0,0,0,106,490,1,0,0,0,
108,492,1,0,0,0,110,496,1,0,0,0,112,504,1,0,0,0,114,508,1,0,0,0,116,512,
1,0,0,0,118,519,1,0,0,0,120,532,1,0,0,0,122,534,1,0,0,0,124,539,1,0,0,0,
126,541,1,0,0,0,128,557,1,0,0,0,130,559,1,0,0,0,132,564,1,0,0,0,134,566,
1,0,0,0,136,568,1,0,0,0,138,570,1,0,0,0,140,572,1,0,0,0,142,577,1,0,0,0,
144,145,3,2,1,0,145,146,5,0,0,1,146,1,1,0,0,0,147,152,3,4,2,0,148,149,5,
8,0,0,149,151,3,4,2,0,150,148,1,0,0,0,151,154,1,0,0,0,152,150,1,0,0,0,152,
153,1,0,0,0,153,3,1,0,0,0,154,152,1,0,0,0,155,160,3,6,3,0,156,160,3,10,5,
0,157,160,3,12,6,0,158,160,3,14,7,0,159,155,1,0,0,0,159,156,1,0,0,0,159,
157,1,0,0,0,159,158,1,0,0,0,160,5,1,0,0,0,161,162,3,8,4,0,162,163,5,84,0,
0,163,164,3,4,2,0,164,7,1,0,0,0,165,166,5,58,0,0,166,167,5,13,0,0,167,168,
3,88,44,0,168,169,5,64,0,0,169,178,3,4,2,0,170,171,5,8,0,0,171,172,5,13,
0,0,172,173,3,88,44,0,173,174,5,64,0,0,174,175,3,4,2,0,175,177,1,0,0,0,176,
170,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,9,1,0,0,
0,180,178,1,0,0,0,181,182,7,0,0,0,182,183,5,13,0,0,183,184,3,88,44,0,184,
185,5,64,0,0,185,194,3,4,2,0,186,187,5,8,0,0,187,188,5,13,0,0,188,189,3,
88,44,0,189,190,5,64,0,0,190,191,3,4,2,0,191,193,1,0,0,0,192,186,1,0,0,0,
193,196,1,0,0,0,194,192,1,0,0,0,194,195,1,0,0,0,195,197,1,0,0,0,196,194,
1,0,0,0,197,198,5,85,0,0,198,199,3,4,2,0,199,11,1,0,0,0,200,201,5,63,0,0,
201,202,5,26,0,0,202,203,3,2,1,0,203,204,5,9,0,0,204,205,5,91,0,0,205,206,
3,4,2,0,206,207,5,51,0,0,207,208,3,4,2,0,208,13,1,0,0,0,209,214,3,16,8,0,
210,211,5,79,0,0,211,213,3,16,8,0,212,210,1,0,0,0,213,216,1,0,0,0,214,212,
1,0,0,0,214,215,1,0,0,0,215,15,1,0,0,0,216,214,1,0,0,0,217,222,3,18,9,0,
218,219,5,38,0,0,219,221,3,18,9,0,220,218,1,0,0,0,221,224,1,0,0,0,222,220,
1,0,0,0,222,223,1,0,0,0,223,17,1,0,0,0,224,222,1,0,0,0,225,233,3,20,10,0,
226,230,3,44,22,0,227,230,3,42,21,0,228,230,3,46,23,0,229,226,1,0,0,0,229,
227,1,0,0,0,229,228,1,0,0,0,230,231,1,0,0,0,231,232,3,20,10,0,232,234,1,
0,0,0,233,229,1,0,0,0,233,234,1,0,0,0,234,19,1,0,0,0,235,238,3,22,11,0,236,
237,5,92,0,0,237,239,3,22,11,0,238,236,1,0,0,0,238,239,1,0,0,0,239,21,1,
0,0,0,240,245,3,24,12,0,241,242,7,1,0,0,242,244,3,24,12,0,243,241,1,0,0,
0,244,247,1,0,0,0,245,243,1,0,0,0,245,246,1,0,0,0,246,23,1,0,0,0,247,245,
1,0,0,0,248,253,3,26,13,0,249,250,7,2,0,0,250,252,3,26,13,0,251,249,1,0,
0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,25,1,0,0,0,255,253,
1,0,0,0,256,261,3,28,14,0,257,258,7,3,0,0,258,260,3,28,14,0,259,257,1,0,
0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,27,1,0,0,0,263,261,
1,0,0,0,264,269,3,30,15,0,265,266,7,4,0,0,266,268,3,30,15,0,267,265,1,0,
0,0,268,271,1,0,0,0,269,267,1,0,0,0,269,270,1,0,0,0,270,29,1,0,0,0,271,269,
1,0,0,0,272,276,3,32,16,0,273,274,5,65,0,0,274,275,5,78,0,0,275,277,3,98,
49,0,276,273,1,0,0,0,276,277,1,0,0,0,277,31,1,0,0,0,278,282,3,34,17,0,279,
280,5,93,0,0,280,281,5,40,0,0,281,283,3,98,49,0,282,279,1,0,0,0,282,283,
1,0,0,0,283,33,1,0,0,0,284,288,3,36,18,0,285,286,5,43,0,0,286,287,5,40,0,
0,287,289,3,96,48,0,288,285,1,0,0,0,288,289,1,0,0,0,289,35,1,0,0,0,290,294,
3,38,19,0,291,292,5,42,0,0,292,293,5,40,0,0,293,295,3,96,48,0,294,291,1,
0,0,0,294,295,1,0,0,0,295,37,1,0,0,0,296,298,7,1,0,0,297,296,1,0,0,0,298,
301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,302,1,0,0,0,301,299,1,0,
0,0,302,303,3,40,20,0,303,39,1,0,0,0,304,305,3,48,24,0,305,41,1,0,0,0,306,
307,7,5,0,0,307,43,1,0,0,0,308,309,7,6,0,0,309,45,1,0,0,0,310,311,7,7,0,
0,311,47,1,0,0,0,312,314,5,33,0,0,313,315,3,50,25,0,314,313,1,0,0,0,314,
315,1,0,0,0,315,320,1,0,0,0,316,317,5,34,0,0,317,320,3,50,25,0,318,320,3,
50,25,0,319,312,1,0,0,0,319,316,1,0,0,0,319,318,1,0,0,0,320,49,1,0,0,0,321,
326,3,52,26,0,322,323,7,8,0,0,323,325,3,52,26,0,324,322,1,0,0,0,325,328,
1,0,0,0,326,324,1,0,0,0,326,327,1,0,0,0,327,51,1,0,0,0,328,326,1,0,0,0,329,
332,3,74,37,0,330,332,3,54,27,0,331,329,1,0,0,0,331,330,1,0,0,0,332,53,1,
0,0,0,333,336,3,62,31,0,334,336,3,56,28,0,335,333,1,0,0,0,335,334,1,0,0,
0,336,337,1,0,0,0,337,338,3,76,38,0,338,55,1,0,0,0,339,340,3,58,29,0,340,
341,3,68,34,0,341,344,1,0,0,0,342,344,3,60,30,0,343,339,1,0,0,0,343,342,
1,0,0,0,344,57,1,0,0,0,345,346,5,44,0,0,346,362,5,7,0,0,347,348,5,46,0,0,
348,362,5,7,0,0,349,350,5,41,0,0,350,362,5,7,0,0,351,352,5,88,0,0,352,362,
5,7,0,0,353,354,5,47,0,0,354,362,5,7,0,0,355,356,5,57,0,0,356,362,5,7,0,
0,357,358,5,56,0,0,358,362,5,7,0,0,359,360,5,74,0,0,360,362,5,7,0,0,361,
345,1,0,0,0,361,347,1,0,0,0,361,349,1,0,0,0,361,351,1,0,0,0,361,353,1,0,
0,0,361,355,1,0,0,0,361,357,1,0,0,0,361,359,1,0,0,0,362,59,1,0,0,0,363,365,
5,1,0,0,364,363,1,0,0,0,364,365,1,0,0,0,365,366,1,0,0,0,366,367,3,68,34,
0,367,61,1,0,0,0,368,369,3,64,32,0,369,370,3,68,34,0,370,373,1,0,0,0,371,
373,3,66,33,0,372,368,1,0,0,0,372,371,1,0,0,0,373,63,1,0,0,0,374,375,5,80,
0,0,375,385,5,7,0,0,376,377,5,36,0,0,377,385,5,7,0,0,378,379,5,82,0,0,379,
385,5,7,0,0,380,381,5,81,0,0,381,385,5,7,0,0,382,383,5,37,0,0,383,385,5,
7,0,0,384,374,1,0,0,0,384,376,1,0,0,0,384,378,1,0,0,0,384,380,1,0,0,0,384,
382,1,0,0,0,385,65,1,0,0,0,386,387,5,12,0,0,387,67,1,0,0,0,388,391,3,106,
53,0,389,391,3,70,35,0,390,388,1,0,0,0,390,389,1,0,0,0,391,69,1,0,0,0,392,
395,3,140,70,0,393,395,3,72,36,0,394,392,1,0,0,0,394,393,1,0,0,0,395,71,
1,0,0,0,396,402,5,35,0,0,397,398,5,103,0,0,398,402,5,10,0,0,399,400,5,32,
0,0,400,402,5,103,0,0,401,396,1,0,0,0,401,397,1,0,0,0,401,399,1,0,0,0,402,
73,1,0,0,0,403,404,3,80,40,0,404,405,3,76,38,0,405,75,1,0,0,0,406,408,3,
78,39,0,407,406,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,
410,77,1,0,0,0,411,409,1,0,0,0,412,413,5,24,0,0,413,414,3,2,1,0,414,415,
5,3,0,0,415,79,1,0,0,0,416,422,3,82,41,0,417,422,3,86,43,0,418,422,3,90,
45,0,419,422,3,92,46,0,420,422,3,94,47,0,421,416,1,0,0,0,421,417,1,0,0,0,
421,418,1,0,0,0,421,419,1,0,0,0,421,420,1,0,0,0,422,81,1,0,0,0,423,426,3,
84,42,0,424,426,5,98,0,0,425,423,1,0,0,0,425,424,1,0,0,0,426,83,1,0,0,0,
427,428,7,9,0,0,428,85,1,0,0,0,429,430,5,13,0,0,430,431,3,88,44,0,431,87,
1,0,0,0,432,433,3,140,70,0,433,89,1,0,0,0,434,436,5,26,0,0,435,437,3,2,1,
0,436,435,1,0,0,0,436,437,1,0,0,0,437,438,1,0,0,0,438,439,5,9,0,0,439,91,
1,0,0,0,440,441,5,11,0,0,441,93,1,0,0,0,442,443,4,47,0,0,443,444,3,140,70,
0,444,453,5,26,0,0,445,450,3,4,2,0,446,447,5,8,0,0,447,449,3,4,2,0,448,446,
1,0,0,0,449,452,1,0,0,0,450,448,1,0,0,0,450,451,1,0,0,0,451,454,1,0,0,0,
452,450,1,0,0,0,453,445,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,456,
5,9,0,0,456,95,1,0,0,0,457,459,3,104,52,0,458,460,5,31,0,0,459,458,1,0,0,
0,459,460,1,0,0,0,460,97,1,0,0,0,461,462,5,52,0,0,462,463,5,26,0,0,463,469,
5,9,0,0,464,466,3,102,51,0,465,467,3,100,50,0,466,465,1,0,0,0,466,467,1,
0,0,0,467,469,1,0,0,0,468,461,1,0,0,0,468,464,1,0,0,0,469,99,1,0,0,0,470,
471,7,10,0,0,471,101,1,0,0,0,472,478,3,106,53,0,473,474,5,68,0,0,474,475,
5,26,0,0,475,478,5,9,0,0,476,478,3,104,52,0,477,472,1,0,0,0,477,473,1,0,
0,0,477,476,1,0,0,0,478,103,1,0,0,0,479,480,3,140,70,0,480,105,1,0,0,0,481,
491,3,110,55,0,482,491,3,126,63,0,483,491,3,118,59,0,484,491,3,130,65,0,
485,491,3,122,61,0,486,491,3,116,58,0,487,491,3,114,57,0,488,491,3,112,56,
0,489,491,3,108,54,0,490,481,1,0,0,0,490,482,1,0,0,0,490,483,1,0,0,0,490,
484,1,0,0,0,490,485,1,0,0,0,490,486,1,0,0,0,490,487,1,0,0,0,490,488,1,0,
0,0,490,489,1,0,0,0,491,107,1,0,0,0,492,493,5,77,0,0,493,494,5,26,0,0,494,
495,5,9,0,0,495,109,1,0,0,0,496,497,5,49,0,0,497,500,5,26,0,0,498,501,3,
126,63,0,499,501,3,130,65,0,500,498,1,0,0,0,500,499,1,0,0,0,500,501,1,0,
0,0,501,502,1,0,0,0,502,503,5,9,0,0,503,111,1,0,0,0,504,505,5,90,0,0,505,
506,5,26,0,0,506,507,5,9,0,0,507,113,1,0,0,0,508,509,5,45,0,0,509,510,5,
26,0,0,510,511,5,9,0,0,511,115,1,0,0,0,512,513,5,83,0,0,513,515,5,26,0,0,
514,516,7,11,0,0,515,514,1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,518,
5,9,0,0,518,117,1,0,0,0,519,520,5,41,0,0,520,526,5,26,0,0,521,524,3,120,
60,0,522,523,5,8,0,0,523,525,3,138,69,0,524,522,1,0,0,0,524,525,1,0,0,0,
525,527,1,0,0,0,526,521,1,0,0,0,526,527,1,0,0,0,527,528,1,0,0,0,528,529,
5,9,0,0,529,119,1,0,0,0,530,533,3,134,67,0,531,533,5,35,0,0,532,530,1,0,
0,0,532,531,1,0,0,0,533,121,1,0,0,0,534,535,5,86,0,0,535,536,5,26,0,0,536,
537,3,124,62,0,537,538,5,9,0,0,538,123,1,0,0,0,539,540,3,134,67,0,540,125,
1,0,0,0,541,542,5,50,0,0,542,551,5,26,0,0,543,549,3,128,64,0,544,545,5,8,
0,0,545,547,3,138,69,0,546,548,5,31,0,0,547,546,1,0,0,0,547,548,1,0,0,0,
548,550,1,0,0,0,549,544,1,0,0,0,549,550,1,0,0,0,550,552,1,0,0,0,551,543,
1,0,0,0,551,552,1,0,0,0,552,553,1,0,0,0,553,554,5,9,0,0,554,127,1,0,0,0,
555,558,3,136,68,0,556,558,5,35,0,0,557,555,1,0,0,0,557,556,1,0,0,0,558,
129,1,0,0,0,559,560,5,87,0,0,560,561,5,26,0,0,561,562,3,132,66,0,562,563,
5,9,0,0,563,131,1,0,0,0,564,565,3,136,68,0,565,133,1,0,0,0,566,567,3,140,
70,0,567,135,1,0,0,0,568,569,3,140,70,0,569,137,1,0,0,0,570,571,3,140,70,
0,571,139,1,0,0,0,572,573,7,12,0,0,573,141,1,0,0,0,574,575,3,2,1,0,575,576,
5,105,0,0,576,578,1,0,0,0,577,574,1,0,0,0,578,579,1,0,0,0,579,577,1,0,0,
0,579,580,1,0,0,0,580,581,1,0,0,0,581,582,5,0,0,1,582,143,1,0,0,0,52,152,
159,178,194,214,222,229,233,238,245,253,261,269,276,282,288,294,299,314,
319,326,331,335,343,361,364,372,384,390,394,401,409,421,425,436,450,453,
459,466,468,477,490,500,515,524,526,532,547,549,551,557,579];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class XPath20Parser extends XPath20ParserBase {

    static grammarFileName = "XPath20Parser.g4";
    static literalNames = [ null, "'@'", "'!'", "']'", "'}'", "':='", "':'", 
                            "'::'", "','", "')'", "':*'", "'.'", "'..'", 
                            "'$'", "'=>'", "'='", "'>='", "'>>'", "'>'", 
                            "'<='", "'<<'", "'<'", "'-'", "'!='", "'['", 
                            "'{'", "'('", "'|'", "'+'", "'#'", "'||'", "'?'", 
                            "'*:'", "'/'", "'//'", "'*'", "'ancestor'", 
                            "'ancestor-or-self'", "'and'", "'array'", "'as'", 
                            "'attribute'", "'cast'", "'castable'", "'child'", 
                            "'comment'", "'descendant'", "'descendant-or-self'", 
                            "'div'", "'document-node'", "'element'", "'else'", 
                            "'empty-sequence'", "'eq'", "'every'", "'except'", 
                            "'following'", "'following-sibling'", "'for'", 
                            "'function'", "'ge'", "'gt'", "'idiv'", "'if'", 
                            "'in'", "'instance'", "'intersect'", "'is'", 
                            "'item'", "'le'", "'let'", "'lt'", "'map'", 
                            "'mod'", "'namespace'", "'namespace-node'", 
                            "'ne'", "'node'", "'of'", "'or'", "'parent'", 
                            "'preceding'", "'preceding-sibling'", "'processing-instruction'", 
                            "'return'", "'satisfies'", "'schema-attribute'", 
                            "'schema-element'", "'self'", "'some'", "'text'", 
                            "'then'", "'to'", "'treat'", "'union'", null, 
                            null, null, null, null, null, null, null, null, 
                            null, "';'" ];
    static symbolicNames = [ null, "AT", "BANG", "CB", "CC", "CEQ", "COLON", 
                             "COLONCOLON", "COMMA", "CP", "CS", "D", "DD", 
                             "DOLLAR", "EG", "EQ", "GE", "GG", "GT", "LE", 
                             "LL", "LT", "MINUS", "NE", "OB", "OC", "OP", 
                             "P", "PLUS", "POUND", "PP", "QM", "SC", "SLASH", 
                             "SS", "STAR", "KW_ANCESTOR", "KW_ANCESTOR_OR_SELF", 
                             "KW_AND", "KW_ARRAY", "KW_AS", "KW_ATTRIBUTE", 
                             "KW_CAST", "KW_CASTABLE", "KW_CHILD", "KW_COMMENT", 
                             "KW_DESCENDANT", "KW_DESCENDANT_OR_SELF", "KW_DIV", 
                             "KW_DOCUMENT_NODE", "KW_ELEMENT", "KW_ELSE", 
                             "KW_EMPTY_SEQUENCE", "KW_EQ", "KW_EVERY", "KW_EXCEPT", 
                             "KW_FOLLOWING", "KW_FOLLOWING_SIBLING", "KW_FOR", 
                             "KW_FUNCTION", "KW_GE", "KW_GT", "KW_IDIV", 
                             "KW_IF", "KW_IN", "KW_INSTANCE", "KW_INTERSECT", 
                             "KW_IS", "KW_ITEM", "KW_LE", "KW_LET", "KW_LT", 
                             "KW_MAP", "KW_MOD", "KW_NAMESPACE", "KW_NAMESPACE_NODE", 
                             "KW_NE", "KW_NODE", "KW_OF", "KW_OR", "KW_PARENT", 
                             "KW_PRECEDING", "KW_PRECEDING_SIBLING", "KW_PROCESSING_INSTRUCTION", 
                             "KW_RETURN", "KW_SATISFIES", "KW_SCHEMA_ATTRIBUTE", 
                             "KW_SCHEMA_ELEMENT", "KW_SELF", "KW_SOME", 
                             "KW_TEXT", "KW_THEN", "KW_TO", "KW_TREAT", 
                             "KW_UNION", "IntegerLiteral", "DecimalLiteral", 
                             "DoubleLiteral", "StringLiteral", "URIQualifiedName", 
                             "BracedURILiteral", "Comment", "QName", "NCName", 
                             "Whitespace", "SEMI" ];
    static ruleNames = [ "xpath", "expr", "exprsingle", "forexpr", "simpleforclause", 
                         "quantifiedexpr", "ifexpr", "orexpr", "andexpr", 
                         "comparisonexpr", "rangeexpr", "additiveexpr", 
                         "multiplicativeexpr", "unionexpr", "intersectexceptexpr", 
                         "instanceofexpr", "treatexpr", "castableexpr", 
                         "castexpr", "unaryexpr", "valueexpr", "generalcomp", 
                         "valuecomp", "nodecomp", "pathexpr", "relativepathexpr", 
                         "stepexpr", "axisstep", "forwardstep", "forwardaxis", 
                         "abbrevforwardstep", "reversestep", "reverseaxis", 
                         "abbrevreversestep", "nodetest", "nametest", "wildcard", 
                         "filterexpr", "predicatelist", "predicate", "primaryexpr", 
                         "literal", "numericliteral", "varref", "varname", 
                         "parenthesizedexpr", "contextitemexpr", "functioncall", 
                         "singletype", "sequencetype", "occurrenceindicator", 
                         "itemtype", "atomictype", "kindtest", "anykindtest", 
                         "documenttest", "texttest", "commenttest", "pitest", 
                         "attributetest", "attribnameorwildcard", "schemaattributetest", 
                         "attributedeclaration", "elementtest", "elementnameorwildcard", 
                         "schemaelementtest", "elementdeclaration", "attributename", 
                         "elementname", "typename_", "qname", "auxilary" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = XPath20Parser.ruleNames;
        this.literalNames = XPath20Parser.literalNames;
        this.symbolicNames = XPath20Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 47:
    	    		return this.functioncall_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    functioncall_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return  this.IsFuncCall() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	xpath() {
	    let localctx = new XpathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, XPath20Parser.RULE_xpath);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 144;
	        this.expr();
	        this.state = 145;
	        this.match(XPath20Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, XPath20Parser.RULE_expr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.exprsingle();
	        this.state = 152;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 148;
	            this.match(XPath20Parser.COMMA);
	            this.state = 149;
	            this.exprsingle();
	            this.state = 154;
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



	exprsingle() {
	    let localctx = new ExprsingleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, XPath20Parser.RULE_exprsingle);
	    try {
	        this.state = 159;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 155;
	            this.forexpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.quantifiedexpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 157;
	            this.ifexpr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 158;
	            this.orexpr();
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



	forexpr() {
	    let localctx = new ForexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, XPath20Parser.RULE_forexpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 161;
	        this.simpleforclause();
	        this.state = 162;
	        this.match(XPath20Parser.KW_RETURN);
	        this.state = 163;
	        this.exprsingle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	simpleforclause() {
	    let localctx = new SimpleforclauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, XPath20Parser.RULE_simpleforclause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        this.match(XPath20Parser.KW_FOR);
	        this.state = 166;
	        this.match(XPath20Parser.DOLLAR);
	        this.state = 167;
	        this.varname();
	        this.state = 168;
	        this.match(XPath20Parser.KW_IN);
	        this.state = 169;
	        this.exprsingle();
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 170;
	            this.match(XPath20Parser.COMMA);
	            this.state = 171;
	            this.match(XPath20Parser.DOLLAR);
	            this.state = 172;
	            this.varname();
	            this.state = 173;
	            this.match(XPath20Parser.KW_IN);
	            this.state = 174;
	            this.exprsingle();
	            this.state = 180;
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



	quantifiedexpr() {
	    let localctx = new QuantifiedexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, XPath20Parser.RULE_quantifiedexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 181;
	        _la = this._input.LA(1);
	        if(!(_la===54 || _la===89)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 182;
	        this.match(XPath20Parser.DOLLAR);
	        this.state = 183;
	        this.varname();
	        this.state = 184;
	        this.match(XPath20Parser.KW_IN);
	        this.state = 185;
	        this.exprsingle();
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 186;
	            this.match(XPath20Parser.COMMA);
	            this.state = 187;
	            this.match(XPath20Parser.DOLLAR);
	            this.state = 188;
	            this.varname();
	            this.state = 189;
	            this.match(XPath20Parser.KW_IN);
	            this.state = 190;
	            this.exprsingle();
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 197;
	        this.match(XPath20Parser.KW_SATISFIES);
	        this.state = 198;
	        this.exprsingle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifexpr() {
	    let localctx = new IfexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, XPath20Parser.RULE_ifexpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 200;
	        this.match(XPath20Parser.KW_IF);
	        this.state = 201;
	        this.match(XPath20Parser.OP);
	        this.state = 202;
	        this.expr();
	        this.state = 203;
	        this.match(XPath20Parser.CP);
	        this.state = 204;
	        this.match(XPath20Parser.KW_THEN);
	        this.state = 205;
	        this.exprsingle();
	        this.state = 206;
	        this.match(XPath20Parser.KW_ELSE);
	        this.state = 207;
	        this.exprsingle();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orexpr() {
	    let localctx = new OrexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, XPath20Parser.RULE_orexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.andexpr();
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===79) {
	            this.state = 210;
	            this.match(XPath20Parser.KW_OR);
	            this.state = 211;
	            this.andexpr();
	            this.state = 216;
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



	andexpr() {
	    let localctx = new AndexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, XPath20Parser.RULE_andexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.comparisonexpr();
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 218;
	            this.match(XPath20Parser.KW_AND);
	            this.state = 219;
	            this.comparisonexpr();
	            this.state = 224;
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



	comparisonexpr() {
	    let localctx = new ComparisonexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, XPath20Parser.RULE_comparisonexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.rangeexpr();
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 12550144) !== 0) || ((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 8733057) !== 0)) {
	            this.state = 229;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 53:
	            case 60:
	            case 61:
	            case 69:
	            case 71:
	            case 76:
	                this.state = 226;
	                this.valuecomp();
	                break;
	            case 15:
	            case 16:
	            case 18:
	            case 19:
	            case 21:
	            case 23:
	                this.state = 227;
	                this.generalcomp();
	                break;
	            case 17:
	            case 20:
	            case 67:
	                this.state = 228;
	                this.nodecomp();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 231;
	            this.rangeexpr();
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



	rangeexpr() {
	    let localctx = new RangeexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, XPath20Parser.RULE_rangeexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.additiveexpr();
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===92) {
	            this.state = 236;
	            this.match(XPath20Parser.KW_TO);
	            this.state = 237;
	            this.additiveexpr();
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



	additiveexpr() {
	    let localctx = new AdditiveexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, XPath20Parser.RULE_additiveexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.multiplicativeexpr();
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===22 || _la===28) {
	            this.state = 241;
	            _la = this._input.LA(1);
	            if(!(_la===22 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 242;
	            this.multiplicativeexpr();
	            this.state = 247;
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



	multiplicativeexpr() {
	    let localctx = new MultiplicativeexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, XPath20Parser.RULE_multiplicativeexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.unionexpr();
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134225921) !== 0) || _la===73) {
	            this.state = 249;
	            _la = this._input.LA(1);
	            if(!(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134225921) !== 0) || _la===73)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 250;
	            this.unionexpr();
	            this.state = 255;
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



	unionexpr() {
	    let localctx = new UnionexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, XPath20Parser.RULE_unionexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.intersectexceptexpr();
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27 || _la===94) {
	            this.state = 257;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===94)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 258;
	            this.intersectexceptexpr();
	            this.state = 263;
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



	intersectexceptexpr() {
	    let localctx = new IntersectexceptexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, XPath20Parser.RULE_intersectexceptexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.instanceofexpr();
	        this.state = 269;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===55 || _la===66) {
	            this.state = 265;
	            _la = this._input.LA(1);
	            if(!(_la===55 || _la===66)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 266;
	            this.instanceofexpr();
	            this.state = 271;
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



	instanceofexpr() {
	    let localctx = new InstanceofexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, XPath20Parser.RULE_instanceofexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.treatexpr();
	        this.state = 276;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===65) {
	            this.state = 273;
	            this.match(XPath20Parser.KW_INSTANCE);
	            this.state = 274;
	            this.match(XPath20Parser.KW_OF);
	            this.state = 275;
	            this.sequencetype();
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



	treatexpr() {
	    let localctx = new TreatexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, XPath20Parser.RULE_treatexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.castableexpr();
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===93) {
	            this.state = 279;
	            this.match(XPath20Parser.KW_TREAT);
	            this.state = 280;
	            this.match(XPath20Parser.KW_AS);
	            this.state = 281;
	            this.sequencetype();
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



	castableexpr() {
	    let localctx = new CastableexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, XPath20Parser.RULE_castableexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 284;
	        this.castexpr();
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===43) {
	            this.state = 285;
	            this.match(XPath20Parser.KW_CASTABLE);
	            this.state = 286;
	            this.match(XPath20Parser.KW_AS);
	            this.state = 287;
	            this.singletype();
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



	castexpr() {
	    let localctx = new CastexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, XPath20Parser.RULE_castexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.unaryexpr();
	        this.state = 294;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 291;
	            this.match(XPath20Parser.KW_CAST);
	            this.state = 292;
	            this.match(XPath20Parser.KW_AS);
	            this.state = 293;
	            this.singletype();
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



	unaryexpr() {
	    let localctx = new UnaryexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, XPath20Parser.RULE_unaryexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 296;
	                _la = this._input.LA(1);
	                if(!(_la===22 || _la===28)) {
	                this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                } 
	            }
	            this.state = 301;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	        }

	        this.state = 302;
	        this.valueexpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueexpr() {
	    let localctx = new ValueexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, XPath20Parser.RULE_valueexpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.pathexpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	generalcomp() {
	    let localctx = new GeneralcompContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, XPath20Parser.RULE_generalcomp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 11370496) !== 0))) {
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



	valuecomp() {
	    let localctx = new ValuecompContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, XPath20Parser.RULE_valuecomp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 308;
	        _la = this._input.LA(1);
	        if(!(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 8716673) !== 0))) {
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



	nodecomp() {
	    let localctx = new NodecompContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, XPath20Parser.RULE_nodecomp);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 310;
	        _la = this._input.LA(1);
	        if(!(_la===17 || _la===20 || _la===67)) {
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



	pathexpr() {
	    let localctx = new PathexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, XPath20Parser.RULE_pathexpr);
	    try {
	        this.state = 319;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            this.match(XPath20Parser.SLASH);
	            this.state = 314;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	            if(la_===1) {
	                this.state = 313;
	                this.relativepathexpr();

	            }
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 316;
	            this.match(XPath20Parser.SS);
	            this.state = 317;
	            this.relativepathexpr();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 318;
	            this.relativepathexpr();
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



	relativepathexpr() {
	    let localctx = new RelativepathexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, XPath20Parser.RULE_relativepathexpr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 321;
	        this.stepexpr();
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33 || _la===34) {
	            this.state = 322;
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===34)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 323;
	            this.stepexpr();
	            this.state = 328;
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



	stepexpr() {
	    let localctx = new StepexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, XPath20Parser.RULE_stepexpr);
	    try {
	        this.state = 331;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 329;
	            this.filterexpr();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 330;
	            this.axisstep();
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



	axisstep() {
	    let localctx = new AxisstepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, XPath20Parser.RULE_axisstep);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,22,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 333;
	            this.reversestep();
	            break;

	        case 2:
	            this.state = 334;
	            this.forwardstep();
	            break;

	        }
	        this.state = 337;
	        this.predicatelist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forwardstep() {
	    let localctx = new ForwardstepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, XPath20Parser.RULE_forwardstep);
	    try {
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 339;
	            this.forwardaxis();
	            this.state = 340;
	            this.nodetest();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 342;
	            this.abbrevforwardstep();
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



	forwardaxis() {
	    let localctx = new ForwardaxisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, XPath20Parser.RULE_forwardaxis);
	    try {
	        this.state = 361;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 44:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 345;
	            this.match(XPath20Parser.KW_CHILD);
	            this.state = 346;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 347;
	            this.match(XPath20Parser.KW_DESCENDANT);
	            this.state = 348;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 349;
	            this.match(XPath20Parser.KW_ATTRIBUTE);
	            this.state = 350;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 88:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 351;
	            this.match(XPath20Parser.KW_SELF);
	            this.state = 352;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 353;
	            this.match(XPath20Parser.KW_DESCENDANT_OR_SELF);
	            this.state = 354;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 355;
	            this.match(XPath20Parser.KW_FOLLOWING_SIBLING);
	            this.state = 356;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 357;
	            this.match(XPath20Parser.KW_FOLLOWING);
	            this.state = 358;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 74:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 359;
	            this.match(XPath20Parser.KW_NAMESPACE);
	            this.state = 360;
	            this.match(XPath20Parser.COLONCOLON);
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



	abbrevforwardstep() {
	    let localctx = new AbbrevforwardstepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, XPath20Parser.RULE_abbrevforwardstep);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 363;
	            this.match(XPath20Parser.AT);
	        }

	        this.state = 366;
	        this.nodetest();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reversestep() {
	    let localctx = new ReversestepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, XPath20Parser.RULE_reversestep);
	    try {
	        this.state = 372;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	        case 37:
	        case 80:
	        case 81:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 368;
	            this.reverseaxis();
	            this.state = 369;
	            this.nodetest();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 371;
	            this.abbrevreversestep();
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



	reverseaxis() {
	    let localctx = new ReverseaxisContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, XPath20Parser.RULE_reverseaxis);
	    try {
	        this.state = 384;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 80:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 374;
	            this.match(XPath20Parser.KW_PARENT);
	            this.state = 375;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            this.match(XPath20Parser.KW_ANCESTOR);
	            this.state = 377;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 82:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 378;
	            this.match(XPath20Parser.KW_PRECEDING_SIBLING);
	            this.state = 379;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 81:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 380;
	            this.match(XPath20Parser.KW_PRECEDING);
	            this.state = 381;
	            this.match(XPath20Parser.COLONCOLON);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 382;
	            this.match(XPath20Parser.KW_ANCESTOR_OR_SELF);
	            this.state = 383;
	            this.match(XPath20Parser.COLONCOLON);
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



	abbrevreversestep() {
	    let localctx = new AbbrevreversestepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, XPath20Parser.RULE_abbrevreversestep);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(XPath20Parser.DD);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nodetest() {
	    let localctx = new NodetestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, XPath20Parser.RULE_nodetest);
	    try {
	        this.state = 390;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 388;
	            this.kindtest();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 389;
	            this.nametest();
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



	nametest() {
	    let localctx = new NametestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, XPath20Parser.RULE_nametest);
	    try {
	        this.state = 394;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
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
	        case 90:
	        case 91:
	        case 93:
	        case 94:
	        case 99:
	        case 102:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 392;
	            this.qname();
	            break;
	        case 32:
	        case 35:
	        case 103:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 393;
	            this.wildcard();
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



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, XPath20Parser.RULE_wildcard);
	    try {
	        this.state = 401;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 396;
	            this.match(XPath20Parser.STAR);
	            break;
	        case 103:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 397;
	            this.match(XPath20Parser.NCName);
	            this.state = 398;
	            this.match(XPath20Parser.CS);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 399;
	            this.match(XPath20Parser.SC);
	            this.state = 400;
	            this.match(XPath20Parser.NCName);
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



	filterexpr() {
	    let localctx = new FilterexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, XPath20Parser.RULE_filterexpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.primaryexpr();
	        this.state = 404;
	        this.predicatelist();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicatelist() {
	    let localctx = new PredicatelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, XPath20Parser.RULE_predicatelist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 406;
	            this.predicate();
	            this.state = 411;
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



	predicate() {
	    let localctx = new PredicateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, XPath20Parser.RULE_predicate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(XPath20Parser.OB);
	        this.state = 413;
	        this.expr();
	        this.state = 414;
	        this.match(XPath20Parser.CB);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryexpr() {
	    let localctx = new PrimaryexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, XPath20Parser.RULE_primaryexpr);
	    try {
	        this.state = 421;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 416;
	            this.literal();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 417;
	            this.varref();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 418;
	            this.parenthesizedexpr();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 419;
	            this.contextitemexpr();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 420;
	            this.functioncall();
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



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, XPath20Parser.RULE_literal);
	    try {
	        this.state = 425;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 95:
	        case 96:
	        case 97:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 423;
	            this.numericliteral();
	            break;
	        case 98:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 424;
	            this.match(XPath20Parser.StringLiteral);
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



	numericliteral() {
	    let localctx = new NumericliteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, XPath20Parser.RULE_numericliteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 427;
	        _la = this._input.LA(1);
	        if(!(((((_la - 95)) & ~0x1f) === 0 && ((1 << (_la - 95)) & 7) !== 0))) {
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



	varref() {
	    let localctx = new VarrefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, XPath20Parser.RULE_varref);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.match(XPath20Parser.DOLLAR);
	        this.state = 430;
	        this.varname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varname() {
	    let localctx = new VarnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, XPath20Parser.RULE_varname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 432;
	        this.qname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parenthesizedexpr() {
	    let localctx = new ParenthesizedexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, XPath20Parser.RULE_parenthesizedexpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 434;
	        this.match(XPath20Parser.OP);
	        this.state = 436;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	        if(la_===1) {
	            this.state = 435;
	            this.expr();

	        }
	        this.state = 438;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contextitemexpr() {
	    let localctx = new ContextitemexprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, XPath20Parser.RULE_contextitemexpr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 440;
	        this.match(XPath20Parser.D);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functioncall() {
	    let localctx = new FunctioncallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, XPath20Parser.RULE_functioncall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        if (!(  this.IsFuncCall() )) {
	            throw new antlr4.error.FailedPredicateException(this, " this.IsFuncCall() ");
	        }
	        this.state = 443;
	        this.qname();
	        this.state = 444;
	        this.match(XPath20Parser.OP);
	        this.state = 453;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        if(la_===1) {
	            this.state = 445;
	            this.exprsingle();
	            this.state = 450;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===8) {
	                this.state = 446;
	                this.match(XPath20Parser.COMMA);
	                this.state = 447;
	                this.exprsingle();
	                this.state = 452;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }

	        }
	        this.state = 455;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	singletype() {
	    let localctx = new SingletypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, XPath20Parser.RULE_singletype);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this.atomictype();
	        this.state = 459;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===31) {
	            this.state = 458;
	            this.match(XPath20Parser.QM);
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



	sequencetype() {
	    let localctx = new SequencetypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, XPath20Parser.RULE_sequencetype);
	    try {
	        this.state = 468;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 461;
	            this.match(XPath20Parser.KW_EMPTY_SEQUENCE);
	            this.state = 462;
	            this.match(XPath20Parser.OP);
	            this.state = 463;
	            this.match(XPath20Parser.CP);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 464;
	            this.itemtype();
	            this.state = 466;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	            if(la_===1) {
	                this.state = 465;
	                this.occurrenceindicator();

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



	occurrenceindicator() {
	    let localctx = new OccurrenceindicatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, XPath20Parser.RULE_occurrenceindicator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 470;
	        _la = this._input.LA(1);
	        if(!(((((_la - 28)) & ~0x1f) === 0 && ((1 << (_la - 28)) & 137) !== 0))) {
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



	itemtype() {
	    let localctx = new ItemtypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, XPath20Parser.RULE_itemtype);
	    try {
	        this.state = 477;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 472;
	            this.kindtest();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 473;
	            this.match(XPath20Parser.KW_ITEM);
	            this.state = 474;
	            this.match(XPath20Parser.OP);
	            this.state = 475;
	            this.match(XPath20Parser.CP);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 476;
	            this.atomictype();
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



	atomictype() {
	    let localctx = new AtomictypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, XPath20Parser.RULE_atomictype);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.qname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	kindtest() {
	    let localctx = new KindtestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, XPath20Parser.RULE_kindtest);
	    try {
	        this.state = 490;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 481;
	            this.documenttest();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 482;
	            this.elementtest();
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 483;
	            this.attributetest();
	            break;
	        case 87:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 484;
	            this.schemaelementtest();
	            break;
	        case 86:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 485;
	            this.schemaattributetest();
	            break;
	        case 83:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 486;
	            this.pitest();
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 487;
	            this.commenttest();
	            break;
	        case 90:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 488;
	            this.texttest();
	            break;
	        case 77:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 489;
	            this.anykindtest();
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



	anykindtest() {
	    let localctx = new AnykindtestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, XPath20Parser.RULE_anykindtest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 492;
	        this.match(XPath20Parser.KW_NODE);
	        this.state = 493;
	        this.match(XPath20Parser.OP);
	        this.state = 494;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	documenttest() {
	    let localctx = new DocumenttestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, XPath20Parser.RULE_documenttest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 496;
	        this.match(XPath20Parser.KW_DOCUMENT_NODE);
	        this.state = 497;
	        this.match(XPath20Parser.OP);
	        this.state = 500;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 50:
	        	this.state = 498;
	        	this.elementtest();
	        	break;
	        case 87:
	        	this.state = 499;
	        	this.schemaelementtest();
	        	break;
	        case 9:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 502;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	texttest() {
	    let localctx = new TexttestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, XPath20Parser.RULE_texttest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504;
	        this.match(XPath20Parser.KW_TEXT);
	        this.state = 505;
	        this.match(XPath20Parser.OP);
	        this.state = 506;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commenttest() {
	    let localctx = new CommenttestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, XPath20Parser.RULE_commenttest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 508;
	        this.match(XPath20Parser.KW_COMMENT);
	        this.state = 509;
	        this.match(XPath20Parser.OP);
	        this.state = 510;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pitest() {
	    let localctx = new PitestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, XPath20Parser.RULE_pitest);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 512;
	        this.match(XPath20Parser.KW_PROCESSING_INSTRUCTION);
	        this.state = 513;
	        this.match(XPath20Parser.OP);
	        this.state = 515;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===98 || _la===103) {
	            this.state = 514;
	            _la = this._input.LA(1);
	            if(!(_la===98 || _la===103)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 517;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributetest() {
	    let localctx = new AttributetestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, XPath20Parser.RULE_attributetest);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 519;
	        this.match(XPath20Parser.KW_ATTRIBUTE);
	        this.state = 520;
	        this.match(XPath20Parser.OP);
	        this.state = 526;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4294967295) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 234881023) !== 0) || _la===99 || _la===102) {
	            this.state = 521;
	            this.attribnameorwildcard();
	            this.state = 524;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 522;
	                this.match(XPath20Parser.COMMA);
	                this.state = 523;
	                this.typename_();
	            }

	        }

	        this.state = 528;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attribnameorwildcard() {
	    let localctx = new AttribnameorwildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, XPath20Parser.RULE_attribnameorwildcard);
	    try {
	        this.state = 532;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
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
	        case 90:
	        case 91:
	        case 93:
	        case 94:
	        case 99:
	        case 102:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 530;
	            this.attributename();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 531;
	            this.match(XPath20Parser.STAR);
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



	schemaattributetest() {
	    let localctx = new SchemaattributetestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, XPath20Parser.RULE_schemaattributetest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.match(XPath20Parser.KW_SCHEMA_ATTRIBUTE);
	        this.state = 535;
	        this.match(XPath20Parser.OP);
	        this.state = 536;
	        this.attributedeclaration();
	        this.state = 537;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributedeclaration() {
	    let localctx = new AttributedeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, XPath20Parser.RULE_attributedeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 539;
	        this.attributename();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementtest() {
	    let localctx = new ElementtestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, XPath20Parser.RULE_elementtest);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 541;
	        this.match(XPath20Parser.KW_ELEMENT);
	        this.state = 542;
	        this.match(XPath20Parser.OP);
	        this.state = 551;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 4294967295) !== 0) || ((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 234881023) !== 0) || _la===99 || _la===102) {
	            this.state = 543;
	            this.elementnameorwildcard();
	            this.state = 549;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===8) {
	                this.state = 544;
	                this.match(XPath20Parser.COMMA);
	                this.state = 545;
	                this.typename_();
	                this.state = 547;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===31) {
	                    this.state = 546;
	                    this.match(XPath20Parser.QM);
	                }

	            }

	        }

	        this.state = 553;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementnameorwildcard() {
	    let localctx = new ElementnameorwildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, XPath20Parser.RULE_elementnameorwildcard);
	    try {
	        this.state = 557;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 53:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	        case 76:
	        case 77:
	        case 78:
	        case 79:
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
	        case 90:
	        case 91:
	        case 93:
	        case 94:
	        case 99:
	        case 102:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 555;
	            this.elementname();
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 556;
	            this.match(XPath20Parser.STAR);
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



	schemaelementtest() {
	    let localctx = new SchemaelementtestContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, XPath20Parser.RULE_schemaelementtest);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 559;
	        this.match(XPath20Parser.KW_SCHEMA_ELEMENT);
	        this.state = 560;
	        this.match(XPath20Parser.OP);
	        this.state = 561;
	        this.elementdeclaration();
	        this.state = 562;
	        this.match(XPath20Parser.CP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementdeclaration() {
	    let localctx = new ElementdeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, XPath20Parser.RULE_elementdeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 564;
	        this.elementname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	attributename() {
	    let localctx = new AttributenameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, XPath20Parser.RULE_attributename);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
	        this.qname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementname() {
	    let localctx = new ElementnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, XPath20Parser.RULE_elementname);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this.qname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typename_() {
	    let localctx = new Typename_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, XPath20Parser.RULE_typename_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 570;
	        this.qname();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	qname() {
	    let localctx = new QnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, XPath20Parser.RULE_qname);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 572;
	        _la = this._input.LA(1);
	        if(!(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 4294967295) !== 0) || ((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 2264924159) !== 0) || _la===102)) {
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



	auxilary() {
	    let localctx = new AuxilaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, XPath20Parser.RULE_auxilary);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 577; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 574;
	        		this.expr();
	        		this.state = 575;
	        		this.match(XPath20Parser.SEMI);
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 579; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,51, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 581;
	        this.match(XPath20Parser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

XPath20Parser.EOF = antlr4.Token.EOF;
XPath20Parser.AT = 1;
XPath20Parser.BANG = 2;
XPath20Parser.CB = 3;
XPath20Parser.CC = 4;
XPath20Parser.CEQ = 5;
XPath20Parser.COLON = 6;
XPath20Parser.COLONCOLON = 7;
XPath20Parser.COMMA = 8;
XPath20Parser.CP = 9;
XPath20Parser.CS = 10;
XPath20Parser.D = 11;
XPath20Parser.DD = 12;
XPath20Parser.DOLLAR = 13;
XPath20Parser.EG = 14;
XPath20Parser.EQ = 15;
XPath20Parser.GE = 16;
XPath20Parser.GG = 17;
XPath20Parser.GT = 18;
XPath20Parser.LE = 19;
XPath20Parser.LL = 20;
XPath20Parser.LT = 21;
XPath20Parser.MINUS = 22;
XPath20Parser.NE = 23;
XPath20Parser.OB = 24;
XPath20Parser.OC = 25;
XPath20Parser.OP = 26;
XPath20Parser.P = 27;
XPath20Parser.PLUS = 28;
XPath20Parser.POUND = 29;
XPath20Parser.PP = 30;
XPath20Parser.QM = 31;
XPath20Parser.SC = 32;
XPath20Parser.SLASH = 33;
XPath20Parser.SS = 34;
XPath20Parser.STAR = 35;
XPath20Parser.KW_ANCESTOR = 36;
XPath20Parser.KW_ANCESTOR_OR_SELF = 37;
XPath20Parser.KW_AND = 38;
XPath20Parser.KW_ARRAY = 39;
XPath20Parser.KW_AS = 40;
XPath20Parser.KW_ATTRIBUTE = 41;
XPath20Parser.KW_CAST = 42;
XPath20Parser.KW_CASTABLE = 43;
XPath20Parser.KW_CHILD = 44;
XPath20Parser.KW_COMMENT = 45;
XPath20Parser.KW_DESCENDANT = 46;
XPath20Parser.KW_DESCENDANT_OR_SELF = 47;
XPath20Parser.KW_DIV = 48;
XPath20Parser.KW_DOCUMENT_NODE = 49;
XPath20Parser.KW_ELEMENT = 50;
XPath20Parser.KW_ELSE = 51;
XPath20Parser.KW_EMPTY_SEQUENCE = 52;
XPath20Parser.KW_EQ = 53;
XPath20Parser.KW_EVERY = 54;
XPath20Parser.KW_EXCEPT = 55;
XPath20Parser.KW_FOLLOWING = 56;
XPath20Parser.KW_FOLLOWING_SIBLING = 57;
XPath20Parser.KW_FOR = 58;
XPath20Parser.KW_FUNCTION = 59;
XPath20Parser.KW_GE = 60;
XPath20Parser.KW_GT = 61;
XPath20Parser.KW_IDIV = 62;
XPath20Parser.KW_IF = 63;
XPath20Parser.KW_IN = 64;
XPath20Parser.KW_INSTANCE = 65;
XPath20Parser.KW_INTERSECT = 66;
XPath20Parser.KW_IS = 67;
XPath20Parser.KW_ITEM = 68;
XPath20Parser.KW_LE = 69;
XPath20Parser.KW_LET = 70;
XPath20Parser.KW_LT = 71;
XPath20Parser.KW_MAP = 72;
XPath20Parser.KW_MOD = 73;
XPath20Parser.KW_NAMESPACE = 74;
XPath20Parser.KW_NAMESPACE_NODE = 75;
XPath20Parser.KW_NE = 76;
XPath20Parser.KW_NODE = 77;
XPath20Parser.KW_OF = 78;
XPath20Parser.KW_OR = 79;
XPath20Parser.KW_PARENT = 80;
XPath20Parser.KW_PRECEDING = 81;
XPath20Parser.KW_PRECEDING_SIBLING = 82;
XPath20Parser.KW_PROCESSING_INSTRUCTION = 83;
XPath20Parser.KW_RETURN = 84;
XPath20Parser.KW_SATISFIES = 85;
XPath20Parser.KW_SCHEMA_ATTRIBUTE = 86;
XPath20Parser.KW_SCHEMA_ELEMENT = 87;
XPath20Parser.KW_SELF = 88;
XPath20Parser.KW_SOME = 89;
XPath20Parser.KW_TEXT = 90;
XPath20Parser.KW_THEN = 91;
XPath20Parser.KW_TO = 92;
XPath20Parser.KW_TREAT = 93;
XPath20Parser.KW_UNION = 94;
XPath20Parser.IntegerLiteral = 95;
XPath20Parser.DecimalLiteral = 96;
XPath20Parser.DoubleLiteral = 97;
XPath20Parser.StringLiteral = 98;
XPath20Parser.URIQualifiedName = 99;
XPath20Parser.BracedURILiteral = 100;
XPath20Parser.Comment = 101;
XPath20Parser.QName = 102;
XPath20Parser.NCName = 103;
XPath20Parser.Whitespace = 104;
XPath20Parser.SEMI = 105;

XPath20Parser.RULE_xpath = 0;
XPath20Parser.RULE_expr = 1;
XPath20Parser.RULE_exprsingle = 2;
XPath20Parser.RULE_forexpr = 3;
XPath20Parser.RULE_simpleforclause = 4;
XPath20Parser.RULE_quantifiedexpr = 5;
XPath20Parser.RULE_ifexpr = 6;
XPath20Parser.RULE_orexpr = 7;
XPath20Parser.RULE_andexpr = 8;
XPath20Parser.RULE_comparisonexpr = 9;
XPath20Parser.RULE_rangeexpr = 10;
XPath20Parser.RULE_additiveexpr = 11;
XPath20Parser.RULE_multiplicativeexpr = 12;
XPath20Parser.RULE_unionexpr = 13;
XPath20Parser.RULE_intersectexceptexpr = 14;
XPath20Parser.RULE_instanceofexpr = 15;
XPath20Parser.RULE_treatexpr = 16;
XPath20Parser.RULE_castableexpr = 17;
XPath20Parser.RULE_castexpr = 18;
XPath20Parser.RULE_unaryexpr = 19;
XPath20Parser.RULE_valueexpr = 20;
XPath20Parser.RULE_generalcomp = 21;
XPath20Parser.RULE_valuecomp = 22;
XPath20Parser.RULE_nodecomp = 23;
XPath20Parser.RULE_pathexpr = 24;
XPath20Parser.RULE_relativepathexpr = 25;
XPath20Parser.RULE_stepexpr = 26;
XPath20Parser.RULE_axisstep = 27;
XPath20Parser.RULE_forwardstep = 28;
XPath20Parser.RULE_forwardaxis = 29;
XPath20Parser.RULE_abbrevforwardstep = 30;
XPath20Parser.RULE_reversestep = 31;
XPath20Parser.RULE_reverseaxis = 32;
XPath20Parser.RULE_abbrevreversestep = 33;
XPath20Parser.RULE_nodetest = 34;
XPath20Parser.RULE_nametest = 35;
XPath20Parser.RULE_wildcard = 36;
XPath20Parser.RULE_filterexpr = 37;
XPath20Parser.RULE_predicatelist = 38;
XPath20Parser.RULE_predicate = 39;
XPath20Parser.RULE_primaryexpr = 40;
XPath20Parser.RULE_literal = 41;
XPath20Parser.RULE_numericliteral = 42;
XPath20Parser.RULE_varref = 43;
XPath20Parser.RULE_varname = 44;
XPath20Parser.RULE_parenthesizedexpr = 45;
XPath20Parser.RULE_contextitemexpr = 46;
XPath20Parser.RULE_functioncall = 47;
XPath20Parser.RULE_singletype = 48;
XPath20Parser.RULE_sequencetype = 49;
XPath20Parser.RULE_occurrenceindicator = 50;
XPath20Parser.RULE_itemtype = 51;
XPath20Parser.RULE_atomictype = 52;
XPath20Parser.RULE_kindtest = 53;
XPath20Parser.RULE_anykindtest = 54;
XPath20Parser.RULE_documenttest = 55;
XPath20Parser.RULE_texttest = 56;
XPath20Parser.RULE_commenttest = 57;
XPath20Parser.RULE_pitest = 58;
XPath20Parser.RULE_attributetest = 59;
XPath20Parser.RULE_attribnameorwildcard = 60;
XPath20Parser.RULE_schemaattributetest = 61;
XPath20Parser.RULE_attributedeclaration = 62;
XPath20Parser.RULE_elementtest = 63;
XPath20Parser.RULE_elementnameorwildcard = 64;
XPath20Parser.RULE_schemaelementtest = 65;
XPath20Parser.RULE_elementdeclaration = 66;
XPath20Parser.RULE_attributename = 67;
XPath20Parser.RULE_elementname = 68;
XPath20Parser.RULE_typename_ = 69;
XPath20Parser.RULE_qname = 70;
XPath20Parser.RULE_auxilary = 71;

class XpathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_xpath;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(XPath20Parser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterXpath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitXpath(this);
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
        this.ruleIndex = XPath20Parser.RULE_expr;
    }

	exprsingle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprsingleContext);
	    } else {
	        return this.getTypedRuleContext(ExprsingleContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.COMMA);
	    } else {
	        return this.getToken(XPath20Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitExpr(this);
		}
	}


}



class ExprsingleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_exprsingle;
    }

	forexpr() {
	    return this.getTypedRuleContext(ForexprContext,0);
	};

	quantifiedexpr() {
	    return this.getTypedRuleContext(QuantifiedexprContext,0);
	};

	ifexpr() {
	    return this.getTypedRuleContext(IfexprContext,0);
	};

	orexpr() {
	    return this.getTypedRuleContext(OrexprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterExprsingle(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitExprsingle(this);
		}
	}


}



class ForexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_forexpr;
    }

	simpleforclause() {
	    return this.getTypedRuleContext(SimpleforclauseContext,0);
	};

	KW_RETURN() {
	    return this.getToken(XPath20Parser.KW_RETURN, 0);
	};

	exprsingle() {
	    return this.getTypedRuleContext(ExprsingleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterForexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitForexpr(this);
		}
	}


}



class SimpleforclauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_simpleforclause;
    }

	KW_FOR() {
	    return this.getToken(XPath20Parser.KW_FOR, 0);
	};

	DOLLAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.DOLLAR);
	    } else {
	        return this.getToken(XPath20Parser.DOLLAR, i);
	    }
	};


	varname = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarnameContext);
	    } else {
	        return this.getTypedRuleContext(VarnameContext,i);
	    }
	};

	KW_IN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_IN);
	    } else {
	        return this.getToken(XPath20Parser.KW_IN, i);
	    }
	};


	exprsingle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprsingleContext);
	    } else {
	        return this.getTypedRuleContext(ExprsingleContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.COMMA);
	    } else {
	        return this.getToken(XPath20Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterSimpleforclause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitSimpleforclause(this);
		}
	}


}



class QuantifiedexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_quantifiedexpr;
    }

	DOLLAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.DOLLAR);
	    } else {
	        return this.getToken(XPath20Parser.DOLLAR, i);
	    }
	};


	varname = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarnameContext);
	    } else {
	        return this.getTypedRuleContext(VarnameContext,i);
	    }
	};

	KW_IN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_IN);
	    } else {
	        return this.getToken(XPath20Parser.KW_IN, i);
	    }
	};


	exprsingle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprsingleContext);
	    } else {
	        return this.getTypedRuleContext(ExprsingleContext,i);
	    }
	};

	KW_SATISFIES() {
	    return this.getToken(XPath20Parser.KW_SATISFIES, 0);
	};

	KW_SOME() {
	    return this.getToken(XPath20Parser.KW_SOME, 0);
	};

	KW_EVERY() {
	    return this.getToken(XPath20Parser.KW_EVERY, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.COMMA);
	    } else {
	        return this.getToken(XPath20Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterQuantifiedexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitQuantifiedexpr(this);
		}
	}


}



class IfexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_ifexpr;
    }

	KW_IF() {
	    return this.getToken(XPath20Parser.KW_IF, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	KW_THEN() {
	    return this.getToken(XPath20Parser.KW_THEN, 0);
	};

	exprsingle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprsingleContext);
	    } else {
	        return this.getTypedRuleContext(ExprsingleContext,i);
	    }
	};

	KW_ELSE() {
	    return this.getToken(XPath20Parser.KW_ELSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterIfexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitIfexpr(this);
		}
	}


}



class OrexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_orexpr;
    }

	andexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndexprContext);
	    } else {
	        return this.getTypedRuleContext(AndexprContext,i);
	    }
	};

	KW_OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_OR);
	    } else {
	        return this.getToken(XPath20Parser.KW_OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterOrexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitOrexpr(this);
		}
	}


}



class AndexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_andexpr;
    }

	comparisonexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonexprContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonexprContext,i);
	    }
	};

	KW_AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_AND);
	    } else {
	        return this.getToken(XPath20Parser.KW_AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAndexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAndexpr(this);
		}
	}


}



class ComparisonexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_comparisonexpr;
    }

	rangeexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RangeexprContext);
	    } else {
	        return this.getTypedRuleContext(RangeexprContext,i);
	    }
	};

	valuecomp() {
	    return this.getTypedRuleContext(ValuecompContext,0);
	};

	generalcomp() {
	    return this.getTypedRuleContext(GeneralcompContext,0);
	};

	nodecomp() {
	    return this.getTypedRuleContext(NodecompContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterComparisonexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitComparisonexpr(this);
		}
	}


}



class RangeexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_rangeexpr;
    }

	additiveexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveexprContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveexprContext,i);
	    }
	};

	KW_TO() {
	    return this.getToken(XPath20Parser.KW_TO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterRangeexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitRangeexpr(this);
		}
	}


}



class AdditiveexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_additiveexpr;
    }

	multiplicativeexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeexprContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeexprContext,i);
	    }
	};

	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.PLUS);
	    } else {
	        return this.getToken(XPath20Parser.PLUS, i);
	    }
	};


	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.MINUS);
	    } else {
	        return this.getToken(XPath20Parser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAdditiveexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAdditiveexpr(this);
		}
	}


}



class MultiplicativeexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_multiplicativeexpr;
    }

	unionexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnionexprContext);
	    } else {
	        return this.getTypedRuleContext(UnionexprContext,i);
	    }
	};

	STAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.STAR);
	    } else {
	        return this.getToken(XPath20Parser.STAR, i);
	    }
	};


	KW_DIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_DIV);
	    } else {
	        return this.getToken(XPath20Parser.KW_DIV, i);
	    }
	};


	KW_IDIV = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_IDIV);
	    } else {
	        return this.getToken(XPath20Parser.KW_IDIV, i);
	    }
	};


	KW_MOD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_MOD);
	    } else {
	        return this.getToken(XPath20Parser.KW_MOD, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterMultiplicativeexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitMultiplicativeexpr(this);
		}
	}


}



class UnionexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_unionexpr;
    }

	intersectexceptexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntersectexceptexprContext);
	    } else {
	        return this.getTypedRuleContext(IntersectexceptexprContext,i);
	    }
	};

	KW_UNION = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_UNION);
	    } else {
	        return this.getToken(XPath20Parser.KW_UNION, i);
	    }
	};


	P = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.P);
	    } else {
	        return this.getToken(XPath20Parser.P, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterUnionexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitUnionexpr(this);
		}
	}


}



class IntersectexceptexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_intersectexceptexpr;
    }

	instanceofexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstanceofexprContext);
	    } else {
	        return this.getTypedRuleContext(InstanceofexprContext,i);
	    }
	};

	KW_INTERSECT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_INTERSECT);
	    } else {
	        return this.getToken(XPath20Parser.KW_INTERSECT, i);
	    }
	};


	KW_EXCEPT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.KW_EXCEPT);
	    } else {
	        return this.getToken(XPath20Parser.KW_EXCEPT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterIntersectexceptexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitIntersectexceptexpr(this);
		}
	}


}



class InstanceofexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_instanceofexpr;
    }

	treatexpr() {
	    return this.getTypedRuleContext(TreatexprContext,0);
	};

	KW_INSTANCE() {
	    return this.getToken(XPath20Parser.KW_INSTANCE, 0);
	};

	KW_OF() {
	    return this.getToken(XPath20Parser.KW_OF, 0);
	};

	sequencetype() {
	    return this.getTypedRuleContext(SequencetypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterInstanceofexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitInstanceofexpr(this);
		}
	}


}



class TreatexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_treatexpr;
    }

	castableexpr() {
	    return this.getTypedRuleContext(CastableexprContext,0);
	};

	KW_TREAT() {
	    return this.getToken(XPath20Parser.KW_TREAT, 0);
	};

	KW_AS() {
	    return this.getToken(XPath20Parser.KW_AS, 0);
	};

	sequencetype() {
	    return this.getTypedRuleContext(SequencetypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterTreatexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitTreatexpr(this);
		}
	}


}



class CastableexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_castableexpr;
    }

	castexpr() {
	    return this.getTypedRuleContext(CastexprContext,0);
	};

	KW_CASTABLE() {
	    return this.getToken(XPath20Parser.KW_CASTABLE, 0);
	};

	KW_AS() {
	    return this.getToken(XPath20Parser.KW_AS, 0);
	};

	singletype() {
	    return this.getTypedRuleContext(SingletypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterCastableexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitCastableexpr(this);
		}
	}


}



class CastexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_castexpr;
    }

	unaryexpr() {
	    return this.getTypedRuleContext(UnaryexprContext,0);
	};

	KW_CAST() {
	    return this.getToken(XPath20Parser.KW_CAST, 0);
	};

	KW_AS() {
	    return this.getToken(XPath20Parser.KW_AS, 0);
	};

	singletype() {
	    return this.getTypedRuleContext(SingletypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterCastexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitCastexpr(this);
		}
	}


}



class UnaryexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_unaryexpr;
    }

	valueexpr() {
	    return this.getTypedRuleContext(ValueexprContext,0);
	};

	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.MINUS);
	    } else {
	        return this.getToken(XPath20Parser.MINUS, i);
	    }
	};


	PLUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.PLUS);
	    } else {
	        return this.getToken(XPath20Parser.PLUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterUnaryexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitUnaryexpr(this);
		}
	}


}



class ValueexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_valueexpr;
    }

	pathexpr() {
	    return this.getTypedRuleContext(PathexprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterValueexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitValueexpr(this);
		}
	}


}



class GeneralcompContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_generalcomp;
    }

	EQ() {
	    return this.getToken(XPath20Parser.EQ, 0);
	};

	NE() {
	    return this.getToken(XPath20Parser.NE, 0);
	};

	LT() {
	    return this.getToken(XPath20Parser.LT, 0);
	};

	LE() {
	    return this.getToken(XPath20Parser.LE, 0);
	};

	GT() {
	    return this.getToken(XPath20Parser.GT, 0);
	};

	GE() {
	    return this.getToken(XPath20Parser.GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterGeneralcomp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitGeneralcomp(this);
		}
	}


}



class ValuecompContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_valuecomp;
    }

	KW_EQ() {
	    return this.getToken(XPath20Parser.KW_EQ, 0);
	};

	KW_NE() {
	    return this.getToken(XPath20Parser.KW_NE, 0);
	};

	KW_LT() {
	    return this.getToken(XPath20Parser.KW_LT, 0);
	};

	KW_LE() {
	    return this.getToken(XPath20Parser.KW_LE, 0);
	};

	KW_GT() {
	    return this.getToken(XPath20Parser.KW_GT, 0);
	};

	KW_GE() {
	    return this.getToken(XPath20Parser.KW_GE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterValuecomp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitValuecomp(this);
		}
	}


}



class NodecompContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_nodecomp;
    }

	KW_IS() {
	    return this.getToken(XPath20Parser.KW_IS, 0);
	};

	LL() {
	    return this.getToken(XPath20Parser.LL, 0);
	};

	GG() {
	    return this.getToken(XPath20Parser.GG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterNodecomp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitNodecomp(this);
		}
	}


}



class PathexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_pathexpr;
    }

	SLASH() {
	    return this.getToken(XPath20Parser.SLASH, 0);
	};

	relativepathexpr() {
	    return this.getTypedRuleContext(RelativepathexprContext,0);
	};

	SS() {
	    return this.getToken(XPath20Parser.SS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterPathexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitPathexpr(this);
		}
	}


}



class RelativepathexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_relativepathexpr;
    }

	stepexpr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StepexprContext);
	    } else {
	        return this.getTypedRuleContext(StepexprContext,i);
	    }
	};

	SLASH = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.SLASH);
	    } else {
	        return this.getToken(XPath20Parser.SLASH, i);
	    }
	};


	SS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.SS);
	    } else {
	        return this.getToken(XPath20Parser.SS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterRelativepathexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitRelativepathexpr(this);
		}
	}


}



class StepexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_stepexpr;
    }

	filterexpr() {
	    return this.getTypedRuleContext(FilterexprContext,0);
	};

	axisstep() {
	    return this.getTypedRuleContext(AxisstepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterStepexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitStepexpr(this);
		}
	}


}



class AxisstepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_axisstep;
    }

	predicatelist() {
	    return this.getTypedRuleContext(PredicatelistContext,0);
	};

	reversestep() {
	    return this.getTypedRuleContext(ReversestepContext,0);
	};

	forwardstep() {
	    return this.getTypedRuleContext(ForwardstepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAxisstep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAxisstep(this);
		}
	}


}



class ForwardstepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_forwardstep;
    }

	forwardaxis() {
	    return this.getTypedRuleContext(ForwardaxisContext,0);
	};

	nodetest() {
	    return this.getTypedRuleContext(NodetestContext,0);
	};

	abbrevforwardstep() {
	    return this.getTypedRuleContext(AbbrevforwardstepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterForwardstep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitForwardstep(this);
		}
	}


}



class ForwardaxisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_forwardaxis;
    }

	KW_CHILD() {
	    return this.getToken(XPath20Parser.KW_CHILD, 0);
	};

	COLONCOLON() {
	    return this.getToken(XPath20Parser.COLONCOLON, 0);
	};

	KW_DESCENDANT() {
	    return this.getToken(XPath20Parser.KW_DESCENDANT, 0);
	};

	KW_ATTRIBUTE() {
	    return this.getToken(XPath20Parser.KW_ATTRIBUTE, 0);
	};

	KW_SELF() {
	    return this.getToken(XPath20Parser.KW_SELF, 0);
	};

	KW_DESCENDANT_OR_SELF() {
	    return this.getToken(XPath20Parser.KW_DESCENDANT_OR_SELF, 0);
	};

	KW_FOLLOWING_SIBLING() {
	    return this.getToken(XPath20Parser.KW_FOLLOWING_SIBLING, 0);
	};

	KW_FOLLOWING() {
	    return this.getToken(XPath20Parser.KW_FOLLOWING, 0);
	};

	KW_NAMESPACE() {
	    return this.getToken(XPath20Parser.KW_NAMESPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterForwardaxis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitForwardaxis(this);
		}
	}


}



class AbbrevforwardstepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_abbrevforwardstep;
    }

	nodetest() {
	    return this.getTypedRuleContext(NodetestContext,0);
	};

	AT() {
	    return this.getToken(XPath20Parser.AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAbbrevforwardstep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAbbrevforwardstep(this);
		}
	}


}



class ReversestepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_reversestep;
    }

	reverseaxis() {
	    return this.getTypedRuleContext(ReverseaxisContext,0);
	};

	nodetest() {
	    return this.getTypedRuleContext(NodetestContext,0);
	};

	abbrevreversestep() {
	    return this.getTypedRuleContext(AbbrevreversestepContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterReversestep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitReversestep(this);
		}
	}


}



class ReverseaxisContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_reverseaxis;
    }

	KW_PARENT() {
	    return this.getToken(XPath20Parser.KW_PARENT, 0);
	};

	COLONCOLON() {
	    return this.getToken(XPath20Parser.COLONCOLON, 0);
	};

	KW_ANCESTOR() {
	    return this.getToken(XPath20Parser.KW_ANCESTOR, 0);
	};

	KW_PRECEDING_SIBLING() {
	    return this.getToken(XPath20Parser.KW_PRECEDING_SIBLING, 0);
	};

	KW_PRECEDING() {
	    return this.getToken(XPath20Parser.KW_PRECEDING, 0);
	};

	KW_ANCESTOR_OR_SELF() {
	    return this.getToken(XPath20Parser.KW_ANCESTOR_OR_SELF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterReverseaxis(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitReverseaxis(this);
		}
	}


}



class AbbrevreversestepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_abbrevreversestep;
    }

	DD() {
	    return this.getToken(XPath20Parser.DD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAbbrevreversestep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAbbrevreversestep(this);
		}
	}


}



class NodetestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_nodetest;
    }

	kindtest() {
	    return this.getTypedRuleContext(KindtestContext,0);
	};

	nametest() {
	    return this.getTypedRuleContext(NametestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterNodetest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitNodetest(this);
		}
	}


}



class NametestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_nametest;
    }

	qname() {
	    return this.getTypedRuleContext(QnameContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterNametest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitNametest(this);
		}
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_wildcard;
    }

	STAR() {
	    return this.getToken(XPath20Parser.STAR, 0);
	};

	NCName() {
	    return this.getToken(XPath20Parser.NCName, 0);
	};

	CS() {
	    return this.getToken(XPath20Parser.CS, 0);
	};

	SC() {
	    return this.getToken(XPath20Parser.SC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitWildcard(this);
		}
	}


}



class FilterexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_filterexpr;
    }

	primaryexpr() {
	    return this.getTypedRuleContext(PrimaryexprContext,0);
	};

	predicatelist() {
	    return this.getTypedRuleContext(PredicatelistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterFilterexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitFilterexpr(this);
		}
	}


}



class PredicatelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_predicatelist;
    }

	predicate = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PredicateContext);
	    } else {
	        return this.getTypedRuleContext(PredicateContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterPredicatelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitPredicatelist(this);
		}
	}


}



class PredicateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_predicate;
    }

	OB() {
	    return this.getToken(XPath20Parser.OB, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	CB() {
	    return this.getToken(XPath20Parser.CB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterPredicate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitPredicate(this);
		}
	}


}



class PrimaryexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_primaryexpr;
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	varref() {
	    return this.getTypedRuleContext(VarrefContext,0);
	};

	parenthesizedexpr() {
	    return this.getTypedRuleContext(ParenthesizedexprContext,0);
	};

	contextitemexpr() {
	    return this.getTypedRuleContext(ContextitemexprContext,0);
	};

	functioncall() {
	    return this.getTypedRuleContext(FunctioncallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterPrimaryexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitPrimaryexpr(this);
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
        this.ruleIndex = XPath20Parser.RULE_literal;
    }

	numericliteral() {
	    return this.getTypedRuleContext(NumericliteralContext,0);
	};

	StringLiteral() {
	    return this.getToken(XPath20Parser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitLiteral(this);
		}
	}


}



class NumericliteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_numericliteral;
    }

	IntegerLiteral() {
	    return this.getToken(XPath20Parser.IntegerLiteral, 0);
	};

	DecimalLiteral() {
	    return this.getToken(XPath20Parser.DecimalLiteral, 0);
	};

	DoubleLiteral() {
	    return this.getToken(XPath20Parser.DoubleLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterNumericliteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitNumericliteral(this);
		}
	}


}



class VarrefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_varref;
    }

	DOLLAR() {
	    return this.getToken(XPath20Parser.DOLLAR, 0);
	};

	varname() {
	    return this.getTypedRuleContext(VarnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterVarref(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitVarref(this);
		}
	}


}



class VarnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_varname;
    }

	qname() {
	    return this.getTypedRuleContext(QnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterVarname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitVarname(this);
		}
	}


}



class ParenthesizedexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_parenthesizedexpr;
    }

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterParenthesizedexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitParenthesizedexpr(this);
		}
	}


}



class ContextitemexprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_contextitemexpr;
    }

	D() {
	    return this.getToken(XPath20Parser.D, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterContextitemexpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitContextitemexpr(this);
		}
	}


}



class FunctioncallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_functioncall;
    }

	qname() {
	    return this.getTypedRuleContext(QnameContext,0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	exprsingle = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprsingleContext);
	    } else {
	        return this.getTypedRuleContext(ExprsingleContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.COMMA);
	    } else {
	        return this.getToken(XPath20Parser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterFunctioncall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitFunctioncall(this);
		}
	}


}



class SingletypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_singletype;
    }

	atomictype() {
	    return this.getTypedRuleContext(AtomictypeContext,0);
	};

	QM() {
	    return this.getToken(XPath20Parser.QM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterSingletype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitSingletype(this);
		}
	}


}



class SequencetypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_sequencetype;
    }

	KW_EMPTY_SEQUENCE() {
	    return this.getToken(XPath20Parser.KW_EMPTY_SEQUENCE, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	itemtype() {
	    return this.getTypedRuleContext(ItemtypeContext,0);
	};

	occurrenceindicator() {
	    return this.getTypedRuleContext(OccurrenceindicatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterSequencetype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitSequencetype(this);
		}
	}


}



class OccurrenceindicatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_occurrenceindicator;
    }

	QM() {
	    return this.getToken(XPath20Parser.QM, 0);
	};

	STAR() {
	    return this.getToken(XPath20Parser.STAR, 0);
	};

	PLUS() {
	    return this.getToken(XPath20Parser.PLUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterOccurrenceindicator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitOccurrenceindicator(this);
		}
	}


}



class ItemtypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_itemtype;
    }

	kindtest() {
	    return this.getTypedRuleContext(KindtestContext,0);
	};

	KW_ITEM() {
	    return this.getToken(XPath20Parser.KW_ITEM, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	atomictype() {
	    return this.getTypedRuleContext(AtomictypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterItemtype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitItemtype(this);
		}
	}


}



class AtomictypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_atomictype;
    }

	qname() {
	    return this.getTypedRuleContext(QnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAtomictype(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAtomictype(this);
		}
	}


}



class KindtestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_kindtest;
    }

	documenttest() {
	    return this.getTypedRuleContext(DocumenttestContext,0);
	};

	elementtest() {
	    return this.getTypedRuleContext(ElementtestContext,0);
	};

	attributetest() {
	    return this.getTypedRuleContext(AttributetestContext,0);
	};

	schemaelementtest() {
	    return this.getTypedRuleContext(SchemaelementtestContext,0);
	};

	schemaattributetest() {
	    return this.getTypedRuleContext(SchemaattributetestContext,0);
	};

	pitest() {
	    return this.getTypedRuleContext(PitestContext,0);
	};

	commenttest() {
	    return this.getTypedRuleContext(CommenttestContext,0);
	};

	texttest() {
	    return this.getTypedRuleContext(TexttestContext,0);
	};

	anykindtest() {
	    return this.getTypedRuleContext(AnykindtestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterKindtest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitKindtest(this);
		}
	}


}



class AnykindtestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_anykindtest;
    }

	KW_NODE() {
	    return this.getToken(XPath20Parser.KW_NODE, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAnykindtest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAnykindtest(this);
		}
	}


}



class DocumenttestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_documenttest;
    }

	KW_DOCUMENT_NODE() {
	    return this.getToken(XPath20Parser.KW_DOCUMENT_NODE, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	elementtest() {
	    return this.getTypedRuleContext(ElementtestContext,0);
	};

	schemaelementtest() {
	    return this.getTypedRuleContext(SchemaelementtestContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterDocumenttest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitDocumenttest(this);
		}
	}


}



class TexttestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_texttest;
    }

	KW_TEXT() {
	    return this.getToken(XPath20Parser.KW_TEXT, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterTexttest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitTexttest(this);
		}
	}


}



class CommenttestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_commenttest;
    }

	KW_COMMENT() {
	    return this.getToken(XPath20Parser.KW_COMMENT, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterCommenttest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitCommenttest(this);
		}
	}


}



class PitestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_pitest;
    }

	KW_PROCESSING_INSTRUCTION() {
	    return this.getToken(XPath20Parser.KW_PROCESSING_INSTRUCTION, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	NCName() {
	    return this.getToken(XPath20Parser.NCName, 0);
	};

	StringLiteral() {
	    return this.getToken(XPath20Parser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterPitest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitPitest(this);
		}
	}


}



class AttributetestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_attributetest;
    }

	KW_ATTRIBUTE() {
	    return this.getToken(XPath20Parser.KW_ATTRIBUTE, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	attribnameorwildcard() {
	    return this.getTypedRuleContext(AttribnameorwildcardContext,0);
	};

	COMMA() {
	    return this.getToken(XPath20Parser.COMMA, 0);
	};

	typename_() {
	    return this.getTypedRuleContext(Typename_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAttributetest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAttributetest(this);
		}
	}


}



class AttribnameorwildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_attribnameorwildcard;
    }

	attributename() {
	    return this.getTypedRuleContext(AttributenameContext,0);
	};

	STAR() {
	    return this.getToken(XPath20Parser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAttribnameorwildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAttribnameorwildcard(this);
		}
	}


}



class SchemaattributetestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_schemaattributetest;
    }

	KW_SCHEMA_ATTRIBUTE() {
	    return this.getToken(XPath20Parser.KW_SCHEMA_ATTRIBUTE, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	attributedeclaration() {
	    return this.getTypedRuleContext(AttributedeclarationContext,0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterSchemaattributetest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitSchemaattributetest(this);
		}
	}


}



class AttributedeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_attributedeclaration;
    }

	attributename() {
	    return this.getTypedRuleContext(AttributenameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAttributedeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAttributedeclaration(this);
		}
	}


}



class ElementtestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_elementtest;
    }

	KW_ELEMENT() {
	    return this.getToken(XPath20Parser.KW_ELEMENT, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	elementnameorwildcard() {
	    return this.getTypedRuleContext(ElementnameorwildcardContext,0);
	};

	COMMA() {
	    return this.getToken(XPath20Parser.COMMA, 0);
	};

	typename_() {
	    return this.getTypedRuleContext(Typename_Context,0);
	};

	QM() {
	    return this.getToken(XPath20Parser.QM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterElementtest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitElementtest(this);
		}
	}


}



class ElementnameorwildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_elementnameorwildcard;
    }

	elementname() {
	    return this.getTypedRuleContext(ElementnameContext,0);
	};

	STAR() {
	    return this.getToken(XPath20Parser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterElementnameorwildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitElementnameorwildcard(this);
		}
	}


}



class SchemaelementtestContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_schemaelementtest;
    }

	KW_SCHEMA_ELEMENT() {
	    return this.getToken(XPath20Parser.KW_SCHEMA_ELEMENT, 0);
	};

	OP() {
	    return this.getToken(XPath20Parser.OP, 0);
	};

	elementdeclaration() {
	    return this.getTypedRuleContext(ElementdeclarationContext,0);
	};

	CP() {
	    return this.getToken(XPath20Parser.CP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterSchemaelementtest(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitSchemaelementtest(this);
		}
	}


}



class ElementdeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_elementdeclaration;
    }

	elementname() {
	    return this.getTypedRuleContext(ElementnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterElementdeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitElementdeclaration(this);
		}
	}


}



class AttributenameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_attributename;
    }

	qname() {
	    return this.getTypedRuleContext(QnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAttributename(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAttributename(this);
		}
	}


}



class ElementnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_elementname;
    }

	qname() {
	    return this.getTypedRuleContext(QnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterElementname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitElementname(this);
		}
	}


}



class Typename_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_typename_;
    }

	qname() {
	    return this.getTypedRuleContext(QnameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterTypename_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitTypename_(this);
		}
	}


}



class QnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_qname;
    }

	QName() {
	    return this.getToken(XPath20Parser.QName, 0);
	};

	URIQualifiedName() {
	    return this.getToken(XPath20Parser.URIQualifiedName, 0);
	};

	KW_ANCESTOR() {
	    return this.getToken(XPath20Parser.KW_ANCESTOR, 0);
	};

	KW_ANCESTOR_OR_SELF() {
	    return this.getToken(XPath20Parser.KW_ANCESTOR_OR_SELF, 0);
	};

	KW_AND() {
	    return this.getToken(XPath20Parser.KW_AND, 0);
	};

	KW_ARRAY() {
	    return this.getToken(XPath20Parser.KW_ARRAY, 0);
	};

	KW_AS() {
	    return this.getToken(XPath20Parser.KW_AS, 0);
	};

	KW_ATTRIBUTE() {
	    return this.getToken(XPath20Parser.KW_ATTRIBUTE, 0);
	};

	KW_CAST() {
	    return this.getToken(XPath20Parser.KW_CAST, 0);
	};

	KW_CASTABLE() {
	    return this.getToken(XPath20Parser.KW_CASTABLE, 0);
	};

	KW_CHILD() {
	    return this.getToken(XPath20Parser.KW_CHILD, 0);
	};

	KW_COMMENT() {
	    return this.getToken(XPath20Parser.KW_COMMENT, 0);
	};

	KW_DESCENDANT() {
	    return this.getToken(XPath20Parser.KW_DESCENDANT, 0);
	};

	KW_DESCENDANT_OR_SELF() {
	    return this.getToken(XPath20Parser.KW_DESCENDANT_OR_SELF, 0);
	};

	KW_DIV() {
	    return this.getToken(XPath20Parser.KW_DIV, 0);
	};

	KW_DOCUMENT_NODE() {
	    return this.getToken(XPath20Parser.KW_DOCUMENT_NODE, 0);
	};

	KW_ELEMENT() {
	    return this.getToken(XPath20Parser.KW_ELEMENT, 0);
	};

	KW_ELSE() {
	    return this.getToken(XPath20Parser.KW_ELSE, 0);
	};

	KW_EMPTY_SEQUENCE() {
	    return this.getToken(XPath20Parser.KW_EMPTY_SEQUENCE, 0);
	};

	KW_EQ() {
	    return this.getToken(XPath20Parser.KW_EQ, 0);
	};

	KW_EVERY() {
	    return this.getToken(XPath20Parser.KW_EVERY, 0);
	};

	KW_EXCEPT() {
	    return this.getToken(XPath20Parser.KW_EXCEPT, 0);
	};

	KW_FOLLOWING() {
	    return this.getToken(XPath20Parser.KW_FOLLOWING, 0);
	};

	KW_FOLLOWING_SIBLING() {
	    return this.getToken(XPath20Parser.KW_FOLLOWING_SIBLING, 0);
	};

	KW_FOR() {
	    return this.getToken(XPath20Parser.KW_FOR, 0);
	};

	KW_FUNCTION() {
	    return this.getToken(XPath20Parser.KW_FUNCTION, 0);
	};

	KW_GE() {
	    return this.getToken(XPath20Parser.KW_GE, 0);
	};

	KW_GT() {
	    return this.getToken(XPath20Parser.KW_GT, 0);
	};

	KW_IDIV() {
	    return this.getToken(XPath20Parser.KW_IDIV, 0);
	};

	KW_IF() {
	    return this.getToken(XPath20Parser.KW_IF, 0);
	};

	KW_IN() {
	    return this.getToken(XPath20Parser.KW_IN, 0);
	};

	KW_INSTANCE() {
	    return this.getToken(XPath20Parser.KW_INSTANCE, 0);
	};

	KW_INTERSECT() {
	    return this.getToken(XPath20Parser.KW_INTERSECT, 0);
	};

	KW_IS() {
	    return this.getToken(XPath20Parser.KW_IS, 0);
	};

	KW_ITEM() {
	    return this.getToken(XPath20Parser.KW_ITEM, 0);
	};

	KW_LE() {
	    return this.getToken(XPath20Parser.KW_LE, 0);
	};

	KW_LET() {
	    return this.getToken(XPath20Parser.KW_LET, 0);
	};

	KW_LT() {
	    return this.getToken(XPath20Parser.KW_LT, 0);
	};

	KW_MAP() {
	    return this.getToken(XPath20Parser.KW_MAP, 0);
	};

	KW_MOD() {
	    return this.getToken(XPath20Parser.KW_MOD, 0);
	};

	KW_NAMESPACE() {
	    return this.getToken(XPath20Parser.KW_NAMESPACE, 0);
	};

	KW_NAMESPACE_NODE() {
	    return this.getToken(XPath20Parser.KW_NAMESPACE_NODE, 0);
	};

	KW_NE() {
	    return this.getToken(XPath20Parser.KW_NE, 0);
	};

	KW_NODE() {
	    return this.getToken(XPath20Parser.KW_NODE, 0);
	};

	KW_OF() {
	    return this.getToken(XPath20Parser.KW_OF, 0);
	};

	KW_OR() {
	    return this.getToken(XPath20Parser.KW_OR, 0);
	};

	KW_PARENT() {
	    return this.getToken(XPath20Parser.KW_PARENT, 0);
	};

	KW_PRECEDING() {
	    return this.getToken(XPath20Parser.KW_PRECEDING, 0);
	};

	KW_PRECEDING_SIBLING() {
	    return this.getToken(XPath20Parser.KW_PRECEDING_SIBLING, 0);
	};

	KW_PROCESSING_INSTRUCTION() {
	    return this.getToken(XPath20Parser.KW_PROCESSING_INSTRUCTION, 0);
	};

	KW_RETURN() {
	    return this.getToken(XPath20Parser.KW_RETURN, 0);
	};

	KW_SATISFIES() {
	    return this.getToken(XPath20Parser.KW_SATISFIES, 0);
	};

	KW_SCHEMA_ATTRIBUTE() {
	    return this.getToken(XPath20Parser.KW_SCHEMA_ATTRIBUTE, 0);
	};

	KW_SCHEMA_ELEMENT() {
	    return this.getToken(XPath20Parser.KW_SCHEMA_ELEMENT, 0);
	};

	KW_SELF() {
	    return this.getToken(XPath20Parser.KW_SELF, 0);
	};

	KW_SOME() {
	    return this.getToken(XPath20Parser.KW_SOME, 0);
	};

	KW_TEXT() {
	    return this.getToken(XPath20Parser.KW_TEXT, 0);
	};

	KW_THEN() {
	    return this.getToken(XPath20Parser.KW_THEN, 0);
	};

	KW_TREAT() {
	    return this.getToken(XPath20Parser.KW_TREAT, 0);
	};

	KW_UNION() {
	    return this.getToken(XPath20Parser.KW_UNION, 0);
	};

	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterQname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitQname(this);
		}
	}


}



class AuxilaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = XPath20Parser.RULE_auxilary;
    }

	EOF() {
	    return this.getToken(XPath20Parser.EOF, 0);
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

	SEMI = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(XPath20Parser.SEMI);
	    } else {
	        return this.getToken(XPath20Parser.SEMI, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.enterAuxilary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof XPath20ParserListener ) {
	        listener.exitAuxilary(this);
		}
	}


}




XPath20Parser.XpathContext = XpathContext; 
XPath20Parser.ExprContext = ExprContext; 
XPath20Parser.ExprsingleContext = ExprsingleContext; 
XPath20Parser.ForexprContext = ForexprContext; 
XPath20Parser.SimpleforclauseContext = SimpleforclauseContext; 
XPath20Parser.QuantifiedexprContext = QuantifiedexprContext; 
XPath20Parser.IfexprContext = IfexprContext; 
XPath20Parser.OrexprContext = OrexprContext; 
XPath20Parser.AndexprContext = AndexprContext; 
XPath20Parser.ComparisonexprContext = ComparisonexprContext; 
XPath20Parser.RangeexprContext = RangeexprContext; 
XPath20Parser.AdditiveexprContext = AdditiveexprContext; 
XPath20Parser.MultiplicativeexprContext = MultiplicativeexprContext; 
XPath20Parser.UnionexprContext = UnionexprContext; 
XPath20Parser.IntersectexceptexprContext = IntersectexceptexprContext; 
XPath20Parser.InstanceofexprContext = InstanceofexprContext; 
XPath20Parser.TreatexprContext = TreatexprContext; 
XPath20Parser.CastableexprContext = CastableexprContext; 
XPath20Parser.CastexprContext = CastexprContext; 
XPath20Parser.UnaryexprContext = UnaryexprContext; 
XPath20Parser.ValueexprContext = ValueexprContext; 
XPath20Parser.GeneralcompContext = GeneralcompContext; 
XPath20Parser.ValuecompContext = ValuecompContext; 
XPath20Parser.NodecompContext = NodecompContext; 
XPath20Parser.PathexprContext = PathexprContext; 
XPath20Parser.RelativepathexprContext = RelativepathexprContext; 
XPath20Parser.StepexprContext = StepexprContext; 
XPath20Parser.AxisstepContext = AxisstepContext; 
XPath20Parser.ForwardstepContext = ForwardstepContext; 
XPath20Parser.ForwardaxisContext = ForwardaxisContext; 
XPath20Parser.AbbrevforwardstepContext = AbbrevforwardstepContext; 
XPath20Parser.ReversestepContext = ReversestepContext; 
XPath20Parser.ReverseaxisContext = ReverseaxisContext; 
XPath20Parser.AbbrevreversestepContext = AbbrevreversestepContext; 
XPath20Parser.NodetestContext = NodetestContext; 
XPath20Parser.NametestContext = NametestContext; 
XPath20Parser.WildcardContext = WildcardContext; 
XPath20Parser.FilterexprContext = FilterexprContext; 
XPath20Parser.PredicatelistContext = PredicatelistContext; 
XPath20Parser.PredicateContext = PredicateContext; 
XPath20Parser.PrimaryexprContext = PrimaryexprContext; 
XPath20Parser.LiteralContext = LiteralContext; 
XPath20Parser.NumericliteralContext = NumericliteralContext; 
XPath20Parser.VarrefContext = VarrefContext; 
XPath20Parser.VarnameContext = VarnameContext; 
XPath20Parser.ParenthesizedexprContext = ParenthesizedexprContext; 
XPath20Parser.ContextitemexprContext = ContextitemexprContext; 
XPath20Parser.FunctioncallContext = FunctioncallContext; 
XPath20Parser.SingletypeContext = SingletypeContext; 
XPath20Parser.SequencetypeContext = SequencetypeContext; 
XPath20Parser.OccurrenceindicatorContext = OccurrenceindicatorContext; 
XPath20Parser.ItemtypeContext = ItemtypeContext; 
XPath20Parser.AtomictypeContext = AtomictypeContext; 
XPath20Parser.KindtestContext = KindtestContext; 
XPath20Parser.AnykindtestContext = AnykindtestContext; 
XPath20Parser.DocumenttestContext = DocumenttestContext; 
XPath20Parser.TexttestContext = TexttestContext; 
XPath20Parser.CommenttestContext = CommenttestContext; 
XPath20Parser.PitestContext = PitestContext; 
XPath20Parser.AttributetestContext = AttributetestContext; 
XPath20Parser.AttribnameorwildcardContext = AttribnameorwildcardContext; 
XPath20Parser.SchemaattributetestContext = SchemaattributetestContext; 
XPath20Parser.AttributedeclarationContext = AttributedeclarationContext; 
XPath20Parser.ElementtestContext = ElementtestContext; 
XPath20Parser.ElementnameorwildcardContext = ElementnameorwildcardContext; 
XPath20Parser.SchemaelementtestContext = SchemaelementtestContext; 
XPath20Parser.ElementdeclarationContext = ElementdeclarationContext; 
XPath20Parser.AttributenameContext = AttributenameContext; 
XPath20Parser.ElementnameContext = ElementnameContext; 
XPath20Parser.Typename_Context = Typename_Context; 
XPath20Parser.QnameContext = QnameContext; 
XPath20Parser.AuxilaryContext = AuxilaryContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
