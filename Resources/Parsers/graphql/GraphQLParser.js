// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/graphql/GraphQL.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GraphQLListener from './GraphQLListener.js';
const serializedATN = [4,1,66,707,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,
63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,
2,71,7,71,2,72,7,72,1,0,4,0,148,8,0,11,0,12,0,149,1,0,1,0,1,1,1,1,1,1,3,
1,157,8,1,1,2,4,2,160,8,2,11,2,12,2,161,1,3,1,3,3,3,166,8,3,1,4,1,4,3,4,
170,8,4,1,4,3,4,173,8,4,1,4,3,4,176,8,4,1,4,1,4,1,4,3,4,181,8,4,1,5,1,5,
1,6,1,6,4,6,187,8,6,11,6,12,6,188,1,6,1,6,1,7,1,7,1,7,3,7,196,8,7,1,8,3,
8,199,8,8,1,8,1,8,3,8,203,8,8,1,8,3,8,206,8,8,1,8,3,8,209,8,8,1,9,1,9,4,
9,213,8,9,11,9,12,9,214,1,9,1,9,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,12,
1,12,1,12,3,12,229,8,12,1,13,1,13,1,13,1,13,3,13,235,8,13,1,13,1,13,1,14,
1,14,1,15,1,15,1,15,1,16,1,16,3,16,246,8,16,1,16,3,16,249,8,16,1,16,1,16,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,262,8,17,1,18,1,18,1,19,
1,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,24,1,24,1,24,4,24,280,
8,24,11,24,12,24,281,1,24,1,24,3,24,286,8,24,1,25,1,25,5,25,290,8,25,10,
25,12,25,293,9,25,1,25,1,25,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,
4,28,306,8,28,11,28,12,28,307,1,28,1,28,1,29,1,29,1,29,1,29,3,29,316,8,29,
1,30,1,30,1,30,1,31,1,31,3,31,323,8,31,1,31,1,31,3,31,327,8,31,3,31,329,
8,31,1,32,1,32,1,33,1,33,1,33,1,33,1,34,4,34,338,8,34,11,34,12,34,339,1,
35,1,35,1,35,3,35,345,8,35,1,36,4,36,348,8,36,11,36,12,36,349,1,37,1,37,
1,37,3,37,355,8,37,1,38,4,38,358,8,38,11,38,12,38,359,1,39,1,39,3,39,364,
8,39,1,40,1,40,3,40,368,8,40,1,40,1,40,4,40,372,8,40,11,40,12,40,373,1,40,
1,40,1,41,1,41,1,41,1,41,1,42,1,42,1,42,3,42,385,8,42,1,42,1,42,4,42,389,
8,42,11,42,12,42,390,1,42,1,42,1,42,1,42,1,42,3,42,398,8,42,1,43,1,43,1,
44,1,44,1,44,1,44,1,44,1,44,3,44,408,8,44,1,45,1,45,1,45,1,45,1,45,1,45,
3,45,416,8,45,1,46,3,46,419,8,46,1,46,1,46,1,46,3,46,424,8,46,1,47,1,47,
1,47,1,47,1,47,1,48,3,48,432,8,48,1,48,1,48,1,48,3,48,437,8,48,1,48,3,48,
440,8,48,1,48,3,48,443,8,48,1,49,1,49,1,49,3,49,448,8,49,1,49,1,49,1,49,
1,49,1,49,5,49,455,8,49,10,49,12,49,458,9,49,1,50,1,50,4,50,462,8,50,11,
50,12,50,463,1,50,1,50,1,51,3,51,469,8,51,1,51,1,51,3,51,473,8,51,1,51,1,
51,1,51,3,51,478,8,51,1,52,1,52,4,52,482,8,52,11,52,12,52,483,1,52,1,52,
1,53,3,53,489,8,53,1,53,1,53,1,53,1,53,3,53,495,8,53,1,53,3,53,498,8,53,
1,54,1,54,1,54,1,54,3,54,504,8,54,1,54,3,54,507,8,54,1,54,1,54,1,54,1,54,
1,54,1,54,3,54,515,8,54,1,54,1,54,1,54,1,54,1,54,1,54,1,54,3,54,524,8,54,
1,55,3,55,527,8,55,1,55,1,55,1,55,3,55,532,8,55,1,55,3,55,535,8,55,1,55,
3,55,538,8,55,1,56,1,56,1,56,1,56,3,56,544,8,56,1,56,3,56,547,8,56,1,56,
1,56,1,56,1,56,1,56,1,56,3,56,555,8,56,1,56,1,56,3,56,559,8,56,1,57,3,57,
562,8,57,1,57,1,57,1,57,3,57,567,8,57,1,57,3,57,570,8,57,1,58,1,58,3,58,
574,8,58,1,58,1,58,1,58,5,58,579,8,58,10,58,12,58,582,9,58,1,59,1,59,1,59,
1,59,3,59,588,8,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,597,8,59,1,60,
3,60,600,8,60,1,60,1,60,1,60,3,60,605,8,60,1,60,3,60,608,8,60,1,61,1,61,
4,61,612,8,61,11,61,12,61,613,1,61,1,61,1,62,3,62,619,8,62,1,62,1,62,3,62,
623,8,62,1,63,1,63,1,63,1,63,3,63,629,8,63,1,63,1,63,1,63,1,63,1,63,1,63,
1,63,3,63,638,8,63,1,64,3,64,641,8,64,1,64,1,64,1,64,3,64,646,8,64,1,64,
3,64,649,8,64,1,65,1,65,4,65,653,8,65,11,65,12,65,654,1,65,1,65,1,66,1,66,
1,66,1,66,3,66,663,8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,672,8,66,
1,67,3,67,675,8,67,1,67,1,67,1,67,1,67,3,67,681,8,67,1,67,3,67,684,8,67,
1,67,1,67,1,67,1,68,1,68,1,68,5,68,692,8,68,10,68,12,68,695,9,68,1,69,1,
69,3,69,699,8,69,1,70,1,70,1,71,1,71,1,72,1,72,1,72,0,1,98,73,0,2,4,6,8,
10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,
58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,
106,108,110,112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,
142,144,0,5,1,0,1,3,1,0,12,13,1,0,54,55,1,0,34,41,1,0,42,52,747,0,147,1,
0,0,0,2,156,1,0,0,0,4,159,1,0,0,0,6,165,1,0,0,0,8,180,1,0,0,0,10,182,1,0,
0,0,12,184,1,0,0,0,14,195,1,0,0,0,16,198,1,0,0,0,18,210,1,0,0,0,20,218,1,
0,0,0,22,222,1,0,0,0,24,225,1,0,0,0,26,230,1,0,0,0,28,238,1,0,0,0,30,240,
1,0,0,0,32,243,1,0,0,0,34,261,1,0,0,0,36,263,1,0,0,0,38,265,1,0,0,0,40,267,
1,0,0,0,42,269,1,0,0,0,44,271,1,0,0,0,46,273,1,0,0,0,48,285,1,0,0,0,50,287,
1,0,0,0,52,296,1,0,0,0,54,300,1,0,0,0,56,303,1,0,0,0,58,311,1,0,0,0,60,317,
1,0,0,0,62,328,1,0,0,0,64,330,1,0,0,0,66,332,1,0,0,0,68,337,1,0,0,0,70,341,
1,0,0,0,72,347,1,0,0,0,74,354,1,0,0,0,76,357,1,0,0,0,78,363,1,0,0,0,80,365,
1,0,0,0,82,377,1,0,0,0,84,397,1,0,0,0,86,399,1,0,0,0,88,407,1,0,0,0,90,415,
1,0,0,0,92,418,1,0,0,0,94,425,1,0,0,0,96,431,1,0,0,0,98,444,1,0,0,0,100,
459,1,0,0,0,102,468,1,0,0,0,104,479,1,0,0,0,106,488,1,0,0,0,108,523,1,0,
0,0,110,526,1,0,0,0,112,558,1,0,0,0,114,561,1,0,0,0,116,571,1,0,0,0,118,
596,1,0,0,0,120,599,1,0,0,0,122,609,1,0,0,0,124,618,1,0,0,0,126,637,1,0,
0,0,128,640,1,0,0,0,130,650,1,0,0,0,132,671,1,0,0,0,134,674,1,0,0,0,136,
688,1,0,0,0,138,698,1,0,0,0,140,700,1,0,0,0,142,702,1,0,0,0,144,704,1,0,
0,0,146,148,3,2,1,0,147,146,1,0,0,0,148,149,1,0,0,0,149,147,1,0,0,0,149,
150,1,0,0,0,150,151,1,0,0,0,151,152,5,0,0,1,152,1,1,0,0,0,153,157,3,4,2,
0,154,157,3,72,36,0,155,157,3,76,38,0,156,153,1,0,0,0,156,154,1,0,0,0,156,
155,1,0,0,0,157,3,1,0,0,0,158,160,3,6,3,0,159,158,1,0,0,0,160,161,1,0,0,
0,161,159,1,0,0,0,161,162,1,0,0,0,162,5,1,0,0,0,163,166,3,8,4,0,164,166,
3,26,13,0,165,163,1,0,0,0,165,164,1,0,0,0,166,7,1,0,0,0,167,169,3,10,5,0,
168,170,3,144,72,0,169,168,1,0,0,0,169,170,1,0,0,0,170,172,1,0,0,0,171,173,
3,56,28,0,172,171,1,0,0,0,172,173,1,0,0,0,173,175,1,0,0,0,174,176,3,68,34,
0,175,174,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,3,12,6,0,178,181,
1,0,0,0,179,181,3,12,6,0,180,167,1,0,0,0,180,179,1,0,0,0,181,9,1,0,0,0,182,
183,7,0,0,0,183,11,1,0,0,0,184,186,5,4,0,0,185,187,3,14,7,0,186,185,1,0,
0,0,187,188,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,190,1,0,0,0,190,
191,5,5,0,0,191,13,1,0,0,0,192,196,3,16,8,0,193,196,3,24,12,0,194,196,3,
32,16,0,195,192,1,0,0,0,195,193,1,0,0,0,195,194,1,0,0,0,196,15,1,0,0,0,197,
199,3,22,11,0,198,197,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,202,3,
144,72,0,201,203,3,18,9,0,202,201,1,0,0,0,202,203,1,0,0,0,203,205,1,0,0,
0,204,206,3,68,34,0,205,204,1,0,0,0,205,206,1,0,0,0,206,208,1,0,0,0,207,
209,3,12,6,0,208,207,1,0,0,0,208,209,1,0,0,0,209,17,1,0,0,0,210,212,5,6,
0,0,211,213,3,20,10,0,212,211,1,0,0,0,213,214,1,0,0,0,214,212,1,0,0,0,214,
215,1,0,0,0,215,216,1,0,0,0,216,217,5,7,0,0,217,19,1,0,0,0,218,219,3,144,
72,0,219,220,5,8,0,0,220,221,3,34,17,0,221,21,1,0,0,0,222,223,3,144,72,0,
223,224,5,8,0,0,224,23,1,0,0,0,225,226,5,9,0,0,226,228,3,28,14,0,227,229,
3,68,34,0,228,227,1,0,0,0,228,229,1,0,0,0,229,25,1,0,0,0,230,231,5,10,0,
0,231,232,3,28,14,0,232,234,3,30,15,0,233,235,3,68,34,0,234,233,1,0,0,0,
234,235,1,0,0,0,235,236,1,0,0,0,236,237,3,12,6,0,237,27,1,0,0,0,238,239,
3,144,72,0,239,29,1,0,0,0,240,241,5,11,0,0,241,242,3,64,32,0,242,31,1,0,
0,0,243,245,5,9,0,0,244,246,3,30,15,0,245,244,1,0,0,0,245,246,1,0,0,0,246,
248,1,0,0,0,247,249,3,68,34,0,248,247,1,0,0,0,248,249,1,0,0,0,249,250,1,
0,0,0,250,251,3,12,6,0,251,33,1,0,0,0,252,262,3,54,27,0,253,262,3,36,18,
0,254,262,3,38,19,0,255,262,3,42,21,0,256,262,3,40,20,0,257,262,3,44,22,
0,258,262,3,46,23,0,259,262,3,48,24,0,260,262,3,50,25,0,261,252,1,0,0,0,
261,253,1,0,0,0,261,254,1,0,0,0,261,255,1,0,0,0,261,256,1,0,0,0,261,257,
1,0,0,0,261,258,1,0,0,0,261,259,1,0,0,0,261,260,1,0,0,0,262,35,1,0,0,0,263,
264,5,58,0,0,264,37,1,0,0,0,265,266,5,57,0,0,266,39,1,0,0,0,267,268,7,1,
0,0,268,41,1,0,0,0,269,270,7,2,0,0,270,43,1,0,0,0,271,272,5,14,0,0,272,45,
1,0,0,0,273,274,3,144,72,0,274,47,1,0,0,0,275,276,5,15,0,0,276,286,5,16,
0,0,277,279,5,15,0,0,278,280,3,34,17,0,279,278,1,0,0,0,280,281,1,0,0,0,281,
279,1,0,0,0,281,282,1,0,0,0,282,283,1,0,0,0,283,284,5,16,0,0,284,286,1,0,
0,0,285,275,1,0,0,0,285,277,1,0,0,0,286,49,1,0,0,0,287,291,5,4,0,0,288,290,
3,52,26,0,289,288,1,0,0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,
0,292,294,1,0,0,0,293,291,1,0,0,0,294,295,5,5,0,0,295,51,1,0,0,0,296,297,
3,144,72,0,297,298,5,8,0,0,298,299,3,34,17,0,299,53,1,0,0,0,300,301,5,17,
0,0,301,302,3,144,72,0,302,55,1,0,0,0,303,305,5,6,0,0,304,306,3,58,29,0,
305,304,1,0,0,0,306,307,1,0,0,0,307,305,1,0,0,0,307,308,1,0,0,0,308,309,
1,0,0,0,309,310,5,7,0,0,310,57,1,0,0,0,311,312,3,54,27,0,312,313,5,8,0,0,
313,315,3,62,31,0,314,316,3,60,30,0,315,314,1,0,0,0,315,316,1,0,0,0,316,
59,1,0,0,0,317,318,5,18,0,0,318,319,3,34,17,0,319,61,1,0,0,0,320,322,3,64,
32,0,321,323,5,19,0,0,322,321,1,0,0,0,322,323,1,0,0,0,323,329,1,0,0,0,324,
326,3,66,33,0,325,327,5,19,0,0,326,325,1,0,0,0,326,327,1,0,0,0,327,329,1,
0,0,0,328,320,1,0,0,0,328,324,1,0,0,0,329,63,1,0,0,0,330,331,3,144,72,0,
331,65,1,0,0,0,332,333,5,15,0,0,333,334,3,62,31,0,334,335,5,16,0,0,335,67,
1,0,0,0,336,338,3,70,35,0,337,336,1,0,0,0,338,339,1,0,0,0,339,337,1,0,0,
0,339,340,1,0,0,0,340,69,1,0,0,0,341,342,5,20,0,0,342,344,3,144,72,0,343,
345,3,18,9,0,344,343,1,0,0,0,344,345,1,0,0,0,345,71,1,0,0,0,346,348,3,74,
37,0,347,346,1,0,0,0,348,349,1,0,0,0,349,347,1,0,0,0,349,350,1,0,0,0,350,
73,1,0,0,0,351,355,3,80,40,0,352,355,3,88,44,0,353,355,3,134,67,0,354,351,
1,0,0,0,354,352,1,0,0,0,354,353,1,0,0,0,355,75,1,0,0,0,356,358,3,78,39,0,
357,356,1,0,0,0,358,359,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,77,1,
0,0,0,361,364,3,84,42,0,362,364,3,90,45,0,363,361,1,0,0,0,363,362,1,0,0,
0,364,79,1,0,0,0,365,367,5,21,0,0,366,368,3,68,34,0,367,366,1,0,0,0,367,
368,1,0,0,0,368,369,1,0,0,0,369,371,5,4,0,0,370,372,3,82,41,0,371,370,1,
0,0,0,372,373,1,0,0,0,373,371,1,0,0,0,373,374,1,0,0,0,374,375,1,0,0,0,375,
376,5,5,0,0,376,81,1,0,0,0,377,378,3,10,5,0,378,379,5,8,0,0,379,380,3,64,
32,0,380,83,1,0,0,0,381,382,5,22,0,0,382,384,5,21,0,0,383,385,3,68,34,0,
384,383,1,0,0,0,384,385,1,0,0,0,385,386,1,0,0,0,386,388,5,4,0,0,387,389,
3,82,41,0,388,387,1,0,0,0,389,390,1,0,0,0,390,388,1,0,0,0,390,391,1,0,0,
0,391,392,1,0,0,0,392,393,5,5,0,0,393,398,1,0,0,0,394,395,5,22,0,0,395,396,
5,21,0,0,396,398,3,68,34,0,397,381,1,0,0,0,397,394,1,0,0,0,398,85,1,0,0,
0,399,400,3,42,21,0,400,87,1,0,0,0,401,408,3,92,46,0,402,408,3,96,48,0,403,
408,3,110,55,0,404,408,3,114,57,0,405,408,3,120,60,0,406,408,3,128,64,0,
407,401,1,0,0,0,407,402,1,0,0,0,407,403,1,0,0,0,407,404,1,0,0,0,407,405,
1,0,0,0,407,406,1,0,0,0,408,89,1,0,0,0,409,416,3,94,47,0,410,416,3,108,54,
0,411,416,3,112,56,0,412,416,3,118,59,0,413,416,3,126,63,0,414,416,3,132,
66,0,415,409,1,0,0,0,415,410,1,0,0,0,415,411,1,0,0,0,415,412,1,0,0,0,415,
413,1,0,0,0,415,414,1,0,0,0,416,91,1,0,0,0,417,419,3,86,43,0,418,417,1,0,
0,0,418,419,1,0,0,0,419,420,1,0,0,0,420,421,5,23,0,0,421,423,3,144,72,0,
422,424,3,68,34,0,423,422,1,0,0,0,423,424,1,0,0,0,424,93,1,0,0,0,425,426,
5,22,0,0,426,427,5,23,0,0,427,428,3,144,72,0,428,429,3,68,34,0,429,95,1,
0,0,0,430,432,3,86,43,0,431,430,1,0,0,0,431,432,1,0,0,0,432,433,1,0,0,0,
433,434,5,24,0,0,434,436,3,144,72,0,435,437,3,98,49,0,436,435,1,0,0,0,436,
437,1,0,0,0,437,439,1,0,0,0,438,440,3,68,34,0,439,438,1,0,0,0,439,440,1,
0,0,0,440,442,1,0,0,0,441,443,3,100,50,0,442,441,1,0,0,0,442,443,1,0,0,0,
443,97,1,0,0,0,444,445,6,49,-1,0,445,447,5,25,0,0,446,448,5,26,0,0,447,446,
1,0,0,0,447,448,1,0,0,0,448,449,1,0,0,0,449,450,3,64,32,0,450,456,1,0,0,
0,451,452,10,1,0,0,452,453,5,26,0,0,453,455,3,64,32,0,454,451,1,0,0,0,455,
458,1,0,0,0,456,454,1,0,0,0,456,457,1,0,0,0,457,99,1,0,0,0,458,456,1,0,0,
0,459,461,5,4,0,0,460,462,3,102,51,0,461,460,1,0,0,0,462,463,1,0,0,0,463,
461,1,0,0,0,463,464,1,0,0,0,464,465,1,0,0,0,465,466,5,5,0,0,466,101,1,0,
0,0,467,469,3,86,43,0,468,467,1,0,0,0,468,469,1,0,0,0,469,470,1,0,0,0,470,
472,3,144,72,0,471,473,3,104,52,0,472,471,1,0,0,0,472,473,1,0,0,0,473,474,
1,0,0,0,474,475,5,8,0,0,475,477,3,62,31,0,476,478,3,68,34,0,477,476,1,0,
0,0,477,478,1,0,0,0,478,103,1,0,0,0,479,481,5,6,0,0,480,482,3,106,53,0,481,
480,1,0,0,0,482,483,1,0,0,0,483,481,1,0,0,0,483,484,1,0,0,0,484,485,1,0,
0,0,485,486,5,7,0,0,486,105,1,0,0,0,487,489,3,86,43,0,488,487,1,0,0,0,488,
489,1,0,0,0,489,490,1,0,0,0,490,491,3,144,72,0,491,492,5,8,0,0,492,494,3,
62,31,0,493,495,3,60,30,0,494,493,1,0,0,0,494,495,1,0,0,0,495,497,1,0,0,
0,496,498,3,68,34,0,497,496,1,0,0,0,497,498,1,0,0,0,498,107,1,0,0,0,499,
500,5,22,0,0,500,501,5,24,0,0,501,503,3,144,72,0,502,504,3,98,49,0,503,502,
1,0,0,0,503,504,1,0,0,0,504,506,1,0,0,0,505,507,3,68,34,0,506,505,1,0,0,
0,506,507,1,0,0,0,507,508,1,0,0,0,508,509,3,100,50,0,509,524,1,0,0,0,510,
511,5,22,0,0,511,512,5,24,0,0,512,514,3,144,72,0,513,515,3,98,49,0,514,513,
1,0,0,0,514,515,1,0,0,0,515,516,1,0,0,0,516,517,3,68,34,0,517,524,1,0,0,
0,518,519,5,22,0,0,519,520,5,24,0,0,520,521,3,144,72,0,521,522,3,98,49,0,
522,524,1,0,0,0,523,499,1,0,0,0,523,510,1,0,0,0,523,518,1,0,0,0,524,109,
1,0,0,0,525,527,3,86,43,0,526,525,1,0,0,0,526,527,1,0,0,0,527,528,1,0,0,
0,528,529,5,27,0,0,529,531,3,144,72,0,530,532,3,98,49,0,531,530,1,0,0,0,
531,532,1,0,0,0,532,534,1,0,0,0,533,535,3,68,34,0,534,533,1,0,0,0,534,535,
1,0,0,0,535,537,1,0,0,0,536,538,3,100,50,0,537,536,1,0,0,0,537,538,1,0,0,
0,538,111,1,0,0,0,539,540,5,22,0,0,540,541,5,27,0,0,541,543,3,144,72,0,542,
544,3,98,49,0,543,542,1,0,0,0,543,544,1,0,0,0,544,546,1,0,0,0,545,547,3,
68,34,0,546,545,1,0,0,0,546,547,1,0,0,0,547,548,1,0,0,0,548,549,3,100,50,
0,549,559,1,0,0,0,550,551,5,22,0,0,551,552,5,27,0,0,552,554,3,144,72,0,553,
555,3,98,49,0,554,553,1,0,0,0,554,555,1,0,0,0,555,556,1,0,0,0,556,557,3,
68,34,0,557,559,1,0,0,0,558,539,1,0,0,0,558,550,1,0,0,0,559,113,1,0,0,0,
560,562,3,86,43,0,561,560,1,0,0,0,561,562,1,0,0,0,562,563,1,0,0,0,563,564,
5,28,0,0,564,566,3,144,72,0,565,567,3,68,34,0,566,565,1,0,0,0,566,567,1,
0,0,0,567,569,1,0,0,0,568,570,3,116,58,0,569,568,1,0,0,0,569,570,1,0,0,0,
570,115,1,0,0,0,571,573,5,18,0,0,572,574,5,29,0,0,573,572,1,0,0,0,573,574,
1,0,0,0,574,575,1,0,0,0,575,580,3,64,32,0,576,577,5,29,0,0,577,579,3,64,
32,0,578,576,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,
117,1,0,0,0,582,580,1,0,0,0,583,584,5,22,0,0,584,585,5,28,0,0,585,587,3,
144,72,0,586,588,3,68,34,0,587,586,1,0,0,0,587,588,1,0,0,0,588,589,1,0,0,
0,589,590,3,116,58,0,590,597,1,0,0,0,591,592,5,22,0,0,592,593,5,28,0,0,593,
594,3,144,72,0,594,595,3,68,34,0,595,597,1,0,0,0,596,583,1,0,0,0,596,591,
1,0,0,0,597,119,1,0,0,0,598,600,3,86,43,0,599,598,1,0,0,0,599,600,1,0,0,
0,600,601,1,0,0,0,601,602,5,30,0,0,602,604,3,144,72,0,603,605,3,68,34,0,
604,603,1,0,0,0,604,605,1,0,0,0,605,607,1,0,0,0,606,608,3,122,61,0,607,606,
1,0,0,0,607,608,1,0,0,0,608,121,1,0,0,0,609,611,5,4,0,0,610,612,3,124,62,
0,611,610,1,0,0,0,612,613,1,0,0,0,613,611,1,0,0,0,613,614,1,0,0,0,614,615,
1,0,0,0,615,616,5,5,0,0,616,123,1,0,0,0,617,619,3,86,43,0,618,617,1,0,0,
0,618,619,1,0,0,0,619,620,1,0,0,0,620,622,3,46,23,0,621,623,3,68,34,0,622,
621,1,0,0,0,622,623,1,0,0,0,623,125,1,0,0,0,624,625,5,22,0,0,625,626,5,30,
0,0,626,628,3,144,72,0,627,629,3,68,34,0,628,627,1,0,0,0,628,629,1,0,0,0,
629,630,1,0,0,0,630,631,3,122,61,0,631,638,1,0,0,0,632,633,5,22,0,0,633,
634,5,30,0,0,634,635,3,144,72,0,635,636,3,68,34,0,636,638,1,0,0,0,637,624,
1,0,0,0,637,632,1,0,0,0,638,127,1,0,0,0,639,641,3,86,43,0,640,639,1,0,0,
0,640,641,1,0,0,0,641,642,1,0,0,0,642,643,5,31,0,0,643,645,3,144,72,0,644,
646,3,68,34,0,645,644,1,0,0,0,645,646,1,0,0,0,646,648,1,0,0,0,647,649,3,
130,65,0,648,647,1,0,0,0,648,649,1,0,0,0,649,129,1,0,0,0,650,652,5,4,0,0,
651,653,3,106,53,0,652,651,1,0,0,0,653,654,1,0,0,0,654,652,1,0,0,0,654,655,
1,0,0,0,655,656,1,0,0,0,656,657,5,5,0,0,657,131,1,0,0,0,658,659,5,22,0,0,
659,660,5,31,0,0,660,662,3,144,72,0,661,663,3,68,34,0,662,661,1,0,0,0,662,
663,1,0,0,0,663,664,1,0,0,0,664,665,3,130,65,0,665,672,1,0,0,0,666,667,5,
22,0,0,667,668,5,31,0,0,668,669,3,144,72,0,669,670,3,68,34,0,670,672,1,0,
0,0,671,658,1,0,0,0,671,666,1,0,0,0,672,133,1,0,0,0,673,675,3,86,43,0,674,
673,1,0,0,0,674,675,1,0,0,0,675,676,1,0,0,0,676,677,5,32,0,0,677,678,5,20,
0,0,678,680,3,144,72,0,679,681,3,104,52,0,680,679,1,0,0,0,680,681,1,0,0,
0,681,683,1,0,0,0,682,684,5,33,0,0,683,682,1,0,0,0,683,684,1,0,0,0,684,685,
1,0,0,0,685,686,5,11,0,0,686,687,3,136,68,0,687,135,1,0,0,0,688,693,3,138,
69,0,689,690,5,29,0,0,690,692,3,138,69,0,691,689,1,0,0,0,692,695,1,0,0,0,
693,691,1,0,0,0,693,694,1,0,0,0,694,137,1,0,0,0,695,693,1,0,0,0,696,699,
3,140,70,0,697,699,3,142,71,0,698,696,1,0,0,0,698,697,1,0,0,0,699,139,1,
0,0,0,700,701,7,3,0,0,701,141,1,0,0,0,702,703,7,4,0,0,703,143,1,0,0,0,704,
705,5,53,0,0,705,145,1,0,0,0,95,149,156,161,165,169,172,175,180,188,195,
198,202,205,208,214,228,234,245,248,261,281,285,291,307,315,322,326,328,
339,344,349,354,359,363,367,373,384,390,397,407,415,418,423,431,436,439,
442,447,456,463,468,472,477,483,488,494,497,503,506,514,523,526,531,534,
537,543,546,554,558,561,566,569,573,580,587,596,599,604,607,613,618,622,
628,637,640,645,648,654,662,671,674,680,683,693,698];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GraphQLParser extends antlr4.Parser {

    static grammarFileName = "GraphQL.g4";
    static literalNames = [ null, "'query'", "'mutation'", "'subscription'", 
                            "'{'", "'}'", "'('", "')'", "':'", "'...'", 
                            "'fragment'", "'on'", "'true'", "'false'", "'null'", 
                            "'['", "']'", "'$'", "'='", "'!'", "'@'", "'schema'", 
                            "'extend'", "'scalar'", "'type'", "'implements'", 
                            "'&'", "'interface'", "'union'", "'|'", "'enum'", 
                            "'input'", "'directive'", "'repeatable'", "'QUERY'", 
                            "'MUTATION'", "'SUBSCRIPTION'", "'FIELD'", "'FRAGMENT_DEFINITION'", 
                            "'FRAGMENT_SPREAD'", "'INLINE_FRAGMENT'", "'VARIABLE_DEFINITION'", 
                            "'SCHEMA'", "'SCALAR'", "'OBJECT'", "'FIELD_DEFINITION'", 
                            "'ARGUMENT_DEFINITION'", "'INTERFACE'", "'UNION'", 
                            "'ENUM'", "'ENUM_VALUE'", "'INPUT_OBJECT'", 
                            "'INPUT_FIELD_DEFINITION'", null, null, null, 
                            null, null, null, null, null, "','", null, null, 
                            "'\\uEFBBBF'", "'\\uFEFF'", "'\\u0000FEFF'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, "NAME", "STRING", 
                             "BLOCK_STRING", "ID", "FLOAT", "INT", "PUNCTUATOR", 
                             "WS", "COMMA", "LineComment", "UNICODE_BOM", 
                             "UTF8_BOM", "UTF16_BOM", "UTF32_BOM" ];
    static ruleNames = [ "document", "definition", "executableDocument", 
                         "executableDefinition", "operationDefinition", 
                         "operationType", "selectionSet", "selection", "field", 
                         "arguments", "argument", "alias", "fragmentSpread", 
                         "fragmentDefinition", "fragmentName", "typeCondition", 
                         "inlineFragment", "value", "intValue", "floatValue", 
                         "booleanValue", "stringValue", "nullValue", "enumValue", 
                         "listValue", "objectValue", "objectField", "variable", 
                         "variableDefinitions", "variableDefinition", "defaultValue", 
                         "type_", "namedType", "listType", "directives", 
                         "directive", "typeSystemDocument", "typeSystemDefinition", 
                         "typeSystemExtensionDocument", "typeSystemExtension", 
                         "schemaDefinition", "rootOperationTypeDefinition", 
                         "schemaExtension", "description", "typeDefinition", 
                         "typeExtension", "scalarTypeDefinition", "scalarTypeExtension", 
                         "objectTypeDefinition", "implementsInterfaces", 
                         "fieldsDefinition", "fieldDefinition", "argumentsDefinition", 
                         "inputValueDefinition", "objectTypeExtension", 
                         "interfaceTypeDefinition", "interfaceTypeExtension", 
                         "unionTypeDefinition", "unionMemberTypes", "unionTypeExtension", 
                         "enumTypeDefinition", "enumValuesDefinition", "enumValueDefinition", 
                         "enumTypeExtension", "inputObjectTypeDefinition", 
                         "inputFieldsDefinition", "inputObjectTypeExtension", 
                         "directiveDefinition", "directiveLocations", "directiveLocation", 
                         "executableDirectiveLocation", "typeSystemDirectiveLocation", 
                         "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GraphQLParser.ruleNames;
        this.literalNames = GraphQLParser.literalNames;
        this.symbolicNames = GraphQLParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 49:
    	    		return this.implementsInterfaces_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    implementsInterfaces_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	document() {
	    let localctx = new DocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GraphQLParser.RULE_document);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 146;
	            this.definition();
	            this.state = 149; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3655336990) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 12582913) !== 0));
	        this.state = 151;
	        this.match(GraphQLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 2, GraphQLParser.RULE_definition);
	    try {
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.executableDocument();
	            break;
	        case 21:
	        case 23:
	        case 24:
	        case 27:
	        case 28:
	        case 30:
	        case 31:
	        case 32:
	        case 54:
	        case 55:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.typeSystemDocument();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 155;
	            this.typeSystemExtensionDocument();
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



	executableDocument() {
	    let localctx = new ExecutableDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GraphQLParser.RULE_executableDocument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 158;
	        		this.executableDefinition();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 161; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	executableDefinition() {
	    let localctx = new ExecutableDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GraphQLParser.RULE_executableDefinition);
	    try {
	        this.state = 165;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 163;
	            this.operationDefinition();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.fragmentDefinition();
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



	operationDefinition() {
	    let localctx = new OperationDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GraphQLParser.RULE_operationDefinition);
	    var _la = 0;
	    try {
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 167;
	            this.operationType();
	            this.state = 169;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===53) {
	                this.state = 168;
	                this.name();
	            }

	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6) {
	                this.state = 171;
	                this.variableDefinitions();
	            }

	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 174;
	                this.directives();
	            }

	            this.state = 177;
	            this.selectionSet();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 179;
	            this.selectionSet();
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



	operationType() {
	    let localctx = new OperationTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, GraphQLParser.RULE_operationType);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0))) {
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



	selectionSet() {
	    let localctx = new SelectionSetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, GraphQLParser.RULE_selectionSet);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(GraphQLParser.T__3);
	        this.state = 186; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 185;
	            this.selection();
	            this.state = 188; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9 || _la===53);
	        this.state = 190;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	selection() {
	    let localctx = new SelectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, GraphQLParser.RULE_selection);
	    try {
	        this.state = 195;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 192;
	            this.field();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 193;
	            this.fragmentSpread();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 194;
	            this.inlineFragment();
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, GraphQLParser.RULE_field);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        if(la_===1) {
	            this.state = 197;
	            this.alias();

	        }
	        this.state = 200;
	        this.name();
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 201;
	            this.arguments();
	        }

	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 204;
	            this.directives();
	        }

	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 207;
	            this.selectionSet();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, GraphQLParser.RULE_arguments);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 210;
	        this.match(GraphQLParser.T__5);
	        this.state = 212; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 211;
	            this.argument();
	            this.state = 214; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===53);
	        this.state = 216;
	        this.match(GraphQLParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, GraphQLParser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.name();
	        this.state = 219;
	        this.match(GraphQLParser.T__7);
	        this.state = 220;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	alias() {
	    let localctx = new AliasContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, GraphQLParser.RULE_alias);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.name();
	        this.state = 223;
	        this.match(GraphQLParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fragmentSpread() {
	    let localctx = new FragmentSpreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, GraphQLParser.RULE_fragmentSpread);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.match(GraphQLParser.T__8);
	        this.state = 226;
	        this.fragmentName();
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 227;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fragmentDefinition() {
	    let localctx = new FragmentDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, GraphQLParser.RULE_fragmentDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(GraphQLParser.T__9);
	        this.state = 231;
	        this.fragmentName();
	        this.state = 232;
	        this.typeCondition();
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 233;
	            this.directives();
	        }

	        this.state = 236;
	        this.selectionSet();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fragmentName() {
	    let localctx = new FragmentNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, GraphQLParser.RULE_fragmentName);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeCondition() {
	    let localctx = new TypeConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, GraphQLParser.RULE_typeCondition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(GraphQLParser.T__10);
	        this.state = 241;
	        this.namedType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inlineFragment() {
	    let localctx = new InlineFragmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, GraphQLParser.RULE_inlineFragment);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        this.match(GraphQLParser.T__8);
	        this.state = 245;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 244;
	            this.typeCondition();
	        }

	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 247;
	            this.directives();
	        }

	        this.state = 250;
	        this.selectionSet();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 34, GraphQLParser.RULE_value);
	    try {
	        this.state = 261;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 252;
	            this.variable();
	            break;
	        case 58:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 253;
	            this.intValue();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 254;
	            this.floatValue();
	            break;
	        case 54:
	        case 55:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 255;
	            this.stringValue();
	            break;
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 256;
	            this.booleanValue();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 257;
	            this.nullValue();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 258;
	            this.enumValue();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 259;
	            this.listValue();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 260;
	            this.objectValue();
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



	intValue() {
	    let localctx = new IntValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, GraphQLParser.RULE_intValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(GraphQLParser.INT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	floatValue() {
	    let localctx = new FloatValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, GraphQLParser.RULE_floatValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(GraphQLParser.FLOAT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	booleanValue() {
	    let localctx = new BooleanValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, GraphQLParser.RULE_booleanValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 267;
	        _la = this._input.LA(1);
	        if(!(_la===12 || _la===13)) {
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



	stringValue() {
	    let localctx = new StringValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, GraphQLParser.RULE_stringValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        _la = this._input.LA(1);
	        if(!(_la===54 || _la===55)) {
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



	nullValue() {
	    let localctx = new NullValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, GraphQLParser.RULE_nullValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        this.match(GraphQLParser.T__13);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValue() {
	    let localctx = new EnumValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, GraphQLParser.RULE_enumValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listValue() {
	    let localctx = new ListValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, GraphQLParser.RULE_listValue);
	    var _la = 0;
	    try {
	        this.state = 285;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 275;
	            this.match(GraphQLParser.T__14);
	            this.state = 276;
	            this.match(GraphQLParser.T__15);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 277;
	            this.match(GraphQLParser.T__14);
	            this.state = 279; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 278;
	                this.value();
	                this.state = 281; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 192528) !== 0) || ((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 55) !== 0));
	            this.state = 283;
	            this.match(GraphQLParser.T__15);
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



	objectValue() {
	    let localctx = new ObjectValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, GraphQLParser.RULE_objectValue);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 287;
	        this.match(GraphQLParser.T__3);
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===53) {
	            this.state = 288;
	            this.objectField();
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 294;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectField() {
	    let localctx = new ObjectFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, GraphQLParser.RULE_objectField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.name();
	        this.state = 297;
	        this.match(GraphQLParser.T__7);
	        this.state = 298;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, GraphQLParser.RULE_variable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(GraphQLParser.T__16);
	        this.state = 301;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDefinitions() {
	    let localctx = new VariableDefinitionsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, GraphQLParser.RULE_variableDefinitions);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(GraphQLParser.T__5);
	        this.state = 305; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 304;
	            this.variableDefinition();
	            this.state = 307; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===17);
	        this.state = 309;
	        this.match(GraphQLParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDefinition() {
	    let localctx = new VariableDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, GraphQLParser.RULE_variableDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 311;
	        this.variable();
	        this.state = 312;
	        this.match(GraphQLParser.T__7);
	        this.state = 313;
	        this.type_();
	        this.state = 315;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 314;
	            this.defaultValue();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	defaultValue() {
	    let localctx = new DefaultValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, GraphQLParser.RULE_defaultValue);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 317;
	        this.match(GraphQLParser.T__17);
	        this.state = 318;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 62, GraphQLParser.RULE_type_);
	    var _la = 0;
	    try {
	        this.state = 328;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 320;
	            this.namedType();
	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 321;
	                this.match(GraphQLParser.T__18);
	            }

	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 324;
	            this.listType();
	            this.state = 326;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 325;
	                this.match(GraphQLParser.T__18);
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



	namedType() {
	    let localctx = new NamedTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, GraphQLParser.RULE_namedType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	listType() {
	    let localctx = new ListTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, GraphQLParser.RULE_listType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        this.match(GraphQLParser.T__14);
	        this.state = 333;
	        this.type_();
	        this.state = 334;
	        this.match(GraphQLParser.T__15);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directives() {
	    let localctx = new DirectivesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, GraphQLParser.RULE_directives);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 337; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 336;
	            this.directive();
	            this.state = 339; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===20);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directive() {
	    let localctx = new DirectiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, GraphQLParser.RULE_directive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(GraphQLParser.T__19);
	        this.state = 342;
	        this.name();
	        this.state = 344;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 343;
	            this.arguments();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeSystemDocument() {
	    let localctx = new TypeSystemDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, GraphQLParser.RULE_typeSystemDocument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 346;
	        		this.typeSystemDefinition();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 349; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,30, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeSystemDefinition() {
	    let localctx = new TypeSystemDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, GraphQLParser.RULE_typeSystemDefinition);
	    try {
	        this.state = 354;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.schemaDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            this.typeDefinition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 353;
	            this.directiveDefinition();
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



	typeSystemExtensionDocument() {
	    let localctx = new TypeSystemExtensionDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, GraphQLParser.RULE_typeSystemExtensionDocument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 356;
	        		this.typeSystemExtension();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 359; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,32, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeSystemExtension() {
	    let localctx = new TypeSystemExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, GraphQLParser.RULE_typeSystemExtension);
	    try {
	        this.state = 363;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 361;
	            this.schemaExtension();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 362;
	            this.typeExtension();
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



	schemaDefinition() {
	    let localctx = new SchemaDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, GraphQLParser.RULE_schemaDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(GraphQLParser.T__20);
	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 366;
	            this.directives();
	        }

	        this.state = 369;
	        this.match(GraphQLParser.T__3);
	        this.state = 371; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 370;
	            this.rootOperationTypeDefinition();
	            this.state = 373; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0));
	        this.state = 375;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rootOperationTypeDefinition() {
	    let localctx = new RootOperationTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, GraphQLParser.RULE_rootOperationTypeDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.operationType();
	        this.state = 378;
	        this.match(GraphQLParser.T__7);
	        this.state = 379;
	        this.namedType();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	schemaExtension() {
	    let localctx = new SchemaExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, GraphQLParser.RULE_schemaExtension);
	    var _la = 0;
	    try {
	        this.state = 397;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 381;
	            this.match(GraphQLParser.T__21);
	            this.state = 382;
	            this.match(GraphQLParser.T__20);
	            this.state = 384;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 383;
	                this.directives();
	            }

	            this.state = 386;
	            this.match(GraphQLParser.T__3);
	            this.state = 388; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 387;
	                this.rootOperationTypeDefinition();
	                this.state = 390; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14) !== 0));
	            this.state = 392;
	            this.match(GraphQLParser.T__4);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 394;
	            this.match(GraphQLParser.T__21);
	            this.state = 395;
	            this.match(GraphQLParser.T__20);
	            this.state = 396;
	            this.directives();
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



	description() {
	    let localctx = new DescriptionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, GraphQLParser.RULE_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.stringValue();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 88, GraphQLParser.RULE_typeDefinition);
	    try {
	        this.state = 407;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 401;
	            this.scalarTypeDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 402;
	            this.objectTypeDefinition();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 403;
	            this.interfaceTypeDefinition();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 404;
	            this.unionTypeDefinition();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 405;
	            this.enumTypeDefinition();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 406;
	            this.inputObjectTypeDefinition();
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



	typeExtension() {
	    let localctx = new TypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, GraphQLParser.RULE_typeExtension);
	    try {
	        this.state = 415;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 409;
	            this.scalarTypeExtension();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 410;
	            this.objectTypeExtension();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 411;
	            this.interfaceTypeExtension();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 412;
	            this.unionTypeExtension();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 413;
	            this.enumTypeExtension();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 414;
	            this.inputObjectTypeExtension();
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



	scalarTypeDefinition() {
	    let localctx = new ScalarTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, GraphQLParser.RULE_scalarTypeDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 418;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 417;
	            this.description();
	        }

	        this.state = 420;
	        this.match(GraphQLParser.T__22);
	        this.state = 421;
	        this.name();
	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 422;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scalarTypeExtension() {
	    let localctx = new ScalarTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, GraphQLParser.RULE_scalarTypeExtension);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.match(GraphQLParser.T__21);
	        this.state = 426;
	        this.match(GraphQLParser.T__22);
	        this.state = 427;
	        this.name();
	        this.state = 428;
	        this.directives();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectTypeDefinition() {
	    let localctx = new ObjectTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, GraphQLParser.RULE_objectTypeDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 431;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 430;
	            this.description();
	        }

	        this.state = 433;
	        this.match(GraphQLParser.T__23);
	        this.state = 434;
	        this.name();
	        this.state = 436;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 435;
	            this.implementsInterfaces(0);
	        }

	        this.state = 439;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 438;
	            this.directives();
	        }

	        this.state = 442;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        if(la_===1) {
	            this.state = 441;
	            this.fieldsDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	implementsInterfaces(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ImplementsInterfacesContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 98;
	    this.enterRecursionRule(localctx, 98, GraphQLParser.RULE_implementsInterfaces, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this.match(GraphQLParser.T__24);
	        this.state = 447;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26) {
	            this.state = 446;
	            this.match(GraphQLParser.T__25);
	        }

	        this.state = 449;
	        this.namedType();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 456;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new ImplementsInterfacesContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, GraphQLParser.RULE_implementsInterfaces);
	                this.state = 451;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 452;
	                this.match(GraphQLParser.T__25);
	                this.state = 453;
	                this.namedType(); 
	            }
	            this.state = 458;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
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



	fieldsDefinition() {
	    let localctx = new FieldsDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, GraphQLParser.RULE_fieldsDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this.match(GraphQLParser.T__3);
	        this.state = 461; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 460;
	            this.fieldDefinition();
	            this.state = 463; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 7) !== 0));
	        this.state = 465;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldDefinition() {
	    let localctx = new FieldDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 102, GraphQLParser.RULE_fieldDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 468;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 467;
	            this.description();
	        }

	        this.state = 470;
	        this.name();
	        this.state = 472;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 471;
	            this.argumentsDefinition();
	        }

	        this.state = 474;
	        this.match(GraphQLParser.T__7);
	        this.state = 475;
	        this.type_();
	        this.state = 477;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 476;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentsDefinition() {
	    let localctx = new ArgumentsDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 104, GraphQLParser.RULE_argumentsDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 479;
	        this.match(GraphQLParser.T__5);
	        this.state = 481; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 480;
	            this.inputValueDefinition();
	            this.state = 483; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 7) !== 0));
	        this.state = 485;
	        this.match(GraphQLParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inputValueDefinition() {
	    let localctx = new InputValueDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, GraphQLParser.RULE_inputValueDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 488;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 487;
	            this.description();
	        }

	        this.state = 490;
	        this.name();
	        this.state = 491;
	        this.match(GraphQLParser.T__7);
	        this.state = 492;
	        this.type_();
	        this.state = 494;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 493;
	            this.defaultValue();
	        }

	        this.state = 497;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 496;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectTypeExtension() {
	    let localctx = new ObjectTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, GraphQLParser.RULE_objectTypeExtension);
	    var _la = 0;
	    try {
	        this.state = 523;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 499;
	            this.match(GraphQLParser.T__21);
	            this.state = 500;
	            this.match(GraphQLParser.T__23);
	            this.state = 501;
	            this.name();
	            this.state = 503;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 502;
	                this.implementsInterfaces(0);
	            }

	            this.state = 506;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 505;
	                this.directives();
	            }

	            this.state = 508;
	            this.fieldsDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 510;
	            this.match(GraphQLParser.T__21);
	            this.state = 511;
	            this.match(GraphQLParser.T__23);
	            this.state = 512;
	            this.name();
	            this.state = 514;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 513;
	                this.implementsInterfaces(0);
	            }

	            this.state = 516;
	            this.directives();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 518;
	            this.match(GraphQLParser.T__21);
	            this.state = 519;
	            this.match(GraphQLParser.T__23);
	            this.state = 520;
	            this.name();
	            this.state = 521;
	            this.implementsInterfaces(0);
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



	interfaceTypeDefinition() {
	    let localctx = new InterfaceTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, GraphQLParser.RULE_interfaceTypeDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 526;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 525;
	            this.description();
	        }

	        this.state = 528;
	        this.match(GraphQLParser.T__26);
	        this.state = 529;
	        this.name();
	        this.state = 531;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 530;
	            this.implementsInterfaces(0);
	        }

	        this.state = 534;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 533;
	            this.directives();
	        }

	        this.state = 537;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	        if(la_===1) {
	            this.state = 536;
	            this.fieldsDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	interfaceTypeExtension() {
	    let localctx = new InterfaceTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, GraphQLParser.RULE_interfaceTypeExtension);
	    var _la = 0;
	    try {
	        this.state = 558;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,68,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 539;
	            this.match(GraphQLParser.T__21);
	            this.state = 540;
	            this.match(GraphQLParser.T__26);
	            this.state = 541;
	            this.name();
	            this.state = 543;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 542;
	                this.implementsInterfaces(0);
	            }

	            this.state = 546;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 545;
	                this.directives();
	            }

	            this.state = 548;
	            this.fieldsDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 550;
	            this.match(GraphQLParser.T__21);
	            this.state = 551;
	            this.match(GraphQLParser.T__26);
	            this.state = 552;
	            this.name();
	            this.state = 554;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===25) {
	                this.state = 553;
	                this.implementsInterfaces(0);
	            }

	            this.state = 556;
	            this.directives();
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



	unionTypeDefinition() {
	    let localctx = new UnionTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, GraphQLParser.RULE_unionTypeDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 560;
	            this.description();
	        }

	        this.state = 563;
	        this.match(GraphQLParser.T__27);
	        this.state = 564;
	        this.name();
	        this.state = 566;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 565;
	            this.directives();
	        }

	        this.state = 569;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===18) {
	            this.state = 568;
	            this.unionMemberTypes();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unionMemberTypes() {
	    let localctx = new UnionMemberTypesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 116, GraphQLParser.RULE_unionMemberTypes);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 571;
	        this.match(GraphQLParser.T__17);
	        this.state = 573;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===29) {
	            this.state = 572;
	            this.match(GraphQLParser.T__28);
	        }

	        this.state = 575;
	        this.namedType();
	        this.state = 580;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 576;
	            this.match(GraphQLParser.T__28);
	            this.state = 577;
	            this.namedType();
	            this.state = 582;
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



	unionTypeExtension() {
	    let localctx = new UnionTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, GraphQLParser.RULE_unionTypeExtension);
	    var _la = 0;
	    try {
	        this.state = 596;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,75,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 583;
	            this.match(GraphQLParser.T__21);
	            this.state = 584;
	            this.match(GraphQLParser.T__27);
	            this.state = 585;
	            this.name();
	            this.state = 587;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 586;
	                this.directives();
	            }

	            this.state = 589;
	            this.unionMemberTypes();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 591;
	            this.match(GraphQLParser.T__21);
	            this.state = 592;
	            this.match(GraphQLParser.T__27);
	            this.state = 593;
	            this.name();
	            this.state = 594;
	            this.directives();
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



	enumTypeDefinition() {
	    let localctx = new EnumTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, GraphQLParser.RULE_enumTypeDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 598;
	            this.description();
	        }

	        this.state = 601;
	        this.match(GraphQLParser.T__29);
	        this.state = 602;
	        this.name();
	        this.state = 604;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 603;
	            this.directives();
	        }

	        this.state = 607;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,78,this._ctx);
	        if(la_===1) {
	            this.state = 606;
	            this.enumValuesDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValuesDefinition() {
	    let localctx = new EnumValuesDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, GraphQLParser.RULE_enumValuesDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 609;
	        this.match(GraphQLParser.T__3);
	        this.state = 611; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 610;
	            this.enumValueDefinition();
	            this.state = 613; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 7) !== 0));
	        this.state = 615;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumValueDefinition() {
	    let localctx = new EnumValueDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, GraphQLParser.RULE_enumValueDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 618;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 617;
	            this.description();
	        }

	        this.state = 620;
	        this.enumValue();
	        this.state = 622;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 621;
	            this.directives();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumTypeExtension() {
	    let localctx = new EnumTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 126, GraphQLParser.RULE_enumTypeExtension);
	    var _la = 0;
	    try {
	        this.state = 637;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,83,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 624;
	            this.match(GraphQLParser.T__21);
	            this.state = 625;
	            this.match(GraphQLParser.T__29);
	            this.state = 626;
	            this.name();
	            this.state = 628;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 627;
	                this.directives();
	            }

	            this.state = 630;
	            this.enumValuesDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 632;
	            this.match(GraphQLParser.T__21);
	            this.state = 633;
	            this.match(GraphQLParser.T__29);
	            this.state = 634;
	            this.name();
	            this.state = 635;
	            this.directives();
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



	inputObjectTypeDefinition() {
	    let localctx = new InputObjectTypeDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 128, GraphQLParser.RULE_inputObjectTypeDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 640;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 639;
	            this.description();
	        }

	        this.state = 642;
	        this.match(GraphQLParser.T__30);
	        this.state = 643;
	        this.name();
	        this.state = 645;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 644;
	            this.directives();
	        }

	        this.state = 648;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,86,this._ctx);
	        if(la_===1) {
	            this.state = 647;
	            this.inputFieldsDefinition();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inputFieldsDefinition() {
	    let localctx = new InputFieldsDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 130, GraphQLParser.RULE_inputFieldsDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 650;
	        this.match(GraphQLParser.T__3);
	        this.state = 652; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 651;
	            this.inputValueDefinition();
	            this.state = 654; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(((((_la - 53)) & ~0x1f) === 0 && ((1 << (_la - 53)) & 7) !== 0));
	        this.state = 656;
	        this.match(GraphQLParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inputObjectTypeExtension() {
	    let localctx = new InputObjectTypeExtensionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 132, GraphQLParser.RULE_inputObjectTypeExtension);
	    var _la = 0;
	    try {
	        this.state = 671;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,89,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 658;
	            this.match(GraphQLParser.T__21);
	            this.state = 659;
	            this.match(GraphQLParser.T__30);
	            this.state = 660;
	            this.name();
	            this.state = 662;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 661;
	                this.directives();
	            }

	            this.state = 664;
	            this.inputFieldsDefinition();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 666;
	            this.match(GraphQLParser.T__21);
	            this.state = 667;
	            this.match(GraphQLParser.T__30);
	            this.state = 668;
	            this.name();
	            this.state = 669;
	            this.directives();
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



	directiveDefinition() {
	    let localctx = new DirectiveDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 134, GraphQLParser.RULE_directiveDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 674;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===55) {
	            this.state = 673;
	            this.description();
	        }

	        this.state = 676;
	        this.match(GraphQLParser.T__31);
	        this.state = 677;
	        this.match(GraphQLParser.T__19);
	        this.state = 678;
	        this.name();
	        this.state = 680;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6) {
	            this.state = 679;
	            this.argumentsDefinition();
	        }

	        this.state = 683;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===33) {
	            this.state = 682;
	            this.match(GraphQLParser.T__32);
	        }

	        this.state = 685;
	        this.match(GraphQLParser.T__10);
	        this.state = 686;
	        this.directiveLocations();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	directiveLocations() {
	    let localctx = new DirectiveLocationsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 136, GraphQLParser.RULE_directiveLocations);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 688;
	        this.directiveLocation();
	        this.state = 693;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 689;
	            this.match(GraphQLParser.T__28);
	            this.state = 690;
	            this.directiveLocation();
	            this.state = 695;
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



	directiveLocation() {
	    let localctx = new DirectiveLocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 138, GraphQLParser.RULE_directiveLocation);
	    try {
	        this.state = 698;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 696;
	            this.executableDirectiveLocation();
	            break;
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
	            this.enterOuterAlt(localctx, 2);
	            this.state = 697;
	            this.typeSystemDirectiveLocation();
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



	executableDirectiveLocation() {
	    let localctx = new ExecutableDirectiveLocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 140, GraphQLParser.RULE_executableDirectiveLocation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 700;
	        _la = this._input.LA(1);
	        if(!(((((_la - 34)) & ~0x1f) === 0 && ((1 << (_la - 34)) & 255) !== 0))) {
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



	typeSystemDirectiveLocation() {
	    let localctx = new TypeSystemDirectiveLocationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 142, GraphQLParser.RULE_typeSystemDirectiveLocation);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 702;
	        _la = this._input.LA(1);
	        if(!(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 2047) !== 0))) {
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 144, GraphQLParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 704;
	        this.match(GraphQLParser.NAME);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

GraphQLParser.EOF = antlr4.Token.EOF;
GraphQLParser.T__0 = 1;
GraphQLParser.T__1 = 2;
GraphQLParser.T__2 = 3;
GraphQLParser.T__3 = 4;
GraphQLParser.T__4 = 5;
GraphQLParser.T__5 = 6;
GraphQLParser.T__6 = 7;
GraphQLParser.T__7 = 8;
GraphQLParser.T__8 = 9;
GraphQLParser.T__9 = 10;
GraphQLParser.T__10 = 11;
GraphQLParser.T__11 = 12;
GraphQLParser.T__12 = 13;
GraphQLParser.T__13 = 14;
GraphQLParser.T__14 = 15;
GraphQLParser.T__15 = 16;
GraphQLParser.T__16 = 17;
GraphQLParser.T__17 = 18;
GraphQLParser.T__18 = 19;
GraphQLParser.T__19 = 20;
GraphQLParser.T__20 = 21;
GraphQLParser.T__21 = 22;
GraphQLParser.T__22 = 23;
GraphQLParser.T__23 = 24;
GraphQLParser.T__24 = 25;
GraphQLParser.T__25 = 26;
GraphQLParser.T__26 = 27;
GraphQLParser.T__27 = 28;
GraphQLParser.T__28 = 29;
GraphQLParser.T__29 = 30;
GraphQLParser.T__30 = 31;
GraphQLParser.T__31 = 32;
GraphQLParser.T__32 = 33;
GraphQLParser.T__33 = 34;
GraphQLParser.T__34 = 35;
GraphQLParser.T__35 = 36;
GraphQLParser.T__36 = 37;
GraphQLParser.T__37 = 38;
GraphQLParser.T__38 = 39;
GraphQLParser.T__39 = 40;
GraphQLParser.T__40 = 41;
GraphQLParser.T__41 = 42;
GraphQLParser.T__42 = 43;
GraphQLParser.T__43 = 44;
GraphQLParser.T__44 = 45;
GraphQLParser.T__45 = 46;
GraphQLParser.T__46 = 47;
GraphQLParser.T__47 = 48;
GraphQLParser.T__48 = 49;
GraphQLParser.T__49 = 50;
GraphQLParser.T__50 = 51;
GraphQLParser.T__51 = 52;
GraphQLParser.NAME = 53;
GraphQLParser.STRING = 54;
GraphQLParser.BLOCK_STRING = 55;
GraphQLParser.ID = 56;
GraphQLParser.FLOAT = 57;
GraphQLParser.INT = 58;
GraphQLParser.PUNCTUATOR = 59;
GraphQLParser.WS = 60;
GraphQLParser.COMMA = 61;
GraphQLParser.LineComment = 62;
GraphQLParser.UNICODE_BOM = 63;
GraphQLParser.UTF8_BOM = 64;
GraphQLParser.UTF16_BOM = 65;
GraphQLParser.UTF32_BOM = 66;

GraphQLParser.RULE_document = 0;
GraphQLParser.RULE_definition = 1;
GraphQLParser.RULE_executableDocument = 2;
GraphQLParser.RULE_executableDefinition = 3;
GraphQLParser.RULE_operationDefinition = 4;
GraphQLParser.RULE_operationType = 5;
GraphQLParser.RULE_selectionSet = 6;
GraphQLParser.RULE_selection = 7;
GraphQLParser.RULE_field = 8;
GraphQLParser.RULE_arguments = 9;
GraphQLParser.RULE_argument = 10;
GraphQLParser.RULE_alias = 11;
GraphQLParser.RULE_fragmentSpread = 12;
GraphQLParser.RULE_fragmentDefinition = 13;
GraphQLParser.RULE_fragmentName = 14;
GraphQLParser.RULE_typeCondition = 15;
GraphQLParser.RULE_inlineFragment = 16;
GraphQLParser.RULE_value = 17;
GraphQLParser.RULE_intValue = 18;
GraphQLParser.RULE_floatValue = 19;
GraphQLParser.RULE_booleanValue = 20;
GraphQLParser.RULE_stringValue = 21;
GraphQLParser.RULE_nullValue = 22;
GraphQLParser.RULE_enumValue = 23;
GraphQLParser.RULE_listValue = 24;
GraphQLParser.RULE_objectValue = 25;
GraphQLParser.RULE_objectField = 26;
GraphQLParser.RULE_variable = 27;
GraphQLParser.RULE_variableDefinitions = 28;
GraphQLParser.RULE_variableDefinition = 29;
GraphQLParser.RULE_defaultValue = 30;
GraphQLParser.RULE_type_ = 31;
GraphQLParser.RULE_namedType = 32;
GraphQLParser.RULE_listType = 33;
GraphQLParser.RULE_directives = 34;
GraphQLParser.RULE_directive = 35;
GraphQLParser.RULE_typeSystemDocument = 36;
GraphQLParser.RULE_typeSystemDefinition = 37;
GraphQLParser.RULE_typeSystemExtensionDocument = 38;
GraphQLParser.RULE_typeSystemExtension = 39;
GraphQLParser.RULE_schemaDefinition = 40;
GraphQLParser.RULE_rootOperationTypeDefinition = 41;
GraphQLParser.RULE_schemaExtension = 42;
GraphQLParser.RULE_description = 43;
GraphQLParser.RULE_typeDefinition = 44;
GraphQLParser.RULE_typeExtension = 45;
GraphQLParser.RULE_scalarTypeDefinition = 46;
GraphQLParser.RULE_scalarTypeExtension = 47;
GraphQLParser.RULE_objectTypeDefinition = 48;
GraphQLParser.RULE_implementsInterfaces = 49;
GraphQLParser.RULE_fieldsDefinition = 50;
GraphQLParser.RULE_fieldDefinition = 51;
GraphQLParser.RULE_argumentsDefinition = 52;
GraphQLParser.RULE_inputValueDefinition = 53;
GraphQLParser.RULE_objectTypeExtension = 54;
GraphQLParser.RULE_interfaceTypeDefinition = 55;
GraphQLParser.RULE_interfaceTypeExtension = 56;
GraphQLParser.RULE_unionTypeDefinition = 57;
GraphQLParser.RULE_unionMemberTypes = 58;
GraphQLParser.RULE_unionTypeExtension = 59;
GraphQLParser.RULE_enumTypeDefinition = 60;
GraphQLParser.RULE_enumValuesDefinition = 61;
GraphQLParser.RULE_enumValueDefinition = 62;
GraphQLParser.RULE_enumTypeExtension = 63;
GraphQLParser.RULE_inputObjectTypeDefinition = 64;
GraphQLParser.RULE_inputFieldsDefinition = 65;
GraphQLParser.RULE_inputObjectTypeExtension = 66;
GraphQLParser.RULE_directiveDefinition = 67;
GraphQLParser.RULE_directiveLocations = 68;
GraphQLParser.RULE_directiveLocation = 69;
GraphQLParser.RULE_executableDirectiveLocation = 70;
GraphQLParser.RULE_typeSystemDirectiveLocation = 71;
GraphQLParser.RULE_name = 72;

class DocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_document;
    }

	EOF() {
	    return this.getToken(GraphQLParser.EOF, 0);
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
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDocument(this);
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
        this.ruleIndex = GraphQLParser.RULE_definition;
    }

	executableDocument() {
	    return this.getTypedRuleContext(ExecutableDocumentContext,0);
	};

	typeSystemDocument() {
	    return this.getTypedRuleContext(TypeSystemDocumentContext,0);
	};

	typeSystemExtensionDocument() {
	    return this.getTypedRuleContext(TypeSystemExtensionDocumentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class ExecutableDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_executableDocument;
    }

	executableDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExecutableDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(ExecutableDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterExecutableDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitExecutableDocument(this);
		}
	}


}



class ExecutableDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_executableDefinition;
    }

	operationDefinition() {
	    return this.getTypedRuleContext(OperationDefinitionContext,0);
	};

	fragmentDefinition() {
	    return this.getTypedRuleContext(FragmentDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterExecutableDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitExecutableDefinition(this);
		}
	}


}



class OperationDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_operationDefinition;
    }

	operationType() {
	    return this.getTypedRuleContext(OperationTypeContext,0);
	};

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	variableDefinitions() {
	    return this.getTypedRuleContext(VariableDefinitionsContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterOperationDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitOperationDefinition(this);
		}
	}


}



class OperationTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_operationType;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterOperationType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitOperationType(this);
		}
	}


}



class SelectionSetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_selectionSet;
    }

	selection = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SelectionContext);
	    } else {
	        return this.getTypedRuleContext(SelectionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSelectionSet(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSelectionSet(this);
		}
	}


}



class SelectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_selection;
    }

	field() {
	    return this.getTypedRuleContext(FieldContext,0);
	};

	fragmentSpread() {
	    return this.getTypedRuleContext(FragmentSpreadContext,0);
	};

	inlineFragment() {
	    return this.getTypedRuleContext(InlineFragmentContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSelection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSelection(this);
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
        this.ruleIndex = GraphQLParser.RULE_field;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	alias() {
	    return this.getTypedRuleContext(AliasContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitField(this);
		}
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_arguments;
    }

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitArguments(this);
		}
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_argument;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitArgument(this);
		}
	}


}



class AliasContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_alias;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterAlias(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitAlias(this);
		}
	}


}



class FragmentSpreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fragmentSpread;
    }

	fragmentName() {
	    return this.getTypedRuleContext(FragmentNameContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFragmentSpread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFragmentSpread(this);
		}
	}


}



class FragmentDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fragmentDefinition;
    }

	fragmentName() {
	    return this.getTypedRuleContext(FragmentNameContext,0);
	};

	typeCondition() {
	    return this.getTypedRuleContext(TypeConditionContext,0);
	};

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFragmentDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFragmentDefinition(this);
		}
	}


}



class FragmentNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fragmentName;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFragmentName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFragmentName(this);
		}
	}


}



class TypeConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeCondition;
    }

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeCondition(this);
		}
	}


}



class InlineFragmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inlineFragment;
    }

	selectionSet() {
	    return this.getTypedRuleContext(SelectionSetContext,0);
	};

	typeCondition() {
	    return this.getTypedRuleContext(TypeConditionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInlineFragment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInlineFragment(this);
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
        this.ruleIndex = GraphQLParser.RULE_value;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	intValue() {
	    return this.getTypedRuleContext(IntValueContext,0);
	};

	floatValue() {
	    return this.getTypedRuleContext(FloatValueContext,0);
	};

	stringValue() {
	    return this.getTypedRuleContext(StringValueContext,0);
	};

	booleanValue() {
	    return this.getTypedRuleContext(BooleanValueContext,0);
	};

	nullValue() {
	    return this.getTypedRuleContext(NullValueContext,0);
	};

	enumValue() {
	    return this.getTypedRuleContext(EnumValueContext,0);
	};

	listValue() {
	    return this.getTypedRuleContext(ListValueContext,0);
	};

	objectValue() {
	    return this.getTypedRuleContext(ObjectValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitValue(this);
		}
	}


}



class IntValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_intValue;
    }

	INT() {
	    return this.getToken(GraphQLParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterIntValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitIntValue(this);
		}
	}


}



class FloatValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_floatValue;
    }

	FLOAT() {
	    return this.getToken(GraphQLParser.FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFloatValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFloatValue(this);
		}
	}


}



class BooleanValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_booleanValue;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterBooleanValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitBooleanValue(this);
		}
	}


}



class StringValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_stringValue;
    }

	STRING() {
	    return this.getToken(GraphQLParser.STRING, 0);
	};

	BLOCK_STRING() {
	    return this.getToken(GraphQLParser.BLOCK_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterStringValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitStringValue(this);
		}
	}


}



class NullValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_nullValue;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterNullValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitNullValue(this);
		}
	}


}



class EnumValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumValue;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumValue(this);
		}
	}


}



class ListValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_listValue;
    }

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

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterListValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitListValue(this);
		}
	}


}



class ObjectValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectValue;
    }

	objectField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ObjectFieldContext);
	    } else {
	        return this.getTypedRuleContext(ObjectFieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectValue(this);
		}
	}


}



class ObjectFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectField;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectField(this);
		}
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_variable;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitVariable(this);
		}
	}


}



class VariableDefinitionsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_variableDefinitions;
    }

	variableDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VariableDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(VariableDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterVariableDefinitions(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitVariableDefinitions(this);
		}
	}


}



class VariableDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_variableDefinition;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	defaultValue() {
	    return this.getTypedRuleContext(DefaultValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterVariableDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitVariableDefinition(this);
		}
	}


}



class DefaultValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_defaultValue;
    }

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDefaultValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDefaultValue(this);
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
        this.ruleIndex = GraphQLParser.RULE_type_;
    }

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	listType() {
	    return this.getTypedRuleContext(ListTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterType_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitType_(this);
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
        this.ruleIndex = GraphQLParser.RULE_namedType;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterNamedType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitNamedType(this);
		}
	}


}



class ListTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_listType;
    }

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterListType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitListType(this);
		}
	}


}



class DirectivesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directives;
    }

	directive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectives(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectives(this);
		}
	}


}



class DirectiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directive;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirective(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirective(this);
		}
	}


}



class TypeSystemDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemDocument;
    }

	typeSystemDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeSystemDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(TypeSystemDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemDocument(this);
		}
	}


}



class TypeSystemDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemDefinition;
    }

	schemaDefinition() {
	    return this.getTypedRuleContext(SchemaDefinitionContext,0);
	};

	typeDefinition() {
	    return this.getTypedRuleContext(TypeDefinitionContext,0);
	};

	directiveDefinition() {
	    return this.getTypedRuleContext(DirectiveDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemDefinition(this);
		}
	}


}



class TypeSystemExtensionDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemExtensionDocument;
    }

	typeSystemExtension = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeSystemExtensionContext);
	    } else {
	        return this.getTypedRuleContext(TypeSystemExtensionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemExtensionDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemExtensionDocument(this);
		}
	}


}



class TypeSystemExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemExtension;
    }

	schemaExtension() {
	    return this.getTypedRuleContext(SchemaExtensionContext,0);
	};

	typeExtension() {
	    return this.getTypedRuleContext(TypeExtensionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemExtension(this);
		}
	}


}



class SchemaDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_schemaDefinition;
    }

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	rootOperationTypeDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RootOperationTypeDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(RootOperationTypeDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSchemaDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSchemaDefinition(this);
		}
	}


}



class RootOperationTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_rootOperationTypeDefinition;
    }

	operationType() {
	    return this.getTypedRuleContext(OperationTypeContext,0);
	};

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterRootOperationTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitRootOperationTypeDefinition(this);
		}
	}


}



class SchemaExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_schemaExtension;
    }

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	rootOperationTypeDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RootOperationTypeDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(RootOperationTypeDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterSchemaExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitSchemaExtension(this);
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
        this.ruleIndex = GraphQLParser.RULE_description;
    }

	stringValue() {
	    return this.getTypedRuleContext(StringValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDescription(this);
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
        this.ruleIndex = GraphQLParser.RULE_typeDefinition;
    }

	scalarTypeDefinition() {
	    return this.getTypedRuleContext(ScalarTypeDefinitionContext,0);
	};

	objectTypeDefinition() {
	    return this.getTypedRuleContext(ObjectTypeDefinitionContext,0);
	};

	interfaceTypeDefinition() {
	    return this.getTypedRuleContext(InterfaceTypeDefinitionContext,0);
	};

	unionTypeDefinition() {
	    return this.getTypedRuleContext(UnionTypeDefinitionContext,0);
	};

	enumTypeDefinition() {
	    return this.getTypedRuleContext(EnumTypeDefinitionContext,0);
	};

	inputObjectTypeDefinition() {
	    return this.getTypedRuleContext(InputObjectTypeDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeDefinition(this);
		}
	}


}



class TypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeExtension;
    }

	scalarTypeExtension() {
	    return this.getTypedRuleContext(ScalarTypeExtensionContext,0);
	};

	objectTypeExtension() {
	    return this.getTypedRuleContext(ObjectTypeExtensionContext,0);
	};

	interfaceTypeExtension() {
	    return this.getTypedRuleContext(InterfaceTypeExtensionContext,0);
	};

	unionTypeExtension() {
	    return this.getTypedRuleContext(UnionTypeExtensionContext,0);
	};

	enumTypeExtension() {
	    return this.getTypedRuleContext(EnumTypeExtensionContext,0);
	};

	inputObjectTypeExtension() {
	    return this.getTypedRuleContext(InputObjectTypeExtensionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeExtension(this);
		}
	}


}



class ScalarTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_scalarTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterScalarTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitScalarTypeDefinition(this);
		}
	}


}



class ScalarTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_scalarTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterScalarTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitScalarTypeExtension(this);
		}
	}


}



class ObjectTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectTypeDefinition(this);
		}
	}


}



class ImplementsInterfacesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_implementsInterfaces;
    }

	namedType() {
	    return this.getTypedRuleContext(NamedTypeContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterImplementsInterfaces(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitImplementsInterfaces(this);
		}
	}


}



class FieldsDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fieldsDefinition;
    }

	fieldDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(FieldDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFieldsDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFieldsDefinition(this);
		}
	}


}



class FieldDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_fieldDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	argumentsDefinition() {
	    return this.getTypedRuleContext(ArgumentsDefinitionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterFieldDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitFieldDefinition(this);
		}
	}


}



class ArgumentsDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_argumentsDefinition;
    }

	inputValueDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InputValueDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(InputValueDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterArgumentsDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitArgumentsDefinition(this);
		}
	}


}



class InputValueDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputValueDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	type_() {
	    return this.getTypedRuleContext(Type_Context,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	defaultValue() {
	    return this.getTypedRuleContext(DefaultValueContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputValueDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputValueDefinition(this);
		}
	}


}



class ObjectTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_objectTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterObjectTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitObjectTypeExtension(this);
		}
	}


}



class InterfaceTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_interfaceTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInterfaceTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInterfaceTypeDefinition(this);
		}
	}


}



class InterfaceTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_interfaceTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	fieldsDefinition() {
	    return this.getTypedRuleContext(FieldsDefinitionContext,0);
	};

	implementsInterfaces() {
	    return this.getTypedRuleContext(ImplementsInterfacesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInterfaceTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInterfaceTypeExtension(this);
		}
	}


}



class UnionTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_unionTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	unionMemberTypes() {
	    return this.getTypedRuleContext(UnionMemberTypesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterUnionTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitUnionTypeDefinition(this);
		}
	}


}



class UnionMemberTypesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_unionMemberTypes;
    }

	namedType = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NamedTypeContext);
	    } else {
	        return this.getTypedRuleContext(NamedTypeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterUnionMemberTypes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitUnionMemberTypes(this);
		}
	}


}



class UnionTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_unionTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	unionMemberTypes() {
	    return this.getTypedRuleContext(UnionMemberTypesContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterUnionTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitUnionTypeExtension(this);
		}
	}


}



class EnumTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enumValuesDefinition() {
	    return this.getTypedRuleContext(EnumValuesDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumTypeDefinition(this);
		}
	}


}



class EnumValuesDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumValuesDefinition;
    }

	enumValueDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumValueDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(EnumValueDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumValuesDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumValuesDefinition(this);
		}
	}


}



class EnumValueDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumValueDefinition;
    }

	enumValue() {
	    return this.getTypedRuleContext(EnumValueContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumValueDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumValueDefinition(this);
		}
	}


}



class EnumTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_enumTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enumValuesDefinition() {
	    return this.getTypedRuleContext(EnumValuesDefinitionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterEnumTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitEnumTypeExtension(this);
		}
	}


}



class InputObjectTypeDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputObjectTypeDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	inputFieldsDefinition() {
	    return this.getTypedRuleContext(InputFieldsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputObjectTypeDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputObjectTypeDefinition(this);
		}
	}


}



class InputFieldsDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputFieldsDefinition;
    }

	inputValueDefinition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InputValueDefinitionContext);
	    } else {
	        return this.getTypedRuleContext(InputValueDefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputFieldsDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputFieldsDefinition(this);
		}
	}


}



class InputObjectTypeExtensionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_inputObjectTypeExtension;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	inputFieldsDefinition() {
	    return this.getTypedRuleContext(InputFieldsDefinitionContext,0);
	};

	directives() {
	    return this.getTypedRuleContext(DirectivesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterInputObjectTypeExtension(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitInputObjectTypeExtension(this);
		}
	}


}



class DirectiveDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directiveDefinition;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	directiveLocations() {
	    return this.getTypedRuleContext(DirectiveLocationsContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	argumentsDefinition() {
	    return this.getTypedRuleContext(ArgumentsDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectiveDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectiveDefinition(this);
		}
	}


}



class DirectiveLocationsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directiveLocations;
    }

	directiveLocation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DirectiveLocationContext);
	    } else {
	        return this.getTypedRuleContext(DirectiveLocationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectiveLocations(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectiveLocations(this);
		}
	}


}



class DirectiveLocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_directiveLocation;
    }

	executableDirectiveLocation() {
	    return this.getTypedRuleContext(ExecutableDirectiveLocationContext,0);
	};

	typeSystemDirectiveLocation() {
	    return this.getTypedRuleContext(TypeSystemDirectiveLocationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterDirectiveLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitDirectiveLocation(this);
		}
	}


}



class ExecutableDirectiveLocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_executableDirectiveLocation;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterExecutableDirectiveLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitExecutableDirectiveLocation(this);
		}
	}


}



class TypeSystemDirectiveLocationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_typeSystemDirectiveLocation;
    }


	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterTypeSystemDirectiveLocation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitTypeSystemDirectiveLocation(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GraphQLParser.RULE_name;
    }

	NAME() {
	    return this.getToken(GraphQLParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GraphQLListener ) {
	        listener.exitName(this);
		}
	}


}




GraphQLParser.DocumentContext = DocumentContext; 
GraphQLParser.DefinitionContext = DefinitionContext; 
GraphQLParser.ExecutableDocumentContext = ExecutableDocumentContext; 
GraphQLParser.ExecutableDefinitionContext = ExecutableDefinitionContext; 
GraphQLParser.OperationDefinitionContext = OperationDefinitionContext; 
GraphQLParser.OperationTypeContext = OperationTypeContext; 
GraphQLParser.SelectionSetContext = SelectionSetContext; 
GraphQLParser.SelectionContext = SelectionContext; 
GraphQLParser.FieldContext = FieldContext; 
GraphQLParser.ArgumentsContext = ArgumentsContext; 
GraphQLParser.ArgumentContext = ArgumentContext; 
GraphQLParser.AliasContext = AliasContext; 
GraphQLParser.FragmentSpreadContext = FragmentSpreadContext; 
GraphQLParser.FragmentDefinitionContext = FragmentDefinitionContext; 
GraphQLParser.FragmentNameContext = FragmentNameContext; 
GraphQLParser.TypeConditionContext = TypeConditionContext; 
GraphQLParser.InlineFragmentContext = InlineFragmentContext; 
GraphQLParser.ValueContext = ValueContext; 
GraphQLParser.IntValueContext = IntValueContext; 
GraphQLParser.FloatValueContext = FloatValueContext; 
GraphQLParser.BooleanValueContext = BooleanValueContext; 
GraphQLParser.StringValueContext = StringValueContext; 
GraphQLParser.NullValueContext = NullValueContext; 
GraphQLParser.EnumValueContext = EnumValueContext; 
GraphQLParser.ListValueContext = ListValueContext; 
GraphQLParser.ObjectValueContext = ObjectValueContext; 
GraphQLParser.ObjectFieldContext = ObjectFieldContext; 
GraphQLParser.VariableContext = VariableContext; 
GraphQLParser.VariableDefinitionsContext = VariableDefinitionsContext; 
GraphQLParser.VariableDefinitionContext = VariableDefinitionContext; 
GraphQLParser.DefaultValueContext = DefaultValueContext; 
GraphQLParser.Type_Context = Type_Context; 
GraphQLParser.NamedTypeContext = NamedTypeContext; 
GraphQLParser.ListTypeContext = ListTypeContext; 
GraphQLParser.DirectivesContext = DirectivesContext; 
GraphQLParser.DirectiveContext = DirectiveContext; 
GraphQLParser.TypeSystemDocumentContext = TypeSystemDocumentContext; 
GraphQLParser.TypeSystemDefinitionContext = TypeSystemDefinitionContext; 
GraphQLParser.TypeSystemExtensionDocumentContext = TypeSystemExtensionDocumentContext; 
GraphQLParser.TypeSystemExtensionContext = TypeSystemExtensionContext; 
GraphQLParser.SchemaDefinitionContext = SchemaDefinitionContext; 
GraphQLParser.RootOperationTypeDefinitionContext = RootOperationTypeDefinitionContext; 
GraphQLParser.SchemaExtensionContext = SchemaExtensionContext; 
GraphQLParser.DescriptionContext = DescriptionContext; 
GraphQLParser.TypeDefinitionContext = TypeDefinitionContext; 
GraphQLParser.TypeExtensionContext = TypeExtensionContext; 
GraphQLParser.ScalarTypeDefinitionContext = ScalarTypeDefinitionContext; 
GraphQLParser.ScalarTypeExtensionContext = ScalarTypeExtensionContext; 
GraphQLParser.ObjectTypeDefinitionContext = ObjectTypeDefinitionContext; 
GraphQLParser.ImplementsInterfacesContext = ImplementsInterfacesContext; 
GraphQLParser.FieldsDefinitionContext = FieldsDefinitionContext; 
GraphQLParser.FieldDefinitionContext = FieldDefinitionContext; 
GraphQLParser.ArgumentsDefinitionContext = ArgumentsDefinitionContext; 
GraphQLParser.InputValueDefinitionContext = InputValueDefinitionContext; 
GraphQLParser.ObjectTypeExtensionContext = ObjectTypeExtensionContext; 
GraphQLParser.InterfaceTypeDefinitionContext = InterfaceTypeDefinitionContext; 
GraphQLParser.InterfaceTypeExtensionContext = InterfaceTypeExtensionContext; 
GraphQLParser.UnionTypeDefinitionContext = UnionTypeDefinitionContext; 
GraphQLParser.UnionMemberTypesContext = UnionMemberTypesContext; 
GraphQLParser.UnionTypeExtensionContext = UnionTypeExtensionContext; 
GraphQLParser.EnumTypeDefinitionContext = EnumTypeDefinitionContext; 
GraphQLParser.EnumValuesDefinitionContext = EnumValuesDefinitionContext; 
GraphQLParser.EnumValueDefinitionContext = EnumValueDefinitionContext; 
GraphQLParser.EnumTypeExtensionContext = EnumTypeExtensionContext; 
GraphQLParser.InputObjectTypeDefinitionContext = InputObjectTypeDefinitionContext; 
GraphQLParser.InputFieldsDefinitionContext = InputFieldsDefinitionContext; 
GraphQLParser.InputObjectTypeExtensionContext = InputObjectTypeExtensionContext; 
GraphQLParser.DirectiveDefinitionContext = DirectiveDefinitionContext; 
GraphQLParser.DirectiveLocationsContext = DirectiveLocationsContext; 
GraphQLParser.DirectiveLocationContext = DirectiveLocationContext; 
GraphQLParser.ExecutableDirectiveLocationContext = ExecutableDirectiveLocationContext; 
GraphQLParser.TypeSystemDirectiveLocationContext = TypeSystemDirectiveLocationContext; 
GraphQLParser.NameContext = NameContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
