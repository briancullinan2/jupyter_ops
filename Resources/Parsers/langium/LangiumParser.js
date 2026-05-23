// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/langium/LangiumParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LangiumParserListener from './LangiumParserListener.js';
const serializedATN = [4,1,56,620,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,1,0,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,1,1,5,1,136,8,1,10,1,12,1,139,9,1,3,1,141,8,1,1,
1,1,1,1,1,1,1,1,1,5,1,148,8,1,10,1,12,1,151,9,1,3,1,153,8,1,1,1,3,1,156,
8,1,3,1,158,8,1,1,1,5,1,161,8,1,10,1,12,1,164,9,1,1,1,1,1,1,1,4,1,169,8,
1,11,1,12,1,170,1,2,1,2,1,2,1,2,1,2,1,2,5,2,179,8,2,10,2,12,2,182,9,2,3,
2,184,8,2,1,2,1,2,5,2,188,8,2,10,2,12,2,191,9,2,1,2,1,2,3,2,195,8,2,1,3,
1,3,3,3,199,8,3,1,3,1,3,1,3,1,3,3,3,205,8,3,1,3,3,3,208,8,3,1,4,1,4,1,4,
1,4,3,4,214,8,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,5,8,226,8,8,10,8,
12,8,229,9,8,3,8,231,8,8,1,8,1,8,1,9,1,9,1,10,1,10,1,10,4,10,240,8,10,11,
10,12,10,241,3,10,244,8,10,1,11,1,11,1,11,3,11,249,8,11,1,12,1,12,1,12,3,
12,254,8,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,263,8,13,3,13,265,8,
13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,3,15,274,8,15,1,16,1,16,3,16,278,8,
16,1,17,1,17,1,17,3,17,283,8,17,1,18,3,18,286,8,18,1,18,1,18,1,18,1,18,1,
18,3,18,293,8,18,1,18,3,18,296,8,18,1,18,1,18,1,18,1,18,1,18,5,18,303,8,
18,10,18,12,18,306,9,18,3,18,308,8,18,1,18,3,18,311,8,18,1,18,1,18,1,18,
1,18,1,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,5,20,325,8,20,10,20,12,20,328,
9,20,3,20,330,8,20,1,20,3,20,333,8,20,1,21,1,21,1,22,1,22,1,22,4,22,340,
8,22,11,22,12,22,341,3,22,344,8,22,1,23,1,23,1,23,1,23,1,23,4,23,351,8,23,
11,23,12,23,352,3,23,355,8,23,1,24,1,24,1,24,4,24,360,8,24,11,24,12,24,361,
3,24,364,8,24,1,25,1,25,4,25,368,8,25,11,25,12,25,369,3,25,372,8,25,1,26,
1,26,3,26,376,8,26,1,27,1,27,3,27,380,8,27,1,27,3,27,383,8,27,1,28,1,28,
1,28,3,28,388,8,28,1,28,1,28,1,28,1,28,1,28,3,28,395,8,28,1,28,1,28,1,29,
1,29,1,29,1,29,1,29,1,29,3,29,405,8,29,1,30,1,30,1,31,1,31,1,31,1,31,1,31,
5,31,414,8,31,10,31,12,31,417,9,31,1,31,1,31,3,31,421,8,31,1,32,1,32,3,32,
425,8,32,1,32,1,32,1,33,1,33,1,33,5,33,432,8,33,10,33,12,33,435,9,33,1,34,
1,34,1,34,5,34,440,8,34,10,34,12,34,443,9,34,1,35,1,35,1,35,3,35,448,8,35,
1,36,1,36,1,36,3,36,453,8,36,1,37,1,37,1,37,1,37,1,38,1,38,1,39,1,39,1,39,
1,40,1,40,1,40,1,40,1,40,1,40,5,40,470,8,40,10,40,12,40,473,9,40,1,40,1,
40,3,40,477,8,40,1,41,3,41,480,8,41,1,41,1,41,1,41,1,41,1,42,1,42,1,42,1,
42,3,42,490,8,42,1,43,1,43,1,43,1,43,1,44,1,44,1,44,4,44,499,8,44,11,44,
12,44,500,3,44,503,8,44,1,45,1,45,1,45,1,45,3,45,509,8,45,1,45,1,45,1,46,
1,46,3,46,515,8,46,1,47,1,47,1,47,1,47,1,48,1,48,1,48,1,48,1,48,1,49,1,49,
3,49,528,8,49,1,50,3,50,531,8,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,539,
8,50,3,50,541,8,50,1,50,1,50,1,50,1,50,1,51,1,51,1,51,5,51,550,8,51,10,51,
12,51,553,9,51,1,52,1,52,4,52,557,8,52,11,52,12,52,558,3,52,561,8,52,1,53,
1,53,3,53,565,8,53,1,54,1,54,1,54,1,54,1,54,1,54,1,54,3,54,574,8,54,1,55,
1,55,3,55,578,8,55,1,55,1,55,1,55,1,56,1,56,1,57,1,57,1,57,1,58,1,58,1,58,
1,59,1,59,1,60,1,60,1,61,1,61,1,61,3,61,598,8,61,1,62,1,62,1,62,1,62,1,62,
1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,1,62,3,62,618,
8,62,1,62,0,0,63,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,0,
10,2,0,35,35,47,47,4,0,29,30,32,32,43,43,45,45,2,0,33,33,36,36,1,0,40,41,
3,0,5,5,11,11,22,22,2,0,23,23,25,25,2,0,26,26,28,28,3,0,15,15,23,23,25,25,
2,0,9,9,20,20,1,0,12,15,668,0,126,1,0,0,0,2,157,1,0,0,0,4,172,1,0,0,0,6,
196,1,0,0,0,8,213,1,0,0,0,10,215,1,0,0,0,12,217,1,0,0,0,14,219,1,0,0,0,16,
221,1,0,0,0,18,234,1,0,0,0,20,236,1,0,0,0,22,245,1,0,0,0,24,253,1,0,0,0,
26,264,1,0,0,0,28,266,1,0,0,0,30,268,1,0,0,0,32,277,1,0,0,0,34,279,1,0,0,
0,36,285,1,0,0,0,38,316,1,0,0,0,40,319,1,0,0,0,42,334,1,0,0,0,44,336,1,0,
0,0,46,354,1,0,0,0,48,356,1,0,0,0,50,365,1,0,0,0,52,375,1,0,0,0,54,379,1,
0,0,0,56,384,1,0,0,0,58,404,1,0,0,0,60,406,1,0,0,0,62,408,1,0,0,0,64,424,
1,0,0,0,66,428,1,0,0,0,68,436,1,0,0,0,70,447,1,0,0,0,72,452,1,0,0,0,74,454,
1,0,0,0,76,458,1,0,0,0,78,460,1,0,0,0,80,463,1,0,0,0,82,479,1,0,0,0,84,489,
1,0,0,0,86,491,1,0,0,0,88,495,1,0,0,0,90,504,1,0,0,0,92,514,1,0,0,0,94,516,
1,0,0,0,96,520,1,0,0,0,98,527,1,0,0,0,100,530,1,0,0,0,102,546,1,0,0,0,104,
554,1,0,0,0,106,562,1,0,0,0,108,573,1,0,0,0,110,575,1,0,0,0,112,582,1,0,
0,0,114,584,1,0,0,0,116,587,1,0,0,0,118,590,1,0,0,0,120,592,1,0,0,0,122,
594,1,0,0,0,124,617,1,0,0,0,126,127,3,2,1,0,127,128,5,0,0,1,128,1,1,0,0,
0,129,130,5,37,0,0,130,140,5,50,0,0,131,132,5,49,0,0,132,137,5,50,0,0,133,
134,5,6,0,0,134,136,5,50,0,0,135,133,1,0,0,0,136,139,1,0,0,0,137,135,1,0,
0,0,137,138,1,0,0,0,138,141,1,0,0,0,139,137,1,0,0,0,140,131,1,0,0,0,140,
141,1,0,0,0,141,155,1,0,0,0,142,143,5,38,0,0,143,152,5,3,0,0,144,149,5,50,
0,0,145,146,5,6,0,0,146,148,5,50,0,0,147,145,1,0,0,0,148,151,1,0,0,0,149,
147,1,0,0,0,149,150,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,152,144,1,0,
0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,156,5,4,0,0,155,142,1,0,0,0,155,
156,1,0,0,0,156,158,1,0,0,0,157,129,1,0,0,0,157,158,1,0,0,0,158,162,1,0,
0,0,159,161,3,34,17,0,160,159,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,
163,1,0,0,0,163,168,1,0,0,0,164,162,1,0,0,0,165,169,3,32,16,0,166,169,3,
4,2,0,167,169,3,30,15,0,168,165,1,0,0,0,168,166,1,0,0,0,168,167,1,0,0,0,
169,170,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,3,1,0,0,0,172,173,5,
42,0,0,173,183,5,50,0,0,174,175,5,34,0,0,175,180,5,50,0,0,176,177,5,6,0,
0,177,179,5,50,0,0,178,176,1,0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,
1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,0,183,174,1,0,0,0,183,184,1,0,0,0,
184,185,1,0,0,0,185,189,5,19,0,0,186,188,3,6,3,0,187,186,1,0,0,0,188,191,
1,0,0,0,189,187,1,0,0,0,189,190,1,0,0,0,190,192,1,0,0,0,191,189,1,0,0,0,
192,194,5,21,0,0,193,195,5,10,0,0,194,193,1,0,0,0,194,195,1,0,0,0,195,5,
1,0,0,0,196,198,3,124,62,0,197,199,5,11,0,0,198,197,1,0,0,0,198,199,1,0,
0,0,199,200,1,0,0,0,200,201,5,9,0,0,201,204,3,18,9,0,202,203,5,25,0,0,203,
205,3,8,4,0,204,202,1,0,0,0,204,205,1,0,0,0,205,207,1,0,0,0,206,208,5,10,
0,0,207,206,1,0,0,0,207,208,1,0,0,0,208,7,1,0,0,0,209,214,3,10,5,0,210,214,
3,12,6,0,211,214,3,14,7,0,212,214,3,16,8,0,213,209,1,0,0,0,213,210,1,0,0,
0,213,211,1,0,0,0,213,212,1,0,0,0,214,9,1,0,0,0,215,216,5,51,0,0,216,11,
1,0,0,0,217,218,5,52,0,0,218,13,1,0,0,0,219,220,7,0,0,0,220,15,1,0,0,0,221,
230,5,17,0,0,222,227,3,8,4,0,223,224,5,6,0,0,224,226,3,8,4,0,225,223,1,0,
0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,231,1,0,0,0,229,
227,1,0,0,0,230,222,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,233,5,18,
0,0,233,17,1,0,0,0,234,235,3,20,10,0,235,19,1,0,0,0,236,243,3,22,11,0,237,
238,5,20,0,0,238,240,3,22,11,0,239,237,1,0,0,0,240,241,1,0,0,0,241,239,1,
0,0,0,241,242,1,0,0,0,242,244,1,0,0,0,243,239,1,0,0,0,243,244,1,0,0,0,244,
21,1,0,0,0,245,248,3,24,12,0,246,247,5,17,0,0,247,249,5,18,0,0,248,246,1,
0,0,0,248,249,1,0,0,0,249,23,1,0,0,0,250,254,3,26,13,0,251,252,5,16,0,0,
252,254,3,26,13,0,253,250,1,0,0,0,253,251,1,0,0,0,254,25,1,0,0,0,255,256,
5,3,0,0,256,257,3,18,9,0,257,258,5,4,0,0,258,265,1,0,0,0,259,263,5,50,0,
0,260,263,3,28,14,0,261,263,5,51,0,0,262,259,1,0,0,0,262,260,1,0,0,0,262,
261,1,0,0,0,263,265,1,0,0,0,264,255,1,0,0,0,264,262,1,0,0,0,265,27,1,0,0,
0,266,267,7,1,0,0,267,29,1,0,0,0,268,269,5,48,0,0,269,270,5,50,0,0,270,271,
5,25,0,0,271,273,3,18,9,0,272,274,5,10,0,0,273,272,1,0,0,0,273,274,1,0,0,
0,274,31,1,0,0,0,275,278,3,36,18,0,276,278,3,100,50,0,277,275,1,0,0,0,277,
276,1,0,0,0,278,33,1,0,0,0,279,280,5,39,0,0,280,282,5,51,0,0,281,283,5,10,
0,0,282,281,1,0,0,0,282,283,1,0,0,0,283,35,1,0,0,0,284,286,7,2,0,0,285,284,
1,0,0,0,285,286,1,0,0,0,286,287,1,0,0,0,287,295,3,40,20,0,288,296,5,5,0,
0,289,292,5,44,0,0,290,293,5,50,0,0,291,293,3,28,14,0,292,290,1,0,0,0,292,
291,1,0,0,0,293,296,1,0,0,0,294,296,3,38,19,0,295,288,1,0,0,0,295,289,1,
0,0,0,295,294,1,0,0,0,295,296,1,0,0,0,296,310,1,0,0,0,297,298,5,38,0,0,298,
307,5,3,0,0,299,304,5,50,0,0,300,301,5,6,0,0,301,303,5,50,0,0,302,300,1,
0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,304,305,1,0,0,0,305,308,1,0,0,0,306,
304,1,0,0,0,307,299,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,311,5,4,
0,0,310,297,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,5,9,0,0,313,
314,3,44,22,0,314,315,5,10,0,0,315,37,1,0,0,0,316,317,7,3,0,0,317,318,5,
50,0,0,318,39,1,0,0,0,319,332,5,50,0,0,320,329,5,24,0,0,321,326,3,42,21,
0,322,323,5,6,0,0,323,325,3,42,21,0,324,322,1,0,0,0,325,328,1,0,0,0,326,
324,1,0,0,0,326,327,1,0,0,0,327,330,1,0,0,0,328,326,1,0,0,0,329,321,1,0,
0,0,329,330,1,0,0,0,330,331,1,0,0,0,331,333,5,27,0,0,332,320,1,0,0,0,332,
333,1,0,0,0,333,41,1,0,0,0,334,335,5,50,0,0,335,43,1,0,0,0,336,343,3,46,
23,0,337,338,5,20,0,0,338,340,3,46,23,0,339,337,1,0,0,0,340,341,1,0,0,0,
341,339,1,0,0,0,341,342,1,0,0,0,342,344,1,0,0,0,343,339,1,0,0,0,343,344,
1,0,0,0,344,45,1,0,0,0,345,355,3,48,24,0,346,347,5,24,0,0,347,348,3,66,33,
0,348,350,5,27,0,0,349,351,3,52,26,0,350,349,1,0,0,0,351,352,1,0,0,0,352,
350,1,0,0,0,352,353,1,0,0,0,353,355,1,0,0,0,354,345,1,0,0,0,354,346,1,0,
0,0,355,47,1,0,0,0,356,363,3,50,25,0,357,358,5,2,0,0,358,360,3,50,25,0,359,
357,1,0,0,0,360,361,1,0,0,0,361,359,1,0,0,0,361,362,1,0,0,0,362,364,1,0,
0,0,363,359,1,0,0,0,363,364,1,0,0,0,364,49,1,0,0,0,365,371,3,52,26,0,366,
368,3,52,26,0,367,366,1,0,0,0,368,369,1,0,0,0,369,367,1,0,0,0,369,370,1,
0,0,0,370,372,1,0,0,0,371,367,1,0,0,0,371,372,1,0,0,0,372,51,1,0,0,0,373,
376,3,54,27,0,374,376,3,56,28,0,375,373,1,0,0,0,375,374,1,0,0,0,376,53,1,
0,0,0,377,380,3,82,41,0,378,380,3,58,29,0,379,377,1,0,0,0,379,378,1,0,0,
0,380,382,1,0,0,0,381,383,7,4,0,0,382,381,1,0,0,0,382,383,1,0,0,0,383,55,
1,0,0,0,384,387,5,19,0,0,385,388,5,50,0,0,386,388,3,38,19,0,387,385,1,0,
0,0,387,386,1,0,0,0,388,394,1,0,0,0,389,390,5,7,0,0,390,391,3,124,62,0,391,
392,7,5,0,0,392,393,5,31,0,0,393,395,1,0,0,0,394,389,1,0,0,0,394,395,1,0,
0,0,395,396,1,0,0,0,396,397,5,21,0,0,397,57,1,0,0,0,398,405,3,60,30,0,399,
405,3,62,31,0,400,405,3,94,47,0,401,405,3,78,39,0,402,405,3,80,40,0,403,
405,3,96,48,0,404,398,1,0,0,0,404,399,1,0,0,0,404,400,1,0,0,0,404,401,1,
0,0,0,404,402,1,0,0,0,404,403,1,0,0,0,405,59,1,0,0,0,406,407,5,51,0,0,407,
61,1,0,0,0,408,420,5,50,0,0,409,410,5,24,0,0,410,415,3,64,32,0,411,412,5,
6,0,0,412,414,3,64,32,0,413,411,1,0,0,0,414,417,1,0,0,0,415,413,1,0,0,0,
415,416,1,0,0,0,416,418,1,0,0,0,417,415,1,0,0,0,418,419,5,27,0,0,419,421,
1,0,0,0,420,409,1,0,0,0,420,421,1,0,0,0,421,63,1,0,0,0,422,423,5,50,0,0,
423,425,5,25,0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,426,1,0,0,0,426,427,
3,66,33,0,427,65,1,0,0,0,428,433,3,68,34,0,429,430,5,20,0,0,430,432,3,68,
34,0,431,429,1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,
67,1,0,0,0,435,433,1,0,0,0,436,441,3,70,35,0,437,438,5,2,0,0,438,440,3,70,
35,0,439,437,1,0,0,0,440,443,1,0,0,0,441,439,1,0,0,0,441,442,1,0,0,0,442,
69,1,0,0,0,443,441,1,0,0,0,444,448,3,72,36,0,445,446,5,1,0,0,446,448,3,70,
35,0,447,444,1,0,0,0,447,445,1,0,0,0,448,71,1,0,0,0,449,453,3,76,38,0,450,
453,3,74,37,0,451,453,3,14,7,0,452,449,1,0,0,0,452,450,1,0,0,0,452,451,1,
0,0,0,453,73,1,0,0,0,454,455,5,3,0,0,455,456,3,66,33,0,456,457,5,4,0,0,457,
75,1,0,0,0,458,459,5,50,0,0,459,77,1,0,0,0,460,461,7,6,0,0,461,462,5,51,
0,0,462,79,1,0,0,0,463,464,7,6,0,0,464,476,5,50,0,0,465,466,5,24,0,0,466,
471,3,64,32,0,467,468,5,6,0,0,468,470,3,64,32,0,469,467,1,0,0,0,470,473,
1,0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,474,1,0,0,0,473,471,1,0,0,0,
474,475,5,27,0,0,475,477,1,0,0,0,476,465,1,0,0,0,476,477,1,0,0,0,477,81,
1,0,0,0,478,480,7,6,0,0,479,478,1,0,0,0,479,480,1,0,0,0,480,481,1,0,0,0,
481,482,3,124,62,0,482,483,7,7,0,0,483,484,3,84,42,0,484,83,1,0,0,0,485,
490,3,60,30,0,486,490,3,62,31,0,487,490,3,86,43,0,488,490,3,90,45,0,489,
485,1,0,0,0,489,486,1,0,0,0,489,487,1,0,0,0,489,488,1,0,0,0,490,85,1,0,0,
0,491,492,5,3,0,0,492,493,3,88,44,0,493,494,5,4,0,0,494,87,1,0,0,0,495,502,
3,84,42,0,496,497,5,20,0,0,497,499,3,84,42,0,498,496,1,0,0,0,499,500,1,0,
0,0,500,498,1,0,0,0,500,501,1,0,0,0,501,503,1,0,0,0,502,498,1,0,0,0,502,
503,1,0,0,0,503,89,1,0,0,0,504,505,5,17,0,0,505,508,3,92,46,0,506,507,7,
8,0,0,507,509,3,92,46,0,508,506,1,0,0,0,508,509,1,0,0,0,509,510,1,0,0,0,
510,511,5,18,0,0,511,91,1,0,0,0,512,515,3,60,30,0,513,515,3,62,31,0,514,
512,1,0,0,0,514,513,1,0,0,0,515,93,1,0,0,0,516,517,5,3,0,0,517,518,3,44,
22,0,518,519,5,4,0,0,519,95,1,0,0,0,520,521,7,6,0,0,521,522,5,3,0,0,522,
523,3,44,22,0,523,524,5,4,0,0,524,97,1,0,0,0,525,528,3,28,14,0,526,528,5,
50,0,0,527,525,1,0,0,0,527,526,1,0,0,0,528,99,1,0,0,0,529,531,5,38,0,0,530,
529,1,0,0,0,530,531,1,0,0,0,531,532,1,0,0,0,532,540,5,46,0,0,533,534,5,36,
0,0,534,541,5,50,0,0,535,538,5,50,0,0,536,537,5,44,0,0,537,539,3,98,49,0,
538,536,1,0,0,0,538,539,1,0,0,0,539,541,1,0,0,0,540,533,1,0,0,0,540,535,
1,0,0,0,541,542,1,0,0,0,542,543,5,9,0,0,543,544,3,102,51,0,544,545,5,10,
0,0,545,101,1,0,0,0,546,551,3,104,52,0,547,548,5,20,0,0,548,550,3,104,52,
0,549,547,1,0,0,0,550,553,1,0,0,0,551,549,1,0,0,0,551,552,1,0,0,0,552,103,
1,0,0,0,553,551,1,0,0,0,554,560,3,106,53,0,555,557,3,106,53,0,556,555,1,
0,0,0,557,558,1,0,0,0,558,556,1,0,0,0,558,559,1,0,0,0,559,561,1,0,0,0,560,
556,1,0,0,0,560,561,1,0,0,0,561,105,1,0,0,0,562,564,3,108,54,0,563,565,7,
4,0,0,564,563,1,0,0,0,564,565,1,0,0,0,565,107,1,0,0,0,566,574,3,122,61,0,
567,574,3,112,56,0,568,574,3,110,55,0,569,574,3,114,57,0,570,574,3,116,58,
0,571,574,3,118,59,0,572,574,3,120,60,0,573,566,1,0,0,0,573,567,1,0,0,0,
573,568,1,0,0,0,573,569,1,0,0,0,573,570,1,0,0,0,573,571,1,0,0,0,573,572,
1,0,0,0,574,109,1,0,0,0,575,577,5,3,0,0,576,578,7,9,0,0,577,576,1,0,0,0,
577,578,1,0,0,0,578,579,1,0,0,0,579,580,3,102,51,0,580,581,5,4,0,0,581,111,
1,0,0,0,582,583,5,50,0,0,583,113,1,0,0,0,584,585,5,1,0,0,585,586,3,108,54,
0,586,115,1,0,0,0,587,588,5,28,0,0,588,589,3,108,54,0,589,117,1,0,0,0,590,
591,5,53,0,0,591,119,1,0,0,0,592,593,5,7,0,0,593,121,1,0,0,0,594,597,3,60,
30,0,595,596,5,8,0,0,596,598,3,60,30,0,597,595,1,0,0,0,597,598,1,0,0,0,598,
123,1,0,0,0,599,618,5,31,0,0,600,618,5,33,0,0,601,618,5,34,0,0,602,618,5,
35,0,0,603,618,5,36,0,0,604,618,5,37,0,0,605,618,5,38,0,0,606,618,5,39,0,
0,607,618,5,42,0,0,608,618,5,44,0,0,609,618,5,46,0,0,610,618,5,47,0,0,611,
618,5,48,0,0,612,618,5,40,0,0,613,618,5,41,0,0,614,618,5,49,0,0,615,618,
3,28,14,0,616,618,5,50,0,0,617,599,1,0,0,0,617,600,1,0,0,0,617,601,1,0,0,
0,617,602,1,0,0,0,617,603,1,0,0,0,617,604,1,0,0,0,617,605,1,0,0,0,617,606,
1,0,0,0,617,607,1,0,0,0,617,608,1,0,0,0,617,609,1,0,0,0,617,610,1,0,0,0,
617,611,1,0,0,0,617,612,1,0,0,0,617,613,1,0,0,0,617,614,1,0,0,0,617,615,
1,0,0,0,617,616,1,0,0,0,618,125,1,0,0,0,78,137,140,149,152,155,157,162,168,
170,180,183,189,194,198,204,207,213,227,230,241,243,248,253,262,264,273,
277,282,285,292,295,304,307,310,326,329,332,341,343,352,354,361,363,369,
371,375,379,382,387,394,404,415,420,424,433,441,447,452,471,476,479,489,
500,502,508,514,527,530,538,540,551,558,560,564,573,577,597,617];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LangiumParser extends antlr4.Parser {

    static grammarFileName = "LangiumParser.g4";
    static literalNames = [ null, "'!'", "'&'", "'('", "')'", "'*'", "','", 
                            "'.'", "'..'", "':'", "';'", "'?'", "'?!'", 
                            "'?<!'", "'?<='", "'?='", "'@'", "'['", "']'", 
                            "'{'", "'|'", "'}'", "'+'", "'+='", "'<'", "'='", 
                            "'=>'", "'>'", "'->'", "'bigint'", "'boolean'", 
                            "'current'", "'Date'", "'entry'", "'extends'", 
                            "'false'", "'fragment'", "'grammar'", "'hidden'", 
                            "'import'", "'infer'", "'infers'", "'interface'", 
                            "'number'", "'returns'", "'string'", "'terminal'", 
                            "'true'", "'type'", "'with'" ];
    static symbolicNames = [ null, "EXCLAMATION_MARK", "AMPERSAND", "LEFT_PARENTHESIS", 
                             "RIGHT_PARENTHESIS", "ASTERISK", "COMMA", "FULL_STOP", 
                             "DOT_DOT", "COLON", "SEMICOLON", "QUESTION_MARK", 
                             "QM_BANG", "QM_LT_BANG", "QM_LE", "QM_EQ", 
                             "COMMERCIAL_AT", "LEFT_SQUARE_BRACKET", "RIGHT_SQUARE_BRACKET", 
                             "LEFT_CURLY_BRACKET", "VERTICAL_LINE", "RIGHT_CURLY_BRACKET", 
                             "PLUS_SIGN", "PLUS_EQUAL", "LESS_THAN_SIGN", 
                             "EQUALS_SIGN", "EQ_GT", "GREATER_THAN_SIGN", 
                             "MINUS_GT", "KW_BIGINT", "KW_BOOLEAN", "KW_CURRENT", 
                             "KW_DATE", "KW_ENTRY", "KW_EXTENDS", "KW_FALSE", 
                             "KW_FRAGMENT", "KW_GRAMMAR", "KW_HIDDEN", "KW_IMPORT", 
                             "KW_INFER", "KW_INFERS", "KW_INTERFACE", "KW_NUMBER", 
                             "KW_RETURNS", "KW_STRING", "KW_TERMINAL", "KW_TRUE", 
                             "KW_TYPE", "KW_WITH", "ID", "STRING", "NUMBER", 
                             "RegexLiteral", "WS", "SL_COMMENT", "ML_COMMENT" ];
    static ruleNames = [ "file_", "start_", "interface", "typeAttribute", 
                         "valueLiteral", "stringLiteral", "numberLiteral", 
                         "booleanLiteral", "arrayLiteral", "typeDefinition", 
                         "unionType", "arrayType", "referenceType", "simpleType", 
                         "primitiveType", "type", "abstractRule", "grammarImport", 
                         "parserRule_", "inferredType", "ruleNameAndParams", 
                         "parameter", "alternatives", "conditionalBranch", 
                         "unorderedGroup", "group", "abstractToken", "abstractTokenWithCardinality", 
                         "action", "abstractTerminal", "keyword", "ruleCall", 
                         "namedArgument", "disjunction", "conjunction", 
                         "negation", "atom", "parenthesizedCondition", "parameterReference", 
                         "predicatedKeyword", "predicatedRuleCall", "assignment", 
                         "assignableTerminal", "parenthesizedAssignableElement", 
                         "assignableAlternatives", "crossReference", "crossReferenceableTerminal", 
                         "parenthesizedElement", "predicatedGroup", "returnType", 
                         "terminalRule", "terminalAlternatives", "terminalGroup", 
                         "terminalToken", "terminalTokenElement", "parenthesizedTerminalElement", 
                         "terminalRuleCall", "negatedToken", "untilToken", 
                         "regexToken", "wildcard", "characterRange", "featureName" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LangiumParser.ruleNames;
        this.literalNames = LangiumParser.literalNames;
        this.symbolicNames = LangiumParser.symbolicNames;
    }



	file_() {
	    let localctx = new File_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LangiumParser.RULE_file_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 126;
	        this.start_();
	        this.state = 127;
	        this.match(LangiumParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	start_() {
	    let localctx = new Start_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LangiumParser.RULE_start_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 129;
	            this.match(LangiumParser.KW_GRAMMAR);
	            this.state = 130;
	            this.match(LangiumParser.ID);
	            this.state = 140;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 131;
	                this.match(LangiumParser.KW_WITH);
	                this.state = 132;
	                this.match(LangiumParser.ID);
	                this.state = 137;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===6) {
	                    this.state = 133;
	                    this.match(LangiumParser.COMMA);
	                    this.state = 134;
	                    this.match(LangiumParser.ID);
	                    this.state = 139;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 155;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	            if(la_===1) {
	                this.state = 142;
	                this.match(LangiumParser.KW_HIDDEN);
	                this.state = 143;
	                this.match(LangiumParser.LEFT_PARENTHESIS);
	                this.state = 152;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===50) {
	                    this.state = 144;
	                    this.match(LangiumParser.ID);
	                    this.state = 149;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    while(_la===6) {
	                        this.state = 145;
	                        this.match(LangiumParser.COMMA);
	                        this.state = 146;
	                        this.match(LangiumParser.ID);
	                        this.state = 151;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    }
	                }

	                this.state = 154;
	                this.match(LangiumParser.RIGHT_PARENTHESIS);

	            }
	        }

	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 159;
	            this.grammarImport();
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 168;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 33:
	            case 36:
	            case 38:
	            case 46:
	            case 50:
	                this.state = 165;
	                this.abstractRule();
	                break;
	            case 42:
	                this.state = 166;
	                this.interface_();
	                break;
	            case 48:
	                this.state = 167;
	                this.type();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 170; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 172585) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interface_() {
	    let localctx = new InterfaceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, LangiumParser.RULE_interface);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 172;
	        this.match(LangiumParser.KW_INTERFACE);
	        this.state = 173;
	        this.match(LangiumParser.ID);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===34) {
	            this.state = 174;
	            this.match(LangiumParser.KW_EXTENDS);
	            this.state = 175;
	            this.match(LangiumParser.ID);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 176;
	                this.match(LangiumParser.COMMA);
	                this.state = 177;
	                this.match(LangiumParser.ID);
	                this.state = 182;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 185;
	        this.match(LangiumParser.LEFT_CURLY_BRACKET);
	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 4194303) !== 0)) {
	            this.state = 186;
	            this.typeAttribute();
	            this.state = 191;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 192;
	        this.match(LangiumParser.RIGHT_CURLY_BRACKET);
	        this.state = 194;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 193;
	            this.match(LangiumParser.SEMICOLON);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeAttribute() {
	    let localctx = new TypeAttributeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LangiumParser.RULE_typeAttribute);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.featureName();
	        this.state = 198;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 197;
	            this.match(LangiumParser.QUESTION_MARK);
	        }

	        this.state = 200;
	        this.match(LangiumParser.COLON);
	        this.state = 201;
	        this.typeDefinition();
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 202;
	            this.match(LangiumParser.EQUALS_SIGN);
	            this.state = 203;
	            this.valueLiteral();
	        }

	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 206;
	            this.match(LangiumParser.SEMICOLON);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valueLiteral() {
	    let localctx = new ValueLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LangiumParser.RULE_valueLiteral);
	    try {
	        this.state = 213;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 209;
	            this.stringLiteral();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 210;
	            this.numberLiteral();
	            break;
	        case 35:
	        case 47:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 211;
	            this.booleanLiteral();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 212;
	            this.arrayLiteral();
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



	stringLiteral() {
	    let localctx = new StringLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, LangiumParser.RULE_stringLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(LangiumParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numberLiteral() {
	    let localctx = new NumberLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LangiumParser.RULE_numberLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(LangiumParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleanLiteral() {
	    let localctx = new BooleanLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, LangiumParser.RULE_booleanLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        _la = this._input.LA(1);
	        if(!(_la===35 || _la===47)) {
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



	arrayLiteral() {
	    let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LangiumParser.RULE_arrayLiteral);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.match(LangiumParser.LEFT_SQUARE_BRACKET);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 200705) !== 0)) {
	            this.state = 222;
	            this.valueLiteral();
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 223;
	                this.match(LangiumParser.COMMA);
	                this.state = 224;
	                this.valueLiteral();
	                this.state = 229;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 232;
	        this.match(LangiumParser.RIGHT_SQUARE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDefinition() {
	    let localctx = new TypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LangiumParser.RULE_typeDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.unionType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unionType() {
	    let localctx = new UnionTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LangiumParser.RULE_unionType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.arrayType();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 239; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 237;
	                this.match(LangiumParser.VERTICAL_LINE);
	                this.state = 238;
	                this.arrayType();
	                this.state = 241; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===20);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 22, LangiumParser.RULE_arrayType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.referenceType();
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===17) {
	            this.state = 246;
	            this.match(LangiumParser.LEFT_SQUARE_BRACKET);
	            this.state = 247;
	            this.match(LangiumParser.RIGHT_SQUARE_BRACKET);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	referenceType() {
	    let localctx = new ReferenceTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LangiumParser.RULE_referenceType);
	    try {
	        this.state = 253;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 29:
	        case 30:
	        case 32:
	        case 43:
	        case 45:
	        case 50:
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 250;
	            this.simpleType();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 251;
	            this.match(LangiumParser.COMMERCIAL_AT);
	            this.state = 252;
	            this.simpleType();
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
	    this.enterRule(localctx, 26, LangiumParser.RULE_simpleType);
	    try {
	        this.state = 264;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 255;
	            this.match(LangiumParser.LEFT_PARENTHESIS);
	            this.state = 256;
	            this.typeDefinition();
	            this.state = 257;
	            this.match(LangiumParser.RIGHT_PARENTHESIS);
	            break;
	        case 29:
	        case 30:
	        case 32:
	        case 43:
	        case 45:
	        case 50:
	        case 51:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 50:
	                this.state = 259;
	                this.match(LangiumParser.ID);
	                break;
	            case 29:
	            case 30:
	            case 32:
	            case 43:
	            case 45:
	                this.state = 260;
	                this.primitiveType();
	                break;
	            case 51:
	                this.state = 261;
	                this.match(LangiumParser.STRING);
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



	primitiveType() {
	    let localctx = new PrimitiveTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LangiumParser.RULE_primitiveType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 266;
	        _la = this._input.LA(1);
	        if(!(((((_la - 29)) & ~0x1f) === 0 && ((1 << (_la - 29)) & 81931) !== 0))) {
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LangiumParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(LangiumParser.KW_TYPE);
	        this.state = 269;
	        this.match(LangiumParser.ID);
	        this.state = 270;
	        this.match(LangiumParser.EQUALS_SIGN);
	        this.state = 271;
	        this.typeDefinition();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 272;
	            this.match(LangiumParser.SEMICOLON);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	abstractRule() {
	    let localctx = new AbstractRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LangiumParser.RULE_abstractRule);
	    try {
	        this.state = 277;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	        case 36:
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.parserRule_();
	            break;
	        case 38:
	        case 46:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 276;
	            this.terminalRule();
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



	grammarImport() {
	    let localctx = new GrammarImportContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LangiumParser.RULE_grammarImport);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this.match(LangiumParser.KW_IMPORT);
	        this.state = 280;
	        this.match(LangiumParser.STRING);
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 281;
	            this.match(LangiumParser.SEMICOLON);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parserRule_() {
	    let localctx = new ParserRule_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LangiumParser.RULE_parserRule_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33 || _la===36) {
	            this.state = 284;
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===36)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 287;
	        this.ruleNameAndParams();
	        this.state = 295;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 5:
	        	this.state = 288;
	        	this.match(LangiumParser.ASTERISK);
	        	break;
	        case 44:
	        	this.state = 289;
	        	this.match(LangiumParser.KW_RETURNS);
	        	this.state = 292;
	        	this._errHandler.sync(this);
	        	switch(this._input.LA(1)) {
	        	case 50:
	        	    this.state = 290;
	        	    this.match(LangiumParser.ID);
	        	    break;
	        	case 29:
	        	case 30:
	        	case 32:
	        	case 43:
	        	case 45:
	        	    this.state = 291;
	        	    this.primitiveType();
	        	    break;
	        	default:
	        	    throw new antlr4.error.NoViableAltException(this);
	        	}
	        	break;
	        case 40:
	        case 41:
	        	this.state = 294;
	        	this.inferredType();
	        	break;
	        case 9:
	        case 38:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 297;
	            this.match(LangiumParser.KW_HIDDEN);
	            this.state = 298;
	            this.match(LangiumParser.LEFT_PARENTHESIS);
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===50) {
	                this.state = 299;
	                this.match(LangiumParser.ID);
	                this.state = 304;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===6) {
	                    this.state = 300;
	                    this.match(LangiumParser.COMMA);
	                    this.state = 301;
	                    this.match(LangiumParser.ID);
	                    this.state = 306;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 309;
	            this.match(LangiumParser.RIGHT_PARENTHESIS);
	        }

	        this.state = 312;
	        this.match(LangiumParser.COLON);
	        this.state = 313;
	        this.alternatives();
	        this.state = 314;
	        this.match(LangiumParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inferredType() {
	    let localctx = new InferredTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LangiumParser.RULE_inferredType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        _la = this._input.LA(1);
	        if(!(_la===40 || _la===41)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 317;
	        this.match(LangiumParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleNameAndParams() {
	    let localctx = new RuleNameAndParamsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LangiumParser.RULE_ruleNameAndParams);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(LangiumParser.ID);
	        this.state = 332;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 320;
	            this.match(LangiumParser.LESS_THAN_SIGN);
	            this.state = 329;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===50) {
	                this.state = 321;
	                this.parameter();
	                this.state = 326;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===6) {
	                    this.state = 322;
	                    this.match(LangiumParser.COMMA);
	                    this.state = 323;
	                    this.parameter();
	                    this.state = 328;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 331;
	            this.match(LangiumParser.GREATER_THAN_SIGN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LangiumParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 334;
	        this.match(LangiumParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alternatives() {
	    let localctx = new AlternativesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, LangiumParser.RULE_alternatives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this.conditionalBranch();
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 339; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 337;
	                this.match(LangiumParser.VERTICAL_LINE);
	                this.state = 338;
	                this.conditionalBranch();
	                this.state = 341; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===20);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalBranch() {
	    let localctx = new ConditionalBranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LangiumParser.RULE_conditionalBranch);
	    var _la = 0;
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 19:
	        case 26:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
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
	            this.enterOuterAlt(localctx, 1);
	            this.state = 345;
	            this.unorderedGroup();
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 346;
	            this.match(LangiumParser.LESS_THAN_SIGN);
	            this.state = 347;
	            this.disjunction();
	            this.state = 348;
	            this.match(LangiumParser.GREATER_THAN_SIGN);
	            this.state = 350; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 349;
	                this.abstractToken();
	                this.state = 352; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4094165000) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1048575) !== 0));
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



	unorderedGroup() {
	    let localctx = new UnorderedGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LangiumParser.RULE_unorderedGroup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.group();
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===2) {
	            this.state = 359; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 357;
	                this.match(LangiumParser.AMPERSAND);
	                this.state = 358;
	                this.group();
	                this.state = 361; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===2);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	group() {
	    let localctx = new GroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LangiumParser.RULE_group);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.abstractToken();
	        this.state = 371;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4094165000) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1048575) !== 0)) {
	            this.state = 367; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 366;
	                this.abstractToken();
	                this.state = 369; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4094165000) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 1048575) !== 0));
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	abstractToken() {
	    let localctx = new AbstractTokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LangiumParser.RULE_abstractToken);
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 26:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
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
	            this.enterOuterAlt(localctx, 1);
	            this.state = 373;
	            this.abstractTokenWithCardinality();
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 374;
	            this.action();
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



	abstractTokenWithCardinality() {
	    let localctx = new AbstractTokenWithCardinalityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LangiumParser.RULE_abstractTokenWithCardinality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 377;
	            this.assignment();
	            break;

	        case 2:
	            this.state = 378;
	            this.abstractTerminal();
	            break;

	        }
	        this.state = 382;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196384) !== 0)) {
	            this.state = 381;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196384) !== 0))) {
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



	action() {
	    let localctx = new ActionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LangiumParser.RULE_action);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.match(LangiumParser.LEFT_CURLY_BRACKET);
	        this.state = 387;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.state = 385;
	            this.match(LangiumParser.ID);
	            break;
	        case 40:
	        case 41:
	            this.state = 386;
	            this.inferredType();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 394;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7) {
	            this.state = 389;
	            this.match(LangiumParser.FULL_STOP);
	            this.state = 390;
	            this.featureName();
	            this.state = 391;
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===25)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 392;
	            this.match(LangiumParser.KW_CURRENT);
	        }

	        this.state = 396;
	        this.match(LangiumParser.RIGHT_CURLY_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	abstractTerminal() {
	    let localctx = new AbstractTerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LangiumParser.RULE_abstractTerminal);
	    try {
	        this.state = 404;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 398;
	            this.keyword();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 399;
	            this.ruleCall();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 400;
	            this.parenthesizedElement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 401;
	            this.predicatedKeyword();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 402;
	            this.predicatedRuleCall();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 403;
	            this.predicatedGroup();
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



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LangiumParser.RULE_keyword);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(LangiumParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ruleCall() {
	    let localctx = new RuleCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LangiumParser.RULE_ruleCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.match(LangiumParser.ID);
	        this.state = 420;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 409;
	            this.match(LangiumParser.LESS_THAN_SIGN);
	            this.state = 410;
	            this.namedArgument();
	            this.state = 415;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 411;
	                this.match(LangiumParser.COMMA);
	                this.state = 412;
	                this.namedArgument();
	                this.state = 417;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 418;
	            this.match(LangiumParser.GREATER_THAN_SIGN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namedArgument() {
	    let localctx = new NamedArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LangiumParser.RULE_namedArgument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 424;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,53,this._ctx);
	        if(la_===1) {
	            this.state = 422;
	            this.match(LangiumParser.ID);
	            this.state = 423;
	            this.match(LangiumParser.EQUALS_SIGN);

	        }

	        this.state = 426;
	        this.disjunction();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LangiumParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 428;
	        this.conjunction();
	        this.state = 433;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 429;
	            this.match(LangiumParser.VERTICAL_LINE);
	            this.state = 430;
	            this.conjunction();
	            this.state = 435;
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



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LangiumParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 436;
	        this.negation();
	        this.state = 441;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 437;
	            this.match(LangiumParser.AMPERSAND);
	            this.state = 438;
	            this.negation();
	            this.state = 443;
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



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, LangiumParser.RULE_negation);
	    try {
	        this.state = 447;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	        case 35:
	        case 47:
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 444;
	            this.atom();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 445;
	            this.match(LangiumParser.EXCLAMATION_MARK);
	            this.state = 446;
	            this.negation();
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



	atom() {
	    let localctx = new AtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, LangiumParser.RULE_atom);
	    try {
	        this.state = 452;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 50:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 449;
	            this.parameterReference();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 450;
	            this.parenthesizedCondition();
	            break;
	        case 35:
	        case 47:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 451;
	            this.booleanLiteral();
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



	parenthesizedCondition() {
	    let localctx = new ParenthesizedConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, LangiumParser.RULE_parenthesizedCondition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 454;
	        this.match(LangiumParser.LEFT_PARENTHESIS);
	        this.state = 455;
	        this.disjunction();
	        this.state = 456;
	        this.match(LangiumParser.RIGHT_PARENTHESIS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameterReference() {
	    let localctx = new ParameterReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, LangiumParser.RULE_parameterReference);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 458;
	        this.match(LangiumParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicatedKeyword() {
	    let localctx = new PredicatedKeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, LangiumParser.RULE_predicatedKeyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 460;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 461;
	        this.match(LangiumParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicatedRuleCall() {
	    let localctx = new PredicatedRuleCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, LangiumParser.RULE_predicatedRuleCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 463;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 464;
	        this.match(LangiumParser.ID);
	        this.state = 476;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 465;
	            this.match(LangiumParser.LESS_THAN_SIGN);
	            this.state = 466;
	            this.namedArgument();
	            this.state = 471;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===6) {
	                this.state = 467;
	                this.match(LangiumParser.COMMA);
	                this.state = 468;
	                this.namedArgument();
	                this.state = 473;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 474;
	            this.match(LangiumParser.GREATER_THAN_SIGN);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignment() {
	    let localctx = new AssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, LangiumParser.RULE_assignment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26 || _la===28) {
	            this.state = 478;
	            _la = this._input.LA(1);
	            if(!(_la===26 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 481;
	        this.featureName();
	        this.state = 482;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 41975808) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 483;
	        this.assignableTerminal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignableTerminal() {
	    let localctx = new AssignableTerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, LangiumParser.RULE_assignableTerminal);
	    try {
	        this.state = 489;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 485;
	            this.keyword();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 486;
	            this.ruleCall();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 487;
	            this.parenthesizedAssignableElement();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 488;
	            this.crossReference();
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



	parenthesizedAssignableElement() {
	    let localctx = new ParenthesizedAssignableElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, LangiumParser.RULE_parenthesizedAssignableElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.match(LangiumParser.LEFT_PARENTHESIS);
	        this.state = 492;
	        this.assignableAlternatives();
	        this.state = 493;
	        this.match(LangiumParser.RIGHT_PARENTHESIS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignableAlternatives() {
	    let localctx = new AssignableAlternativesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, LangiumParser.RULE_assignableAlternatives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
	        this.assignableTerminal();
	        this.state = 502;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 498; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 496;
	                this.match(LangiumParser.VERTICAL_LINE);
	                this.state = 497;
	                this.assignableTerminal();
	                this.state = 500; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===20);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crossReference() {
	    let localctx = new CrossReferenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, LangiumParser.RULE_crossReference);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504;
	        this.match(LangiumParser.LEFT_SQUARE_BRACKET);
	        this.state = 505;
	        this.crossReferenceableTerminal();
	        this.state = 508;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===9 || _la===20) {
	            this.state = 506;
	            _la = this._input.LA(1);
	            if(!(_la===9 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 507;
	            this.crossReferenceableTerminal();
	        }

	        this.state = 510;
	        this.match(LangiumParser.RIGHT_SQUARE_BRACKET);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crossReferenceableTerminal() {
	    let localctx = new CrossReferenceableTerminalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, LangiumParser.RULE_crossReferenceableTerminal);
	    try {
	        this.state = 514;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 512;
	            this.keyword();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 513;
	            this.ruleCall();
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



	parenthesizedElement() {
	    let localctx = new ParenthesizedElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, LangiumParser.RULE_parenthesizedElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 516;
	        this.match(LangiumParser.LEFT_PARENTHESIS);
	        this.state = 517;
	        this.alternatives();
	        this.state = 518;
	        this.match(LangiumParser.RIGHT_PARENTHESIS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predicatedGroup() {
	    let localctx = new PredicatedGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, LangiumParser.RULE_predicatedGroup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        _la = this._input.LA(1);
	        if(!(_la===26 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 521;
	        this.match(LangiumParser.LEFT_PARENTHESIS);
	        this.state = 522;
	        this.alternatives();
	        this.state = 523;
	        this.match(LangiumParser.RIGHT_PARENTHESIS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnType() {
	    let localctx = new ReturnTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, LangiumParser.RULE_returnType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 527;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 30:
	        case 32:
	        case 43:
	        case 45:
	            this.state = 525;
	            this.primitiveType();
	            break;
	        case 50:
	            this.state = 526;
	            this.match(LangiumParser.ID);
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



	terminalRule() {
	    let localctx = new TerminalRuleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, LangiumParser.RULE_terminalRule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 530;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 529;
	            this.match(LangiumParser.KW_HIDDEN);
	        }

	        this.state = 532;
	        this.match(LangiumParser.KW_TERMINAL);
	        this.state = 540;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 36:
	            this.state = 533;
	            this.match(LangiumParser.KW_FRAGMENT);
	            this.state = 534;
	            this.match(LangiumParser.ID);
	            break;
	        case 50:
	            this.state = 535;
	            this.match(LangiumParser.ID);
	            this.state = 538;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===44) {
	                this.state = 536;
	                this.match(LangiumParser.KW_RETURNS);
	                this.state = 537;
	                this.returnType();
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 542;
	        this.match(LangiumParser.COLON);
	        this.state = 543;
	        this.terminalAlternatives();
	        this.state = 544;
	        this.match(LangiumParser.SEMICOLON);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminalAlternatives() {
	    let localctx = new TerminalAlternativesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, LangiumParser.RULE_terminalAlternatives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 546;
	        this.terminalGroup();
	        this.state = 551;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 547;
	            this.match(LangiumParser.VERTICAL_LINE);
	            this.state = 548;
	            this.terminalGroup();
	            this.state = 553;
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



	terminalGroup() {
	    let localctx = new TerminalGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, LangiumParser.RULE_terminalGroup);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 554;
	        this.terminalToken();
	        this.state = 560;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 268435594) !== 0) || ((((_la - 50)) & ~0x1f) === 0 && ((1 << (_la - 50)) & 11) !== 0)) {
	            this.state = 556; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 555;
	                this.terminalToken();
	                this.state = 558; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 268435594) !== 0) || ((((_la - 50)) & ~0x1f) === 0 && ((1 << (_la - 50)) & 11) !== 0));
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminalToken() {
	    let localctx = new TerminalTokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, LangiumParser.RULE_terminalToken);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 562;
	        this.terminalTokenElement();
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196384) !== 0)) {
	            this.state = 563;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4196384) !== 0))) {
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



	terminalTokenElement() {
	    let localctx = new TerminalTokenElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, LangiumParser.RULE_terminalTokenElement);
	    try {
	        this.state = 573;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 51:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 566;
	            this.characterRange();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 567;
	            this.terminalRuleCall();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 568;
	            this.parenthesizedTerminalElement();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 569;
	            this.negatedToken();
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 570;
	            this.untilToken();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 571;
	            this.regexToken();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 572;
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



	parenthesizedTerminalElement() {
	    let localctx = new ParenthesizedTerminalElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, LangiumParser.RULE_parenthesizedTerminalElement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        this.match(LangiumParser.LEFT_PARENTHESIS);
	        this.state = 577;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0)) {
	            this.state = 576;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 61440) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 579;
	        this.terminalAlternatives();
	        this.state = 580;
	        this.match(LangiumParser.RIGHT_PARENTHESIS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminalRuleCall() {
	    let localctx = new TerminalRuleCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, LangiumParser.RULE_terminalRuleCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 582;
	        this.match(LangiumParser.ID);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negatedToken() {
	    let localctx = new NegatedTokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, LangiumParser.RULE_negatedToken);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        this.match(LangiumParser.EXCLAMATION_MARK);
	        this.state = 585;
	        this.terminalTokenElement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	untilToken() {
	    let localctx = new UntilTokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, LangiumParser.RULE_untilToken);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 587;
	        this.match(LangiumParser.MINUS_GT);
	        this.state = 588;
	        this.terminalTokenElement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	regexToken() {
	    let localctx = new RegexTokenContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, LangiumParser.RULE_regexToken);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 590;
	        this.match(LangiumParser.RegexLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 120, LangiumParser.RULE_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 592;
	        this.match(LangiumParser.FULL_STOP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	characterRange() {
	    let localctx = new CharacterRangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, LangiumParser.RULE_characterRange);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 594;
	        this.keyword();
	        this.state = 597;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 595;
	            this.match(LangiumParser.DOT_DOT);
	            this.state = 596;
	            this.keyword();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	featureName() {
	    let localctx = new FeatureNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, LangiumParser.RULE_featureName);
	    try {
	        this.state = 617;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 31:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 599;
	            this.match(LangiumParser.KW_CURRENT);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 600;
	            this.match(LangiumParser.KW_ENTRY);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 601;
	            this.match(LangiumParser.KW_EXTENDS);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 602;
	            this.match(LangiumParser.KW_FALSE);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 603;
	            this.match(LangiumParser.KW_FRAGMENT);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 604;
	            this.match(LangiumParser.KW_GRAMMAR);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 605;
	            this.match(LangiumParser.KW_HIDDEN);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 606;
	            this.match(LangiumParser.KW_IMPORT);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 607;
	            this.match(LangiumParser.KW_INTERFACE);
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 608;
	            this.match(LangiumParser.KW_RETURNS);
	            break;
	        case 46:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 609;
	            this.match(LangiumParser.KW_TERMINAL);
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 610;
	            this.match(LangiumParser.KW_TRUE);
	            break;
	        case 48:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 611;
	            this.match(LangiumParser.KW_TYPE);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 612;
	            this.match(LangiumParser.KW_INFER);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 613;
	            this.match(LangiumParser.KW_INFERS);
	            break;
	        case 49:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 614;
	            this.match(LangiumParser.KW_WITH);
	            break;
	        case 29:
	        case 30:
	        case 32:
	        case 43:
	        case 45:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 615;
	            this.primitiveType();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 616;
	            this.match(LangiumParser.ID);
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

LangiumParser.EOF = antlr4.Token.EOF;
LangiumParser.EXCLAMATION_MARK = 1;
LangiumParser.AMPERSAND = 2;
LangiumParser.LEFT_PARENTHESIS = 3;
LangiumParser.RIGHT_PARENTHESIS = 4;
LangiumParser.ASTERISK = 5;
LangiumParser.COMMA = 6;
LangiumParser.FULL_STOP = 7;
LangiumParser.DOT_DOT = 8;
LangiumParser.COLON = 9;
LangiumParser.SEMICOLON = 10;
LangiumParser.QUESTION_MARK = 11;
LangiumParser.QM_BANG = 12;
LangiumParser.QM_LT_BANG = 13;
LangiumParser.QM_LE = 14;
LangiumParser.QM_EQ = 15;
LangiumParser.COMMERCIAL_AT = 16;
LangiumParser.LEFT_SQUARE_BRACKET = 17;
LangiumParser.RIGHT_SQUARE_BRACKET = 18;
LangiumParser.LEFT_CURLY_BRACKET = 19;
LangiumParser.VERTICAL_LINE = 20;
LangiumParser.RIGHT_CURLY_BRACKET = 21;
LangiumParser.PLUS_SIGN = 22;
LangiumParser.PLUS_EQUAL = 23;
LangiumParser.LESS_THAN_SIGN = 24;
LangiumParser.EQUALS_SIGN = 25;
LangiumParser.EQ_GT = 26;
LangiumParser.GREATER_THAN_SIGN = 27;
LangiumParser.MINUS_GT = 28;
LangiumParser.KW_BIGINT = 29;
LangiumParser.KW_BOOLEAN = 30;
LangiumParser.KW_CURRENT = 31;
LangiumParser.KW_DATE = 32;
LangiumParser.KW_ENTRY = 33;
LangiumParser.KW_EXTENDS = 34;
LangiumParser.KW_FALSE = 35;
LangiumParser.KW_FRAGMENT = 36;
LangiumParser.KW_GRAMMAR = 37;
LangiumParser.KW_HIDDEN = 38;
LangiumParser.KW_IMPORT = 39;
LangiumParser.KW_INFER = 40;
LangiumParser.KW_INFERS = 41;
LangiumParser.KW_INTERFACE = 42;
LangiumParser.KW_NUMBER = 43;
LangiumParser.KW_RETURNS = 44;
LangiumParser.KW_STRING = 45;
LangiumParser.KW_TERMINAL = 46;
LangiumParser.KW_TRUE = 47;
LangiumParser.KW_TYPE = 48;
LangiumParser.KW_WITH = 49;
LangiumParser.ID = 50;
LangiumParser.STRING = 51;
LangiumParser.NUMBER = 52;
LangiumParser.RegexLiteral = 53;
LangiumParser.WS = 54;
LangiumParser.SL_COMMENT = 55;
LangiumParser.ML_COMMENT = 56;

LangiumParser.RULE_file_ = 0;
LangiumParser.RULE_start_ = 1;
LangiumParser.RULE_interface = 2;
LangiumParser.RULE_typeAttribute = 3;
LangiumParser.RULE_valueLiteral = 4;
LangiumParser.RULE_stringLiteral = 5;
LangiumParser.RULE_numberLiteral = 6;
LangiumParser.RULE_booleanLiteral = 7;
LangiumParser.RULE_arrayLiteral = 8;
LangiumParser.RULE_typeDefinition = 9;
LangiumParser.RULE_unionType = 10;
LangiumParser.RULE_arrayType = 11;
LangiumParser.RULE_referenceType = 12;
LangiumParser.RULE_simpleType = 13;
LangiumParser.RULE_primitiveType = 14;
LangiumParser.RULE_type = 15;
LangiumParser.RULE_abstractRule = 16;
LangiumParser.RULE_grammarImport = 17;
LangiumParser.RULE_parserRule_ = 18;
LangiumParser.RULE_inferredType = 19;
LangiumParser.RULE_ruleNameAndParams = 20;
LangiumParser.RULE_parameter = 21;
LangiumParser.RULE_alternatives = 22;
LangiumParser.RULE_conditionalBranch = 23;
LangiumParser.RULE_unorderedGroup = 24;
LangiumParser.RULE_group = 25;
LangiumParser.RULE_abstractToken = 26;
LangiumParser.RULE_abstractTokenWithCardinality = 27;
LangiumParser.RULE_action = 28;
LangiumParser.RULE_abstractTerminal = 29;
LangiumParser.RULE_keyword = 30;
LangiumParser.RULE_ruleCall = 31;
LangiumParser.RULE_namedArgument = 32;
LangiumParser.RULE_disjunction = 33;
LangiumParser.RULE_conjunction = 34;
LangiumParser.RULE_negation = 35;
LangiumParser.RULE_atom = 36;
LangiumParser.RULE_parenthesizedCondition = 37;
LangiumParser.RULE_parameterReference = 38;
LangiumParser.RULE_predicatedKeyword = 39;
LangiumParser.RULE_predicatedRuleCall = 40;
LangiumParser.RULE_assignment = 41;
LangiumParser.RULE_assignableTerminal = 42;
LangiumParser.RULE_parenthesizedAssignableElement = 43;
LangiumParser.RULE_assignableAlternatives = 44;
LangiumParser.RULE_crossReference = 45;
LangiumParser.RULE_crossReferenceableTerminal = 46;
LangiumParser.RULE_parenthesizedElement = 47;
LangiumParser.RULE_predicatedGroup = 48;
LangiumParser.RULE_returnType = 49;
LangiumParser.RULE_terminalRule = 50;
LangiumParser.RULE_terminalAlternatives = 51;
LangiumParser.RULE_terminalGroup = 52;
LangiumParser.RULE_terminalToken = 53;
LangiumParser.RULE_terminalTokenElement = 54;
LangiumParser.RULE_parenthesizedTerminalElement = 55;
LangiumParser.RULE_terminalRuleCall = 56;
LangiumParser.RULE_negatedToken = 57;
LangiumParser.RULE_untilToken = 58;
LangiumParser.RULE_regexToken = 59;
LangiumParser.RULE_wildcard = 60;
LangiumParser.RULE_characterRange = 61;
LangiumParser.RULE_featureName = 62;

class File_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_file_;
    }

	start_() {
	    return this.getTypedRuleContext(Start_Context,0);
	};

	EOF() {
	    return this.getToken(LangiumParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterFile_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitFile_(this);
		}
	}


}



class Start_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_start_;
    }

	KW_GRAMMAR() {
	    return this.getToken(LangiumParser.KW_GRAMMAR, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.ID);
	    } else {
	        return this.getToken(LangiumParser.ID, i);
	    }
	};


	grammarImport = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GrammarImportContext);
	    } else {
	        return this.getTypedRuleContext(GrammarImportContext,i);
	    }
	};

	abstractRule = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AbstractRuleContext);
	    } else {
	        return this.getTypedRuleContext(AbstractRuleContext,i);
	    }
	};

	interface_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InterfaceContext);
	    } else {
	        return this.getTypedRuleContext(InterfaceContext,i);
	    }
	};

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	KW_WITH() {
	    return this.getToken(LangiumParser.KW_WITH, 0);
	};

	KW_HIDDEN() {
	    return this.getToken(LangiumParser.KW_HIDDEN, 0);
	};

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.COMMA);
	    } else {
	        return this.getToken(LangiumParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterStart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitStart_(this);
		}
	}


}



class InterfaceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_interface;
    }

	KW_INTERFACE() {
	    return this.getToken(LangiumParser.KW_INTERFACE, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.ID);
	    } else {
	        return this.getToken(LangiumParser.ID, i);
	    }
	};


	LEFT_CURLY_BRACKET() {
	    return this.getToken(LangiumParser.LEFT_CURLY_BRACKET, 0);
	};

	RIGHT_CURLY_BRACKET() {
	    return this.getToken(LangiumParser.RIGHT_CURLY_BRACKET, 0);
	};

	KW_EXTENDS() {
	    return this.getToken(LangiumParser.KW_EXTENDS, 0);
	};

	typeAttribute = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeAttributeContext);
	    } else {
	        return this.getTypedRuleContext(TypeAttributeContext,i);
	    }
	};

	SEMICOLON() {
	    return this.getToken(LangiumParser.SEMICOLON, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.COMMA);
	    } else {
	        return this.getToken(LangiumParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterInterface(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitInterface(this);
		}
	}


}



class TypeAttributeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_typeAttribute;
    }

	featureName() {
	    return this.getTypedRuleContext(FeatureNameContext,0);
	};

	COLON() {
	    return this.getToken(LangiumParser.COLON, 0);
	};

	typeDefinition() {
	    return this.getTypedRuleContext(TypeDefinitionContext,0);
	};

	QUESTION_MARK() {
	    return this.getToken(LangiumParser.QUESTION_MARK, 0);
	};

	EQUALS_SIGN() {
	    return this.getToken(LangiumParser.EQUALS_SIGN, 0);
	};

	valueLiteral() {
	    return this.getTypedRuleContext(ValueLiteralContext,0);
	};

	SEMICOLON() {
	    return this.getToken(LangiumParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTypeAttribute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTypeAttribute(this);
		}
	}


}



class ValueLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_valueLiteral;
    }

	stringLiteral() {
	    return this.getTypedRuleContext(StringLiteralContext,0);
	};

	numberLiteral() {
	    return this.getTypedRuleContext(NumberLiteralContext,0);
	};

	booleanLiteral() {
	    return this.getTypedRuleContext(BooleanLiteralContext,0);
	};

	arrayLiteral() {
	    return this.getTypedRuleContext(ArrayLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterValueLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitValueLiteral(this);
		}
	}


}



class StringLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_stringLiteral;
    }

	STRING() {
	    return this.getToken(LangiumParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterStringLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitStringLiteral(this);
		}
	}


}



class NumberLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_numberLiteral;
    }

	NUMBER() {
	    return this.getToken(LangiumParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterNumberLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitNumberLiteral(this);
		}
	}


}



class BooleanLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_booleanLiteral;
    }

	KW_TRUE() {
	    return this.getToken(LangiumParser.KW_TRUE, 0);
	};

	KW_FALSE() {
	    return this.getToken(LangiumParser.KW_FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterBooleanLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitBooleanLiteral(this);
		}
	}


}



class ArrayLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_arrayLiteral;
    }

	LEFT_SQUARE_BRACKET() {
	    return this.getToken(LangiumParser.LEFT_SQUARE_BRACKET, 0);
	};

	RIGHT_SQUARE_BRACKET() {
	    return this.getToken(LangiumParser.RIGHT_SQUARE_BRACKET, 0);
	};

	valueLiteral = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValueLiteralContext);
	    } else {
	        return this.getTypedRuleContext(ValueLiteralContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.COMMA);
	    } else {
	        return this.getToken(LangiumParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitArrayLiteral(this);
		}
	}


}



class TypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_typeDefinition;
    }

	unionType() {
	    return this.getTypedRuleContext(UnionTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTypeDefinition(this);
		}
	}


}



class UnionTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_unionType;
    }

	arrayType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrayTypeContext);
	    } else {
	        return this.getTypedRuleContext(ArrayTypeContext,i);
	    }
	};

	VERTICAL_LINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.VERTICAL_LINE);
	    } else {
	        return this.getToken(LangiumParser.VERTICAL_LINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterUnionType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitUnionType(this);
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
        this.ruleIndex = LangiumParser.RULE_arrayType;
    }

	referenceType() {
	    return this.getTypedRuleContext(ReferenceTypeContext,0);
	};

	LEFT_SQUARE_BRACKET() {
	    return this.getToken(LangiumParser.LEFT_SQUARE_BRACKET, 0);
	};

	RIGHT_SQUARE_BRACKET() {
	    return this.getToken(LangiumParser.RIGHT_SQUARE_BRACKET, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterArrayType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitArrayType(this);
		}
	}


}



class ReferenceTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_referenceType;
    }

	simpleType() {
	    return this.getTypedRuleContext(SimpleTypeContext,0);
	};

	COMMERCIAL_AT() {
	    return this.getToken(LangiumParser.COMMERCIAL_AT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterReferenceType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitReferenceType(this);
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
        this.ruleIndex = LangiumParser.RULE_simpleType;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	typeDefinition() {
	    return this.getTypedRuleContext(TypeDefinitionContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	primitiveType() {
	    return this.getTypedRuleContext(PrimitiveTypeContext,0);
	};

	STRING() {
	    return this.getToken(LangiumParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterSimpleType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitSimpleType(this);
		}
	}


}



class PrimitiveTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_primitiveType;
    }

	KW_STRING() {
	    return this.getToken(LangiumParser.KW_STRING, 0);
	};

	KW_NUMBER() {
	    return this.getToken(LangiumParser.KW_NUMBER, 0);
	};

	KW_BOOLEAN() {
	    return this.getToken(LangiumParser.KW_BOOLEAN, 0);
	};

	KW_DATE() {
	    return this.getToken(LangiumParser.KW_DATE, 0);
	};

	KW_BIGINT() {
	    return this.getToken(LangiumParser.KW_BIGINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterPrimitiveType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitPrimitiveType(this);
		}
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_type;
    }

	KW_TYPE() {
	    return this.getToken(LangiumParser.KW_TYPE, 0);
	};

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	EQUALS_SIGN() {
	    return this.getToken(LangiumParser.EQUALS_SIGN, 0);
	};

	typeDefinition() {
	    return this.getTypedRuleContext(TypeDefinitionContext,0);
	};

	SEMICOLON() {
	    return this.getToken(LangiumParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitType(this);
		}
	}


}



class AbstractRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_abstractRule;
    }

	parserRule_() {
	    return this.getTypedRuleContext(ParserRule_Context,0);
	};

	terminalRule() {
	    return this.getTypedRuleContext(TerminalRuleContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAbstractRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAbstractRule(this);
		}
	}


}



class GrammarImportContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_grammarImport;
    }

	KW_IMPORT() {
	    return this.getToken(LangiumParser.KW_IMPORT, 0);
	};

	STRING() {
	    return this.getToken(LangiumParser.STRING, 0);
	};

	SEMICOLON() {
	    return this.getToken(LangiumParser.SEMICOLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterGrammarImport(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitGrammarImport(this);
		}
	}


}



class ParserRule_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_parserRule_;
    }

	ruleNameAndParams() {
	    return this.getTypedRuleContext(RuleNameAndParamsContext,0);
	};

	COLON() {
	    return this.getToken(LangiumParser.COLON, 0);
	};

	alternatives() {
	    return this.getTypedRuleContext(AlternativesContext,0);
	};

	SEMICOLON() {
	    return this.getToken(LangiumParser.SEMICOLON, 0);
	};

	ASTERISK() {
	    return this.getToken(LangiumParser.ASTERISK, 0);
	};

	inferredType() {
	    return this.getTypedRuleContext(InferredTypeContext,0);
	};

	KW_HIDDEN() {
	    return this.getToken(LangiumParser.KW_HIDDEN, 0);
	};

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	KW_ENTRY() {
	    return this.getToken(LangiumParser.KW_ENTRY, 0);
	};

	KW_FRAGMENT() {
	    return this.getToken(LangiumParser.KW_FRAGMENT, 0);
	};

	KW_RETURNS() {
	    return this.getToken(LangiumParser.KW_RETURNS, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.ID);
	    } else {
	        return this.getToken(LangiumParser.ID, i);
	    }
	};


	primitiveType() {
	    return this.getTypedRuleContext(PrimitiveTypeContext,0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.COMMA);
	    } else {
	        return this.getToken(LangiumParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterParserRule_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitParserRule_(this);
		}
	}


}



class InferredTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_inferredType;
    }

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	KW_INFER() {
	    return this.getToken(LangiumParser.KW_INFER, 0);
	};

	KW_INFERS() {
	    return this.getToken(LangiumParser.KW_INFERS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterInferredType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitInferredType(this);
		}
	}


}



class RuleNameAndParamsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_ruleNameAndParams;
    }

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	LESS_THAN_SIGN() {
	    return this.getToken(LangiumParser.LESS_THAN_SIGN, 0);
	};

	GREATER_THAN_SIGN() {
	    return this.getToken(LangiumParser.GREATER_THAN_SIGN, 0);
	};

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.COMMA);
	    } else {
	        return this.getToken(LangiumParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterRuleNameAndParams(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitRuleNameAndParams(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_parameter;
    }

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitParameter(this);
		}
	}


}



class AlternativesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_alternatives;
    }

	conditionalBranch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalBranchContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalBranchContext,i);
	    }
	};

	VERTICAL_LINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.VERTICAL_LINE);
	    } else {
	        return this.getToken(LangiumParser.VERTICAL_LINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAlternatives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAlternatives(this);
		}
	}


}



class ConditionalBranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_conditionalBranch;
    }

	unorderedGroup() {
	    return this.getTypedRuleContext(UnorderedGroupContext,0);
	};

	LESS_THAN_SIGN() {
	    return this.getToken(LangiumParser.LESS_THAN_SIGN, 0);
	};

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	GREATER_THAN_SIGN() {
	    return this.getToken(LangiumParser.GREATER_THAN_SIGN, 0);
	};

	abstractToken = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AbstractTokenContext);
	    } else {
	        return this.getTypedRuleContext(AbstractTokenContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterConditionalBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitConditionalBranch(this);
		}
	}


}



class UnorderedGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_unorderedGroup;
    }

	group = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(GroupContext);
	    } else {
	        return this.getTypedRuleContext(GroupContext,i);
	    }
	};

	AMPERSAND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.AMPERSAND);
	    } else {
	        return this.getToken(LangiumParser.AMPERSAND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterUnorderedGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitUnorderedGroup(this);
		}
	}


}



class GroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_group;
    }

	abstractToken = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AbstractTokenContext);
	    } else {
	        return this.getTypedRuleContext(AbstractTokenContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitGroup(this);
		}
	}


}



class AbstractTokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_abstractToken;
    }

	abstractTokenWithCardinality() {
	    return this.getTypedRuleContext(AbstractTokenWithCardinalityContext,0);
	};

	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAbstractToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAbstractToken(this);
		}
	}


}



class AbstractTokenWithCardinalityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_abstractTokenWithCardinality;
    }

	assignment() {
	    return this.getTypedRuleContext(AssignmentContext,0);
	};

	abstractTerminal() {
	    return this.getTypedRuleContext(AbstractTerminalContext,0);
	};

	QUESTION_MARK() {
	    return this.getToken(LangiumParser.QUESTION_MARK, 0);
	};

	ASTERISK() {
	    return this.getToken(LangiumParser.ASTERISK, 0);
	};

	PLUS_SIGN() {
	    return this.getToken(LangiumParser.PLUS_SIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAbstractTokenWithCardinality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAbstractTokenWithCardinality(this);
		}
	}


}



class ActionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_action;
    }

	LEFT_CURLY_BRACKET() {
	    return this.getToken(LangiumParser.LEFT_CURLY_BRACKET, 0);
	};

	RIGHT_CURLY_BRACKET() {
	    return this.getToken(LangiumParser.RIGHT_CURLY_BRACKET, 0);
	};

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	inferredType() {
	    return this.getTypedRuleContext(InferredTypeContext,0);
	};

	FULL_STOP() {
	    return this.getToken(LangiumParser.FULL_STOP, 0);
	};

	featureName() {
	    return this.getTypedRuleContext(FeatureNameContext,0);
	};

	KW_CURRENT() {
	    return this.getToken(LangiumParser.KW_CURRENT, 0);
	};

	EQUALS_SIGN() {
	    return this.getToken(LangiumParser.EQUALS_SIGN, 0);
	};

	PLUS_EQUAL() {
	    return this.getToken(LangiumParser.PLUS_EQUAL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAction(this);
		}
	}


}



class AbstractTerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_abstractTerminal;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	ruleCall() {
	    return this.getTypedRuleContext(RuleCallContext,0);
	};

	parenthesizedElement() {
	    return this.getTypedRuleContext(ParenthesizedElementContext,0);
	};

	predicatedKeyword() {
	    return this.getTypedRuleContext(PredicatedKeywordContext,0);
	};

	predicatedRuleCall() {
	    return this.getTypedRuleContext(PredicatedRuleCallContext,0);
	};

	predicatedGroup() {
	    return this.getTypedRuleContext(PredicatedGroupContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAbstractTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAbstractTerminal(this);
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
        this.ruleIndex = LangiumParser.RULE_keyword;
    }

	STRING() {
	    return this.getToken(LangiumParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitKeyword(this);
		}
	}


}



class RuleCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_ruleCall;
    }

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	LESS_THAN_SIGN() {
	    return this.getToken(LangiumParser.LESS_THAN_SIGN, 0);
	};

	namedArgument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NamedArgumentContext);
	    } else {
	        return this.getTypedRuleContext(NamedArgumentContext,i);
	    }
	};

	GREATER_THAN_SIGN() {
	    return this.getToken(LangiumParser.GREATER_THAN_SIGN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.COMMA);
	    } else {
	        return this.getToken(LangiumParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterRuleCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitRuleCall(this);
		}
	}


}



class NamedArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_namedArgument;
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	EQUALS_SIGN() {
	    return this.getToken(LangiumParser.EQUALS_SIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterNamedArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitNamedArgument(this);
		}
	}


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_disjunction;
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	VERTICAL_LINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.VERTICAL_LINE);
	    } else {
	        return this.getToken(LangiumParser.VERTICAL_LINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitDisjunction(this);
		}
	}


}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_conjunction;
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AMPERSAND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.AMPERSAND);
	    } else {
	        return this.getToken(LangiumParser.AMPERSAND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitConjunction(this);
		}
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_negation;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	EXCLAMATION_MARK() {
	    return this.getToken(LangiumParser.EXCLAMATION_MARK, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitNegation(this);
		}
	}


}



class AtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_atom;
    }

	parameterReference() {
	    return this.getTypedRuleContext(ParameterReferenceContext,0);
	};

	parenthesizedCondition() {
	    return this.getTypedRuleContext(ParenthesizedConditionContext,0);
	};

	booleanLiteral() {
	    return this.getTypedRuleContext(BooleanLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAtom(this);
		}
	}


}



class ParenthesizedConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_parenthesizedCondition;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterParenthesizedCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitParenthesizedCondition(this);
		}
	}


}



class ParameterReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_parameterReference;
    }

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterParameterReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitParameterReference(this);
		}
	}


}



class PredicatedKeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_predicatedKeyword;
    }

	STRING() {
	    return this.getToken(LangiumParser.STRING, 0);
	};

	EQ_GT() {
	    return this.getToken(LangiumParser.EQ_GT, 0);
	};

	MINUS_GT() {
	    return this.getToken(LangiumParser.MINUS_GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterPredicatedKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitPredicatedKeyword(this);
		}
	}


}



class PredicatedRuleCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_predicatedRuleCall;
    }

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	EQ_GT() {
	    return this.getToken(LangiumParser.EQ_GT, 0);
	};

	MINUS_GT() {
	    return this.getToken(LangiumParser.MINUS_GT, 0);
	};

	LESS_THAN_SIGN() {
	    return this.getToken(LangiumParser.LESS_THAN_SIGN, 0);
	};

	namedArgument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NamedArgumentContext);
	    } else {
	        return this.getTypedRuleContext(NamedArgumentContext,i);
	    }
	};

	GREATER_THAN_SIGN() {
	    return this.getToken(LangiumParser.GREATER_THAN_SIGN, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.COMMA);
	    } else {
	        return this.getToken(LangiumParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterPredicatedRuleCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitPredicatedRuleCall(this);
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
        this.ruleIndex = LangiumParser.RULE_assignment;
    }

	featureName() {
	    return this.getTypedRuleContext(FeatureNameContext,0);
	};

	assignableTerminal() {
	    return this.getTypedRuleContext(AssignableTerminalContext,0);
	};

	PLUS_EQUAL() {
	    return this.getToken(LangiumParser.PLUS_EQUAL, 0);
	};

	EQUALS_SIGN() {
	    return this.getToken(LangiumParser.EQUALS_SIGN, 0);
	};

	QM_EQ() {
	    return this.getToken(LangiumParser.QM_EQ, 0);
	};

	EQ_GT() {
	    return this.getToken(LangiumParser.EQ_GT, 0);
	};

	MINUS_GT() {
	    return this.getToken(LangiumParser.MINUS_GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAssignment(this);
		}
	}


}



class AssignableTerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_assignableTerminal;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	ruleCall() {
	    return this.getTypedRuleContext(RuleCallContext,0);
	};

	parenthesizedAssignableElement() {
	    return this.getTypedRuleContext(ParenthesizedAssignableElementContext,0);
	};

	crossReference() {
	    return this.getTypedRuleContext(CrossReferenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAssignableTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAssignableTerminal(this);
		}
	}


}



class ParenthesizedAssignableElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_parenthesizedAssignableElement;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	assignableAlternatives() {
	    return this.getTypedRuleContext(AssignableAlternativesContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterParenthesizedAssignableElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitParenthesizedAssignableElement(this);
		}
	}


}



class AssignableAlternativesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_assignableAlternatives;
    }

	assignableTerminal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AssignableTerminalContext);
	    } else {
	        return this.getTypedRuleContext(AssignableTerminalContext,i);
	    }
	};

	VERTICAL_LINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.VERTICAL_LINE);
	    } else {
	        return this.getToken(LangiumParser.VERTICAL_LINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterAssignableAlternatives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitAssignableAlternatives(this);
		}
	}


}



class CrossReferenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_crossReference;
    }

	LEFT_SQUARE_BRACKET() {
	    return this.getToken(LangiumParser.LEFT_SQUARE_BRACKET, 0);
	};

	crossReferenceableTerminal = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CrossReferenceableTerminalContext);
	    } else {
	        return this.getTypedRuleContext(CrossReferenceableTerminalContext,i);
	    }
	};

	RIGHT_SQUARE_BRACKET() {
	    return this.getToken(LangiumParser.RIGHT_SQUARE_BRACKET, 0);
	};

	VERTICAL_LINE() {
	    return this.getToken(LangiumParser.VERTICAL_LINE, 0);
	};

	COLON() {
	    return this.getToken(LangiumParser.COLON, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterCrossReference(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitCrossReference(this);
		}
	}


}



class CrossReferenceableTerminalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_crossReferenceableTerminal;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	ruleCall() {
	    return this.getTypedRuleContext(RuleCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterCrossReferenceableTerminal(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitCrossReferenceableTerminal(this);
		}
	}


}



class ParenthesizedElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_parenthesizedElement;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	alternatives() {
	    return this.getTypedRuleContext(AlternativesContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterParenthesizedElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitParenthesizedElement(this);
		}
	}


}



class PredicatedGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_predicatedGroup;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	alternatives() {
	    return this.getTypedRuleContext(AlternativesContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	EQ_GT() {
	    return this.getToken(LangiumParser.EQ_GT, 0);
	};

	MINUS_GT() {
	    return this.getToken(LangiumParser.MINUS_GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterPredicatedGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitPredicatedGroup(this);
		}
	}


}



class ReturnTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_returnType;
    }

	primitiveType() {
	    return this.getTypedRuleContext(PrimitiveTypeContext,0);
	};

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterReturnType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitReturnType(this);
		}
	}


}



class TerminalRuleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_terminalRule;
    }

	KW_TERMINAL() {
	    return this.getToken(LangiumParser.KW_TERMINAL, 0);
	};

	COLON() {
	    return this.getToken(LangiumParser.COLON, 0);
	};

	terminalAlternatives() {
	    return this.getTypedRuleContext(TerminalAlternativesContext,0);
	};

	SEMICOLON() {
	    return this.getToken(LangiumParser.SEMICOLON, 0);
	};

	KW_FRAGMENT() {
	    return this.getToken(LangiumParser.KW_FRAGMENT, 0);
	};

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	KW_HIDDEN() {
	    return this.getToken(LangiumParser.KW_HIDDEN, 0);
	};

	KW_RETURNS() {
	    return this.getToken(LangiumParser.KW_RETURNS, 0);
	};

	returnType() {
	    return this.getTypedRuleContext(ReturnTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTerminalRule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTerminalRule(this);
		}
	}


}



class TerminalAlternativesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_terminalAlternatives;
    }

	terminalGroup = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminalGroupContext);
	    } else {
	        return this.getTypedRuleContext(TerminalGroupContext,i);
	    }
	};

	VERTICAL_LINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LangiumParser.VERTICAL_LINE);
	    } else {
	        return this.getToken(LangiumParser.VERTICAL_LINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTerminalAlternatives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTerminalAlternatives(this);
		}
	}


}



class TerminalGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_terminalGroup;
    }

	terminalToken = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TerminalTokenContext);
	    } else {
	        return this.getTypedRuleContext(TerminalTokenContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTerminalGroup(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTerminalGroup(this);
		}
	}


}



class TerminalTokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_terminalToken;
    }

	terminalTokenElement() {
	    return this.getTypedRuleContext(TerminalTokenElementContext,0);
	};

	QUESTION_MARK() {
	    return this.getToken(LangiumParser.QUESTION_MARK, 0);
	};

	ASTERISK() {
	    return this.getToken(LangiumParser.ASTERISK, 0);
	};

	PLUS_SIGN() {
	    return this.getToken(LangiumParser.PLUS_SIGN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTerminalToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTerminalToken(this);
		}
	}


}



class TerminalTokenElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_terminalTokenElement;
    }

	characterRange() {
	    return this.getTypedRuleContext(CharacterRangeContext,0);
	};

	terminalRuleCall() {
	    return this.getTypedRuleContext(TerminalRuleCallContext,0);
	};

	parenthesizedTerminalElement() {
	    return this.getTypedRuleContext(ParenthesizedTerminalElementContext,0);
	};

	negatedToken() {
	    return this.getTypedRuleContext(NegatedTokenContext,0);
	};

	untilToken() {
	    return this.getTypedRuleContext(UntilTokenContext,0);
	};

	regexToken() {
	    return this.getTypedRuleContext(RegexTokenContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTerminalTokenElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTerminalTokenElement(this);
		}
	}


}



class ParenthesizedTerminalElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_parenthesizedTerminalElement;
    }

	LEFT_PARENTHESIS() {
	    return this.getToken(LangiumParser.LEFT_PARENTHESIS, 0);
	};

	terminalAlternatives() {
	    return this.getTypedRuleContext(TerminalAlternativesContext,0);
	};

	RIGHT_PARENTHESIS() {
	    return this.getToken(LangiumParser.RIGHT_PARENTHESIS, 0);
	};

	QM_EQ() {
	    return this.getToken(LangiumParser.QM_EQ, 0);
	};

	QM_BANG() {
	    return this.getToken(LangiumParser.QM_BANG, 0);
	};

	QM_LE() {
	    return this.getToken(LangiumParser.QM_LE, 0);
	};

	QM_LT_BANG() {
	    return this.getToken(LangiumParser.QM_LT_BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterParenthesizedTerminalElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitParenthesizedTerminalElement(this);
		}
	}


}



class TerminalRuleCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_terminalRuleCall;
    }

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterTerminalRuleCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitTerminalRuleCall(this);
		}
	}


}



class NegatedTokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_negatedToken;
    }

	EXCLAMATION_MARK() {
	    return this.getToken(LangiumParser.EXCLAMATION_MARK, 0);
	};

	terminalTokenElement() {
	    return this.getTypedRuleContext(TerminalTokenElementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterNegatedToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitNegatedToken(this);
		}
	}


}



class UntilTokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_untilToken;
    }

	MINUS_GT() {
	    return this.getToken(LangiumParser.MINUS_GT, 0);
	};

	terminalTokenElement() {
	    return this.getTypedRuleContext(TerminalTokenElementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterUntilToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitUntilToken(this);
		}
	}


}



class RegexTokenContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_regexToken;
    }

	RegexLiteral() {
	    return this.getToken(LangiumParser.RegexLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterRegexToken(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitRegexToken(this);
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
        this.ruleIndex = LangiumParser.RULE_wildcard;
    }

	FULL_STOP() {
	    return this.getToken(LangiumParser.FULL_STOP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitWildcard(this);
		}
	}


}



class CharacterRangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_characterRange;
    }

	keyword = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(KeywordContext);
	    } else {
	        return this.getTypedRuleContext(KeywordContext,i);
	    }
	};

	DOT_DOT() {
	    return this.getToken(LangiumParser.DOT_DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterCharacterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitCharacterRange(this);
		}
	}


}



class FeatureNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LangiumParser.RULE_featureName;
    }

	KW_CURRENT() {
	    return this.getToken(LangiumParser.KW_CURRENT, 0);
	};

	KW_ENTRY() {
	    return this.getToken(LangiumParser.KW_ENTRY, 0);
	};

	KW_EXTENDS() {
	    return this.getToken(LangiumParser.KW_EXTENDS, 0);
	};

	KW_FALSE() {
	    return this.getToken(LangiumParser.KW_FALSE, 0);
	};

	KW_FRAGMENT() {
	    return this.getToken(LangiumParser.KW_FRAGMENT, 0);
	};

	KW_GRAMMAR() {
	    return this.getToken(LangiumParser.KW_GRAMMAR, 0);
	};

	KW_HIDDEN() {
	    return this.getToken(LangiumParser.KW_HIDDEN, 0);
	};

	KW_IMPORT() {
	    return this.getToken(LangiumParser.KW_IMPORT, 0);
	};

	KW_INTERFACE() {
	    return this.getToken(LangiumParser.KW_INTERFACE, 0);
	};

	KW_RETURNS() {
	    return this.getToken(LangiumParser.KW_RETURNS, 0);
	};

	KW_TERMINAL() {
	    return this.getToken(LangiumParser.KW_TERMINAL, 0);
	};

	KW_TRUE() {
	    return this.getToken(LangiumParser.KW_TRUE, 0);
	};

	KW_TYPE() {
	    return this.getToken(LangiumParser.KW_TYPE, 0);
	};

	KW_INFER() {
	    return this.getToken(LangiumParser.KW_INFER, 0);
	};

	KW_INFERS() {
	    return this.getToken(LangiumParser.KW_INFERS, 0);
	};

	KW_WITH() {
	    return this.getToken(LangiumParser.KW_WITH, 0);
	};

	primitiveType() {
	    return this.getTypedRuleContext(PrimitiveTypeContext,0);
	};

	ID() {
	    return this.getToken(LangiumParser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.enterFeatureName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LangiumParserListener ) {
	        listener.exitFeatureName(this);
		}
	}


}




LangiumParser.File_Context = File_Context; 
LangiumParser.Start_Context = Start_Context; 
LangiumParser.InterfaceContext = InterfaceContext; 
LangiumParser.TypeAttributeContext = TypeAttributeContext; 
LangiumParser.ValueLiteralContext = ValueLiteralContext; 
LangiumParser.StringLiteralContext = StringLiteralContext; 
LangiumParser.NumberLiteralContext = NumberLiteralContext; 
LangiumParser.BooleanLiteralContext = BooleanLiteralContext; 
LangiumParser.ArrayLiteralContext = ArrayLiteralContext; 
LangiumParser.TypeDefinitionContext = TypeDefinitionContext; 
LangiumParser.UnionTypeContext = UnionTypeContext; 
LangiumParser.ArrayTypeContext = ArrayTypeContext; 
LangiumParser.ReferenceTypeContext = ReferenceTypeContext; 
LangiumParser.SimpleTypeContext = SimpleTypeContext; 
LangiumParser.PrimitiveTypeContext = PrimitiveTypeContext; 
LangiumParser.TypeContext = TypeContext; 
LangiumParser.AbstractRuleContext = AbstractRuleContext; 
LangiumParser.GrammarImportContext = GrammarImportContext; 
LangiumParser.ParserRule_Context = ParserRule_Context; 
LangiumParser.InferredTypeContext = InferredTypeContext; 
LangiumParser.RuleNameAndParamsContext = RuleNameAndParamsContext; 
LangiumParser.ParameterContext = ParameterContext; 
LangiumParser.AlternativesContext = AlternativesContext; 
LangiumParser.ConditionalBranchContext = ConditionalBranchContext; 
LangiumParser.UnorderedGroupContext = UnorderedGroupContext; 
LangiumParser.GroupContext = GroupContext; 
LangiumParser.AbstractTokenContext = AbstractTokenContext; 
LangiumParser.AbstractTokenWithCardinalityContext = AbstractTokenWithCardinalityContext; 
LangiumParser.ActionContext = ActionContext; 
LangiumParser.AbstractTerminalContext = AbstractTerminalContext; 
LangiumParser.KeywordContext = KeywordContext; 
LangiumParser.RuleCallContext = RuleCallContext; 
LangiumParser.NamedArgumentContext = NamedArgumentContext; 
LangiumParser.DisjunctionContext = DisjunctionContext; 
LangiumParser.ConjunctionContext = ConjunctionContext; 
LangiumParser.NegationContext = NegationContext; 
LangiumParser.AtomContext = AtomContext; 
LangiumParser.ParenthesizedConditionContext = ParenthesizedConditionContext; 
LangiumParser.ParameterReferenceContext = ParameterReferenceContext; 
LangiumParser.PredicatedKeywordContext = PredicatedKeywordContext; 
LangiumParser.PredicatedRuleCallContext = PredicatedRuleCallContext; 
LangiumParser.AssignmentContext = AssignmentContext; 
LangiumParser.AssignableTerminalContext = AssignableTerminalContext; 
LangiumParser.ParenthesizedAssignableElementContext = ParenthesizedAssignableElementContext; 
LangiumParser.AssignableAlternativesContext = AssignableAlternativesContext; 
LangiumParser.CrossReferenceContext = CrossReferenceContext; 
LangiumParser.CrossReferenceableTerminalContext = CrossReferenceableTerminalContext; 
LangiumParser.ParenthesizedElementContext = ParenthesizedElementContext; 
LangiumParser.PredicatedGroupContext = PredicatedGroupContext; 
LangiumParser.ReturnTypeContext = ReturnTypeContext; 
LangiumParser.TerminalRuleContext = TerminalRuleContext; 
LangiumParser.TerminalAlternativesContext = TerminalAlternativesContext; 
LangiumParser.TerminalGroupContext = TerminalGroupContext; 
LangiumParser.TerminalTokenContext = TerminalTokenContext; 
LangiumParser.TerminalTokenElementContext = TerminalTokenElementContext; 
LangiumParser.ParenthesizedTerminalElementContext = ParenthesizedTerminalElementContext; 
LangiumParser.TerminalRuleCallContext = TerminalRuleCallContext; 
LangiumParser.NegatedTokenContext = NegatedTokenContext; 
LangiumParser.UntilTokenContext = UntilTokenContext; 
LangiumParser.RegexTokenContext = RegexTokenContext; 
LangiumParser.WildcardContext = WildcardContext; 
LangiumParser.CharacterRangeContext = CharacterRangeContext; 
LangiumParser.FeatureNameContext = FeatureNameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
