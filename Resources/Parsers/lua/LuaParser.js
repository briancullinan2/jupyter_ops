// Generated from ./lua/Lua.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import LuaListener from './LuaListener.js';
const serializedATN = [4,1,67,420,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,1,0,1,0,1,0,1,1,5,1,79,8,1,10,1,12,1,82,9,1,1,1,3,
1,85,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
5,2,121,8,2,10,2,12,2,124,9,2,1,2,1,2,3,2,128,8,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,3,2,140,8,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,166,8,2,3,2,168,
8,2,1,3,1,3,1,3,1,3,1,3,5,3,175,8,3,10,3,12,3,178,9,3,1,4,1,4,1,4,3,4,183,
8,4,1,5,1,5,3,5,187,8,5,1,5,3,5,190,8,5,1,6,1,6,1,6,1,6,1,7,1,7,1,7,5,7,
199,8,7,10,7,12,7,202,9,7,1,7,1,7,3,7,206,8,7,1,8,1,8,1,8,5,8,211,8,8,10,
8,12,8,214,9,8,1,9,1,9,1,9,5,9,219,8,9,10,9,12,9,222,9,9,1,10,1,10,1,10,
5,10,227,8,10,10,10,12,10,230,9,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,3,11,245,8,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,279,8,11,
10,11,12,11,282,9,11,1,12,1,12,5,12,286,8,12,10,12,12,12,289,9,12,1,13,1,
13,4,13,293,8,13,11,13,12,13,294,1,14,1,14,1,14,1,14,1,14,3,14,302,8,14,
1,15,1,15,1,15,1,15,1,15,1,15,3,15,310,8,15,1,15,5,15,313,8,15,10,15,12,
15,316,9,15,1,16,5,16,319,8,16,10,16,12,16,322,9,16,1,16,1,16,1,16,1,16,
1,16,1,16,3,16,330,8,16,1,17,1,17,3,17,334,8,17,1,17,1,17,1,18,1,18,3,18,
340,8,18,1,18,1,18,1,18,3,18,345,8,18,1,19,1,19,1,19,1,20,1,20,3,20,352,
8,20,1,20,1,20,1,20,1,20,1,21,1,21,1,21,3,21,361,8,21,1,21,3,21,364,8,21,
1,22,1,22,3,22,368,8,22,1,22,1,22,1,23,1,23,1,23,1,23,5,23,376,8,23,10,23,
12,23,379,9,23,1,23,3,23,382,8,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
1,24,1,24,3,24,394,8,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,
1,30,1,30,1,31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,36,1,36,1,
36,0,1,22,37,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,
44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,0,8,2,0,1,1,15,15,2,0,19,20,
37,40,1,0,42,43,1,0,44,47,1,0,48,52,3,0,43,43,50,50,53,54,1,0,60,63,1,0,
57,59,447,0,74,1,0,0,0,2,80,1,0,0,0,4,167,1,0,0,0,6,169,1,0,0,0,8,182,1,
0,0,0,10,184,1,0,0,0,12,191,1,0,0,0,14,195,1,0,0,0,16,207,1,0,0,0,18,215,
1,0,0,0,20,223,1,0,0,0,22,244,1,0,0,0,24,283,1,0,0,0,26,290,1,0,0,0,28,301,
1,0,0,0,30,309,1,0,0,0,32,320,1,0,0,0,34,333,1,0,0,0,36,344,1,0,0,0,38,346,
1,0,0,0,40,349,1,0,0,0,42,363,1,0,0,0,44,365,1,0,0,0,46,371,1,0,0,0,48,393,
1,0,0,0,50,395,1,0,0,0,52,397,1,0,0,0,54,399,1,0,0,0,56,401,1,0,0,0,58,403,
1,0,0,0,60,405,1,0,0,0,62,407,1,0,0,0,64,409,1,0,0,0,66,411,1,0,0,0,68,413,
1,0,0,0,70,415,1,0,0,0,72,417,1,0,0,0,74,75,3,2,1,0,75,76,5,0,0,1,76,1,1,
0,0,0,77,79,3,4,2,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,
0,0,81,84,1,0,0,0,82,80,1,0,0,0,83,85,3,10,5,0,84,83,1,0,0,0,84,85,1,0,0,
0,85,3,1,0,0,0,86,168,5,1,0,0,87,88,3,16,8,0,88,89,5,2,0,0,89,90,3,20,10,
0,90,168,1,0,0,0,91,168,3,26,13,0,92,168,3,12,6,0,93,168,5,3,0,0,94,95,5,
4,0,0,95,168,5,56,0,0,96,97,5,5,0,0,97,98,3,2,1,0,98,99,5,6,0,0,99,168,1,
0,0,0,100,101,5,7,0,0,101,102,3,22,11,0,102,103,5,5,0,0,103,104,3,2,1,0,
104,105,5,6,0,0,105,168,1,0,0,0,106,107,5,8,0,0,107,108,3,2,1,0,108,109,
5,9,0,0,109,110,3,22,11,0,110,168,1,0,0,0,111,112,5,10,0,0,112,113,3,22,
11,0,113,114,5,11,0,0,114,122,3,2,1,0,115,116,5,12,0,0,116,117,3,22,11,0,
117,118,5,11,0,0,118,119,3,2,1,0,119,121,1,0,0,0,120,115,1,0,0,0,121,124,
1,0,0,0,122,120,1,0,0,0,122,123,1,0,0,0,123,127,1,0,0,0,124,122,1,0,0,0,
125,126,5,13,0,0,126,128,3,2,1,0,127,125,1,0,0,0,127,128,1,0,0,0,128,129,
1,0,0,0,129,130,5,6,0,0,130,168,1,0,0,0,131,132,5,14,0,0,132,133,5,56,0,
0,133,134,5,2,0,0,134,135,3,22,11,0,135,136,5,15,0,0,136,139,3,22,11,0,137,
138,5,15,0,0,138,140,3,22,11,0,139,137,1,0,0,0,139,140,1,0,0,0,140,141,1,
0,0,0,141,142,5,5,0,0,142,143,3,2,1,0,143,144,5,6,0,0,144,168,1,0,0,0,145,
146,5,14,0,0,146,147,3,18,9,0,147,148,5,16,0,0,148,149,3,20,10,0,149,150,
5,5,0,0,150,151,3,2,1,0,151,152,5,6,0,0,152,168,1,0,0,0,153,154,5,17,0,0,
154,155,3,14,7,0,155,156,3,40,20,0,156,168,1,0,0,0,157,158,5,18,0,0,158,
159,5,17,0,0,159,160,5,56,0,0,160,168,3,40,20,0,161,162,5,18,0,0,162,165,
3,6,3,0,163,164,5,2,0,0,164,166,3,20,10,0,165,163,1,0,0,0,165,166,1,0,0,
0,166,168,1,0,0,0,167,86,1,0,0,0,167,87,1,0,0,0,167,91,1,0,0,0,167,92,1,
0,0,0,167,93,1,0,0,0,167,94,1,0,0,0,167,96,1,0,0,0,167,100,1,0,0,0,167,106,
1,0,0,0,167,111,1,0,0,0,167,131,1,0,0,0,167,145,1,0,0,0,167,153,1,0,0,0,
167,157,1,0,0,0,167,161,1,0,0,0,168,5,1,0,0,0,169,170,5,56,0,0,170,176,3,
8,4,0,171,172,5,15,0,0,172,173,5,56,0,0,173,175,3,8,4,0,174,171,1,0,0,0,
175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,7,1,0,0,0,178,176,1,
0,0,0,179,180,5,19,0,0,180,181,5,56,0,0,181,183,5,20,0,0,182,179,1,0,0,0,
182,183,1,0,0,0,183,9,1,0,0,0,184,186,5,21,0,0,185,187,3,20,10,0,186,185,
1,0,0,0,186,187,1,0,0,0,187,189,1,0,0,0,188,190,5,1,0,0,189,188,1,0,0,0,
189,190,1,0,0,0,190,11,1,0,0,0,191,192,5,22,0,0,192,193,5,56,0,0,193,194,
5,22,0,0,194,13,1,0,0,0,195,200,5,56,0,0,196,197,5,23,0,0,197,199,5,56,0,
0,198,196,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,205,
1,0,0,0,202,200,1,0,0,0,203,204,5,24,0,0,204,206,5,56,0,0,205,203,1,0,0,
0,205,206,1,0,0,0,206,15,1,0,0,0,207,212,3,30,15,0,208,209,5,15,0,0,209,
211,3,30,15,0,210,208,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,212,213,1,
0,0,0,213,17,1,0,0,0,214,212,1,0,0,0,215,220,5,56,0,0,216,217,5,15,0,0,217,
219,5,56,0,0,218,216,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,
0,0,221,19,1,0,0,0,222,220,1,0,0,0,223,228,3,22,11,0,224,225,5,15,0,0,225,
227,3,22,11,0,226,224,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,229,1,
0,0,0,229,21,1,0,0,0,230,228,1,0,0,0,231,232,6,11,-1,0,232,245,5,25,0,0,
233,245,5,26,0,0,234,245,5,27,0,0,235,245,3,70,35,0,236,245,3,72,36,0,237,
245,5,28,0,0,238,245,3,38,19,0,239,245,3,24,12,0,240,245,3,44,22,0,241,242,
3,66,33,0,242,243,3,22,11,8,243,245,1,0,0,0,244,231,1,0,0,0,244,233,1,0,
0,0,244,234,1,0,0,0,244,235,1,0,0,0,244,236,1,0,0,0,244,237,1,0,0,0,244,
238,1,0,0,0,244,239,1,0,0,0,244,240,1,0,0,0,244,241,1,0,0,0,245,280,1,0,
0,0,246,247,10,9,0,0,247,248,3,68,34,0,248,249,3,22,11,9,249,279,1,0,0,0,
250,251,10,7,0,0,251,252,3,62,31,0,252,253,3,22,11,8,253,279,1,0,0,0,254,
255,10,6,0,0,255,256,3,60,30,0,256,257,3,22,11,7,257,279,1,0,0,0,258,259,
10,5,0,0,259,260,3,58,29,0,260,261,3,22,11,5,261,279,1,0,0,0,262,263,10,
4,0,0,263,264,3,56,28,0,264,265,3,22,11,5,265,279,1,0,0,0,266,267,10,3,0,
0,267,268,3,54,27,0,268,269,3,22,11,4,269,279,1,0,0,0,270,271,10,2,0,0,271,
272,3,52,26,0,272,273,3,22,11,3,273,279,1,0,0,0,274,275,10,1,0,0,275,276,
3,64,32,0,276,277,3,22,11,2,277,279,1,0,0,0,278,246,1,0,0,0,278,250,1,0,
0,0,278,254,1,0,0,0,278,258,1,0,0,0,278,262,1,0,0,0,278,266,1,0,0,0,278,
270,1,0,0,0,278,274,1,0,0,0,279,282,1,0,0,0,280,278,1,0,0,0,280,281,1,0,
0,0,281,23,1,0,0,0,282,280,1,0,0,0,283,287,3,28,14,0,284,286,3,34,17,0,285,
284,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,25,1,0,0,
0,289,287,1,0,0,0,290,292,3,28,14,0,291,293,3,34,17,0,292,291,1,0,0,0,293,
294,1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,27,1,0,0,0,296,302,3,30,
15,0,297,298,5,29,0,0,298,299,3,22,11,0,299,300,5,30,0,0,300,302,1,0,0,0,
301,296,1,0,0,0,301,297,1,0,0,0,302,29,1,0,0,0,303,310,5,56,0,0,304,305,
5,29,0,0,305,306,3,22,11,0,306,307,5,30,0,0,307,308,3,32,16,0,308,310,1,
0,0,0,309,303,1,0,0,0,309,304,1,0,0,0,310,314,1,0,0,0,311,313,3,32,16,0,
312,311,1,0,0,0,313,316,1,0,0,0,314,312,1,0,0,0,314,315,1,0,0,0,315,31,1,
0,0,0,316,314,1,0,0,0,317,319,3,34,17,0,318,317,1,0,0,0,319,322,1,0,0,0,
320,318,1,0,0,0,320,321,1,0,0,0,321,329,1,0,0,0,322,320,1,0,0,0,323,324,
5,31,0,0,324,325,3,22,11,0,325,326,5,32,0,0,326,330,1,0,0,0,327,328,5,23,
0,0,328,330,5,56,0,0,329,323,1,0,0,0,329,327,1,0,0,0,330,33,1,0,0,0,331,
332,5,24,0,0,332,334,5,56,0,0,333,331,1,0,0,0,333,334,1,0,0,0,334,335,1,
0,0,0,335,336,3,36,18,0,336,35,1,0,0,0,337,339,5,29,0,0,338,340,3,20,10,
0,339,338,1,0,0,0,339,340,1,0,0,0,340,341,1,0,0,0,341,345,5,30,0,0,342,345,
3,44,22,0,343,345,3,72,36,0,344,337,1,0,0,0,344,342,1,0,0,0,344,343,1,0,
0,0,345,37,1,0,0,0,346,347,5,17,0,0,347,348,3,40,20,0,348,39,1,0,0,0,349,
351,5,29,0,0,350,352,3,42,21,0,351,350,1,0,0,0,351,352,1,0,0,0,352,353,1,
0,0,0,353,354,5,30,0,0,354,355,3,2,1,0,355,356,5,6,0,0,356,41,1,0,0,0,357,
360,3,18,9,0,358,359,5,15,0,0,359,361,5,28,0,0,360,358,1,0,0,0,360,361,1,
0,0,0,361,364,1,0,0,0,362,364,5,28,0,0,363,357,1,0,0,0,363,362,1,0,0,0,364,
43,1,0,0,0,365,367,5,33,0,0,366,368,3,46,23,0,367,366,1,0,0,0,367,368,1,
0,0,0,368,369,1,0,0,0,369,370,5,34,0,0,370,45,1,0,0,0,371,377,3,48,24,0,
372,373,3,50,25,0,373,374,3,48,24,0,374,376,1,0,0,0,375,372,1,0,0,0,376,
379,1,0,0,0,377,375,1,0,0,0,377,378,1,0,0,0,378,381,1,0,0,0,379,377,1,0,
0,0,380,382,3,50,25,0,381,380,1,0,0,0,381,382,1,0,0,0,382,47,1,0,0,0,383,
384,5,31,0,0,384,385,3,22,11,0,385,386,5,32,0,0,386,387,5,2,0,0,387,388,
3,22,11,0,388,394,1,0,0,0,389,390,5,56,0,0,390,391,5,2,0,0,391,394,3,22,
11,0,392,394,3,22,11,0,393,383,1,0,0,0,393,389,1,0,0,0,393,392,1,0,0,0,394,
49,1,0,0,0,395,396,7,0,0,0,396,51,1,0,0,0,397,398,5,35,0,0,398,53,1,0,0,
0,399,400,5,36,0,0,400,55,1,0,0,0,401,402,7,1,0,0,402,57,1,0,0,0,403,404,
5,41,0,0,404,59,1,0,0,0,405,406,7,2,0,0,406,61,1,0,0,0,407,408,7,3,0,0,408,
63,1,0,0,0,409,410,7,4,0,0,410,65,1,0,0,0,411,412,7,5,0,0,412,67,1,0,0,0,
413,414,5,55,0,0,414,69,1,0,0,0,415,416,7,6,0,0,416,71,1,0,0,0,417,418,7,
7,0,0,418,73,1,0,0,0,36,80,84,122,127,139,165,167,176,182,186,189,200,205,
212,220,228,244,278,280,287,294,301,309,314,320,329,333,339,344,351,360,
363,367,377,381,393];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class LuaParser extends antlr4.Parser {

    static grammarFileName = "Lua.g4";
    static literalNames = [ null, "';'", "'='", "'break'", "'goto'", "'do'", 
                            "'end'", "'while'", "'repeat'", "'until'", "'if'", 
                            "'then'", "'elseif'", "'else'", "'for'", "','", 
                            "'in'", "'function'", "'local'", "'<'", "'>'", 
                            "'return'", "'::'", "'.'", "':'", "'nil'", "'false'", 
                            "'true'", "'...'", "'('", "')'", "'['", "']'", 
                            "'{'", "'}'", "'or'", "'and'", "'<='", "'>='", 
                            "'~='", "'=='", "'..'", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'//'", "'&'", "'|'", "'~'", "'<<'", 
                            "'>>'", "'not'", "'#'", "'^'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "NAME", "NORMALSTRING", "CHARSTRING", "LONGSTRING", 
                             "INT", "HEX", "FLOAT", "HEX_FLOAT", "COMMENT", 
                             "LINE_COMMENT", "WS", "SHEBANG" ];
    static ruleNames = [ "chunk", "block", "stat", "attnamelist", "attrib", 
                         "retstat", "label", "funcname", "varlist", "namelist", 
                         "explist", "exp", "prefixexp", "functioncall", 
                         "varOrExp", "var_", "varSuffix", "nameAndArgs", 
                         "args", "functiondef", "funcbody", "parlist", "tableconstructor", 
                         "fieldlist", "field", "fieldsep", "operatorOr", 
                         "operatorAnd", "operatorComparison", "operatorStrcat", 
                         "operatorAddSub", "operatorMulDivMod", "operatorBitwise", 
                         "operatorUnary", "operatorPower", "number", "string" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = LuaParser.ruleNames;
        this.literalNames = LuaParser.literalNames;
        this.symbolicNames = LuaParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 11:
    	    		return this.exp_sempred(localctx, predIndex);
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




	chunk() {
	    let localctx = new ChunkContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, LuaParser.RULE_chunk);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this.block();
	        this.state = 75;
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, LuaParser.RULE_block);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__0) | (1 << LuaParser.T__2) | (1 << LuaParser.T__3) | (1 << LuaParser.T__4) | (1 << LuaParser.T__6) | (1 << LuaParser.T__7) | (1 << LuaParser.T__9) | (1 << LuaParser.T__13) | (1 << LuaParser.T__16) | (1 << LuaParser.T__17) | (1 << LuaParser.T__21) | (1 << LuaParser.T__28))) !== 0) || _la===LuaParser.NAME) {
	            this.state = 77;
	            this.stat();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 84;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__20) {
	            this.state = 83;
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
	    this.enterRule(localctx, 4, LuaParser.RULE_stat);
	    var _la = 0; // Token type
	    try {
	        this.state = 167;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.match(LuaParser.T__0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.varlist();
	            this.state = 88;
	            this.match(LuaParser.T__1);
	            this.state = 89;
	            this.explist();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 91;
	            this.functioncall();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 92;
	            this.label();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 93;
	            this.match(LuaParser.T__2);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 94;
	            this.match(LuaParser.T__3);
	            this.state = 95;
	            this.match(LuaParser.NAME);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 96;
	            this.match(LuaParser.T__4);
	            this.state = 97;
	            this.block();
	            this.state = 98;
	            this.match(LuaParser.T__5);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 100;
	            this.match(LuaParser.T__6);
	            this.state = 101;
	            this.exp(0);
	            this.state = 102;
	            this.match(LuaParser.T__4);
	            this.state = 103;
	            this.block();
	            this.state = 104;
	            this.match(LuaParser.T__5);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 106;
	            this.match(LuaParser.T__7);
	            this.state = 107;
	            this.block();
	            this.state = 108;
	            this.match(LuaParser.T__8);
	            this.state = 109;
	            this.exp(0);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 111;
	            this.match(LuaParser.T__9);
	            this.state = 112;
	            this.exp(0);
	            this.state = 113;
	            this.match(LuaParser.T__10);
	            this.state = 114;
	            this.block();
	            this.state = 122;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===LuaParser.T__11) {
	                this.state = 115;
	                this.match(LuaParser.T__11);
	                this.state = 116;
	                this.exp(0);
	                this.state = 117;
	                this.match(LuaParser.T__10);
	                this.state = 118;
	                this.block();
	                this.state = 124;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__12) {
	                this.state = 125;
	                this.match(LuaParser.T__12);
	                this.state = 126;
	                this.block();
	            }

	            this.state = 129;
	            this.match(LuaParser.T__5);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 131;
	            this.match(LuaParser.T__13);
	            this.state = 132;
	            this.match(LuaParser.NAME);
	            this.state = 133;
	            this.match(LuaParser.T__1);
	            this.state = 134;
	            this.exp(0);
	            this.state = 135;
	            this.match(LuaParser.T__14);
	            this.state = 136;
	            this.exp(0);
	            this.state = 139;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__14) {
	                this.state = 137;
	                this.match(LuaParser.T__14);
	                this.state = 138;
	                this.exp(0);
	            }

	            this.state = 141;
	            this.match(LuaParser.T__4);
	            this.state = 142;
	            this.block();
	            this.state = 143;
	            this.match(LuaParser.T__5);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 145;
	            this.match(LuaParser.T__13);
	            this.state = 146;
	            this.namelist();
	            this.state = 147;
	            this.match(LuaParser.T__15);
	            this.state = 148;
	            this.explist();
	            this.state = 149;
	            this.match(LuaParser.T__4);
	            this.state = 150;
	            this.block();
	            this.state = 151;
	            this.match(LuaParser.T__5);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 153;
	            this.match(LuaParser.T__16);
	            this.state = 154;
	            this.funcname();
	            this.state = 155;
	            this.funcbody();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 157;
	            this.match(LuaParser.T__17);
	            this.state = 158;
	            this.match(LuaParser.T__16);
	            this.state = 159;
	            this.match(LuaParser.NAME);
	            this.state = 160;
	            this.funcbody();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 161;
	            this.match(LuaParser.T__17);
	            this.state = 162;
	            this.attnamelist();
	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__1) {
	                this.state = 163;
	                this.match(LuaParser.T__1);
	                this.state = 164;
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
	    this.enterRule(localctx, 6, LuaParser.RULE_attnamelist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 169;
	        this.match(LuaParser.NAME);
	        this.state = 170;
	        this.attrib();
	        this.state = 176;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__14) {
	            this.state = 171;
	            this.match(LuaParser.T__14);
	            this.state = 172;
	            this.match(LuaParser.NAME);
	            this.state = 173;
	            this.attrib();
	            this.state = 178;
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



	attrib() {
	    let localctx = new AttribContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, LuaParser.RULE_attrib);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__18) {
	            this.state = 179;
	            this.match(LuaParser.T__18);
	            this.state = 180;
	            this.match(LuaParser.NAME);
	            this.state = 181;
	            this.match(LuaParser.T__19);
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
	    this.enterRule(localctx, 10, LuaParser.RULE_retstat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(LuaParser.T__20);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
	            this.state = 185;
	            this.explist();
	        }

	        this.state = 189;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__0) {
	            this.state = 188;
	            this.match(LuaParser.T__0);
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
	    this.enterRule(localctx, 12, LuaParser.RULE_label);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(LuaParser.T__21);
	        this.state = 192;
	        this.match(LuaParser.NAME);
	        this.state = 193;
	        this.match(LuaParser.T__21);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 14, LuaParser.RULE_funcname);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 195;
	        this.match(LuaParser.NAME);
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__22) {
	            this.state = 196;
	            this.match(LuaParser.T__22);
	            this.state = 197;
	            this.match(LuaParser.NAME);
	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__23) {
	            this.state = 203;
	            this.match(LuaParser.T__23);
	            this.state = 204;
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
	    this.enterRule(localctx, 16, LuaParser.RULE_varlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 207;
	        this.var_();
	        this.state = 212;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__14) {
	            this.state = 208;
	            this.match(LuaParser.T__14);
	            this.state = 209;
	            this.var_();
	            this.state = 214;
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
	    this.enterRule(localctx, 18, LuaParser.RULE_namelist);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 215;
	        this.match(LuaParser.NAME);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 216;
	                this.match(LuaParser.T__14);
	                this.state = 217;
	                this.match(LuaParser.NAME); 
	            }
	            this.state = 222;
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
	    this.enterRule(localctx, 20, LuaParser.RULE_explist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this.exp(0);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__14) {
	            this.state = 224;
	            this.match(LuaParser.T__14);
	            this.state = 225;
	            this.exp(0);
	            this.state = 230;
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


	exp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, LuaParser.RULE_exp, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.T__24:
	            this.state = 232;
	            this.match(LuaParser.T__24);
	            break;
	        case LuaParser.T__25:
	            this.state = 233;
	            this.match(LuaParser.T__25);
	            break;
	        case LuaParser.T__26:
	            this.state = 234;
	            this.match(LuaParser.T__26);
	            break;
	        case LuaParser.INT:
	        case LuaParser.HEX:
	        case LuaParser.FLOAT:
	        case LuaParser.HEX_FLOAT:
	            this.state = 235;
	            this.number();
	            break;
	        case LuaParser.NORMALSTRING:
	        case LuaParser.CHARSTRING:
	        case LuaParser.LONGSTRING:
	            this.state = 236;
	            this.string();
	            break;
	        case LuaParser.T__27:
	            this.state = 237;
	            this.match(LuaParser.T__27);
	            break;
	        case LuaParser.T__16:
	            this.state = 238;
	            this.functiondef();
	            break;
	        case LuaParser.T__28:
	        case LuaParser.NAME:
	            this.state = 239;
	            this.prefixexp();
	            break;
	        case LuaParser.T__32:
	            this.state = 240;
	            this.tableconstructor();
	            break;
	        case LuaParser.T__42:
	        case LuaParser.T__49:
	        case LuaParser.T__52:
	        case LuaParser.T__53:
	            this.state = 241;
	            this.operatorUnary();
	            this.state = 242;
	            this.exp(8);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 280;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 278;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 246;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 247;
	                    this.operatorPower();
	                    this.state = 248;
	                    this.exp(9);
	                    break;

	                case 2:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 250;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 251;
	                    this.operatorMulDivMod();
	                    this.state = 252;
	                    this.exp(8);
	                    break;

	                case 3:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 254;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 255;
	                    this.operatorAddSub();
	                    this.state = 256;
	                    this.exp(7);
	                    break;

	                case 4:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 258;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 259;
	                    this.operatorStrcat();
	                    this.state = 260;
	                    this.exp(5);
	                    break;

	                case 5:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 262;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 263;
	                    this.operatorComparison();
	                    this.state = 264;
	                    this.exp(5);
	                    break;

	                case 6:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 266;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 267;
	                    this.operatorAnd();
	                    this.state = 268;
	                    this.exp(4);
	                    break;

	                case 7:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 270;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 271;
	                    this.operatorOr();
	                    this.state = 272;
	                    this.exp(3);
	                    break;

	                case 8:
	                    localctx = new ExpContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, LuaParser.RULE_exp);
	                    this.state = 274;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 275;
	                    this.operatorBitwise();
	                    this.state = 276;
	                    this.exp(2);
	                    break;

	                } 
	            }
	            this.state = 282;
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



	prefixexp() {
	    let localctx = new PrefixexpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, LuaParser.RULE_prefixexp);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.varOrExp();
	        this.state = 287;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 284;
	                this.nameAndArgs(); 
	            }
	            this.state = 289;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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
	    this.enterRule(localctx, 26, LuaParser.RULE_functioncall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.varOrExp();
	        this.state = 292; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 291;
	        		this.nameAndArgs();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 294; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,20, this._ctx);
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



	varOrExp() {
	    let localctx = new VarOrExpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, LuaParser.RULE_varOrExp);
	    try {
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 296;
	            this.var_();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.match(LuaParser.T__28);
	            this.state = 298;
	            this.exp(0);
	            this.state = 299;
	            this.match(LuaParser.T__29);
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



	var_() {
	    let localctx = new Var_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, LuaParser.RULE_var_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.NAME:
	            this.state = 303;
	            this.match(LuaParser.NAME);
	            break;
	        case LuaParser.T__28:
	            this.state = 304;
	            this.match(LuaParser.T__28);
	            this.state = 305;
	            this.exp(0);
	            this.state = 306;
	            this.match(LuaParser.T__29);
	            this.state = 307;
	            this.varSuffix();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 314;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 311;
	                this.varSuffix(); 
	            }
	            this.state = 316;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
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



	varSuffix() {
	    let localctx = new VarSuffixContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, LuaParser.RULE_varSuffix);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===LuaParser.T__23 || _la===LuaParser.T__28 || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)))) !== 0)) {
	            this.state = 317;
	            this.nameAndArgs();
	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 329;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.T__30:
	            this.state = 323;
	            this.match(LuaParser.T__30);
	            this.state = 324;
	            this.exp(0);
	            this.state = 325;
	            this.match(LuaParser.T__31);
	            break;
	        case LuaParser.T__22:
	            this.state = 327;
	            this.match(LuaParser.T__22);
	            this.state = 328;
	            this.match(LuaParser.NAME);
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



	nameAndArgs() {
	    let localctx = new NameAndArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, LuaParser.RULE_nameAndArgs);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 333;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__23) {
	            this.state = 331;
	            this.match(LuaParser.T__23);
	            this.state = 332;
	            this.match(LuaParser.NAME);
	        }

	        this.state = 335;
	        this.args();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 36, LuaParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.state = 344;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.T__28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 337;
	            this.match(LuaParser.T__28);
	            this.state = 339;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
	                this.state = 338;
	                this.explist();
	            }

	            this.state = 341;
	            this.match(LuaParser.T__29);
	            break;
	        case LuaParser.T__32:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 342;
	            this.tableconstructor();
	            break;
	        case LuaParser.NORMALSTRING:
	        case LuaParser.CHARSTRING:
	        case LuaParser.LONGSTRING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 343;
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
	    this.enterRule(localctx, 38, LuaParser.RULE_functiondef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        this.match(LuaParser.T__16);
	        this.state = 347;
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
	    this.enterRule(localctx, 40, LuaParser.RULE_funcbody);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(LuaParser.T__28);
	        this.state = 351;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__27 || _la===LuaParser.NAME) {
	            this.state = 350;
	            this.parlist();
	        }

	        this.state = 353;
	        this.match(LuaParser.T__29);
	        this.state = 354;
	        this.block();
	        this.state = 355;
	        this.match(LuaParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 42, LuaParser.RULE_parlist);
	    var _la = 0; // Token type
	    try {
	        this.state = 363;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case LuaParser.NAME:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 357;
	            this.namelist();
	            this.state = 360;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===LuaParser.T__14) {
	                this.state = 358;
	                this.match(LuaParser.T__14);
	                this.state = 359;
	                this.match(LuaParser.T__27);
	            }

	            break;
	        case LuaParser.T__27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 362;
	            this.match(LuaParser.T__27);
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
	    this.enterRule(localctx, 44, LuaParser.RULE_tableconstructor);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(LuaParser.T__32);
	        this.state = 367;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << LuaParser.T__16) | (1 << LuaParser.T__24) | (1 << LuaParser.T__25) | (1 << LuaParser.T__26) | (1 << LuaParser.T__27) | (1 << LuaParser.T__28) | (1 << LuaParser.T__30))) !== 0) || ((((_la - 33)) & ~0x1f) == 0 && ((1 << (_la - 33)) & ((1 << (LuaParser.T__32 - 33)) | (1 << (LuaParser.T__42 - 33)) | (1 << (LuaParser.T__49 - 33)) | (1 << (LuaParser.T__52 - 33)) | (1 << (LuaParser.T__53 - 33)) | (1 << (LuaParser.NAME - 33)) | (1 << (LuaParser.NORMALSTRING - 33)) | (1 << (LuaParser.CHARSTRING - 33)) | (1 << (LuaParser.LONGSTRING - 33)) | (1 << (LuaParser.INT - 33)) | (1 << (LuaParser.HEX - 33)) | (1 << (LuaParser.FLOAT - 33)) | (1 << (LuaParser.HEX_FLOAT - 33)))) !== 0)) {
	            this.state = 366;
	            this.fieldlist();
	        }

	        this.state = 369;
	        this.match(LuaParser.T__33);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 46, LuaParser.RULE_fieldlist);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.field();
	        this.state = 377;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 372;
	                this.fieldsep();
	                this.state = 373;
	                this.field(); 
	            }
	            this.state = 379;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	        }

	        this.state = 381;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===LuaParser.T__0 || _la===LuaParser.T__14) {
	            this.state = 380;
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
	    this.enterRule(localctx, 48, LuaParser.RULE_field);
	    try {
	        this.state = 393;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,35,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 383;
	            this.match(LuaParser.T__30);
	            this.state = 384;
	            this.exp(0);
	            this.state = 385;
	            this.match(LuaParser.T__31);
	            this.state = 386;
	            this.match(LuaParser.T__1);
	            this.state = 387;
	            this.exp(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 389;
	            this.match(LuaParser.NAME);
	            this.state = 390;
	            this.match(LuaParser.T__1);
	            this.state = 391;
	            this.exp(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 392;
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
	    this.enterRule(localctx, 50, LuaParser.RULE_fieldsep);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 395;
	        _la = this._input.LA(1);
	        if(!(_la===LuaParser.T__0 || _la===LuaParser.T__14)) {
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



	operatorOr() {
	    let localctx = new OperatorOrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, LuaParser.RULE_operatorOr);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 397;
	        this.match(LuaParser.T__34);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorAnd() {
	    let localctx = new OperatorAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, LuaParser.RULE_operatorAnd);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(LuaParser.T__35);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorComparison() {
	    let localctx = new OperatorComparisonContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, LuaParser.RULE_operatorComparison);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        _la = this._input.LA(1);
	        if(!(((((_la - 19)) & ~0x1f) == 0 && ((1 << (_la - 19)) & ((1 << (LuaParser.T__18 - 19)) | (1 << (LuaParser.T__19 - 19)) | (1 << (LuaParser.T__36 - 19)) | (1 << (LuaParser.T__37 - 19)) | (1 << (LuaParser.T__38 - 19)) | (1 << (LuaParser.T__39 - 19)))) !== 0))) {
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



	operatorStrcat() {
	    let localctx = new OperatorStrcatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, LuaParser.RULE_operatorStrcat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(LuaParser.T__40);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorAddSub() {
	    let localctx = new OperatorAddSubContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, LuaParser.RULE_operatorAddSub);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        _la = this._input.LA(1);
	        if(!(_la===LuaParser.T__41 || _la===LuaParser.T__42)) {
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



	operatorMulDivMod() {
	    let localctx = new OperatorMulDivModContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, LuaParser.RULE_operatorMulDivMod);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        _la = this._input.LA(1);
	        if(!(((((_la - 44)) & ~0x1f) == 0 && ((1 << (_la - 44)) & ((1 << (LuaParser.T__43 - 44)) | (1 << (LuaParser.T__44 - 44)) | (1 << (LuaParser.T__45 - 44)) | (1 << (LuaParser.T__46 - 44)))) !== 0))) {
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



	operatorBitwise() {
	    let localctx = new OperatorBitwiseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, LuaParser.RULE_operatorBitwise);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        _la = this._input.LA(1);
	        if(!(((((_la - 48)) & ~0x1f) == 0 && ((1 << (_la - 48)) & ((1 << (LuaParser.T__47 - 48)) | (1 << (LuaParser.T__48 - 48)) | (1 << (LuaParser.T__49 - 48)) | (1 << (LuaParser.T__50 - 48)) | (1 << (LuaParser.T__51 - 48)))) !== 0))) {
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



	operatorUnary() {
	    let localctx = new OperatorUnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, LuaParser.RULE_operatorUnary);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        _la = this._input.LA(1);
	        if(!(((((_la - 43)) & ~0x1f) == 0 && ((1 << (_la - 43)) & ((1 << (LuaParser.T__42 - 43)) | (1 << (LuaParser.T__49 - 43)) | (1 << (LuaParser.T__52 - 43)) | (1 << (LuaParser.T__53 - 43)))) !== 0))) {
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



	operatorPower() {
	    let localctx = new OperatorPowerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, LuaParser.RULE_operatorPower);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(LuaParser.T__54);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 70, LuaParser.RULE_number);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        _la = this._input.LA(1);
	        if(!(((((_la - 60)) & ~0x1f) == 0 && ((1 << (_la - 60)) & ((1 << (LuaParser.INT - 60)) | (1 << (LuaParser.HEX - 60)) | (1 << (LuaParser.FLOAT - 60)) | (1 << (LuaParser.HEX_FLOAT - 60)))) !== 0))) {
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
	    this.enterRule(localctx, 72, LuaParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        _la = this._input.LA(1);
	        if(!(((((_la - 57)) & ~0x1f) == 0 && ((1 << (_la - 57)) & ((1 << (LuaParser.NORMALSTRING - 57)) | (1 << (LuaParser.CHARSTRING - 57)) | (1 << (LuaParser.LONGSTRING - 57)))) !== 0))) {
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
LuaParser.T__0 = 1;
LuaParser.T__1 = 2;
LuaParser.T__2 = 3;
LuaParser.T__3 = 4;
LuaParser.T__4 = 5;
LuaParser.T__5 = 6;
LuaParser.T__6 = 7;
LuaParser.T__7 = 8;
LuaParser.T__8 = 9;
LuaParser.T__9 = 10;
LuaParser.T__10 = 11;
LuaParser.T__11 = 12;
LuaParser.T__12 = 13;
LuaParser.T__13 = 14;
LuaParser.T__14 = 15;
LuaParser.T__15 = 16;
LuaParser.T__16 = 17;
LuaParser.T__17 = 18;
LuaParser.T__18 = 19;
LuaParser.T__19 = 20;
LuaParser.T__20 = 21;
LuaParser.T__21 = 22;
LuaParser.T__22 = 23;
LuaParser.T__23 = 24;
LuaParser.T__24 = 25;
LuaParser.T__25 = 26;
LuaParser.T__26 = 27;
LuaParser.T__27 = 28;
LuaParser.T__28 = 29;
LuaParser.T__29 = 30;
LuaParser.T__30 = 31;
LuaParser.T__31 = 32;
LuaParser.T__32 = 33;
LuaParser.T__33 = 34;
LuaParser.T__34 = 35;
LuaParser.T__35 = 36;
LuaParser.T__36 = 37;
LuaParser.T__37 = 38;
LuaParser.T__38 = 39;
LuaParser.T__39 = 40;
LuaParser.T__40 = 41;
LuaParser.T__41 = 42;
LuaParser.T__42 = 43;
LuaParser.T__43 = 44;
LuaParser.T__44 = 45;
LuaParser.T__45 = 46;
LuaParser.T__46 = 47;
LuaParser.T__47 = 48;
LuaParser.T__48 = 49;
LuaParser.T__49 = 50;
LuaParser.T__50 = 51;
LuaParser.T__51 = 52;
LuaParser.T__52 = 53;
LuaParser.T__53 = 54;
LuaParser.T__54 = 55;
LuaParser.NAME = 56;
LuaParser.NORMALSTRING = 57;
LuaParser.CHARSTRING = 58;
LuaParser.LONGSTRING = 59;
LuaParser.INT = 60;
LuaParser.HEX = 61;
LuaParser.FLOAT = 62;
LuaParser.HEX_FLOAT = 63;
LuaParser.COMMENT = 64;
LuaParser.LINE_COMMENT = 65;
LuaParser.WS = 66;
LuaParser.SHEBANG = 67;

LuaParser.RULE_chunk = 0;
LuaParser.RULE_block = 1;
LuaParser.RULE_stat = 2;
LuaParser.RULE_attnamelist = 3;
LuaParser.RULE_attrib = 4;
LuaParser.RULE_retstat = 5;
LuaParser.RULE_label = 6;
LuaParser.RULE_funcname = 7;
LuaParser.RULE_varlist = 8;
LuaParser.RULE_namelist = 9;
LuaParser.RULE_explist = 10;
LuaParser.RULE_exp = 11;
LuaParser.RULE_prefixexp = 12;
LuaParser.RULE_functioncall = 13;
LuaParser.RULE_varOrExp = 14;
LuaParser.RULE_var_ = 15;
LuaParser.RULE_varSuffix = 16;
LuaParser.RULE_nameAndArgs = 17;
LuaParser.RULE_args = 18;
LuaParser.RULE_functiondef = 19;
LuaParser.RULE_funcbody = 20;
LuaParser.RULE_parlist = 21;
LuaParser.RULE_tableconstructor = 22;
LuaParser.RULE_fieldlist = 23;
LuaParser.RULE_field = 24;
LuaParser.RULE_fieldsep = 25;
LuaParser.RULE_operatorOr = 26;
LuaParser.RULE_operatorAnd = 27;
LuaParser.RULE_operatorComparison = 28;
LuaParser.RULE_operatorStrcat = 29;
LuaParser.RULE_operatorAddSub = 30;
LuaParser.RULE_operatorMulDivMod = 31;
LuaParser.RULE_operatorBitwise = 32;
LuaParser.RULE_operatorUnary = 33;
LuaParser.RULE_operatorPower = 34;
LuaParser.RULE_number = 35;
LuaParser.RULE_string = 36;

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

	EOF() {
	    return this.getToken(LuaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterChunk(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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
	    if(listener instanceof LuaListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	varlist() {
	    return this.getTypedRuleContext(VarlistContext,0);
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

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
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

	namelist() {
	    return this.getTypedRuleContext(NamelistContext,0);
	};

	funcname() {
	    return this.getTypedRuleContext(FuncnameContext,0);
	};

	funcbody() {
	    return this.getTypedRuleContext(FuncbodyContext,0);
	};

	attnamelist() {
	    return this.getTypedRuleContext(AttnamelistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterAttnamelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterAttrib(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	explist() {
	    return this.getTypedRuleContext(ExplistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterRetstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterLabel(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFuncname(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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
	        return this.getTypedRuleContexts(Var_Context);
	    } else {
	        return this.getTypedRuleContext(Var_Context,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVarlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterNamelist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterExplist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
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

	operatorUnary() {
	    return this.getTypedRuleContext(OperatorUnaryContext,0);
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

	operatorPower() {
	    return this.getTypedRuleContext(OperatorPowerContext,0);
	};

	operatorMulDivMod() {
	    return this.getTypedRuleContext(OperatorMulDivModContext,0);
	};

	operatorAddSub() {
	    return this.getTypedRuleContext(OperatorAddSubContext,0);
	};

	operatorStrcat() {
	    return this.getTypedRuleContext(OperatorStrcatContext,0);
	};

	operatorComparison() {
	    return this.getTypedRuleContext(OperatorComparisonContext,0);
	};

	operatorAnd() {
	    return this.getTypedRuleContext(OperatorAndContext,0);
	};

	operatorOr() {
	    return this.getTypedRuleContext(OperatorOrContext,0);
	};

	operatorBitwise() {
	    return this.getTypedRuleContext(OperatorBitwiseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitExp(this);
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

	varOrExp() {
	    return this.getTypedRuleContext(VarOrExpContext,0);
	};

	nameAndArgs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameAndArgsContext);
	    } else {
	        return this.getTypedRuleContext(NameAndArgsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterPrefixexp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	varOrExp() {
	    return this.getTypedRuleContext(VarOrExpContext,0);
	};

	nameAndArgs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameAndArgsContext);
	    } else {
	        return this.getTypedRuleContext(NameAndArgsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFunctioncall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFunctioncall(this);
		}
	}


}



class VarOrExpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_varOrExp;
    }

	var_() {
	    return this.getTypedRuleContext(Var_Context,0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVarOrExp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitVarOrExp(this);
		}
	}


}



class Var_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_var_;
    }

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	varSuffix = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(VarSuffixContext);
	    } else {
	        return this.getTypedRuleContext(VarSuffixContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVar_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitVar_(this);
		}
	}


}



class VarSuffixContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_varSuffix;
    }

	exp() {
	    return this.getTypedRuleContext(ExpContext,0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	nameAndArgs = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NameAndArgsContext);
	    } else {
	        return this.getTypedRuleContext(NameAndArgsContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterVarSuffix(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitVarSuffix(this);
		}
	}


}



class NameAndArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_nameAndArgs;
    }

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterNameAndArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitNameAndArgs(this);
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
	    if(listener instanceof LuaListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	funcbody() {
	    return this.getTypedRuleContext(FuncbodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFunctiondef(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	parlist() {
	    return this.getTypedRuleContext(ParlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFuncbody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterParlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	fieldlist() {
	    return this.getTypedRuleContext(FieldlistContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterTableconstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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
	    if(listener instanceof LuaListener ) {
	        listener.enterFieldlist(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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

	NAME() {
	    return this.getToken(LuaParser.NAME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterFieldsep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitFieldsep(this);
		}
	}


}



class OperatorOrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorOr;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorOr(this);
		}
	}


}



class OperatorAndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorAnd;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorAnd(this);
		}
	}


}



class OperatorComparisonContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorComparison;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorComparison(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorComparison(this);
		}
	}


}



class OperatorStrcatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorStrcat;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorStrcat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorStrcat(this);
		}
	}


}



class OperatorAddSubContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorAddSub;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorAddSub(this);
		}
	}


}



class OperatorMulDivModContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorMulDivMod;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorMulDivMod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorMulDivMod(this);
		}
	}


}



class OperatorBitwiseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorBitwise;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorBitwise(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorBitwise(this);
		}
	}


}



class OperatorUnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorUnary;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorUnary(this);
		}
	}


}



class OperatorPowerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = LuaParser.RULE_operatorPower;
    }


	enterRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.enterOperatorPower(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitOperatorPower(this);
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
	    if(listener instanceof LuaListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
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
	    if(listener instanceof LuaListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof LuaListener ) {
	        listener.exitString(this);
		}
	}


}




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
LuaParser.PrefixexpContext = PrefixexpContext; 
LuaParser.FunctioncallContext = FunctioncallContext; 
LuaParser.VarOrExpContext = VarOrExpContext; 
LuaParser.Var_Context = Var_Context; 
LuaParser.VarSuffixContext = VarSuffixContext; 
LuaParser.NameAndArgsContext = NameAndArgsContext; 
LuaParser.ArgsContext = ArgsContext; 
LuaParser.FunctiondefContext = FunctiondefContext; 
LuaParser.FuncbodyContext = FuncbodyContext; 
LuaParser.ParlistContext = ParlistContext; 
LuaParser.TableconstructorContext = TableconstructorContext; 
LuaParser.FieldlistContext = FieldlistContext; 
LuaParser.FieldContext = FieldContext; 
LuaParser.FieldsepContext = FieldsepContext; 
LuaParser.OperatorOrContext = OperatorOrContext; 
LuaParser.OperatorAndContext = OperatorAndContext; 
LuaParser.OperatorComparisonContext = OperatorComparisonContext; 
LuaParser.OperatorStrcatContext = OperatorStrcatContext; 
LuaParser.OperatorAddSubContext = OperatorAddSubContext; 
LuaParser.OperatorMulDivModContext = OperatorMulDivModContext; 
LuaParser.OperatorBitwiseContext = OperatorBitwiseContext; 
LuaParser.OperatorUnaryContext = OperatorUnaryContext; 
LuaParser.OperatorPowerContext = OperatorPowerContext; 
LuaParser.NumberContext = NumberContext; 
LuaParser.StringContext = StringContext; 
