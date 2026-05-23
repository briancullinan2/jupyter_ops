// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/sql/informix-sql/InformixSQLParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import InformixSQLParserListener from './InformixSQLParserListener.js';
const serializedATN = [4,1,195,432,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,129,8,1,1,1,1,1,1,2,1,2,1,2,
1,2,1,2,3,2,138,8,2,1,2,1,2,1,3,1,3,1,3,1,3,3,3,146,8,3,1,3,1,3,1,4,1,4,
1,4,1,4,3,4,154,8,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,162,8,5,1,5,1,5,3,5,166,
8,5,1,6,1,6,1,6,1,6,3,6,172,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
1,8,3,8,185,8,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,3,10,198,
8,10,1,10,1,10,3,10,202,8,10,1,11,1,11,1,11,1,11,3,11,208,8,11,1,11,1,11,
1,11,1,12,1,12,1,12,1,12,1,12,3,12,218,8,12,1,12,1,12,1,12,1,13,1,13,1,13,
1,13,3,13,227,8,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,3,14,236,8,14,1,14,
1,14,1,15,1,15,1,15,1,15,3,15,244,8,15,1,15,1,15,1,16,1,16,1,16,1,16,3,16,
252,8,16,1,16,1,16,3,16,256,8,16,1,17,1,17,1,17,1,18,1,18,1,18,1,19,1,19,
1,19,3,19,267,8,19,1,20,1,20,3,20,271,8,20,1,21,1,21,1,21,1,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,
24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,26,1,26,1,26,1,26,1,26,3,26,306,
8,26,1,26,3,26,309,8,26,3,26,311,8,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,
1,27,1,27,1,27,1,28,1,28,1,28,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,31,1,31,3,31,344,8,31,1,31,1,31,
1,31,3,31,349,8,31,3,31,351,8,31,1,32,1,32,1,32,3,32,356,8,32,1,33,1,33,
1,33,3,33,361,8,33,1,33,1,33,1,33,3,33,366,8,33,3,33,368,8,33,1,34,1,34,
1,34,1,34,1,34,3,34,375,8,34,1,35,1,35,1,35,1,35,1,35,1,35,5,35,383,8,35,
10,35,12,35,386,9,35,3,35,388,8,35,1,35,1,35,3,35,392,8,35,1,36,1,36,1,36,
1,36,1,36,1,36,3,36,400,8,36,1,36,1,36,3,36,404,8,36,1,37,1,37,1,37,3,37,
409,8,37,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,39,1,39,3,39,420,8,39,1,40,
1,40,1,40,5,40,425,8,40,10,40,12,40,428,9,40,1,41,1,41,1,41,0,0,42,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,78,80,82,0,3,2,0,26,26,122,122,2,0,54,54,
59,59,2,0,6,125,127,187,465,0,87,1,0,0,0,2,128,1,0,0,0,4,132,1,0,0,0,6,141,
1,0,0,0,8,149,1,0,0,0,10,157,1,0,0,0,12,167,1,0,0,0,14,175,1,0,0,0,16,180,
1,0,0,0,18,189,1,0,0,0,20,193,1,0,0,0,22,203,1,0,0,0,24,212,1,0,0,0,26,222,
1,0,0,0,28,231,1,0,0,0,30,239,1,0,0,0,32,247,1,0,0,0,34,257,1,0,0,0,36,260,
1,0,0,0,38,263,1,0,0,0,40,268,1,0,0,0,42,272,1,0,0,0,44,276,1,0,0,0,46,282,
1,0,0,0,48,288,1,0,0,0,50,294,1,0,0,0,52,300,1,0,0,0,54,316,1,0,0,0,56,322,
1,0,0,0,58,328,1,0,0,0,60,335,1,0,0,0,62,341,1,0,0,0,64,352,1,0,0,0,66,357,
1,0,0,0,68,369,1,0,0,0,70,376,1,0,0,0,72,393,1,0,0,0,74,405,1,0,0,0,76,410,
1,0,0,0,78,419,1,0,0,0,80,421,1,0,0,0,82,429,1,0,0,0,84,86,3,2,1,0,85,84,
1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,
0,0,0,90,91,5,0,0,1,91,1,1,0,0,0,92,129,3,4,2,0,93,129,3,34,17,0,94,129,
3,36,18,0,95,129,3,40,20,0,96,129,3,26,13,0,97,129,3,28,14,0,98,129,3,30,
15,0,99,129,3,32,16,0,100,129,3,6,3,0,101,129,3,8,4,0,102,129,3,10,5,0,103,
129,3,12,6,0,104,129,3,14,7,0,105,129,3,16,8,0,106,129,3,18,9,0,107,129,
3,20,10,0,108,129,3,22,11,0,109,129,3,24,12,0,110,129,3,38,19,0,111,129,
3,42,21,0,112,129,3,44,22,0,113,129,3,46,23,0,114,129,3,48,24,0,115,129,
3,50,25,0,116,129,3,52,26,0,117,129,3,54,27,0,118,129,3,56,28,0,119,129,
3,58,29,0,120,129,3,60,30,0,121,129,3,62,31,0,122,129,3,64,32,0,123,129,
3,66,33,0,124,129,3,68,34,0,125,129,3,70,35,0,126,129,3,72,36,0,127,129,
3,74,37,0,128,92,1,0,0,0,128,93,1,0,0,0,128,94,1,0,0,0,128,95,1,0,0,0,128,
96,1,0,0,0,128,97,1,0,0,0,128,98,1,0,0,0,128,99,1,0,0,0,128,100,1,0,0,0,
128,101,1,0,0,0,128,102,1,0,0,0,128,103,1,0,0,0,128,104,1,0,0,0,128,105,
1,0,0,0,128,106,1,0,0,0,128,107,1,0,0,0,128,108,1,0,0,0,128,109,1,0,0,0,
128,110,1,0,0,0,128,111,1,0,0,0,128,112,1,0,0,0,128,113,1,0,0,0,128,114,
1,0,0,0,128,115,1,0,0,0,128,116,1,0,0,0,128,117,1,0,0,0,128,118,1,0,0,0,
128,119,1,0,0,0,128,120,1,0,0,0,128,121,1,0,0,0,128,122,1,0,0,0,128,123,
1,0,0,0,128,124,1,0,0,0,128,125,1,0,0,0,128,126,1,0,0,0,128,127,1,0,0,0,
129,130,1,0,0,0,130,131,5,1,0,0,131,3,1,0,0,0,132,133,5,39,0,0,133,137,5,
126,0,0,134,135,5,75,0,0,135,136,5,98,0,0,136,138,5,64,0,0,137,134,1,0,0,
0,137,138,1,0,0,0,138,139,1,0,0,0,139,140,3,78,39,0,140,5,1,0,0,0,141,142,
5,56,0,0,142,145,5,126,0,0,143,144,5,75,0,0,144,146,5,64,0,0,145,143,1,0,
0,0,145,146,1,0,0,0,146,147,1,0,0,0,147,148,3,78,39,0,148,7,1,0,0,0,149,
150,5,56,0,0,150,153,5,133,0,0,151,152,5,75,0,0,152,154,5,64,0,0,153,151,
1,0,0,0,153,154,1,0,0,0,154,155,1,0,0,0,155,156,3,80,40,0,156,9,1,0,0,0,
157,158,5,56,0,0,158,161,5,134,0,0,159,160,5,75,0,0,160,162,5,64,0,0,161,
159,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,165,3,80,40,0,164,166,7,
0,0,0,165,164,1,0,0,0,165,166,1,0,0,0,166,11,1,0,0,0,167,168,5,56,0,0,168,
171,5,140,0,0,169,170,5,75,0,0,170,172,5,64,0,0,171,169,1,0,0,0,171,172,
1,0,0,0,172,173,1,0,0,0,173,174,3,80,40,0,174,13,1,0,0,0,175,176,5,56,0,
0,176,177,5,141,0,0,177,178,5,38,0,0,178,179,3,78,39,0,179,15,1,0,0,0,180,
181,5,56,0,0,181,184,5,142,0,0,182,183,5,75,0,0,183,185,5,64,0,0,184,182,
1,0,0,0,184,185,1,0,0,0,185,186,1,0,0,0,186,187,3,80,40,0,187,188,5,122,
0,0,188,17,1,0,0,0,189,190,5,56,0,0,190,191,5,146,0,0,191,192,3,78,39,0,
192,19,1,0,0,0,193,194,5,56,0,0,194,197,5,150,0,0,195,196,5,75,0,0,196,198,
5,64,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,201,3,80,40,
0,200,202,7,0,0,0,201,200,1,0,0,0,201,202,1,0,0,0,202,21,1,0,0,0,203,204,
5,56,0,0,204,207,5,157,0,0,205,206,5,75,0,0,206,208,5,64,0,0,207,205,1,0,
0,0,207,208,1,0,0,0,208,209,1,0,0,0,209,210,3,80,40,0,210,211,5,122,0,0,
211,23,1,0,0,0,212,213,5,56,0,0,213,214,5,157,0,0,214,217,5,142,0,0,215,
216,5,75,0,0,216,218,5,64,0,0,217,215,1,0,0,0,217,218,1,0,0,0,218,219,1,
0,0,0,219,220,3,80,40,0,220,221,5,122,0,0,221,25,1,0,0,0,222,223,5,56,0,
0,223,226,5,8,0,0,224,225,5,75,0,0,225,227,5,64,0,0,226,224,1,0,0,0,226,
227,1,0,0,0,227,228,1,0,0,0,228,229,3,80,40,0,229,230,5,122,0,0,230,27,1,
0,0,0,231,232,5,56,0,0,232,235,5,11,0,0,233,234,5,75,0,0,234,236,5,64,0,
0,235,233,1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,238,3,80,40,0,238,
29,1,0,0,0,239,240,5,56,0,0,240,243,5,44,0,0,241,242,5,75,0,0,242,244,5,
64,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,246,3,80,40,0,
246,31,1,0,0,0,247,248,5,56,0,0,248,251,5,79,0,0,249,250,5,75,0,0,250,252,
5,64,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,253,1,0,0,0,253,255,3,80,40,
0,254,256,5,105,0,0,255,254,1,0,0,0,255,256,1,0,0,0,256,33,1,0,0,0,257,258,
5,30,0,0,258,259,3,80,40,0,259,35,1,0,0,0,260,261,5,30,0,0,261,262,5,44,
0,0,262,37,1,0,0,0,263,264,5,44,0,0,264,266,3,78,39,0,265,267,5,63,0,0,266,
265,1,0,0,0,266,267,1,0,0,0,267,39,1,0,0,0,268,270,5,34,0,0,269,271,5,156,
0,0,270,269,1,0,0,0,270,271,1,0,0,0,271,41,1,0,0,0,272,273,5,119,0,0,273,
274,5,128,0,0,274,275,3,80,40,0,275,43,1,0,0,0,276,277,5,120,0,0,277,278,
5,33,0,0,278,279,3,80,40,0,279,280,5,138,0,0,280,281,3,80,40,0,281,45,1,
0,0,0,282,283,5,120,0,0,283,284,5,37,0,0,284,285,3,80,40,0,285,286,5,138,
0,0,286,287,3,80,40,0,287,47,1,0,0,0,288,289,5,120,0,0,289,290,5,44,0,0,
290,291,3,80,40,0,291,292,5,138,0,0,292,293,3,80,40,0,293,49,1,0,0,0,294,
295,5,120,0,0,295,296,5,79,0,0,296,297,3,80,40,0,297,298,5,138,0,0,298,299,
3,80,40,0,299,51,1,0,0,0,300,301,5,120,0,0,301,310,5,129,0,0,302,311,5,109,
0,0,303,308,5,91,0,0,304,306,3,80,40,0,305,304,1,0,0,0,305,306,1,0,0,0,306,
309,1,0,0,0,307,309,5,35,0,0,308,305,1,0,0,0,308,307,1,0,0,0,309,311,1,0,
0,0,310,302,1,0,0,0,310,303,1,0,0,0,311,312,1,0,0,0,312,313,3,80,40,0,313,
314,5,138,0,0,314,315,3,80,40,0,315,53,1,0,0,0,316,317,5,120,0,0,317,318,
5,132,0,0,318,319,3,80,40,0,319,320,5,138,0,0,320,321,3,80,40,0,321,55,1,
0,0,0,322,323,5,120,0,0,323,324,5,134,0,0,324,325,3,80,40,0,325,326,5,138,
0,0,326,327,3,80,40,0,327,57,1,0,0,0,328,329,5,120,0,0,329,330,5,141,0,0,
330,331,5,38,0,0,331,332,3,80,40,0,332,333,5,138,0,0,333,334,3,80,40,0,334,
59,1,0,0,0,335,336,5,120,0,0,336,337,5,146,0,0,337,338,3,80,40,0,338,339,
5,138,0,0,339,340,3,80,40,0,340,61,1,0,0,0,341,343,5,124,0,0,342,344,5,156,
0,0,343,342,1,0,0,0,343,344,1,0,0,0,344,350,1,0,0,0,345,346,5,138,0,0,346,
348,5,128,0,0,347,349,3,80,40,0,348,347,1,0,0,0,348,349,1,0,0,0,349,351,
1,0,0,0,350,345,1,0,0,0,350,351,1,0,0,0,351,63,1,0,0,0,352,353,5,128,0,0,
353,355,3,80,40,0,354,356,5,144,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,
65,1,0,0,0,357,358,5,131,0,0,358,360,5,20,0,0,359,361,7,1,0,0,360,359,1,
0,0,0,360,361,1,0,0,0,361,367,1,0,0,0,362,365,5,67,0,0,363,366,3,80,40,0,
364,366,3,78,39,0,365,363,1,0,0,0,365,364,1,0,0,0,366,368,1,0,0,0,367,362,
1,0,0,0,367,368,1,0,0,0,368,67,1,0,0,0,369,374,5,131,0,0,370,371,5,32,0,
0,371,375,3,76,38,0,372,373,5,97,0,0,373,375,5,32,0,0,374,370,1,0,0,0,374,
372,1,0,0,0,375,69,1,0,0,0,376,377,5,131,0,0,377,391,5,45,0,0,378,387,5,
104,0,0,379,384,3,80,40,0,380,381,5,3,0,0,381,383,3,80,40,0,382,380,1,0,
0,0,383,386,1,0,0,0,384,382,1,0,0,0,384,385,1,0,0,0,385,388,1,0,0,0,386,
384,1,0,0,0,387,379,1,0,0,0,387,388,1,0,0,0,388,392,1,0,0,0,389,392,5,102,
0,0,390,392,5,46,0,0,391,378,1,0,0,0,391,389,1,0,0,0,391,390,1,0,0,0,392,
71,1,0,0,0,393,394,5,131,0,0,394,395,5,51,0,0,395,396,5,69,0,0,396,399,5,
138,0,0,397,400,5,192,0,0,398,400,3,80,40,0,399,397,1,0,0,0,399,398,1,0,
0,0,400,403,1,0,0,0,401,402,5,154,0,0,402,404,5,16,0,0,403,401,1,0,0,0,403,
404,1,0,0,0,404,73,1,0,0,0,405,406,5,131,0,0,406,408,5,49,0,0,407,409,7,
1,0,0,408,407,1,0,0,0,408,409,1,0,0,0,409,75,1,0,0,0,410,411,5,192,0,0,411,
77,1,0,0,0,412,420,5,188,0,0,413,420,3,82,41,0,414,420,5,191,0,0,415,416,
5,4,0,0,416,417,3,78,39,0,417,418,5,5,0,0,418,420,1,0,0,0,419,412,1,0,0,
0,419,413,1,0,0,0,419,414,1,0,0,0,419,415,1,0,0,0,420,79,1,0,0,0,421,426,
3,78,39,0,422,423,5,2,0,0,423,425,3,78,39,0,424,422,1,0,0,0,425,428,1,0,
0,0,426,424,1,0,0,0,426,427,1,0,0,0,427,81,1,0,0,0,428,426,1,0,0,0,429,430,
7,2,0,0,430,83,1,0,0,0,39,87,128,137,145,153,161,165,171,184,197,201,207,
217,226,235,243,251,255,266,270,305,308,310,343,348,350,355,360,365,367,
374,384,387,391,399,403,408,419,426];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class InformixSQLParser extends antlr4.Parser {

    static grammarFileName = "InformixSQLParser.g4";
    static literalNames = [ null, "';'", "'.'", "','", "'('", "')'", "'ABORT'", 
                            "'ACTION'", "'ACCESS_METHOD'", "'ADD'", "'AFTER'", 
                            "'AGGREGATE'", "'ALL'", "'ALTER'", "'ANALYZE'", 
                            "'AND'", "'APPEND'", "'AS'", "'ASC'", "'ATTACH'", 
                            "'AUTOFREE'", "'AUTOINCREMENT'", "'BEFORE'", 
                            "'BEGIN'", "'BETWEEN'", "'BY'", "'CASCADE'", 
                            "'CASE'", "'CAST'", "'CHECK'", "'CLOSE'", "'COLLATE'", 
                            "'COLLATION'", "'COLUMN'", "'COMMIT'", "'COMPONENT'", 
                            "'CONFLICT'", "'CONSTRAINT'", "'CONTEXT'", "'CREATE'", 
                            "'CROSS'", "'CURRENT_DATE'", "'CURRENT_TIME'", 
                            "'CURRENT_TIMESTAMP'", "'DATABASE'", "'DATASKIP'", 
                            "'DEFAULT'", "'DEFERRABLE'", "'DEFERRED'", "'DEFERRED_PREPARE'", 
                            "'DELETE'", "'DEBUG'", "'DESC'", "'DETACH'", 
                            "'DISABLED'", "'DISTINCT'", "'DROP'", "'EACH'", 
                            "'ELSE'", "'ENABLED'", "'END'", "'ESCAPE'", 
                            "'EXCEPT'", "'EXCLUSIVE'", "'EXISTS'", "'EXPLAIN'", 
                            "'FAIL'", "'FOR'", "'FOREIGN'", "'FILE'", "'FROM'", 
                            "'FULL'", "'GLOB'", "'GROUP'", "'HAVING'", "'IF'", 
                            "'IGNORE'", "'IMMEDIATE'", "'IN'", "'INDEX'", 
                            "'INDEXED'", "'INITIALLY'", "'INNER'", "'INSERT'", 
                            "'INSTEAD'", "'INTERSECT'", "'INTO'", "'IS'", 
                            "'ISNULL'", "'JOIN'", "'KEY'", "'LABEL'", "'LEFT'", 
                            "'LIKE'", "'LIMIT'", "'MATCH'", "'NATURAL'", 
                            "'NO'", "'NOT'", "'NOTNULL'", "'NULL'", "'OF'", 
                            "'OFF'", "'OFFSET'", "'ON'", "'ONLINE'", "'OR'", 
                            "'ORDER'", "'OUTER'", "'POLICY'", "'PLAN'", 
                            "'PRAGMA'", "'PRIMARY'", "'QUERY'", "'RAISE'", 
                            "'RECURSIVE'", "'REFERENCES'", "'REGEXP'", "'REINDEX'", 
                            "'RELEASE'", "'RENAME'", "'REPLACE'", "'RESTRICT'", 
                            "'RIGHT'", "'ROLLBACK'", "'ROW'", "'ROLE'", 
                            "'ROWS'", "'SAVEPOINT'", "'SECURITY'", "'SELECT'", 
                            "'SET'", "'SEQUENCE'", "'SYNONYM'", "'TABLE'", 
                            "'TEMP'", "'TEMPORARY'", "'THEN'", "'TO'", "'TRANSACTION'", 
                            "'TRIGGER'", "'TRUSTED'", "'TYPE'", "'UNION'", 
                            "'UNIQUE'", "'UPDATE'", "'USER'", "'USING'", 
                            "'VACUUM'", "'VALUES'", "'VIEW'", "'VIRTUAL'", 
                            "'WHEN'", "'WHERE'", "'WITH'", "'WITHOUT'", 
                            "'WORK'", "'XADATASOURCE'", "'FIRST_VALUE'", 
                            "'OVER'", "'PARTITION'", "'RANGE'", "'PRECEDING'", 
                            "'UNBOUNDED'", "'CURRENT'", "'FOLLOWING'", "'CUME_DIST'", 
                            "'DENSE_RANK'", "'LAG'", "'LAST_VALUE'", "'LEAD'", 
                            "'NTH_VALUE'", "'NTILE'", "'PERCENT_RANK'", 
                            "'RANK'", "'ROW_NUMBER'", "'GENERATED'", "'ALWAYS'", 
                            "'STORED'", "'TRUE'", "'FALSE'", "'WINDOW'", 
                            "'NULLS'", "'FIRST'", "'LAST'", "'FILTER'", 
                            "'GROUPS'", "'EXCLUDE'" ];
    static symbolicNames = [ null, "SCOL", "DOT", "COMMA", "OPEN_PAR", "CLOSE_PAR", 
                             "ABORT", "ACTION", "ACCESS_METHOD", "ADD", 
                             "AFTER", "AGGREGATE", "ALL", "ALTER", "ANALYZE", 
                             "AND", "APPEND", "AS", "ASC", "ATTACH", "AUTOFREE", 
                             "AUTOINCREMENT", "BEFORE", "BEGIN", "BETWEEN", 
                             "BY", "CASCADE", "CASE", "CAST", "CHECK", "CLOSE", 
                             "COLLATE", "COLLATION", "COLUMN", "COMMIT", 
                             "COMPONENT", "CONFLICT", "CONSTRAINT", "CONTEXT", 
                             "CREATE", "CROSS", "CURRENT_DATE", "CURRENT_TIME", 
                             "CURRENT_TIMESTAMP", "DATABASE", "DATASKIP", 
                             "DEFAULT", "DEFERRABLE", "DEFERRED", "DEFERRED_PREPARE", 
                             "DELETE", "DEBUG", "DESC", "DETACH", "DISABLED", 
                             "DISTINCT", "DROP", "EACH", "ELSE", "ENABLED", 
                             "END", "ESCAPE", "EXCEPT", "EXCLUSIVE", "EXISTS", 
                             "EXPLAIN", "FAIL", "FOR", "FOREIGN", "FILE", 
                             "FROM", "FULL", "GLOB", "GROUP", "HAVING", 
                             "IF", "IGNORE", "IMMEDIATE", "IN", "INDEX", 
                             "INDEXED", "INITIALLY", "INNER", "INSERT", 
                             "INSTEAD", "INTERSECT", "INTO", "IS", "ISNULL", 
                             "JOIN", "KEY", "LABEL", "LEFT", "LIKE", "LIMIT", 
                             "MATCH", "NATURAL", "NO", "NOT", "NOTNULL", 
                             "NULL", "OF", "OFF", "OFFSET", "ON", "ONLINE", 
                             "OR", "ORDER", "OUTER", "POLICY", "PLAN", "PRAGMA", 
                             "PRIMARY", "QUERY", "RAISE", "RECURSIVE", "REFERENCES", 
                             "REGEXP", "REINDEX", "RELEASE", "RENAME", "REPLACE", 
                             "RESTRICT", "RIGHT", "ROLLBACK", "ROW", "ROLE", 
                             "ROWS", "SAVEPOINT", "SECURITY", "SELECT", 
                             "SET", "SEQUENCE", "SYNONYM", "TABLE", "TEMP", 
                             "TEMPORARY", "THEN", "TO", "TRANSACTION", "TRIGGER", 
                             "TRUSTED", "TYPE", "UNION", "UNIQUE", "UPDATE", 
                             "USER", "USING", "VACUUM", "VALUES", "VIEW", 
                             "VIRTUAL", "WHEN", "WHERE", "WITH", "WITHOUT", 
                             "WORK", "XADATASOURCE", "FIRST_VALUE", "OVER", 
                             "PARTITION", "RANGE", "PRECEDING", "UNBOUNDED", 
                             "CURRENT", "FOLLOWING", "CUME_DIST", "DENSE_RANK", 
                             "LAG", "LAST_VALUE", "LEAD", "NTH_VALUE", "NTILE", 
                             "PERCENT_RANK", "RANK", "ROW_NUMBER", "GENERATED", 
                             "ALWAYS", "STORED", "TRUE", "FALSE", "WINDOW", 
                             "NULLS", "FIRST", "LAST", "FILTER", "GROUPS", 
                             "EXCLUDE", "IDENTIFIER", "NUMERIC_LITERAL", 
                             "BIND_PARAMETER", "STRING_LITERAL", "CHAR_STRING", 
                             "SINGLE_LINE_COMMENT", "MULTILINE_COMMENT", 
                             "SPACES" ];
    static ruleNames = [ "sqlScript", "unitStatement", "createRole", "dropRole", 
                         "dropSynonym", "dropTable", "dropTrigger", "dropTrustedContext", 
                         "dropType", "dropUser", "dropView", "dropXadatasource", 
                         "dropXadataTypeSource", "dropAccessMethod", "dropAggregate", 
                         "dropDatabase", "dropIndex", "closeStmt", "closeDatabaseStmt", 
                         "databaseStmt", "commitWorkStmt", "releaseSavepoint", 
                         "renameColumn", "renameConstraint", "renameDatabase", 
                         "renameIndex", "renameSecurity", "renameSequence", 
                         "renameTable", "renameTrustedContext", "renameUser", 
                         "rollbackWork", "savepointStmt", "setAutofree", 
                         "setCollation", "setDataskip", "setDebugFile", 
                         "setDeferredPrepareStatement", "quotedString", 
                         "anyName", "identifier", "keyword" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = InformixSQLParser.ruleNames;
        this.literalNames = InformixSQLParser.literalNames;
        this.symbolicNames = InformixSQLParser.symbolicNames;
    }



	sqlScript() {
	    let localctx = new SqlScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, InformixSQLParser.RULE_sqlScript);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 67125777) !== 0) || ((((_la - 119)) & ~0x1f) === 0 && ((1 << (_la - 119)) & 4643) !== 0)) {
	            this.state = 84;
	            this.unitStatement();
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
	        this.match(InformixSQLParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unitStatement() {
	    let localctx = new UnitStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, InformixSQLParser.RULE_unitStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 92;
	            this.createRole();
	            break;

	        case 2:
	            this.state = 93;
	            this.closeStmt();
	            break;

	        case 3:
	            this.state = 94;
	            this.closeDatabaseStmt();
	            break;

	        case 4:
	            this.state = 95;
	            this.commitWorkStmt();
	            break;

	        case 5:
	            this.state = 96;
	            this.dropAccessMethod();
	            break;

	        case 6:
	            this.state = 97;
	            this.dropAggregate();
	            break;

	        case 7:
	            this.state = 98;
	            this.dropDatabase();
	            break;

	        case 8:
	            this.state = 99;
	            this.dropIndex();
	            break;

	        case 9:
	            this.state = 100;
	            this.dropRole();
	            break;

	        case 10:
	            this.state = 101;
	            this.dropSynonym();
	            break;

	        case 11:
	            this.state = 102;
	            this.dropTable();
	            break;

	        case 12:
	            this.state = 103;
	            this.dropTrigger();
	            break;

	        case 13:
	            this.state = 104;
	            this.dropTrustedContext();
	            break;

	        case 14:
	            this.state = 105;
	            this.dropType();
	            break;

	        case 15:
	            this.state = 106;
	            this.dropUser();
	            break;

	        case 16:
	            this.state = 107;
	            this.dropView();
	            break;

	        case 17:
	            this.state = 108;
	            this.dropXadatasource();
	            break;

	        case 18:
	            this.state = 109;
	            this.dropXadataTypeSource();
	            break;

	        case 19:
	            this.state = 110;
	            this.databaseStmt();
	            break;

	        case 20:
	            this.state = 111;
	            this.releaseSavepoint();
	            break;

	        case 21:
	            this.state = 112;
	            this.renameColumn();
	            break;

	        case 22:
	            this.state = 113;
	            this.renameConstraint();
	            break;

	        case 23:
	            this.state = 114;
	            this.renameDatabase();
	            break;

	        case 24:
	            this.state = 115;
	            this.renameIndex();
	            break;

	        case 25:
	            this.state = 116;
	            this.renameSecurity();
	            break;

	        case 26:
	            this.state = 117;
	            this.renameSequence();
	            break;

	        case 27:
	            this.state = 118;
	            this.renameTable();
	            break;

	        case 28:
	            this.state = 119;
	            this.renameTrustedContext();
	            break;

	        case 29:
	            this.state = 120;
	            this.renameUser();
	            break;

	        case 30:
	            this.state = 121;
	            this.rollbackWork();
	            break;

	        case 31:
	            this.state = 122;
	            this.savepointStmt();
	            break;

	        case 32:
	            this.state = 123;
	            this.setAutofree();
	            break;

	        case 33:
	            this.state = 124;
	            this.setCollation();
	            break;

	        case 34:
	            this.state = 125;
	            this.setDataskip();
	            break;

	        case 35:
	            this.state = 126;
	            this.setDebugFile();
	            break;

	        case 36:
	            this.state = 127;
	            this.setDeferredPrepareStatement();
	            break;

	        }
	        this.state = 130;
	        this.match(InformixSQLParser.SCOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createRole() {
	    let localctx = new CreateRoleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, InformixSQLParser.RULE_createRole);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 132;
	        this.match(InformixSQLParser.CREATE);
	        this.state = 133;
	        this.match(InformixSQLParser.ROLE);
	        this.state = 137;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 134;
	            this.match(InformixSQLParser.IF);
	            this.state = 135;
	            this.match(InformixSQLParser.NOT);
	            this.state = 136;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 139;
	        localctx.roleName = this.anyName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropRole() {
	    let localctx = new DropRoleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, InformixSQLParser.RULE_dropRole);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this.match(InformixSQLParser.DROP);
	        this.state = 142;
	        this.match(InformixSQLParser.ROLE);
	        this.state = 145;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        if(la_===1) {
	            this.state = 143;
	            this.match(InformixSQLParser.IF);
	            this.state = 144;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 147;
	        localctx.roleName = this.anyName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropSynonym() {
	    let localctx = new DropSynonymContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, InformixSQLParser.RULE_dropSynonym);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(InformixSQLParser.DROP);
	        this.state = 150;
	        this.match(InformixSQLParser.SYNONYM);
	        this.state = 153;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        if(la_===1) {
	            this.state = 151;
	            this.match(InformixSQLParser.IF);
	            this.state = 152;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 155;
	        localctx.synonymName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropTable() {
	    let localctx = new DropTableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, InformixSQLParser.RULE_dropTable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 157;
	        this.match(InformixSQLParser.DROP);
	        this.state = 158;
	        this.match(InformixSQLParser.TABLE);
	        this.state = 161;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 159;
	            this.match(InformixSQLParser.IF);
	            this.state = 160;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 163;
	        localctx.tableName = this.identifier();
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26 || _la===122) {
	            this.state = 164;
	            _la = this._input.LA(1);
	            if(!(_la===26 || _la===122)) {
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



	dropTrigger() {
	    let localctx = new DropTriggerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, InformixSQLParser.RULE_dropTrigger);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(InformixSQLParser.DROP);
	        this.state = 168;
	        this.match(InformixSQLParser.TRIGGER);
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 169;
	            this.match(InformixSQLParser.IF);
	            this.state = 170;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 173;
	        localctx.triggerName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropTrustedContext() {
	    let localctx = new DropTrustedContextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, InformixSQLParser.RULE_dropTrustedContext);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(InformixSQLParser.DROP);
	        this.state = 176;
	        this.match(InformixSQLParser.TRUSTED);
	        this.state = 177;
	        this.match(InformixSQLParser.CONTEXT);
	        this.state = 178;
	        localctx.contextName = this.anyName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropType() {
	    let localctx = new DropTypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, InformixSQLParser.RULE_dropType);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(InformixSQLParser.DROP);
	        this.state = 181;
	        this.match(InformixSQLParser.TYPE);
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 182;
	            this.match(InformixSQLParser.IF);
	            this.state = 183;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 186;
	        localctx.dataTypeName = this.identifier();
	        this.state = 187;
	        this.match(InformixSQLParser.RESTRICT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropUser() {
	    let localctx = new DropUserContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, InformixSQLParser.RULE_dropUser);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(InformixSQLParser.DROP);
	        this.state = 190;
	        this.match(InformixSQLParser.USER);
	        this.state = 191;
	        localctx.userName = this.anyName();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropView() {
	    let localctx = new DropViewContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, InformixSQLParser.RULE_dropView);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 193;
	        this.match(InformixSQLParser.DROP);
	        this.state = 194;
	        this.match(InformixSQLParser.VIEW);
	        this.state = 197;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 195;
	            this.match(InformixSQLParser.IF);
	            this.state = 196;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 199;
	        localctx.viewName = this.identifier();
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===26 || _la===122) {
	            this.state = 200;
	            _la = this._input.LA(1);
	            if(!(_la===26 || _la===122)) {
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



	dropXadatasource() {
	    let localctx = new DropXadatasourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, InformixSQLParser.RULE_dropXadatasource);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.match(InformixSQLParser.DROP);
	        this.state = 204;
	        this.match(InformixSQLParser.XADATASOURCE);
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        if(la_===1) {
	            this.state = 205;
	            this.match(InformixSQLParser.IF);
	            this.state = 206;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 209;
	        localctx.xaSourceName = this.identifier();
	        this.state = 210;
	        this.match(InformixSQLParser.RESTRICT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropXadataTypeSource() {
	    let localctx = new DropXadataTypeSourceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, InformixSQLParser.RULE_dropXadataTypeSource);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this.match(InformixSQLParser.DROP);
	        this.state = 213;
	        this.match(InformixSQLParser.XADATASOURCE);
	        this.state = 214;
	        this.match(InformixSQLParser.TYPE);
	        this.state = 217;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,12,this._ctx);
	        if(la_===1) {
	            this.state = 215;
	            this.match(InformixSQLParser.IF);
	            this.state = 216;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 219;
	        localctx.xaSourceName = this.identifier();
	        this.state = 220;
	        this.match(InformixSQLParser.RESTRICT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropAccessMethod() {
	    let localctx = new DropAccessMethodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, InformixSQLParser.RULE_dropAccessMethod);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(InformixSQLParser.DROP);
	        this.state = 223;
	        this.match(InformixSQLParser.ACCESS_METHOD);
	        this.state = 226;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        if(la_===1) {
	            this.state = 224;
	            this.match(InformixSQLParser.IF);
	            this.state = 225;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 228;
	        localctx.accessMethodName = this.identifier();
	        this.state = 229;
	        this.match(InformixSQLParser.RESTRICT);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropAggregate() {
	    let localctx = new DropAggregateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, InformixSQLParser.RULE_dropAggregate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(InformixSQLParser.DROP);
	        this.state = 232;
	        this.match(InformixSQLParser.AGGREGATE);
	        this.state = 235;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
	        if(la_===1) {
	            this.state = 233;
	            this.match(InformixSQLParser.IF);
	            this.state = 234;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 237;
	        localctx.aggregateName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropDatabase() {
	    let localctx = new DropDatabaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, InformixSQLParser.RULE_dropDatabase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 239;
	        this.match(InformixSQLParser.DROP);
	        this.state = 240;
	        this.match(InformixSQLParser.DATABASE);
	        this.state = 243;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 241;
	            this.match(InformixSQLParser.IF);
	            this.state = 242;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 245;
	        localctx.databaseName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dropIndex() {
	    let localctx = new DropIndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, InformixSQLParser.RULE_dropIndex);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        this.match(InformixSQLParser.DROP);
	        this.state = 248;
	        this.match(InformixSQLParser.INDEX);
	        this.state = 251;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        if(la_===1) {
	            this.state = 249;
	            this.match(InformixSQLParser.IF);
	            this.state = 250;
	            this.match(InformixSQLParser.EXISTS);

	        }
	        this.state = 253;
	        localctx.indexName = this.identifier();
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===105) {
	            this.state = 254;
	            this.match(InformixSQLParser.ONLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	closeStmt() {
	    let localctx = new CloseStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, InformixSQLParser.RULE_closeStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 257;
	        this.match(InformixSQLParser.CLOSE);
	        this.state = 258;
	        localctx.cursorId = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	closeDatabaseStmt() {
	    let localctx = new CloseDatabaseStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, InformixSQLParser.RULE_closeDatabaseStmt);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        this.match(InformixSQLParser.CLOSE);
	        this.state = 261;
	        this.match(InformixSQLParser.DATABASE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	databaseStmt() {
	    let localctx = new DatabaseStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, InformixSQLParser.RULE_databaseStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(InformixSQLParser.DATABASE);
	        this.state = 264;
	        localctx.databaseName = this.anyName();
	        this.state = 266;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===63) {
	            this.state = 265;
	            this.match(InformixSQLParser.EXCLUSIVE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	commitWorkStmt() {
	    let localctx = new CommitWorkStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, InformixSQLParser.RULE_commitWorkStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 268;
	        this.match(InformixSQLParser.COMMIT);
	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===156) {
	            this.state = 269;
	            this.match(InformixSQLParser.WORK);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	releaseSavepoint() {
	    let localctx = new ReleaseSavepointContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, InformixSQLParser.RULE_releaseSavepoint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.match(InformixSQLParser.RELEASE);
	        this.state = 273;
	        this.match(InformixSQLParser.SAVEPOINT);
	        this.state = 274;
	        localctx.savepointName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameColumn() {
	    let localctx = new RenameColumnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, InformixSQLParser.RULE_renameColumn);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 276;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 277;
	        this.match(InformixSQLParser.COLUMN);
	        this.state = 278;
	        localctx.oldColumn = this.identifier();
	        this.state = 279;
	        this.match(InformixSQLParser.TO);
	        this.state = 280;
	        localctx.newColumn = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameConstraint() {
	    let localctx = new RenameConstraintContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, InformixSQLParser.RULE_renameConstraint);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 282;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 283;
	        this.match(InformixSQLParser.CONSTRAINT);
	        this.state = 284;
	        localctx.oldConstraint = this.identifier();
	        this.state = 285;
	        this.match(InformixSQLParser.TO);
	        this.state = 286;
	        localctx.newConstraint = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameDatabase() {
	    let localctx = new RenameDatabaseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, InformixSQLParser.RULE_renameDatabase);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 289;
	        this.match(InformixSQLParser.DATABASE);
	        this.state = 290;
	        localctx.oldDatabase = this.identifier();
	        this.state = 291;
	        this.match(InformixSQLParser.TO);
	        this.state = 292;
	        localctx.newDatabase = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameIndex() {
	    let localctx = new RenameIndexContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, InformixSQLParser.RULE_renameIndex);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 295;
	        this.match(InformixSQLParser.INDEX);
	        this.state = 296;
	        localctx.oldIndex = this.identifier();
	        this.state = 297;
	        this.match(InformixSQLParser.TO);
	        this.state = 298;
	        localctx.newIndex = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameSecurity() {
	    let localctx = new RenameSecurityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, InformixSQLParser.RULE_renameSecurity);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 301;
	        this.match(InformixSQLParser.SECURITY);
	        this.state = 310;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 109:
	            this.state = 302;
	            this.match(InformixSQLParser.POLICY);
	            break;
	        case 91:
	            this.state = 303;
	            this.match(InformixSQLParser.LABEL);
	            this.state = 308;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 305;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	                if(la_===1) {
	                    this.state = 304;
	                    localctx.policy = this.identifier();

	                }
	                break;

	            case 2:
	                this.state = 307;
	                this.match(InformixSQLParser.COMPONENT);
	                break;

	            }
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 312;
	        localctx.oldSecurity = this.identifier();
	        this.state = 313;
	        this.match(InformixSQLParser.TO);
	        this.state = 314;
	        localctx.newSecurity = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameSequence() {
	    let localctx = new RenameSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, InformixSQLParser.RULE_renameSequence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 317;
	        this.match(InformixSQLParser.SEQUENCE);
	        this.state = 318;
	        localctx.oldSequence = this.identifier();
	        this.state = 319;
	        this.match(InformixSQLParser.TO);
	        this.state = 320;
	        localctx.newSequence = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameTable() {
	    let localctx = new RenameTableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, InformixSQLParser.RULE_renameTable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 323;
	        this.match(InformixSQLParser.TABLE);
	        this.state = 324;
	        localctx.oldTableName = this.identifier();
	        this.state = 325;
	        this.match(InformixSQLParser.TO);
	        this.state = 326;
	        localctx.newTableName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameTrustedContext() {
	    let localctx = new RenameTrustedContextContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, InformixSQLParser.RULE_renameTrustedContext);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 329;
	        this.match(InformixSQLParser.TRUSTED);
	        this.state = 330;
	        this.match(InformixSQLParser.CONTEXT);
	        this.state = 331;
	        localctx.oldTrustedContextName = this.identifier();
	        this.state = 332;
	        this.match(InformixSQLParser.TO);
	        this.state = 333;
	        localctx.newTrustedContextName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	renameUser() {
	    let localctx = new RenameUserContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, InformixSQLParser.RULE_renameUser);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(InformixSQLParser.RENAME);
	        this.state = 336;
	        this.match(InformixSQLParser.USER);
	        this.state = 337;
	        localctx.oldUserName = this.identifier();
	        this.state = 338;
	        this.match(InformixSQLParser.TO);
	        this.state = 339;
	        localctx.newUserName = this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	rollbackWork() {
	    let localctx = new RollbackWorkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, InformixSQLParser.RULE_rollbackWork);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(InformixSQLParser.ROLLBACK);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===156) {
	            this.state = 342;
	            this.match(InformixSQLParser.WORK);
	        }

	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===138) {
	            this.state = 345;
	            this.match(InformixSQLParser.TO);
	            this.state = 346;
	            this.match(InformixSQLParser.SAVEPOINT);
	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967248) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 3221225471) !== 0) || ((((_la - 128)) & ~0x1f) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1f) === 0 && ((1 << (_la - 160)) & 2684354559) !== 0)) {
	                this.state = 347;
	                localctx.savepoint = this.identifier();
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



	savepointStmt() {
	    let localctx = new SavepointStmtContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, InformixSQLParser.RULE_savepointStmt);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(InformixSQLParser.SAVEPOINT);
	        this.state = 353;
	        localctx.savepoint = this.identifier();
	        this.state = 355;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===144) {
	            this.state = 354;
	            this.match(InformixSQLParser.UNIQUE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setAutofree() {
	    let localctx = new SetAutofreeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, InformixSQLParser.RULE_setAutofree);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 357;
	        this.match(InformixSQLParser.SET);
	        this.state = 358;
	        this.match(InformixSQLParser.AUTOFREE);
	        this.state = 360;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===59) {
	            this.state = 359;
	            _la = this._input.LA(1);
	            if(!(_la===54 || _la===59)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===67) {
	            this.state = 362;
	            this.match(InformixSQLParser.FOR);
	            this.state = 365;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 363;
	                localctx.cursorId = this.identifier();
	                break;

	            case 2:
	                this.state = 364;
	                localctx.cursorIdVar = this.anyName();
	                break;

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



	setCollation() {
	    let localctx = new SetCollationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, InformixSQLParser.RULE_setCollation);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.match(InformixSQLParser.SET);
	        this.state = 374;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 32:
	            this.state = 370;
	            this.match(InformixSQLParser.COLLATION);
	            this.state = 371;
	            localctx.locale = this.quotedString();
	            break;
	        case 97:
	            this.state = 372;
	            this.match(InformixSQLParser.NO);
	            this.state = 373;
	            this.match(InformixSQLParser.COLLATION);
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



	setDataskip() {
	    let localctx = new SetDataskipContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, InformixSQLParser.RULE_setDataskip);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(InformixSQLParser.SET);
	        this.state = 377;
	        this.match(InformixSQLParser.DATASKIP);
	        this.state = 391;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 104:
	            this.state = 378;
	            this.match(InformixSQLParser.ON);
	            this.state = 387;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967248) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 3221225471) !== 0) || ((((_la - 128)) & ~0x1f) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1f) === 0 && ((1 << (_la - 160)) & 2684354559) !== 0)) {
	                this.state = 379;
	                this.identifier();
	                this.state = 384;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===3) {
	                    this.state = 380;
	                    this.match(InformixSQLParser.COMMA);
	                    this.state = 381;
	                    this.identifier();
	                    this.state = 386;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            break;
	        case 102:
	            this.state = 389;
	            this.match(InformixSQLParser.OFF);
	            break;
	        case 46:
	            this.state = 390;
	            this.match(InformixSQLParser.DEFAULT);
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



	setDebugFile() {
	    let localctx = new SetDebugFileContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, InformixSQLParser.RULE_setDebugFile);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.match(InformixSQLParser.SET);
	        this.state = 394;
	        this.match(InformixSQLParser.DEBUG);
	        this.state = 395;
	        this.match(InformixSQLParser.FILE);
	        this.state = 396;
	        this.match(InformixSQLParser.TO);
	        this.state = 399;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 192:
	            this.state = 397;
	            this.match(InformixSQLParser.CHAR_STRING);
	            break;
	        case 4:
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
	        case 92:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 99:
	        case 100:
	        case 101:
	        case 102:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 111:
	        case 112:
	        case 113:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 124:
	        case 125:
	        case 127:
	        case 128:
	        case 129:
	        case 130:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 136:
	        case 137:
	        case 138:
	        case 139:
	        case 140:
	        case 141:
	        case 142:
	        case 143:
	        case 144:
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 149:
	        case 150:
	        case 151:
	        case 152:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	        case 157:
	        case 158:
	        case 159:
	        case 160:
	        case 161:
	        case 162:
	        case 163:
	        case 164:
	        case 165:
	        case 166:
	        case 167:
	        case 168:
	        case 169:
	        case 170:
	        case 171:
	        case 172:
	        case 173:
	        case 174:
	        case 175:
	        case 176:
	        case 177:
	        case 178:
	        case 179:
	        case 180:
	        case 181:
	        case 182:
	        case 183:
	        case 184:
	        case 185:
	        case 186:
	        case 187:
	        case 188:
	        case 191:
	            this.state = 398;
	            this.identifier();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===154) {
	            this.state = 401;
	            this.match(InformixSQLParser.WITH);
	            this.state = 402;
	            this.match(InformixSQLParser.APPEND);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	setDeferredPrepareStatement() {
	    let localctx = new SetDeferredPrepareStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, InformixSQLParser.RULE_setDeferredPrepareStatement);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(InformixSQLParser.SET);
	        this.state = 406;
	        this.match(InformixSQLParser.DEFERRED_PREPARE);
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===54 || _la===59) {
	            this.state = 407;
	            _la = this._input.LA(1);
	            if(!(_la===54 || _la===59)) {
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



	quotedString() {
	    let localctx = new QuotedStringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, InformixSQLParser.RULE_quotedString);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(InformixSQLParser.CHAR_STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	anyName() {
	    let localctx = new AnyNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, InformixSQLParser.RULE_anyName);
	    try {
	        this.state = 419;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 188:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 412;
	            this.match(InformixSQLParser.IDENTIFIER);
	            break;
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
	        case 92:
	        case 93:
	        case 94:
	        case 95:
	        case 96:
	        case 97:
	        case 98:
	        case 99:
	        case 100:
	        case 101:
	        case 102:
	        case 103:
	        case 104:
	        case 105:
	        case 106:
	        case 107:
	        case 108:
	        case 109:
	        case 110:
	        case 111:
	        case 112:
	        case 113:
	        case 114:
	        case 115:
	        case 116:
	        case 117:
	        case 118:
	        case 119:
	        case 120:
	        case 121:
	        case 122:
	        case 123:
	        case 124:
	        case 125:
	        case 127:
	        case 128:
	        case 129:
	        case 130:
	        case 131:
	        case 132:
	        case 133:
	        case 134:
	        case 135:
	        case 136:
	        case 137:
	        case 138:
	        case 139:
	        case 140:
	        case 141:
	        case 142:
	        case 143:
	        case 144:
	        case 145:
	        case 146:
	        case 147:
	        case 148:
	        case 149:
	        case 150:
	        case 151:
	        case 152:
	        case 153:
	        case 154:
	        case 155:
	        case 156:
	        case 157:
	        case 158:
	        case 159:
	        case 160:
	        case 161:
	        case 162:
	        case 163:
	        case 164:
	        case 165:
	        case 166:
	        case 167:
	        case 168:
	        case 169:
	        case 170:
	        case 171:
	        case 172:
	        case 173:
	        case 174:
	        case 175:
	        case 176:
	        case 177:
	        case 178:
	        case 179:
	        case 180:
	        case 181:
	        case 182:
	        case 183:
	        case 184:
	        case 185:
	        case 186:
	        case 187:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 413;
	            this.keyword();
	            break;
	        case 191:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 414;
	            this.match(InformixSQLParser.STRING_LITERAL);
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 415;
	            this.match(InformixSQLParser.OPEN_PAR);
	            this.state = 416;
	            this.anyName();
	            this.state = 417;
	            this.match(InformixSQLParser.CLOSE_PAR);
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



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, InformixSQLParser.RULE_identifier);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 421;
	        this.anyName();
	        this.state = 426;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 422;
	            this.match(InformixSQLParser.DOT);
	            this.state = 423;
	            this.anyName();
	            this.state = 428;
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



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, InformixSQLParser.RULE_keyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 4294967232) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1f) === 0 && ((1 << (_la - 96)) & 3221225471) !== 0) || ((((_la - 128)) & ~0x1f) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1f) === 0 && ((1 << (_la - 160)) & 268435455) !== 0))) {
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


}

InformixSQLParser.EOF = antlr4.Token.EOF;
InformixSQLParser.SCOL = 1;
InformixSQLParser.DOT = 2;
InformixSQLParser.COMMA = 3;
InformixSQLParser.OPEN_PAR = 4;
InformixSQLParser.CLOSE_PAR = 5;
InformixSQLParser.ABORT = 6;
InformixSQLParser.ACTION = 7;
InformixSQLParser.ACCESS_METHOD = 8;
InformixSQLParser.ADD = 9;
InformixSQLParser.AFTER = 10;
InformixSQLParser.AGGREGATE = 11;
InformixSQLParser.ALL = 12;
InformixSQLParser.ALTER = 13;
InformixSQLParser.ANALYZE = 14;
InformixSQLParser.AND = 15;
InformixSQLParser.APPEND = 16;
InformixSQLParser.AS = 17;
InformixSQLParser.ASC = 18;
InformixSQLParser.ATTACH = 19;
InformixSQLParser.AUTOFREE = 20;
InformixSQLParser.AUTOINCREMENT = 21;
InformixSQLParser.BEFORE = 22;
InformixSQLParser.BEGIN = 23;
InformixSQLParser.BETWEEN = 24;
InformixSQLParser.BY = 25;
InformixSQLParser.CASCADE = 26;
InformixSQLParser.CASE = 27;
InformixSQLParser.CAST = 28;
InformixSQLParser.CHECK = 29;
InformixSQLParser.CLOSE = 30;
InformixSQLParser.COLLATE = 31;
InformixSQLParser.COLLATION = 32;
InformixSQLParser.COLUMN = 33;
InformixSQLParser.COMMIT = 34;
InformixSQLParser.COMPONENT = 35;
InformixSQLParser.CONFLICT = 36;
InformixSQLParser.CONSTRAINT = 37;
InformixSQLParser.CONTEXT = 38;
InformixSQLParser.CREATE = 39;
InformixSQLParser.CROSS = 40;
InformixSQLParser.CURRENT_DATE = 41;
InformixSQLParser.CURRENT_TIME = 42;
InformixSQLParser.CURRENT_TIMESTAMP = 43;
InformixSQLParser.DATABASE = 44;
InformixSQLParser.DATASKIP = 45;
InformixSQLParser.DEFAULT = 46;
InformixSQLParser.DEFERRABLE = 47;
InformixSQLParser.DEFERRED = 48;
InformixSQLParser.DEFERRED_PREPARE = 49;
InformixSQLParser.DELETE = 50;
InformixSQLParser.DEBUG = 51;
InformixSQLParser.DESC = 52;
InformixSQLParser.DETACH = 53;
InformixSQLParser.DISABLED = 54;
InformixSQLParser.DISTINCT = 55;
InformixSQLParser.DROP = 56;
InformixSQLParser.EACH = 57;
InformixSQLParser.ELSE = 58;
InformixSQLParser.ENABLED = 59;
InformixSQLParser.END = 60;
InformixSQLParser.ESCAPE = 61;
InformixSQLParser.EXCEPT = 62;
InformixSQLParser.EXCLUSIVE = 63;
InformixSQLParser.EXISTS = 64;
InformixSQLParser.EXPLAIN = 65;
InformixSQLParser.FAIL = 66;
InformixSQLParser.FOR = 67;
InformixSQLParser.FOREIGN = 68;
InformixSQLParser.FILE = 69;
InformixSQLParser.FROM = 70;
InformixSQLParser.FULL = 71;
InformixSQLParser.GLOB = 72;
InformixSQLParser.GROUP = 73;
InformixSQLParser.HAVING = 74;
InformixSQLParser.IF = 75;
InformixSQLParser.IGNORE = 76;
InformixSQLParser.IMMEDIATE = 77;
InformixSQLParser.IN = 78;
InformixSQLParser.INDEX = 79;
InformixSQLParser.INDEXED = 80;
InformixSQLParser.INITIALLY = 81;
InformixSQLParser.INNER = 82;
InformixSQLParser.INSERT = 83;
InformixSQLParser.INSTEAD = 84;
InformixSQLParser.INTERSECT = 85;
InformixSQLParser.INTO = 86;
InformixSQLParser.IS = 87;
InformixSQLParser.ISNULL = 88;
InformixSQLParser.JOIN = 89;
InformixSQLParser.KEY = 90;
InformixSQLParser.LABEL = 91;
InformixSQLParser.LEFT = 92;
InformixSQLParser.LIKE = 93;
InformixSQLParser.LIMIT = 94;
InformixSQLParser.MATCH = 95;
InformixSQLParser.NATURAL = 96;
InformixSQLParser.NO = 97;
InformixSQLParser.NOT = 98;
InformixSQLParser.NOTNULL = 99;
InformixSQLParser.NULL = 100;
InformixSQLParser.OF = 101;
InformixSQLParser.OFF = 102;
InformixSQLParser.OFFSET = 103;
InformixSQLParser.ON = 104;
InformixSQLParser.ONLINE = 105;
InformixSQLParser.OR = 106;
InformixSQLParser.ORDER = 107;
InformixSQLParser.OUTER = 108;
InformixSQLParser.POLICY = 109;
InformixSQLParser.PLAN = 110;
InformixSQLParser.PRAGMA = 111;
InformixSQLParser.PRIMARY = 112;
InformixSQLParser.QUERY = 113;
InformixSQLParser.RAISE = 114;
InformixSQLParser.RECURSIVE = 115;
InformixSQLParser.REFERENCES = 116;
InformixSQLParser.REGEXP = 117;
InformixSQLParser.REINDEX = 118;
InformixSQLParser.RELEASE = 119;
InformixSQLParser.RENAME = 120;
InformixSQLParser.REPLACE = 121;
InformixSQLParser.RESTRICT = 122;
InformixSQLParser.RIGHT = 123;
InformixSQLParser.ROLLBACK = 124;
InformixSQLParser.ROW = 125;
InformixSQLParser.ROLE = 126;
InformixSQLParser.ROWS = 127;
InformixSQLParser.SAVEPOINT = 128;
InformixSQLParser.SECURITY = 129;
InformixSQLParser.SELECT = 130;
InformixSQLParser.SET = 131;
InformixSQLParser.SEQUENCE = 132;
InformixSQLParser.SYNONYM = 133;
InformixSQLParser.TABLE = 134;
InformixSQLParser.TEMP = 135;
InformixSQLParser.TEMPORARY = 136;
InformixSQLParser.THEN = 137;
InformixSQLParser.TO = 138;
InformixSQLParser.TRANSACTION = 139;
InformixSQLParser.TRIGGER = 140;
InformixSQLParser.TRUSTED = 141;
InformixSQLParser.TYPE = 142;
InformixSQLParser.UNION = 143;
InformixSQLParser.UNIQUE = 144;
InformixSQLParser.UPDATE = 145;
InformixSQLParser.USER = 146;
InformixSQLParser.USING = 147;
InformixSQLParser.VACUUM = 148;
InformixSQLParser.VALUES = 149;
InformixSQLParser.VIEW = 150;
InformixSQLParser.VIRTUAL = 151;
InformixSQLParser.WHEN = 152;
InformixSQLParser.WHERE = 153;
InformixSQLParser.WITH = 154;
InformixSQLParser.WITHOUT = 155;
InformixSQLParser.WORK = 156;
InformixSQLParser.XADATASOURCE = 157;
InformixSQLParser.FIRST_VALUE = 158;
InformixSQLParser.OVER = 159;
InformixSQLParser.PARTITION = 160;
InformixSQLParser.RANGE = 161;
InformixSQLParser.PRECEDING = 162;
InformixSQLParser.UNBOUNDED = 163;
InformixSQLParser.CURRENT = 164;
InformixSQLParser.FOLLOWING = 165;
InformixSQLParser.CUME_DIST = 166;
InformixSQLParser.DENSE_RANK = 167;
InformixSQLParser.LAG = 168;
InformixSQLParser.LAST_VALUE = 169;
InformixSQLParser.LEAD = 170;
InformixSQLParser.NTH_VALUE = 171;
InformixSQLParser.NTILE = 172;
InformixSQLParser.PERCENT_RANK = 173;
InformixSQLParser.RANK = 174;
InformixSQLParser.ROW_NUMBER = 175;
InformixSQLParser.GENERATED = 176;
InformixSQLParser.ALWAYS = 177;
InformixSQLParser.STORED = 178;
InformixSQLParser.TRUE = 179;
InformixSQLParser.FALSE = 180;
InformixSQLParser.WINDOW = 181;
InformixSQLParser.NULLS = 182;
InformixSQLParser.FIRST = 183;
InformixSQLParser.LAST = 184;
InformixSQLParser.FILTER = 185;
InformixSQLParser.GROUPS = 186;
InformixSQLParser.EXCLUDE = 187;
InformixSQLParser.IDENTIFIER = 188;
InformixSQLParser.NUMERIC_LITERAL = 189;
InformixSQLParser.BIND_PARAMETER = 190;
InformixSQLParser.STRING_LITERAL = 191;
InformixSQLParser.CHAR_STRING = 192;
InformixSQLParser.SINGLE_LINE_COMMENT = 193;
InformixSQLParser.MULTILINE_COMMENT = 194;
InformixSQLParser.SPACES = 195;

InformixSQLParser.RULE_sqlScript = 0;
InformixSQLParser.RULE_unitStatement = 1;
InformixSQLParser.RULE_createRole = 2;
InformixSQLParser.RULE_dropRole = 3;
InformixSQLParser.RULE_dropSynonym = 4;
InformixSQLParser.RULE_dropTable = 5;
InformixSQLParser.RULE_dropTrigger = 6;
InformixSQLParser.RULE_dropTrustedContext = 7;
InformixSQLParser.RULE_dropType = 8;
InformixSQLParser.RULE_dropUser = 9;
InformixSQLParser.RULE_dropView = 10;
InformixSQLParser.RULE_dropXadatasource = 11;
InformixSQLParser.RULE_dropXadataTypeSource = 12;
InformixSQLParser.RULE_dropAccessMethod = 13;
InformixSQLParser.RULE_dropAggregate = 14;
InformixSQLParser.RULE_dropDatabase = 15;
InformixSQLParser.RULE_dropIndex = 16;
InformixSQLParser.RULE_closeStmt = 17;
InformixSQLParser.RULE_closeDatabaseStmt = 18;
InformixSQLParser.RULE_databaseStmt = 19;
InformixSQLParser.RULE_commitWorkStmt = 20;
InformixSQLParser.RULE_releaseSavepoint = 21;
InformixSQLParser.RULE_renameColumn = 22;
InformixSQLParser.RULE_renameConstraint = 23;
InformixSQLParser.RULE_renameDatabase = 24;
InformixSQLParser.RULE_renameIndex = 25;
InformixSQLParser.RULE_renameSecurity = 26;
InformixSQLParser.RULE_renameSequence = 27;
InformixSQLParser.RULE_renameTable = 28;
InformixSQLParser.RULE_renameTrustedContext = 29;
InformixSQLParser.RULE_renameUser = 30;
InformixSQLParser.RULE_rollbackWork = 31;
InformixSQLParser.RULE_savepointStmt = 32;
InformixSQLParser.RULE_setAutofree = 33;
InformixSQLParser.RULE_setCollation = 34;
InformixSQLParser.RULE_setDataskip = 35;
InformixSQLParser.RULE_setDebugFile = 36;
InformixSQLParser.RULE_setDeferredPrepareStatement = 37;
InformixSQLParser.RULE_quotedString = 38;
InformixSQLParser.RULE_anyName = 39;
InformixSQLParser.RULE_identifier = 40;
InformixSQLParser.RULE_keyword = 41;

class SqlScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_sqlScript;
    }

	EOF() {
	    return this.getToken(InformixSQLParser.EOF, 0);
	};

	unitStatement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnitStatementContext);
	    } else {
	        return this.getTypedRuleContext(UnitStatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterSqlScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitSqlScript(this);
		}
	}


}



class UnitStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_unitStatement;
    }

	SCOL() {
	    return this.getToken(InformixSQLParser.SCOL, 0);
	};

	createRole() {
	    return this.getTypedRuleContext(CreateRoleContext,0);
	};

	closeStmt() {
	    return this.getTypedRuleContext(CloseStmtContext,0);
	};

	closeDatabaseStmt() {
	    return this.getTypedRuleContext(CloseDatabaseStmtContext,0);
	};

	commitWorkStmt() {
	    return this.getTypedRuleContext(CommitWorkStmtContext,0);
	};

	dropAccessMethod() {
	    return this.getTypedRuleContext(DropAccessMethodContext,0);
	};

	dropAggregate() {
	    return this.getTypedRuleContext(DropAggregateContext,0);
	};

	dropDatabase() {
	    return this.getTypedRuleContext(DropDatabaseContext,0);
	};

	dropIndex() {
	    return this.getTypedRuleContext(DropIndexContext,0);
	};

	dropRole() {
	    return this.getTypedRuleContext(DropRoleContext,0);
	};

	dropSynonym() {
	    return this.getTypedRuleContext(DropSynonymContext,0);
	};

	dropTable() {
	    return this.getTypedRuleContext(DropTableContext,0);
	};

	dropTrigger() {
	    return this.getTypedRuleContext(DropTriggerContext,0);
	};

	dropTrustedContext() {
	    return this.getTypedRuleContext(DropTrustedContextContext,0);
	};

	dropType() {
	    return this.getTypedRuleContext(DropTypeContext,0);
	};

	dropUser() {
	    return this.getTypedRuleContext(DropUserContext,0);
	};

	dropView() {
	    return this.getTypedRuleContext(DropViewContext,0);
	};

	dropXadatasource() {
	    return this.getTypedRuleContext(DropXadatasourceContext,0);
	};

	dropXadataTypeSource() {
	    return this.getTypedRuleContext(DropXadataTypeSourceContext,0);
	};

	databaseStmt() {
	    return this.getTypedRuleContext(DatabaseStmtContext,0);
	};

	releaseSavepoint() {
	    return this.getTypedRuleContext(ReleaseSavepointContext,0);
	};

	renameColumn() {
	    return this.getTypedRuleContext(RenameColumnContext,0);
	};

	renameConstraint() {
	    return this.getTypedRuleContext(RenameConstraintContext,0);
	};

	renameDatabase() {
	    return this.getTypedRuleContext(RenameDatabaseContext,0);
	};

	renameIndex() {
	    return this.getTypedRuleContext(RenameIndexContext,0);
	};

	renameSecurity() {
	    return this.getTypedRuleContext(RenameSecurityContext,0);
	};

	renameSequence() {
	    return this.getTypedRuleContext(RenameSequenceContext,0);
	};

	renameTable() {
	    return this.getTypedRuleContext(RenameTableContext,0);
	};

	renameTrustedContext() {
	    return this.getTypedRuleContext(RenameTrustedContextContext,0);
	};

	renameUser() {
	    return this.getTypedRuleContext(RenameUserContext,0);
	};

	rollbackWork() {
	    return this.getTypedRuleContext(RollbackWorkContext,0);
	};

	savepointStmt() {
	    return this.getTypedRuleContext(SavepointStmtContext,0);
	};

	setAutofree() {
	    return this.getTypedRuleContext(SetAutofreeContext,0);
	};

	setCollation() {
	    return this.getTypedRuleContext(SetCollationContext,0);
	};

	setDataskip() {
	    return this.getTypedRuleContext(SetDataskipContext,0);
	};

	setDebugFile() {
	    return this.getTypedRuleContext(SetDebugFileContext,0);
	};

	setDeferredPrepareStatement() {
	    return this.getTypedRuleContext(SetDeferredPrepareStatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterUnitStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitUnitStatement(this);
		}
	}


}



class CreateRoleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_createRole;
        this.roleName = null;
    }

	CREATE() {
	    return this.getToken(InformixSQLParser.CREATE, 0);
	};

	ROLE() {
	    return this.getToken(InformixSQLParser.ROLE, 0);
	};

	anyName() {
	    return this.getTypedRuleContext(AnyNameContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	NOT() {
	    return this.getToken(InformixSQLParser.NOT, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterCreateRole(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitCreateRole(this);
		}
	}


}



class DropRoleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropRole;
        this.roleName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	ROLE() {
	    return this.getToken(InformixSQLParser.ROLE, 0);
	};

	anyName() {
	    return this.getTypedRuleContext(AnyNameContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropRole(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropRole(this);
		}
	}


}



class DropSynonymContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropSynonym;
        this.synonymName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	SYNONYM() {
	    return this.getToken(InformixSQLParser.SYNONYM, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropSynonym(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropSynonym(this);
		}
	}


}



class DropTableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropTable;
        this.tableName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	TABLE() {
	    return this.getToken(InformixSQLParser.TABLE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	CASCADE() {
	    return this.getToken(InformixSQLParser.CASCADE, 0);
	};

	RESTRICT() {
	    return this.getToken(InformixSQLParser.RESTRICT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropTable(this);
		}
	}


}



class DropTriggerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropTrigger;
        this.triggerName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	TRIGGER() {
	    return this.getToken(InformixSQLParser.TRIGGER, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropTrigger(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropTrigger(this);
		}
	}


}



class DropTrustedContextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropTrustedContext;
        this.contextName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	TRUSTED() {
	    return this.getToken(InformixSQLParser.TRUSTED, 0);
	};

	CONTEXT() {
	    return this.getToken(InformixSQLParser.CONTEXT, 0);
	};

	anyName() {
	    return this.getTypedRuleContext(AnyNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropTrustedContext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropTrustedContext(this);
		}
	}


}



class DropTypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropType;
        this.dataTypeName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	TYPE() {
	    return this.getToken(InformixSQLParser.TYPE, 0);
	};

	RESTRICT() {
	    return this.getToken(InformixSQLParser.RESTRICT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropType(this);
		}
	}


}



class DropUserContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropUser;
        this.userName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	USER() {
	    return this.getToken(InformixSQLParser.USER, 0);
	};

	anyName() {
	    return this.getTypedRuleContext(AnyNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropUser(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropUser(this);
		}
	}


}



class DropViewContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropView;
        this.viewName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	VIEW() {
	    return this.getToken(InformixSQLParser.VIEW, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	CASCADE() {
	    return this.getToken(InformixSQLParser.CASCADE, 0);
	};

	RESTRICT() {
	    return this.getToken(InformixSQLParser.RESTRICT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropView(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropView(this);
		}
	}


}



class DropXadatasourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropXadatasource;
        this.xaSourceName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	XADATASOURCE() {
	    return this.getToken(InformixSQLParser.XADATASOURCE, 0);
	};

	RESTRICT() {
	    return this.getToken(InformixSQLParser.RESTRICT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropXadatasource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropXadatasource(this);
		}
	}


}



class DropXadataTypeSourceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropXadataTypeSource;
        this.xaSourceName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	XADATASOURCE() {
	    return this.getToken(InformixSQLParser.XADATASOURCE, 0);
	};

	TYPE() {
	    return this.getToken(InformixSQLParser.TYPE, 0);
	};

	RESTRICT() {
	    return this.getToken(InformixSQLParser.RESTRICT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropXadataTypeSource(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropXadataTypeSource(this);
		}
	}


}



class DropAccessMethodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropAccessMethod;
        this.accessMethodName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	ACCESS_METHOD() {
	    return this.getToken(InformixSQLParser.ACCESS_METHOD, 0);
	};

	RESTRICT() {
	    return this.getToken(InformixSQLParser.RESTRICT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropAccessMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropAccessMethod(this);
		}
	}


}



class DropAggregateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropAggregate;
        this.aggregateName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	AGGREGATE() {
	    return this.getToken(InformixSQLParser.AGGREGATE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropAggregate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropAggregate(this);
		}
	}


}



class DropDatabaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropDatabase;
        this.databaseName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	DATABASE() {
	    return this.getToken(InformixSQLParser.DATABASE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropDatabase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropDatabase(this);
		}
	}


}



class DropIndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_dropIndex;
        this.indexName = null;
    }

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	INDEX() {
	    return this.getToken(InformixSQLParser.INDEX, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	ONLINE() {
	    return this.getToken(InformixSQLParser.ONLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDropIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDropIndex(this);
		}
	}


}



class CloseStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_closeStmt;
        this.cursorId = null;
    }

	CLOSE() {
	    return this.getToken(InformixSQLParser.CLOSE, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterCloseStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitCloseStmt(this);
		}
	}


}



class CloseDatabaseStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_closeDatabaseStmt;
    }

	CLOSE() {
	    return this.getToken(InformixSQLParser.CLOSE, 0);
	};

	DATABASE() {
	    return this.getToken(InformixSQLParser.DATABASE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterCloseDatabaseStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitCloseDatabaseStmt(this);
		}
	}


}



class DatabaseStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_databaseStmt;
        this.databaseName = null;
    }

	DATABASE() {
	    return this.getToken(InformixSQLParser.DATABASE, 0);
	};

	anyName() {
	    return this.getTypedRuleContext(AnyNameContext,0);
	};

	EXCLUSIVE() {
	    return this.getToken(InformixSQLParser.EXCLUSIVE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterDatabaseStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitDatabaseStmt(this);
		}
	}


}



class CommitWorkStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_commitWorkStmt;
    }

	COMMIT() {
	    return this.getToken(InformixSQLParser.COMMIT, 0);
	};

	WORK() {
	    return this.getToken(InformixSQLParser.WORK, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterCommitWorkStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitCommitWorkStmt(this);
		}
	}


}



class ReleaseSavepointContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_releaseSavepoint;
        this.savepointName = null;
    }

	RELEASE() {
	    return this.getToken(InformixSQLParser.RELEASE, 0);
	};

	SAVEPOINT() {
	    return this.getToken(InformixSQLParser.SAVEPOINT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterReleaseSavepoint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitReleaseSavepoint(this);
		}
	}


}



class RenameColumnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameColumn;
        this.oldColumn = null;
        this.newColumn = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	COLUMN() {
	    return this.getToken(InformixSQLParser.COLUMN, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameColumn(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameColumn(this);
		}
	}


}



class RenameConstraintContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameConstraint;
        this.oldConstraint = null;
        this.newConstraint = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	CONSTRAINT() {
	    return this.getToken(InformixSQLParser.CONSTRAINT, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameConstraint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameConstraint(this);
		}
	}


}



class RenameDatabaseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameDatabase;
        this.oldDatabase = null;
        this.newDatabase = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	DATABASE() {
	    return this.getToken(InformixSQLParser.DATABASE, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameDatabase(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameDatabase(this);
		}
	}


}



class RenameIndexContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameIndex;
        this.oldIndex = null;
        this.newIndex = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	INDEX() {
	    return this.getToken(InformixSQLParser.INDEX, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameIndex(this);
		}
	}


}



class RenameSecurityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameSecurity;
        this.policy = null;
        this.oldSecurity = null;
        this.newSecurity = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	SECURITY() {
	    return this.getToken(InformixSQLParser.SECURITY, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	POLICY() {
	    return this.getToken(InformixSQLParser.POLICY, 0);
	};

	LABEL() {
	    return this.getToken(InformixSQLParser.LABEL, 0);
	};

	COMPONENT() {
	    return this.getToken(InformixSQLParser.COMPONENT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameSecurity(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameSecurity(this);
		}
	}


}



class RenameSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameSequence;
        this.oldSequence = null;
        this.newSequence = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	SEQUENCE() {
	    return this.getToken(InformixSQLParser.SEQUENCE, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameSequence(this);
		}
	}


}



class RenameTableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameTable;
        this.oldTableName = null;
        this.newTableName = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	TABLE() {
	    return this.getToken(InformixSQLParser.TABLE, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameTable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameTable(this);
		}
	}


}



class RenameTrustedContextContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameTrustedContext;
        this.oldTrustedContextName = null;
        this.newTrustedContextName = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	TRUSTED() {
	    return this.getToken(InformixSQLParser.TRUSTED, 0);
	};

	CONTEXT() {
	    return this.getToken(InformixSQLParser.CONTEXT, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameTrustedContext(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameTrustedContext(this);
		}
	}


}



class RenameUserContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_renameUser;
        this.oldUserName = null;
        this.newUserName = null;
    }

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	USER() {
	    return this.getToken(InformixSQLParser.USER, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRenameUser(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRenameUser(this);
		}
	}


}



class RollbackWorkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_rollbackWork;
        this.savepoint = null;
    }

	ROLLBACK() {
	    return this.getToken(InformixSQLParser.ROLLBACK, 0);
	};

	WORK() {
	    return this.getToken(InformixSQLParser.WORK, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	SAVEPOINT() {
	    return this.getToken(InformixSQLParser.SAVEPOINT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterRollbackWork(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitRollbackWork(this);
		}
	}


}



class SavepointStmtContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_savepointStmt;
        this.savepoint = null;
    }

	SAVEPOINT() {
	    return this.getToken(InformixSQLParser.SAVEPOINT, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	UNIQUE() {
	    return this.getToken(InformixSQLParser.UNIQUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterSavepointStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitSavepointStmt(this);
		}
	}


}



class SetAutofreeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_setAutofree;
        this.cursorId = null;
        this.cursorIdVar = null;
    }

	SET() {
	    return this.getToken(InformixSQLParser.SET, 0);
	};

	AUTOFREE() {
	    return this.getToken(InformixSQLParser.AUTOFREE, 0);
	};

	FOR() {
	    return this.getToken(InformixSQLParser.FOR, 0);
	};

	ENABLED() {
	    return this.getToken(InformixSQLParser.ENABLED, 0);
	};

	DISABLED() {
	    return this.getToken(InformixSQLParser.DISABLED, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	anyName() {
	    return this.getTypedRuleContext(AnyNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterSetAutofree(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitSetAutofree(this);
		}
	}


}



class SetCollationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_setCollation;
        this.locale = null;
    }

	SET() {
	    return this.getToken(InformixSQLParser.SET, 0);
	};

	COLLATION() {
	    return this.getToken(InformixSQLParser.COLLATION, 0);
	};

	NO() {
	    return this.getToken(InformixSQLParser.NO, 0);
	};

	quotedString() {
	    return this.getTypedRuleContext(QuotedStringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterSetCollation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitSetCollation(this);
		}
	}


}



class SetDataskipContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_setDataskip;
    }

	SET() {
	    return this.getToken(InformixSQLParser.SET, 0);
	};

	DATASKIP() {
	    return this.getToken(InformixSQLParser.DATASKIP, 0);
	};

	ON() {
	    return this.getToken(InformixSQLParser.ON, 0);
	};

	OFF() {
	    return this.getToken(InformixSQLParser.OFF, 0);
	};

	DEFAULT() {
	    return this.getToken(InformixSQLParser.DEFAULT, 0);
	};

	identifier = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IdentifierContext);
	    } else {
	        return this.getTypedRuleContext(IdentifierContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(InformixSQLParser.COMMA);
	    } else {
	        return this.getToken(InformixSQLParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterSetDataskip(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitSetDataskip(this);
		}
	}


}



class SetDebugFileContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_setDebugFile;
    }

	SET() {
	    return this.getToken(InformixSQLParser.SET, 0);
	};

	DEBUG() {
	    return this.getToken(InformixSQLParser.DEBUG, 0);
	};

	FILE() {
	    return this.getToken(InformixSQLParser.FILE, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	CHAR_STRING() {
	    return this.getToken(InformixSQLParser.CHAR_STRING, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	WITH() {
	    return this.getToken(InformixSQLParser.WITH, 0);
	};

	APPEND() {
	    return this.getToken(InformixSQLParser.APPEND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterSetDebugFile(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitSetDebugFile(this);
		}
	}


}



class SetDeferredPrepareStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_setDeferredPrepareStatement;
    }

	SET() {
	    return this.getToken(InformixSQLParser.SET, 0);
	};

	DEFERRED_PREPARE() {
	    return this.getToken(InformixSQLParser.DEFERRED_PREPARE, 0);
	};

	ENABLED() {
	    return this.getToken(InformixSQLParser.ENABLED, 0);
	};

	DISABLED() {
	    return this.getToken(InformixSQLParser.DISABLED, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterSetDeferredPrepareStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitSetDeferredPrepareStatement(this);
		}
	}


}



class QuotedStringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_quotedString;
    }

	CHAR_STRING() {
	    return this.getToken(InformixSQLParser.CHAR_STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterQuotedString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitQuotedString(this);
		}
	}


}



class AnyNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = InformixSQLParser.RULE_anyName;
    }

	IDENTIFIER() {
	    return this.getToken(InformixSQLParser.IDENTIFIER, 0);
	};

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	STRING_LITERAL() {
	    return this.getToken(InformixSQLParser.STRING_LITERAL, 0);
	};

	OPEN_PAR() {
	    return this.getToken(InformixSQLParser.OPEN_PAR, 0);
	};

	anyName() {
	    return this.getTypedRuleContext(AnyNameContext,0);
	};

	CLOSE_PAR() {
	    return this.getToken(InformixSQLParser.CLOSE_PAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterAnyName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitAnyName(this);
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
        this.ruleIndex = InformixSQLParser.RULE_identifier;
    }

	anyName = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AnyNameContext);
	    } else {
	        return this.getTypedRuleContext(AnyNameContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(InformixSQLParser.DOT);
	    } else {
	        return this.getToken(InformixSQLParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitIdentifier(this);
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
        this.ruleIndex = InformixSQLParser.RULE_keyword;
    }

	ABORT() {
	    return this.getToken(InformixSQLParser.ABORT, 0);
	};

	ACTION() {
	    return this.getToken(InformixSQLParser.ACTION, 0);
	};

	ACCESS_METHOD() {
	    return this.getToken(InformixSQLParser.ACCESS_METHOD, 0);
	};

	ADD() {
	    return this.getToken(InformixSQLParser.ADD, 0);
	};

	AFTER() {
	    return this.getToken(InformixSQLParser.AFTER, 0);
	};

	AGGREGATE() {
	    return this.getToken(InformixSQLParser.AGGREGATE, 0);
	};

	ALL() {
	    return this.getToken(InformixSQLParser.ALL, 0);
	};

	ALTER() {
	    return this.getToken(InformixSQLParser.ALTER, 0);
	};

	ANALYZE() {
	    return this.getToken(InformixSQLParser.ANALYZE, 0);
	};

	AND() {
	    return this.getToken(InformixSQLParser.AND, 0);
	};

	APPEND() {
	    return this.getToken(InformixSQLParser.APPEND, 0);
	};

	AS() {
	    return this.getToken(InformixSQLParser.AS, 0);
	};

	ASC() {
	    return this.getToken(InformixSQLParser.ASC, 0);
	};

	ATTACH() {
	    return this.getToken(InformixSQLParser.ATTACH, 0);
	};

	AUTOFREE() {
	    return this.getToken(InformixSQLParser.AUTOFREE, 0);
	};

	AUTOINCREMENT() {
	    return this.getToken(InformixSQLParser.AUTOINCREMENT, 0);
	};

	BEFORE() {
	    return this.getToken(InformixSQLParser.BEFORE, 0);
	};

	BEGIN() {
	    return this.getToken(InformixSQLParser.BEGIN, 0);
	};

	BETWEEN() {
	    return this.getToken(InformixSQLParser.BETWEEN, 0);
	};

	BY() {
	    return this.getToken(InformixSQLParser.BY, 0);
	};

	CASCADE() {
	    return this.getToken(InformixSQLParser.CASCADE, 0);
	};

	CASE() {
	    return this.getToken(InformixSQLParser.CASE, 0);
	};

	CAST() {
	    return this.getToken(InformixSQLParser.CAST, 0);
	};

	CHECK() {
	    return this.getToken(InformixSQLParser.CHECK, 0);
	};

	CLOSE() {
	    return this.getToken(InformixSQLParser.CLOSE, 0);
	};

	COLLATE() {
	    return this.getToken(InformixSQLParser.COLLATE, 0);
	};

	COLLATION() {
	    return this.getToken(InformixSQLParser.COLLATION, 0);
	};

	COLUMN() {
	    return this.getToken(InformixSQLParser.COLUMN, 0);
	};

	COMPONENT() {
	    return this.getToken(InformixSQLParser.COMPONENT, 0);
	};

	COMMIT() {
	    return this.getToken(InformixSQLParser.COMMIT, 0);
	};

	CONFLICT() {
	    return this.getToken(InformixSQLParser.CONFLICT, 0);
	};

	CONSTRAINT() {
	    return this.getToken(InformixSQLParser.CONSTRAINT, 0);
	};

	CONTEXT() {
	    return this.getToken(InformixSQLParser.CONTEXT, 0);
	};

	CREATE() {
	    return this.getToken(InformixSQLParser.CREATE, 0);
	};

	CROSS() {
	    return this.getToken(InformixSQLParser.CROSS, 0);
	};

	CURRENT_DATE() {
	    return this.getToken(InformixSQLParser.CURRENT_DATE, 0);
	};

	CURRENT_TIME() {
	    return this.getToken(InformixSQLParser.CURRENT_TIME, 0);
	};

	CURRENT_TIMESTAMP() {
	    return this.getToken(InformixSQLParser.CURRENT_TIMESTAMP, 0);
	};

	DATABASE() {
	    return this.getToken(InformixSQLParser.DATABASE, 0);
	};

	DATASKIP() {
	    return this.getToken(InformixSQLParser.DATASKIP, 0);
	};

	DEBUG() {
	    return this.getToken(InformixSQLParser.DEBUG, 0);
	};

	DEFAULT() {
	    return this.getToken(InformixSQLParser.DEFAULT, 0);
	};

	DEFERRABLE() {
	    return this.getToken(InformixSQLParser.DEFERRABLE, 0);
	};

	DEFERRED() {
	    return this.getToken(InformixSQLParser.DEFERRED, 0);
	};

	DEFERRED_PREPARE() {
	    return this.getToken(InformixSQLParser.DEFERRED_PREPARE, 0);
	};

	DELETE() {
	    return this.getToken(InformixSQLParser.DELETE, 0);
	};

	DESC() {
	    return this.getToken(InformixSQLParser.DESC, 0);
	};

	DETACH() {
	    return this.getToken(InformixSQLParser.DETACH, 0);
	};

	DISABLED() {
	    return this.getToken(InformixSQLParser.DISABLED, 0);
	};

	DISTINCT() {
	    return this.getToken(InformixSQLParser.DISTINCT, 0);
	};

	DROP() {
	    return this.getToken(InformixSQLParser.DROP, 0);
	};

	EACH() {
	    return this.getToken(InformixSQLParser.EACH, 0);
	};

	ELSE() {
	    return this.getToken(InformixSQLParser.ELSE, 0);
	};

	ENABLED() {
	    return this.getToken(InformixSQLParser.ENABLED, 0);
	};

	END() {
	    return this.getToken(InformixSQLParser.END, 0);
	};

	ESCAPE() {
	    return this.getToken(InformixSQLParser.ESCAPE, 0);
	};

	EXCEPT() {
	    return this.getToken(InformixSQLParser.EXCEPT, 0);
	};

	EXCLUSIVE() {
	    return this.getToken(InformixSQLParser.EXCLUSIVE, 0);
	};

	EXISTS() {
	    return this.getToken(InformixSQLParser.EXISTS, 0);
	};

	EXPLAIN() {
	    return this.getToken(InformixSQLParser.EXPLAIN, 0);
	};

	FAIL() {
	    return this.getToken(InformixSQLParser.FAIL, 0);
	};

	FOR() {
	    return this.getToken(InformixSQLParser.FOR, 0);
	};

	FOREIGN() {
	    return this.getToken(InformixSQLParser.FOREIGN, 0);
	};

	FROM() {
	    return this.getToken(InformixSQLParser.FROM, 0);
	};

	FILE() {
	    return this.getToken(InformixSQLParser.FILE, 0);
	};

	FULL() {
	    return this.getToken(InformixSQLParser.FULL, 0);
	};

	GLOB() {
	    return this.getToken(InformixSQLParser.GLOB, 0);
	};

	GROUP() {
	    return this.getToken(InformixSQLParser.GROUP, 0);
	};

	HAVING() {
	    return this.getToken(InformixSQLParser.HAVING, 0);
	};

	IF() {
	    return this.getToken(InformixSQLParser.IF, 0);
	};

	IGNORE() {
	    return this.getToken(InformixSQLParser.IGNORE, 0);
	};

	IMMEDIATE() {
	    return this.getToken(InformixSQLParser.IMMEDIATE, 0);
	};

	IN() {
	    return this.getToken(InformixSQLParser.IN, 0);
	};

	INDEX() {
	    return this.getToken(InformixSQLParser.INDEX, 0);
	};

	INDEXED() {
	    return this.getToken(InformixSQLParser.INDEXED, 0);
	};

	INITIALLY() {
	    return this.getToken(InformixSQLParser.INITIALLY, 0);
	};

	INNER() {
	    return this.getToken(InformixSQLParser.INNER, 0);
	};

	INSERT() {
	    return this.getToken(InformixSQLParser.INSERT, 0);
	};

	INSTEAD() {
	    return this.getToken(InformixSQLParser.INSTEAD, 0);
	};

	INTERSECT() {
	    return this.getToken(InformixSQLParser.INTERSECT, 0);
	};

	INTO() {
	    return this.getToken(InformixSQLParser.INTO, 0);
	};

	IS() {
	    return this.getToken(InformixSQLParser.IS, 0);
	};

	ISNULL() {
	    return this.getToken(InformixSQLParser.ISNULL, 0);
	};

	JOIN() {
	    return this.getToken(InformixSQLParser.JOIN, 0);
	};

	KEY() {
	    return this.getToken(InformixSQLParser.KEY, 0);
	};

	LABEL() {
	    return this.getToken(InformixSQLParser.LABEL, 0);
	};

	LEFT() {
	    return this.getToken(InformixSQLParser.LEFT, 0);
	};

	LIKE() {
	    return this.getToken(InformixSQLParser.LIKE, 0);
	};

	LIMIT() {
	    return this.getToken(InformixSQLParser.LIMIT, 0);
	};

	MATCH() {
	    return this.getToken(InformixSQLParser.MATCH, 0);
	};

	NATURAL() {
	    return this.getToken(InformixSQLParser.NATURAL, 0);
	};

	NO() {
	    return this.getToken(InformixSQLParser.NO, 0);
	};

	NOT() {
	    return this.getToken(InformixSQLParser.NOT, 0);
	};

	NOTNULL() {
	    return this.getToken(InformixSQLParser.NOTNULL, 0);
	};

	NULL() {
	    return this.getToken(InformixSQLParser.NULL, 0);
	};

	OF() {
	    return this.getToken(InformixSQLParser.OF, 0);
	};

	OFF() {
	    return this.getToken(InformixSQLParser.OFF, 0);
	};

	OFFSET() {
	    return this.getToken(InformixSQLParser.OFFSET, 0);
	};

	ON() {
	    return this.getToken(InformixSQLParser.ON, 0);
	};

	ONLINE() {
	    return this.getToken(InformixSQLParser.ONLINE, 0);
	};

	OR() {
	    return this.getToken(InformixSQLParser.OR, 0);
	};

	ORDER() {
	    return this.getToken(InformixSQLParser.ORDER, 0);
	};

	OUTER() {
	    return this.getToken(InformixSQLParser.OUTER, 0);
	};

	POLICY() {
	    return this.getToken(InformixSQLParser.POLICY, 0);
	};

	PLAN() {
	    return this.getToken(InformixSQLParser.PLAN, 0);
	};

	PRAGMA() {
	    return this.getToken(InformixSQLParser.PRAGMA, 0);
	};

	PRIMARY() {
	    return this.getToken(InformixSQLParser.PRIMARY, 0);
	};

	QUERY() {
	    return this.getToken(InformixSQLParser.QUERY, 0);
	};

	RAISE() {
	    return this.getToken(InformixSQLParser.RAISE, 0);
	};

	RECURSIVE() {
	    return this.getToken(InformixSQLParser.RECURSIVE, 0);
	};

	REFERENCES() {
	    return this.getToken(InformixSQLParser.REFERENCES, 0);
	};

	REGEXP() {
	    return this.getToken(InformixSQLParser.REGEXP, 0);
	};

	REINDEX() {
	    return this.getToken(InformixSQLParser.REINDEX, 0);
	};

	RELEASE() {
	    return this.getToken(InformixSQLParser.RELEASE, 0);
	};

	RENAME() {
	    return this.getToken(InformixSQLParser.RENAME, 0);
	};

	REPLACE() {
	    return this.getToken(InformixSQLParser.REPLACE, 0);
	};

	RESTRICT() {
	    return this.getToken(InformixSQLParser.RESTRICT, 0);
	};

	RIGHT() {
	    return this.getToken(InformixSQLParser.RIGHT, 0);
	};

	ROLLBACK() {
	    return this.getToken(InformixSQLParser.ROLLBACK, 0);
	};

	ROW() {
	    return this.getToken(InformixSQLParser.ROW, 0);
	};

	ROWS() {
	    return this.getToken(InformixSQLParser.ROWS, 0);
	};

	SAVEPOINT() {
	    return this.getToken(InformixSQLParser.SAVEPOINT, 0);
	};

	SECURITY() {
	    return this.getToken(InformixSQLParser.SECURITY, 0);
	};

	SELECT() {
	    return this.getToken(InformixSQLParser.SELECT, 0);
	};

	SET() {
	    return this.getToken(InformixSQLParser.SET, 0);
	};

	SEQUENCE() {
	    return this.getToken(InformixSQLParser.SEQUENCE, 0);
	};

	SYNONYM() {
	    return this.getToken(InformixSQLParser.SYNONYM, 0);
	};

	TABLE() {
	    return this.getToken(InformixSQLParser.TABLE, 0);
	};

	TEMP() {
	    return this.getToken(InformixSQLParser.TEMP, 0);
	};

	TEMPORARY() {
	    return this.getToken(InformixSQLParser.TEMPORARY, 0);
	};

	THEN() {
	    return this.getToken(InformixSQLParser.THEN, 0);
	};

	TO() {
	    return this.getToken(InformixSQLParser.TO, 0);
	};

	TRANSACTION() {
	    return this.getToken(InformixSQLParser.TRANSACTION, 0);
	};

	TRIGGER() {
	    return this.getToken(InformixSQLParser.TRIGGER, 0);
	};

	TRUSTED() {
	    return this.getToken(InformixSQLParser.TRUSTED, 0);
	};

	TYPE() {
	    return this.getToken(InformixSQLParser.TYPE, 0);
	};

	UNION() {
	    return this.getToken(InformixSQLParser.UNION, 0);
	};

	UNIQUE() {
	    return this.getToken(InformixSQLParser.UNIQUE, 0);
	};

	UPDATE() {
	    return this.getToken(InformixSQLParser.UPDATE, 0);
	};

	USER() {
	    return this.getToken(InformixSQLParser.USER, 0);
	};

	USING() {
	    return this.getToken(InformixSQLParser.USING, 0);
	};

	VACUUM() {
	    return this.getToken(InformixSQLParser.VACUUM, 0);
	};

	VALUES() {
	    return this.getToken(InformixSQLParser.VALUES, 0);
	};

	VIEW() {
	    return this.getToken(InformixSQLParser.VIEW, 0);
	};

	VIRTUAL() {
	    return this.getToken(InformixSQLParser.VIRTUAL, 0);
	};

	WHEN() {
	    return this.getToken(InformixSQLParser.WHEN, 0);
	};

	WHERE() {
	    return this.getToken(InformixSQLParser.WHERE, 0);
	};

	WITH() {
	    return this.getToken(InformixSQLParser.WITH, 0);
	};

	WITHOUT() {
	    return this.getToken(InformixSQLParser.WITHOUT, 0);
	};

	WORK() {
	    return this.getToken(InformixSQLParser.WORK, 0);
	};

	XADATASOURCE() {
	    return this.getToken(InformixSQLParser.XADATASOURCE, 0);
	};

	FIRST_VALUE() {
	    return this.getToken(InformixSQLParser.FIRST_VALUE, 0);
	};

	OVER() {
	    return this.getToken(InformixSQLParser.OVER, 0);
	};

	PARTITION() {
	    return this.getToken(InformixSQLParser.PARTITION, 0);
	};

	RANGE() {
	    return this.getToken(InformixSQLParser.RANGE, 0);
	};

	PRECEDING() {
	    return this.getToken(InformixSQLParser.PRECEDING, 0);
	};

	UNBOUNDED() {
	    return this.getToken(InformixSQLParser.UNBOUNDED, 0);
	};

	CURRENT() {
	    return this.getToken(InformixSQLParser.CURRENT, 0);
	};

	FOLLOWING() {
	    return this.getToken(InformixSQLParser.FOLLOWING, 0);
	};

	CUME_DIST() {
	    return this.getToken(InformixSQLParser.CUME_DIST, 0);
	};

	DENSE_RANK() {
	    return this.getToken(InformixSQLParser.DENSE_RANK, 0);
	};

	LAG() {
	    return this.getToken(InformixSQLParser.LAG, 0);
	};

	LAST_VALUE() {
	    return this.getToken(InformixSQLParser.LAST_VALUE, 0);
	};

	LEAD() {
	    return this.getToken(InformixSQLParser.LEAD, 0);
	};

	NTH_VALUE() {
	    return this.getToken(InformixSQLParser.NTH_VALUE, 0);
	};

	NTILE() {
	    return this.getToken(InformixSQLParser.NTILE, 0);
	};

	PERCENT_RANK() {
	    return this.getToken(InformixSQLParser.PERCENT_RANK, 0);
	};

	RANK() {
	    return this.getToken(InformixSQLParser.RANK, 0);
	};

	ROW_NUMBER() {
	    return this.getToken(InformixSQLParser.ROW_NUMBER, 0);
	};

	GENERATED() {
	    return this.getToken(InformixSQLParser.GENERATED, 0);
	};

	ALWAYS() {
	    return this.getToken(InformixSQLParser.ALWAYS, 0);
	};

	STORED() {
	    return this.getToken(InformixSQLParser.STORED, 0);
	};

	TRUE() {
	    return this.getToken(InformixSQLParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(InformixSQLParser.FALSE, 0);
	};

	WINDOW() {
	    return this.getToken(InformixSQLParser.WINDOW, 0);
	};

	NULLS() {
	    return this.getToken(InformixSQLParser.NULLS, 0);
	};

	FIRST() {
	    return this.getToken(InformixSQLParser.FIRST, 0);
	};

	LAST() {
	    return this.getToken(InformixSQLParser.LAST, 0);
	};

	FILTER() {
	    return this.getToken(InformixSQLParser.FILTER, 0);
	};

	GROUPS() {
	    return this.getToken(InformixSQLParser.GROUPS, 0);
	};

	EXCLUDE() {
	    return this.getToken(InformixSQLParser.EXCLUDE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof InformixSQLParserListener ) {
	        listener.exitKeyword(this);
		}
	}


}




InformixSQLParser.SqlScriptContext = SqlScriptContext; 
InformixSQLParser.UnitStatementContext = UnitStatementContext; 
InformixSQLParser.CreateRoleContext = CreateRoleContext; 
InformixSQLParser.DropRoleContext = DropRoleContext; 
InformixSQLParser.DropSynonymContext = DropSynonymContext; 
InformixSQLParser.DropTableContext = DropTableContext; 
InformixSQLParser.DropTriggerContext = DropTriggerContext; 
InformixSQLParser.DropTrustedContextContext = DropTrustedContextContext; 
InformixSQLParser.DropTypeContext = DropTypeContext; 
InformixSQLParser.DropUserContext = DropUserContext; 
InformixSQLParser.DropViewContext = DropViewContext; 
InformixSQLParser.DropXadatasourceContext = DropXadatasourceContext; 
InformixSQLParser.DropXadataTypeSourceContext = DropXadataTypeSourceContext; 
InformixSQLParser.DropAccessMethodContext = DropAccessMethodContext; 
InformixSQLParser.DropAggregateContext = DropAggregateContext; 
InformixSQLParser.DropDatabaseContext = DropDatabaseContext; 
InformixSQLParser.DropIndexContext = DropIndexContext; 
InformixSQLParser.CloseStmtContext = CloseStmtContext; 
InformixSQLParser.CloseDatabaseStmtContext = CloseDatabaseStmtContext; 
InformixSQLParser.DatabaseStmtContext = DatabaseStmtContext; 
InformixSQLParser.CommitWorkStmtContext = CommitWorkStmtContext; 
InformixSQLParser.ReleaseSavepointContext = ReleaseSavepointContext; 
InformixSQLParser.RenameColumnContext = RenameColumnContext; 
InformixSQLParser.RenameConstraintContext = RenameConstraintContext; 
InformixSQLParser.RenameDatabaseContext = RenameDatabaseContext; 
InformixSQLParser.RenameIndexContext = RenameIndexContext; 
InformixSQLParser.RenameSecurityContext = RenameSecurityContext; 
InformixSQLParser.RenameSequenceContext = RenameSequenceContext; 
InformixSQLParser.RenameTableContext = RenameTableContext; 
InformixSQLParser.RenameTrustedContextContext = RenameTrustedContextContext; 
InformixSQLParser.RenameUserContext = RenameUserContext; 
InformixSQLParser.RollbackWorkContext = RollbackWorkContext; 
InformixSQLParser.SavepointStmtContext = SavepointStmtContext; 
InformixSQLParser.SetAutofreeContext = SetAutofreeContext; 
InformixSQLParser.SetCollationContext = SetCollationContext; 
InformixSQLParser.SetDataskipContext = SetDataskipContext; 
InformixSQLParser.SetDebugFileContext = SetDebugFileContext; 
InformixSQLParser.SetDeferredPrepareStatementContext = SetDeferredPrepareStatementContext; 
InformixSQLParser.QuotedStringContext = QuotedStringContext; 
InformixSQLParser.AnyNameContext = AnyNameContext; 
InformixSQLParser.IdentifierContext = IdentifierContext; 
InformixSQLParser.KeywordContext = KeywordContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
