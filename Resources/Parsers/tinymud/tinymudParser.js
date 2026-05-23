// Generated from C:/Users/megam/jupyter_ops/Resources/Parsers/tinymud/tinymud.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import tinymudListener from './tinymudListener.js';
const serializedATN = [4,1,61,419,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,
49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,
7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,60,2,61,7,61,2,62,7,62,1,0,4,0,
128,8,0,11,0,12,0,129,1,0,5,0,133,8,0,10,0,12,0,136,9,0,1,0,1,0,1,1,1,1,
3,1,142,8,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,173,8,2,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,3,5,187,8,5,1,6,1,6,1,6,1,6,
3,6,193,8,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,1,9,1,9,3,9,204,8,9,1,10,1,10,3,
10,208,8,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,3,12,
221,8,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,3,14,233,8,14,
1,15,1,15,1,15,1,15,3,15,239,8,15,1,16,1,16,1,16,1,16,3,16,245,8,16,1,17,
1,17,1,17,1,17,5,17,251,8,17,10,17,12,17,254,9,17,1,17,1,17,3,17,258,8,17,
1,18,1,18,1,18,1,18,3,18,264,8,18,1,19,1,19,1,19,1,19,1,19,1,20,1,20,1,20,
1,21,1,21,1,21,1,21,3,21,278,8,21,1,21,1,21,1,22,1,22,1,23,1,23,1,23,1,24,
1,24,1,24,1,24,3,24,291,8,24,1,25,1,25,1,25,1,25,3,25,297,8,25,1,25,1,25,
1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,3,30,331,8,30,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,
1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,38,1,38,1,39,1,
39,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,42,1,42,1,42,1,42,1,42,1,43,
1,43,1,44,1,44,1,44,1,45,1,45,1,45,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,
48,1,48,3,48,389,8,48,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,
1,54,1,54,1,55,1,55,1,56,1,56,1,57,1,57,1,58,1,58,1,59,1,59,1,60,1,60,1,
61,1,61,1,62,1,62,1,62,0,0,63,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,
32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,
80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,
122,124,0,8,1,0,5,6,1,0,19,20,1,0,27,28,1,0,34,35,1,0,37,38,1,0,40,42,1,
0,45,46,1,0,48,49,417,0,127,1,0,0,0,2,141,1,0,0,0,4,172,1,0,0,0,6,174,1,
0,0,0,8,177,1,0,0,0,10,182,1,0,0,0,12,188,1,0,0,0,14,194,1,0,0,0,16,197,
1,0,0,0,18,199,1,0,0,0,20,205,1,0,0,0,22,209,1,0,0,0,24,214,1,0,0,0,26,222,
1,0,0,0,28,227,1,0,0,0,30,234,1,0,0,0,32,240,1,0,0,0,34,246,1,0,0,0,36,259,
1,0,0,0,38,265,1,0,0,0,40,270,1,0,0,0,42,273,1,0,0,0,44,281,1,0,0,0,46,283,
1,0,0,0,48,286,1,0,0,0,50,292,1,0,0,0,52,300,1,0,0,0,54,303,1,0,0,0,56,306,
1,0,0,0,58,309,1,0,0,0,60,330,1,0,0,0,62,332,1,0,0,0,64,335,1,0,0,0,66,338,
1,0,0,0,68,341,1,0,0,0,70,346,1,0,0,0,72,349,1,0,0,0,74,352,1,0,0,0,76,354,
1,0,0,0,78,356,1,0,0,0,80,361,1,0,0,0,82,364,1,0,0,0,84,366,1,0,0,0,86,371,
1,0,0,0,88,373,1,0,0,0,90,376,1,0,0,0,92,379,1,0,0,0,94,381,1,0,0,0,96,386,
1,0,0,0,98,390,1,0,0,0,100,392,1,0,0,0,102,394,1,0,0,0,104,396,1,0,0,0,106,
398,1,0,0,0,108,400,1,0,0,0,110,402,1,0,0,0,112,404,1,0,0,0,114,406,1,0,
0,0,116,408,1,0,0,0,118,410,1,0,0,0,120,412,1,0,0,0,122,414,1,0,0,0,124,
416,1,0,0,0,126,128,3,2,1,0,127,126,1,0,0,0,128,129,1,0,0,0,129,127,1,0,
0,0,129,130,1,0,0,0,130,134,1,0,0,0,131,133,5,60,0,0,132,131,1,0,0,0,133,
136,1,0,0,0,134,132,1,0,0,0,134,135,1,0,0,0,135,137,1,0,0,0,136,134,1,0,
0,0,137,138,5,0,0,1,138,1,1,0,0,0,139,142,3,4,2,0,140,142,3,60,30,0,141,
139,1,0,0,0,141,140,1,0,0,0,142,143,1,0,0,0,143,144,5,60,0,0,144,3,1,0,0,
0,145,173,3,6,3,0,146,173,3,8,4,0,147,173,3,10,5,0,148,173,3,12,6,0,149,
173,3,14,7,0,150,173,3,16,8,0,151,173,3,18,9,0,152,173,3,20,10,0,153,173,
3,22,11,0,154,173,3,24,12,0,155,173,3,26,13,0,156,173,3,28,14,0,157,173,
3,30,15,0,158,173,3,32,16,0,159,173,3,34,17,0,160,173,3,36,18,0,161,173,
3,38,19,0,162,173,3,40,20,0,163,173,3,42,21,0,164,173,3,44,22,0,165,173,
3,46,23,0,166,173,3,48,24,0,167,173,3,50,25,0,168,173,3,52,26,0,169,173,
3,54,27,0,170,173,3,56,28,0,171,173,3,58,29,0,172,145,1,0,0,0,172,146,1,
0,0,0,172,147,1,0,0,0,172,148,1,0,0,0,172,149,1,0,0,0,172,150,1,0,0,0,172,
151,1,0,0,0,172,152,1,0,0,0,172,153,1,0,0,0,172,154,1,0,0,0,172,155,1,0,
0,0,172,156,1,0,0,0,172,157,1,0,0,0,172,158,1,0,0,0,172,159,1,0,0,0,172,
160,1,0,0,0,172,161,1,0,0,0,172,162,1,0,0,0,172,163,1,0,0,0,172,164,1,0,
0,0,172,165,1,0,0,0,172,166,1,0,0,0,172,167,1,0,0,0,172,168,1,0,0,0,172,
169,1,0,0,0,172,170,1,0,0,0,172,171,1,0,0,0,173,5,1,0,0,0,174,175,5,1,0,
0,175,176,3,100,50,0,176,7,1,0,0,0,177,178,5,2,0,0,178,179,3,98,49,0,179,
180,5,3,0,0,180,181,3,100,50,0,181,9,1,0,0,0,182,183,5,4,0,0,183,186,3,102,
51,0,184,185,5,3,0,0,185,187,3,106,53,0,186,184,1,0,0,0,186,187,1,0,0,0,
187,11,1,0,0,0,188,189,7,0,0,0,189,192,3,98,49,0,190,191,5,3,0,0,191,193,
3,104,52,0,192,190,1,0,0,0,192,193,1,0,0,0,193,13,1,0,0,0,194,195,5,7,0,
0,195,196,3,102,51,0,196,15,1,0,0,0,197,198,5,8,0,0,198,17,1,0,0,0,199,200,
5,9,0,0,200,203,3,102,51,0,201,202,5,3,0,0,202,204,3,104,52,0,203,201,1,
0,0,0,203,204,1,0,0,0,204,19,1,0,0,0,205,207,5,10,0,0,206,208,3,102,51,0,
207,206,1,0,0,0,207,208,1,0,0,0,208,21,1,0,0,0,209,210,5,11,0,0,210,211,
3,100,50,0,211,212,5,3,0,0,212,213,3,4,2,0,213,23,1,0,0,0,214,215,5,12,0,
0,215,216,3,98,49,0,216,220,5,3,0,0,217,221,3,116,58,0,218,221,3,114,57,
0,219,221,3,118,59,0,220,217,1,0,0,0,220,218,1,0,0,0,220,219,1,0,0,0,221,
25,1,0,0,0,222,223,5,13,0,0,223,224,3,98,49,0,224,225,5,3,0,0,225,226,3,
108,54,0,226,27,1,0,0,0,227,228,5,14,0,0,228,229,3,98,49,0,229,230,5,3,0,
0,230,232,3,102,51,0,231,233,3,110,55,0,232,231,1,0,0,0,232,233,1,0,0,0,
233,29,1,0,0,0,234,235,5,15,0,0,235,238,3,100,50,0,236,237,5,3,0,0,237,239,
3,110,55,0,238,236,1,0,0,0,238,239,1,0,0,0,239,31,1,0,0,0,240,241,5,16,0,
0,241,244,3,98,49,0,242,243,5,3,0,0,243,245,3,112,56,0,244,242,1,0,0,0,244,
245,1,0,0,0,245,33,1,0,0,0,246,247,5,17,0,0,247,252,3,114,57,0,248,249,5,
18,0,0,249,251,3,114,57,0,250,248,1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,
0,252,253,1,0,0,0,253,257,1,0,0,0,254,252,1,0,0,0,255,256,5,3,0,0,256,258,
3,116,58,0,257,255,1,0,0,0,257,258,1,0,0,0,258,35,1,0,0,0,259,260,7,1,0,
0,260,263,3,98,49,0,261,262,5,3,0,0,262,264,3,112,56,0,263,261,1,0,0,0,263,
264,1,0,0,0,264,37,1,0,0,0,265,266,5,21,0,0,266,267,3,110,55,0,267,268,5,
3,0,0,268,269,3,110,55,0,269,39,1,0,0,0,270,271,5,22,0,0,271,272,3,102,51,
0,272,41,1,0,0,0,273,274,5,23,0,0,274,275,3,98,49,0,275,277,5,3,0,0,276,
278,5,24,0,0,277,276,1,0,0,0,277,278,1,0,0,0,278,279,1,0,0,0,279,280,3,120,
60,0,280,43,1,0,0,0,281,282,5,25,0,0,282,45,1,0,0,0,283,284,5,26,0,0,284,
285,3,100,50,0,285,47,1,0,0,0,286,287,7,2,0,0,287,290,3,98,49,0,288,289,
5,3,0,0,289,291,3,112,56,0,290,288,1,0,0,0,290,291,1,0,0,0,291,49,1,0,0,
0,292,296,5,29,0,0,293,294,3,98,49,0,294,295,5,3,0,0,295,297,1,0,0,0,296,
293,1,0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,299,3,118,59,0,299,51,1,
0,0,0,300,301,5,30,0,0,301,302,3,100,50,0,302,53,1,0,0,0,303,304,5,31,0,
0,304,305,3,114,57,0,305,55,1,0,0,0,306,307,5,32,0,0,307,308,3,98,49,0,308,
57,1,0,0,0,309,310,5,33,0,0,310,311,3,112,56,0,311,59,1,0,0,0,312,331,3,
62,31,0,313,331,3,64,32,0,314,331,3,66,33,0,315,331,3,68,34,0,316,331,3,
70,35,0,317,331,3,72,36,0,318,331,3,74,37,0,319,331,3,76,38,0,320,331,3,
78,39,0,321,331,3,80,40,0,322,331,3,82,41,0,323,331,3,84,42,0,324,331,3,
86,43,0,325,331,3,88,44,0,326,331,3,90,45,0,327,331,3,92,46,0,328,331,3,
94,47,0,329,331,3,96,48,0,330,312,1,0,0,0,330,313,1,0,0,0,330,314,1,0,0,
0,330,315,1,0,0,0,330,316,1,0,0,0,330,317,1,0,0,0,330,318,1,0,0,0,330,319,
1,0,0,0,330,320,1,0,0,0,330,321,1,0,0,0,330,322,1,0,0,0,330,323,1,0,0,0,
330,324,1,0,0,0,330,325,1,0,0,0,330,326,1,0,0,0,330,327,1,0,0,0,330,328,
1,0,0,0,330,329,1,0,0,0,331,61,1,0,0,0,332,333,7,3,0,0,333,334,3,98,49,0,
334,63,1,0,0,0,335,336,5,36,0,0,336,337,3,98,49,0,337,65,1,0,0,0,338,339,
7,4,0,0,339,340,3,98,49,0,340,67,1,0,0,0,341,342,5,39,0,0,342,343,3,100,
50,0,343,344,5,3,0,0,344,345,3,122,61,0,345,69,1,0,0,0,346,347,7,5,0,0,347,
348,3,124,62,0,348,71,1,0,0,0,349,350,5,43,0,0,350,351,3,112,56,0,351,73,
1,0,0,0,352,353,5,44,0,0,353,75,1,0,0,0,354,355,7,6,0,0,355,77,1,0,0,0,356,
357,5,47,0,0,357,358,3,100,50,0,358,359,5,3,0,0,359,360,3,106,53,0,360,79,
1,0,0,0,361,362,7,7,0,0,362,363,3,98,49,0,363,81,1,0,0,0,364,365,5,50,0,
0,365,83,1,0,0,0,366,367,5,51,0,0,367,368,3,100,50,0,368,369,5,3,0,0,369,
370,3,112,56,0,370,85,1,0,0,0,371,372,5,52,0,0,372,87,1,0,0,0,373,374,5,
53,0,0,374,375,3,100,50,0,375,89,1,0,0,0,376,377,5,54,0,0,377,378,3,112,
56,0,378,91,1,0,0,0,379,380,5,55,0,0,380,93,1,0,0,0,381,382,5,56,0,0,382,
383,3,100,50,0,383,384,5,3,0,0,384,385,3,112,56,0,385,95,1,0,0,0,386,388,
5,57,0,0,387,389,3,100,50,0,388,387,1,0,0,0,388,389,1,0,0,0,389,97,1,0,0,
0,390,391,5,58,0,0,391,99,1,0,0,0,392,393,5,58,0,0,393,101,1,0,0,0,394,395,
5,58,0,0,395,103,1,0,0,0,396,397,5,58,0,0,397,105,1,0,0,0,398,399,5,59,0,
0,399,107,1,0,0,0,400,401,5,58,0,0,401,109,1,0,0,0,402,403,5,58,0,0,403,
111,1,0,0,0,404,405,5,58,0,0,405,113,1,0,0,0,406,407,5,58,0,0,407,115,1,
0,0,0,408,409,5,59,0,0,409,117,1,0,0,0,410,411,5,58,0,0,411,119,1,0,0,0,
412,413,5,59,0,0,413,121,1,0,0,0,414,415,5,59,0,0,415,123,1,0,0,0,416,417,
5,58,0,0,417,125,1,0,0,0,20,129,134,141,172,186,192,203,207,220,232,238,
244,252,257,263,277,290,296,330,388];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class tinymudParser extends antlr4.Parser {

    static grammarFileName = "tinymud.g4";
    static literalNames = [ null, "'@boot'", "'@chown'", "'='", "'@create'", 
                            "'@describe'", "'@desc'", "'@dig'", "'@dump'", 
                            "'@fail'", "'@find'", "'@force'", "'@link'", 
                            "'@lock'", "'@name'", "'@newpassword'", "'@ofail'", 
                            "'@open'", "';'", "'@osuccess'", "'@osucc'", 
                            "'@password'", "'@pcreate'", "'@set'", "'!'", 
                            "'@shutdown'", "'@stats'", "'@success'", "'@succ'", 
                            "'@teleport'", "'@toad'", "'@unlink'", "'@unlock'", 
                            "'@wall'", "'drop'", "'throw'", "'examine'", 
                            "'get'", "'take'", "'give'", "'go'", "'goto'", 
                            "'move'", "'gripe'", "'help'", "'inventory'", 
                            "'inv'", "'kill'", "'look'", "'read'", "'news'", 
                            "'page'", "'quit'", "'rob'", "'say'", "'score'", 
                            "'whisper'", "'who'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, "STRING", "NUMBER", "EOL", "WS" ];
    static ruleNames = [ "prog", "line", "command", "bootcommand", "chowncommand", 
                         "createcommand", "describecommand", "digcommand", 
                         "dumpcommand", "failcommand", "findcommand", "forcecommand", 
                         "linkcommand", "lockcommand", "namecommand", "newpassswordcommand", 
                         "ofailcommand", "opencommand", "osuccesscommand", 
                         "passwordcommand", "pcreatecommand", "setcommand", 
                         "shutdowncommand", "statscommand", "successcommand", 
                         "teleportcommand", "toadcommand", "unlinkcommand", 
                         "unlockcommand", "wallcommand", "action", "dropaction", 
                         "examineaction", "getaction", "giveaction", "gotoaction", 
                         "gripeaction", "helpaction", "inventoryaction", 
                         "killaction", "lookaction", "newsaction", "pageaction", 
                         "quitaction", "robaction", "sayaction", "scoreaction", 
                         "whisperaction", "whoaction", "object_", "player", 
                         "name", "description", "cost", "key", "password", 
                         "message", "dir_", "number", "room", "flag", "pennies", 
                         "direction" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = tinymudParser.ruleNames;
        this.literalNames = tinymudParser.literalNames;
        this.symbolicNames = tinymudParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, tinymudParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 126;
	            this.line();
	            this.state = 129; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4277927926) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 67108863) !== 0));
	        this.state = 134;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 131;
	            this.match(tinymudParser.EOL);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 137;
	        this.match(tinymudParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, tinymudParser.RULE_line);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 141;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
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
	        case 19:
	        case 20:
	        case 21:
	        case 22:
	        case 23:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	            this.state = 139;
	            this.command();
	            break;
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
	            this.state = 140;
	            this.action();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 143;
	        this.match(tinymudParser.EOL);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	command() {
	    let localctx = new CommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, tinymudParser.RULE_command);
	    try {
	        this.state = 172;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.bootcommand();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 146;
	            this.chowncommand();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 147;
	            this.createcommand();
	            break;
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 148;
	            this.describecommand();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 149;
	            this.digcommand();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 150;
	            this.dumpcommand();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 151;
	            this.failcommand();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 152;
	            this.findcommand();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 153;
	            this.forcecommand();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 154;
	            this.linkcommand();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 155;
	            this.lockcommand();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 156;
	            this.namecommand();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 157;
	            this.newpassswordcommand();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 158;
	            this.ofailcommand();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 159;
	            this.opencommand();
	            break;
	        case 19:
	        case 20:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 160;
	            this.osuccesscommand();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 161;
	            this.passwordcommand();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 162;
	            this.pcreatecommand();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 163;
	            this.setcommand();
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 164;
	            this.shutdowncommand();
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 21);
	            this.state = 165;
	            this.statscommand();
	            break;
	        case 27:
	        case 28:
	            this.enterOuterAlt(localctx, 22);
	            this.state = 166;
	            this.successcommand();
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 23);
	            this.state = 167;
	            this.teleportcommand();
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 24);
	            this.state = 168;
	            this.toadcommand();
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 25);
	            this.state = 169;
	            this.unlinkcommand();
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 26);
	            this.state = 170;
	            this.unlockcommand();
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 27);
	            this.state = 171;
	            this.wallcommand();
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



	bootcommand() {
	    let localctx = new BootcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, tinymudParser.RULE_bootcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.match(tinymudParser.T__0);
	        this.state = 175;
	        this.player();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	chowncommand() {
	    let localctx = new ChowncommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, tinymudParser.RULE_chowncommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.match(tinymudParser.T__1);
	        this.state = 178;
	        this.object_();
	        this.state = 179;
	        this.match(tinymudParser.T__2);
	        this.state = 180;
	        this.player();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	createcommand() {
	    let localctx = new CreatecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, tinymudParser.RULE_createcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.match(tinymudParser.T__3);
	        this.state = 183;
	        this.name();
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 184;
	            this.match(tinymudParser.T__2);
	            this.state = 185;
	            this.cost();
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



	describecommand() {
	    let localctx = new DescribecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, tinymudParser.RULE_describecommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 188;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===6)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 189;
	        this.object_();
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 190;
	            this.match(tinymudParser.T__2);
	            this.state = 191;
	            this.description();
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



	digcommand() {
	    let localctx = new DigcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, tinymudParser.RULE_digcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 194;
	        this.match(tinymudParser.T__6);
	        this.state = 195;
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



	dumpcommand() {
	    let localctx = new DumpcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, tinymudParser.RULE_dumpcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.match(tinymudParser.T__7);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	failcommand() {
	    let localctx = new FailcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, tinymudParser.RULE_failcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 199;
	        this.match(tinymudParser.T__8);
	        this.state = 200;
	        this.name();
	        this.state = 203;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 201;
	            this.match(tinymudParser.T__2);
	            this.state = 202;
	            this.description();
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



	findcommand() {
	    let localctx = new FindcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, tinymudParser.RULE_findcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this.match(tinymudParser.T__9);
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 206;
	            this.name();
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



	forcecommand() {
	    let localctx = new ForcecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, tinymudParser.RULE_forcecommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(tinymudParser.T__10);
	        this.state = 210;
	        this.player();
	        this.state = 211;
	        this.match(tinymudParser.T__2);
	        this.state = 212;
	        this.command();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	linkcommand() {
	    let localctx = new LinkcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, tinymudParser.RULE_linkcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this.match(tinymudParser.T__11);
	        this.state = 215;
	        this.object_();
	        this.state = 216;
	        this.match(tinymudParser.T__2);
	        this.state = 220;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 217;
	            this.number();
	            break;

	        case 2:
	            this.state = 218;
	            this.dir_();
	            break;

	        case 3:
	            this.state = 219;
	            this.room();
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



	lockcommand() {
	    let localctx = new LockcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, tinymudParser.RULE_lockcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(tinymudParser.T__12);
	        this.state = 223;
	        this.object_();
	        this.state = 224;
	        this.match(tinymudParser.T__2);
	        this.state = 225;
	        this.key();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	namecommand() {
	    let localctx = new NamecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, tinymudParser.RULE_namecommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 227;
	        this.match(tinymudParser.T__13);
	        this.state = 228;
	        this.object_();
	        this.state = 229;
	        this.match(tinymudParser.T__2);
	        this.state = 230;
	        this.name();
	        this.state = 232;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 231;
	            this.password();
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



	newpassswordcommand() {
	    let localctx = new NewpassswordcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, tinymudParser.RULE_newpassswordcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this.match(tinymudParser.T__14);
	        this.state = 235;
	        this.player();
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 236;
	            this.match(tinymudParser.T__2);
	            this.state = 237;
	            this.password();
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



	ofailcommand() {
	    let localctx = new OfailcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, tinymudParser.RULE_ofailcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.match(tinymudParser.T__15);
	        this.state = 241;
	        this.object_();
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 242;
	            this.match(tinymudParser.T__2);
	            this.state = 243;
	            this.message();
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



	opencommand() {
	    let localctx = new OpencommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, tinymudParser.RULE_opencommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.match(tinymudParser.T__16);
	        this.state = 247;
	        this.dir_();
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===18) {
	            this.state = 248;
	            this.match(tinymudParser.T__17);
	            this.state = 249;
	            this.dir_();
	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 255;
	            this.match(tinymudParser.T__2);
	            this.state = 256;
	            this.number();
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



	osuccesscommand() {
	    let localctx = new OsuccesscommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, tinymudParser.RULE_osuccesscommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 260;
	        this.object_();
	        this.state = 263;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 261;
	            this.match(tinymudParser.T__2);
	            this.state = 262;
	            this.message();
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



	passwordcommand() {
	    let localctx = new PasswordcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, tinymudParser.RULE_passwordcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this.match(tinymudParser.T__20);
	        this.state = 266;
	        this.password();
	        this.state = 267;
	        this.match(tinymudParser.T__2);
	        this.state = 268;
	        this.password();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pcreatecommand() {
	    let localctx = new PcreatecommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, tinymudParser.RULE_pcreatecommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.match(tinymudParser.T__21);
	        this.state = 271;
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



	setcommand() {
	    let localctx = new SetcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, tinymudParser.RULE_setcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(tinymudParser.T__22);
	        this.state = 274;
	        this.object_();
	        this.state = 275;
	        this.match(tinymudParser.T__2);
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===24) {
	            this.state = 276;
	            this.match(tinymudParser.T__23);
	        }

	        this.state = 279;
	        this.flag();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	shutdowncommand() {
	    let localctx = new ShutdowncommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, tinymudParser.RULE_shutdowncommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.match(tinymudParser.T__24);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statscommand() {
	    let localctx = new StatscommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, tinymudParser.RULE_statscommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 283;
	        this.match(tinymudParser.T__25);
	        this.state = 284;
	        this.player();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	successcommand() {
	    let localctx = new SuccesscommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, tinymudParser.RULE_successcommand);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        _la = this._input.LA(1);
	        if(!(_la===27 || _la===28)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 287;
	        this.object_();
	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 288;
	            this.match(tinymudParser.T__2);
	            this.state = 289;
	            this.message();
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



	teleportcommand() {
	    let localctx = new TeleportcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, tinymudParser.RULE_teleportcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 292;
	        this.match(tinymudParser.T__28);
	        this.state = 296;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 293;
	            this.object_();
	            this.state = 294;
	            this.match(tinymudParser.T__2);

	        }
	        this.state = 298;
	        this.room();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	toadcommand() {
	    let localctx = new ToadcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, tinymudParser.RULE_toadcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(tinymudParser.T__29);
	        this.state = 301;
	        this.player();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unlinkcommand() {
	    let localctx = new UnlinkcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, tinymudParser.RULE_unlinkcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        this.match(tinymudParser.T__30);
	        this.state = 304;
	        this.dir_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unlockcommand() {
	    let localctx = new UnlockcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, tinymudParser.RULE_unlockcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(tinymudParser.T__31);
	        this.state = 307;
	        this.object_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wallcommand() {
	    let localctx = new WallcommandContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, tinymudParser.RULE_wallcommand);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(tinymudParser.T__32);
	        this.state = 310;
	        this.message();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 60, tinymudParser.RULE_action);
	    try {
	        this.state = 330;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 34:
	        case 35:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 312;
	            this.dropaction();
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 313;
	            this.examineaction();
	            break;
	        case 37:
	        case 38:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 314;
	            this.getaction();
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 315;
	            this.giveaction();
	            break;
	        case 40:
	        case 41:
	        case 42:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 316;
	            this.gotoaction();
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 317;
	            this.gripeaction();
	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 318;
	            this.helpaction();
	            break;
	        case 45:
	        case 46:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 319;
	            this.inventoryaction();
	            break;
	        case 47:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 320;
	            this.killaction();
	            break;
	        case 48:
	        case 49:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 321;
	            this.lookaction();
	            break;
	        case 50:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 322;
	            this.newsaction();
	            break;
	        case 51:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 323;
	            this.pageaction();
	            break;
	        case 52:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 324;
	            this.quitaction();
	            break;
	        case 53:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 325;
	            this.robaction();
	            break;
	        case 54:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 326;
	            this.sayaction();
	            break;
	        case 55:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 327;
	            this.scoreaction();
	            break;
	        case 56:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 328;
	            this.whisperaction();
	            break;
	        case 57:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 329;
	            this.whoaction();
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



	dropaction() {
	    let localctx = new DropactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, tinymudParser.RULE_dropaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        _la = this._input.LA(1);
	        if(!(_la===34 || _la===35)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 333;
	        this.object_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	examineaction() {
	    let localctx = new ExamineactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, tinymudParser.RULE_examineaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(tinymudParser.T__35);
	        this.state = 336;
	        this.object_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	getaction() {
	    let localctx = new GetactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, tinymudParser.RULE_getaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        _la = this._input.LA(1);
	        if(!(_la===37 || _la===38)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 339;
	        this.object_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	giveaction() {
	    let localctx = new GiveactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, tinymudParser.RULE_giveaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 341;
	        this.match(tinymudParser.T__38);
	        this.state = 342;
	        this.player();
	        this.state = 343;
	        this.match(tinymudParser.T__2);
	        this.state = 344;
	        this.pennies();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	gotoaction() {
	    let localctx = new GotoactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, tinymudParser.RULE_gotoaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 346;
	        _la = this._input.LA(1);
	        if(!(((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 7) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 347;
	        this.direction();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	gripeaction() {
	    let localctx = new GripeactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, tinymudParser.RULE_gripeaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 349;
	        this.match(tinymudParser.T__42);
	        this.state = 350;
	        this.message();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	helpaction() {
	    let localctx = new HelpactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, tinymudParser.RULE_helpaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 352;
	        this.match(tinymudParser.T__43);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	inventoryaction() {
	    let localctx = new InventoryactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, tinymudParser.RULE_inventoryaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        _la = this._input.LA(1);
	        if(!(_la===45 || _la===46)) {
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



	killaction() {
	    let localctx = new KillactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, tinymudParser.RULE_killaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.match(tinymudParser.T__46);
	        this.state = 357;
	        this.player();

	        this.state = 358;
	        this.match(tinymudParser.T__2);
	        this.state = 359;
	        this.cost();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lookaction() {
	    let localctx = new LookactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, tinymudParser.RULE_lookaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        _la = this._input.LA(1);
	        if(!(_la===48 || _la===49)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 362;
	        this.object_();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	newsaction() {
	    let localctx = new NewsactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, tinymudParser.RULE_newsaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.match(tinymudParser.T__49);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pageaction() {
	    let localctx = new PageactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, tinymudParser.RULE_pageaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.match(tinymudParser.T__50);
	        this.state = 367;
	        this.player();

	        this.state = 368;
	        this.match(tinymudParser.T__2);
	        this.state = 369;
	        this.message();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	quitaction() {
	    let localctx = new QuitactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 86, tinymudParser.RULE_quitaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 371;
	        this.match(tinymudParser.T__51);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	robaction() {
	    let localctx = new RobactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 88, tinymudParser.RULE_robaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 373;
	        this.match(tinymudParser.T__52);
	        this.state = 374;
	        this.player();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sayaction() {
	    let localctx = new SayactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 90, tinymudParser.RULE_sayaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(tinymudParser.T__53);
	        this.state = 377;
	        this.message();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scoreaction() {
	    let localctx = new ScoreactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 92, tinymudParser.RULE_scoreaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.match(tinymudParser.T__54);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whisperaction() {
	    let localctx = new WhisperactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 94, tinymudParser.RULE_whisperaction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.match(tinymudParser.T__55);
	        this.state = 382;
	        this.player();
	        this.state = 383;
	        this.match(tinymudParser.T__2);
	        this.state = 384;
	        this.message();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whoaction() {
	    let localctx = new WhoactionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 96, tinymudParser.RULE_whoaction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(tinymudParser.T__56);
	        this.state = 388;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===58) {
	            this.state = 387;
	            this.player();
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



	object_() {
	    let localctx = new Object_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 98, tinymudParser.RULE_object_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	player() {
	    let localctx = new PlayerContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 100, tinymudParser.RULE_player);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 102, tinymudParser.RULE_name);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 394;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 104, tinymudParser.RULE_description);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cost() {
	    let localctx = new CostContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 106, tinymudParser.RULE_cost);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.match(tinymudParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	key() {
	    let localctx = new KeyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 108, tinymudParser.RULE_key);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 400;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	password() {
	    let localctx = new PasswordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 110, tinymudParser.RULE_password);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	message() {
	    let localctx = new MessageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 112, tinymudParser.RULE_message);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 404;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dir_() {
	    let localctx = new Dir_Context(this, this._ctx, this.state);
	    this.enterRule(localctx, 114, tinymudParser.RULE_dir_);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	    this.enterRule(localctx, 116, tinymudParser.RULE_number);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 408;
	        this.match(tinymudParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	room() {
	    let localctx = new RoomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 118, tinymudParser.RULE_room);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 410;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	flag() {
	    let localctx = new FlagContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 120, tinymudParser.RULE_flag);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(tinymudParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pennies() {
	    let localctx = new PenniesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 122, tinymudParser.RULE_pennies);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.match(tinymudParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	direction() {
	    let localctx = new DirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 124, tinymudParser.RULE_direction);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 416;
	        this.match(tinymudParser.STRING);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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

tinymudParser.EOF = antlr4.Token.EOF;
tinymudParser.T__0 = 1;
tinymudParser.T__1 = 2;
tinymudParser.T__2 = 3;
tinymudParser.T__3 = 4;
tinymudParser.T__4 = 5;
tinymudParser.T__5 = 6;
tinymudParser.T__6 = 7;
tinymudParser.T__7 = 8;
tinymudParser.T__8 = 9;
tinymudParser.T__9 = 10;
tinymudParser.T__10 = 11;
tinymudParser.T__11 = 12;
tinymudParser.T__12 = 13;
tinymudParser.T__13 = 14;
tinymudParser.T__14 = 15;
tinymudParser.T__15 = 16;
tinymudParser.T__16 = 17;
tinymudParser.T__17 = 18;
tinymudParser.T__18 = 19;
tinymudParser.T__19 = 20;
tinymudParser.T__20 = 21;
tinymudParser.T__21 = 22;
tinymudParser.T__22 = 23;
tinymudParser.T__23 = 24;
tinymudParser.T__24 = 25;
tinymudParser.T__25 = 26;
tinymudParser.T__26 = 27;
tinymudParser.T__27 = 28;
tinymudParser.T__28 = 29;
tinymudParser.T__29 = 30;
tinymudParser.T__30 = 31;
tinymudParser.T__31 = 32;
tinymudParser.T__32 = 33;
tinymudParser.T__33 = 34;
tinymudParser.T__34 = 35;
tinymudParser.T__35 = 36;
tinymudParser.T__36 = 37;
tinymudParser.T__37 = 38;
tinymudParser.T__38 = 39;
tinymudParser.T__39 = 40;
tinymudParser.T__40 = 41;
tinymudParser.T__41 = 42;
tinymudParser.T__42 = 43;
tinymudParser.T__43 = 44;
tinymudParser.T__44 = 45;
tinymudParser.T__45 = 46;
tinymudParser.T__46 = 47;
tinymudParser.T__47 = 48;
tinymudParser.T__48 = 49;
tinymudParser.T__49 = 50;
tinymudParser.T__50 = 51;
tinymudParser.T__51 = 52;
tinymudParser.T__52 = 53;
tinymudParser.T__53 = 54;
tinymudParser.T__54 = 55;
tinymudParser.T__55 = 56;
tinymudParser.T__56 = 57;
tinymudParser.STRING = 58;
tinymudParser.NUMBER = 59;
tinymudParser.EOL = 60;
tinymudParser.WS = 61;

tinymudParser.RULE_prog = 0;
tinymudParser.RULE_line = 1;
tinymudParser.RULE_command = 2;
tinymudParser.RULE_bootcommand = 3;
tinymudParser.RULE_chowncommand = 4;
tinymudParser.RULE_createcommand = 5;
tinymudParser.RULE_describecommand = 6;
tinymudParser.RULE_digcommand = 7;
tinymudParser.RULE_dumpcommand = 8;
tinymudParser.RULE_failcommand = 9;
tinymudParser.RULE_findcommand = 10;
tinymudParser.RULE_forcecommand = 11;
tinymudParser.RULE_linkcommand = 12;
tinymudParser.RULE_lockcommand = 13;
tinymudParser.RULE_namecommand = 14;
tinymudParser.RULE_newpassswordcommand = 15;
tinymudParser.RULE_ofailcommand = 16;
tinymudParser.RULE_opencommand = 17;
tinymudParser.RULE_osuccesscommand = 18;
tinymudParser.RULE_passwordcommand = 19;
tinymudParser.RULE_pcreatecommand = 20;
tinymudParser.RULE_setcommand = 21;
tinymudParser.RULE_shutdowncommand = 22;
tinymudParser.RULE_statscommand = 23;
tinymudParser.RULE_successcommand = 24;
tinymudParser.RULE_teleportcommand = 25;
tinymudParser.RULE_toadcommand = 26;
tinymudParser.RULE_unlinkcommand = 27;
tinymudParser.RULE_unlockcommand = 28;
tinymudParser.RULE_wallcommand = 29;
tinymudParser.RULE_action = 30;
tinymudParser.RULE_dropaction = 31;
tinymudParser.RULE_examineaction = 32;
tinymudParser.RULE_getaction = 33;
tinymudParser.RULE_giveaction = 34;
tinymudParser.RULE_gotoaction = 35;
tinymudParser.RULE_gripeaction = 36;
tinymudParser.RULE_helpaction = 37;
tinymudParser.RULE_inventoryaction = 38;
tinymudParser.RULE_killaction = 39;
tinymudParser.RULE_lookaction = 40;
tinymudParser.RULE_newsaction = 41;
tinymudParser.RULE_pageaction = 42;
tinymudParser.RULE_quitaction = 43;
tinymudParser.RULE_robaction = 44;
tinymudParser.RULE_sayaction = 45;
tinymudParser.RULE_scoreaction = 46;
tinymudParser.RULE_whisperaction = 47;
tinymudParser.RULE_whoaction = 48;
tinymudParser.RULE_object_ = 49;
tinymudParser.RULE_player = 50;
tinymudParser.RULE_name = 51;
tinymudParser.RULE_description = 52;
tinymudParser.RULE_cost = 53;
tinymudParser.RULE_key = 54;
tinymudParser.RULE_password = 55;
tinymudParser.RULE_message = 56;
tinymudParser.RULE_dir_ = 57;
tinymudParser.RULE_number = 58;
tinymudParser.RULE_room = 59;
tinymudParser.RULE_flag = 60;
tinymudParser.RULE_pennies = 61;
tinymudParser.RULE_direction = 62;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(tinymudParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	EOL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(tinymudParser.EOL);
	    } else {
	        return this.getToken(tinymudParser.EOL, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitProg(this);
		}
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_line;
    }

	EOL() {
	    return this.getToken(tinymudParser.EOL, 0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	action() {
	    return this.getTypedRuleContext(ActionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLine(this);
		}
	}


}



class CommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_command;
    }

	bootcommand() {
	    return this.getTypedRuleContext(BootcommandContext,0);
	};

	chowncommand() {
	    return this.getTypedRuleContext(ChowncommandContext,0);
	};

	createcommand() {
	    return this.getTypedRuleContext(CreatecommandContext,0);
	};

	describecommand() {
	    return this.getTypedRuleContext(DescribecommandContext,0);
	};

	digcommand() {
	    return this.getTypedRuleContext(DigcommandContext,0);
	};

	dumpcommand() {
	    return this.getTypedRuleContext(DumpcommandContext,0);
	};

	failcommand() {
	    return this.getTypedRuleContext(FailcommandContext,0);
	};

	findcommand() {
	    return this.getTypedRuleContext(FindcommandContext,0);
	};

	forcecommand() {
	    return this.getTypedRuleContext(ForcecommandContext,0);
	};

	linkcommand() {
	    return this.getTypedRuleContext(LinkcommandContext,0);
	};

	lockcommand() {
	    return this.getTypedRuleContext(LockcommandContext,0);
	};

	namecommand() {
	    return this.getTypedRuleContext(NamecommandContext,0);
	};

	newpassswordcommand() {
	    return this.getTypedRuleContext(NewpassswordcommandContext,0);
	};

	ofailcommand() {
	    return this.getTypedRuleContext(OfailcommandContext,0);
	};

	opencommand() {
	    return this.getTypedRuleContext(OpencommandContext,0);
	};

	osuccesscommand() {
	    return this.getTypedRuleContext(OsuccesscommandContext,0);
	};

	passwordcommand() {
	    return this.getTypedRuleContext(PasswordcommandContext,0);
	};

	pcreatecommand() {
	    return this.getTypedRuleContext(PcreatecommandContext,0);
	};

	setcommand() {
	    return this.getTypedRuleContext(SetcommandContext,0);
	};

	shutdowncommand() {
	    return this.getTypedRuleContext(ShutdowncommandContext,0);
	};

	statscommand() {
	    return this.getTypedRuleContext(StatscommandContext,0);
	};

	successcommand() {
	    return this.getTypedRuleContext(SuccesscommandContext,0);
	};

	teleportcommand() {
	    return this.getTypedRuleContext(TeleportcommandContext,0);
	};

	toadcommand() {
	    return this.getTypedRuleContext(ToadcommandContext,0);
	};

	unlinkcommand() {
	    return this.getTypedRuleContext(UnlinkcommandContext,0);
	};

	unlockcommand() {
	    return this.getTypedRuleContext(UnlockcommandContext,0);
	};

	wallcommand() {
	    return this.getTypedRuleContext(WallcommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterCommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitCommand(this);
		}
	}


}



class BootcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_bootcommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterBootcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitBootcommand(this);
		}
	}


}



class ChowncommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_chowncommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterChowncommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitChowncommand(this);
		}
	}


}



class CreatecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_createcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	cost() {
	    return this.getTypedRuleContext(CostContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterCreatecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitCreatecommand(this);
		}
	}


}



class DescribecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_describecommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDescribecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDescribecommand(this);
		}
	}


}



class DigcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_digcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDigcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDigcommand(this);
		}
	}


}



class DumpcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_dumpcommand;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDumpcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDumpcommand(this);
		}
	}


}



class FailcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_failcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	description() {
	    return this.getTypedRuleContext(DescriptionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterFailcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitFailcommand(this);
		}
	}


}



class FindcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_findcommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterFindcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitFindcommand(this);
		}
	}


}



class ForcecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_forcecommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	command() {
	    return this.getTypedRuleContext(CommandContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterForcecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitForcecommand(this);
		}
	}


}



class LinkcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_linkcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	dir_() {
	    return this.getTypedRuleContext(Dir_Context,0);
	};

	room() {
	    return this.getTypedRuleContext(RoomContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLinkcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLinkcommand(this);
		}
	}


}



class LockcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_lockcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	key() {
	    return this.getTypedRuleContext(KeyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLockcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLockcommand(this);
		}
	}


}



class NamecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_namecommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	password() {
	    return this.getTypedRuleContext(PasswordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNamecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNamecommand(this);
		}
	}


}



class NewpassswordcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_newpassswordcommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	password() {
	    return this.getTypedRuleContext(PasswordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNewpassswordcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNewpassswordcommand(this);
		}
	}


}



class OfailcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_ofailcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterOfailcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitOfailcommand(this);
		}
	}


}



class OpencommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_opencommand;
    }

	dir_ = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Dir_Context);
	    } else {
	        return this.getTypedRuleContext(Dir_Context,i);
	    }
	};

	number() {
	    return this.getTypedRuleContext(NumberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterOpencommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitOpencommand(this);
		}
	}


}



class OsuccesscommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_osuccesscommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterOsuccesscommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitOsuccesscommand(this);
		}
	}


}



class PasswordcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_passwordcommand;
    }

	password = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PasswordContext);
	    } else {
	        return this.getTypedRuleContext(PasswordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPasswordcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPasswordcommand(this);
		}
	}


}



class PcreatecommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_pcreatecommand;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPcreatecommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPcreatecommand(this);
		}
	}


}



class SetcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_setcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	flag() {
	    return this.getTypedRuleContext(FlagContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterSetcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitSetcommand(this);
		}
	}


}



class ShutdowncommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_shutdowncommand;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterShutdowncommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitShutdowncommand(this);
		}
	}


}



class StatscommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_statscommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterStatscommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitStatscommand(this);
		}
	}


}



class SuccesscommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_successcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterSuccesscommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitSuccesscommand(this);
		}
	}


}



class TeleportcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_teleportcommand;
    }

	room() {
	    return this.getTypedRuleContext(RoomContext,0);
	};

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterTeleportcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitTeleportcommand(this);
		}
	}


}



class ToadcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_toadcommand;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterToadcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitToadcommand(this);
		}
	}


}



class UnlinkcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_unlinkcommand;
    }

	dir_() {
	    return this.getTypedRuleContext(Dir_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterUnlinkcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitUnlinkcommand(this);
		}
	}


}



class UnlockcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_unlockcommand;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterUnlockcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitUnlockcommand(this);
		}
	}


}



class WallcommandContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_wallcommand;
    }

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterWallcommand(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitWallcommand(this);
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
        this.ruleIndex = tinymudParser.RULE_action;
    }

	dropaction() {
	    return this.getTypedRuleContext(DropactionContext,0);
	};

	examineaction() {
	    return this.getTypedRuleContext(ExamineactionContext,0);
	};

	getaction() {
	    return this.getTypedRuleContext(GetactionContext,0);
	};

	giveaction() {
	    return this.getTypedRuleContext(GiveactionContext,0);
	};

	gotoaction() {
	    return this.getTypedRuleContext(GotoactionContext,0);
	};

	gripeaction() {
	    return this.getTypedRuleContext(GripeactionContext,0);
	};

	helpaction() {
	    return this.getTypedRuleContext(HelpactionContext,0);
	};

	inventoryaction() {
	    return this.getTypedRuleContext(InventoryactionContext,0);
	};

	killaction() {
	    return this.getTypedRuleContext(KillactionContext,0);
	};

	lookaction() {
	    return this.getTypedRuleContext(LookactionContext,0);
	};

	newsaction() {
	    return this.getTypedRuleContext(NewsactionContext,0);
	};

	pageaction() {
	    return this.getTypedRuleContext(PageactionContext,0);
	};

	quitaction() {
	    return this.getTypedRuleContext(QuitactionContext,0);
	};

	robaction() {
	    return this.getTypedRuleContext(RobactionContext,0);
	};

	sayaction() {
	    return this.getTypedRuleContext(SayactionContext,0);
	};

	scoreaction() {
	    return this.getTypedRuleContext(ScoreactionContext,0);
	};

	whisperaction() {
	    return this.getTypedRuleContext(WhisperactionContext,0);
	};

	whoaction() {
	    return this.getTypedRuleContext(WhoactionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterAction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitAction(this);
		}
	}


}



class DropactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_dropaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDropaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDropaction(this);
		}
	}


}



class ExamineactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_examineaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterExamineaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitExamineaction(this);
		}
	}


}



class GetactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_getaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGetaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGetaction(this);
		}
	}


}



class GiveactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_giveaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	pennies() {
	    return this.getTypedRuleContext(PenniesContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGiveaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGiveaction(this);
		}
	}


}



class GotoactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_gotoaction;
    }

	direction() {
	    return this.getTypedRuleContext(DirectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGotoaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGotoaction(this);
		}
	}


}



class GripeactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_gripeaction;
    }

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterGripeaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitGripeaction(this);
		}
	}


}



class HelpactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_helpaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterHelpaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitHelpaction(this);
		}
	}


}



class InventoryactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_inventoryaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterInventoryaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitInventoryaction(this);
		}
	}


}



class KillactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_killaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	cost() {
	    return this.getTypedRuleContext(CostContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterKillaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitKillaction(this);
		}
	}


}



class LookactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_lookaction;
    }

	object_() {
	    return this.getTypedRuleContext(Object_Context,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterLookaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitLookaction(this);
		}
	}


}



class NewsactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_newsaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNewsaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNewsaction(this);
		}
	}


}



class PageactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_pageaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPageaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPageaction(this);
		}
	}


}



class QuitactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_quitaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterQuitaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitQuitaction(this);
		}
	}


}



class RobactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_robaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterRobaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitRobaction(this);
		}
	}


}



class SayactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_sayaction;
    }

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterSayaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitSayaction(this);
		}
	}


}



class ScoreactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_scoreaction;
    }


	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterScoreaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitScoreaction(this);
		}
	}


}



class WhisperactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_whisperaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	message() {
	    return this.getTypedRuleContext(MessageContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterWhisperaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitWhisperaction(this);
		}
	}


}



class WhoactionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_whoaction;
    }

	player() {
	    return this.getTypedRuleContext(PlayerContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterWhoaction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitWhoaction(this);
		}
	}


}



class Object_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_object_;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterObject_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitObject_(this);
		}
	}


}



class PlayerContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_player;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPlayer(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPlayer(this);
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
        this.ruleIndex = tinymudParser.RULE_name;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitName(this);
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
        this.ruleIndex = tinymudParser.RULE_description;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDescription(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDescription(this);
		}
	}


}



class CostContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_cost;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterCost(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitCost(this);
		}
	}


}



class KeyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_key;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterKey(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitKey(this);
		}
	}


}



class PasswordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_password;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPassword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPassword(this);
		}
	}


}



class MessageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_message;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitMessage(this);
		}
	}


}



class Dir_Context extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_dir_;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDir_(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDir_(this);
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
        this.ruleIndex = tinymudParser.RULE_number;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterNumber(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitNumber(this);
		}
	}


}



class RoomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_room;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterRoom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitRoom(this);
		}
	}


}



class FlagContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_flag;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterFlag(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitFlag(this);
		}
	}


}



class PenniesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_pennies;
    }

	NUMBER() {
	    return this.getToken(tinymudParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterPennies(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitPennies(this);
		}
	}


}



class DirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = tinymudParser.RULE_direction;
    }

	STRING() {
	    return this.getToken(tinymudParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.enterDirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof tinymudListener ) {
	        listener.exitDirection(this);
		}
	}


}




tinymudParser.ProgContext = ProgContext; 
tinymudParser.LineContext = LineContext; 
tinymudParser.CommandContext = CommandContext; 
tinymudParser.BootcommandContext = BootcommandContext; 
tinymudParser.ChowncommandContext = ChowncommandContext; 
tinymudParser.CreatecommandContext = CreatecommandContext; 
tinymudParser.DescribecommandContext = DescribecommandContext; 
tinymudParser.DigcommandContext = DigcommandContext; 
tinymudParser.DumpcommandContext = DumpcommandContext; 
tinymudParser.FailcommandContext = FailcommandContext; 
tinymudParser.FindcommandContext = FindcommandContext; 
tinymudParser.ForcecommandContext = ForcecommandContext; 
tinymudParser.LinkcommandContext = LinkcommandContext; 
tinymudParser.LockcommandContext = LockcommandContext; 
tinymudParser.NamecommandContext = NamecommandContext; 
tinymudParser.NewpassswordcommandContext = NewpassswordcommandContext; 
tinymudParser.OfailcommandContext = OfailcommandContext; 
tinymudParser.OpencommandContext = OpencommandContext; 
tinymudParser.OsuccesscommandContext = OsuccesscommandContext; 
tinymudParser.PasswordcommandContext = PasswordcommandContext; 
tinymudParser.PcreatecommandContext = PcreatecommandContext; 
tinymudParser.SetcommandContext = SetcommandContext; 
tinymudParser.ShutdowncommandContext = ShutdowncommandContext; 
tinymudParser.StatscommandContext = StatscommandContext; 
tinymudParser.SuccesscommandContext = SuccesscommandContext; 
tinymudParser.TeleportcommandContext = TeleportcommandContext; 
tinymudParser.ToadcommandContext = ToadcommandContext; 
tinymudParser.UnlinkcommandContext = UnlinkcommandContext; 
tinymudParser.UnlockcommandContext = UnlockcommandContext; 
tinymudParser.WallcommandContext = WallcommandContext; 
tinymudParser.ActionContext = ActionContext; 
tinymudParser.DropactionContext = DropactionContext; 
tinymudParser.ExamineactionContext = ExamineactionContext; 
tinymudParser.GetactionContext = GetactionContext; 
tinymudParser.GiveactionContext = GiveactionContext; 
tinymudParser.GotoactionContext = GotoactionContext; 
tinymudParser.GripeactionContext = GripeactionContext; 
tinymudParser.HelpactionContext = HelpactionContext; 
tinymudParser.InventoryactionContext = InventoryactionContext; 
tinymudParser.KillactionContext = KillactionContext; 
tinymudParser.LookactionContext = LookactionContext; 
tinymudParser.NewsactionContext = NewsactionContext; 
tinymudParser.PageactionContext = PageactionContext; 
tinymudParser.QuitactionContext = QuitactionContext; 
tinymudParser.RobactionContext = RobactionContext; 
tinymudParser.SayactionContext = SayactionContext; 
tinymudParser.ScoreactionContext = ScoreactionContext; 
tinymudParser.WhisperactionContext = WhisperactionContext; 
tinymudParser.WhoactionContext = WhoactionContext; 
tinymudParser.Object_Context = Object_Context; 
tinymudParser.PlayerContext = PlayerContext; 
tinymudParser.NameContext = NameContext; 
tinymudParser.DescriptionContext = DescriptionContext; 
tinymudParser.CostContext = CostContext; 
tinymudParser.KeyContext = KeyContext; 
tinymudParser.PasswordContext = PasswordContext; 
tinymudParser.MessageContext = MessageContext; 
tinymudParser.Dir_Context = Dir_Context; 
tinymudParser.NumberContext = NumberContext; 
tinymudParser.RoomContext = RoomContext; 
tinymudParser.FlagContext = FlagContext; 
tinymudParser.PenniesContext = PenniesContext; 
tinymudParser.DirectionContext = DirectionContext; 

// --- Dynamic Universal Module Wrapper ---
if (typeof exports === 'object' && typeof module === 'object') {
    module.exports = { CPP14Lexer };
} else if (typeof window !== 'undefined') {
    window.CPP14Lexer = CPP14Lexer;
} else if (typeof self !== 'undefined') {
    self.CPP14Lexer = CPP14Lexer;
}
