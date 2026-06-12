// Generated from ./lua/LuaParser.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import LuaParserListener from './LuaParserListener.js';
import LuaParserBase from './LuaParserBase.js';

const serializedATN = [4,1,67,417,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,1,0,1,0,1,0,1,
1,1,1,1,2,5,2,59,8,2,10,2,12,2,62,9,2,1,2,3,2,65,8,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,101,8,3,10,3,12,3,104,9,
3,1,3,1,3,3,3,108,8,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,120,8,
3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,146,8,3,3,3,148,8,3,1,4,1,4,1,4,1,4,1,4,5,
4,155,8,4,10,4,12,4,158,9,4,1,5,1,5,1,5,3,5,163,8,5,1,6,1,6,3,6,167,8,6,
1,6,3,6,170,8,6,1,7,1,7,1,7,1,7,1,8,1,8,1,8,5,8,179,8,8,10,8,12,8,182,9,
8,1,8,1,8,3,8,186,8,8,1,9,1,9,1,9,5,9,191,8,9,10,9,12,9,194,9,9,1,10,1,10,
1,10,5,10,199,8,10,10,10,12,10,202,9,10,1,11,1,11,1,11,5,11,207,8,11,10,
11,12,11,210,9,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,3,12,224,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,250,
8,12,10,12,12,12,253,9,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,263,
8,13,3,13,265,8,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,275,8,14,
10,14,12,14,278,9,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,287,8,14,10,
14,12,14,290,9,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,5,14,301,
8,14,10,14,12,14,304,9,14,3,14,306,8,14,1,15,1,15,1,15,1,15,1,15,3,15,313,
8,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,321,8,15,10,15,12,15,324,9,15,1,
15,1,15,1,15,1,15,3,15,330,8,15,1,15,1,15,1,15,1,15,1,15,1,15,5,15,338,8,
15,10,15,12,15,341,9,15,1,15,1,15,1,15,1,15,3,15,347,8,15,5,15,349,8,15,
10,15,12,15,352,9,15,1,16,1,16,3,16,356,8,16,1,16,1,16,1,16,3,16,361,8,16,
1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,3,19,375,8,19,
1,19,1,19,3,19,379,8,19,1,20,1,20,3,20,383,8,20,1,20,1,20,1,21,1,21,1,21,
1,21,5,21,391,8,21,10,21,12,21,394,9,21,1,21,3,21,397,8,21,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,409,8,22,1,23,1,23,1,24,1,24,1,25,
1,25,1,25,0,1,24,26,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
38,40,42,44,46,48,50,0,8,2,0,27,29,32,32,3,0,36,37,44,44,53,53,2,0,28,28,
43,43,4,0,19,20,39,40,49,49,55,55,3,0,27,27,33,35,51,51,2,0,1,1,15,15,1,
0,60,63,1,0,57,59,465,0,52,1,0,0,0,2,55,1,0,0,0,4,60,1,0,0,0,6,147,1,0,0,
0,8,149,1,0,0,0,10,162,1,0,0,0,12,164,1,0,0,0,14,171,1,0,0,0,16,175,1,0,
0,0,18,187,1,0,0,0,20,195,1,0,0,0,22,203,1,0,0,0,24,223,1,0,0,0,26,264,1,
0,0,0,28,305,1,0,0,0,30,312,1,0,0,0,32,360,1,0,0,0,34,362,1,0,0,0,36,365,
1,0,0,0,38,378,1,0,0,0,40,380,1,0,0,0,42,386,1,0,0,0,44,408,1,0,0,0,46,410,
1,0,0,0,48,412,1,0,0,0,50,414,1,0,0,0,52,53,3,2,1,0,53,54,5,0,0,1,54,1,1,
0,0,0,55,56,3,4,2,0,56,3,1,0,0,0,57,59,3,6,3,0,58,57,1,0,0,0,59,62,1,0,0,
0,60,58,1,0,0,0,60,61,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,63,65,3,12,6,0,
64,63,1,0,0,0,64,65,1,0,0,0,65,5,1,0,0,0,66,148,5,1,0,0,67,68,3,18,9,0,68,
69,5,2,0,0,69,70,3,22,11,0,70,148,1,0,0,0,71,148,3,30,15,0,72,148,3,14,7,
0,73,148,5,3,0,0,74,75,5,4,0,0,75,148,5,56,0,0,76,77,5,5,0,0,77,78,3,4,2,
0,78,79,5,6,0,0,79,148,1,0,0,0,80,81,5,7,0,0,81,82,3,24,12,0,82,83,5,5,0,
0,83,84,3,4,2,0,84,85,5,6,0,0,85,148,1,0,0,0,86,87,5,8,0,0,87,88,3,4,2,0,
88,89,5,9,0,0,89,90,3,24,12,0,90,148,1,0,0,0,91,92,5,10,0,0,92,93,3,24,12,
0,93,94,5,11,0,0,94,102,3,4,2,0,95,96,5,12,0,0,96,97,3,24,12,0,97,98,5,11,
0,0,98,99,3,4,2,0,99,101,1,0,0,0,100,95,1,0,0,0,101,104,1,0,0,0,102,100,
1,0,0,0,102,103,1,0,0,0,103,107,1,0,0,0,104,102,1,0,0,0,105,106,5,13,0,0,
106,108,3,4,2,0,107,105,1,0,0,0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,
5,6,0,0,110,148,1,0,0,0,111,112,5,14,0,0,112,113,5,56,0,0,113,114,5,2,0,
0,114,115,3,24,12,0,115,116,5,15,0,0,116,119,3,24,12,0,117,118,5,15,0,0,
118,120,3,24,12,0,119,117,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,122,
5,5,0,0,122,123,3,4,2,0,123,124,5,6,0,0,124,148,1,0,0,0,125,126,5,14,0,0,
126,127,3,20,10,0,127,128,5,16,0,0,128,129,3,22,11,0,129,130,5,5,0,0,130,
131,3,4,2,0,131,132,5,6,0,0,132,148,1,0,0,0,133,134,5,17,0,0,134,135,3,16,
8,0,135,136,3,36,18,0,136,148,1,0,0,0,137,138,5,18,0,0,138,139,5,17,0,0,
139,140,5,56,0,0,140,148,3,36,18,0,141,142,5,18,0,0,142,145,3,8,4,0,143,
144,5,2,0,0,144,146,3,22,11,0,145,143,1,0,0,0,145,146,1,0,0,0,146,148,1,
0,0,0,147,66,1,0,0,0,147,67,1,0,0,0,147,71,1,0,0,0,147,72,1,0,0,0,147,73,
1,0,0,0,147,74,1,0,0,0,147,76,1,0,0,0,147,80,1,0,0,0,147,86,1,0,0,0,147,
91,1,0,0,0,147,111,1,0,0,0,147,125,1,0,0,0,147,133,1,0,0,0,147,137,1,0,0,
0,147,141,1,0,0,0,148,7,1,0,0,0,149,150,5,56,0,0,150,156,3,10,5,0,151,152,
5,15,0,0,152,153,5,56,0,0,153,155,3,10,5,0,154,151,1,0,0,0,155,158,1,0,0,
0,156,154,1,0,0,0,156,157,1,0,0,0,157,9,1,0,0,0,158,156,1,0,0,0,159,160,
5,19,0,0,160,161,5,56,0,0,161,163,5,20,0,0,162,159,1,0,0,0,162,163,1,0,0,
0,163,11,1,0,0,0,164,166,5,21,0,0,165,167,3,22,11,0,166,165,1,0,0,0,166,
167,1,0,0,0,167,169,1,0,0,0,168,170,5,1,0,0,169,168,1,0,0,0,169,170,1,0,
0,0,170,13,1,0,0,0,171,172,5,22,0,0,172,173,5,56,0,0,173,174,5,22,0,0,174,
15,1,0,0,0,175,180,5,56,0,0,176,177,5,26,0,0,177,179,5,56,0,0,178,176,1,
0,0,0,179,182,1,0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,185,1,0,0,0,182,
180,1,0,0,0,183,184,5,38,0,0,184,186,5,56,0,0,185,183,1,0,0,0,185,186,1,
0,0,0,186,17,1,0,0,0,187,192,3,26,13,0,188,189,5,15,0,0,189,191,3,26,13,
0,190,188,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,19,
1,0,0,0,194,192,1,0,0,0,195,200,5,56,0,0,196,197,5,15,0,0,197,199,5,56,0,
0,198,196,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,21,
1,0,0,0,202,200,1,0,0,0,203,208,3,24,12,0,204,205,5,15,0,0,205,207,3,24,
12,0,206,204,1,0,0,0,207,210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,
23,1,0,0,0,210,208,1,0,0,0,211,212,6,12,-1,0,212,224,5,23,0,0,213,224,5,
24,0,0,214,224,5,25,0,0,215,224,3,48,24,0,216,224,3,50,25,0,217,224,5,54,
0,0,218,224,3,34,17,0,219,224,3,28,14,0,220,224,3,40,20,0,221,222,7,0,0,
0,222,224,3,24,12,8,223,211,1,0,0,0,223,213,1,0,0,0,223,214,1,0,0,0,223,
215,1,0,0,0,223,216,1,0,0,0,223,217,1,0,0,0,223,218,1,0,0,0,223,219,1,0,
0,0,223,220,1,0,0,0,223,221,1,0,0,0,224,251,1,0,0,0,225,226,10,9,0,0,226,
227,5,52,0,0,227,250,3,24,12,9,228,229,10,7,0,0,229,230,7,1,0,0,230,250,
3,24,12,8,231,232,10,6,0,0,232,233,7,2,0,0,233,250,3,24,12,7,234,235,10,
5,0,0,235,236,5,50,0,0,236,250,3,24,12,5,237,238,10,4,0,0,238,239,7,3,0,
0,239,250,3,24,12,5,240,241,10,3,0,0,241,242,5,41,0,0,242,250,3,24,12,4,
243,244,10,2,0,0,244,245,5,42,0,0,245,250,3,24,12,3,246,247,10,1,0,0,247,
248,7,4,0,0,248,250,3,24,12,2,249,225,1,0,0,0,249,228,1,0,0,0,249,231,1,
0,0,0,249,234,1,0,0,0,249,237,1,0,0,0,249,240,1,0,0,0,249,243,1,0,0,0,249,
246,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,25,1,0,0,
0,253,251,1,0,0,0,254,265,5,56,0,0,255,262,3,28,14,0,256,257,5,47,0,0,257,
258,3,24,12,0,258,259,5,48,0,0,259,263,1,0,0,0,260,261,5,26,0,0,261,263,
5,56,0,0,262,256,1,0,0,0,262,260,1,0,0,0,263,265,1,0,0,0,264,254,1,0,0,0,
264,255,1,0,0,0,265,27,1,0,0,0,266,267,4,14,8,0,267,276,5,56,0,0,268,269,
5,47,0,0,269,270,3,24,12,0,270,271,5,48,0,0,271,275,1,0,0,0,272,273,5,26,
0,0,273,275,5,56,0,0,274,268,1,0,0,0,274,272,1,0,0,0,275,278,1,0,0,0,276,
274,1,0,0,0,276,277,1,0,0,0,277,306,1,0,0,0,278,276,1,0,0,0,279,288,3,30,
15,0,280,281,5,47,0,0,281,282,3,24,12,0,282,283,5,48,0,0,283,287,1,0,0,0,
284,285,5,26,0,0,285,287,5,56,0,0,286,280,1,0,0,0,286,284,1,0,0,0,287,290,
1,0,0,0,288,286,1,0,0,0,288,289,1,0,0,0,289,306,1,0,0,0,290,288,1,0,0,0,
291,292,5,30,0,0,292,293,3,24,12,0,293,302,5,31,0,0,294,295,5,47,0,0,295,
296,3,24,12,0,296,297,5,48,0,0,297,301,1,0,0,0,298,299,5,26,0,0,299,301,
5,56,0,0,300,294,1,0,0,0,300,298,1,0,0,0,301,304,1,0,0,0,302,300,1,0,0,0,
302,303,1,0,0,0,303,306,1,0,0,0,304,302,1,0,0,0,305,266,1,0,0,0,305,279,
1,0,0,0,305,291,1,0,0,0,306,29,1,0,0,0,307,313,5,56,0,0,308,309,5,30,0,0,
309,310,3,24,12,0,310,311,5,31,0,0,311,313,1,0,0,0,312,307,1,0,0,0,312,308,
1,0,0,0,313,322,1,0,0,0,314,315,5,47,0,0,315,316,3,24,12,0,316,317,5,48,
0,0,317,321,1,0,0,0,318,319,5,26,0,0,319,321,5,56,0,0,320,314,1,0,0,0,320,
318,1,0,0,0,321,324,1,0,0,0,322,320,1,0,0,0,322,323,1,0,0,0,323,329,1,0,
0,0,324,322,1,0,0,0,325,330,3,32,16,0,326,327,5,38,0,0,327,328,5,56,0,0,
328,330,3,32,16,0,329,325,1,0,0,0,329,326,1,0,0,0,330,350,1,0,0,0,331,332,
5,47,0,0,332,333,3,24,12,0,333,334,5,48,0,0,334,338,1,0,0,0,335,336,5,26,
0,0,336,338,5,56,0,0,337,331,1,0,0,0,337,335,1,0,0,0,338,341,1,0,0,0,339,
337,1,0,0,0,339,340,1,0,0,0,340,346,1,0,0,0,341,339,1,0,0,0,342,347,3,32,
16,0,343,344,5,38,0,0,344,345,5,56,0,0,345,347,3,32,16,0,346,342,1,0,0,0,
346,343,1,0,0,0,347,349,1,0,0,0,348,339,1,0,0,0,349,352,1,0,0,0,350,348,
1,0,0,0,350,351,1,0,0,0,351,31,1,0,0,0,352,350,1,0,0,0,353,355,5,30,0,0,
354,356,3,22,11,0,355,354,1,0,0,0,355,356,1,0,0,0,356,357,1,0,0,0,357,361,
5,31,0,0,358,361,3,40,20,0,359,361,3,50,25,0,360,353,1,0,0,0,360,358,1,0,
0,0,360,359,1,0,0,0,361,33,1,0,0,0,362,363,5,17,0,0,363,364,3,36,18,0,364,
35,1,0,0,0,365,366,5,30,0,0,366,367,3,38,19,0,367,368,5,31,0,0,368,369,3,
4,2,0,369,370,5,6,0,0,370,37,1,0,0,0,371,374,3,20,10,0,372,373,5,15,0,0,
373,375,5,54,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,379,1,0,0,0,376,379,
5,54,0,0,377,379,1,0,0,0,378,371,1,0,0,0,378,376,1,0,0,0,378,377,1,0,0,0,
379,39,1,0,0,0,380,382,5,45,0,0,381,383,3,42,21,0,382,381,1,0,0,0,382,383,
1,0,0,0,383,384,1,0,0,0,384,385,5,46,0,0,385,41,1,0,0,0,386,392,3,44,22,
0,387,388,3,46,23,0,388,389,3,44,22,0,389,391,1,0,0,0,390,387,1,0,0,0,391,
394,1,0,0,0,392,390,1,0,0,0,392,393,1,0,0,0,393,396,1,0,0,0,394,392,1,0,
0,0,395,397,3,46,23,0,396,395,1,0,0,0,396,397,1,0,0,0,397,43,1,0,0,0,398,
399,5,47,0,0,399,400,3,24,12,0,400,401,5,48,0,0,401,402,5,2,0,0,402,403,
3,24,12,0,403,409,1,0,0,0,404,405,5,56,0,0,405,406,5,2,0,0,406,409,3,24,
12,0,407,409,3,24,12,0,408,398,1,0,0,0,408,404,1,0,0,0,408,407,1,0,0,0,409,
45,1,0,0,0,410,411,7,5,0,0,411,47,1,0,0,0,412,413,7,6,0,0,413,49,1,0,0,0,
414,415,7,7,0,0,415,51,1,0,0,0,44,60,64,102,107,119,145,147,156,162,166,
169,180,185,192,200,208,223,249,251,262,264,274,276,286,288,300,302,305,
312,320,322,329,337,339,346,350,355,360,374,378,382,392,396,408];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LuaParser extends LuaParserBase {

    static grammarFileName = "LuaParser.g4";
    static literalNames = [ null, "';'", "'='", "'break'", "'goto'", "'do'", 
                            "'end'", "'while'", "'repeat'", "'until'", "'if'", 
                            "'then'", "'elseif'", "'else'", "'for'", "','", 
                            "'in'", "'function'", "'local'", "'<'", "'>'", 
                            "'return'", "'::'", "'nil'", "'false'", "'true'", 
                            "'.'", "'~'", "'-'", "'#'", "'('", "')'", "'not'", 
                            "'<<'", "'>>'", "'&'", "'//'", "'%'", "':'", 
                            "'<='", "'>='", "'and'", "'or'", "'+'", "'*'", 
                            "'{'", "'}'", "'['", "']'", "'=='", "'..'", 
                            "'|'", "'^'", "'/'", "'...'", "'~='" ];
    static symbolicNames = [ null, "SEMI", "EQ", "BREAK", "GOTO", "DO", 
                             "END", "WHILE", "REPEAT", "UNTIL", "IF", "THEN", 
                             "ELSEIF", "ELSE", "FOR", "COMMA", "IN", "FUNCTION", 
                             "LOCAL", "LT", "GT", "RETURN", "CC", "NIL", 
                             "FALSE", "TRUE", "DOT", "SQUIG", "MINUS", "POUND", 
                             "OP", "CP", "NOT", "LL", "GG", "AMP", "SS", 
                             "PER", "COL", "LE", "GE", "AND", "OR", "PLUS", 
                             "STAR", "OCU", "CCU", "OB", "CB", "EE", "DD", 
                             "PIPE", "CARET", "SLASH", "DDD", "SQEQ", "NAME", 
                             "NORMALSTRING", "CHARSTRING", "LONGSTRING", 
                             "INT", "HEX", "FLOAT", "HEX_FLOAT", "COMMENT", 
                             "WS", "NL", "SHEBANG" ];
    static ruleNames = [ "start_", "chunk", "block", "stat", "attnamelist", 
                         "attrib", "retstat", "label", "funcname", "varlist", 
                         "namelist", "explist", "exp", "var", "prefixexp", 
                         "functioncall", "args", "functiondef", "funcbody", 
                         "parlist", "tableconstructor", "fieldlist", "field", 
                         "fieldsep", "number", "string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LuaParser.ruleNames;
        this.literalNames = LuaParser.literalNames;
        this.symbolicNames = LuaParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 12:
    	    		return this.exp_sempred(localctx, predIndex);
    	case 14:
    	    		return this.prefixexp_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    exp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
    			return this.precpred(this._ctx, 4);
    		case 5:
    			return this.precpred(this._ctx, 3);
    		case 6:
    			return this.precpred(this._ctx, 2);
    		case 7:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    prefixexp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 8:
    			return  this.IsFunctionCall() ;
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start_() {
	    let localctx = new Start_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LuaParser.RULE_start_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.chunk();
	        this.state = 53;
	        this.match(LuaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chunk() {
	    let localctx = new ChunkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LuaParser.RULE_chunk);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
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
	    this.enterRule(localctx, 4, LuaParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 60;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 57;
	                this.stat(); 
	            }
	            this.state = 62;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
	        }

	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 63;
	            this.retstat();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, LuaParser.RULE_stat);
	    var _la = 0;
	    try {
	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66;
	            this.match(LuaParser.SEMI);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 67;
	            this.varlist();
	            this.state = 68;
	            this.match(LuaParser.EQ);
	            this.state = 69;
	            this.explist();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 71;
	            this.functioncall();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 72;
	            this.label();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 73;
	            this.match(LuaParser.BREAK);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 74;
	            this.match(LuaParser.GOTO);
	            this.state = 75;
	            this.match(LuaParser.NAME);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 76;
	            this.match(LuaParser.DO);
	            this.state = 77;
	            this.block();
	            this.state = 78;
	            this.match(LuaParser.END);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 80;
	            this.match(LuaParser.WHILE);
	            this.state = 81;
	            this.exp(0);
	            this.state = 82;
	            this.match(LuaParser.DO);
	            this.state = 83;
	            this.block();
	            this.state = 84;
	            this.match(LuaParser.END);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 86;
	            this.match(LuaParser.REPEAT);
	            this.state = 87;
	            this.block();
	            this.state = 88;
	            this.match(LuaParser.UNTIL);
	            this.state = 89;
	            this.exp(0);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 91;
	            this.match(LuaParser.IF);
	            this.state = 92;
	            this.exp(0);
	            this.state = 93;
	            this.match(LuaParser.THEN);
	            this.state = 94;
	            this.block();
	            this.state = 102;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 95;
	                this.match(LuaParser.ELSEIF);
	                this.state = 96;
	                this.exp(0);
	                this.state = 97;
	                this.match(LuaParser.THEN);
	                this.state = 98;
	                this.block();
	                this.state = 104;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 107;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===13) {
	                this.state = 105;
	                this.match(LuaParser.ELSE);
	                this.state = 106;
	                this.block();
	            }

	            this.state = 109;
	            this.match(LuaParser.END);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 111;
	            this.match(LuaParser.FOR);
	            this.state = 112;
	            this.match(LuaParser.NAME);
	            this.state = 113;
	            this.match(LuaParser.EQ);
	            this.state = 114;
	            this.exp(0);
	            this.state = 115;
	            this.match(LuaParser.COMMA);
	            this.state = 116;
	            this.exp(0);
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 117;
	                this.match(LuaParser.COMMA);
	                this.state = 118;
	                this.exp(0);
	            }

	            this.state = 121;
	            this.match(LuaParser.DO);
	            this.state = 122;
	            this.block();
	            this.state = 123;
	            this.match(LuaParser.END);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 125;
	            this.match(LuaParser.FOR);
	            this.state = 126;
	            this.namelist();
	            this.state = 127;
	            this.match(LuaParser.IN);
	            this.state = 128;
	            this.explist();
	            this.state = 129;
	            this.match(LuaParser.DO);
	            this.state = 130;
	            this.block();
	            this.state = 131;
	            this.match(LuaParser.END);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 133;
	            this.match(LuaParser.FUNCTION);
	            this.state = 134;
	            this.funcname();
	            this.state = 135;
	            this.funcbody();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 137;
	            this.match(LuaParser.LOCAL);
	            this.state = 138;
	            this.match(LuaParser.FUNCTION);
	            this.state = 139;
	            this.match(LuaParser.NAME);
	            this.state = 140;
	            this.funcbody();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 141;
	            this.match(LuaParser.LOCAL);
	            this.state = 142;
	            this.attnamelist();
	            this.state = 145;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	            if(la_===1) {
	                this.state = 143;
	                this.match(LuaParser.EQ);
	                this.state = 144;
	                this.explist();

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



	attnamelist() {
	    let localctx = new AttnamelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LuaParser.RULE_attnamelist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 149;
	        this.match(LuaParser.NAME);
	        this.state = 150;
	        this.attrib();
	        this.state = 156;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 151;
	                this.match(LuaParser.COMMA);
	                this.state = 152;
	                this.match(LuaParser.NAME);
	                this.state = 153;
	                this.attrib(); 
	            }
	            this.state = 158;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 10, LuaParser.RULE_attrib);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 162;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        if(la_===1) {
	            this.state = 159;
	            this.match(LuaParser.LT);
	            this.state = 160;
	            this.match(LuaParser.NAME);
	            this.state = 161;
	            this.match(LuaParser.GT);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retstat() {
	    let localctx = new RetstatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, LuaParser.RULE_retstat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 164;
	        this.match(LuaParser.RETURN);
	        this.state = 166;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 165;
	            this.explist();

	        }
	        this.state = 169;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 168;
	            this.match(LuaParser.SEMI);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 14, LuaParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 171;
	        this.match(LuaParser.CC);
	        this.state = 172;
	        this.match(LuaParser.NAME);
	        this.state = 173;
	        this.match(LuaParser.CC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcname() {
	    let localctx = new FuncnameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, LuaParser.RULE_funcname);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 175;
	        this.match(LuaParser.NAME);
	        this.state = 180;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 176;
	            this.match(LuaParser.DOT);
	            this.state = 177;
	            this.match(LuaParser.NAME);
	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 183;
	            this.match(LuaParser.COL);
	            this.state = 184;
	            this.match(LuaParser.NAME);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varlist() {
	    let localctx = new VarlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, LuaParser.RULE_varlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 187;
	        this.var_();
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 188;
	            this.match(LuaParser.COMMA);
	            this.state = 189;
	            this.var_();
	            this.state = 194;
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



	namelist() {
	    let localctx = new NamelistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, LuaParser.RULE_namelist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(LuaParser.NAME);
	        this.state = 200;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 196;
	                this.match(LuaParser.COMMA);
	                this.state = 197;
	                this.match(LuaParser.NAME); 
	            }
	            this.state = 202;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	explist() {
	    let localctx = new ExplistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, LuaParser.RULE_explist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 203;
	        this.exp(0);
	        this.state = 208;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 204;
	                this.match(LuaParser.COMMA);
	                this.state = 205;
	                this.exp(0); 
	            }
	            this.state = 210;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 24;
	    this.enterRecursionRule(localctx, 24, LuaParser.RULE_exp, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 212;
	            this.match(LuaParser.NIL);
	            break;

	        case 2:
	            this.state = 213;
	            this.match(LuaParser.FALSE);
	            break;

	        case 3:
	            this.state = 214;
	            this.match(LuaParser.TRUE);
	            break;

	        case 4:
	            this.state = 215;
	            this.number();
	            break;

	        case 5:
	            this.state = 216;
	            this.string();
	            break;

	        case 6:
	            this.state = 217;
	            this.match(LuaParser.DDD);
	            break;

	        case 7:
	            this.state = 218;
	            this.functiondef();
	            break;

	        case 8:
	            this.state = 219;
	            this.prefixexp();
	            break;

	        case 9:
	            this.state = 220;
	            this.tableconstructor();
	            break;

	        case 10:
	            this.state = 221;
	            _la = this._input.LA(1);
	            if(!(((((_la - 27)) & ~0x1f) === 0 && ((1 << (_la - 27)) & 39) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 222;
	            this.exp(8);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 251;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 249;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 225;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }

	                    this.state = 226;
	                    this.match(LuaParser.CARET);
	                    this.state = 227;
	                    this.exp(9);
	                    break;

	                case 2:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 228;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 229;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 36)) & ~0x1f) === 0 && ((1 << (_la - 36)) & 131331) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 230;
	                    this.exp(8);
	                    break;

	                case 3:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 231;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 232;
	                    _la = this._input.LA(1);
	                    if(!(_la===28 || _la===43)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 233;
	                    this.exp(7);
	                    break;

	                case 4:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 234;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }

	                    this.state = 235;
	                    this.match(LuaParser.DD);
	                    this.state = 236;
	                    this.exp(5);
	                    break;

	                case 5:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 237;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 238;
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 66563) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 239;
	                    this.exp(5);
	                    break;

	                case 6:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 240;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }

	                    this.state = 241;
	                    this.match(LuaParser.AND);
	                    this.state = 242;
	                    this.exp(4);
	                    break;

	                case 7:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 243;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }

	                    this.state = 244;
	                    this.match(LuaParser.OR);
	                    this.state = 245;
	                    this.exp(3);
	                    break;

	                case 8:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 247;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 27)) & ~0x1f) === 0 && ((1 << (_la - 27)) & 16777665) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 248;
	                    this.exp(2);
	                    break;

	                } 
	            }
	            this.state = 253;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
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



	var_() {
	    let localctx = new VarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, LuaParser.RULE_var);
	    try {
	        this.state = 264;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 254;
	            this.match(LuaParser.NAME);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 255;
	            this.prefixexp();
	            this.state = 262;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 47:
	                this.state = 256;
	                this.match(LuaParser.OB);
	                this.state = 257;
	                this.exp(0);
	                this.state = 258;
	                this.match(LuaParser.CB);
	                break;
	            case 26:
	                this.state = 260;
	                this.match(LuaParser.DOT);
	                this.state = 261;
	                this.match(LuaParser.NAME);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
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



	prefixexp() {
	    let localctx = new PrefixexpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LuaParser.RULE_prefixexp);
	    try {
	        this.state = 305;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 266;
	            if (!(  this.IsFunctionCall() )) {
	                throw new antlr4.error.FailedPredicateException(this, " this.IsFunctionCall() ");
	            }
	            this.state = 267;
	            this.match(LuaParser.NAME);
	            this.state = 276;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 274;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 47:
	                        this.state = 268;
	                        this.match(LuaParser.OB);
	                        this.state = 269;
	                        this.exp(0);
	                        this.state = 270;
	                        this.match(LuaParser.CB);
	                        break;
	                    case 26:
	                        this.state = 272;
	                        this.match(LuaParser.DOT);
	                        this.state = 273;
	                        this.match(LuaParser.NAME);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 278;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	            }

	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 279;
	            this.functioncall();
	            this.state = 288;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 286;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 47:
	                        this.state = 280;
	                        this.match(LuaParser.OB);
	                        this.state = 281;
	                        this.exp(0);
	                        this.state = 282;
	                        this.match(LuaParser.CB);
	                        break;
	                    case 26:
	                        this.state = 284;
	                        this.match(LuaParser.DOT);
	                        this.state = 285;
	                        this.match(LuaParser.NAME);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 290;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 291;
	            this.match(LuaParser.OP);
	            this.state = 292;
	            this.exp(0);
	            this.state = 293;
	            this.match(LuaParser.CP);
	            this.state = 302;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 300;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 47:
	                        this.state = 294;
	                        this.match(LuaParser.OB);
	                        this.state = 295;
	                        this.exp(0);
	                        this.state = 296;
	                        this.match(LuaParser.CB);
	                        break;
	                    case 26:
	                        this.state = 298;
	                        this.match(LuaParser.DOT);
	                        this.state = 299;
	                        this.match(LuaParser.NAME);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    } 
	                }
	                this.state = 304;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
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



	functioncall() {
	    let localctx = new FunctioncallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LuaParser.RULE_functioncall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 312;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 56:
	            this.state = 307;
	            this.match(LuaParser.NAME);
	            break;
	        case 30:
	            this.state = 308;
	            this.match(LuaParser.OP);
	            this.state = 309;
	            this.exp(0);
	            this.state = 310;
	            this.match(LuaParser.CP);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 322;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26 || _la===47) {
	            this.state = 320;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 47:
	                this.state = 314;
	                this.match(LuaParser.OB);
	                this.state = 315;
	                this.exp(0);
	                this.state = 316;
	                this.match(LuaParser.CB);
	                break;
	            case 26:
	                this.state = 318;
	                this.match(LuaParser.DOT);
	                this.state = 319;
	                this.match(LuaParser.NAME);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 329;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	        case 45:
	        case 57:
	        case 58:
	        case 59:
	            this.state = 325;
	            this.args();
	            break;
	        case 38:
	            this.state = 326;
	            this.match(LuaParser.COL);
	            this.state = 327;
	            this.match(LuaParser.NAME);
	            this.state = 328;
	            this.args();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 350;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 339;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===26 || _la===47) {
	                    this.state = 337;
	                    this._errHandler.sync(this);
	                    switch(this._input.LA(1)) {
	                    case 47:
	                        this.state = 331;
	                        this.match(LuaParser.OB);
	                        this.state = 332;
	                        this.exp(0);
	                        this.state = 333;
	                        this.match(LuaParser.CB);
	                        break;
	                    case 26:
	                        this.state = 335;
	                        this.match(LuaParser.DOT);
	                        this.state = 336;
	                        this.match(LuaParser.NAME);
	                        break;
	                    default:
	                        throw new antlr4.error.NoViableAltException(this);
	                    }
	                    this.state = 341;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	                this.state = 346;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 30:
	                case 45:
	                case 57:
	                case 58:
	                case 59:
	                    this.state = 342;
	                    this.args();
	                    break;
	                case 38:
	                    this.state = 343;
	                    this.match(LuaParser.COL);
	                    this.state = 344;
	                    this.match(LuaParser.NAME);
	                    this.state = 345;
	                    this.args();
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 352;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LuaParser.RULE_args);
	    try {
	        this.state = 360;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 353;
	            this.match(LuaParser.OP);
	            this.state = 355;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	            if(la_===1) {
	                this.state = 354;
	                this.explist();

	            }
	            this.state = 357;
	            this.match(LuaParser.CP);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 358;
	            this.tableconstructor();
	            break;
	        case 57:
	        case 58:
	        case 59:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 359;
	            this.string();
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



	functiondef() {
	    let localctx = new FunctiondefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LuaParser.RULE_functiondef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 362;
	        this.match(LuaParser.FUNCTION);
	        this.state = 363;
	        this.funcbody();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcbody() {
	    let localctx = new FuncbodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, LuaParser.RULE_funcbody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(LuaParser.OP);
	        this.state = 366;
	        this.parlist();
	        this.state = 367;
	        this.match(LuaParser.CP);
	        this.state = 368;
	        this.block();
	        this.state = 369;
	        this.match(LuaParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parlist() {
	    let localctx = new ParlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, LuaParser.RULE_parlist);
	    var _la = 0;
	    try {
	        this.state = 378;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 56:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 371;
	            this.namelist();
	            this.state = 374;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 372;
	                this.match(LuaParser.COMMA);
	                this.state = 373;
	                this.match(LuaParser.DDD);
	            }

	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
	            this.match(LuaParser.DDD);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);

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



	tableconstructor() {
	    let localctx = new TableconstructorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, LuaParser.RULE_tableconstructor);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 380;
	        this.match(LuaParser.OCU);
	        this.state = 382;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        if(la_===1) {
	            this.state = 381;
	            this.fieldlist();

	        }
	        this.state = 384;
	        this.match(LuaParser.CCU);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldlist() {
	    let localctx = new FieldlistContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, LuaParser.RULE_fieldlist);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.field();
	        this.state = 392;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 387;
	                this.fieldsep();
	                this.state = 388;
	                this.field(); 
	            }
	            this.state = 394;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	        }

	        this.state = 396;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1 || _la===15) {
	            this.state = 395;
	            this.fieldsep();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 44, LuaParser.RULE_field);
	    try {
	        this.state = 408;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 398;
	            this.match(LuaParser.OB);
	            this.state = 399;
	            this.exp(0);
	            this.state = 400;
	            this.match(LuaParser.CB);
	            this.state = 401;
	            this.match(LuaParser.EQ);
	            this.state = 402;
	            this.exp(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 404;
	            this.match(LuaParser.NAME);
	            this.state = 405;
	            this.match(LuaParser.EQ);
	            this.state = 406;
	            this.exp(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 407;
	            this.exp(0);
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



	fieldsep() {
	    let localctx = new FieldsepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, LuaParser.RULE_fieldsep);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===15)) {
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



	number() {
	    let localctx = new NumberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, LuaParser.RULE_number);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        _la = this._input.LA(1);
	        if(!(((((_la - 60)) & ~0x1f) === 0 && ((1 << (_la - 60)) & 15) !== 0))) {
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



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, LuaParser.RULE_string);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        _la = this._input.LA(1);
	        if(!(((((_la - 57)) & ~0x1f) === 0 && ((1 << (_la - 57)) & 7) !== 0))) {
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

LuaParser.EOF = antlr4.Token.EOF;
LuaParser.SEMI = 1;
LuaParser.EQ = 2;
LuaParser.BREAK = 3;
LuaParser.GOTO = 4;
LuaParser.DO = 5;
LuaParser.END = 6;
LuaParser.WHILE = 7;
LuaParser.REPEAT = 8;
LuaParser.UNTIL = 9;
LuaParser.IF = 10;
LuaParser.THEN = 11;
LuaParser.ELSEIF = 12;
LuaParser.ELSE = 13;
LuaParser.FOR = 14;
LuaParser.COMMA = 15;
LuaParser.IN = 16;
LuaParser.FUNCTION = 17;
LuaParser.LOCAL = 18;
LuaParser.LT = 19;
LuaParser.GT = 20;
LuaParser.RETURN = 21;
LuaParser.CC = 22;
LuaParser.NIL = 23;
LuaParser.FALSE = 24;
LuaParser.TRUE = 25;
LuaParser.DOT = 26;
LuaParser.SQUIG = 27;
LuaParser.MINUS = 28;
LuaParser.POUND = 29;
LuaParser.OP = 30;
LuaParser.CP = 31;
LuaParser.NOT = 32;
LuaParser.LL = 33;
LuaParser.GG = 34;
LuaParser.AMP = 35;
LuaParser.SS = 36;
LuaParser.PER = 37;
LuaParser.COL = 38;
LuaParser.LE = 39;
LuaParser.GE = 40;
LuaParser.AND = 41;
LuaParser.OR = 42;
LuaParser.PLUS = 43;
LuaParser.STAR = 44;
LuaParser.OCU = 45;
LuaParser.CCU = 46;
LuaParser.OB = 47;
LuaParser.CB = 48;
LuaParser.EE = 49;
LuaParser.DD = 50;
LuaParser.PIPE = 51;
LuaParser.CARET = 52;
LuaParser.SLASH = 53;
LuaParser.DDD = 54;
LuaParser.SQEQ = 55;
LuaParser.NAME = 56;
LuaParser.NORMALSTRING = 57;
LuaParser.CHARSTRING = 58;
LuaParser.LONGSTRING = 59;
LuaParser.INT = 60;
LuaParser.HEX = 61;
LuaParser.FLOAT = 62;
LuaParser.HEX_FLOAT = 63;
LuaParser.COMMENT = 64;
LuaParser.WS = 65;
LuaParser.NL = 66;
LuaParser.SHEBANG = 67;

LuaParser.RULE_start_ = 0;
LuaParser.RULE_chunk = 1;
LuaParser.RULE_block = 2;
LuaParser.RULE_stat = 3;
LuaParser.RULE_attnamelist = 4;
LuaParser.RULE_attrib = 5;
LuaParser.RULE_retstat = 6;
LuaParser.RULE_label = 7;
LuaParser.RULE_funcname = 8;
LuaParser.RULE_varlist = 9;
LuaParser.RULE_namelist = 10;
LuaParser.RULE_explist = 11;
LuaParser.RULE_exp = 12;
LuaParser.RULE_var = 13;
LuaParser.RULE_prefixexp = 14;
LuaParser.RULE_functioncall = 15;
LuaParser.RULE_args = 16;
LuaParser.RULE_functiondef = 17;
LuaParser.RULE_funcbody = 18;
LuaParser.RULE_parlist = 19;
LuaParser.RULE_tableconstructor = 20;
LuaParser.RULE_fieldlist = 21;
LuaParser.RULE_field = 22;
LuaParser.RULE_fieldsep = 23;
LuaParser.RULE_number = 24;
LuaParser.RULE_string = 25;

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
        this.ruleIndex = LuaParser.RULE_start_;
    }

	chunk() {
	    return this.getTypedRuleContext(ChunkContext,0);
	};

	EOF() {
	    return this.getToken(LuaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterStart_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitStart_(this);
		}
	}


}



class ChunkContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_chunk;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterChunk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitChunk(this);
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
        this.ruleIndex = LuaParser.RULE_block;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	retstat() {
	    return this.getTypedRuleContext(RetstatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitBlock(this);
		}
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_stat;
    }

	SEMI() {
	    return this.getToken(LuaParser.SEMI, 0);
	};

	varlist() {
	    return this.getTypedRuleContext(VarlistContext,0);
	};

	EQ() {
	    return this.getToken(LuaParser.EQ, 0);
	};

	explist() {
	    return this.getTypedRuleContext(ExplistContext,0);
	};

	functioncall() {
	    return this.getTypedRuleContext(FunctioncallContext,0);
	};

	label() {
	    return this.getTypedRuleContext(LabelContext,0);
	};

	BREAK() {
	    return this.getToken(LuaParser.BREAK, 0);
	};

	GOTO() {
	    return this.getToken(LuaParser.GOTO, 0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	DO() {
	    return this.getToken(LuaParser.DO, 0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	END() {
	    return this.getToken(LuaParser.END, 0);
	};

	WHILE() {
	    return this.getToken(LuaParser.WHILE, 0);
	};

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	REPEAT() {
	    return this.getToken(LuaParser.REPEAT, 0);
	};

	UNTIL() {
	    return this.getToken(LuaParser.UNTIL, 0);
	};

	IF() {
	    return this.getToken(LuaParser.IF, 0);
	};

	THEN = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.THEN);
	    } else {
	        return this.getToken(LuaParser.THEN, i);
	    }
	};


	ELSEIF = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.ELSEIF);
	    } else {
	        return this.getToken(LuaParser.ELSEIF, i);
	    }
	};


	ELSE() {
	    return this.getToken(LuaParser.ELSE, 0);
	};

	FOR() {
	    return this.getToken(LuaParser.FOR, 0);
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.COMMA);
	    } else {
	        return this.getToken(LuaParser.COMMA, i);
	    }
	};


	namelist() {
	    return this.getTypedRuleContext(NamelistContext,0);
	};

	IN() {
	    return this.getToken(LuaParser.IN, 0);
	};

	FUNCTION() {
	    return this.getToken(LuaParser.FUNCTION, 0);
	};

	funcname() {
	    return this.getTypedRuleContext(FuncnameContext,0);
	};

	funcbody() {
	    return this.getTypedRuleContext(FuncbodyContext,0);
	};

	LOCAL() {
	    return this.getToken(LuaParser.LOCAL, 0);
	};

	attnamelist() {
	    return this.getTypedRuleContext(AttnamelistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitStat(this);
		}
	}


}



class AttnamelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_attnamelist;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	attrib = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AttribContext);
	    } else {
	        return this.getTypedRuleContext(AttribContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.COMMA);
	    } else {
	        return this.getToken(LuaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterAttnamelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitAttnamelist(this);
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
        this.ruleIndex = LuaParser.RULE_attrib;
    }

	LT() {
	    return this.getToken(LuaParser.LT, 0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	GT() {
	    return this.getToken(LuaParser.GT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterAttrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitAttrib(this);
		}
	}


}



class RetstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_retstat;
    }

	RETURN() {
	    return this.getToken(LuaParser.RETURN, 0);
	};

	explist() {
	    return this.getTypedRuleContext(ExplistContext,0);
	};

	SEMI() {
	    return this.getToken(LuaParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterRetstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitRetstat(this);
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
        this.ruleIndex = LuaParser.RULE_label;
    }

	CC = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.CC);
	    } else {
	        return this.getToken(LuaParser.CC, i);
	    }
	};


	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitLabel(this);
		}
	}


}



class FuncnameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_funcname;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.DOT);
	    } else {
	        return this.getToken(LuaParser.DOT, i);
	    }
	};


	COL() {
	    return this.getToken(LuaParser.COL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterFuncname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitFuncname(this);
		}
	}


}



class VarlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_varlist;
    }

	var_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarContext);
	    } else {
	        return this.getTypedRuleContext(VarContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.COMMA);
	    } else {
	        return this.getToken(LuaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterVarlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitVarlist(this);
		}
	}


}



class NamelistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_namelist;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.COMMA);
	    } else {
	        return this.getToken(LuaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterNamelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitNamelist(this);
		}
	}


}



class ExplistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_explist;
    }

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.COMMA);
	    } else {
	        return this.getToken(LuaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterExplist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitExplist(this);
		}
	}


}



class ExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_exp;
    }

	NIL() {
	    return this.getToken(LuaParser.NIL, 0);
	};

	FALSE() {
	    return this.getToken(LuaParser.FALSE, 0);
	};

	TRUE() {
	    return this.getToken(LuaParser.TRUE, 0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	DDD() {
	    return this.getToken(LuaParser.DDD, 0);
	};

	functiondef() {
	    return this.getTypedRuleContext(FunctiondefContext,0);
	};

	prefixexp() {
	    return this.getTypedRuleContext(PrefixexpContext,0);
	};

	tableconstructor() {
	    return this.getTypedRuleContext(TableconstructorContext,0);
	};

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	NOT() {
	    return this.getToken(LuaParser.NOT, 0);
	};

	POUND() {
	    return this.getToken(LuaParser.POUND, 0);
	};

	MINUS() {
	    return this.getToken(LuaParser.MINUS, 0);
	};

	SQUIG() {
	    return this.getToken(LuaParser.SQUIG, 0);
	};

	CARET() {
	    return this.getToken(LuaParser.CARET, 0);
	};

	STAR() {
	    return this.getToken(LuaParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(LuaParser.SLASH, 0);
	};

	PER() {
	    return this.getToken(LuaParser.PER, 0);
	};

	SS() {
	    return this.getToken(LuaParser.SS, 0);
	};

	PLUS() {
	    return this.getToken(LuaParser.PLUS, 0);
	};

	DD() {
	    return this.getToken(LuaParser.DD, 0);
	};

	LT() {
	    return this.getToken(LuaParser.LT, 0);
	};

	GT() {
	    return this.getToken(LuaParser.GT, 0);
	};

	LE() {
	    return this.getToken(LuaParser.LE, 0);
	};

	GE() {
	    return this.getToken(LuaParser.GE, 0);
	};

	SQEQ() {
	    return this.getToken(LuaParser.SQEQ, 0);
	};

	EE() {
	    return this.getToken(LuaParser.EE, 0);
	};

	AND() {
	    return this.getToken(LuaParser.AND, 0);
	};

	OR() {
	    return this.getToken(LuaParser.OR, 0);
	};

	AMP() {
	    return this.getToken(LuaParser.AMP, 0);
	};

	PIPE() {
	    return this.getToken(LuaParser.PIPE, 0);
	};

	LL() {
	    return this.getToken(LuaParser.LL, 0);
	};

	GG() {
	    return this.getToken(LuaParser.GG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitExp(this);
		}
	}


}



class VarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_var;
    }

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	prefixexp() {
	    return this.getTypedRuleContext(PrefixexpContext,0);
	};

	OB() {
	    return this.getToken(LuaParser.OB, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	CB() {
	    return this.getToken(LuaParser.CB, 0);
	};

	DOT() {
	    return this.getToken(LuaParser.DOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterVar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitVar(this);
		}
	}


}



class PrefixexpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_prefixexp;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	OB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.OB);
	    } else {
	        return this.getToken(LuaParser.OB, i);
	    }
	};


	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	CB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.CB);
	    } else {
	        return this.getToken(LuaParser.CB, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.DOT);
	    } else {
	        return this.getToken(LuaParser.DOT, i);
	    }
	};


	functioncall() {
	    return this.getTypedRuleContext(FunctioncallContext,0);
	};

	OP() {
	    return this.getToken(LuaParser.OP, 0);
	};

	CP() {
	    return this.getToken(LuaParser.CP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterPrefixexp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitPrefixexp(this);
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
        this.ruleIndex = LuaParser.RULE_functioncall;
    }

	NAME = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.NAME);
	    } else {
	        return this.getToken(LuaParser.NAME, i);
	    }
	};


	OP() {
	    return this.getToken(LuaParser.OP, 0);
	};

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	CP() {
	    return this.getToken(LuaParser.CP, 0);
	};

	args = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgsContext);
	    } else {
	        return this.getTypedRuleContext(ArgsContext,i);
	    }
	};

	COL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.COL);
	    } else {
	        return this.getToken(LuaParser.COL, i);
	    }
	};


	OB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.OB);
	    } else {
	        return this.getToken(LuaParser.OB, i);
	    }
	};


	CB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.CB);
	    } else {
	        return this.getToken(LuaParser.CB, i);
	    }
	};


	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(LuaParser.DOT);
	    } else {
	        return this.getToken(LuaParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterFunctioncall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitFunctioncall(this);
		}
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_args;
    }

	OP() {
	    return this.getToken(LuaParser.OP, 0);
	};

	CP() {
	    return this.getToken(LuaParser.CP, 0);
	};

	explist() {
	    return this.getTypedRuleContext(ExplistContext,0);
	};

	tableconstructor() {
	    return this.getTypedRuleContext(TableconstructorContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitArgs(this);
		}
	}


}



class FunctiondefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_functiondef;
    }

	FUNCTION() {
	    return this.getToken(LuaParser.FUNCTION, 0);
	};

	funcbody() {
	    return this.getTypedRuleContext(FuncbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterFunctiondef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitFunctiondef(this);
		}
	}


}



class FuncbodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_funcbody;
    }

	OP() {
	    return this.getToken(LuaParser.OP, 0);
	};

	parlist() {
	    return this.getTypedRuleContext(ParlistContext,0);
	};

	CP() {
	    return this.getToken(LuaParser.CP, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	END() {
	    return this.getToken(LuaParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterFuncbody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitFuncbody(this);
		}
	}


}



class ParlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_parlist;
    }

	namelist() {
	    return this.getTypedRuleContext(NamelistContext,0);
	};

	COMMA() {
	    return this.getToken(LuaParser.COMMA, 0);
	};

	DDD() {
	    return this.getToken(LuaParser.DDD, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterParlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitParlist(this);
		}
	}


}



class TableconstructorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_tableconstructor;
    }

	OCU() {
	    return this.getToken(LuaParser.OCU, 0);
	};

	CCU() {
	    return this.getToken(LuaParser.CCU, 0);
	};

	fieldlist() {
	    return this.getTypedRuleContext(FieldlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterTableconstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitTableconstructor(this);
		}
	}


}



class FieldlistContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_fieldlist;
    }

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

	fieldsep = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldsepContext);
	    } else {
	        return this.getTypedRuleContext(FieldsepContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterFieldlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitFieldlist(this);
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
        this.ruleIndex = LuaParser.RULE_field;
    }

	OB() {
	    return this.getToken(LuaParser.OB, 0);
	};

	exp = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpContext);
	    } else {
	        return this.getTypedRuleContext(ExpContext,i);
	    }
	};

	CB() {
	    return this.getToken(LuaParser.CB, 0);
	};

	EQ() {
	    return this.getToken(LuaParser.EQ, 0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitField(this);
		}
	}


}



class FieldsepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_fieldsep;
    }

	COMMA() {
	    return this.getToken(LuaParser.COMMA, 0);
	};

	SEMI() {
	    return this.getToken(LuaParser.SEMI, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterFieldsep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitFieldsep(this);
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
        this.ruleIndex = LuaParser.RULE_number;
    }

	INT() {
	    return this.getToken(LuaParser.INT, 0);
	};

	HEX() {
	    return this.getToken(LuaParser.HEX, 0);
	};

	FLOAT() {
	    return this.getToken(LuaParser.FLOAT, 0);
	};

	HEX_FLOAT() {
	    return this.getToken(LuaParser.HEX_FLOAT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitNumber(this);
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
        this.ruleIndex = LuaParser.RULE_string;
    }

	NORMALSTRING() {
	    return this.getToken(LuaParser.NORMALSTRING, 0);
	};

	CHARSTRING() {
	    return this.getToken(LuaParser.CHARSTRING, 0);
	};

	LONGSTRING() {
	    return this.getToken(LuaParser.LONGSTRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaParserListener ) {
	        listener.exitString(this);
		}
	}


}




LuaParser.Start_Context = Start_Context; 
LuaParser.ChunkContext = ChunkContext; 
LuaParser.BlockContext = BlockContext; 
LuaParser.StatContext = StatContext; 
LuaParser.AttnamelistContext = AttnamelistContext; 
LuaParser.AttribContext = AttribContext; 
LuaParser.RetstatContext = RetstatContext; 
LuaParser.LabelContext = LabelContext; 
LuaParser.FuncnameContext = FuncnameContext; 
LuaParser.VarlistContext = VarlistContext; 
LuaParser.NamelistContext = NamelistContext; 
LuaParser.ExplistContext = ExplistContext; 
LuaParser.ExpContext = ExpContext; 
LuaParser.VarContext = VarContext; 
LuaParser.PrefixexpContext = PrefixexpContext; 
LuaParser.FunctioncallContext = FunctioncallContext; 
LuaParser.ArgsContext = ArgsContext; 
LuaParser.FunctiondefContext = FunctiondefContext; 
LuaParser.FuncbodyContext = FuncbodyContext; 
LuaParser.ParlistContext = ParlistContext; 
LuaParser.TableconstructorContext = TableconstructorContext; 
LuaParser.FieldlistContext = FieldlistContext; 
LuaParser.FieldContext = FieldContext; 
LuaParser.FieldsepContext = FieldsepContext; 
LuaParser.NumberContext = NumberContext; 
LuaParser.StringContext = StringContext; 
