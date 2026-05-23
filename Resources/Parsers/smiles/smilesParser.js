// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/smiles/smiles.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import smilesListener from './smilesListener.js';
const serializedATN = [4,1,145,468,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,1,0,3,0,
41,8,0,1,0,1,0,1,1,1,1,1,1,1,1,3,1,49,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,3,2,63,8,2,1,3,1,3,1,4,1,4,3,4,69,8,4,1,4,1,4,3,4,73,8,
4,1,4,3,4,76,8,4,1,4,3,4,79,8,4,1,4,3,4,82,8,4,1,4,1,4,1,5,4,5,87,8,5,11,
5,12,5,88,1,6,1,6,1,6,3,6,94,8,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,3,7,310,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,
3,8,321,8,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,3,9,396,8,9,1,10,1,10,3,10,400,8,10,1,11,1,11,3,11,404,8,
11,1,11,3,11,407,8,11,1,11,1,11,3,11,411,8,11,1,12,1,12,4,12,415,8,12,11,
12,12,12,416,1,13,1,13,1,14,3,14,422,8,14,1,14,1,14,1,14,1,14,3,14,428,8,
14,1,15,1,15,5,15,432,8,15,10,15,12,15,435,9,15,1,15,5,15,438,8,15,10,15,
12,15,441,9,15,1,16,1,16,1,16,3,16,446,8,16,1,16,1,16,1,16,1,17,1,17,1,17,
3,17,454,8,17,1,17,5,17,457,8,17,10,17,12,17,460,9,17,1,18,1,18,1,18,1,18,
3,18,466,8,18,1,18,0,0,19,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,
34,36,0,4,3,0,89,90,101,103,106,106,1,0,73,74,1,0,75,76,2,0,76,76,79,84,
675,0,38,1,0,0,0,2,48,1,0,0,0,4,62,1,0,0,0,6,64,1,0,0,0,8,66,1,0,0,0,10,
86,1,0,0,0,12,93,1,0,0,0,14,309,1,0,0,0,16,320,1,0,0,0,18,395,1,0,0,0,20,
397,1,0,0,0,22,410,1,0,0,0,24,412,1,0,0,0,26,418,1,0,0,0,28,421,1,0,0,0,
30,429,1,0,0,0,32,442,1,0,0,0,34,450,1,0,0,0,36,465,1,0,0,0,38,40,3,34,17,
0,39,41,3,36,18,0,40,39,1,0,0,0,40,41,1,0,0,0,41,42,1,0,0,0,42,43,5,0,0,
1,43,1,1,0,0,0,44,49,3,8,4,0,45,49,3,4,2,0,46,49,3,6,3,0,47,49,5,1,0,0,48,
44,1,0,0,0,48,45,1,0,0,0,48,46,1,0,0,0,48,47,1,0,0,0,49,3,1,0,0,0,50,63,
5,115,0,0,51,63,5,116,0,0,52,63,5,127,0,0,53,63,5,128,0,0,54,63,5,132,0,
0,55,63,5,129,0,0,56,63,5,119,0,0,57,58,5,116,0,0,58,63,5,99,0,0,59,60,5,
115,0,0,60,63,5,105,0,0,61,63,5,122,0,0,62,50,1,0,0,0,62,51,1,0,0,0,62,52,
1,0,0,0,62,53,1,0,0,0,62,54,1,0,0,0,62,55,1,0,0,0,62,56,1,0,0,0,62,57,1,
0,0,0,62,59,1,0,0,0,62,61,1,0,0,0,63,5,1,0,0,0,64,65,7,0,0,0,65,7,1,0,0,
0,66,68,5,2,0,0,67,69,3,10,5,0,68,67,1,0,0,0,68,69,1,0,0,0,69,70,1,0,0,0,
70,72,3,12,6,0,71,73,3,18,9,0,72,71,1,0,0,0,72,73,1,0,0,0,73,75,1,0,0,0,
74,76,3,20,10,0,75,74,1,0,0,0,75,76,1,0,0,0,76,78,1,0,0,0,77,79,3,22,11,
0,78,77,1,0,0,0,78,79,1,0,0,0,79,81,1,0,0,0,80,82,3,24,12,0,81,80,1,0,0,
0,81,82,1,0,0,0,82,83,1,0,0,0,83,84,5,3,0,0,84,9,1,0,0,0,85,87,5,144,0,0,
86,85,1,0,0,0,87,88,1,0,0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,11,1,0,0,0,90,
94,3,14,7,0,91,94,3,16,8,0,92,94,5,1,0,0,93,90,1,0,0,0,93,91,1,0,0,0,93,
92,1,0,0,0,94,13,1,0,0,0,95,310,5,121,0,0,96,97,5,121,0,0,97,310,5,92,0,
0,98,99,5,125,0,0,99,310,5,96,0,0,100,101,5,115,0,0,101,310,5,92,0,0,102,
310,5,115,0,0,103,310,5,116,0,0,104,310,5,127,0,0,105,310,5,128,0,0,106,
310,5,119,0,0,107,108,5,127,0,0,108,310,5,92,0,0,109,110,5,127,0,0,110,310,
5,88,0,0,111,112,5,126,0,0,112,310,5,94,0,0,113,114,5,114,0,0,114,310,5,
99,0,0,115,116,5,132,0,0,116,310,5,96,0,0,117,310,5,129,0,0,118,310,5,132,
0,0,119,120,5,116,0,0,120,310,5,99,0,0,121,122,5,114,0,0,122,310,5,105,0,
0,123,310,5,124,0,0,124,125,5,116,0,0,125,310,5,88,0,0,126,127,5,132,0,0,
127,310,5,90,0,0,128,129,5,133,0,0,129,310,5,96,0,0,130,310,5,135,0,0,131,
132,5,116,0,0,132,310,5,105,0,0,133,134,5,126,0,0,134,310,5,101,0,0,135,
136,5,119,0,0,136,310,5,92,0,0,137,138,5,116,0,0,138,310,5,102,0,0,139,140,
5,127,0,0,140,310,5,96,0,0,141,142,5,116,0,0,142,310,5,108,0,0,143,144,5,
139,0,0,144,310,5,101,0,0,145,146,5,120,0,0,146,310,5,88,0,0,147,148,5,120,
0,0,148,310,5,92,0,0,149,150,5,114,0,0,150,310,5,106,0,0,151,152,5,132,0,
0,152,310,5,92,0,0,153,154,5,115,0,0,154,310,5,105,0,0,155,156,5,124,0,0,
156,310,5,105,0,0,157,158,5,131,0,0,158,310,5,89,0,0,159,160,5,132,0,0,160,
310,5,105,0,0,161,310,5,138,0,0,162,163,5,139,0,0,163,310,5,105,0,0,164,
165,5,127,0,0,165,310,5,89,0,0,166,167,5,126,0,0,167,310,5,102,0,0,168,169,
5,133,0,0,169,310,5,90,0,0,170,171,5,131,0,0,171,310,5,108,0,0,172,173,5,
131,0,0,173,310,5,95,0,0,174,175,5,129,0,0,175,310,5,91,0,0,176,177,5,114,
0,0,177,310,5,94,0,0,178,179,5,116,0,0,179,310,5,91,0,0,180,181,5,122,0,
0,181,310,5,101,0,0,182,183,5,132,0,0,183,310,5,101,0,0,184,185,5,132,0,
0,185,310,5,89,0,0,186,187,5,133,0,0,187,310,5,92,0,0,188,310,5,122,0,0,
189,190,5,137,0,0,190,310,5,92,0,0,191,192,5,116,0,0,192,310,5,106,0,0,193,
194,5,115,0,0,194,310,5,88,0,0,195,196,5,121,0,0,196,310,5,93,0,0,197,198,
5,133,0,0,198,310,5,88,0,0,199,310,5,136,0,0,200,201,5,131,0,0,201,310,5,
92,0,0,202,203,5,128,0,0,203,310,5,106,0,0,204,205,5,122,0,0,205,310,5,105,
0,0,206,207,5,129,0,0,207,310,5,107,0,0,208,209,5,114,0,0,209,310,5,108,
0,0,210,211,5,121,0,0,211,310,5,94,0,0,212,213,5,133,0,0,213,310,5,99,0,
0,214,215,5,129,0,0,215,310,5,89,0,0,216,217,5,115,0,0,217,310,5,96,0,0,
218,219,5,129,0,0,219,310,5,102,0,0,220,221,5,114,0,0,221,310,5,107,0,0,
222,223,5,131,0,0,223,310,5,101,0,0,224,225,5,119,0,0,225,310,5,105,0,0,
226,227,5,131,0,0,227,310,5,88,0,0,228,229,5,131,0,0,229,310,5,93,0,0,230,
231,5,117,0,0,231,310,5,89,0,0,232,233,5,132,0,0,233,310,5,94,0,0,234,235,
5,115,0,0,235,310,5,95,0,0,236,237,5,121,0,0,237,310,5,106,0,0,238,239,5,
126,0,0,239,310,5,107,0,0,240,241,5,117,0,0,241,310,5,106,0,0,242,243,5,
131,0,0,243,310,5,94,0,0,244,245,5,116,0,0,245,310,5,101,0,0,246,247,5,119,
0,0,247,310,5,99,0,0,248,249,5,125,0,0,249,310,5,109,0,0,250,251,5,125,0,
0,251,310,5,88,0,0,252,253,5,116,0,0,253,310,5,92,0,0,254,255,5,129,0,0,
255,310,5,105,0,0,256,257,5,127,0,0,257,310,5,91,0,0,258,259,5,129,0,0,259,
310,5,100,0,0,260,261,5,132,0,0,261,310,5,100,0,0,262,263,5,118,0,0,263,
310,5,108,0,0,264,265,5,120,0,0,265,310,5,91,0,0,266,267,5,133,0,0,267,310,
5,89,0,0,268,269,5,117,0,0,269,310,5,112,0,0,270,271,5,121,0,0,271,310,5,
102,0,0,272,273,5,118,0,0,273,310,5,105,0,0,274,275,5,133,0,0,275,310,5,
100,0,0,276,277,5,138,0,0,277,310,5,89,0,0,278,279,5,125,0,0,279,310,5,108,
0,0,280,281,5,114,0,0,281,310,5,90,0,0,282,283,5,133,0,0,283,310,5,95,0,
0,284,285,5,129,0,0,285,310,5,88,0,0,286,310,5,134,0,0,287,288,5,127,0,0,
288,310,5,103,0,0,289,290,5,129,0,0,290,310,5,108,0,0,291,292,5,114,0,0,
292,310,5,100,0,0,293,294,5,116,0,0,294,310,5,100,0,0,295,296,5,115,0,0,
296,310,5,98,0,0,297,298,5,116,0,0,298,310,5,93,0,0,299,300,5,118,0,0,300,
310,5,106,0,0,301,302,5,119,0,0,302,310,5,100,0,0,303,304,5,126,0,0,304,
310,5,91,0,0,305,306,5,127,0,0,306,310,5,102,0,0,307,308,5,125,0,0,308,310,
5,105,0,0,309,95,1,0,0,0,309,96,1,0,0,0,309,98,1,0,0,0,309,100,1,0,0,0,309,
102,1,0,0,0,309,103,1,0,0,0,309,104,1,0,0,0,309,105,1,0,0,0,309,106,1,0,
0,0,309,107,1,0,0,0,309,109,1,0,0,0,309,111,1,0,0,0,309,113,1,0,0,0,309,
115,1,0,0,0,309,117,1,0,0,0,309,118,1,0,0,0,309,119,1,0,0,0,309,121,1,0,
0,0,309,123,1,0,0,0,309,124,1,0,0,0,309,126,1,0,0,0,309,128,1,0,0,0,309,
130,1,0,0,0,309,131,1,0,0,0,309,133,1,0,0,0,309,135,1,0,0,0,309,137,1,0,
0,0,309,139,1,0,0,0,309,141,1,0,0,0,309,143,1,0,0,0,309,145,1,0,0,0,309,
147,1,0,0,0,309,149,1,0,0,0,309,151,1,0,0,0,309,153,1,0,0,0,309,155,1,0,
0,0,309,157,1,0,0,0,309,159,1,0,0,0,309,161,1,0,0,0,309,162,1,0,0,0,309,
164,1,0,0,0,309,166,1,0,0,0,309,168,1,0,0,0,309,170,1,0,0,0,309,172,1,0,
0,0,309,174,1,0,0,0,309,176,1,0,0,0,309,178,1,0,0,0,309,180,1,0,0,0,309,
182,1,0,0,0,309,184,1,0,0,0,309,186,1,0,0,0,309,188,1,0,0,0,309,189,1,0,
0,0,309,191,1,0,0,0,309,193,1,0,0,0,309,195,1,0,0,0,309,197,1,0,0,0,309,
199,1,0,0,0,309,200,1,0,0,0,309,202,1,0,0,0,309,204,1,0,0,0,309,206,1,0,
0,0,309,208,1,0,0,0,309,210,1,0,0,0,309,212,1,0,0,0,309,214,1,0,0,0,309,
216,1,0,0,0,309,218,1,0,0,0,309,220,1,0,0,0,309,222,1,0,0,0,309,224,1,0,
0,0,309,226,1,0,0,0,309,228,1,0,0,0,309,230,1,0,0,0,309,232,1,0,0,0,309,
234,1,0,0,0,309,236,1,0,0,0,309,238,1,0,0,0,309,240,1,0,0,0,309,242,1,0,
0,0,309,244,1,0,0,0,309,246,1,0,0,0,309,248,1,0,0,0,309,250,1,0,0,0,309,
252,1,0,0,0,309,254,1,0,0,0,309,256,1,0,0,0,309,258,1,0,0,0,309,260,1,0,
0,0,309,262,1,0,0,0,309,264,1,0,0,0,309,266,1,0,0,0,309,268,1,0,0,0,309,
270,1,0,0,0,309,272,1,0,0,0,309,274,1,0,0,0,309,276,1,0,0,0,309,278,1,0,
0,0,309,280,1,0,0,0,309,282,1,0,0,0,309,284,1,0,0,0,309,286,1,0,0,0,309,
287,1,0,0,0,309,289,1,0,0,0,309,291,1,0,0,0,309,293,1,0,0,0,309,295,1,0,
0,0,309,297,1,0,0,0,309,299,1,0,0,0,309,301,1,0,0,0,309,303,1,0,0,0,309,
305,1,0,0,0,309,307,1,0,0,0,310,15,1,0,0,0,311,321,5,90,0,0,312,321,5,101,
0,0,313,321,5,102,0,0,314,321,5,103,0,0,315,321,5,106,0,0,316,317,5,106,
0,0,317,321,5,92,0,0,318,319,5,88,0,0,319,321,5,106,0,0,320,311,1,0,0,0,
320,312,1,0,0,0,320,313,1,0,0,0,320,314,1,0,0,0,320,315,1,0,0,0,320,316,
1,0,0,0,320,318,1,0,0,0,321,17,1,0,0,0,322,396,5,4,0,0,323,396,5,5,0,0,324,
396,5,6,0,0,325,396,5,7,0,0,326,396,5,8,0,0,327,396,5,9,0,0,328,396,5,10,
0,0,329,396,5,11,0,0,330,396,5,12,0,0,331,396,5,13,0,0,332,396,5,14,0,0,
333,396,5,15,0,0,334,396,5,15,0,0,335,396,5,16,0,0,336,396,5,17,0,0,337,
396,5,18,0,0,338,396,5,19,0,0,339,396,5,20,0,0,340,396,5,21,0,0,341,396,
5,22,0,0,342,396,5,23,0,0,343,396,5,24,0,0,344,396,5,25,0,0,345,396,5,26,
0,0,346,396,5,27,0,0,347,396,5,28,0,0,348,396,5,29,0,0,349,396,5,30,0,0,
350,396,5,31,0,0,351,396,5,32,0,0,352,396,5,33,0,0,353,396,5,34,0,0,354,
396,5,35,0,0,355,396,5,36,0,0,356,396,5,37,0,0,357,396,5,38,0,0,358,396,
5,39,0,0,359,396,5,40,0,0,360,396,5,41,0,0,361,396,5,42,0,0,362,396,5,43,
0,0,363,396,5,44,0,0,364,396,5,45,0,0,365,396,5,46,0,0,366,396,5,47,0,0,
367,396,5,48,0,0,368,396,5,49,0,0,369,396,5,50,0,0,370,396,5,51,0,0,371,
396,5,52,0,0,372,396,5,53,0,0,373,396,5,54,0,0,374,396,5,55,0,0,375,396,
5,56,0,0,376,396,5,57,0,0,377,396,5,58,0,0,378,396,5,59,0,0,379,396,5,60,
0,0,380,396,5,61,0,0,381,396,5,62,0,0,382,396,5,63,0,0,383,396,5,64,0,0,
384,396,5,65,0,0,385,396,5,66,0,0,386,396,5,67,0,0,387,396,5,68,0,0,388,
396,5,69,0,0,389,396,5,70,0,0,390,396,5,71,0,0,391,396,5,72,0,0,392,393,
7,1,0,0,393,394,5,144,0,0,394,396,5,144,0,0,395,322,1,0,0,0,395,323,1,0,
0,0,395,324,1,0,0,0,395,325,1,0,0,0,395,326,1,0,0,0,395,327,1,0,0,0,395,
328,1,0,0,0,395,329,1,0,0,0,395,330,1,0,0,0,395,331,1,0,0,0,395,332,1,0,
0,0,395,333,1,0,0,0,395,334,1,0,0,0,395,335,1,0,0,0,395,336,1,0,0,0,395,
337,1,0,0,0,395,338,1,0,0,0,395,339,1,0,0,0,395,340,1,0,0,0,395,341,1,0,
0,0,395,342,1,0,0,0,395,343,1,0,0,0,395,344,1,0,0,0,395,345,1,0,0,0,395,
346,1,0,0,0,395,347,1,0,0,0,395,348,1,0,0,0,395,349,1,0,0,0,395,350,1,0,
0,0,395,351,1,0,0,0,395,352,1,0,0,0,395,353,1,0,0,0,395,354,1,0,0,0,395,
355,1,0,0,0,395,356,1,0,0,0,395,357,1,0,0,0,395,358,1,0,0,0,395,359,1,0,
0,0,395,360,1,0,0,0,395,361,1,0,0,0,395,362,1,0,0,0,395,363,1,0,0,0,395,
364,1,0,0,0,395,365,1,0,0,0,395,366,1,0,0,0,395,367,1,0,0,0,395,368,1,0,
0,0,395,369,1,0,0,0,395,370,1,0,0,0,395,371,1,0,0,0,395,372,1,0,0,0,395,
373,1,0,0,0,395,374,1,0,0,0,395,375,1,0,0,0,395,376,1,0,0,0,395,377,1,0,
0,0,395,378,1,0,0,0,395,379,1,0,0,0,395,380,1,0,0,0,395,381,1,0,0,0,395,
382,1,0,0,0,395,383,1,0,0,0,395,384,1,0,0,0,395,385,1,0,0,0,395,386,1,0,
0,0,395,387,1,0,0,0,395,388,1,0,0,0,395,389,1,0,0,0,395,390,1,0,0,0,395,
391,1,0,0,0,395,392,1,0,0,0,396,19,1,0,0,0,397,399,5,121,0,0,398,400,5,144,
0,0,399,398,1,0,0,0,399,400,1,0,0,0,400,21,1,0,0,0,401,403,7,2,0,0,402,404,
5,144,0,0,403,402,1,0,0,0,403,404,1,0,0,0,404,406,1,0,0,0,405,407,5,144,
0,0,406,405,1,0,0,0,406,407,1,0,0,0,407,411,1,0,0,0,408,411,5,77,0,0,409,
411,5,78,0,0,410,401,1,0,0,0,410,408,1,0,0,0,410,409,1,0,0,0,411,23,1,0,
0,0,412,414,5,79,0,0,413,415,5,144,0,0,414,413,1,0,0,0,415,416,1,0,0,0,416,
414,1,0,0,0,416,417,1,0,0,0,417,25,1,0,0,0,418,419,7,3,0,0,419,27,1,0,0,
0,420,422,3,26,13,0,421,420,1,0,0,0,421,422,1,0,0,0,422,427,1,0,0,0,423,
428,5,144,0,0,424,425,5,85,0,0,425,426,5,144,0,0,426,428,5,144,0,0,427,423,
1,0,0,0,427,424,1,0,0,0,428,29,1,0,0,0,429,433,3,2,1,0,430,432,3,28,14,0,
431,430,1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,439,
1,0,0,0,435,433,1,0,0,0,436,438,3,32,16,0,437,436,1,0,0,0,438,441,1,0,0,
0,439,437,1,0,0,0,439,440,1,0,0,0,440,31,1,0,0,0,441,439,1,0,0,0,442,445,
5,86,0,0,443,446,3,26,13,0,444,446,5,140,0,0,445,443,1,0,0,0,445,444,1,0,
0,0,445,446,1,0,0,0,446,447,1,0,0,0,447,448,3,34,17,0,448,449,5,87,0,0,449,
33,1,0,0,0,450,458,3,30,15,0,451,454,3,26,13,0,452,454,5,140,0,0,453,451,
1,0,0,0,453,452,1,0,0,0,453,454,1,0,0,0,454,455,1,0,0,0,455,457,3,30,15,
0,456,453,1,0,0,0,457,460,1,0,0,0,458,456,1,0,0,0,458,459,1,0,0,0,459,35,
1,0,0,0,460,458,1,0,0,0,461,462,5,143,0,0,462,466,5,145,0,0,463,466,5,141,
0,0,464,466,5,142,0,0,465,461,1,0,0,0,465,463,1,0,0,0,465,464,1,0,0,0,466,
37,1,0,0,0,26,40,48,62,68,72,75,78,81,88,93,309,320,395,399,403,406,410,
416,421,427,433,439,445,453,458,465];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class smilesParser extends antlr4.Parser {

    static grammarFileName = "smiles.g4";
    static literalNames = [ null, "'*'", "'['", "']'", "'@'", "'@@'", "'@TH1'", 
                            "'@TH2'", "'@AL1'", "'@AL2'", "'@SP1'", "'@SP2'", 
                            "'@SP3'", "'@TB1'", "'@TB2'", "'@TB3'", "'@TB4'", 
                            "'@TB5'", "'@TB6'", "'@TB7'", "'@TB8'", "'@TB9'", 
                            "'@TB10'", "'@TB11'", "'@TB12'", "'@TB13'", 
                            "'@TB14'", "'@TB15'", "'@TB16'", "'@TB17'", 
                            "'@TB18'", "'@TB19'", "'@TB20'", "'@TB21'", 
                            "'@TB22'", "'@TB23'", "'@TB24'", "'@TB25'", 
                            "'@TB26'", "'@TB27'", "'@TB28'", "'@TB29'", 
                            "'@TB30'", "'@OH1'", "'@OH2'", "'@OH3'", "'@OH4'", 
                            "'@OH5'", "'@OH6'", "'@OH7'", "'@OH8'", "'@OH9'", 
                            "'@OH10'", "'@OH11'", "'@OH12'", "'@OH13'", 
                            "'@OH14'", "'@OH15'", "'@OH16'", "'@OH17'", 
                            "'@OH18'", "'@OH19'", "'@OH20'", "'@OH21'", 
                            "'@OH22'", "'@OH23'", "'@OH24'", "'@OH25'", 
                            "'@OH26'", "'@OH27'", "'@OH28'", "'@OH29'", 
                            "'@OH30'", "'@TB'", "'@OH'", "'+'", "'-'", "'--'", 
                            "'++'", "':'", "'='", "'#'", "'$'", "'/'", "'\\'", 
                            "'%'", "'('", "')'", "'a'", "'b'", "'c'", "'d'", 
                            "'e'", "'f'", "'g'", "'h'", "'i'", "'j'", "'k'", 
                            "'l'", "'m'", "'n'", "'o'", "'p'", "'q'", "'r'", 
                            "'s'", "'t'", "'u'", "'v'", "'w'", "'x'", "'y'", 
                            "'z'", "'A'", "'B'", "'C'", "'D'", "'E'", "'F'", 
                            "'G'", "'H'", "'I'", "'J'", "'K'", "'L'", "'M'", 
                            "'N'", "'O'", "'P'", "'Q'", "'R'", "'S'", "'T'", 
                            "'U'", "'V'", "'W'", "'X'", "'Y'", "'Z'", "'.'", 
                            "'\\r'", "'\\n'", "' '", null, "'\\t'" ];
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
                             null, null, null, null, null, null, null, null, 
                             "LA", "LB", "LC", "LD", "LE", "LF", "LG", "LH", 
                             "LI", "LJ", "LK", "LL", "LM", "LN", "LO", "LP", 
                             "LQ", "LR", "LS", "LT", "LU", "LV", "LW", "LX", 
                             "LY", "LZ", "UA", "UB", "UC", "UD", "UE", "UF", 
                             "UG", "UH", "UI", "UJ", "UK", "UL", "UM", "UN", 
                             "UO", "UP", "UQ", "UR", "US", "UT", "UU", "UV", 
                             "UW", "UX", "UY", "UZ", "DOT", "LINEFEED", 
                             "CARRIAGE_RETURN", "SPACE", "DIGIT", "TAB" ];
    static ruleNames = [ "smiles", "atom", "aliphatic_organic", "aromatic_organic", 
                         "bracket_atom", "isotope", "symbol", "element_symbols", 
                         "aromatic_symbol", "chiral", "hcount", "charge", 
                         "class_", "bond", "ringbond", "branched_atom", 
                         "branch", "chain", "terminator" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = smilesParser.ruleNames;
        this.literalNames = smilesParser.literalNames;
        this.symbolicNames = smilesParser.symbolicNames;
    }



	smiles() {
	    let localctx = new SmilesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, smilesParser.RULE_smiles);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 38;
	        this.chain();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 141)) & ~0x1f) === 0 && ((1 << (_la - 141)) & 7) !== 0)) {
	            this.state = 39;
	            this.terminator();
	        }

	        this.state = 42;
	        this.match(smilesParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, smilesParser.RULE_atom);
	    try {
	        this.state = 48;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.bracket_atom();
	            break;
	        case 115:
	        case 116:
	        case 119:
	        case 122:
	        case 127:
	        case 128:
	        case 129:
	        case 132:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 45;
	            this.aliphatic_organic();
	            break;
	        case 89:
	        case 90:
	        case 101:
	        case 102:
	        case 103:
	        case 106:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 46;
	            this.aromatic_organic();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 47;
	            this.match(smilesParser.T__0);
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



	aliphatic_organic() {
	    let localctx = new Aliphatic_organicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, smilesParser.RULE_aliphatic_organic);
	    try {
	        this.state = 62;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 50;
	            this.match(smilesParser.UB);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 51;
	            this.match(smilesParser.UC);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.match(smilesParser.UN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 53;
	            this.match(smilesParser.UO);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 54;
	            this.match(smilesParser.US);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 55;
	            this.match(smilesParser.UP);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 56;
	            this.match(smilesParser.UF);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 57;
	            this.match(smilesParser.UC);
	            this.state = 58;
	            this.match(smilesParser.LL);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 59;
	            this.match(smilesParser.UB);
	            this.state = 60;
	            this.match(smilesParser.LR);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 61;
	            this.match(smilesParser.UI);
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



	aromatic_organic() {
	    let localctx = new Aromatic_organicContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, smilesParser.RULE_aromatic_organic);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        _la = this._input.LA(1);
	        if(!(((((_la - 89)) & ~0x1f) === 0 && ((1 << (_la - 89)) & 159747) !== 0))) {
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



	bracket_atom() {
	    let localctx = new Bracket_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, smilesParser.RULE_bracket_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(smilesParser.T__1);
	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===144) {
	            this.state = 67;
	            this.isotope();
	        }

	        this.state = 70;
	        this.symbol();
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 2047) !== 0)) {
	            this.state = 71;
	            this.chiral();
	        }

	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===121) {
	            this.state = 74;
	            this.hcount();
	        }

	        this.state = 78;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 75)) & ~0x1f) === 0 && ((1 << (_la - 75)) & 15) !== 0)) {
	            this.state = 77;
	            this.charge();
	        }

	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===79) {
	            this.state = 80;
	            this.class_();
	        }

	        this.state = 83;
	        this.match(smilesParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	isotope() {
	    let localctx = new IsotopeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, smilesParser.RULE_isotope);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 86; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 85;
	            this.match(smilesParser.DIGIT);
	            this.state = 88; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===144);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 12, smilesParser.RULE_symbol);
	    try {
	        this.state = 93;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 124:
	        case 125:
	        case 126:
	        case 127:
	        case 128:
	        case 129:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 136:
	        case 137:
	        case 138:
	        case 139:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.element_symbols();
	            break;
	        case 88:
	        case 90:
	        case 101:
	        case 102:
	        case 103:
	        case 106:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.aromatic_symbol();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.match(smilesParser.T__0);
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



	element_symbols() {
	    let localctx = new Element_symbolsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, smilesParser.RULE_element_symbols);
	    try {
	        this.state = 309;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 95;
	            this.match(smilesParser.UH);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 96;
	            this.match(smilesParser.UH);
	            this.state = 97;
	            this.match(smilesParser.LE);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.match(smilesParser.UL);
	            this.state = 99;
	            this.match(smilesParser.LI);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
	            this.match(smilesParser.UB);
	            this.state = 101;
	            this.match(smilesParser.LE);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 102;
	            this.match(smilesParser.UB);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 103;
	            this.match(smilesParser.UC);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 104;
	            this.match(smilesParser.UN);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 105;
	            this.match(smilesParser.UO);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 106;
	            this.match(smilesParser.UF);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 107;
	            this.match(smilesParser.UN);
	            this.state = 108;
	            this.match(smilesParser.LE);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 109;
	            this.match(smilesParser.UN);
	            this.state = 110;
	            this.match(smilesParser.LA);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 111;
	            this.match(smilesParser.UM);
	            this.state = 112;
	            this.match(smilesParser.LG);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 113;
	            this.match(smilesParser.UA);
	            this.state = 114;
	            this.match(smilesParser.LL);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 115;
	            this.match(smilesParser.US);
	            this.state = 116;
	            this.match(smilesParser.LI);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 117;
	            this.match(smilesParser.UP);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 118;
	            this.match(smilesParser.US);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 119;
	            this.match(smilesParser.UC);
	            this.state = 120;
	            this.match(smilesParser.LL);
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 121;
	            this.match(smilesParser.UA);
	            this.state = 122;
	            this.match(smilesParser.LR);
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 123;
	            this.match(smilesParser.UK);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 124;
	            this.match(smilesParser.UC);
	            this.state = 125;
	            this.match(smilesParser.LA);
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 126;
	            this.match(smilesParser.US);
	            this.state = 127;
	            this.match(smilesParser.LC);
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 128;
	            this.match(smilesParser.UT);
	            this.state = 129;
	            this.match(smilesParser.LI);
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 130;
	            this.match(smilesParser.UV);
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 131;
	            this.match(smilesParser.UC);
	            this.state = 132;
	            this.match(smilesParser.LR);
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 133;
	            this.match(smilesParser.UM);
	            this.state = 134;
	            this.match(smilesParser.LN);
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 135;
	            this.match(smilesParser.UF);
	            this.state = 136;
	            this.match(smilesParser.LE);
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 137;
	            this.match(smilesParser.UC);
	            this.state = 138;
	            this.match(smilesParser.LO);
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 139;
	            this.match(smilesParser.UN);
	            this.state = 140;
	            this.match(smilesParser.LI);
	            break;

	        case 29:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 141;
	            this.match(smilesParser.UC);
	            this.state = 142;
	            this.match(smilesParser.LU);
	            break;

	        case 30:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 143;
	            this.match(smilesParser.UZ);
	            this.state = 144;
	            this.match(smilesParser.LN);
	            break;

	        case 31:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 145;
	            this.match(smilesParser.UG);
	            this.state = 146;
	            this.match(smilesParser.LA);
	            break;

	        case 32:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 147;
	            this.match(smilesParser.UG);
	            this.state = 148;
	            this.match(smilesParser.LE);
	            break;

	        case 33:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 149;
	            this.match(smilesParser.UA);
	            this.state = 150;
	            this.match(smilesParser.LS);
	            break;

	        case 34:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 151;
	            this.match(smilesParser.US);
	            this.state = 152;
	            this.match(smilesParser.LE);
	            break;

	        case 35:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 153;
	            this.match(smilesParser.UB);
	            this.state = 154;
	            this.match(smilesParser.LR);
	            break;

	        case 36:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 155;
	            this.match(smilesParser.UK);
	            this.state = 156;
	            this.match(smilesParser.LR);
	            break;

	        case 37:
	            this.enterOuterAlt(localctx, 37);
	            this.state = 157;
	            this.match(smilesParser.UR);
	            this.state = 158;
	            this.match(smilesParser.LB);
	            break;

	        case 38:
	            this.enterOuterAlt(localctx, 38);
	            this.state = 159;
	            this.match(smilesParser.US);
	            this.state = 160;
	            this.match(smilesParser.LR);
	            break;

	        case 39:
	            this.enterOuterAlt(localctx, 39);
	            this.state = 161;
	            this.match(smilesParser.UY);
	            break;

	        case 40:
	            this.enterOuterAlt(localctx, 40);
	            this.state = 162;
	            this.match(smilesParser.UZ);
	            this.state = 163;
	            this.match(smilesParser.LR);
	            break;

	        case 41:
	            this.enterOuterAlt(localctx, 41);
	            this.state = 164;
	            this.match(smilesParser.UN);
	            this.state = 165;
	            this.match(smilesParser.LB);
	            break;

	        case 42:
	            this.enterOuterAlt(localctx, 42);
	            this.state = 166;
	            this.match(smilesParser.UM);
	            this.state = 167;
	            this.match(smilesParser.LO);
	            break;

	        case 43:
	            this.enterOuterAlt(localctx, 43);
	            this.state = 168;
	            this.match(smilesParser.UT);
	            this.state = 169;
	            this.match(smilesParser.LC);
	            break;

	        case 44:
	            this.enterOuterAlt(localctx, 44);
	            this.state = 170;
	            this.match(smilesParser.UR);
	            this.state = 171;
	            this.match(smilesParser.LU);
	            break;

	        case 45:
	            this.enterOuterAlt(localctx, 45);
	            this.state = 172;
	            this.match(smilesParser.UR);
	            this.state = 173;
	            this.match(smilesParser.LH);
	            break;

	        case 46:
	            this.enterOuterAlt(localctx, 46);
	            this.state = 174;
	            this.match(smilesParser.UP);
	            this.state = 175;
	            this.match(smilesParser.LD);
	            break;

	        case 47:
	            this.enterOuterAlt(localctx, 47);
	            this.state = 176;
	            this.match(smilesParser.UA);
	            this.state = 177;
	            this.match(smilesParser.LG);
	            break;

	        case 48:
	            this.enterOuterAlt(localctx, 48);
	            this.state = 178;
	            this.match(smilesParser.UC);
	            this.state = 179;
	            this.match(smilesParser.LD);
	            break;

	        case 49:
	            this.enterOuterAlt(localctx, 49);
	            this.state = 180;
	            this.match(smilesParser.UI);
	            this.state = 181;
	            this.match(smilesParser.LN);
	            break;

	        case 50:
	            this.enterOuterAlt(localctx, 50);
	            this.state = 182;
	            this.match(smilesParser.US);
	            this.state = 183;
	            this.match(smilesParser.LN);
	            break;

	        case 51:
	            this.enterOuterAlt(localctx, 51);
	            this.state = 184;
	            this.match(smilesParser.US);
	            this.state = 185;
	            this.match(smilesParser.LB);
	            break;

	        case 52:
	            this.enterOuterAlt(localctx, 52);
	            this.state = 186;
	            this.match(smilesParser.UT);
	            this.state = 187;
	            this.match(smilesParser.LE);
	            break;

	        case 53:
	            this.enterOuterAlt(localctx, 53);
	            this.state = 188;
	            this.match(smilesParser.UI);
	            break;

	        case 54:
	            this.enterOuterAlt(localctx, 54);
	            this.state = 189;
	            this.match(smilesParser.UX);
	            this.state = 190;
	            this.match(smilesParser.LE);
	            break;

	        case 55:
	            this.enterOuterAlt(localctx, 55);
	            this.state = 191;
	            this.match(smilesParser.UC);
	            this.state = 192;
	            this.match(smilesParser.LS);
	            break;

	        case 56:
	            this.enterOuterAlt(localctx, 56);
	            this.state = 193;
	            this.match(smilesParser.UB);
	            this.state = 194;
	            this.match(smilesParser.LA);
	            break;

	        case 57:
	            this.enterOuterAlt(localctx, 57);
	            this.state = 195;
	            this.match(smilesParser.UH);
	            this.state = 196;
	            this.match(smilesParser.LF);
	            break;

	        case 58:
	            this.enterOuterAlt(localctx, 58);
	            this.state = 197;
	            this.match(smilesParser.UT);
	            this.state = 198;
	            this.match(smilesParser.LA);
	            break;

	        case 59:
	            this.enterOuterAlt(localctx, 59);
	            this.state = 199;
	            this.match(smilesParser.UW);
	            break;

	        case 60:
	            this.enterOuterAlt(localctx, 60);
	            this.state = 200;
	            this.match(smilesParser.UR);
	            this.state = 201;
	            this.match(smilesParser.LE);
	            break;

	        case 61:
	            this.enterOuterAlt(localctx, 61);
	            this.state = 202;
	            this.match(smilesParser.UO);
	            this.state = 203;
	            this.match(smilesParser.LS);
	            break;

	        case 62:
	            this.enterOuterAlt(localctx, 62);
	            this.state = 204;
	            this.match(smilesParser.UI);
	            this.state = 205;
	            this.match(smilesParser.LR);
	            break;

	        case 63:
	            this.enterOuterAlt(localctx, 63);
	            this.state = 206;
	            this.match(smilesParser.UP);
	            this.state = 207;
	            this.match(smilesParser.LT);
	            break;

	        case 64:
	            this.enterOuterAlt(localctx, 64);
	            this.state = 208;
	            this.match(smilesParser.UA);
	            this.state = 209;
	            this.match(smilesParser.LU);
	            break;

	        case 65:
	            this.enterOuterAlt(localctx, 65);
	            this.state = 210;
	            this.match(smilesParser.UH);
	            this.state = 211;
	            this.match(smilesParser.LG);
	            break;

	        case 66:
	            this.enterOuterAlt(localctx, 66);
	            this.state = 212;
	            this.match(smilesParser.UT);
	            this.state = 213;
	            this.match(smilesParser.LL);
	            break;

	        case 67:
	            this.enterOuterAlt(localctx, 67);
	            this.state = 214;
	            this.match(smilesParser.UP);
	            this.state = 215;
	            this.match(smilesParser.LB);
	            break;

	        case 68:
	            this.enterOuterAlt(localctx, 68);
	            this.state = 216;
	            this.match(smilesParser.UB);
	            this.state = 217;
	            this.match(smilesParser.LI);
	            break;

	        case 69:
	            this.enterOuterAlt(localctx, 69);
	            this.state = 218;
	            this.match(smilesParser.UP);
	            this.state = 219;
	            this.match(smilesParser.LO);
	            break;

	        case 70:
	            this.enterOuterAlt(localctx, 70);
	            this.state = 220;
	            this.match(smilesParser.UA);
	            this.state = 221;
	            this.match(smilesParser.LT);
	            break;

	        case 71:
	            this.enterOuterAlt(localctx, 71);
	            this.state = 222;
	            this.match(smilesParser.UR);
	            this.state = 223;
	            this.match(smilesParser.LN);
	            break;

	        case 72:
	            this.enterOuterAlt(localctx, 72);
	            this.state = 224;
	            this.match(smilesParser.UF);
	            this.state = 225;
	            this.match(smilesParser.LR);
	            break;

	        case 73:
	            this.enterOuterAlt(localctx, 73);
	            this.state = 226;
	            this.match(smilesParser.UR);
	            this.state = 227;
	            this.match(smilesParser.LA);
	            break;

	        case 74:
	            this.enterOuterAlt(localctx, 74);
	            this.state = 228;
	            this.match(smilesParser.UR);
	            this.state = 229;
	            this.match(smilesParser.LF);
	            break;

	        case 75:
	            this.enterOuterAlt(localctx, 75);
	            this.state = 230;
	            this.match(smilesParser.UD);
	            this.state = 231;
	            this.match(smilesParser.LB);
	            break;

	        case 76:
	            this.enterOuterAlt(localctx, 76);
	            this.state = 232;
	            this.match(smilesParser.US);
	            this.state = 233;
	            this.match(smilesParser.LG);
	            break;

	        case 77:
	            this.enterOuterAlt(localctx, 77);
	            this.state = 234;
	            this.match(smilesParser.UB);
	            this.state = 235;
	            this.match(smilesParser.LH);
	            break;

	        case 78:
	            this.enterOuterAlt(localctx, 78);
	            this.state = 236;
	            this.match(smilesParser.UH);
	            this.state = 237;
	            this.match(smilesParser.LS);
	            break;

	        case 79:
	            this.enterOuterAlt(localctx, 79);
	            this.state = 238;
	            this.match(smilesParser.UM);
	            this.state = 239;
	            this.match(smilesParser.LT);
	            break;

	        case 80:
	            this.enterOuterAlt(localctx, 80);
	            this.state = 240;
	            this.match(smilesParser.UD);
	            this.state = 241;
	            this.match(smilesParser.LS);
	            break;

	        case 81:
	            this.enterOuterAlt(localctx, 81);
	            this.state = 242;
	            this.match(smilesParser.UR);
	            this.state = 243;
	            this.match(smilesParser.LG);
	            break;

	        case 82:
	            this.enterOuterAlt(localctx, 82);
	            this.state = 244;
	            this.match(smilesParser.UC);
	            this.state = 245;
	            this.match(smilesParser.LN);
	            break;

	        case 83:
	            this.enterOuterAlt(localctx, 83);
	            this.state = 246;
	            this.match(smilesParser.UF);
	            this.state = 247;
	            this.match(smilesParser.LL);
	            break;

	        case 84:
	            this.enterOuterAlt(localctx, 84);
	            this.state = 248;
	            this.match(smilesParser.UL);
	            this.state = 249;
	            this.match(smilesParser.LV);
	            break;

	        case 85:
	            this.enterOuterAlt(localctx, 85);
	            this.state = 250;
	            this.match(smilesParser.UL);
	            this.state = 251;
	            this.match(smilesParser.LA);
	            break;

	        case 86:
	            this.enterOuterAlt(localctx, 86);
	            this.state = 252;
	            this.match(smilesParser.UC);
	            this.state = 253;
	            this.match(smilesParser.LE);
	            break;

	        case 87:
	            this.enterOuterAlt(localctx, 87);
	            this.state = 254;
	            this.match(smilesParser.UP);
	            this.state = 255;
	            this.match(smilesParser.LR);
	            break;

	        case 88:
	            this.enterOuterAlt(localctx, 88);
	            this.state = 256;
	            this.match(smilesParser.UN);
	            this.state = 257;
	            this.match(smilesParser.LD);
	            break;

	        case 89:
	            this.enterOuterAlt(localctx, 89);
	            this.state = 258;
	            this.match(smilesParser.UP);
	            this.state = 259;
	            this.match(smilesParser.LM);
	            break;

	        case 90:
	            this.enterOuterAlt(localctx, 90);
	            this.state = 260;
	            this.match(smilesParser.US);
	            this.state = 261;
	            this.match(smilesParser.LM);
	            break;

	        case 91:
	            this.enterOuterAlt(localctx, 91);
	            this.state = 262;
	            this.match(smilesParser.UE);
	            this.state = 263;
	            this.match(smilesParser.LU);
	            break;

	        case 92:
	            this.enterOuterAlt(localctx, 92);
	            this.state = 264;
	            this.match(smilesParser.UG);
	            this.state = 265;
	            this.match(smilesParser.LD);
	            break;

	        case 93:
	            this.enterOuterAlt(localctx, 93);
	            this.state = 266;
	            this.match(smilesParser.UT);
	            this.state = 267;
	            this.match(smilesParser.LB);
	            break;

	        case 94:
	            this.enterOuterAlt(localctx, 94);
	            this.state = 268;
	            this.match(smilesParser.UD);
	            this.state = 269;
	            this.match(smilesParser.LY);
	            break;

	        case 95:
	            this.enterOuterAlt(localctx, 95);
	            this.state = 270;
	            this.match(smilesParser.UH);
	            this.state = 271;
	            this.match(smilesParser.LO);
	            break;

	        case 96:
	            this.enterOuterAlt(localctx, 96);
	            this.state = 272;
	            this.match(smilesParser.UE);
	            this.state = 273;
	            this.match(smilesParser.LR);
	            break;

	        case 97:
	            this.enterOuterAlt(localctx, 97);
	            this.state = 274;
	            this.match(smilesParser.UT);
	            this.state = 275;
	            this.match(smilesParser.LM);
	            break;

	        case 98:
	            this.enterOuterAlt(localctx, 98);
	            this.state = 276;
	            this.match(smilesParser.UY);
	            this.state = 277;
	            this.match(smilesParser.LB);
	            break;

	        case 99:
	            this.enterOuterAlt(localctx, 99);
	            this.state = 278;
	            this.match(smilesParser.UL);
	            this.state = 279;
	            this.match(smilesParser.LU);
	            break;

	        case 100:
	            this.enterOuterAlt(localctx, 100);
	            this.state = 280;
	            this.match(smilesParser.UA);
	            this.state = 281;
	            this.match(smilesParser.LC);
	            break;

	        case 101:
	            this.enterOuterAlt(localctx, 101);
	            this.state = 282;
	            this.match(smilesParser.UT);
	            this.state = 283;
	            this.match(smilesParser.LH);
	            break;

	        case 102:
	            this.enterOuterAlt(localctx, 102);
	            this.state = 284;
	            this.match(smilesParser.UP);
	            this.state = 285;
	            this.match(smilesParser.LA);
	            break;

	        case 103:
	            this.enterOuterAlt(localctx, 103);
	            this.state = 286;
	            this.match(smilesParser.UU);
	            break;

	        case 104:
	            this.enterOuterAlt(localctx, 104);
	            this.state = 287;
	            this.match(smilesParser.UN);
	            this.state = 288;
	            this.match(smilesParser.LP);
	            break;

	        case 105:
	            this.enterOuterAlt(localctx, 105);
	            this.state = 289;
	            this.match(smilesParser.UP);
	            this.state = 290;
	            this.match(smilesParser.LU);
	            break;

	        case 106:
	            this.enterOuterAlt(localctx, 106);
	            this.state = 291;
	            this.match(smilesParser.UA);
	            this.state = 292;
	            this.match(smilesParser.LM);
	            break;

	        case 107:
	            this.enterOuterAlt(localctx, 107);
	            this.state = 293;
	            this.match(smilesParser.UC);
	            this.state = 294;
	            this.match(smilesParser.LM);
	            break;

	        case 108:
	            this.enterOuterAlt(localctx, 108);
	            this.state = 295;
	            this.match(smilesParser.UB);
	            this.state = 296;
	            this.match(smilesParser.LK);
	            break;

	        case 109:
	            this.enterOuterAlt(localctx, 109);
	            this.state = 297;
	            this.match(smilesParser.UC);
	            this.state = 298;
	            this.match(smilesParser.LF);
	            break;

	        case 110:
	            this.enterOuterAlt(localctx, 110);
	            this.state = 299;
	            this.match(smilesParser.UE);
	            this.state = 300;
	            this.match(smilesParser.LS);
	            break;

	        case 111:
	            this.enterOuterAlt(localctx, 111);
	            this.state = 301;
	            this.match(smilesParser.UF);
	            this.state = 302;
	            this.match(smilesParser.LM);
	            break;

	        case 112:
	            this.enterOuterAlt(localctx, 112);
	            this.state = 303;
	            this.match(smilesParser.UM);
	            this.state = 304;
	            this.match(smilesParser.LD);
	            break;

	        case 113:
	            this.enterOuterAlt(localctx, 113);
	            this.state = 305;
	            this.match(smilesParser.UN);
	            this.state = 306;
	            this.match(smilesParser.LO);
	            break;

	        case 114:
	            this.enterOuterAlt(localctx, 114);
	            this.state = 307;
	            this.match(smilesParser.UL);
	            this.state = 308;
	            this.match(smilesParser.LR);
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



	aromatic_symbol() {
	    let localctx = new Aromatic_symbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, smilesParser.RULE_aromatic_symbol);
	    try {
	        this.state = 320;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 311;
	            this.match(smilesParser.LC);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 312;
	            this.match(smilesParser.LN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 313;
	            this.match(smilesParser.LO);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 314;
	            this.match(smilesParser.LP);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 315;
	            this.match(smilesParser.LS);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 316;
	            this.match(smilesParser.LS);
	            this.state = 317;
	            this.match(smilesParser.LE);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 318;
	            this.match(smilesParser.LA);
	            this.state = 319;
	            this.match(smilesParser.LS);
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



	chiral() {
	    let localctx = new ChiralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, smilesParser.RULE_chiral);
	    var _la = 0;
	    try {
	        this.state = 395;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 322;
	            this.match(smilesParser.T__3);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 323;
	            this.match(smilesParser.T__4);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 324;
	            this.match(smilesParser.T__5);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 325;
	            this.match(smilesParser.T__6);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 326;
	            this.match(smilesParser.T__7);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 327;
	            this.match(smilesParser.T__8);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 328;
	            this.match(smilesParser.T__9);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 329;
	            this.match(smilesParser.T__10);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 330;
	            this.match(smilesParser.T__11);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 331;
	            this.match(smilesParser.T__12);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 332;
	            this.match(smilesParser.T__13);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 333;
	            this.match(smilesParser.T__14);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 334;
	            this.match(smilesParser.T__14);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 335;
	            this.match(smilesParser.T__15);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 336;
	            this.match(smilesParser.T__16);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 337;
	            this.match(smilesParser.T__17);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 338;
	            this.match(smilesParser.T__18);
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 339;
	            this.match(smilesParser.T__19);
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 340;
	            this.match(smilesParser.T__20);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 341;
	            this.match(smilesParser.T__21);
	            break;

	        case 21:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 342;
	            this.match(smilesParser.T__22);
	            break;

	        case 22:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 343;
	            this.match(smilesParser.T__23);
	            break;

	        case 23:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 344;
	            this.match(smilesParser.T__24);
	            break;

	        case 24:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 345;
	            this.match(smilesParser.T__25);
	            break;

	        case 25:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 346;
	            this.match(smilesParser.T__26);
	            break;

	        case 26:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 347;
	            this.match(smilesParser.T__27);
	            break;

	        case 27:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 348;
	            this.match(smilesParser.T__28);
	            break;

	        case 28:
	            this.enterOuterAlt(localctx, 28);
	            this.state = 349;
	            this.match(smilesParser.T__29);
	            break;

	        case 29:
	            this.enterOuterAlt(localctx, 29);
	            this.state = 350;
	            this.match(smilesParser.T__30);
	            break;

	        case 30:
	            this.enterOuterAlt(localctx, 30);
	            this.state = 351;
	            this.match(smilesParser.T__31);
	            break;

	        case 31:
	            this.enterOuterAlt(localctx, 31);
	            this.state = 352;
	            this.match(smilesParser.T__32);
	            break;

	        case 32:
	            this.enterOuterAlt(localctx, 32);
	            this.state = 353;
	            this.match(smilesParser.T__33);
	            break;

	        case 33:
	            this.enterOuterAlt(localctx, 33);
	            this.state = 354;
	            this.match(smilesParser.T__34);
	            break;

	        case 34:
	            this.enterOuterAlt(localctx, 34);
	            this.state = 355;
	            this.match(smilesParser.T__35);
	            break;

	        case 35:
	            this.enterOuterAlt(localctx, 35);
	            this.state = 356;
	            this.match(smilesParser.T__36);
	            break;

	        case 36:
	            this.enterOuterAlt(localctx, 36);
	            this.state = 357;
	            this.match(smilesParser.T__37);
	            break;

	        case 37:
	            this.enterOuterAlt(localctx, 37);
	            this.state = 358;
	            this.match(smilesParser.T__38);
	            break;

	        case 38:
	            this.enterOuterAlt(localctx, 38);
	            this.state = 359;
	            this.match(smilesParser.T__39);
	            break;

	        case 39:
	            this.enterOuterAlt(localctx, 39);
	            this.state = 360;
	            this.match(smilesParser.T__40);
	            break;

	        case 40:
	            this.enterOuterAlt(localctx, 40);
	            this.state = 361;
	            this.match(smilesParser.T__41);
	            break;

	        case 41:
	            this.enterOuterAlt(localctx, 41);
	            this.state = 362;
	            this.match(smilesParser.T__42);
	            break;

	        case 42:
	            this.enterOuterAlt(localctx, 42);
	            this.state = 363;
	            this.match(smilesParser.T__43);
	            break;

	        case 43:
	            this.enterOuterAlt(localctx, 43);
	            this.state = 364;
	            this.match(smilesParser.T__44);
	            break;

	        case 44:
	            this.enterOuterAlt(localctx, 44);
	            this.state = 365;
	            this.match(smilesParser.T__45);
	            break;

	        case 45:
	            this.enterOuterAlt(localctx, 45);
	            this.state = 366;
	            this.match(smilesParser.T__46);
	            break;

	        case 46:
	            this.enterOuterAlt(localctx, 46);
	            this.state = 367;
	            this.match(smilesParser.T__47);
	            break;

	        case 47:
	            this.enterOuterAlt(localctx, 47);
	            this.state = 368;
	            this.match(smilesParser.T__48);
	            break;

	        case 48:
	            this.enterOuterAlt(localctx, 48);
	            this.state = 369;
	            this.match(smilesParser.T__49);
	            break;

	        case 49:
	            this.enterOuterAlt(localctx, 49);
	            this.state = 370;
	            this.match(smilesParser.T__50);
	            break;

	        case 50:
	            this.enterOuterAlt(localctx, 50);
	            this.state = 371;
	            this.match(smilesParser.T__51);
	            break;

	        case 51:
	            this.enterOuterAlt(localctx, 51);
	            this.state = 372;
	            this.match(smilesParser.T__52);
	            break;

	        case 52:
	            this.enterOuterAlt(localctx, 52);
	            this.state = 373;
	            this.match(smilesParser.T__53);
	            break;

	        case 53:
	            this.enterOuterAlt(localctx, 53);
	            this.state = 374;
	            this.match(smilesParser.T__54);
	            break;

	        case 54:
	            this.enterOuterAlt(localctx, 54);
	            this.state = 375;
	            this.match(smilesParser.T__55);
	            break;

	        case 55:
	            this.enterOuterAlt(localctx, 55);
	            this.state = 376;
	            this.match(smilesParser.T__56);
	            break;

	        case 56:
	            this.enterOuterAlt(localctx, 56);
	            this.state = 377;
	            this.match(smilesParser.T__57);
	            break;

	        case 57:
	            this.enterOuterAlt(localctx, 57);
	            this.state = 378;
	            this.match(smilesParser.T__58);
	            break;

	        case 58:
	            this.enterOuterAlt(localctx, 58);
	            this.state = 379;
	            this.match(smilesParser.T__59);
	            break;

	        case 59:
	            this.enterOuterAlt(localctx, 59);
	            this.state = 380;
	            this.match(smilesParser.T__60);
	            break;

	        case 60:
	            this.enterOuterAlt(localctx, 60);
	            this.state = 381;
	            this.match(smilesParser.T__61);
	            break;

	        case 61:
	            this.enterOuterAlt(localctx, 61);
	            this.state = 382;
	            this.match(smilesParser.T__62);
	            break;

	        case 62:
	            this.enterOuterAlt(localctx, 62);
	            this.state = 383;
	            this.match(smilesParser.T__63);
	            break;

	        case 63:
	            this.enterOuterAlt(localctx, 63);
	            this.state = 384;
	            this.match(smilesParser.T__64);
	            break;

	        case 64:
	            this.enterOuterAlt(localctx, 64);
	            this.state = 385;
	            this.match(smilesParser.T__65);
	            break;

	        case 65:
	            this.enterOuterAlt(localctx, 65);
	            this.state = 386;
	            this.match(smilesParser.T__66);
	            break;

	        case 66:
	            this.enterOuterAlt(localctx, 66);
	            this.state = 387;
	            this.match(smilesParser.T__67);
	            break;

	        case 67:
	            this.enterOuterAlt(localctx, 67);
	            this.state = 388;
	            this.match(smilesParser.T__68);
	            break;

	        case 68:
	            this.enterOuterAlt(localctx, 68);
	            this.state = 389;
	            this.match(smilesParser.T__69);
	            break;

	        case 69:
	            this.enterOuterAlt(localctx, 69);
	            this.state = 390;
	            this.match(smilesParser.T__70);
	            break;

	        case 70:
	            this.enterOuterAlt(localctx, 70);
	            this.state = 391;
	            this.match(smilesParser.T__71);
	            break;

	        case 71:
	            this.enterOuterAlt(localctx, 71);
	            this.state = 392;
	            _la = this._input.LA(1);
	            if(!(_la===73 || _la===74)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 393;
	            this.match(smilesParser.DIGIT);
	            this.state = 394;
	            this.match(smilesParser.DIGIT);
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



	hcount() {
	    let localctx = new HcountContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, smilesParser.RULE_hcount);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(smilesParser.UH);
	        this.state = 399;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===144) {
	            this.state = 398;
	            this.match(smilesParser.DIGIT);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	charge() {
	    let localctx = new ChargeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, smilesParser.RULE_charge);
	    var _la = 0;
	    try {
	        this.state = 410;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 75:
	        case 76:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 401;
	            _la = this._input.LA(1);
	            if(!(_la===75 || _la===76)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 403;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	            if(la_===1) {
	                this.state = 402;
	                this.match(smilesParser.DIGIT);

	            }
	            this.state = 406;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===144) {
	                this.state = 405;
	                this.match(smilesParser.DIGIT);
	            }

	            break;
	        case 77:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 408;
	            this.match(smilesParser.T__76);
	            break;
	        case 78:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 409;
	            this.match(smilesParser.T__77);
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



	class_() {
	    let localctx = new Class_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, smilesParser.RULE_class_);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(smilesParser.T__78);
	        this.state = 414; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 413;
	            this.match(smilesParser.DIGIT);
	            this.state = 416; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===144);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bond() {
	    let localctx = new BondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, smilesParser.RULE_bond);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        _la = this._input.LA(1);
	        if(!(((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 505) !== 0))) {
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



	ringbond() {
	    let localctx = new RingbondContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, smilesParser.RULE_ringbond);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 505) !== 0)) {
	            this.state = 420;
	            this.bond();
	        }

	        this.state = 427;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 144:
	            this.state = 423;
	            this.match(smilesParser.DIGIT);
	            break;
	        case 85:
	            this.state = 424;
	            this.match(smilesParser.T__84);
	            this.state = 425;
	            this.match(smilesParser.DIGIT);
	            this.state = 426;
	            this.match(smilesParser.DIGIT);
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



	branched_atom() {
	    let localctx = new Branched_atomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, smilesParser.RULE_branched_atom);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.atom();
	        this.state = 433;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 430;
	                this.ringbond(); 
	            }
	            this.state = 435;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===86) {
	            this.state = 436;
	            this.branch();
	            this.state = 441;
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



	branch() {
	    let localctx = new BranchContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, smilesParser.RULE_branch);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.match(smilesParser.T__85);
	        this.state = 445;
	        this._errHandler.sync(this);
	        switch (this._input.LA(1)) {
	        case 76:
	        case 79:
	        case 80:
	        case 81:
	        case 82:
	        case 83:
	        case 84:
	        	this.state = 443;
	        	this.bond();
	        	break;
	        case 140:
	        	this.state = 444;
	        	this.match(smilesParser.DOT);
	        	break;
	        case 1:
	        case 2:
	        case 89:
	        case 90:
	        case 101:
	        case 102:
	        case 103:
	        case 106:
	        case 115:
	        case 116:
	        case 119:
	        case 122:
	        case 127:
	        case 128:
	        case 129:
	        case 132:
	        	break;
	        default:
	        	break;
	        }
	        this.state = 447;
	        this.chain();
	        this.state = 448;
	        this.match(smilesParser.T__86);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chain() {
	    let localctx = new ChainContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, smilesParser.RULE_chain);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 450;
	        this.branched_atom();
	        this.state = 458;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===2 || ((((_la - 76)) & ~0x1f) === 0 && ((1 << (_la - 76)) & 1308647929) !== 0) || ((((_la - 115)) & ~0x1f) === 0 && ((1 << (_la - 115)) & 33714323) !== 0)) {
	            this.state = 453;
	            this._errHandler.sync(this);
	            switch (this._input.LA(1)) {
	            case 76:
	            case 79:
	            case 80:
	            case 81:
	            case 82:
	            case 83:
	            case 84:
	            	this.state = 451;
	            	this.bond();
	            	break;
	            case 140:
	            	this.state = 452;
	            	this.match(smilesParser.DOT);
	            	break;
	            case 1:
	            case 2:
	            case 89:
	            case 90:
	            case 101:
	            case 102:
	            case 103:
	            case 106:
	            case 115:
	            case 116:
	            case 119:
	            case 122:
	            case 127:
	            case 128:
	            case 129:
	            case 132:
	            	break;
	            default:
	            	break;
	            }
	            this.state = 455;
	            this.branched_atom();
	            this.state = 460;
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



	terminator() {
	    let localctx = new TerminatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, smilesParser.RULE_terminator);
	    try {
	        this.state = 465;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 143:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 461;
	            this.match(smilesParser.SPACE);
	            this.state = 462;
	            this.match(smilesParser.TAB);
	            break;
	        case 141:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 463;
	            this.match(smilesParser.LINEFEED);
	            break;
	        case 142:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 464;
	            this.match(smilesParser.CARRIAGE_RETURN);
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

smilesParser.EOF = antlr4.Token.EOF;
smilesParser.T__0 = 1;
smilesParser.T__1 = 2;
smilesParser.T__2 = 3;
smilesParser.T__3 = 4;
smilesParser.T__4 = 5;
smilesParser.T__5 = 6;
smilesParser.T__6 = 7;
smilesParser.T__7 = 8;
smilesParser.T__8 = 9;
smilesParser.T__9 = 10;
smilesParser.T__10 = 11;
smilesParser.T__11 = 12;
smilesParser.T__12 = 13;
smilesParser.T__13 = 14;
smilesParser.T__14 = 15;
smilesParser.T__15 = 16;
smilesParser.T__16 = 17;
smilesParser.T__17 = 18;
smilesParser.T__18 = 19;
smilesParser.T__19 = 20;
smilesParser.T__20 = 21;
smilesParser.T__21 = 22;
smilesParser.T__22 = 23;
smilesParser.T__23 = 24;
smilesParser.T__24 = 25;
smilesParser.T__25 = 26;
smilesParser.T__26 = 27;
smilesParser.T__27 = 28;
smilesParser.T__28 = 29;
smilesParser.T__29 = 30;
smilesParser.T__30 = 31;
smilesParser.T__31 = 32;
smilesParser.T__32 = 33;
smilesParser.T__33 = 34;
smilesParser.T__34 = 35;
smilesParser.T__35 = 36;
smilesParser.T__36 = 37;
smilesParser.T__37 = 38;
smilesParser.T__38 = 39;
smilesParser.T__39 = 40;
smilesParser.T__40 = 41;
smilesParser.T__41 = 42;
smilesParser.T__42 = 43;
smilesParser.T__43 = 44;
smilesParser.T__44 = 45;
smilesParser.T__45 = 46;
smilesParser.T__46 = 47;
smilesParser.T__47 = 48;
smilesParser.T__48 = 49;
smilesParser.T__49 = 50;
smilesParser.T__50 = 51;
smilesParser.T__51 = 52;
smilesParser.T__52 = 53;
smilesParser.T__53 = 54;
smilesParser.T__54 = 55;
smilesParser.T__55 = 56;
smilesParser.T__56 = 57;
smilesParser.T__57 = 58;
smilesParser.T__58 = 59;
smilesParser.T__59 = 60;
smilesParser.T__60 = 61;
smilesParser.T__61 = 62;
smilesParser.T__62 = 63;
smilesParser.T__63 = 64;
smilesParser.T__64 = 65;
smilesParser.T__65 = 66;
smilesParser.T__66 = 67;
smilesParser.T__67 = 68;
smilesParser.T__68 = 69;
smilesParser.T__69 = 70;
smilesParser.T__70 = 71;
smilesParser.T__71 = 72;
smilesParser.T__72 = 73;
smilesParser.T__73 = 74;
smilesParser.T__74 = 75;
smilesParser.T__75 = 76;
smilesParser.T__76 = 77;
smilesParser.T__77 = 78;
smilesParser.T__78 = 79;
smilesParser.T__79 = 80;
smilesParser.T__80 = 81;
smilesParser.T__81 = 82;
smilesParser.T__82 = 83;
smilesParser.T__83 = 84;
smilesParser.T__84 = 85;
smilesParser.T__85 = 86;
smilesParser.T__86 = 87;
smilesParser.LA = 88;
smilesParser.LB = 89;
smilesParser.LC = 90;
smilesParser.LD = 91;
smilesParser.LE = 92;
smilesParser.LF = 93;
smilesParser.LG = 94;
smilesParser.LH = 95;
smilesParser.LI = 96;
smilesParser.LJ = 97;
smilesParser.LK = 98;
smilesParser.LL = 99;
smilesParser.LM = 100;
smilesParser.LN = 101;
smilesParser.LO = 102;
smilesParser.LP = 103;
smilesParser.LQ = 104;
smilesParser.LR = 105;
smilesParser.LS = 106;
smilesParser.LT = 107;
smilesParser.LU = 108;
smilesParser.LV = 109;
smilesParser.LW = 110;
smilesParser.LX = 111;
smilesParser.LY = 112;
smilesParser.LZ = 113;
smilesParser.UA = 114;
smilesParser.UB = 115;
smilesParser.UC = 116;
smilesParser.UD = 117;
smilesParser.UE = 118;
smilesParser.UF = 119;
smilesParser.UG = 120;
smilesParser.UH = 121;
smilesParser.UI = 122;
smilesParser.UJ = 123;
smilesParser.UK = 124;
smilesParser.UL = 125;
smilesParser.UM = 126;
smilesParser.UN = 127;
smilesParser.UO = 128;
smilesParser.UP = 129;
smilesParser.UQ = 130;
smilesParser.UR = 131;
smilesParser.US = 132;
smilesParser.UT = 133;
smilesParser.UU = 134;
smilesParser.UV = 135;
smilesParser.UW = 136;
smilesParser.UX = 137;
smilesParser.UY = 138;
smilesParser.UZ = 139;
smilesParser.DOT = 140;
smilesParser.LINEFEED = 141;
smilesParser.CARRIAGE_RETURN = 142;
smilesParser.SPACE = 143;
smilesParser.DIGIT = 144;
smilesParser.TAB = 145;

smilesParser.RULE_smiles = 0;
smilesParser.RULE_atom = 1;
smilesParser.RULE_aliphatic_organic = 2;
smilesParser.RULE_aromatic_organic = 3;
smilesParser.RULE_bracket_atom = 4;
smilesParser.RULE_isotope = 5;
smilesParser.RULE_symbol = 6;
smilesParser.RULE_element_symbols = 7;
smilesParser.RULE_aromatic_symbol = 8;
smilesParser.RULE_chiral = 9;
smilesParser.RULE_hcount = 10;
smilesParser.RULE_charge = 11;
smilesParser.RULE_class_ = 12;
smilesParser.RULE_bond = 13;
smilesParser.RULE_ringbond = 14;
smilesParser.RULE_branched_atom = 15;
smilesParser.RULE_branch = 16;
smilesParser.RULE_chain = 17;
smilesParser.RULE_terminator = 18;

class SmilesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_smiles;
    }

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	EOF() {
	    return this.getToken(smilesParser.EOF, 0);
	};

	terminator() {
	    return this.getTypedRuleContext(TerminatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterSmiles(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitSmiles(this);
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
        this.ruleIndex = smilesParser.RULE_atom;
    }

	bracket_atom() {
	    return this.getTypedRuleContext(Bracket_atomContext,0);
	};

	aliphatic_organic() {
	    return this.getTypedRuleContext(Aliphatic_organicContext,0);
	};

	aromatic_organic() {
	    return this.getTypedRuleContext(Aromatic_organicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterAtom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitAtom(this);
		}
	}


}



class Aliphatic_organicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_aliphatic_organic;
    }

	UB() {
	    return this.getToken(smilesParser.UB, 0);
	};

	UC() {
	    return this.getToken(smilesParser.UC, 0);
	};

	UN() {
	    return this.getToken(smilesParser.UN, 0);
	};

	UO() {
	    return this.getToken(smilesParser.UO, 0);
	};

	US() {
	    return this.getToken(smilesParser.US, 0);
	};

	UP() {
	    return this.getToken(smilesParser.UP, 0);
	};

	UF() {
	    return this.getToken(smilesParser.UF, 0);
	};

	LL() {
	    return this.getToken(smilesParser.LL, 0);
	};

	LR() {
	    return this.getToken(smilesParser.LR, 0);
	};

	UI() {
	    return this.getToken(smilesParser.UI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterAliphatic_organic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitAliphatic_organic(this);
		}
	}


}



class Aromatic_organicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_aromatic_organic;
    }

	LB() {
	    return this.getToken(smilesParser.LB, 0);
	};

	LC() {
	    return this.getToken(smilesParser.LC, 0);
	};

	LN() {
	    return this.getToken(smilesParser.LN, 0);
	};

	LO() {
	    return this.getToken(smilesParser.LO, 0);
	};

	LS() {
	    return this.getToken(smilesParser.LS, 0);
	};

	LP() {
	    return this.getToken(smilesParser.LP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterAromatic_organic(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitAromatic_organic(this);
		}
	}


}



class Bracket_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_bracket_atom;
    }

	symbol() {
	    return this.getTypedRuleContext(SymbolContext,0);
	};

	isotope() {
	    return this.getTypedRuleContext(IsotopeContext,0);
	};

	chiral() {
	    return this.getTypedRuleContext(ChiralContext,0);
	};

	hcount() {
	    return this.getTypedRuleContext(HcountContext,0);
	};

	charge() {
	    return this.getTypedRuleContext(ChargeContext,0);
	};

	class_() {
	    return this.getTypedRuleContext(Class_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterBracket_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitBracket_atom(this);
		}
	}


}



class IsotopeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_isotope;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(smilesParser.DIGIT);
	    } else {
	        return this.getToken(smilesParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterIsotope(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitIsotope(this);
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
        this.ruleIndex = smilesParser.RULE_symbol;
    }

	element_symbols() {
	    return this.getTypedRuleContext(Element_symbolsContext,0);
	};

	aromatic_symbol() {
	    return this.getTypedRuleContext(Aromatic_symbolContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitSymbol(this);
		}
	}


}



class Element_symbolsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_element_symbols;
    }

	UH() {
	    return this.getToken(smilesParser.UH, 0);
	};

	LE() {
	    return this.getToken(smilesParser.LE, 0);
	};

	UL() {
	    return this.getToken(smilesParser.UL, 0);
	};

	LI() {
	    return this.getToken(smilesParser.LI, 0);
	};

	UB() {
	    return this.getToken(smilesParser.UB, 0);
	};

	UC() {
	    return this.getToken(smilesParser.UC, 0);
	};

	UN() {
	    return this.getToken(smilesParser.UN, 0);
	};

	UO() {
	    return this.getToken(smilesParser.UO, 0);
	};

	UF() {
	    return this.getToken(smilesParser.UF, 0);
	};

	LA() {
	    return this.getToken(smilesParser.LA, 0);
	};

	UM() {
	    return this.getToken(smilesParser.UM, 0);
	};

	LG() {
	    return this.getToken(smilesParser.LG, 0);
	};

	UA() {
	    return this.getToken(smilesParser.UA, 0);
	};

	LL() {
	    return this.getToken(smilesParser.LL, 0);
	};

	US() {
	    return this.getToken(smilesParser.US, 0);
	};

	UP() {
	    return this.getToken(smilesParser.UP, 0);
	};

	LR() {
	    return this.getToken(smilesParser.LR, 0);
	};

	UK() {
	    return this.getToken(smilesParser.UK, 0);
	};

	LC() {
	    return this.getToken(smilesParser.LC, 0);
	};

	UT() {
	    return this.getToken(smilesParser.UT, 0);
	};

	UV() {
	    return this.getToken(smilesParser.UV, 0);
	};

	LN() {
	    return this.getToken(smilesParser.LN, 0);
	};

	LO() {
	    return this.getToken(smilesParser.LO, 0);
	};

	LU() {
	    return this.getToken(smilesParser.LU, 0);
	};

	UZ() {
	    return this.getToken(smilesParser.UZ, 0);
	};

	UG() {
	    return this.getToken(smilesParser.UG, 0);
	};

	LS() {
	    return this.getToken(smilesParser.LS, 0);
	};

	UR() {
	    return this.getToken(smilesParser.UR, 0);
	};

	LB() {
	    return this.getToken(smilesParser.LB, 0);
	};

	UY() {
	    return this.getToken(smilesParser.UY, 0);
	};

	LH() {
	    return this.getToken(smilesParser.LH, 0);
	};

	LD() {
	    return this.getToken(smilesParser.LD, 0);
	};

	UI() {
	    return this.getToken(smilesParser.UI, 0);
	};

	UX() {
	    return this.getToken(smilesParser.UX, 0);
	};

	LF() {
	    return this.getToken(smilesParser.LF, 0);
	};

	UW() {
	    return this.getToken(smilesParser.UW, 0);
	};

	LT() {
	    return this.getToken(smilesParser.LT, 0);
	};

	UD() {
	    return this.getToken(smilesParser.UD, 0);
	};

	LV() {
	    return this.getToken(smilesParser.LV, 0);
	};

	LM() {
	    return this.getToken(smilesParser.LM, 0);
	};

	UE() {
	    return this.getToken(smilesParser.UE, 0);
	};

	LY() {
	    return this.getToken(smilesParser.LY, 0);
	};

	UU() {
	    return this.getToken(smilesParser.UU, 0);
	};

	LP() {
	    return this.getToken(smilesParser.LP, 0);
	};

	LK() {
	    return this.getToken(smilesParser.LK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterElement_symbols(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitElement_symbols(this);
		}
	}


}



class Aromatic_symbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_aromatic_symbol;
    }

	LC() {
	    return this.getToken(smilesParser.LC, 0);
	};

	LN() {
	    return this.getToken(smilesParser.LN, 0);
	};

	LO() {
	    return this.getToken(smilesParser.LO, 0);
	};

	LP() {
	    return this.getToken(smilesParser.LP, 0);
	};

	LS() {
	    return this.getToken(smilesParser.LS, 0);
	};

	LE() {
	    return this.getToken(smilesParser.LE, 0);
	};

	LA() {
	    return this.getToken(smilesParser.LA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterAromatic_symbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitAromatic_symbol(this);
		}
	}


}



class ChiralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_chiral;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(smilesParser.DIGIT);
	    } else {
	        return this.getToken(smilesParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterChiral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitChiral(this);
		}
	}


}



class HcountContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_hcount;
    }

	UH() {
	    return this.getToken(smilesParser.UH, 0);
	};

	DIGIT() {
	    return this.getToken(smilesParser.DIGIT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterHcount(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitHcount(this);
		}
	}


}



class ChargeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_charge;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(smilesParser.DIGIT);
	    } else {
	        return this.getToken(smilesParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterCharge(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitCharge(this);
		}
	}


}



class Class_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_class_;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(smilesParser.DIGIT);
	    } else {
	        return this.getToken(smilesParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterClass_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitClass_(this);
		}
	}


}



class BondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_bond;
    }


	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterBond(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitBond(this);
		}
	}


}



class RingbondContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_ringbond;
    }

	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(smilesParser.DIGIT);
	    } else {
	        return this.getToken(smilesParser.DIGIT, i);
	    }
	};


	bond() {
	    return this.getTypedRuleContext(BondContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterRingbond(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitRingbond(this);
		}
	}


}



class Branched_atomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_branched_atom;
    }

	atom() {
	    return this.getTypedRuleContext(AtomContext,0);
	};

	ringbond = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RingbondContext);
	    } else {
	        return this.getTypedRuleContext(RingbondContext,i);
	    }
	};

	branch = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BranchContext);
	    } else {
	        return this.getTypedRuleContext(BranchContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterBranched_atom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitBranched_atom(this);
		}
	}


}



class BranchContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_branch;
    }

	chain() {
	    return this.getTypedRuleContext(ChainContext,0);
	};

	bond() {
	    return this.getTypedRuleContext(BondContext,0);
	};

	DOT() {
	    return this.getToken(smilesParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterBranch(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitBranch(this);
		}
	}


}



class ChainContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = smilesParser.RULE_chain;
    }

	branched_atom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Branched_atomContext);
	    } else {
	        return this.getTypedRuleContext(Branched_atomContext,i);
	    }
	};

	bond = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BondContext);
	    } else {
	        return this.getTypedRuleContext(BondContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(smilesParser.DOT);
	    } else {
	        return this.getToken(smilesParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterChain(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitChain(this);
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
        this.ruleIndex = smilesParser.RULE_terminator;
    }

	SPACE() {
	    return this.getToken(smilesParser.SPACE, 0);
	};

	TAB() {
	    return this.getToken(smilesParser.TAB, 0);
	};

	LINEFEED() {
	    return this.getToken(smilesParser.LINEFEED, 0);
	};

	CARRIAGE_RETURN() {
	    return this.getToken(smilesParser.CARRIAGE_RETURN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.enterTerminator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof smilesListener ) {
	        listener.exitTerminator(this);
		}
	}


}




smilesParser.SmilesContext = SmilesContext; 
smilesParser.AtomContext = AtomContext; 
smilesParser.Aliphatic_organicContext = Aliphatic_organicContext; 
smilesParser.Aromatic_organicContext = Aromatic_organicContext; 
smilesParser.Bracket_atomContext = Bracket_atomContext; 
smilesParser.IsotopeContext = IsotopeContext; 
smilesParser.SymbolContext = SymbolContext; 
smilesParser.Element_symbolsContext = Element_symbolsContext; 
smilesParser.Aromatic_symbolContext = Aromatic_symbolContext; 
smilesParser.ChiralContext = ChiralContext; 
smilesParser.HcountContext = HcountContext; 
smilesParser.ChargeContext = ChargeContext; 
smilesParser.Class_Context = Class_Context; 
smilesParser.BondContext = BondContext; 
smilesParser.RingbondContext = RingbondContext; 
smilesParser.Branched_atomContext = Branched_atomContext; 
smilesParser.BranchContext = BranchContext; 
smilesParser.ChainContext = ChainContext; 
smilesParser.TerminatorContext = TerminatorContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
